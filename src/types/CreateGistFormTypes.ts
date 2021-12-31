export interface gistDataFormType {
  description: string;
  fileName: string;
  content: string;
  privacy: boolean;
}
export type Files = {
  [fileName: string]: {
    content: string
  }
}
export interface dataType {
  description: string,
  privacy: boolean,
  files: Files
}



