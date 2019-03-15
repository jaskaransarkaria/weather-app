import React from "react";
import City from "../City";

const grabFromUrl = url => fetch(url).then(res => res.json());

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationName: null
    };
  }
  render() {
    return (
      <>
        <City />
        <City />
        <City />
      </>
    );
  }
}

export default App;

// const grabFromUrl = url => fetch(url).then(res => res.json())

// //lifecycle method

// componentDidMount () { // it's a point in time just like render (here it is after the component is mounted onto the "canvas?")
// // you only want to do it once... it's not onClick
// grabFromUrl("whatever whatever").then(posts => this.setState(() => ({posts})))
// }
