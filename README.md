# ASRO Corporate Website / Pages-Home

ASRO公式サイト Ver.2.0 の**白を基調としたデザイン刷新版**。静的なHTML・CSS・JavaScriptだけで動きます。

> このリポジトリは開発用。既存の `asro.jp` 本番サイトや他のASROサービスは変更していません。

## デザインと実装

- ホワイトベースのミニマルなコーポレートデザイン
- 共有されたASROのワードマーク・青いシンボル・Kuupのロゴから作成した軽量SVG
- ヒーロー、事業紹介（AI / MOVIA / Security）、プロダクト、理念、技術紹介、フッター
- スマートフォン・タブレット・PC対応
- モバイルメニュー、製品詳細ダイアログ、スクロール演出
- `prefers-reduced-motion` / キーボード操作 / スキップリンクへの対応
- 外部JavaScriptライブラリ・ビルド工程不要

## 構成

```text
index.html
styles.css
app.js
assets/
  asro-wordmark.svg
  asro-symbol.svg
  kuup-logo.svg
```

## ローカル実行

```bash
python3 -m http.server 8000
```

ブラウザで `http://localhost:8000/` を開いてください。

## GitHub Pagesのプレビュー

Repository Settings → Pages → Build and deployment → Deploy from a branch → `main` / `/(root)` → Save。

公開設定が完了していれば `https://oimo0.github.io/Pages-Home/` で表示できます。公開設定と実際のサイト表示は別途確認が必要です。

## 本番反映前の確認

- 正式な運営情報・各製品の公開ステータス・説明を確認する
- 初期デザインで追加した「ASRO-Hub」等、構想段階の名称を公開するか確認する
- 正式なプライバシーポリシーや会社情報へのリンクを追加する
- Lighthouse、PC・スマホ実機、Safari/Chrome、画面サイズのチェック
- `asro.jp` の既存URLやCloudflare設定との整合性を確認する
- 本番への自動デプロイはまだ設定していません

## 備考

ロゴは提供された画像を輪郭ベースでSVG化しています。元データの正式なベクター版がある場合はそちらへ置き換えてください。
