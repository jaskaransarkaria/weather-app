import React from "react";
import City from "../City";

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
       
        <City lat={52.48} lon={-1.9}/>
      </>
    );
  }
}

export default App;


