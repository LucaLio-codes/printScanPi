import { ScanResponse } from "@/types/api";
import axios from "axios";

const BASE_URL = "http://raspberrypi:8000/print";

export const scan = async (filename: string, filetype: string) => {
  return await axios.get<ScanResponse>(`${BASE_URL}/scan`, {
    params: {
      filename: filename || undefined,
      filetype: filetype || undefined,
    },
  });
};
