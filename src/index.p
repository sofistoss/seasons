import React from "react";
import ReactDOM from "react-dom";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      errorMessage: "",
    };
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    if (this.state.lat && !this.state.errorMessage) {
      return <h2>Latitude: {this.state.lat}</h2>;
    }

    if (!this.state.lat && this.state.errorMessage) {
      return <h2>Error: {this.state.errorMessage}</h2>;
    }
    return <h2>Loading...</h2>;
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
