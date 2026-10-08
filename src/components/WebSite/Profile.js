import React from "react";
import home from "../images/Home Images/footer_home.png";
import explore from "../images/Home Images/footer_explore.png";
import reels from "../images/Home Images/footer_reels.png";
import heart from "../images/Home Images/heart.png";
import footer_profile from "../images/Home Images/footer_profile.png";
import plus from '../images/Profile Images/plus.png';
import post1 from '../images/Profile Images/post1.png';
import post2 from '../images/Profile Images/post2.png';
import post3 from '../images/Profile Images/post3.png';
import post4 from '../images/Profile Images/post4.png';
import post5 from '../images/Profile Images/post5.png';
import post6 from '../images/Profile Images/post6.png';
import post7 from '../images/Profile Images/post7.png';
import post8 from '../images/Profile Images/post8.png';
import post9 from '../images/Profile Images/post9.png';
import setka from '../images/Profile Images/setka.png';
import sobachka from '../images/Profile Images/sobachka.png';
import subs1 from '../images/Profile Images/subs1.png';
import subs2 from '../images/Profile Images/subs2.png';
import subs3 from '../images/Profile Images/subs3.png';
import subs4 from '../images/Profile Images/subs4.png';
import subs5 from '../images/Profile Images/subs5.png';
import lists from '../images/Profile Images/lists.png';
import main_photo from '../images/Profile Images/main_photo.png';
import person_logo from '../images/Profile Images/person_logo.png';
import cinema_logo from '../images/Profile Images/cinema_logo.png';


class Profile extends React.Component {
    render () {
        return(
        <div className="profile-container">

      <header className="profile-header">
        <div className="profile-username-section">
          <span className="lock-icon">🔒</span>
          <h2 className="username">maya.travels</h2>
          <span className="dropdown-arrow">⌄</span>
        </div>
        <div className="header-icons">
          <span className="icon-at">@</span>
          <img src={plus} alt="Create" className="header-icon" />
          <img src={lists} alt="Menu" className="header-icon" />
        </div>
      </header>

      <section className="profile-info-section">
        <div className="profile-top-row">
          <div className="avatar-wrapper">
            <img src={main_photo} alt="Maya Rivera" className="avatar" />
          </div>
          <div className="profile-stats">
            <div className="stat-item">
              <span className="stat-count">248</span>
              <span className="stat-label">posts</span>
            </div>
            <div className="stat-item">
              <span className="stat-count">52.8K</span>
              <span className="stat-label">followers</span>
            </div>
            <div className="stat-item">
              <span className="stat-count">863</span>
              <span className="stat-label">following</span>
            </div>
          </div>
        </div>


        <div className="bio-section">
          <h1 className="full-name">Maya Rivera</h1>
          <p className="bio-category">Digital creator</p>
          <p className="bio-text">
            Visual stories from everywhere ✈️<br />
            Slow travel · good light · tiny moments
          </p>
          <a href="https://mayarivera.co" className="bio-link">
            🔗 mayarivera.co
          </a>
        </div>

     
        <div className="profile-actions">
          <button className="btn btn-edit">Edit profile</button>
          <button className="btn btn-share">Share profile</button>
          <button className="btn btn-icon-only">
            <img src={person_logo} alt="Add user" />
          </button>
        </div>
      </section>

    
      <section className="highlights-section">
        <div className="highlight-item">
          <div className="highlight-circle">
            <img src={subs1} alt="Amalfi" />
          </div>
          <span className="highlight-title">Amalfi</span>
        </div>
        <div className="highlight-item">
          <div className="highlight-circle">
            <img src={subs2} alt="City notes" />
          </div>
          <span className="highlight-title">City notes</span>
        </div>
        <div className="highlight-item">
          <div className="highlight-circle">
            <img src={subs3} alt="Food" />
          </div>
          <span className="highlight-title">Food</span>
        </div>
        <div className="highlight-item">
          <div className="highlight-circle">
            <img src={subs4} alt="Behind scenes" />
          </div>
          <span className="highlight-title">Behind sce...</span>
        </div>
        <div className="highlight-item">
          <div className="highlight-circle">
            <img src={subs5} alt="Favorites" />
          </div>
          <span className="highlight-title">Favorites</span>
        </div>
      </section>

     
      <div className="profile-tabs">
        <div className="tab-item active">
          <img src={setka} alt="Posts grid" />
        </div>
        <div className="tab-item">
          <img src={cinema_logo} alt="Reels" />
        </div>
        <div className="tab-item">
          <img src={person_logo} alt="Tagged" />
        </div>
      </div>

    
      <section className="posts-grid">
        <div className="grid-post"><img src={post1} alt="Post 1" /></div>
        <div className="grid-post"><img src={post2} alt="Post 2" /></div>
        <div className="grid-post"><img src={post3} alt="Post 3" /></div>
        <div className="grid-post"><img src={post4} alt="Post 4" /></div>
        <div className="grid-post"><img src={post5} alt="Post 5" /></div>
        <div className="grid-post"><img src={post6} alt="Post 6" /></div>
        <div className="grid-post"><img src={post7} alt="Post 7" /></div>
        <div className="grid-post"><img src={post8} alt="Post 8" /></div>
        <div className="grid-post"><img src={post9} alt="Post 9" /></div>
      </section>

      <footer className="footer">
          <div className="footer-container">
            <img 
              src={home} 
              alt="Home" 
              onClick={() => this.props.changePage('home')} 
              style={{ cursor: 'pointer' }} 
              className="footer-icon" 
            />
            <img 
              src={explore} 
              alt="Explore" 
              onClick={() => this.props.changePage('explore')} 
              style={{ cursor: 'pointer' }} 
              className="footer-icon" 
            />
            <img 
              src={reels} 
              alt="Reels" 
              onClick={() => this.props.changePage('reels')} 
              style={{ cursor: 'pointer' }} 
              className="footer-icon" 
            />
            <img 
              src={heart} 
              alt="Notifications" 
              onClick={() => this.props.changePage('activity')} 
              style={{ cursor: 'pointer' }} 
              className="footer-icon" 
            />
            <img 
              src={footer_profile} 
              alt="Profile" 
              onClick={() => this.props.changePage('profile')} 
              style={{ cursor: 'pointer' }} 
              className="footer-icon footer-avatar" 
            />
          </div>
        </footer>
    </div>   
        )
    }
}

export default Profile;