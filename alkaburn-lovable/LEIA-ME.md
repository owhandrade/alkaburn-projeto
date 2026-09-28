# AlkaBurn VSL: projeto pronto para a Lovable

## Estrutura
- `index.html`: a página (links de checkout já com o seu afiliado)
- `public/`: css, js, imagens, fontes e vídeo (servidos como estão)
- `package.json` + `vite.config.js`: projeto Vite, o formato que a Lovable usa

## Como subir
1. Crie um repositório no GitHub e envie o conteúdo desta pasta (a raiz do repo deve ter o `index.html`).
2. Na Lovable, importe/conecte esse repositório (GitHub → Import).
3. Publique (Publish) e confira se os botões "Add to cart" abrem o checkout da BuyGoods.

## Links de checkout
Ficam em dois lugares no `index.html`: no objeto `CHECKOUT_LINKS` (bottles2 / bottles3 / bottles6)
e nos 9 botões `href="https://buygoods.com/..."`. Para trocar, faça localizar/substituir no arquivo inteiro.
