import { defineConfig } from "vite";

// Landing estática: o index.html é a página; css/js/imagens/vídeo ficam em /public
// e são servidos sem alteração (scripts de tracking da BuyGoods/H&W intactos).
export default defineConfig({
  server: { host: "::", port: 8080 },
});
