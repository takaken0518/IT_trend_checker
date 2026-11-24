// __EMBEDDED_NEWS_START__
globalThis.__IT_TREND_EMBEDDED_DATA__ = {"updated_at":"2026-11-24 13:42:57 JST","total_count":50,"config":{"selected_genres":["ai","web","infra","mobile","biz"],"other_genre_min_ratio":0.25,"max_age_hours":72.0,"genres":{"ai":"AI・LLM・機械学習","web":"Web開発・言語","infra":"インフラ・クラウド・セキュリティ","mobile":"モバイル・ガジェット・個人開発","biz":"ITビジネス・キャリア・マネジメント","other":"総合・その他IT"}},"articles":[{"title":"研究用のコードを、Claude Codeに任せてプロダクトにした","url":"https://zenn.dev/simulacra/articles/746128265d748c","source":"Zenn","published_at":"2026-11-24 12:00","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"Claude Codeを活用した研究開発からプロダクト化への高速開発手法","summary":"AIインタビューサービス「うつしみ」の開発において、Claude Codeを駆使し、研究プロトタイプを10日間で製品品質まで引き上げた事例。少人数開発の限界を突破するため、設計・実装・レビューをAIに任せ、人間は判断と検証に集中する体制を構築した。\n\n成功の鍵は、場当たり的な修正を防ぐための厳格な設計原則の言語化と、エージェント構成の最適化にある。CIによる自動テストやlint、worktreeを用いたタスク分離を徹底し、機械的に判定可能なルールを増やすことで、AIの自律的な開発を制御した。LLMを単なるコーダーではなく、開発プロセス全体の一部として組み込む実践的な知見である。","importance":9},{"title":"依存の自動更新でマルウェアが動いたら","url":"https://zenn.dev/shinagawa_web/articles/auto-ingested-malicious-dependency","source":"Zenn","published_at":"2026-11-24 08:03","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"依存パッケージの自動更新でマルウェアが混入した際の対策","summary":"Dependabot等による依存パッケージの自動更新運用において、マルウェア混入リスクへの対策が重要視されています。バージョン番号の昇格だけでは不正コードを見抜けないため、被害を最小化する設定が不可欠です。\n\n具体的には、インストール時のスクリプト実行禁止（--ignore-scripts）、CI/CDにおける権限の最小化、Dockerコンテナの読み取り専用化やリソース制限などが推奨されます。また、異常な通信やファイル操作を検知するためのログ記録体制の構築が必須となります。","importance":9},{"title":"Museに後れを取るアップルとグーグル　AIエージェント戦争のジレンマ【西田宗千佳のイマトミライ】","url":"https://www.watch.impress.co.jp/docs/series/nishida/2158551.html","source":"Hatena","published_at":"2026-11-24 09:16","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"MetaのMuseが急成長、スマホプラットフォーマーが抱えるAI戦争のジレンマ","summary":"MetaのパーソナルAIエージェント「Muse」が急速に普及する一方で、AppleやGoogleといったスマホプラットフォーマーが苦戦している現状を分析。Apple IntelligenceやGemini Intelligenceは機能強化されているものの、ユーザーへの浸透度や利便性でMuseに後れを取っている。\n\nAIが自ら機能を提案しない「気づかれない新機能」の課題や、サービス連携の難しさがプラットフォーマーのジレンマとなっている。スマホという生活の基盤において、AIエージェントがどのように立ち回るべきか、今後の競争の行方を考察している。","importance":8},{"title":"カップヌードルミュージアムに行った報告をXにアップしたら12時間ロック、「合意のない裸の描写を禁止するルールに違反しています」とのこと…「ヌード」ルがダメらしい","url":"https://togetter.com/li/2774298","source":"Hatena","published_at":"2026-11-24 11:51","genre":"other","genre_label":"総合・その他IT","headline":"「カップヌードル」の投稿がXでロック対象に？AI検閲の落とし穴","summary":"カップヌードルミュージアムへの訪問報告をX（旧Twitter）に投稿したユーザーが、AIによる自動検閲で「合意のない裸の描写」と誤判定され、12時間のアカウントロックを受けた事例。製品名に含まれる「ヌード」という文字列がNGワードとして反応したと推測される。\n\nこの事象は、AIによるコンテンツモデレーションの過剰反応と、誤判定に対する異議申し立ての難しさを浮き彫りにした。AIに依存した自動化の弊害として、文脈を無視した機械的な判断がユーザー体験を損なうリスクを指摘しており、プラットフォーム側の運用改善が求められる。","importance":5},{"title":"著名なRust製OSSをLean 4で形式検証してみたら、めちゃめちゃバグが見つかった話","url":"https://zenn.dev/koukyosyumei/articles/31c8fcf4da45b7","source":"Zenn","published_at":"2026-11-23 14:17","genre":"web","genre_label":"Web開発・言語","headline":"Rust製OSSをLean 4で形式検証し、深刻な脆弱性を発見した事例","summary":"Rust製のWebアプリケーションをLean 4で形式検証するフレームワーク「h5i」を用いたベンチマーク開発中に、実際のOSSから複数のセキュリティ脆弱性を発見した事例報告。\\n\\n認可の不備によるデータ削除や情報漏洩、無限ループなどのバグが、形式検証を通じて数学的に証明できないケースとして浮き彫りになった。\n\n単なるバグ報告にとどまらず、形式検証が実際の開発現場でいかに有効なツールとなり得るかを示している。","importance":9},{"title":"月額1000円台のVPSで“自分専用AIテスト環境”を作れる！　さくらのVPS＋さくらのAI Engine＋OpenCodeでゲーム開発に挑戦【イニシャルB【特別編】】[Sponsored]","url":"https://internet.watch.impress.co.jp/docs/topic/shimizu_sp/2126965.html","source":"Hatena","published_at":"2026-11-24 09:27","genre":"mobile","genre_label":"モバイル・ガジェット・個人開発","headline":"月額1000円台のVPSで構築する自分専用AIテスト環境とゲーム開発","summary":"さくらのVPSとさくらのAI Engineを活用し、安全かつ低コストでAIエージェントを試せるテスト環境の構築手順を解説。自宅PCに負荷をかけず、プライベートなデータへのアクセスリスクも回避できるVPSの利点を強調している。\n\nOpenCodeなどのAIエージェントを用いて、プログラミング未経験者でもブラウザゲームを開発するプロセスをステップバイステップで紹介。個人や組織の検証用として、国内拠点完結型の環境を構築するメリットを説き、AI開発のハードルを下げるための実践的なガイドとなっている。","importance":6},{"title":"セマフォの同時実行数でキュー待ちとタイムアウトはどう変わるか｜LLM API の並列呼び出しを標準ライブラリで数える","url":"https://zenn.dev/cauchye_asia/articles/semaphore-queue-timeout-asyncio-stdlib","source":"Zenn","published_at":"2026-11-24 12:17","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"LLM API並列呼び出しにおける同時実行数とタイムアウトの挙動をシミュレーションで検証","summary":"AIエージェントがLLM APIを並列利用する際、同時実行数（セマフォ）の設定がキュー待ちやタイムアウトに与える影響をPython標準ライブラリによるシミュレーションで検証した記事。同時実行数が負荷を下回ると待機時間が急増し、逆に過剰な設定は下流への負荷を招く。\n\n実験では、期限後の処理方式（継続・破棄・打ち切り）が過負荷時の成功率に大きく寄与することや、タイムアウト設定を呼び出し側のみに適用した場合の弊害などを解説。実務でLLM APIを安定運用するための設計指針として、負荷に応じた適切な同時実行数管理とタイムアウトの配置が重要であると結論付けている。","importance":8},{"title":"まもなく日本初上陸！さいたまMOVIXの「シネマLEDスクリーン」ってナンだ!?","url":"https://av.watch.impress.co.jp/docs/topic/2156536.html","source":"Hatena","published_at":"2026-11-24 10:49","genre":"other","genre_label":"総合・その他IT","headline":"日本初導入のシネマLEDスクリーン、MOVIXさいたまの技術的背景","summary":"MOVIXさいたまに導入される日本初の音響透過型シネマLEDスクリーンについて、技術的な変遷と特徴を解説。従来の投影方式とは異なり、画素自体が発光する直視型ディスプレイは、コントラストや輝度均一性において圧倒的な優位性を持つ。\n\n一方で、視野角による輝度変化や画面サイズの制約といった課題も存在する。DCI規格に基づくHDR上映の黒レベル（0.005cd/m2）やピーク輝度（300cd/m2）の策定経緯にも触れ、映画館という特殊な環境光下での最適な映像体験を目指す技術的挑戦を詳述。映画上映の歴史における構造的な転換点として注目される。","importance":5},{"title":"OpenAI and Cisco introduce Shirudo | OpenAI","url":"https://openai.com/index/introducing-shirudo/","source":"Hatena","published_at":"2026-11-24 08:59","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"OpenAIとCiscoがLinux保護用ランタイム「Shirudo」を公開","summary":"OpenAIとCiscoは、Linuxシステムをパッチ適用までの間保護するオープンソースのランタイム「Shirudo」を発表しました。eBPF技術を活用し、システムの再起動なしで脆弱性を突く攻撃を遮断する「シールド」を生成・適用できるのが特徴です。\n\n本プロジェクトは、OpenAIのAI技術とCiscoのインフラ知見を融合させたものです。パッチ適用に時間がかかる環境下でも、サービスを停止させることなく、特定の攻撃経路のみをピンポイントで防御できるため、セキュリティ運用における柔軟な対応が可能になります。","importance":8},{"title":"NVIDIA、フアン氏のCEO復帰を発表　トランプ大統領「私がまとめた」と取締役会への働きかけ認める","url":"https://www.itmedia.co.jp/news/article/2611/24/2000003397/","source":"Hatena","published_at":"2026-11-24 06:53","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"NVIDIAフアンCEOが復帰、トランプ大統領の働きかけが判明","summary":"退任していたNVIDIAのジェンスン・フアンCEOが、わずか2週間足らずで復帰しました。取締役会は国家安全保障上のリスクはないと判断しましたが、トランプ大統領が直接復帰を働きかけたことを認めており、波紋を呼んでいます。\n\n民主党議員からは「無謀な決定」との批判が出ており、議会による追及も継続される見通しです。中国との関係疑惑をめぐる独立調査は継続中であり、今後の聴取やコンプライアンス体制の再構築が注目されます。","importance":9},{"title":"要件定義書のレビュー観点を、チェックリストにしてみた","url":"https://zenn.dev/vaonvn/articles/395e38023ae063","source":"Zenn","published_at":"2026-11-24 09:59","genre":"web","genre_label":"Web開発・言語","headline":"要件定義書のレビューを効率化する3段階チェックリストの提案","summary":"要件定義書のレビュー観点を「機械で確かめる」「LLMに1次レビューさせる」「人が判断する」の3段階に整理したチェックリスト。過去の知見を統合し、レビューの効率化と品質向上を目指す。\n\n機械的なチェック（ID重複や禁止ワード）はスクリプトで自動化し、論理矛盾や非機能要件の網羅性はLLMに任せることで、人の時間を「業務ルールや合意」といった本質的な判断に集中させる。要件定義の初稿作成からレビューまでをLLMと共創するプロセスにおいて、AIを適切に活用するための実践的なフレームワークである。","importance":7},{"title":"NECの「バザールでござーる」今日で引退。約35年の歴史に幕","url":"https://pc.watch.impress.co.jp/docs/news/2158462.html","source":"Hatena","published_at":"2026-11-24 06:20","genre":"other","genre_label":"総合・その他IT","headline":"NECのキャラクター「バザールでござーる」が引退","summary":"約35年にわたりNECの販促キャラクターとして親しまれた「バザールでござーる」が、2026年11月24日をもって引退しました。公式サイトの閉鎖とともに、販促活動での使用も終了します。\n\n誕生の背景にはNECのBtoC事業が盛んだった時代がありましたが、近年のBtoB事業へのシフトに伴い、企業イメージとの乖離が生じたことが理由です。長年愛されたキャラクターの引退は、NECの事業構造の大きな転換を象徴する出来事といえます。","importance":2},{"title":"DHH氏が開発する「Omarchy 4.5」リリース。一般的なマルチウィンドウをサポート。最速7秒で導入、Appleシリコン対応、Webアプリ版MS Office用ランチャーなど新機能","url":"https://www.publickey1.jp/blog/26/dhhomarchy_457applewebms_office.html","source":"Hatena","published_at":"2026-11-24 00:39","genre":"mobile","genre_label":"モバイル・ガジェット・個人開発","headline":"DHH氏主導のLinux OS「Omarchy 4.5」リリース。AIエージェント統合とマルチウィンドウ対応","summary":"Ruby on Railsの作者DHH氏が開発するLinux OS「Omarchy 4.5」がリリースされました。AIエージェントをOSレベルで統合し、設定や拡張をAIに任せる「おまかせコンピューティング」を体現しています。\n\n今バージョンでは、タイル型に加え一般的なフローティング型マルチウィンドウに対応し、Appleシリコン搭載Macでのデュアルブートもサポートしました。さらにインストール時間を大幅に短縮するなど、デスクトップOSとしての利便性とモダンなAI活用環境の両立を図っています。","importance":7},{"title":"AIエージェントに仕事を任せてみた感想","url":"https://zenn.dev/xaiondata/articles/9bc2ad70475415","source":"Zenn","published_at":"2026-11-24 10:35","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"AIエージェントに業務を任せて見えた「人間が担うべき判断」の境界線","summary":"AIエージェントを業務に活用する中で得られた、AIが得意なことと人間が不可欠なことの考察。AIは知識の引き出しやコード実装、プロトタイプ作成において人間を凌駕するが、優先順位の判断や暗黙知の活用には弱点がある。\n\n特に、ステークホルダーとの関係性や「肌感」に基づく重要度の重み付けは、AIには渡せないコンテキストであると指摘。AIに主導権を渡すと全てのタスクを同列に扱ってしまうため、人間は「具体と抽象」を行き来し、全体像（Big Picture）を維持する役割を果たす必要があると結論付けている。","importance":8},{"title":"PostgreSQL 19正式リリース。ノンブロッキングなREPACKやI/Oワーカーのオートスケールなど新機能","url":"https://www.publickey1.jp/blog/26/postgresql_19repackio.html","source":"Hatena","published_at":"2026-11-24 00:39","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"PostgreSQL 19正式リリース。並列AutovacuumやノンブロッキングREPACKを搭載","summary":"PostgreSQLの最新メジャーバージョン「PostgreSQL 19」が正式リリースされました。β版でのバグ修正を経て、パフォーマンスと運用性が大幅に強化されています。\n\n主な新機能として、並列処理によるAutovacuumの高速化、稼働中に実行可能な「REPACK (CONCURRENTLY)」コマンド、I/Oワーカーの自動スケーリングが導入されました。また、クエリプランナーにユーザーが介入できる「pg_plan_advice」拡張機能も提供され、ミッションクリティカルな環境での運用効率向上が期待されます。","importance":9},{"title":"事務職新卒「減らす」2割　採用意向、AI普及が影響（共同通信） - Yahoo!ニュース","url":"https://news.yahoo.co.jp/articles/d05d80269b744ac2d480008e296670167cad73ba","source":"Hatena","published_at":"2026-11-24 08:48","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"AI普及で事務職の新卒採用を減らす企業が2割に増加","summary":"マイナビの調査により、AIの普及を背景に事務職の新卒採用を「減らす」と回答した企業が約2割に達したことが明らかになりました。定型業務の自動化が進み、AIが自律的に作業をこなせるようになったことが主な要因です。\n\n一方で、IT系職種や代替困難な現場職では採用増の意向が示されています。今後、AI活用がさらに進むことで、企業が求めるスキルセットと学生の志望との間にギャップが生じる可能性があり、キャリア形成における戦略的な適応が求められています。","importance":6},{"title":"Ladybird is now in alpha - Ladybird","url":"https://ladybird.org/posts/alpha/","source":"Hatena","published_at":"2026-11-24 08:13","genre":"web","genre_label":"Web開発・言語","headline":"独自エンジン搭載ブラウザ「Ladybird」がアルファ版を公開","summary":"既存のフォークではない、ゼロから構築された独自エンジンを搭載するWebブラウザ「Ladybird」がアルファ版を公開しました。macOSおよびLinux向けに提供され、初期のテスターを募集しています。\n\n開発者はセキュリティ専門家によるハッキングを歓迎しており、バグ報告やフィードバックを通じて改善を加速させる方針です。WebDriverやFirefox DevToolsプロトコルにも対応しており、Web開発者が自身のサイトの互換性を検証する環境としても注目されます。","importance":7},{"title":"iPhoneに乗り換えてでも使う価値があるかも!?　新型センサー搭載「Apple Watch Series 12」を使ってみた","url":"https://k-tai.watch.impress.co.jp/docs/review/2157103.html","source":"Hatena","published_at":"2026-11-24 00:06","genre":"mobile","genre_label":"モバイル・ガジェット・個人開発","headline":"新型センサー搭載「Apple Watch Series 12」レビュー。ヘルスケア機能の進化とバッテリー持ち","summary":"最新モデル「Apple Watch Series 12」の使用感レビューです。デザインは従来を踏襲しつつ、裏面のヘルスセンシングシステムが刷新され、心拍数やECGの測定精度と頻度が大幅に向上しました。\n\n新機能「バイタル」による体調管理や、睡眠トラッキングの精度向上が特徴です。バッテリー駆動時間は前モデルから維持されていますが、実使用では飛躍的な改善を感じさせる結果となっており、ヘルスケアを重視するユーザーにとって乗り換える価値のある進化を遂げています。","importance":7},{"title":"Alpamayo は Jetson でリアルタイム推論できるか？ R1 から 2 Edge まで、H100 プロファイルからの実行時間推定","url":"https://zenn.dev/fixstars/articles/alpamayo-h100","source":"Zenn","published_at":"2026-11-24 08:07","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"自動運転向けVLAモデル「Alpamayo」のJetson推論性能を推定","summary":"自動運転向けVLAモデル「Alpamayo」および最適化フレームワーク「FlashDrive」の推論時間を、H100での計測結果に基づきJetson AGX ThorおよびOrinで推定しました。\n\n結論として、リアルタイム推論にはさらなるモデル軽量化やトークン圧縮が不可欠であることが示唆されました。特にPrefillingとVision Encoderがボトルネックとなっており、推論最適化だけではリアルタイム性の確保が困難であるという技術的知見が共有されています。","importance":8},{"title":"WSL ContainersでClaude Codeを隔離する","url":"https://zenn.dev/kent_code/articles/bef81d6a0b817c","source":"Zenn","published_at":"2026-11-23 16:33","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"WSL Containersを活用したClaude Codeの安全な隔離環境構築","summary":"AIエージェント「Claude Code」が作業フォルダ外のファイルにアクセスするリスクに対し、Docker Desktopを使わずにWSL Containersで隔離環境を構築する手法を解説。\\n\\nAIがプロンプトインジェクション等で悪用されるリスクを考慮し、コンテナという「固い壁」で被害を最小化するアプローチをとる。\n\nVS CodeのDev Containers経由ではトークン漏洩の可能性があるため、ターミナルから直接コンテナを動かす構成を推奨している。","importance":9},{"title":"コードを書くコストが下がった今、ソフトウェアエンジニアリングの価値はどこにあるのか - Qiita","url":"https://qiita.com/figueiredoluiz/items/1d6751643b84db67812e","source":"Hatena","published_at":"2026-11-23 10:45","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"コード生成コスト低下時代におけるエンジニアリングの真価","summary":"AIによるコーディング支援が普及し、実装速度が向上する一方で、リリース数や成果物の質が比例して増えないという課題に対する考察。\\n\\nコミット数とリリース数の乖離を「weak-link」の概念で説明し、実装能力と価値を届ける能力は別物であると指摘。\n\nAI生成コードのレビュー負荷や、テスト合格が必ずしも品質保証を意味しない現状を踏まえ、エンジニアが担うべき設計や判断の重要性を論じている。","importance":9},{"title":"コードを全部は読まずにClaude Codeで本番リリースするためにしたこと","url":"https://zenn.dev/teradox_blog/articles/8ec76cc0d9e2bb","source":"Zenn","published_at":"2026-11-24 06:20","genre":"web","genre_label":"Web開発・言語","headline":"Claude Codeを活用したコード全読不要の開発ワークフロー","summary":"開発の大部分をAI（Claude Code）に任せ、コードをすべて読まずに本番リリースを実現した事例が紹介されています。成功の鍵は、AIの判断を減らす規約作りと、設計と実装の並列化にあります。\n\n「同じことを実現する手段を1つに絞る」という規約を育て、機械的なチェックを導入することで品質を担保しました。AIに実装を任せることで開発速度を大幅に向上させつつ、人間は設計判断やレビューに集中するという、AIエージェント時代の新しい開発スタイルを実践しています。","importance":8},{"title":"座敷童子を張り子で作り、Kiro で動かした ― Kiroween 2026 制作記（工作とプログラム編）","url":"https://zenn.dev/naiki9982/articles/9d95b169a26c22","source":"Zenn","published_at":"2026-11-23 16:08","genre":"mobile","genre_label":"モバイル・ガジェット・個人開発","headline":"伝統人形と生成AIを融合させた「座敷童子ガーディアン」制作記","summary":"ハッカソンに向け、張り子で作った人形にRaspberry Piと生成AIを組み込み、人感センサーで反応する「座敷童子ガーディアン」を制作した過程の記録。\\n\\n市松人形を買わずに張り子で頭部を自作し、サーボモーターで首を動かす機構を実装。\n\nKiroのspecを用いた開発手法により、要件定義から実装までを効率的に進めた。工作とプログラムを並行して進める過程での失敗や工夫が詳細に綴られている。","importance":6},{"title":"Introducing Claude Ship","url":"https://claude.com/resources/articles/introducing-claude-ship","source":"Hatena","published_at":"2026-11-24 06:17","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"Claudeがプルリクエストのレビュー・修正・承認を自動化する「Claude Ship」を発表","summary":"Claude Codeチームが、プルリクエスト（PR）のレビューから修正、承認までを自動化する「Claude Ship」のベータ版を公開しました。開発者がコードを書くスピードに合わせて、PR後のプロセスも高速化することを目的としています。\n\n本ツールは、コードレビューを行う「Code Review」、CIの失敗や競合に対応する「PR Steward」、チームのポリシーに基づき承認判断を行う「Claude Approvals」の3つのエージェントで構成されます。これにより、手動での管理コストを削減しつつ、チームのポリシーに沿った安全なコードのデプロイを実現します。","importance":9},{"title":"\"CPUマシン47台をPXEブートでつないで、Slurmクラスタを一から作った：構築手順とハマったこと全部\"","url":"https://zenn.dev/gohantec/articles/6ac740572c7d16","source":"Zenn","published_at":"2026-11-23 22:04","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"CPUマシン47台をPXEブートでつなぎ、Slurmクラスタを一から構築した手順とトラブル集","summary":"卒業研究のために、47台のCPUマシンを用いてSlurm計算クラスタを構築した際の詳細な手順とトラブルシューティング集です。ディスクレス構成を採用し、PXEブートとNFSでOSを管理する手法をとっています。\n\nDHCP、TFTP、NFSの設定からSlurmの認証設定まで、構築の全工程を網羅しています。特に、ハードウェアの個体差によるネットワークブートの失敗や、メモリの接触不良など、実機運用で直面した具体的なエラーと解決策がまとめられており、大規模クラスタ構築の参考資料として非常に価値が高い内容です。","importance":8},{"title":"アイデアソン初心者なのに、社内でゆるっとアイデアソン主催してみちゃった話","url":"https://zenn.dev/photoruction_bl/articles/1739168ceae873","source":"Zenn","published_at":"2026-11-24 12:00","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"アイデアソン初心者による社内イベント主催の試行錯誤と運営のコツ","summary":"Webチームのオフラインイベントにおいて、アイデアソン未経験者が主催者として企画・運営を行った体験談。フルリモート環境のチームが対面で交流し、有意義な時間を過ごすことを目的に、既存システムの改善をテーマに実施した。\n\n準備段階では手法や時間配分に悩んだが、少人数かつ顔見知りのチームであることを活かし、細かい手法の指定を避けて各チームの自主性に任せる方針をとった。結果として、個人ワークとチーム作業のバランスを調整し、審査員からのフィードバックを組み込むことで満足度の高いイベントを実現。初心者でも「目的」を明確にすれば、柔軟な運営で成功できることを示している。","importance":4},{"title":"iOSエンジニアのための OAuth 2.0 + PKCE 入門 ― 仕組みを理解してから、Swiftで実装する","url":"https://zenn.dev/mobile_app_tec/articles/ios-oauth2-pkce-native-app","source":"Zenn","published_at":"2026-11-23 22:56","genre":"web","genre_label":"Web開発・言語","headline":"iOSエンジニアのためのOAuth 2.0 + PKCE入門。仕組みの理解とSwift実装","summary":"iOSアプリにおけるOAuth 2.0 + PKCEの実装を、ライブラリに頼らずに行うための解説記事です。認証フローの仕組みを曖昧にせず、RFCに基づいた正しい理解を促します。\n\n認可コードフローの各フェーズや、ネイティブアプリ特有のセキュリティリスク（パブリッククライアントの扱いなど）について詳述しています。特にPKCEの必要性や、外部ブラウザを利用した安全なログイン実装、トークン更新のベストプラクティスなど、実務で役立つ知識が網羅されています。","importance":8},{"title":"はてブのAndroidアプリからPR記事や広告を消す非公式パッチ「Hoshiori」を更新。コメント詳細から記事を開けるようにした","url":"https://anond.hatelabo.jp/20261124083126","source":"Hatena","published_at":"2026-11-24 08:34","genre":"mobile","genre_label":"モバイル・ガジェット・個人開発","headline":"はてブAndroidアプリ用パッチ「Hoshiori」がv0.5.0に更新","summary":"はてなブックマークのAndroidアプリからPR記事や広告を非表示にする非公式パッチ「Hoshiori」がv0.5.0にアップデートされました。今回の目玉は、コメント詳細画面から直接記事本文へ遷移できる機能の追加です。\n\nMorphe Managerを使用して適用するこのパッチは、広告ブロックやCookie保持の制御など、ユーザーの利便性を高める複数の機能を提供します。特定のアプリバージョン（5.80）に限定されるものの、公式アプリの使い勝手を改善したいパワーユーザーにとって有用なツールとなっています。","importance":4},{"title":"Claudeのモデルを新しくしたら、台本が黙って定型文に変わっていた件（Sonnet 4.5 → 5.5）","url":"https://zenn.dev/hisatsune_dev/articles/58c63e6d8e3ff6","source":"Zenn","published_at":"2026-11-24 12:12","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"Claude 5.5移行で発生した定型文へのすり替わり事故と再発防止策","summary":"Claude Sonnet 4.5から5.5へのモデル移行に伴い、自動投稿システムが意図せず定型文を出力し続けたトラブルの事例。原因は、5.5で標準化された「思考（thinking）」トークンがmax_tokensを圧迫したことと、エラー時に定型文を返す例外処理が「正常終了」と誤認されたことにある。\n\n対策として、max_tokensの適切な再設定、stop_reasonの監視、および移行前の新旧モデルでのプロンプト比較テストの重要性を説く。AIを自動化パイプラインに組み込む際、エラーを隠蔽する設計は危険であり、異常を即座に検知できる仕組み作りが不可欠であると警鐘を鳴らしている。","importance":7},{"title":"Googleが実践するSTAMP/STPAとは何か？ 私たちのSREにも使えるのか","url":"https://zenn.dev/maruloop/articles/7ff108e29741b5","source":"Zenn","published_at":"2026-11-23 15:56","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"Google SREも注目するシステム安全分析手法「STAMP/STPA」の活用","summary":"GoogleのSRE本第2版でも取り上げられた、システム安全工学の手法「STAMP/STPA」の概念とSREへの応用可能性についての解説。\\n\\n従来の故障因果分析では見落としがちな、正常なコンポーネント同士の相互作用や設計上の安全制約の欠落を、制御理論に基づいて体系的に分析する手法。\n\n未知のリスク（Unknown Unknowns）の発見に有効であり、Webサービスのレジリエンス向上にどう活かせるかを考察している。","importance":8},{"title":"プログラミング教育の功罪","url":"https://zenn.dev/nobkz/articles/a8ed5591cd3e7d","source":"Zenn","published_at":"2026-11-23 13:40","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"AI時代におけるプログラミング教育の意義と過去の総括","summary":"長年プログラミング教育に携わってきた著者が、AI普及後の現状を踏まえ、これまでの教育活動の価値を再考するエッセイ。\\n\\nAIがコーディングを代替するようになった今、かつて論理的思考や課題解決能力の育成を謳っていたプログラミング教育の成果が、将来的なキャリアにおいてどれほど有効かを問い直す。\n\n教育者側の知見がAI時代にどう活かせるか、あるいは無駄になってしまったのかという葛藤が綴られている。","importance":7},{"title":"個人開発1-13.Cookie セッションの Web アプリで、CSRF とログインの総当たりを防ぐ","url":"https://zenn.dev/hideweb/articles/bd2fbbbffb1f69","source":"Zenn","published_at":"2026-11-23 21:47","genre":"web","genre_label":"Web開発・言語","headline":"個人開発WebアプリにおけるCSRF対策とログイン総当たり攻撃の防御手法","summary":"React + Go + MySQLで構築した個人開発アプリを公開するにあたり、CSRFと総当たり攻撃を防ぐためのセキュリティ実装を解説しています。\n\nCSRF対策には、SameSite属性に加え、Sec-Fetch-Siteヘッダーの検証とContent-Typeの制限を組み合わせた多層防御を採用。総当たり対策には、IP、ユーザー名、全体という3層の回数制限を導入しています。また、ユーザーの存在を推測させないためのbcrypt比較の工夫など、実用的なセキュリティ対策が具体的に示されています。","importance":8},{"title":"MacBookのトラックパッドが「しゃべる」　クリック感を生む振動で声を再現","url":"https://japan.cnet.com/article/35255305/","source":"Hatena","published_at":"2026-11-24 07:46","genre":"mobile","genre_label":"モバイル・ガジェット・個人開発","headline":"Macのトラックパッドを振動させて音を鳴らす実験ソフト登場","summary":"MacBookのForce Touchトラックパッドを振動させ、スピーカーなしで音声を再生する実験的ソフト「NO SPEAKER」が公開されました。モーターを毎秒最大4000回振動させることで、ガラス面から音を出力します。\n\n音声データから特定の周波数を抽出し、モーターを制御することで、機械的ではあるものの声やメロディーの再現に成功しています。OSの非公開機能を利用しているため実用性は限定的ですが、ハードウェアの物理的な可能性を追求する興味深い試みです。","importance":3},{"title":"RTX 5070 Ti 16GB で動くローカル LLM を 8 種類比べて、Claude から任せられそうな仕事とモデルを探った話","url":"https://zenn.dev/hikari_lab_dev/articles/ef4a3fe94b3b2f","source":"Zenn","published_at":"2026-11-24 11:38","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"RTX 5070 Ti環境でローカルLLM 8種を比較し、業務適性を検証","summary":"手元のGPU（VRAM 16GB）環境で、8種類のローカルLLMとクラウド版Claudeを比較検証したレポート。コード実装、事務作業、Web調査の3課題において、ローカルモデルの限界と適性を探った。\n\n結論として、仕様が明確なコード実装や定型的な事務作業にはQwen3.8-27BやGemma 4 26B-A4Bが活用可能だが、設計判断や複雑な修正は依然としてクラウドのClaudeが優位であると分析。ローカルLLMは「特定のタスク」に絞って任せることで実用性を発揮する一方、全体設計や判断は人間が担うべきという役割分担の指針を提示している。","importance":7},{"title":"不正な Ed25519 鍵を go-did-it は通し、did-go は弾いた：Goの DID ライブラリを比較すると解決速度は約25倍差","url":"https://zenn.dev/nonejp/articles/aebc70c9da9176","source":"Zenn","published_at":"2026-11-24 09:54","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"Go言語DIDライブラリ比較：go-did-itとdid-goの性能と安全性の違い","summary":"Go言語でDID（分散型識別子）を扱う2つのライブラリ、go-did-itとdid-goを比較検証した記事。go-did-itは「速さと使いやすさ」を重視し、did-goは「仕様への忠実さと安全性」を重視する設計となっている。\n\n検証の結果、go-did-itはdid-goより約25倍高速だが、不正な鍵の処理においてdid-goの方が厳格にエラーを弾くことが判明。信頼できる相手との大量処理にはgo-did-it、仕様準拠が求められる環境にはdid-goが適していると分析。ライブラリ選定におけるトレードオフを明確にした。","importance":6},{"title":"SIerのサバイバル術 - 客に詰められる前の仕込みと切り返し","url":"https://zenn.dev/okamyuji/articles/sier-survival-client-comebacks","source":"Zenn","published_at":"2026-11-23 01:36","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"SIer現場で客の理不尽な要求を切り返すためのサバイバル術","summary":"SIerでの長年の経験に基づき、顧客からの無理な要求や見積もり依頼に対して、エンジニアが身を守りつつ円滑にプロジェクトを進めるための処世術。\\n\\n「概算でいいので月曜までに」「現行通りで」といった現場で頻出する台詞に対し、事前に何を仕込んでおくべきか、どう切り返すかを工程順に解説。\n\n議事録の重要性や、変更要求に対するコストの可視化など、実務に直結する知見がまとめられている。","importance":7},{"title":"Penpot vs Figma、AI に画面を作らせたら「モデル次第」で差がついた話","url":"https://zenn.dev/and_ai/articles/aae15e5b23b876","source":"Zenn","published_at":"2026-11-24 11:00","genre":"web","genre_label":"Web開発・言語","headline":"Penpot vs Figma、AIによるデザイン生成の精度はモデル性能に依存","summary":"デザインツールPenpotとFigmaの公式MCPサーバーを使い、Claude Opus/Sonnet/Haikuでログイン画面の生成・編集を比較検証した記事。高性能なOpusでは両者互角だが、モデルが軽量になるほどPenpotは精度が低下し、Figmaは安定する傾向が見られた。\n\n差の要因はMCPサーバーの設計にあり、FigmaはAI向けに最適化されたコンテキストを提供している点が強み。一方、Penpotはオープンソースでコストを抑えられ、セルフホスト可能な点が魅力である。AI連携を前提とする場合、PenpotにはSonnet以上のモデルを推奨し、ツール選定の基準を明確にしている。","importance":6},{"title":"内部のAIと外部のAI ― Museを中心に、Codex・Claude Code・Suno・Colabまでを束ねる配置の話","url":"https://zenn.dev/nariyuki_pdm/articles/9604db4966e6e5","source":"Zenn","published_at":"2026-11-24 08:58","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"AIエージェントの統制と実行を分離する「内部・外部」配置戦略","summary":"AIエージェントを実務に組み込む際、実行場所ではなく「統制の所在」を軸に内部と外部を分ける運用手法が提案されています。Museを指揮者（第1層）とし、VM内やクラウド上の生成サービスを適材適所で使い分ける構成です。\n\n単一のAIに全てを任せるのではなく、決める役と批判する役を分離し、人間が判断すべき論点を明確化する「議論の型」を導入しています。これにより、AIの出力に対する盲点を防ぎ、開発や振り返りにおける品質と効率を両立させています。","importance":7},{"title":"S3 Vectors は RAG のベクトルストアに使えるか（40問で検証＋ハイブリッド検索に関する追記）","url":"https://zenn.dev/shino_i/articles/faeef70f08124c","source":"Zenn","published_at":"2026-11-24 00:57","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"RAGのベクトルストアとして「S3 Vectors」は実用可能か、40問の検証結果","summary":"Amazon Bedrock Knowledge Basesのベクトルストアとして、S3 Vectorsが実用可能かを検証したレポートです。OpenSearch Serverlessと比較して、検索頻度が低い場合のコスト効率と、検索待機時間の短縮に優れている点がメリットです。\n\n検証の結果、インデックス設定とメタデータフィルタを適切に行えば、RAGのベクトルストアとして十分活用できることが判明しました。ただし、高いQPSや低レイテンシが求められる場合はOpenSearchへのエクスポートを検討するなど、用途に応じた使い分けが推奨されています。","importance":7},{"title":"NTT 研究所の正体 - IOWNとNTTの研究所","url":"https://endecl.hatenablog.com/entry/2026/05/04/223141","source":"Hatena","published_at":"2026-11-23 22:46","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"NTTの株価低迷とIOWN構想の現状に関する考察","summary":"NTTの株価低迷と、同社が推進する次世代通信基盤「IOWN」構想の現状についての短い考察です。新NISA開始後の期待とは裏腹に、過去2年間株価が低迷している背景について触れています。\n\n競合他社と比較した際の市場評価や、内製AIなどの取り組みに対する市場の反応について言及されており、通信キャリアのビジネスモデルと技術投資のバランスに対する課題が示唆されています。","importance":5},{"title":"ページ内リンクの見出しが固定ヘッダーに隠れるので、scroll-padding-topとヘッダー高さの変数で直す","url":"https://zenn.dev/nadarakainc/articles/55671503799398","source":"Zenn","published_at":"2026-11-24 09:42","genre":"web","genre_label":"Web開発・言語","headline":"固定ヘッダーによるページ内リンクの隠れ問題をCSSで解決する手法","summary":"固定ヘッダー（position: sticky/fixed）によってページ内リンクの見出しが隠れる問題を、CSSのscroll-padding-topで解決する方法を解説。従来の手法よりも簡潔で、モダンブラウザでの標準的な対応策となる。\n\nヘッダーの高さが変動する場合のCSS変数による管理や、ResizeObserverを用いた動的追従、キーボード操作時のフォーカス位置の考慮など、実務で直面するエッジケースへの対応も網羅。アクセシビリティ（WCAG 2.2）を考慮した実装の重要性についても触れており、フロントエンド開発のベストプラクティスを提示している。","importance":5},{"title":"「コードを書く」から「迷わず判断する」へ——AIエージェント時代の開発ワークフローを自作ツールで再設計した話","url":"https://zenn.dev/syarihu/articles/ba25f243ca79ed","source":"Zenn","published_at":"2026-11-24 08:00","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"AIエージェント開発を効率化するRust製ツール「agent-adjutant」","summary":"AIエージェントに並行作業を任せるためのRust製オーケストレーター「agent-adjutant」の開発変遷が紹介されています。CLIからWebボード中心のUIへ進化し、タスクの起票から進捗管理までを効率化しました。\n\n「hub」と「worker」の役割分担を明確にし、人間は「迷わず判断する」ことに集中するワークフローを構築しています。AIに実装を任せつつ、人間が確認すべきポイントを絞り込むことで、短期間で大量のPRをマージする開発スタイルを実現しています。","importance":7},{"title":"Privatter+への不正アクセスに関するご報告とお詫び | Privatter+","url":"https://privatter.me/page/6b03bed2c1d86","source":"Hatena","published_at":"2026-11-23 21:12","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"Privatter+への不正アクセス発生に伴う報告とセキュリティ対策の強化","summary":"Privatter+において第三者による不正アクセスが発生し、一部アカウントが不正操作されたことに関する報告とお詫びです。\n\n被害拡大防止のため、パスワード再設定機能の脆弱性修正、ログインおよびリクエスト制限の強化、既存セッションの無効化などの対応が実施されました。ユーザーに対してはパスワードの再設定が求められており、サービス運営におけるセキュリティ対策の重要性と、インシデント発生時の迅速な対応の重要性が示されています。","importance":7},{"title":"JSON Schema から Go 構造体を生成しても、YAML の検証は付いてこない","url":"https://zenn.dev/kyrenzk/articles/json-schema-go-codegen","source":"Zenn","published_at":"2026-11-24 08:32","genre":"web","genre_label":"Web開発・言語","headline":"JSON SchemaからのGo構造体生成とYAML検証の限界","summary":"JSON SchemaからGoの構造体を生成しても、YAMLの検証機能は自動的には付与されません。yaml.v3などのライブラリで読み込むと、スキーマ定義の制約が無視されてしまう問題があります。\n\n検証の結果、生成コードによるUnmarshalJSONはJSON経由でしか機能せず、未知のフィールド検出も不完全であることが判明しました。結論として、型定義は生成ツールに任せつつ、YAMLの検証はyajsv等の外部ツールを前段に配置する構成が推奨されます。","importance":5},{"title":"コーディングエージェントが変えたOSS開発のプロセスと喜び","url":"https://zenn.dev/cybergarage/articles/5ee7ac6b3b0565","source":"Zenn","published_at":"2026-11-24 02:37","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"コーディングエージェントの活用でOSS開発の停滞を打破し、開発プロセスを再定義","summary":"長年停滞していたOSSプロジェクトが、コーディングエージェントの導入により再び動き出した体験談です。エージェントに調査・実装・テストのサイクルを任せることで、開発者は「環境構築と意思決定」に集中するスタイルへと変化しました。\n\n単にコードを書かせるだけでなく、エージェントがログや実機を通じて自律的に調査できる環境を整えることが重要であると説いています。AI時代におけるものづくりの楽しさや、OSS貢献のあり方について深い洞察が示されています。","importance":8},{"title":"free-disk-spaceでGitHub Actionsの容量不足を改善する","url":"https://zenn.dev/entai_hawk/articles/dd43c36a3e0449","source":"Zenn","published_at":"2026-11-23 18:40","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"GitHub Actionsのディスク容量不足をfree-disk-spaceで解消する","summary":"GitHub ActionsでDockerイメージのビルド・プッシュを行う際、runnerのディスク容量不足（No space left on device）が発生する課題に対し、不要なSDK等を削除する「free-disk-space」Actionを導入して解決した事例。\n\n\\n\\nキャッシュ抽出処理時にディスク容量が逼迫していたことが原因であり、ビルド前に不要なファイルを削除することで空き容量を大幅に確保し、CIの安定稼働を実現した。同様の環境でCIの失敗に悩むエンジニアにとって、失敗の切り分けや対策の参考となる知見である。","importance":7},{"title":"箱入り娘ソルバーを約9,400倍高速化してもらった","url":"https://zenn.dev/kaorun343/articles/klotski-solver-optimization","source":"Zenn","published_at":"2026-11-23 11:32","genre":"web","genre_label":"Web開発・言語","headline":"Claude Codeを活用した箱入り娘ソルバーの9,400倍高速化","summary":"Rustで実装した箱入り娘パズルのソルバーを、Claude Codeの支援を受けてアルゴリズムの改善とビットボードへの最適化を行い、約9,400倍の高速化を実現した技術解説。\\n\\n重複判定の効率化、対称性の考慮、盤面表現のビットボード化といった段階的な最適化プロセスを紹介。\n\nAIを活用してコードのパフォーマンスを劇的に向上させるための具体的なアプローチが示されている。","importance":8},{"title":"AIが作りAIが決める時代に、人は何を「判断」するのか？","url":"https://zenn.dev/ncdc/articles/a522c2c50022d2","source":"Zenn","published_at":"2026-11-23 17:30","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"AIが選択肢を提示する時代に、人間が担うべき「判断」の責任","summary":"AIエージェントが技術選定や実装の選択肢を提示する現代において、人間が「自分で判断した」と言い切れるのかという問いを投げかける考察記事。\\n\\nAIが提示した選択肢をそのまま採用するプロセスが常態化すると、人間による中身の判断が消失し、AIが生成した情報がAIの学習データとして循環する悪循環に陥るリスクがある。\n\nAI以前から人間は専門家や公式ドキュメントに判断を委ねてきたが、これからの時代は「責任としての判断」を人間が主体的に引き受ける重要性が増している。","importance":8},{"title":"AWS Emulator を使用してローカルで AWS に対してアプリケーションをテストする | Amazon Web Services","url":"https://aws.amazon.com/jp/blogs/news/test-your-applications-against-aws-locally-with-aws-emulator/","source":"Hatena","published_at":"2026-11-13 11:20","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"AWS Emulator発表：ローカル環境でのAWS APIテストが可能に","summary":"AWSが発表した、ローカル環境でAWS APIをエミュレートできる「AWS Emulator」の概要と活用方法の紹介。\\n\\nAWS CLIやSDK、コーディングエージェントがクラウドと同じAPIをローカルで利用可能になり、デプロイなしで高速なテストサイクルを実現する。\n\nRustで実装されており、軽量かつ既存のテストスイートとの親和性が高い点が特徴。","importance":9},{"title":"JSConf JP 2026に参加記録・初登壇の反省など","url":"https://zenn.dev/igrep/articles/2026-11-jsconfjp","source":"Zenn","published_at":"2026-11-24 00:08","genre":"web","genre_label":"Web開発・言語","headline":"JSConf JP 2026登壇記録。AIエージェント活用と技術発表における反省点","summary":"JSConf JP 2026への初登壇を振り返る参加レポートです。Wasm Component Modelと所有権をテーマにした発表の準備過程や、当日の反省点がまとめられています。\n\n特に、図解ツールの作成に時間をかけすぎたことや、AIエージェントに処理を任せた結果生じた修正コストなど、開発現場でのAI活用における教訓が語られています。また、TC39プロセスやNode.jsの非同期処理に関するセッションの要約も含まれており、フロントエンド技術のトレンドを把握する上で有益な内容です。","importance":6}]};
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
