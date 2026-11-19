// __EMBEDDED_NEWS_START__
globalThis.__IT_TREND_EMBEDDED_DATA__ = {"updated_at":"2026-11-20 05:16:15 JST","total_count":50,"config":{"selected_genres":["ai","web","infra","mobile","biz"],"other_genre_min_ratio":0.25,"max_age_hours":72.0,"genres":{"ai":"AI・LLM・機械学習","web":"Web開発・言語","infra":"インフラ・クラウド・セキュリティ","mobile":"モバイル・ガジェット・個人開発","biz":"ITビジネス・キャリア・マネジメント","other":"総合・その他IT"}},"articles":[{"title":"「PHP」で17件の脆弱性に対処、認証不要のリモートコード実行につながる“致命的”なものも／v8.5.13、v8.4.28、v8.3.37、v8.2.36が公開","url":"https://forest.watch.impress.co.jp/docs/news/2158039.html","source":"Hatena","published_at":"2026-11-20 00:05","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"PHPで17件の脆弱性を修正、リモートコード実行の恐れがある致命的なものも","summary":"PHP開発チームは、セキュリティアップデートとしてv8.5.13、v8.4.28、v8.3.37、v8.2.36を公開しました。今回の修正では合計17件の脆弱性が対処されており、そのうち7件は深刻度が最高の「Critical」と評価されています。\n\n特に、メモリの不正使用（use-after-free）やリクエストスマグリング、セッション処理の不備などを悪用することで、リモートコード実行につながる脆弱性が含まれています。公式アドバイザリでは、特定の構成下での悪用が実証されているため、利用者は速やかなアップデートが推奨されます。","importance":9},{"title":"「ほぼ全人類が永久に失業する」Anthropic研究者がAIの未来を予測","url":"https://ascii.jp/elem/000/004/452/4452982/","source":"Hatena","published_at":"2026-11-19 18:44","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"「ほぼ全人類が永久に失業する」Anthropic研究者がAIの未来を予測","summary":"Anthropicの研究者Tao Lin氏は、AIの進化により2027年末までに人間の専門家を凌駕するAIが登場し、長期的にはほぼすべての人間が雇用を失う可能性が高いと予測しました。\n\n同氏は、肉体労働の代替にはロボットの大量生産が必要なため時間差はあるものの、最終的には政府の福祉制度に依存する社会が到来すると警鐘を鳴らしています。開発競争による安全性の欠如を懸念し、AI開発ペースの抑制や政府による規制の必要性を訴えています。","importance":8},{"title":"128GBメモリで120BクラスのLLMが動く！　マウスコンピューターの卓上ローカルAI向けミニPC「DAIV CX」の実力","url":"https://www.itmedia.co.jp/pcuser/articles/2611/19/news047.html","source":"Hatena","published_at":"2026-11-19 16:38","genre":"mobile","genre_label":"モバイル・ガジェット・個人開発","headline":"128GBメモリ搭載のミニPC「DAIV CX」で120BクラスLLMのローカル実行を実現","summary":"マウスコンピューターのクリエイター向けブランド「DAIV」から、ローカルAI運用に特化したミニPC「DAIV CX」シリーズが登場しました。AMDのRyzen AI Max+ 395と128GBのLPDDR5Xメモリを搭載し、高価な外付けGPUなしで120Bクラスの巨大なLLMを動かせる点が最大の特徴です。\n\nクラウドAIのトークンコストや機密情報管理の課題に対し、ローカル環境でのAI実行は有効な解決策となります。本機は、統合GPUと大容量メインメモリを組み合わせることで、GPUメモリの制限を克服しました。高性能なAI環境を小型筐体で実現しており、ビジネスやクリエイティブ用途での活用が期待されます。","importance":8},{"title":"「子が私の暗殺方法、AIに相談してた」反抗期の小学生の子どもの行動に心身疲れてしまった母親がXに投稿「将来に少しでも道筋をつけてあげられたらって。毒親なのかねえ」","url":"https://togetter.com/li/2772442","source":"Hatena","published_at":"2026-11-19 20:53","genre":"other","genre_label":"総合・その他IT","headline":"小学生がAIに母親の暗殺を相談、家庭内の行き詰まりとAI利用の課題","summary":"X（旧Twitter）上で、小学生の子どもがAIに対して母親の暗殺方法を相談していたという投稿が大きな反響を呼びました。投稿者は家庭内の行き詰まりや自身の疲弊を吐露し、ネット管理の難しさや思春期の心理的変化について議論が巻き起こっています。\n\nこの事例は、子どもが生成AIにアクセスする際の保護者による管理の限界や、AIが過激な回答を生成するリスク、そして現代の家庭におけるメンタルヘルスケアの重要性を浮き彫りにしました。AIとの付き合い方や、親子間のコミュニケーションのあり方について多くの意見が寄せられています。","importance":5},{"title":"Cognito認証、フロントとバックエンドで「誰が何をやるか」を整理する","url":"https://zenn.dev/taichan/articles/47891bbc4eee8a","source":"Zenn","published_at":"2026-11-19 13:48","genre":"web","genre_label":"Web開発・言語","headline":"Cognito認証におけるフロントとバックエンドの責務分担","summary":"CognitoとFastAPIを用いた認証実装において、フロントエンドとバックエンドの役割分担を明確化する重要性が解説されました。フロントエンドは認証ライフサイクルの管理とトークンの運搬に専念し、検証は行わないことが推奨されています。\n\nバックエンドは「信頼境界」として、毎リクエストごとにJWTをローカルで検証する責務を負います。Cognitoへの問い合わせは公開鍵（JWKS）取得時のみに限定し、キャッシュを活用するのが定石です。フロントエンドでの検証は改竄リスクがあるため無意味であり、非対称鍵の仕組みを正しく理解した設計が不可欠です。","importance":8},{"title":"2週間号泣したという孫正義氏「残りの人生はAIに捧げる」（中央日報日本語版） - Yahoo!ニュース","url":"https://news.yahoo.co.jp/articles/d6d5a9af37190052af672524a3da6728dce9ecec","source":"Hatena","published_at":"2026-11-19 11:57","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"孫正義氏が語るAIへの執念とソフトバンクの未来構想","summary":"ソフトバンクグループの孫正義会長が、AIに人生を捧げる決意を語りました。17歳でマイクロプロセッサーに衝撃を受けて以来、AIが人類を超える時代を確信しており、今後はAIモデル、半導体、インフラ、フィジカルAIの4大事業で世界1位を目指すと宣言しました。\n\nAIが人間を脅かすという懸念に対し、孫氏は「人間とAIは共存できる」と楽観的な見解を示し、道徳性や社会性を備えた「良いAIエージェント」の育成が重要だと強調しました。メディアの未来や持続可能な経営についても議論が交わされ、AI時代におけるプラットフォーム掌握への強い意志が示されました。","importance":8},{"title":"サーバーソフト「nginx」に脆弱性、日本人ハッカーら発見 - 日本経済新聞","url":"https://www.nikkei.com/article/DGXZQOUC191DA0Z11C26A1000000/","source":"Hatena","published_at":"2026-11-19 15:16","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"サーバーソフト「nginx」に重大な脆弱性、国内サイトの約6割に影響","summary":"国内Webサイトの約6割で使用されているサーバーソフト「nginx」に、重大な脆弱性が発見されました。日本のホワイトハッカーやGoogle傘下企業などが発見したもので、悪用されると外部からサーバーを不正に操作される恐れがあります。\n\n開発元はサイバー攻撃のリスクを警告し、早期の対応を呼びかけています。Webインフラの根幹を支えるソフトであるため、影響範囲は極めて広範囲です。官房長官も必要な措置を呼びかけるなど、国家レベルでの警戒が必要な事態となっています。","importance":10},{"title":"「10年前にこれ描いてるのすごい」人間とAIが共存する近未来医療SFマンガ『AIの遺電子』全巻99円セール中→なお作者は困惑「僕、作者！！実入りはどうなるの！！？」","url":"https://togetter.com/li/2772319","source":"Hatena","published_at":"2026-11-19 14:30","genre":"other","genre_label":"総合・その他IT","headline":"近未来医療SF『AIの遺電子』全巻99円セールに作者も困惑","summary":"2015年から連載され、AIと人間が共存する未来を鋭く描いた山田胡瓜氏のSF漫画『AIの遺電子』シリーズが、Kindleで全巻99円のセールを実施し話題となっています。作者自身が「実入りはどうなるの？」とSNSで反応する一方で、読者からは「今の時代にこそ読むべき先見の明がある作品」と再評価の声が上がっています。\n\n本作は、AIが社会に浸透した近未来を舞台に、ヒューマノイドと人類の葛藤を医療の視点から描いた名作です。AI技術が現実のものとなった今、当時の描写が驚くほど正確であると注目を集めており、未読の層に向けて改めてその深い世界観が推奨されています。","importance":4},{"title":"Google「Gemini 4 Neon」公開、Carbonより1タスク32%安い中位モデル　Geminiアプリは有料プランで選択可能 | テクノエッジ TechnoEdge","url":"https://www.techno-edge.net/article/2026/11/19/5766.html","source":"Hatena","published_at":"2026-11-19 18:07","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"Googleが中位モデル「Gemini 4 Neon」を公開、コスト効率を重視","summary":"GoogleはGemini 4ファミリーの新モデル「Gemini 4 Neon」を発表しました。高性能な「Carbon」と高速な「Hydrogen」の中間に位置し、複雑なコーディングや分析をCarbonより32%低いコストで実行可能です。\n\n開発者向けAPIや企業向けツール、Geminiアプリで利用可能で、特にタスク実行のコストパフォーマンスに優れています。また、間接プロンプトインジェクションに対する防御性能も強化されており、実用的な業務フローへの導入が期待されます。","importance":8},{"title":"複雑な立体形状や皮膚上に直接形成可能なナノメッシュ皮膚センサの開発に成功 ―次世代ヘルスケアやヒューマン・マシン・インターフェース応用に期待―","url":"https://www.t.u-tokyo.ac.jp/press/pr2026-11-19-001","source":"Hatena","published_at":"2026-11-19 16:06","genre":"mobile","genre_label":"モバイル・ガジェット・個人開発","headline":"皮膚に直接紡糸するナノメッシュセンサ、高精度な生体計測を実現","summary":"東京大学の研究グループは、皮膚上に導電性ナノファイバーを直接紡糸することで、指先などの複雑な立体曲面にも密着するナノメッシュ皮膚センサを開発しました。通気性と放熱性に優れ、装着時の違和感なく心電図や圧力などの生体信号を安定して計測可能です。\n\n従来のフィルム型センサでは困難だった部位への装着が可能となり、ハンドジェスチャー認識や日常的な健康モニタリングへの応用が期待されます。深層学習と組み合わせることで、7種類のハンドジェスチャーを平均97.8%の精度で識別することに成功しました。ウェアラブル技術の次世代を担う画期的な成果です。","importance":8},{"title":"TypeScript 7.1 の Content Mapper で型の生成コマンドをなくす","url":"https://zenn.dev/toiroakr/articles/typescript-content-mapper-codegen","source":"Zenn","published_at":"2026-11-19 11:10","genre":"web","genre_label":"Web開発・言語","headline":"TypeScript 7.1のContent Mapperで型生成コマンドを不要にする手法","summary":"TypeScript 7.1で導入されるContent Mapperは、外部プログラムを介して非TSファイルを型定義へ変換する仕組みです。従来、WranglerやPrismaなどで必要だった型生成コマンドを置き換え、型チェック時に動的に型を生成・対応付けが可能になります。\n\nライブラリ開発において、ユーザーの設定ファイルに基づいた型定義の自動生成や、宣言マージの課題を解決する手段として有効です。生成コマンドの再実行忘れによる型不整合を防ぎ、より堅牢な型安全性を実現します。","importance":8},{"title":"新宿駅の西口、地下連絡通路の一部を12月19日から変更","url":"https://www.watch.impress.co.jp/docs/news/2157859.html","source":"Hatena","published_at":"2026-11-19 15:53","genre":"other","genre_label":"総合・その他IT","headline":"新宿駅西口の地下連絡通路、12月19日より仮設通路へ変更","summary":"新宿駅の工事に伴い、12月19日の始発から西口の地下連絡通路の一部が変更されます。影響を受けるのは主に東京メトロ丸ノ内線および都営地下鉄大江戸線の利用者で、既存の連絡通路が閉鎖され、西側に新設される仮設通路へ切り替わります。\n\n新設される仮設通路には、車椅子利用者が通行可能なスロープが設置される予定です。新宿駅周辺の工事は長期にわたるため、利用者は当日の案内や掲示板を確認し、移動経路の変更に注意が必要です。","importance":3},{"title":"ソフトウェアダークファクトリー | 技術評論社","url":"https://gihyo.jp/book/2026/978-4-297-16073-9","source":"Hatena","published_at":"2026-11-19 20:56","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"AI時代の開発組織論「ソフトウェアダークファクトリー」の設計思想","summary":"技術評論社から出版された本書は、AIコーディングの普及に伴う「あいまいな仕様」や「薄いテスト」といったリスクを制御するための新しい開発アーキテクチャを提唱しています。人間を排除するのではなく、人間の判断や教訓をシステム構造に埋め込む手法を解説します。\n\nDDD、型システム、形式手法、SREなどの工学手法を「AIを制御する仕組み」として再構築し、AIが雑に実装しても安全に変更を生み出し続けられるガードレールの設計法を提示します。AI開発を本番導入する中堅以上のエンジニアに向けた、設計思想の指南書です。","importance":7},{"title":"美少女ゲーム「NIKKE」経由でマルウェア感染　北海道2自治体、委託先が認める","url":"https://www.itmedia.co.jp/news/article/2611/19/2000003351/","source":"Hatena","published_at":"2026-11-19 20:25","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"人気ゲーム「NIKKE」経由でマルウェア感染、北海道の自治体で情報漏えい","summary":"北海道岩見沢市と新得町は、業務委託先のPCがマルウェア「K2F」に感染し、個人情報が漏えいした可能性があると発表しました。原因は、人気ゲーム「勝利の女神：NIKKE」のPC版ランチャーが第三者に改ざんされていたことによるものと判明しました。\n\nK2Fは遠隔操作や情報窃取を行うマルウェアであり、ゲーム起動時に感染する恐れがありました。自治体側は、固定資産税情報や住民基本台帳データなどが流出した可能性があるとして調査を進めています。ゲームのランチャーが攻撃の踏み台にされるという、サプライチェーン攻撃の新たな脅威が顕在化しました。","importance":9},{"title":"OpenAI-API呼び出しにおけるプロンプトキャッシュの学び","url":"https://zenn.dev/91works/articles/76132a32606efb","source":"Zenn","published_at":"2026-11-19 17:25","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"OpenAI APIのプロンプトキャッシュ最適化でコストを44.8%削減","summary":"LLMを用いたメール分類システムにおいて、プロンプトの順序を最適化することでOpenAIのプロンプトキャッシュヒット率を0%から99.5%へ引き上げ、コストを44.8%削減した事例が紹介されました。\n\nキャッシュを効かせるためには、固定部分を先頭（プレフィックス）に配置し、1,024トークン以上の長さを確保する必要があります。また、最適化の効果を維持するための回帰テストの重要性や、Langfuseを用いたコスト計測の具体的な手順が解説されています。","importance":8},{"title":"ネットに繋がらない携帯「INFOBAR ZERO」は一体誰向けなのか","url":"https://japan.cnet.com/article/35255140/","source":"Hatena","published_at":"2026-11-19 15:54","genre":"mobile","genre_label":"モバイル・ガジェット・個人開発","headline":"ネット接続不可の携帯「INFOBAR ZERO」が提案するデジタルデトックス","summary":"KDDIが発表した「INFOBAR ZERO」は、音声通話とSMSに機能を絞った、インターネット接続ができない携帯電話です。スマートフォンから意識的に距離を置く「デジタルデトックス」への関心が高まる中、あえて機能を削った製品として注目されています。\n\nダムフォン（機能限定携帯）の効果については賛否両論あり、自ら切り替えを希望した層には心理的改善が見られる一方、実生活での不便さも指摘されています。KDDIはスマホとの「2台持ち」を想定しており、デザイン性を重視するファンや、スマホ依存を解消したい層をターゲットに展開されます。","importance":5},{"title":"vue-tscの壁を越える：vizeとtsrsでVueの型検査を高速化した","url":"https://zenn.dev/studio/articles/vue-typecheck-vize-tsrs","source":"Zenn","published_at":"2026-11-18 23:26","genre":"web","genre_label":"Web開発・言語","headline":"Vueプロジェクトの型検査をtsrsとvizeで13倍高速化","summary":"Vueプロジェクトにおいて、TypeScript 7.1のContent Mapperを活用した「tsrs」と「vize」を導入し、vue-tscによる型検査を大幅に高速化した事例です。CIの型検査時間を約10分から約2分へ短縮し、メモリ使用量も削減しました。\n\nVue特有の型検査のボトルネックを解消し、TypeScript 7の恩恵を享受できるようになった経緯が詳細に解説されています。フレームワーク固有のファイル形式を持つプロジェクトにおける型検査高速化の先駆的な取り組みです。","importance":9},{"title":"サム・アルトマンが「誰もが十分なRAMを持つべきだと考えている」と発言","url":"https://gigazine.net/news/20261119-sam-altman-ram/","source":"Hatena","published_at":"2026-11-19 15:00","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"サム・アルトマン氏がRAMに関する発言を釈明、「誰もが十分なメモリを持つべき」","summary":"OpenAIのサム・アルトマンCEOは、以前の「個人のPCに大量のRAMを搭載するのは非効率」という発言が誤解されたと説明しました。サミットにおいて、メモリの供給不足が続く現状を憂慮しつつも、個人が自宅でAIモデルを動かせる環境を望んでいると語りました。\n\nアルトマン氏は、メモリ生産量を増やすべきだと長年主張してきたと述べ、自身の発言が文脈から切り離されたことに不満を示しました。AIの未来をコントロールしたいという人々の願いを尊重し、データセンターへの集約だけでなく、ローカルでのAI活用も重要であるという姿勢を改めて強調しました。","importance":6},{"title":"湘南美容クリニックのSBCグループに不正アクセス、約162万人の個人情報流出　パスワードは暗号化せず保存 | テクノエッジ TechnoEdge","url":"https://www.techno-edge.net/article/2026/11/19/5773.html","source":"Hatena","published_at":"2026-11-19 16:30","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"SBCメディカルグループで不正アクセス、約162万人の個人情報流出","summary":"湘南美容クリニックなどを運営するSBCメディカルグループは、保有するデータベースへの不正アクセスにより、約162万人の個人情報が流出したと発表しました。流出項目には氏名、住所、電話番号、メールアドレス、パスワードなどが含まれており、2010年から2023年までのデータが対象です。\n\n今回の事案では、登録当時のパスワードが暗号化されずに保存されていたことが大きな問題となっています。同社は被害者に対し、他サービスでのパスワード変更を呼びかけるとともに、専用窓口を設置して対応しています。サイバー攻撃による大規模な情報漏えいは、医療機関におけるセキュリティ対策の重要性を改めて浮き彫りにしました。","importance":9},{"title":"グーグル、Geminiに作業を任せる「タスク」を日本など6カ国で無料提供　旧「Spark」を改称","url":"https://japan.cnet.com/article/35255128/","source":"Hatena","published_at":"2026-11-19 11:12","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"Google Geminiの「タスク」機能が日本など6カ国で無料提供開始","summary":"Googleは、対話型AI「Gemini」の作業代行機能「Spark」を「タスク」に改称し、日本を含む6カ国で無料提供を開始しました。基盤モデルには「Gemini 4 Hydrogen」を採用し、メール検索や予定整理などの作業をAIに任せることが可能です。\n\n対応アプリを接続することで、サービスを横断した自動操作が実現します。今後は米国を皮切りに、電話予約や決済などの追加機能も順次展開される予定です。個人のGoogleアカウントで利用可能であり、AIエージェントとしての実用性が一般ユーザーにも広く開放されました。","importance":8},{"title":"「Apple Watch Ultra 4」を試す　丸2日使って残量49％　アウトドアをしない人が選ぶ理由は“バッテリー”に集約","url":"https://www.itmedia.co.jp/pcuser/articles/2611/19/news053.html","source":"Hatena","published_at":"2026-11-19 12:24","genre":"mobile","genre_label":"モバイル・ガジェット・個人開発","headline":"Apple Watch Ultra 4のバッテリー性能と日常使いのメリット","summary":"Apple Watch Ultra 4は、外観を維持しつつチップと心拍センサーを刷新し、バッテリー駆動時間が最大50時間に延長されました。実機検証では丸2日使用しても残量49％を維持するなど、公称値通りの高いスタミナが確認されています。\n\nアウトドア用途だけでなく、充電頻度の低減や頑丈さ、視認性の高い画面は日常使いにおいても大きなメリットとなります。睡眠記録などのヘルスケア機能を活用するユーザーにとって、充電の手間が減ることは実用上の価値が高く、高価格帯ながら選ぶ理由が明確なモデルです。","importance":5},{"title":"アプリケーションエンジニアの考えるセキュリティ対策（考え方と共通の前提） | フューチャー技術ブログ","url":"https://future-architect.github.io/articles/20261119a/","source":"Hatena","published_at":"2026-11-19 14:20","genre":"web","genre_label":"Web開発・言語","headline":"アプリケーションエンジニアが守るべきセキュリティの共通前提","summary":"アプリケーションエンジニアが実務で取り組むべきセキュリティ対策について、技術的な考え方と共通の前提が整理されました。セキュリティはサービスレベル設計の一部であり、エンジニアはプロトコルとプロダクトの最適な組み合わせを見極める責任があります。\n\n共通の前提として、「言語・フレームワーク・部品を常に最新に保つこと」と「セキュアプログラミングの型を外さないこと」の2点が強調されています。生成AIの活用で開発コストが下がっても、セキュリティを維持するコストは変わらないため、責任共有モデルを理解し、継続的に守り続ける姿勢が重要です。","importance":7},{"title":"もうすぐ40歳が終わってしまうので、30代でやってよかったことをまとめる","url":"https://zenn.dev/339/articles/22aa00adb7ac84","source":"Zenn","published_at":"2026-11-19 00:03","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"30代で実践してよかった「知識の積み上げ」と「目標設定」の習慣","summary":"40歳を目前にしたエンジニアが、30代で実践して成果が出た習慣を振り返るポエム的記事です。反省を知識として研究のように積み上げること、目標を立てる習慣、先人の知恵を優先する姿勢などが、自身の成長と成果に繋がったと語られています。\n\n起業や人間関係の構築、コーチングの実践など、技術力だけでなくマネジメントや自己成長のルールを確立した経験が共有されています。エンジニアとしてのキャリア形成において、非常に示唆に富む内容です。","importance":6},{"title":"認証なしでリモートコード実行の恐れ、Javaに脆弱性「Java4Shell」　JiraやJenkinsで攻撃実証の報告も","url":"https://www.itmedia.co.jp/enterprise/articles/2611/19/news055.html","source":"Hatena","published_at":"2026-11-19 16:23","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"Javaの脆弱性「Java4Shell」に注意、リモートコード実行の恐れ","summary":"Java実行環境のBase64デコーダーに存在する脆弱性「Java4Shell（CVE-2026-114938）」が公表されました。この脆弱性は、細工されたBase64入力により、認証なしでリモートコード実行を許す可能性があるため、CISAやIPAが早急な修正プログラムの適用を呼びかけています。\n\n影響範囲はOracle Java SEだけでなく、OpenJDKをベースとした複数のディストリビューションに及びます。特にJiraやJenkinsなどのJava製アプリケーションでの悪用が実証されており、注意が必要です。AVX-512 VBMI命令に対応したプロセッサ環境でリスクが高まるため、対象環境の特定とアップデートが急務です。","importance":9},{"title":"Agenship — Software FactoryであなたのチームにAIの開発ラインを","url":"https://agenship.ai/","source":"Hatena","published_at":"2026-11-19 21:07","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"AIエージェントが自律的に開発工程を完結させる「Agenship」","summary":"Agenshipは、仕様策定から実装、テスト、Pull Request作成までをAIエージェントがクラウド上で完結させる「Software Factory」です。人間が工程間をつなぐ作業を最小化し、エンジニアは判断とレビューに集中できる環境を提供します。\n\nAIによる自律的な開発フローを実現することで、個人のコーディング速度向上だけでなく、組織全体の生産性向上を目指すツールです。検証済みのコードが自動的に届く仕組みにより、開発プロセスの効率化を支援します。","importance":7},{"title":"DependabotのPRをClaudeで影響分析して、リスク（低・中・高）をPRにコメントする","url":"https://zenn.dev/tomipetit/articles/dependabot-impact-analysis-claude","source":"Zenn","published_at":"2026-11-19 12:53","genre":"web","genre_label":"Web開発・言語","headline":"DependabotのPRをClaudeで分析しリスクを自動コメント","summary":"GitHubのDependabotによるセキュリティアップデートPRに対し、Claude Codeを活用して影響分析を行い、リスクレベルを自動コメントする仕組みが構築されました。これにより、パッチ更新の裏に潜むメジャー更新や、本番コードへの影響を効率的に判断できるようになります。\n\nGitHub Actionsを用いて、変更前後のpackage-lock.jsonの比較やAdvisory Databaseの検索を自動化し、Claudeに分析させるフローを実装しています。手動でのリリースノート確認やgrep作業を削減し、安全かつ迅速な依存関係の更新を実現する実用的な手法です。","importance":7},{"title":"NGINXの複数の脆弱性対策について（CVE-2026-123007、CVE-2026-123633等） | 情報セキュリティ | IPA 独立行政法人 情報処理推進機構","url":"https://www.ipa.go.jp/security/security-alert/2026/alert20261119.html","source":"Hatena","published_at":"2026-11-19 15:49","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"NGINXに複数の深刻な脆弱性、アップデートと対策が急務","summary":"NGINX Open SourceおよびNGINX Plusにおいて、複数の脆弱性が公開されました。そのうち5件はCVSS v4.0で9.2（Critical）と評価されており、悪用されるとリモートコード実行などの被害を受ける恐れがあります。\n\n修正版であるNGINX 1.30.7や1.31.9へのアップデートが推奨されています。HTTP/2を無効化する暫定対策も案内されていますが、他の脆弱性には対応できないため、根本的な修正プログラムの適用が不可欠です。WebサーバーやAPIゲートウェイとして広く利用されているため、管理者は早急な対応が求められます。","importance":9},{"title":"llama.cpp：DGX Spark 2台でNCCLを使うマルチGPU推論手順","url":"https://zenn.dev/catspawengineer/articles/1dbc4e0c913e64","source":"Zenn","published_at":"2026-11-19 17:39","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"llama.cppでNCCLを用いたマルチGPU推論の構築手順","summary":"llama.cppがNCCLに対応したことを受け、NVIDIA DGX Spark 2台を用いたテンソル並列推論の構築手順が公開されました。RPCとNCCLを組み合わせることで、複数ノード間での高速な推論が可能になります。\n\nビルド時の設定やネットワークインターフェースの指定、モデルのアーキテクチャ適合性など、実運用における注意点が詳細にまとめられています。公式ドキュメントにはない構成での動作検証結果として、高度なAI環境構築を目指すエンジニアにとって有益な情報です。","importance":7},{"title":"規約を AI に「守ってもらう」のをやめた ― 判定できる規約は検査に移し、人が読むのは免除理由と設計判断に絞る","url":"https://zenn.dev/t_azk/articles/rules-as-checks-not-prose-for-ai","source":"Zenn","published_at":"2026-11-19 02:48","genre":"web","genre_label":"Web開発・言語","headline":"規約の文章化をやめ、静的検査で違反を自動検知する開発体制へ","summary":"READMEやドキュメントによる規約の周知が守られない課題に対し、規約を静的検査（Lint）へ移行し、違反を自動検知する仕組みを導入した事例です。AIや人が規約を忘れることを前提とし、構造的に違反を防ぐ「ガードレール」を構築しました。\n\n「違反か否か」と「直し方」を検査側が提示することで、AIの推論範囲を狭め、レビューの負荷を大幅に軽減しています。規約を文章からコード（検査）へ移すことで、開発の品質と効率を両立させています。","importance":8},{"title":"日本版DBSのシステムで見つかった脆弱性についてまとめてみた - piyolog","url":"https://piyolog.hatenadiary.jp/entry/2026/11/19/141704","source":"Hatena","published_at":"2026-11-19 14:21","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"日本版DBS「こまもろうシステム」脆弱性発覚で稼働延期","summary":"こども家庭庁は、日本版DBS（性犯罪歴確認システム）の専用システム「こまもろうシステム」において深刻な脆弱性が多数発見されたことを受け、12月25日の運用開始を延期すると発表しました。稼働前のAI点検により不正アクセスのリスクが判明したため、当面は書面による代替案を検討する方針です。\n\n本システムは、性犯罪歴の確認をオンライン化する重要なインフラとして開発が進められてきましたが、セキュリティ上の懸念から稼働が見送られました。なお、現時点では個人情報の入力は行われておらず、情報流出の被害はないとされています。制度自体は予定通り開始されるため、早急な代替措置の構築が求められています。","importance":9},{"title":"Genie 4 is now available","url":"https://blog.google/innovation-and-ai/models-and-research/google-deepmind/genie-4-now-available-project-genie/","source":"Hatena","published_at":"2026-11-19 17:23","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"Googleが「Genie 4」を公開、対話でインタラクティブな世界を生成","summary":"Googleは、インタラクティブなデジタル世界を生成する「Project Genie」の最新モデル「Genie 4」を公開しました。Google AI Ultra加入者向けに提供され、自然言語によるリアルタイムの環境編集や音声付加が可能になりました。\n\n新しいクリエイティブエージェントにより、対話を通じて複雑な環境を構築し、コミュニティギャラリーで共有・リミックスすることができます。Genie 3の機能強化も含まれており、より没入感のある世界生成体験を提供します。","importance":7},{"title":"Go コンパイラを制御する疑似フィールドハック集","url":"https://zenn.dev/yumemi_inc/articles/go-pseudo-field-hacks","source":"Zenn","published_at":"2026-11-19 12:24","genre":"web","genre_label":"Web開発・言語","headline":"Goコンパイラの最適化を制御する疑似フィールドハック","summary":"Go言語において、構造体に中身のないフィールド（_ [0]func()など）を追加することで、コンパイラの振る舞いを制御するテクニックが紹介されました。これは、巨大な構造体に対する等価比較関数の自動生成を抑制し、コンパイル時間を劇的に短縮する手法です。\n\n標準ライブラリでも活用されているこのハックは、型の性質を変えるために用いられます。比較できない型をフィールドに含めることで、コンパイラが不要な関数を生成するのを防ぎます。ポインタを使うよりも効率的で、大規模なデータ構造を扱う際のビルド時間短縮に有効な手段です。","importance":6},{"title":"nginx に深刻脆弱性 / NPMアップデートの注意点","url":"https://zenn.dev/gabie/articles/db33ec5990ec54","source":"Zenn","published_at":"2026-11-19 13:16","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"nginxの深刻な脆弱性対応とNPMアップデートの注意点","summary":"nginxにおいてHTTP/2に関連する深刻な脆弱性（CVE-2026-123007等）が公表され、早急なアップデートが求められています。VPS等で直接nginxを運用している場合は、公式リポジトリからの再インストールが必要です。\n\n一方、Nginx Proxy Manager（NPM）を利用している環境では、コンテナの構造上、nginx単体のアップデートが困難なケースがあります。バックアップの重要性が強調されるとともに、頻繁な脆弱性対応が必要な現状において、NPMのような管理ツールの運用リスクについても再考が促されています。","importance":9},{"title":"自分の代わりに動くAgentへ。Claude CodeとCodexで作る自律改善ハーネス","url":"https://zenn.dev/nttdata_tech/articles/9562962cc181a1","source":"Zenn","published_at":"2026-11-19 16:28","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"Claude CodeとCodexを活用した自律作業用ハーネスの設計と運用","summary":"コーディングAgentを自律的に活用するための「ハーネス（仕組み）」を構築し、開発から資料作成までを並行して任せる運用手法が紹介されています。プロンプトの工夫よりも、Agentが自律的に読み書き・検査できるフォルダ構造や規約の整備に注力することで、複数のセッションを並行稼働させることに成功しました。\n\nこの設計では、タスクの状態管理や索引の階層化を徹底し、Agentが迷わず作業できる環境を構築しています。結果として、人間は確認と判断に集中できるようになり、生産性が大幅に向上しました。AIを単なるツールとしてではなく、自律的なチームの一員として組み込むための実践的な知見が示されています。","importance":7},{"title":"脆弱性で話題「nginx」なんて読む？　「ンギンクス」ではなく……","url":"https://www.itmedia.co.jp/news/article/2611/19/2000003338/","source":"Hatena","published_at":"2026-11-19 18:23","genre":"web","genre_label":"Web開発・言語","headline":"Webサーバ「nginx」の正しい読み方は「エンジンエックス」","summary":"緊急の脆弱性で注目を集めるWebサーバソフト「nginx」ですが、その読み方が「エンジンエックス」であることが改めて話題となっています。開発者のイーゴリ・シソエフ氏によると、名前の由来は「NG」と「X」を組み合わせたもので、エンジンという発音が好きだったことに起因します。\n\n「ンギンクス」と誤読されがちですが、公式サイトでも「engine x」と明記されています。技術的な脆弱性対応と併せて、正しい名称の認知がエンジニアの間で再確認されています。","importance":5},{"title":"相次ぐOSSの脆弱性に、とりあえずクラウドWAF入れるだけでだいぶ違う話+Rootlessコンテナもいいぞ","url":"https://zenn.dev/kusuke/articles/98e178e6824cac","source":"Hatena","published_at":"2026-11-19 11:22","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"OSS脆弱性ラッシュへの対策：クラウドWAFの導入とRootlessコンテナ","summary":"相次ぐOSSの深刻な脆弱性に対し、パッチ適用までの時間を稼ぐためのアーキテクチャ上の保険として、クラウドWAFの導入が推奨されています。特にHTTPプロキシ型のWAFは、オリジンサーバを直接さらさないことで、プロトコルレベルの攻撃をエッジで終端できる利点があります。\n\nまた、レート制限による攻撃の抑制も有効です。さらに、コンテナ運用においてはRootlessコンテナの採用がセキュリティ向上に寄与します。深夜の緊急パッチ対応に疲弊するエンジニアにとって、こうした多層的な防御策は、健康的な開発環境を維持するための現実的な選択肢となります。","importance":9},{"title":"新機能、ElastiCache の distributed KV caching を GPU 2 台の vLLM で試す","url":"https://zenn.dev/aws_japan/articles/elasticache-distributed-kv-cache-bench","source":"Zenn","published_at":"2026-11-19 15:55","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"ElastiCacheの分散KVキャッシュ機能でLLM推論を高速化","summary":"Amazon ElastiCache for Valkeyで「distributed KV caching」が利用可能になり、複数のGPUサーバー間でKVキャッシュを共有できるようになりました。これにより、同じシステムプロンプトや文脈を繰り返すリクエストにおいて、再計算を省きTTFT（最初のトークン生成時間）を短縮できます。\n\n検証では、GPUローカルのキャッシュのみの場合と、ElastiCacheを併用した場合を比較し、マルチテナント環境での効率的なキャッシュ再利用の効果を確認しました。LMCacheを介してRDMAやTCPでデータを転送する仕組みにより、推論サーバーの負荷分散と応答速度の向上が期待できます。","importance":7},{"title":"ARM64のSurfaceでReact・Spring Boot・PostgreSQLのフルスタック環境を作り、タスク管理画面を実装した","url":"https://zenn.dev/rkknttkm0831/articles/e6e29fd7a62257","source":"Zenn","published_at":"2026-11-19 00:49","genre":"web","genre_label":"Web開発・言語","headline":"ARM64 SurfaceでのDev Containerを用いたフルスタック開発","summary":"ARM64搭載のSurface Laptop上で、WSL2とDev Containerを活用したReact・Spring Boot・PostgreSQLのフルスタック開発環境構築事例です。ホスト環境を汚さず、コンテナ内に開発環境を完結させることで、ARM64環境での互換性問題をクリアしています。\n\nMSWを用いたフロントエンド先行開発や、DBスキーマ・API仕様の先行定義など、個人開発における効率的な設計・実装プロセスが示されています。","importance":6},{"title":"「湘南美容クリニック」などの個人情報流出　氏名など162万人分　不正アクセスで","url":"https://japan.cnet.com/article/35255171/","source":"Hatena","published_at":"2026-11-19 22:48","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"湘南美容クリニックで不正アクセス、162万人分の個人情報が流出","summary":"SBCメディカルグループは、不正アクセスにより湘南美容クリニックなどの利用者162万4000人分の個人情報が流出したと発表しました。氏名、連絡先、生年月日のほか、当時暗号化されていなかったパスワードも含まれています。\n\n流出対象には予約情報や相談内容も含まれ、一部の外部予約サービス経由でも被害が確認されています。同社は該当サーバーを切り離し、被害者への個別連絡を進めています。二次被害は現時点で確認されていませんが、他サービスで同一パスワードを使い回している場合は変更を強く推奨しています。","importance":8},{"title":"Claude Code のサブエージェントは「定義しただけ」では使われない ― 大きなファイルを任せて本スレッドを軽く保つ","url":"https://zenn.dev/mukuil_blog/articles/71edd164433250","source":"Zenn","published_at":"2026-11-19 15:12","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"Claude Codeのサブエージェント活用でコンテキスト長を最適化","summary":"Claude Codeのコスト削減と性能維持のため、大きなファイルをメインスレッドで読み込まず、調査専用のサブエージェントに委譲する手法が紹介されました。当初は定義しただけでは使われませんでしたが、CLAUDE.mdに「使うべき場面」を具体的に指示することで利用率が向上しました。\n\nサブエージェントに調査を任せることで、メインスレッドのコンテキストを軽く保ち、トークン消費を抑えつつ精度を維持できます。編集作業はメイン側で行うなど、役割分担を明確にすることが重要です。AIエージェントを効率的に運用するための実践的な設計指針です。","importance":7},{"title":"物流代行サービス「オープンロジ」への不正アクセスについてまとめてみた - piyolog","url":"https://piyolog.hatenadiary.jp/entry/2026/11/19/183634","source":"Hatena","published_at":"2026-11-19 18:59","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"物流代行「オープンロジ」への不正アクセス、出荷データ流出の全容","summary":"物流代行サービス「オープンロジ」が外部からの不正アクセスを受け、2017年10月から2026年11月までの出荷データが流出した問題について、被害の全容が明らかになりました。多数の荷主が自社の顧客への影響を公表しています。\n\n攻撃者は出荷依頼データに含まれるメールアドレスや商品情報、配送情報を持ち出しました。オープンロジは国外からのアクセス制限や認証情報の全リセットを実施し、セキュリティ体制を強化しています。中間事業者を経由した委託先にも影響が及んでおり、広範囲な被害対応が続いています。","importance":8},{"title":"ドラクエ3リメイクをClaude Codeでクリア：ローカルLLM（Qwen3-VL）で画面を読み、YOLOを使わなかった理由","url":"https://zenn.dev/yadevloper/articles/8aa5f9dc37891e","source":"Zenn","published_at":"2026-11-19 13:37","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"ローカルLLMを活用したドラクエ3リメイクの自動プレイ","summary":"Nintendo Switch版「ドラゴンクエストIII」を、ローカルLLM（Qwen3-VL）を用いて自動クリアする試みが報告されました。画面読み取りにはVLMを活用し、文字認識の精度を向上させるために会話枠の切り出しと拡大処理が行われています。\n\nYOLOによる物体検出も検討されましたが、歩行判断には不向きと判断され、VLMによるテキスト解析が中心となりました。ネットワークを隔離した環境でモデルを動かすなど、セキュリティにも配慮した実装が特徴です。AIがゲームを遊ぶための「画面をどう読むか」という課題に対し、実用的なアプローチが示されています。","importance":7},{"title":"【速報】タイミー、事業者情報最大22.6万人漏えい","url":"https://www.47news.jp/15256728.html","source":"Hatena","published_at":"2026-11-19 20:08","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"タイミーの委託先が不正アクセス被害、事業者情報22.6万人分が流出","summary":"単発アルバイト紹介サービス「タイミー」は、同社の委託先が不正アクセスを受けたことにより、求人事業者の情報最大約22万6千人分が流出したと発表しました。\n\nタイミー本体ではなく委託先が攻撃を受けた形ですが、プラットフォーム事業におけるサプライチェーンのセキュリティ管理の重要性が改めて浮き彫りとなりました。詳細な被害状況や流出項目の精査が進められています。","importance":7},{"title":"そろそろ本気で誤差逆伝播法を理解しようじゃないか","url":"https://zenn.dev/kitacom_blog/articles/backpropagation","source":"Zenn","published_at":"2026-11-19 11:19","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"誤差逆伝播法を理解するための多層パーセプトロン計算","summary":"ディープラーニングの核心である誤差逆伝播法（バックプロパゲーション）について、数式を追うことでその仕組みを深く理解する解説記事です。3層の多層パーセプトロンモデルを例に、出力層から順に勾配を計算する過程を詳細に追跡しています。\n\n連鎖律（チェインルール）を用いて、損失関数が各パラメーターに与える影響を数式で導出することで、なぜ効率的にパラメーター更新ができるのかを明らかにしています。ベクトルや行列の微分における流儀を定義し、計算の過程を可視化することで、理論の裏付けを直感的に理解できる内容です。","importance":7},{"title":"ログの種別を整理して、何をどこまで残すか決めた話","url":"https://zenn.dev/dress_code/articles/a3bf34274af03f","source":"Zenn","published_at":"2026-11-19 09:00","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"ログ種別の再定義とTier分けによる監査・運用ログの最適化","summary":"人事・労務プラットフォーム開発において、NISTやCISのガイドラインを参考にログを11種に洗い出し、業務記録・運用記録・不要なものに分類し直した事例です。ログの種別を「誰が何にどう関わったか」で定義し、監査要件を満たしつつ不要な肥大化を防いでいます。\n\n保持期間や重要度に応じたTier（0〜3）分けを行い、認証ログは全件保存、アクセスログは機微度に応じて管理するなど、実用的な運用ルールを確立しました。監査対応とシステム運用のバランスを最適化する手法として参考になります。","importance":7},{"title":"DiscordからClaude Codeに作業を任せる方法！報告も質問もスマホで受け取る","url":"https://zenn.dev/spa77k/articles/discord-claude-code-ask-relay","source":"Zenn","published_at":"2026-11-19 11:09","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"DiscordとClaude Codeを連携しスマホから作業を自動化する仕組み","summary":"DiscordをインターフェースとしてClaude Codeを操作し、外出先からでも作業依頼や進捗確認を可能にする「ask-relay」の構築手法です。Orcaを介してClaude Codeセッションを管理し、フック機能でDiscordへ自動報告を行う仕組みを実装しています。\n\n会話履歴の整理やターンごとの直列実行、指示書の自動書き出しなど、エージェント運用における実用的な工夫が盛り込まれています。CLIツールを組み合わせることで、スマホからでも高度なコーディング作業を完結できる環境を構築しています。","importance":7},{"title":"AWS launches credit splitting and transfers - AWS","url":"https://aws.amazon.com/about-aws/whats-new/2026/11/aws-credit-splitting-transfers/","source":"Hatena","published_at":"2026-11-19 16:17","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"AWSがクレジットの分割・転送機能をリリース、FinOpsの効率化へ","summary":"AWSは、保有するAWSクレジットを分割し、他のリンクされたアカウントへ転送できる新機能をリリースしました。これにより、FinOpsチームはクレジットを特定のチームやビジネスユニットごとに正確に割り当てることが可能となり、月次のチャージバック作業を大幅に削減できます。\n\n分割されたクレジットは元の有効期限やサービス適格性を継承し、未使用分は他のアカウントへ共有される設定も維持されます。コンソールやCLI、APIから利用可能で、プロジェクトごとの予算管理がより柔軟かつ予測可能になります。大規模なAWS利用環境におけるコスト管理の最適化に大きく寄与するアップデートです。","importance":6},{"title":"MuJoCo で4脚ロボットを自作し PPO で歩かせる：転ぶ→回る→前へ歩くまでの7版（Mac の CPU だけ）","url":"https://zenn.dev/macsimlab/articles/5105d0ff38540e","source":"Zenn","published_at":"2026-11-19 08:11","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"MuJoCoとPPOで4脚ロボットを歩かせる学習の試行錯誤","summary":"MuJoCoで自作した4脚ロボットをStable-Baselines3のPPOで歩行学習させた記録です。転倒や回転などの課題に対し、体の形状変更、報酬設計の最適化（胴体の向きへの追従）、罰則の調整などを経て、安定した歩行を実現しました。\n\n特に「胴体の向きに対する相対的な速さ」を報酬に設定したことが、まっすぐ歩く学習に大きく寄与したと分析しています。強化学習における環境設計と報酬関数の重要性を実証した興味深い事例です。","importance":7},{"title":"週刊Cloudflare - 2026/11/15週","url":"https://zenn.dev/gemcook/articles/weekly-cloudflare_2026_1108-1114","source":"Zenn","published_at":"2026-11-19 14:00","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"Cloudflareのアップデート：D1の機能強化とWranglerの改善","summary":"Cloudflareの最新アップデートでは、開発者向けツール「Wrangler」やデータベース「D1」を中心に複数の機能改善が行われました。主な変更点として、D1データベースの自動プロビジョニングにおける管轄区域（jurisdiction）指定への対応や、リモートD1データベースのエクスポート機能の強化が含まれています。\n\nまた、Wranglerの認証プロファイル共有の改善や、セキュリティ修正版への依存関係更新も実施されました。特にNode.js 22.12.0以降が要件となった点は、開発環境の維持において注意が必要です。これらのアップデートにより、Workersプラットフォーム上での開発効率とセキュリティがさらに向上しています。","importance":6},{"title":"Claude Codeの-pモードをPythonとlaunchdで定期実行","url":"https://zenn.dev/ikuokuotiak/articles/claude-code-headless-python-launchd","source":"Zenn","published_at":"2026-11-19 07:00","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"Claude Codeの非対話実行をPythonとlaunchdで自動化する","summary":"Claude Codeの非対話モード（-p）を活用し、PythonスクリプトとmacOSのlaunchdを組み合わせて定期実行エージェントを構築する方法です。標準出力のJSON化やタイムアウト処理、環境変数の明示など、安定稼働のための実装ノウハウがまとめられています。\n\n手動実行での検証からlaunchdへの移行手順までが網羅されており、定型的な業務をAIエージェントに任せるための実用的なパイプライン構築ガイドとなっています。","importance":7}]};
// __EMBEDDED_NEWS_END__
"use strict";
(() => {
  // frontend/src/index.ts
  var GITHUB_RAW_JSON_URL = "https://raw.githubusercontent.com/takaken0518/IT_trend_checker/main/articles.json";
  var GITHUB_TOKEN = "";
  var CACHE_FILENAME = "it_trend_articles_cache.json";
  var ROTATION_STATE_FILENAME = "it_trend_rotation_state.json";
  var ROTATION_INTERVAL_MINUTES = 10;
  var GENRE_META = {
    ai: { shortLabel: "AI\u30FBLLM", fullLabel: "AI\u30FBLLM\u30FB\u6A5F\u68B0\u5B66\u7FD2", color: "#8b5cf6" },
    web: { shortLabel: "Web\u30FB\u8A00\u8A9E", fullLabel: "Web\u958B\u767A\u30FB\u8A00\u8A9E", color: "#3b82f6" },
    infra: { shortLabel: "\u30A4\u30F3\u30D5\u30E9", fullLabel: "\u30A4\u30F3\u30D5\u30E9\u30FB\u30AF\u30E9\u30A6\u30C9", color: "#10b981" },
    mobile: { shortLabel: "\u30E2\u30D0\u30A4\u30EB", fullLabel: "\u30E2\u30D0\u30A4\u30EB\u30FB\u500B\u4EBA\u958B\u767A", color: "#f97316" },
    biz: { shortLabel: "\u30D3\u30B8\u30CD\u30B9", fullLabel: "IT\u30D3\u30B8\u30CD\u30B9\u30FB\u7D44\u7E54", color: "#eab308" },
    other: { shortLabel: "\u7DCF\u5408IT", fullLabel: "\u7DCF\u5408\u30FB\u305D\u306E\u4ED6IT", color: "#64748b" }
  };
  var GENRE_ALIASES = {
    ai: "ai",
    llm: "ai",
    ml: "ai",
    "\u6A5F\u68B0\u5B66\u7FD2": "ai",
    "\u751F\u6210ai": "ai",
    web: "web",
    frontend: "web",
    backend: "web",
    lang: "web",
    "\u8A00\u8A9E": "web",
    "web\u958B\u767A": "web",
    infra: "infra",
    cloud: "infra",
    devops: "infra",
    security: "infra",
    sec: "infra",
    "\u30A4\u30F3\u30D5\u30E9": "infra",
    "\u30AF\u30E9\u30A6\u30C9": "infra",
    "\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3": "infra",
    mobile: "mobile",
    gadget: "mobile",
    ios: "mobile",
    android: "mobile",
    indie: "mobile",
    "\u30E2\u30D0\u30A4\u30EB": "mobile",
    "\u30AC\u30B8\u30A7\u30C3\u30C8": "mobile",
    "\u500B\u4EBA\u958B\u767A": "mobile",
    biz: "biz",
    business: "biz",
    career: "biz",
    mgmt: "biz",
    "\u30D3\u30B8\u30CD\u30B9": "biz",
    "it\u30D3\u30B8\u30CD\u30B9": "biz",
    "\u30AD\u30E3\u30EA\u30A2": "biz",
    "\u30DE\u30CD\u30B8\u30E1\u30F3\u30C8": "biz",
    other: "other",
    "\u305D\u306E\u4ED6": "other",
    "\u7DCF\u5408": "other"
  };
  function getCachePath(filename) {
    const fm = FileManager.local();
    return fm.joinPath(fm.cacheDirectory(), filename);
  }
  function getEffectiveToken() {
    if (GITHUB_TOKEN) return GITHUB_TOKEN;
    const shared = globalThis.__IT_TREND_GITHUB_TOKEN__;
    return typeof shared === "string" ? shared : "";
  }
  function createOfflineFallbackResult() {
    return {
      isOffline: true,
      data: {
        updated_at: "\u672A\u53D6\u5F97 (\u30AA\u30D5\u30E9\u30A4\u30F3)",
        articles: [
          {
            title: "\u8A18\u4E8B\u306E\u53D6\u5F97\u306B\u5931\u6557\u3057\u307E\u3057\u305F",
            url: "https://github.com",
            source: "System",
            genre: "other",
            headline: "URL\u8A2D\u5B9A\u307E\u305F\u306F\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u63A5\u7D9A\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
            summary: "GitHub\u306ERaw URL\u307E\u305F\u306FPrivate\u30EA\u30DD\u30B8\u30C8\u30EA\u7528\u306E\u30C8\u30FC\u30AF\u30F3\u304C\u6B63\u3057\u304F\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u308B\u304B\u78BA\u8A8D\u3057\u3001\u518D\u5EA6\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8\u3092\u66F4\u65B0\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
            importance: 5
          }
        ]
      }
    };
  }
  function readCachedNewsData(fm, cachePath) {
    if (!fm.fileExists(cachePath)) {
      return null;
    }
    try {
      const cachedStr = fm.readString(cachePath);
      const cachedJson = JSON.parse(cachedStr);
      if (cachedJson && Array.isArray(cachedJson.articles) && cachedJson.articles.length > 0) {
        return cachedJson;
      }
    } catch (cacheErr) {
      console.error(`[Cache Error] Failed to read cached data: ${cacheErr}`);
    }
    return null;
  }
  function getEmbeddedNewsData() {
    const embedded = globalThis.__IT_TREND_EMBEDDED_DATA__;
    if (embedded && Array.isArray(embedded.articles) && embedded.articles.length > 0) {
      return embedded;
    }
    return null;
  }
  function loadArticlesSync() {
    const fm = FileManager.local();
    const cachePath = getCachePath(CACHE_FILENAME);
    const embedded = getEmbeddedNewsData();
    const cached = readCachedNewsData(fm, cachePath);
    if (embedded) {
      if (cached && cached.updated_at && embedded.updated_at && cached.updated_at > embedded.updated_at) {
        return { data: cached, isOffline: false };
      }
      try {
        fm.writeString(cachePath, JSON.stringify(embedded));
      } catch {
      }
      return { data: embedded, isOffline: false };
    }
    if (cached) {
      return { data: cached, isOffline: true };
    }
    return createOfflineFallbackResult();
  }
  async function loadArticles() {
    const fm = FileManager.local();
    const cachePath = getCachePath(CACHE_FILENAME);
    const cacheBuster = `?t=${Date.now()}`;
    const requestUrl = GITHUB_RAW_JSON_URL.includes("?") ? `${GITHUB_RAW_JSON_URL}&t=${Date.now()}` : `${GITHUB_RAW_JSON_URL}${cacheBuster}`;
    try {
      const req = new Request(requestUrl);
      req.timeoutInterval = 10;
      const token = getEffectiveToken();
      if (token) {
        req.headers = {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github.v3.raw"
        };
      }
      const json = await req.loadJSON();
      if (json && Array.isArray(json.articles) && json.articles.length > 0) {
        fm.writeString(cachePath, JSON.stringify(json));
        return { data: json, isOffline: false };
      }
      throw new Error("Invalid response format");
    } catch (err) {
      console.warn(`[Network Error] Failed to fetch articles, fallback to cache: ${err}`);
      const cached = readCachedNewsData(fm, cachePath);
      if (cached) {
        return { data: cached, isOffline: true };
      }
      const embedded = getEmbeddedNewsData();
      if (embedded) {
        return { data: embedded, isOffline: true };
      }
      return createOfflineFallbackResult();
    }
  }
  function parseWidgetParameter(rawParam) {
    if (typeof rawParam !== "string" || !rawParam.trim()) {
      return [];
    }
    const tokens = rawParam.split(/[,、\s]+/).map((t) => t.trim().toLowerCase()).filter(Boolean);
    const selected = /* @__PURE__ */ new Set();
    for (const token of tokens) {
      if (token === "all" || token === "\u3059\u3079\u3066" || token === "\u5168\u30B8\u30E3\u30F3\u30EB") {
        return [];
      }
      const mapped = GENRE_ALIASES[token];
      if (mapped) {
        selected.add(mapped);
      }
    }
    return Array.from(selected);
  }
  function normalizeArticle(art, isDiscovery) {
    const rawGenre = (art.genre || "other").toLowerCase();
    const genreCode = rawGenre in GENRE_META ? rawGenre : "other";
    const meta = GENRE_META[genreCode];
    const headlineText = art.headline && art.headline.trim().length > 0 ? art.headline.trim() : art.summary.slice(0, 40);
    return {
      ...art,
      genreCode,
      genreDisplay: meta.shortLabel,
      headlineText,
      isDiscovery
    };
  }
  function buildRotationList(rawArticles, selectedGenres) {
    if (rawArticles.length === 0) {
      return [];
    }
    if (selectedGenres.length === 0) {
      return rawArticles.map((art) => normalizeArticle(art, false));
    }
    const selectedSet = new Set(selectedGenres);
    const preferred = [];
    const others = [];
    for (const art of rawArticles) {
      const rawCode = (art.genre || "other").toLowerCase();
      const code = rawCode in GENRE_META ? rawCode : "other";
      if (selectedSet.has(code)) {
        preferred.push(normalizeArticle(art, false));
      } else {
        others.push(normalizeArticle(art, true));
      }
    }
    others.sort((a, b) => (b.importance ?? 5) - (a.importance ?? 5));
    if (preferred.length === 0) {
      return others;
    }
    if (others.length === 0) {
      return preferred;
    }
    const blended = [];
    let pIdx = 0;
    let oIdx = 0;
    while (pIdx < preferred.length) {
      for (let i = 0; i < 3 && pIdx < preferred.length; i++) {
        blended.push(preferred[pIdx++]);
      }
      if (oIdx < others.length) {
        blended.push(others[oIdx++]);
      } else if (others.length > 0 && pIdx < preferred.length) {
        oIdx = 0;
        blended.push(others[oIdx++]);
      }
    }
    return blended;
  }
  function getNormalizedShortcutParam() {
    if (typeof args === "undefined" || args.shortcutParameter == null) {
      return "";
    }
    return String(args.shortcutParameter).trim().toLowerCase();
  }
  function isWallpaperRequest() {
    const actionParam = typeof args !== "undefined" && args.queryParameters ? args.queryParameters.action : void 0;
    const shortcutParam = getNormalizedShortcutParam();
    const isBackgroundShortcut = typeof config !== "undefined" && !config.runsInApp && !config.runsInWidget && !config.runsInAccessoryWidget;
    return Boolean(config.runsWithSiri) || isBackgroundShortcut || shortcutParam === "wallpaper" || actionParam === "wallpaper";
  }
  function getNextArticlePair(list, filterKey) {
    const fm = FileManager.local();
    const statePath = getCachePath(ROTATION_STATE_FILENAME);
    let state = { currentIndex: -1, filterKey };
    if (fm.fileExists(statePath)) {
      try {
        const parsed = JSON.parse(fm.readString(statePath));
        if (parsed && typeof parsed.currentIndex === "number" && parsed.filterKey === filterKey) {
          state = parsed;
        }
      } catch {
      }
    }
    const now = Date.now();
    const minIntervalMs = ROTATION_INTERVAL_MINUTES * 60 * 1e3;
    const actionParam = typeof args !== "undefined" && args.queryParameters ? args.queryParameters.action : void 0;
    const shortcutParam = getNormalizedShortcutParam();
    const effectiveAction = actionParam || (shortcutParam === "prev" || shortcutParam === "next" ? shortcutParam : void 0);
    let nextIndex = 0;
    let didRotate = true;
    if (effectiveAction === "prev") {
      const baseIdx = state.currentIndex >= 0 ? state.currentIndex : 0;
      nextIndex = (baseIdx - 1 + list.length) % list.length;
    } else if (effectiveAction === "next" || isWallpaperRequest()) {
      const baseIdx = state.currentIndex >= 0 ? state.currentIndex : 0;
      nextIndex = (baseIdx + 1) % list.length;
    } else {
      const shouldHold = state.currentIndex >= 0 && typeof state.lastRotatedAt === "number" && now - state.lastRotatedAt < minIntervalMs;
      if (shouldHold) {
        nextIndex = state.currentIndex % list.length;
        didRotate = false;
      } else {
        nextIndex = (state.currentIndex + 1) % list.length;
      }
    }
    const upcomingIndex = (nextIndex + 1) % list.length;
    try {
      fm.writeString(
        statePath,
        JSON.stringify({
          currentIndex: nextIndex,
          filterKey,
          lastRotatedAt: didRotate ? now : state.lastRotatedAt
        })
      );
    } catch (err) {
      console.warn(`[State Warning] Could not save rotation state: ${err}`);
    }
    return {
      current: list[nextIndex],
      next: list[upcomingIndex],
      currentIndex: nextIndex,
      total: list.length
    };
  }
  function addProgressDots(widget, currentIndex, total) {
    const dotRow = widget.addStack();
    dotRow.layoutHorizontally();
    dotRow.centerAlignContent();
    dotRow.spacing = 4;
    const maxDots = Math.min(total, 15);
    const activeDot = total <= 15 ? currentIndex : Math.floor(currentIndex / total * maxDots);
    for (let i = 0; i < maxDots; i++) {
      const dot = dotRow.addStack();
      const isActive = i === activeDot;
      dot.size = new Size(isActive ? 14 : 5, 4);
      dot.cornerRadius = 2;
      dot.backgroundColor = isActive ? new Color("#38bdf8") : new Color("#475569", 0.65);
    }
    dotRow.addSpacer();
  }
  function formatJapanesePublishedAt(raw) {
    if (!raw) return "";
    const match = raw.trim().match(/^(\d{4})-(\d{2})-(\d{2})\s+(\d{2}):(\d{2})/);
    if (!match) return raw;
    const year = parseInt(match[1], 10);
    const month = parseInt(match[2], 10);
    const day = parseInt(match[3], 10);
    const hour = match[4];
    const min = match[5];
    const pubUtcMs = Date.UTC(year, month - 1, day, parseInt(hour, 10), parseInt(min, 10)) - 9 * 3600 * 1e3;
    const diffMs = Math.max(0, Date.now() - pubUtcMs);
    const diffMin = Math.floor(diffMs / 6e4);
    let relLabel = "";
    if (diffMin < 1) {
      relLabel = "\u305F\u3063\u305F\u4ECA";
    } else if (diffMin < 60) {
      relLabel = `${diffMin}\u5206\u524D`;
    } else {
      const diffHours = Math.floor(diffMin / 60);
      if (diffHours < 24) {
        relLabel = `${diffHours}\u6642\u9593\u524D`;
      } else {
        const diffDays = Math.floor(diffHours / 24);
        relLabel = diffDays === 1 ? "\u6628\u65E5" : `${diffDays}\u65E5\u524D`;
      }
    }
    return `${month}\u6708${day}\u65E5 ${hour}:${min}\uFF08${relLabel}\uFF09`;
  }
  function formatUpdatedTime(raw) {
    const match = raw.trim().match(/^(\d{4})-(\d{2})-(\d{2})\s+(\d{2}):(\d{2})/);
    if (!match) {
      return raw.replace(" JST", "");
    }
    return `${parseInt(match[2], 10)}\u6708${parseInt(match[3], 10)}\u65E5 ${match[4]}:${match[5]}\u66F4\u65B0`;
  }
  function ensureParagraphs(text) {
    const trimmed = text.trim();
    if (!trimmed) return "";
    if (trimmed.includes("\n\n")) return trimmed;
    const sentences = trimmed.split(/(?<=[。！？])(?![」』）\)])\s*/).map((s) => s.trim()).filter(Boolean);
    if (sentences.length <= 2) return trimmed;
    const paras = [];
    let buf = [];
    let bufLen = 0;
    for (const s of sentences) {
      buf.push(s);
      bufLen += s.length;
      if (buf.length >= 2 || bufLen >= 130) {
        paras.push(buf.join(""));
        buf = [];
        bufLen = 0;
      }
    }
    if (buf.length > 0) {
      paras.push(buf.join(""));
    }
    return paras.join("\n\n");
  }
  function buildActionUrl(action) {
    try {
      const base = URLScheme.forRunningScript();
      const sep = base.includes("?") ? "&" : "?";
      return `${base}${sep}action=${action}`;
    } catch {
      return "";
    }
  }
  function getFilterLabel(selectedGenres) {
    return selectedGenres.length > 0 ? `${selectedGenres.map((g) => g.toUpperCase()).join("\u30FB")}+\u{1F310}` : "ALL";
  }
  function buildArticleContext(data, isOffline) {
    const widgetParam = typeof args !== "undefined" ? args.widgetParameter : "";
    const rawShortcut = getNormalizedShortcutParam();
    const shortcutGenreParam = rawShortcut && rawShortcut !== "wallpaper" && rawShortcut !== "prev" && rawShortcut !== "next" ? rawShortcut : "";
    const selectedGenres = parseWidgetParameter(widgetParam || shortcutGenreParam);
    const filterKey = selectedGenres.length > 0 ? selectedGenres.join(",") : "all";
    const rotationList = buildRotationList(data.articles, selectedGenres);
    const { current, next, currentIndex, total } = getNextArticlePair(rotationList, filterKey);
    const updatedAt = formatUpdatedTime(data.updated_at);
    return {
      rotationList,
      current,
      next,
      currentIndex,
      total,
      updatedAt,
      isOffline,
      selectedGenres
    };
  }
  async function prepareArticleContext() {
    const { data, isOffline } = await loadArticles();
    return buildArticleContext(data, isOffline);
  }
  function prepareArticleContextSync() {
    const { data, isOffline } = loadArticlesSync();
    return buildArticleContext(data, isOffline);
  }
  function createLockScreenRectangularWidget(current, currentIndex, total) {
    const widget = new ListWidget();
    widget.setPadding(2, 4, 2, 4);
    widget.refreshAfterDate = new Date(Date.now() + ROTATION_INTERVAL_MINUTES * 60 * 1e3);
    try {
      widget.url = URLScheme.forRunningScript();
    } catch {
      widget.url = current.url;
    }
    const headerText = widget.addText(
      `\u26A1 [${current.genreDisplay}] ${currentIndex + 1}/${total}\u4EF6`
    );
    headerText.font = Font.boldSystemFont(10);
    headerText.lineLimit = 1;
    headerText.minimumScaleFactor = 0.85;
    widget.addSpacer(1);
    const titleText = widget.addText(current.title);
    titleText.font = Font.boldSystemFont(11);
    titleText.lineLimit = 2;
    titleText.minimumScaleFactor = 0.85;
    widget.addSpacer(1);
    const sub = current.headlineText || current.summary;
    const subText = widget.addText(`\u{1F4A1} ${sub}`);
    subText.font = Font.systemFont(10);
    subText.lineLimit = 1;
    subText.minimumScaleFactor = 0.85;
    return widget;
  }
  function createLockScreenInlineWidget(current) {
    const widget = new ListWidget();
    widget.refreshAfterDate = new Date(Date.now() + ROTATION_INTERVAL_MINUTES * 60 * 1e3);
    try {
      widget.url = URLScheme.forRunningScript();
    } catch {
      widget.url = current.url;
    }
    const label = `\u26A1 [${current.genreDisplay}] ${current.headlineText || current.title}`;
    widget.addText(label);
    return widget;
  }
  function createLockScreenCircularWidget(currentIndex, total) {
    const widget = new ListWidget();
    widget.refreshAfterDate = new Date(Date.now() + ROTATION_INTERVAL_MINUTES * 60 * 1e3);
    try {
      widget.url = URLScheme.forRunningScript();
    } catch {
    }
    const title = widget.addText("\u26A1 IT");
    title.font = Font.boldSystemFont(11);
    title.centerAlignText();
    const count = widget.addText(`${currentIndex + 1}/${total}`);
    count.font = Font.mediumSystemFont(10);
    count.centerAlignText();
    return widget;
  }
  function createWidget(ctx) {
    const { current, next, currentIndex, total, updatedAt: cleanTime, isOffline, selectedGenres } = ctx;
    const family = config.widgetFamily;
    if (family === "accessoryRectangular") {
      return createLockScreenRectangularWidget(current, currentIndex, total);
    }
    if (family === "accessoryInline") {
      return createLockScreenInlineWidget(current);
    }
    if (family === "accessoryCircular") {
      return createLockScreenCircularWidget(currentIndex, total);
    }
    const widget = new ListWidget();
    widget.setPadding(12, 14, 12, 14);
    widget.refreshAfterDate = new Date(Date.now() + ROTATION_INTERVAL_MINUTES * 60 * 1e3);
    const gradient = new LinearGradient();
    gradient.colors = [new Color("#0f172a"), new Color("#1e1b4b")];
    gradient.locations = [0, 1];
    widget.backgroundGradient = gradient;
    const headerStack = widget.addStack();
    headerStack.layoutHorizontally();
    headerStack.centerAlignContent();
    headerStack.spacing = 6;
    const logoText = headerStack.addText("\u26A1 IT Trend");
    logoText.font = Font.boldSystemFont(13);
    logoText.textColor = new Color("#60a5fa");
    const filterBadge = headerStack.addStack();
    filterBadge.cornerRadius = 4;
    filterBadge.setPadding(2, 6, 2, 6);
    filterBadge.backgroundColor = new Color("#334155", 0.85);
    const filterLabelStr = getFilterLabel(selectedGenres);
    const filterText = filterBadge.addText(filterLabelStr);
    filterText.font = Font.boldSystemFont(9);
    filterText.textColor = new Color("#cbd5e1");
    headerStack.addSpacer();
    const statusStr = isOffline ? `${currentIndex + 1} / ${total}\u4EF6 \u2022 \u30AD\u30E3\u30C3\u30B7\u30E5` : `${currentIndex + 1} / ${total}\u4EF6 \u2022 ${cleanTime}`;
    const statusText = headerStack.addText(statusStr);
    statusText.font = Font.mediumSystemFont(10);
    statusText.textColor = new Color("#94a3b8");
    widget.addSpacer(5);
    addProgressDots(widget, currentIndex, total);
    widget.addSpacer(8);
    const cardStack = widget.addStack();
    cardStack.layoutVertically();
    cardStack.setPadding(10, 12, 10, 12);
    cardStack.cornerRadius = 12;
    cardStack.backgroundColor = new Color("#1e293b", 0.78);
    cardStack.url = current.url;
    const badgeRow = cardStack.addStack();
    badgeRow.layoutHorizontally();
    badgeRow.centerAlignContent();
    badgeRow.spacing = 4;
    const genreMeta = GENRE_META[current.genreCode];
    const genreBadge = badgeRow.addStack();
    genreBadge.cornerRadius = 4;
    genreBadge.setPadding(2, 6, 2, 6);
    genreBadge.backgroundColor = new Color(genreMeta.color, 0.28);
    const genreText = genreBadge.addText(current.genreDisplay);
    genreText.font = Font.boldSystemFont(9);
    genreText.textColor = new Color(genreMeta.color);
    genreText.lineLimit = 1;
    const sourceBadge = badgeRow.addStack();
    sourceBadge.cornerRadius = 4;
    sourceBadge.setPadding(2, 5, 2, 5);
    const isZenn = current.source.toLowerCase().includes("zenn");
    sourceBadge.backgroundColor = new Color(isZenn ? "#3ea8ff" : "#ef4444", 0.22);
    const sourceText = sourceBadge.addText(current.source.toUpperCase());
    sourceText.font = Font.boldSystemFont(9);
    sourceText.textColor = new Color(isZenn ? "#7dd3fc" : "#fca5a5");
    sourceText.lineLimit = 1;
    if (current.isDiscovery) {
      const discoveryBadge = badgeRow.addStack();
      discoveryBadge.cornerRadius = 4;
      discoveryBadge.setPadding(2, 5, 2, 5);
      discoveryBadge.backgroundColor = new Color("#f59e0b", 0.25);
      const discoveryText = discoveryBadge.addText("\u2728 \u6CE8\u76EE\u67A0");
      discoveryText.font = Font.boldSystemFont(9);
      discoveryText.textColor = new Color("#fcd34d");
      discoveryText.lineLimit = 1;
    }
    badgeRow.addSpacer();
    const formattedPub = formatJapanesePublishedAt(current.published_at);
    if (formattedPub) {
      const pubText = badgeRow.addText(`\u{1F552} ${formattedPub}`);
      pubText.font = Font.mediumSystemFont(9);
      pubText.textColor = new Color("#94a3b8");
      pubText.lineLimit = 1;
      pubText.minimumScaleFactor = 0.75;
      pubText.rightAlignText();
    }
    cardStack.addSpacer(6);
    const titleText = cardStack.addText(current.title);
    titleText.font = Font.boldSystemFont(14);
    titleText.textColor = new Color("#f8fafc");
    titleText.lineLimit = 4;
    titleText.minimumScaleFactor = 0.75;
    if (current.headlineText && current.headlineText !== current.title) {
      cardStack.addSpacer(5);
      const headlineText = cardStack.addText(`\u{1F4A1} ${current.headlineText}`);
      headlineText.font = Font.boldSystemFont(11);
      headlineText.textColor = new Color("#38bdf8");
      headlineText.lineLimit = 2;
      headlineText.minimumScaleFactor = 0.85;
    }
    cardStack.addSpacer(6);
    const summaryText = cardStack.addText(ensureParagraphs(current.summary));
    summaryText.font = Font.systemFont(11);
    summaryText.textColor = new Color("#e2e8f0");
    summaryText.lineLimit = 9;
    summaryText.minimumScaleFactor = 0.8;
    widget.addSpacer();
    const footerStack = widget.addStack();
    footerStack.layoutHorizontally();
    footerStack.centerAlignContent();
    footerStack.setPadding(3, 0, 0, 0);
    footerStack.spacing = 6;
    const prevBtn = footerStack.addStack();
    prevBtn.setPadding(2, 6, 2, 6);
    prevBtn.cornerRadius = 5;
    prevBtn.backgroundColor = new Color("#334155", 0.85);
    const prevUrl = buildActionUrl("prev");
    if (prevUrl) prevBtn.url = prevUrl;
    const prevText = prevBtn.addText("\u2190");
    prevText.font = Font.boldSystemFont(10);
    prevText.textColor = new Color("#e2e8f0");
    const nextInfoStack = footerStack.addStack();
    nextInfoStack.layoutHorizontally();
    nextInfoStack.centerAlignContent();
    nextInfoStack.spacing = 4;
    nextInfoStack.url = next.url;
    const nextLabel = nextInfoStack.addText("NEXT \u25B8");
    nextLabel.font = Font.boldSystemFont(9);
    nextLabel.textColor = new Color("#38bdf8");
    const nextTitle = nextInfoStack.addText(`[${next.genreDisplay}] ${next.title}`);
    nextTitle.font = Font.systemFont(9);
    nextTitle.textColor = new Color("#94a3b8");
    nextTitle.lineLimit = 1;
    nextTitle.minimumScaleFactor = 0.8;
    footerStack.addSpacer();
    const nextBtn = footerStack.addStack();
    nextBtn.setPadding(2, 6, 2, 6);
    nextBtn.cornerRadius = 5;
    nextBtn.backgroundColor = new Color("#334155", 0.85);
    const nextUrl = buildActionUrl("next");
    if (nextUrl) nextBtn.url = nextUrl;
    const nextBtnText = nextBtn.addText("\u2192");
    nextBtnText.font = Font.boldSystemFont(10);
    nextBtnText.textColor = new Color("#e2e8f0");
    return widget;
  }
  function lerpRgbColor(c1, c2, t, alpha = 1) {
    const clampByte = (v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, "0");
    const r = clampByte(c1[0] + (c2[0] - c1[0]) * t);
    const g = clampByte(c1[1] + (c2[1] - c1[1]) * t);
    const b = clampByte(c1[2] + (c2[2] - c1[2]) * t);
    return new Color(`#${r}${g}${b}`, alpha);
  }
  function fillRoundedRect(dc, rect, radius, color) {
    const path = new Path();
    path.addRoundedRect(rect, radius, radius);
    dc.addPath(path);
    dc.setFillColor(color);
    dc.fillPath();
  }
  function strokeRoundedRect(dc, rect, radius, color, lineWidth) {
    const path = new Path();
    path.addRoundedRect(rect, radius, radius);
    dc.addPath(path);
    dc.setStrokeColor(color);
    dc.setLineWidth(lineWidth);
    dc.strokePath();
  }
  function drawWallpaperBackground(dc, width, height) {
    const stops = [
      [9, 13, 24],
      [15, 23, 42],
      [30, 27, 75],
      [9, 13, 24]
    ];
    const bands = 42;
    const bandH = Math.ceil(height / bands) + 2;
    for (let i = 0; i < bands; i++) {
      const progress = i / (bands - 1) * (stops.length - 1);
      const idx = Math.min(stops.length - 2, Math.floor(progress));
      const localT = progress - idx;
      dc.setFillColor(lerpRgbColor(stops[idx], stops[idx + 1], localT));
      dc.fillRect(new Rect(0, Math.floor(i * height / bands), width, bandH));
    }
    dc.setFillColor(new Color("#3b82f6", 0.1));
    dc.fillEllipse(new Rect(680, 560, 580, 580));
    dc.setFillColor(new Color("#8b5cf6", 0.09));
    dc.fillEllipse(new Rect(-140, 1760, 640, 640));
  }
  function estimateDisplayUnits(text) {
    let units = 0;
    for (let i = 0; i < text.length; i++) {
      const code = text.charCodeAt(i);
      units += code >= 32 && code <= 126 ? 0.58 : 1;
    }
    return units;
  }
  function estimateWrappedLineCount(text, unitsPerLine) {
    const lines = text.split(/\n/);
    let total = 0;
    for (const line of lines) {
      if (!line) {
        total += 1;
        continue;
      }
      total += Math.max(1, Math.ceil(estimateDisplayUnits(line) * 1.12 / unitsPerLine));
    }
    return total;
  }
  function truncateByUnits(text, maxUnits) {
    let units = 0;
    let out = "";
    for (const ch of Array.from(text)) {
      const u = estimateDisplayUnits(ch);
      if (units + u > maxUnits - 1) {
        return `${out}\u2026`;
      }
      out += ch;
      units += u;
    }
    return out;
  }
  function drawPillBadge(dc, label, x, y, height, fontSize, bgColor, textColor) {
    const pillW = Math.max(height, Math.ceil(estimateDisplayUnits(label) * fontSize * 0.96 + 30));
    fillRoundedRect(dc, new Rect(x, y, pillW, height), 10, bgColor);
    dc.setFont(Font.boldSystemFont(fontSize));
    dc.setTextColor(textColor);
    dc.setTextAlignedCenter();
    const textY = y + Math.max(2, Math.round((height - fontSize * 1.25) / 2));
    dc.drawTextInRect(label, new Rect(x, textY, pillW, height - (textY - y)));
    return pillW;
  }
  function createWallpaperImage(ctx) {
    const W = 1179;
    const H = 2556;
    const dc = new DrawContext();
    dc.size = new Size(W, H);
    dc.opaque = true;
    dc.respectScreenScale = false;
    drawWallpaperBackground(dc, W, H);
    const cardX = 48;
    const cardY = 790;
    const cardW = W - cardX * 2;
    const cardH = 1410;
    const padX = 48;
    const innerX = cardX + padX;
    const innerW = cardW - padX * 2;
    fillRoundedRect(dc, new Rect(cardX, cardY, cardW, cardH), 38, new Color("#0f172a", 0.88));
    strokeRoundedRect(dc, new Rect(cardX, cardY, cardW, cardH), 38, new Color("#38bdf8", 0.28), 2);
    const { current, next, currentIndex, total, updatedAt, isOffline, selectedGenres } = ctx;
    if (!current) {
      dc.setFont(Font.boldSystemFont(34));
      dc.setTextColor(new Color("#f8fafc"));
      dc.setTextAlignedCenter();
      dc.drawTextInRect("\u8868\u793A\u3067\u304D\u308B\u8A18\u4E8B\u304C\u3042\u308A\u307E\u305B\u3093", new Rect(innerX, cardY + 640, innerW, 80));
      return dc.getImage();
    }
    dc.setFont(Font.boldSystemFont(30));
    dc.setTextColor(new Color("#60a5fa"));
    dc.setTextAlignedLeft();
    dc.drawTextInRect("\u26A1 IT Trend", new Rect(innerX, 834, 210, 42));
    const filterLabel = truncateByUnits(getFilterLabel(selectedGenres), 14);
    const filterPillW = drawPillBadge(
      dc,
      filterLabel,
      innerX + 216,
      834,
      36,
      20,
      new Color("#334155", 0.9),
      new Color("#cbd5e1")
    );
    const statusStr = isOffline ? `${currentIndex + 1} / ${total}\u4EF6 \u2022 \u30AD\u30E3\u30C3\u30B7\u30E5` : `${currentIndex + 1} / ${total}\u4EF6 \u2022 ${updatedAt}`;
    const statusStartX = Math.max(216 + filterPillW + 14, 520);
    dc.setFont(Font.mediumSystemFont(23));
    dc.setTextColor(new Color("#94a3b8"));
    dc.setTextAlignedRight();
    dc.drawTextInRect(statusStr, new Rect(innerX + statusStartX, 839, innerW - statusStartX, 34));
    const maxDots = Math.min(Math.max(total, 1), 15);
    const activeDot = total <= 15 ? currentIndex : Math.floor(currentIndex / total * maxDots);
    let dotX = innerX;
    for (let i = 0; i < maxDots; i++) {
      const isActive = i === activeDot;
      const dotW = isActive ? 42 : 16;
      fillRoundedRect(
        dc,
        new Rect(dotX, 892, dotW, 10),
        5,
        isActive ? new Color("#38bdf8") : new Color("#475569", 0.65)
      );
      dotX += dotW + 10;
    }
    let badgeX = innerX;
    const badgeY = 924;
    const genreMeta = GENRE_META[current.genreCode];
    badgeX += drawPillBadge(
      dc,
      current.genreDisplay,
      badgeX,
      badgeY,
      40,
      22,
      new Color(genreMeta.color, 0.26),
      new Color(genreMeta.color)
    ) + 12;
    const isZenn = current.source.toLowerCase().includes("zenn");
    badgeX += drawPillBadge(
      dc,
      current.source.toUpperCase(),
      badgeX,
      badgeY,
      40,
      22,
      new Color(isZenn ? "#3ea8ff" : "#ef4444", 0.22),
      new Color(isZenn ? "#7dd3fc" : "#fca5a5")
    ) + 12;
    if (current.isDiscovery) {
      badgeX += drawPillBadge(
        dc,
        "\u2728 \u6CE8\u76EE\u67A0",
        badgeX,
        badgeY,
        40,
        22,
        new Color("#f59e0b", 0.25),
        new Color("#fcd34d")
      ) + 12;
    }
    const formattedPub = formatJapanesePublishedAt(current.published_at);
    if (formattedPub && badgeX < innerX + innerW - 140) {
      dc.setFont(Font.mediumSystemFont(22));
      dc.setTextColor(new Color("#94a3b8"));
      dc.setTextAlignedRight();
      dc.drawTextInRect(`\u{1F552} ${formattedPub}`, new Rect(badgeX, 930, innerX + innerW - badgeX, 34));
    }
    let curY = 992;
    const titleLines = Math.min(4, estimateWrappedLineCount(current.title, 22.5));
    const titleH = titleLines * 54 + 6;
    dc.setFont(Font.boldSystemFont(40));
    dc.setTextColor(new Color("#f8fafc"));
    dc.setTextAlignedLeft();
    dc.drawTextInRect(current.title, new Rect(innerX, curY, innerW, titleH));
    curY += titleH + 14;
    if (current.headlineText && current.headlineText !== current.title) {
      const hlStr = `\u{1F4A1} ${current.headlineText}`;
      const hlLines = Math.min(2, estimateWrappedLineCount(hlStr, 31.5));
      const hlBoxH = hlLines * 38 + 20;
      fillRoundedRect(dc, new Rect(innerX, curY, innerW, hlBoxH), 14, new Color("#0ea5e9", 0.13));
      fillRoundedRect(dc, new Rect(innerX, curY + 6, 6, hlBoxH - 12), 3, new Color("#38bdf8"));
      dc.setFont(Font.boldSystemFont(28));
      dc.setTextColor(new Color("#38bdf8"));
      dc.setTextAlignedLeft();
      dc.drawTextInRect(hlStr, new Rect(innerX + 22, curY + 10, innerW - 36, hlBoxH - 14));
      curY += hlBoxH + 18;
    }
    dc.setFillColor(new Color("#334155", 0.8));
    dc.fillRect(new Rect(innerX, curY, innerW, 2));
    curY += 22;
    const footerTopY = 2116;
    const bodyMaxY = footerTopY - 14;
    const availableBodyH = Math.max(120, bodyMaxY - curY);
    const paragraphs = ensureParagraphs(current.summary).split(/\n{2,}/).filter((p) => p.trim().length > 0);
    const fontPresets = [
      { size: 31, lineH: 45, uPerLine: 30.2, gap: 20 },
      { size: 28, lineH: 40, uPerLine: 33.5, gap: 17 },
      { size: 25, lineH: 36, uPerLine: 37.5, gap: 14 }
    ];
    let chosen = fontPresets[fontPresets.length - 1];
    for (const preset of fontPresets) {
      let neededH = 0;
      for (let i = 0; i < paragraphs.length; i++) {
        neededH += estimateWrappedLineCount(paragraphs[i], preset.uPerLine) * preset.lineH;
        if (i < paragraphs.length - 1) neededH += preset.gap;
      }
      if (neededH <= availableBodyH) {
        chosen = preset;
        break;
      }
    }
    dc.setFont(Font.systemFont(chosen.size));
    dc.setTextColor(new Color("#e2e8f0"));
    dc.setTextAlignedLeft();
    for (const para of paragraphs) {
      const remainingH = bodyMaxY - curY;
      if (remainingH < chosen.lineH) break;
      const estH = estimateWrappedLineCount(para, chosen.uPerLine) * chosen.lineH + 6;
      const drawH = Math.min(estH, remainingH);
      dc.drawTextInRect(para, new Rect(innerX, curY, innerW, drawH));
      curY += drawH + chosen.gap;
    }
    dc.setFillColor(new Color("#334155", 0.8));
    dc.fillRect(new Rect(innerX, footerTopY, innerW, 2));
    dc.setFont(Font.boldSystemFont(24));
    dc.setTextColor(new Color("#38bdf8"));
    dc.setTextAlignedLeft();
    dc.drawTextInRect("NEXT \u25B8", new Rect(innerX, footerTopY + 22, 118, 36));
    const nextSummary = truncateByUnits(`[${next.genreDisplay}] ${next.title}`, 34);
    dc.setFont(Font.systemFont(24));
    dc.setTextColor(new Color("#94a3b8"));
    dc.setTextAlignedLeft();
    dc.drawTextInRect(nextSummary, new Rect(innerX + 120, footerTopY + 22, innerW - 120, 36));
    dc.setFont(Font.mediumSystemFont(22));
    dc.setTextColor(new Color("#94a3b8", 0.78));
    dc.setTextAlignedCenter();
    dc.drawTextInRect(
      "\u{1F4A1} \u80CC\u9762\u30BF\u30C3\u30D7\u3084\u30B7\u30E7\u30FC\u30C8\u30AB\u30C3\u30C8\u5B9F\u884C\u3067\u6B21\u306E\u8A18\u4E8B\u30AB\u30FC\u30C9\u3078\u66F4\u65B0",
      new Rect(cardX, cardY + cardH + 18, cardW, 34)
    );
    return dc.getImage();
  }
  async function presentInteractiveReader(list, startIndex, updatedAt, selectedGenres) {
    const payloadJson = JSON.stringify(
      list.map((art) => ({
        title: art.title,
        url: art.url,
        source: art.source,
        genreCode: art.genreCode,
        genreDisplay: art.genreDisplay,
        headlineText: art.headlineText,
        summary: ensureParagraphs(art.summary),
        isDiscovery: art.isDiscovery,
        publishedText: formatJapanesePublishedAt(art.published_at)
      }))
    ).replace(/</g, "\\u003c");
    const filterBadgeText = selectedGenres.length > 0 ? `${selectedGenres.map((g) => g.toUpperCase()).join("\u30FB")}+\u{1F310}` : "ALL";
    const html = `<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Hiragino Sans", sans-serif;
    background: linear-gradient(180deg, #0f172a 0%, #1e1b4b 100%);
    color: #f8fafc;
    min-height: 100vh;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .header { display: flex; align-items: center; gap: 8px; font-size: 13px; }
  .logo { font-weight: 700; color: #60a5fa; }
  .badge-filter {
    background: rgba(51,65,85,0.85); color: #cbd5e1;
    padding: 2px 7px; border-radius: 5px; font-size: 10px; font-weight: 700;
  }
  .status { margin-left: auto; color: #94a3b8; font-size: 11px; }
  .card {
    flex: 1; display: flex; flex-direction: column; gap: 10px;
    background: rgba(30,41,59,0.82); border: 1px solid rgba(255,255,255,0.08);
    border-radius: 14px; padding: 14px; min-height: 0;
  }
  .meta-row { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }
  .tag { padding: 2px 7px; border-radius: 5px; font-size: 11px; font-weight: 700; }
  .pub { margin-left: auto; font-size: 11px; color: #94a3b8; }
  .title { font-size: 18px; font-weight: 700; line-height: 1.4; color: #f8fafc; }
  .headline { font-size: 13px; font-weight: 700; line-height: 1.5; color: #38bdf8; }
  .summary-box {
    flex: 1; overflow-y: auto; -webkit-overflow-scrolling: touch;
    font-size: 14px; line-height: 1.7; color: #e2e8f0;
    padding-right: 4px; border-top: 1px solid rgba(255,255,255,0.07); padding-top: 10px;
  }
  .summary-box p { margin-bottom: 10px; }
  .summary-box p:last-child { margin-bottom: 0; }
  .actions { display: flex; gap: 8px; }
  .btn {
    padding: 10px 14px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.12);
    background: rgba(30,41,59,0.9); color: #f8fafc; font-size: 13px; font-weight: 600;
    text-decoration: none; text-align: center;
  }
  .btn-primary { background: #2563eb; border-color: #3b82f6; flex: 1; }
  .footer {
    display: flex; align-items: center; gap: 8px; padding: 6px 4px;
    border-top: 1px solid rgba(255,255,255,0.08);
  }
  .next-label { font-size: 11px; font-weight: 700; color: #38bdf8; flex-shrink: 0; }
  .marquee-wrap { flex: 1; overflow: hidden; white-space: nowrap; position: relative; }
  .marquee-track {
    display: inline-block; padding-left: 100%;
    animation: marquee-rtl 14s linear infinite;
    font-size: 12px; color: #cbd5e1; text-decoration: none;
  }
  .marquee-wrap:hover .marquee-track { animation-play-state: paused; }
  @keyframes marquee-rtl {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-100%); }
  }
</style>
</head>
<body>
  <div class="header">
    <span class="logo">\u26A1 IT Trend Reader</span>
    <span class="badge-filter">${filterBadgeText}</span>
    <span id="status" class="status"></span>
  </div>
  <div class="card">
    <div id="meta" class="meta-row"></div>
    <div id="title" class="title"></div>
    <div id="headline" class="headline"></div>
    <div id="summary" class="summary-box"></div>
  </div>
  <div class="actions">
    <button class="btn" onclick="move(-1)">\u2190 \u524D\u306E\u8A18\u4E8B</button>
    <a id="open-link" class="btn btn-primary" href="#">\u5143\u8A18\u4E8B\u3092\u958B\u304F \u2197</a>
    <button class="btn" onclick="move(1)">\u6B21\u306E\u8A18\u4E8B \u2192</button>
  </div>
  <div class="footer">
    <span class="next-label">NEXT \u25B8</span>
    <div class="marquee-wrap">
      <a id="next-marquee" class="marquee-track" href="#"></a>
    </div>
  </div>
<script>
  const ITEMS = ${payloadJson};
  const COLORS = ${JSON.stringify(GENRE_META)};
  let idx = ${startIndex};
  function render() {
    const cur = ITEMS[idx];
    const nxt = ITEMS[(idx + 1) % ITEMS.length];
    document.getElementById("status").textContent = (idx + 1) + " / " + ITEMS.length + "\u4EF6 \u2022 ${updatedAt}";
    const meta = COLORS[cur.genreCode] || COLORS.other;
    let badges = '<span class="tag" style="background:rgba(139,92,246,0.22);color:' + meta.color + '">' + cur.genreDisplay + '</span>';
    const isZenn = cur.source.toLowerCase().includes("zenn");
    badges += '<span class="tag" style="background:' + (isZenn ? "rgba(62,168,255,0.22);color:#7dd3fc" : "rgba(239,68,68,0.22);color:#fca5a5") + '">' + cur.source.toUpperCase() + '</span>';
    if (cur.isDiscovery) badges += '<span class="tag" style="background:rgba(245,158,11,0.25);color:#fcd34d">\u2728 \u6CE8\u76EE\u67A0</span>';
    if (cur.publishedText) badges += '<span class="pub">\u{1F552} ' + cur.publishedText + '</span>';
    document.getElementById("meta").innerHTML = badges;
    document.getElementById("title").textContent = cur.title;
    const hlEl = document.getElementById("headline");
    if (cur.headlineText && cur.headlineText !== cur.title) {
      hlEl.textContent = "\u{1F4A1} " + cur.headlineText;
      hlEl.style.display = "block";
    } else {
      hlEl.style.display = "none";
    }
    const sumEl = document.getElementById("summary");
    sumEl.innerHTML = "";
    cur.summary.split(/\\n\\n+/).forEach(function(para) {
      const t = para.trim();
      if (!t) return;
      const p = document.createElement("p");
      p.textContent = t;
      sumEl.appendChild(p);
    });
    sumEl.scrollTop = 0;
    document.getElementById("open-link").href = cur.url;
    const mEl = document.getElementById("next-marquee");
    mEl.textContent = "[" + nxt.genreDisplay + "] " + nxt.title;
    mEl.href = nxt.url;
    mEl.style.animation = "none";
    mEl.offsetHeight;
    mEl.style.animation = "";
  }
  function move(d) {
    idx = (idx + d + ITEMS.length) % ITEMS.length;
    render();
  }
  render();
<\/script>
</body>
</html>`;
    const wv = new WebView();
    wv.shouldAllowRequest = (req) => {
      if (req.url && req.url.startsWith("http")) {
        Safari.openInApp(req.url, true);
        return false;
      }
      return true;
    };
    await wv.loadHTML(html);
    await wv.present(false);
  }
  function runSyncOrAsync() {
    if (isWallpaperRequest()) {
      const ctx = prepareArticleContextSync();
      const wallpaperImage = createWallpaperImage(ctx);
      Script.setShortcutOutput(wallpaperImage);
      Script.complete();
      return;
    }
    if (config.runsInWidget || config.runsInAccessoryWidget) {
      const ctx = prepareArticleContextSync();
      const widget = createWidget(ctx);
      Script.setWidget(widget);
      Script.complete();
      return;
    }
    return (async () => {
      const ctx = await prepareArticleContext();
      await presentInteractiveReader(
        ctx.rotationList,
        ctx.currentIndex,
        ctx.updatedAt,
        ctx.selectedGenres
      );
      Script.complete();
    })();
  }
  runSyncOrAsync();
})();
