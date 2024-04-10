// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background_a: string;
      background_b: string;
      primary: string;
      secondary: string;
      tertiary: string;
      separator: string;
      error: string;
      success: string;
      warning: string;
    };
    size: {
      maxWidthPage: string;
    },
    border: {
      radius: string;
    }
  }
}
