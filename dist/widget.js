// __EMBEDDED_NEWS_START__
globalThis.__IT_TREND_EMBEDDED_DATA__ = {"updated_at":"2026-11-20 11:54:15 JST","total_count":50,"config":{"selected_genres":["ai","web","infra","mobile","biz"],"other_genre_min_ratio":0.25,"max_age_hours":72.0,"genres":{"ai":"AI・LLM・機械学習","web":"Web開発・言語","infra":"インフラ・クラウド・セキュリティ","mobile":"モバイル・ガジェット・個人開発","biz":"ITビジネス・キャリア・マネジメント","other":"総合・その他IT"}},"articles":[{"title":"湘南美容クリニックのSBC、162万人分の個人情報流出　パスワードは「暗号化せず保存していた」","url":"https://www.itmedia.co.jp/news/article/2611/20/2000003355/","source":"Hatena","published_at":"2026-11-20 08:45","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"SBCメディカルグループで162万人分の個人情報流出、パスワード平文保存が判明","summary":"SBCメディカルグループは、委託先のデータベースが不正アクセスを受け、顧客162万4000人分の個人情報が流出したと発表しました。流出した情報には氏名、住所、電話番号、メールアドレスに加え、暗号化されずに保存されていたパスワードが含まれています。\n\n攻撃は海外からの継続的な不正ログインによるもので、深夜帯に77万回もの攻撃が行われました。同グループは、流出したパスワードを他サービスで使い回している場合は速やかに変更するよう呼びかけています。医療機関という機微な情報を扱う組織において、パスワードの平文保存というセキュリティ上の不備が露呈した事例として、業界に大きな衝撃を与えています。","importance":9},{"title":"phpAfterShell: From Interrupted Session Writes to Remote Code Execution | depthfirst","url":"https://depthfirst.com/research/phpaftershell","source":"Hatena","published_at":"2026-11-20 08:08","genre":"web","genre_label":"Web開発・言語","headline":"PHPのセッション処理に起因するリモートコード実行脆弱性（CVE-2026-126714）が判明","summary":"PHPのセッションファイル処理における脆弱性（CVE-2026-126714）が発見され、深刻度9.2（Critical）と評価されました。これは、マルチパートリクエストの解析中にセッションファイルが更新される際、ファイル操作が中断されることでセッションデータが破損し、攻撃者が制御可能な状態になるというものです。\n\n具体的には、PHPのアップロード進捗コールバックがセッションを読み書きする挙動を悪用し、セッションデータの断片を結合させることで、オブジェクトのデシリアライズを誘発しリモートコード実行に至ります。PHPチームは修正パッチを公開しましたが、この問題はセッションの原子的な更新が保証されないファイル操作の限界を突いた高度な脆弱性です。","importance":9},{"title":"ソフトウェアダークファクトリー | 技術評論社","url":"https://gihyo.jp/book/2026/978-4-297-16073-9","source":"Hatena","published_at":"2026-11-19 20:56","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"AI時代のための設計思想「ソフトウェアダークファクトリー」","summary":"AIコーディングの普及に伴う「仕様の曖昧さ」や「テストの薄さ」といったリスクに対し、人間の判断や業務知識をシステム構造に埋め込む設計思想です。AIを制御するためのガードレール（ハーネス）を構築します。\n\nDDDやSREなどの古典的工学手法を再構築し、AIが雑に実装しても壊れ方を機械的に検出・制御できる環境を目指します。プロンプトテクニックではなく、アーキテクチャレベルでAI時代に適応する開発組織とプロダクト設計を提唱しています。","importance":9},{"title":"Novel as Code ② ― 156項目の設定を整理したら、全部Draftになりました","url":"https://zenn.dev/schutzz/articles/3ce5672a098bc0","source":"Zenn","published_at":"2026-11-19 21:36","genre":"other","genre_label":"総合・その他IT","headline":"小説執筆をコード管理する「Novel as Code」の試み","summary":"小説の設定をソフトウェアのようにGitで管理する「Novel as Code」の取り組みです。156項目の設定を整理する過程で、情報の粒度や承認状態、情報区分（事実か認識か）を厳密に定義する必要性に直面しました。\n\n設定を細分化し、正規化のような作業を行うことで、AIによる補完と正式な設定の境界を明確にしています。特に「登場人物の知識」を安易に補完せず空欄とするなど、物語の整合性を保つための厳格な管理手法が示されています。","importance":5},{"title":"OpenAI-API呼び出しにおけるプロンプトキャッシュの学び","url":"https://zenn.dev/91works/articles/76132a32606efb","source":"Zenn","published_at":"2026-11-19 17:25","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"OpenAI APIのプロンプトキャッシュを最適化しコストを削減する手法","summary":"LLMによるメール分類システムにおいて、プロンプトの構成を最適化することでコストを大幅に削減した事例を紹介します。\n\nOpenAIのプロンプトキャッシュは、先頭からのプレフィックス一致が重要です。固定部分を先頭に、可変部分を末尾に配置するだけでヒット率が劇的に向上します。また、最適化の効果を検証するために、キャッシュのヒット状況を計測する計装の導入や、並び順を固定する回帰テストの重要性についても詳しく解説しています。","importance":9},{"title":"QAエンジニアが Claude Code と組んで、Flutter アプリのモバイルE2Eを内製した話","url":"https://zenn.dev/sompojapan_dx/articles/82773e373b0a9a","source":"Zenn","published_at":"2026-11-19 12:28","genre":"mobile","genre_label":"モバイル・ガジェット・個人開発","headline":"QAエンジニアがClaude Codeを活用しFlutterアプリのE2Eテストを内製化","summary":"QAエンジニアが、ノーコードのテストサービスからAppium + WebdriverIOを用いた自前コードによるE2Eテストへ移行した事例。Flutterアプリ特有のアクセシビリティツリーの制約をClaude Codeで解析し、効率的に実装を進めた。\n\nCI環境でのフレーク（不安定なテスト）対策として、エミュレータの特性差や副作用を考慮した実装の重要性を強調。AIを活用することで、コードを書くハードルを下げつつ、失敗時の詳細なデバッグが可能になった点が大きな成果である。","importance":8},{"title":"美少女ゲーム「NIKKE」経由でマルウェア感染　北海道2自治体、委託先が認める","url":"https://www.itmedia.co.jp/news/article/2611/19/2000003351/","source":"Hatena","published_at":"2026-11-19 20:25","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"ゲーム「NIKKE」PC版経由のマルウェア感染と自治体情報漏えい","summary":"北海道の2自治体が業務委託先を通じて個人情報漏えいの可能性を発表しました。原因は、委託先のPCが人気ゲーム「NIKKE」のPC版ランチャーの改ざんを通じてマルウェア「K2F」に感染したことでした。\n\nK2Fは遠隔操作や情報窃取を行うマルウェアです。業務端末でのゲーム利用が感染経路となった可能性が高く、組織における業務用PCの利用制限やセキュリティ管理の重要性が改めて浮き彫りとなりました。","importance":9},{"title":"かつてスクウェアにナーシャ・ジベリ氏という伝説のプログラマーがいて数々の逸話を残した→河津秋敏さんが反応して当時の話をしてくれるアツい展開に","url":"https://togetter.com/li/2772052","source":"Hatena","published_at":"2026-11-18 21:33","genre":"other","genre_label":"総合・その他IT","headline":"伝説のプログラマー・ナーシャ・ジベリ氏の逸話と河津秋敏氏の回想","summary":"スクウェアの伝説的プログラマー、ナーシャ・ジベリ氏の驚異的な技術力と逸話を紹介。FF3の飛空艇高速移動やバグ修正のエピソードが、当時の開発者である河津秋敏氏の反応と共に語られる。\n\n天才的なプログラミング能力だけでなく、当時のハードウェア制約を逆手に取った実装手法など、ゲーム開発史における貴重な証言がまとめられている。多くのファンにとって懐かしくも熱い開発秘話である。","importance":5},{"title":"11月に修正されたPHPの脆弱性についてまとめてみた - piyolog","url":"https://piyolog.hatenadiary.jp/entry/2026/11/20/003148","source":"Hatena","published_at":"2026-11-20 00:54","genre":"web","genre_label":"Web開発・言語","headline":"PHPが17件の脆弱性を修正、一部環境でリモートコード実行の可能性","summary":"PHP開発チームは、PHP 8.5.13、8.4.28、8.3.37、8.2.36をリリースし、計17件の脆弱性を修正しました。今回の修正には、深刻度が「Critical」と評価されたものが7件含まれており、認証不要のリモートコード実行につながるリスクがあります。\n\nこれらの脆弱性は、主にバックトレース取得時の解放済みメモリ使用（Use-after-free）や、セッション処理の不備、PHP-FPMにおけるリクエストスマグリングなどに起因します。ただし、いずれも「デフォルトではない設定」や「一般的ではないセットアップ」が条件となるため、影響を受ける環境は限定的です。IPAや国家サイバー統括室も注意を呼びかけており、管理者は速やかなパッチ適用が推奨されます。","importance":9},{"title":"「ほぼ全人類が永久に失業する」Anthropic研究者がAIの未来を予測","url":"https://ascii.jp/elem/000/004/452/4452982/","source":"Hatena","published_at":"2026-11-19 18:44","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"AIによる雇用消滅の予測と社会への影響","summary":"Anthropicの研究者Tao Lin氏が、2027年末までにAIが人間の専門家を凌駕し、地球上のほぼすべての人間が永久に雇用されなくなる可能性を指摘しました。\n\nAIが仕事を代替するまでには時間差があるものの、最終的には福祉制度への依存が不可欠な社会が到来すると予測しています。同氏は、安全性の検証を優先するため、AI開発競争のペースを現在の4分の1に落とすべきだと主張しており、社会全体での議論と規制の必要性を訴えています。","importance":9},{"title":"MetaのMuseを使ってみた: 内部構造とセキュリティの調査","url":"https://zenn.dev/shoyataguchi/articles/b1bc6a96d4b963","source":"Zenn","published_at":"2026-11-20 00:55","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"MetaのパーソナルAIエージェント「Muse」の内部構造とセキュリティ設計","summary":"Metaが提供するパーソナルAIエージェント「Muse」は、ユーザー専用のLinux環境（VM）上で動作し、メールやカレンダー、Shell操作などを実行できる点が特徴です。他のチャットアプリと異なり、メインチャットとサイドチャット間で記憶が共有される設計となっており、長期記憶機構としてGraphRAGに近い手法で会話から事実や好みを抽出・整理しています。\n\nセキュリティ面では、ユーザー専用VMの隔離や、システムプロンプトのカスタマイズ機能など、OpenClaw等の先行事例を参考にしつつ、安全性を重視した設計がなされています。ユーザーは自身の記憶ファイル（MEMORY.mdなど）を直接読み書きできるため、AIの挙動を透明性を持って管理できる点が、他のLLMサービスとの大きな差別化要因となっています。","importance":8},{"title":"マウスやキーボードの電池残量がタスクバーで確認できる「BatteryHub」","url":"https://pc.watch.impress.co.jp/docs/news/2158043.html","source":"Hatena","published_at":"2026-11-20 06:48","genre":"mobile","genre_label":"モバイル・ガジェット・個人開発","headline":"マウスやキーボードの電池残量をタスクバーで一括確認できる「BatteryHub」","summary":"オープンソース開発者のkrisgfx9氏は、ワイヤレス周辺機器のバッテリー残量をWindowsのタスクバーに表示できる軽量ツール「BatteryHub」を公開しました。各メーカーの専用ソフトウェアを起動することなく、マウス、キーボード、ヘッドセット、ゲームコントローラなどの残量を直接通信で取得・表示できます。\n\n本ツールはメモリ使用量が約2MBと非常に軽量で、管理者権限も不要です。LogitechやRazer、SteelSeriesなどの主要メーカー製品に加え、PlayStationやXboxのコントローラにも対応しています。15%以下になると数値が赤く変わるなど視認性も高く、複数の周辺機器を併用するユーザーにとって非常に実用的なツールです。","importance":5},{"title":"Introducing the new AWS WAF security analytics dashboard | Amazon Web Services","url":"https://aws.amazon.com/blogs/security/introducing-the-new-aws-waf-security-analytics-dashboard/","source":"Hatena","published_at":"2026-11-20 10:02","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"AWS WAFに全保護パックを横断監視できるセキュリティ分析ダッシュボードが登場","summary":"AWSは、AWS WAFのトラフィックを可視化・分析する新しい「セキュリティ分析ダッシュボード」を公開しました。従来は各Web ACLやリージョンごとに個別のログ確認が必要でしたが、本機能により、アカウント内の全保護パック、リージョン、CloudFrontディストリビューションを横断したトラフィック状況を単一ページで調査可能です。\n\nダッシュボードでは、アクション別（許可・ブロック等）のトラフィック推移や、クライアントIP、ASN、JA4 TLSフィンガープリントなどの詳細なディメンションに基づいたフィルタリングが可能です。これにより、脅威の特定や誤検知のチューニングを迅速に行えるようになり、独自のログ分析パイプラインを構築・維持する手間を削減できます。","importance":7},{"title":"vue-tscの壁を越える：vizeとtsrsでVueの型検査を高速化した","url":"https://zenn.dev/studio/articles/vue-typecheck-vize-tsrs","source":"Zenn","published_at":"2026-11-18 23:26","genre":"web","genre_label":"Web開発・言語","headline":"Vueプロジェクトの型検査をvue-tscからvizeとtsrsで高速化","summary":"TypeScript 7の登場により、従来のvue-tscがボトルネックとなっていたVueプロジェクトの型検査を、TypeScript 7.1のContent Mapperを活用した「vize」と「tsrs」に置き換えた事例。\n\nCIの型検査時間を大幅に短縮し、メモリ使用量も削減。Vueのような独自テンプレートを持つフレームワークが、TypeScript 7の高速な型検査の恩恵を受けるための具体的な移行パスと技術的背景を解説している。","importance":9},{"title":"ドコモ「dアカウント」、免許証などを撮影する本人確認終了　27年2月末に","url":"https://japan.cnet.com/article/35255144/","source":"Hatena","published_at":"2026-11-19 15:02","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"ドコモ「dアカウント」の本人確認書類撮影方式が27年2月末で終了","summary":"NTTドコモは、dアカウントの本人確認方法の一つである「写真撮影で本人確認」を2027年2月末に終了すると発表しました。\n\n今後はICチップを読み取る「かんたん本人確認」へ移行します。マイナンバーカードや運転免許証などが対象ですが、一部の在留カードや氏名・住所変更がある場合は現時点で対応外となっており、今後の対応が注目されます。すでに本人確認済みのユーザーは再手続き不要です。","importance":5},{"title":"「オントロジー」とは結局何なのか　Palantir、Databricks、Snowflake、NVIDIAで中身が違う理由","url":"https://atmarkit.itmedia.co.jp/ait/articles/2611/19/news008.html","source":"Hatena","published_at":"2026-11-19 18:36","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"AIに業務ルールを伝える「オントロジー」の役割と各社製品の違い","summary":"AIがSQLを生成しても、業務上の定義やルールを理解していなければ正しい結果は得られません。そこで注目されているのが、概念や関係を定義する「オントロジー」です。\n\nDatabricks、Snowflake、NVIDIAなどの製品は、AIに業務用語の意味や文脈を伝える「文脈提供型」として機能します。一方、Palantirのオントロジーは、意味の定義に加え、業務操作の実行までを一体として扱う「業務実行型」という特徴があります。開発者は、自社の用語やルールをどこで定義し、AIにどう渡すかという視点でこれらのツールを比較検討することが重要です。","importance":8},{"title":"【やじうまミニレビュー】 Kindle専用のはずが……「Kindle Click」はiPhoneでも使えた","url":"https://pc.watch.impress.co.jp/docs/column/yajiuma-mini-review/2157685.html","source":"Hatena","published_at":"2026-11-20 06:43","genre":"mobile","genre_label":"モバイル・ガジェット・個人開発","headline":"2026年11月20日 06:14 「Kindle Click」は、Amazonの電子書籍端末「Kindle」のページを離れたところか…","summary":"2026年11月20日 06:14 「Kindle Click」は、Amazonの電子書籍端末「Kindle」のページを離れたところからめくれる純正のワイヤレスリモコンだ。端末を手に持たずに、ページをめくったり、戻ったりといった操作が行なえるので、より多彩な使い方が可能になる。\n\nこうした電子書籍端末用のページめくりデバイスは、楽天Koboの「Kobo Remote」、BOOXの「BOOX Tappy」と近年相次いで登場しており、いずれも好評で発売直後に品切れを起こしている。そこにニーズありと見てとった……のかは定かではないが、このたびAmazonが専用モデルを引っ提げて参入した格好だ。\n\n具体的な使い勝手や対応デバイスについて、筆者が購入した実機を用いてチェックする。Bluetoothで接続。\n\n2024年以降発売のKindleに対応 2つのボタンでページめくり、レスポンスは高速。明るさ調整もできる 非公式ながらiPhoneやiPadでも利用可能。\n\nそのほかのデバイスは？初代ながら高い完成度。","importance":5},{"title":"LiteLLM Proxyを実測：予算超過・フォールバックの落とし穴と、worker数で変わる性能","url":"https://zenn.dev/tatsuyaaaaaaa/articles/28e122ee5d5631","source":"Zenn","published_at":"2026-11-19 21:24","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"LiteLLM Proxyの実測検証：予算・フォールバックの挙動","summary":"LiteLLM Proxyの予算制限、フォールバック、性能をAWS EC2およびローカル環境で検証しました。予算上限は厳密なストップラインとして機能しない場合があり、本番利用には個別の検証が必要です。\n\nフォールバックは安定して動作するものの、タイムアウトやクールダウン設定には落とし穴があります。また、worker数を増やすとRPSは向上しますが、p95レイテンシが増加する傾向も見られました。最大性能だけでなく、障害時の挙動を長時間確認することが運用上の鍵となります。","importance":8},{"title":"Protobufチームは Implicit Presence を作ったことを後悔しているらしい","url":"https://zenn.dev/nagatsukey/articles/1782a56f61a45e","source":"Zenn","published_at":"2026-11-19 20:10","genre":"web","genre_label":"Web開発・言語","headline":"Protobufの「Implicit Presence」が失敗だった理由","summary":"Protobufのproto3で導入された「Implicit Presence」は、フィールドの「未設定」と「デフォルト値」を区別できない仕様であり、開発チームが後悔している機能です。\n\nこの仕様では、デフォルト値（0や空文字列など）がワイヤに書き込まれないため、受信側は送信側が値を設定しなかったのか、デフォルト値を設定したのかを判別できません。この区別ができないことは、ビジネスロジックにおいて「値が入力されていない」状態を正しく扱えないという深刻な問題を引き起こします。","importance":7},{"title":"Genie 4 is now available","url":"https://blog.google/innovation-and-ai/models-and-research/google-deepmind/genie-4-now-available-project-genie/","source":"Hatena","published_at":"2026-11-19 17:23","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"Google DeepMindの次世代世界モデル「Genie 4」が公開","summary":"Google DeepMindは、インタラクティブな世界生成モデル「Genie 4」をGoogle AI Ultraサブスクライバー向けに公開しました。\n\nGenie 4では、自然言語プロンプトを用いて環境をリアルタイムに編集したり、ネイティブオーディオを追加したりすることが可能です。また、新しいクリエイティブエージェントにより、複雑な環境構築が対話形式で容易になりました。ユーザーは作成した世界をコミュニティギャラリーで共有・リミックスでき、より応答性が高く社会的な体験が可能となっています。","importance":8},{"title":"[石野純也の「スマホとお金」] 最小構成9万4600円の「AQUOS sense11」、メモリー増量や薄型化でミッドハイを狙うシャープの戦略","url":"https://k-tai.watch.impress.co.jp/docs/column/value/2157646.html","source":"Hatena","published_at":"2026-11-19 20:57","genre":"mobile","genre_label":"モバイル・ガジェット・個人開発","headline":"AQUOS sense11の戦略：ミッドハイへのシフトと高価格化","summary":"シャープの「AQUOS sense11」は、最小構成で約9万5千円と、かつてのミッドレンジの枠を超えた価格設定となりました。為替や半導体価格の高騰が背景にあります。\n\n一方で、メモリー増量（8GB/12GB）、ディスプレイ輝度向上、6年間のセキュリティ更新保証など、スペックとサポートを大幅に強化しています。単なる廉価版ではなく、長く使えるミッドハイ端末として位置づけを再定義する戦略が見て取れます。","importance":6},{"title":"「焼肉きんぐ」「ゆず庵」など11アプリ、会員の氏名・電話番号の項目を廃止　予定を前倒し","url":"https://www.itmedia.co.jp/news/article/2611/19/2000003344/","source":"Hatena","published_at":"2026-11-19 20:45","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"不正アクセス対策で会員情報の氏名・電話番号項目を廃止","summary":"物語コーポレーションは、公式アプリ11本から会員の氏名と電話番号の項目を廃止しました。これは10月の不正アクセスによる大規模な情報漏えいを受けた対策で、当初の予定を前倒しして実施されました。\n\n保持する個人情報を最小限に抑えることで、万が一の漏えい時のリスクを低減する狙いです。他社でも会員制度の廃止や個人情報の非保持化が進んでおり、サイバー攻撃が多発する中、企業には「持たないセキュリティ」が強く求められています。","importance":8},{"title":"AIが爆速で開発する時代の、自動テストとの向き合い方","url":"https://zenn.dev/daiaoki/articles/webterm-ai-era-testing","source":"Zenn","published_at":"2026-11-19 16:11","genre":"web","genre_label":"Web開発・言語","headline":"個人開発サービスにおけるAI時代の自動テスト戦略","summary":"AIによる高速開発が進む中で、品質を維持するための自動テストの重要性が増しています。ブラウザ上で動作するターミナルシミュレーターを開発する過程で、どのようにテストを育ててきたかを解説します。\n\n「状態を書き換えない関数」としてコマンドを実装するFunctional Core, Imperative Shellの設計を採用し、テスト可能な核を切り出すことで、AIによる大量のコミットにも耐えうる品質管理を実現しました。個人開発において、開発速度を落とさずに信頼性を担保するための試行錯誤が綴られています。","importance":7},{"title":"自分の代わりに動くAgentへ。Claude CodeとCodexで作る自律改善ハーネス","url":"https://zenn.dev/nttdata_tech/articles/9562962cc181a1","source":"Zenn","published_at":"2026-11-19 16:28","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"Claude Codeを活用した自律改善型エージェント環境の構築","summary":"コーディングエージェントに自律的に作業を任せるための「ハーネス（仕組み）」の設計手法を紹介します。\n\nプロンプトを磨くよりも、フォルダ構造や概念の置き場を整理し、エージェントが自分で読み書き・検査できる環境を構築することが重要です。規約と記録をGitリポジトリに集約し、タスク単位で管理することで、複数のエージェントセッションを並行運用し、人間は確認と判断に集中するワークフローを実現しています。","importance":8},{"title":"正しいUIデザインと、意図のあるUIデザイン","url":"https://zenn.dev/praha/articles/08568310684aa3","source":"Zenn","published_at":"2026-11-18 14:55","genre":"mobile","genre_label":"モバイル・ガジェット・個人開発","headline":"個人開発アプリにおける「正しい」デザインと「意図のある」デザイン","summary":"個人開発アプリにおいて、ガイドラインに従うだけでなく、アプリの目的に応じた「デザインプリンシプル（方針）」を策定する重要性を解説。ガイドライン同士が衝突した際に優先順位を決める手法を提案する。\n\n自身のアプリ「nu-tori」を例に、ユーザーの操作を減らすことを最優先にするなど、具体的な判断基準の作り方を紹介。正しいデザインの先にある、アプリの個性を形作るための意思決定プロセスを説いている。","importance":6},{"title":"新機能、ElastiCache の distributed KV caching を GPU 2 台の vLLM で試す","url":"https://zenn.dev/aws_japan/articles/elasticache-distributed-kv-cache-bench","source":"Zenn","published_at":"2026-11-19 15:55","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"ElastiCacheの分散KVキャッシュをvLLMで活用する検証","summary":"Amazon ElastiCache for Valkeyの新機能「distributed KV caching」を、vLLM環境で検証した結果を報告します。\n\nこの機能は、複数のGPUサーバー間でKVキャッシュを共有し、リクエストの再利用を可能にします。特にマルチテナント環境で共通のシステムプロンプトを使用する場合、キャッシュヒットによりTTFT（最初のトークンまでの時間）が短縮されます。LMCacheを用いた構成や、RDMA/TCPによるデータ転送の仕組みについても解説しています。","importance":8},{"title":"Cognito認証、フロントとバックエンドで「誰が何をやるか」を整理する","url":"https://zenn.dev/taichan/articles/47891bbc4eee8a","source":"Zenn","published_at":"2026-11-19 13:48","genre":"web","genre_label":"Web開発・言語","headline":"Cognito認証におけるフロントとバックエンドの責務分担","summary":"CognitoとFastAPIを用いた構成において、認証まわりの責務を明確に整理します。\n\nフロントエンドは認証ライフサイクルの管理とトークンの運搬を担当し、バックエンドは信頼境界としてJWTの検証を毎リクエスト行います。バックエンドはCognitoに毎回問い合わせるのではなく、公開鍵をキャッシュしてローカルで検証するのが定石です。IDトークンとアクセストークンの使い分けや、失効チェックの注意点についても解説しています。","importance":7},{"title":"DependabotのPRをClaudeで影響分析して、リスク（低・中・高）をPRにコメントする","url":"https://zenn.dev/tomipetit/articles/dependabot-impact-analysis-claude","source":"Zenn","published_at":"2026-11-19 12:53","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"DependabotのPRをClaudeで分析しリスクを自動判定する仕組み","summary":"DependabotによるセキュリティアップデートのPRに対し、Claude Codeを用いて影響分析を行い、リスクレベルをコメントするGitHub Actionsを構築しました。\n\n変更前後のpackage-lock.jsonの比較や、npm diffによる差分抽出を行い、Claudeに分析を委譲します。これにより、パッチ更新に混ざった間接依存のメジャー更新や、本番コードへの影響を自動で把握可能になりました。リスクが低い場合のみテストを実行する効率的なパイプラインを実現しています。","importance":8},{"title":"相次ぐOSSの脆弱性に、とりあえずクラウドWAF入れるだけでだいぶ違う話+Rootlessコンテナもいいぞ","url":"https://zenn.dev/kusuke/articles/98e178e6824cac","source":"Hatena","published_at":"2026-11-19 11:22","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"OSS脆弱性ラッシュへの対策：クラウドWAF導入とRootlessコンテナの推奨","summary":"PHPやJava、nginxなどで相次ぐメモリ破壊系の脆弱性に対し、パッチ適用までの時間を稼ぐための防衛策を提案。オリジンサーバを直接公開せず、L7クラウドWAFを前段に配置することで、不正なプロトコルフレームやレート制限による攻撃を遮断する重要性を説く。\n\nまた、根本的なセキュリティ向上策としてRootlessコンテナの活用を推奨。深夜の緊急パッチ対応に疲弊するエンジニアに対し、アーキテクチャ側で保険を持つことの重要性を強調している。","importance":9},{"title":"Go コンパイラを制御する疑似フィールドハック集","url":"https://zenn.dev/yumemi_inc/articles/go-pseudo-field-hacks","source":"Zenn","published_at":"2026-11-19 12:24","genre":"web","genre_label":"Web開発・言語","headline":"Goコンパイラの等価比較関数生成を抑制する疑似フィールドハック","summary":"Go言語において、巨大な構造体に対する等価比較関数の自動生成がコンパイル時間を増大させる問題に対し、比較不能な型（[0]func()など）をフィールドに含めることでコンパイルを高速化するテクニックを紹介。\n\nこの手法は標準ライブラリ（log/slogなど）でも採用されており、コンパイラの振る舞いを制御するハックとして有効。ポインタ化よりも「比較不能な型にする」方が、コンパイル生成物を減らすという目的においてより素直な解決策であると解説している。","importance":7},{"title":"録音の文字起こし・リアルタイム文字起こし・テキストの音声読み上げができる「speech.cpp」はGPU不要でCPUだけで動作可能","url":"https://gigazine.net/news/20261119-speech-cpp/","source":"Hatena","published_at":"2026-11-19 23:07","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"GPU不要でCPU動作可能な音声認識・合成ツール「speech.cpp」","summary":"「speech.cpp」は、日本語特化型の音声認識AI「Haas-ja-v1.0」や音声合成AI「Irodori-TTS」などを統合したオープンソースツールです。最大の特徴はGPUを必要とせず、CPUのみで動作する点であり、ブラウザ経由で文字起こしや音声読み上げ、音声クローンまで実行可能です。\n\n導入はPowerShellコマンド一つで完了し、Webインターフェースから直感的に操作できます。リアルタイム文字起こしや、録音データからの音声クローン作成など、高度なAI機能をローカル環境で手軽に試せる点が魅力です。対応モデルも順次拡充されており、軽量かつ高性能な音声AI環境を構築したいエンジニアにとって非常に有用なツールです。","importance":7},{"title":"dbt v1 でメトリクスを一元管理する未来 〜Apache Ossie と Lightdash で試す〜","url":"https://zenn.dev/kyami/articles/dbt-snowflake-apache-ossie","source":"Zenn","published_at":"2026-11-19 22:48","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"dbtとSnowflakeのメトリクス定義を一元管理する新手法","summary":"dbtで定義したメトリクスをSnowflakeのSemantic Viewに変換し、BIツール（Lightdash）やAI（Cortex Analyst）と共有する手法が注目されています。従来はdbtとSnowflakeでメトリクス定義を二重管理する必要があり、整合性の維持が課題でした。\n\nApache Ossieを活用することで、dbtのYAML定義からSemantic Viewを自動生成し、定義の同期を実現します。これにより、BIやAIが同じ管理対象メトリクスを標準SQLで利用可能になります。ただし、現時点では発展途上の技術であり、何ができて何ができないかの見極めが重要です。","importance":7},{"title":"Checking for NGINX2Root and Java4Shell with Threats in Devin Security | Devin","url":"https://devin.ai/blog/nginx2root-java4shell-threats","source":"Hatena","published_at":"2026-11-20 09:26","genre":"web","genre_label":"Web開発・言語","headline":"Helping customers scan for and patch the recently disclosed NGINX2R…","summary":"Checking for NGINX2Root and Java4Shell with Threats in Devin Security | Devin。Helping customers scan for and patch the recently disclosed NGINX2Root and Java4Shell vulnerabilities with Threats in Devin Security.","importance":5},{"title":"1ターンだけ Sonnet に任せるスキルを作ったら、Opus のままより高くついていた話","url":"https://zenn.dev/no215/articles/claude-code-one-turn-model-skill","source":"Zenn","published_at":"2026-11-19 22:06","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"Claude Codeのモデル切り替えスキルによるコストの落とし穴","summary":"Claude Codeで「1ターンだけ下位モデルに任せる」スキルを作成し、コスト削減を試みた事例です。Haikuへの切り替えは安価に成功しましたが、Sonnetへの切り替えはかえって高くつく結果となりました。\n\n原因はプロンプトキャッシュの仕組みにあります。モデルを切り替えるとキャッシュが共有されず、会話履歴全体を再書き込みするため、そのターンのコストが跳ね上がります。安易なモデル切り替えは、キャッシュ効率を考慮しないと逆効果になるという教訓です。","importance":7},{"title":"約2,500万人のデータで「Firefox」の“指紋”対策を強化 ～Mozillaが研究成果を発表／一意に識別されるユーザーの割合を75％から46％に削減","url":"https://forest.watch.impress.co.jp/docs/news/2157865.html","source":"Hatena","published_at":"2026-11-19 18:37","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"Firefoxがフィンガープリンティング対策を強化","summary":"Mozillaは、約2,500万人のFirefoxユーザーデータを分析し、ブラウザーフィンガープリンティング対策を強化しました。ユーザーを一意に識別する情報の組み合わせを特定し、それを削減することで追跡を困難にしています。\n\n具体的には、タスクバーサイズやCPUコア数、描画・音声情報の報告を統一化することで、識別の差異を減らしました。これにより、一意に識別されるユーザーの割合を75％から46％に削減することに成功。最新版のFirefox 145から順次導入されています。","importance":7},{"title":"tsrs を導入したら oxlint の type-aware linting と typecheck が爆速になった話","url":"https://zenn.dev/dress_code/articles/6c179ae5129131","source":"Zenn","published_at":"2026-11-18 16:00","genre":"web","genre_label":"Web開発・言語","headline":"tsrs導入によるoxlintの型チェック爆速化とCI改善","summary":"TypeScript 7のコンパイラをRustに移植した「tsrs」を導入し、oxlintの型チェックを高速化した事例。バックエンドの型チェックが20倍以上速くなり、CIの待ち時間が劇的に改善された。\n\ntscと並行稼働させて結果の整合性を検証する段階的な移行プロセスも紹介。型エラーの指摘内容や出力形式はtscと一致しつつ、パフォーマンスが大幅に向上したことで、開発体験が大きく改善された。","importance":8},{"title":"Agenship — Software FactoryであなたのチームにAIの開発ラインを","url":"https://agenship.ai/","source":"Hatena","published_at":"2026-11-19 21:07","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"AIエージェントによる開発ライン構築「Agenship」","summary":"Agenshipは、仕様策定から実装、テスト、Pull Request作成までをAIエージェントが自律的に行う「Software Factory」です。工程間の人手による接続を減らし、エンジニアが判断とレビューに集中できる環境を目指しています。","importance":7},{"title":"週刊Cloudflare - 2026/11/15週","url":"https://zenn.dev/gemcook/articles/weekly-cloudflare_2026_1108-1114","source":"Zenn","published_at":"2026-11-19 14:00","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"Cloudflareの最新アップデート（2026/11/15週）まとめ","summary":"Cloudflareのサービスアップデート情報を網羅的に紹介します。\n\n主な変更点として、Wranglerのstate保存先の変更、D1データベースのexport機能強化、認証プロファイルの環境変数対応、D1の自動provisioningにおけるjurisdiction指定などが含まれます。また、セキュリティ修正に伴うNode.jsの要件変更や、Workers for PlatformsでのCron Triggersに関する警告追加など、開発者にとって重要な変更が多数行われています。","importance":6},{"title":"TypeScript 7.1 の Content Mapper で型の生成コマンドをなくす","url":"https://zenn.dev/toiroakr/articles/typescript-content-mapper-codegen","source":"Zenn","published_at":"2026-11-19 11:10","genre":"web","genre_label":"Web開発・言語","headline":"TypeScript 7.1のContent Mapperで型生成コマンドを不要にする","summary":"TypeScript 7.1で導入される「Content Mapper」を活用し、従来は外部コマンドで生成していた型定義ファイルを自動化・統合する手法を解説。ライブラリ利用時の型生成の手間を削減する。\n\n特に宣言マージに依存していた手法をContent Mapperで置き換えることで、生成コマンドの再実行漏れを防ぎ、型定義の整合性を保つことが可能になる。既存の型生成フローを改善したい開発者にとって注目すべき機能である。","importance":7},{"title":"llama.cpp：DGX Spark 2台でNCCLを使うマルチGPU推論手順","url":"https://zenn.dev/catspawengineer/articles/1dbc4e0c913e64","source":"Zenn","published_at":"2026-11-19 17:39","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"llama.cppでNCCLを用いたマルチGPU推論を構築する手順","summary":"llama.cppがNCCLに対応したことを受け、2台のDGX Spark（ThinkStation PGX）を用いてマルチGPU推論環境を構築する手順を解説します。\n\n本構成は公式ドキュメントに記載のないRPCとNCCLを組み合わせた手法です。CUDA環境の準備、NCCL対応のビルド、ネットワーク設定、そしてテンソル並列（TP=2）での推論実行までをステップバイステップで紹介しています。特にMoEモデルなど一部アーキテクチャの制限や、ネットワークインターフェースの適切な指定が成功の鍵となります。","importance":7},{"title":"ログの種別を整理して、何をどこまで残すか決めた話","url":"https://zenn.dev/dress_code/articles/a3bf34274af03f","source":"Zenn","published_at":"2026-11-19 09:00","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"業務システムにおけるログの種別整理と保持方針の策定","summary":"人事・労務データを扱うシステムにおいて、監査要件を満たすためのログの洗い出しと種別定義を解説。NISTやCISのガイドラインを参考に、ログを「業務記録」「運用記録」などに分類した。\n\n「誰が、何に、どう関わったか」という2軸で種別を定義し、重要度に応じて保持期間や保存場所（Tier）を決定。監査ログを特定の記録先ではなく「目的に応じた抽出」と定義することで、要件変更に柔軟に対応できる体制を構築した。","importance":7},{"title":"destroyCancellationToken と GetCancellationTokenOnDestroy() 挙動が同じではない","url":"https://zenn.dev/mms0xf/articles/31171738240d3a","source":"Zenn","published_at":"2026-11-20 00:49","genre":"web","genre_label":"Web開発・言語","headline":"一度もアクティブになっていない GameObject を Destroy したとき、 MonoBehaviour.destroyCan…","summary":"一度もアクティブになっていない GameObject を Destroy したとき、 MonoBehaviour.destroyCancellationToken （Unity 組み込み）は キャンセルされない UniTask の GameObject.GetCancellationTokenOnDestroy() は キャンセルされる UniTask の MonoBehaviour.GetCancellationTokenOnDestroy() （MonoBehaviour に対して呼ぶ版）は、Unity 2022.2 以降、 destroyCancellationToken をそのまま返す。\n\nなので、こちらも キャンセルされない 。例えば出現の演出を待つ敵など、非アクティブな親の下で生成して、後でアクティブにする作りで、それに紐づく何らかのModelなどのDisposableがあって、 .AddTo(destroyCancellationToken) でgoとDisposableを諸共に破棄を期待する構造の場合。","importance":5},{"title":"Gemini Decision 1でスパム退治！","url":"https://zenn.dev/satoshi_yoneda/articles/decision-1-anti-spam","source":"Zenn","published_at":"2026-11-19 15:20","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"Gemini Decision 1を用いたスパムメール自動判定システムの構築","summary":"従来のベイジアンフィルタをすり抜ける巧妙なスパムメールに対し、意思決定モデル「Gemini Decision 1」を活用した判定システムを構築しました。\n\nメールサーバーの負荷やコストを考慮し、IMAP経由でローカルからメールを読み込み、Gemini APIで判定を行うスクリプトを実装しました。Google AI Proのクーポンを活用することでコストを抑えつつ、高精度なスパム排除を実現しています。スパムの傾向変化にも柔軟に対応可能な設計です。","importance":7},{"title":"「PHP」で17件の脆弱性に対処、認証不要のリモートコード実行につながる“致命的”なものも／v8.5.13、v8.4.28、v8.3.37、v8.2.36が公開","url":"https://forest.watch.impress.co.jp/docs/news/2158039.html","source":"Hatena","published_at":"2026-11-20 00:05","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"v8.5.13、v8.4.28、v8.3.37、v8.2.36が公開 2026年11月20日 00:01 スクリプト言語「PHP」の開…","summary":"v8.5.13、v8.4.28、v8.3.37、v8.2.36が公開 2026年11月20日 00:01 スクリプト言語「PHP」の開発チームは11月19日（協定世界時）、 予告 通り「PHP」のセキュリティアップデートを実施した。現在、以下の修正版が利用可能。\n\n今回のアップデートでは、合計17件の脆弱性が修正された（バージョンによって影響範囲は異なる）。深刻度の内訳は、4段階中最高の「Critical」が7件、上から2番目の「High」が4件、「Medium」が6件。\n\n深刻度「Critical」の脆弱性は、以下の通り。いずれも 「CVSS 4.0」 の基本値が「9.2」と評価されている。\n\nCVE-2026-129474 （ GHSA-8mjj-2r7p-4hg2 ）：「__call()」「__callStatic()」で処理されるメソッドのバックトレース取得時に、解放済みのメモリへアクセスしてしまう（use-after-free）。v8.5のみ。","importance":5},{"title":"ActiveRecordはなぜ革新的で、なぜアンチパターンを含むと見做されるのか？","url":"https://zenn.dev/mconfjp/articles/active-record-is-amazing","source":"Zenn","published_at":"2026-11-19 11:45","genre":"web","genre_label":"Web開発・言語","headline":"ActiveRecordの革新性とアンチパターンとされる理由の歴史的考察","summary":"Ruby on RailsのActiveRecordが、2004年の登場時に「設定より規約」という概念でいかにWeb開発を革新したかを解説。当時のJava製ORM（Hibernate）と比較し、XML設定を排除した簡潔さが開発者に与えた衝撃を振り返る。\n\n一方で、現在の視点から見たアンチパターンとしての側面にも言及。オブジェクトとデータベースの密結合がもたらす保守性の課題など、技術の歴史的背景を踏まえたORMの功罪を整理している。","importance":6},{"title":"Claude Code のサブエージェントは「定義しただけ」では使われない ― 大きなファイルを任せて本スレッドを軽く保つ","url":"https://zenn.dev/mukuil_blog/articles/71edd164433250","source":"Zenn","published_at":"2026-11-19 15:12","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"Claude Codeのサブエージェント活用によるコンテキスト節約術","summary":"Claude Codeのコストを抑え、効率的に開発を進めるためのサブエージェント活用法を解説します。\n\nメインスレッドで大きなファイルを読み込むとトークン消費が激しくなるため、調査専用のサブエージェントに処理を委譲します。定義するだけでなく、CLAUDE.mdに「使う」ことを明記し、具体的な委譲基準を設けることで利用率が向上しました。調査結果のみをメインに戻すことで、コンテキストを軽く保つ設計が重要です。","importance":7},{"title":"Web制作者は要チェック！ 新しいユニバーサルセレクタ、アプリのインストールを要求できるinstall要素など、Chrome 158で追加された6つのCSSとUIの新機能","url":"https://coliss.com/articles/build-websites/operation/work/chrome-158-adds-6-new-css-feature.html","source":"Hatena","published_at":"2026-11-19 10:05","genre":"web","genre_label":"Web開発・言語","headline":"Chrome 158で追加されたCSSユニバーサルセレクタやinstall要素など6機能","summary":"Chrome 158で実装されたCSSおよびUIの新機能を解説。カスタムハイライトのユニバーサルセレクタ「::highlight(*)」や、JavaScript不要でWebアプリのインストールを要求できる「install」要素が注目される。\n\nその他、タブのデバイス間送信機能や、SVGのtextPathにおけるside属性の追加など、Web制作者にとって利便性の高いアップデートが含まれている。各機能の概要と活用シーンを簡潔にまとめている。","importance":6},{"title":"Microsoft-Decision-1.1公開！Microsoft-Decision-1との差はどれくらい？","url":"https://zenn.dev/microsoft/articles/ms-decision-1-1","source":"Zenn","published_at":"2026-11-19 12:41","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"Microsoft-Decision-1.1の性能と1との比較検証","summary":"Microsoftの意思決定モデル「Microsoft-Decision-1.1」が一般提供開始されました。前モデル「1」と比較し、速度と精度が向上したとされています。\n\n実機検証の結果、通信時間を除いた推論速度は1.00〜1.33倍程度であり、公式の「2倍以上」という数値には条件による差が見られました。しかし、長い入力に対する応答の安定性や精度は向上しており、実用的な意思決定モデルとしての進化が確認できました。","importance":7},{"title":"DiscordからClaude Codeに作業を任せる方法！報告も質問もスマホで受け取る","url":"https://zenn.dev/spa77k/articles/discord-claude-code-ask-relay","source":"Zenn","published_at":"2026-11-19 11:09","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"DiscordとClaude Codeを連携させスマホから作業を依頼・管理する仕組み","summary":"外出先からClaude Codeに作業を依頼し、報告や質問をスマホのDiscordで受け取る「ask-relay」という仕組みを紹介。Claude Codeをheadlessで動かし、Orcaを介して作業セッションを管理する。\n\n会話の記憶を保持しつつ、作業単位でセッションを分離することで、効率的なエージェント運用を実現。指示書（CLAUDE.md）の自動生成や、Promiseの鎖を用いたターン管理など、実用的な自動化の工夫が盛り込まれている。","importance":8},{"title":"AIの返答が理解しづらいので、自分の認知特性をAIに分析させてSkillにした - $shibayu36->blog;","url":"https://blog.shibayu36.org/entry/2026/11/17/120000","source":"Hatena","published_at":"2026-11-18 12:37","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"自身の認知特性をAIに分析させ、理解しやすい回答を得るSkillの作成","summary":"短期記憶力が低くAIの回答を理解しづらいという課題に対し、自身の認知特性をClaude Codeに分析させ、それに最適化した回答を出力させる「Skill」を作成した事例。\n\n過去のセッションログから詰まった箇所をAIに分析させ、特性を言語化。その特性をSkillとして読み込ませることで、回答の要約や参照の仕方を改善し、理解速度を向上させた。AIの出力を自分向けにカスタマイズする実践的なアプローチである。","importance":8}]};
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
