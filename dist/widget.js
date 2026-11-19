// __EMBEDDED_NEWS_START__
globalThis.__IT_TREND_EMBEDDED_DATA__ = {"updated_at":"2026-11-19 09:03:44 JST","total_count":50,"config":{"selected_genres":["ai","web","infra","mobile","biz"],"other_genre_min_ratio":0.25,"max_age_hours":72.0,"genres":{"ai":"AI・LLM・機械学習","web":"Web開発・言語","infra":"インフラ・クラウド・セキュリティ","mobile":"モバイル・ガジェット・個人開発","biz":"ITビジネス・キャリア・マネジメント","other":"総合・その他IT"}},"articles":[{"title":"NGINXの脆弱性 CVE-2026-123633、CVE-2026-123007についてまとめてみた - piyolog","url":"https://piyolog.hatenadiary.jp/entry/2026/11/19/065715","source":"Hatena","published_at":"2026-11-19 07:35","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"NGINXのHTTP/2実装に深刻な脆弱性、リモートコード実行の恐れがあり早急な更新を","summary":"NGINXのHTTP/2実装（ngx_http_v2_module）において、リモートから未認証で任意のコード実行やDoS攻撃が可能な脆弱性2件（CVE-2026-123007、CVE-2026-123633）が公表されました。これらはNGINX 1.31.9および1.30.7で修正されています。\n\n発見者の解析によると、メモリの解放後使用（use-after-free）や領域外メモリコピーを悪用することでコード実行に至る可能性があります。国家サイバー統括室も注意喚起を行っており、運用管理者は速やかに修正版へのアップデートを適用する必要があります。","importance":10},{"title":"「PHP」に再び“致命的”な脆弱性、日本時間19日夜にセキュリティリリースへ／サポート中の全バージョンが対象","url":"https://forest.watch.impress.co.jp/docs/news/2157690.html","source":"Hatena","published_at":"2026-11-19 08:15","genre":"web","genre_label":"Web開発・言語","headline":"PHPに致命的な脆弱性が判明、全サポートバージョンが対象で早急な更新を推奨","summary":"PHPセキュリティチームは、サポート中の全バージョンに影響を及ぼす「致命的（Critical）」な脆弱性を修正するリリースを日本時間11月19日夜に実施すると告知しました。この脆弱性は、既定ではない構成や特殊なセットアップ環境で影響が出る可能性があるとされています。\n\n詳細な技術情報や修正版のバージョン番号はリリースと同時に公開されます。PHPでは10月にも「PHP2Shell」と呼ばれる致命的な脆弱性が修正されたばかりであり、管理者はリリース後速やかにアップグレードできるよう準備しておくことが強く推奨されています。","importance":9},{"title":"Introducing Gemini 4 Neon","url":"https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/","source":"Hatena","published_at":"2026-11-19 07:21","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"Googleが新AIモデル「Gemini 4 Neon」を発表、複雑なタスク処理能力を強化","summary":"Google DeepMindは、ソフトウェアエンジニアリングや科学ワークフローなどの複雑なタスクを高速に完遂する新モデル「Gemini 4 Neon」を発表しました。本モデルは、推論能力やエージェントとしての適応力において高い評価を得ており、特にマルチステップの指示追従やハルシネーションの抑制に注力しています。\n\n100万トークンのコンテキストウィンドウを備え、企業や科学分野の分析業務に最適化されています。価格は100万トークンあたり入力3ドル、出力15ドルで設定されており、Google AI StudioやGemini APIを通じて本日より利用可能です。","importance":8},{"title":"「ガチャを回すみたいに強盗する」裁判傍聴の民が実際に見てきたトクリュウの実態がしんどすぎる「普通に仕事しろ」","url":"https://togetter.com/li/2772114","source":"Hatena","published_at":"2026-11-19 00:01","genre":"other","genre_label":"総合・その他IT","headline":"裁判傍聴で判明した「トクリュウ」の無差別かつゲーム感覚な強盗の実態","summary":"裁判傍聴を通じて明らかになった「匿名・流動型犯罪グループ（トクリュウ）」による強盗事件の実態が、そのあまりの無計画さと残虐性で注目を集めています。指示役はリスト先を適当に襲撃するよう命じており、資産額の精査すら行われない「数撃ちゃ当たる」戦法がとられています。\n\n実行役は日雇い感覚で集められ、犯罪の自覚が希薄なまま「RPGのダンジョン攻略」のような感覚で犯行に及んでいます。資産がない家庭であっても標的になる可能性があり、防犯対策の重要性が改めて浮き彫りになりました。専門家は、センサーやブザーなど「面倒くさい」と思わせる物理的な防犯対策が、こうした無差別な襲撃を回避する鍵になると指摘しています。","importance":7},{"title":"【特集】 Museに「僕と“家の鍵”を交換してザウルス開発者になってよ」と頼んでみた","url":"https://pc.watch.impress.co.jp/docs/topic/feature/2157654.html","source":"Hatena","published_at":"2026-11-19 06:50","genre":"mobile","genre_label":"モバイル・ガジェット・個人開発","headline":"AIエージェント「Muse」をTailscaleとSSHでローカルPCに接続し開発を自動化する手法","summary":"クラウド上のVMで動作するAIエージェント「Muse」を、手元のPCとTailscaleおよびSSHで接続することで、ローカル環境での自律的なコーディングと動作検証を実現する手法が紹介されています。クラウドVMの利便性と実機環境の検証能力を両立させるための実践的なアプローチです。\n\nAIに実機を操作させることで、従来の「AIが生成したコードを人間が検証する」という非効率なループを解消し、開発効率を大幅に向上させることが可能です。セキュリティ面でもTailscaleによる暗号化通信を活用しており、AIによる開発自動化の新たな可能性を示しています。","importance":7},{"title":"実質的無職になった｜Y.Hirano","url":"https://note.com/y_hirano/n/nc986ab18b90e","source":"Hatena","published_at":"2026-11-19 04:58","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"生成AIの急速な普及によりソフトウェアエンジニアの市場価値と働き方が激変","summary":"2026年後半、生成AIの進化によりソフトウェアエンジニアの作業内容が不要になりつつある現状と、フリーランスとしてのキャリアの潮時について語られています。機材費の高騰や案件の減少、フルリモート案件の激減など、市場環境の厳しさが浮き彫りになっています。\n\n著者は、AIが試行錯誤そのものを担うようになったことで、従来の「腕が良い」「仕事が早い」といった付加価値が評価されにくくなっていると分析しています。今後は、単なる作業者ではなく、AIを活用した自己分析や新たな生き方の模索が必要であると示唆しています。","importance":7},{"title":"nginx2root の HTTP/2 脆弱性2件を AWS 構成ごとに整理してみた | DevelopersIO","url":"https://dev.classmethod.jp/articles/nginx-http2-rce-aws-mitigation/","source":"Hatena","published_at":"2026-11-19 06:41","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"NGINXのHTTP/2脆弱性に対するAWS環境ごとの影響と緩和策の整理","summary":"NGINXのHTTP/2脆弱性（CVE-2026-123007、CVE-2026-123633）について、その技術的仕組みとAWS環境での影響範囲が整理されました。修正版への更新が最優先ですが、即時対応が困難な環境向けの緩和策として「http2 off」設定の有効性が検証されています。\n\n記事ではDockerやAmazon Linux 2023における修正版の確認方法や、脆弱性の発生条件であるHTTP/2通信の特性を解説しています。特に、バックポート対応状況の確認や、設定変更による影響を事前に把握しておくことが重要です。","importance":9},{"title":"Pythonで共振を再現して、異常で振れが増える場合と減る場合を確かめる","url":"https://zenn.dev/evofauna/articles/ee95037d45df81","source":"Zenn","published_at":"2026-11-18 21:22","genre":"other","genre_label":"総合・その他IT","headline":"Pythonで再現する機械の「共振」現象、異常検知における振幅変化のメカニズム","summary":"機械の振動データから異常を検知するための手法として、Pythonを用いた共振現象のシミュレーションが解説されました。ばね・おもり・ダンパの運動方程式を使い、外力による共振がどのように発生するかを可視化しています。\n\nばねやダンパが劣化すると、共振曲線の山の位置や高さが変化し、特定の周波数では振幅が増える一方で、別の周波数では減るという現象が確認されました。単に振幅の大きさだけを見ていると異常を見逃す可能性があるため、周波数分析や機械学習を組み合わせた多角的なアプローチの重要性が強調されています。","importance":5},{"title":"決済という機能を実装するのは容易だが、思っていたより考えることが多かった","url":"https://zenn.dev/chot/articles/1297582ee96341","source":"Zenn","published_at":"2026-11-17 20:22","genre":"web","genre_label":"Web開発・言語","headline":"決済機能の実装で考慮すべき二重決済・整合性の罠","summary":"決済機能の実装において、単なるAPI呼び出し以上の複雑な考慮事項をまとめた備忘録。金額の改ざん防止、注文時と決済時の価格不一致、浮動小数点数の計算誤差、在庫確保の競合など、サービスとしての信用を担保するための設計指針を解説しています。\n\n特に二重決済を防ぐための冪等性キーの管理や、通信障害時の結果不明状態の扱いなど、堅牢な決済システムを構築するために不可欠な設計パターンが網羅されています。","importance":10},{"title":"マイクロソフト、AIによるサイバー攻撃にAIエージェントで対抗する新サービス「Microsoft Perception」提供開始","url":"https://www.publickey1.jp/blog/26/aiaimicrosoft_perception.html","source":"Hatena","published_at":"2026-11-18 23:07","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"マイクロソフト、AIサイバー攻撃に対抗するAIエージェントサービス「Microsoft Perception」を発表","summary":"Microsoft Ignite 2026にて、AIによる自動化されたサイバー攻撃に対抗するための新サービス「Microsoft Perception」が発表されました。AIの進化により攻撃のスピードが劇的に向上している現状に対し、人間による対応が困難になっていることを受け、AIエージェントによるマシンスピードでの防御を実現します。\n\n本サービスは「レッドチーム（攻撃者視点での脆弱性発見）」「ブルーチーム（検知・対応）」「グリーンチーム（修復）」の3つのエージェントで構成されます。これらがプレイブックに従って自律的に協調し、脆弱性の未然防止やインシデント対応を行います。重要な判断には人間が介在する仕組みを維持しつつ、AWSやGoogle Cloudを含むマルチクラウド環境の保護もカバーします。","importance":9},{"title":"Firebase App Check の決まりを、コードの構造で守る【実践編】","url":"https://zenn.dev/dely_jp/articles/f053b9847658df","source":"Zenn","published_at":"2026-11-18 18:24","genre":"mobile","genre_label":"モバイル・ガジェット・個人開発","headline":"Firebase App Checkをコード構造で強制する設計の実践","summary":"Firebase App Checkの制約を開発者が意識せずとも守れるよう、コード構造で強制する設計手法を解説。初期化順序の固定やトークン取得の共通化を、型システムや依存解決の仕組みを用いて実装する方法を提示しています。\n\n通信層にトークン取得の成否を意識させない設計や、初期化経路の集約により、ヒューマンエラーを排除するアプローチを紹介。開発者がルールを覚える必要のない、堅牢なアプリ設計の具体例をiOS開発の知見から解説しています。","importance":8},{"title":"Pythonで機械の揺れを2つの数字にして、異常の種類を見分ける(固有振動数と減衰比)","url":"https://zenn.dev/evofauna/articles/00d860db6505b1","source":"Zenn","published_at":"2026-11-18 21:18","genre":"other","genre_label":"総合・その他IT","headline":"機械の異常を見分けるPython分析、固有振動数と減衰比の活用法","summary":"機械の振動データから異常を早期発見するための手法として、固有振動数と減衰比という2つの指標を用いた分析手法が紹介されました。Pythonのnumpyやscipyを活用し、正常時と異常時の揺れをシミュレーションすることで、異常の種類による特徴的な変化を可視化しています。\n\nばねの劣化は固有振動数と減衰比の両方に影響を与え、ダンパの劣化は主に減衰比に影響を与えるなど、異常の種類によって指標が動く向きが異なることが示されました。この「動く向き」を分析することで、機械のどの部分に異常が発生しているかを特定する手がかりが得られます。","importance":5},{"title":"楽天証券の情報漏えい、集団訴訟の動き始まる　「タイムズカー集団訴訟」の弁護士がサイト開設 - 弁護士ドットコムニュース","url":"https://www.bengo4.com/c_18/n_21206/","source":"Hatena","published_at":"2026-11-18 20:57","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"楽天証券の情報漏えい問題で集団訴訟の動き、弁護士が参加希望サイトを開設","summary":"楽天証券で発生した不正アクセスによる顧客情報漏えい問題について、被害者による集団訴訟の動きが始まりました。タイムズカーの情報漏えい問題でも集団訴訟を主導する牧野裕貴弁護士が、参加希望者を募る専用サイトを公開しました。\n\n今回の漏えいでは、氏名や住所、年収、金融資産情報など極めて機密性の高い情報が含まれている可能性があり、被害の深刻さが懸念されています。弁護士は「仕方ないで終わらせてはいけない」と訴えており、登録者数の動向や楽天証券側の対応を見極めつつ、提訴の判断を行う方針です。企業の情報管理責任が改めて厳しく問われる事態となっています。","importance":8},{"title":"ズームやBBCなど178組織のサイトにマルウェア混入、A/Bテスト基盤経由で暗号資産窃取（ビジネス＋IT） - Yahoo!ニュース","url":"https://news.yahoo.co.jp/articles/0c11a6c11c48c784e8a6eacd699b559ac261de80","source":"Hatena","published_at":"2026-11-19 03:25","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"A/Bテスト基盤「Optimizely Web」経由で178組織のサイトにマルウェアが混入","summary":"A/Bテスト基盤「Optimizely Web」が侵害され、ズームやBBC、セールスフォースなど178組織のWebサイトで悪意あるJavaScriptが配信される事態が発生しました。この攻撃により、暗号資産の窃取や決済カード情報の盗取、iOS向け攻撃キットの配布が確認されています。\n\n攻撃者はOptimizelyの正規CDN経由でコードを配信しており、被害は広範囲に及びました。サプライチェーン攻撃の危険性が改めて浮き彫りとなっており、外部サービスを利用する際のセキュリティ監視やリスク管理の重要性が高まっています。","importance":9},{"title":"規約を AI に「守ってもらう」のをやめた ― 判定できる規約は検査に移し、人が読むのは免除理由と設計判断に絞る","url":"https://zenn.dev/t_azk/articles/rules-as-checks-not-prose-for-ai","source":"Zenn","published_at":"2026-11-19 02:48","genre":"web","genre_label":"Web開発・言語","headline":"規約を文章で守らせるのをやめ、静的検査と構造による強制へ移行した開発事例","summary":"開発規約をドキュメントに記載しても守られない問題に対し、機械的に判定可能な規約を静的検査へ移行し、AIや人が規約を忘れるリスクを排除した事例が紹介されています。違反を件数として可視化し、修正方法を一意に決めることで、レビューの負荷を大幅に軽減しました。\n\nポイントは、違反を「属性」や「構造」で検知し、CIで自動的にチェックする仕組みを構築した点です。これにより、AIによる生成コードのばらつきを抑え、人が読むべき規約を「免除理由」や「設計判断」に絞ることで、開発の質と速度を向上させています。","importance":8},{"title":"Go Conference 2026実行委員を終えて","url":"https://zenn.dev/mire0726/articles/1f3f118662a0f5","source":"Zenn","published_at":"2026-11-17 16:21","genre":"other","genre_label":"総合・その他IT","headline":"Go Conference 2026運営の振り返りとAI時代のカンファレンス","summary":"Go Conference 2026の運営を終えた実行委員による振り返り記事。持続可能なカンファレンス作りを目指したプロジェクト制度の導入や、学生支援、プロポーザル採択基準の一新など、新たな取り組みの成果と課題を報告しています。\n\nAI時代において、知識の伝達よりも「参加者が総合的に満足できるセッション」をどう選定するかが重要であると指摘。運営スタッフ間のコミュニケーション活性化や、配信・ネットワーク環境の構築など、イベント運営の知見が共有されています。","importance":5},{"title":"9BでQwen3.8-27B級の性能！層を2回通す「SenseNova-Loop-9B」","url":"https://pc.watch.impress.co.jp/docs/news/2157448.html","source":"Hatena","published_at":"2026-11-18 15:05","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"層を再利用する共有ループアーキテクチャ「SenseNova-Loop-9B」","summary":"SenseTimeが公開したマルチモーダル言語モデル「SenseNova-Loop-9B」の技術的特徴を解説。中間層を2回通す「共有ループアーキテクチャ」を採用し、9Bのパラメータ数ながら14.6B相当の性能を実現した革新的なモデルです。\n\n限られた計算リソースで推論深度を拡張する手法や、量子化によるメモリ削減効果について言及。Qwen3.8-27B級の性能を持ちつつ軽量である点が注目されており、推論エンジンへの対応状況を含め、最新のLLMトレンドとして紹介しています。","importance":9},{"title":"CocoaPods Trunkの更新停止で、React Native・Expoアプリはどうなる？SwiftPM移行に備える","url":"https://zenn.dev/tellernovel_inc/articles/react-native-cocoapods-to-spm","source":"Zenn","published_at":"2026-11-18 14:42","genre":"mobile","genre_label":"モバイル・ガジェット・個人開発","headline":"CocoaPods更新停止に伴うReact NativeアプリのSwiftPM移行","summary":"CocoaPodsのTrunk更新停止がReact Native/Expoアプリに与える影響と、SwiftPMへの移行準備について解説。既存アプリが直ちに壊れることはないものの、新規SDKの導入にはSwiftPMへの対応が必要になることを説明しています。\n\nReact Native Firebase等のライブラリを例に、CocoaPodsとSwiftPMを併用する現実的な対応策を紹介。将来的なSwiftPMへの全面移行を見据え、現在のビルド環境をどのように維持・更新すべきかの指針を示しています。","importance":7},{"title":"作業はAIに、判断は人で ― ゲーム開発で実践しているAI駆動のワークフロー","url":"https://zenn.dev/chinpangx_tech/articles/19dd77b67e02f0","source":"Zenn","published_at":"2026-11-18 12:00","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"ゲーム開発におけるAI駆動ワークフロー：作業はAI、判断は人","summary":"ゲームクライアント開発において、実装計画からテストまでをAIに任せる「AI駆動開発（AIDD）」の実践手法を紹介。品質を維持するため、「作業はAI、判断は人」という明確な線引きを行っています。\n\n実装計画書をMarkdownで詳細に記述し、AIが迷わず作業できる土台を作ることで、コード品質のブレを防いでいます。Googleの「Elephant-Goldfish Model」の考え方を応用し、設計判断を人が行うことで、AIを開発の中心メンバーとして活用するワークフローを構築しています。","importance":8},{"title":"NGINX2Root by Xint — From nginx visitor to root of the server host","url":"https://nginx2root.com/","source":"Hatena","published_at":"2026-11-19 00:34","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"NGINXの脆弱性「NGINX2Root」が公開、未認証RCEからroot権限奪取までを解説","summary":"NGINXにおいて、未認証のリモートコード実行（RCE）からサーバーのroot権限奪取までを可能にする一連の脆弱性「NGINX2Root」が公開されました。CVE-2026-123007を含む複数の脆弱性を組み合わせることで、攻撃者はホストの完全な制御権を得ることが可能です。\n\nこの脆弱性チェーンは、Linuxカーネルの脆弱性と組み合わせることで深刻な影響を及ぼします。セキュリティ研究者による詳細な解析が公開されており、NGINXを利用する全組織にとって、早急なパッチ適用とシステム構成の見直しが急務となっています。","importance":10},{"title":"vue-tscの壁を越える：vizeとtsrsでVueの型検査を高速化した","url":"https://zenn.dev/studio/articles/vue-typecheck-vize-tsrs","source":"Hatena","published_at":"2026-11-19 00:28","genre":"web","genre_label":"Web開発・言語","headline":"Vueプロジェクトの型検査をvue-tscからvizeとtsrsへ移行しCIを高速化","summary":"Vueプロジェクトにおいて、型検査を従来のvue-tscからTypeScript 7.1の新機能「content mapper」を活用したvizeとtsrsへ移行し、CIの実行時間を大幅に短縮した事例です。メインアプリの型検査が約13倍高速化し、メモリ消費量も64%削減されました。\n\nTypeScript 7のGo移植に伴い、従来のJavaScript製プラグインに依存していたvue-tscがボトルネックとなっていましたが、新しい仕組みにより最新の型検査器の恩恵を受けられるようになりました。フレームワーク固有のファイル形式を持つプロジェクトにとって、重要な改善手法です。","importance":8},{"title":"llama.cppの新機能で弩級モデルをローカルで動かそう","url":"https://zenn.dev/satoshi_yoneda/articles/moe-cache-cpu-share","source":"Zenn","published_at":"2026-11-18 12:44","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"llama.cpp v1.0の新機能で巨大MoEモデルをローカル実行","summary":"ローカル推論エンジン「llama.cpp」がv1.0に到達。目玉機能である「--moe-cache-cpu-share」により、VRAM容量を超えるMoEモデルの効率的な実行が可能になりました。\n\n従来の単純なキャッシュ制御からLRU方式へ刷新され、キャッシュミス時にCPUで計算を肩代わりさせることでGPUのストールを防ぎます。ハードウェア構成に応じたパラメータ調整が必要ですが、巨大モデルをローカルで動かすための強力な選択肢となります。","importance":9},{"title":"Expo の分析は Firebase から PostHog へ","url":"https://zenn.dev/gemcook/articles/expo-posthog-ai-default","source":"Zenn","published_at":"2026-11-18 14:14","genre":"mobile","genre_label":"モバイル・ガジェット・個人開発","headline":"Expoアプリの分析ツールがFirebaseからPostHogへ移行する理由","summary":"Expoアプリにおける分析ツールとして、Firebase AnalyticsからPostHogへの移行が進んでいる現状をデータで解説。2026年以降、新規Expoアプリでの採用数でPostHogがFirebaseを上回っている背景を分析しています。\n\nExpo公式の統合コマンドやAI向けドキュメントでの推奨など、開発エコシステムにおけるPostHogの優位性を詳述。AIが開発ツールを推奨する時代において、開発者体験とAIとの親和性がツール選定に与える影響を考察しています。","importance":7},{"title":"バグに対して常に攻性であること #2 ― テストの「実行」をAIに任せたら、自動化率72%のキノコ型になった","url":"https://zenn.dev/kauche/articles/78c7ad781c8076","source":"Zenn","published_at":"2026-11-18 08:33","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"QAのテスト実行をAIに任せ、自動化率72%を達成した事例","summary":"カウシェのQAチームが、Claude Codeとadbを用いてAndroid実機の操作と判定をAIに自動化させた取り組み。テストピラミッドが「キノコ型」になるほどE2E層が厚くなり、自動化率72%を達成しました。\n\nAIによる自動化で品質を落とさず、マニュアルテストの負荷を軽減。今後はAIで固まった確認フローをMaestro等のコードベースのテストへ移行し、CIへの統合を目指すという、AIと人の役割分担の進化が示されています。","importance":9},{"title":"XユーザーのSatoki@Kn0wl3dg3さん: 「弊社は世界中で使われているNGINXの最新版に、ログインなしでサーバーを乗っ取れる深刻な脆弱性「NGINX2Shell」を発見しました。@OpenAI との協力のもと、発見から報告まで一緒に進めていました。ちなみに、とあるバグバウンティイベントではこれが$300,000らしい💸 #NGINX2Shell」 / X","url":"https://x.com/satoki00/status/2123071303657910632","source":"Hatena","published_at":"2026-11-19 00:28","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"NGINXの最新版に深刻な脆弱性「NGINX2Shell」が発見される","summary":"NGINXの最新メインラインリリースである1.31.8において、ログインなしでサーバーを乗っ取ることが可能な深刻な脆弱性「NGINX2Shell」が発見されました。この発見はOpenAIのチームとの協力のもとで行われ、迅速な報告と開示が進められています。\n\nバグバウンティイベントでは非常に高額な報奨金が設定されるほどの深刻度であり、世界中で利用されているNGINXへの影響は甚大です。管理者は直ちに最新版へのアップデートを検討し、セキュリティ状況を再確認する必要があります。","importance":10},{"title":"tsrs を導入したら oxlint の type-aware linting と typecheck が爆速になった話","url":"https://zenn.dev/dress_code/articles/6c179ae5129131","source":"Zenn","published_at":"2026-11-18 16:00","genre":"web","genre_label":"Web開発・言語","headline":"tsrs導入でoxlintの型チェックが爆速化した事例","summary":"TypeScript 7コンパイラをRustに移植した「tsrs」を導入し、oxlintの型チェックを大幅に高速化した事例を紹介。CIにおける型チェックの所要時間が劇的に短縮された結果を報告しています。\n\n既存のtsc環境からtsrsへの移行手順や、beta版を利用する際の安全な段階的導入方法を解説。型チェックの速度に悩むフロントエンド・バックエンドエンジニアにとって、ビルドパイプラインの最適化における強力な選択肢を提示しています。","importance":8},{"title":"メインPCのローカルAIをVPN・ポート開放なしで外出先のHermes Agentから使えるように「Cloudflare Tunnel＋Access」を設定してみた","url":"https://gigazine.net/news/20261119-cloudflare-tunnel-local-ai/","source":"Hatena","published_at":"2026-11-19 01:38","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"Cloudflare TunnelとAccessを活用し、ローカルAIを安全に外部公開する構成","summary":"GPU搭載PCで動作するローカルAI（Ollama＋Open WebUI）を、ポート開放やVPNなしで外部から安全に利用するための構成が解説されています。Cloudflare Tunnelでサーバーを公開し、Cloudflare Accessでユーザー認証をかけることで、セキュリティを確保しつつリモートアクセスを実現しました。\n\nさらに、AIエージェント「Hermes Agent」からのAPIアクセスには、サービス認証とAPIキーを組み合わせた二重認証を導入しています。設定ファイルを直接編集する手順を含め、ローカルAI環境を実用的なリモート開発環境へと進化させるための具体的なガイドです。","importance":8},{"title":"【Hothotレビュー】 デスクトップ版RTX Sparkはどこまで速い？128GB搭載のノートPC版と比較","url":"https://pc.watch.impress.co.jp/docs/column/hothot/2157471.html","source":"Hatena","published_at":"2026-11-18 23:55","genre":"mobile","genre_label":"モバイル・ガジェット・個人開発","headline":"デスクトップ版RTX Sparkの実力を検証、ノートPC版との性能差をベンチマークで比較","summary":"NVIDIAのGrace CPUとBlackwell世代のRTX GPUを搭載した「RTX Spark」プラットフォームのデスクトップ版が発売されました。ノートPC版と比較して、デスクトップ版はTDPが140Wと高く、省スペースなミニPC筐体ながら高いパフォーマンスを発揮します。\n\n検証の結果、ゲームや画像生成などのGPU負荷が高い処理ではデスクトップ版が約3割高速である一方、CPU性能やAIの生成速度そのものには大きな差がないことが判明しました。デスクトップ版はNPUを搭載しない代わりにGPU性能を最大化する設計となっており、据え置き環境でのローカルAI活用や3D制作において、コンパクトかつ強力な選択肢となることが示されました。","importance":6},{"title":"認知負荷の減らし方 ～開発にも日常業務にも活かせるノウハウ～","url":"https://speakerdeck.com/minorun365/2026-11-lab-datsubotorunekku-ningen","source":"Hatena","published_at":"2026-11-18 22:07","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"AI時代の認知負荷を減らす、みのるん流「HTML共有くん」による情報整理術","summary":"AIの活用により、人間が判断すべき情報量と速度が劇的に変化する中で、いかに認知負荷を抑えるかというノウハウが共有されました。AIからの報告がチャット欄に長々と流れると判断が追いつかないため、長文や表を含む報告はHTML化して専用サイト「HTML共有くん」に集約する手法が紹介されました。\n\nこの手法により、案件ごとに情報を整理し、既読管理やピン留めを行うことで、情報の見落としを防ぎ判断の質を維持しています。また、AIに対して「見やすく図解する」「重要なポイントをハイライトする」といったフォーマットのルールを徹底させることで、人間が判断すべき箇所を明確化する工夫も重要です。","importance":6},{"title":"Unauthenticated Remote Code Execution in NGINX: CVE-2026-123633 and CVE-2026-123007 | Wiz Blog","url":"https://www.wiz.io/blog/nginx-http2-rce-vulnerabilities","source":"Hatena","published_at":"2026-11-19 00:27","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"NGINXにHTTP/2関連の深刻なRCE脆弱性、CVE-2026-123633とCVE-2026-123007が判明","summary":"NGINXにおいて、HTTP/2機能に関連する2つの深刻なリモートコード実行（RCE）脆弱性が発見されました。これらはCVSS 4.0で9.2と評価されており、攻撃者がサーバーを乗っ取ったり、機密データを窃取したりするリスクがあります。NGINXは現代のWebアーキテクチャの入り口として広く利用されているため、影響範囲は極めて広大です。\n\nこれらの脆弱性はNGINX自体に存在し、アプリケーション側のセキュリティ対策とは無関係に悪用される可能性があります。HTTP/2が有効な環境が対象であり、CVE-2026-123007は2015年以降のバージョンにまで遡る影響があります。組織は直ちに影響を受けるデプロイメントを特定し、修正パッチが提供され次第、速やかに適用することが強く推奨されます。","importance":10},{"title":"ESLint から oxlint へ。lint が 50 倍速くなるまでの移行の記録","url":"https://zenn.dev/rimo/articles/12d6a7b1c58fcd","source":"Zenn","published_at":"2026-11-18 09:51","genre":"web","genre_label":"Web開発・言語","headline":"ESLintからoxlintへの移行でlint速度を50倍に高速化","summary":"Next.js/TypeScriptプロジェクトにおいて、メインのLinterをESLintからoxlintへ移行し、lint速度を約50倍に向上させた記録。CIの待ち時間短縮と、AIコーディング時の高速なフィードバックループ実現を目的としています。\n\nESLintのルールをoxlintへ段階的に同期させつつ、oxlint未対応のルールのみをESLintに残す併用戦略を採用。設定の集約と優先順位付けにより、移行コストを抑えつつ開発体験を劇的に改善しました。","importance":8},{"title":"マイクロソフト、AIが生成したアプリを企業内で安全に実行するランタイム「Copilot Managed Runtime」正式リリース","url":"https://www.publickey1.jp/blog/26/aicopilot_managed_runtime.html","source":"Hatena","published_at":"2026-11-18 23:06","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"AI生成アプリを安全に実行する基盤「Copilot Managed Runtime」が正式リリース","summary":"Microsoft Ignite 2026にて、AIが生成したアプリケーションを企業内で安全にデプロイ・実行するためのマネージドサービス「Copilot Managed Runtime」が正式リリースされました。AIによる開発が普及する中で、脆弱性やセキュリティリスクを抱えるアプリをいかに安全に運用するかが課題となっていました。\n\n本サービスはMicrosoft 365テナント内で動作し、Entra IDによる認証やアクセス制御、監査ログなどの強固なセキュリティ機能を備えています。ホスティングやスケーリングはマイクロソフト側が管理するため、開発者はインフラを意識せずに安全な環境でアプリを運用可能です。Copilot Studioなどとの連携も強化されており、企業内でのAI活用を加速させる基盤となります。","importance":8},{"title":"ｽﾀｯｸﾁｬﾝを Muse ガジェットにして、Google TTS で喋らせる","url":"https://zenn.dev/fujihide/articles/cf3eb84525346c","source":"Zenn","published_at":"2026-11-18 13:55","genre":"mobile","genre_label":"モバイル・ガジェット・個人開発","headline":"M5Stack CoreS3搭載スタックチャンをGoogle TTSで喋らせる","summary":"M5Stack CoreS3を用いたスタックチャンにMetaのMuseガジェットSDKを導入し、対話機能を実現する手順を解説。SDK標準ではテキスト返信のみのため、Google Cloud Text-to-Speechを組み込み、音声再生を可能にしました。\n\nWSL2環境でのビルドから、SDKトークンの発行、Wi-Fi設定、そしてGoogle Cloud TTSのAPI連携までを網羅。上流の更新に追従しやすいよう、SDK本体を編集せず別リポジトリでパッチを当てる構成を採用しています。","importance":6},{"title":"AIが見つけた脆弱性を人間が「攻撃」に変える。Pwn2Own世界一のハッカーに聞く、日本勢初優勝の舞台裏 - エンジニアtype | 転職type","url":"https://type.jp/et/feature/32190/","source":"Hatena","published_at":"2026-11-18 17:41","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"Pwn2Own世界一のハッカーが語るAIと人間の脆弱性発見","summary":"世界最高峰のハッキングコンテスト「Pwn2Own Ireland 2026」で日本企業として初優勝を果たしたIkotas Labsの舞台裏を紹介。AIが発見した脆弱性を人間が攻撃コードへと昇華させる、高度な役割分担と試行錯誤のプロセスを明らかにしています。\n\n代表の辻知希氏へのインタビューを通じ、AIの活用と人間のセキュリティエンジニアリングの融合が、いかにして世界レベルの成果を生み出したかを解説。セキュリティ分野におけるAI活用の最前線と、エンジニアのキャリア形成に示唆を与える内容です。","importance":9},{"title":"ARM64のSurfaceでReact・Spring Boot・PostgreSQLのフルスタック環境を作り、タスク管理画面を実装した","url":"https://zenn.dev/rkknttkm0831/articles/e6e29fd7a62257","source":"Zenn","published_at":"2026-11-19 00:49","genre":"web","genre_label":"Web開発・言語","headline":"ARM64のSurfaceでReact・Spring Boot・PostgreSQLのフルスタック開発環境を構築","summary":"ARM64搭載のSurface Laptop上で、WSL2とDev Containerを活用したフルスタック開発環境の構築事例です。JDKやNode.jsをホストに入れずコンテナに閉じることで、環境の再現性を確保しつつモノレポ構成での開発を実現しました。\n\nフロントエンドを先に実装し、MSWでAPIをモックして動作確認を行う手法を採用することで、バックエンド実装前の効率的な画面開発を可能にしています。ARM64環境特有のイメージ選定やパフォーマンス最適化の知見も共有されており、個人開発の参考になる内容です。","importance":7},{"title":"QA効率化におけるAI活用事例","url":"https://zenn.dev/applibot_tech/articles/6b8ec8d196634b","source":"Zenn","published_at":"2026-11-18 15:33","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"AIを活用した仕様書と実装の差分チェックによるQA効率化","summary":"AIを用いて仕様書と実装コードの差分を自動検出し、QA効率を向上させる取り組みを紹介。仕様変更に伴う実装漏れや仕様書更新漏れを防ぐための、AIとプログラム処理を組み合わせたハイブリッドなアプローチを解説しています。\n\nトークン消費量を抑えるための候補絞り込み手法や、誤検知を減らすための判定ロジックの改善策を詳述。QA担当者や企画担当者との連携を前提とした、実用的なAI活用事例として参考になります。","importance":8},{"title":"Kotlin Fest 2026の会場で、ソニーのPTZカメラ「BRC-AM7」をテストしました","url":"https://zenn.dev/hiro_pon/articles/1d5bdbca4acf5b","source":"Zenn","published_at":"2026-11-18 22:15","genre":"mobile","genre_label":"モバイル・ガジェット・個人開発","headline":"Kotlin Fest 2026でソニーのPTZカメラ「BRC-AM7」をテスト、遠隔制御の最適解を検証","summary":"カンファレンス配信において、カメラマンが現場で調整を行う負担を減らすため、ソニーのPTZカメラ「BRC-AM7」のテスト運用が行われました。従来のFX3とCamera Remote SDKの組み合わせでは、パン・チルト・ズームの遠隔操作が不可能という課題がありました。\n\nBRC-AM7はCamera Remote SDKに対応し、望遠性能も十分であることから、遠隔操作によるフレーミングの自動化・効率化を実現する有力な選択肢として検証されました。テストではWeb画面での操作や自作の制御プログラムによる挙動を確認し、配信運用の自動化に向けた高い可能性が示されました。本番環境での導入に向けた重要な知見が得られています。","importance":5},{"title":"MUJI Card発行のクレディセゾン、カード番号削除を2度依頼　無印は実行せず","url":"https://xtech.nikkei.com/atcl/nxt/column/18/00001/12190/","source":"Hatena","published_at":"2026-11-18 23:15","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"MUJI Card情報漏洩、クレディセゾンが2度の削除依頼を出すも良品計画は実行せず","summary":"良品計画が発行する「MUJI Card」において約109万件のクレジットカード番号が漏洩した恐れがある問題で、新たな事実が判明しました。カード発行元であるクレディセゾンが、2020年と2021年の2度にわたり良品計画に対してカード番号の削除を依頼していたにもかかわらず、良品計画側がこれに応じず保持し続けていたことが明らかになりました。\n\nこの事実は、企業におけるデータ管理体制の不備を浮き彫りにしています。発行会社からの再三の要請を無視して機密情報を保持し続けた結果、大規模な漏洩リスクを招いた形となり、今後の責任の所在や再発防止策のあり方が厳しく問われることになります。","importance":8},{"title":"リッチドメインモデルの特徴と実装の進め方","url":"https://zenn.dev/nanashinogonbei/articles/rich-domain-model-guide","source":"Zenn","published_at":"2026-11-18 20:01","genre":"web","genre_label":"Web開発・言語","headline":"リッチドメインモデルによる業務ルールのカプセル化と実装手法","summary":"業務ルールをEntityに集約し、データと振る舞いを一体化させる「リッチドメインモデル」の設計手法を解説。貧血ドメインモデルとの比較を通じて、状態遷移や不変条件をモデル内部で管理する重要性を説いています。\n\nJavaを用いた実装例では、値オブジェクトの活用やカプセル化による不正な状態遷移の防止策を提示。Service層を単なる調整役に留め、ドメイン駆動設計（DDD）における集約の考え方を適用することで、保守性の高いコードを実現する手法を詳述しています。","importance":7},{"title":"企業向けAIエージェントのアーキテクチャ設計：構想を実装へ進める4つの設計領域","url":"https://zenn.dev/dxclab/articles/286c53fbc05e65","source":"Zenn","published_at":"2026-11-18 14:32","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"企業向けAIエージェント開発における4つの設計領域","summary":"AIエージェントの構想を実用的なシステムへ落とし込むための、アーキテクチャ設計論を解説。Agent Topology、Loop、Data・Memory、Execution Runtimeの4つの領域に分類し、AIの判断とシステムの制御を明確に分離する重要性を説いています。\n\n特定のフレームワークに依存しない設計の考え方を提示し、企業システムに必要な信頼性や品質を確保するための指針を整理。AIエージェントアプリの設計に悩むエンジニアに向けた、全体俯瞰のためのフレームワークを提供しています。","importance":8},{"title":"Godot Movie Maker の書き出し窓が前面に出る。Windows の別デスクトップで隠した","url":"https://zenn.dev/ai_hacchu/articles/godot-write-movie-hidden-desktop-windows","source":"Zenn","published_at":"2026-11-18 09:00","genre":"mobile","genre_label":"モバイル・ガジェット・個人開発","headline":"Godotの書き出し窓を別デスクトップで隠すWindows対策","summary":"Windows環境でGodotのMovie Maker機能を使用する際、書き出しウィンドウが前面に表示される問題を解決した手法。画面外配置や枠なし設定では不十分だったため、Win32 APIのCreateDesktopを用いて、別のデスクトップ環境でプロセスを起動する対策を講じました。\n\nPythonのctypesを用いて実装し、計測の結果、書き出し中も作業画面の前面にウィンドウが出ないことを確認。自動化パイプラインにおけるUI干渉を排除する技術的な知見です。","importance":5},{"title":"Terraform 0 to 100：100個以上のリポジトリを常に最新にし続けるための自動化","url":"https://speakerdeck.com/sue445/terraform-0-to-100","source":"Hatena","published_at":"2026-11-18 17:34","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"100個以上のTerraformリポジトリを自動化で運用する知見","summary":"ピクシブ株式会社における、100個以上のTerraformリポジトリを効率的に運用するための自動化手法を解説。CloudNative Days Winter 2026での発表資料を基に、リポジトリ数の増加に伴う運用負荷を軽減するためのツールや戦略を紹介しています。\n\n0から100への成長過程における段階的な改善策や、GitLab/GitHub環境での運用ノウハウを共有。特定のクラウドに依存しない汎用的なインフラ管理のベストプラクティスとして、大規模なIaC運用を目指すエンジニアにとって有益な知見を提供しています。","importance":8},{"title":"Odin に賭けたい人向けの Odin 言語入門ガイド","url":"https://zenn.dev/mizchi/articles/odin-introduction-guide","source":"Zenn","published_at":"2026-11-18 14:53","genre":"web","genre_label":"Web開発・言語","headline":"低レベル操作を直接書ける言語「Odin」入門","summary":"Go言語に似た構文を持ちつつ、より低レベルなプリミティブ操作が可能なプログラミング言語「Odin」の入門ガイド。メモリ管理やビット単位のレコード操作を言語機能として備える点が特徴です。\n\nbit_fieldやbit_setといった独自のデータ構造や、エラー処理の仕組みを解説。Rexなどのツールで採用されている背景や、WebAssemblyへの対応状況にも触れ、システムプログラミングやゲーム開発に関心があるエンジニアに向けた言語の魅力を紹介しています。","importance":7},{"title":"エージェントの自律性を上げると、何が得られて何を失うか —— 助言・承認付き実行・自律実行を実測する","url":"https://zenn.dev/enterprise_ai/articles/1b1f34af88fb8f","source":"Zenn","published_at":"2026-11-17 15:51","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"エージェントの自律性と承認プロセスを実測・比較検証","summary":"AIエージェントの自律性レベル（助言、承認付き実行、自律実行）を変えて、Claude Code等で実測した検証レポート。承認プロセスが「誤った方針」を止めるには不十分であり、承認疲れにより読まれない承認は自律実行と変わらないという結論を導いています。\n\n操作の審査は仕組み（フック）に任せ、誤った記憶の信じ込みを防ぐために報告の透明性を確保する「比例的ガバナンス」の重要性を提言。エージェントとの付き合い方に関する実践的なノウハウを提示しています。","importance":9},{"title":"稼働中のKubernetesをIPv6デュアルスタック化して分かった5つの落とし穴","url":"https://zenn.dev/chaokovsky/articles/kubernetes-cilium-ipv6-dual-stack","source":"Zenn","published_at":"2026-11-18 14:17","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"KubernetesのIPv6デュアルスタック化における5つの落とし穴","summary":"稼働中のKubernetesクラスターをIPv6デュアルスタック化する際に直面する技術的課題と、その解決策を解説。アドレス設計やCiliumの設定、ネットワークの挙動など、IPv4環境では意識しなかった落とし穴を5つのポイントで整理しています。\n\nPodやServiceの範囲設計における制約や、L2 Announcementsの挙動など、実運用に基づいた具体的なトラブルシューティングを共有。IPv6導入を検討するインフラエンジニアにとって、設計の前提を再考させる貴重な知見です。","importance":8},{"title":"組み込みC講座 第28講：ビット演算を理解する","url":"https://zenn.dev/makoto_a67/articles/2060235570cc88","source":"Zenn","published_at":"2026-11-18 15:01","genre":"web","genre_label":"Web開発・言語","headline":"組み込みCにおけるビット演算とビットマスクの活用術","summary":"組み込みソフトウェア開発に不可欠なビット演算の基礎と、ハードウェア制御におけるビットマスクの活用法を解説。フラグ操作や特定のビット抽出など、メモリ効率を重視する環境での実践的なコーディング手法を詳述しています。\n\nRaspberry Pi Pico 2 WHのGPIO制御を例に、ビット演算がどのようにハードウェアのレジスタ操作に直結するかを説明。C言語のビット演算子（&, |, ~, ^, <<）の役割を整理し、効率的な組み込みプログラミングの技術を伝えています。","importance":6},{"title":"Amazon Bedrock AgentCore Gatewayの推論ターゲットでモデルフォールバックを試してみた","url":"https://zenn.dev/fusic/articles/bc2ef3f52b0e3c","source":"Zenn","published_at":"2026-11-19 00:44","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"Amazon Bedrock AgentCore Gatewayのモデルフォールバック機能を検証","summary":"Amazon Bedrock AgentCore Gatewayに追加された、推論失敗時に別モデルへ切り替える「モデルフォールバック」機能の検証結果が報告されています。特定の失敗条件で自動的にフォールバック先へ切り替えるルール設定や、サーキットブレーカーの挙動について詳細に解説されています。\n\n検証では、503エラーやタイムアウト時に正常にフォールバックが行われることや、ブレーカーの遷移状態が確認されました。また、レスポンスボディやログからどのモデルが応答したかを追跡可能であり、本番環境での信頼性向上に寄与する機能であることが示されています。","importance":7},{"title":"Windows Server 2028がパブリックプレビュー公開。Microsoft FoundryなどAIによる推論の実行基盤へと拡張","url":"https://www.publickey1.jp/blog/26/windows_server_2028microsoft_foundryai.html","source":"Hatena","published_at":"2026-11-18 23:06","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"Windows Server 2028プレビュー公開、AI推論基盤としての機能を大幅強化","summary":"次期サーバーOS「Windows Server 2028」のパブリックプレビューが公開されました。従来のActive Directory管理やアプリ実行基盤としての役割に加え、企業内でのAI推論を実行するための基盤としての機能が大幅に拡張されています。\n\n具体的には、Microsoft FoundryやWindows ML、vLLM、Llama.cppなどのAI推論技術をサポートし、オンプレミス環境でのAI活用を促進します。また、Confidential VMによるハードウェアレベルの暗号化やポスト量子暗号技術の搭載など、セキュリティ面も強化されました。ストレージ面ではNVMeのデフォルト有効化やRDMA対応など、ミッションクリティカルな用途に向けた性能向上も図られています。","importance":7},{"title":"おい、 Mutation Test をやれ。テスト品質を、測るために","url":"https://zenn.dev/mizchi/articles/mutation-test-quality","source":"Zenn","published_at":"2026-11-17 18:53","genre":"web","genre_label":"Web開発・言語","headline":"テスト品質を測るためのミューテーションテストのすすめ","summary":"AIによるテストコード生成が容易になった今、テスト自体の品質を担保する手法として「ミューテーションテスト」を推奨。ソースコードを意図的に書き換えてテストが落ちるかを確認することで、テストコードの網羅性と有効性を検証します。\n\n単純なカバレッジ指標の限界を指摘し、テストが変更を見逃している箇所（Survived）を特定する重要性を解説。ユニットテストが実装の品質保証なら、ミューテーションテストはテストコードの品質保証であると位置づけています。","importance":7},{"title":"アプリ作りに専門知識が不要に!? AIが変える常識と落とし穴 | NHKニュース","url":"https://news.web.nhk/newsweb/na/nd-20261117de77369","source":"Hatena","published_at":"2026-11-18 21:57","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"専門知識不要でアプリ開発が可能に、AIが変える開発の常識と新たな落とし穴","summary":"AIに言葉で指示するだけでアプリケーションを作成できる時代が到来し、専門家以外でも開発が可能になるという常識の変化が起きています。この技術は被災地での情報共有や業務効率化など、社会的な課題解決に大きな成果を上げています。\n\n一方で、誰でも簡単にアプリを作れるようになったことで、セキュリティ対策や品質管理が疎かになるという新たなリスクも浮上しています。AIが生成したコードの脆弱性や、意図しないデータアクセスの問題など、開発の民主化に伴う「落とし穴」への理解と、適切なガバナンス体制の構築が今後の重要な課題となります。","importance":7}]};
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
