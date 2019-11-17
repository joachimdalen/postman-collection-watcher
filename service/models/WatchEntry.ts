import { WatchType } from "./WatchType";

export interface WatchEntry {
  Id: string; // Used internally for identification
  Name: string;
  Interval: number;
  Source: string;
  Type: WatchType;
  Active: boolean;
  LastChecked: Date;
}
