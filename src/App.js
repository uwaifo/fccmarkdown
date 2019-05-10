import React, { Component } from "react";
import "./App.css";
import { FormGroup, FormLabel, FormControl } from "react-bootstrap";
import { initText } from "./preview";
//import marked from 'marked'

let marked = require("marked");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: initText
    };
  }

  markdownHandler = markdown => {
    this.setState({ markdown });
  };
  render() {
    return (
      <div className="App container">
        <h4 className="display-4">Markdown Previewer</h4>
        <div>
          <FormGroup controlId="fg_id">
            <FormLabel>Markdown Input</FormLabel>
            <FormControl
              as="textarea"
              rows="6"
              id="editor"
              componentClass="textarea"
              //placeholder={placeHolder}
              value={this.state.markdown}
              onChange={e => this.markdownHandler(e.target.value)}
            />
          </FormGroup>
        </div>
        <div>
          <h1>Output</h1>
          <div
            id="preview"
            dangerouslySetInnerHTML={{ __html: marked(this.state.markdown) }}
          />
        </div>
      </div>
    );
  }
}

export default App;
