import React from 'react';
import PropTypes from 'prop-types';
import validateURL from 'react-proptypes-url-validator';

import { Padding } from '.';


export const GlobalHeaderMini = (props) => {
  return (
    <table className="global-header" cellPadding="0" border="0" width="100%" background="#f4f4f4" style={{width: '100%', minWidth: '100%', maxWidth: '100%', background: '#f4f4f4'}}>
      <tbody>
        <tr>
          <td align="left" valign="top">

            <Padding size={2} />

            <a href={props.linkTo} target="_blank" style={{display: 'block', maxWidth: props.imgWidth}}>

              <img src={props.imgSrc} alt={props.imgAlt} width={props.imgWidth} border="0" style={{display: 'block', width: props.imgWidth, maxWidth: props.imgWidth, minWidth: props.imgWidth}} />

            </a>

            <Padding size={24} />

          </td>
          <td align="right" valign="top">
            
            <Padding size={6} />
            
            {props.socialMedia}
            
          </td>
        </tr>
      </tbody>
    </table>
  )
}

GlobalHeaderMini.propTypes = {
  imgSrc: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    validateURL
  ]),
  linkTo: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    validateURL
  ]),
  imgWidth: PropTypes.number.isRequired,
  imgAlt: PropTypes.string.isRequired
}
