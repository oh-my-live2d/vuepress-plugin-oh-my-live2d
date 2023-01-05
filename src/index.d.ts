import type { PluginObject } from 'vuepress';
import type { Config } from 'oh-my-live2d';
declare const ohmylive2dPlugin: (config?: Config) => () => PluginObject;
declare const omlConfig: Config;
export { ohmylive2dPlugin };
