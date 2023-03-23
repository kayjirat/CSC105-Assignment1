import React, { useState } from 'react';

function StateAssignmentOne() {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <section>
      <button onClick={handleClick}>
         {clicks}
      </button>
    </section>
  );
}

export default StateAssignmentOne;