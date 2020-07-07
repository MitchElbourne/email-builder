import React from 'react';

import { Padding, SocialMedia } from '.';


export const Footer = (props) => {
  return (
    <table className="global-footer" cellPadding="0" cellSpacing="0" border="0" width="100%" style={{width: '100%', minWidth: '100%', maxWidth: '100%', backgroundColor: '#f3f3f3' }}>
      <tbody>
        <tr>
          <td align="center" valign="top">

            <Padding size={36} />

            <SocialMedia padding={36} />

            <Padding size={12} />

            <table className="newsletter-footer" cellPadding="0" cellSpacing="0" border="0" width="88%" style={{width: '88%', minWidth: '88%', maxWidth: '88%' }}>
              <tbody>
                <tr>
                  <td align="center" valign="top">

                    <font face="'Work Sans', sans-serif"
                      color="#4a4a4a"
                      style={{fontSize: 16, lineHeight: 1.25, fontWeight: 600, color: '#4a4a4a' }}>
                       <span style={{fontFamily: "'Work Sans', sans-serif", fontSize: 16, lineHeight: 1.25, fontWeight: 600, color: '#4a4a4a', textTransform: 'uppercase'}}>
                         EnergeiaWorks, LLC
                       </span>
                    </font>

                    <Padding size={2} />

                    <font face="'Work Sans', sans-serif"
                      color="##005ebc;"
                      style={{fontSize: 16, lineHeight: '2', fontWeight: 300, color: '#005ebc' }}>
                       <span style={{fontFamily: "'Work Sans', sans-serif", fontSize: 16, lineHeight: '2', fontWeight: 300, color: '#005ebc'}}>
                         201 Montgomery Street, Second Floor, Suite 263, Jersey City, NJ 07302
                       </span>
                    </font>

                    <Padding size={16} />

                    <font face="'Work Sans', sans-serif"
                      color="#4a4a4a"
                      style={{fontSize: 16, lineHeight: '1.25', fontWeight: 300, color: '#4a4a4a' }}>
                       <span style={{fontFamily: "'Work Sans', sans-serif", fontSize: 16, lineHeight: '1.25', fontWeight: 300, color: '#4a4a4a'}}>
                         Copyright &copy; 2019 EnergeiaWorks. All&nbsp;Rights&nbsp;Reserved.
                       </span>
                       <br />
                       <span style={{fontFamily: "'Work Sans', sans-serif", fontSize: 16, lineHeight: '1.25', fontWeight: 300, color: '#4a4a4a'}}>
                         To stop email communications from EnergeiaWorks,<br/>you can <a href="http://energeiaworks.catsone.com/index.php?m=email&a=optOut&emailID=136607075&dataItemType=300&dataItemID=34349015&email=">unsubscribe</a>.
                       </span>
                    </font>

                    <Padding size={36} />

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
