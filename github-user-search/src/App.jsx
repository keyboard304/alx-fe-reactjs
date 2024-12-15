import React, { useState } from "react";
import axios from "axios";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = async () => {
    setError(null); // Reset previous errors

    try {
      const response = await axios.get(
        `https://api.github.com/users/${searchQuery}`,
        {
          headers: {
            Authorization: `token ${process.env.REACT_APP_GITHUB_API_KEY}`, // Access API key
          },
        }
      );
      setUserData(response.data);
    } catch (err) {
      setError("User not found!");
    }
  };

  return (
    <div className="App">
      <h1>GitHub User Search</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search GitHub username"
      />
      <button onClick={handleSearch}>Search</button>

      {error && <p>{error}</p>}

      {userData && (
        <div>
          <h2>{userData.login}</h2>
          <img src={userData.avatar_url} alt={userData.login} width="100" />
          <p>Followers: {userData.followers}</p>
          <p>Following: {userData.following}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
