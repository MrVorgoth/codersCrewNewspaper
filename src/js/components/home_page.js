import React, { Component } from "react";
import { Link } from "react-router-dom";
import HomeHeader from "./home_header";
import HomeContent from "./home_content";
import HomeFooter from "./home_footer";
import { Fragment } from "react";

export default class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <HomeHeader />
        <HomeContent />
        <HomeFooter />
     </Fragment>
    );
  }
}
