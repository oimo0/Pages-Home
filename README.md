# ASRO Official Website — Pages-Home

ASRO公式ホームページの新デザイン（2026-11）。Moonshot AIの**研究を主役にした情報設計・大胆な文字組み・没入感**を参考に、ASRO独自のビジュアルで一から制作した静的サイト。

## 最新版のデザイン

- ダークな没入型ヒーロー。「明日を、創る。」
- **正しいASRO文字なしロゴ**: ユーザーが提供した黒い3パーツのマークを輪郭トレースし、SVGとして使用
- Research: Asra Nova / TripleAS / Accessible AI
- Product: Kuup の製品紹介（UIは説明用コンセプト）
- Our Fields: ASRO AI / ASRO MOVIA / ASRO Security
- About: ASROの理念
- PC / Android / iOSのレスポンシブ構成。モバイルナビ、読みやすいキーボード操作、reduced-motion 対応
- 外部ライブラリ、ビルド工程、Cookie/トラッキングなし

## ファイル

```
index.html
styles.css
site.js
assets/asro-symbol.svg   # 実際に提供されたASROロゴの輪郭から作成
assets/asro-wordmark.svg # 提供されたASRO文字ロゴから作成
README.md
```

以前誤って使っていた青い別サービスのシンボルは **完全に置換** しました。

## ローカル起動

```bash
python3 -m http.server 8000
```

ブラウザで `http://localhost:8000/` を開きます。

## プレビュー

GitHubで Settings → Pages → Build and deployment → Deploy from a branch → `main` / `/(root)` を指定すると、公開設定後に下記から閲覧できます。

https://oimo0.github.io/Pages-Home/

※ Pagesの公開状態や外部ブラウザでの表示は別途確認が必要です。既存の **asro.jp 本番サーバーは変更していません**。

## 公開前確認

- ロゴのオリジナルSVGが入手できたら、輪郭トレース版を置換する
- Asra Nova / TripleAS / Kuupの説明と公開状態をレビューする
- 実機でChrome/Safari/モバイルメニュー/画面幅/速度を確認
- 正式な会社情報や法的ページが必要なら追加
- `asro.jp` に切り替える前にCloudflareや各サービスの既存ルートを監査する

## 参考・権利

Moonshot AIのウェブサイトの情報構成・雰囲気を参考にしていますが、HTML・CSS・アニメーション・文言・図版はASRO用の独自実装です。Moonshot AIのコードや画像は複製していません。
