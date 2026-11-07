# ASRO Corporate Website — Ver.2.0

ASRO公式ホームページの新デザイン試作。既存の本番サイトとは独立した静的サイトです。

## Preview

GitHub Pagesで公開する場合は Settings → Pages → Deploy from a branch → main / (root) を選択してください。公開前にURLとリンク先を確認してください。

ローカルでは `python3 -m http.server 8000` を実行し `http://localhost:8000` を開いてください。

## Features

- 日本語レスポンシブな企業サイト
- Canvas 2Dによる軽量パーティクル背景
- スクロール連動の表示アニメーション
- モバイルナビゲーション
- prefers-reduced-motion対応
- 基本的なSEO/OGP情報
- AI / MOVIA / Security の事業紹介

## Before production

- 公式ロゴの正式アセットに差し替える
- 製品名・事業説明・公開ステータスを確認する
- 本番サイトの既存ページ・リダイレクト・SEOを監査する
- スマホ実機とブラウザで表示・速度・アクセシビリティを検証する
- 正式な問い合わせ先・プライバシーポリシー・運営者情報を追加する
- GitHub Pagesから既存asro.jpに自動公開しないこと

## Structure

`index.html` — HTML/CSS/JavaScriptを含む単一ファイルの初期実装。次段階でコンポーネント・アセットに分離予定。
