import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import sass from "rollup-plugin-sass";
import commonjs from "@rollup/plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import svgr from "@svgr/rollup";
import url from "@rollup/plugin-url";
import { terser } from "rollup-plugin-terser";

import packageJson from "./package.json";

export default {
  inlineDynamicImports: true,
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true
    }
  ],
  plugins: [
    url(),
    svgr(),
    external(),
    resolve(),
    commonjs(),
    terser(),
    typescript({ rollupCommonJSResolveHack: true,
      clean: true, }),
    sass({
      insert: true
    })
  ],
  external: ["react", "react-dom", "styled-components"],
};
