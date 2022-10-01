import axios from "axios";
import { Word } from "../types";

const client = axios.create({
  baseURL: "https://632e01bab37236d2ebe4bebc.mockapi.io/",
});

const API = {
  fetchWordsData: async () => {
    const { data } = await client.get<Word[]>(`/words`);
    return data;
  },
  addWord: async (obj: Word) => {
    const { data } = await client.post<Word>("/words", obj);
    return data;
  },
};

export default API;
