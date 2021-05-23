import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    gradient: string;

    colors: {
      primary: string;
      secondary: string;
      gray: string;
      background: string;
      text: string;
    },
  }
}
