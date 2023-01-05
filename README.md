# vuepress-plugin-oh-my-live2d

![](https://img.shields.io/badge/version-0.0.8-blue) ![](https://img.shields.io/badge/vuepress2-plugin-green) ![](https://img.shields.io/badge/oh--my--live2d-v0.0.15-orange) ![](https://img.shields.io/badge/cubism-2%2F3%2F4-orange)

`vuepress-plugin-oh-my-live2d` 是一个用于 `vuepress 2` 的 `live2d` 看板娘插件，基于 [oh-my-live2d](https://github.com/oh-my-live2d/oh-my-live2d)开发，并与之同步更新。

## 特征：

- 完全集成 `cubism2`、`cubism4` ，支持所有版本的 `live2d model`。
- 使用 `typescript` 开发时具备完整的类型推导。
- 与 `oh-my-live2d` 版本同步更新。

## 示例：

应用于 `blog` 的示例：https://www.tj520.top

![](https://loclink-1259720482.cos.ap-beijing.myqcloud.com/image/20230105220236.png)

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
  plugins: [ohmylive2dPlugin()]
  //  ...more
});
```

### 自定义配置

`ohmylive2dPlugin` 方法支持传入一个配置对象来自定义一些基础样式，示例如下。

```ts
import { ohmylive2dPlugin } from 'vuepress-plugin-oh-my-live2d';

export default defineUserConfig({
  plugins: [
    ohmylive2dPlugin({
      size: 400,
      x: 1,
      y: 1
    })
  ]
  //  ...more
});
```

有关配置属性说明请查看[配置属性](#配置属性说明)

## 配置属性说明：

### modelSource

- 类型：`string`
- 默认值：`https://oml-api.tj520.top/Pio/animal-02/index.json`

Live2D 的模型来源，支持本地路径或远程 `url`，默认为远程路径，组件已自带。

---

### size

- 类型：`number`
- 默认值：`280`

Live2D 模型包装器大小，可以理解为装载 Live2D 模型的 `div` 元素大小。

---

### x

- 类型：`number`
- 默认值：`0`

`live2d model` 相对于画布的 `x` 轴距离，值越大越靠右。

---

### y

- 类型：`number`
- 默认值：`0`

`live2d model` 相对于画布的 `y` 轴距离，值越大越靠上。

---

### scale

- 类型：`number | [x: number, y: number]`
- 默认值：`1`

`live2d model` 的缩放比例，当值为 1 时表示缩放比例是 100%，小数则表示缩小。值可以是一个 `number` 类型或一个由`x`和`y`组成的数组类型。当为`number`类型时，表示同时作用 x 轴 和 y 轴，当值为数组类型时，索引 0 作用于 x 轴方向，索引 1 作用于 y 轴方向。

---

### sayHello

- 类型：`boolean`
- 默认值：`true`

是否在装载过程的初始化阶段打印`oh-my-live2d`的基本信息，默认为打印。

---

### transitionTime

- 类型：`number`
- 默认值：`1000`

模型装载完成后显示的过渡动画时长，单位为 ms

---

### backgroundColor

- 类型：`string`
- 默认值：`rgba(0, 0, 0, 0)`

模型包装器的背景颜色，方便开发调试时查看画布大小，值可以是表示颜色的 `rgb` 或 `rgba` 或 `16 进制`，默认为透明。

---

### tips

- 类型：`Tips`
- 默认值：

  ```ts
  // default config
  const defaultConfig = {
    // ...more
    tips: {
      idleTips: {
        //....more
      }
    }
  };
  ```

定义消息提示配置，可配置闲置时提示信息内容、持续时间、提示优先级、以及提示间隔。

---

### tips.idleTips

- 类型：`IdleTipsConfig | false`
- 默认值：

  ```ts
  {
    message: [
      '今天学习了吗？',
      '整理一下学习思路吧~',
      '最近在玩什么游戏呢？',
      '失去人性，失去很多；失去兽性，失去一切。  ——《三体》刘慈欣',
      '最近在看什么书呢？',
      'react18的新特性，你了解了吗？',
      'vite都出到4啦，还不赶紧去学一下？',
      'vue3正式版已经发布很久了，你会用了吗？',
      '头顶凉飕飕的？',
      '了解真相，才能获得真正的自由~'
    ],
    showTime: 5000,
    interval: 5000,
    priority: 2
  }
  ```

配置闲置状态下的提示，为 `false` 时关闭闲置状态提示。

---

### tips.idleTips.message

- 类型：`string | string[]`

提示的内容,值可为`sring[]`类型或`string`类型，为数组类型时，将随机抽取一条显示。

---

### tips.idleTips.showTime

- 类型：`number`
- 默认：`5000`

提示的持续时长，单位为 ms。

---

### tips.idleTips.interval

- 类型：`number`
- 默认：`5000`

循环提示的间隔时间，单位为 ms。

---

### tips.idleTips.priority

- 类型： `number`
- 默认：`2`

消息提示的优先级

## 关于：

本项目不提供任何模型的下载地址，如有需要请自行寻找。
