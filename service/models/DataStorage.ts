import { WatchEntry } from "./WatchEntry";

export interface DataStorage {
  watchers: WatchEntry[];
  outputDirectory: string;
}
