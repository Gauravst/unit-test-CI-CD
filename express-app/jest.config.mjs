// jest.config.mjs
import { pathsToModuleNameMapper } from "ts-jest";
import { readFileSync } from "fs";
import { resolve } from "path";

// Parse tsconfig paths if needed
const tsconfig = JSON.parse(readFileSync("./tsconfig.json", "utf8"));

export default {
  preset: "ts-jest/presets/default-esm",
  testEnvironment: "node",
  extensionsToTreatAsEsm: [".ts"],
  transform: {
    "^.+\\.ts$": ["ts-jest", { useESM: true }],
  },
  moduleNameMapper: pathsToModuleNameMapper(
    tsconfig.compilerOptions?.paths || {},
    { prefix: "<rootDir>/" },
  ),
};
