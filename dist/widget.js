// __EMBEDDED_NEWS_START__
globalThis.__IT_TREND_EMBEDDED_DATA__ = {"updated_at":"2026-11-18 15:40:06 JST","total_count":35,"config":{"selected_genres":["ai","web","infra","mobile","biz"],"other_genre_min_ratio":0.25,"max_age_hours":72.0,"genres":{"ai":"AI・LLM・機械学習","web":"Web開発・言語","infra":"インフラ・クラウド・セキュリティ","mobile":"モバイル・ガジェット・個人開発","biz":"ITビジネス・キャリア・マネジメント","other":"総合・その他IT"}},"articles":[{"title":"ESLint から oxlint へ。lint が 50 倍速くなるまでの移行の記録","url":"https://zenn.dev/rimo/articles/12d6a7b1c58fcd","source":"Zenn","published_at":"2026-11-18 09:51","genre":"web","genre_label":"Web開発・言語","headline":"ESLintからoxlintへの移行でlint速度を50倍に高速化した記録","summary":"フロントエンド開発において、メインのlinterをESLintからoxlintへ移行し、lint処理を約50倍高速化した事例。CIの待ち時間短縮だけでなく、AIエージェント（Claude Code）によるコーディング時のフィードバック速度向上を目的として実施されました。\n\n移行にあたっては、ESLintのルールを整理しつつ、oxlintで対応可能なルールを段階的に同期させる手法をとっています。最終的にESLintはoxlint未対応のルールのみをチェックする構成に縮小。設定の管理方法や、移行プロセスにおける工夫が詳細にまとめられています。","importance":8},{"title":"Museは「成長する相棒」になれるのか？ 記憶と改善の積み重ねを観察する","url":"https://zenn.dev/daydream/articles/muse-observation-01-memory-and-boundaries","source":"Zenn","published_at":"2026-11-17 20:31","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"パーソナルAIエージェント「Muse」の記憶と自己改善の長期観察","summary":"MetaのパーソナルAIエージェント「Muse」を題材に、エージェントが記憶や自己改善を繰り返す中で、全体として本当に「成長」しているのかを検証する試みです。単なるベンチマークではなく、長期利用における判断の一貫性や安全な境界線の維持に焦点を当てています。\n\nOpenAIの「Dreaming」技術との比較や、エージェントの自律的な改善が意図しない行動を引き起こす可能性（仮説）を考察。個々の改善が正しくても、システム全体として望まない挙動に繋がるリスクを指摘し、エージェントとの付き合い方について長期的な観察の重要性を説いています。","importance":9},{"title":"作業はAIに、判断は人で ― ゲーム開発で実践しているAI駆動のワークフロー","url":"https://zenn.dev/chinpangx_tech/articles/19dd77b67e02f0","source":"Zenn","published_at":"2026-11-18 12:00","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"AIを部下として扱う「作業はAI、判断は人」のゲーム開発ワークフロー","summary":"ゲーム開発において、実装計画からテストまでをAIに任せつつ、品質を維持するための「AI駆動開発（AIDD）」の実践手法を紹介。AIを単なる補助ツールではなく「部下」として扱い、人間が判断基準を明確にした実装計画書を作成することで、AIに作業を委譲するワークフローを構築しています。\n\nGoogleの「Elephant-Goldfish Model」を参考に、設計判断を人間が行い、実装作業をAIに任せるという明確な線引きが鍵です。この手法により、AIの能力を最大限に引き出しつつ、ゲームの面白さや設計の整合性を人間が担保する、効率的かつ高品質な開発体制が実現されています。","importance":7},{"title":"【Claude先生のbash課題 2】ifは、0のときにthenへ進む","url":"https://zenn.dev/aki42/articles/bash-if-zero-is-success","source":"Zenn","published_at":"2026-11-18 12:04","genre":"other","genre_label":"総合・その他IT","headline":"bashの終了コードとif文の挙動をClaudeとの対話で学ぶ","summary":"bashの基礎を学び直すため、Claudeと対話形式で終了コードとif文の仕組みを学習した記録。bashのif文は真偽値ではなく、コマンドの終了コード（0が成功、0以外が失敗）を見て処理を分岐させるという基本ルールを、grepコマンドの挙動などを通じて深く理解する内容です。\n\nコマンドごとに終了コードの定義が異なる点や、変数への代入タイミング、子プロセスでの環境変数の扱いなど、実践的な躓きポイントをClaudeの解説で解消しています。知識が増えるほど「考えすぎて間違える」という学習過程がリアルに描かれており、シェルスクリプトを読み解くための重要な視点が学べます。","importance":4},{"title":"Snowflake の managed access schema で COPY GRANTS 付き CLONE がなぜか初回だけ失敗した話","url":"https://zenn.dev/finatext/articles/snowflake-managed-access-copy-grants","source":"Zenn","published_at":"2026-11-18 11:22","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"Snowflakeのmanaged access schemaでCOPY GRANTS付きCLONEが初回失敗する原因","summary":"Snowflakeにおいて、managed access schemaでCOPY GRANTS付きのCLONEを実行した際、初回のみ権限エラーで失敗する事象の原因と対策を解説。初回実行時は権限のコピーが新たな付与として扱われ、実行ロールの権限チェックが厳しくなることが原因です。\n\n2回目以降は既存テーブルの権限を引き継ぐため成功しますが、この挙動に依存するのは危険です。恒久的な対策として、ジョブの実行ロールを対象スキーマの所有者（schema owner）に設定する構成が推奨されています。公式ドキュメントと再現実験に基づいた、実務的なトラブルシューティング事例です。","importance":6},{"title":"LiteRT-LM on Android 実装Tips — 実機 10 数機種で分かったこと","url":"https://zenn.dev/uphyca/articles/ab08a82829d5aa","source":"Zenn","published_at":"2026-11-18 02:08","genre":"mobile","genre_label":"モバイル・ガジェット・個人開発","headline":"AndroidでのLiteRT-LM実装Tips：実機10数機種での知見","summary":"AndroidアプリでオンデバイスLLM（LiteRT-LM）を実装する際の注意点を、実機10数機種での検証結果に基づいて解説。特に初回のモデル読み込みが極端に遅い問題に対し、モデルダウンロード直後にキャッシュを事前生成する対策が有効です。\n\nまた、キャッシュの削除APIが存在しない仕様に対し、ディレクトリ単位での管理手法を提案。さらに、Conversationの使い回しによるトークン上限エラーの回避や、GPUバックエンドの機種依存性など、実運用で直面する課題と解決策が網羅されています。プライバシーを重視したオンデバイス処理の実装に役立つ知見です。","importance":7},{"title":"POPOPO と AI 開発 - 04. AI と働くためのコードベース -型, lint, 統合テストの活用-","url":"https://zenn.dev/rikachiii/articles/a8eb3669de36fd","source":"Zenn","published_at":"2026-11-17 20:40","genre":"web","genre_label":"Web開発・言語","headline":"AIと協働するためのコードベース構築：型・lint・統合テストの活用術","summary":"AIをチームの一員として迎え入れるためには、コードベース側に強固な足場が必要です。本記事では、バックエンド開発において型定義の共有、lint、統合テストを整備し、AIが変更の影響範囲を正確に把握して自律的に作業できる環境を構築する手法を解説します。\n\n具体的には、OpenAPIやZodを用いた型定義の集約、機能追加の手順化、そしてAIの誤りを防ぐためのカスタムlintの導入がポイントです。これにより、AIはgrepで探索せずともビルドエラーを潰すだけで安全に実装を進められるようになり、人間とAIの協働効率が大幅に向上します。","importance":8},{"title":"Forms の自動回答を Claudeにやらせる","url":"https://zenn.dev/ai_daigakusei/articles/microsoft-forms-draft-fill-human-submits","source":"Zenn","published_at":"2026-11-18 02:38","genre":"other","genre_label":"総合・その他IT","headline":"Microsoft Formsの自動回答下書き作成と入力支援ツール","summary":"Microsoft Formsの設問を読み取り、AIが回答の下書きを自動入力する仕組みの構築方法。送信ボタンは押さず、あくまで下書き作成と入力までを自動化することで、手作業によるミスを防ぎつつ効率化を図るツールです。\n\nPythonとChromeの自動操作プロファイルを活用し、不明な設問はTelegram経由で人間に問い合わせるフローを実装。Formsの動的なDOM構造への対応や、送信を人間が最終確認する安全設計など、実用的な自動化の工夫が盛り込まれています。AIにコードを書かせるためのプロンプト例も記載されています。","importance":5},{"title":"L40S 1台で社内RAGは何人まで使えるか","url":"https://zenn.dev/epicai_techblog/articles/29b509117755af","source":"Zenn","published_at":"2026-11-17 19:00","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"L40S GPU 1台で社内RAGを運用する際の同時利用人数を検証","summary":"社内RAG環境を構築する際、GPUリソース（NVIDIA L40S）で何人まで同時利用が可能かを実測したレポートです。モデル、推論基盤（vLLM/llama.cpp）、量子化手法の組み合わせによる性能差を、TTFT（最初の文字が出るまでの時間）を基準に検証しています。\n\n検証の結果、Gemma 4 26B-A4Bを4bit量子化しvLLMで動かした場合に最大60人まで対応可能である一方、モデルや設定により1人しか耐えられないケースもあることが判明しました。業務利用における正答率と人数のバランスを考慮した、現実的な運用設計のための貴重なデータです。","importance":9},{"title":"AI時代の新卒、実務で技術が身につきづらいので自分でなんとかする── Google Cloudで作った「AI禁止×音声口頭試問」学習システム","url":"https://zenn.dev/acntechjp/articles/bfefba399ab42d","source":"Zenn","published_at":"2026-11-17 19:44","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"AI時代に技術力を鍛える：個人開発した学習システム「ANOR」","summary":"AI前提の実務環境では技術力が身につきにくいという危機感から、新卒エンジニアが個人開発した学習システム「ANOR（アノール）」の紹介です。AI使用不可の制限下で、設計・実装・デバッグ・リファクタリングの技術力を鍛えることを目的としています。\n\n最大の特徴は、問題を解いた後にAIを相手に行う「音声口頭試問」です。これにより、自分の言葉で設計意図を説明する能力を養います。インフラにはGoogle Cloudをフル活用し、自ら課題を解決するエンジニアとしての気概と、座学と実務のギャップを埋めるための実践的な取り組みが綴られています。","importance":7},{"title":"危険コマンドを止める Claude Code hook を書いたのに、素通ししていた","url":"https://zenn.dev/minewo/articles/claude-code-hook-fail-open","source":"Zenn","published_at":"2026-11-18 06:31","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"Claude Codeの危険コマンドブロックhookが素通ししていた原因と修正","summary":"Claude CodeのPreToolUse hookで危険コマンドをブロックする設定を施していたものの、実際にはペイロードの形式不一致により機能していなかった問題の検証と修正記録。JSONの階層構造や抽出ロジックの不備により、検査がスキップされていたことが判明しました。\n\n「検査の手前で空文字ならexit 0する」という設計が、抽出失敗時にも適用されていたことが素通しの原因です。修正後は、フォールバックに頼らずfail-closedな設計を採用し、確実にブロックできる体制を構築。セキュリティフックの検証がいかに重要かを説く教訓的な内容です。","importance":7},{"title":"Claude Code の会話記録から「今日AIと何時間作業したか」を数えて、カレンダーにする","url":"https://zenn.dev/ai_daigakusei/articles/claude-code-daily-ai-hours-calendar","source":"Zenn","published_at":"2026-11-18 01:45","genre":"other","genre_label":"総合・その他IT","headline":"Claude Codeの会話記録から作業時間を集計しカレンダー化する","summary":"Claude Codeの会話ログ（JSON Lines）を解析し、日ごとの作業時間を集計してポートフォリオサイトにカレンダーとして表示する仕組み。自動実行された作業と手動の作業を区別し、0時をまたぐ作業の補正や、作業区切りの定義など、正確な記録のための工夫がなされています。\n\n会話記録の保存期間制限を考慮し、集計結果を別ファイルに保存して永続化する設計を採用。ライブラリを使わずにHTML/JSでカレンダーを描画する手法も紹介しており、自身の開発活動を可視化したいエンジニアにとって参考になる構成です。","importance":5},{"title":"Godot Movie Maker の書き出し窓が前面に出る。Windows の別デスクトップで隠した","url":"https://zenn.dev/ai_hacchu/articles/godot-write-movie-hidden-desktop-windows","source":"Zenn","published_at":"2026-11-18 09:00","genre":"mobile","genre_label":"モバイル・ガジェット・個人開発","headline":"Godotの書き出し窓が前面に出る問題を別デスクトップ起動で解決","summary":"GodotのMovie Maker機能使用時に、書き出しウィンドウが作業画面の前面に表示されてしまう問題を、Windowsの別デスクトップを作成して起動することで解決した技術記録。no_focus設定や画面外配置では防げなかった挙動を、Win32 APIのCreateDesktopを用いて制御しています。\n\nPythonのctypesを使用して、Godotを別のデスクトップ環境で実行する仕組みを構築。これにより、メインの作業画面を邪魔することなく自動化パイプラインを運用可能にしました。AIエージェントを活用した問題解決のプロセスと、OSレベルの制御による回避策が示されています。","importance":5},{"title":"決済という機能を実装するのは容易だが、思っていたより考えることが多かった","url":"https://zenn.dev/chot/articles/1297582ee96341","source":"Zenn","published_at":"2026-11-17 20:22","genre":"web","genre_label":"Web開発・言語","headline":"決済機能実装の落とし穴：信頼性を担保する設計の勘所","summary":"決済機能の実装において、単なるAPI呼び出し以上の考慮が必要な「サービスの信用を背負う責務」について解説しています。金額の改ざん防止、注文と決済の整合性、端数処理、在庫確保、二重注文防止など、実運用で直面する複雑な課題を網羅しています。\n\n特に、通信障害時の冪等性（べきとうせい）の確保や、決済・商品提供・返金といった状態の分離管理が重要です。単に決済を通すだけでなく、異常系を含めた複雑な状態遷移を正しく設計し、ユーザーに信頼されるシステムを構築するための実践的な知見がまとめられています。","importance":8},{"title":"エージェントの自律性を上げると、何が得られて何を失うか —— 助言・承認付き実行・自律実行を実測する","url":"https://zenn.dev/enterprise_ai/articles/1b1f34af88fb8f","source":"Zenn","published_at":"2026-11-17 15:51","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"AIエージェントの自律性レベルとガバナンスの実測検証","summary":"AIエージェントの自律性レベル（助言、承認付き実行、自律実行）を変えた際、安全性やコストにどのような影響が出るかを実測したレポートです。承認者が人である場合とモデルである場合を比較し、エージェントとの付き合い方のノウハウを検証しています。\n\n結論として、承認は「何をするか」は止められるが「何を信じるか」は止められないこと、読まれない承認は自律実行と変わらないことを指摘。誤った方針を防ぐには、承認の回数よりも仕組みによる審査や記憶の出どころの管理が重要であると提言しています。","importance":9},{"title":"Go Conference 2026実行委員を終えて","url":"https://zenn.dev/mire0726/articles/1f3f118662a0f5","source":"Zenn","published_at":"2026-11-17 16:21","genre":"other","genre_label":"総合・その他IT","headline":"Go Conference 2026実行委員の振り返りと持続可能な運営","summary":"Go Conference 2026の実行委員長交代を機に、持続可能なカンファレンス運営を目指した取り組みを振り返る記事です。プロジェクト制度の導入や学生支援、プロポーザル採択基準の一新など、AI時代を見据えた新しい運営手法への挑戦が語られています。\n\n特に、知識の習得がAIで補えるようになった今、カンファレンスで提供すべき価値の再定義や、スタッフ間のコミュニケーション活性化（Discord活用など）に注力した様子が伺えます。次世代へのバトンタッチと、コミュニティ運営の未来に向けた熱意が込められています。","importance":5},{"title":"AI時代の生産性を考える","url":"https://zenn.dev/mediaforce/articles/b7075a9e04e871","source":"Zenn","published_at":"2026-11-17 16:12","genre":"biz","genre_label":"ITビジネス・キャリア・マネジメント","headline":"AI時代の生産性：作業の効率化ではなく提供価値の増幅を目指す","summary":"AIによる生産性向上を「同じことを速くやる」ことではなく、「やらなかったことをやる」ことと再定義し、提供価値を増幅させるための考え方を説いた記事です。AIを魔法のツールではなく、自分の能力を拡張する装置として捉える重要性を強調しています。\n\n想定QAの先回り作成や、ヒアリング前のデザイン提示など、AIを活用して期待値を超えるアウトプットを出す具体的な事例を紹介。AIのアウトプットを自分の言葉で説明できる状態にすることの重要性を説き、AI時代におけるエンジニアの成長ループについて考察しています。","importance":7},{"title":"Microsoft FabricをGitに統合する ― ワークスペースとブランチの関係からAIエージェントを使った開発まで","url":"https://zenn.dev/headwaters/articles/e2aef1de50c368","source":"Zenn","published_at":"2026-11-17 23:57","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"Microsoft FabricのGit連携とAIエージェントによる開発フロー","summary":"Microsoft FabricのワークスペースをGitに統合し、ブランチ管理やレビューを可能にする仕組みと、AIエージェントを活用した開発フローの解説。アイテム定義をファイルとして管理することで、ローカルエディタやAIからの操作が可能になります。\n\nワークスペースとブランチの対応関係や、同期の制約、Gitに保存されるメタデータの内容を整理。さらに、Fabric CLIと組み合わせることで、AIがFabricのアイテムを操作・編集する高度な開発環境の構築方法を提示しています。データ基盤開発のモダン化を目指すチームに有益な情報です。","importance":7},{"title":"GlobalProtectが切れたらWSLから再接続するPowerShellスクリプト（On-demand環境向け）","url":"https://zenn.dev/acntechjp/articles/9cdae8904dabb7","source":"Zenn","published_at":"2026-11-17 16:02","genre":"mobile","genre_label":"モバイル・ガジェット・個人開発","headline":"GlobalProtect切断時にWSLから再接続するPowerShellスクリプト","summary":"Windows版GlobalProtectのCLIが利用できない環境において、PowerShellを用いて接続ボタンを自動操作し、WSLからもVPN接続を制御可能にするスクリプトの紹介です。仮想アダプタの状態を監視し、切断時に自動で再接続を試みる仕組みです。\n\nUI Automationを用いて「Connect」ボタンの座標を特定し、クリック操作を自動化しています。画面の拡大率やダイアログの表示など、GUI操作特有の課題を回避する工夫が凝らされており、Always-on方式ではない環境でのVPN接続管理を効率化する実用的なツールです。","importance":5},{"title":"推定量と推定値は何が違うのか","url":"https://zenn.dev/pillow_stat/articles/statistic-estimator-estimate","source":"Zenn","published_at":"2026-11-17 22:26","genre":"other","genre_label":"総合・その他IT","headline":"統計学における推定量と推定値の定義と混同しやすいポイント","summary":"統計学における「推定量」と「推定値」の明確な違いを、頻度論の立場から解説。推定量はデータを取る前の確率変数（関数）であり、推定値はデータを取った後の具体的な数値であることを、数式と図を用いて整理しています。\n\n標本分布や信頼区間の概念を交え、なぜこれらが混同されやすいのか、記号の扱い方や文脈の読み解き方を詳述。統計学の初学者が陥りやすい概念的な誤解を解き、確率変数と実現値の区別を徹底するための理論的なガイドです。","importance":4},{"title":"おい、 Mutation Test をやれ。テスト品質を、測るために","url":"https://zenn.dev/mizchi/articles/mutation-test-quality","source":"Zenn","published_at":"2026-11-17 18:53","genre":"web","genre_label":"Web開発・言語","headline":"テスト品質を測るためのミューテーションテスト導入のススメ","summary":"AIによるコード生成が普及し、テストカバレッジを上げることは容易になりましたが、そのテストが本当に品質を担保しているのかという疑問に対し、ミューテーションテストの導入を提唱する記事です。\n\nミューテーションテストは、ソースコードを意図的に書き換えてテストが落ちるかを確認することで、テストコード自体の品質を保証する手法です。単純なカバレッジ指標の限界を指摘し、分岐条件の書き換えなどを通じて、テストが見逃しているバグやデッドコードを検出する、より厳密な品質保証のあり方を解説しています。","importance":7},{"title":"【WAM】Praxis-1 を公開コードで動かしてみた","url":"https://zenn.dev/dxclab/articles/7a5ab11ae37082","source":"Zenn","published_at":"2026-11-17 23:38","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"Runwayのロボット方策モデル「Praxis-1」をシミュレータで動かす","summary":"Runwayが公開したロボットアーム向け方策モデル「Praxis-1」を、付属のシミュレータで動かした検証記録。Praxis-1は動画生成モデルを土台にしたWorld Action Model（WAM）であり、未来の動画と行動を同時に予測する点が特徴です。\n\nVLA（Vision-Language-Action）モデルとの違いをアーキテクチャ面から整理し、実際の推論速度や成功率を評価。推論と動画生成の処理による待ち時間など、実用上の課題も明らかにしています。最新のロボット基盤モデルの挙動を理解するための貴重な実践レポートです。","importance":8},{"title":"FreeRADIUSとLLDAPで有線802.1X：動的VLANとFilter-IdによるACL割り当て","url":"https://zenn.dev/chaokovsky/articles/freeradius-8021x-lldap-dynamic-vlan-acl","source":"Zenn","published_at":"2026-11-17 17:46","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"FreeRADIUSとLLDAPによる有線802.1X認証と動的VLAN制御","summary":"Kubernetes環境上でFreeRADIUSとLLDAPを組み合わせ、有線LANにおける802.1X認証と動的VLAN/ACL割り当てを実現した検証記録です。ケーブルを挿すだけでネットワークに参加できる状態を排除し、ユーザー属性に基づいたセキュアなアクセス制御を構築しています。\n\nEAP-TTLS/PAP認証を用い、LDAPのグループメンバーシップに基づいてVLAN IDとFilter-IdをRADIUS属性として返す設計です。機密情報の管理にOpenBaoを利用し、GitOpsによるデプロイを行うなど、モダンなインフラ構成での認証基盤構築の好例です。","importance":7},{"title":"LTを盛り上げよう！AWSサービス応援うちわ制作裏話","url":"https://zenn.dev/namiki64/articles/7aab23e02d1dc4","source":"Zenn","published_at":"2026-11-17 12:55","genre":"other","genre_label":"総合・その他IT","headline":"LTイベントを盛り上げる！AIを活用した推しサービス応援うちわ制作","summary":"JAWS-UG大阪のLTイベントにて、参加者の推しサービスを応援するために「アイドル応援うちわ」を制作した裏話です。AIを活用して各サービスの特徴を捉えたキャッチーなフレーズを生成し、デザインに落とし込むプロセスを紹介しています。\n\n単なる技術発表に留まらず、アイドル文化を取り入れてイベントの熱量を高めるための工夫が凝らされています。Systems ManagerやCloudFormationなど、各サービスの特徴をユニークなフレーズで表現する手法は、技術コミュニティのイベント運営における新しい盛り上げ方のヒントになります。","importance":4},{"title":"HP OMEN 35LのファンとメモリのLEDをサインイン前に消す：OpenRGB、HP版Kingston FURYはPawnIOで","url":"https://zenn.dev/fieldtech/articles/omen-35l-led-off-before-signin","source":"Zenn","published_at":"2026-11-18 01:46","genre":"mobile","genre_label":"モバイル・ガジェット・個人開発","headline":"HP OMENのLEDをサインイン前に消灯させるための制御手法","summary":"HP OMEN 35LのLEDがサインインまで虹色に光り続ける仕様に対し、サインイン前に実行されるタスク（S4U）を用いて消灯させる方法。ファンと前面LEDはOpenRGBのHID LampArrayドライバで制御し、メモリLEDはPawnIOと自作スクリプトで制御しています。\n\nOpenRGBのドライバ競合問題の回避や、SMBus経由でのメモリLED操作など、ハードウェア固有の制御技術を解説。再起動やログオフ時にも対応するタスクスケジューラの設定を含め、PCの見た目をカスタマイズしたいユーザーに向けた詳細な技術ガイドです。","importance":4},{"title":"glTF/GLBの内部構造とSkeletal Animationの仕組み","url":"https://zenn.dev/otinpan/articles/069d728ded395d","source":"Zenn","published_at":"2026-11-17 20:29","genre":"web","genre_label":"Web開発・言語","headline":"3Dデータ形式glTF/GLBの内部構造とSkeletal Animationの仕組み","summary":"ゲームエンジン開発におけるアニメーション機能の実装に向け、3Dデータ形式であるglTF（GLB）の内部構造と、Skeletal Animation（骨格アニメーション）の仕組みを解説した技術記事です。\n\nglTFのJSON構造とバイナリデータの参照関係、頂点データ、スキニング情報（Joints/Weights）、Inverse Bind Matrix、そしてアニメーション用のキーフレームデータがどのように格納されているかを詳細に紐解いています。OBJ形式との違いを明確にし、3Dモデルがどのように動くのかという基礎的なデータ構造を理解するためのガイドとなっています。","importance":6},{"title":"ローカルLLM入門","url":"https://zenn.dev/port_inc/articles/ff974c7456f4db","source":"Zenn","published_at":"2026-11-17 16:17","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"ローカルLLM入門：仕組みからPCでの動かし方まで","summary":"ローカルLLMをPCやブラウザで動かすための仕組みを、モデルの正体、生成の原理、量子化、推論エンジンといった観点から整理した入門記事です。LLMが「重み」と呼ばれる大量の数字の集合体であることを解説し、推論の仕組みを分かりやすく紐解いています。\n\n特に、生成速度を決定づけるのが計算性能ではなく「メモリ帯域」であるという技術的本質や、量子化によって手元のPCで動かせるモデルの規模が変わる仕組みを解説。ローカルで動かすことのセキュリティ上のメリットや、最新のモデル性能の動向についても触れています。","importance":8},{"title":"65,535時間で死ぬSSDと死にかけた情シスの話","url":"https://zenn.dev/bellx2/articles/9acdc81630b72b","source":"Zenn","published_at":"2026-11-17 15:14","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"通電時間65,535時間で発症するSSDファームウェアバグの死闘","summary":"Micron製SSDにおいて、通電時間が約7.5年（65,535時間）を超えるとI/Oが極端に遅延するファームウェアバグに遭遇した際の障害対応記録です。SMART情報が正常なままシステムがハングアップするため、原因特定が極めて困難でした。\n\nネットワーク障害やストレージの劣化と誤認しつつ、最終的に海外コミュニティの情報からファームウェアのバグであることを突き止めました。本記事は、同様の環境を持つ管理者への注意喚起と、障害発生時の切り分け手法、一時的な回避策をまとめた貴重な知見です。","importance":8},{"title":"mise + gh skill で、dotfiles から Agent Skills を管理する","url":"https://zenn.dev/dress_code/articles/30bd78e1a67f87","source":"Zenn","published_at":"2026-11-17 12:00","genre":"web","genre_label":"Web開発・言語","headline":"miseとgh skillを活用したdotfilesによるAgent Skillsの一元管理","summary":"Macの開発環境をdotfilesで管理する中で、Claude CodeやCursor用の「Agent Skills（AIが読み込む規約や手順）」が増大した課題に対し、リポジトリを切り出してmiseとgh skillで管理する手法を導入した事例。\n\n以前はスクリプトで設定ファイルを生成していたが、管理が煩雑化していたため、skillを独立したリポジトリに分離。miseのタスク機能を用いて、新しい環境でもmakeコマンド一つで必要な設定が整うように自動化した。CursorがClaudeのディレクトリ構造と互換性があることを活かし、ツールごとの設定生成を不要にした点がポイントである。","importance":7},{"title":"毎月6,000 AI Agentsを捌くためにキーボードを捨てた話","url":"https://zenn.dev/andoshin11/articles/ba68b39ef9a8ce","source":"Zenn","published_at":"2026-11-17 12:13","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"月6,000セッションを捌くためのAIエージェント開発環境と認知負荷削減術","summary":"開発統括として月間6,000セッションものAI開発を回す著者が、認知負荷と意思決定コストを極限まで減らすための環境構築術を解説。大量のワークツリーを並列稼働させる中で、「今何をしているか」を把握するための可視化手法が鍵となる。\n\nClaude CodeのTask Toolsを活用し、タスク進捗をJSONで抽出して自作のOrca PluginでUI上に描画する仕組みを構築。さらに、AIからの質問やNext Actionの提案を自動検知してサイドバーに表示することで、人間が判断すべきポイントのみに集中できる環境を実現している。","importance":9},{"title":"WSL2を入れたWindows 11でRealtekの有線LANが止まる：nt_rtf64を外すまでの切り分け（HP OMEN 35L）","url":"https://zenn.dev/fieldtech/articles/wsl2-realtek-nt-rtf64-ethernet-stops","source":"Zenn","published_at":"2026-11-18 00:18","genre":"infra","genre_label":"インフラ・クラウド・セキュリティ","headline":"WSL2環境でRealtek有線LANが止まる問題の切り分けと対策","summary":"WSL2を導入したWindows 11環境で、Realtek製NICの送信が停止する事象の調査記録。ネットワーク構成の変更（RasManの起動など）が引き金となり、Realtekのフィルタドライバ（nt_rtf64）がパケット滞留を引き起こしていることが判明しました。\n\nライブダンプを用いたWinDbgでの解析により、ドライバのバインド処理が一時停止状態で止まっていることを特定。最終的にフィルタドライバを外すことで解決しました。ハードウェア故障の切り分けから、OS内部のスタック解析まで、深いトラブルシューティングのプロセスが示されています。","importance":6},{"title":"最近、コードを真面目に読まなくなった","url":"https://zenn.dev/hiromoo/articles/reading-less-preparing-more","source":"Zenn","published_at":"2026-11-17 00:24","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"AI時代のコードレビュー：精読から「前提と評価の設計」へのシフト","summary":"AIが生成するコードの精度向上に伴い、すべての差分を精読する従来の習慣を見直すべきだと提唱する考察記事。AIが「大体正しい」コードを出力する現在、人間がコードを一行ずつ追う時間よりも、AIが正しく仕事をするための「前提」を整えることに価値があるとしている。\n\nAIの推論能力や探索能力が向上する中で、人間は「何を改善したいか」「何をもって成功とするか」という評価の仕組みを設計することに注力すべきだと主張。AIが空気を読んで補完してくれる部分と、人間が明示的に共有すべき前提の境界を理解し、AIの能力を最大限に引き出すための新しいエンジニアの役割を提示している。","importance":9},{"title":"Kaggle 膝コンペ振り返り & 上位解法まとめ | RSNA Knee Abnormality Detection","url":"https://zenn.dev/ca_kagglers/articles/kaggle-rsna-knee","source":"Zenn","published_at":"2026-11-17 23:09","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"Kaggle医療画像コンペ「RSNA Knee Abnormality Detection」振り返り","summary":"膝のMRI画像から所見を予測するKaggleコンペの振り返りと上位解法まとめ。本コンペの最大の難所は、信頼できる正解ラベルが極めて少ない（58件）点であり、参加者は自然言語のレポートから弱ラベルを生成する必要がありました。\n\nLLMを活用したラベル生成や、外部データ・モデルの利用可否を巡る議論など、近年の医療AIコンペ特有の課題が浮き彫りになっています。評価指標の特性や、データ構造の理解、そして信頼性の低いラベルをどう扱うかという、医療画像解析における高度なアプローチが学べる内容です。","importance":7},{"title":"Claude Desktop 開発のすゝめ","url":"https://zenn.dev/peoplex_blog/articles/vscode-to-claude-desktop","source":"Zenn","published_at":"2026-11-17 12:41","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"VS CodeからClaude Desktopへ移行した開発体験とセッション管理の最適化","summary":"フロントエンドエンジニアが、VS CodeからClaude Desktopへ開発環境を完全に移行した事例を紹介。以前は複数のAIエージェントを管理するために自作の通知ツールやcmux/herdrを駆使していたが、Claude Desktopの純正UIによるセッション管理の利便性がそれを上回ったと結論付けている。\n\nサイドバーでのセッション状態の可視化や、セッションを開かずに質問に回答できる機能が、並行作業の効率を劇的に向上させた。開発エージェントをClaude Codeに集約することで、ツール管理の複雑さを解消し、より本質的な開発フローに集中できるようになった経緯が詳しく解説されている。","importance":8},{"title":"フロントエンドの logic と UI は、エージェントの責任範囲で分けられるのか","url":"https://zenn.dev/xtm_blog/articles/20261116-fd1702b0ba06cd","source":"Zenn","published_at":"2026-11-17 08:00","genre":"ai","genre_label":"AI・LLM・機械学習","headline":"AIエージェント開発におけるフロントエンドとバックエンドの責任範囲と工程分割","summary":"要求仕様から実装までをAIエージェントが完走する開発基盤において、工程を分割して実行する際の課題と設計指針を考察。全体を一度に走らせるのではなく、工程ごとに分割することで改善のフィードバックを早める試みを行っている。\n\nフロントエンドとバックエンドを分けた際、E2Eテストの失敗原因が機械的に特定しにくいという問題に直面。結論として「各工程は自分で評価・責任を負える範囲を持つべき」という指針を導き出した。バックエンドは契約（API定義）があれば単独で評価可能だが、フロントエンドはバックエンドの完成を待つ必要があるという非対称性をどう扱うかが議論されている。","importance":8}]};
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
