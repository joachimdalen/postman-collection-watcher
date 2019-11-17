import { DataService } from "../services/DataService";
import { use as chaiUse, expect, assert } from "chai";
import { DataStorage } from "../models/DataStorage";
import chaiFs from "chai-fs";
describe("DataService", function() {
  before(function() {
    chaiUse(chaiFs);
  });

  it("is able to load config if not saved from before", async function() {
    var service: DataService = new DataService();
    var config = await service.getStored();
    expect(config).to.not.be.null;
  });

  it("is able to write config to filesystem", async function() {
    var service: DataService = new DataService();
    var newConfig: DataStorage = {
      watchers: [],
      outputDirectory: "output/directory"
    };

    await service.saveStored(newConfig);
  });

  it("is able to load config from filesystem", async function() {
    var service: DataService = new DataService();
    var newConfig: DataStorage = {
      watchers: [],
      outputDirectory: "output/directory"
    };

    await service.saveStored(newConfig);

    var config = await service.getStored();
    expect(config.outputDirectory).to.be.equal("output/directory");
  });
});
