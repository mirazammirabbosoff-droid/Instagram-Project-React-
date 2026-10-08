import React from "react";
import ava1 from '../images/Activity Images/ava1.png';
import ava2 from '../images/Activity Images/ava2.png';
import ava3 from '../images/Activity Images/ava3.png';
import ava4 from '../images/Activity Images/ava4.png';
import ava5 from '../images/Activity Images/ava5.png';
import ava10 from '../images/Activity Images/ava10.png';
import follow_both from '../images/Activity Images/follow_both.png';
import post1 from '../images/Activity Images/post1.png';
import post2 from '../images/Activity Images/post2.png';
import post3 from '../images/Activity Images/post3.png';
import setting from '../images/Activity Images/setting.png';
import strelka from '../images/Activity Images/strelka.png';
import home from "../images/Home Images/footer_home.png";
import explore from "../images/Home Images/footer_explore.png";
import reels from "../images/Home Images/footer_reels.png";
import heart from "../images/Home Images/heart.png";
import footer_profile from "../images/Home Images/footer_profile.png";

class Activity extends React.Component {
    render() {
        return(
            <div className="page-wrapper">
                <header className="notifications-header">
                    <h1 className="header-title">Notifications</h1>
                    <img src={setting} alt="Settings" className="settings-icon" />
                </header>

                <main className="notifications-content">
                    <nav className="tabs">
                        <button className="tab-button active">All</button>
                        <button className="tab-button">Following</button>
                    </nav>

                    <div className="follow-requests">
                        <div className="requests-left">
                            <img src={follow_both} alt="Follow requests" className="requests-avatar" />
                            <div className="requests-info">
                                <span className="requests-title">Follow requests</span>
                                <span className="requests-subtitle">Approve or ignore requests</span>
                            </div>
                        </div>
                        <div className="requests-right">
                            <span className="badge">12</span>
                            <img src={strelka} alt="Arrow" className="arrow-icon" />
                        </div>
                    </div>

                    <section className="notification-section">
                        <h2 className="section-title">Today</h2>

                        <div className="notification-item">
                            <img src={ava1} alt="sofiamiles" className="user-avatar avatar-bordered" />
                            <div className="notification-text">
                                <span className="username">sofiamiles</span> started following you. <span className="time">2h</span>
                            </div>
                            <button className="btn btn-primary">Follow</button>
                        </div>

                        <div className="notification-item">
                            <img src={ava2} alt="noah.films" className="user-avatar" />
                            <div className="notification-text">
                                <span className="username">noah.films</span> and 18 others liked your post. <span className="time">3h</span>
                            </div>
                            <img src={post1} alt="Post preview" className="post-preview" />
                        </div>

                        <div className="notification-item">
                            <img src={ava3} alt="studio.mono" className="user-avatar" />
                            <div className="notification-text">
                                <span className="username">studio.mono</span> mentioned you in a comment: Love this composition! <span className="time">5h</span>
                            </div>
                            <img src={post2} alt="Post preview" className="post-preview" />
                        </div>
                    </section>

                    <section className="notification-section">
                        <h2 className="section-title">This week</h2>

                        <div className="notification-item">
                            <img src={ava4} alt="alexchen" className="user-avatar" />
                            <div className="notification-text">
                                <span className="username">alexchen</span> started following you. <span className="time">1d</span>
                            </div>
                            <button className="btn btn-secondary">Following</button>
                        </div>

                        <div className="notification-item">
                            <img src={ava5} alt="clairebakes" className="user-avatar" />
                            <div className="notification-text">
                                <span className="username">clairebakes</span> liked your story. <span className="time">2d</span>
                            </div>
                            <img src={post3} alt="Story preview" className="post-preview" />
                        </div>

                        <div className="notification-item">
                            <img src={ava10} alt="trail.collective" className="user-avatar" />
                            <div className="notification-text">
                                <span className="username">trail.collective</span> invited you to a broadcast channel. <span className="time">3d</span>
                            </div>
                            <button className="btn btn-primary">Follow</button>
                        </div>
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
                </main>
            </div>
        )
    }
}

export default Activity;