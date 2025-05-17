import React, { useState } from "react";
import styles from "./Community.module.css";

const Community = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: "Helena",
      time: "3 min ago",
      image: "https://retailinsider.b-cdn.net/wp-content/uploads/2023/03/Exterior-1.jpeg",
      text: "Goodwill just opened a donation center in Kitchener ON!",
      likes: 21,
      comments: ["That's awesome!", "Love to see it!"],
    },
    {
      id: 2,
      user: "Daniel",
      time: "2 hrs ago",
      text: "Woah! I’m gonna try that out!",
      likes: 6,
      comments: ["Do it!", "Let us know how it goes!"]
    },
  ]);

  const [newPostText, setNewPostText] = useState("");

  const handlePostSubmit = () => {
    if (newPostText.trim()) {
      const newPost = {
        id: posts.length + 1,
        user: "You",
        time: "Just now",
        text: newPostText,
        likes: 0,
        comments: [],
      };
      setPosts([newPost, ...posts]);
      setNewPostText("");

      localStorage.setitem("postSubmitted", "true");
    }
  };

  const handleLike = (postId) => {
    setPosts(posts.map(post =>
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  const handleAddComment = (postId, commentText) => {
    if (commentText.trim()) {
      setPosts(posts.map(post =>
        post.id === postId ? { ...post, comments: [...post.comments, commentText] } : post
      ));
    }
  };

  return (
    <div className={styles.community}>
      <h2 className={styles.header}>Community Feed</h2>

      <div className={styles.postForm}>
        <textarea
          className={styles.textarea}
          value={newPostText}
          placeholder="What's on your mind?"
          onChange={(e) => setNewPostText(e.target.value)}
        />
        <button className={styles.postButton} onClick={handlePostSubmit}>
          Post
        </button>
      </div>

      {posts.map((post) => (
        <div key={post.id} className={styles.post}>
          <div className={styles.postHeader}>
            <strong>{post.user}</strong> <span>{post.time}</span>
          </div>
          {post.image && (
            <img src={post.image} alt="post" className={styles.postImage} />
          )}
          <p>{post.text}</p>
          <div className={styles.reactions}>
            <button onClick={() => handleLike(post.id)} className={styles.iconButton}>
              ❤️ {post.likes} likes
            </button>
          </div>
          <div className={styles.commentsSection}>
            <h4>Comments</h4>
            <ul>
              {post.comments.map((comment, index) => (
                <li key={index} className={styles.commentItem}>{comment}</li>
              ))}
            </ul>
            <CommentForm onSubmit={(text) => handleAddComment(post.id, text)} />
          </div>
        </div>
      ))}
    </div>
  );
};

const CommentForm = ({ onSubmit }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(comment);
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.commentForm}>
      <input
        type="text"
        placeholder="Add a comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className={styles.commentInput}
      />
      <button type="submit" className={styles.commentButton}>Post</button>
    </form>
  );
};

export default Community;
