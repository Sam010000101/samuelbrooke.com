// types/global.d.ts

import type { JSX as ReactJSX } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements extends ReactJSX.IntrinsicElements {}
  }
}
