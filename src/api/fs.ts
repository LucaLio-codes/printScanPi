import axios from "axios";

const BASE_URL = "http://raspberrypi:8000/fs";

export const getScannedItemByIndex = async (index: number) => {
  return await axios.get<Blob>(
    `${BASE_URL}/files/${index}/${new Date().getMilliseconds()}`
  );
};

export const getAllScannedItems = async () => {
  return await axios.get(`${BASE_URL}/scans`);
};

export const getPrintables = async () => {
  return await axios.get(`${BASE_URL}/print/`);
};

export const deleteScannedItemByIndex = async (index: number) => {
  return await axios.delete(`${BASE_URL}/files/${index}`);
};
