import React from "react";

const grabFromUrl = ({ lat, lon }) =>
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&APPID=0c4d91745066d7d7ca0063db373fc131`
  ).then(res => res.json());

class City extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    grabFromUrl(this.props).then(data =>
      this.setState({
        data
      })
    );
  }
  render() {
    console.log(this.state.data);
    if (!this.state.data.main) {
      return <div>Nothing to show</div>;
    }
    return (
      <>
        <div className="city">
          {this.state.data.name}
          <br />
          {this.state.data.weather[0].main}
          <br />
          {this.state.data.weather[0].description}
          <br />
          {this.state.data.main.temp}
        </div>
      </>
    );
  }
}

export default City;
