import { defineClientConfig } from '@vuepress/client';
const { loadLive2DModel } = require('oh-my-live2d')
const oml = loadLive2DModel(omlConfig);
export default defineClientConfig({
    enhance({ app }) {
        app.config.globalProperties.$oml = oml;
    }
});
