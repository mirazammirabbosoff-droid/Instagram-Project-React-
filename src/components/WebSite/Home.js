import React from "react";
import home from "../images/Home Images/footer_home.png";
import explore from "../images/Home Images/footer_explore.png";
import reels from "../images/Home Images/footer_reels.png";
import heart from "../images/Home Images/heart.png";
import footer_profile from "../images/Home Images/footer_profile.png";
import post_head from "../images/Home Images/post_header.png";
import post_main from "../images/Home Images/post_main.png";
import comment_logo from "../images/Home Images/comment.png";
import profile from "../images/Home Images/Profile_img.png";
import man from "../images/Home Images/Man.png";
import woman from "../images/Home Images/woman.png";
import man2 from "../images/Home Images/man2.png";
import plus from "../images/Home Images/plus.png";
import logo from "../images/Home Images/Instagram.png";


class Home extends React.Component {
  render() {
    return (
      <div className="app-wrapper">
        <header>
          <div className="header">
            <img src={logo} alt="Instagram Logo" className="logo" />
          </div>
          <div className="right-head">
            <img src={heart} alt="heart logo" className="heart_logo" />
            <img src={comment_logo} alt="comment_logo" className="comment_logo" />
          </div>
        </header>

        <main>
          <div className="story_profile">
            <img src={profile} alt="story_profile" className="story_img" />
            <img src={plus} alt="plus" className="story_plus" />
            <h3>Your story</h3>
          </div>
          <div className="story_others">
            <div className="noah">
              <img src={man} alt="noah" />
              <h3>noah.films</h3>
            </div>
            <div className="sofia">
              <img src={woman} alt="sofia" />
              <h3>sofiamiles</h3>
            </div>
            <div className="studio">
              <img src={woman} alt="studio" />
              <h3>studio.mono</h3>
            </div>
            <div className="alex">
              <img src={man2} alt="alex" />
              <h3>alexchen</h3>
            </div>
          </div>
        </main>

        <div className="post">
          <div className="post-header">
            <img src={post_head} className="post-avatar" alt="" />
            <div className="post-user">
              <h4>maya.travels</h4>
              <p>Amalfi Coast, Italy</p>
            </div>
            <span className="post-menu">...</span>
          </div>

          <div className="post-img-box">
            <img src={post_main} className="post-img" alt="" />
            <span className="post-count">1/4</span>
          </div>

          <div className="post-icons">
            <div className="post-icons-left">
              <img src={heart} alt="" />
              <img src={comment_logo} alt="" /> 
            </div>
          </div>

          <div className="post-info">
            <p className="post-likes">
              Liked by <b>noah.films</b> and <b>12,842 others</b>
            </p>
            <p className="post-text">
              <b>maya.travels</b> Slow mornings, sea air, and nowhere else to be. 🌊
            </p>
            <p className="post-comments">View all 246 comments</p>
            <p className="post-time">2 HOURS AGO</p>
          </div>
        </div>

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
    );
  }
}

export default Home;