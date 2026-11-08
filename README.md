# ASRO — Official Homepage

ASROの公式サイト向けホームページ。過去のスタイルを取りやめ、白と黒を中心とする**タイポグラフィ主導のエディトリアルデザイン**として制作しました。

## 方針
- 「未来は、まだ決まっていない。」から始まる、ASROという技術プロジェクトそのものの紹介
- ユーザーが提供した**ASROの正しい3パーツのシンボル**を使用（SchoolLinkのロゴは使用しない）
- 白・黒・淡いラベンダーを中心とした落ち着いた配色
- 研究（Asra Nova、TripleAS、Accessible AI）を展開できる一覧形式で紹介
- 主力製品Kuupを独立した特集セクションで紹介
- ASRO AI / MOVIA / Securityの事業領域を簡潔に整理
- レスポンシブ対応・キーボード操作・動きを減らすOS設定に対応
- 外部JS/CSSライブラリなし。ビルド不要

## 構成
- `index.html`: セマンティックHTML
- `styles.css`: レスポンシブデザインと軽いアニメーション
- `site.js`: モバイルメニューとスクロール演出
- `assets/asro-symbol.svg`: 正式シンボルを提供画像からトレースしたSVG
- `assets/asro-wordmark.svg`: ASROワードマーク

## ローカル表示
```bash
python3 -m http.server 8000
```
`http://localhost:8000` をブラウザで開く。

## GitHub Pages
Repository Settings → Pages → Deploy from a branch → `main` / `/(root)` → Save。

公開が完了したら、通常は `https://oimo0.github.io/Pages-Home/` で確認できます。Pagesの公開・DNS状態は別途確認が必要です。

## 検証
- ローカルHTML構造・リンク参照：PASS
- JavaScript構文：PASS
- Chromium相当（HTML/CSS/JSを埋め込んだオフラインプレビュー）でデスクトップ1440px、タブレット768px、スマホ390pxをチェック
- 上記幅で横スクロールなし、JavaScript実行エラーなし、スマホメニューと研究詳細開閉の操作が成功
- 公開URLからの実機テスト／Lighthouse測定は未実施

## 注意
- `asro.jp` の現在の本番サイトは変更していません
- Kuupの会話画面は**説明用コンセプト**で、実際の現行UI画像ではありません
- 会社としての登録形態や提供状況は断定しない
- Moonshot AIはデザインの方向性を考える際の参考であり、画像やソース、文言はコピーしていません
