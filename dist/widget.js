// __EMBEDDED_NEWS_START__
globalThis.__IT_TREND_EMBEDDED_DATA__ = {"updated_at":"2026-11-26 19:39:19 JST","total_count":50,"config":{"selected_genres":["ai","web","infra","mobile","biz"],"other_genre_min_ratio":0.25,"max_age_hours":72.0,"genres":{"ai":"AI・LLM・機械学習","web":"Web開発・言語","infra":"インフラ・クラウド・セキュリティ","mobile":"モバイル・ガジェット・個人開発","biz":"ITビジネス・キャリア・マネジメント","other":"総合・その他IT"}},"articles":[{"title":"GPU Lambda ② vLLM のモデルはどこに置く？4つの構成で起動時間を比べてみた","url":"https://zenn.dev/nix/articles/1ddfbfbb7e3763","source":"Zenn","published_at":"2026-11-26 13:50","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"GPU LambdaにおけるvLLMモデル配置構成別の起動時間比較","summary":"AWS LambdaのGPU環境でvLLMを動かす際、モデルの重みをどこに配置するのが最適かを4つの構成（Hugging Faceからダウンロード、S3からストリーミング、SOCI付きイメージ、イメージ内同梱）で比較検証。応答速度には大きな差がないものの、起動までの時間と運用面に明確な違いが見られました。\n\n結論として、モデルをイメージに同梱する構成が起動時間において最速でしたが、イメージサイズが肥大化するデメリットもあります。S3からの直接読み込みやSOCIの活用など、ユースケースに応じて起動時間と管理コストのバランスを考慮した構成選択が重要です。","importance":8},{"title":"130 万行の PostgreSQL の検索を 54 秒 → 1 秒台に改善した話","url":"https://zenn.dev/91works/articles/f865594062b3e1","source":"Zenn","published_at":"2026-11-26 12:16","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"PostgreSQLの全文検索を54秒から1秒台へ高速化したチューニング事例","summary":"130万行のメール検索において、条件によって54秒かかっていた処理を1秒台に改善した事例。原因は「同義語展開による候補の膨張」「フレーズ検索のインデックス判定不足」「古いテーブル統計」の3点でした。\n\n対策として、職種への同義語展開の抑制、GINインデックスとフレーズ判定の分離（&演算子の活用）、および統計情報の更新頻度見直しを実施しました。特に、インデックスで絞り込んだ後の再チェック処理を最適化したことが劇的な高速化につながりました。PostgreSQLの実行計画を深く理解し、段階的にボトルネックを解消した好例です。","importance":9},{"title":"飲食店の“AI商品画像”は景品表示法違反にならないの？　弁護士の見解","url":"https://www.itmedia.co.jp/news/article/2611/26/2000003447/","source":"Hatena","published_at":"2026-11-26 14:02","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"飲食店のメニューにAI生成画像を使う際の景品表示法上の注意点","summary":"飲食店のメニュー画像に生成AIを活用するケースが増える中、景品表示法における「優良誤認表示」のリスクについて弁護士が解説。生成AIで作られた画像であっても、実物と著しく異なる品質や内容を消費者に誤認させる場合は違法となる可能性があります。\n\n判断基準は「実際の商品と比べて、消費者の選択に影響を与えるほど著しく優良であるか」という点にあります。単なる写真の補正や誇張の範囲を超え、例えばパティの枚数や具材の量が実物と大きく異なるような画像掲載は避けるべきであり、個別の事情を考慮した慎重な運用が求められます。","importance":6},{"title":"Leanによる定理証明と実行時検証の実装例 〜バッテリーの充電制御〜","url":"https://zenn.dev/quetta_kazunoko/articles/battery-safety-lean","source":"Zenn","published_at":"2026-11-26 18:09","genre":"other","genre_label":"総合・その他IT","headline":"本記事では、単純なバッテリーの充電制御モデルを取り上げ、Leanによる定理証明と実行時検証の実装例を紹介します。","summary":"本記事では、単純なバッテリーの充電制御モデルを取り上げ、Leanによる定理証明と実行時検証の実装例を紹介します。紹介するLeanコードはこちらのリポジトリ [1] で公開しています。\n\n本記事ではタクティクを使った数学の証明はほんのわずかで、以下の内容を重視します。Leanの型やタクティクの使い方などの説明はあまりありません。\n\n形式検証の異なる二つの方式の実装。Leanで安全性仕様、制御器の要求仕様、検証対象が仕様を満たすことの証明を記述する方法。\n\nLeanコードビルド時の検証内容とプログラム実行時の検証内容の違い。共通の安全性仕様を二つの方法で検証する ソフトウェアや制御システムが仕様を満たしていることを、数学的に厳密な方法で確認するためのアプローチとして、定理証明、実行時検証、モデル検査など、さまざまな形式手法が研究・開発されています。","importance":5},{"title":"型チェックが重かったので、クエリの型推論を手放してみた","url":"https://zenn.dev/dress_code/articles/88b55221eea4e0","source":"Zenn","published_at":"2026-11-26 11:15","genre":"web","genre_label":"Web開発・言語","headline":"TypeScriptの型チェック負荷を軽減するため、複雑なクエリの型推論をあえて手放す選択","summary":"TypeScriptの型チェックが重く、開発環境のメモリを圧迫していた問題を解決するため、型推論の負荷を調査した。その結果、ORM（Prisma/Kysely）を用いた特定のクエリにおける型インスタンス化が、全体の型チェック負荷の約3分の1を占めていることが判明した。\n\nコンパイラの統計情報（--diagnostics）を活用してボトルネックを特定し、当該クエリの型推論をあえて手放すことで、型チェックの実行時間とメモリ使用量を大幅に削減した。型安全性を維持しつつ、開発効率を優先するためのトレードオフ判断の好例である。","importance":7},{"title":"launchd/gh/git worktreeでGitHubのレビュー依頼からローカルのClaude Codeを自動起動する","url":"https://zenn.dev/ptpadan/articles/local-claude-review-daemon","source":"Zenn","published_at":"2026-11-26 10:19","genre":"mobile","genre_label":"モバイル・ガジェット・個人開発","headline":"GitHubレビュー依頼を検知し、ローカルのClaude Codeを自動起動するCLIツールを開発","summary":"GitHubのレビュー依頼を検知し、手元のMacでClaude Codeを自動起動するCLIツール「reviewd」を開発した。CI上で完結させるのではなく、ローカル環境で起動することで、普段の設定やMCPサーバーをそのまま利用し、対話的にレビューを継続できる環境を実現した。\n\nlaunchd、gh CLI、git worktree、SQLiteを組み合わせ、冪等性を担保しながら効率的にレビューを処理する仕組みを構築。作業中のブランチを汚さないようbare mirrorからworktreeを生成する工夫など、実用性を重視した設計がなされている。","importance":7},{"title":"TenkaCloudSimulator 開発日記：ChatGPTのDotで開発が自律的に続く仕組みをつくる","url":"https://zenn.dev/bull/articles/tenkacloud-simulator-devlog-20261126","source":"Zenn","published_at":"2026-11-26 12:59","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"ChatGPTのDotを活用した自律的な開発環境の構築手法","summary":"TenkaCloudSimulatorの開発において、ChatGPTのDotとサブエージェントを活用し、Issueの起票から実装、レビュー、マージまでを自律的に回す仕組みを構築。トークン制限を回避しつつ、並列作業を効率化するために、AGENTS.mdに完了条件をYAML形式で記述する手法を採用しています。\n\nAWS公式エミュレーターの知見を参考に、テスト・修正・レビューの工程をエージェント間で分担させることで、開発速度の向上を実現しました。人間が介入せずともAI同士で効率的に指示を伝達できる形式を追求しており、AIエージェントによる開発自動化の先進的な事例です。","importance":8},{"title":"みずほ銀行、顧客の管理番号3万件が漏洩　委託先に不正アクセス - 日本経済新聞","url":"https://www.nikkei.com/article/DGXZQOUB266I30W6A121C2000000/","source":"Hatena","published_at":"2026-11-26 17:06","genre":"other","genre_label":"総合・その他IT","headline":"みずほ銀行は26日、メール配信業務などの委託先企業に不正アクセスがあり、一部の情報が漏洩したと発表した。","summary":"みずほ銀行は26日、メール配信業務などの委託先企業に不正アクセスがあり、一部の情報が漏洩したと発表した。対象は行内向けの顧客管理番号で最大3万3224件。\n\n同日午後3時時点で氏名や住所、口座の暗証番号などは漏洩していない。業務委託先の プレイド （東京・中央）が不正アクセスを受けた。\n\n顧客の電話番号やメールアドレスなども含め、第三者が個人を特定できる情報は流出していないという。漏洩した管理番号は既に無効化し、対象の顧客に対して順次連絡を進める。","importance":5},{"title":"AnthropicがClaudeを使って自社APIをPythonからRustに移植しCPU使用量を約70％削減した方法を公開","url":"https://gigazine.net/news/20261126-anthropic-claude-api-rust/","source":"Hatena","published_at":"2026-11-26 11:08","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"AnthropicがClaudeを活用してMessages APIをPythonからRustへ移植しCPU使用率70％削減","summary":"Anthropicは、急増するトラフィックに対応するため、Pythonで実装されていたMessages APIをRustへ全面移植した。移植作業にはClaudeを活用し、検証には稼働中のPython版を正解基準とする比較テスト環境を構築することで、サービスを停止することなく移行を完了させた。\n\n結果として、リクエスト当たりのCPU使用量を約70％、メモリ使用量を80％以上削減し、APIの応答速度も向上させた。この事例は、AIが大規模なコード移植を自律的に進め、人間が検証や判断を担うという新しい開発手法の有効性を示している。","importance":9},{"title":"「AI検索に電話番号が……」鳴りやまぬコールセンター　バッファローは壊れた「顧客導線」をどう改善した？","url":"https://www.itmedia.co.jp/business/articles/2611/26/news015.html","source":"Hatena","published_at":"2026-11-26 07:50","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"AI検索にサポート番号が表示され入電急増、バッファローが取り組んだ顧客導線の再設計","summary":"AI検索結果にコールセンターの電話番号が直接表示されたことで、バッファローのサポート窓口への入電が急増した事例。ノンボイス化を進めていた同社にとって、電話への回帰は大きな課題となった。\n\n同社はAIを敵視するのではなく、AI検索を前提としたWebサイトのFAQ再設計に着手。ユーザーがAI検索から直接自己解決できる導線を整備することで、電話問い合わせを抑制し、本来のノンボイス化戦略を立て直した。AI時代の顧客対応において、検索体験を含めたWebサイト設計の重要性を示す事例である。","importance":7},{"title":"パスワード管理アプリ「Bitwarden」がWindows 11/macOSのパスキー機能と統合／OS標準のセキュリティ画面から保存・利用、拡張機能なしでもWebサイトへサインイン","url":"https://forest.watch.impress.co.jp/docs/news/2159319.html","source":"Hatena","published_at":"2026-11-26 16:18","genre":"web","genre_label":"Web開発・言語","headline":"OS標準のセキュリティ画面から保存・利用、拡張機能なしでもWebサイトへサインイン 2026年11月26日 16:10 米Bitwar…","summary":"OS標準のセキュリティ画面から保存・利用、拡張機能なしでもWebサイトへサインイン 2026年11月26日 16:10 米Bitwardenは11月18日（現地時間）、パスワード管理サービス「Bitwarden」をWindows 11とmacOSのパスキープロバイダーとして統合できるようになったと発表した。\n\nOS標準のパスキー画面から「Bitwarden」の保管庫へパスキーを作成・保存したり、「Bitwarden」に保存済みのパスキーを使ってWebサイトやアプリにサインインしたりできる。「Bitwarden」は2023年にブラウザー拡張機能、2024年にモバイルアプリでパスキーに対応しており、パスキーをパスワードと同じ保管庫に保存し、複数の端末で同期できる。\n\nそしてさらに今回の統合により、Windows 11とmacOSの標準画面からも「Bitwarden」の保管庫を使ってパスキーを保存・利用できるようになった。利用するには「Bitwarden」のアカウントとデスクトップアプリが必要。","importance":5},{"title":"Apple Watchの新機能「Siri Recap」を24時間オンにしてわかった便利さと危うさ | ライフハッカー・ジャパン","url":"https://www.lifehacker.jp/article/2611-apple-watch-new-siri-recap-feature/","source":"Hatena","published_at":"2026-11-26 05:34","genre":"other","genre_label":"総合・その他IT","headline":"Appleが9月に発表した、Siriによる会話要約機能「Siri Recap」が、ついに開発者向けベータ版で公開されました。","summary":"Appleが9月に発表した、Siriによる会話要約機能「Siri Recap」が、ついに開発者向けベータ版で公開されました。ここ24時間ほど機能をオンにしたまま過ごしてみたのですが、想像以上に衝撃的なものでした。\n\nApple Watchの新機能Siri Recapを24時間試した体験談。会話を自動要約する便利さとプライバシーに関する危うさを解説します。","importance":5},{"title":"自作VMのボットが戦う、Raspberry Pi Zero 2 Wのペイント合戦専用機を作りました","url":"https://zenn.dev/pcfan/articles/a5455f166e02c3","source":"Zenn","published_at":"2026-11-26 13:52","genre":"mobile","genre_label":"モバイル・ガジェット・個人開発","headline":"Raspberry Pi Zero 2 Wで動く自作VMペイント合戦専用機の制作","summary":"Raspberry Pi Zero 2 Wと10インチモニターを組み合わせ、自作の仮想マシン（VM）上でボット同士が盤面を塗り合う「ペイント合戦」を観戦できる専用機を制作した事例。GUI環境では動作が重い機材に対し、C言語で記述した軽量なゲームホストを動かすことで実用的な用途を見出しています。\n\nボットのプログラムはMacで作成し、実機へ持ち寄って対戦させる仕組みです。ボットの応答エラーやタイムアウトを可視化する工夫も施されており、限られたリソースの中でいかに効率的にプログラムを動かし、対戦を楽しむかという個人開発の醍醐味が詰まったプロジェクトです。","importance":4},{"title":"人の判断を切り出すAgent Skillsの設計（v7.0.2）","url":"https://zenn.dev/jayt/articles/agent-skills-judgment-extraction","source":"Zenn","published_at":"2026-11-26 11:05","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"AIエージェントの一般論化を防ぎ、個人の視点と判断を共有可能にするAgent Skills設計","summary":"AIエージェントが一般論に偏る課題に対し、人の判断手順を切り出して「Agent Skills」として実装する設計手法を提案している。この手法では、誰でも同じ答えになる「一般的な知識」と、人によって分かれる「中核判断」を分離し、後者を個別に差し替えて共有可能にすることで、集合知としての成長を目指す。\n\nClaude Code等での利用を想定し、作成者の視点を残したままスキルを共有・更新し続けるための具体的な章立てや判断ファイルの構成を定義した。AIに作業を丸投げするだけでなく、人の知見を反映し続けるための実践的なフレームワークである。","importance":7},{"title":"パスワード管理「1Password」でデータ流出、一部顧客の氏名やメールアドレスなど／パスワード保管庫やその鍵は無事、招待・復旧メールを装ったフィッシングに注意","url":"https://forest.watch.impress.co.jp/docs/news/2159320.html","source":"Hatena","published_at":"2026-11-26 08:11","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"1Passwordでバックエンド不正アクセス発生、顧客の氏名・メールアドレスが流出","summary":"パスワード管理サービス「1Password」のバックエンドシステムが不正アクセスを受け、一部顧客の氏名やメールアドレスなどのメタデータが流出した。従業員のGitHubアカウントが攻撃され、ソースコードへのアクセスと管理データのダウンロードが行われた。\n\n幸いにも、ユーザーのパスワード保管庫（Vault）や暗号化鍵への影響はなく、顧客の秘密情報は安全であると発表された。同社は侵入経路を遮断し、専門家による検証を実施中。ユーザー側でのパスワード変更は不要だが、招待や復旧メールを装ったフィッシング詐欺には十分な警戒が必要である。","importance":9},{"title":"Mac の初期セットアップの個人メモ","url":"https://zenn.dev/su3_hokkaido/articles/2026-11-26_prep_nitial_setup_laptop","source":"Zenn","published_at":"2026-11-26 13:08","genre":"other","genre_label":"総合・その他IT","headline":"エンジニア向けMac初期セットアップの個人メモとツール選定","summary":"PC買い替え時に役立つMacの初期セットアップ手順と、推奨ツールをまとめた個人メモ。Homebrewによるパッケージ管理、GitHubのSSH設定、AWS CLIやDocker Desktop、Kotlin/Flutter開発環境の構築など、業務で頻繁に使用するツール群が網羅されています。\n\n特にDocker DesktopとOrbStackの使い分けや、仕事用・個人用GitHubアカウントの切り分け設定など、実務に即した知見が共有されています。今後、設定をBrewfileで管理するなどの効率化も検討されており、エンジニアの環境構築の参考になる内容です。","importance":4},{"title":"1 行のロックファイルで Alembic の head の分岐を防ぐ","url":"https://zenn.dev/finatext/articles/alembic-migration-head-lock","source":"Zenn","published_at":"2026-11-26 18:25","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"こんにちは、ナウキャストで LLM エンジニアをしている Ryotaro です。","summary":"こんにちは、ナウキャストで LLM エンジニアをしている Ryotaro です。Alembic で複数人開発をしていて、main に merge した直後の migration がこう落ちたこと、ありませんか？\n\n以前、SQLAlchemy モデルから DBML（ER 図）を CI で自動生成する仕組みを紹介しました。https://zenn.dev/finatext/articles/auto-generate-dbml-from-orm この CI では alembic check でモデルとマイグレーションの整合性を見ていたのですが、 PR の CI はすべて成功しているのに、main に merge した後に migration が失敗する 事故が 2 日連続で発生しました。\n\n前提として、私たちのチームは GitHub の「Require branches to be up to date before merging」の必須化（以下、up to date 必須）を off にしています。","importance":5},{"title":"1Passwordへの不正アクセスについてまとめてみた - piyolog","url":"https://piyolog.hatenadiary.jp/entry/2026/11/26/153937","source":"Hatena","published_at":"2026-11-26 15:51","genre":"web","genre_label":"Web開発・言語","headline":"2026年11月25日、1Passwordは従業員のGitHubアカウントへの不正アクセスにより、バックエンドのシステムから一部の顧客…","summary":"2026年11月25日、1Passwordは従業員のGitHubアカウントへの不正アクセスにより、バックエンドのシステムから一部の顧客のアカウント情報が取得されたと公表しました。ここでは関連する情報をまとめます。\n\n公表後も顧客への通知を継続 1Passwordは11月19日、従業員の業務用GitHubアカウントに攻撃者がアクセスした兆候を受け、調査を開始。6日後の11月25日(現地時間)、ブログと公式Xで公表(出典: 1, 2)。\n\n運営会社は利用者を数百万人、約20万社としている(出典: 9)。公式Xは利用者への返信で、顧客へのメール通知を継続中と説明し、他から先に知った利用者に謝罪した(出典: 3)。\n\nさらに影響を受けた顧客に通知中で、一部にはすでに送信済みと説明した(出典: 7)。*1 影響の全容は独立したサイバーセキュリティ専門家の支援を受けて調査中で、確認でき次第続報するとしている(出典: 5)。","importance":5},{"title":"MetaのAIエージェント Museを1ヶ月使い倒してわかったこと | kinoko dev","url":"https://dev.sin5d.com/meta-muse-usage","source":"Hatena","published_at":"2026-11-26 07:53","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"MetaのAIエージェント「Muse」を1ヶ月使い倒してわかった機能と強み","summary":"Metaが提供するAIエージェント「Muse」を1ヶ月間利用した体験記。Museは、AIアシスタント、コーディング支援、画像・動画生成、動的コンテンツ作成など多機能なクラウドエージェントである。\n\n他サービスと比較した際の強みとして、InstagramやThreadsからの強力な情報収集機能と、SQLを用いた動的ページを公開できる「スペース」機能が挙げられる。メインチャットとサイドチャットを使い分けることで、コンテキストを整理しながら効率的にタスクをこなせる点が特徴的である。","importance":7},{"title":"「安全な経路」の判定から学ぶ、Unix ソケット経由の Cloud SQL 認証エラー","url":"https://zenn.dev/rescuenow/articles/0e7f5fc4e46be3","source":"Zenn","published_at":"2026-11-26 14:08","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"Unixソケット経由のCloud SQL認証エラーの原因と解決策","summary":"Cloud RunからCloud SQLへUnixソケット経由で接続する際、MySQL 8.4以降の認証プラグイン「caching_sha2_password」を使用すると認証エラーが発生する問題について解説。原因は、Unixソケット接続が「安全な経路」とみなされる一方で、Auth Proxyの既知の不具合により認証処理が正しく行われない点にあります。\n\n解決策として、Unixソケットの使用を避け、サイドカーのProxyへのTCP接続やCloud SQL言語コネクタへの切り替えが推奨されます。本記事では、MySQLの接続方式（Unixソケット・TCP・TLS）の基礎と、認証プラグインが経路に応じてパスワードの送信方法を切り替える仕組みを改めて整理しています。","importance":7},{"title":"自動運転の予測軌跡の可視化動画を誰でも高速に作れるようにする","url":"https://zenn.dev/turing_motors/articles/cbf9872ca90166","source":"Zenn","published_at":"2026-11-26 17:00","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"MLOps チーム の @stu3dio_graph です。","summary":"MLOps チーム の @stu3dio_graph です。チューリングでは，自動運転モデルが予測した軌跡を，車幅の半透明の帯として走行映像に重ねた動画を作っています。\n\nモデル開発での介入の振り返りや，広報・事業開発による社外への発信に使われています。この動画は，もともと CTO の山口さんが書いたスクリプトで作るものでした。\n\n手元でスクリプトを順番に実行しなければならず，AWS の認証情報と GPU のある環境も必要でした。このたび，このスクリプトを AWS Step Functions と AWS Batch に載せ，社内の走行データビューアからリクエストすると Slack に動画が届く仕組みを作りました。\n\nこの仕組みを作る中でいくつかの高速化にも取り組みました。帯を映像に重ねる方法は，以下の記事で山口さんが解説しています。\n\n本記事は，その 6.4〜6.5 節で触れられている動画生成の裏側にあたります。","importance":5},{"title":"週刊Cloudflare - 2026/11/22週","url":"https://zenn.dev/gemcook/articles/weekly-cloudflare_2026_1115-1121","source":"Zenn","published_at":"2026-11-26 14:00","genre":"web","genre_label":"Web開発・言語","headline":"Cloudflareの最新アップデートまとめ（2026年11月22日週）","summary":"Cloudflareの直近のアップデート情報を網羅的に紹介。主な変更点として、Build Output v1形式の採用によるツール連携の強化、ローカル環境でのWorkflows起動対応、Viteプロジェクトの直接実行サポートなどが挙げられます。\n\nまた、Wranglerのファイル監視機能の改善や、Containerのデフォルトロールアウトステップの最適化など、開発者体験を向上させる細かな修正も実施されています。これらの変更は、Cloudflare WorkersやPagesを利用する開発者にとって、ビルドやデプロイの効率化に直結する内容です。","importance":5},{"title":"NVIDIAが高性能GPUを「拠点はアメリカにあるが実態は中国企業に支配される子会社」に優先販売していた","url":"https://gigazine.net/news/20261126-nvidia-china-company/","source":"Hatena","published_at":"2026-11-26 18:52","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"NVIDIAの最先端高性能GPUはアメリカから中国への輸出が規制されています。","summary":"回線や台数を整理し見直せる部分は全て見直しましたが、やはりまだ危険水域です。・ これまでGIGAZINEを支援してくれたメンバーのリスト NVIDIAの最先端高性能GPUはアメリカから中国への輸出が規制されています。\n\nところが、NVIDIAが優先パートナーとして扱っている2つのアメリカ企業が中国企業と深いつながりを持っていることがCBSによって報じられました。2 California companies are buying Nvidia's most advanced chips.\n\nThose companies are actually Chinese-owned, a CBS News investigation reveals. - CBS News https://www.cbsnews.com/news/nvidia-china-ai-chips-computing-sales/ 問題の企業はいずれもカリフォルニアに拠点を構えている「 RiCloud AI 」と「 Aivres 」です。","importance":5},{"title":"アディーレ法律事務所 不正アクセスで個人情報漏えい | NHKニュース","url":"https://news.web.nhk/newsweb/na/nd-20261126de81692","source":"Hatena","published_at":"2026-11-26 13:56","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"アディーレ法律事務所、委託先サーバーへの不正アクセスで個人情報漏えい","summary":"アディーレ法律事務所は、ウェブサイトのメール配信サービスを委託している会社のサーバーが外部から不正アクセスを受け、約1800件の個人情報が漏えいしたと発表しました。漏えいした情報には氏名や問い合わせ内容などが含まれています。\n\n本件は、自社だけでなく委託先のセキュリティ管理体制が重要であることを改めて浮き彫りにしました。企業はサプライチェーン全体でのセキュリティ対策を再確認し、委託先を含めた情報管理の徹底が求められます。","importance":7},{"title":"理解をあきらめないAI駆動開発 ——開発の流れに「理解の工程」を織り込む6つの実践｜株式会社アシュアード","url":"https://note.com/assuredjp/n/n6ec5f6544e0c","source":"Hatena","published_at":"2026-11-26 15:59","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"こんにちは。","summary":"こんにちは。Assuredクラウド評価事業部でエンジニアリングマネージャーを務めている田所です。\n\nこの記事では、2026年11月26日に私がアーキテクチャカンファレンス2026に登壇させていただいた内容をご紹介します。アーキテクチャカンファレンスとは、ソフトウェアアーキテクチャについての技術カンファレンスです。\n\n今年は「事業を継続し進化するアーキテクチャの意思決定・技術・組織」をテーマに、各スピーカーの知見や事例の共有が行われました。私はそこで、AIが書いたコードを人がどう理解し続けるかという話題を中心に発表しました。\n\nAIが書いたPRを、自分の言葉で説明できますか まず最初に、二つ質問をさせてください。一つ目は「みなさまはこの一か月で、AIが書いたPRを承認したことはありますか」。\n\n多くの方が、あると答えるのではないでしょうか。では、二つ目は「そのPRがなぜその設計になっているかを、自分の言葉で説明できますか」。\n\nこちらは、少し考え込む方もいらっしゃると思います。実は私自身も、ここで詰まる瞬間があります。","importance":5},{"title":"【Adaptive Dark Mode】近い将来、Safari が未対応サイトを自動でダークテーマにするらしい","url":"https://zenn.dev/chot/articles/d7ebf61cc4391c","source":"Zenn","published_at":"2026-11-26 11:49","genre":"web","genre_label":"Web開発・言語","headline":"SafariのAdaptive Dark Modeによる自動ダークテーマ化の挙動検証","summary":"Safari 27.3 betaで導入された、ダークモード未対応サイトを自動的に暗い見た目にする「Adaptive Dark Mode」の挙動を検証。color-schemeメタタグの指定有無によって、Safariがどのように色を変換するかが詳細に解説されています。\n\n結論として、開発者が意図しない見た目になるのを防ぐには、color-schemeの適切な指定が不可欠です。ライトモードのみを強制したい場合は「only」キーワードが有効であり、ダークモード対応サイトを作る場合はlight-dark関数を用いたスタイル定義が推奨されます。ブラウザ側の自動変換機能に対するWeb制作者側の制御方法を整理した記事です。","importance":6},{"title":"Agetor(ver1.2.2)でCursorがInvalid paramを返す問題と解決策、ACPのあれこれ","url":"https://zenn.dev/miyama_labs/articles/b8846f79ea7246","source":"Zenn","published_at":"2026-11-26 17:19","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"AgetorというmacOS用のオーケストレータがあります。","summary":"AgetorというmacOS用のオーケストレータがあります。このアプリでは種々のAIを組み合わせて使用することができます。\n\nたとえばGPTで実装、Claudeで監査、5タスク分を実装と監査を繰り返したのち、Antigravityで結果報告、みたいなことができるんですね。Cursorも対応しています。\n\n利用量に非常に優れるモデル「Composer2.5」もあるためAgetorで長期ランニングさせたいのですが、記事タイトルの通りCursorを使ってTaskを実行するとInvalid paramsとだけ返ってきて実行できません。この原因の調査と解決策についてまとめました。\n\nついでにオーケストレータを構成するACPについても理解していけたらと思います。なお、今回の検証環境は以下の通りです。\n\nAgetor：v1.2.2 Cursor CLI：2026.11.22-e9042b2 OS：macOS（Apple Silicon） 検証日：2026年11月26日 CursorCLIの通常実行時とACP通信時でモデルIDの指定形式が異なることが原因。","importance":5},{"title":"作って終わりにしない Claude Code 共通プラグイン運用の軌跡 〜AIで利用状況を分析・スキル棚卸し〜","url":"https://zenn.dev/canly/articles/00-pub-08-claude-code-plugin-operations","source":"Zenn","published_at":"2026-11-26 11:29","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"Claude Code共通プラグインの運用をAIで自動化し、利用状況分析とスキルの棚卸しを実現","summary":"SREチームがインフラ運用を支援するClaude Code用共通プラグイン「sre-plugin」を開発し、組織全体に配布している。しかし、スキルが増えるにつれてメンテナンスが課題となったため、利用状況をBigQueryに蓄積し、AI（Jev）を用いて未使用スキルの棚卸しや整理を自動化する仕組みを構築した。\n\nOpenTelemetryで取得した利用ログを基に、10週間利用がないスキルを自動判定し、削除やスコープ変更をIssue起票まで自動化している。これにより、開発者が自律的にインフラ運用を行える環境を維持しつつ、管理コストを最小化することに成功した。","importance":8},{"title":"個人の目標設定に悩んでいたら、アジャイルが言葉を定義し直すきっかけをくれた話","url":"https://zenn.dev/yoshipon_tech/articles/a0e13c3dbd2f7d","source":"Zenn","published_at":"2026-11-26 14:35","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"こちらのイベントで5分LTに登壇したのですが、スライドでは省略したことがかなりあったので記事にしました。","summary":"こちらのイベントで5分LTに登壇したのですが、スライドでは省略したことがかなりあったので記事にしました。また貴重なイベントに参加させていただきありがとうございましたmm https://yokohama-agile.connpass.com/event/408283/ https://speakerdeck.com/yoshipon_tech/1126-yokohama-agile 普段、業務ではウォーターフォールで開発をしていますが、一時期スクラム開発を実施していた経験もあります。\n\nそのときに触れたアジャイルという考え方が素晴らしく好きなんですが 今回、より一段深くアジャイルを理解するきっかけになったのでどうかお付き合いいただけると嬉しいです 初めに言ってしまうとこの記事で伝えたいことは以下です。抽象的な言葉は、自分の言葉に定義してから使う 目標設定しても手段が目的になりがち みなさんは、目標設定や自己研鑽をするとき、どんな目標を立てていますか。\n\n私は以下のような目標を立てることが多いです。","importance":5},{"title":"ぼくはnullが嫌いだ","url":"https://zenn.dev/okaponta/articles/ea88f9ed0c5be5","source":"Zenn","published_at":"2026-11-26 10:36","genre":"web","genre_label":"Web開発・言語","headline":"null参照がもたらす「10億ドルの過ち」の歴史と、現代のプログラミングにおける弊害","summary":"null参照がなぜ多くのエンジニアに嫌悪されるのか、その歴史的背景と技術的弊害を考察した記事。nullは1965年にTony Hoareによって導入されたが、後に「10億ドルの過ち」と称されるほど、多くのバグや脆弱性の温床となってきた。\n\nC言語の0番地問題からJavaのNullPointerException、DBの3値論理まで、言語や環境ごとのnullの扱いの違いを解説。nullが本来の「値がない」という意味を超えて、業務的な意味（新規登録や検索結果0件など）を帯びることでコードの可読性を下げている現状を指摘し、より安全な代替手段の重要性を説いている。","importance":6},{"title":"「知らない〝私〟が血を流し罵倒」中国AI短編ドラマで「顔盗用」急増　俳優は泣き寝入り","url":"https://www.sankei.com/article/20261126-SZTQ2RJW5ZKU3GJ4GQKJAORUPE/","source":"Hatena","published_at":"2026-11-26 17:06","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"インタビューに答えるモデルの七海さん。","summary":"インタビューに答えるモデルの七海さん。奥はモニターに映し出された自身の顔とうり二つのAI俳優＝8月、中国浙江省杭州市（共同）人工知能（AI）を活用した短編ドラマが急増する中国で、AIで作られた「俳優」に顔や声を盗用されたと実在の俳優が訴えるトラブルが多発している。\n\n短編ドラマは低コストと制作期間の短さが強みだが、規制が追い付かず不利益を被った側が泣き寝入りするケースも。対策を急ぐ中国政府は管理強化に乗り出す。\n\nうり二つのAI俳優が「出演」 「知らない〝私〟がそこにいた」 中国や日本でモデルとして活躍する七海さん（27）は今年3月末、ファンからSNSを通じてAI短編ドラマに「出演している」というメッセージを受け取った。動画を確認すると、あざだらけの顔で唇から血を流しながら相手を罵倒するAI俳優と、自身の顔がうり二つだった。\n\n過激な役柄によりイメージが悪化したとして、3カ月にわたり仕事の依頼が途絶えたと話す。中国でスマートフォン向け短編ドラマは「微短劇」と呼ばれ、1話当たり1～3分程度で若者を中心に人気を博す。","importance":5},{"title":"LLMが動くだけのOS。24KBの全アセンブリ製Qwen3-0.6B専用","url":"https://pc.watch.impress.co.jp/docs/news/2159364.html","source":"Hatena","published_at":"2026-11-26 11:03","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"OS機能を極限まで削ぎ落とした24KBの全アセンブリ製LLM専用OSが登場","summary":"Alexey Fateev氏が、Linux等のランタイムに一切依存せず、純粋なx86-64アセンブリのみで記述されたLLM専用OS「asm-llm-os.elf」を公開した。カーネルサイズは約24KBで、Qwen3-0.6Bモデルを直接実行できる。\n\nベアメタル動作により、起動からプロンプト表示まで100ms以下という圧倒的な高速化を実現。ディスクドライバを排除し、すべてRAM上で動作させる設計により、既存のLinux環境でllama.cppを動かすよりも30％以上高い推論速度を記録した。OSの機能をLLM実行に特化させることで、パフォーマンスを極限まで引き出した事例である。","importance":8},{"title":"日産が中国製PHVを「逆輸入」　27年度、先進電動車を日本で補完 - 日本経済新聞","url":"https://www.nikkei.com/article/DGXZQOUC1689U0W6A111C2000000/","source":"Hatena","published_at":"2026-11-26 13:11","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"日産自動車が中国製PHVを日本へ逆輸入する方針を検討","summary":"日産自動車が、中国の合弁会社で生産しているプラグインハイブリッド車（PHV）を日本に輸入・販売する方向で調整していることが判明しました。開発スピードとコスト競争力に優れる中国を輸出拠点として活用し、国内市場の電動車ラインナップを補完する狙いがあります。\n\n日本メーカーが中国生産車を日本へ逆輸入するのはホンダの事例などがありますが、日産としては初の試みとなります。EV・PHV市場での競争が激化する中、グローバルな生産体制の最適化と市場ニーズへの迅速な対応が求められています。","importance":6},{"title":"fabric.js v6 で作るペイントツール：標準にない undo/redo と矢印の実装","url":"https://zenn.dev/taylor/articles/2f43a6189e5ddf","source":"Zenn","published_at":"2026-11-26 13:22","genre":"web","genre_label":"Web開発・言語","headline":"fabric.js v6を用いたペイントツールでのundo/redoと矢印実装","summary":"fabric.js v6とVue 3を使用してペイントツールを開発する際、標準機能にはない「undo/redo」と「矢印描画」を自作した知見を共有。undo/redoはキャンバス全体をJSONで保存・復元する方式を採用し、写真データの重複を避けるためにID管理を導入することで効率化を図っています。\n\n矢印の実装では、Lineクラスを継承して矢じりを描画し、両端にハンドルを配置することで直感的な操作を実現しました。loadFromJSON使用時の設定消失問題など、ライブラリ特有のハマりどころに対する解決策も提示されており、実用的なツール開発の参考になります。","importance":5},{"title":"24KBの「LLM専用OS」が登場　全てアセンブリでLinuxを排し、llama.cppより最大54%高速 | テクノエッジ TechnoEdge","url":"https://www.techno-edge.net/article/2026/11/26/5824.html","source":"Hatena","published_at":"2026-11-26 15:02","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"開発者のAlexey Fateev氏は11月26日（日本時間）、言語モデル「Qwen3-0.6B」を動かすためだけのOS「asm-ll…","summary":"開発者のAlexey Fateev氏は11月26日（日本時間）、言語モデル「Qwen3-0.6B」を動かすためだけのOS「asm-llm-os.elf」をXで発表しました。PCや仮想マシンを起動すると、そのままチャット画面が立ち上がります。\n\nOS本体のサイズは2万4252バイト（約24KB）です。コードはGitHubで公開しており、ライセンスはMITです。\n\nこのOSは、LinuxもWindowsも使いません。Fateev氏はブートからドライバ、推論エンジンまでのすべてをx86-64のアセンブリ言語（NASM）で記述しました。\n\nCやRustのコードは含まず、libcなどのランタイムにも依存しません。サポートするドライバは、シリアルポート（COM1）、80×25文字のVGAテキスト画面、PS/2キーボード、時間計測、ACPIによる電源オフだけです。\n\nディスクのドライバは持たず、OSとモデルをすべてメモリ上に置きます。このため、ディスク容量0GBの仮想マシンでも起動します。\n\n起動は高速です。","importance":5},{"title":"Security Hub の SBOM インベントリと DevOps Agent で、脆弱性の検出から影響範囲の調査までを自動化してみた","url":"https://zenn.dev/aws_japan/articles/securityhub-sbom-devops-agent","source":"Zenn","published_at":"2026-11-26 10:28","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"Security HubのSBOMインベントリとDevOps Agentで脆弱性調査を自動化","summary":"Amazon Inspectorが生成するSBOM（ソフトウェア部品表）をSecurity Hubで一元管理し、脆弱性検出から影響範囲の調査までを自動化する仕組みを構築した。従来は手動で行っていた「どのリソースに脆弱なパッケージが含まれているか」の特定を、SBOMインベントリ機能で即座に検索可能にした。\n\nEventBridgeとLambdaを組み合わせ、Criticalな脆弱性が検出された際に、DevOps Agentが自動的に影響範囲を調査し、Slackへ報告するフローを実現。これにより、脆弱性対応の初動を大幅に迅速化し、セキュリティ運用負荷を軽減できる。","importance":8},{"title":"ニート寸前の女子大生→“ChatGPTを使い倒して”未経験で100日連続アプリ開発→国際学会で発表…年収2000万円・25歳経営者の“生成AIで激変した人生” | 文春オンライン","url":"https://bunshun.jp/articles/-/93682","source":"Hatena","published_at":"2026-11-26 10:24","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"GPA0.9の落ちこぼれから生成AI活用で年収2000万円へ、25歳経営者の人生激変体験","summary":"大学時代に落第寸前だった大塚あみ氏が、生成AIと出会い、未経験から100日連続でアプリ開発を行うことで人生を激変させた経緯を紹介。AIを「パシリ」として使い倒すことで、実働2.5時間で年収2000万円を実現し、現在は経営者として活動している。\n\nAIを単なるツールではなく、業務を丸投げするパートナーとして活用する独自のスタイルを確立。自己啓発本を読んでも変われなかった過去から、AIという強力なレバレッジを得て「何者か」になるまでのプロセスは、現代のエンジニアやクリエイターにとって大きな示唆を与えている。","importance":5},{"title":"CodexとPythonを学ぶ第15回：FastAPIの認証なし・有効・期限切れを401と更新後の状態で確かめる","url":"https://zenn.dev/yushiyamamoto/articles/codex-python-learning-15","source":"Zenn","published_at":"2026-11-26 11:36","genre":"web","genre_label":"Web開発・言語","headline":"FastAPIの認証状態（なし・有効・期限切れ）によるAPI挙動の確認","summary":"FastAPIを用いたAPI開発において、認証情報の有無や有効期限がAPIの応答（401 Unauthorizedなど）に与える影響を検証。認証なし、有効なトークン、期限切れトークンの3パターンでPATCHリクエストを送り、状態変化の有無を確認しました。\n\n認証なしや期限切れの場合は401が返り、タスクの状態は更新されないことが確認されました。また、RFC 6750に基づき、認証情報がない場合と無効なトークンの場合でエラー応答を区別する実装の重要性にも触れています。FastAPIのHTTPBearerを用いた認証実装の基礎を学ぶための実践的な学習記録です。","importance":5},{"title":"CLAUDE.md / AGENTS.md を Claude Codeに継続的に書かせる","url":"https://anond.hatelabo.jp/20261126144022","source":"Hatena","published_at":"2026-11-26 14:40","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"~/.claude/CLAUDE.md のようなグローバルの設定ファイルについて、自分好みの出力をさせるようにしておくことは、よいこと…","summary":"~/.claude/CLAUDE.md のようなグローバルの設定ファイルについて、自分好みの出力をさせるようにしておくことは、よいことだと思う。一方、モデルの性能、ハーネスの性能は日々かわっていく。\n\nある時には意味のある記載だったことも、ある時では有害になっていることもある。このため「CLAUDE. md になにを書いておくべきか」というのは、あ まり 意味 のない ことな のではな いか 。\n\nということで考えてみたのが 「こういう タスク にたいしてこういう出力があるとよく、 チャット の レスポンス はこれが望ましい」というセットを一つ用意しておく。そしてそれにたいして 「 グローバル な CLAUDE. md をなるべく シンプル に、かつなるべく 普遍的 な書き方にしつつ、例のような出力になるように調整してください。\n\nそのために、 CLAUDE. md を実際に書き換えながら、 claude -p で実行していってください。」という指示をする。","importance":5},{"title":"Snowflake AIMのデスクトップアプリでTeradataからの移行を検証してみた","url":"https://zenn.dev/snowflakejp/articles/snowflake-aim-app-teradata","source":"Zenn","published_at":"2026-11-26 13:07","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"Snowflake AIMデスクトップアプリによるTeradata移行検証","summary":"Snowflake AIM for Data Warehousesアプリを使用し、TeradataからSnowflakeへのデータ基盤移行を検証したレポート。テーブル、ビュー、ストアドプロシージャなど26オブジェクトの移行を、コード変換からテストまでわずか2時間で完了させた実績を紹介しています。\n\n対話型のGUIにより、接続設定や移行工程の管理が容易に行える点が特徴です。SnowConvertによる自動変換をベースにしつつ、AIが残課題の修正を支援する仕組みにより、移行作業の効率が大幅に向上しています。本番環境への適用には最新の対応状況確認が必要ですが、移行の自動化に向けた強力なツールであることが示されました。","importance":7},{"title":"RustでFiberを用いたJob Systemを実装したらReleaseビルドでバグが発生した","url":"https://zenn.dev/otinpan/articles/082f6178eb1472","source":"Zenn","published_at":"2026-11-25 19:24","genre":"web","genre_label":"Web開発・言語","headline":"現在、RustとVulkanを用いた自作ゲームエンジン KaniVolcanoEngine を開発しています。","summary":"現在、RustとVulkanを用いた自作ゲームエンジン KaniVolcanoEngine を開発しています。KaniVolcanoEngineでは、Jobの並列実行を実現するために、WindowsのFiber APIを用いたJob Systemを実装しています。\n\n今回、ReleaseビルドでJob Systemを動作させたところ、assertによるpanicや、RefCellの借用エラーが発生しました。原因を調査する過程で、Fiberのスレッド間移動と、コンパイラによるTLS（Thread Local Storage）アクセスの最適化が関係している可能性が浮上しました。\n\n本記事では、Job Systemの構成、発生したバグ、およびコンパイラ最適化とFiberの関係について説明します。KaniVolcanoEngineのJob Systemでは、 OSスレッドであるWorkerと、 Jobの実行単位であるFiberを分離して管理しています。\n\n構造を簡略化すると以下のようになります。","importance":5},{"title":"「起こした」を「試した」と数えたら、取り込みに失敗したモデルの自動試行が 7 日待ちに入った","url":"https://zenn.dev/tarowhitey/articles/9249f4bd688269","source":"Zenn","published_at":"2026-11-26 11:22","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"ローカルLLM自動試行システムで「起動失敗」を「試行済み」と誤判定するバグを修正","summary":"ローカルLLMの自動試行システムにおいて、モデルの取り込み（pull）に失敗した際、起動を試みた時点で「試行済み」として記録していたため、再試行が7日間停止する問題が発生した。このバグにより、失敗したモデルが二度と選ばれない状態に陥っていた。\n\n修正として、失敗時の出力を保持して再試行を可能にし、試行記録と結果記録を突き合わせることで、失敗した場合は「試行済み」とみなさないロジックに変更した。これにより、取り込み失敗時に無駄な待ち時間が発生せず、効率的なモデル検証が可能となった。","importance":6},{"title":"Amazon Bedrockの存在意義がようやくわかったのに、新参者だと使えない話 - Sweet Escape","url":"https://www.keisuke69.net/entry/2026/11/26/085248","source":"Hatena","published_at":"2026-11-26 09:25","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"エンタープライズ向けSaaS開発でAmazon Bedrockを採用したセキュリティ上の理由","summary":"これまでAmazon Bedrockに価値を感じていなかった開発者が、エンタープライズ向けHR SaaSの開発においてBedrockを採用した経緯を解説。高いセキュリティ水準が求められる環境において、外部APIを直接利用する場合の説明コストや統制の難しさが課題となった。\n\nAWS内で完結させることで、データレジデンシーやアクセス制御、監査ログの管理を統合し、説明責任を大幅に軽減できる点が採用の決め手となった。クラウドをまたがない構成は、コンプライアンス対応が必須となる大規模案件において、運用負荷を抑えるための現実的な解である。","importance":7},{"title":"URPの_CameraDepthAttachmentと_CameraDepthTextureの違い","url":"https://zenn.dev/romgameclient/articles/954bbd6294522e","source":"Zenn","published_at":"2026-11-25 19:00","genre":"web","genre_label":"Web開発・言語","headline":"URPのFrame Debuggerを見ると、一定条件で _CameraDepthAttachment と _CameraDepthT…","summary":"URPのFrame Debuggerを見ると、一定条件で _CameraDepthAttachment と _CameraDepthTexture が現れます。同じ画面の深度を扱うこの2つには、どのような違いがあるのでしょうか。\n\nDepthAttachmentは描画中の深度テストと書き込みに使います。DepthTextureは、シェーダーが深度を読み取るためのリソースです。\n\nFrame DebuggerとMemory Profilerで両者を確認し、URP 17.6.0でDepthTextureがどのように用意されるかを追います。さらにAndroid実機で、描画中のDepthAttachmentを水面シェーダーから直接読むと何が起きるかを比べます。\n\nUnity 6000.6.5f1 Universal Render Pipeline 17.6.0 水面の比較にはAndroid実機も使用しました。画面に表示されたGraphics APIはOpenGLES3、GPUはAdreno (TM) 618です。","importance":5},{"title":"MCPに新機能「Skills over MCP」登場。ツールとの接続だけでなく使い方のスキルもMCP経由で提供","url":"https://www.publickey1.jp/blog/26/mcpskills_over_mcpmcp.html","source":"Hatena","published_at":"2026-11-26 00:09","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"MCPに新機能「Skills over MCP」登場。","summary":"MCPに新機能「Skills over MCP」登場。ツールとの接続だけでなく使い方のスキルもMCP経由で提供 AIエージェントと外部ツールを接続する業界標準となっているMCP（Model Context Protocol）に、新機能として「Skills over MCP」がβ版として追加されました。\n\nAIエージェントと外部ツールを接続する業界標準となっているMCP（Model Context Protocol）に、新機能として「 Skills over MCP 」が β版として追加されました 。Skills over MCPを利用することで、AIエージェントはMCP経由でMCPサーバからつねに最新のスキルを取得できるようになります。\n\nまた、必要なときだけスキルを読み込めるためコンテキストの節約にもなります。下図はMCPの開発を主導するAnthropicのブログ「 MCP servers can now ship skills, run tasks, and more with Claude 」からの引用です。","importance":5},{"title":"電力需要の予測はどれくらい当たる？ ― OCCTO公開データで作る予実パイプライン（BigQuery × dbt × Terraform）","url":"https://zenn.dev/shimodata/articles/kyushu-power-forecast-pipeline","source":"Zenn","published_at":"2026-11-26 16:37","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"電力広域的運営推進機関（OCCTO）が公表している 電力需要の「2日前の予測」と「当日の最終値」 を毎朝自動で取り込み、予測がどれだけ…","summary":"電力広域的運営推進機関（OCCTO）が公表している 電力需要の「2日前の予測」と「当日の最終値」 を毎朝自動で取り込み、予測がどれだけ当たったか（予実）を分析できるデータ基盤を Google Cloud 上に作りました。可視化は Looker Studio です。\n\nダッシュボードで答えたい問いは次の3つです。九州の電力需要の予測は、どれくらい当たっているか ダッシュボード: https://datastudio.google.com/reporting/4cea5ddc-0221-43f4-b9b4-54d9767ee05c GitHub: https://github.com/oranegewimps/kyushu-power-pipeline 経営管理の仕事で、予算と実績の差を分析する「予実管理」を担当してきました。\n\n予実管理では、ずれた数字そのものより「なぜずれたのか」「次はどう読むか」を説明することが求められます。同じ見方を、誰でも手に入る公開データで再現したいと考えました。","importance":5},{"title":"日本語サイトで指定しておきたいCSS 2026年版 - Qiita","url":"https://qiita.com/tofu_frontend/items/6a1bb7d80a58736eef0e","source":"Hatena","published_at":"2026-11-23 19:33","genre":"web","genre_label":"Web開発・言語","headline":"text-autospace は3エンジンすべてに実装が入っていますが、一部の値で実装差が残っており、web-features の B…","summary":"text-autospace は3エンジンすべてに実装が入っていますが、一部の値で実装差が残っており、web-features の Baseline 判定はまだ Limited です。ただしここに挙げたものは全部、非対応ブラウザでは無視されるだけです。\n\nレイアウトが壊れることはないので、プログレッシブエンハンスメントとして入れて問題ありません。「ブラウザがいい感じに日本語の組版をきれいにしてくれる」と思っている人も少なくない 結論から書くと、 自動ではやってくれません 。\n\n和欧間のスペースも、約物の詰めも、 明示的に指定しないと効きません 。これは仕様が二転三転した結果そうなっています。\n\nこの記事では、2026年11月時点で日本語サイトに指定する価値があるCSSを、対応状況と一緒に整理します。最後にそのままコピーできるスニペットも置きます。\n\n先に全体像を出しておきます。1. text-autospace — 和欧間のスペース 「日本語とabcの間」に八分アキ（全角の1/8幅）を自動で挿入するプロパティです。","importance":5},{"title":"Skills over MCP：MCPサーバーからスキルを配れるようになりました","url":"https://zenn.dev/shogo_h/articles/skills-over-mcp-overview","source":"Zenn","published_at":"2026-11-25 23:16","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"Skills over MCPは、エージェント向けの手順書であるスキルを、MCPサーバーから配れるようにするMCPの公式拡張です。","summary":"Skills over MCPは、エージェント向けの手順書であるスキルを、MCPサーバーから配れるようにするMCPの公式拡張です。社内ポータルに業務マニュアルを置いておけば、各自が手元にコピーしなくても最新版を開けるのと同じ発想です。\n\n配るスキルは、そのサーバーのツールの使い方に限りません。たとえばGitHub MCP Serverは、スキルの機能を有効にすると、GitHubでの作業手順をツールと一緒に配ります。\n\nツールを持たず、チームの業務手順だけを集めたサーバーを立てることもできます。提案文書のSEP-2640（SEPはMCPの仕様変更の提案）は2026-09-13にマージされてFinalとなり、拡張は今Betaの段階です [1] 。\n\nこの記事では、仕組み・向いている場面・対応状況・注意点を図で整理します。FastMCPのドキュメント [2] の言葉では、スキルは SKILL.md という手順書と、それが参照するファイルをまとめたものです。","importance":5},{"title":"【さくらのレンタルサーバ】セキュリティ強化に伴うコンパイル・ビルド関連コマンド等の停止に関するお知らせ | さくらインターネット","url":"https://www.sakura.ad.jp/corporate/information/announcements/2026/11/26/1968226380/","source":"Hatena","published_at":"2026-11-26 14:50","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"お客さま各位 平素よりさくらインターネットをご利用いただき、誠にありがとうございます。","summary":"お客さま各位 平素よりさくらインターネットをご利用いただき、誠にありがとうございます。セキュリティ対策強化の一環として、「さくらのレンタルサーバ」において、コンパイル・ビルドに関連する一部コマンドおよび「crontab」コマンドの利用を停止いたします。\n\n本対応は2026年12月3日（木）から12月10日（木）にかけて順次適用いたします。詳細は、下記をご確認ください。\n\n本対応は、お客さまに当社のサービスをより安全にご利用いただくためのセキュリティ強化を目的としたものです。お客さまにはご不便をおかけいたしますが、何卒ご理解賜りますようお願い申し上げます。\n\nさくらのレンタルサーバ 一部のコマンドの利用停止 について セキュリティ対策強化の一環として、「さくらのレンタルサーバ」等において、サーバー上でのコンパイル・ビルドに関連する一部コマンドの利用を停止いたします。なお、適用前にすでにコンパイル・ビルド済みのプログラムについて、今回の対応により利用を停止することはありません。","importance":5},{"title":"AIを使えば誰でも要件定義ができるという幻想","url":"https://zenn.dev/hkr_dev/articles/23a5729daaafe1","source":"Zenn","published_at":"2026-11-25 21:33","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"※どちらかというとコードの書き方とか設計に興味の強かったエンジニアの経験に基づく今の所の個人的な感想です。","summary":"※どちらかというとコードの書き方とか設計に興味の強かったエンジニアの経験に基づく今の所の個人的な感想です。ガチガチのウォーターフォールでの要件定義とかは未経験なので悪しからず 上流に関わっていたエンジニアやSEだけではなく、現場レベルでコードを書くことがメインの仕事であったプログラマーも要件定義に関わってくれないと振れる仕事自体がなくなってきているという実感がある 実装にAIを使用してきた人ほど、 聞けば答えを出してくれる(実装してくれる) という感覚が強いからこそだと思っている それを要件定義にも当てはめるからAIに聞けば回答(=正解ではない)を実際にもらえるし、出てきた回答はそれっぽいし、実際問題のないことも多い 聞けば回答が出る。","importance":5}]};
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
