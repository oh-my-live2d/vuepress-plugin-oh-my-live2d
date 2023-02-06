import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ohmylive2dPlugin = (options = {}) => {
  return function () {
    const omlClienFilePath = path.resolve(__dirname, './oml-clien-file.js').replaceAll('\\', '/');
    return {
      name: 'vuepress-plugin-oh-my-live2d',
      define: {
        omlOptions: options
      },
      multiple: false,
      clientConfigFile: omlClienFilePath
    };
  };
};
export { ohmylive2dPlugin };
