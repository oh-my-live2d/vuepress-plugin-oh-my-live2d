import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ohmylive2dPlugin = (config = {}) => {
  return function () {
    return {
      name: 'vuepress-plugin-oh-my-live2d',
      define: {
        omlConfig: config
      },
      multiple: false,
      clientConfigFile: path.resolve(__dirname, './oml-clien-file.js')
    };
  };
};
export { ohmylive2dPlugin };
