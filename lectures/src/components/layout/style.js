import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
html{
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  font-size: 14px;
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
    background:#E4FFF9;
    color: rgb(0,10,0);
  font-size: 16px;
  line-height: 1.5;
  font-weight: normal;
  word-wrap: break-word;
  font-kerning: normal;
  -moz-font-feature-settings: "kern", "liga", "clig", "calt";
  -ms-font-feature-settings: "kern", "liga", "clig", "calt";
  -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
  font-feature-settings: "kern", "liga", "clig", "calt";
  }


`
