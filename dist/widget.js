// __EMBEDDED_NEWS_START__
globalThis.__IT_TREND_EMBEDDED_DATA__ = {"updated_at":"2026-11-22 05:26:24 JST","total_count":50,"config":{"selected_genres":["ai","web","infra","mobile","biz"],"other_genre_min_ratio":0.25,"max_age_hours":72.0,"genres":{"ai":"AI・LLM・機械学習","web":"Web開発・言語","infra":"インフラ・クラウド・セキュリティ","mobile":"モバイル・ガジェット・個人開発","biz":"ITビジネス・キャリア・マネジメント","other":"総合・その他IT"}},"articles":[{"title":"\"リーマン予想の証明\"の検証は現在どこまで進んでいるか｜加藤文元","url":"https://note.com/katobungen/n/n9c2bb939b9c7","source":"Hatena","published_at":"2026-11-21 22:55","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"リーマン予想の証明をClaudeとLeanで検証する試みが進行中","summary":"Anthropicの数学者Levent Alpöge氏が、Claudeを用いてリーマン予想および一般化リーマン予想を証明したと発表しました。証明はLeanという証明支援系で記述されており、約1,737万行に及ぶ膨大なコードが公開されています。\n\n発表直後からMITのAndrew Sutherland氏らによる第三者検証が急速に進められており、複数の独立したカーネルで証明項が受理されるなど、形式的な正しさは高い信頼性を得ています。現在は、証明された命題が数学上のリーマン予想と完全に一致しているか、Leanのカーネルやライブラリにバグがないかといった観点から詳細な監査が続いています。","importance":10},{"title":"「パッチ地獄」が米IT障害誘発、AIがせかす脆弱性修正　銀行や空港停止 - 日本経済新聞","url":"https://www.nikkei.com/article/DGXZQOGN18CYM0Y6A111C2000000/","source":"Hatena","published_at":"2026-11-21 09:21","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"AIによる脆弱性発見の急増とパッチ適用サイクルの限界","summary":"AIが膨大な脆弱性を短期間で発見するようになり、企業は修正パッチの適用に追われている。この「パッチ地獄」が米国の銀行や空港などのシステム障害を誘発する一因となっている。\n\nAIによる攻撃の民主化と脆弱性検知の加速により、防御側の猶予期間は数時間単位まで短縮されている。日本のインフラも同様のリスクに直面しており、多段階の防御戦略が不可欠となっている。","importance":9},{"title":"Go の defer についてちょっと調べてみた ── 3つの実装方式","url":"https://zenn.dev/wakame_atsushi/articles/f2f7512d5e0f87","source":"Zenn","published_at":"2026-11-21 11:19","genre":"web","genre_label":"Web開発・言語","headline":"Go言語のdefer実装方式：3つのパターンを解説","summary":"Go言語のdefer文が内部でどのように実装されているのか、その仕組みを3つの方式に分けて解説しています。deferは「登録」と「実行」の2段階で処理され、ランタイムのソースコードやコンパイラの出力を基に、その挙動を紐解いています。\n\n特に、goroutineごとのリスト管理や、スタックフレームの境界を判定するsp（スタックポインタ）の役割、コンパイラが引数を包んで関数化する仕組みなど、Goの深い内部構造に触れています。ループ内でのdefer登録や、再帰呼び出し時の挙動など、パフォーマンスやメモリ効率を考慮したGoの設計思想を理解する上で非常に有益な内容です。","importance":8},{"title":"gdbのメモリ調査コマンド x/4xb の意味を1文字ずつ解説","url":"https://zenn.dev/subaru12/articles/d628e50242ce7b","source":"Zenn","published_at":"2026-11-21 15:03","genre":"other","genre_label":"総合・その他IT","headline":"gdbのメモリ調査コマンド「x/4xb」の意味を1文字ずつ解説","summary":"CTFやアセンブリ解析で頻出するgdbのメモリ確認コマンド「x/4xb」について、その構成要素を1文字ずつ分解して解説しています。コマンドは「x/[個数][書式][サイズ] アドレス」という形式で組み立てられており、例えば「4xb」なら「1バイトずつ、16進数で、4つ分調べる」という意味になります。\n\nデバッグ情報がないバイナリでのアドレス指定方法や、リトルエンディアンによるメモリ上の値の並び順など、実戦的なデバッグのコツも紹介しています。コマンドを呪文として暗記するのではなく、各文字の意味を理解して柔軟に組み立てることで、メモリ上のデータ構造を正確に把握できるようになります。","importance":6},{"title":"ソフトウェアファクトリーとコード設計と顧客価値","url":"https://kosui.me/posts/2026/11/15/code-design-after-agents","source":"Hatena","published_at":"2026-11-21 09:35","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"AI時代におけるコード設計の重要性と顧客価値の再定義","summary":"ソフトウェアファクトリーの普及により開発速度は向上したが、顧客の認知負荷は変わらない。著者は、開発速度で差別化できない今こそ、ビジネスロジックを把握しやすいコード設計が重要だと説く。\n\nAIが生成したコードやドキュメントを顧客が正しく認知・利用できなければ価値は生まれない。機能適合性を高めるためには、要求分析から実装までを顧客の業務シナリオに深く適合させる必要があり、設計の価値はむしろ高まっている。","importance":8},{"title":"温度センサーと脱獄 Kindle で、お天気ダッシュボードを作ってみた","url":"https://zenn.dev/zakkie/articles/c99167d7d037d5","source":"Zenn","published_at":"2026-11-21 10:33","genre":"mobile","genre_label":"モバイル・ガジェット・個人開発","headline":"脱獄KindleとESP32で構築する屋外気温お天気ダッシュボード","summary":"余ったKindleを脱獄し、ESP32で取得した屋外気温と天気予報を表示するダッシュボードを構築するプロジェクトです。Cloudflare WorkersとD1を活用し、クラウド費用をドメイン代以外0円に抑える工夫が凝らされています。\n\nESP32で315MHz帯の温度センサー信号を読み取り、Cloudflareに送信。WorkersでPNG画像を生成してKindleに配信する仕組みです。Browser Renderingの無料枠活用や、CPU時間制限を回避するためのデータ集計戦略など、サーバーレス環境での制約を突破する技術的工夫が満載です。電子ペーパーの特性を活かした、実用的かつ面白い個人開発事例です。","importance":7},{"title":"「AIが私を追い越した」　リーマン予想「証明」の数学者自身も驚き：朝日新聞","url":"https://www.asahi.com/articles/ASVCP2WB0VCPDIFI008M.html","source":"Hatena","published_at":"2026-11-21 19:01","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"AIの支援で167年来の難問「リーマン予想」が証明された可能性","summary":"米国の数学者がAIの力を借りて、数学界の超難問である「リーマン予想」を証明したと発表し、大きな衝撃を与えています。リーマン予想は素数の分布に関する未解決問題であり、1859年の提唱以来、多くの数学者が挑んできました。\n\n今回の証明は、AIが複雑な計算や論理構築を補助することで実現したとされており、数学研究におけるAIの役割が劇的に変化する可能性を示唆しています。現在、専門家による証明の正当性の検証が世界中で進められており、その結果が待たれています。","importance":10},{"title":"一番無難じゃないキャラが優勝　Suica「B案」とAI時代の愛されかた","url":"https://www.watch.impress.co.jp/docs/topic/watchplus/2157644.html","source":"Hatena","published_at":"2026-11-21 11:31","genre":"other","genre_label":"総合・その他IT","headline":"Suica新キャラ「B案」が選ばれた理由とAI時代の愛され方","summary":"2027年4月以降のSuica新キャラクターに、奇抜な「B案（紫のうさぎ）」が選ばれた背景について解説しています。多数決では無難なものが選ばれがちですが、今回はあえて「無難ではない」キャラクターが選ばれ、SNSでの二次創作などで大きな盛り上がりを見せました。\n\n選考委員の小山薫堂氏は、このキャラクターが持つ「余白」が重要だったと指摘しています。隙があることで人々が感情移入しやすく、SNS時代にフィットした共感を生んだという分析です。AIが何でも答えてくれる時代において、あえて「話しかけたくなる鏡」のような存在を目指すという視点は、今後のサービスデザインにおいて重要な示唆を与えています。","importance":5},{"title":"相次ぐシステム障害、AIはどこまで関係しているのか--「12月はさらに深刻に」と専門家","url":"https://japan.cnet.com/article/35255244/","source":"Hatena","published_at":"2026-11-21 08:39","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"AIがもたらす脆弱性の洪水とインターネットの脆弱化","summary":"相次ぐシステム障害の背景には、AIによるハッキングの民主化と、脆弱性検知の自動化による「脆弱性の大洪水」がある。攻撃コストの低下により、専門家でなくとも高度な攻撃が可能になった。\n\nAIはコード生成を効率化する一方で、人間が精査していないコードを量産するリスクも孕んでいる。防御側は、AIによる攻撃の高速化に対応するため、より強固で多層的なセキュリティ対策を求められている。","importance":9},{"title":"画面とAPIで同じ入力ルールを使う：React Hook Form＋Zod＋MSW","url":"https://zenn.dev/takahkok0812/articles/655bdf127b224a","source":"Zenn","published_at":"2026-11-21 10:58","genre":"web","genre_label":"Web開発・言語","headline":"React Hook FormとZodで画面とAPIの入力ルールを統一する","summary":"業務アプリケーションにおける入力チェックの重複と食い違いを防ぐため、React Hook Form、Zod、MSWを組み合わせたルールの一元管理手法を解説しています。画面とサーバーの両方で同じバリデーションスキーマを共有することで、一貫性を担保します。\n\n「形と長さ」はZodスキーマで定義し、「業務ルール」は純粋関数として切り出すことで、画面とAPIの双方から再利用可能にしています。これにより、テストの容易性が向上し、画面側でのエラー表示制御も柔軟に行えます。Next.jsのServer ActionsやバックエンドAPIでも応用可能な、保守性の高い設計パターンです。","importance":8},{"title":"トランプ氏、データセンター国外建設認めず　米中でAI安全策検討 - 日本経済新聞","url":"https://www.nikkei.com/article/DGXZQOGN20CXV0Q6A121C2000000/","source":"Hatena","published_at":"2026-11-21 06:44","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"米中首脳、AIのガードレール検討で合意","summary":"トランプ米大統領と習近平国家主席が首脳会談を行い、AIに対する「ガードレール（安全策）」の検討で合意した。AI技術の急速な発展に伴う安全保障上の懸念が背景にある。\n\nデータセンターの国外建設制限など、AIインフラを巡る米中の対立と協調の動きが加速している。技術覇権争いの中で、AIの安全な運用に向けた国際的な枠組み作りが急務となっている。","importance":8},{"title":"新宿駅で財布を忘れて家に帰れない女の子から「PayPay1000円分を現金で交換して貰えませんか？」とお願いされ、「返さなくていいよ」と1000円あげたら喜ばれず戸惑っていた","url":"https://togetter.com/li/2773268","source":"Hatena","published_at":"2026-11-21 21:31","genre":"other","genre_label":"総合・その他IT","headline":"新宿駅でのPayPay現金交換を求める声掛けは詐欺の可能性","summary":"新宿駅などで「財布を忘れて帰れない」と困っている人を装い、PayPay残高と現金の交換を求める声掛けが報告されています。善意で応じると情報を抜き取られたり、詐欺のリストに入れられたりするリスクが指摘されています。\n\nSNS上では、同様の被害報告や注意喚起が相次いでいます。警察に相談しても交通費の貸し出しは自治体や交番によって対応が異なるため、困った際は安易に個人間での金銭やり取りをせず、交番で正規の相談窓口を案内してもらうのが賢明です。","importance":4},{"title":"日本でも「ダムフォン」は広がるか？　KDDIが「INFOBAR ZERO」で目指す2台持ちの新しい形","url":"https://www.itmedia.co.jp/mobile/articles/2611/21/news010.html","source":"Hatena","published_at":"2026-11-21 06:20","genre":"mobile","genre_label":"モバイル・ガジェット・個人開発","headline":"デジタルデトックスを狙うKDDIの「INFOBAR ZERO」","summary":"KDDIは通話とSMSに特化した「INFOBAR ZERO」を発売する。SNS疲れやスマホ依存への対策として、あえて機能を絞り込んだ「ダムフォン」の需要を狙う。\n\nスマホとの2台持ちを想定し、ブランディングや新しいライフスタイルの提案として位置づけられている。収益性よりも、デジタルとの距離感を再定義する試みとして注目される。","importance":6},{"title":"僕の Claude Code 開発のやり方（2026年11月）- AI に書かせて、別の AI に疑わせる","url":"https://zenn.dev/hironoah/articles/claude-code-my-workflow-202611","source":"Zenn","published_at":"2026-11-21 16:38","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"AIに書かせ、別のAIに疑わせるClaude Code開発の極意","summary":"Claude Codeを日常的に活用するエンジニアによる、AI開発のワークフローの棚卸しです。「書くのはAI、疑うのは別のAI、決めるのは自分」という原則のもと、実装とレビューを分離する手法が紹介されています。\n\nメインのセッションには実装させず、サブエージェントに役割を分担させることでトークン消費を抑えつつ品質を向上させています。また、実装したAIとは別のAIにレビューさせる「敵対的検証」を導入し、見落としを防ぐ仕組みを構築しています。失敗をルール化し、機械的にチェックするプロセスも重要視されています。","importance":9},{"title":"AWS IoT Coreに届いたセンサー値をTimestream for InfluxDBに保存してGrafanaでグラフにする","url":"https://zenn.dev/edge2cloud/articles/aws-iot-core-timestream-influxdb-grafana","source":"Zenn","published_at":"2026-11-21 10:42","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"AWS IoT CoreのデータをTimestream for InfluxDBに保存しGrafanaで可視化","summary":"ESP32から送信されたセンサーデータをAWS IoT Core経由でAmazon Timestream for InfluxDBに保存し、Grafanaでグラフ化する手順を解説しています。Lambdaを介さず、IoT Coreの「influxDBアクション」を使用して直接書き込む最新の構成を紹介しています。\n\nインスタンスの作成から、権限を絞ったトークンの発行、Secrets Managerによる認証情報の管理、IoTルールの設定までをステップバイステップで説明。時系列データの保存先としてInfluxDBを選択する際の注意点や、コスト管理の重要性についても触れており、IoTデータの可視化パイプラインを構築したいエンジニアにとって非常に実用的なガイドです。","importance":8},{"title":"1Password(サブスク)とProton Pass(買い切りプラン)を比較！","url":"https://zenn.dev/shirayukihime/articles/9937e226ecd631","source":"Zenn","published_at":"2026-11-21 02:55","genre":"other","genre_label":"総合・その他IT","headline":"1PasswordとProton Passの比較と買い切りプランの検討","summary":"定番の1Passwordと、買い切りプランがあるProton Passを比較。機能面では1Passwordが優位だが、Proton Passは無料版の範囲が広く、メールエイリアス機能などが特徴的である。\n\n買い切りプランは長期利用でコストメリットがあるが、サービスの継続性が前提となる。自身の利用スタイルや家族構成、開発者としてのニーズに合わせて選択することが重要である。","importance":5},{"title":"AIエージェントに堅牢なテストを書かせるには？","url":"https://zenn.dev/yasuakiomokawa/articles/3ac970c3a3a1c7","source":"Zenn","published_at":"2026-11-21 18:09","genre":"web","genre_label":"Web開発・言語","headline":"AIコーディングエージェントに堅牢なテストを書かせる4つの手順","summary":"AIコーディングエージェントが書くテストが実装変更で壊れやすいという課題に対し、堅牢なテストを維持するための4つの手順が紹介されています。筆者は自身のプロダクトで15日間試行錯誤し、この手法を確立しました。\n\n具体的な手順は、受け入れ基準を「外から見える振る舞い」に限定すること、実装の詳細を基準から排除し型やlintに任せること、既存のテストを模範にすること、そして実装前にテストが失敗することを機械的に確認することです。テストの書き換えを禁止するのではなく、基準の書き方を見直すことで、保守性の高いテスト環境を構築できます。","importance":7},{"title":"S&P500が調整局面入り　「重なる最悪の事態」AI株高ピーク過ぎたか - 日本経済新聞","url":"https://www.nikkei.com/article/DGXZQOFL20CUL0Q6A121C2000000/","source":"Hatena","published_at":"2026-11-21 08:11","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"S&P500調整局面入り、AI株高のピークアウト懸念","summary":"米国株式市場でS&P500種株価指数が調整局面入りし、AI関連銘柄への熱狂が冷めつつある。エヌビディアの好決算やアンソロピックの上場も、株価下落を止める起爆剤にはならなかった。\n\nデータセンター建設への不透明感やAI投資に対する市場の温度差が顕在化している。AI以外のセクターへの資金シフトが加速しており、AIバブルの持続可能性に疑問符が投げかけられている。","importance":7},{"title":"1万円のシンセをAIで魔改造。電子楽器のファームウェア開放が始まった | ギズモード・ジャパン","url":"https://www.gizmodo.jp/article/0b0516f2-94f8-442e-bdae-2987f090be13/","source":"Hatena","published_at":"2026-11-20 23:31","genre":"mobile","genre_label":"モバイル・ガジェット・個人開発","headline":"電子楽器のファームウェア開放とAIによる機能拡張","summary":"安価なシンセサイザーのファームウェアをユーザーが改造する動きが活発化している。AIコーディングツールの普及により、非技術者でも機能追加が可能になったことが背景にある。\n\nメーカー側もSDKやソースコードを公開し、コミュニティによる機能拡張を後押しする姿勢を見せている。ハードウェアをプラットフォーム化し、製品寿命を延ばす新しいビジネスモデルの可能性を示唆している。","importance":7},{"title":"【TLA+】AIにテストケースを書かせるな。ルールを書け","url":"https://zenn.dev/karamage/articles/73027ee36796dc","source":"Zenn","published_at":"2026-11-21 11:12","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"AI時代に人間が書くべきは「テストケース」ではなく「ルール」である","summary":"AIがコードとテストの両方を書く時代において、人間がテストケースを考えることの限界と、形式検証の重要性を説いています。AIが書いたテストは「自作自演の満点」になりがちで、本質的なバグを見逃すリスクがあることを指摘しています。\n\n解決策として、個別のテストケースを羅列するのではなく、システムが守るべき「物理法則のようなルール」を定義し、それをモデル検査器で検証するアプローチを提案しています。TLA+やQuintといった言語を用いて、誰がどのような操作をしても破られてはならない制約を記述することで、AI時代にふさわしい堅牢なソフトウェア開発が可能になると主張しています。","importance":9},{"title":"ESP32 + BME280の測定値をAWS IoT CoreにMQTTで送る：証明書・ポリシーでハマらない手順","url":"https://zenn.dev/edge2cloud/articles/esp32-bme280-aws-iot-core-mqtt","source":"Zenn","published_at":"2026-11-21 10:26","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"ESP32からAWS IoT CoreへMQTTで安全にデータを送る手順","summary":"ESP32で取得したセンサーデータを、AWS IoT CoreへMQTT（TLS）で送信するための最小構成とトラブルシューティングを解説しています。証明書やポリシー設定で詰まりやすいポイントを網羅し、安全な接続手順を提示しています。\n\n特に、ポリシーでクライアントIDを制限する手法や、証明書とモノの紐付け、PubSubClientのバッファ設定など、実務でハマりやすい箇所を具体的に解説。接続失敗時の切り分け方法や、CloudWatch Logsを活用したデバッグ手法も紹介しており、AWS IoTの入門から運用までをカバーする信頼性の高いガイドです。","importance":8},{"title":"BlenderのGPUアクセラレーション対応UIを他のアプリケーションから再利用可能にする「BUI」","url":"https://gigazine.net/news/20261121-bui/","source":"Hatena","published_at":"2026-11-21 12:24","genre":"web","genre_label":"Web開発・言語","headline":"BlenderのUIを独立させて他アプリで再利用可能にする「BUI」","summary":"Blenderの洗練されたUIを独立したライブラリとして再利用可能にするプロジェクト「BUI」が公開されました。BlenderのUIコードをC言語で移植し、Rust、Python、JS、Luaなど多様な言語から利用できるようにしたものです。\n\nBUIは、Blender特有の直感的な操作感や高速なGPUアクセラレーションを、Blender本体なしで他のアプリケーションに組み込めるのが特徴です。ダメージレンダリングによる高いパフォーマンスや、React風のフック、Tailwind CSSライクな記述など、モダンな開発体験もサポートしています。アクセシビリティやOS対応など開発途上の部分もありますが、UIライブラリの新たな選択肢として注目されています。","importance":7},{"title":"作れるエンジニアから、価値を届けるエンジニアへ","url":"https://zenn.dev/kubell/articles/3c3490a3592bb1","source":"Zenn","published_at":"2026-11-21 00:50","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"エンジニアが「価値」を生み出すための意思決定プロセス","summary":"AIの活用で実装コストが下がった今、エンジニアには「作る」だけでなく「何を作るか」という意思決定への関与が求められている。価値を最大化するためのターゲット選定とペインの理解が重要である。\n\n「誰に」「何を」「どう届けるか」を分解し、ユーザー体験まで考慮することで、エンジニアは単なる実装者から価値提供者へと進化できる。プロトタイピングを通じた意思決定の重要性が説かれている。","importance":7},{"title":"初心者がAIとMAXのAPKを解析してみた【後編】","url":"https://zenn.dev/aki0804/articles/ac6690df48a1ae","source":"Zenn","published_at":"2026-11-21 17:44","genre":"mobile","genre_label":"モバイル・ガジェット・個人開発","headline":"Androidアプリ「MAX」のAPK解析と通信挙動の調査記録","summary":"Androidアプリ「MAX」のAPKを解析し、通信処理や端末識別子の生成ロジックを調査した記録の後編です。ADBとFridaを用いた動的解析により、登録画面での通信や診断機能の設定値などを詳細に追跡しました。\n\n通信のパケットキャプチャとアプリログを照合し、TLS 1.3環境下での通信内容や、端末IDの生成タイミングを特定しています。AIエージェントの補助を活用して解析計画を立て、暗号化された通信の裏側にあるアプリの挙動を解明するプロセスが詳細に記されています。","importance":5},{"title":"GitHub - mitaku/andon: A one-person software factory: AI coding agents take tasks from a ledger through review to merge, and call the human only for decisions only they can make.","url":"https://github.com/mitaku/andon","source":"Hatena","published_at":"2026-11-21 19:52","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"AIエージェントが自律的に開発を行う「Andon」の仕組み","summary":"「Andon」は、AIエージェントが課題の抽出から実装、レビュー、マージまでを自動で行う、一人用ソフトウェア工場を構築するためのフレームワークです。トヨタ生産方式の「アンドン」から着想を得ており、人間は重要な意思決定のみに関与する「選択的ダークファクトリー」を目指しています。\n\nプロジェクトごとの課題管理やエージェントの指示、ナレッジベースをGitリポジトリとして管理し、エージェントが自律的に作業を進めます。人間は「何を構築するか」「リスク判断」など、人間にしかできない決断が必要な時だけ通知を受ける仕組みで、開発効率の極大化を図っています。","importance":8},{"title":"JVM がコードを実行する仕組みを理解したい","url":"https://zenn.dev/rea9r/articles/jvm-code-execution","source":"Zenn","published_at":"2026-11-21 17:06","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"JVMのJITコンパイルとコード実行の仕組みを徹底解説","summary":"JVMがバイトコードをどのようにネイティブコードへ変換し実行しているか、JITコンパイルの仕組みを解説した記事です。HotSpot VMにおけるインタプリタからC1、C2コンパイラへの切り替えプロセスを、ログやjcmdの出力を用いて検証しています。\n\nメソッドの呼び出し回数やループ回数に基づく最適化、インライン化の条件、code cacheの役割など、パフォーマンスチューニングや障害調査に不可欠な知識が網羅されています。JDKのバージョンアップに伴う内部挙動の変化を理解することの重要性も強調されています。","importance":7},{"title":"GASでスプレッドシートの通知をLINEに送る（Messaging API・Flexメッセージ）","url":"https://zenn.dev/takahkok0812/articles/75ee419b88d960","source":"Zenn","published_at":"2026-11-21 10:57","genre":"web","genre_label":"Web開発・言語","headline":"GASとMessaging APIでスプレッドシートの通知をLINEに送る","summary":"LINE Notifyのサービス終了に伴い、Google Apps Script（GAS）からLINE Messaging APIを利用してスプレッドシートの通知を送信する方法を解説しています。Flexメッセージを活用し、見出し・項目・ボタンを備えたカード形式で通知をリッチに表示します。\n\nトークンをスクリプトプロパティで安全に管理し、push通知やbroadcastを使い分ける実装例を紹介しています。また、フォーム送信時のトリガー設定や、エラー時のログ記録など、運用を見据えた実装のポイントも網羅。通知から直接スプレッドシートを開くボタンを配置するなど、業務効率化に直結する実践的な構成です。","importance":7},{"title":"FDEって結局、何をする人なのか","url":"https://zenn.dev/boku_yaji/articles/ad087efbe61ec7","source":"Zenn","published_at":"2026-11-20 23:37","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"FDE（Forward Deployed Engineer）の役割と改善ループ","summary":"FDEは顧客の現場で課題を理解し、ソフトウェア導入まで関わる役割である。単にAIの精度を上げるだけでなく、顧客の業務が本当に楽になるかを評価することが重要だ。\n\n強化学習の考え方を応用し、評価指標と現場の体験が乖離していないかを確認する。プロンプト調整に終始せず、顧客と共に「何を良いとするか」を定義し続ける泥臭い対話が成功の鍵となる。","importance":7},{"title":"令和8年に「INFOBAR」が復活するも、通話とSMSしかできない「ダムフォン」に","url":"https://www.itmedia.co.jp/mobile/articles/2611/21/news011.html","source":"Hatena","published_at":"2026-11-21 15:49","genre":"mobile","genre_label":"モバイル・ガジェット・個人開発","headline":"通話とSMS専用のダムフォン「INFOBAR ZERO」が復活","summary":"KDDIの「au Design project」から、インターネット通信を排除した音声通話とSMS専用の携帯電話「INFOBAR ZERO」が発表されました。欧米で流行する「ダムフォン」のコンセプトを取り入れ、デジタルデトックスを提案しています。\n\nSNSやWebブラウジングができないため、現代の若者にとっては極端な制限となりますが、スマートフォンの便利さから一時的に離れる「2台目」としての需要を見込んでいます。デザインは深澤直人氏が手掛け、SIMロックフリー端末として販売されます。","importance":5},{"title":"形式検証を活用した脆弱性診断LLMのプロトタイプをEthereum Foundationに納品｜Nyx Foundation","url":"https://note.com/nyxfoundation/n/n782d4fb32344","source":"Hatena","published_at":"2026-11-21 16:28","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"形式検証を活用した脆弱性診断LLM「SPECA」の開発","summary":"Nyx FoundationがEthereum Foundationの助成を受け、LLMを用いた脆弱性診断ツール「SPECA」を開発しました。仕様書からセキュリティプロパティを抽出し、形式検証（Lean 4）で証明された性質を診断項目に反映させる仕組みです。\n\n単なるコード解析ではなく、仕様と実装の乖離を追跡することで、認証漏れやロジックの不備を効率的に検出します。過去の脆弱性データセットを活用して診断項目を具体化し、診断担当者が根拠を持って調査できる環境を提供しています。","importance":8},{"title":"IPv6前提のコンテナ間通信 PrivateLink・VPC Lattice・VPCエンドポイントを実測で比べる","url":"https://zenn.dev/mob_engineer/articles/20261121-ipv6-container-network-mob_engineer","source":"Zenn","published_at":"2026-11-21 15:30","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"IPv6前提のコンテナ間通信経路を実測で比較検証","summary":"IPv6環境下でのコンテナ間通信において、PrivateLink、VPC Lattice、VPCエンドポイントの性能とセキュリティを比較検証したレポートです。東京リージョンで実測を行い、遅延や設計上の判断基準を明らかにしています。\n\nPrivateLinkは遅延がほぼゼロである一方、VPC Latticeは柔軟なルーティングが可能です。結論として、速さだけでなく「提供側が呼び出し元を識別する必要があるか」という要件で経路を選ぶべきだと提言しています。IPv6移行を検討するチームにとって、設計の判断材料となる実践的な内容です。","importance":7},{"title":"設計書のないClassic ASP アプリを ASP.NET Core にマイグレーションしたときにやったこと","url":"https://zenn.dev/pomio/articles/classic-asp-migration-no-design-docs","source":"Zenn","published_at":"2026-11-21 17:56","genre":"web","genre_label":"Web開発・言語","headline":"設計書なしのClassic ASPアプリをASP.NET Coreへ移行する戦略","summary":"設計書が存在しない約10万ステップのClassic ASPシステムを、C#のASP.NET Coreへ移行するプロジェクトの記録です。限られたメンバーと納期の中で、いかにして保守可能なシステムを構築するかが焦点となりました。\n\n「無理に最新技術を使わない」「キレイに作ろうとしない」という方針を立て、生成AIによるコード変換を積極的に活用しました。アーキテクチャ選定ではレイヤードアーキテクチャを採用し、Dapperを用いることでSQLの安定性を確保するなど、現実的な判断を積み重ねることでプロジェクトを成功に導いています。","importance":6},{"title":"スシロー、アメリカ・ニューヨーク1号店が大行列の人気「チップ不要なシステムも好評の理由」→アメリカ人も面倒くさいと思ってるのかよ…","url":"https://togetter.com/li/2773198","source":"Hatena","published_at":"2026-11-21 15:18","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"スシローNY店がチップ不要システムで大行列の人気","summary":"スシローのニューヨーク1号店が、チップ不要の価格設定で大きな注目を集めています。スタッフの報酬を最初から料金に含めるシステムが、チップ文化に疲弊している現地客からも高く評価されています。\n\n1皿800円からという価格設定ながら大行列ができる人気ぶりで、自動化された店舗運営とチップ不要という組み合わせが、アメリカの飲食店における新しいモデルとして受け入れられています。チップ制度に対する現地の不満と、効率的な日本式サービスの需要が浮き彫りとなりました。","importance":5},{"title":"ボールの慣性で素早いカーソル移動！奥深きトラックボールの世界 3つのスタイルに分けて計14モデルをピックアップ text by 石川 ひさよし","url":"https://akiba-pc.watch.impress.co.jp/docs/sale/online_shopping/2158378.html","source":"Hatena","published_at":"2026-11-21 10:24","genre":"mobile","genre_label":"モバイル・ガジェット・個人開発","headline":"トラックボールの奥深き世界：3つのスタイルと14モデル紹介","summary":"PC操作デバイスであるトラックボールの魅力を、操作スタイル別に分類して紹介しています。人差し指操作型と親指操作型の違いや、それぞれのメリット・デメリットを解説し、計14モデルをピックアップしています。\n\nKensingtonやエレコムといった主要メーカーの定番モデルを中心に、ボール径やボタン数、接続方式などの特徴を比較。省スペース性や慣性を活かした素早いカーソル移動など、トラックボールならではの操作感の醍醐味を伝えています。マウスからの移行を検討しているユーザーや、自分に合ったスタイルを探している人にとっての良質なガイドです。","importance":4},{"title":"「直前の修正が効いた」は勘違いだった ― AIにだけ厳しい検証のダブルスタンダード","url":"https://zenn.dev/nekoemon/articles/8e6a45d6632e0f","source":"Zenn","published_at":"2026-11-21 10:00","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"AIの検証で「相関」を「因果」と取り違えた自分の仮説をデータで否定する","summary":"AI開発における検証メモで、修正の効果を「直前の修正のおかげ」と誤認していた自身の失敗談を記録しています。時系列データを詳細に分析した結果、現象の安定は修正の3週間前から始まっており、修正は原因ではなかったことが判明しました。\n\n「手元で再現しない事象に都合のいい仮説を貼る」というエンジニアの陥りやすい罠を自戒を込めて分析しています。AIの判定には厳しく「データで測れ」と課しながら、自分自身の判断は測らずに信じていたという非対称性に気づき、疑いの目は「自分が納得した仮説」にこそ向けるべきだと結論づけています。","importance":8},{"title":"Security Hub CSPM を有効にせず、Claude Code と FSBP の 363 項目を「1 つずつ」点検する計画を立てた","url":"https://zenn.dev/sk8jp/articles/8727ce1072b8b9","source":"Zenn","published_at":"2026-11-21 05:34","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"Claude Codeを活用したAWSセキュリティの個別点検計画","summary":"AWSのSecurity Hub CSPMの費用を抑えるため、Claude Codeを用いてFSBPの363項目を個別に点検する計画が立てられた。自動化ツールに頼らず、AIを「読む・判定する」役割に活用する。\n\nリソースの棚卸しを行い、重要度に応じて段階的に点検を進める手法を採用。費用対効果を考慮しつつ、基準に沿ったセキュリティを維持するための現実的なアプローチとして参考になる。","importance":7},{"title":"簿記のルールをコードで守る：複合仕訳・貸借一致チェック・訂正仕訳の設計","url":"https://zenn.dev/burrata/articles/ssei-ledger-bookkeeping-rules","source":"Zenn","published_at":"2026-11-21 15:52","genre":"web","genre_label":"Web開発・言語","headline":"複式簿記アプリにおける貸借一致ルールの実装と設計","summary":"個人事業主向けの複式簿記アプリにおいて、簿記のルールをコードで強制する設計手法が紹介されています。仕訳を「本体」と「明細」に分けることで複合仕訳に対応し、貸借一致を担保しています。\n\n画面、API、データベースの各層でチェックを行う多重防衛策を講じています。特にFastAPIのmodel_validatorやSQLAlchemyのbefore_flushイベントを活用し、どの経路からデータが入力されても不正な仕訳が保存されない堅牢なアーキテクチャを実現しています。","importance":6},{"title":"みずほ銀行のシステムがハッキングされないの、開発者だけじゃなくてハッカーも仕様を把握できないから説「妙な説得力あるな」「ハッキングが先か、障害が先か…」","url":"https://togetter.com/li/2773158","source":"Hatena","published_at":"2026-11-21 13:00","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"みずほ銀行のシステムがハッキングされないのは仕様がブラックボックスだから説","summary":"みずほ銀行の基幹システムがハッキング被害に遭わない理由として、「開発者やAIですら全容を把握できないほど複雑でドキュメント化されていないため、ハッカーも攻撃対象にできない」というネット上の考察が話題になっています。\n\n長年のシステム統合によるキメラ的な構造が、皮肉にも外部からの解析を困難にする「セキュリティ」として機能しているという寓話的な状況が注目を集めました。技術的負債が極限まで積み重なった結果、誰も全貌を知らないブラックボックスが最強の防御壁になっているという皮肉な事態に、多くのエンジニアが共感や驚きを示しています。","importance":5},{"title":"寝てる間に自動で動くAIエージェントを誰でも作れる：10分でわかる pstack 実践ガイド","url":"https://zenn.dev/canly/articles/ca6875cd79539f","source":"Hatena","published_at":"2026-11-21 07:35","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"AIエージェントによる自律開発の実践ガイド","summary":"AIエージェントを活用し、寝ている間にコード生成からテストまでを完走させる手法が注目されている。本記事では、Cursor公式プラグイン「pstack」を用いた開発フローを解説する。\n\n指示の組み立て方やテストの自動化、サブエージェントへの委任など、AIを「作業者」として使いこなすための具体的なノウハウが示されている。コンパイルを通すだけでなく、実際の実行結果で検証する重要性が強調されている。","importance":8},{"title":"自宅サーバー上のアプリケーションを Cloudflare Tunnel + Access で安全に公開する","url":"https://zenn.dev/bisque/articles/home-server-cloudflare-tunnel-access","source":"Zenn","published_at":"2026-11-20 16:14","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"Cloudflare TunnelとAccessを用いた安全な自宅サーバー公開術","summary":"個人開発アプリを自宅サーバーで運用する際、ルーターのポートを開放せずに安全に公開する方法として、Cloudflare TunnelとAccessの組み合わせが有効である。Tunnelにより外部からの通信をCloudflare経由に限定し、Accessでメール認証を強制することで、脆弱性スキャンや総当たり攻撃を遮断できる。\n\nさらに、アプリ側でJWTを検証し、AIエージェントにはサービストークンを渡して権限を制限することで、多層的な防御を実現している。認証機能をアプリに作り込む手間を省きつつ、高いセキュリティを確保できるため、個人開発のインフラ構成として非常に実用的である。","importance":8},{"title":"「一から組むなら」を4つの案で比べ、先に数えてから1段目だけ入れた記録","url":"https://zenn.dev/hiroxasobiba/articles/rebuild-from-scratch-four-plans","source":"Zenn","published_at":"2026-11-20 23:24","genre":"web","genre_label":"Web開発・言語","headline":"AIエージェントによる開発運用の見直しと検証","summary":"個人開発において、Claude Codeを活用した開発運用の改善記録。複数のAIエージェントに設計案を提示させ、比較検討した上で、既存の運用を土台にした段階的な改善を選択した。\n\n過去の報告の不備を分析し、機械的な「関所」を設けるだけでなく、証拠の確認プロセスを強化する重要性を再認識した。AIの提案を鵜呑みにせず、自身の開発スタイルに合わせて最適化する姿勢が示されている。","importance":7},{"title":"イーロン・マスクが金持ちでもそんなネットで嫌われてないのって「男の子がワクワクするもの」に迷わず巨額の金を突っ込むからだと思うんだよな","url":"https://togetter.com/li/2773122","source":"Hatena","published_at":"2026-11-21 12:06","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"イーロン・マスクがネットで嫌われないのは「少年のワクワク」に投資するから","summary":"イーロン・マスク氏が富豪でありながらネット上で一定の支持を得ている理由について、「男の子がワクワクするものに迷わず巨額の金を投じる姿勢」が評価されているという考察が議論を呼んでいます。\n\nロケット開発や自動運転など、SF的な夢を本気で実現しようとする姿勢が、多くのオタク層や技術者の共感を呼んでいます。私利私欲の豪遊ではなく、人類の進歩という目的のためにリスクを恐れず挑戦し続ける姿が、少年漫画の主人公のように映り、批判を上回る熱狂を生んでいると分析されています。","importance":4},{"title":"GitHub - fkubota/understand-mode: Claude Code の出力・PR・コードを、付箋のホワイトボードで寄り道しながら理解する /understand スキル","url":"https://github.com/fkubota/understand-mode","source":"Hatena","published_at":"2026-11-21 18:00","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"Claude Codeの出力を付箋で理解する「/understand」スキル","summary":"Claude Codeの出力やPR、コードをホワイトボード上の付箋形式で視覚的に理解するためのツール「understand-mode」が公開されました。わからない箇所を選択すると付箋が生成され、メインの文脈を引き継いだ分身AIが回答します。\n\n本筋の会話を汚さずに詳細な調査や図解（Mermaid/Vega-Lite）が可能で、SQLの実行結果なども並べて確認できます。理解が深まったらメインの会話に要約を戻すことができ、複雑なコードベースの理解やレビューの効率化に貢献します。","importance":7},{"title":"全社の GitHub 権限管理を Terraform に移行するのは、なぜ大変なのか","url":"https://zenn.dev/pksha/articles/github-org-terraform-migration","source":"Zenn","published_at":"2026-11-20 20:12","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"GitHub権限管理をTerraformへ移行する際の合意形成と運用設計","summary":"全社のGitHub権限管理をTerraformとPull Requestベースの運用へ移行する際、技術的な検証以上に、部署ごとに異なる運用ルールとの調整が最大の難関となる。本事例では、全社統一を強要せず、部署ごとに管理ディレクトリを分け、CODEOWNERSで承認者を設定する柔軟な設計を採用した。\n\n情シスの手作業負荷を削減しつつ、ガバナンスを維持するために、申請フォームをPRに置き換え、台帳管理をコードベースの自動生成HTMLへ移行した。組織の運用負荷を抑えながらIaCを浸透させるための、合意形成と段階的な移行プロセスの重要性が示されている。","importance":7},{"title":"AIが爆速で開発する時代の、自動テストとの向き合い方","url":"https://zenn.dev/daiaoki/articles/webterm-ai-era-testing","source":"Zenn","published_at":"2026-11-19 16:11","genre":"web","genre_label":"Web開発・言語","headline":"AI開発時代における自動テストの役割と品質維持の戦略","summary":"個人開発サービスにおいて、AIによるコミット数が増大する中で品質を維持するため、自動テストを「人の目の代わり」として活用する戦略が解説されている。特に、ブラウザ上のLinuxシミュレーターという複雑な機能を開発する際、副作用のない純粋関数としてコマンドを実装する「Functional Core, Imperative Shell」の設計が功を奏した。\n\nテストしやすい核を切り出し、モノレポで安定した依存先として管理することで、AIによる高速な開発と高いテストカバレッジを両立させている。AI時代の開発において、テストは単なる確認作業ではなく、システムの土台を守るための不可欠なインフラとなっている。","importance":8},{"title":"PHPカンファレンス関西2026のお誘いチケットを学生・若手エンジニアの方へ先着2名に譲渡します - おうさまのみみはロバのみみ","url":"https://luccafort.hatenablog.com/entry/2026/11/20/193344","source":"Hatena","published_at":"2026-11-20 20:54","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"PHPカンファレンス関西2026の学生・若手向けチケット譲渡の取り組み","summary":"2027年1月開催の「PHPカンファレンス関西2026」に向け、コミュニティ運営者が学生や新卒3年目までのエンジニアを対象に、チケット代を全額負担する「お誘いチケット」の譲渡を呼びかけている。\n\n地域コミュニティの活性化と、技術イベントへの参加ハードルを下げることを目的としており、採用目的ではなく、純粋に技術を楽しめる仲間を増やすための施策である。関西圏の若手エンジニアにとって、コミュニティとの接点を持つ貴重な機会となっている。","importance":3},{"title":"Claude Codeと作る競馬予測システム開発記(13) 再学習パイプライン編","url":"https://zenn.dev/teruyotasaki/articles/horse-racing-ml-dev-13-retraining-pipeline","source":"Zenn","published_at":"2026-11-21 11:57","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"競馬予測システムにおけるモデル再学習パイプラインの自動化と運用","summary":"競馬予測システムの精度を維持するために不可欠な、モデルの定期的な再学習パイプラインの構築と運用ノウハウを解説しています。データが日々更新される環境下で、週次・日次のバッチ処理を安全に自動化するための工夫が紹介されています。\n\n特に、学習中のモデルファイルを本番環境が読み込んで破損するのを防ぐための「一時ファイル置き換え方式」や、不要な処理の棚卸し、Slackへの実行結果通知など、地味ながらも安定運用に直結する運用の細部が重要です。Notebookの差分ノイズを抑える工夫など、継続的な開発を支えるための実践的な知見がまとめられています。","importance":7},{"title":"CDKからTerraformへ：所有権移譲による本番インフラ無停止のIaC移行","url":"https://zenn.dev/levtech/articles/14befd8e727f32","source":"Zenn","published_at":"2026-11-20 10:26","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"CDKからTerraformへ：所有権移譲による無停止IaC移行手法","summary":"AWS CDKで管理されていた本番インフラを、サービスを停止させることなくTerraformへ移行する手法として「所有権の移譲」が有効である。具体的には、CDK側で削除ポリシーをRETAINに設定してリソースを管理から外し、Terraform側でimportブロックを用いて既存リソースを取り込む手順を踏む。\n\nこの手法により、インフラを止めずに技術的負債を解消し、IaC環境を統一できる。段階的な移行とCIによる差分確認を徹底することで、リスクを最小限に抑えつつ、長期運用に耐えうるインフラ管理体制への移行が可能となる。","importance":7},{"title":"DOTweenを使わずにイージングを自作する！Robert Pennerのイージング関数をC#で実装して検証してみた","url":"https://zenn.dev/sorane/articles/e1ed930dea9b1d","source":"Zenn","published_at":"2026-11-21 01:03","genre":"web","genre_label":"Web開発・言語","headline":"DOTweenを使わないイージング関数の自作と実装","summary":"ゲーム開発において、外部ライブラリを使わずにRobert Penner氏の数式を用いたイージング関数をC#で実装する方法を解説。静的クラスで実装することで、Unityに依存しない汎用的な制御が可能になる。\n\nイージングの仕組みを理解し、補間をLerpに任せることで、位置や色など様々な値に適用できる。インスペクターでの選択を容易にするための設計手法も紹介されている。","importance":6},{"title":"Welcome! You are invited to join a webinar: 【26/11/26開催】「脱WordPress」に取り組みたい方へ。セキュリティ懸念・運用負担を解消するSaaS型CMS移行. After registering, you will receive a confirmation email about joining the webinar.","url":"https://hatena.zoom.us/webinar/register/2217624929911/WN_UyuXGu7hRfSejKa5G_lUGg","source":"Hatena","published_at":"2026-11-19 11:00","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"WordPress運用からの脱却をテーマにしたSaaS型CMS移行セミナー","summary":"WordPressのセキュリティ懸念や運用負荷に悩む企業担当者向けに、SaaS型CMSへの移行をテーマにしたオンラインセミナーが開催される。WordPress特有の脆弱性対応や、外注依存による更新スピードの低下といった課題を整理し、移行先の選定基準や進め方を解説する。\n\n情報システム部門と現場の要望を両立させるための移行戦略や、管理画面の操作デモを通じて、運用担当者がいかに業務を効率化できるかを提示する。脱WordPressを検討している企業にとって、具体的な移行のヒントを得られる機会となっている。","importance":4}]};
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
