import { defineComponent, DefineComponent } from 'vue';
import type { RouteMeta, NavigationGuard } from 'vue-router';

// declare module '*.vue' {
//   import { DefineComponent } from 'vue';
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
//   const component: DefineComponent<{}, {}, any>;
//   export default component;
// }

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
let component: DefineComponent<{}, {}, any>;

export type Component<T = any> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<typeof component>)
  | (() => Promise<T>);

export interface AppRouteRecordRaw {
  path: string;
  name?: string | symbol;
  meta?: RouteMeta;
  redirect?: string;
  component: Component | string;
  children?: AppRouteRecordRaw[];
  alias?: string | string[];
  props?: Record<string, any>;
  beforeEnter?: NavigationGuard | NavigationGuard[];
  fullPath?: string;
}
