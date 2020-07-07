import React from 'react';

import { Padding } from '.';


export const EmailContainer = (props) => {
  return (
    <div>

      {/* <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
      <html>
      <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" >
      <title>EnergeiaWorks Monthly Newsletter</title>
      <link href="https://fonts.googleapis.com/css?family=Work+Sans:300,500,600" rel="stylesheet">
      <style type="text/css">
      html { -webkit-text-size-adjust: none; -ms-text-size-adjust: none;}

      	@media only screen and (min-device-width: 750px) {
      		.table750 {width: 750px !important;}
      	}
      	@media only screen and (max-device-width: 750px), only screen and (max-width: 750px){
            table[class="table750"] {width: 100% !important;}
            .mob_b {width: 93% !important; max-width: 93% !important; min-width: 93% !important;}
            .mob_b1 {width: 100% !important; max-width: 100% !important; min-width: 100% !important;}
            .mob_left {text-align: left !important;}
            .mob_soc {width: 50% !important; max-width: 50% !important; min-width: 50% !important;}
            .mob_menu {width: 50% !important; max-width: 50% !important; min-width: 50% !important; box-shadow: inset -1px -1px 0 0 rgba(255, 255, 255, 0.2); }
       	}
         @media only screen and (max-device-width: 550px), only screen and (max-width: 550px){
            .mod_div {display: block !important;}
         }
      	.table750 {width: 750px;}
      </style>
      </head>
      <body style="margin: 0; padding: 0;"> */}

      <table cellPadding="0" cellSpacing="0" border="0" width="100%" style={{background: '#dddddd', minWidth: 350, fontSize: 1, lineHeight: 'normal'}}>
        <tbody>
          <tr>
            <td align="center" valign="top">
              <table className="container table750" cellPadding="0" cellSpacing="0" border="0" width="750" style={{width: '100%', maxWidth: 750, minWidth: 350, background: '#f4f4f4'}}>
                <tbody>
                  <tr>

                    <td width="3%" style={{width: '3%', maxWidth: '3%', minWidth: '10px'}}>&nbsp;</td>

                    <td align="center" valign="top" style={{background: '#ffffff'}}>

                      <table cellPadding="0" cellSpacing="0" border="0" width="100%" style={{width: '100%', minWidth: '100%', maxWidth: '100%', background: '#f3f3f3'}}>
                        <tbody>
                          <tr>
                            <td align="right" valign="top">

                              <Padding size={22} />

                            </td>
                          </tr>
                        </tbody>
                      </table>

                      {props.children}

                    </td>

                    <td width="3%" style={{width: '3%', maxWidth: '3%', minWidth: '10px'}}>&nbsp;</td>

                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>

      {/* </body>
    </html> */}

    </div>
  )
}
