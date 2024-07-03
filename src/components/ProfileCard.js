// src/components/ProfileCard.js
import React from 'react';
import { FaMapMarkerAlt, FaTwitter, FaLink, FaBuilding } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import './ProfileCard.css';

function ProfileCard({ profileData }) {
  const { themeMode } = useTheme();

  return (
    <div className={`profile-card ${themeMode}`}>
      <div className="profile-header">
        <img src={profileData.avatar_url} alt="Profile Pic" className="avatar" />
        <div className="profile-info">
          <h2>{profileData.name}</h2>
          <p>@{profileData.login}</p>
          <p>Joined {new Date(profileData.created_at).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })}</p>
        </div>
      </div>
      <p>{profileData.bio || 'No bio available'}</p>
      <div className="stats">
        <div>
          <p>Repos</p>
          <p>{profileData.public_repos}</p>
        </div>
        <div>
          <p>Followers</p>
          <p>{profileData.followers}</p>
        </div>
        <div>
          <p>Following</p>
          <p>{profileData.following}</p>
        </div>
      </div>
      <div className="links">
        <p><FaMapMarkerAlt /> {profileData.location || 'Not Available'}</p>
        <p><FaTwitter /> {profileData.twitter_username ? `@${profileData.twitter_username}` : 'Not Available'}</p>
        <p><FaLink /> <a href={profileData.blog} target="_blank" rel="noopener noreferrer">{profileData.blog || 'Not Available'}</a></p>
        <p><FaBuilding /> {profileData.company || 'Not Available'}</p>
      </div>
    </div>
  );
}

export default ProfileCard;
