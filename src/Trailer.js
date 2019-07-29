import React from "react";
import YouTube from "react-youtube";
import { moviesToDisplay } from "./data";

class Trailer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: moviesToDisplay
    };
  }
  render() {
    const opts = {
      height: "290",
      width: "440",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return <div />;
    // moviesToDisplay.map(e => (
    // <YouTube videoId={e.trailer} opts={opts} onReady={this._onReady} />));
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}
export default Trailer;
