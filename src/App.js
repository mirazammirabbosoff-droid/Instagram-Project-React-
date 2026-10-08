import React from "react";
import Home from "./components/WebSite/Home";
import Explore from "./components/WebSite/Explore"; 
import Reels from "./components/WebSite/Reels";
import Activity from "./components/WebSite/Activity";
import Profile from "./components/WebSite/Profile";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "home",
    };
  }


  changePage = (pageName) => {
    this.setState({ currentPage: pageName });
  };

  render() {
    return (
      <div>
 
        {this.state.currentPage === "home" && (
          <Home changePage={this.changePage} />
        )}

        
        {this.state.currentPage === "explore" && (
          <Explore changePage={this.changePage} />
        )}

        {this.state.currentPage === "reels" && (
          <Reels changePage={this.changePage} />
        )}

        {this.state.currentPage === "activity" && (
          <Activity changePage={this.changePage} />
        )}

        {this.state.currentPage === "profile" && (
          <Profile changePage={this.changePage} />
        )} 
      </div>
    );
  }
}

export default App;