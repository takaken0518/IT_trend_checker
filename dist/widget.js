// __EMBEDDED_NEWS_START__
globalThis.__IT_TREND_EMBEDDED_DATA__ = {"updated_at":"2026-11-21 21:19:49 JST","total_count":50,"config":{"selected_genres":["ai","web","infra","mobile","biz"],"other_genre_min_ratio":0.25,"max_age_hours":72.0,"genres":{"ai":"AI・LLM・機械学習","web":"Web開発・言語","infra":"インフラ・クラウド・セキュリティ","mobile":"モバイル・ガジェット・個人開発","biz":"ITビジネス・キャリア・マネジメント","other":"総合・その他IT"}},"articles":[{"title":"形式検証を活用した脆弱性診断LLMのプロトタイプをEthereum Foundationに納品｜Nyx Foundation","url":"https://note.com/nyxfoundation/n/n782d4fb32344","source":"Hatena","published_at":"2026-11-21 16:28","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"形式検証とLLMを組み合わせたEthereum脆弱性診断ツールSPECA","summary":"Nyx Foundationが開発した、LLMを用いた脆弱性診断ツール「SPECA」の概要。仕様書からセキュリティプロパティを抽出し、形式検証（Lean 4）で証明された性質を診断項目へ接続することで、精度の高い脆弱性診断を実現しています。\n\n過去の脆弱性データセットを活用し、抽象的な仕様を具体的なコード検査項目へ落とし込むプロセスを自動化。診断担当者が根拠を追跡可能な設計にすることで、大規模なコントラクト開発におけるセキュリティの信頼性を高めています。","importance":9},{"title":"IPv6前提のコンテナ間通信 PrivateLink・VPC Lattice・VPCエンドポイントを実測で比べる","url":"https://zenn.dev/mob_engineer/articles/20261121-ipv6-container-network-mob_engineer","source":"Zenn","published_at":"2026-11-21 15:30","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"IPv6環境におけるコンテナ間通信経路の性能とセキュリティ比較","summary":"IPv6前提のコンテナネットワーク設計において、PrivateLink、VPC Lattice、VPCエンドポイントの3つの経路を実測比較。遅延やセキュリティの観点から、それぞれの適材適所を解説しています。\n\nPrivateLinkは低遅延で安定している一方、VPC Latticeは柔軟なルーティングが可能。S3エンドポイントのセキュリティグループ制限など、設計時に注意すべきポイントも網羅。経路選択は単なる速さだけでなく、サービス間の信頼関係や管理コストを基準にすべきだと結論付けています。","importance":8},{"title":"Ruby の脆弱性 CVE-2026-132825(Ruby2Shell)についてまとめてみた - piyolog","url":"https://piyolog.hatenadiary.jp/entry/2026/11/20/224814","source":"Hatena","published_at":"2026-11-21 04:18","genre":"web","genre_label":"Web開発・言語","headline":"Rubyの脆弱性「Ruby2Shell」の概要と影響範囲を解説","summary":"Rubyの文字列大文字小文字変換処理に、ヒープバッファオーバーフローを引き起こす脆弱性（CVE-2026-132825、通称Ruby2Shell）が発見された。特定の1バイト文字コードで細工した文字列を処理すると、メモリ破壊やRCE（リモートコード実行）に至る可能性がある。\n\nRailsやSinatraの既定構成では、認証前に攻撃者の入力が脆弱な処理に到達する経路が存在する。UTF-8環境は影響を受けないが、アプリケーションがクライアント指定の文字コードを尊重する場合にリスクが高まる。開発元は修正版を公開しており、利用者は速やかなアップデートが推奨される。","importance":9},{"title":"Claudeを使い「リーマン予想」を証明か　Anthropic数学者が発表　Lean検証も通過、数学界が精査へ","url":"https://japan.cnet.com/article/35255245/","source":"Hatena","published_at":"2026-11-21 08:02","genre":"other","genre_label":"総合・その他IT","headline":"Claudeを活用したリーマン予想の証明と機械検証の動向","summary":"Anthropicの数学者Levent Alpöge氏が、Claudeを用いてリーマン予想の証明を見つけたと発表。証明コードはLeanによる機械検証を通過したが、数学界で正式に認められたわけではなく、精査が続いている。\n\n今回の証明は、167年間未解決だった難問に対する大きな進展として注目されている。MITの研究者らによる検証が進められており、数学界での評価が待たれる状況である。AIが数学の難問解決に寄与する可能性を示す象徴的な出来事である。","importance":10},{"title":"ソフトウェアファクトリーとコード設計と顧客価値","url":"https://kosui.me/posts/2026/11/15/code-design-after-agents","source":"Hatena","published_at":"2026-11-21 09:35","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"AI時代のテックリード論：開発速度よりも「機能適合性」が差別化要因になる","summary":"AIエージェントによる開発が普及する中で、コード設計の価値が低下しているのではないかという疑問に対し、むしろ重要性は高まっていると主張しています。開発速度が向上しても、顧客が認知できる量には限界があるため、差別化要因は「機能適合性」という品質にシフトします。\n\n複雑な業務環境において、人とエージェントがビジネスロジックを把握しやすい設計を維持することが、想定外の挙動を防ぎ、顧客価値を最大化します。AIを導入するからこそ、人間中心の視点と設計の重要性を再認識すべきだというテックリードの視点です。","importance":8},{"title":"温度センサーと脱獄 Kindle で、お天気ダッシュボードを作ってみた","url":"https://zenn.dev/zakkie/articles/c99167d7d037d5","source":"Zenn","published_at":"2026-11-21 10:33","genre":"mobile","genre_label":"モバイル・ガジェット・個人開発","headline":"脱獄KindleとESP32で構築する屋外温度・天気予報ダッシュボード","summary":"余ったKindle Paperwhiteを脱獄して電子ペーパーディスプレイとして活用し、ESP32で取得した屋外温度と天気予報を表示するダッシュボードの制作記です。クラウド側にはCloudflare WorkersとD1を使用し、コストを抑えた構成を実現しています。\n\nESP32でのRF受信処理や、Cloudflare Workersでの画像生成（Browser Rendering）の工夫など、技術的な挑戦が盛り込まれています。特に無料枠の制限を考慮したCPU時間の最適化や、電子ペーパーの特性を考慮した更新制御など、個人開発における実践的な知見が豊富です。","importance":7},{"title":"AIが数学の未解決問題「リーマン予想」を証明か　米アンソロピックの数学者が主張 - BBCニュース","url":"https://www.bbc.com/japanese/articles/cwlyl6ymz841o","source":"Hatena","published_at":"2026-11-21 13:22","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"AIによるリーマン予想証明の主張と数学界の反応","summary":"アンソロピック社の数学者が、AI「Claude」を用いて数学の難問「リーマン予想」を証明したと主張。Lean言語で記述された25万ページに及ぶ証明コードが公開され、大きな波紋を呼んでいます。\n\n過去にもAIによる数学的証明の発表はありましたが、専門家による検証には多大な時間を要する見込みです。数学界からはAIの利用に対する批判や慎重な姿勢も示されており、AIが数学研究の歴史的転換点となるか、その妥当性が厳しく問われています。","importance":10},{"title":"リーマン予想の「証明」が同じ日に 2 本出てきたので、受験数学の言葉で整理してみた（学習メモ）","url":"https://zenn.dev/touyou/articles/riemann_hypothesis_two_proofs","source":"Zenn","published_at":"2026-11-21 10:31","genre":"other","genre_label":"総合・その他IT","headline":"リーマン予想の証明を高校数学の言葉で整理する学習メモ","summary":"2026年11月に発表されたリーマン予想の「証明」について、大学以降の数学に詳しくない層に向けて、受験数学の道具（複素数平面など）を用いて解説した学習メモ。ゼータ関数と素数の関係、零点の位置が素数の分布に与える影響を紐解く。\n\nAIを活用して専門的な資料を噛み砕き、リーマン予想が何を意味し、なぜ重要なのかを直感的に理解できるよう整理。数学的な厳密さよりも、概念の理解を優先した構成となっている。","importance":9},{"title":"「パッチ地獄」が米IT障害誘発、AIがせかす脆弱性修正　銀行や空港停止 - 日本経済新聞","url":"https://www.nikkei.com/article/DGXZQOGN18CYM0Y6A111C2000000/","source":"Hatena","published_at":"2026-11-21 09:21","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"AIが加速させる脆弱性修正の「パッチ地獄」が引き起こすシステム障害","summary":"米国の銀行や空港で相次ぐシステム障害の背景には、AIが膨大な脆弱性を発見し、修正パッチの適用を急がざるを得ない「パッチ地獄」の状況があります。AIによる攻撃コストの低下と防御の自動化が、インフラの安定運用に新たなリスクをもたらしています。\n\n日本のインフラも同様のリスクを抱えており、多段階の防御や慎重な更新管理が求められています。AIがもたらすセキュリティの自動化と、それに伴う運用負荷の増大というジレンマが、現代のITインフラにおける喫緊の課題となっています。","importance":9},{"title":"JVM がコードを実行する仕組みを理解したい","url":"https://zenn.dev/rea9r/articles/jvm-code-execution","source":"Zenn","published_at":"2026-11-21 17:06","genre":"web","genre_label":"Web開発・言語","headline":"JVMのJITコンパイルとコード実行の仕組みを徹底解説","summary":"JVMがバイトコードをどのようにネイティブコードへ変換し実行しているか、JITコンパイルのプロセスを詳細に解説。インタプリタからC1、C2コンパイラへの段階的な最適化の流れを、ログとjcmdの出力を用いて検証しています。\n\nメソッドの呼び出し回数やループ回数に基づくコンパイル判断、インライン化の条件、code cacheの役割など、JVM内部の動作を理解するための基礎知識を整理。JDKのバージョンアップに伴う内部挙動の変化を意識することの重要性を説いています。","importance":7},{"title":"S&P500が調整局面入り　「重なる最悪の事態」AI株高ピーク過ぎたか - 日本経済新聞","url":"https://www.nikkei.com/article/DGXZQOFL20CUL0Q6A121C2000000/","source":"Hatena","published_at":"2026-11-21 08:11","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"S&P500が調整局面入り、AI株高のピークアウト懸念が浮上","summary":"米株式市場でS&P500種株価指数が7日続落し、最高値から10%超下落して調整局面入りした。エヌビディアの好決算やアンソロピックの新規上場といったポジティブな材料があっても株価の下げ止まりには至らず、AI関連銘柄への熱狂がピークを過ぎたとの見方が強まっている。\n\n市場ではデータセンター建設の抑制懸念や、AI以外の銘柄への選別が進む動きが見られる。ウォール街ではAI投資のリスクに対する警戒感も広がっており、今後の市場動向はAI一辺倒からより慎重な投資判断へとシフトする可能性がある。","importance":7},{"title":"SSDの価格は2027年後半に下落し始める可能性あり","url":"https://gigazine.net/news/20261120-ssd-prices-outlook/","source":"Hatena","published_at":"2026-11-20 22:06","genre":"other","genre_label":"総合・その他IT","headline":"SSD価格は2027年後半に下落予測、HDDは高止まりが続く見通し","summary":"アナリストの予測によると、HDD価格は今後2年程度高止まりする一方、SSDは2027年後半に供給過多となり価格が下落し始める可能性がある。SSDはNANDフラッシュの生産量増加が価格押し下げ要因となるが、HDDはクラウド事業者との長期契約により価格下落には時間がかかる見通しだ。\n\nSSDのアップグレードを検討しているユーザーは2027年後半まで待つのが賢明だが、HDDは2028年まで価格が下がらないと予想されている。バックアップ用途などで必要な場合は、価格下落を待たずに購入する判断も必要となる。市場動向を考慮した計画的なストレージ投資が求められる。","importance":6},{"title":"初心者がAIとMAXのAPKを解析してみた【後編】","url":"https://zenn.dev/aki0804/articles/ac6690df48a1ae","source":"Zenn","published_at":"2026-11-21 17:44","genre":"mobile","genre_label":"モバイル・ガジェット・個人開発","headline":"Androidアプリ「MAX」のAPK解析と通信挙動の調査記録","summary":"Androidアプリ「MAX」のAPKを解析し、通信処理や端末識別子の生成ロジックを調査したレポート。Fridaを用いた動的解析により、アプリの通信フローやセッション初期化時の挙動を検証しました。\n\n通信記録のUID照合やTLS接続の解析を通じて、アプリがバックグラウンドで行う通信や、端末環境の変化に対する要求ログの追従性を確認。暗号化された通信内容の特定には至らなかったものの、実行環境の変更がアプリの挙動に与える影響を詳細に記録しています。","importance":5},{"title":"超難問「リーマン予想」AIと証明か　米アンソロピックの数学者発表：朝日新聞","url":"https://www.asahi.com/articles/ASVCP10Z2VCPUHBI00GM.html","source":"Hatena","published_at":"2026-11-21 13:12","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"AIと数学者の共同作業によるリーマン予想証明の衝撃","summary":"アンソロピック社の数学者レベント・アルポゲ氏が、AI「Claude」との共同作業でリーマン予想の証明を発見したと発表。Leanを用いた形式検証により、論理的な正しさが示唆されています。\n\n数学界の懸賞問題であるリーマン予想の解決は歴史的快挙ですが、専門家による理解と検証はこれからです。AIが数学者の思考を補助し、難問解決を加速させる可能性を示す一方、その証明の質やAIの役割について議論が続いています。","importance":10},{"title":"モダンな情シスは、AIエージェントを育て、任せ、圧倒的な生産性を生む｜kajinari | モダンな情シス","url":"https://note.com/kajinari/n/n19c73d819b14","source":"Hatena","published_at":"2026-11-21 00:27","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"モダンな情シスがAIエージェントを活用して生産性を10倍にする方法","summary":"NOTAのCorp ITチームは、日々の運用作業のほとんどをClaudeのSkillとして定義し、AIエージェントに自動化させることで圧倒的な生産性を実現している。アカウント発行や権限付与などのルーチンワークをAPI経由でAIに実行させることで、社員数増加に伴う負荷増大を回避している。\n\n成功の鍵は、AIが操作しやすいようにIdP（Okta）やAPI連携環境を整備したことにある。AIに丸投げするのではなく、人が要所で確認する体制を維持しつつ、AIによる自動化を前提とした働き方へシフトした。この取り組みは、少人数の情シスチームが大規模な組織を支えるためのモデルケースとなる。","importance":8},{"title":"一番無難じゃないキャラが優勝　Suica「B案」とAI時代の愛されかた","url":"https://www.watch.impress.co.jp/docs/topic/watchplus/2157644.html","source":"Hatena","published_at":"2026-11-21 11:31","genre":"other","genre_label":"総合・その他IT","headline":"Suica新キャラ「B案」選出に見るAI時代に求められる「余白」の重要性","summary":"Suicaの次期キャラクターに選ばれた「B案」は、その奇抜な造形からSNSで大きな話題を呼びました。審査員は、このキャラクターが持つ「余白」こそが二次創作や共感を呼び、愛される存在になるための鍵であると指摘しています。\n\nまた、AIが何でも即座に答えてくれる時代において、あえて「隙」を残すことでユーザーが関わりたくなる存在の重要性が語られています。Suicaが単なる決済手段から、ユーザーの心の拠り所となるデバイスへ進化する可能性を示唆する興味深い事例です。","importance":5},{"title":"画面とAPIで同じ入力ルールを使う：React Hook Form＋Zod＋MSW","url":"https://zenn.dev/takahkok0812/articles/655bdf127b224a","source":"Zenn","published_at":"2026-11-21 10:58","genre":"web","genre_label":"Web開発・言語","headline":"React Hook FormとZodで実現する画面・API共通の入力バリデーション","summary":"業務アプリ開発において、画面とサーバー間でバリデーションルールが食い違う問題を解決するため、Zodスキーマを単一のソースとして共有する手法を解説しています。React Hook FormとMSWを組み合わせ、入力チェックを「形と長さ」と「業務ルール」に分離して実装します。\n\nZodで定義したスキーマをAPIと画面の両方で利用することで、エラーメッセージや型の整合性を担保します。また、業務ルールは純粋関数として切り出すことで、テスト容易性を高めつつ、画面の使いやすさとAPIの堅牢性を両立させる設計パターンが示されています。","importance":8},{"title":"作れるエンジニアから、価値を届けるエンジニアへ","url":"https://zenn.dev/kubell/articles/3c3490a3592bb1","source":"Zenn","published_at":"2026-11-21 00:50","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"AI時代にエンジニアが「価値を届ける」ための役割転換","summary":"AIの普及により実装コストが低下した今、エンジニアには「作るスピード」だけでなく「価値を生み出すスピード」が求められている。従来はPdMが担っていた「何を作るか」の意思決定にエンジニアが関与し、プロトタイピングを通じて価値を検証する重要性が増している。\n\n価値を最大化するためには、「誰に」「何を」「どう届けるか」を深く考える必要がある。ターゲットの抽象度を適切に設定し、ユーザーのペインを捉え、プロダクトの価値が伝わる体験を設計することが重要だ。エンジニアが技術の枠を超えてビジネスの意思決定に踏み込むことで、より価値の高いプロダクト開発が可能になる。","importance":7},{"title":"令和8年に「INFOBAR」が復活するも、通話とSMSしかできない「ダムフォン」に","url":"https://www.itmedia.co.jp/mobile/articles/2611/21/news011.html","source":"Hatena","published_at":"2026-11-21 15:49","genre":"mobile","genre_label":"モバイル・ガジェット・個人開発","headline":"通話とSMSに特化したダムフォン「INFOBAR ZERO」の登場","summary":"KDDIの「au Design project」から、インターネット通信を排除した音声通話とSMS専用の携帯電話「INFOBAR ZERO」が発表されました。デジタルデトックスを目的とし、WebブラウジングやSNS機能をあえて搭載しない設計です。\n\nSIMロックフリー端末としてオープンマーケットで販売される本機は、スマートフォンの利便性と対極にある「シンプルな繋がり」を提案。現代のSNS中心のコミュニケーションに対するアンチテーゼとして、若年層を含むユーザーにどう受け入れられるかが注目されています。","importance":5},{"title":"NVIDIAグラボにて発生していた「SSD無限酷使」不具合の修正バージョンが配信。“何もしてない”のにSSDに数十GB書き込まれていた問題 - AUTOMATON","url":"https://automaton-media.com/articles/newsjp/20261121-480255/","source":"Hatena","published_at":"2026-11-21 09:45","genre":"other","genre_label":"総合・その他IT","headline":"NVIDIAグラボの「SSD無限書き込み」不具合、最新ドライバーで修正","summary":"NVIDIAのGPUドライバー「GeForce Game Ready Driver」の一部バージョンで発生していた、無操作時にもSSDへ大量の書き込みが行われる不具合が、最新バージョンで修正されました。\n\nこの不具合はSSDの寿命を縮める懸念がありましたが、修正版の適用により解消されます。ユーザーは最新のドライバーへアップデートすることが推奨されます。","importance":5},{"title":"僕の Claude Code 開発のやり方（2026年11月）- AI に書かせて、別の AI に疑わせる","url":"https://zenn.dev/hironoah/articles/claude-code-my-workflow-202611","source":"Zenn","published_at":"2026-11-21 16:38","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"Claude Codeを活用したAI開発のワークフローと敵対的検証","summary":"AIエージェントを駆使した開発手法の棚卸し。実装はAIに任せ、人間は監督と最終確認に徹する「書くのはAI、疑うのは別のAI、決めるのは自分」というスタイルを提唱しています。\n\nサブエージェントによる分担作業や、会話履歴を共有しない独立したAIによるレビュー（敵対的検証）を導入することで、バグの発見率を向上。失敗をルール化し、機械的に再発防止を図る仕組みを構築することで、開発効率と品質を両立させています。","importance":8},{"title":"AWS IoT Coreに届いたセンサー値をTimestream for InfluxDBに保存してGrafanaでグラフにする","url":"https://zenn.dev/edge2cloud/articles/aws-iot-core-timestream-influxdb-grafana","source":"Zenn","published_at":"2026-11-21 10:42","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"AWS IoT CoreからTimestream for InfluxDBへのデータ保存と可視化","summary":"ESP32から送信されたセンサーデータをAWS IoT Coreで受け取り、Lambdaを介さずに直接Timestream for InfluxDBへ保存する構成を解説しています。2026年8月に追加されたInfluxDBアクションを活用することで、よりシンプルなパイプラインを実現します。\n\nSecrets Managerによるトークン管理や、IAMロールの設定、Grafanaを用いた可視化までの一連の手順を網羅。Timestream for InfluxDBの課金体系や、パブリックサブネットへの配置といった注意点も整理されており、IoTデータの収集・分析基盤を構築する際の参考になります。","importance":7},{"title":"設計書のないClassic ASP アプリを ASP.NET Core にマイグレーションしたときにやったこと","url":"https://zenn.dev/pomio/articles/classic-asp-migration-no-design-docs","source":"Zenn","published_at":"2026-11-21 17:56","genre":"web","genre_label":"Web開発・言語","headline":"設計書なしのClassic ASPをASP.NET Coreへ移行する際の戦略","summary":"設計書が存在しない10万ステップ規模のClassic ASPシステムを、ASP.NET Coreへ移行したプロジェクトの記録。納期遵守を最優先し、「最新技術を追わない」「綺麗に作ろうとしない」という方針を徹底しました。\n\nコード変換には生成AIを活用しつつ、レビューで品質を担保。アーキテクチャにはレイヤードアーキテクチャを採用し、ORMにはDapperを選択するなど、メンバーのスキルセットと保守性を考慮した現実的な判断が成功の鍵となりました。","importance":6},{"title":"「一から組むなら」を4つの案で比べ、先に数えてから1段目だけ入れた記録","url":"https://zenn.dev/hiroxasobiba/articles/rebuild-from-scratch-four-plans","source":"Zenn","published_at":"2026-11-20 23:24","genre":"other","genre_label":"総合・その他IT","headline":"AIエージェントによる開発運用の見直しと「関所」の再定義","summary":"個人開発において、AIエージェントに仕組みの再設計を依頼し、現状の運用を改善する試みが行われた。複数のAIモデルから提案を募り、共通する骨格を抽出した上で、まずは「先に数えてから1段目だけ入れる」という慎重なアプローチを選択した。\n\n過去の報告ミスを分析した結果、機械的なチェックだけでは防げないヒューマンエラーの存在が浮き彫りになった。証拠の有無を確認する「関所」を設けるだけでなく、報告内容の質を担保するプロセスの重要性が再確認された。AIの提案を鵜呑みにせず、現状の課題を定量的に把握してから段階的に導入する手法は、開発効率化の参考になる。","importance":5},{"title":"【分析】「私はMAGAではない」　マスク氏の方向転換が発する強烈なサイン","url":"https://www.cnn.co.jp/usa/35255243.html","source":"Hatena","published_at":"2026-11-21 09:39","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"イーロン・マスク氏の「私はMAGAではない」発言が示す政治的転換のサイン","summary":"イーロン・マスク氏がトランプ氏のMAGA運動との距離を置く発言を行い、自身の政治的立場を「穏健」と主張しました。過去の熱烈な支持から一転したこの方向転換は、民主党の復権を見据えた自己防衛的な損得勘定であると分析されています。\n\nこの動きは、トランプ氏を支持してきた他の企業幹部や組織に対しても、政治的リスクを再計算させるメッセージとなり得ます。米国政治における重要な局面において、大富豪の戦略的転換がどのような影響を及ぼすのかを考察しています。","importance":6},{"title":"1万円のシンセをAIで魔改造。電子楽器のファームウェア開放が始まった | ギズモード・ジャパン","url":"https://www.gizmodo.jp/article/0b0516f2-94f8-442e-bdae-2987f090be13/","source":"Hatena","published_at":"2026-11-20 23:31","genre":"mobile","genre_label":"モバイル・ガジェット・個人開発","headline":"電子楽器のファームウェア開放が加速、AIによる魔改造ブーム","summary":"安価なシンセサイザー「FM-1」のファームウェアをユーザーが解析・改造する動きが活発化し、メーカー側もSDKやソースコードを公開してこれを後押しする動きを見せている。AIコーディングツールの普及により、プログラミング経験が少ないユーザーでも機能拡張が可能になったことが背景にある。\n\nメーカーにとっても、ユーザーが自由に機能を追加できる製品はコミュニティの活性化と製品寿命の延長につながるメリットがある。ハードウェアと基本OSのみを提供し、ソフトウェアはユーザーが育てるという新しい楽器開発の形が、業界の新たなトレンドとして注目されている。","importance":6},{"title":"【TLA+】AIにテストケースを書かせるな。ルールを書け","url":"https://zenn.dev/karamage/articles/73027ee36796dc","source":"Zenn","published_at":"2026-11-21 11:12","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"AI時代のテスト戦略：テストケースを書くのではなく「守るべきルール」を定義せよ","summary":"AIがコードとテストを同時に生成する時代において、人間がテストケースを考える手法は「自作自演の満点」を生み出し、本質的なバグを見逃すリスクがあります。これを解決するために、テストケースではなく「システムが守るべき不変のルール」を定義するアプローチが提案されています。\n\nTLA+やQuintといったモデル検査言語を用い、状態遷移のルールを記述することで、機械的に網羅的な検証を行う手法を紹介しています。人間は「採点基準（ルール）」を決め、検証は機械に任せるという役割分担が、AI時代のソフトウェア品質保証の鍵となります。","importance":9},{"title":"ESP32 + BME280の測定値をAWS IoT CoreにMQTTで送る：証明書・ポリシーでハマらない手順","url":"https://zenn.dev/edge2cloud/articles/esp32-bme280-aws-iot-core-mqtt","source":"Zenn","published_at":"2026-11-21 10:26","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"ESP32からAWS IoT CoreへのMQTT接続：証明書とポリシー設定の完全ガイド","summary":"ESP32を用いて温湿度センサーの値をAWS IoT CoreへMQTTで送信するための、最小構成かつ安全な接続手順を解説しています。X.509証明書を用いた認証や、ThingNameを用いたポリシーの絞り込みなど、セキュリティを考慮した設定が重要です。\n\n接続失敗時の切り分け方法として、MQTTステータスコードの確認やCloudWatch Logsの活用法を紹介。特にポリシー違反による切断や、バッファサイズ不足といった「よくあるハマりどころ」への対策が詳細にまとめられており、IoT開発のトラブルシューティングに役立ちます。","importance":7},{"title":"簿記のルールをコードで守る：複合仕訳・貸借一致チェック・訂正仕訳の設計","url":"https://zenn.dev/burrata/articles/ssei-ledger-bookkeeping-rules","source":"Zenn","published_at":"2026-11-21 15:52","genre":"web","genre_label":"Web開発・言語","headline":"複式簿記アプリにおける貸借一致チェックの堅牢な実装","summary":"個人事業主向け複式簿記アプリの開発において、簿記のルールをコードで強制する設計手法を紹介。仕訳を「本体」と「明細」に分離し、複合仕訳に対応可能なデータモデルを構築しました。\n\n貸借一致のチェックを画面（リアルタイム表示）、API（Pydanticによるバリデーション）、データベース（SQLAlchemyイベント）の複数層で行うことで、データの整合性を担保。どの経路からデータが入力されても不正な仕訳が保存されない堅牢なシステム設計を実現しています。","importance":6},{"title":"FDEって結局、何をする人なのか","url":"https://zenn.dev/boku_yaji/articles/ad087efbe61ec7","source":"Zenn","published_at":"2026-11-20 23:37","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"FDE（Forward Deployed Engineer）が顧客現場で価値を出すための改善ループ","summary":"FDEは顧客の現場で課題を理解し、実装から導入まで関わる役割だが、単にAIの出力精度を上げるだけでは現場の業務は楽にならない。強化学習の考え方を応用し、評価指標と現場の目的が一致しているかを常に検証し続ける必要がある。\n\nプロンプト調整などの「出力の改善」に終始せず、顧客との対話を通じて「何を良いとするか」という評価基準そのものを定義し直すことが重要だ。AIの回答が採用されたかだけでなく、実際に業務が効率化したかを記録・分析し、現場のペインを解消する真の改善ループを回すことがFDEの価値である。","importance":6},{"title":"1Password(サブスク)とProton Pass(買い切りプラン)を比較！","url":"https://zenn.dev/shirayukihime/articles/9937e226ecd631","source":"Zenn","published_at":"2026-11-21 02:55","genre":"mobile","genre_label":"モバイル・ガジェット・個人開発","headline":"1PasswordとProton Passの買い切りプランを徹底比較","summary":"定番のパスワード管理ツール「1Password」と、買い切りプランを提供する「Proton Pass」を比較。機能面では1Passwordが洗練されている一方、Proton Passは無料版の範囲が広く、SimpleLoginとの連携によるメールエイリアス機能が強みである。\n\n買い切りプランは4〜5年以上の利用で元が取れる計算だが、サービスの継続性に依存するリスクもある。長期的な運用を前提とするなら買い切りも選択肢だが、家族利用やサポートの充実度を重視するならサブスク型の1Passwordが適している。自身の利用スタイルに合わせた選択が重要だ。","importance":5},{"title":"AIエージェントに堅牢なテストを書かせるには？","url":"https://zenn.dev/yasuakiomokawa/articles/3ac970c3a3a1c7","source":"Zenn","published_at":"2026-11-21 18:09","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"AIコーディングエージェントに堅牢なテストを書かせる4つの手順","summary":"AIエージェントが生成するテストコードが実装変更のたびに壊れる問題に対し、筆者が15日間の検証を経て導き出した解決策を解説。テストの堅牢性を高めるには、受け入れ基準を「外から見える振る舞い」に限定し、実装の詳細を基準に含めないことが重要です。\n\n具体的な手順として、基準の書き方のルール化、型やlintへの責務分離、既存テストへの倣い、そして実装前のテスト失敗確認を推奨しています。テストを凍結して書き換えを禁止するよりも、基準の定義を適切に行う方が長期的な保守性が高まるという結論です。","importance":7},{"title":"GoogleやAppleなどのアカウント乗っ取りでPayPay不正利用の事例　サポートが注意喚起","url":"https://www.itmedia.co.jp/mobile/articles/2611/20/news069.html","source":"Hatena","published_at":"2026-11-20 22:10","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"外部アカウント乗っ取りによるPayPay不正利用への注意喚起","summary":"PayPay公式サポートが、GoogleやApple、Yahoo!JAPANなどの外部連携アカウントが乗っ取られたことによるPayPayの不正利用被害について注意喚起を行った。連携先アカウントのセキュリティが突破されると、PayPayへのログインも許してしまうリスクがある。\n\n対策として、二段階認証の設定やパスワードの使い回し防止が強く推奨されている。PayPay側でも不正検知や補償制度を整備しているが、外部アカウント側のセキュリティ対策はユーザー自身の責任となる。キャッシュレス決済を利用する際は、連携先を含めた包括的なセキュリティ管理が不可欠である。","importance":7},{"title":"Go の defer についてちょっと調べてみた ── 3つの実装方式","url":"https://zenn.dev/wakame_atsushi/articles/f2f7512d5e0f87","source":"Zenn","published_at":"2026-11-21 11:19","genre":"web","genre_label":"Web開発・言語","headline":"Go言語のdefer実装を紐解く：3つの方式とランタイムの仕組み","summary":"Go言語のdefer文が内部でどのように実装されているかを、ランタイムのソースコードとコンパイラの出力から解説しています。deferには大きく分けて3つの実装方式が存在し、それぞれが「登録」と「実行」の段階で異なる処理を行っています。\n\n具体的には、_defer構造体の管理、goroutineごとのスタックフレームの利用、そしてスタックポインタ（sp）を用いた所属判定の仕組みが詳細に説明されています。コンパイル時にサイズが決定できる場合とそうでない場合の最適化の違いなど、Goの深い内部構造を理解するための技術的知見が詰まっています。","importance":7},{"title":"スシロー、アメリカ・ニューヨーク1号店が大行列の人気「チップ不要なシステムも好評の理由」→アメリカ人も面倒くさいと思ってるのかよ…","url":"https://togetter.com/li/2773198","source":"Hatena","published_at":"2026-11-21 15:18","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"スシローNY店がチップ不要システムで大行列を作る理由","summary":"ニューヨークにオープンしたスシロー1号店が、チップ不要の価格設定で人気を集めている話題。スタッフの報酬を料金に含める明朗会計が、チップ文化に疲弊した現地客から高く評価されています。\n\nセルフ化が進む飲食店において、チップを要求する慣習への疑問が強まる中、自動化による効率的なサービス提供と適正な価格設定がWin-Winの関係を築いています。アメリカの飲食業界におけるチップ制度のあり方に一石を投じる事例として注目されています。","importance":4},{"title":"ボールの慣性で素早いカーソル移動！奥深きトラックボールの世界 3つのスタイルに分けて計14モデルをピックアップ text by 石川 ひさよし","url":"https://akiba-pc.watch.impress.co.jp/docs/sale/online_shopping/2158378.html","source":"Hatena","published_at":"2026-11-21 10:24","genre":"mobile","genre_label":"モバイル・ガジェット・個人開発","headline":"トラックボールの選び方：3つのスタイルと計14モデルの徹底比較","summary":"PC操作の効率化や省スペース化に役立つトラックボールについて、操作スタイル別に特徴とおすすめモデルを紹介しています。人差し指操作型と親指操作型の違いを軸に、Kensingtonやエレコムなどの主要メーカーのモデルをピックアップ。\n\nボールの大きさやボタン数、接続方式など、用途に応じた選び方のポイントを解説しています。マウスからの移行を検討しているユーザーや、より快適な作業環境を求めるエンジニアにとって、自分に合ったデバイスを見つけるためのガイドとなる記事です。","importance":4},{"title":"「直前の修正が効いた」は勘違いだった ― AIにだけ厳しい検証のダブルスタンダード","url":"https://zenn.dev/nekoemon/articles/8e6a45d6632e0f","source":"Zenn","published_at":"2026-11-21 10:00","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"AIの判定には厳しいのに自分の仮説は甘い？検証における因果誤認の戒め","summary":"AIの脆弱性判定パイプラインを開発する中で、修正の効果を「直前の修正のおかげ」と早合点していた自身の誤りをデータで検証した記録です。時系列でデータを並べ直した結果、安定は修正の3週間前から始まっており、因果関係が誤りであったことが判明しました。\n\n「AIにはデータで測れと課しながら、自分の判断は測らずに信じていた」という非対称性に気づき、仮説を立てたときこそ疑うことの重要性を説いています。開発者が陥りがちな「都合のいい因果の物語」を排し、客観的なデータに基づいた検証を行うための教訓です。","importance":8},{"title":"全社の GitHub 権限管理を Terraform に移行するのは、なぜ大変なのか","url":"https://zenn.dev/pksha/articles/github-org-terraform-migration","source":"Zenn","published_at":"2026-11-20 20:12","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"GitHub権限管理をTerraformへ移行した際の合意形成と運用の工夫","summary":"GitHubの権限管理を、申請フォームと手作業からTerraformとPull Request（PR）による運用へ移行した事例。約5か月の期間を要し、技術的な検証よりも部署ごとの異なる運用ルールを理解し、合意形成を図ることに注力した。\n\n運用負荷を抑えつつガバナンスを効かせるため、全社統一は目指さず、部署ごとに管理ディレクトリを分け、CODEOWNERSで承認者を設定する形式を採用。また、情シスが手作業で行っていた台帳更新をコードから自動生成する仕組みに置き換えることで、運用負荷を大幅に削減した。","importance":8},{"title":"AIが爆速で開発する時代の、自動テストとの向き合い方","url":"https://zenn.dev/daiaoki/articles/webterm-ai-era-testing","source":"Zenn","published_at":"2026-11-19 16:11","genre":"web","genre_label":"Web開発・言語","headline":"AI開発時代における自動テストの重要性と設計戦略","summary":"AI（Claude Code）による開発が加速する中で、品質を担保するための自動テストの設計戦略。ブラウザ上で動作するLinuxシミュレーターをTypeScriptで開発し、テストしやすい「副作用のない核」を切り出す設計を採用した。\n\nテストファイル1,800本、単体テスト2.2万件という規模を回すため、状態を書き換えない関数としてコマンドを実装。AIが生成するコードの品質を自動テストで守ることで、開発速度を落とさずに信頼性を維持している。","importance":8},{"title":"イーロン・マスクが金持ちでもそんなネットで嫌われてないのって「男の子がワクワクするもの」に迷わず巨額の金を突っ込むからだと思うんだよな","url":"https://togetter.com/li/2773122","source":"Hatena","published_at":"2026-11-21 12:06","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"イーロン・マスクが支持される理由は「少年のワクワク」への投資","summary":"イーロン・マスク氏が富豪でありながらネット上で一定の支持を得ている理由についての考察。彼がロケットや空飛ぶ車など「男の子がワクワクするもの」に迷わず巨額の資金を投じる姿勢が、多くの共感を生んでいます。\n\n単なる豪遊ではなく、SF的な未来の実現という目的に向かって技術を追求する姿が、初期のYouTuberの企画力や少年漫画の主人公に例えられています。人類の進歩という大きなビジョンと、オタク的な情熱が融合した独自のスタイルが支持の背景にあるようです。","importance":4},{"title":"どれだけGeminiが賢くなってもAIオタクが避ける理由。ついに解消の可能性 - すまほん!!","url":"https://smhn.info/202611-gemini-subscription-third-party-harness-december-2","source":"Hatena","published_at":"2026-11-20 23:35","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"Geminiのサブスク制限が解消へ、AIエージェント利用の障壁が低減","summary":"Geminiはモデル性能こそ向上しているものの、サードパーティ製ツールからの利用制限が厳しく、AIオタク層の乗り換えが進まない要因となっていた。しかし、Googleが12月2日に「最初の一歩」としてサブスクリプションの利用範囲を拡大する示唆を出したことで、状況が改善する可能性がある。\n\nこれまでGoogleは自社環境「Antigravity」以外での利用を厳しく制限してきたが、ユーザーからの改善要望を受け、より柔軟な利用形態が期待されている。これが実現すれば、ClaudeやChatGPTからの乗り換えが加速し、Geminiが開発者の日常的なツールとして定着する転換点になるかもしれない。","importance":8},{"title":"自宅サーバー上のアプリケーションを Cloudflare Tunnel + Access で安全に公開する","url":"https://zenn.dev/bisque/articles/home-server-cloudflare-tunnel-access","source":"Zenn","published_at":"2026-11-20 16:14","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"Cloudflare TunnelとAccessによる自宅サーバーの安全な公開手法","summary":"自宅サーバーをインターネットに安全に公開するため、Cloudflare TunnelとCloudflare Accessを組み合わせる手法を紹介。Tunnelによりルーターのポートを開放せずに外部公開し、Accessで認証をかけることで、アプリに脆弱性があっても不正アクセスを防ぐ。\n\nさらに、AIエージェントにはサービストークンを渡してアクセスを許可し、アプリ側でもJWTを検証することでセキュリティを強化している。認証機能をアプリに作り込む必要がなく、個人開発のアプリを安全かつ効率的に運用できる構成である。","importance":8},{"title":"npm・pnpm・bun・yarn のインストール速度比較","url":"https://zenn.dev/nemolize/articles/package-manager-install-speed","source":"Zenn","published_at":"2026-11-20 19:34","genre":"web","genre_label":"Web開発・言語","headline":"npm・pnpm・bun・yarnのインストール速度比較検証","summary":"npm、pnpm、bun、yarnの4つのパッケージマネージャーについて、実在する3つのプロジェクトを用いてインストール速度を比較した。キャッシュなしの初回インストールではnpmが最速の場面もあるが、キャッシュありの入れ直しではbunがnpmの約7倍速いという結果が出た。\n\nまた、yarnは設定（classic/Berry）によって結果が大きく異なる点や、追加・削除の操作においてもbunが高速であることなどが示された。プロジェクトの規模や作業内容によって最適なツールが異なるため、自身の開発環境に合わせて選択することが重要である。","importance":6},{"title":"Welcome! You are invited to join a webinar: 【26/11/26開催】「脱WordPress」に取り組みたい方へ。セキュリティ懸念・運用負担を解消するSaaS型CMS移行. After registering, you will receive a confirmation email about joining the webinar.","url":"https://hatena.zoom.us/webinar/register/2217624929911/WN_UyuXGu7hRfSejKa5G_lUGg","source":"Hatena","published_at":"2026-11-19 11:00","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"WordPressのセキュリティと運用負担を解消するSaaS型CMS移行セミナー","summary":"WordPress運用におけるセキュリティ懸念や、更新作業の遅延といった課題を抱える企業向けに、SaaS型CMSへの移行を提案するセミナーの案内。WordPressの脆弱性対応や運用コストの増大を背景に、情シスと現場の要望を満たす移行先の選び方や進め方を解説する。\n\n参加特典としてCMS移管チェックシートが提供され、WordPress運用診断も実施。エンタープライズ企業のWeb担当者やマーケティング担当者を対象に、脱WordPressの具体的な手法を提示する。","importance":5},{"title":"数理最適化システムの構築はAIエージェントで自動化できるか？","url":"https://zenn.dev/okarinxx/articles/ai-agent-optimization-1","source":"Zenn","published_at":"2026-11-20 21:56","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"数理最適化システムの構築をAIエージェントで自動化する試み","summary":"数理最適化システムをAIエージェントで自動化するための研究として、既存ツールでは解決できない実務規模の問題に対するアプローチが提案された。AIに丸投げするのではなく、機械検証の範囲を広げることで、コストと正しさの壁を乗り越える手法を模索している。\n\n具体的には、静的型付け言語の活用や、テスト設計専用エージェントの導入、ミューテーションテストの実施などが挙げられる。また、CBLS（制約ベースの局所探索）を用いることで、宣言的なモデル記述と探索の効率化を両立させる戦略が有効である。AIによる自動化と人間による検証のバランスを最適化する試みである。","importance":7},{"title":"CDKからTerraformへ：所有権移譲による本番インフラ無停止のIaC移行","url":"https://zenn.dev/levtech/articles/14befd8e727f32","source":"Zenn","published_at":"2026-11-20 10:26","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"CDKからTerraformへ：本番インフラ無停止でのIaC移行手法","summary":"CDK v1のEOLに伴う技術的負債解消のため、本番インフラを停止させずにTerraformへ移行した事例。成功の鍵は「所有権の移譲」という手法にある。\n\n具体的には、CDK側で削除ポリシーをRETAINに設定してリソースを管理から外し、Terraform側でimportブロックを使用して既存リソースを紐付ける手順を踏む。この手法により、インフラを停止させることなく安全にIaCツールを統一し、運用コストの削減とセキュリティ対応の迅速化を実現した。","importance":8},{"title":"DOTweenを使わずにイージングを自作する！Robert Pennerのイージング関数をC#で実装して検証してみた","url":"https://zenn.dev/sorane/articles/e1ed930dea9b1d","source":"Zenn","published_at":"2026-11-21 01:03","genre":"web","genre_label":"Web開発・言語","headline":"DOTweenを使わずRobert Pennerのイージングを自作する","summary":"Unity等のゲーム開発において、外部ライブラリを使わずにRobert Penner氏の数式を用いたイージング関数をC#で実装する方法が解説された。イージングは「0〜1の進行度を受け取って値を返す」関数として定義でき、静的クラスにまとめることで再利用性が高まる。\n\n今回は31種類のイージングを実装し、インスペクターで選択可能な列挙型と組み合わせることで、柔軟なUIアニメーション制御を実現した。UnityのMathfに依存しない純粋なC#実装のため、他のプロジェクトへの移植も容易である。既存ライブラリに頼らない軽量な実装を求める開発者にとって有益な知見である。","importance":4},{"title":"PHPカンファレンス関西2026のお誘いチケットを学生・若手エンジニアの方へ先着2名に譲渡します - おうさまのみみはロバのみみ","url":"https://luccafort.hatenablog.com/entry/2026/11/20/193344","source":"Hatena","published_at":"2026-11-20 20:54","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"PHPカンファレンス関西2026、学生・若手エンジニアへチケット譲渡","summary":"2027年1月開催の「PHPカンファレンス関西2026」に向け、学生および新卒3年目までの若手エンジニアを対象に、お誘いチケットの無償譲渡が実施される。地域コミュニティの活性化と、初めて参加するエンジニアの心理的・金銭的ハードルを下げることを目的としている。\n\n主催者はコミュニティ運営者であり、採用目的ではなく、技術を一緒に楽しむ仲間を増やすことが狙いである。関西圏のエンジニアにとって、こうしたカンファレンスへの参加は貴重な学びの場であり、コミュニティの裾野を広げるための有意義な取り組みといえる。興味のある若手エンジニアは積極的に応募することが推奨される。","importance":3},{"title":"Claude Codeと作る競馬予測システム開発記(13) 再学習パイプライン編","url":"https://zenn.dev/teruyotasaki/articles/horse-racing-ml-dev-13-retraining-pipeline","source":"Zenn","published_at":"2026-11-21 11:57","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"競馬予測AIの安定運用を支える再学習パイプラインの自動化と運用の工夫","summary":"競馬予測モデルはデータの鮮度が重要であり、定期的な再学習が不可欠です。本記事では、週次・日次のバッチ処理を自動化し、モデルのstaleness（陳腐化）を防ぐパイプライン構築の知見を解説しています。\n\n学習中のファイル破損を防ぐ一時ファイル置き換え方式や、回路ごとの更新頻度の最適化、不要なモデルの棚卸しなど、運用上の細かな工夫が安定稼働の鍵となります。また、Notebookの差分ノイズ抑制やSlack通知による監視など、地味ながらも継続的な運用を支える技術的知見がまとめられています。","importance":6},{"title":"GASでスプレッドシートの通知をLINEに送る（Messaging API・Flexメッセージ）","url":"https://zenn.dev/takahkok0812/articles/75ee419b88d960","source":"Zenn","published_at":"2026-11-21 10:57","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"GASとMessaging APIで実現するスプレッドシート通知のLINE連携","summary":"LINE Notifyの終了に伴い、Google Apps Script（GAS）からMessaging APIを利用してスプレッドシートの通知をLINEに送る手法を解説しています。Flexメッセージを活用することで、見出し・項目・ボタンを備えたカード形式の通知を実現します。\n\nトークンの管理にはスクリプトプロパティを使用し、セキュリティを確保。pushとbroadcastを使い分けることで、個別の通知や一斉通知に対応します。また、フォーム送信時のトリガー設定や、エラーハンドリングの工夫など、実運用に耐えうる通知システムの構築手順が網羅されています。","importance":6}]};
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
