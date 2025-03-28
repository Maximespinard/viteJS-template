declare module '*.css';

declare module '*.svg' {
  import * as React from 'react';
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;
  const content: string;
  export default content;
}

declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.js' {
  const value: string;
  export default value;
}
