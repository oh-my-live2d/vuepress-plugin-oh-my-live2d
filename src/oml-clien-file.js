import { defineClientConfig } from '@vuepress/client';
import { loadLive2DModel } from 'oh-my-live2d';
const oml = loadLive2DModel(omlConfig);
export default defineClientConfig({
    enhance({ app }) {
        app.config.globalProperties.$oml = oml;
    }
});