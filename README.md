# Pages-Home — ASRO 新公式サイト（制作置き場）

asro.jp のリニューアル版サイトを制作するためのリポジトリです。
完成後は、ここから本番サーバーへ配置して **asro.jp** で公開する想定です。

## デザイン方針

- OpenAI のような、明るく余白の大きいミニマルデザイン（白基調・モノクロ）
- ヒーローコピー： **「カタチにすれば、意味がある。」**
- 日本語 / 英語の切り替え（ヘッダーのボタン、選択はブラウザに保存）
- スクロール連動の出現アニメーション、ヒーローのテキストアニメーション、ロゴのマーキーなど強めのモーション
- 数値・実績の類は掲げない。ASRO は法人ではなくテクノロジーブランドとして表記

## 構成

| ファイル | 内容 |
|---|---|
| `index.html` | トップページ（About / 製品 / 部門 / Asra / ニュース / お問い合わせ） |
| `products/kuup.html` | Kuup（主力・AIチャット） |
| `products/schoollink.html` | SchoolLink（学級支援） |
| `products/cook.html` | Cook（一時停止中 / 2027-01-01 再開予定） |
| `products/moot.html` | Moot（アニメーション制作 / MOVIA担当） |
| `products/plat.html` | Plat（ASRO Account等の共有基盤） |
| `products/asra.html` | Asra（自社AIモデル / 初モデル「Asra-Nova-Pico」公開） |
| `products/security.html` | ASRO Security（セキュリティ部門） |
| `styles.css` | 全ページ共通スタイル |
| `site.js` | 言語切替（日英辞書）・アニメーション・ヘッダー制御 |

## ロゴについて

- リポジトリ直下の PNG が原本です。サイトからはそのまま参照しています（白背景のまま白い面に載せることで馴染ませています）。
- 本番サーバー配置時には、透過・軽量化した版への差し替えが可能です（形は同一）。
- 旧来の `assets/` フォルダ（SVG 2点）は旧サイトの残りで、新サイトでは未使用です。

## ニュース（初期掲載）

- 2026.11.08 — ASRO公式サイトをリニューアルしました
- 2026.11.08 — Asra 初のモデル「Asra-Nova-Pico」を公開しました（開発：ASRO AI）

## 外部リンク

- ステータス: https://status.asro.jp/
- X: https://x.com/ASRO_jp
- お問い合わせ: contact@asro.jp
