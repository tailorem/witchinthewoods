import React from "react";

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const headingAccentStyles = {
  color: "#663399",
};

const paragraphStyles = {
  marginBottom: 32,
};

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Witch in the Woods</title>
      <h1 style={headingAccentStyles}>
        Witch in the Woods&nbsp;
        <span role="img" aria-label="witch emoji">
          🧙
        </span>
      </h1>
      <p style={paragraphStyles}>
        A text adventure generated with the Adventuron engine.
      </p>
      <p style={paragraphStyles}>Coming soonish...</p>
    </main>
  );
};

export default IndexPage;
