const config = require("../config/config");

class Plugin {
  static instance = null;

  #ctx;
  #config

  constructor(ctx) {
    if (Plugin.instance) return Plugin.instance;

    this.#ctx = ctx;
    this.#config = null;
    this.logger = null;
    this.getConfig = ()=> void 0;

    Plugin.instance = this;
  }

  static getInstance() {
    if (!Plugin.instance) throw new Error("Plugin not initialized");
    return Plugin.instance;
  }

  onLoad() {
    const { TREM, info , utils} = this.#ctx;

    const defaultDir = utils.path.join(info.pluginDir,"./change-audio/resource/default.yml");
    const configDir = utils.path.join(info.pluginDir, "./change-audio/config.yml");
    this.#config = new config("change-audio", this.logger, utils.fs, defaultDir, configDir);
    this.getConfig = this.#config.getConfig;

    TREM.constant.AUDIO.ALERT = new Audio(this.#config.getConfig().ALERT);
    TREM.constant.AUDIO.EEW = new Audio(this.#config.getConfig().EEW);
    TREM.constant.AUDIO.INTENSITY = new Audio(this.#config.getConfig().INTENSITY);
    TREM.constant.AUDIO.PGA1 = new Audio(this.#config.getConfig().PGA1);
    TREM.constant.AUDIO.PGA2 = new Audio(this.#config.getConfig().PGA2);
    TREM.constant.AUDIO.REPORT = new Audio(this.#config.getConfig().REPORT);
    TREM.constant.AUDIO.SHINDO0 = new Audio(this.#config.getConfig().SHINDO0);
    TREM.constant.AUDIO.SHINDO1 = new Audio(this.#config.getConfig().SHINDO1);
    TREM.constant.AUDIO.SHINDO2 = new Audio(this.#config.getConfig().SHINDO2);
    TREM.constant.AUDIO.TSUNAMI = new Audio(this.#config.getConfig().TSUNAMI);
    TREM.constant.AUDIO.UPDATE = new Audio(this.#config.getConfig().UPDATE);
    TREM.constant.AUDIO.CANCEL = new Audio(this.#config.getConfig().CANCEL);
  }
}

module.exports = Plugin;