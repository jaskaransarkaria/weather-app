import React from "react";
import Quote from "../Quote";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue:""
    };
  }
  render() {
    return (
      <>
       
        <Quote />
      </>
    );
  }
}

export default App;


