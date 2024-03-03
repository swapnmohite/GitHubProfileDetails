import React, { useState } from "react";
import axios from "axios";

function App() {

  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      fetchData();
    }
  };
  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      setProfile(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const clearData = () => {
    setUsername("");
    setProfile(null);
    setError(null);
  };

  return (

    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-green-400 to-blue-500 ">
      <input
        type="text"
        value={username}
        placeholder="Enter a GitHub username"
        onChange={(e) => setUsername(e.target.value)}
        onKeyDown={handleKeyDown}
        className="border border-b-2 w-fit mb-4 px-4 py-2 rounded-lg border-gray-300 focus:border-blue-500 focus:outline-none focus:shadow-outline-blue"
      />
      <div className="flex flex-row  content-center">

        <button
          onClick={fetchData}
          className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Fetch Data
        </button>
        <button
          onClick={clearData}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 ml-2 px-4 rounded"
        >
          Clear
        </button>
      </div>

      {loading && <p>Loading...</p>}

      {error && (
        <p className="text-red-500">
          Error fetching data from GitHub API: {error.message}
        </p>
      )}

      {profile && (
        <div className="border bg-slate-200 p-10 rounded-2xl mt-4">
          <div className="flex flex-col items-center sm:flex-row sm:items-start mt-4">
            <img
              src={profile.avatar_url}
              alt={`${username}'s avatar`}
              className="w-32 h-32  mr-4 p-1"
              style={{ border: "2px solid black", borderRadius: "50%" }}
            />
            <div>
              <h2 className="text-2xl font-bold underline decoration-indigo-500">
                {profile.login}
              </h2>
              {profile.name && <p>Name: {profile.name}</p>}
              {profile.company && <p>Company: {profile.company}</p>}
              {profile.email && <p>Email: {profile.email}</p>}
              {profile.hireable && <p>Hireable: Yes</p>}
              {profile.bio && (<p>Bio: {profile.bio}</p>)}
              {profile.followers && <p>Followers: {profile.followers}</p>}
              {<p>Following: {profile.following}</p>}
              {profile.public_repos && <p>Public Repos: {profile.public_repos}</p>}
              {profile.location && <p>Location: {profile.location}</p>}
              {profile.blog && <p>Blog: {profile.blog}</p>}
              {profile.twitter_username && <p>Twitter: {profile.twitter_username}</p>}
              {profile.html_url && <p>GitHub URL: {profile.html_url}</p>}
              {profile.public_gists && <p>Public Gists: {profile.public_gists}</p>}
              {profile.created_at && <p>Created At: {new Date(profile.created_at).toLocaleString()}</p>}
              {profile.updated_at && <p>Updated At: {new Date(profile.updated_at).toLocaleString()}</p>}

            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;