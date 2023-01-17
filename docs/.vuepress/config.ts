import { defineUserConfig } from 'vuepress';
import { ohmylive2dPlugin } from '../../src/index';
import { copyCodePlugin } from 'vuepress-plugin-copy-code2';
export default defineUserConfig({
  plugins: [ohmylive2dPlugin({}), copyCodePlugin()]
});
