import React from "react";
import styled from "styled-components";
import logo from "../static/news.svg";

export const NewsIllustrator = () => {
  const Canvas = styled.div``;
  return (
    <Canvas>
      <img src={logo} width="350" alt="news" />
    </Canvas>
  );
};
