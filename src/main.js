import "./global.css";

import App from "./index.svelte";
import HMR from "@roxi/routify/hmr";

const app = HMR(App, {target: document.body}, "routify-app");

export default app;
