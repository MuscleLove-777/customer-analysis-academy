/* ============================================
   Customer Analysis Academy - Level 6: ツール活用・組織構築
   ============================================ */

const LEVEL6_DATA = {
    id: 6,
    title: "ツール活用・組織構築",
    icon: "🏗️",
    description: "分析ツールを活用し、データドリブン営業組織を構築する",
    modules: [
        {
            id: 601,
            title: "ツール活用の実践",
            duration: "20分",
            content: `
<h2>営業分析ツールスタック</h2>
<p>営業分析は3層のツールスタックで構成されます。</p>

<h3>1. データ収集層</h3>
<table>
<thead><tr><th>ツール種別</th><th>代表ツール</th><th>役割</th></tr></thead>
<tbody>
<tr><td>CRM/SFA</td><td>Salesforce, Dynamics, kintone</td><td>顧客情報・商談管理</td></tr>
<tr><td>MA</td><td>HubSpot, Marketo, SATORI</td><td>マーケティング自動化</td></tr>
<tr><td>Web解析</td><td>GA4</td><td>Webサイトのアクセス分析</td></tr>
</tbody>
</table>

<h3>2. 分析・可視化層</h3>
<table>
<thead><tr><th>ツール種別</th><th>代表ツール</th><th>役割</th></tr></thead>
<tbody>
<tr><td>BIツール</td><td>Tableau, Power BI, Looker</td><td>データの可視化・ダッシュボード</td></tr>
<tr><td>表計算</td><td>Excel, Google Sheets</td><td>柔軟な分析・集計</td></tr>
<tr><td>AI分析</td><td>ChatGPT, Claude</td><td>テキスト分析、予測、インサイト抽出</td></tr>
</tbody>
</table>

<h3>3. アクション層</h3>
<ul>
<li>ダッシュボードによる可視化</li>
<li>自動アラート通知</li>
<li>定期レポート生成</li>
<li>予測分析による先行指標</li>
</ul>

<h2>Excel/スプレッドシートでできる分析</h2>
<table>
<thead><tr><th>分析手法</th><th>使用機能</th><th>活用シーン</th></tr></thead>
<tbody>
<tr><td>ABC分析</td><td>SORT, CUMSUM, IF</td><td>顧客ランク分類</td></tr>
<tr><td>RFM分析</td><td>DATEDIF, COUNTIFS, SUMIFS</td><td>セグメンテーション</td></tr>
<tr><td>パレート図</td><td>棒グラフ+折れ線グラフ</td><td>失注原因の可視化</td></tr>
<tr><td>ピボットテーブル</td><td>ピボット機能</td><td>多軸クロス集計</td></tr>
<tr><td>移動平均</td><td>AVERAGE(OFFSET)</td><td>トレンド把握</td></tr>
<tr><td>相関分析</td><td>CORREL</td><td>受注率と活動量の関係</td></tr>
<tr><td>回帰分析</td><td>LINEST, FORECAST</td><td>売上予測</td></tr>
</tbody>
</table>

<h2>AIを活用した顧客分析</h2>
<table>
<thead><tr><th>活用例</th><th>内容</th></tr></thead>
<tbody>
<tr><td><strong>失注理由の自動分類</strong></td><td>自由記述テキストをAIが8分類に自動タグ付け</td></tr>
<tr><td><strong>受注予測</strong></td><td>過去の受注/失注データから新案件の受注確率を予測</td></tr>
<tr><td><strong>議事録からのインサイト抽出</strong></td><td>商談議事録から顧客ニーズ・懸念事項を自動抽出</td></tr>
<tr><td><strong>Next Best Action提案</strong></td><td>現在のフェーズ・顧客属性から最適な次のアクションを提案</td></tr>
<tr><td><strong>解約リスクスコアリング</strong></td><td>利用データ+行動データから解約リスクを自動算出</td></tr>
</tbody>
</table>

<div class="info-box warning">
<div class="info-box-title">ポイントまとめ</div>
<ul>
<li>まずはExcel/スプレッドシートで始め、データが溜まったらBIツールに移行</li>
<li>CRM/SFAのデータ品質がすべての分析の基盤</li>
<li>AIは「分類」「予測」「抽出」の3つで即効性がある</li>
</ul>
</div>
`,
            quiz: [
                { id: "q601_1", type: "choice", question: "営業分析ツールスタックの3層で正しい順序はどれですか？", options: ["アクション層→分析層→収集層", "収集層→分析層→アクション層", "分析層→収集層→アクション層", "収集層→アクション層→分析層"], answer: 1, explanation: "データ収集層→分析・可視化層→アクション層の順に構成されます。" },
                { id: "q601_2", type: "choice", question: "AIの顧客分析活用で即効性のある3つの領域はどれですか？", options: ["分類・予測・抽出", "計算・描画・保存", "入力・出力・保管", "収集・整理・廃棄"], answer: 0, explanation: "AIは「分類」「予測」「抽出」の3つの領域で即効性があります。" },
                { id: "q601_3", type: "choice", question: "すべての分析の基盤となるのはどれですか？", options: ["BIツールの性能", "AIの精度", "CRM/SFAのデータ品質", "分析者のスキル"], answer: 2, explanation: "CRM/SFAのデータ品質がすべての分析の基盤です。品質の低いデータからは正しい分析ができません。" }
            ]
        },
        {
            id: 602,
            title: "データドリブン営業組織の構築",
            duration: "20分",
            content: `
<h2>データドリブン営業組織の5原則</h2>
<table>
<thead><tr><th>原則</th><th>内容</th></tr></thead>
<tbody>
<tr><td><strong>原則1: 事実で語る</strong></td><td>「○○だと思う」→「データを見ると○○である」</td></tr>
<tr><td><strong>原則2: 全員がデータにアクセスできる</strong></td><td>一部の人だけでなく、全営業がリアルタイムにダッシュボードを見れる</td></tr>
<tr><td><strong>原則3: データ入力は営業の義務</strong></td><td>「入力しない営業」は「仕事をしていない」と同義</td></tr>
<tr><td><strong>原則4: 分析→アクション→検証のサイクルを回す</strong></td><td>分析して終わりではなく、改善アクションと効果検証まで</td></tr>
<tr><td><strong>原則5: 失敗を許容し、学びに変える</strong></td><td>失注データは「恥」ではなく「組織の財産」</td></tr>
</tbody>
</table>

<h2>導入ロードマップ</h2>
<table>
<thead><tr><th>フェーズ</th><th>期間</th><th>主な施策</th></tr></thead>
<tbody>
<tr><td><strong>Phase 1: 基盤構築</strong></td><td>1-3ヶ月</td><td>CRM整備、入力ルール策定、基本KPI設定、パイロットチームで開始</td></tr>
<tr><td><strong>Phase 2: 分析の定着</strong></td><td>4-6ヶ月</td><td>失注分析の月次実施、パイプラインレビュー、セグメント別戦略の実行</td></tr>
<tr><td><strong>Phase 3: 高度化</strong></td><td>7-12ヶ月</td><td>予測分析、AI活用、自動化、組織全体への展開</td></tr>
</tbody>
</table>

<h2>よくある壁と乗り越え方</h2>
<table>
<thead><tr><th>壁</th><th>原因</th><th>対策</th></tr></thead>
<tbody>
<tr><td>「入力が面倒」</td><td>メリットが見えない</td><td>入力→即レポート生成で成果を見せる</td></tr>
<tr><td>「分析より行動が大事」</td><td>効果を実感していない</td><td>トップ営業のデータ分析習慣を共有</td></tr>
<tr><td>「うちの営業は特殊だから」</td><td>変化への抵抗</td><td>小さな成功事例を積み重ねて証明する</td></tr>
<tr><td>マネージャーが数字で詰める</td><td>心理的安全性の欠如</td><td>数字は「学びの材料」であることを徹底</td></tr>
<tr><td>データが汚くて分析できない</td><td>初期段階の入力品質</td><td>データクレンジング→入力ルールの徹底</td></tr>
</tbody>
</table>

<div class="info-box tip">
<div class="info-box-title">成功の秘訣</div>
小さく始めて（パイロットチーム）、成功事例を作ってから全体展開する。いきなり全社導入を目指すと抵抗が大きく失敗しやすい。
</div>

<div class="info-box warning">
<div class="info-box-title">ポイントまとめ</div>
<ul>
<li>データドリブン営業は「文化の変革」。ツール導入だけでは成功しない</li>
<li>小さく始めて成功事例を作ってから展開する</li>
<li>数字は「詰めの道具」ではなく「学びの材料」として使う</li>
</ul>
</div>
`,
            quiz: [
                { id: "q602_1", type: "choice", question: "データドリブン営業組織の5原則に含まれないものはどれですか？", options: ["事実で語る", "全員がデータにアクセスできる", "数字で営業を詰める", "失敗を許容し学びに変える"], answer: 2, explanation: "5原則は事実で語る・全員がアクセス・入力は義務・分析→アクション→検証・失敗を学びに変えるです。「詰める」は含まれません。" },
                { id: "q602_2", type: "choice", question: "導入ロードマップのPhase 1（基盤構築）の期間はどれですか？", options: ["1週間", "1-3ヶ月", "6-12ヶ月", "1年以上"], answer: 1, explanation: "Phase 1（基盤構築）は1-3ヶ月で、CRM整備、入力ルール策定、パイロットチームでの開始を行います。" },
                { id: "q602_3", type: "choice", question: "「入力が面倒」という壁への最も効果的な対策はどれですか？", options: ["罰則を設ける", "入力項目を増やす", "入力→即レポート生成でメリットを見せる", "紙での報告に戻す"], answer: 2, explanation: "入力したデータから即座にレポートが生成され、自分の成果が可視化されることでメリットを実感してもらいます。" }
            ]
        },
        {
            id: 603,
            title: "データドリブン営業の成功指標",
            duration: "15分",
            content: `
<h2>導入1年後に確認すべき成功指標</h2>

<h3>定量指標</h3>
<table>
<thead><tr><th>指標</th><th>目標</th><th>測定方法</th></tr></thead>
<tbody>
<tr><td>受注率</td><td>10%以上向上</td><td>導入前後の受注率比較</td></tr>
<tr><td>失注率</td><td>5%以上低下</td><td>導入前後の失注率比較</td></tr>
<tr><td>フォーキャスト精度</td><td>±10%以内</td><td>予測と実績の乖離率</td></tr>
<tr><td>平均商談単価</td><td>向上傾向</td><td>月次の商談単価推移</td></tr>
<tr><td>パイプライン創出量</td><td>安定（目標の40%/月以上）</td><td>月次の新規案件創出額</td></tr>
<tr><td>解約率</td><td>低下傾向</td><td>月次/四半期の解約率推移</td></tr>
</tbody>
</table>

<h3>定性指標</h3>
<table>
<thead><tr><th>指標</th><th>確認方法</th></tr></thead>
<tbody>
<tr><td>営業会議でデータが議論の中心になっているか</td><td>会議の議事録・進行方法のチェック</td></tr>
<tr><td>CRM入力率が90%以上を維持しているか</td><td>CRMの入力率レポート</td></tr>
<tr><td>失注を「隠す」文化から「学ぶ」文化に変わったか</td><td>失注レビューの実施状況と参加態度</td></tr>
<tr><td>他部門とのデータ連携ができているか</td><td>マーケ・CS・製品との情報共有状況</td></tr>
</tbody>
</table>

<h2>継続的な改善サイクル</h2>
<p>データドリブン営業は一度導入して終わりではありません。継続的な改善サイクルを回すことが成功の鍵です。</p>

<table>
<thead><tr><th>ステップ</th><th>内容</th><th>頻度</th></tr></thead>
<tbody>
<tr><td><strong>1. 測定</strong></td><td>KPIの実績を収集・記録</td><td>日次〜週次</td></tr>
<tr><td><strong>2. 分析</strong></td><td>目標との差分を分析、原因を特定</td><td>週次〜月次</td></tr>
<tr><td><strong>3. 施策立案</strong></td><td>改善施策を策定（仮説を立てる）</td><td>月次</td></tr>
<tr><td><strong>4. 実行</strong></td><td>施策を実行する</td><td>即時</td></tr>
<tr><td><strong>5. 効果検証</strong></td><td>施策の効果を数字で検証</td><td>月次〜四半期</td></tr>
</tbody>
</table>

<h2>用語集</h2>
<table>
<thead><tr><th>用語</th><th>意味</th></tr></thead>
<tbody>
<tr><td>SFA</td><td>Sales Force Automation（営業支援システム）</td></tr>
<tr><td>CRM</td><td>Customer Relationship Management（顧客関係管理）</td></tr>
<tr><td>MA</td><td>Marketing Automation（マーケティング自動化）</td></tr>
<tr><td>LTV</td><td>Life Time Value（顧客生涯価値）</td></tr>
<tr><td>CAC</td><td>Customer Acquisition Cost（顧客獲得コスト）</td></tr>
<tr><td>NPS</td><td>Net Promoter Score（推奨者スコア）</td></tr>
<tr><td>RFM</td><td>Recency, Frequency, Monetary（最終購買日・頻度・金額）</td></tr>
<tr><td>KPI</td><td>Key Performance Indicator（重要業績評価指標）</td></tr>
<tr><td>PoC</td><td>Proof of Concept（概念実証）</td></tr>
<tr><td>ROI</td><td>Return on Investment（投資利益率）</td></tr>
<tr><td>TCO</td><td>Total Cost of Ownership（総保有コスト）</td></tr>
<tr><td>Champion</td><td>顧客組織内で自社の導入を推進してくれるキーパーソン</td></tr>
<tr><td>パイプライン</td><td>営業案件が受注に至るまでの進捗管理の仕組み</td></tr>
<tr><td>フォーキャスト</td><td>売上の着地予測</td></tr>
</tbody>
</table>

<div class="info-box warning">
<div class="info-box-title">ポイントまとめ</div>
<ul>
<li>成功指標は定量（受注率・失注率・フォーキャスト精度等）と定性（文化の変化）の両面で測定する</li>
<li>CRM入力率90%以上の維持が組織定着の重要なバロメーター</li>
<li>失注データこそが組織最大の財産である</li>
</ul>
</div>
`,
            quiz: [
                { id: "q603_1", type: "choice", question: "データドリブン営業の定着を測るバロメーターとして最も重要なのはどれですか？", options: ["BIツールの導入数", "CRM入力率90%以上の維持", "営業研修の回数", "ダッシュボードの画面数"], answer: 1, explanation: "CRM入力率90%以上の維持は、組織にデータ活用が定着しているかを測る重要なバロメーターです。" },
                { id: "q603_2", type: "choice", question: "継続的改善サイクルの正しい順序はどれですか？", options: ["分析→測定→実行→施策立案→効果検証", "測定→分析→施策立案→実行→効果検証", "施策立案→実行→測定→分析→効果検証", "効果検証→測定→分析→施策立案→実行"], answer: 1, explanation: "正しい順序は測定→分析→施策立案→実行→効果検証です。" },
                { id: "q603_3", type: "choice", question: "LTVの正式名称は何ですか？", options: ["Long Term Vision", "Life Time Value", "Lead To Value", "Last Transaction Volume"], answer: 1, explanation: "LTVはLife Time Value（顧客生涯価値）の略です。" }
            ]
        }
    ]
};
