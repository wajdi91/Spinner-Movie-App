import React from "react";
import Spinner from "./Spinner";
import MovieApp from "./MovieApp";
class HOC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeup: true
    };
  }
  componentWillMount = () => {
    setTimeout(() => {
      this.setState({
        timeup: false
      });
    }, 3500);
  };
  render() {
    return this.state.timeup ? (
      <Spinner />
    ) : (
      <>
        {/* <WrappedComponent {...this.props} /> */}
        <MovieApp />
      </>
    );
  }
}
export default HOC;
