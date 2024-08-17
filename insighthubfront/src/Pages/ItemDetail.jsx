import { useEffect, useState } from "react";
import axios from "../api/axios";
import { useParams, useNavigate } from "react-router-dom";
import { FaThumbsUp, FaComment, FaShare } from "react-icons/fa";

const ItemDetail = () => {
  const { id, type } = useParams();
  const [item, setItem] = useState(null);
  const [likes, setLikes] = useState([]);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [liked, setLiked] = useState(false);
  const [username, setUsername] = useState("");
  const [showComments, setShowComments] = useState(false);
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/signin");
      return;
    }

    const fetchUsername = async () => {
      try {
        const { data } = await axios.get(`/auth/users/${userId}`);
        setUsername(data.user.firstName + " " + data.user.lastName);
      } catch (error) {
        console.error("Error fetching username:", error);
      }
    };

    const fetchItem = async () => {
      try {
        const { data } = await axios.get(`/${type}/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setItem(data);
      } catch (error) {
        console.error("Error fetching item details:", error);
      }
    };

    const fetchLikes = async () => {
      try {
        const { data } = await axios.get(`/interactions/${id}`);
        if (Array.isArray(data)) {
          setLikes(data);
          const userLiked = data.find((like) => like.userId === userId);
          setLiked(userLiked !== undefined);
        } else {
          console.error("Invalid likes data:", data);
        }
      } catch (error) {
        console.error("Error fetching likes:", error);
      }
    };

    const fetchComments = async () => {
      try {
        const { data } = await axios.get(`/comments/${id}`);
        setComments(data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchUsername();
    fetchItem();
    fetchLikes();
    fetchComments();
  }, [id, type, userId, token, navigate]);

  const handleLike = async () => {
    try {
      if (liked) {
        await axios.delete(`/interactions/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: { userId },
        });
        setLiked(false);
      } else {
        await axios.post(`/interactions/${id}`, {
          userId,
          username,
        });
        setLiked(true);
      }
      const { data } = await axios.get(`/interactions/${id}`);
      setLikes(data);
    } catch (error) {
      console.error("Error handling like:", error);
    }
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`/comments/${id}`, {
        userId,
        username,
        content: newComment,
      });
      setNewComment("");
      const { data } = await axios.get(`/comments/${id}`);
      setComments(data);
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

  const toggleComments = () => setShowComments(!showComments);

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: item.title,
          text: item.description,
          url: window.location.href,
        })
        .then(() => console.log("Share successful"))
        .catch((error) => console.error("Error sharing:", error));
    } else {
      console.log("Web Share API not supported");
    }
  };

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative mt-12">
      <img
        src={`http://localhost:3000/uploads/${item.image}`}
        alt={item.title}
        className="w-[500px] h-[300px] float-left mr-4 mb-4"
      />
      <div>
        <h1 className="text-2xl font-sans mb-4 text-justify">{item.title}</h1>
        <p className="text-md text-justify">{item.description}</p>
        <div className="flex items-center mt-3 ml-0 relative space-x-4">
          <FaThumbsUp
            className={`text-xl cursor-pointer ${liked ? "text-blue-500" : ""}`}
            onClick={handleLike}
          />
          <span className="text-md cursor-pointer" onClick={toggleComments}>
            {likes.length} likes
          </span>
          <FaComment
            className="text-xl cursor-pointer"
            onClick={toggleComments}
          />
          <FaShare className="text-xl cursor-pointer" onClick={handleShare} />
        </div>

        {showComments && (
          <div className="mt-6">
            <form onSubmit={handleCommentSubmit}>
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="Add a comment"
              />
              <button
                type="submit"
                className="mt-2 p-2 bg-blue-500 text-white rounded"
              >
                Post Comment
              </button>
            </form>
            <div className="mt-4">
              {comments.map((comment, index) => (
                <div key={index} className="p-2 border-b">
                  <p className="font-sans ml-0 font-semibold text-xl">
                    {comment.username.toUpperCase()}
                  </p>
                  <p>{comment.content}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
