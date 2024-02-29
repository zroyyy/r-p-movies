import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Request";

const Home = () => {
  return (
    <div>
      <Main />
      <Row title="Populares" fetchURL={requests.requestPopular} />
    </div>
  );
};

export default Home;
