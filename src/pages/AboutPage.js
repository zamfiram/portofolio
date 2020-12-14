import React, { useState } from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";

function AboutPage(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <div className="about-page">
      <Hero title={props.title} />

      <Content>
        <p>Hi,</p>
        <p>
          I'm Madalina Zamfira, a 29 years old JavaScript enthusiast. In 2020
          I've been studying coding at Wild Code School. Here I've been working
          on projects using{" "}
          <strong>
            Javascript, React, NodeJS, MySql, HTML, CSS, Bootstrap and Git
          </strong>
          . The projects have been managed using the SCRUM methodology.
        </p>
        <p>
          You can read more about my biography, experience, skills, education
          and much more in the PDF here below:
        </p>
        <a href="/CV.pdf" target="_blank">
          My resume
        </a>
      </Content>
    </div>
  );
}

export default AboutPage;
