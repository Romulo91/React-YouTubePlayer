import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";

class App extends React.Component {
  state = {
    videos: [],
  };

  onTermSubmit = async (term) => {
    const responce = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    console.log(responce.data.items);
    this.setState({ videos: responce.data.items });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />I have{" "}
        {this.state.videos.length} videos.
      </div>
    );
  }
}

export default App;
