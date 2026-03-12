import React from "react";
import Card from "react-bootstrap/Card";
import avatar from "../../Assets/avatar.jpeg";

function ProfileCard() {
  return (
    <div className="profile-card">
      <Card className="profile-card-view">
        <div className="profile-image-container">
          <img 
            src={avatar} 
            alt="Abdurashid Fattokhov" 
            className="profile-image-rectangular"
          />
        </div>
        
        <div className="profile-info">
          <h3 className="profile-name">Abdurashid Fattokhov</h3>
          <p className="profile-role">AI Engineer</p>
          
          <div className="profile-details">
            <div className="profile-detail-item">
              <span className="detail-label">Education</span>
              <span className="detail-value">Brunel University London</span>
            </div>
            
            <div className="profile-detail-item">
              <span className="detail-label">Location</span>
              <span className="detail-value">London, UK</span>
            </div>
            
            <div className="profile-detail-item">
              <span className="detail-label">Focus</span>
              <span className="detail-value">Building AI systems for education</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default ProfileCard;