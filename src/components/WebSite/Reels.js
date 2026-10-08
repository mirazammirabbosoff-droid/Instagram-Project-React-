import React from "react";
import arrow from "../images/Reels Images/down-arrow.png";
import foto from "../images/Reels Images/foto.png";
import main from "../images/Reels Images/Main.png";
import activity from "../images/Reels Images/activity.png";
import explore from "../images/Reels Images/explore.png";
import home from "../images/Reels Images/home.png";
import profile from "../images/Reels Images/profile.png";
import reels from "../images/Reels Images/reels.png";
import points from "../images/Reels Images/points.png";
import music_ava from "../images/Reels Images/music.png";
import friends from "../images/Reels Images/friends.png";

class Reels extends React.Component {
  render() {
    return (
      <div className="reels-page">
        <div className="reels-container">
          
          <img src={main} alt="Reel" className="reels-main-img" />

          
          <div className="reels-top">
            <div className="reels-title">
              <h2>Reels</h2>
              <img src={arrow} alt="" />
            </div>
            <img src={foto} alt="" className="camera-btn" />
          </div>

          
          <div className="reels-right">
            <div>
              <img src={activity} alt="" />
              <p>84.2K</p>
            </div>
            <div>
              <img src={explore} alt="" />
              <p>1,248</p>
            </div>
            <div>
              <img src={arrow} alt="" style={{ transform: "rotate(-30deg)" }} />
              <p>Share</p>
            </div>
            <div>
              <img src={points} alt="" />
            </div>
          </div>

       
          <div className="reels-bottom-info">
            <div className="user-line">
              <img src={profile} alt="" className="reels-avatar" />
              <span>ryan.motion</span>
              <button>Follow</button>
            </div>
            <p className="caption">Chasing the last light. That landing though...</p>
            <div className="audio-line">
              <img src={music_ava} alt="" />
              <span>ryan.motion · Original audio</span>
            </div>
            <div className="close-friends">
              <img src={friends} alt="" />
              <span>Close friends</span>
            </div>
          </div>
        </div>

        <footer className="reels-footer footer">
          <div className="footer-container">
            <img src={home} alt="Home" onClick={() => this.props.changePage('home')} className="footer-icon" />
            <img src={explore} alt="Explore" onClick={() => this.props.changePage('explore')} className="footer-icon" />
            <img src={reels} alt="Reels" onClick={() => this.props.changePage('reels')} className="footer-icon" />
            <img src={activity} alt="Activity" onClick={() => this.props.changePage('activity')} className="footer-icon" />
            <img src={profile} alt="Profile" onClick={() => this.props.changePage('profile')} className="footer-icon footer-avatar" />
          </div>
        </footer>
      </div>
    );
  }
}

export default Reels;