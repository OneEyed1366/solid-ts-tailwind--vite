import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import Icons from "unplugin-icons/vite";
import AutoImport from "unplugin-auto-import/vite";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      src: path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    solidPlugin(),
    AutoImport({
      resolvers: [],
    }),
    Icons({
      compiler: "solid",
      defaultClass: "w-7 h-7 inline-block",
    }),
  ],
  build: {
    target: "esnext",
  },
});
