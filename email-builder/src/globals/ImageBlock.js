import React from 'react';

import { Padding } from '.';


export const ImageBlock = (props) => {
  return (
    <table className="image-block" cellPadding="0" cellSpacing="0" border="0" width="88%" style={{width: '88%', minWidth: '88%', maxWidth: '88%' }}>
      <tbody>
        <tr>
          <td align="center" valign="top">
            
            <Padding size={props.paddingTop} />
            
            <img src={props.imgSrc} alt={props.imgAlt} width="100%" border="0" style={{display: 'block', width: '100%'}} />

            <Padding size={props.paddingBottom} />

          </td>
        </tr>
      </tbody>
    </table>
  )
}
