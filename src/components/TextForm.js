import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useState } from 'react';

function TextForm({ mode, mode2, showAlert }) {
  const [text, setText] = useState("");

  // Function to capitalize the first letter of each word
  const capitalizeWords = (str) => {
    showAlert("The text has been converted to capitalize words!", "success");
    return str.replace(/\b\w/g, char => char.toUpperCase());
  };

  // Function to capitalize the first letter of each sentence
  const capitalizeSentences = (str) => {
    showAlert("The text has been converted to capitalize sentences!", "success");
    return str.replace(/(^\s*\w|[.!?]\s*\w)/g, char => char.toUpperCase());
  };

  const toClearText = () => {
    showAlert("The text has been cleared!", "success");
    return "";
  };

  // Helper function to convert text to CamelCase
  const toCamelCase = (str) => {
    showAlert("The text has been converted to camel case!", "success");
    return str
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
  };

  return (
    <div
      className='container my-4'
      style={{
        color: mode === 'dark' || mode2 === 'dark' ? 'white' : '#0f1064',
      }}
    >
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Enter valid text to convert: </Form.Label>
        <Form.Control
          as="textarea"
          className='texta'
          value={text}
          rows={10}
          onChange={(e) => setText(e.target.value)}
          style={{
            backgroundColor: mode === 'dark' ? '#55247a' : mode2 === 'dark' ? '#189660' : 'white',
            color: mode === 'dark' ? 'white' : mode2 === 'dark' ? 'white' : '#0f1064',
          }}
        />

        <Button variant="primary my-4 mx-2" onClick={() => {
          setText(text.toUpperCase());
          showAlert("The text has been converted to upper case!", "success");
        }}>Convert to Uppercase</Button>

        <Button variant="primary my-4 mx-2" onClick={() => {
          setText(text.toLowerCase());
          showAlert("The text has been converted to lower case!", "success");
        }}>Convert to Lowercase</Button>

        <Button variant="primary my-4 mx-2" onClick={() => setText(toCamelCase(text))}>Convert to CamelCase</Button>
        <Button variant="primary my-4 mx-2" onClick={() => setText(capitalizeWords(text))}>Capitalize Words</Button>
        <Button variant="primary my-4 mx-2" onClick={() => setText(capitalizeSentences(text))}>Capitalize Sentences</Button>
        <Button variant="primary my-4 mx-2" onClick={() => setText(toClearText())}>Clear Text</Button>
      </Form.Group>

      <div className="container" style={{ color: mode === 'dark'  || mode2 === 'dark' ? 'white' : '#0f1064' }}>
        <h3>Character Length:</h3>
        <p>{text.length}</p>
        <h3>Word Count:</h3>
        <p>{text.split(/\s+/).filter(word => word.length > 0).length}</p>
        <h3>Minutes read:</h3>
        <p>{0.008 * text.split(/\s+/).filter(word => word.length > 0).length}</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "No text to preview !"}</p>
      </div>
    </div>
  );
}

export default TextForm;
