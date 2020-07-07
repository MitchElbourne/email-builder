import React from 'react';

import { Padding } from '../globals';


export const SocialMedia = (props) => {
  return (
    <table className="social-media" cellPadding="0" cellSpacing="0" border="0" width="100%" style={{width: '88%', minWidth: '88%', maxWidth: '88%' }}>
      <tbody>
        <tr>
          <td align="center" valign="top">

            <table cellPadding="0" cellSpacing="0" border="0">
              <tbody>
                <tr>
                   <td align="center" valign="top">
                     <a href="https://www.facebook.com/energeiaworks/" target="_blank" rel="noopener noreferrer" style={{display: 'block', maxWidth: 25}}>

                       <img src="http://www.energeiaworks.com/email/2017-10/img/logo-facebook-color@2x.png" alt="img" width="25" border="0" style={{display: 'block', maxWidth: 25}} />

                     </a>
                   </td>

                   <td width="45" style={{width: 44, maxWidth: 44, minWidth: 44}}>&nbsp;</td>

                   <td align="center" valign="top">
                     <a href="https://www.linkedin.com/company/renewables-unwind/" target="_blank" rel="noopener noreferrer" style={{display: 'block', maxWidth: 25}}>

                       <img src="http://www.energeiaworks.com/email/2017-10/img/logo-linkedin-color@2x.png" alt="img" width="25" border="0" style={{display: 'block', maxWidth: 25}} />

                     </a>
                   </td>

                   <td width="45" style={{width: 44, maxWidth: 44, minWidth: 44}}>&nbsp;</td>

                   <td align="center" valign="top">
                     <a href="https://twitter.com/RenewUnWind" target="_blank" rel="noopener noreferrer" style={{display: 'block', maxWidth: 25}}>

                       <img src="http://www.energeiaworks.com/email/2017-10/img/logo-twitter-color@2x.png" alt="img" width="25" border="0" style={{display: 'block', maxWidth: 25}} />

                     </a>
                   </td>

                   <td width="45" style={{width: 44, maxWidth: 44, minWidth: 44}}>&nbsp;</td>

                   <td align="center" valign="top">
                     <a href="https://www.instagram.com/renewables_unwind/" target="_blank" rel="noopener noreferrer" style={{display: 'block', maxWidth: 25}}>

                       <img src="http://www.energeiaworks.com/email/2017-10/img/logo-instagram-color@2x.png" alt="img" width="25" border="0" style={{display: 'block', maxWidth: 25}} />

                     </a>
                   </td>
                </tr>

                <tr>
                  <td>
                    <Padding size={72} />
                  </td>
                </tr>
              </tbody>
            </table>

          </td>
        </tr>
      </tbody>
    </table>
  )
}
