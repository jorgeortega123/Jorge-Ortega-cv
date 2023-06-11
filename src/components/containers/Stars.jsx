import React from 'react';


const StarsBackground = () => {
  return (
    <div className="before border">
      <div className="stars-container night border">
        {[...Array(20)].map((_, index) => (
          <div key={index} className="shooting_star"></div>
        ))}
      </div>
    </div>
  );
};

export default StarsBackground;
