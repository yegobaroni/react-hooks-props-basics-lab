import React from 'react';

function Links(links) {
  return (
    <div>
        <h3>Links</h3>
        <a href={links.github} >https://github.com/liza</a>
        <a href={links.linkedin}>https://www.linkedin.com/in/liza/</a>
    </div>
  );
}

export default Links;
