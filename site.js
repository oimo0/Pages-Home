/* ASRO site — shared script: JA/EN language switch, reveal animations, header state.
   Text lives in the I18N dictionary; elements opt in with data-i18n="key".
   Elements whose translation contains markup use data-i18n-html="key". */
(function () {
  "use strict";

  var I18N = {
    ja: {
      "meta.title": "ASRO — カタチにすれば、意味がある。",
      "xmas.badge": "クリスマス仕様でお届け中",
      "xmas.foot": "ASROから、素敵なホリデーシーズンを。",
      "meta.desc": "ASROは、AIモデル「Asra」と、それを活かす製品をつくるテクノロジーブランドです。AIチャット「Kuup」をはじめ、学び、つくる楽しさをひらく製品を開発しています。",
      "nav.about": "ASROについて",
      "nav.products": "製品",
      "nav.divisions": "部門",
      "nav.news": "ニュース",
      "nav.contact": "お問い合わせ",
      "footer.tagline": "まだない明日を、つくる。AIとソフトウェア、そしてインフラまでを一貫してつくるテクノロジーブランドです。",
      "footer.products": "製品",
      "footer.divisions": "部門",
      "footer.links": "リンク",
      "footer.status": "ステータス",
      "footer.rights": "© 2026 ASRO",
      "footer.note": "ASROはテクノロジーブランドです。",
      "common.details": "詳しく見る",
      "common.back": "製品一覧へ戻る",
      "common.open": "開く",
      "common.status.live": "提供中",
      "common.status.dev": "開発中",
      "common.status.paused": "一時停止中",
      "common.facts": "概要",
      "common.fact.name": "名称",
      "common.fact.status": "ステータス",
      "common.fact.by": "担当",
      "common.fact.link": "リンク",

      "hero.h1.1": "カタチにすれば、",
      "hero.h1.2": "意味がある。",
      "hero.sub": "ASROは、AIモデルと、それを活かす製品をつくるテクノロジーブランドです。考えるだけでは終わらせない。カタチにしたものだけが、誰かの明日を変えていく。",
      "hero.btn.products": "製品を見る",
      "hero.btn.about": "ASROについて",
      "hero.meta.1": "AIモデル Asra",
      "hero.meta.2": "主力製品 Kuup",
      "hero.meta.3": "自社開発・運営",

      "about.eyebrow": "About ASRO",
      "about.big": "まだない明日を、つくる。",
      "about.p1": "ASROは、AI、ソフトウェア、そしてそれらを支えるインフラまでを一貫して手がけるテクノロジーブランドです。自社開発のAIモデル「Asra」をはじめ、使う人の毎日に届く製品を、ひとつずつカタチにしてお届けします。",
      "about.p2": "旧名はSORA CLOUD。2026年8月、ASROへと生まれ変わりました。名前は「そら」のアナグラムであり、「明日」への一歩でもあります。",
      "about.p3": "大げさな数字は掲げません。つくったものを、ひとつずつ、確かなカタチにしていく。それがASROのやり方です。",

      "products.eyebrow": "Products",
      "products.title": "アイデアを、使えるカタチに。",
      "products.lead": "主力のAIチャット「Kuup」を中心に、学びと創造のための製品を開発しています。カードを開くと、それぞれの詳しい紹介ページに進めます。",
      "kuup.card.title": "話すほど、頼れるAIに。",
      "kuup.card.desc": "Kuupは、ASROのAIモデルを活かしたAIチャットサービス。質問への回答はもちろん、文章づくり、調べもの、ファイルの読み解き、画像生成まで。毎日の「聞きたい」「作りたい」に寄り添います。",
      "schoollink.card.desc": "時間割、宿題、持ち物、配布物。クラスで共有するものを、ひとつの画面にまとめた学級向けサービスです。",
      "cook.card.desc": "「こんなサイトがほしい」「こんなものを作りたい」。そのアイデアを、AIとの対話で実際に動くカタチへ変えていく制作ツールです。",
      "moot.card.desc": "画像、図形、テキストを動かしてアニメーションを作るツール。軽快な動作とAIのサポートで、はじめてでも映像づくりを楽しめます。",
      "plat.card.desc": "ASRO Accountによる共通ログイン、プロフィール、権限管理。ASROのすべての製品をつなぐ、共有基盤です。",
      "asra.card.desc": "ASROが自社で開発するAIモデル。初のモデル「Asra-Nova-Pico」は0.5Bパラメータ、Sarashinaベースで開発中。日本語が得意なモデルです。",
      "security.card.desc": "製品を安全に届け続けるための部門。脆弱性の確認と修正、アカウントや公開機能、日々の運用の安全を守ります。",

      "div.eyebrow": "Divisions",
      "div.title": "つくる力を、部門で束ねる。",
      "div.lead": "ASROの活動は、専門領域ごとの部門が担います。AI、映像と音声、インフラ、セキュリティ。それぞれが連携し、ひとつの製品体験をつくります。",
      "div.ai.desc": "AIモデルAsraの開発と、KuupなどのAI製品を担当。研究から実装までを一貫して行います。",
      "div.movia.desc": "映像と音声の部門。アニメーション制作ツール「Moot」を担当します。",
      "div.i.desc": "ASRO-iは、サービスを支えるサーバーとネットワークの運用を担うインフラ部門です。",
      "div.hub.desc": "ASRO Hubは、製品と利用者をつなぐ窓口や共通機能を担います。",

      "asra.eyebrow": "Asra — ASRO AI Model",
      "asra.title": "0.5Bとは思えない、日本語性能を。",
      "asra.body": "ASRO AIが開発中の、Asra初のモデル「Asra-Nova-Pico」を紹介します。パラメータは0.5B、ベースはSarashina。小さいからこそ、日本語の理解と応答に徹底的にこだわりました。モデル自体は、まだ公開していません。",

      "news.eyebrow": "News",
      "news.title": "お知らせ",
      "news.1.tag": "お知らせ",
      "news.1.title": "ASRO公式サイトをリニューアルしました",
      "news.1.body": "デザインと構成を一新し、製品ごとの紹介ページと日英切り替えを追加しました。",
      "news.2.tag": "Asra",
      "news.2.title": "Asra 初のモデル「Asra-Nova-Pico」を発表しました",
      "news.2.body": "ASRO AIが開発中の0.5Bモデルです。詳しくはAsraのページをご覧ください。",

      "cta.title": "カタチにすれば、意味がある。",
      "cta.body": "製品へのご意見、取材、その他のお問い合わせはメールで受け付けています。",

      /* ---- product pages: shared ---- */
      "pd.features": "できること",
      "pd.about.h": "この製品について",

      /* ---- Kuup ---- */
      "kuup.meta.title": "Kuup — ASROのAIチャット | ASRO",
      "kuup.h1": "話すほど、頼れるAIに。",
      "kuup.lead": "Kuupは、ASROのAIチャットサービスです。質問への回答、文章づくり、アイデア出し、ファイルの読み解きまで。日常のあらゆる「知りたい」「作りたい」を、ひとつのチャットで。",
      "kuup.btn.open": "Kuupを開く",
      "kuup.btn.site": "Kuup紹介サイト",
      "kuup.about.p1": "Kuupの頭脳には、ASROのAI技術が活かされています。日本語での自然な対話を大切にし、会話の流れを記憶するメモリ機能や、エージェント機能「Ultra」による自律的な作業サポートなど、使うほどに手放せなくなる体験を目指しています。",
      "kuup.about.p2": "Web検索や画像生成、SchoolLinkとの連携にも対応。調べる、書く、作る、まとめる。ひとつの場所で完結する、ASROの主力製品です。",
      "kuup.f1.t": "AIチャット",
      "kuup.f1.d": "質問、相談、アイデア出し。日本語で自然に対話できます。",
      "kuup.f2.t": "Ultra（エージェント）",
      "kuup.f2.d": "目的を伝えると、自分で手順を考えて作業を進めるエージェント機能。",
      "kuup.f3.t": "メモリ",
      "kuup.f3.d": "会話を越えて文脈を覚えるから、話すほどに頼れる相棒になります。",
      "kuup.f4.t": "ファイル・画像",
      "kuup.f4.d": "ファイルや画像を読み解いて、要約や説明、続きの作業に活かします。",
      "kuup.f5.t": "Web検索・画像生成",
      "kuup.f5.d": "最新情報を調べたり、イメージをその場で生成したりできます。",
      "kuup.f6.t": "SchoolLink連携",
      "kuup.f6.d": "学級向けサービスSchoolLinkとつながり、学びの場面でも活躍します。",
      "kuup.fact.name": "Kuup AI（AIチャットサービス）",
      "kuup.fact.by": "ASRO AI",
      "kuup.next": "SchoolLink",

      /* ---- SchoolLink ---- */
      "schoollink.meta.title": "SchoolLink — クラスをつなぐ学級支援サービス | ASRO",
      "schoollink.h1": "クラスの毎日を、ひとつに。",
      "schoollink.lead": "SchoolLinkは、時間割や宿題、持ち物、配布物をクラスで共有するための学級支援サービスです。先生と児童・生徒、そして家庭を、わかりやすく結びます。",
      "schoollink.btn.open": "SchoolLinkを開く",
      "schoollink.about.p1": "学校の連絡は、紙、口頭、複数のアプリに散らばりがちです。SchoolLinkは、時間割、宿題、持ち物、教材や配布物をひとつの画面に集約。今日の予定と明日の準備が、ひと目でわかります。",
      "schoollink.about.p2": "ログインはASRO Accountで共通化。Kuupとの連携により、学びをサポートするAIの力も届けていきます。",
      "schoollink.f1.t": "時間割の共有",
      "schoollink.f1.d": "クラスの時間割をいつでも確認。急な変更もすぐ伝わります。",
      "schoollink.f2.t": "宿題・持ち物",
      "schoollink.f2.d": "宿題と明日の持ち物をまとめて表示。忘れ物を減らします。",
      "schoollink.f3.t": "教材・配布物",
      "schoollink.f3.d": "配布物や教材をデジタルで届け、なくす心配をなくします。",
      "schoollink.fact.name": "SchoolLink（学級支援サービス）",
      "schoollink.fact.by": "ASRO",
      "schoollink.next": "Cook",

      /* ---- Cook ---- */
      "cook.meta.title": "Cook — アイデアを動くカタチに | ASRO",
      "cook.h1": "アイデアを、動くカタチに。",
      "cook.lead": "Cookは、「こんなサイトがほしい」「こんなものを作りたい」という思いつきを、AIとの対話で実際に動くものへ変えていく制作ツールです。現在は一時停止中で、2027年1月1日の再開を予定しています（予定は変更される場合があります）。",
      "cook.about.p1": "作りたいものは頭の中にあるのに、コードの壁に阻まれる。Cookはその壁を取り払うために生まれました。やりたいことを言葉で伝えると、AIがサイトやコードを生成し、その場でプレビューを確認できます。",
      "cook.about.p2": "現在、Cookは開発・改善のため一時停止しています。再開は2027年1月1日を予定。より使いやすく、より思い通りに作れる姿で戻ってきます。",
      "cook.f1.t": "対話で生成",
      "cook.f1.d": "作りたいものを言葉で伝えるだけ。AIが形にします。",
      "cook.f2.t": "その場でプレビュー",
      "cook.f2.d": "生成結果をすぐに確認し、会話で直していけます。",
      "cook.f3.t": "コードも手に入る",
      "cook.f3.d": "生成されたコードは自分のもの。学びながら育てられます。",
      "cook.fact.name": "Cook（AI制作ツール）",
      "cook.fact.status": "一時停止中（2027年1月1日 再開予定）",
      "cook.fact.by": "ASRO",
      "cook.next": "Moot",

      /* ---- Moot ---- */
      "moot.meta.title": "Moot — アニメーション制作ツール | ASRO",
      "moot.h1": "動かす楽しさを、誰の手にも。",
      "moot.lead": "Mootは、画像や図形、テキストを動かしてアニメーションを作るツールです。軽快な動作とAIのサポートで、はじめての映像づくりをもっと身近に。映像・音声部門「MOVIA」が担当します。",
      "moot.about.p1": "アニメーション制作は、専門ソフトと長い学習が必要でした。Mootは、置く、動かす、確認する、という直感的な流れに絞り、ブラウザ上で軽快に動く制作体験を目指しています。",
      "moot.about.p2": "AIによる動きの提案や補助にも取り組み中。アイデアが浮かんだその瞬間に、手を動かして試せる場所になります。",
      "moot.f1.t": "直感的な編集",
      "moot.f1.d": "画像、図形、テキストを置いて動かす。迷わない操作感です。",
      "moot.f2.t": "軽快な動作",
      "moot.f2.d": "ブラウザでサクサク。思いついたらすぐ試せます。",
      "moot.f3.t": "AIサポート",
      "moot.f3.d": "動きの提案や補助で、表現の幅を広げます（開発中）。",
      "moot.fact.name": "Moot（アニメーション制作ツール）",
      "moot.fact.by": "MOVIA（映像・音声部門）",
      "moot.next": "Plat",

      /* ---- Plat ---- */
      "plat.meta.title": "Plat — ASROの共有基盤 | ASRO",
      "plat.h1": "すべての製品を、ひとつの土台で。",
      "plat.lead": "Platは、ASROの製品群を支える共有基盤です。ASRO Accountによる共通ログイン、プロフィール、権限管理を担い、製品をまたいでも同じ体験で使えるようにします。",
      "plat.about.p1": "製品が増えるたびにアカウントもバラバラでは、使う人の負担になります。Platは、ASRO Accountを中心に、ログイン、プロフィール表示、権限の管理といった共通機能をひとつの土台に集約します。",
      "plat.about.p2": "メール基盤など、製品の裏側を支える仕組みも順次整備中。表には見えにくいけれど、ASROの体験の土台です。",
      "plat.f1.t": "ASRO Account",
      "plat.f1.d": "ひとつのアカウントで、ASROの製品につながります。",
      "plat.f2.t": "プロフィール・権限",
      "plat.f2.d": "表示情報とアクセス権限を、一貫した仕組みで管理します。",
      "plat.f3.t": "共通の土台",
      "plat.f3.d": "新製品も同じ基盤の上に。開発と運用の無駄を減らします。",
      "plat.fact.name": "Plat（ASRO共有基盤）",
      "plat.fact.by": "ASRO",
      "plat.next": "Asra",

      /* ---- Asra ---- */
      "asra.meta.title": "Asra — ASROのAIモデル | ASRO",
      "asra.h1": "小さくても、日本語には本気。",
      "asra.lead": "Asraは、ASROが自社開発するAIモデルです。初のモデル「Asra-Nova-Pico」は、0.5Bパラメータながら日本語性能に徹底的にこだわったモデル。現在開発中で、モデル自体はまだ公開していません。",
      "asra.btn.kuup": "Kuupで体験する",
      "asra.about.p1": "他社のモデルを借りるだけでは、製品の体験は他社の都合に左右されます。ASROは、自分たちの製品のために、自分たちでモデルをつくる道を選びました。それがAsraです。",
      "asra.about.p2": "そして今、Asra初のモデル「Asra-Nova-Pico」を開発しています。開発はASRO AIが担当。Sarashinaをベースに、0.5Bという小ささでどこまで日本語が扱えるか、挑戦が続いています。",
      "asra.f1.t": "日本語の指示理解",
      "asra.f1.d": "日本語の細かなニュアンスと指示を、正確に読み取ります。",
      "asra.f2.t": "自然な日本語",
      "asra.f2.d": "日常の会話や相談にも、日本語らしく自然に応答します。",
      "asra.f3.t": "小さく、軽く",
      "asra.f3.d": "パラメータは0.5B。軽量で、扱いやすいモデルを目指しています。",
      "asra.fact.name": "Asra（AIモデル）",
      "asra.fact.status": "開発中（未公開）",
      "asra.fact.params": "パラメータ",
      "asra.fact.base": "ベースモデル",
      "asra.model.eyebrow": "The Model",
      "asra.model.h": "Asra-Nova-Pico",
      "asra.model.p": "「Nova」の輝きと、「Pico」の軽やかさ。Asra-Nova-Picoは、ASRO AIがSarashinaをベースに育てている初のモデルです。パラメータは0.5B。それでも「0.5Bとは考えられない日本語力」を目指し、日本語の指示を正確に読み取り、自然に応答する——その一点に集中して磨いています。モデル自体はまだ公開していませんが、ASROの製品の中で活かすことを目指しています。",
      "asra.spec.1.t": "0.5Bとは考えられない日本語力",
      "asra.spec.1.d": "小さなモデルとは思えない水準で、日本語を理解し、応答します。",
      "asra.spec.2.t": "ハルシネーションの低下",
      "asra.spec.2.d": "もっともらしい誤答を減らし、信頼できる応答を目指しています。",
      "asra.spec.3.t": "CPUでも軽快に",
      "asra.spec.3.d": "DDR5環境では、CPUでも最大240トークン/秒（理論値）でテキストを生成できます。DDR3メモリの環境でも、平均38トークン/秒の速さです。",
      "asra.fact.speed": "生成速度",
      "asra.fact.speed.v": "最大240トークン/秒（理論値、DDR5環境・CPU）",
      "asra.fact.speed2": "生成速度（DDR3環境）",
      "asra.fact.speed2.v": "平均38トークン/秒",
      "asra.test.eyebrow": "Tests",
      "asra.test.h": "テストと検証",
      "asra.test.p": "開発にあたって、Asra-Nova-Picoの日本語性能については、複数の観点でテストと検証を重ねています。詳細な結果は、順次このページで公開していきます。",
      "asra.test.1.t": "日本語の指示理解",
      "asra.test.1.d": "細かなニュアンスを含む指示への追従を検証しました。",
      "asra.test.2.t": "日本語の会話の自然さ",
      "asra.test.2.d": "日常の相談や雑談での応答の自然さを評価しました。",
      "asra.test.3.t": "日本語の長文読解",
      "asra.test.3.d": "長い文章の読み取りと、要点の把握を検証しました。",
      "asra.fact.by": "ASRO AI",
      "asra.next": "Security",

      /* ---- Security ---- */
      "security.meta.title": "ASRO Security — 安全を守る部門 | ASRO",
      "security.h1": "安心して使えることが、体験の一部。",
      "security.lead": "ASRO Securityは、ASROの製品と運用の安全を守る部門です。脆弱性の確認と修正、アカウントや公開機能の保護など、安全を「後付け」ではなく設計の一部として扱います。",
      "security.about.p1": "便利な製品も、安心して使えなければ意味がありません。ASRO Securityは、公開前の確認から日々の運用の見守りまで、製品ライフサイクル全体の安全を担います。",
      "security.about.p2": "AIも活用しながら、脆弱性への対応を速く、確実に。小さなブランドだからこそ、ひとつひとつの製品と真剣に向き合います。",
      "security.f1.t": "脆弱性の確認と修正",
      "security.f1.d": "公開前後のチェックと、見つけた課題への迅速な対応。",
      "security.f2.t": "アカウント保護",
      "security.f2.d": "ログインや権限まわりの安全を守り、不正利用を防ぎます。",
      "security.f3.t": "運用の見守り",
      "security.f3.d": "日々の運用を監視し、異常の早期発見につなげます。",
      "security.fact.name": "ASRO Security（セキュリティ部門）",
      "security.fact.by": "ASRO Security",
      "security.next": "Kuup"
    },

    en: {
      "meta.title": "ASRO — Give it form, and it gains meaning.",
      "xmas.badge": "Dressed for the holiday season",
      "xmas.foot": "With warm wishes for a wonderful holiday season, from ASRO.",
      "meta.desc": "ASRO is a technology brand building the AI model Asra and the products powered by it — starting with Kuup, an AI chat service designed to be helpful every day.",
      "nav.about": "About",
      "nav.products": "Products",
      "nav.divisions": "Divisions",
      "nav.news": "News",
      "nav.contact": "Contact",
      "footer.tagline": "Building a tomorrow that doesn't exist yet. A technology brand crafting AI, software, and the infrastructure behind them — all under one roof.",
      "footer.products": "Products",
      "footer.divisions": "Divisions",
      "footer.links": "Links",
      "footer.status": "Status",
      "footer.rights": "© 2026 ASRO",
      "footer.note": "ASRO is a technology brand.",
      "common.details": "Learn more",
      "common.back": "Back to products",
      "common.open": "Open",
      "common.status.live": "Available",
      "common.status.dev": "In development",
      "common.status.paused": "Paused",
      "common.facts": "Overview",
      "common.fact.name": "Name",
      "common.fact.status": "Status",
      "common.fact.by": "Team",
      "common.fact.link": "Link",

      "hero.h1.1": "Give it form,",
      "hero.h1.2": "and it gains meaning.",
      "hero.sub": "ASRO is a technology brand building an AI model — and the products that bring it to life. Ideas alone change nothing. Only what takes form can change someone's tomorrow.",
      "hero.btn.products": "Explore products",
      "hero.btn.about": "About ASRO",
      "hero.meta.1": "AI model: Asra",
      "hero.meta.2": "Flagship: Kuup",
      "hero.meta.3": "Built & run in-house",

      "about.eyebrow": "About ASRO",
      "about.big": "Building a tomorrow that doesn't exist yet.",
      "about.p1": "ASRO is a technology brand working across AI, software, and the infrastructure that supports them. From Asra, our own AI model, to products for everyday life — we shape each idea into a form anyone can use.",
      "about.p2": "Formerly known as SORA CLOUD, the brand became ASRO in August 2026. The name is an anagram of \"sora\" — and a step toward tomorrow (\"asu\" in Japanese).",
      "about.p3": "We don't lead with big numbers. We build things, one at a time, and give each of them a solid form. That's the ASRO way.",

      "products.eyebrow": "Products",
      "products.title": "Ideas, shaped into things you can use.",
      "products.lead": "Led by Kuup, our AI chat service, we build products for learning and creating. Open a card to visit each product's page.",
      "kuup.card.title": "An AI that grows more reliable the more you talk.",
      "kuup.card.desc": "Kuup is an AI chat service powered by ASRO's AI model. Answers, writing help, research, reading files, generating images — a companion for every everyday \"I want to know\" and \"I want to make\".",
      "schoollink.card.desc": "Timetables, homework, belongings, handouts — everything a class shares, gathered into one clear screen.",
      "cook.card.desc": "\"I wish this site existed.\" \"I want to build this.\" Cook turns those sparks into working things through conversation with AI.",
      "moot.card.desc": "A tool for animating images, shapes, and text. Snappy performance and AI assistance make video creation approachable for beginners.",
      "plat.card.desc": "One sign-in with ASRO Account, profiles, and permissions. The shared foundation connecting every ASRO product.",
      "asra.card.desc": "ASRO's own AI model. Its first model, Asra-Nova-Pico — 0.5B parameters, based on Sarashina — is in development. A model that's simply good at Japanese.",
      "security.card.desc": "The team that keeps our products safe to use: vulnerability checks and fixes, account and public-feature protection, and secure day-to-day operations.",

      "div.eyebrow": "Divisions",
      "div.title": "Focused teams, one craft.",
      "div.lead": "ASRO's work is carried by specialized divisions — AI, video & audio, infrastructure, and security — working together as one product experience.",
      "div.ai.desc": "Develops the Asra AI model and AI products like Kuup, from research to implementation.",
      "div.movia.desc": "The video & audio division. Home of Moot, the animation creation tool.",
      "div.i.desc": "ASRO-i runs the servers and networks that keep ASRO's services alive.",
      "div.hub.desc": "ASRO Hub connects products and people through shared touchpoints and features.",

      "asra.eyebrow": "Asra — ASRO AI Model",
      "asra.title": "Japanese performance you wouldn't expect from 0.5B.",
      "asra.body": "Meet Asra-Nova-Pico, the first Asra model, now in development at ASRO AI: 0.5B parameters, based on Sarashina. Small — and precisely because of that, obsessed with understanding and responding in Japanese. The model itself is not released yet.",

      "news.eyebrow": "News",
      "news.title": "News",
      "news.1.tag": "Notice",
      "news.1.title": "The ASRO website has been renewed",
      "news.1.body": "A new design and structure, with per-product pages and Japanese/English switching.",
      "news.2.tag": "Asra",
      "news.2.title": "Asra's first model, Asra-Nova-Pico, has been unveiled",
      "news.2.body": "A 0.5B model in development at ASRO AI. See the Asra page for details.",

      "cta.title": "Give it form, and it gains meaning.",
      "cta.body": "For feedback on our products, press, or any other inquiries, reach us by email.",

      "pd.features": "What it does",
      "pd.about.h": "About this product",

      "kuup.meta.title": "Kuup — AI Chat by ASRO | ASRO",
      "kuup.h1": "An AI that grows more reliable the more you talk.",
      "kuup.lead": "Kuup is ASRO's AI chat service. Answers to your questions, help with writing, brainstorming, reading files — everything you want to know and make, in a single chat.",
      "kuup.btn.open": "Open Kuup",
      "kuup.btn.site": "Kuup product site",
      "kuup.about.p1": "Kuup runs on ASRO's AI technology, with a focus on natural Japanese conversation. Memory that carries context across chats and an agent feature called Ultra that works through tasks on its own make it a companion you'll keep coming back to.",
      "kuup.about.p2": "With web search, image generation, and SchoolLink integration, Kuup brings research, writing, and making together in one place — ASRO's flagship product.",
      "kuup.f1.t": "AI chat",
      "kuup.f1.d": "Questions, advice, ideas — converse naturally in Japanese.",
      "kuup.f2.t": "Ultra (agent)",
      "kuup.f2.d": "Give it a goal, and the agent plans the steps and carries out the work.",
      "kuup.f3.t": "Memory",
      "kuup.f3.d": "Context is remembered across conversations, so it gets more helpful over time.",
      "kuup.f4.t": "Files & images",
      "kuup.f4.d": "Reads files and images to summarize, explain, and continue the work.",
      "kuup.f5.t": "Web search & image generation",
      "kuup.f5.d": "Look up the latest information, or generate an image on the spot.",
      "kuup.f6.t": "SchoolLink integration",
      "kuup.f6.d": "Connects with the classroom service SchoolLink to support learning.",
      "kuup.fact.name": "Kuup AI (AI chat service)",
      "kuup.fact.by": "ASRO AI",
      "kuup.next": "SchoolLink",

      "schoollink.meta.title": "SchoolLink — Classroom Support Service | ASRO",
      "schoollink.h1": "Every school day, in one place.",
      "schoollink.lead": "SchoolLink helps classes share timetables, homework, belongings, and handouts — connecting teachers, students, and families with clarity.",
      "schoollink.btn.open": "Open SchoolLink",
      "schoollink.about.p1": "School communication tends to scatter across paper, word of mouth, and multiple apps. SchoolLink gathers timetables, homework, belongings, materials, and handouts into a single screen, so today's schedule and tomorrow's preparation are visible at a glance.",
      "schoollink.about.p2": "Sign-in is unified through ASRO Account, and integration with Kuup brings the support of AI into the classroom.",
      "schoollink.f1.t": "Shared timetables",
      "schoollink.f1.d": "Check the class timetable anytime — changes reach everyone right away.",
      "schoollink.f2.t": "Homework & belongings",
      "schoollink.f2.d": "Homework and tomorrow's belongings in one view. Fewer forgotten items.",
      "schoollink.f3.t": "Materials & handouts",
      "schoollink.f3.d": "Handouts and materials delivered digitally — nothing gets lost.",
      "schoollink.fact.name": "SchoolLink (classroom support service)",
      "schoollink.fact.by": "ASRO",
      "schoollink.next": "Cook",

      "cook.meta.title": "Cook — Ideas Into Working Things | ASRO",
      "cook.h1": "Ideas, into working form.",
      "cook.lead": "Cook turns \"I wish this site existed\" and \"I want to build this\" into real, working things through conversation with AI. It is currently paused, with a return planned for January 1, 2027 (subject to change).",
      "cook.about.p1": "The idea is in your head, but the wall of code stands in the way. Cook was born to remove that wall: describe what you want in words, and AI generates the site or code, previewed right there.",
      "cook.about.p2": "Cook is currently paused for development and improvement, with a planned return on January 1, 2027 — easier to use, and better at making exactly what you imagined.",
      "cook.f1.t": "Generate by conversation",
      "cook.f1.d": "Just describe what you want to build. AI gives it form.",
      "cook.f2.t": "Instant preview",
      "cook.f2.d": "See results immediately and refine them through conversation.",
      "cook.f3.t": "The code is yours",
      "cook.f3.d": "Generated code belongs to you — learn from it and grow it.",
      "cook.fact.name": "Cook (AI creation tool)",
      "cook.fact.status": "Paused (return planned Jan 1, 2027)",
      "cook.fact.by": "ASRO",
      "cook.next": "Moot",

      "moot.meta.title": "Moot — Animation Creation Tool | ASRO",
      "moot.h1": "The joy of motion, in everyone's hands.",
      "moot.lead": "Moot is a tool for creating animations from images, shapes, and text. Snappy performance and AI support make a first step into video creation feel close at hand. Developed by MOVIA, our video & audio division.",
      "moot.about.p1": "Animation used to demand professional software and long study. Moot narrows the flow to the intuitive — place, move, check — and aims for a light, responsive creation experience right in the browser.",
      "moot.about.p2": "AI-assisted motion suggestions are also in the works, so the moment an idea strikes, your hands can start testing it.",
      "moot.f1.t": "Intuitive editing",
      "moot.f1.d": "Place images, shapes, and text, then move them. No guesswork.",
      "moot.f2.t": "Snappy in the browser",
      "moot.f2.d": "Fast and light — try an idea the moment it comes to you.",
      "moot.f3.t": "AI support",
      "moot.f3.d": "Motion suggestions and assistance to widen your expression (in development).",
      "moot.fact.name": "Moot (animation creation tool)",
      "moot.fact.by": "MOVIA (video & audio division)",
      "moot.next": "Plat",

      "plat.meta.title": "Plat — ASRO's Shared Foundation | ASRO",
      "plat.h1": "Every product, on one foundation.",
      "plat.lead": "Plat is the shared foundation beneath ASRO's products: unified sign-in with ASRO Account, profiles, and permission management — so every product feels like one experience.",
      "plat.about.p1": "If every new product meant a new account, the burden would fall on the people using them. Plat gathers the shared pieces — sign-in around ASRO Account, profile display, and access control — into a single foundation.",
      "plat.about.p2": "Behind-the-scenes systems, including a mail foundation, are also being built step by step. Invisible, but essential to the ASRO experience.",
      "plat.f1.t": "ASRO Account",
      "plat.f1.d": "One account connects you to ASRO's products.",
      "plat.f2.t": "Profiles & permissions",
      "plat.f2.d": "Display information and access rights, managed consistently.",
      "plat.f3.t": "A shared base",
      "plat.f3.d": "New products stand on the same foundation — less waste in building and running them.",
      "plat.fact.name": "Plat (ASRO shared foundation)",
      "plat.fact.by": "ASRO",
      "plat.next": "Asra",

      "asra.meta.title": "Asra — ASRO's AI Model | ASRO",
      "asra.h1": "Small in size, serious about Japanese.",
      "asra.lead": "Asra is the AI model ASRO develops in-house. Its first model, Asra-Nova-Pico, packs an obsession with Japanese-language performance into just 0.5B parameters. It is in development, and the model itself has not been released yet.",
      "asra.btn.kuup": "Try it in Kuup",
      "asra.about.p1": "Relying only on other companies' models means your product's experience is shaped by their decisions. ASRO chose to build its own model for its own products. That is Asra.",
      "asra.about.p2": "And now, ASRO AI is developing Asra's first model: Asra-Nova-Pico. Based on Sarashina, it is an ongoing challenge — how far can Japanese be handled at just 0.5B?",
      "asra.f1.t": "Japanese instruction understanding",
      "asra.f1.d": "Reads the nuance and intent of Japanese instructions accurately.",
      "asra.f2.t": "Natural Japanese",
      "asra.f2.d": "Responds naturally in Japanese, from everyday conversation to consultations.",
      "asra.f3.t": "Small and light",
      "asra.f3.d": "Just 0.5B parameters — built to stay light and easy to work with.",
      "asra.fact.name": "Asra (AI model)",
      "asra.fact.status": "In development (not released)",
      "asra.fact.params": "Parameters",
      "asra.fact.base": "Base model",
      "asra.model.eyebrow": "The Model",
      "asra.model.h": "Asra-Nova-Pico",
      "asra.model.p": "The brilliance of Nova, the lightness of Pico. Asra-Nova-Pico is ASRO AI's first model, being raised on a Sarashina base. Its parameters total just 0.5B — yet it aims for a level of Japanese you'd never expect from 0.5B, reading instructions precisely and responding naturally; that single point is where all the polishing goes. The model is not released yet, but the aim is to put it to work inside ASRO's products.",
      "asra.spec.1.t": "Japanese ability beyond its 0.5B",
      "asra.spec.1.d": "Understands and responds in Japanese at a level you wouldn't expect from such a small model.",
      "asra.spec.2.t": "Reduced hallucination",
      "asra.spec.2.d": "Tuned to cut down plausible-sounding wrong answers, aiming for responses you can trust.",
      "asra.spec.3.t": "Fast even on CPU",
      "asra.spec.3.d": "On DDR5, it generates text at up to 240 tokens/sec even on CPU (theoretical) — and even on DDR3 memory, it runs at an average of 38 tokens/sec.",
      "asra.fact.speed": "Generation speed",
      "asra.fact.speed.v": "Up to 240 tokens/sec (theoretical, DDR5 / CPU)",
      "asra.fact.speed2": "Speed (DDR3)",
      "asra.fact.speed2.v": "38 tokens/sec average",
      "asra.test.eyebrow": "Tests",
      "asra.test.h": "Tests & validation",
      "asra.test.p": "Through development, Asra-Nova-Pico's Japanese-language performance has been tested and validated from multiple angles. Detailed results will be published on this page over time.",
      "asra.test.1.t": "Japanese instruction following",
      "asra.test.1.d": "Verified against instructions carrying subtle nuance.",
      "asra.test.2.t": "Natural Japanese conversation",
      "asra.test.2.d": "Evaluated on the naturalness of responses in everyday questions and casual conversation.",
      "asra.test.3.t": "Long Japanese text comprehension",
      "asra.test.3.d": "Verified on reading long texts and grasping their key points.",
      "asra.fact.by": "ASRO AI",
      "asra.next": "Security",

      "security.meta.title": "ASRO Security — Keeping Things Safe | ASRO",
      "security.h1": "Being safe to use is part of the experience.",
      "security.lead": "ASRO Security protects ASRO's products and operations. Vulnerability checks and fixes, protection for accounts and public features — safety treated as part of the design, not an afterthought.",
      "security.about.p1": "A useful product means little if it can't be used with confidence. ASRO Security owns safety across the whole product lifecycle, from pre-release checks to watching over day-to-day operations.",
      "security.about.p2": "Using AI as well, we respond to vulnerabilities quickly and reliably. A small brand can still take every single product seriously.",
      "security.f1.t": "Vulnerability checks & fixes",
      "security.f1.d": "Checks before and after release, with swift responses to what we find.",
      "security.f2.t": "Account protection",
      "security.f2.d": "Guarding sign-in and permissions against misuse.",
      "security.f3.t": "Watching operations",
      "security.f3.d": "Monitoring daily operations to catch anomalies early.",
      "security.fact.name": "ASRO Security (security division)",
      "security.fact.by": "ASRO Security",
      "security.next": "Kuup"
    }
  };

  var TITLES = { ja: "meta.title", en: "meta.title" };

  function applyLang(lang) {
    var dict = I18N[lang] || I18N.ja;
    document.documentElement.lang = lang === "en" ? "en" : "ja";
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.textContent = dict[key];
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      if (dict[key] != null) el.innerHTML = dict[key];
    });
    var pageKey = document.body.getAttribute("data-title-key");
    var titleKey = pageKey || TITLES[lang];
    if (dict[titleKey] != null) document.title = dict[titleKey];
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && dict["meta.desc"] != null && !pageKey) metaDesc.setAttribute("content", dict["meta.desc"]);
    document.querySelectorAll(".lang-switch button").forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-lang") === lang);
      b.setAttribute("aria-pressed", b.getAttribute("data-lang") === lang ? "true" : "false");
    });
    try { localStorage.setItem("asro-lang", lang); } catch (e) {}
  }

  var saved = "ja";
  try { saved = localStorage.getItem("asro-lang") || "ja"; } catch (e) {}
  applyLang(saved === "en" ? "en" : "ja");

  document.querySelectorAll(".lang-switch button").forEach(function (b) {
    b.addEventListener("click", function () { applyLang(b.getAttribute("data-lang")); });
  });

  /* header shadow on scroll */
  var header = document.querySelector(".site-header");
  function onScroll() { if (header) header.classList.toggle("scrolled", window.scrollY > 8); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* mobile menu */
  var menuBtn = document.querySelector(".menu-btn");
  var nav = document.querySelector(".main-nav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { nav.classList.remove("open"); });
    });
  }

  /* reveal on scroll */
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var targets = document.querySelectorAll(".reveal");
  if (reduced || !("IntersectionObserver" in window)) {
    targets.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    targets.forEach(function (el) { io.observe(el); });
  }
})();

