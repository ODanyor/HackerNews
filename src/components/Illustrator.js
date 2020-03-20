import React from "react";
import styled from "styled-components";
import logo from "../static/news.svg";

export const NewsIllustrator = () => {
  const Canvas = styled.div`
    position: relative;
    max-width: 550px;
  `;
  return (
    <Canvas>
      <img src={logo} width="100%" alt="news" />
    </Canvas>
  );
};
