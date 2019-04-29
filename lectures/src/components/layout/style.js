import { createGlobalStyle } from "styled-components"
import { lighten, desaturate } from "polished"

export const GlobalStyle = createGlobalStyle`
html{
    font-family:Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  font-size: 12px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  height:100%;
  width:100%;
}
  body {
    height:100%;
    width:100%; 
    margin:0;
    padding:0;    
    color: rgb(0,10,0);
    background-color:${p => lighten(0.14, desaturate(0.2, "#B5FBDD"))} ;
  line-height: 1.5;
  font-weight: normal;
  word-wrap: break-word;
  font-kerning: normal;
  -moz-font-feature-settings: "kern", "liga", "clig", "calt";
  -ms-font-feature-settings: "kern", "liga", "clig", "calt";
  -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
  font-feature-settings: "kern", "liga", "clig", "calt";
  }
  
a{
  text-decoration:none
}
a:visited{
  color:blue
}

`
