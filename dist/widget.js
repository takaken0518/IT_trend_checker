// __EMBEDDED_NEWS_START__
globalThis.__IT_TREND_EMBEDDED_DATA__ = {"updated_at":"2026-11-19 02:04:21 JST","total_count":50,"config":{"selected_genres":["ai","web","infra","mobile","biz"],"other_genre_min_ratio":0.25,"max_age_hours":72.0,"genres":{"ai":"AI・LLM・機械学習","web":"Web開発・言語","infra":"インフラ・クラウド・セキュリティ","mobile":"モバイル・ガジェット・個人開発","biz":"ITビジネス・キャリア・マネジメント","other":"総合・その他IT"}},"articles":[{"title":"NGINX2Root by Xint — From nginx visitor to root of the server host","url":"https://nginx2root.com/","source":"Hatena","published_at":"2026-11-19 00:34","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"NGINXに深刻な脆弱性、未認証RCEからサーバーroot権限奪取まで連鎖","summary":"NGINXにおいて、未認証状態からリモートコード実行（RCE）を可能にし、最終的にサーバーのroot権限まで奪取できる一連の脆弱性が発見されました。CVE-2026-123007を含む5つの脆弱性が報告されており、攻撃者はこれらを連鎖させることで、Webサーバーの乗っ取りや機密データの窃取が可能となります。\n\n今回の脆弱性は、NGINXのHTTP/2実装に起因するもので、CVSS 4.0スコアで9.2という極めて高い危険性が評価されています。世界中で広く利用されているNGINXが標的であるため、管理者は早急に影響範囲を特定し、提供されるセキュリティパッチを適用することが強く推奨されます。","importance":10},{"title":"同じ仕事を少ないトークンで。GPT-6.2 AstraとSolが登場","url":"https://pc.watch.impress.co.jp/docs/news/2157394.html","source":"Hatena","published_at":"2026-11-18 16:27","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"OpenAIが新モデル「GPT-6.2 Astra」と「GPT-6.2 Sol」を発表","summary":"OpenAIは、専門業務向けの最上位モデル「GPT-6.2 Astra」と、日常業務向けの汎用モデル「GPT-6.2 Sol」を発表しました。両モデルとも従来より少ないトークンで難易度の高いタスクをこなせるよう最適化されており、コストパフォーマンスが大幅に向上しています。\n\nGPT-6.2 Astraは専門的な文書作成やフロントエンド開発において高い精度を発揮し、GPT-6.2 Solはエージェントとしての連続処理能力を強化しています。また、サイバーセキュリティ能力が最上位の「Critical」に達しており、AIによる自己改善能力も向上しているため、安全対策と監督体制が強化されています。","importance":10},{"title":"認知負荷の減らし方 ～開発にも日常業務にも活かせるノウハウ～","url":"https://speakerdeck.com/minorun365/2026-11-lab-datsubotorunekku-ningen","source":"Hatena","published_at":"2026-11-18 22:07","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"AI時代の認知負荷軽減術、HTML活用で情報判断を効率化","summary":"AIの活用が日常化する中で、AIが生成する膨大な作業報告やログを人間が判断する際の「認知負荷」が新たなボトルネックとなっています。テックエバンジェリストのみのるん氏は、チャットツールでの報告が読みづらいという課題に対し、長い報告をHTML化して専用サイトで管理する手法を提案しています。\n\n「HTML共有くん」という専用サイトを構築し、案件ごとの整理や既読管理、重要なポイントのハイライトを行うことで、判断の速度と質を向上させています。AIに「3行を超えたらHTMLで出力する」よう指示するなど、AIとの協働において人間が判断すべき情報だけを効率的に抽出するノウハウが注目されています。","importance":7},{"title":"「ガチャを回すみたいに強盗する」裁判傍聴の民が実際に見てきたトクリュウの実態がしんどすぎる「普通に仕事しろ」","url":"https://togetter.com/li/2772114","source":"Hatena","published_at":"2026-11-19 00:01","genre":"other","genre_label":"総合・その他IT","headline":"「ガチャ感覚で強盗」トクリュウの実態と防犯対策の重要性","summary":"裁判傍聴を通じて明らかになった「トクリュウ（匿名・流動型犯罪グループ）」による強盗事件の実態が、SNSで大きな反響を呼んでいます。彼らは資産状況を精査せず、リストに基づきゲーム感覚で無差別に襲撃を繰り返しており、効率重視の「物理的なブルートフォース攻撃」を行っている点が特徴です。\n\n指示役がSNSで実行役を募り、使い捨ての駒として犯罪を強要する構造が深刻化しています。専門家は、資産の有無に関わらず標的になるリスクがあるとし、センサーやブザーなどの防犯設備を導入し、「侵入が面倒な家」であると認識させることが、被害を回避するための現実的な対策であると指摘しています。","importance":8},{"title":"tsrs を導入したら oxlint の type-aware linting と typecheck が爆速になった話","url":"https://zenn.dev/dress_code/articles/6c179ae5129131","source":"Zenn","published_at":"2026-11-18 16:00","genre":"web","genre_label":"Web開発・言語","headline":"TypeScriptコンパイラ移植「tsrs」導入でlintと型チェックが爆速化","summary":"フロントエンドおよびバックエンドのCI環境において、oxlintのtype-aware lintingと型チェックの高速化を目的に、Rustで移植されたTypeScriptコンパイラ「tsrs」を導入した事例です。従来利用していたtscと比較して、型チェックの所要時間が大幅に短縮されました。\n\nバックエンドの型チェックでは、中央値が229秒から11秒へと20倍以上の高速化を実現しています。導入にあたっては、誤検知のリスクを避けるために既存のtscと並行稼働させる2段階の移行プロセスを採用し、結果の整合性を確認した上で完全移行しました。","importance":8},{"title":"CocoaPods Trunkの更新停止で、React Native・Expoアプリはどうなる？SwiftPM移行に備える","url":"https://zenn.dev/tellernovel_inc/articles/react-native-cocoapods-to-spm","source":"Zenn","published_at":"2026-11-18 14:42","genre":"mobile","genre_label":"モバイル・ガジェット・個人開発","headline":"CocoaPodsのTrunk更新停止に伴うReact NativeアプリのSwiftPM移行戦略","summary":"CocoaPodsのTrunkサービスが2026年12月2日に更新停止されることに伴い、React NativeやExpoアプリへの影響と対策が解説されています。既存のビルドが直ちに壊れるわけではありませんが、今後のSDK更新を見据えたSwiftPMへの移行準備が重要です。\n\nアプリ全体を即座にSwiftPMへ移行する必要はなく、CocoaPodsで配布されなくなったSDKのみをSwiftPMで取得するハイブリッド運用が推奨されています。React Native Firebaseなどの主要ライブラリは既にこの構成に対応しており、設定の変更によりスムーズな移行が可能です。","importance":7},{"title":"Unauthenticated Remote Code Execution in NGINX: CVE-2026-123633 and CVE-2026-123007 | Wiz Blog","url":"https://www.wiz.io/blog/nginx-http2-rce-vulnerabilities","source":"Hatena","published_at":"2026-11-19 00:27","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"NGINXのHTTP/2に致命的なRCE脆弱性、CVSS 9.2の深刻度","summary":"NGINXのHTTP/2実装において、リモートコード実行（RCE）を許す2つの致命的な脆弱性（CVE-2026-123633およびCVE-2026-123007）が発見されました。Wiz ResearchやRapid7など複数のセキュリティ機関が共同で調査し、攻撃者がサーバーを完全に制御できるリスクを警告しています。\n\nNGINXは世界で最も利用されているWebサーバーの一つであり、本脆弱性はアプリケーションコードの安全性に関わらず、サーバー自体を侵害する恐れがあります。HTTP/2を有効にしている環境が対象となるため、F5社が提供する修正パッチの適用が急務です。","importance":10},{"title":"日本郵便が挑む「住所の正規化」――日本国内の住所を7桁の英数字で表す「デジタルアドレス」で、表記揺れや記入の面倒を無くす【地図と位置情報】","url":"https://internet.watch.impress.co.jp/docs/column/chizu3/2152316.html","source":"Hatena","published_at":"2026-11-18 08:00","genre":"other","genre_label":"総合・その他IT","headline":"日本郵便の「デジタルアドレス」で住所入力のDXを推進","summary":"日本郵便が提供する「デジタルアドレス」は、住所を7桁の英数字に変換し、手続き時の入力手間や表記揺れを解消するサービス。ゆうIDと連携し、転居時も同じアドレスを引き継げる。\n\nAPIを通じて宿泊施設やECサイトなど他社サービスへの導入が進んでおり、法人向けには社名や電話番号も紐付けられる「ビジネスデジタルアドレス」も展開。住所情報の正規化とDXを加速させている。","importance":6},{"title":"Geminiが電話も支払いも代行する「タスク」モード、日本でも無料で提供開始 | テクノエッジ TechnoEdge","url":"https://www.techno-edge.net/article/2026/11/18/5756.html","source":"Hatena","published_at":"2026-11-18 09:39","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"Geminiアプリに電話や支払いを代行する「タスク」モードが登場","summary":"GoogleはGeminiアプリに、電話予約や決済代行を行う「タスク」モードを追加し、日本を含む複数国で無料提供を開始した。Gemini 4 Hydrogenモデルを使用し、車の整備予約や電気料金分析、買い物などを自動化する。\n\nアカウントごとに専用の仮想マシンで処理を行い、決済にはAgent Payments Protocolを利用。失敗の可能性も示唆されているが、AIエージェントによる実務代行が一般ユーザー向けに拡大した。","importance":9},{"title":"Copilot Managed Runtime が一般公開 - Vibe Codingに必須のプラットフォーム - 吉田の備忘録","url":"https://memo.tyoshida.me/copilot/copilot-managed-runtime-general-availability/","source":"Hatena","published_at":"2026-11-18 13:18","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"Copilot Managed RuntimeがGA、AIアプリ開発のガバナンス基盤へ","summary":"MicrosoftはAIアプリ実行基盤「Copilot Managed Runtime」の一般提供を開始した。Power Appsの知見を活かし、AIが生成したアプリを企業のセキュリティやガバナンス基準に準拠させて運用するためのプラットフォームを提供する。\n\n認証、データ接続、ソース管理、一元管理機能を備え、開発と運用を分離することで、AIによる迅速な開発（Vibe Coding）と企業レベルの安全な運用を両立させる狙いがある。","importance":8},{"title":"GitHub - libraz/suzume: A lightweight Japanese tokenizer for browsers and native apps — WebAssembly, Node.js, Python, Go, and C++, returning POS tags and lemmas with the dictionaries built in","url":"https://github.com/libraz/suzume","source":"Hatena","published_at":"2026-11-18 22:16","genre":"web","genre_label":"Web開発・言語","headline":"ブラウザやネイティブアプリで動作する軽量日本語トークナイザー「Suzume」","summary":"「Suzume」は、ブラウザ、Node.js、Python、Go、C++など多様な環境で動作する軽量な日本語トークナイザーです。MeCabのような詳細な形態素解析を目的とせず、検索や表示、アプリケーションコードでの利用に最適化された単位での分割を主眼としています。\n\n単なる境界分割だけでなく、品詞タグや見出し語（lemma）の抽出にも対応しており、辞書を内蔵しながらもコンパクトな設計が特徴です。検索キーワードの生成や重複排除など、実用的なテキスト処理を必要とする開発者にとって、環境を選ばずに導入できる強力なツールとなります。","importance":6},{"title":"Suicaペンギンの後継キャラはB案「紫のうさぎ」に　愛称募集を開始","url":"https://www.watch.impress.co.jp/docs/news/2157432.html","source":"Hatena","published_at":"2026-11-18 14:20","genre":"other","genre_label":"総合・その他IT","headline":"Suicaの次期キャラクターは「紫のうさぎ」に決定","summary":"JR東日本は、Suicaのペンギンの卒業に伴う新キャラクターとして、投票で最も多くの票を集めた「B案（紫のうさぎ）」を採用すると発表しました。今後は愛称の募集を開始し、2027年3月末のバトンタッチイベントで発表予定です。\n\n今回のキャラクター変更は、Suicaを「移動のデバイス」から「生活のデバイス」へ進化させる「Suicaルネサンス」の一環です。審査員からは、キャラクターの持つ「余白」や「謎めいた魅力」がSNS時代にマッチしていると評価されており、今後の展開が注目されています。","importance":4},{"title":"LiteRT-LM on Android 実装Tips — 実機 10 数機種で分かったこと","url":"https://zenn.dev/uphyca/articles/ab08a82829d5aa","source":"Zenn","published_at":"2026-11-18 02:08","genre":"mobile","genre_label":"モバイル・ガジェット・個人開発","headline":"AndroidでのLiteRT-LM実装：実機検証で判明したキャッシュと負荷の課題","summary":"AndroidアプリでオンデバイスLLM（LiteRT-LM）を実装する際の注意点を、実機10数機種での検証に基づき解説。初回のモデル読み込みが極端に遅い問題に対し、モデルダウンロード直後のキャッシュ事前生成が有効である。\n\nまた、キャッシュの肥大化を防ぐためのディレクトリ管理や、Conversationオブジェクトの推論ごとの再生成など、メモリ消費とパフォーマンスを最適化するための具体的な実装Tipsをまとめた。","importance":7},{"title":"MUJI Card発行のクレディセゾン、カード番号削除を2度依頼　無印は実行せず","url":"https://xtech.nikkei.com/atcl/nxt/column/18/00001/12190/","source":"Hatena","published_at":"2026-11-18 23:15","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"MUJI Card情報漏えい、クレディセゾンが2度の削除依頼も良品計画が放置","summary":"良品計画が発行する「MUJI Card」のクレジットカード番号約109万件が漏えいした恐れがある事案で、新たな事実が判明しました。カード発行元のクレディセゾンが、2020年と2021年の2度にわたり良品計画に対してカード番号の削除を依頼していたにもかかわらず、良品計画側がこれに応じず保持し続けていたことが明らかになりました。\n\nこの事実は、企業間におけるセキュリティ管理体制の不備を浮き彫りにしています。発行会社からの再三の要請を無視して機密データを保持し続けた判断が、今回の大規模漏えい被害を招いた要因の一つとして厳しく問われることになります。","importance":9},{"title":"「Google Apps Script」のコードをGeminiで開発する機能が一般提供開始／専門知識なしで業務自動化が可能に","url":"https://forest.watch.impress.co.jp/docs/news/2157510.html","source":"Hatena","published_at":"2026-11-18 19:29","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"Google Apps Scriptのコード開発がGeminiで可能に、業務自動化を民主化","summary":"Googleは「Google Apps Script（GAS）」のコードをGeminiで開発できる機能の一般提供を開始しました。これにより、プログラミングの専門知識がないユーザーでも、自然言語で指示を出すだけで業務自動化プログラムを作成できるようになります。\n\n従来はゼロからコードを書く必要があった自動化処理が、メールとカレンダーの連携やレポート作成など、日常的な業務フローとして数分で実現可能です。エラー発生時もGeminiが診断と修正案を提示するため、非技術職の従業員でもトラブルシューティングが容易になります。組織の生産性向上に大きく寄与するアップデートです。","importance":8},{"title":"Go Conference 2026実行委員を終えて","url":"https://zenn.dev/mire0726/articles/1f3f118662a0f5","source":"Zenn","published_at":"2026-11-17 16:21","genre":"other","genre_label":"総合・その他IT","headline":"Go Conference 2026運営の振り返りと持続可能なカンファレンス作り","summary":"Go Conference 2026の運営を通じて、持続可能なカンファレンス作りのためのプロジェクト制度や学生支援、プロポーザル採択基準の一新など、多くの挑戦が行われた。\n\nAI時代において、抽象的なプロポーザルではなく具体的で明確な内容を評価することの重要性が強調された。スタッフ間のコミュニケーションツール変更や、配信・ネットワーク・懇親会などの工夫により、トラブルなくイベントを終えることができた。先達の知見を継承しつつ、次世代の運営へとバトンが渡されている。","importance":5},{"title":"ソフトウェアエンジニアの黄昏期をこう過ごそうと思う｜わかばめ","url":"https://note.com/wakabame/n/nc76b65a187bb","source":"Hatena","published_at":"2026-11-17 22:10","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"コーディングエージェント時代のソフトウェアエンジニアの生存戦略","summary":"コーディングエージェントの進化により、実装業務の自動化が進み、エンジニアの役割が質的に変化している。指示一つでコードが生成される現在、単にコードを書くだけのエンジニアの価値は相対的に低下しつつある。\n\n今後は、AIが生成したコードの妥当性判断や、プロダクト全体の設計、要件定義といった上位レイヤーの業務が重要となる。AIを使いこなし、AI同士のレビューを批判的にジャッジできる能力こそが、これからのエンジニアに求められる生存戦略である。","importance":9},{"title":"決済という機能を実装するのは容易だが、思っていたより考えることが多かった","url":"https://zenn.dev/chot/articles/1297582ee96341","source":"Zenn","published_at":"2026-11-17 20:22","genre":"web","genre_label":"Web開発・言語","headline":"決済機能実装における冪等性と整合性確保の重要性","summary":"決済機能の実装はAPIを叩くだけでなく、サービスの信用を担保するための厳密な設計が求められる。特に、金額の改ざん防止、在庫確保の整合性、二重課金の防止は必須の要件である。\n\nリクエストの再送や並行実行を防ぐための冪等性キーの導入や、決済結果と商品提供ステータスの分離管理が重要となる。通信障害時の結果不明状態への対応など、決済サービスとのやり取りには「成功・失敗」の二元論ではない堅牢なエラーハンドリング設計が不可欠である。","importance":9},{"title":"プロトタイプが「YouTube200万再生」でバズったゲーム開発者、初動売上500本弱でちゃんと反省。ホットなうちに“売る準備”すべし - AUTOMATON","url":"https://automaton-media.com/articles/newsjp/20261118-479880/","source":"Hatena","published_at":"2026-11-18 20:16","genre":"mobile","genre_label":"モバイル・ガジェット・個人開発","headline":"YouTubeでバズったゲーム開発者が語る「売る準備」の重要性","summary":"プロトタイプがYouTubeで200万回以上再生されるほどバズったにもかかわらず、初動売上が500本弱に留まったゲーム開発者が、その反省を共有しています。最大の敗因は、バズっている最中にSteamページなどの「売る準備」が整っていなかったことでした。\n\n開発者は、注目が集まっている「ホットな時期」に購入先への導線を用意しておくことの重要性を強調しています。どれほど優れたコンテンツであっても、ユーザーが購入したいと思った瞬間にアクションを起こせない環境では、機会損失が避けられないという教訓は、多くの個人開発者にとって重要な示唆となります。","importance":5},{"title":"推定量と推定値は何が違うのか","url":"https://zenn.dev/pillow_stat/articles/statistic-estimator-estimate","source":"Zenn","published_at":"2026-11-17 22:26","genre":"other","genre_label":"総合・その他IT","headline":"統計学における「推定量」と「推定値」の明確な違い","summary":"統計学において、確率変数である「推定量」と、データから算出された具体的な数値である「推定値」は混同されやすい。推定量はデータを取る前の確率変数であり、分布を持つが、推定値は計算結果の固定された数値である。\n\n頻度論の立場では、信頼区間も確率変数である区間推定量によって定義される。推定量と推定値の区別を意識することは、統計的な推論の正当性を理解する上で不可欠である。記号が同じ場合でも、文脈が「データを取る前」か「取った後」かを判断することで混乱を防ぐことができる。","importance":4},{"title":"楽天証券の情報漏えい、集団訴訟の動き始まる　「タイムズカー集団訴訟」の弁護士がサイト開設 - 弁護士ドットコムニュース","url":"https://www.bengo4.com/c_18/n_21206/","source":"Hatena","published_at":"2026-11-18 20:57","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"楽天証券情報漏えい、集団訴訟の動きが加速","summary":"楽天証券の顧客情報漏えい問題を受け、被害者による集団訴訟の動きが始まりました。タイムズカーの漏えい問題でも活動している牧野裕貴弁護士が、参加希望者を募る専用サイトを公開し、法的措置に向けた準備を進めています。\n\n今回の漏えいでは、最大約447万口座分の個人情報や資産情報が流出した可能性があるとされています。牧野弁護士は、企業側の管理体制を「仕方ない」で済ませるべきではないと主張しており、登録者数や企業の対応を見極めながら提訴の判断を行う方針です。企業のセキュリティに対する責任が改めて問われる事態となっています。","importance":8},{"title":"Opus 5 に替えた途端、AI が手順を飛ばし始めた ― 原因はルールの書き方ではなかった","url":"https://zenn.dev/nyabicode/articles/opus5-broke-my-rules","source":"Zenn","published_at":"2026-11-18 16:36","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"AIモデル「Opus 5」で指示が通らなくなった原因と対策","summary":"新しいAIモデル「Opus 5」導入後、AIが過去の決定を忘れたり手順を飛ばしたりする問題が発生しました。当初はルールの記述量過多を疑いましたが、根本原因はモデルの「標準装備（前提知識）」が大幅に削減されたことによる土台の崩れでした。\n\n対策として、AIが作業前に読むドキュメントにルールを置くのではなく、AIとの対話のたびに「フック」機能を用いて必須の心得を毎回差し込む手法を採用しました。これにより、AIの挙動を安定させ、指示の遵守率を改善することに成功しています。","importance":8},{"title":"最近、コードを真面目に読まなくなった","url":"https://zenn.dev/hiromoo/articles/reading-less-preparing-more","source":"Hatena","published_at":"2026-11-18 11:28","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"AI時代の開発：コードの精読から前提条件の設計へシフト","summary":"AIが生成するコードの精度向上に伴い、すべての差分を精読する習慣を見直すべきという考察。AIに実装を任せ、人間は「何を改善したいか」「守るべき条件は何か」という前提条件の設計に注力する方が成果につながる。\n\nAIの知識や推論能力をツールとして活用し、評価の仕組みを整えることで、自分一人で考えるよりも高い成果を目指す開発スタイルへの転換を提唱している。","importance":7},{"title":"ESLint から oxlint へ。lint が 50 倍速くなるまでの移行の記録","url":"https://zenn.dev/rimo/articles/12d6a7b1c58fcd","source":"Zenn","published_at":"2026-11-18 09:51","genre":"web","genre_label":"Web開発・言語","headline":"ESLintからoxlintへの移行でlint速度を50倍に高速化","summary":"フロントエンド開発において、メインのlinterをESLintからoxlintへ移行し、lint速度を約50倍に向上させた事例。AIによるコーディング支援（PostToolUse）の高速化を目的として導入された。\n\nESLintのルールをoxlintへ段階的に同期させ、未対応ルールのみをESLintで併用する運用を確立。設定の集約と暫定的な除外ルールの管理により、開発効率とコード品質を両立させた。","importance":7},{"title":"Firebase App Check の決まりを、コードの構造で守る【実践編】","url":"https://zenn.dev/dely_jp/articles/f053b9847658df","source":"Zenn","published_at":"2026-11-18 18:24","genre":"mobile","genre_label":"モバイル・ガジェット・個人開発","headline":"Firebase App Checkの制約をコード構造で守る実践的設計","summary":"Firebase App Check（App Attest）を安全に運用するための、コード構造による設計手法が解説されています。開発者がルールを覚えることに依存せず、コンパイルや依存関係の定義を通じて、初期化順序やトークン取得の失敗処理を強制するアプローチです。\n\n具体的には、初期化処理を単一の関数に閉じ込める、通信層に失敗の理由を返さない型設計にする、共通の通信経路でヘッダーを付与するなどの手法が紹介されています。これにより、ヒューマンエラーによる実装漏れを防ぎ、堅牢なセキュリティ基盤を構築することが可能になります。","importance":6},{"title":"楽天証券の大規模漏えい、なぜテスト環境に顧客情報が？　「本番データでの確認が必要だった」","url":"https://www.itmedia.co.jp/news/article/2611/18/2000003302/","source":"Hatena","published_at":"2026-11-18 17:46","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"楽天証券、テスト環境に本番データ使用で大規模漏えい","summary":"楽天証券が公表した不正アクセスによる大規模な顧客情報漏えい問題で、テスト環境に本番の顧客データをマスキングなしで保存していたことが判明しました。同社はシステムアップグレード時の検証作業において、本番データが必要だったと説明しています。\n\n最大約1572万口座分の情報が流出した可能性がある今回の事案では、テスト環境のセキュリティ管理の甘さが厳しく指摘されています。同社は例外的な対応であったと強調していますが、SNS等ではログインを必須とする確認方法や、退会済みユーザーへの対応についても疑問の声が上がっており、信頼回復に向けた課題が山積しています。","importance":9},{"title":"llama.cppの新機能で弩級モデルをローカルで動かそう","url":"https://zenn.dev/satoshi_yoneda/articles/moe-cache-cpu-share","source":"Zenn","published_at":"2026-11-18 12:44","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"llama.cpp v1.0の新機能でMoEモデルのローカル推論を効率化","summary":"推論エンジンllama.cppがv1.0に到達し、MoEモデルを効率的に動かす新オプション「--moe-cache-cpu-share」が追加された。これはExpertキャッシュがミスヒットした際にCPUで計算を分担させる機能で、VRAM容量を超える巨大モデルの推論効率を向上させる。\n\nLRUキャッシュ制御の導入により、コンテキストに応じた最適なExpert管理が可能となった。ただし、パラメータ調整にはGPUやメモリ構成に応じた試行錯誤が必要となる。","importance":8},{"title":"AI時代の新卒、実務で技術が身につきづらいので自分でなんとかする── Google Cloudで作った「AI禁止×音声口頭試問」学習システム","url":"https://zenn.dev/acntechjp/articles/bfefba399ab42d","source":"Zenn","published_at":"2026-11-17 19:44","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"AI時代の技術力を鍛える個人開発学習システム「ANOR」","summary":"AIによる開発が前提となった現代において、新卒エンジニアが実務を通じて技術力を身につけることの難しさを背景に、学習システム「ANOR」が開発された。AI使用禁止環境で設計・実装・デバッグを行う訓練を可能にする。\n\n最大の特徴は、実装後にAIと対話する「音声口頭試問」を導入し、設計意図を言語化する能力を養う点にある。クラウド資格の知識を活かし、Google Cloud上に構築されたこのシステムは、受け身の学習から脱却し、自ら技術力を高めようとするエンジニアの気概を体現している。","importance":7},{"title":"Odin に賭けたい人向けの Odin 言語入門ガイド","url":"https://zenn.dev/mizchi/articles/odin-introduction-guide","source":"Zenn","published_at":"2026-11-18 14:53","genre":"web","genre_label":"Web開発・言語","headline":"Go風の構文と低レベル操作を両立する「Odin」言語入門","summary":"手続き型言語「Odin」の概要と特徴を解説しています。Go言語に似た構文を持ちつつ、メモリ配置やビット単位のレコード操作など、より低レベルな制御を直接記述できる点が特徴です。特にビットフィールド（bit_field）や集合（bit_set）の扱いが強力で、ハードウェアに近い開発に適しています。\n\nメモリ管理やC ABIとの接続機能が言語仕様に含まれており、パフォーマンスを重視するツール開発などで採用が進んでいます。WebAssemblyへのコンパイルもサポートされており、モダンなシステムプログラミング言語としての可能性が紹介されています。","importance":6},{"title":"iPhoneで入退室　パナ、Appleウォレット社員証対応の入退室管理システム","url":"https://www.watch.impress.co.jp/docs/news/2157527.html","source":"Hatena","published_at":"2026-11-18 17:25","genre":"mobile","genre_label":"モバイル・ガジェット・個人開発","headline":"パナソニック、Appleウォレット社員証対応の入退室管理システム","summary":"パナソニック エレクトリックワークスは、入退室管理システム「eX-SG」シリーズがAppleウォレットの社員証に対応したと発表しました。これにより、iPhoneやApple Watchをリーダーにかざすだけで、オフィスやセキュリティゲートの通過が可能になります。\n\n物理的なICカードの発行が不要となり、新入社員への権限付与も迅速化されます。また、エクスプレスモードを利用すれば端末のロック解除も不要で、充電切れ時でも予備電力で動作する利便性を備えています。紛失時には「探す」アプリで即座にロックできるなど、セキュリティと利便性を両立した次世代のオフィス管理ソリューションです。","importance":6},{"title":"NewsPicks漏えい、Metabase脆弱性が原因　パッチ適用前日にデータ窃取、JPCERT/CC公表「不審IPアドレス」で攻撃発覚","url":"https://www.itmedia.co.jp/news/article/2611/18/2000003300/","source":"Hatena","published_at":"2026-11-18 17:06","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"NewsPicks漏えい、Metabase脆弱性悪用でパッチ適用前にデータ窃取","summary":"経済メディア「NewsPicks」で発生した個人情報漏えい問題の原因が、BIツール「Metabase」のSQLインジェクション脆弱性（CVE-2026-72898）であったことが調査報告で明らかになりました。攻撃者は脆弱性公表の4日後から攻撃を開始し、パッチ適用前日にデータを窃取していました。\n\n攻撃者は多要素認証を迂回して管理者権限を奪取し、APIキーを作成して継続的にデータを偵察していました。JPCERT/CCの注意喚起をきっかけに不正アクセスが発覚しましたが、大量データ取得の監視不足などが課題として浮き彫りになりました。今後は「防御は突破される前提」での被害最小化と即時検知体制の強化が求められます。","importance":9},{"title":"ローカルLLM入門","url":"https://zenn.dev/port_inc/articles/ff974c7456f4db","source":"Hatena","published_at":"2026-11-17 23:09","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"ローカルLLMの仕組みとPCで動かすための技術的要点","summary":"ローカルLLMは、入力データを外部に出さずに推論を行えるため、セキュリティとプライバシーの観点で重要である。モデルの正体は「重み」と呼ばれる数値の集合であり、推論エンジンを用いて手元のPCで実行できる。\n\n生成速度は計算性能よりもメモリ帯域に強く依存し、量子化技術を用いることでVRAM容量に合わせたモデル運用が可能になる。オープンモデルの性能は急速に向上しており、半年〜1年前の最上位級モデルが手元で動かせる時代となっている。PrefillとDecodeのフェーズを理解し、ハードウェア性能を活かすことが肝要だ。","importance":9},{"title":"コスプレイヤー伊織もえ、Anthropic社の新規公開株購入を申し込み「Claudeをたくさん使ってるので」","url":"https://kai-you.net/article/97192","source":"Hatena","published_at":"2026-11-18 18:05","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"コスプレイヤー伊織もえ、Claude開発のAnthropic IPOに申し込み","summary":"コスプレイヤーの伊織もえさんが、生成AI「Claude」を開発する米Anthropic社の新規株式公開（IPO）に申し込んだことをXで報告しました。普段からClaudeを頻繁に活用していることが投資の動機であると明かしています。\n\nAnthropic社はIPOに向けた届出書の中で、市場競争や計算資源の確保に加え、「人類滅亡」のリスク要因を明記していることでも注目を集めています。AI技術の急速な発展と、それに伴う社会的・倫理的リスクへの関心が高まる中、著名人が開発企業へ投資する動きは、AIが一般層の生活や資産運用にまで深く浸透していることを象徴しています。","importance":5},{"title":"Microsoft FabricをGitに統合する ― ワークスペースとブランチの関係からAIエージェントを使った開発まで","url":"https://zenn.dev/headwaters/articles/e2aef1de50c368","source":"Zenn","published_at":"2026-11-17 23:57","genre":"web","genre_label":"Web開発・言語","headline":"Microsoft FabricのGit連携で実現するチーム開発とAI活用","summary":"Microsoft FabricのワークスペースをGitリポジトリと同期させることで、ブランチ管理やプルリクエストによるコードレビューが可能になる。これにより、Web画面での直接編集による変更履歴の欠落という課題を解決できる。\n\nGit連携によりアイテム定義がファイル化されるため、AIエージェントによる自動編集やFabric CLIを用いた開発フローの構築が容易になる。複数人開発ではワークスペースをブランチ単位で分離する構成が推奨され、データ自体は同期対象外である点に注意が必要だ。","importance":7},{"title":"Expo の分析は Firebase から PostHog へ","url":"https://zenn.dev/gemcook/articles/expo-posthog-ai-default","source":"Zenn","published_at":"2026-11-18 14:14","genre":"mobile","genre_label":"モバイル・ガジェット・個人開発","headline":"Expoアプリの分析ツールとしてFirebaseからPostHogへの移行が進む理由","summary":"Expoアプリ開発において、分析ツールとしてFirebase AnalyticsからPostHogへの移行が加速している現状を分析しています。GitHubのリポジトリ数やnpmのダウンロード数において、PostHogがFirebaseを上回るケースが増加しており、特に新規アプリでの採用率が高まっています。\n\nPostHogが選ばれる背景には、Expo公式の連携コマンドによる導入の容易さや、AIによる開発ツール推奨のトレンドがあります。PostHog自身もAIエージェントによる利用を想定したドキュメント整備を進めており、開発者体験の向上がエコシステム内でのシェア拡大に繋がっています。","importance":6},{"title":"Oracle Java の脆弱性対策について(2026年11月) | 情報セキュリティ | IPA 独立行政法人 情報処理推進機構","url":"https://www.ipa.go.jp/security/security-alert/2026/1118-jre.html","source":"Hatena","published_at":"2026-11-18 16:58","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"Oracle Javaの脆弱性対策：2026年11月のセキュリティ更新プログラム適用を推奨","summary":"2026年11月18日、Oracle Javaに関するセキュリティ更新プログラムが公表されました。報告された脆弱性（CVE-2026-114938など）を悪用されると、アプリケーションの異常終了や攻撃者によるパソコンの制御など、深刻な被害が発生する恐れがあります。\n\n対象となるのはOracle Java SE 27.0.1.0.3、25.0.5.0.3、21.0.13.0.3、17.0.21.0.3、11.0.33.0.3、8 Update 511b33などです。ネットワーク経由で攻撃を受ける可能性があるため、早急に最新版へのアップデートを適用してください。商用利用の場合はライセンスを確認し、適切なサポート体制を整えることが推奨されます。","importance":9},{"title":"AI-DLCワークフローは見積もりにも使える？スコープを自作して概算見積もりを出してみた","url":"https://zenn.dev/canly/articles/82eff96f049e13","source":"Zenn","published_at":"2026-11-18 17:00","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"AI-DLCワークフローを活用した開発見積もりの標準化手法","summary":"開発プロジェクトの概算見積もりにおいて、担当者ごとの観点のブレを解消するため、AI駆動開発ワークフロー「AI-DLC」のスコープ機能を活用する手法が紹介されています。開発フェーズを細分化したステージ構成を定義し、見積もり専用のスコープを作成することで、誰が実行しても一貫した見積もりプロセスを実現しました。\n\n具体的には、見積もり用のステージ構成を定義するスコープファイルとステージ構成表を作成し、AIエージェント（composer）に構成を提案させることで効率化を図っています。また、見積もりルールをナレッジとして分離して管理することで、通常開発への影響を避けつつ、見積もり手順を各ステージに適用する仕組みを構築しました。","importance":7},{"title":"おい、 Mutation Test をやれ。テスト品質を、測るために","url":"https://zenn.dev/mizchi/articles/mutation-test-quality","source":"Zenn","published_at":"2026-11-17 18:53","genre":"web","genre_label":"Web開発・言語","headline":"テスト品質を担保するミューテーションテストの有用性","summary":"AIによるコード生成が普及し、テストカバレッジを上げることは容易になったが、そのテストが本当に品質を担保しているかは別問題である。単純なカバレッジ指標の限界を補う手法として、ミューテーションテストが推奨される。\n\nミューテーションテストは、コードを意図的に書き換えてテストが失敗するかを確認することで、テストコード自体の品質を検証する。分岐条件や演算子の書き換えを通じて、テストが見逃しているロジックの欠陥を浮き彫りにできる。ユニットテストが実装の品質保証なら、ミューテーションテストはテストの品質保証である。","importance":7},{"title":"ｽﾀｯｸﾁｬﾝを Muse ガジェットにして、Google TTS で喋らせる","url":"https://zenn.dev/fujihide/articles/cf3eb84525346c","source":"Zenn","published_at":"2026-11-18 13:55","genre":"mobile","genre_label":"モバイル・ガジェット・個人開発","headline":"ｽﾀｯｸﾁｬﾝをMuseガジェット化し、Google TTSで音声対話を実現する手順","summary":"M5Stack CoreS3ベースの「ｽﾀｯｸﾁｬﾝ」にMetaのMuseガジェットSDKを導入し、音声対話デバイスとして構築する手順を解説しています。SDK標準ではテキスト返答のみであるため、Google Cloud Text-to-Speech（TTS）を組み込み、返答を音声で再生できるようにカスタマイズしました。\n\n環境構築からファームウェアのビルド、SDKトークンの登録、Wi-Fi設定、そしてTTS APIの連携までを網羅しています。上流のSDK更新に追従しやすいよう、本体を直接編集せずパッチを当てる構成を採用しており、個人開発での拡張性を考慮した実装となっています。","importance":5},{"title":"楽天証券への不正アクセスについてまとめてみた - piyolog","url":"https://piyolog.hatenadiary.jp/entry/2026/11/18/100525","source":"Hatena","published_at":"2026-11-18 10:53","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"楽天証券で不正アクセスにより最大1,572万口座分の情報漏えいのおそれ","summary":"楽天証券は第三者による不正アクセスにより、テスト環境に保管されていた顧客情報が漏えいした可能性があると公表。テスト環境で本番データを用いた動作確認を行っていたことが原因。\n\n漏えいのおそれがあるのは商品別資産情報などで、ログインパスワードや暗証番号の漏えいは確認されていない。最大約1,572万口座分に影響が及ぶ可能性があるとして調査が進められている。","importance":9},{"title":"QA効率化におけるAI活用事例","url":"https://zenn.dev/applibot_tech/articles/6b8ec8d196634b","source":"Zenn","published_at":"2026-11-18 15:33","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"AIを活用した仕様書と実装の差分チェックによるQA効率化事例","summary":"ゲーム開発現場において、仕様変更に伴う仕様書と実装の食い違いを防ぐため、AIを活用した差分チェックツールを開発した事例です。AIが仕様書の要件とGitの差分を突き合わせ、「未実装」や「判定不能」を自動分類することで、不具合の早期発見を目指しています。\n\n当初は膨大なトークン消費が課題でしたが、AIに渡す前にプログラム処理で候補を絞り込むことで、トークン量を約1/10に削減しました。また、誤検知を減らすために「判定不能」というステータスを導入し、QA担当者と連携して運用を改善しています。","importance":7},{"title":"組み込みC講座 第28講：ビット演算を理解する","url":"https://zenn.dev/makoto_a67/articles/2060235570cc88","source":"Zenn","published_at":"2026-11-18 15:01","genre":"web","genre_label":"Web開発・言語","headline":"組み込みC言語におけるビット演算の基礎とハードウェア制御","summary":"組み込みソフトウェア開発において不可欠なビット演算の基本概念と、ハードウェア制御への応用を解説しています。整数をビットの並びとして扱い、特定のフラグを操作する手法や、ビットマスクを用いた特定のビットの抽出・反転・設定方法について詳述しています。\n\n特にRaspberry Pi Pico 2 WHのGPIO制御を例に、シフト演算子や論理演算子を組み合わせた効率的なフラグ管理手法を紹介。メモリ制限の厳しい環境で、一つの整数変数を複数のフラグとして活用する実践的なテクニックを学ぶことができます。","importance":5},{"title":"Forms の自動回答を Claudeにやらせる","url":"https://zenn.dev/ai_daigakusei/articles/microsoft-forms-draft-fill-human-submits","source":"Zenn","published_at":"2026-11-18 02:38","genre":"mobile","genre_label":"モバイル・ガジェット・個人開発","headline":"Microsoft Formsの自動回答下書き作成ツールを構築","summary":"Microsoft Formsの設問を読み取り、Claudeを活用して回答の下書きを自動入力する仕組みを構築。専用のChromeプロファイルとPythonスクリプトを使用し、送信ボタンは押さずに下書き作成までを自動化する。\n\nFormsのJavaScript描画に対応するため、ブラウザ操作を自動化。回答が不明な設問はTelegram経由でスマホに通知する機能を備え、手作業によるミスを減らしつつ、最終的な提出判断は人間が行う安全な運用を実現した。","importance":5},{"title":"三菱UFJ eスマート証券 証券口座番号約6万件漏えい | NHKニュース","url":"https://news.web.nhk/newsweb/na/nd-20261118de77737","source":"Hatena","published_at":"2026-11-18 15:54","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"三菱UFJ eスマート証券、委託先への不正アクセスで約6万件の口座情報漏えい","summary":"三菱UFJ eスマート証券は、アプリやウェブサイトの案内業務を委託している「プレイド」が不正アクセスを受けた影響により、利用者の証券口座番号約6万件および年齢情報約10万件が漏えいしたと発表しました。サプライチェーンリスクが顕在化した事例です。","importance":8},{"title":"M4 MacBook Air で MuJoCo 4 × Gymnasium 1.4：ハマり3つと、MPS で学習に約13倍かかった実測","url":"https://zenn.dev/macsimlab/articles/37ce87f9a4a33e","source":"Zenn","published_at":"2026-11-18 13:44","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"M4 MacBook AirでのMuJoCo強化学習：MPS利用はCPUより約13倍低速","summary":"M4 MacBook Airで最新のMuJoCo 4とGymnasium 1.4を用いた強化学習を検証。環境構築時のライブラリ不足やMPS（GPU）利用時の型変換エラー、ビューア起動の不具合など3つの課題を特定し解決策を提示した。\n\n実測の結果、Stable-Baselines3のPPO学習において、MPS利用はCPU単体よりも約13倍の時間を要することが判明。小規模なネットワークや単一環境での学習ではCPUの方が高速であり、熱による性能低下の影響も示唆される。","importance":7},{"title":"危険コマンドを止める Claude Code hook を書いたのに、素通ししていた","url":"https://zenn.dev/minewo/articles/claude-code-hook-fail-open","source":"Zenn","published_at":"2026-11-18 06:31","genre":"web","genre_label":"Web開発・言語","headline":"Claude Codeの危険コマンドブロック設定が機能していなかった原因","summary":"Claude CodeのPreToolUse hookで危険コマンドをブロックする設定をしていたが、ペイロードの構造不一致により素通ししていた問題を検証。JSONの階層構造や、エラーハンドリングの不備により、検査が正しく到達していなかった。\n\nシェルスクリプトでの実装におけるフォールバックの失敗や、exit codeの扱いの重要性を再確認。安全なhook実装には、失敗時に確実にブロックする「fail-closed」な設計が不可欠であると結論付けた。","importance":5},{"title":"HP OMEN 35LのファンとメモリのLEDをサインイン前に消す：OpenRGB、HP版Kingston FURYはPawnIOで","url":"https://zenn.dev/fieldtech/articles/omen-35l-led-off-before-signin","source":"Zenn","published_at":"2026-11-18 01:46","genre":"mobile","genre_label":"モバイル・ガジェット・個人開発","headline":"HP OMEN 35LのLEDをサインイン前に消灯させるカスタマイズ","summary":"HP OMEN 35LのLEDがサインイン前まで虹色に光る仕様に対し、タスクスケジューラとOpenRGB、PawnIOを用いて消灯させる手法を解説。ファンと前面LEDはHID LampArrayとしてOpenRGBで制御可能。\n\nメモリのLEDはSMBus経由で制御が必要なため、PawnIOと自作スクリプトを組み合わせた。サインイン不要のタスクとして実行することで、起動直後からの消灯を実現した。","importance":4},{"title":"Apple、AIエージェントなどに不要な個人情報や権限を渡さないよう、macOS 27.3 Golden Gateではアプリがアクセスできるデータや制御できるアプリをコントロールできるようにすると発表。","url":"https://applech2.com/archives/20261118-macos-27-3-security-against-risks-from-ai-agents.html","source":"Hatena","published_at":"2026-11-18 15:06","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"macOS 27.3でAIエージェントのデータアクセス権限を細分化","summary":"Appleは次期macOS 27.3において、AIエージェントやアプリがユーザーの個人情報に過剰にアクセスすることを防ぐため、セキュリティ機能を強化すると発表しました。従来の「フルディスクアクセス」権限を分散させ、アプリごとにアクセス可能なフォルダや制御対象を細かく設定できるようになります。\n\nこれにより、ユーザーはAIエージェントに対して必要なデータのみを許可するコントロールが可能になります。システム保護をバイパスするアプリに対しては警告が表示され、特定の保護されたフォルダのみを選択するオプションが提供されるため、プライバシー保護が大幅に向上します。","importance":8},{"title":"Kaggle 膝コンペ振り返り & 上位解法まとめ | RSNA Knee Abnormality Detection","url":"https://zenn.dev/ca_kagglers/articles/kaggle-rsna-knee","source":"Zenn","published_at":"2026-11-17 23:09","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"Kaggle医療画像コンペの振り返りと弱ラベル学習の難しさ","summary":"RSNA Knee Abnormality Detectionコンペは、膝のMRI画像から12種類の所見を予測するマルチラベル分類タスクとして実施された。最大の難所は、信頼できる正解ラベルがわずか58件しか存在せず、残りは自然言語のレポートのみという点にあった。\n\n参加者はLLMを活用してレポートから弱ラベルを生成する手法を採ったが、外部データやモデルの利用可否に関するルール解釈で混乱が生じた。医療AI開発におけるラベルの信頼性確保と、コンペにおける外部知識活用の境界線が改めて浮き彫りとなった。","importance":8},{"title":"glTF/GLBの内部構造とSkeletal Animationの仕組み","url":"https://zenn.dev/otinpan/articles/069d728ded395d","source":"Zenn","published_at":"2026-11-17 20:29","genre":"web","genre_label":"Web開発・言語","headline":"glTF/GLB形式の内部構造とスケルタルアニメーションの仕組み","summary":"3Dデータ形式であるglTF/GLBは、JSONによる構造定義とバイナリデータによる効率的な格納を両立したオープンフォーマットである。静的な形状だけでなく、関節階層やキーフレームを用いたアニメーションにも対応している。\n\nアニメーションの実現には、頂点と関節の関連付け（スキニング）や、逆バインド行列、キーフレームデータが必要となる。glTFのデータ構造を理解することは、自作ゲームエンジン等で3Dモデルを扱う際の基礎知識として不可欠である。","importance":6}]};
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
