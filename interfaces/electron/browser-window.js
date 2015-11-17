declare module 'browser-window' {
  declare class exports {
    constructor(options: Object): void;
    on(event: string, cb: Function): void;
    destroy(): void;
    loadUrl(url: string, options?: Object): void;
  }
}
