import { finData } from "../configurations/fin-data";
import { FinDataItem } from "../hooks/useFinData";

type FinDataServiceType = {
  getData: () => FinDataItem[];
};
// function that creates and returns service with fake data
export const getFinDataService = () => {
  const service: FinDataServiceType = {
    getData: () => {
      return finData;
    },
  };

  return service;
};