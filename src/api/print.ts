import { ScanResponse, FileType } from "@/types/api";
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
export const print = async (index: number) => {
  return await axios.get<ScanResponse>(`${BASE_URL}/print/${index}`);
};
export const printFiles = async (file: File) => {
  let formData = new FormData();
  formData.append("file", file);
  const headers = {
    Accept: "application/json",
    "Content-Type": "multipart/form-data",
  };
  return await axios.post<ScanResponse>(`${BASE_URL}/files`, formData, {
    headers: headers,
  });
};
