import React, { Component } from "react";
import FormGroup from "react-bootstrap/lib/FormGroup";
import ControlLabel from "react-bootstrap/lib/ControlLabel";
import FormControl from "react-bootstrap/lib/FormControl";
import logo from "./logo.svg";
import "./App.css";

const marked = require("marked");
const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}` + '</a>';
}
const initialText = 
    `# Markdown Output
## This is a sub-heading...
  ### And here's some other cool stuff:
    
  Heres some code, \`<div></div>\`, between 2 backticks.

  \`\`\`
  // this is multi-line code:

  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
    
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.

  There's also [links](https://www.freecodecamp.com), and

  > Block Quotes!

  And if you want to get really crazy, even tables:

  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.

  - And of course there are lists.
    - Some are bulleted.
      - With different indentation levels.
        - That look like this.


  1. And there are numbererd lists too.
  1. Use just 1s if you want! 
  1. But the list goes on...
  - Even if you use dashes or asterisks.
  * And last but not least, let's not forget embedded images:

  ![React Logo w/ Text](https://goo.gl/Umyytc)
  `;

class App extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    markdown: initialText
  };

  updateMarkdown(markdown) {
    this.setState({ markdown });
  }

  render() {
    let { markdown } = this.state;
    return (
      <div className="App container">
        <div>
          <FormGroup controlId="formControlTextarea">
            <ControlLabel>Markdown Input</ControlLabel>
            <FormControl
              componentClass="textarea"
              value={markdown}
              onChange={event => this.updateMarkdown(event.target.value)}
              rows="20"
            />
          </FormGroup>
        </div>
        <div className="output">
          <div
            dangerouslySetInnerHTML={{
              __html: marked(markdown)
            }}
          />
        </div>
      </div>
    );
  }
}

export default App;
