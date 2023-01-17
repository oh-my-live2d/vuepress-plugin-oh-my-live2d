# vuepress-plugin-oh-my-live2d

![GitHub package.json version](https://img.shields.io/github/package-json/v/oh-my-live2d/vuepress-plugin-oh-my-live2d) ![](https://img.shields.io/badge/vuepress2-plugin-green) ![GitHub package.json version](https://img.shields.io/github/package-json/v/oh-my-live2d/oh-my-live2d?label=oh-my-live2d) ![](https://img.shields.io/badge/cubism-2%2F3%2F4-orange)

`vuepress-plugin-oh-my-live2d` 是一个用于 `vuepress 2` 的 `live2d` 看板娘插件，基于 [oh-my-live2d](https://github.com/oh-my-live2d/oh-my-live2d) 开发，并与之同步更新。

## 特征：

- 完全集成 `cubism2`、`cubism4` ，支持所有版本的 `live2d model`。
- 使用 `typescript` 开发时具备完整的类型推导。
- 与 `oh-my-live2d` 版本同步更新。

## 示例：

应用于 `blog` 的示例：https://www.tj520.top

![](https://loclink-1259720482.cos.ap-beijing.myqcloud.com/image/202301122255860.png)

## 开始：

### 安装：

以下方式任选其一即可：

- `npm` 安装：

  ```shell
  npm install vuepress-plugin-oh-my-live2d
  ```

- `yarn` 安装：

  ```shell
  yarn add vuepress-plugin-oh-my-live2d
  ```

- 国内源安装可使用 `tyarn`：

  ```shell
  tyarn add vuepress-plugin-oh-my-live2d
  ```

- `pnpm` 安装：

  ```shell
  pnpm add vuepress-plugin-oh-my-live2d
  ```

### 使用：

在 vuepress 项目的配置文件（`docs/.vuepress/config.ts`）中导入插件方法 `ohmylive2dPlugin`，并在 `plugins` 选项中调用，之后将会以默认配置加载一个远程的模型地址，并装载至`<body>`标签中。

```ts
import { ohmylive2dPlugin } from 'vuepress-plugin-oh-my-live2d';

export default defineUserConfig({
  plugins: [
    ohmylive2dPlugin({
      // 在这里进行配置
    })
  ]
  //  ...more
});
```

## 自定义配置

- 请参考：[oh-my-live2d 配置](https://oh-my-live2d.netlify.app/configure/)

## 关于：

本项目不提供任何模型的下载地址，如有需要请自行寻找。

### 讨论：

- Q 群：474032914

## 许可证书：

[MIT](https://github.com/oh-my-live2d/vuepress-plugin-oh-my-live2d/blob/master/license)
