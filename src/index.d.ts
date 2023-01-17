import type { PluginObject } from 'vuepress';
import type { Options } from 'oh-my-live2d';
declare const ohmylive2dPlugin: (options?: Options) => () => PluginObject;
declare const omlOptions: Options;
export { ohmylive2dPlugin };
