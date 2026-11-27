// __EMBEDDED_NEWS_START__
globalThis.__IT_TREND_EMBEDDED_DATA__ = {"updated_at":"2026-11-27 22:45:21 JST","total_count":50,"config":{"selected_genres":["ai","web","infra","mobile","biz"],"other_genre_min_ratio":0.25,"max_age_hours":72.0,"genres":{"ai":"AI・LLM・機械学習","web":"Web開発・言語","infra":"インフラ・クラウド・セキュリティ","mobile":"モバイル・ガジェット・個人開発","biz":"ITビジネス・キャリア・マネジメント","other":"総合・その他IT"}},"articles":[{"title":"Linuxカーネルのバグ「TCPanic」を発見、TCP通信のみでホストが停止する脆弱性 | Ikotas Labs","url":"https://ikotaslabs.com/news/2026-11-27","source":"Hatena","published_at":"2026-11-27 18:14","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"TCP通信のみでホストが停止するLinuxカーネルの脆弱性「TCPanic」","summary":"LinuxカーネルのTCP処理において、外部からのTCP通信のみでホスト全体が停止する脆弱性「TCPanic」が発見されました。CVE-2026-99288として登録されており、Linux 7.3.4で修正済みです。\n\nマルチコア環境において、接続情報の検索と解放が競合することで発生するパニックが原因です。認証不要で外部から攻撃可能なため影響範囲が広く、早急なカーネルアップデートが推奨されます。セキュリティ診断の重要性を改めて示す事例です。","importance":9},{"title":"業務向け「Copilot」アプリに「Office」を統合、人とエージェントが協働する「Workspaces」も【Ignite 2026】／「Home」は一般提供、自律型の「Autopilot」はFrontier向けに展開開始","url":"https://forest.watch.impress.co.jp/docs/news/2159782.html","source":"Hatena","published_at":"2026-11-27 16:28","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"Microsoft Ignite 2026でCopilotの新機能が多数発表","summary":"Microsoft Ignite 2026にて、業務向けCopilotのビジョンを具体化する新機能が発表されました。CopilotアプリへのOffice統合や、人とエージェントが協働する「Workspaces」、自律型エージェント「Autopilot」などが含まれます。\n\nAIが単なるチャットツールから、自律的にタスクをこなし、人と共同作業を行うエージェントへと進化しています。特に「Autopilot」によるTeamsやOutlookの監視・管理機能は、業務自動化の新たなフェーズを予感させる重要なアップデートです。","importance":10},{"title":"FastAPIで深く考えずにasync defを書くと詰む","url":"https://zenn.dev/taichan/articles/2de10a10f2acc0","source":"Zenn","published_at":"2026-11-27 19:44","genre":"web","genre_label":"Web開発・言語","headline":"FastAPIでasync defを安易に使うとサーバが詰まる理由","summary":"FastAPIにおいて、深く考えずにasync defを使用することのリスクと、適切な使い分けが解説されました。async defはイベントループ上で動作するため、同期処理を呼ぶとサーバ全体が停止する可能性があります。\n\n結論として、迷った場合は通常のdefを使用することが推奨されています。defであればFastAPIがスレッドプールで処理するため安全です。async defは、中身もすべて非同期で揃えられる場合にのみ使用すべきであり、パフォーマンス向上を目的とした安易なasync化は避けるべきという教訓です。","importance":8},{"title":"2026年に刊行されてよかったなと思うコンピューター技術書 - golden-luckyの日記","url":"https://golden-lucky.hatenablog.com/entry/2026/11/27/111643","source":"Hatena","published_at":"2026-11-27 11:26","genre":"other","genre_label":"総合・その他IT","headline":"AI時代にこそ読むべき、2026年に刊行された骨太なコンピューター技術書リスト","summary":"AIによる開発加速で技術書の需要が変化する中、2026年に出版された書籍の中から、著者の思想や技術的深みが感じられる良書を厳選して紹介するキュレーション記事。AI関連本が溢れる中でも、OS、ネットワーク、セキュリティ、検索システムなど、基礎を支える骨太な技術書が数多く出版されていることを強調している。\n\n選考基準は「著者がこの対象をこの方法で書いた」という独自性への評価。Webブラウザエンジニアリングやバイナリ解析、カーネル設計など、AIに頼り切らないエンジニアにとって必読の専門書がリストアップされており、技術の根幹を理解することの重要性を再認識させる内容となっている。","importance":5},{"title":"Claude Code で KiCad 基板を設計して JLCPCB に発注し、Codex とも同じ条件で比べた","url":"https://zenn.dev/kzchd/articles/ai-kicad-pihat-claude-codex","source":"Zenn","published_at":"2026-11-27 19:30","genre":"mobile","genre_label":"モバイル・ガジェット・個人開発","headline":"Claude Codeを活用したKiCad基板設計と自動化の試み","summary":"Claude Codeを用いてRaspberry Pi用I/O基板を設計し、JLCPCBへ発注した事例が紹介されました。AIの「できました」を鵜呑みにせず、機械的な検査ゲートを設けることで品質を担保する手法が特徴です。\n\n回路図のネットリストと接続表を突き合わせる検査スクリプトを構築し、AIの設計ミスを自動で防ぐ仕組みを実装しています。AI駆動開発において、人間が承認・凍結した要件をAIが逸脱しないよう監視する「ゲート」の重要性が示されており、ハードウェア開発へのAI活用における先進的なアプローチです。","importance":8},{"title":"顧客情報を守るため、売上15％の自社ECを閉店　ドールメーカーが明かした「決断」の背景","url":"https://www.itmedia.co.jp/news/article/2611/27/2000003518/","source":"Hatena","published_at":"2026-11-27 17:09","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"アゾンインターナショナル、個人情報保護のため自社ECを閉店","summary":"ドールメーカーのアゾンインターナショナルは、個人情報保護を理由に売上の15%を占める自社ECサイト「AZONET」の閉店を決定しました。AIによるサイバー攻撃の高度化と、自社で情報を守り続けることの限界が背景にあります。\n\n暗号化してもAIによる復号リスクやランサムウェアの脅威が残るため、「個人情報を持たない」方針への転換を選択しました。売上よりも顧客の安全を優先する経営判断として注目されており、セキュリティ対策のあり方に一石を投じる事例です。","importance":8},{"title":"「ロリポップ！レンタルサーバー」および関連サービスに対する不正アクセスによるお客様情報の漏えいについて - ロリポップ！レンタルサーバー","url":"https://lolipop.jp/info/news/8279/","source":"Hatena","published_at":"2026-11-27 15:15","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"ロリポップ！レンタルサーバーで不正アクセスによる個人情報漏えいが発生","summary":"ロリポップ！レンタルサーバーおよび関連サービスにおいて、第三者による不正アクセスが発生し、約51万件の顧客情報が漏えいしたことが判明しました。氏名、メールアドレス、生年月日などが対象となっています。\n\nデータ分析基盤を経由した不正アクセスが原因で、現在は経路の遮断とパスワードの強制リセットが完了しています。クレジットカード情報の漏えいは確認されていませんが、同社は対象ユーザーへの個別連絡と再発防止策の策定を進めています。","importance":9},{"title":"GinanでGPS衛星の軌道を精密暦に当てはめる：Dockerでの再現手順とつまずいた点","url":"https://zenn.dev/sakanam40/articles/fb89ddb1ab415c","source":"Zenn","published_at":"2026-11-26 22:45","genre":"other","genre_label":"総合・その他IT","headline":"DockerでGinanを動かしGPS衛星軌道を精密暦に当てはめる手順","summary":"GNSS解析ツール「Ginan」をDocker環境で構築し、GPS衛星の軌道を精密暦（SP3）に当てはめるための再現手順を記録した技術記事です。MongoDBの無効化や座標系の設定など、環境構築における具体的なつまずきポイントを詳細に解説しています。\n\n特に、出力座標系を地球固定系に設定しないと慣性系との間で大きな誤差が生じるという「最大のはまりどころ」は、同様の解析を行うエンジニアにとって貴重な知見です。オープンソースツールを活用した高度な測位解析の導入ガイドとして役立ちます。","importance":5},{"title":"Devin Bot に毎朝のパフォーマンス改善を任せてみた - kickflow Tech Blog","url":"https://tech.kickflow.co.jp/entry/2026/11/27/154920","source":"Hatena","published_at":"2026-11-27 16:33","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"Devin Botsで毎朝のパフォーマンス改善を自動化する試み","summary":"Cognitionが発表した「Devin Bots」を活用し、リポジトリのパフォーマンス改善を自動化する試みが紹介されました。Botに役割を与えることで、DatadogやSentryのデータを基に改善案のissueとPRを毎朝自動生成させます。\n\nBotは過去のPRを学習し、確度の高い改善は自動でPR化、判断が必要なものは人間に相談するワークフローを構築しています。エンジニアがコードを書かずにBotを管理する「Software Factory」の活用事例であり、AIエージェントによる開発効率化の最前線を示す内容です。","importance":9},{"title":"drift のマイグレーション戦略","url":"https://zenn.dev/narun/articles/20261127-drift-migration-strategy","source":"Zenn","published_at":"2026-11-27 20:00","genre":"web","genre_label":"Web開発・言語","headline":"Flutterアプリにおけるdriftのマイグレーション戦略","summary":"Flutterアプリで利用するDBライブラリ「drift」において、スキーマ変更時のマイグレーション戦略を見直した事例が共有されました。従来の条件分岐を重ねる手法から、ステップごとにバージョンを上げる手法への移行が解説されています。\n\nトランザクションの活用や、スキーマ比較だけでは見逃すエラーを拾うテストの導入など、安全かつ持続可能な運用方針がまとめられています。複雑化しがちなDBマイグレーションを、仕組み化によっていかに簡素化・安定化させるかという実践的な知見です。","importance":7},{"title":"古いPCにRTX 3060 12GBを載せてローカルLLM環境を作った","url":"https://zenn.dev/mahyon/articles/2ed75199e684cc","source":"Zenn","published_at":"2026-11-27 15:11","genre":"mobile","genre_label":"モバイル・ガジェット・個人開発","headline":"古いPCを再利用、RTX 3060搭載のローカルLLM専用機を構築","summary":"Windows 11非対応の古いPCにRTX 3060 12GBを増設し、ローカルLLM実行環境を構築した実践記録です。最小限の追加投資でGemma 4 12Bを快適に動かす環境を実現しました。\n\nUbuntu Serverをベースに、DockerやOpen WebUIを活用してSSH経由で操作する構成を採用。電源容量の計算からOSインストール時のディスク選択ミスといったトラブルシューティングまで詳細に記録されており、低コストでAI環境を構築したいエンジニアにとって有益なガイドとなっています。","importance":6},{"title":"アーキテクチャConference 2026 Day2 登壇資料・登壇者Xまとめ","url":"https://zenn.dev/okrago10/articles/architecture-con-2026-day2","source":"Zenn","published_at":"2026-11-27 13:36","genre":"other","genre_label":"総合・その他IT","headline":"アーキテクチャConference 2026 Day2の登壇資料と登壇者情報を網羅的に集約","summary":"2026年11月27日に開催された「アーキテクチャConference 2026」の2日目における全講演の登壇者Xアカウントおよび公開資料をまとめたキュレーション記事。公式タイムテーブルに基づき、特別チケット枠（RoomA）とスタンダードチケット枠（RoomB）の全39件を対象としている。\n\nFindy KnowledgeやSpeaker Deckなどのリンクを整理し、資料が公開され次第随時更新される形式をとっている。技術カンファレンスの情報を効率的にキャッチアップしたいエンジニアにとって、登壇者の発信を追うための有用なリソースとなっている。","importance":4},{"title":"止まらないKARTE漏えい　契約終了後「削除されたはず」のデータ流出相次ぐ　「人的オペレーションと管理の不備」","url":"https://www.itmedia.co.jp/news/article/2611/27/2000003517/","source":"Hatena","published_at":"2026-11-27 15:13","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"KARTEのデータ漏えい問題、契約終了後の削除不備が相次ぎ発覚","summary":"CXプラットフォーム「KARTE」の不正アクセス問題に関連し、契約終了後も顧客データが削除されずに残存していた事例がPeach Aviationやアテニアなど複数社で判明しました。プレイドは管理体制の不備を認め、謝罪しています。\n\n規約上は契約終了後90日以内の削除が定められていましたが、運用上のミスにより長期間データが残る事態となりました。プレイドは現在、検証完了後に速やかにデータを削除する方針を示しており、今後は運用体制の抜本的な見直しが求められています。","importance":9},{"title":"マイナアプリに複数の脆弱性、マイナンバーカードの情報窃取の恐れ　最新版に更新を","url":"https://ascii.jp/elem/000/004/455/4455531/","source":"Hatena","published_at":"2026-11-27 14:14","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"マイナアプリに脆弱性、マイナンバーカード情報窃取の恐れがあり更新を推奨","summary":"デジタル庁が提供する「マイナアプリ（旧マイナポータルアプリ）」に、フィッシング攻撃や情報窃取につながる複数の脆弱性が発見されました。JVNはiOSおよびAndroid版の最新版へのアップデートを強く勧告しています。\n\n脆弱性の原因は入力制限の不備にあり、不正なリンクを経由して任意のサイトへ誘導されるリスクがあります。利用者は速やかにアプリを最新バージョンへ更新し、不審なリンクへのアクセスを避けるなどの対策が必要です。","importance":9},{"title":"AIエージェントにWebのファイルを取得させるリスクについて考える","url":"https://zenn.dev/layerx/articles/65b4828efcaee2","source":"Zenn","published_at":"2026-11-27 10:48","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"AIエージェントにWebファイル取得機能を持たせる際のリスクと対策","summary":"AIエージェントにWeb上のPDF等を読み込ませる機能を追加する際、セキュリティ観点から考慮すべきリスクを整理した記事。特に「間接プロンプトインジェクション」による乗っ取りリスクを重視し、信頼できないコンテンツを扱う際の防御策を論じている。\n\n過去の事例（EchoLeak等）を引用し、モデルの改良だけでは解決できないインジェクションの脅威を指摘。ツール実行時の制約設定や、被害を最小限に抑えるためのアプリケーション構成の重要性を強調している。AIエージェントの業務活用が進む中で、セキュリティ設計のベストプラクティスを考える上で極めて重要な視点である。","importance":9},{"title":"◯✗ゲーム++：FIFO ◯✗ゲームにおいて先手が 13 手で勝つことの証明","url":"https://zenn.dev/akitenkrad/articles/wq6lzq7xa036ff","source":"Zenn","published_at":"2026-11-27 08:00","genre":"other","genre_label":"総合・その他IT","headline":"FIFO ◯✗ゲームにおける先手の13手必勝手順を理論的に証明","summary":"古い手が消える特殊ルール「FIFO ◯✗ゲーム（T3・k=3）」において、先手が13手で勝利することを全数探索に頼らず理論的に証明した記事です。古典的な◯✗ゲームとは異なり、二重リーチではなく相手の手をトラップとして利用する戦略が重要となります。\n\n本稿では、ゲームの局面をランク付けする手法を用い、「13手目までに勝てること」と「13手未満では勝てないこと」の両面から範囲を絞り込むことで、13手という決着手数の妥当性を数学的に導き出しています。ゲーム理論やアルゴリズムの解析に興味がある層にとって非常に興味深い内容です。","importance":4},{"title":"さくさく作れる毎日を支える、AI 時代の開発環境 — 隔離・コンテキスト・ガードレール・検証の整理 - [はてなCMS] 電通総研 テックブログ","url":"https://tech.dentsusoken.com/entry/2026/11/27/133501","source":"Hatena","published_at":"2026-11-27 14:00","genre":"web","genre_label":"Web開発・言語","headline":"AI時代の開発環境を支える「隔離・コンテキスト・ガードレール・検証」の4柱","summary":"コーディングエージェントを日常的に活用する開発現場において、生産性を維持しつつ安全性を確保するための環境設計をまとめた実践記事です。microVMによる隔離やworktree分離など、具体的な技術構成を提示しています。\n\nAIの出力には確率的なゆらぎがあるため、従来の開発環境をそのまま適用するのではなく、ガードレールや多層検証を組み込む必要性を説いています。エージェントの加速に追いつくための、現代的な開発環境の舗装方法を体系的に解説しています。","importance":8},{"title":"通話とSMSだけの「INFOBAR ZERO」は若者に刺さるか？　米国のダムフォンブームが日本で起きない理由","url":"https://www.itmedia.co.jp/mobile/articles/2611/27/news076.html","source":"Hatena","published_at":"2026-11-27 14:37","genre":"mobile","genre_label":"モバイル・ガジェット・個人開発","headline":"通話とSMSに特化した「INFOBAR ZERO」が提案するデジタルデトックス","summary":"KDDIが発表した「INFOBAR ZERO」は、Web閲覧やSNSを排除し、通話とSMSに特化した「ダムフォン」です。スマホ疲れを感じる現代人に対し、あえて機能を引き算することで「つながらない余白」を提供します。\n\n米国で先行するダムフォンブームを背景に、日本市場での受容性が注目されています。デザイン性とデジタルデトックスというコンセプトを融合させた本機は、スマホとの2台持ちや、auのブランド価値を再定義する挑戦的なプロダクトとして位置づけられています。","importance":6},{"title":"GMO熊谷氏「ハッカーを丸裸に」　サイバー攻撃の可視化サイト開設 - 日本経済新聞","url":"https://www.nikkei.com/article/DGXZQOUC271FH0X21C26A1000000/","source":"Hatena","published_at":"2026-11-27 17:16","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"GMOがサイバー攻撃可視化サイトを開設、攻撃者の行動を公開","summary":"GMOインターネットグループは、サイバー攻撃の状況を可視化するサイトを開設しました。攻撃者が侵入後に行った行動や、AIを用いた攻撃の傾向などを一般公開し、ハッカーの動向を「丸裸にする」ことを狙いとしています。\n\nサイバー攻撃の多発に対する啓発と、独自の防御サービス展開への布石と見られます。企業が攻撃の実態を積極的に公開することで、セキュリティ意識の向上と対策の重要性を訴求する動きです。","importance":6},{"title":"GitHub ActionsからPATもGitHub App Private Keyも駆逐する","url":"https://zenn.dev/tmknom/articles/github-app-token-exchange-system","source":"Hatena","published_at":"2026-11-27 13:35","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"GitHub Actionsで長命なクレデンシャルを排除する「GATES」によるキーレス認証","summary":"GitHub ActionsにおけるPATやGitHub App Private Keyの管理リスクを解消するため、AWS LambdaとKMSを活用した「GATES (GitHub App Token Exchange System)」を開発した事例。長命なクレデンシャルをワークフローに持たせない設計を重視している。\n\nGitHub OIDCとAWS KMSの署名機能を組み合わせることで、Private KeyをLambdaすら参照できない状態でInstallation Access Tokenを払い出す仕組みを実現。キーレス認証を徹底することで、セキュリティリスクを大幅に低減しつつ、開発者が内部構造を意識せずに利用できる利便性を両立させている。","importance":9},{"title":"さまざまなドキュメントを“AIが読める形”にする.NET API、Microsoftが「DocumentExtractionClient」を発表／OCRサービスやローカルモデルを切り替えて使える共通の仕組み、まずはプレビュー","url":"https://forest.watch.impress.co.jp/docs/news/2159777.html","source":"Hatena","published_at":"2026-11-27 16:09","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"Microsoft、AI向けドキュメント抽出API「DocumentExtractionClient」を公開","summary":"Microsoftは、PDFや画像、Officeドキュメントから構造化コンテンツを抽出する.NET向けAPI「DocumentExtractionClient」をプレビュー公開しました。OCRやAIモデルを共通のインターフェースで切り替えて利用可能です。\n\n見出しや表の行列関係などの構造情報を保持したまま抽出できるため、RAGの精度向上に大きく寄与します。プロバイダーの差し替えが容易な設計となっており、AIアプリケーション開発におけるドキュメント解析の標準化を推進する重要なライブラリです。","importance":8},{"title":"Kong×MuleSoft の外部連携を12項目で固め、再検証で落とし穴を3つ見つけた話","url":"https://zenn.dev/kensudo1203/articles/edbd45f1bf44d1","source":"Zenn","published_at":"2026-11-27 11:06","genre":"web","genre_label":"Web開発・言語","headline":"Kong×MuleSoft連携におけるセキュリティ強化と再検証で見つかった3つの落とし穴","summary":"銀行システムを想定したサンプルアプリにおいて、APIゲートウェイKongと連携基盤MuleSoftを組み合わせた外部連携機能のセキュリティを強化した事例。APIキー認証からOAuth 2.0への移行や、mTLSの導入、ネットワーク分離など12項目の対策を実施した。\n\n後半では、再検証で見つかった3つの落とし穴（署名検証の分担ミスやヘッダー偽装の可能性など）を詳細に記録。テストが通っている状態でも漏れが生じるリスクを指摘し、冪等性の確保やトランザクション管理の重要性を説いている。堅牢なシステム設計には、多層防御と詳細な状態管理が不可欠であることを示している。","importance":8},{"title":"再現性のあるAI開発環境構築 #1 ―― Ghostty と Herdr で、Claude Code を並べる作業場を組む","url":"https://zenn.dev/circularuins/articles/reproducible-ai-env-base-terminal","source":"Zenn","published_at":"2026-11-27 10:39","genre":"mobile","genre_label":"モバイル・ガジェット・個人開発","headline":"GhosttyとHerdrで構築する、Claude Code並行作業のためのAI開発環境","summary":"Claude Codeのセッションを複数並べて効率的に作業するための、Mac上の開発環境構築ガイド。ターミナルエミュレータ「Ghostty」とペイン管理ツール「Herdr」を組み合わせ、視覚的にセッション状態を把握できる作業場を構築する手順を公開している。\n\n設定ファイルの内容を具体的に提示し、Homebrewを用いたインストールから、Claude Codeとの連携フックの設定までを網羅。AIに頼らず人間が環境を管理する姿勢を重視し、安全柵を設けるための前段階としての環境構築を解説している。並行作業効率を最大化したいパワーユーザー向けの技術記事である。","importance":6},{"title":"新しいアドホック分析ツールを探した話","url":"https://zenn.dev/usen_ict/articles/75fbbb14489d00","source":"Zenn","published_at":"2026-11-27 13:52","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"Snowflake CoWork導入で見えた、アドホック分析ツールの新たな選定基準","summary":"データ基盤にSnowflakeを活用するチームが、現場主導のアドホック分析環境を構築する過程で得た知見を共有しています。BIツールとAIエージェント（CoWork）の使い分けや、自然言語分析における課題を整理しました。\n\n自然言語分析の利便性を認めつつも、コスト管理や指標定義の整合性維持といった新たな課題に直面しています。ツール選定においては「自然言語で分析できること」と「生成されたSQLの根拠を確認できること」を必須条件とし、データ民主化とガバナンスの両立を目指しています。","importance":7},{"title":"米、スペースXに衛星100万基の配備承認　宇宙にAIデータセンター構築へ","url":"https://www.cnn.co.jp/usa/35255487.html","source":"Hatena","published_at":"2026-11-27 10:03","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"米FCCがスペースXの衛星100万基配備を承認、宇宙AIデータセンター構築へ","summary":"米連邦通信委員会（FCC）は、スペースXが計画する100万基の衛星コンステレーション「スターマインド」の配備を承認しました。このプロジェクトは、AIの計算能力に対する急増する需要に応えるため、宇宙空間にデータセンターを構築するものです。\n\n宇宙空間でのデータセンター運用は、太陽エネルギーの直接利用によるコスト削減とエネルギー効率の向上が期待されています。一方で、スペースX自身が過去に技術的・商業的な不確実性を指摘しており、地上データセンターの環境負荷低減と並び、今後の実証実験の成否が注目されます。","importance":9},{"title":"DeNA、相づちを聞き逃さない日本語音声認識モデル3種を無償公開","url":"https://pc.watch.impress.co.jp/docs/news/2159894.html","source":"Hatena","published_at":"2026-11-27 14:41","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"DeNA、相づちの聞き逃しを改善した日本語音声認識モデル3種を公開","summary":"DeNAは、音声対話における「相づち」の認識精度を向上させた日本語音声認識モデル3種をHugging Faceで無償公開しました。NemotronやParakeetをベースに追加学習を行い、雑音耐性と相づちの認識力を強化しています。\n\n従来のモデルでは「うん」や「ええ」といった短い相づちが無視されたり、雑音を幻聴したりする課題がありましたが、今回の追加学習により改善されました。商用利用可能なライセンスで提供されており、音声対話AI開発の底上げが期待されます。","importance":8},{"title":"はじめての Lean","url":"https://unaoya.github.io/lean-intro/","source":"Hatena","published_at":"2026-11-27 20:19","genre":"web","genre_label":"Web開発・言語","headline":"Leanの証明検証の仕組みを理解する入門教材が公開","summary":"Leanのコードを書くことではなく、証明が機械的に検査される仕組みを理解することを目的とした学習教材が公開されました。型推測の機械的な手順を学ぶことで、定理の証明がなぜ正しいと判断されるのかという本質的な理解を目指します。\n\nmathlib等のライブラリを使わず、Lean 4の標準環境のみで構成されており、依存関数型から帰納型、位相空間の証明までを網羅しています。ブラックボックスを減らし、証明項の構成と検証の接続を納得したいエンジニアや数学学習者にとって非常に有益なリソースです。","importance":6},{"title":"初期iPhoneは「携帯電話としてあり得ない」と思った　ガングロギャルが教えてくれた“技術普及の絶対条件”","url":"https://www.itmedia.co.jp/mobile/articles/2611/27/news079.html","source":"Hatena","published_at":"2026-11-27 15:42","genre":"mobile","genre_label":"モバイル・ガジェット・個人開発","headline":"モバイル普及の歴史から学ぶ、技術が社会インフラ化する絶対条件","summary":"ITmedia Mobile創刊25周年を記念し、初期のiPhoneやiモードの普及過程を振り返る考察記事です。かつて「電話」に過ぎなかったモバイル端末が、いかにして生活必需品へと進化したのかを紐解いています。\n\n著者は、ガングロギャルがiモードを積極的に活用していた事実に着目し、技術普及の鍵は「高度な機能」ではなく「誰でも簡単に使えるアクセシビリティ」にあると指摘します。AI時代においても、技術を社会インフラへと昇華させるための本質的な視点を提供しています。","importance":5},{"title":"中国への過度なハイテク輸出規制は「国内開発体制の加速につながる」と半導体露光装置メーカー・ASMLのフーケCEOが警告","url":"https://gigazine.net/news/20261127-asml-ceo-warn-to-export-ban/","source":"Hatena","published_at":"2026-11-27 12:48","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"ASML CEOが警告、過度な対中輸出規制は中国の独自開発体制を加速させる","summary":"世界最大の半導体露光装置メーカーASMLのクリストフ・フーケCEOが、対中輸出規制の現状について見解を表明。最先端技術の保護には一定の制限が必要としつつも、過度な規制は中国の国内開発体制を強化し、結果として自国技術への依存を断ち切らせる逆効果を招くと警告している。\n\nASMLは中国市場で長年高いシェアを維持してきたが、中国企業による独自装置開発の動きも報じられている。フーケ氏は、技術的な優位性を保ちつつ、中国を完全に排除するのではなく、ASMLの技術に依存させ続ける戦略が現実的であるとの考えを示唆した。","importance":7},{"title":"動いている Raspberry Pi の SD カードを丸ごとイメージにする — e2image を直接呼ぶと止まった話","url":"https://zenn.dev/tinker42/articles/f267d21b4f09a6","source":"Zenn","published_at":"2026-11-27 18:33","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"稼働中のRaspberry PiのSDカードを止めずにバックアップする方法","summary":"稼働中のRaspberry PiのSDカードを、サービスを止めずに丸ごとイメージ化する手法が解説されました。rootパーティションをfsfreezeで凍結し、e2imageを用いてブロック単位で読み取ることで、整合性の取れたバックアップを実現します。\n\n直接デバイスを渡すとe2fsprogsの仕様で凍結が解除されなくなる問題に対し、ループデバイスを挟むことで回避するテクニックが紹介されています。長期間稼働するサーバのバックアップ運用において、ダウンタイムを最小化するための高度なシステム管理術です。","importance":7},{"title":"BigQuery でレビュー分析：AI.CLASSIFY で感情、AI.GENERATE でキーワード配列を SQL だけで取り出す","url":"https://zenn.dev/google_cloud_jp/articles/9324b0f5425866","source":"Zenn","published_at":"2026-11-27 13:40","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"BigQueryのAI関数でレビュー分析をSQLだけで完結させる手法","summary":"BigQueryのAI関数（AI.CLASSIFY, AI.SCORE, AI.GENERATE）を活用し、レビューの感情分析やキーワード抽出をSQLのみで実行する手法を解説しています。リモートモデル作成やJSON分解が不要で、手軽に高度な分析が可能です。\n\n感情分析から満足度の数値化、観点分類まで、用途に応じた関数の使い分けを具体例とともに紹介。特に観点分類をmultiモードで行うことで、毎月の定点観測が容易になるなど、実務的な分析パイプラインの構築に役立つ内容です。","importance":8},{"title":"Agentic CX Designer のアプリケーションを SDK でコード管理してみた","url":"https://zenn.dev/aws_japan/articles/92ccd59867575d","source":"Zenn","published_at":"2026-11-27 17:48","genre":"web","genre_label":"Web開発・言語","headline":"Amazon ConnectのAgentic CX DesignerをSDKでコード管理","summary":"Amazon ConnectのAgentic CX Designer（ACXD）のフローをSDKを用いてコード管理し、Infrastructure as Code（IaC）的に扱う手法が解説されました。画面操作だけでなく、プログラムによるデプロイやテストの自動化が可能になります。\n\nNode.jsスクリプトを用いてフローを定義・デプロイする手順が紹介されており、gitによる差分管理や変更履歴の追跡が可能になります。AIエージェントの構築をプロトタイプから本番運用へ移行する際、自動化とコード管理を導入するための実践的なガイドです。","importance":6},{"title":"情報量が4倍のQRコードを作ろう - Qiita","url":"https://qiita.com/reipandada/items/17496db6ac5f64a5e61a","source":"Hatena","published_at":"2026-11-26 05:01","genre":"mobile","genre_label":"モバイル・ガジェット・個人開発","headline":"QRコードの4隅を隠して情報量を4倍にする試みと結果","summary":"QRコードの4隅にマークを配置し、隠す角を変えることで1枚の画像に4通りの値を持たせるというアイデアを検証したネタ記事です。誤り訂正機能を利用して、どの角を隠しても読み取れるような白黒パターンをAIに生成させました。\n\n結果として、情報量は4倍にはならず、むしろ誤り訂正の限界により普通のQRコードよりも容量が減るという結論に至りました。しかし、思いつきを即座にAIで形にして検証するプロセスは、技術的な遊び心として非常に有意義な試みです。","importance":4},{"title":"【重要】R-18設定のクリエイターへの支援におけるPayPal決済のお取り扱い終了について｜pixivFANBOX公式｜pixivFANBOX","url":"https://official.fanbox.cc/posts/12998412","source":"Hatena","published_at":"2026-11-27 20:42","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"pixivFANBOX、R-18クリエイター支援でのPayPal決済を終了","summary":"pixivFANBOXは、R-18設定のクリエイターに対する支援金支払い方法からPayPal決済を除外することを発表しました。これは以前告知されたMastercardの一部取り扱い終了に続く対応です。\n\n今回の措置は、決済プラットフォーム側の規約やリスク管理方針に伴うものと推測されます。対象となるクリエイターは、他の決済手段への切り替えが必要となるため、公式からの案内を確認し早急な対応が求められます。","importance":5},{"title":"PostgreSQLでWHERE句を追加すると逆に遅くなるケースとその対策","url":"https://zenn.dev/nmiura_thakaz/articles/1410cb8d208de7","source":"Zenn","published_at":"2026-11-27 17:38","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"PostgreSQLでWHERE句追加により性能が劣化する原因と対策","summary":"PostgreSQLにおいて、WHERE句で絞り込み条件を追加した際に、逆にクエリが大幅に遅くなる現象とその対策が解説されました。原因は、関数を含む式に対する統計情報不足により、行数が過小評価され、結合方式がNested Loopに変わってしまうことにあります。\n\n対策として、ビューの末尾にOFFSET 0を追加することで、クエリプランナの最適化（条件の内部移動）を抑制し、ハッシュ結合を維持させる手法が紹介されています。ただし、この手法は有益な最適化も止める可能性があるため、慎重な適用が必要です。","importance":7},{"title":"Leanで安全制約を書くと、ハザード候補がビルドエラーとして見つかる","url":"https://zenn.dev/kokeshim0chi/articles/lean-safety-constraint-build-error","source":"Zenn","published_at":"2026-11-27 13:40","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"Leanを用いた安全制約の形式化で、バッチ処理のハザードをビルドエラーとして検出する","summary":"GoogleのSREで活用されるSTAMP/STPA手法を、定理証明支援系「Lean」を用いて形式化する試み。従来のテスト手法では困難だった「部品は正常だが組み合わせで事故が起きる」というハザードを、安全制約を定理として記述することでビルドエラーとして自動検出する手法を提案している。\n\n退会案内バッチ処理を題材に、状態遷移と安全制約をLeanでモデル化。単体テストでは見抜けない実行順序や重複処理の不整合を、証明不能な箇所として特定することに成功した。今後はLLMによるコード生成とLeanによる検証を組み合わせ、ビジネスロジックの安全性を担保する開発フローへの応用が期待される。","importance":8},{"title":"提供品のレビューは本音を書けるのか？自腹とPRを見分けるパイプラインをGCPで作った","url":"https://zenn.dev/shimodata/articles/gadget-review-self-vs-provided","source":"Zenn","published_at":"2026-11-27 15:07","genre":"web","genre_label":"Web開発・言語","headline":"ガジェットレビューの「自腹」と「PR」を自動判別するGCPパイプライン","summary":"レビュー記事の信頼性を可視化するため、Geminiとdbtを用いて「自腹」か「PR」かを自動判定するパイプラインをGoogle Cloud上に構築した事例です。メーカー提供品に偏りがちなレビューの透明性を高めることを目的としています。\n\nGeminiの構造化出力とdbtによるラベル付けを組み合わせ、アフィリエイト表記と実機入手方法を個別に判定。robots.txtの遵守やアクセス間隔の制御など、スクレイピングの倫理面にも配慮した設計が特徴です。","importance":7},{"title":"サブスクの「お試し→自動更新」は客を逃していた？　新規購読者数は「お試し→自動解約」比23％減　140万人で実験","url":"https://www.itmedia.co.jp/news/article/2611/27/2000003503/","source":"Hatena","published_at":"2026-11-27 12:22","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"サブスクの「お試し→自動更新」は長期的な顧客獲得効率を低下させる可能性","summary":"スタンフォード大学等の研究チームが約140万人を対象に行った実験により、サブスクリプションの「お試し期間後の自動更新」が長期的な購読者数に悪影響を及ぼす可能性が示された。自動更新プランは解約忘れを狙うため短期収益には寄与するが、不信感を生み長期的な契約率を下げることが判明した。\n\n実験では、自動解約プランの方が自動更新プランよりも申込率が高く、約1年後には長期購読者数で逆転する結果となった。消費者は「後で解約しそびれるリスク」を冷静に予測して契約を見送る傾向があり、企業にとっては短期的な囲い込みよりも、透明性の高い契約形態の方が長期的な収益最大化に繋がる可能性がある。","importance":6},{"title":"Innovation Sandbox on AWS v1.4 がリリースされました！","url":"https://zenn.dev/aws_japan/articles/innovation-sandbox-on-aws-v140-changes","source":"Zenn","published_at":"2026-11-27 15:44","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"AWSサンドボックス環境構築ソリューション「ISB」がv1.4にアップデート","summary":"Innovation Sandbox on AWS (ISB) v1.4がリリースされ、AIエージェントによる自動デプロイ機能「Sandbox Spaces」や、MCPサーバー対応による外部ツール連携が強化されました。これにより、AWS初心者でも対話形式で環境構築が可能になり、開発者の生産性向上が期待されます。\n\n本アップデートでは、Bedrockを活用したエージェントが利用者の権限範囲内でリソース作成を代行します。また、MCPサーバーの追加により、Claude Code等の外部ツールから直接サンドボックスの操作や予算確認が可能となり、開発フローのシームレスな統合が実現しました。","importance":8},{"title":"さくらインターネット、AIを月額固定料金で提供する「シンプルAI」発表、システムへの組み込み用途を想定","url":"https://www.publickey1.jp/blog/26/aiai_1.html","source":"Hatena","published_at":"2026-11-27 08:09","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"さくらインターネットが月額固定のAIサービス「シンプルAI」を発表","summary":"さくらインターネットは、システム組み込み用途に特化した月額固定料金制のAIサービス「シンプルAI」を2026年12月10日より提供開始します。従来の従量課金型サービスとは異なり、長期的な安定性を重視したモデル提供を目指しています。\n\n本サービスは、AIモデルの変更による応答の変化を避けたいシステム開発者向けに設計されており、国産LLMの提供やISMAP登録申請も予定されています。クラウドインフラとAIを組み合わせたポートフォリオを強化し、幅広いビジネス用途での活用を促進する狙いです。","importance":8},{"title":"AI時代にテスト設計を学び直す #3 頼み方を工夫したら、AIは観点をどこまで拾えるようになるか","url":"https://zenn.dev/a_maru/articles/1005a2c3f41c39","source":"Zenn","published_at":"2026-11-27 14:15","genre":"web","genre_label":"Web開発・言語","headline":"AIへの指示を工夫してテスト設計の精度を向上させる実験","summary":"AIにテスト設計を依頼する際、プロンプトの構成を工夫することで観点の網羅性がどう変化するかを検証した実験記録です。ISTQBのフレームワークに基づき、役割やコンテキストを明確化することで、AIの出力精度が向上することを確認しました。\n\n単に指示を増やすだけでなく、テスト技法の指定や制約の明確化が有効であることを実証。AIが拾えなかった観点と拾えた観点を分析し、エンジニアがAIと協働する際の「人の仕事」のあり方を再定義しています。","importance":7},{"title":"IDEの次に使わなくなるものは？","url":"https://zenn.dev/kabeya/articles/whats-next-after-ide","source":"Zenn","published_at":"2026-11-27 02:36","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"AI時代にGUIは不要になるか？業務アプリと趣味の領域の分断","summary":"IDEやCADソフトなど、人間がGUIを操作して成果物を作るツールが、AIによる自動生成やMCP経由の操作によって徐々に使われなくなる可能性を考察しています。業務システムにおいては、GUIレス生成とビューワーの組み合わせが主流になると予測されます。\n\n一方で、絵画や音楽、ゲームといった「行為そのものに価値がある」趣味やエンタメの領域では、人間がツールを操作するアプリは残り続けると主張しています。AI時代における「作る」ことの価値の変容と、人間が担うべき領域についての洞察が示されています。","importance":6},{"title":"GPU Lambda ③ 数回の同時呼び出しで 4 台が 7 台に。スケールの実測と料金の試算","url":"https://zenn.dev/nix/articles/c08aa91b37d9ed","source":"Zenn","published_at":"2026-11-27 14:23","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"AWS LambdaのGPU対応、スケール挙動とコスト構造を徹底検証","summary":"AWS LambdaのGPU対応機能について、インスタンスの増減挙動とコスト構造を実測した検証記事です。同時呼び出し数に応じてインスタンスが自動スケールする仕組みと、アイドル時の停止時間について詳細に分析しています。\n\n検証の結果、GPUインスタンスの起動・停止には数分のラグがあることや、同時処理数上限の設定がコストに直結することが判明しました。LambdaのGPU活用を検討する際、コスト事故を防ぐための運用設計指針として非常に価値の高い知見がまとめられています。","importance":8},{"title":"Skills over MCP、めっちゃよさそう | ashunar0","url":"https://ashunar0.dev/posts/skills-over-mcp/","source":"Hatena","published_at":"2026-11-27 07:15","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"MCPサーバーがスキルを配布可能に、Claudeの活用を助ける「Skills over MCP」","summary":"Anthropicが発表した「Skills over MCP」は、MCPサーバーがツールだけでなく、作業手順やコツをまとめた「スキル（マニュアル）」も提供できる仕組みです。これにより、ユーザーはサーバーに接続するだけで、そのツールの最適な使い方をClaudeに学習させることが可能になります。\n\n最大の利点は、スキルがサーバー側で更新されるため、常に最新のマニュアルが利用できる点です。これまで手動で管理していた手順書が不要になり、ツールと使い方がセットで提供されることで、AIエージェントの利便性が飛躍的に向上します。","importance":8},{"title":"OpenTelemetryのTracerProviderとは","url":"https://zenn.dev/gemcook/articles/otel-tracer-provider","source":"Zenn","published_at":"2026-11-27 14:03","genre":"web","genre_label":"Web開発・言語","headline":"OpenTelemetryの「TracerProvider」の役割と仕組みを解説","summary":"OpenTelemetryにおける「TracerProvider」の役割を、初心者向けに図解した解説記事です。トレースの設定を一元管理し、アプリケーション全体で効率的にスパンを記録・送信するための仕組みを紐解いています。\n\nサンプラーによる記録対象の選別や、スパンプロセッサーによる送信タイミングの制御など、本番環境で重要となる設定項目を網羅。Shutdown処理の重要性など、安定したオブザーバビリティ環境を構築するための実践的な知識が整理されています。","importance":7},{"title":"ブラックフライデーでGoogle AIサブスク半額、Pro月額より年2万円お得。YouTubeプレミアムLiteやGoogle Health特典も | テクノエッジ TechnoEdge","url":"https://www.techno-edge.net/article/2026/11/25/5816.html","source":"Hatena","published_at":"2026-11-26 07:45","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"Google AI Pro年額プランが半額に、ブラックフライデーセールで大幅割引","summary":"Googleはブラックフライデーセールとして、ストレージとAIサービスをセットにした「Google AI Pro」の年額プランを半額の1万4500円で提供しています。月額払いと比較して年間2万円以上のコスト削減が可能であり、既存契約者も対象となっています。\n\n本プランには、5TBのストレージに加え、YouTube Premium Liteや健康管理サービス、Google Colabのコンピューティング単位などが含まれており、単体契約よりも割安です。AIモデルの利用枠拡大や高度なコンテキストウィンドウも利用可能で、開発者やヘビーユーザーにとって魅力的なキャンペーンです。","importance":7},{"title":"iostatは正常なのにp99だけ遅い原因はcgroupのIOPS上限","url":"https://zenn.dev/shinagawa_web/articles/io-max-hidden-from-iostat","source":"Zenn","published_at":"2026-11-27 08:01","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"iostatで異常なしでもp99が遅延する原因はcgroupのIOPS上限設定","summary":"アプリケーションの読み込み速度において、中央値は正常でもp99（上位1%）だけが大幅に遅延する場合、cgroupのIOPS上限設定が原因である可能性が高いです。カーネルのblk-throttle機能が、設定されたIOPS上限を守るために読み込み処理を一時停止させることが遅延の正体です。\n\niostatのr_awaitや%utilにはこの停止時間が反映されないため、ディスク負荷が低いにもかかわらず遅延が発生するという現象が起きます。カーネルの処理単位である「slice（100ms）」の仕組みを理解し、同時に投げるI/Oリクエスト数と上限値のバランスを最適化することが解決の鍵となります。","importance":8},{"title":"禁止しても止まらないClaudeの「欲」を飼いならしてみる","url":"https://zenn.dev/rescuenow/articles/9d1e89a941f4f1","source":"Zenn","published_at":"2026-11-27 11:47","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"Claudeの「頼まれていない挙動」を抑制するプロンプトエンジニアリングの実験","summary":"Claudeにコードを書かせる際、指示していない機能や挙動を勝手に追加する「欲」をいかに制御するかを検証した実験。禁止や肯定形での指示、ドキュメント化などの手法を試したが、いずれも本体コードへの余計な追加を完全には防げなかった。\n\n最終的に「思いついたことは実装せず、xfail付きのテストとして書け」と指示することで、本体コードへの追加をゼロにすることに成功した。AIの「正しく動かしたい」という欲求を、実装ではなくテストという形で捌け口を与える手法が有効であることを示唆している。AIの自律的な判断を制御する際の興味深いアプローチである。","importance":7},{"title":"Adobe MAX で発表された MCP のうち、とりあえずIllustrator を測ってみた — 今はまだ JSX に届かない","url":"https://zenn.dev/pepe_3_go/articles/illustrator-three-routes-cost-measured","source":"Zenn","published_at":"2026-11-26 22:50","genre":"web","genre_label":"Web開発・言語","headline":"Adobe IllustratorのMCP対応を検証、現状はJSXに及ばず","summary":"Adobe Illustrator 2027に内蔵されたMCP機能を、従来のJSX（ExtendScript）と比較検証したレポートです。現時点では、ツール定義の読み込みコストや往復回数の多さから、JSXによる自動化の方が効率的であるという結論に至っています。\n\nMCPは安全装置や読み取り機能が統合されている点で「調査・修正」作業には適していますが、保存処理の制限など実用面での課題も指摘されています。正式な提供が進むにつれて改善が期待されますが、現段階では既存のスクリプト環境を置き換えるには至っていないという評価です。","importance":6},{"title":"「制約の中で動かす」から「思想を持って育てる」へ。パッケージベンダー出身の社内SEがセーフィーで直面している日々","url":"https://zenn.dev/safie_inc/articles/9f0d9a522ad1ed","source":"Zenn","published_at":"2026-11-27 10:11","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"パッケージベンダーから社内SEへ、セーフィーで直面する「思想」を問われる開発","summary":"パッケージベンダー出身のエンジニアが、セーフィーの社内SEとして転職後に感じた業務の前提の違いを綴ったエッセイ。前職ではパッケージの制約下での運用効率化が主だったが、自社システムを育てる環境では「システムの思想」を問われる難しさに直面している。\n\n関係者の多さや役割の細分化、ハードウェアとソフトウェアの両面を考慮したシステム設計など、社内SE特有の複雑な調整業務について言及。要望をそのまま実装するのではなく、潜在的なニーズを捉え、将来的な運用を見据えた「開発できる形」へ落とし込むプロセスの重要性を説いている。自社プロダクトを育てる組織におけるエンジニアの役割を再定義する内容である。","importance":5}]};
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
