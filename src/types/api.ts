export interface ScanResponse {
  status: number;
  stdout: string;
  stderr: string;
  warnings: string[];
  filename: string;
  filetype: string;
  fullname: string;
  scanIndex: number;
}

export enum FileType {
  PDF = "pdf",
  PNG = "png",
  TXT = "txt",
}
