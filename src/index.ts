//console.log("Hello, Webpack!");
// src/index.ts
import './styles/style.css';
import { App } from './app';

window.addEventListener('DOMContentLoaded', () => {
  new App();
});