import { createGlobalStyle } from "styled-components";

export const GlobalIconFont = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1601600215046'); /* IE9 */
  src: url('./iconfont.eot?t=1601600215046#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1601600215046') format('woff'),
  url('./iconfont.ttf?t=1601600215046') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1601600215046#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;
