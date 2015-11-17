declare module app {
  declare function on(event: string, cb: Function): void;
  declare function quit(): void;
}
