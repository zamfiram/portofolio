import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>Hi,</p>
            <p>I'm Madalina Zamfira, a 29 years old javascript enthusiast. In 2020 I've been studying coding at Wild Code School. Here I've been working on projects using HTML, CSS, JavaScript, React, nodeJS, Git, Bootstrap and MySql. The projects have been managed using the SCRUM methodology.</p>
            <p>You can read more about my biography, experience, skills, education and much more in the PDF attached below</p>
            <a href="">My resume(pdf 150kb)</a>
            </Content>
        </div>
    );

}

export default AboutPage;