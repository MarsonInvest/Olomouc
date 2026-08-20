# Rezidence Spojenců 705 - statický web

Web je bez frameworku a bez build procesu. Kořenová stránka je `index.html`.

## Vercel

1. Nahraj tento adresář do repozitáře nebo jej přetáhni do nového Vercel projektu.
2. Zvol **Other** / statický projekt.
3. Nevyplňuj build command ani output directory.
4. Vercel automaticky naservíruje `index.html`.

Fotografie, průhledná značka Marson Invest, písmo Geist, CSS i JavaScript jsou lokálně v adresáři `assets/`, `styles.css` a `app.js`. Závěrečný film ve footeru zůstává na uživatelem dodaném CloudFront URL; při nedostupném připojení web bezpečně zobrazí tmavý podklad bez videa.
