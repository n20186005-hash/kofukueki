# KofukuEki.com

北海道帯広市の幸福駅を紹介する、日本語専用の非公式観光サイトです。

- Astro 7 / TypeScript
- Tailwind CSS 4
- pnpm
- Cloudflare Workers Static Assets
- データベース、ログイン、CMSなし
- GA4: `G-HXM22WWPKP`
- 実景写真はローカル配信・WebP最適化済み

## ローカル開発

Node.js 22 LTS 以降と pnpm を用意してください。

```bash
corepack enable
pnpm install
pnpm dev
```

`http://localhost:4321` を開きます。

## 型・ビルド確認

```bash
pnpm check
pnpm build
pnpm preview
```

静的出力は `dist/` に生成されます。

## Cloudflare Workers へデプロイ

1. Cloudflare にログインします。
2. `wrangler.jsonc` の Worker 名を必要に応じて変更します。
3. 以下を実行します。

```bash
pnpm wrangler login
pnpm deploy
```

`wrangler.jsonc` は Static Assets を先に配信し、存在しないパスのうち `/api/health` のみ Worker が応答する構成です。

### カスタムドメイン

Cloudflare Dashboard の **Workers & Pages → kofuku-eki-com → Settings → Domains & Routes** から `kofukueki.com` と `www.kofukueki.com` を割り当てます。`www` は主ドメインへリダイレクトする運用を推奨します。

## 主な編集場所

- `src/data/site.ts` — 基本情報、年表、FAQ、周辺グルメ
- `src/pages/` — 各ページ
- `src/styles/global.css` — 色、書体、共通表現
- `public/images/` — 最適化済み写真
- `public/_headers` — セキュリティ、CSP、キャッシュ
- `worker/index.ts` — Worker API

## 更新時の注意

- バス時刻を本文へ固定しないでください。公式の改定に追従しづらくなるためです。
- 営業時間には必ず確認日を付け、現地掲示を優先する表現を残してください。
- 外部写真を追加する場合は、商用利用、改変、クレジット表示の条件を確認し、`/credits/` と `PHOTO_CREDITS.md` を更新してください。
- このサイトは非公式です。「公式サイト」「公式ショップ」などの表記は使用しないでください。

## 写真ライセンス

写真ごとの作者・原典・ライセンスは `PHOTO_CREDITS.md` およびサイト内 `/credits/` に記載しています。ソースコードと写真は同一ライセンスではありません。
