import React from "react";
import City from "../City";
import Input from "../Input";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ""
    };
  }
  render() {
    return (
      <div id="img">
        <Input />
        <div id="container">
          <City lat={52.48} lon={-1.9} />
          <City lat={53.4793} lon={-2.2479} />
          <City lat={37.129} lon={-84.0833} />
        </div>
      </div>
    );
  }
}

export default App;
