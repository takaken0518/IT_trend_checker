// __EMBEDDED_NEWS_START__
globalThis.__IT_TREND_EMBEDDED_DATA__ = {"updated_at":"2026-11-19 19:03:17 JST","total_count":50,"config":{"selected_genres":["ai","web","infra","mobile","biz"],"other_genre_min_ratio":0.25,"max_age_hours":72.0,"genres":{"ai":"AI・LLM・機械学習","web":"Web開発・言語","infra":"インフラ・クラウド・セキュリティ","mobile":"モバイル・ガジェット・個人開発","biz":"ITビジネス・キャリア・マネジメント","other":"総合・その他IT"}},"articles":[{"title":"nginx「緊急」脆弱性、官房長官が「必要な措置」呼び掛け","url":"https://www.itmedia.co.jp/news/article/2611/19/2000003334/","source":"Hatena","published_at":"2026-11-19 16:02","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"Webサーバー「nginx」に緊急脆弱性、政府が注意喚起","summary":"Webサーバーソフト「nginx」にCVSS v4.0で9.2と評価される「緊急」の脆弱性が2件発見された。リモートからコードを実行される恐れがあり、サーバー乗っ取りや情報窃取の可能性がある。\n\n木原稔官房長官は記者会見で、利用事業者に対して必要な措置を取るよう呼び掛けた。現時点で被害報告はないものの、国内Webサイトの約6割で利用されている影響力の大きいソフトであるため、迅速なアップデート適用が強く求められている。","importance":10},{"title":"OpenAI-API呼び出しにおけるプロンプトキャッシュの学び","url":"https://zenn.dev/91works/articles/76132a32606efb","source":"Zenn","published_at":"2026-11-19 17:25","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"OpenAI APIのプロンプトキャッシュ最適化とコスト削減の検証","summary":"LLMによるメール分類システムにおいて、プロンプトの指示順序を工夫することでプロンプトキャッシュのヒット率を0%から99.5%へ改善し、コストを大幅に削減した事例を紹介。OpenAIのキャッシュ仕様に基づき、固定部分を先頭に配置する構成への変更が鍵となった。\n\nキャッシュの仕組みを理解し、Langfuseを用いた計測と回帰テストを導入することで、最適化の効果を可視化し、意図しないキャッシュ効率の低下を防ぐ体制を構築。推測ではなく実測値に基づいた計装の重要性を説いている。","importance":8},{"title":"Cognito認証、フロントとバックエンドで「誰が何をやるか」を整理する","url":"https://zenn.dev/taichan/articles/47891bbc4eee8a","source":"Zenn","published_at":"2026-11-19 13:48","genre":"web","genre_label":"Web開発・言語","headline":"Cognito認証におけるフロントとバックエンドの責務分担の整理","summary":"CognitoとFastAPIを用いた構成において、認証まわりの責務をフロントエンドとバックエンドで明確に切り分けるための指針を解説。信頼境界はバックエンドにあり、フロントエンドはトークンの運搬とライフサイクル管理のみを担当すべきと説く。\n\nバックエンドは毎リクエスト、公開鍵を用いてJWTをローカルで検証する。Cognitoへの問い合わせは公開鍵取得時のみに限定し、効率的な検証を実現する。フロントエンドでの検証は防御にならない点や、失効チェックの仕組みを別途持つ必要性など、セキュリティ上の重要な注意点も網羅している。","importance":8},{"title":"宇宙空間でのたった1回の核爆発で低軌道を周回する人工衛星のほぼすべてが機能停止に陥る可能性","url":"https://gigazine.net/news/20261119-nuclear-blast-cripple-satellite/","source":"Hatena","published_at":"2026-11-19 12:33","genre":"other","genre_label":"総合・その他IT","headline":"宇宙空間での核爆発が低軌道衛星網に壊滅的被害を与える可能性","summary":"宇宙空間での核爆発が、低軌道を周回する人工衛星のほぼすべてを機能停止に追い込む可能性があるとの研究結果が発表されました。爆発直後の放射線だけでなく、核分裂生成物によって形成される人工的な放射線帯が、長期間にわたり衛星を損傷させ続けることがシミュレーションで示されています。\n\n機能停止した衛星は軌道制御不能となり、デブリ同士の衝突連鎖を引き起こすリスクも指摘されています。現代社会の通信や観測インフラを支える衛星網にとって、核兵器の宇宙配備は極めて深刻な脅威であり、国際的な抑止力の重要性が改めて浮き彫りとなりました。","importance":7},{"title":"128GBメモリで120BクラスのLLMが動く！　マウスコンピューターの卓上ローカルAI向けミニPC「DAIV CX」の実力","url":"https://www.itmedia.co.jp/pcuser/articles/2611/19/news047.html","source":"Hatena","published_at":"2026-11-19 16:38","genre":"mobile","genre_label":"モバイル・ガジェット・個人開発","headline":"128GBメモリ搭載のミニPC「DAIV CX」で120BクラスLLMをローカル実行","summary":"マウスコンピューターのクリエイター向けブランド「DAIV」から、ローカルAI運用を想定した小型デスクトップPC「DAIV CX」シリーズが登場。Ryzen AI Max+ 395と128GBのLPDDR5Xメモリを搭載し、120Bクラスの巨大なLLMの実行を可能にしている。\n\n高性能な統合GPUと大容量メインメモリを組み合わせることで、高価で納期が不安定な外付けGPUに頼らずとも、ローカル環境で大規模なAIモデルを動かせる点が特徴。機密情報を扱う企業やトークンコストを抑えたいユーザーにとって、現実的な選択肢となる。","importance":7},{"title":"生成AIで個人の生産性を高めても、なぜ会社の売上は増えないのか｜松本健太郎","url":"https://comemo.nikkei.com/n/nb6e629d1a85c","source":"Hatena","published_at":"2026-11-18 11:19","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"個人の生産性向上と会社の売上が直結しない理由","summary":"生成AIによる個人の生産性向上と、組織全体の売上・利益が結びつかない現状を分析。タスクの効率化や作業時間の短縮は、必ずしも会社の目標達成（儲け）に直結するわけではないと指摘する。\n\n『ザ・ゴール』の教訓を引用し、部分的な効率化がボトルネックの解消や新しい価値創造に繋がっていない現状を批判。生成AIを単なるツールとして導入するだけでなく、組織の目標達成という視点から、どのように業務プロセスを再設計すべきかを問いかける。","importance":8},{"title":"六花亭、カード番号全桁＋セキュリティコード約8000件流出か　決済画面のプログラム改ざん（ITmedia NEWS） - Yahoo!ニュース","url":"https://news.yahoo.co.jp/articles/fe3af31e34dfc6f786ead14eeb02d20ce517d330","source":"Hatena","published_at":"2026-11-19 16:40","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"六花亭オンラインショップで決済画面改ざんによるカード情報流出の可能性","summary":"北海道の菓子メーカー・六花亭の通販サイトが不正アクセスを受け、決済画面のプログラムが改ざんされたと発表。顧客が入力したクレジットカード番号、名義人、有効期限、セキュリティコードが外部に流出した可能性がある。\n\n被害件数は約8000件で、10月21日から11月18日までの期間が対象。六花亭はサイトを停止し、調査を進めている。クレジットカード情報をサーバーに保存していない環境でも、不正プログラムにより入力情報が盗み出される手口であり、ECサイト運営におけるセキュリティ対策の重要性が改めて浮き彫りとなった。","importance":9},{"title":"「10年前にこれ描いてるのすごい」人間とAIが共存する近未来医療SFマンガ『AIの遺電子』全巻99円セール中→なお作者は困惑「僕、作者！！実入りはどうなるの！！？」","url":"https://togetter.com/li/2772319","source":"Hatena","published_at":"2026-11-19 14:30","genre":"other","genre_label":"総合・その他IT","headline":"AIと人類の共存を描くSF『AIの遺電子』全巻99円セールに作者も困惑","summary":"近未来医療SFマンガ『AIの遺電子』シリーズがKindleで全巻99円のセールを実施中。AIが現実のものとなりつつある現在、2015年から連載されていた本作の先見の明が再評価されている。\n\n作者の山田胡瓜氏自身がセールの安さに困惑しつつも、作品の重要性をアピールする様子がSNSで話題に。AIやロボットとの共存というテーマを深く掘り下げた本作は、現代のAI技術に関心を持つエンジニアにとっても示唆に富む名作として注目を集めている。","importance":5},{"title":"自分の代わりに動くAgentへ。Claude CodeとCodexで作る自律改善ハーネス","url":"https://zenn.dev/nttdata_tech/articles/9562962cc181a1","source":"Zenn","published_at":"2026-11-19 16:28","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"Claude CodeとCodexを活用した自律改善型開発ハーネスの設計","summary":"コーディングAgentに自律的な作業を任せるための「ハーネス」を構築し、開発から資料作成までを並行して処理する運用手法を解説。賢いプロンプトを追求するのではなく、Agentが自ら読み書きできるフォルダ構造と規約を整備することに注力した。\n\nGitリポジトリに規約と記録を集約し、タスク単位での管理やスクリプトによる検査を導入。これにより、複数のAgentセッションを並行稼働させても一貫性を保ち、人間は確認と判断に集中できる環境を実現している。構造化の重要性を説く実践的な設計論である。","importance":8},{"title":"DependabotのPRをClaudeで影響分析して、リスク（低・中・高）をPRにコメントする","url":"https://zenn.dev/tomipetit/articles/dependabot-impact-analysis-claude","source":"Zenn","published_at":"2026-11-19 12:53","genre":"web","genre_label":"Web開発・言語","headline":"DependabotのPRをClaudeで自動分析し、リスクを判定するGitHub Actions","summary":"DependabotによるセキュリティアップデートのPRに対し、Claude Codeを活用して影響範囲を自動分析し、リスクレベルをコメントする仕組みが構築されました。リリースノートの精査やgrep作業を自動化することで、開発者の負担を大幅に軽減します。\n\nこの仕組みは、package-lock.jsonの差分やGitHub Advisory Databaseの情報を収集し、Claudeに渡すことで実現されています。パッチ更新に混入する間接依存のメジャー更新などを検知し、本番コードへの影響度を具体的に提示することで、安全かつ効率的な依存関係管理が可能になります。","importance":8},{"title":"Google Playが折りたたみスマホ向けアプリの最適化を義務化、2027年4月から未対応アプリは更新不可に","url":"https://sumahodigest.com/?p=76852","source":"Hatena","published_at":"2026-11-19 13:19","genre":"mobile","genre_label":"モバイル・ガジェット・個人開発","headline":"Google Play、2027年4月より折りたたみスマホ向けアプリの最適化を義務化","summary":"Googleは、折りたたみスマートフォンおよび大型画面デバイス向けアプリの品質基準を刷新しました。2027年4月以降、Google Playでアプリを公開・更新するには、画面切り替え時の動作維持やレイアウト最適化を含む最低限の品質基準（Tier 3）を満たすことが必須となります。\n\nこの新基準は、折りたたみ端末特有の形状や画面サイズへの対応を促すもので、未対応アプリはアップデートが制限されます。今後はタブレットやAndroid XRデバイスへの適用も予定されており、開発者は画面の動的な変化に柔軟に対応する設計が求められます。","importance":7},{"title":"アプリ作りに専門知識が不要に!? AIが変える常識と落とし穴 | NHKニュース","url":"https://news.web.nhk/newsweb/na/nd-20261117de77369","source":"Hatena","published_at":"2026-11-18 21:57","genre":"other","genre_label":"総合・その他IT","headline":"AIでアプリ開発のハードルが低下、専門知識不要の時代へ","summary":"AIの進化により、プログラミングの専門知識がなくてもアプリを作成できる時代が到来している。被災地での活用や業務効率化など、AIによる開発の民主化がもたらすメリットが紹介されている。\n\n一方で、誰でも簡単に作れるようになったからこそ生じる課題や、AI生成アプリの品質管理、セキュリティリスクといった「落とし穴」についても言及。技術の恩恵を享受しつつ、適切に活用するためのリテラシーが今後より一層求められることを示唆している。","importance":6},{"title":"実質的無職になった｜Y.Hirano","url":"https://note.com/y_hirano/n/nc986ab18b90e","source":"Hatena","published_at":"2026-11-19 04:58","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"生成AIの進化でソフトウェアエンジニアの市場価値はどう変化したか","summary":"生成AIの急速な普及により、ソフトウェアエンジニアの作業が高度化から「不要化」へとシフトしている現状を綴った個人の記録。難易度の高い試行錯誤までAIが担うようになり、従来の「腕が良い」「仕事が早い」といった付加価値が市場で評価されにくくなっている。\n\n機材コストの高騰と単価の停滞、フルリモート案件の減少など、フリーランスを取り巻く環境の厳しさが浮き彫りになっている。AI時代におけるエンジニアの生き残り方や、キャリアの再定義を迫られる中で、自己分析を通じて今後の生き方を模索する姿勢が示されている。","importance":6},{"title":"nginx に深刻脆弱性 / NPMアップデートの注意点","url":"https://zenn.dev/gabie/articles/db33ec5990ec54","source":"Zenn","published_at":"2026-11-19 13:16","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"nginxに深刻なHTTP/2脆弱性、早急なアップデートとNPM運用の注意喚起","summary":"nginx 1.31.9および1.30.7にて、HTTP/2に関連する深刻な脆弱性（CVE-2026-123007、CVE-2026-123633）が修正されました。これらはリモートコード実行を許す恐れがあるため、該当バージョンを使用している場合は早急なアップデートが必要です。\n\nVPS等でNginx Proxy Manager（NPM）を利用している場合、コンテナ内のNginxバージョンを単体で更新することが困難なケースがあります。バックアップの徹底や、最新版への追従が難しい環境では、エッジでのWAF導入やリバースプロキシの二重化など、代替の保護策を検討することが推奨されます。","importance":9},{"title":"新機能、ElastiCache の distributed KV caching を GPU 2 台の vLLM で試す","url":"https://zenn.dev/aws_japan/articles/elasticache-distributed-kv-cache-bench","source":"Zenn","published_at":"2026-11-19 15:55","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"ElastiCacheの分散KVキャッシュ機能によるvLLM推論の効率化","summary":"Amazon ElastiCache for Valkeyで提供開始された分散KVキャッシュ機能を、vLLM環境で検証。推論サーバー間でKVキャッシュを共有することで、同じ文脈を繰り返すAIエージェントやチャットにおいて、計算の重複を排除しTTFT（最初のトークン生成時間）を短縮する仕組みを解説した。\n\nLMCacheを介してElastiCacheをL2キャッシュとして利用する構成を検証。GPUローカルのキャッシュだけではサーバーをまたぐリクエストで再計算が発生していたが、共有ティアを導入することで効率的な再利用が可能になることを確認した。","importance":8},{"title":"Instagramを一から構築してるんだけど、完全に端末を切り離して一切情報入れてないのに妻のアカウントに自分のアカウントが出てきて早速バレた「Wi-Fiも繋いでないんやぞ」","url":"https://togetter.com/li/2772266","source":"Hatena","published_at":"2026-11-19 08:53","genre":"other","genre_label":"総合・その他IT","headline":"Instagramの「おすすめ」に知人が表示される仕組みとプライバシーの懸念","summary":"Instagramで端末を初期化し情報を制限しても、家族や知人が「おすすめ」に表示される現象が話題となっている。これは、電話番号の紐付けや連絡先の同期、IPアドレスや位置情報の共有、さらにはSNS間でのデータ連携が背景にあると推測される。\n\nユーザーからは「プライバシーが守られていない」という懸念や、意図しない繋がりが可視化されることへの不快感が示されている。対策として、電話番号の紐付けを避ける、連絡先同期をオフにする、あるいはPC経由でアカウントを作成するなどの回避策が議論されているが、プラットフォーム側のアルゴリズムによるサジェストは依然として強力である。","importance":5},{"title":"ESLint から oxlint へ。lint が 50 倍速くなるまでの移行の記録","url":"https://zenn.dev/rimo/articles/12d6a7b1c58fcd","source":"Hatena","published_at":"2026-11-19 07:05","genre":"web","genre_label":"Web開発・言語","headline":"ESLintからoxlintへの移行でlint速度を50倍に高速化した事例","summary":"Rimo合同会社がフロントエンド開発において、メインのlinterをESLintからoxlintへ移行し、lint処理時間を約50倍高速化した事例。CIの待ち時間短縮と、AIによるコーディング支援（PostToolUse）の効率化を目的としている。\n\n移行にあたっては、ESLintのルールをoxlintへ段階的に同期させ、未対応ルールのみESLintを併用する手法をとった。設定の集約と暫定的なルール除外を工夫することで、開発体験を損なわずに移行を実現している。大規模プロジェクトにおけるビルド・検証時間の短縮に向けた実践的なアプローチである。","importance":8},{"title":"DiscordからClaude Codeに作業を任せる方法！報告も質問もスマホで受け取る","url":"https://zenn.dev/spa77k/articles/discord-claude-code-ask-relay","source":"Zenn","published_at":"2026-11-19 11:09","genre":"mobile","genre_label":"モバイル・ガジェット・個人開発","headline":"DiscordとClaude Codeを連携し、スマホから作業依頼と報告を実現","summary":"DiscordをインターフェースとしてClaude Codeに作業を依頼し、進捗や報告をスマホで受け取る「ask-relay」という仕組みが構築されました。Orcaを活用してClaude Codeセッションを並列実行し、Discord経由で会話と作業をシームレスに繋いでいます。\n\nこのシステムは、会話の記憶保持やタスクの直列処理、タイムアウト制御を備えており、外出先からでも安全にコーディングエージェントを操作可能です。指示書をコードから動的に生成する設計により、メンテナンス性も確保されており、AIエージェントを活用した効率的な開発フローの好例です。","importance":8},{"title":"「海外向けnoteで初月42万円」は本当か、実データで検証した","url":"https://zenn.dev/mikartmis/articles/kaigai-note-profitability-check","source":"Zenn","published_at":"2026-11-19 12:54","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"「AIで海外向けnote初月42万円」の真偽を実データで検証","summary":"SNSで拡散された「AI生成の低単価noteが海外で爆売れする」という主張に対し、実在するプラットフォームのデータや統計を用いて検証が行われました。結論として、初月から高額な収益を上げることは極めて稀であり、成功事例の多くは長年の集客資産や専門的な作り込みに基づいていることが判明しました。\n\n低単価商品は手数料負担が大きく、プラットフォーム側も集客を保証しないため、再現性の高い「ブルーオーシャン」とは言い難いのが現実です。訪日需要は高いものの、有料情報には明確な作業成果物としての価値が求められており、安易なAI生成モデルの過信には注意が必要です。","importance":5},{"title":"NGINXの脆弱性 CVE-2026-123633、CVE-2026-123007についてまとめてみた - piyolog","url":"https://piyolog.hatenadiary.jp/entry/2026/11/19/065715","source":"Hatena","published_at":"2026-11-19 07:35","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"NGINXのHTTP/2実装に深刻な脆弱性、コード実行の恐れがあり早急な更新を","summary":"NGINXのHTTP/2実装（ngx_http_v2_module）に、リモートから任意のコード実行やDoS攻撃が可能な2件の脆弱性（CVE-2026-123007, CVE-2026-123633）が公表された。国家サイバー統括室も注意喚起を行っている。\n\nこれらはHTTP/2通信の処理不備に起因し、認証不要で悪用される可能性がある。修正版であるnginx 1.31.9および1.30.7が公開されており、運用管理者は直ちにアップデートを適用する必要がある。Wizなどのセキュリティ企業もASLR回避を伴うコード実行を確認しており、影響範囲は広いため迅速な対応が不可欠である。","importance":10},{"title":"llama.cpp：DGX Spark 2台でNCCLを使うマルチGPU推論手順","url":"https://zenn.dev/catspawengineer/articles/1dbc4e0c913e64","source":"Zenn","published_at":"2026-11-19 17:39","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"llama.cppでDGX Spark 2台を用いたNCCLによるマルチGPU推論手順","summary":"llama.cppがNCCLに対応したことを受け、NVIDIA DGX Spark 2台を直結した環境でマルチGPU推論を行うための構築手順を解説。公式ドキュメントにはないRPCとNCCLを組み合わせた構成で、テンソル並列（TP=2）での動作を確認した。\n\nCUDA環境の準備から、NCCLを有効にしたビルド、ネットワーク設定、モデルのダウンロード、RPCサーバーの起動、そして推論実行までの各ステップを詳細に記述。特に、MoEモデルなど一部アーキテクチャが非対応である点や、Flash Attentionが必須であるといった技術的制約についても注意を促している。","importance":7},{"title":"規約を AI に「守ってもらう」のをやめた ― 判定できる規約は検査に移し、人が読むのは免除理由と設計判断に絞る","url":"https://zenn.dev/t_azk/articles/rules-as-checks-not-prose-for-ai","source":"Zenn","published_at":"2026-11-19 02:48","genre":"web","genre_label":"Web開発・言語","headline":"規約をAIに守らせるのではなく、静的検査で強制する開発プロセスの改善","summary":"文章による規約は人でもAIでも守られないという前提に立ち、規約を静的検査（Lint）へ移行した開発プロセスの改善事例。機械で判定可能な規約は検査で違反を検出し、AIには「違反を直す」という限定的な推論のみをさせることで品質を担保している。\n\n「文章で守ってもらう」から「構造で漏れないようにする」への転換により、レビューコストを削減しつつ規約違反を確実に排除している。AI駆動開発において、AIの推論能力に依存しすぎず、ガードレールを設けることの重要性を示す実践的な知見である。","importance":8},{"title":"KotlinFest 2026のアーカイブ動画即日公開を支えた技術","url":"https://zenn.dev/hiro_pon/articles/0fc7f0c9ed88a2","source":"Zenn","published_at":"2026-11-18 22:48","genre":"mobile","genre_label":"モバイル・ガジェット・個人開発","headline":"Kotlin Fest 2026、PCベースの映像合成でセッション動画を即日公開","summary":"Kotlin Fest 2026において、全セッション動画をイベント当日中に公開した技術的構成を紹介。従来のハードウェアスイッチャーを廃し、PC上のGStreamerを用いた映像合成に移行した点が最大の特徴である。\n\n各部屋に配置した合成Macでスライドとカメラ映像を合成し、SRTプロトコルで本部に伝送。本部では自作アプリでプレビューと収録を行い、効率的なワークフローを構築した。ハードウェア依存を減らし、ソフトウェアで柔軟な配信環境を実現した事例として注目される。","importance":6},{"title":"もうすぐ40歳が終わってしまうので、30代でやってよかったことをまとめる","url":"https://zenn.dev/339/articles/22aa00adb7ac84","source":"Zenn","published_at":"2026-11-19 00:03","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"30代の経験から学ぶ、エンジニアがキャリアと人生を豊かにする習慣","summary":"30代で起業し、プロダクト開発と向き合い続けた筆者が、自身の経験から得た「やってよかったこと」を振り返る。反省を知識として積み上げる習慣や、没頭できる仕事の選択、そして人間関係を良好に保つためのコーチング的アプローチなどが語られる。\n\n特に、先人の知恵を優先して学ぶ姿勢や、わからないことを素直に認めつつ行動する感性が、自身の成長と成果に直結したと強調。技術的なスキル向上だけでなく、長期的な視点で周囲と関わり、自身の人生を能動的に変えていくためのマインドセットが示されている。","importance":5},{"title":"社内向けウェブツールへの不正アクセスに関するお詫び - Kyash お知らせ","url":"https://www.kyash.co/information/20261119","source":"Hatena","published_at":"2026-11-19 13:40","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"Kyashの社内ツールへの不正アクセスによる顧客情報流出","summary":"Kyashの社内ツールが外部から不正アクセスを受け、一部の顧客情報が含まれる社内資料が流出した可能性があると発表。最大11,996名分の情報が対象だが、氏名、住所、クレジットカード情報、パスワードなどは含まれていない。\n\n原因は社内ツールのアクセス管理不備。サービス本体のシステムへの影響はないとしているが、社内環境のセキュリティ管理の甘さが露呈した形となった。流出した情報のみでは個人特定や決済利用は困難だが、二次被害への注意を呼び掛けている。","importance":8},{"title":"Claude Code のサブエージェントは「定義しただけ」では使われない ― 大きなファイルを任せて本スレッドを軽く保つ","url":"https://zenn.dev/mukuil_blog/articles/71edd164433250","source":"Zenn","published_at":"2026-11-19 15:12","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"Claude Codeのコスト削減：サブエージェント活用によるコンテキスト管理","summary":"Claude Codeのコストを左右するコンテキスト長を抑えるため、調査専用のサブエージェントを活用する手法を解説。メインスレッドで大きなファイルを読み込むと、その後の全リクエストでトークンを消費し続けるため、調査を別コンテキストに委譲する設計とした。\n\n当初は定義しただけでは使われなかったが、CLAUDE.mdに「使う」と明記し、理由と数字を添えることで利用率を向上させた。サブエージェントには読み取り専用のツールのみを与え、安いモデルを指定することで効率化を図っている。","importance":7},{"title":"vue-tscの壁を越える：vizeとtsrsでVueの型検査を高速化した","url":"https://zenn.dev/studio/articles/vue-typecheck-vize-tsrs","source":"Zenn","published_at":"2026-11-18 23:26","genre":"web","genre_label":"Web開発・言語","headline":"TypeScript 7.1のcontent mapperでVueの型検査を13倍高速化","summary":"Vueプロジェクトにおける型検査の遅延問題を、TypeScript 7.1の新機能「content mapper」を活用して解決した事例。従来のvue-tscはTypeScript 6に依存しており、最新の高速な型検査器（bun check等）の恩恵を受けられなかった。\n\n今回、tsrsとvizeというツールを導入することで、CIの型検査時間を約10分から約2分へと大幅に短縮し、メモリ消費も削減した。Vueのような独自テンプレートを持つフレームワークが、最新のTypeScriptエコシステムへ適応するための重要な技術的転換点を示している。","importance":8},{"title":"Kotlin Fest 2026の会場で、ソニーのPTZカメラ「BRC-AM7」をテストしました","url":"https://zenn.dev/hiro_pon/articles/1d5bdbca4acf5b","source":"Zenn","published_at":"2026-11-18 22:15","genre":"mobile","genre_label":"モバイル・ガジェット・個人開発","headline":"配信の自動化を目指す、ソニーPTZカメラ「BRC-AM7」の検証","summary":"カンファレンス配信において、遠隔操作が困難だったカメラワークを自動化・遠隔化するため、ソニーのPTZカメラ「BRC-AM7」をテストした記録。従来のFX3ではSDKで設定変更はできても、パン・チルト・ズームの物理制御が不可能だった。\n\nBRC-AM7はCamera Remote SDKに対応し、望遠性能も十分であるため、配信の自動化に向けた有力な選択肢となる。本番環境での運用を見据え、自作の制御システムと組み合わせることで、少人数運営でも高品質な配信を実現するための技術的知見がまとめられている。","importance":5},{"title":"六花亭、カード番号全桁＋セキュリティコード約8000件流出か　決済画面のプログラム改ざん","url":"https://www.itmedia.co.jp/news/article/2611/19/2000003316/","source":"Hatena","published_at":"2026-11-19 09:18","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"六花亭オンラインショップで決済プログラム改ざん、クレカ情報流出の恐れ","summary":"六花亭オンラインショップにおいて、第三者による不正アクセスで決済画面のプログラムが改ざんされ、顧客のクレジットカード情報（番号、名義、有効期限、セキュリティコード）が流出した可能性があると発表されました。約8000件の顧客情報が対象と見られています。\n\nECサイトの決済システムを狙った改ざんは近年多発しており、セキュリティ対策の重要性が改めて問われています。六花亭はサイトを停止し調査を進めていますが、利用者はカード明細の確認や不審な連絡への警戒が必要です。EC運営者は、決済処理のセキュリティ強化と定期的な脆弱性診断が必須となります。","importance":9},{"title":"ドラクエ3リメイクをClaude Codeでクリア：ローカルLLM（Qwen3-VL）で画面を読み、YOLOを使わなかった理由","url":"https://zenn.dev/yadevloper/articles/8aa5f9dc37891e","source":"Zenn","published_at":"2026-11-19 13:37","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"ローカルVLMを活用したドラクエ3リメイクのAI自動プレイ検証","summary":"Nintendo Switch版「ドラゴンクエストIII」を、ローカルLLM（Qwen3-VL）を用いてAIに自動プレイさせる実験を実施。文字の読み取りにはVLMが活躍したが、移動判断にはYOLOをほとんど使わなかったという結果を報告した。\n\n画面全体ではなく会話枠を切り出して拡大することで、文字認識精度を大幅に向上。ネットワークを遮断した環境でローカルVLMを動かすことでセキュリティを確保しつつ、ゲーム内の状況判断を自動化している。HD-2Dのような複雑な画面でのAI活用における実践的な知見である。","importance":7},{"title":"週刊Cloudflare - 2026/11/15週","url":"https://zenn.dev/gemcook/articles/weekly-cloudflare_2026_1108-1114","source":"Zenn","published_at":"2026-11-19 14:00","genre":"web","genre_label":"Web開発・言語","headline":"Cloudflare週刊アップデート：D1のjurisdiction指定やWranglerの改善","summary":"Cloudflareの2026年11月15日週のアップデート情報をまとめ。Wranglerのstate保存先の変更や、D1データベースの自動プロビジョニングにおけるjurisdiction（管轄区域）指定機能の追加などが発表された。\n\nまた、D1のvirtual tableを含むエクスポート機能の強化や、Node.js 22.12.0以降への要件引き上げなど、開発環境のセキュリティと利便性を高める変更が多数含まれている。Workers for Platforms利用時のCron Triggersに関する警告追加など、プラットフォーム開発者向けの重要な更新が目立つ。","importance":6},{"title":"正しいUIデザインと、意図のあるUIデザイン","url":"https://zenn.dev/praha/articles/08568310684aa3","source":"Zenn","published_at":"2026-11-18 14:55","genre":"mobile","genre_label":"モバイル・ガジェット・個人開発","headline":"ガイドラインに順位を付け、意図のあるUIデザインを実現する","summary":"個人開発アプリ「nu-tori」を例に、UIガイドライン同士が衝突した際に、アプリの意図に基づいて判断を下す手法を解説。ガイドラインを並べるだけではなく、アプリの目的に合わせて順位を付けることで、一貫したデザイン方針を策定できる。\n\n「ユーザーの手間を減らす」と「正確な値を記録する」といった相反するガイドラインに対し、アプリのコア体験を優先する順位付けを行うことで、迷いのないUI設計が可能になる。正しいデザインから、意図のあるデザインへと昇華させるための思考法である。","importance":6},{"title":"「PHP」に再び“致命的”な脆弱性、日本時間19日夜にセキュリティリリースへ／サポート中の全バージョンが対象","url":"https://forest.watch.impress.co.jp/docs/news/2157690.html","source":"Hatena","published_at":"2026-11-19 08:15","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"PHPに“致命的”な脆弱性、全サポートバージョンが対象で緊急リリースへ","summary":"PHPセキュリティチームは、サポート中の全バージョンに影響する“致命的”（Critical）な脆弱性を修正するリリースを日本時間19日夜に予定している。定例リリースの一環だが、深刻度が高いため早急な対応が求められる。\n\n具体的な脆弱性の詳細はリリース時に公開されるが、既定ではない構成や特殊なセットアップで影響が出る可能性がある。10月にも「PHP2Shell」と呼ばれる脆弱性が修正されたばかりであり、Webサイト運営者はリリース公開後、速やかにアップデートを適用できるよう準備しておくことが強く推奨される。","importance":9},{"title":"Microsoft-Decision-1.1公開！Microsoft-Decision-1との差はどれくらい？","url":"https://zenn.dev/microsoft/articles/ms-decision-1-1","source":"Zenn","published_at":"2026-11-19 12:41","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"Microsoft-Decision-1.1公開、前モデルとの速度と精度を徹底比較","summary":"MicrosoftのDecisionモデル「Microsoft-Decision-1.1」が一般提供を開始しました。公式発表では速度の向上や画像入力対応が謳われていますが、実環境での検証では、通信環境を含めた往復時間において前モデルとの顕著な差は確認されませんでした。\n\n一方で、入力トークン数が増加するほど応答時間のばらつきが抑えられる傾向が見られ、長文入力時の安定性が向上しています。精度面でもベンチマークで高い評価を得ており、既存のAPI形式を維持しつつ、より複雑なタスクや大規模なコンテキスト処理において性能を発揮するモデルへと進化しています。","importance":8},{"title":"TypeScript 7.1 の Content Mapper で型の生成コマンドをなくす","url":"https://zenn.dev/toiroakr/articles/typescript-content-mapper-codegen","source":"Zenn","published_at":"2026-11-19 11:10","genre":"web","genre_label":"Web開発・言語","headline":"TypeScript 7.1のContent Mapperで型生成コマンドを不要に","summary":"TypeScript 7.1で導入される「Content Mapper」は、外部ファイルをTypeScriptの型定義として直接読み込める仕組みです。これまでPrismaやWranglerなどで必要だった型生成コマンドを置き換え、型チェック時に動的な型生成を可能にします。\n\nこの機能により、設定ファイルやスキーマの変更が即座に型に反映されるようになり、生成コマンドの再実行忘れによる型不整合を防げます。ライブラリ開発者にとっても、ユーザー側の宣言マージに頼らずに柔軟な型定義を提供できるため、開発体験の向上が期待されます。","importance":7},{"title":"ニトリ、2990円のノイキャン睡眠イヤホン--「横向きに寝ても耳が痛くなりにくい」","url":"https://japan.cnet.com/article/35255099/","source":"Hatena","published_at":"2026-11-19 07:20","genre":"mobile","genre_label":"モバイル・ガジェット・個人開発","headline":"ニトリが睡眠用ワイヤレスイヤホンを発売、横向き寝でも痛くない設計","summary":"ニトリは、横向きに寝ても枕に干渉しにくい小型設計の睡眠用ワイヤレスイヤホン「ESL-11」を2990円で発売した。ANC（アクティブノイズキャンセリング）機能を搭載し、周囲の騒音を抑えて快適な睡眠をサポートする。\n\n直径6mmの小型ドライバーを採用し、耳からの出っ張りを最小限に抑えることで、寝返り時の不快感を軽減している。Bluetooth 6.0対応で連続再生時間は約6時間。低価格ながらノイズキャンセリング機能を備えており、睡眠用ガジェットの選択肢として注目される。","importance":4},{"title":"nginx2root の HTTP/2 脆弱性2件を AWS 構成ごとに整理してみた | DevelopersIO","url":"https://dev.classmethod.jp/articles/nginx-http2-rce-aws-mitigation/","source":"Hatena","published_at":"2026-11-19 06:41","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"NGINXのHTTP/2脆弱性に対するAWS環境ごとの影響と緩和策の整理","summary":"NGINXのHTTP/2脆弱性（CVE-2026-123007, CVE-2026-123633）について、AWS環境における影響と緩和策を整理した技術解説。修正版への更新が基本だが、即時対応が困難な場合の緩和策として「http2 off」の設定が有効であることを検証している。\n\n脆弱性の仕組みとして、メモリコピーの不備や解放後使用（use-after-free）の発生条件を解説。Amazon Linux 2023などのパッケージ管理状況についても言及しており、管理者は自身の環境が修正済みか否かを正確に把握する必要がある。インフラエンジニアにとって必読の技術情報である。","importance":9},{"title":"RTX 5070 Ti ×2＋5060 Ti で DeepSeek V4.1 Flash を42 tok/s・256K文脈で回した実測記録","url":"https://zenn.dev/keithval/articles/deepseek-v41-flash-42tps-256k","source":"Zenn","published_at":"2026-11-19 08:48","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"DeepSeek V4.1 Flashを個人環境で高速運用するGPU構成と最適化手法","summary":"個人Linux環境において、GPU 3枚構成でDeepSeek V4.1 Flashを42 tok/sで運用する実測記録。EXL3量子化とエンジンへの独自修正を組み合わせることで、ワークステーション並みの性能を個人PCで実現している。\n\nMoEモデルの特性を活かし、専門家パラメータをGPUとRAMに適切に配置する設計が鍵となっている。また、256Kの長文脈処理においてもプレフィックスキャッシュを活用することで、実用的な速度を維持している。APIコストを抑えつつ、クラウドに出せないデータを扱うための実用的な最適化手法として注目される。","importance":8},{"title":"リッチドメインモデルの特徴と実装の進め方","url":"https://zenn.dev/nanashinogonbei/articles/rich-domain-model-guide","source":"Zenn","published_at":"2026-11-18 20:01","genre":"web","genre_label":"Web開発・言語","headline":"リッチドメインモデルによる業務ルールのカプセル化と実装","summary":"業務ルールをEntityに集約する「リッチドメインモデル」の概念と実装手法を解説。注文確定処理を例に、貧血ドメインモデルとの違いを比較し、データと振る舞いを一体化させるメリットを説く。\n\n不変条件をモデル内で守るためのカプセル化や、値オブジェクトの活用、集約ルートの設計など、ドメイン駆動設計（DDD）の基礎をJavaコードで具体的に提示。サービス層を薄くし、ドメインモデルを堅牢に保つことで、変更に強いシステムを構築するための実践的なガイドとなっている。","importance":7},{"title":"マイクロソフト、AIによるサイバー攻撃にAIエージェントで対抗する新サービス「Microsoft Perception」提供開始","url":"https://www.publickey1.jp/blog/26/aiaimicrosoft_perception.html","source":"Hatena","published_at":"2026-11-18 23:07","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"MS、AIサイバー攻撃に対抗するAIエージェントサービス「Microsoft Perception」発表","summary":"Microsoft Ignite 2026にて、AIによる自動化されたサイバー攻撃に対抗するための新サービス「Microsoft Perception」が発表された。攻撃者視点の「レッドチーム」、検知・調査の「ブルーチーム」、修復の「グリーンチーム」という3つのAIエージェントが連携し、マシンスピードで防御を行う。\n\nプレイブックに基づき自律的に動作しつつ、重要な判断は人間が制御する仕組みを採用。AWSやGoogle Cloudもカバーしており、AI時代のセキュリティインフラとして、人間では対応困難な速度の脅威を未然に防ぐことを目指している。","importance":9},{"title":"【特集】 Museに「僕と“家の鍵”を交換してザウルス開発者になってよ」と頼んでみた","url":"https://pc.watch.impress.co.jp/docs/topic/feature/2157654.html","source":"Hatena","published_at":"2026-11-19 06:50","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"AIエージェント「Muse」をローカル環境へ接続し実機開発を自動化する手法","summary":"クラウド上のAIエージェント「Muse」に対し、TailscaleとSSHを用いてローカルPCを遠隔操作させることで、実機環境での開発を自動化する試み。クラウドVMの制限を回避し、実機での動作検証をAIに直接行わせることを目的としている。\n\n実機での動作検証ループをAIに組み込むことで、非効率な人間によるフィードバック作業を削減できる。二重の暗号化によるセキュリティ対策を講じつつ、高性能なローカルPCのリソースをAIに開放するこの手法は、自律的なソフトウェア開発エージェントの運用モデルとして興味深い。","importance":8},{"title":"tsrs を導入したら oxlint の type-aware linting と typecheck が爆速になった話","url":"https://zenn.dev/dress_code/articles/6c179ae5129131","source":"Zenn","published_at":"2026-11-18 16:00","genre":"web","genre_label":"Web開発・言語","headline":"tsrs導入でoxlintの型チェックとlintが爆速化","summary":"TypeScript 7のコンパイラをRustに移植した「tsrs」を導入し、CIの型チェックとlintを劇的に高速化した事例。バックエンドの型チェックが229秒から11秒へと20倍以上高速化するなど、圧倒的なパフォーマンス向上を実現した。\n\nbeta版であるtsrsを安全に導入するため、既存のtscと並行稼働させて結果を検証する2段階移行の手法を採用。型チェックの高速化は開発体験を大きく改善し、CIの待ち時間を削減するための強力な選択肢となることを証明した。","importance":8},{"title":"Quad9’s withdrawal from France: A canary in the coal mine","url":"https://blog.cloudflare.com/quad9-withdrawal-from-france/","source":"Hatena","published_at":"2026-11-18 21:35","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"Quad9がフランスから撤退、DNSブロッキング強制の危険性","summary":"著作権侵害サイトのブロックを命じるフランスの裁判所命令を受け、非営利団体Quad9がフランスでのDNSリゾルバー提供を停止した。DNSレベルでのブロッキング強制は、インターネットの自由とプライバシーを損なうとして警鐘を鳴らしている。\n\n同様の圧力は他国でも強まっており、インフラサービスが特定の法域から撤退せざるを得ない状況は、インターネットの分断を招くリスクがある。DNSというインターネットの根幹に対する政治的介入が、ユーザーの利便性とセキュリティに与える悪影響を指摘した。","importance":8},{"title":"テキストと画像を同じ形にする","url":"https://zenn.dev/miyamoto_gt/articles/transformer-0-1-w6","source":"Zenn","published_at":"2026-11-19 17:00","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"Transformerの入口を差し替え、画像とテキストを同一モデルで処理","summary":"Transformerをゼロから実装するプロジェクトの第6週として、モデルの胴体（Block）を固定したまま、入力層を差し替えることで画像（MNIST）とテキストの両方を処理する実験を実施。入力の次元を統一することで、モデルがデータの種類を意識せずに処理できることを実証した。\n\n画像はパッチ化してベクトル変換し、テキストはトークナイザで処理して入力。学習の結果、画像分類でも高い正解率を達成した。また、トークナイザによる言語ごとのトークン効率の違いについても考察し、学習データと頻度がトークン化に与える影響を分析している。","importance":6},{"title":"Go コンパイラを制御する疑似フィールドハック集","url":"https://zenn.dev/yumemi_inc/articles/go-pseudo-field-hacks","source":"Zenn","published_at":"2026-11-19 12:24","genre":"web","genre_label":"Web開発・言語","headline":"Goコンパイラの最適化を制御する「疑似フィールドハック」の仕組み","summary":"Go言語において、構造体に中身のないフィールド（_ [0]func()など）を追加することで、コンパイラの振る舞いを制御するテクニックが注目されています。これは主に、巨大な構造体に対する等価比較関数の自動生成を抑制し、コンパイル時間を短縮するために利用されます。\n\n標準ライブラリのslogなどでも採用されているこの手法は、比較不能な型をフィールドに含めることで、コンパイラに不要なコード生成をさせないという副作用を利用したものです。ポインタによる回避よりも効率的で、型安全性を保ちつつコンパイル負荷を劇的に改善できる強力なハックです。","importance":6},{"title":"aws s3 互換の高速なコマンド aws3 を作りました - プログラムモグモグ","url":"https://itchyny.hatenablog.com/entry/2026/11/19/090000","source":"Hatena","published_at":"2026-11-19 10:11","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"AWS CLI互換の高速なRust製コマンド「aws3」が登場","summary":"AWS CLIのサイズと起動時間の遅さを解消するため、Rustで開発されたS3互換コマンド「aws3」が公開されました。既存のスクリプトをそのまま置き換えられるドロップイン互換性を持ち、静的バイナリとして軽量かつ高速に動作します。\n\n大量のファイル転送において並列処理を最適化し、メモリ使用量を抑える設計が特徴です。AWS SDK for Rustを活用し、よく使われるs3api操作にも対応しています。既存のAWS CLI環境を維持しつつ、CI/CDやコンテナ環境での実行速度を向上させたい場合に最適なツールです。","importance":7},{"title":"Gemini Decision 1でスパム退治！","url":"https://zenn.dev/satoshi_yoneda/articles/decision-1-anti-spam","source":"Zenn","published_at":"2026-11-19 15:20","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"Gemini Decision 1を活用したスパムメール自動選別システムの構築","summary":"従来のSpamassassinでは防ぎきれない新手のスパムメールに対し、意思決定モデル「Gemini Decision 1」を用いた選別システムを構築。メールサーバーに負荷をかけないよう、IMAP経由でローカルからメールを読み込み、判定を行う構成を採用した。\n\nGoogle AI Proのクーポンを活用することでコストを抑えつつ、高速なレスポンスを実現。PythonスクリプトでメールをGeminiに投げ、重み付けによってスパムを判定する仕組みを実装した。メール処理パイプラインに直接組み込まないことで、APIの遅延や停止によるメール不達リスクを回避している。","importance":6},{"title":"AWS Blocksが「CDK Blocks」へ昇格？aws/cdk-blocksへの移管と改名で変わるもの","url":"https://zenn.dev/genda_jp/articles/3d4beb31a2c53e","source":"Zenn","published_at":"2026-11-19 08:18","genre":"web","genre_label":"Web開発・言語","headline":"AWS Blocksが「CDK Blocks」へ改名、AWS公式組織への移管で正式化へ","summary":"AWSの試験的プロジェクトであった「AWS Blocks」が、リポジトリを「aws/cdk-blocks」へ移管し、製品名を「CDK Blocks」へ変更する動きを見せている。これは、labs組織からAWSの主要OSSが並ぶOrganizationへの昇格を意味する。\n\nコードベースでは環境変数やフォルダ名の変更など破壊的変更が進んでおり、CDKファミリーとしての統合が加速している。現時点では公式発表前だが、re:Inventに向けた動きと推測される。利用者は今後のリリースでパッケージ名や設定の変更が必要になる可能性があるため、動向を注視する必要がある。","importance":6},{"title":"AMDグラボで報告された「SSD無限酷使」不具合、今度はNVIDIAグラボでも発生か。1日で約1テラバイト書き込まれた事例も、寿命が怖い - AUTOMATON","url":"https://automaton-media.com/articles/newsjp/20261119-479961/","source":"Hatena","published_at":"2026-11-19 11:48","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"NVIDIA GPUドライバーにSSDの過剰書き込み不具合の報告","summary":"AMD製GPUで報告されていた「SSD無限酷使」不具合が、NVIDIAのGeForce Game Ready Driverの一部バージョンでも発生している可能性が浮上しました。無操作状態にもかかわらずSSDへの書き込みが継続し、1日で1TBに達した事例も報告されています。\n\nSSDの寿命を著しく縮める恐れがあるため、ユーザーはストレージの書き込み状況を監視し、不審な挙動が見られる場合はドライバーのロールバックや更新を検討する必要があります。GPUドライバーの不具合がストレージに物理的なダメージを与えるリスクは、エンジニアにとっても警戒すべき事象です。","importance":6},{"title":"そろそろ本気で誤差逆伝播法を理解しようじゃないか","url":"https://zenn.dev/kitacom_blog/articles/backpropagation","source":"Zenn","published_at":"2026-11-19 11:19","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"誤差逆伝播法を数式で徹底理解、多層パーセプトロンの更新式を導出","summary":"ディープラーニングの核心である誤差逆伝播法（バックプロパゲーション）について、低次元の多層パーセプトロンモデルを用いて数式から導出する解説記事です。なぜその更新式が使われるのかという疑問に対し、連鎖律（チェインルール）を適用して手計算で追うことで、アルゴリズムの仕組みを深く理解します。\n\nベクトルや行列の微分、ヤコビ行列の定義を明確にすることで、複雑な式を直感的に捉えられるようになります。実務でライブラリを使うだけでは見えにくい勾配計算のプロセスを可視化しており、AIモデルの内部構造を学び直したいエンジニアにとって非常に有益な内容です。","importance":7}]};
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
