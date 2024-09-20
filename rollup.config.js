import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import url from "@rollup/plugin-url";
import svgr from "@svgr/rollup";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
        exports: "named",
      },
      {
        file: "dist/index.esm.js",
        format: "esm",
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      url({
        include: ["**/*.svg"], // Handle SVG as URLs
        limit: 0,
        publicPath: "/assets/images/",
      }),
      svgr(), // Handle SVG as React components
    ],
    external: ["react", "react-dom", "styled-components"],
  },
];
