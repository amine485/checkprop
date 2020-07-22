import React from "react";

function ActionLink() {
    function handleClick(e) {
      e.preventDefault();
      
      alert(`Hello $(prof.FullName)`);
    }
  
    return (
      <a href="/" onClick={handleClick}>
        Click to see FullName
      </a>
    );
  }
export default ActionLink;
