import React from "react";

const grabFromUrl = fetch(`https://thesimpsonsquoteapi.glitch.me/quotes`)
.then(res => res.json());

class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }


    grabFromUrl(this.props).then(data =>
      this.setState({
        data
      })
    );
  }
  render() {
    console.log(this.state.data);
    if (!this.state.data.quote) {
      return <div>Nothing to show</div>;
    }
    return (
      <>
        <div className="quote">
          {this.state.data.quote}
          <br />
          {this.state.data.image}
      
        </div>
      </>
    );
  }
}

export default Quote;
