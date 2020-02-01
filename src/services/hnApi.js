import axios from "axios";
import cheerio from "cheerio";
import { selectFields } from "../utils/selectFields";

export const BaseUrl = "https://hacker-news.firebaseio.com/v0/";
export const newStoriesUrl = `${BaseUrl}newstories.json`;
export const storyUrl = `${BaseUrl}item/`;

export const getWeather = async () => {
  const result = await axios
    .get("https://darksky.net/forecast/41.2647,69.2163/ca24/en")
    .then(async ({ data }) => {
      const weather = await cheerio
        .load(data)(".desc .swap")
        .text();
      return weather;
    });
  return result;
};

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
