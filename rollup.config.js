import babel from "rollup-plugin-babel";
import replace from "rollup-plugin-replace";
import { uglify } from "rollup-plugin-uglify";

import { name } from "./package.json";

const exclude = /node_modules/;
const external = id =>
  ["react", "react-router-dom", "prop-types"].includes(id) ||
  id.includes("@babel/runtime");

const cjs = [
  {
    input: "src/index.js",
    output: {
      file: `cjs/${name}.js`,
      format: "cjs"
    },
    external,
    plugins: [
      babel({
        exclude
      }),
      replace({ "process.env.NODE_ENV": JSON.stringify("development") })
    ]
  },
  {
    input: "src/index.js",
    output: {
      file: `cjs/${name}.min.js`,
      format: "cjs"
    },
    external,
    plugins: [
      babel({
        exclude
      }),
      replace({ "process.env.NODE_ENV": JSON.stringify("production") }),
      uglify()
    ]
  }
];

const esm = {
  input: "src/index.js",
  output: {
    file: `esm/${name}.js`,
    format: "esm"
  },
  external,
  plugins: [
    babel({
      exclude,
      runtimeHelpers: true,
      plugins: [["@babel/transform-runtime", { useESModules: true }]]
    })
  ]
};

export default cjs.concat(esm);
