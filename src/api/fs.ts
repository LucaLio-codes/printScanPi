import axios from "axios";

const BASE_URL = "http://raspberrypi:8000/fs";

export const getScannedItemByIndex = async (index: number) => {
  return await axios.get(`${BASE_URL}/scans/${index}`);
};
