# ASRO — Pages-Home

ASRO公式サイトの新しいホームページ。2026年11月、以前のカード中心のサイトを破棄し、**Moonshot AI の情報設計・余白・タイポグラフィを参考にした独自のエディトリアルデザイン**へ全面刷新しました。Moonshot AI のコード・画像・文言は使用していません。

## コンセプト

- **ASROそのものを主役にする**。「まだない、明日を創る。」をトップに大きく配置。
- **研究に焦点**。Asra Nova、TripleAS、日本語AIへの取り組みを紹介。
- **Kuupを象徴的な製品として紹介**。主要サービスへのリンクあり。
- **ASRO AI / ASRO MOVIA / ASRO Security** を簡潔な3本の柱として紹介。
- SchoolLinkやその他の個別・構想段階のサービスをトップページで主役にしない。
- 白・黒・グレー中心。青を控えめに使用。立体球のオリジナルなビジュアルと微細な動きだけを採用。

## ファイル構成

- `index.html` — HTML、CSS、必要最低限のJavaScriptを1ファイルに集約
- `assets/asro-wordmark.svg` — 提供ロゴから作成したASROワードマークSVG
- `assets/asro-symbol.svg` — 提供ロゴから作成したシンボルSVG

以前の `styles.css`、`app.js`、未使用の旧Kuup SVGは削除済みです。

## ローカル表示

```bash
python3 -m http.server 8000
```

`http://localhost:8000/` を開いてください。外部ライブラリやビルドコマンドは不要です。

## GitHub Pages

Settings → Pages → Deploy from a branch → `main` / `/(root)` を指定すると、Pages公開用の設定ができます。設定後の想定URL:

https://oimo0.github.io/Pages-Home/

**このリポジトリから本番 `asro.jp` へのデプロイは行っていません。**

## 公開前チェック

- ASROの公式メッセージ、各研究テーマの説明、開発ステータスを確認
- 提供された公式ロゴのベクター原本がある場合は差し替え
- 実機でのChrome / Safari、スマホ・タブレット・PC表示の確認
- アクセシビリティとLighthouse測定
- 法的な表記、プライバシーへの導線等、正式公開に必要な情報を追加
- 既存の `asro.jp` にデプロイする場合は既存の動的サービス・ルーティングを調査して別途移行

## 著作物

サイト全体のデザインとレイアウトは独自実装です。参考サイトの文面やアセットはコピーしていません。
