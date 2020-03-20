import axios from "axios";
import { selectFields } from "../utils/selectFields";

export const BaseUrl = "https://hacker-news.firebaseio.com/v0/";
export const newStoriesUrl = `${BaseUrl}newstories.json`;
export const storyUrl = `${BaseUrl}item/`;

export const getStoryids = async () => {
  const result = await axios.get(newStoriesUrl).then(({ data }) => data);
  return result;
};

export const getStory = async storyId => {
  const result = await axios
    .get(`${storyUrl + storyId}.json`)
    .then(({ data }) => data && selectFields(data));

  return result;
};
