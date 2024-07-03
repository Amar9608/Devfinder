// src/components/SearchInput.js
import React, { useState } from 'react';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';
import ProfileCard from './ProfileCard';
import { useTheme } from '../context/ThemeContext';
import './SearchInput.css';

function SearchInput() {
  const [username, setUsername] = useState('');
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { themeMode } = useTheme();

  const fetchProfile = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setProfileData(response.data);
    } catch (err) {
      setError('Profile not found');
      setProfileData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    fetchProfile();
  };

  return (
    <div className="search-container">
      <div className="search-bar">
        <FaSearch />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Search GitHub username..."
          className={themeMode}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {profileData && <ProfileCard profileData={profileData} />}
    </div>
  );
}

export default SearchInput;
