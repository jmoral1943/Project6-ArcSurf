import React from "react";
import Hero from "./Hero";
import Card from "./Card";

import Action from "./Action";
import VerticalCards from "./VerticalCards";

const Home = () => (
  <React.Fragment>
    <Hero />
    <div className="c-home__banners">
      <Card
        name="Guy sitting down on a wall"
        url="home1.webp"
        collection="Worldwide Collection"
      />
      <Card
        name="Action shot of a guy surfing on a wave"
        url="home2.webp"
        collection="Surfboards"
      />
    </div>
    <Action />
    <div className="c-home__vertical-banners">
      <VerticalCards
        name="Man streching in a wetsuit"
        url="home5.webp"
        collection="Wetsuits"
      />
      <VerticalCards
        name="Man walking with converse on"
        url="home6.webp"
        collection="Shoes"
      />
      <VerticalCards
        name="Man posing in a shirt"
        url="home7.webp"
        collection="Shirts"
      />
    </div>
  </React.Fragment>
);

export default Home;
