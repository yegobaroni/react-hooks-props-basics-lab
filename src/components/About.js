import React from "react";
import Links from "./Links";

function About({name, city, bio, color, links}) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio? <p> {bio}</p>:null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      
      <Links links={links}/>
    </div>
  );
}

export default About;
