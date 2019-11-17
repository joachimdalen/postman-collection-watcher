import { WatchEntry } from "../models/WatchEntry";
import uuid from "uuid/v4";
export class WatcherService {
  constructor() {
    this.watchers = [] as WatchEntry[];
  }
  private watchers: WatchEntry[];

  public addWatcher(entry: WatchEntry): WatchEntry {
    if (entry.Id === undefined) {
      entry.Id = uuid();
    }
    return entry;
  }

  public removeWatcher(uuid: string) {
    var index = this.watchers.findIndex(w => w.Id === uuid);
    this.watchers.splice(index, 1);
  }
}
