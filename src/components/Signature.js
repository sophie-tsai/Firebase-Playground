import React from "react";

function Signature({ setIsLoggedIn }) {
  return (
    <div className="signature-container">
      <a
        href="https://sophietsai.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="signature"
      >
        created by sophie tsai.
      </a>
      {/* <button onClick={() => setIsLoggedIn((prev) => !prev)}>toggle</button> */}
    </div>
  );
}

export default Signature;
