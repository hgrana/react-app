import React from 'react';

// css
import './SeasonDisplay.css';

const getSeason = (latitude, month) => {
  if (month > 2 && month < 9) {
    return (latitude > 0) ? 'summer' : 'winter';
  } else {
    return (latitude > 0) ? 'winter' : 'summer';
  }
};

const seasonConfig = (season) => {
  if (season === 'winter') {
    return {
      text: 'brr, chilly...',
      icon: 'snowflake'
    }
  }

  return {
    text: 'hit the beach!',
    icon: 'sun'
  }
}

const SeasonDisplay = ({ latitude }) => {
  const season = getSeason(latitude, new Date().getMonth());
  const seasonToDisplay = seasonConfig(season);

  return (
    <div className={`season-display ${season}`}>
      <i className={`${seasonToDisplay.icon} icon icon-left massive`} />
      <h1>{seasonToDisplay.text}</h1>
      <i className={`${seasonToDisplay.icon} icon icon-right massive`} />
    </div>
  )
};

export default SeasonDisplay;
