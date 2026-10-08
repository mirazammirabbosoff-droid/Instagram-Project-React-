import React from "react";
import search from "../images/Explore Images/explore_small.png";
import location from "../images/Explore Images/location.png";
import home from "../images/Home Images/footer_home.png";
import explore from "../images/Home Images/footer_explore.png";
import reels from "../images/Home Images/footer_reels.png";
import heart from "../images/Home Images/heart.png";
import footer_profile from "../images/Home Images/footer_profile.png";
import img1 from "../images/Explore Images/Media.png";
import img2 from "../images/Explore Images/Media2.png";
import img3 from "../images/Explore Images/Media3.png";
import img4 from "../images/Explore Images/Media4.png";
import img5 from "../images/Explore Images/Media5.png";
import img6 from "../images/Explore Images/Media6.png";
import img7 from "../images/Explore Images/Media7.png";
import img8 from "../images/Explore Images/Media8.png";
import img9 from "../images/Explore Images/Media9.png";
import img10 from "../images/Explore Images/Media10.png";
import img11 from "../images/Explore Images/Media11.png";
import img12 from "../images/Explore Images/Media12.png";

class Explore extends React.Component {
  render() {
    return (
      <div className="explore-container">
        
        <div className="search-bar-wrapper">
          <div className="search-input-box">
            <img src={explore} alt="Search" className="search-icon" />
            <input
              type="text"
              placeholder="Search"
              className="search-input"
            />
          </div>
          <button className="location-btn" aria-label="Location">
            <img src={location} alt="Location" className="location-icon" />
          </button>
        </div>

        
        <div className="categories-list">
          <button className="category-chip active">For you</button>
          <button className="category-chip">Travel</button>
          <button className="category-chip">Style</button>
          <button className="category-chip">Food</button>
          <button className="category-chip">Art</button>
        </div>

        <div className="main_photos">
            <img src={img1} className="big-photo" alt="Featured" />
            
            <div className="littobig">
                <img src={img2} alt="Explore" />
                <img src={img3} alt="Explore" />
                <img src={img4} alt="Explore" />
                <img src={img5} alt="Explore" />
                <img src={img6} alt="Explore" />
                <img src={img7} alt="Explore" />
                <img src={img8} alt="Explore" />
                <img src={img9} alt="Explore" />
                <img src={img10} alt="Explore" />
                <img src={img11} alt="Explore" />
                <img src={img12} alt="Explore" />
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
                src={search} 
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

export default Explore;