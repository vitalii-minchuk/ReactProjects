import axios from "axios";
import { Test, Word } from "../types";

const client = axios.create({
  baseURL: "https://632e01bab37236d2ebe4bebc.mockapi.io",
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
  fetchTestsData: async () => {
    const { data } = await client.get<Test[]>("/tests");
    console.log(data);
    return data;
  },
  addTest: async (obj: Test) => {
    const { data } = await client.post<Test>("/tests", obj);
    return data;
  },
};

export default API;
