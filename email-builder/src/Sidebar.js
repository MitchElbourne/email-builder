import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Sidebar extends Component {
  render() {
    return (
      <aside className="sidebar">
        <NavLink exact
          to="/">Dashboard</NavLink>

        <NavLink activeClassName="active"
          to="/newsletter">Newsletter</NavLink>

        <NavLink activeClassName="active"
          to="/general-announcement">Announcement</NavLink>

        <NavLink activeClassName="active"
          to="/activation">Activation</NavLink>

        <NavLink activeClassName="active"
            to="/renewablesunwind">Renewables</NavLink>

        <NavLink activeClassName="active"
            to="/renewablesunwind2">Renewables2</NavLink>

        <NavLink activeClassName="active"
            to="/renewablesunwind3">Renewables3</NavLink>

        <NavLink activeClassName="active"
            to="/renewablesspecial">Special</NavLink>

        <NavLink activeClassName="active"
            to="/renewablesspecial2">Special2</NavLink>


        {/* <NavLink activeClassName="active"
            to="/renewablesunwindsummer">RenewablesSummer</NavLink> */}

        <NavLink activeClassName="active"
            to="/renewablesunwindfollowup">RenewablesFollowup</NavLink>

        <NavLink activeClassName="active"
            to="/sponsorfollowup">SponsorFollowup</NavLink>
        <NavLink activeClassName="active"
            to="/sponsorfollowup2">SponsorFollowup2</NavLink>
        <NavLink activeClassName="active"
            to="/sponsorfollowup3">SponsorFollowup3</NavLink>

        <NavLink activeClassName="active"
            to="/renewablesunwindwithevent">RenewablesWithEvent</NavLink>

        <NavLink activeClassName="active"
            to="/renewablessponsorship">RUW Sponsorship</NavLink>

        <NavLink activeClassName="active"
            to="/renewablessponsorshipevent">RUW Sponsorship Event</NavLink>

        <NavLink activeClassName="active"
            to="/sponsorspotlight">Sponsor Spotlight</NavLink>

        {/* <NavLink activeClassName="active"
            to="/xmas">Xmas</NavLink> */}
      </aside>
    );
  }
}

export default Sidebar;
