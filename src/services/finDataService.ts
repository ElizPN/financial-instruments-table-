import axios from "axios";
import { FinDataItem } from "../hooks/useFinData";

const apiURL = "http://localhost:3000/finData.json";

type FinDataServiceType = {
  getData: () => Promise<FinDataItem[]>;
};
// function that creates and returns service for fetching data
export const getFinDataService = () => {
  const service: FinDataServiceType = {
    getData: async () => {
      try {
        const response = await axios.get(apiURL);
        return response.data;
      } catch (error) {
        throw error;
      }
    },
  };

  return service;
};
