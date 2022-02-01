import axios from "axios";
import {ApiConstants} from "../data/ApiConstants";

export const ApiService = () => {
  const getWords = (numbers:string) => {
        return axios.post(`${ApiConstants.URL}/t9`, {
            numbers: numbers,
            words: ApiConstants.WORDS
        });
  }

  return {
      getWords
  }
}