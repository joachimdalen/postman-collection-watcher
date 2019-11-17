import { DataService } from "./services/DataService";

var s = new DataService().saveStored({
  watchers: [],
  outputDirectory: "output/directory"
});