/* ===== Christmas season mode (Nov 1 – Dec 25) ===== */
(function () {
  var d = new Date();
  var m = d.getMonth() + 1, day = d.getDate();
  if (!(m === 11 || (m === 12 && day <= 25))) return;
  document.documentElement.classList.add("xmas");
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var cv = document.createElement("canvas");
  cv.id = "snow-canvas";
  cv.style.cssText = "position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:2000;";
  document.body.appendChild(cv);
  var ctx = cv.getContext("2d"), W, H, flakes = [];
  function resize() {
    W = cv.width = window.innerWidth; H = cv.height = window.innerHeight;
    var n = Math.min(180, Math.floor(W / 9));
    flakes = [];
    for (var i = 0; i < n; i++) flakes.push({ x: Math.random() * W, y: Math.random() * H, r: 0.6 + Math.random() * 2.0, s: 0.3 + Math.random() * 0.75, p: Math.random() * Math.PI * 2, a: 0.3 + Math.random() * 0.45 });
  }
  resize(); window.addEventListener("resize", resize);
  (function tick() {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = "#b9c8d8";
    for (var i = 0; i < flakes.length; i++) {
      var f = flakes[i];
      f.y += f.s; f.p += 0.008; f.x += Math.sin(f.p) * 0.5;
      if (f.y > H + 4) { f.y = -4; f.x = Math.random() * W; }
      ctx.globalAlpha = f.a;
      ctx.beginPath(); ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2); ctx.fill();
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(tick);
  })();

  /* String lights across the top */
  var strand = document.createElement("div");
  strand.id = "xmas-lights";
  var colors = ["#ffdf9e", "#f5c96b", "#ffe9b8", "#eec25f", "#fff3d0"];
  var sags = [0, 4, 7, 8, 7, 4, 0, -2];
  var count = Math.max(14, Math.floor(window.innerWidth / 30));
  for (var j = 0; j < count; j++) {
    var b = document.createElement("span");
    b.className = "xmas-bulb";
    b.style.left = (j * (100 / count) + 1) + "%";
    b.style.top = sags[j % sags.length] + "px";
    b.style.background = colors[j % colors.length];
    b.style.boxShadow = "0 0 14px 4px " + colors[j % colors.length];
    b.style.animationDelay = (j * 0.35) + "s";
    strand.appendChild(b);
  }
  document.body.appendChild(strand);
  var strand2 = document.createElement("div");
  strand2.id = "xmas-lights2";
  var count2 = Math.max(8, Math.floor(window.innerWidth / 64));
  for (var k = 0; k < count2; k++) {
    var b2 = document.createElement("span");
    b2.className = "xmas-bulb mini";
    b2.style.left = (k * (100 / count2) + 3) + "%";
    b2.style.top = (6 + sags[(k + 3) % sags.length]) + "px";
    b2.style.background = colors[(k + 2) % colors.length];
    b2.style.boxShadow = "0 0 10px 3px " + colors[(k + 2) % colors.length];
    b2.style.animationDelay = (k * 0.5 + 0.4) + "s";
    strand2.appendChild(b2);
  }
  document.body.appendChild(strand2);

  /* Countdown on the hero badge (top page only) */
  var badge = document.querySelector(".xmas-badge");
  if (badge) {
    var cspan = document.createElement("span");
    cspan.className = "xmas-count";
    badge.appendChild(cspan);
    var updateCount = function () {
      if (!cspan.isConnected && badge.isConnected) badge.appendChild(cspan);
      var now = new Date();
      var xmasDay = new Date(now.getFullYear(), 11, 25);
      var ja = (localStorage.getItem("asro-lang") || "ja") === "ja";
      if (now.getMonth() === 11 && now.getDate() === 25) {
        cspan.textContent = ja ? "今日はクリスマス！" : "It's Christmas Day!";
      } else if (now < xmasDay) {
        var days = Math.ceil((xmasDay - now) / 86400000);
        cspan.textContent = ja ? ("（クリスマスまであと" + days + "日）") : ("(" + days + " days to go)");
      } else { cspan.textContent = ""; }
    };
    updateCount();
    new MutationObserver(updateCount).observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
  }

  /* Script font for the elegant greeting */
  var fontLink = document.createElement("link");
  fontLink.rel = "stylesheet";
  fontLink.href = "https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap";
  document.head.appendChild(fontLink);

  /* Gold star favicon for the season */
  var fav = document.querySelector("link[rel='icon']") || document.createElement("link");
  fav.rel = "icon";
  fav.href = "data:image/svg+xml," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#c6a15b" d="M12 1.8l3.1 6.9 7.5.7-5.6 5 1.6 7.4L12 18l-6.6 3.8L7 14.4 1.4 9.4l7.5-.7z"/></svg>');
  document.head.appendChild(fav);

  /* Delicate gold sparkles in the hero and the dark Asra band */
  document.querySelectorAll(".hero, .asra-band").forEach(function (host) {
    for (var s = 0; s < 16; s++) {
      var sp = document.createElement("span");
      sp.className = "xmas-sparkle";
      sp.textContent = "✦";
      sp.style.left = (4 + Math.random() * 92) + "%";
      sp.style.top = (6 + Math.random() * 84) + "%";
      sp.style.fontSize = (8 + Math.random() * 8) + "px";
      sp.style.animationDelay = (Math.random() * 5) + "s";
      sp.style.animationDuration = (3 + Math.random() * 3.5) + "s";
      host.appendChild(sp);
    }
  });
})();
