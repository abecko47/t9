import axios from "axios";
import {T9Request} from "../model/T9Request";
import {ApiConstants} from "../data/ApiConstants";

const url = 'http://127.0.0.1:3001'

export const ApiService = () => {
  const getWords = (numbers:string) => {
        return axios.post(`${url}/t9`, {
            numbers: numbers,
            words: ApiConstants.WORDS
        });
  }

  return {
      getWords
  }
}