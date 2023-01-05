import path from 'path';
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
