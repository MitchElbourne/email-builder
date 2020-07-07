import React from 'react';
import PropTypes from 'prop-types';

import { Padding } from '.';


export const SectionText = (props) => {

  if (props.intro) {
    return (
      <div>
        <font face="'Work Sans', sans-serif"
          color="#4a4a4a"
          style={{fontSize: 16, lineHeight: '1.5', fontWeight: 600, color: '#4a4a4a' }}>
           <span style={{fontFamily: "'Work Sans', sans-serif", fontSize: 16, lineHeight: '1.5', fontWeight: 600, color: '#4a4a4a'}}>
             {props.text}
           </span>
        </font>

        <Padding size={16} />
      </div>
    )
  } else {
    return (
      <div>
        <font face="'Work Sans', sans-serif"
          color="#4a4a4a"
          style={{fontSize: 16, lineHeight: '1.5', fontWeight: 300, color: '#4a4a4a' }}>
           <span style={{fontFamily: "'Work Sans', sans-serif", fontSize: 16, lineHeight: '1.5', fontWeight: 300, color: '#4a4a4a'}}>
             {props.text}
           </span>
        </font>

        <Padding size={16} />
      </div>
    )
  }
}

SectionText.propTypes = {
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ])
}
