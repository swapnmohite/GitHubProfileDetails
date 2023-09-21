import React, { useState } from 'react';
import axios from 'axios';

const GithubProfile = () => {
    const [username, setUsername] = useState('');
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            setProfile(response.data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center">
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border border-b-2 w-full mb-4 px-4 py-2 rounded-lg border-gray-300 focus:border-blue-500 focus:outline-none focus:shadow-outline-blue"
            />
            <button
                onClick={fetchData}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Fetch Data
            </button>
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">Error fetching data from GitHub API: {error.message}</p>}
            {profile && (
                <div className='border bg-slate-200 p-10 rounded-2xl'>


                    <div className="flex flex-col items-center sm:flex-row sm:items-start mt-4">
                        <img src={profile.avatar_url} alt={`${username}'s avatar`} className="w-32 h-32  mr-4 p-1" style={{ border: "2px solid black", borderRadius: "50%" }} />
                        <div>
                            <h2 className="text-2xl font-bold underline decoration-indigo-500">{profile.login}</h2>
                            {profile.name && <p>Name: {profile.name}</p>}
                            {profile.company && <p>Company: {profile.company}</p>}
                            {profile.email && <p>Email: {profile.email}</p>}
                            {profile.hireable && <p>Hireable: Yes</p>}
                            {profile.bio && <p className="text-gray-700">Bio: {profile.bio}</p>}
                            <p>Followers: {profile.followers}</p>
                            <p>Following: {profile.following}</p>
                            <p>Public Repos: {profile.public_repos}</p>
                            <p>Location: {profile.location}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GithubProfile;
