/* ============================================
   Customer Analysis Academy - Level 3: 競合分析
   ============================================ */

const LEVEL3_DATA = {
    id: 3,
    title: "競合分析",
    icon: "⚔️",
    description: "敵を知り己を知り、競合に勝つ戦略を立てる",
    modules: [
        {
            id: 301,
            title: "競合分析の目的とフレームワーク",
            duration: "15分",
            content: `
<h2>競合分析でわかること</h2>
<ol>
<li>どの競合に、どのくらいの頻度で負けているか</li>
<li>競合の強みと弱みは何か</li>
<li>競合がどんな提案・価格戦略を取っているか</li>
<li>自社の差別化ポイントはどこか</li>
<li>どういう条件なら自社が勝てるか</li>
</ol>

<h2>競合マトリクス分析</h2>
<p>主要な競合と自社を、重要な評価項目で比較するマトリクスを作成します。</p>

<table>
<thead><tr><th>評価項目</th><th>自社</th><th>A社</th><th>B社</th><th>C社</th><th>重要度</th></tr></thead>
<tbody>
<tr><td>製品機能</td><td>◎</td><td>○</td><td>◎</td><td>△</td><td>★★★★★</td></tr>
<tr><td>価格競争力</td><td>△</td><td>◎</td><td>○</td><td>◎</td><td>★★★★</td></tr>
<tr><td>導入実績</td><td>○</td><td>◎</td><td>△</td><td>○</td><td>★★★</td></tr>
<tr><td>サポート</td><td>◎</td><td>△</td><td>○</td><td>○</td><td>★★★★</td></tr>
<tr><td>ブランド力</td><td>○</td><td>◎</td><td>○</td><td>△</td><td>★★★</td></tr>
<tr><td>カスタマイズ</td><td>◎</td><td>△</td><td>◎</td><td>○</td><td>★★★★</td></tr>
<tr><td>対戦時勝率</td><td>-</td><td>35%</td><td>55%</td><td>70%</td><td>-</td></tr>
</tbody>
</table>

<div class="info-box tip">
<div class="info-box-title">マトリクスから読み取れる戦略</div>
<ul>
<li><strong>A社には価格で負ける</strong> → 機能+サポートで差別化</li>
<li><strong>B社には導入実績で負ける</strong> → PoC提案で体感してもらう</li>
<li><strong>C社には概ね勝てる</strong> → 効率的に受注を取りに行く</li>
</ul>
</div>

<h2>競合情報の収集ソース</h2>
<table>
<thead><tr><th>ソース</th><th>得られる情報</th><th>取得方法</th></tr></thead>
<tbody>
<tr><td>失注顧客へのヒアリング</td><td>競合の提案内容・価格</td><td>失注インタビュー</td></tr>
<tr><td>競合のWebサイト/IR</td><td>製品情報、業績、戦略</td><td>定期的なモニタリング</td></tr>
<tr><td>展示会/セミナー</td><td>新製品情報、売り方</td><td>参加・情報収集</td></tr>
<tr><td>業界レポート</td><td>シェア、トレンド</td><td>購入・参照</td></tr>
<tr><td>既存顧客</td><td>競合のアプローチ状況</td><td>定期的な情報交換</td></tr>
<tr><td>SNS/口コミ</td><td>評判、不満</td><td>モニタリング</td></tr>
</tbody>
</table>

<div class="info-box warning">
<div class="info-box-title">ポイントまとめ</div>
<ul>
<li>競合マトリクスで客観的に強み・弱みを比較する</li>
<li>勝率データに基づいて競合別の優先度を設定する</li>
<li>競合情報は複数ソースから継続的に収集する</li>
</ul>
</div>
`,
            quiz: [
                { id: "q301_1", type: "choice", question: "競合マトリクス分析で最も重要なのはどれですか？", options: ["自社の弱みだけを分析する", "競合の悪い点だけを列挙する", "自社と競合を客観的に比較する", "価格だけを比較する"], answer: 2, explanation: "競合マトリクスは自社と競合を複数の評価項目で客観的に比較するためのツールです。" },
                { id: "q301_2", type: "choice", question: "競合の提案内容や価格を最も正確に把握できるソースはどれですか？", options: ["競合のWebサイト", "失注顧客へのヒアリング", "業界レポート", "SNS/口コミ"], answer: 1, explanation: "失注顧客へのヒアリング（失注インタビュー）では、競合が実際にどのような提案・価格を提示したかを直接聞くことができます。" },
                { id: "q301_3", type: "choice", question: "対戦時勝率が35%の競合に対して、最も適切な戦略はどれですか？", options: ["その競合がいる案件は諦める", "価格を大幅に下げて対抗する", "自社が優位な評価項目で差別化する", "競合の悪口を顧客に伝える"], answer: 2, explanation: "自社が優位な項目（機能・サポート等）で差別化することが正しい戦略です。値引き合戦や競合批判は逆効果です。" }
            ]
        },
        {
            id: 302,
            title: "バトルカードの作成と活用",
            duration: "15分",
            content: `
<h2>バトルカード（競合対策シート）とは</h2>
<p>各競合に対する<strong>バトルカード</strong>を作成し、営業チーム全体で共有します。バトルカードには競合の強み・弱み・自社が勝てる条件・使えるトークを記載します。</p>

<h2>バトルカードの構成</h2>

<h3>1. 競合の概要</h3>
<table>
<thead><tr><th>項目</th><th>A社の例</th></tr></thead>
<tbody>
<tr><td>ポジション</td><td>業界シェア1位、知名度抜群</td></tr>
<tr><td>戦略</td><td>低価格戦略（自社比20-30%安い）</td></tr>
<tr><td>特徴</td><td>標準パッケージ中心でカスタマイズは苦手</td></tr>
</tbody>
</table>

<h3>2. 強みと弱み</h3>
<table>
<thead><tr><th>A社の強み</th><th>A社の弱み</th></tr></thead>
<tbody>
<tr><td>価格が安い</td><td>カスタマイズが限定的</td></tr>
<tr><td>導入実績が豊富</td><td>サポートが手薄</td></tr>
<tr><td>ブランド認知が高い</td><td>大企業向けで中堅には過剰</td></tr>
</tbody>
</table>

<h3>3. 自社が勝てる条件</h3>
<ul>
<li>顧客がカスタマイズを求めている場合</li>
<li>手厚いサポートが選定基準に入っている場合</li>
<li>PoCで使い勝手を比較できる場合</li>
</ul>

<h3>4. 使えるトーク</h3>
<ul>
<li>「導入後のサポート体制を比較してみてください」</li>
<li>「御社の業務に合わせた柔軟な設計が可能です」</li>
<li>「TCO（総保有コスト）で比較すると逆転するケースが多いです」</li>
</ul>

<div class="info-box warning">
<div class="info-box-title">NGトーク（絶対やってはいけない）</div>
<ul>
<li>A社の悪口を言う → 信頼を失う</li>
<li>価格で対抗しようとする → 値引き合戦になる</li>
</ul>
</div>

<h2>バトルカードの運用ルール</h2>
<table>
<thead><tr><th>項目</th><th>ルール</th></tr></thead>
<tbody>
<tr><td>作成対象</td><td>対戦頻度の高い上位3-5社</td></tr>
<tr><td>更新頻度</td><td>四半期に1回、または競合に変化があった時</td></tr>
<tr><td>共有方法</td><td>社内Wiki、CRM、営業会議で共有</td></tr>
<tr><td>フィードバック</td><td>現場での使用感を定期的に収集し改善</td></tr>
</tbody>
</table>

<div class="info-box tip">
<div class="info-box-title">ポイントまとめ</div>
<ul>
<li>バトルカードを競合ごとに作成し、「勝てる条件」と「使えるトーク」を武装する</li>
<li>競合の悪口は絶対NG。自社の価値で勝負する</li>
<li>定期的に更新し、現場のフィードバックを反映する</li>
</ul>
</div>
`,
            quiz: [
                { id: "q302_1", type: "choice", question: "バトルカードに記載すべき最も重要な項目はどれですか？", options: ["競合の創業年月日", "自社が勝てる条件と使えるトーク", "競合の従業員数", "競合の本社所在地"], answer: 1, explanation: "バトルカードの核心は「自社が勝てる条件」と「使えるトーク」です。これにより営業が実際の商談で活用できます。" },
                { id: "q302_2", type: "choice", question: "競合が価格で優位な場合のNGアプローチはどれですか？", options: ["TCO（総保有コスト）で比較する", "サポート体制の充実を訴求する", "競合の悪口を言って牽制する", "カスタマイズの柔軟性を強調する"], answer: 2, explanation: "競合の悪口を言うのは絶対NGです。顧客からの信頼を失います。自社の価値で勝負すべきです。" },
                { id: "q302_3", type: "choice", question: "バトルカードの推奨更新頻度はどれですか？", options: ["年1回", "四半期に1回", "毎日", "一度作ったら更新不要"], answer: 1, explanation: "バトルカードは四半期に1回、または競合に変化があった時に更新することが推奨されます。" }
            ]
        },
        {
            id: 303,
            title: "競合別勝率の改善戦略",
            duration: "15分",
            content: `
<h2>競合別勝率のトラッキング</h2>
<p>各競合との対戦結果を継続的にトラッキングし、勝率の推移を把握します。</p>

<table>
<thead><tr><th>競合</th><th>Q1勝率</th><th>Q2勝率</th><th>Q3勝率</th><th>対策効果</th></tr></thead>
<tbody>
<tr><td>A社</td><td>30%</td><td>35%</td><td>42%</td><td>TCO比較資料の効果あり</td></tr>
<tr><td>B社</td><td>50%</td><td>55%</td><td>58%</td><td>PoC実施率向上が貢献</td></tr>
<tr><td>C社</td><td>70%</td><td>68%</td><td>72%</td><td>安定して優位</td></tr>
</tbody>
</table>

<h2>競合シナリオ別の対策</h2>

<h3>シナリオ1: 競合が先行している案件</h3>
<table>
<thead><tr><th>状況</th><th>対策</th></tr></thead>
<tbody>
<tr><td>競合が既に提案済み</td><td>差別化ポイントを明確にした提案で巻き返す</td></tr>
<tr><td>顧客が競合に傾いている</td><td>PoCや試用で「体感」の機会を作る</td></tr>
<tr><td>既存ベンダーが有利</td><td>スイッチングコストを上回るメリットを提示</td></tr>
</tbody>
</table>

<h3>シナリオ2: 自社が先行している案件</h3>
<table>
<thead><tr><th>状況</th><th>対策</th></tr></thead>
<tbody>
<tr><td>競合が後から参入</td><td>顧客との関係を深め、決裁者を押さえる</td></tr>
<tr><td>価格競争に持ち込まれそう</td><td>早期にROIと成果を可視化する</td></tr>
<tr><td>顧客が相見積もりを取り始めた</td><td>自社独自の価値（サポート・カスタマイズ等）を再訴求</td></tr>
</tbody>
</table>

<h2>競合分析の組織展開</h2>
<p>競合分析は個人の知識ではなく、<strong>組織知</strong>として蓄積・活用することが重要です。</p>

<table>
<thead><tr><th>施策</th><th>内容</th><th>効果</th></tr></thead>
<tbody>
<tr><td>競合情報共有会</td><td>月次で最新の競合動向を共有</td><td>全員が最新情報を把握</td></tr>
<tr><td>勝ち事例の共有</td><td>競合に勝った案件のポイントを発表</td><td>勝ちパターンの横展開</td></tr>
<tr><td>バトルカードの更新</td><td>四半期ごとにデータを反映</td><td>常に最新の対策を維持</td></tr>
<tr><td>競合対策ロールプレイ</td><td>競合との比較を想定した模擬商談</td><td>実践力の向上</td></tr>
</tbody>
</table>

<div class="info-box warning">
<div class="info-box-title">ポイントまとめ</div>
<ul>
<li>競合別勝率を継続的にトラッキングし、対策の効果を測定する</li>
<li>先行・後発それぞれのシナリオ別に対策を準備する</li>
<li>競合分析は個人知ではなく組織知として蓄積・展開する</li>
</ul>
</div>
`,
            quiz: [
                { id: "q303_1", type: "choice", question: "競合が先行している案件で有効な対策はどれですか？", options: ["諦めて別の案件に注力する", "大幅な値引きを提示する", "PoCや試用で体感の機会を作る", "競合の悪い評判を伝える"], answer: 2, explanation: "PoCや試用で顧客に自社製品を「体感」してもらうことが、競合先行の案件で有効な巻き返し策です。" },
                { id: "q303_2", type: "choice", question: "競合分析の組織展開で最も重要なのはどれですか？", options: ["分析結果を経営層だけに報告する", "個人の営業ノウハウとして保管する", "組織知として蓄積・共有する", "外部コンサルタントに任せる"], answer: 2, explanation: "競合分析は個人の知識ではなく、組織知として蓄積・活用することが最も重要です。" },
                { id: "q303_3", type: "choice", question: "競合別勝率のトラッキングで重要なのはどれですか？", options: ["勝率が100%になるまで分析を続ける", "対策の効果を測定し改善を繰り返す", "勝率が低い競合との案件を避ける", "一度測定したら変わらない"], answer: 1, explanation: "勝率を継続的にトラッキングし、打った対策の効果を測定して改善を繰り返すことが重要です。" }
            ]
        }
    ]
};
