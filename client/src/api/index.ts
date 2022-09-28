import axios from "axios";
import { ExchangeParams } from "../store/Slices/currencySlice";

const baseUrl =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/";

export const fetchData = async (params: ExchangeParams) => {
  const response = await axios.get(
    `https://api.freecurrencyapi.com/v1/latest?apikey=FSc8B76lmPYXdYpUVcLRkCFfnAd5Kq1mIEIAxfCy`
  );
  console.log(response);
  return response.data;
};
// export const deleteData = (id: string) => {
//   axios.delete(`${baseUrl}/${id}`);
// };

// export const addData = (item: any) => {
//   axios.post(`${baseUrl}/`, item);
// };

// export const updateData = (item: any) => {
//   axios.put(`${baseUrl}/${item.transactionid}`, item);
// };

// export const getByType = async (type: string) => {
//   const response = await axios.get(`${baseUrl}?type=${type}`);
//   return response.data;
// };

// export const getByStatus = async (status: string) => {
//   const response = await axios.get(`${baseUrl}?status=${status}`);
//   return response.data;
// };

// export const getByName = async (string: string) => {
//   const response = await axios.get(`${baseUrl}?clientname=${string}`);
//   return response.data;
// };
