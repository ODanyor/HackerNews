/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { getStory } from "../services/hnApi";
import {
  StoryWrapper,
  StoryTitle,
  StoryMeta,
  StoryMetaElement
} from "../styles/StoryStyles";
import { mapTime } from "../mappers/mapTime";

function Story({ storyId }) {
  const [story, setStory] = useState({});
  useEffect(() => {
    getStory(storyId).then(data => data && data.url && setStory(data));
  }, []);

  return story && story.url ? (
    <StoryWrapper data-testedid="story">
      <StoryTitle>
        <a href={`${story.url}`}>{story.title}</a>
      </StoryTitle>
      <StoryMeta>
        <span className="story__by" data-testedid="story-by">
          <StoryMetaElement color="#000">By: </StoryMetaElement>
          {story.by}
        </span>
        <br />
        <span className="story__time" data-testedid="story-time">
          <StoryMetaElement color="#000">Posted: </StoryMetaElement>
          {mapTime(story.time)}
        </span>
      </StoryMeta>
    </StoryWrapper>
  ) : null;
}

export default Story;
