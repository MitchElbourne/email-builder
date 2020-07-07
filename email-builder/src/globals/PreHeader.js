import React from 'react';
import PropTypes from 'prop-types';


export const PreHeader = (props) => {
  return (
    <div className="preheader" style={{display: 'none', fontSize: 1+'px', color: '#dddddd', maxHeight: 0+'px', maxWidth: 0+'px', opacity: 0, overflow: 'hidden'}}>
      EnergeiaWorks Newsletter for {props.currentMonth} 2017 | Inside this issue: The Recruiters Outlook, {props.currentMonth}'s Event Highlights, Upcoming Events, Hot Jobs and more...
    </div>
  )
}

PreHeader.propTypes = {
  currentMonth: PropTypes.string.isRequired
}
