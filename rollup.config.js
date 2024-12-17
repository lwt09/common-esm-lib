import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import json from "@rollup/plugin-json";

export default {
  input: "src/index.js",
  output: [
    {
      file: "dist/index.mjs",
      format: "esm",
    },
    {
      file: "dist/index.cjs",
      format: "cjs",
    },
  ],
  plugins: [json(), resolve(), commonjs()],
  watch: {
    include: "src/**",
    exclude: "node_modules/**",
  },
};
