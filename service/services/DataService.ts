import { readFile, writeFile, exists, mkdir } from "fs";
import { homedir } from "os";

import { promisify } from "util";
import { DataStorage } from "../models/DataStorage";
import path from "path";
export class DataService {
  private storageDirectory = path.join(homedir(), "postman-collection-watcher");
  private storageFile = path.join(
    this.storageDirectory,
    "postman-collection-watcher.config.json"
  );

  public async getStored(): Promise<DataStorage> {
    var readFileAsync = promisify(readFile);
    var existsAsync = promisify(exists);

    if (!(await existsAsync(this.storageFile))) {
      return Promise.resolve({} as DataStorage);
    }

    var content = await readFileAsync(this.storageFile);
    var jsonString = JSON.parse(content.toString());
    return jsonString;
  }

  public async saveStored(data: DataStorage) {
    var existsAsync = promisify(exists);
    var mkDirAsync = promisify(mkdir);

    if (!(await existsAsync(this.storageDirectory))) {
      await mkDirAsync(this.storageDirectory);
    }

    var writeFileAsync = promisify(writeFile);

    await writeFileAsync(this.storageFile, JSON.stringify(data));
  }
}
