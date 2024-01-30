import { esbuildPlugin } from "@web/dev-server-esbuild";
import { fileURLToPath } from 'node:url';

export default {
  nodeResolve: {
    exportConditions: ["development"],
  },
  plugins: [
    esbuildPlugin({
      ts: true,
      target: "ES2022",
      tsconfig: fileURLToPath(new URL('./tsconfig.json', import.meta.url)),
    }),
  ],
};
