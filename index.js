const config = require("../config/config");

class Plugin {
  static instance = null;

  #ctx;
  #config;

  constructor(ctx) {
    if (Plugin.instance) return Plugin.instance;

    this.#ctx = ctx;
    this.#config = null;
    this.logger = null;
    this.getConfig = () => void 0;

    Plugin.instance = this;
  }

  static getInstance() {
    if (!Plugin.instance) throw new Error("Plugin not initialized");
    return Plugin.instance;
  }

  onLoad() {
    const { TREM, info, utils } = this.#ctx;

    const defaultDir = utils.path.join(
      info.pluginDir,
      "./change-audio/resource/default.yml"
    );
    const configDir = utils.path.join(
      info.pluginDir,
      "./change-audio/config.yml"
    );
    this.#config = new config(
      "change-audio",
      this.logger,
      utils.fs,
      defaultDir,
      configDir
    );
    this.getConfig = this.#config.getConfig;
    this.folder = this.#config.getConfig().folder;

    const audioKeys = [
      "ALERT",
      "EEW",
      "INTENSITY",
      "PGA1",
      "PGA2",
      "REPORT",
      "SHINDO0",
      "SHINDO1",
      "SHINDO2",
      "TSUNAMI",
      "UPDATE",
      "CANCEL",
    ];

    audioKeys.forEach((key) => {
      TREM.constant.AUDIO[key] = this.#config.getConfig().individual_path
        ? new Audio(this.#config.getConfig()[key])
        : new Audio(`${this.folder}${key}.wav`);
    });
  }
}

module.exports = Plugin;
