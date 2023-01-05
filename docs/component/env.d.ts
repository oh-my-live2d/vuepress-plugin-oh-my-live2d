export {};

declare module 'vue' {
  interface ComponentCustomProperties {
    $oml: any;
  }
}
