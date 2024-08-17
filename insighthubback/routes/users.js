const router = require("express").Router();
const { User, validate } = require("../models/user");
const bcrypt = require("bcrypt");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const LinkedInStrategy = require("passport-linkedin-oauth2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
require("dotenv").config();
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, cb) => {
      try {
        console.log("Google Profile:", profile);
        const user = await User.findOne({ email: profile.emails[0].value });
        if (user) return cb(null, user);
        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(profile.id, salt);
        const newUser = new User({
          email: profile.emails[0].value,
          name: profile.displayName,
          password: hashPassword,
        });
        await newUser.save();
        return cb(null, newUser);
      } catch (error) {
        return cb(error);
      }
    }
  )
);

passport.use(
  new LinkedInStrategy(
    {
      clientID: process.env.LINKEDIN_CLIENT_ID,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
      callbackURL: "/auth/linkedin/callback",
    },
    async (accessToken, refreshToken, profile, cb) => {
      try {
        console.log("LinkedIn Profile:", profile);
        const user = await User.findOne({ email: profile.emails[0].value });
        if (user) return cb(null, user);
        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(profile.id, salt);
        const newUser = new User({
          email: profile.emails[0].value,
          name: profile.firstName + " " + profile.lastName,
          password: hashPassword,
        });
        await newUser.save();
        return cb(null, newUser);
      } catch (error) {
        return cb(error);
      }
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: "/auth/facebook/callback",
      profileFields: ["id", "emails", "name"],  
    },
    async (accessToken, refreshToken, profile, cb) => {
      try {
        console.log("Facebook Profile:", profile);
        const email = profile.emails ? profile.emails[0].value : null;
        if (!email) {
          return cb(
            new Error("Your Facebook account doesn't have an email associated")
          );
        }
        const user = await User.findOne({ email });
        if (user) return cb(null, user);
        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(profile.id, salt);
        const newUser = new User({
          email,
          name: `${profile.name.givenName} ${profile.name.familyName}`,
          password: hashPassword,
        });
        await newUser.save();
        return cb(null, newUser);
      } catch (error) {
        return cb(error);
      }
    }
  )
);
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);
router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    res.json({
      message: "Successfully authenticated with Google",
      user: req.user,
    });
  }
);

router.get(
  "/auth/linkedin",
  passport.authenticate("linkedin", {
    scope: ["r_emailaddress", "r_liteprofile"],
  })
);
router.get(
  "/auth/linkedin/callback",
  passport.authenticate("linkedin", { failureRedirect: "/login" }),
  (req, res) => {
    res.json({
      message: "Successfully authenticated with LinkedIn",
      user: req.user,
    });
  }
);

router.get(
  "/auth/facebook",
  passport.authenticate("facebook", { scope: ["email"] })
);
router.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", { failureRedirect: "/login" }),
  (req, res) => {
    res.json({
      message: "Successfully authenticated with Facebook",
      user: req.user,
    });
  }
);

router.post("/", async (req, res) => {
  try {
    console.log("Request Body:", req.body);
    const { error } = validate(req.body);
    if (error)
      return res.status(400).json({ message: error.details[0].message });

    const user = await User.findOne({ email: req.body.email });
    if (user)
      return res
        .status(409)
        .json({ message: "User with given email already exists" });

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({ ...req.body, password: hashPassword });
    await newUser.save();
    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
