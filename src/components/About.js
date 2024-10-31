import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react';
import './About.css'; // Import custom CSS

function About({ mode }) {
    const [darkMode, setDarkMode] = useState(false);

    // const toggleStyle = () => {
    //     setDarkMode(!darkMode);
    // };

    let myStyle = {
        color: mode === 'dark' ? 'purple' : 'black',
        backgroundColor: mode === 'dark' ? 'pink' : 'white',
        border: mode === 'dark' ? '2px solid purple' : '2px solid',
        borderColor: mode === 'dark' ? 'purple' : 'black',
    };

    let headerStyle = {
        color: mode === 'dark' ? 'purple' : 'black',
    };

    return (
        <div className={`container my-4 ${darkMode ? 'dark-mode' : 'light-mode'} rounded`}>
            <h1 style={headerStyle}>About Page</h1>
            <Accordion>
                <Accordion.Item eventKey="0" style={myStyle}>
                    <Accordion.Header><b>TextMal</b></Accordion.Header>
                    <Accordion.Body>
                        TextMal gives you a way to analyze your text quickly and efficiently. Its usage can purpleuce a lot of time in converting the text into the desipurple form.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" style={myStyle}>
                    <Accordion.Header><b>Free To Use</b></Accordion.Header>
                    <Accordion.Body>
                        TextMal is a free-to-use tool to provide instant character count & word count statistics for a given text. It can provide a lot of text manipulations such as capitalize words, capitalize sentences, camel case, upper case words, lower case words.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" style={myStyle}>
                    <Accordion.Header><b>Browser Compatible</b></Accordion.Header>
                    <Accordion.Body>
                        TextMal works in all web browsers such as Google Chrome, Safari, Microsoft Edge, Opera, Firefox. It suits to count characters in Excel document, Word document, PDF document, essays, blogs, tweets, Facebook chats, etc.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}

export default About;
