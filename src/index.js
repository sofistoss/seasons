import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

/* const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (err) => console.log(err)
  );
  return (
    <div>
      <SeasonDisplay hi="how are you">helloooo</SeasonDisplay>
    </div>
  );
};
*/
class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  /* componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }
  */
  Renf() {
    /* return (
  <div>
    <h2>latitude: {this.state.lat}</h2>
    <h2>error: {this.state.errorMessage}</h2>
  </div>
); */
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Spinner message={"Please accept the geolocation"} />;
  }
  render() {
    return <div style={{ border: "5px red solid" }}>{this.Renf()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
