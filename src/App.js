import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [newPost, setNewPost] = useState({
    title: '',
    body: '',
    userId: null,
  });

  // Fetch Users
  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch (err) {
      setError('Failed to fetch users');
    }
    setLoading(false);
  };

  // Create Post
  const createPost = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
      setPosts([response.data]);
    } catch (err) {
      setError('Failed to create post');
    }
    setLoading(false);
  };

  // Fetch Comments by Post ID
  const fetchComments = async (postId) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
      setComments(response.data);
    } catch (err) {
      setError('Failed to fetch comments');
    }
    setLoading(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">API Chaining Dashboard</h1>

      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={fetchUsers}>
        Fetch Users
      </button>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {users.length > 0 && (
        <div>
          <h2 className="text-xl mt-4">Select a User:</h2>
          <select
            onChange={(e) => setSelectedUserId(e.target.value)}
            className="mt-2 p-2 border rounded">
            <option value="">Select User</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>
      )}

      {selectedUserId && (
        <div className="mt-4">
          <h2 className="text-xl">Create a New Post</h2>
          <input
            type="text"
            placeholder="Post Title"
            value={newPost.title}
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value, userId: selectedUserId })}
            className="mt-2 p-2 border rounded w-full"
          />
          <textarea
            placeholder="Post Body"
            value={newPost.body}
            onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
            className="mt-2 p-2 border rounded w-full"
          ></textarea>
          <button className="bg-green-500 text-white px-4 py-2 rounded mt-2" onClick={createPost}>
            Create Post
          </button>
        </div>
      )}

      {posts.length > 0 && (
        <div>
          <h2 className="text-xl mt-4">Posts</h2>
          {posts.map((post) => (
            <div key={post.id} className="p-4 border rounded mt-2">
              <h3 className="font-bold">{post.title}</h3>
              <p>{post.body}</p>
              <button
                className="bg-yellow-500 text-white px-4 py-2 rounded mt-2"
                onClick={() => fetchComments(post.id)}>
                Fetch Comments
              </button>
            </div>
          ))}
        </div>
      )}

      {comments.length > 0 && (
        <div>
          <h2 className="text-xl mt-4">Comments</h2>
          {comments.map((comment) => (
            <div key={comment.id} className="p-2 border rounded mt-2">
              <h4 className="font-bold">{comment.name}</h4>
              <p>{comment.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;

