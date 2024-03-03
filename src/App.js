import React, { useState } from "react";
import axios from "axios";

function App() {
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [repos, setRepos] = useState([]);

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      fetchData();
    }
  };

  const fetchRepos = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}/repos`,);
      setRepos(response.data);
    } catch (error) {
      console.error("Error fetching repositories:", error);
    }
  };

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    setProfile(null);

    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      setProfile(response.data);
      fetchRepos();
    } catch (error) {
      setError("User does not exist");
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
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <input type="text" value={username} placeholder="Enter a GitHub username" onChange={(e) => setUsername(e.target.value)}
        onKeyDown={handleKeyDown}
        className="border border-b-2 w-fit mb-4 px-4 py-2 rounded-lg border-gray-300 focus:border-blue-500 focus:outline-none focus:shadow-outline-blue"
      />
      <div className="flex fl</div>ex-row  content-center">
        <button onClick={fetchData} className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Fetch Data</button>
        <button onClick={clearData} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 ml-2 px-4 rounded">Clear</button>
      </div>
      {loading && (<div className="animate-spin mx-auto w-8 h-8 border-2 rounded-full border-blue-500"></div>)}
      {error && (<p className="text-black"> Error fetching data from GitHub API: {error.message}</p>)}
      {profile && (
        <div className="border bg-slate-200 p-10 rounded-2xl mt-4">
          <div className="flex flex-col items-center sm:flex-row sm:items-start mt-4">
            <img src={profile.avatar_url} alt={`${username}'s avatar`} className="w-32 h-32  mr-4 p-1"
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
              {profile.bio && <p>Bio: {profile.bio}</p>}
              {profile.followers && <p>Followers: {profile.followers}</p>}
              {<p>Following: {profile.following}</p>}
              {profile.public_repos && (<p>Public Repos: {profile.public_repos}</p>)}
              {profile.location && <p>Location: {profile.location}</p>}
              {profile.blog && (
                <p>Blog:{" "}
                  <a className="text-blue-700 text-lg underline" href={profile.blog} target="_blank" rel="noopener noreferrer">
                    {profile.blog}</a>
                </p>
              )}
              {profile.twitter_username && (
                <p>Twitter:{" "}
                  <a className="text-blue-700 text-lg underline" href={`https://twitter.com/${profile.twitter_username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {profile.twitter_username}
                  </a>
                </p>
              )}

              {profile.html_url && (
                <p>
                  GitHub URL:{" "}
                  <a
                    className="text-blue-700 text-lg underline"
                    href={profile.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {profile.html_url}
                  </a>
                </p>
              )}
              {profile.public_gists && (<p>Public Gists: {profile.public_gists}</p>)}
              {profile.created_at && (<p>Created At: {new Date(profile.created_at).toLocaleString()}</p>)}
              {profile.updated_at && (<p>Updated At: {new Date(profile.updated_at).toLocaleString()}</p>)}

              {repos.length > 0 && (
                <div className="mt-4">
                  <h2 className="text-2xl font-bold text-indigo-500">
                    Repositories
                  </h2>
                  <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
                    {repos.slice(0, 6).map((repo) => (
                      <div
                        key={repo.id}
                        className="shadow-md rounded-lg overflow-hidden bg-gray-100 hover:shadow-lg"
                      >
                        <div className="p-4">
                          <h3 className="text-lg font-bold text-indigo-900">{repo.name}</h3>
                          <p className="text-gray-600">{repo.description}</p>
                        </div>
                        <div className="px-4 pt-2 pb-4 border-t border-gray-200">
                          <p>
                            <a
                              className="text-blue-700 text-lg underline"
                              href={repo.html_url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {repo.html_url}
                            </a>
                          </p>
                        </div>
                        <ul className="flex flex-wrap px-4 py-2 text-gray-600">
                          <li className="mr-4 text-indigo-700">Language: {repo.language}</li>
                          <li className="mr-4 text-green-500">Stars: {repo.stargazers_count}</li>
                          <li className="mr-4 text-purple-500">Forks: {repo.forks_count}</li>
                          <li className="mr-4 text-teal-500">Watchers: {repo.watchers_count}</li>
                          <li>Open Issues: {repo.open_issues_count}</li>
                        </ul>
                        <div className="px-4 py-2 flex justify-between text-gray-500 text-sm">
                          <p>Created At: {new Date(repo.created_at).toLocaleString()}</p>
                          <p>Updated At: {new Date(repo.updated_at).toLocaleString()}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}



            </div>
          </div>
        </div>
      )
      }
    </div >
  );
}

export default App;
