import React from 'react';

// rating: 1, 2, 2.5, ... 5
const Rating = ({ value, text, color }) => {
  const stars = []

  for (let i=1; i<=5; i++) {
    let cssClassName = '';
    if (i <= value) {
      cssClassName = 'fas fa-star';
      //stars.push(<i className="fas fa-star"></i>); // full start
    } else if (i === Math.ceil(value) && !Number.isInteger(value)) { 
      cssClassName = 'fas fa-star-half-alt';
      //stars.push(<i className="fas fa-star-half-alt"></i>); // half start
    } else {
      cssClassName = 'far fa-star';
      //stars.push(<i className="far fa-star"></i>); // empty start
    }

    stars.push(
      <span key={i}>
        <i
          style={{ color }}
          className={cssClassName}
        ></i>
      </span>
    )
  }

  return (
    <div className="rating">
      {stars}

      <span>{text && text}</span>
    </div>
  );
}

Rating.defaultProps = {
  color: '#f8e825'
}

export default Rating;
