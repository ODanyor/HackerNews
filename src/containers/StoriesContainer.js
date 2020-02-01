import React, { useEffect, useState } from "react";
import { getStoryids, getWeather } from "../services/hnApi";
import Story from "../components/Story";
import {
  GlobalStyle,
  StoriesContainerWrapper
} from "../styles/StoriesContainerStyles";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import { NewsIllustrator } from "../components/Illustrator";

function StoriesContainer() {
  const { count } = useInfiniteScroll();
  const [weather, setWeather] = useState();
  const [storyIds, setStoryIds] = useState([]);
  useEffect(() => {
    getWeather().then(data => data && setWeather(data));
    getStoryids().then(data => data && setStoryIds(data));
  }, []);
  console.log(weather);

  return (
    <>
      <GlobalStyle />
      <StoriesContainerWrapper data-testedid="stories-container">
        <h1>Hacker news</h1>
        <span>{weather}</span>
        <NewsIllustrator />
        {storyIds.slice(0, count).map(storyId => (
          <Story key={storyId} storyId={storyId} />
        ))}
      </StoriesContainerWrapper>
    </>
  );
}

export default StoriesContainer;
