import * as fs from "fs";

export const fileExits = (filepath: string): Promise<boolean> => {
  return new Promise(resolve =>
    fs.access(filepath, error => resolve(error ? false : true))
  );
};
