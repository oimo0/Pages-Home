/* ASRO site — shared script: JA/EN language switch, reveal animations, header state.
   Text lives in the I18N dictionary; elements opt in with data-i18n="key".
   Elements whose translation contains markup use data-i18n-html="key". */
(function () {
  "use strict";

  var I18N = {
    ja: {
      "meta.title": "ASRO — カタチにすれば、意味がある。",
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
      "about.p1": "ASROは、AI、ソフトウェア、そしてそれらを支えるインフラまでを一貫して手がけるテクノロジーブランドです。中心にあるのは、自社開発のAIモデル「Asra」。その力を、誰もが使える製品のカタチにしてお届けします。",
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
      "asra.card.desc": "ASROが自社で開発するAIモデル。初のモデル「Asra-Nova-Pico」を公開しました。日本語の指示理解とコード生成に強く、ASROの製品の頭脳として働きます。",
      "security.card.desc": "製品を安全に届け続けるための部門。脆弱性の確認と修正、アカウントや公開機能、日々の運用の安全を守ります。",

      "div.eyebrow": "Divisions",
      "div.title": "つくる力を、部門で束ねる。",
      "div.lead": "ASROの活動は、専門領域ごとの部門が担います。AI、映像と音声、インフラ、セキュリティ。それぞれが連携し、ひとつの製品体験をつくります。",
      "div.ai.desc": "AIモデルAsraの開発と、KuupなどのAI製品を担当。研究から実装までを一貫して行います。",
      "div.movia.desc": "映像と音声の部門。アニメーション制作ツール「Moot」を担当します。",
      "div.i.desc": "ASRO-iは、サービスを支えるサーバーとネットワークの運用を担うインフラ部門です。",
      "div.hub.desc": "ASRO Hubは、製品と利用者をつなぐ窓口や共通機能を担います。",

      "asra.eyebrow": "Asra — ASRO AI Model",
      "asra.title": "初のモデル「Asra-Nova-Pico」、公開。",
      "asra.body": "ASRO AIが開発した、Asra初のモデル「Asra-Nova-Pico」を公開しました。まずはKuupをはじめとするASROの製品の中で、その力を届けていきます。",

      "news.eyebrow": "News",
      "news.title": "お知らせ",
      "news.1.tag": "お知らせ",
      "news.1.title": "ASRO公式サイトをリニューアルしました",
      "news.1.body": "デザインと構成を一新し、製品ごとの紹介ページと日英切り替えを追加しました。",
      "news.2.tag": "Asra",
      "news.2.title": "Asra 初のモデル「Asra-Nova-Pico」を公開しました",
      "news.2.body": "ASRO AIが開発した初のモデルです。詳しくはAsraのページをご覧ください。",

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
      "asra.h1": "ASROの頭脳を、自らの手で。",
      "asra.lead": "Asraは、ASROが自社開発するAIモデルです。そして今、初のモデル「Asra-Nova-Pico」を公開しました。日本語の指示を正確に理解し、コード生成にも強い、ASROの製品の中心で働くモデルです。",
      "asra.btn.kuup": "Kuupで体験する",
      "asra.about.p1": "他社のモデルを借りるだけでは、製品の体験は他社の都合に左右されます。ASROは、自分たちの製品のために、自分たちでモデルをつくる道を選びました。それがAsraです。",
      "asra.about.p2": "そして今、Asra初のモデル「Asra-Nova-Pico」が誕生し、公開されました。開発はASRO AIが担当。まずはKuupをはじめとするASROの製品の中で、その力を届けていきます。",
      "asra.f1.t": "日本語の指示理解",
      "asra.f1.d": "日本語の細かなニュアンスと指示を、正確に読み取ります。",
      "asra.f2.t": "コード生成",
      "asra.f2.d": "プログラムの生成と理解に強く、開発の場面でも活躍します。",
      "asra.f3.t": "製品のために",
      "asra.f3.d": "KuupなどASROの製品の頭脳として、体験と一体で磨かれます。",
      "asra.fact.name": "Asra（AIモデル）",
      "asra.fact.status": "「Asra-Nova-Pico」公開中",
      "asra.model.eyebrow": "The Model",
      "asra.model.h": "Asra-Nova-Pico",
      "asra.model.p": "「Nova」の輝きと、「Pico」の軽やかさ。Asra-Nova-Picoは、ASRO AIがゼロから育てた初のモデルです。大きなモデルの物真似ではなく、ASROの製品の中でこそ力を発揮する、実直な知性を目指しました。",
      "asra.test.eyebrow": "Tests",
      "asra.test.h": "テストと検証",
      "asra.test.p": "公開にあたって、Asra-Nova-Picoには日本語の指示理解、コード生成、会話の自然さなど、複数の観点でテストと検証を行いました。詳細な結果は、順次このページで公開していきます。",
      "asra.test.1.t": "日本語の指示理解",
      "asra.test.1.d": "細かなニュアンスを含む指示への追従を検証しました。",
      "asra.test.2.t": "コード生成",
      "asra.test.2.d": "実用的なプログラムの生成と、説明の正確さを確認しました。",
      "asra.test.3.t": "会話の自然さ",
      "asra.test.3.d": "日常の相談や雑談での応答の自然さを評価しました。",
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
      "about.p1": "ASRO is a technology brand working across AI, software, and the infrastructure that supports them. At its core is Asra, our own AI model — and our job is to shape its power into products anyone can use.",
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
      "asra.card.desc": "ASRO's own AI model — its first model, Asra-Nova-Pico, is now public. Strong at understanding Japanese instructions and generating code, it works as the brain behind ASRO's products.",
      "security.card.desc": "The team that keeps our products safe to use: vulnerability checks and fixes, account and public-feature protection, and secure day-to-day operations.",

      "div.eyebrow": "Divisions",
      "div.title": "Focused teams, one craft.",
      "div.lead": "ASRO's work is carried by specialized divisions — AI, video & audio, infrastructure, and security — working together as one product experience.",
      "div.ai.desc": "Develops the Asra AI model and AI products like Kuup, from research to implementation.",
      "div.movia.desc": "The video & audio division. Home of Moot, the animation creation tool.",
      "div.i.desc": "ASRO-i runs the servers and networks that keep ASRO's services alive.",
      "div.hub.desc": "ASRO Hub connects products and people through shared touchpoints and features.",

      "asra.eyebrow": "Asra — ASRO AI Model",
      "asra.title": "Our first model, Asra-Nova-Pico, is here.",
      "asra.body": "Developed by ASRO AI, Asra's first model — Asra-Nova-Pico — is now public. Its power reaches you first through ASRO's products, starting with Kuup.",

      "news.eyebrow": "News",
      "news.title": "News",
      "news.1.tag": "Notice",
      "news.1.title": "The ASRO website has been renewed",
      "news.1.body": "A new design and structure, with per-product pages and Japanese/English switching.",
      "news.2.tag": "Asra",
      "news.2.title": "Asra's first model, Asra-Nova-Pico, has been released",
      "news.2.body": "The first model developed by ASRO AI. See the Asra page for details.",

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
      "asra.h1": "Our brain, built by our own hands.",
      "asra.lead": "Asra is the AI model ASRO develops in-house — and now its first model, Asra-Nova-Pico, has been released. It understands Japanese instructions precisely and is strong at code generation, working at the heart of ASRO's products.",
      "asra.btn.kuup": "Try it in Kuup",
      "asra.about.p1": "Relying only on other companies' models means your product's experience is shaped by their decisions. ASRO chose to build its own model for its own products. That is Asra.",
      "asra.about.p2": "And now, Asra's first model — Asra-Nova-Pico — has been born and released, developed by ASRO AI. Its power reaches you first through ASRO's products, starting with Kuup.",
      "asra.f1.t": "Japanese instruction understanding",
      "asra.f1.d": "Reads the nuance and intent of Japanese instructions accurately.",
      "asra.f2.t": "Code generation",
      "asra.f2.d": "Strong at generating and understanding programs — useful in development, too.",
      "asra.f3.t": "Made for our products",
      "asra.f3.d": "The brain of Kuup and other ASRO products, refined together with the experience.",
      "asra.fact.name": "Asra (AI model)",
      "asra.fact.status": "Asra-Nova-Pico released",
      "asra.model.eyebrow": "The Model",
      "asra.model.h": "Asra-Nova-Pico",
      "asra.model.p": "The brilliance of Nova, the lightness of Pico. Asra-Nova-Pico is the first model raised from scratch by ASRO AI — not an imitation of bigger models, but an honest intelligence tuned to shine inside ASRO's products.",
      "asra.test.eyebrow": "Tests",
      "asra.test.h": "Tests & validation",
      "asra.test.p": "Before release, Asra-Nova-Pico went through tests and validation across Japanese instruction following, code generation, and conversational naturalness. Detailed results will be published on this page over time.",
      "asra.test.1.t": "Japanese instruction following",
      "asra.test.1.d": "Verified against instructions carrying subtle nuance.",
      "asra.test.2.t": "Code generation",
      "asra.test.2.d": "Checked for practical program generation and accurate explanations.",
      "asra.test.3.t": "Conversational naturalness",
      "asra.test.3.d": "Evaluated on everyday questions and casual conversation.",
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
