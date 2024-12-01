import React from 'react';

const About = () => {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>About Me</h1>
            <p>
                Hello! My name is Marc. I am a passionate software developer with experience in building web applications using modern technologies like React, Node.js, and more.
            </p>
            <p>
                I enjoy solving complex problems and continuously learning new things. In my free time, I like to read books, explore new technologies, and contribute to open-source projects.
            </p>
            <p>
                Feel free to connect with me on <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a> or check out my projects on <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>.
            </p>
        </div>
    );
};

export default About;