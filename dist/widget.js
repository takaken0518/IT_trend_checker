// __EMBEDDED_NEWS_START__
globalThis.__IT_TREND_EMBEDDED_DATA__ = {"updated_at":"2026-11-28 16:00:45 JST","total_count":50,"config":{"selected_genres":["ai","web","infra","mobile","biz"],"other_genre_min_ratio":0.25,"max_age_hours":72.0,"genres":{"ai":"AI・LLM・機械学習","web":"Web開発・言語","infra":"インフラ・クラウド・セキュリティ","mobile":"モバイル・ガジェット・個人開発","biz":"ITビジネス・キャリア・マネジメント","other":"総合・その他IT"}},"articles":[{"title":"GMOペパボへの不正アクセスについてまとめてみた - piyolog","url":"https://piyolog.hatenadiary.jp/entry/2026/11/28/110735","source":"Hatena","published_at":"2026-11-28 12:28","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"GMOペパボで不正アクセス発生、顧客情報51万件が漏洩","summary":"GMOペパボが提供する「ロリポップ！レンタルサーバー」等のサービスにおいて、第三者による不正アクセスが発生し、約51万件の顧客情報が漏洩した。攻撃者は内部システムへ侵入し、データ分析基盤を経由して情報を持ち出した。\n\n漏洩情報には氏名やメールアドレスのほか、平文で保存されていた一部顧客のパスワードも含まれる。同社は該当パスワードを強制リセットし、調査と再発防止策の策定を進めている。過去の退会者データがシステムに残存していた不備も判明しており、セキュリティ管理体制が問われている。","importance":10},{"title":"ColabでセルフホストLLM：StrataとローカルのpiをSSHトンネルでつなぐ","url":"https://zenn.dev/masato13/articles/616044c6d709ef","source":"Zenn","published_at":"2026-11-28 13:26","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"Google Colabとローカル環境をSSHで繋ぐセルフホストLLM構築術","summary":"Google ColabのGPUリソースを活用し、ローカル環境のコーディングエージェントとSSHトンネルで接続するセルフホストLLMの構築手法を解説。モデル推論はColab、ファイル操作はローカルで行うことで、コードの秘匿性を保ちつつ快適な開発環境を実現する。\n\nSSH接続の制限や長時間処理のバックグラウンド化、大容量モデルの安定したダウンロードなど、Colab特有の制約を回避するための具体的な運用ノウハウを共有。起動スクリプトによる自動化で、効率的なリモート推論環境を構築するポイントをまとめている。","importance":8},{"title":"｢もう管理職はいらない｣　震源はシリコンバレー、AIで消える肩書と階層 - 日本経済新聞","url":"https://www.nikkei.com/article/DGXZQOGN246EE0U6A121C2000000/","source":"Hatena","published_at":"2026-11-28 06:48","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"AIが管理職の役割を代替、シリコンバレー発の「管理職不要論」","summary":"AIの進化により、若手の業務だけでなく、経営陣と現場をつなぐ管理職の役割もAIが担う可能性が浮上している。米テック企業を中心に「管理職はいらない」という議論が加速しており、組織構造の変革が示唆されている。\n\nAIによる意思決定支援や業務管理の自動化が、従来の階層型組織をどのように変容させるかを分析。シリコンバレーの先進的な取り組みを例に、日本企業も直面するであろう組織のフラット化や、管理職の新たな役割定義の必要性について論じている。","importance":9},{"title":"シンプルな構文で美しい図を自動生成する「D2」が進化、非営利化で独自レイアウトエンジンもオープンソース化","url":"https://gigazine.net/news/20261127-d2/","source":"Hatena","published_at":"2026-11-27 23:05","genre":"other","genre_label":"総合・その他IT","headline":"図生成ツール「D2」が非営利化し独自エンジンをOSS化","summary":"テキストから図を自動生成する「D2」の進化と、運営体制の非営利化について解説。v0.9.0では描画処理が大幅に高速化され、手描き風モードやアニメーション出力、ASCII出力など表現の幅が広がっている。\n\n特に、ソフトウェア構成図向けに設計された自動配置エンジン「TALA」がオープンソース化された点が注目される。DagreやELKを含む3種類のエンジンを使い分けることで、複雑なシステム構成図を効率的に生成可能となり、技術文書作成の生産性を向上させる。","importance":7},{"title":"古い PHP / Laravel の脆弱性対応は、Rector と AI でだいたい簡単に終わる","url":"https://zenn.dev/miraizuk/articles/ae8db2bc3ff561","source":"Zenn","published_at":"2026-11-28 01:15","genre":"web","genre_label":"Web開発・言語","headline":"RectorとAIを活用した古いPHP/Laravelの脆弱性対応術","summary":"サポート終了したPHPやLaravelのバージョンアップを、Rectorによる自動書き換えとAIによる修正で効率化する手法を解説。個別のパッチ当てではなく、サポート対象バージョンへの移行を脆弱性対応の本体と位置づける。\n\nComposer auditによる脆弱性洗い出し、テスト環境の整備、Rectorを用いた段階的なメジャーバージョンアップの手順を詳述。Rectorで対応しきれないフレームワークの仕様変更や型エラーは、E2Eテストを通しながらAIに修正させることで、大幅な工数削減を実現する。","importance":9},{"title":"簡単な回路だと油断したら、ハマり続けた話　～ｽﾀｯｸﾁｬﾝおでかけバージョン試作記～","url":"https://zenn.dev/mar_a/articles/3270cb5753ac25","source":"Zenn","published_at":"2026-11-27 21:21","genre":"mobile","genre_label":"モバイル・ガジェット・個人開発","headline":"ｽﾀｯｸﾁｬﾝ試作でハマった回路設計とコネクタの落とし穴","summary":"ｽﾀｯｸﾁｬﾝおでかけバージョンの開発過程で遭遇した、回路設計と実装のトラブル記録。シンプルな回路構成でありながら、コネクタのピン配置の誤りやPWM設定の不備により、長期間のデバッグを強いられた経験を共有する。\n\n特に、コネクタの表裏の番号の数え方の違いによるGND接続の失敗や、ESP32-S3のPWM仕様の誤解など、ハードウェア開発特有の「思い込み」によるミスを詳述。テスターのみを用いた切り分け手法や、AIとの対話を通じた問題解決のプロセスが参考になる。","importance":6},{"title":"Amazon CloudFrontで固定IPあるいは証明書を持つユーザーのみのアクセスを許可する構成","url":"https://zenn.dev/aws_japan/articles/cloudfront-mtls-ip-or-cert","source":"Zenn","published_at":"2026-11-28 11:37","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"CloudFrontでクライアント証明書と固定IPを組み合わせたアクセス制限","summary":"Amazon CloudFrontのviewer mTLSとConnection Functionを活用し、クライアント証明書または特定の固定IPからのアクセスのみを許可するセキュリティ構成を解説。\n\nVPCオリジンとセキュリティグループを組み合わせ、インターネット経由の不正アクセスを遮断しつつ、柔軟な認証要件を実装する。CloudFront KeyValueStoreでIPリストを管理し、TLSハンドシェイク時に接続判定を行うことで、セキュアかつ効率的なアクセス制御を実現する具体的な構成例を提示している。","importance":9},{"title":"はじめての Lean","url":"https://unaoya.github.io/lean-intro/","source":"Hatena","published_at":"2026-11-27 20:19","genre":"other","genre_label":"総合・その他IT","headline":"Leanの証明検査の仕組みを理解するための学習教材","summary":"Leanを用いた証明において、コードを書くことではなく「証明が検査される仕組み」を理解することに主眼を置いた学習教材の紹介。型推測の機械的な手順を学ぶことで、コンピュータがどのように証明の正しさを検証しているかを納得させることを目的とする。\n\nmathlib等の外部ライブラリに頼らず、Lean 4の標準環境のみで構成。依存関数型から帰納型、命題と型の対応までを段階的に学び、位相空間などの発展的な証明までをカバーする。ブラックボックスを減らし、証明検査の全体像を把握したいエンジニアや数学学習者に適した内容。","importance":6},{"title":"データサイエンティストの Claude Code 活用術-Claude Code にデータ分析をさせる方法論","url":"https://speakerdeck.com/yossyds/deta-saientisuto-no-claude-code-katsuyoujutsu","source":"Hatena","published_at":"2026-11-28 12:03","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"データサイエンティストがClaude Codeで分析業務を効率化する手法","summary":"Claude Codeを活用してデータ分析業務を効率化するための実践的な方法論を解説。AIにドメイン知識を適切に伝えることで、分析の丸投げと生産性向上を実現する。\n\nプロジェクトごとのログブック（Markdown）を作成し、作業内容やコンテキストを蓄積する仕組みを構築。さらに、CLAUDE.mdを活用してAIに過去の経緯やルールを参照させることで、人間が付きっきりにならずとも一気通貫で分析を進められる環境を整える手法を紹介している。","importance":8},{"title":"【資料公開】コードを書くAI、アーキテクチャーを決める組織","url":"https://www.ryuzee.com/contents/blog/14629","source":"Hatena","published_at":"2026-11-27 20:42","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"AI時代のアーキテクチャと組織の境界設計に関する考察","summary":"AIによるコード生成が普及する中で、アーキテクチャの意思決定と組織構造の重要性を説く登壇資料。AIはコードレベルの生産性を高めるが、システムレベルの境界設計は依然として人間と組織の責任であると指摘する。\n\nチームの境界がAIの生成物に増幅されて現れるため、境界の引き方がアーキテクチャ上の最大の意思決定となる。AIの進化に合わせて境界を柔軟に変更できる組織体制の構築や、ビルドが落ちる仕組みによる境界の強制など、AI時代に求められる開発組織のあり方を解説している。","importance":8},{"title":"記事2,800本のHugoサイト、Netlifyのビルドを130秒→20秒に改善したぜ！","url":"https://zenn.dev/yamadatt/articles/20261128_netlify-hugo-build-time","source":"Zenn","published_at":"2026-11-28 12:35","genre":"web","genre_label":"Web開発・言語","headline":"HugoサイトのNetlifyビルド時間を130秒から20秒へ短縮する改善策","summary":"記事数2,800本を超えるHugoサイトにおいて、Netlifyでのデプロイ時間が画像処理により増大していた問題を解決。ビルドログをAPIで詳細に分析し、画像変換処理が毎回ゼロから実行されていることがボトルネックであると特定した。\n\nHugoの画像キャッシュディレクトリをNetlifyのビルド間で保持する設定を行うことで、差分ビルドを有効化。これにより、画像変換時間を大幅に削減し、デプロイ時間を劇的に短縮した。CI環境におけるキャッシュ戦略の重要性と、具体的な設定手順を解説している。","importance":7},{"title":"通勤流出入マップ","url":"https://commuter-inflow-map.idoajob.chatgpt.site/?city=none","source":"Hatena","published_at":"2026-11-28 02:41","genre":"other","genre_label":"総合・その他IT","headline":"2020年の国勢調査に基づき、市区町村間の通勤者（15歳以上、男女計）を表示します。","summary":"2020年の国勢調査に基づき、市区町村間の通勤者（15歳以上、男女計）を表示します。「同じ市区町村内で通勤」は、住んでいる市区町村内の自宅以外の職場で働く人の数です。\n\nランキングと矢印 流入は他の市区町村から選んだ市区町村に通勤する人数、流出は選んだ市区町村から他の市区町村に通勤する人数です。海を押すと選択を解除できます。\n\nデータを読み込んでいます。地図： © OpenStreetMap contributors ・Natural Earth（加工） 統計：総務省統計局「令和2年国勢調査」（抽出・集計）","importance":5},{"title":"drift のマイグレーション戦略","url":"https://zenn.dev/narun/articles/20261127-drift-migration-strategy","source":"Zenn","published_at":"2026-11-27 20:00","genre":"mobile","genre_label":"モバイル・ガジェット・個人開発","headline":"Flutterアプリにおけるdriftのマイグレーション戦略と実装方針","summary":"Flutterアプリでdriftを使用する際、スキーマ変更に伴うマイグレーションの複雑化や失敗時のリスクが課題となります。本記事では、マイグレーションをステップごとに分割し、トランザクションで保護する「Guided Migrations」の導入を推奨しています。\n\n具体的な手法として、スキーマバージョンごとの定義を管理し、移行処理をステップ単位で記述する方法を解説。さらに、データ整合性を保つためのテスト手法や、失敗時のリカバリ方針を提示しており、保守性の高いデータベース運用を実現するための実践的なガイドとなっています。","importance":6},{"title":"スマホの「マイナアプリ」に脆弱性、不正リンクからマイナンバーカード情報窃取のおそれ／iOS版/Android版ともに最新バージョンへのアップデートを","url":"https://forest.watch.impress.co.jp/docs/news/2160150.html","source":"Hatena","published_at":"2026-11-27 20:50","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"マイナアプリの脆弱性対策、最新版へのアップデートを推奨","summary":"デジタル庁が提供するスマートフォンアプリ「マイナアプリ」に、不正リンクから情報を窃取されるおそれのある脆弱性が発見された。JVNにより複数の脆弱性情報が公開され、フィッシング被害のリスクが指摘されている。\n\nCVE-2026-130398など3件の脆弱性が確認されており、iOS版・Android版ともにv2026.11.0で修正済み。利用者はApp StoreやGoogle Playを通じて、直ちに最新バージョンへアップデートすることが強く推奨される。","importance":9},{"title":"AIでしか生み出せない価値とは何か ― 4つの壁と8つの価値創造 - ニューロサイエンスとマーケティングの間 - Between Neuroscience and Marketing","url":"https://kaz-ataka.hatenablog.com/entry/2026/11/28/085335","source":"Hatena","published_at":"2026-11-28 09:34","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"AI時代に人間が創造すべき「AIには届かない価値」とは何か","summary":"AIによる業務自動化が進む中で、人間が本来追求すべき「AIがなければ生まれ得ない価値」について考察。人間が到達困難な領域として「量的な壁」「認知の壁」「知識の分断」などを挙げ、AIを単なる効率化ツールではなく、新しい価値創造のパートナーとして活用する重要性を説く。\n\nAIの得意領域と人間の特性を整理し、単なる置き換えではない、人間ならではの創造的な問いや設計のあり方を提示。AI時代における人間中心の価値創造の指針を示している。","importance":9},{"title":"通勤流出入マップ","url":"https://commuter-inflow-map.idoajob.chatgpt.site/","source":"Hatena","published_at":"2026-11-28 00:02","genre":"other","genre_label":"総合・その他IT","headline":"2020年の国勢調査に基づき、市区町村間の通勤者（15歳以上、男女計）を表示します。","summary":"2020年の国勢調査に基づき、市区町村間の通勤者（15歳以上、男女計）を表示します。「同じ市区町村内で通勤」は、住んでいる市区町村内の自宅以外の職場で働く人の数です。\n\nランキングと矢印 流入は他の市区町村から選んだ市区町村に通勤する人数、流出は選んだ市区町村から他の市区町村に通勤する人数です。海を押すと選択を解除できます。\n\nデータを読み込んでいます。地図： © OpenStreetMap contributors ・Natural Earth（加工） 統計：総務省統計局「令和2年国勢調査」（抽出・集計）","importance":5},{"title":"AIのレバレッジはカスタマーフロントから設計する","url":"https://zenn.dev/knowledge_graph/articles/ai-leverage-customer-front","source":"Zenn","published_at":"2026-11-27 18:48","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"AIのレバレッジを最大化するカスタマーフロント起点の実装戦略","summary":"AI導入による成果を最大化するためには、単なる業務効率化ではなく、顧客価値に直結するカスタマーフロントの判断と行動を設計することが不可欠です。AIは組織の仕事の進め方を増幅するため、設計次第で正負のレバレッジが働きます。\n\n全社的なデータ基盤整備を待つのではなく、現場の業務データとドメイン知識をAIが扱える形に整え、顧客対応の判断を自動化・最適化する順序を提言。競合との差別化を図るための、自社ならではの価値創造に向けた戦略的アプローチを解説しています。","importance":7},{"title":"1時間で作るPerlOS: Yet Another Perl Computer","url":"https://zenn.dev/takesako/articles/8623cbed6c1bb6","source":"Zenn","published_at":"2026-11-28 08:32","genre":"web","genre_label":"Web開発・言語","headline":"自作OSにPerl処理系を組み込む「PerlOS」開発の全手順","summary":"C言語で自作したベアメタルOSに組み込み用Perl処理系「microperl」を移植し、Perlシェルが動作する「PerlOS」を構築する手順を解説。\n\nQEMUを用いた開発環境の構築から、ブートローダーの作成、libcの自作、そしてRaspberry Pi Pico 2へのデプロイまでを網羅。OSの基礎知識から、メモリ制限のある環境でのPerlの最適化手法まで、低レイヤー技術とスクリプト言語の融合というユニークな開発体験をステップバイステップで紹介している。","importance":8},{"title":"XYZA、何度も自由に描き替え可能なカラーE Ink搭載スマートキーホルダー","url":"https://www.itmedia.co.jp/pcuser/articles/2611/27/news083.html","source":"Hatena","published_at":"2026-11-27 18:23","genre":"mobile","genre_label":"モバイル・ガジェット・個人開発","headline":"充電不要で描き替え可能なカラーE Ink搭載スマートキーホルダー","summary":"XYZAが発表した「6色E Inkスマートキーホルダー」は、NFCを利用してスマートフォンから画像を書き換えられる小型デバイスです。バッテリーを搭載せず、書き換え時の微弱な電波で動作するため、半永久的に表示を維持できる点が特徴です。\n\n1.54型カラーE Inkパネルを搭載し、価格は3500円。充電の手間がないため、日常的な持ち歩きに適しており、電子ペーパー技術の新たな活用事例として注目されます。","importance":4},{"title":"楽天モバイルへのauローミングが更新、12月からのエリア公開","url":"https://k-tai.watch.impress.co.jp/docs/news/2159826.html","source":"Hatena","published_at":"2026-11-27 13:24","genre":"other","genre_label":"総合・その他IT","headline":"2026年11月27日 11:00 KDDIは、楽天モバイル向けのローミングで、12月以降のエリアマップを公開した。","summary":"2026年11月27日 11:00 KDDIは、楽天モバイル向けのローミングで、12月以降のエリアマップを公開した。12月時点でのエリアは、編集部で確認したところ、首都圏や福岡市、広島市、神戸市といった地域ではほとんど違いがわからない。\n\nとはいえ、高松城（香川県高松市）や、新潟駅（新潟県新潟市）の周辺ではローミングが縮小している。2026年9月末でそれまでのローミングはいったん終了した。\n\n10月からは、両社間で交わされた条件は伏せられているものの、楽天自身が基地局を整備する前提で、一部地域でのローミングが提供されている。","importance":5},{"title":"PostgreSQLでWHERE句を追加すると逆に遅くなるケースとその対策","url":"https://zenn.dev/nmiura_thakaz/articles/1410cb8d208de7","source":"Zenn","published_at":"2026-11-27 17:38","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"PostgreSQLでWHERE句追加により性能が低下する原因と対策","summary":"PostgreSQLにおいて、WHERE句による絞り込みを追加した際に、行数の推定誤りから結合方式が最適化されず、逆にクエリが遅延する現象を解説。特に統計情報のない式が含まれる場合に発生しやすい問題です。\n\n対策として、ビューの末尾に「OFFSET 0」を追加することで、クエリの最適化（条件の内部移動）を抑制し、実行計画を安定させる手法を紹介。ただし、この手法は本来の最適化も止めるため、適用範囲の慎重な検討が必要であると警鐘を鳴らしています。","importance":8},{"title":"LLM に「材料にない数字」を言わせない：魚の質問欄を、指示ではなく答えの検査で守る","url":"https://zenn.dev/zennpay/articles/ab648c77094b5c","source":"Zenn","published_at":"2026-11-27 21:44","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"LLMの回答を検査し「材料にない数字」の出力を防ぐ手法","summary":"LLMを用いたアプリにおいて、もっともらしい嘘の数字（ハルシネーション）を排除するための回答検査システムを構築。プロンプトによる指示だけでなく、サーバー側で回答を事後的に検証するアプローチをとる。\n\n回答から数字を抽出し、DB等の「材料」に含まれる数値のみを許可するフィルタリングを実装。検査に失敗した場合は別のプロバイダへ切り替える冗長化も行い、信頼性を担保している。Web検索機能の有無に応じた柔軟なルール設定により、実用的な回答精度を実現している。","importance":9},{"title":"Frosty Friday Live Challenge まとめ Vol.0〜Vol.9","url":"https://zenn.dev/frostyfriday_jp/articles/frosty-friday-live-vol00-09","source":"Zenn","published_at":"2026-11-28 09:54","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"Snowflake のスキルアップチャレンジ Frosty Friday を解説する YouTube 番組 「Frosty Frida…","summary":"Snowflake のスキルアップチャレンジ Frosty Friday を解説する YouTube 番組 「Frosty Friday Live Challenge」の放送回をまとめました。","importance":5},{"title":"ノンフライヤーはからあげだけじゃない　夕飯作りラクにしてくれるかも","url":"https://kaden.watch.impress.co.jp/docs/column/iikoto/2160002.html","source":"Hatena","published_at":"2026-11-27 16:00","genre":"other","genre_label":"総合・その他IT","headline":"ノンフライヤーの活用で日常の料理をラクにする調理家電の可能性","summary":"近年注目を集めるノンフライヤー（エアフライヤー）について、単なる「揚げないからあげ」調理器を超えた万能調理家電としての魅力を解説。焼き魚やハンバーグなど、日常的な料理を放置調理で美味しく仕上げるメリットを紹介しています。\n\nバスケットタイプとガラスコンテナタイプの違いや、洗い物の削減といった家事負担軽減の観点から、家庭への定着の可能性を考察。最新モデルの紹介とともに、調理家電としての実用性を高めるレシピ活用などのヒントを提示しています。","importance":3},{"title":"AIと考えるスモールスタートのシステム設計 - EC2の1台から作り直さずに育て、状態遷移はTLA+で形式検証する","url":"https://zenn.dev/okamyuji/articles/ai-small-start-system-design","source":"Zenn","published_at":"2026-11-28 04:13","genre":"web","genre_label":"Web開発・言語","headline":"AIとTLA+を活用したスモールスタートのシステム設計手法","summary":"小規模なWebサービスを低コストで開始し、将来的な成長にも耐えうる設計手法を解説。EC2の1台構成から始めつつ、将来のPostgreSQL移行やコンテナ化を考慮した設計をAIコーディングエージェントと共に進めるアプローチをとる。\n\n状態遷移の正当性をTLA+で形式検証し、AIが生成したコードの破綻を防ぐ仕組みを導入。初期段階から「席の数え方」や「DBの差し替え口」など、後から変更困難な部分を固定することで、作り直しを最小限に抑える設計思想を提示している。","importance":8},{"title":"Windowsで定番のターミナルエミュレーター「Tera Term」にMac版が登場、原作者公認／本家の設定ファイル、「.ttl」ファイルもそのまま扱える【やじうまの杜】","url":"https://forest.watch.impress.co.jp/docs/serial/yajiuma/2159779.html","source":"Hatena","published_at":"2026-11-27 13:19","genre":"mobile","genre_label":"モバイル・ガジェット・個人開発","headline":"本家の設定ファイル、「.ttl」ファイルもそのまま扱える 2026年11月27日 13:05 「やじうまの杜」では、ニュース・レビュー…","summary":"本家の設定ファイル、「.ttl」ファイルもそのまま扱える 2026年11月27日 13:05 「やじうまの杜」では、ニュース・レビューにこだわらない幅広い話題をお伝えします。Windowsで定番のターミナルエミュレーター「Tera Term」が、macOSへ移植されたのだそう。\n\n原作者の許可もちゃんと得ているとのことで、安心して使えます。tera term mac os移植版 つくた 「Tera Term Mac」 https://t.co/btvDRB7Hty オープンソースやで。\n\n#teraterm https://t.co/jqlGJcBvYW 「Tera Term」は、寺西高氏によって開発された老舗のリモートログオンクライアント（初版は1994年2月24日）。当初はWindows 3.1で動作する16bitアプリでしたが、その後さまざまな開発者による協力を得て、32bit化やSSH対応、UTF-8のサポートなどが行われました。\n\n現在ではTeraTerm Projectの下、オープンソースアプリとしてメンテナンスされています。","importance":5},{"title":"自宅NASのバックアップをAzure Storageに逃がしてみた。思ったより安く運用できた話","url":"https://zenn.dev/yotan/articles/hyperbackup-azure-storage-real-cost","source":"Zenn","published_at":"2026-11-28 08:44","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"自宅NASのバックアップ先としてAzure Storageを運用するコスト検証","summary":"自宅NASのバックアップ先としてAzure Storage（Blob）を活用した実運用レポート。2TB規模のデータをHot tierで運用し、コストと品質のバランスを検証した。\n\nGoogle Drive等のコンシューマー向けサービスと比較し、Azureは転送速度や安定性に優れる点を評価。一方で、ストレージ階層ごとの最小保存期間やリストア時のコスト、アウトバウンド料金など、クラウドストレージ特有の課金構造と注意点を詳細に分析し、個人利用における最適解を考察している。","importance":7},{"title":"AWSのAI-DLC v2に学ぶ AIにドメイン境界を守らせる設計","url":"https://speakerdeck.com/j5ik2o/archcon2026","source":"Hatena","published_at":"2026-11-27 19:26","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"AWS AI-DLC v2に学ぶAIエージェントのドメイン境界を守る設計","summary":"AIエージェントによるコーディング支援において、修正がバグを生む「モグラ叩き」状態を防ぐための設計手法を解説。ドメインモデルを正しさの基準とし、型や境界を明確にすることでAIの出力を制御するアプローチを提案しています。\n\nAWSのAI-DLC v2ワークフローを解剖し、プラグインを活用して責務の分離や状態遷移をコードに落とし込む方法を実例で紹介。テストだけでは見抜けない設計上の問題を、機械的な検査とドメインモデルで解決する重要性を説いています。","importance":9},{"title":"静的サイト251ページのAI検索対応：facts.json・llms-full.txt・.md配信の実装記録","url":"https://zenn.dev/kurodaschool/articles/e478038976268c","source":"Zenn","published_at":"2026-11-28 00:17","genre":"web","genre_label":"Web開発・言語","headline":"静的サイトをAI検索に最適化するfacts.json等の実装記録","summary":"静的サイトをChatGPT検索やPerplexityなどのAI検索エンジンに引用されやすくするための実装記録。フレームワークを使わず、Pythonスクリプトでビルドする構成で、AI向けに最適化されたデータ構造を生成する。\n\n具体的には、一次情報をまとめたfacts.json、サイトマップとしてのllms-full.txt、各ページのMarkdown配信、構造化データの実装、IndexNowによる通知を網羅。さらに、人間用コンテンツとAI用データが乖離しないよう、ビルド時に整合性をチェックする仕組みを導入している。","importance":8},{"title":"自宅PCを格安ファイルサーバーとして構築してみた","url":"https://zenn.dev/nextbeat/articles/7c820845a91d7d","source":"Hatena","published_at":"2026-11-27 19:43","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"Cloudflare TunnelとAuth0を活用した安全な自宅ファイルサーバー構築","summary":"ポート開放を行わずに外部からアクセス可能な自宅ファイルサーバーを構築する手法を紹介。Cloudflare Tunnelでセキュアな経路を確保し、Auth0をIdPとして利用することで、堅牢な認証基盤を構築しています。\n\nTerraformによるインフラ管理の効率化や、Cloudflare Accessを用いたアクセス制御の仕組みを解説。セキュリティを担保しつつ、学習目的も兼ねた構成となっており、個人開発におけるセキュアなネットワーク構築の参考になります。","importance":7},{"title":"参加レポート：AI 時代における3つの境界 ~ドメイン・設計・仕様~ by Vlad Khononov 氏","url":"https://zenn.dev/koga_atsu/articles/ea4fa6d041d29d","source":"Zenn","published_at":"2026-11-27 17:17","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"AI時代におけるドメイン駆動設計と境界の重要性","summary":"アーキテクチャカンファレンスでのVlad Khononov氏の講演レポート。AIによるコード生成速度の向上に対し、ソフトウェア工学の目標は「変化への迅速な対応」にあると強調し、AI時代における設計の重要性を説いています。\n\nサブドメインと境界づけられたコンテキストを用いて、AIが暗黙の前提を立てることを防ぎ、認知負荷を軽減する手法を解説。モジュール性を評価するツールなども紹介されており、AIエージェントと人間が協調して保守性の高いシステムを構築するための指針となっています。","importance":9},{"title":"データ操作で実現したいことを明確にするための3つの条件","url":"https://zenn.dev/erutako/articles/8874799ff8438b","source":"Zenn","published_at":"2026-11-28 09:15","genre":"web","genre_label":"Web開発・言語","headline":"データ操作の設計を明確にする「不変・事前・事後条件」の思考枠組み","summary":"データ操作の設計において、実装方法（How）から入るのではなく、実現したいこと（What）を明確にするための思考フレームワークを提案。不変条件、事前条件、事後条件の3つの観点から要求を整理する手法を解説する。\n\n並行処理やデータの一貫性が求められる場面において、操作対象だけでなく、グループ全体や過去の状態を含めた条件定義の重要性を説く。具体的な送金処理や権限管理の例を用い、バグを防ぎ堅牢なシステムを設計するための論理的なアプローチを提示している。","importance":7},{"title":"Leanで安全制約を書くと、ハザード候補がビルドエラーとして見つかる","url":"https://zenn.dev/kokeshim0chi/articles/lean-safety-constraint-build-error","source":"Zenn","published_at":"2026-11-27 13:40","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"Leanを用いた安全制約の形式化によるハザードの自動検出","summary":"STAMP/STPAの安全工学の考え方を定理証明支援系Leanで形式化し、システム設計のハザードをビルドエラーとして検出する手法が紹介されています。単体テストでは見抜けない「部品は正常だが組み合わせで事故が起きる」ケースを、安全制約を定理として記述することで網羅的に検証可能です。\n\n実装とモデルの乖離という課題はあるものの、ビジネスロジックのコア部分をLLMで生成し、Leanで検証するような開発フローは、安全性向上において非常に強力なアプローチとなります。","importance":8},{"title":"LT のライブ字幕を、登壇前のスライドで技術用語に強くする（AmiVoice API）","url":"https://zenn.dev/ponyo877/articles/117c1fc0728161","source":"Zenn","published_at":"2026-11-27 23:46","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"AmiVoice APIとClaudeを連携した登壇用ライブ字幕システム","summary":"勉強会やLTで技術用語を正確に認識させるためのライブ字幕システムを開発。登壇資料のPDFからClaudeを用いて用語と読みを抽出し、AmiVoice APIの単語登録に自動反映させる仕組みを構築した。\n\nCloudflare Workers上で動作し、WebSocketで参加者のスマホに字幕を配信。登壇終了後には録音データからアーカイブ字幕と振り返りレポートを自動生成する。技術用語の誤認識を減らすだけでなく、話者のフィラーや感情解析まで行う高度な登壇支援ツールとなっている。","importance":8},{"title":"[JSC] 数値で構成される配列に対して Array.prototype.flat を高速にした","url":"https://zenn.dev/itsu_dev/articles/1942c82c2f2e27","source":"Zenn","published_at":"2026-11-27 20:52","genre":"web","genre_label":"Web開発・言語","headline":"JavaScriptCoreにおける数値配列のflatメソッド高速化","summary":"WebKit/JavaScriptCore（JSC）のArray.prototype.flat実装において、数値配列に対する最適化パッチを適用し高速化を実現した技術解説。従来の実装では、配列のサイズ計算とコピーを汎用的に行っていたが、数値配列の特性に着目した。\n\nECMAScript仕様に基づき、ネストしていない配列であれば深さ指定に依存せずコピーが可能である点を利用。JSC内部のIndexingTypeを活用し、特定の条件下で高速なパスを通すことで、配列の正規化や総和計算などのユースケースにおけるパフォーマンスを向上させている。","importance":7},{"title":"GitHub ActionsからPATもGitHub App Private Keyも駆逐する","url":"https://zenn.dev/tmknom/articles/github-app-token-exchange-system","source":"Zenn","published_at":"2026-11-27 11:51","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"GitHub Actionsのクレデンシャル管理をキーレス化する「GATES」","summary":"GitHub ActionsにおけるPATやGitHub App Private Keyの管理リスクを排除するため、AWS OIDCとKMSを活用したトークン発行システム「GATES」が開発されました。Private Keyをワークフローに持たせず、KMSの署名機能を利用することで、長命なクレデンシャルの漏洩リスクを根本から断ち切ります。\n\nキーレス認証を徹底することで、セキュリティを担保しつつ、開発者が複雑な認証処理を意識せずに安全なトークンを利用できる仕組みを実現しています。","importance":8},{"title":"「日本語で」と書いても AI が英語に戻るので、Stop フックで止めた","url":"https://zenn.dev/hitori_pm/articles/cc955887656339","source":"Hatena","published_at":"2026-11-27 22:49","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"Claude CodeのStopフックでAIの言語出力を制御する","summary":"AIが指示を無視して英語で回答し続ける問題に対し、Stopフックを用いたプログラムによる検査・制御手法を導入。指示ファイル（CLAUDE.md）への記述だけでは不十分なケースに対し、機械的なチェックを組み込む。\n\n返答の末尾を検査し、英語と判定された場合に日本語での書き直しを促すスクリプトを実装。コードやパスは除外するなどの工夫により、技術的な会話を阻害せずに言語の混入を防ぐ。AIの運用において「注意喚起」ではなく「仕組みによる再発防止」の重要性を説いている。","importance":8},{"title":"クリーンアーキテクチャ","url":"https://zenn.dev/arm_techblog/articles/0c3f9d1b5011ec","source":"Zenn","published_at":"2026-11-27 15:07","genre":"web","genre_label":"Web開発・言語","headline":"クリーンアーキテクチャの基本と業務システムへの段階的導入","summary":"クリーンアーキテクチャは、業務ルール（エンティティ・ユースケース）と外部の仕組み（DB・画面）を分離し、依存関係を内側に向ける設計手法です。これにより、技術的な変更が業務ロジックに影響を与えるリスクを低減できます。\n\n実際の開発現場では、既存コードの構造を一気に変えるのはリスクが高いため、新規実装や修正の機会に合わせて、依存の向きや役割分担を少しずつ見直す段階的なアプローチが推奨されます。","importance":7},{"title":"Hikvisionのレコーダーの録画を論文を手がかりにSSDから直接取り出す","url":"https://zenn.dev/nauh_blog/articles/f5d9201a04db47","source":"Zenn","published_at":"2026-11-27 18:47","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"HikvisionレコーダーのSSDから録画データを直接抽出する手法","summary":"ネットワーク経由での録画データ取得が困難な環境において、レコーダーからSSDを直接取り出し、PCで解析してデータを抽出する手法を解説。過去の論文や既存スクリプトを参考に、Rustで独自の抽出ツールを開発しています。\n\nファイルシステムの構造解析から、FFmpegを用いたMP4変換までの手順を詳述。ネットワーク帯域を圧迫せず、かつ故障時にも対応可能なフォレンジック的なアプローチとして、大量の録画データを扱う現場での実用的な解決策を提示しています。","importance":6},{"title":"Claude Code で KiCad 基板を設計して JLCPCB に発注し、Codex とも同じ条件で比べた","url":"https://zenn.dev/kzchd/articles/ai-kicad-pihat-claude-codex","source":"Zenn","published_at":"2026-11-27 19:30","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"Claude Codeを用いた基板設計とAIの出力を制御するゲート設計","summary":"AIエージェントにKiCadを用いた基板設計を依頼し、JLCPCBへ発注するまでのプロセスを解説。AIの生成物をそのまま信用せず、機械的な検査（ゲート）を挟むことで品質を担保する手法を提案しています。\n\n回路図の接続チェックや製造データの検証を自動化する仕組みを構築し、AIの誤りを早期に発見するワークフローを構築。CodexとClaude Codeの比較検証も行っており、AI駆動開発における品質管理の重要性を示しています。","importance":8},{"title":"ZennのHTML埋め込みを試してみた","url":"https://zenn.dev/tyanakaz/articles/3577887b9d2d57","source":"Zenn","published_at":"2026-11-28 08:00","genre":"web","genre_label":"Web開発・言語","headline":"Claude CodeやCodexに頼むと、配色やレイアウトを整えたHTMLを作ってくれます。","summary":"Claude CodeやCodexに頼むと、配色やレイアウトを整えたHTMLを作ってくれます。これを記事にも使えたら、図を用意する手間を減らせそうです。\n\nZennのHTML埋め込みで、どこまでできるのか試してみました。カードやタブから、クリックできる構成図、CSSアニメーションまで、38個の例を載せています。\n\n見た目を変えることで、説明も読みやすくなるでしょうか。使ってみたい場面と、気になった点を各例に添えました。\n\n図はHTML・CSS・SVGだけで作っています。気になるカテゴリから読めます。\n\n作例は「カテゴリ番号.作例番号」で並べています。検索について： 文字入力欄とJavaScriptは使えないため、作例1.1〜1.3では選択肢でブロック内を絞り込みます。\n\n自由入力の全文検索が必要なら、外部デモへのリンクを本文に置く形になります。項目や用語が多いときに、必要なものを探す例です。\n\n1.1 カテゴリを選んで探す 「操作」を選ぶと、操作に関係する項目だけ残ります。文字を入力する検索ではなく、用意した分類で絞り込む例です。","importance":5},{"title":"Docker HubのPHP公式イメージから自前ビルドへ移行 〜Debian移行と最適化で稼働Pod数を約25%削減〜 - COLOPL Tech Blog","url":"https://blog.colopl.dev/entry/2026/11/27/110000","source":"Hatena","published_at":"2026-11-27 13:05","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"PHP公式イメージから自前ビルドへの移行によるCPU効率改善","summary":"Docker HubのPHP公式イメージから、php.netのソースコードを用いた自前ビルドへ切り替えることで、CPU効率を大幅に改善した事例です。AlpineからDebianへの移行や、CPU世代に合わせたコンパイラ最適化、拡張モジュールの静的リンクを行うことで、稼働Pod数を約25%削減しました。\n\n自前ビルドは運用負荷が高いと思われがちですが、Dockerfileによる自動化とパッチ追従の仕組みを構築すれば、効率的なインフラ運用が可能であることを示しています。","importance":7},{"title":"なぜAIは超難問を解けるのに、あなたの現場では“綺麗なゴミ”を量産するのか？ - サッとぶ","url":"https://kei-1010.hatenablog.com/entry/2026/11/27/133416","source":"Hatena","published_at":"2026-11-27 15:22","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"AIが“綺麗なゴミ”を量産する理由と4つの象限による分析","summary":"AIが超難問を解く一方で、現場では保守不能なコードや中身のない資料を量産する現象を分析。AIの得意・不得意を「閉じた/開いた領域」と「圧縮可能/不可領域」の2軸で整理し、なぜ現場で詰まるのかを解説しています。\n\n最先端の研究所でさえ推論システムの失敗に直面している現状を指摘し、AIの出力に対する人間の検品コスト（理解負債）が課題であると主張。自動化の限界を理解し、人間が判断を残すべき領域を明確にすることの重要性を説いています。","importance":9},{"title":"パールスター感謝祭 YAPC::Tokyo 2026 総合順位発表 #yapcjapan - YAPC::Japan 運営ブログ","url":"https://blog.yapcjapan.org/entry/2026/11/28/014109","source":"Hatena","published_at":"2026-11-28 06:19","genre":"web","genre_label":"Web開発・言語","headline":"id:Pasta-K です。","summary":"id:Pasta-K です。前夜祭で実施した「パールスター感謝祭」の総合順位を掲載します。\n\n同一名が複数ある人は識別IDが異なっているので、QRコード読み込み時はWebViewになっていて、その後Safariに移行したなどが予想されますが、その辺もまた追って解消したいと思います。改めてご参加ありがとうございました！","importance":5},{"title":"迷惑メール対策をしているのに、なぜ詐欺メールは届くのか","url":"https://zenn.dev/akagumi/articles/catch-all-phishing-invisible-chars","source":"Zenn","published_at":"2026-11-26 23:08","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"認証をすり抜ける詐欺メールの判定ロジック改善","summary":"SPF/DKIM/DMARCといった認証をパスし、かつ見えない文字や逆順文字列でキーワード検索を回避する巧妙な詐欺メールへの対策が解説されています。認証はドメインの正当性を証明するだけで、表示名や本文の悪意までは防げないという限界があります。\n\n対策として、ゼロ幅文字の検知、文字参照の段階的デコード、名乗っているブランドとリンク先ドメインの照合など、多層的な判定ロジックを実装することで、高度な詐欺メールを効果的に遮断できます。","importance":7},{"title":"NVIDIAが画像生成AI「Nemotron-Labs-Image-30B-A3B」を公開、拡散モデルではなく自己回帰モデルを採用しハーネスと組み合わせてGPT-Image-2超えを達成","url":"https://gigazine.net/news/20261127-nemotron-labs-image-30b-a3b/","source":"Hatena","published_at":"2026-11-27 12:48","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"NVIDIAが自己回帰モデル採用の画像生成AI「Nemotron-Labs-Image-30B-A3B」を公開","summary":"NVIDIAは、拡散モデルではなく自己回帰モデルを採用した画像生成AI「Nemotron-Labs-Image-30B-A3B」をオープンウェイトモデルとして公開しました。これは視覚コンテンツ生成システムの一部として開発され、文字を含む画像やインフォグラフィックスの生成に強みを持ちます。\n\n後日公開予定のフレームワークと組み合わせることで、SVGやHTMLを含む高度なコンテンツ生成が可能となり、既存のベンチマークで高い性能を記録しています。","importance":9},{"title":"思いのままに変換したい〜日本語入力のためのVimプラグインCaskkを作った","url":"https://zenn.dev/ni57721/articles/vim-caskk-ime","source":"Zenn","published_at":"2026-11-27 20:00","genre":"web","genre_label":"Web開発・言語","headline":"Vimで快適な日本語入力を実現するSKKプラグイン「Caskk」","summary":"Vim環境での日本語入力を効率化するため、SKKベースのプラグイン「Caskk」が開発されました。画面を見ずに変換操作を完結させることを目指し、候補の固定（pin）や動詞・形容詞の語幹変換など、SKK特有の操作性を強化しています。\n\nAZIKユーザーへの配慮や、非同期での辞書読み込みによる高速化など、実用性を高める機能が豊富です。活用タグ付き辞書の活用や、柔軟な入力テーブル設定により、個人の入力スタイルに合わせた高度なカスタマイズが可能となっています。","importance":5},{"title":"GMO、サーバー貸出事業で不正アクセス　顧客情報51万件漏洩 - 日本経済新聞","url":"https://www.nikkei.com/article/DGXZQOUC27B210X21C26A1000000/","source":"Hatena","published_at":"2026-11-28 07:28","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"GMOインターネットグループ傘下のGMOペパボは27日、サーバーの貸し出しサービスで不正アクセスがあったと発表した。","summary":"GMOインターネットグループ傘下のGMOペパボは27日、サーバーの貸し出しサービスで不正アクセスがあったと発表した。顧客情報51万6564件が流出した可能性がある。\n\n個人情報に加え、一部顧客のパスワード計約12万件の漏洩も確認されたという。不正アクセスがあったのはGMOペパボが提供する「ロリポップ！\n\nレンタルサーバー」とその関連サービスだ。氏名や生年月日、メールアドレスなどが流出した。\n\nクレジットカードや銀行口座情報は対象外としている。パスワードは申込時に同社が仮設定した計1万2492件と、顧客が自身で設定した10万5608件の漏洩を確認した。\n\nこれらのパスワードはすでに無効化したという。漏れたパスワードは暗号化されていない状態で保存していた。\n\n同社は保存方法について「当社の他のサービスも含めて点検と改善を進める」としている。同社の調査では退会者の情報も漏洩が確認されたという。\n\n本来削除対象だった過去の退会者データの一部が、システム内に残っていたことも判明した。漏洩の対象者に対しては個別でメールで連絡しているという。","importance":5},{"title":"AIエージェントにWebのファイルを取得させるリスクについて考える","url":"https://zenn.dev/layerx/articles/65b4828efcaee2","source":"Zenn","published_at":"2026-11-27 10:48","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"AIエージェントによるWebファイル取得における間接プロンプトインジェクションのリスク","summary":"AIエージェントに外部Webサイトのファイルを読み込ませる機能は、間接プロンプトインジェクションの重大なリスクを伴います。資料内に隠された指示によってエージェントの挙動が乗っ取られ、非公開情報の持ち出しや不正な操作が行われる可能性があるためです。\n\nモデル側の対策が不十分な現状では、インジェクションを前提とした防御的なシステム構成や、ツール実行時の厳格な制約設定が不可欠です。","importance":9},{"title":"YAPC::Asia Tokyo 2010 Keynoteを観た - 生涯未熟","url":"https://syossan.hateblo.jp/entry/2026/09/08/093000","source":"Hatena","published_at":"2026-09-08 09:57","genre":"web","genre_label":"Web開発・言語","headline":"先日、Songmuさん（@songmu）にお会いした時に、「宮川達彦さんのYAPCのキーノートは観といた方が良いよ」と仰られていたので…","summary":"先日、Songmuさん（@songmu）にお会いした時に、「宮川達彦さんのYAPCのキーノートは観といた方が良いよ」と仰られていたので、観ました。www.youtube.com www.youtube.com 16年前の映像が残ってるのが本当に有難いですね。\n\nPerlのPlackのお話で「なぜPlackはさまざまな企業に使われるほど成功したのか？」という成功の要因を解説されています。このキーノート内では8つの\"成功の秘密\"が話されていました。\n\nGood artists borrow, Great artists steal.（優れた芸術家は模倣し、偉大な芸術家は盗む。） まず、初めにピカソの名言から。動画内でも仰られていますが、ピカソが言ったかどうかは怪しいみたいですね。\n\n例としてHTTP::Engineを挙げられており、WSGI/Rackをインスパイアし、そのもととなったCatalyst::Engineのコードベースに引きずられていた、と。これはまさしく\"模倣\"であり、それは最高なものではなかった。","importance":5}]};
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
