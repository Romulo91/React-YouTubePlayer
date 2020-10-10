import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideos: null,
  };

  onTermSubmit = async (term) => {
    const responce = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({ videos: responce.data.items });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideos: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <VideoDetail video={this.state.selectedVideos} />
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;
