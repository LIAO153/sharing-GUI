import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import electron from "vite-plugin-electron";
import {createRequire} from "module"; // Bring in the ability to create the 'require' method
import svgr from "vite-plugin-svgr";
// import {resolve} from "path"; // 导入 path 模块，帮助我们解析路径


const require = createRequire(import.meta.url); // construct the require method
const pkg = require("./package.json");

// https://vitejs.dev/config/
export default defineConfig({
    base:"./",
    build: {
        outDir: "vite-build",
        emptyOutDir: true,
    },
    plugins: [
        react(),

        electron({
            main: {
                entry: "./main.cjs",
            },
        }),
        svgr(),
    ],
    server: {
        host: pkg.env.SERVER_HOST,
        port: pkg.env.SERVER_PORT,
    },
});
