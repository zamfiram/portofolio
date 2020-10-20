import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import resume from '../assets/images/Resume.jpg';

function AboutPage(props) {

    return(
        <div className="about-page">
            <Hero title={props.title} />

            <Content>
            <p>Hi,</p>
            <p>I'm Madalina Zamfira, a 29 years old javascript enthusiast. In 2020 I've been studying coding at Wild Code School. Here I've been working on projects using HTML, CSS, JavaScript, React, nodeJS, Git, Bootstrap and MySql. The projects have been managed using the SCRUM methodology.</p>
            <p>You can read more about my biography, experience, skills, education and much more in the PDF here below:</p>
            <a href={resume} target="_blank">My resume</a>
            </Content>
        </div>
    );

}

export default AboutPage;