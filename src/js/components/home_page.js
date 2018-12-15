import React, { Component } from "react";
import { Link } from "react-router-dom";
import HomeHeader from "./home_header";
import HomeContent from "./home_content";
import HomeFooter from "./home_footer";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <HomeHeader />

        <HomeContent />
        <HomeFooter />

      </div>
    );
  }
}
