import React from 'react';

import { Padding, SectionHeader, TitleBlock } from '../globals';


export const RecentEvents = (props) => {
  return (
    <table className="recent-events" cellPadding="0" cellSpacing="0" border="0" width="100%" style={{width: '100%', minWidth: '100%', maxWidth: '100%' }}>
      <tbody>
        <tr>
          <td align="center" valign="top">

          <TitleBlock
            text="Recent Events"
            fontSize={38}
            paddingTop={18}
            paddingBottom={16}
          />
           </td>
        </tr>

        <tr>
          <td align="center" valign="top">

            {props.children}

          </td>
        </tr>

        <tr>
          <td align="center" valign="top">

            <Padding size={24} underline={true} />

          </td>
        </tr>
      </tbody>
    </table>
  )
}
