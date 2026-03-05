/* ============================================
   Customer Analysis Academy - Level 5: パイプライン分析・ダッシュボード
   ============================================ */

const LEVEL5_DATA = {
    id: 5,
    title: "パイプライン分析・ダッシュボード",
    icon: "📊",
    description: "フォーキャスト精度を高め、営業KPIを可視化する",
    modules: [
        {
            id: 501,
            title: "パイプライン分析 - フォーキャスト精度を高める",
            duration: "20分",
            content: `
<h2>セールスパイプラインの基本構造</h2>
<p>パイプラインとは、営業案件がリードから受注に至るまでの「管」のことです。各フェーズの転換率を分析することで、ボトルネックを特定します。</p>

<table>
<thead><tr><th>フェーズ</th><th>件数例</th><th>転換率</th></tr></thead>
<tbody>
<tr><td>リード</td><td>100件</td><td>-</td></tr>
<tr><td>商談化</td><td>50件</td><td>50%</td></tr>
<tr><td>提案</td><td>30件</td><td>60%</td></tr>
<tr><td>見積/交渉</td><td>15件</td><td>50%</td></tr>
<tr><td>受注</td><td>8件</td><td>53%</td></tr>
</tbody>
</table>
<p>全体通過率 = 8%（100件のリードから8件受注）。各フェーズの転換率を改善することが鍵です。</p>

<h2>パイプライン健全性の7指標</h2>
<table>
<thead><tr><th>指標</th><th>計算方法</th><th>健全な基準</th></tr></thead>
<tbody>
<tr><td>パイプライン倍率</td><td>パイプライン総額 / 目標額</td><td>3倍以上</td></tr>
<tr><td>平均商談期間</td><td>各案件の商談日数の平均</td><td>業界平均以下</td></tr>
<tr><td>フェーズ別転換率</td><td>次フェーズに進む割合</td><td>各50%以上</td></tr>
<tr><td>案件の滞留日数</td><td>各フェーズでの平均停滞日数</td><td>基準日数以内</td></tr>
<tr><td>新規パイプライン創出率</td><td>新規追加額 / 目標額/月</td><td>目標の40%以上/月</td></tr>
<tr><td>案件の経年劣化率</td><td>90日以上停滞案件の比率</td><td>20%以下</td></tr>
<tr><td>加重パイプライン</td><td>案件額 x 受注確率の合計</td><td>目標の1.2倍以上</td></tr>
</tbody>
</table>

<h2>ファネル分析とボトルネック特定</h2>
<div class="info-box tip">
<div class="info-box-title">理想的なファネル vs 問題のあるファネル</div>
<p><strong>理想的：</strong>リード100 → 商談50 → 提案30 → 受注8（受注率8%）</p>
<p><strong>問題あり：</strong>リード100 → 商談50 → 提案8 → 受注3（受注率3%）</p>
<p>→ 問題のあるファネルでは商談→提案が16%と極端に低い。ここがボトルネック！</p>
</div>
<p>全体の受注率だけでなく、<strong>各フェーズの転換率</strong>を見てボトルネック（最も転換率が低いフェーズ）に集中改善することが重要です。</p>

<h2>フォーキャスト精度の向上</h2>
<p>受注確率は営業個人の「感覚」ではなく、<strong>客観的な基準</strong>で設定します。</p>
<table>
<thead><tr><th>フェーズ</th><th>確率</th><th>客観的な基準</th></tr></thead>
<tbody>
<tr><td>リード</td><td>5%</td><td>問合せ・資料DLがあった</td></tr>
<tr><td>商談化</td><td>15%</td><td>初回面談実施、課題確認</td></tr>
<tr><td>提案</td><td>30%</td><td>提案書を提出、決裁者に面談</td></tr>
<tr><td>見積</td><td>50%</td><td>見積書を提出、予算確認済</td></tr>
<tr><td>交渉</td><td>70%</td><td>条件交渉中、競合を絞り込み</td></tr>
<tr><td>内示</td><td>90%</td><td>口頭内示あり、契約書作成中</td></tr>
<tr><td>受注</td><td>100%</td><td>契約締結</td></tr>
</tbody>
</table>

<div class="info-box warning">
<div class="info-box-title">ポイントまとめ</div>
<ul>
<li>パイプライン倍率は目標の3倍以上を維持する</li>
<li>ファネルの各フェーズの転換率を見て、ボトルネックを特定する</li>
<li>受注確率は営業の感覚ではなく、客観的な基準で設定する</li>
</ul>
</div>
`,
            quiz: [
                { id: "q501_1", type: "choice", question: "パイプライン倍率の健全な基準はどれですか？", options: ["1倍以上", "2倍以上", "3倍以上", "5倍以上"], answer: 2, explanation: "パイプライン倍率は目標の3倍以上を維持することが健全な基準です。" },
                { id: "q501_2", type: "choice", question: "90日以上停滞している案件の比率（経年劣化率）の健全な基準は？", options: ["50%以下", "30%以下", "20%以下", "0%"], answer: 2, explanation: "案件の経年劣化率は20%以下が健全な基準です。停滞案件が多いとパイプラインの質が低下します。" },
                { id: "q501_3", type: "choice", question: "フォーキャスト精度向上のために最も重要なのはどれですか？", options: ["営業の直感で確率を設定する", "客観的な基準で受注確率を設定する", "全案件を50%で計算する", "楽観的な確率を使う"], answer: 1, explanation: "受注確率は営業の感覚ではなく、客観的な基準（面談実施、予算確認等）に基づいて設定します。" }
            ]
        },
        {
            id: 502,
            title: "営業ダッシュボードの設計",
            duration: "20分",
            content: `
<h2>ダッシュボードの3層構造</h2>
<p>営業ダッシュボードは、<strong>3つの層</strong>で階層的に設計します。上位から下位へ「ドリルダウン」できる構成が理想です。</p>

<table>
<thead><tr><th>層</th><th>対象</th><th>頻度</th><th>主要KPI</th></tr></thead>
<tbody>
<tr><td><strong>Layer 1</strong></td><td>経営層</td><td>月次/四半期</td><td>売上達成率、粗利率、新規/既存比、LTV推移</td></tr>
<tr><td><strong>Layer 2</strong></td><td>マネージャー</td><td>週次</td><td>パイプライン倍率、受注/失注率、フェーズ別滞留、競合別勝率</td></tr>
<tr><td><strong>Layer 3</strong></td><td>営業担当者</td><td>日次</td><td>案件進捗リスト、アクション履歴、次回予定、個人KPI</td></tr>
</tbody>
</table>

<h2>営業マネージャー向け必須KPI</h2>
<table>
<thead><tr><th>KPI</th><th>計算方法</th><th>確認頻度</th><th>アクション基準</th></tr></thead>
<tbody>
<tr><td>売上達成率</td><td>実績 / 目標</td><td>週次</td><td>80%未満で要対策</td></tr>
<tr><td>パイプライン倍率</td><td>パイプライン / 残目標</td><td>週次</td><td>3倍未満で案件創出強化</td></tr>
<tr><td>受注率</td><td>受注件数 / 商談件数</td><td>月次</td><td>前月比5pt以上低下で要分析</td></tr>
<tr><td>平均商談単価</td><td>受注総額 / 受注件数</td><td>月次</td><td>低下傾向なら提案改善</td></tr>
<tr><td>新規案件創出数</td><td>月間新規商談数</td><td>週次</td><td>目標の40%未満で要介入</td></tr>
<tr><td>失注率・失注原因</td><td>失注件数 / クローズ件数</td><td>月次</td><td>原因パレート分析</td></tr>
<tr><td>営業活動量</td><td>訪問・電話・メール数</td><td>週次</td><td>前週比20%以上減で確認</td></tr>
</tbody>
</table>

<h2>ダッシュボードイメージ</h2>
<div class="info-box tip">
<div class="info-box-title">営業ダッシュボード 構成例</div>
<p><strong>【目標達成状況】</strong></p>
<ul>
<li>売上達成率: 78% → 注意</li>
<li>粗利達成率: 82% → 注意</li>
<li>新規案件: 105% → 良好</li>
</ul>
<p><strong>【パイプライン】</strong></p>
<ul>
<li>商談化: 45件 / 1.8億</li>
<li>提案: 22件 / 1.2億</li>
<li>見積: 12件 / 0.8億</li>
<li>受注: 5件 / 0.3億</li>
<li>パイプライン倍率: 3.2x（健全）</li>
</ul>
<p><strong>【アラート】</strong></p>
<ul>
<li>A商事案件：見積フェーズで30日滞留（要確認）</li>
<li>Bテクノ案件：担当者が異動（キーマン再確認）</li>
</ul>
</div>

<h2>ダッシュボード設計の原則</h2>
<table>
<thead><tr><th>原則</th><th>内容</th></tr></thead>
<tbody>
<tr><td>情報量を絞る</td><td>1画面に表示するKPIは7つ以内</td></tr>
<tr><td>アクション基準を設定</td><td>数値が○○以下なら○○するを明確に</td></tr>
<tr><td>自動更新</td><td>手動更新はNG。CRM/SFAから自動反映</td></tr>
<tr><td>ドリルダウン可能</td><td>概要→詳細に遷移できる構造</td></tr>
</tbody>
</table>

<div class="info-box warning">
<div class="info-box-title">ポイントまとめ</div>
<ul>
<li>ダッシュボードは3層（経営層・マネージャー・担当者）で設計する</li>
<li>「見る」だけでなく「アクション基準」を設定し、自動アラートにする</li>
<li>週次の営業会議はダッシュボードベースで進行する</li>
</ul>
</div>
`,
            quiz: [
                { id: "q502_1", type: "choice", question: "営業ダッシュボードの3層構造で、マネージャー向けの確認頻度はどれですか？", options: ["日次", "週次", "月次", "四半期"], answer: 1, explanation: "マネージャー向け（Layer 2）は週次で確認します。経営層は月次/四半期、担当者は日次です。" },
                { id: "q502_2", type: "choice", question: "ダッシュボード設計で1画面に表示するKPIの推奨上限は？", options: ["3つ", "5つ", "7つ", "15つ"], answer: 2, explanation: "1画面に表示するKPIは7つ以内が推奨です。情報量が多すぎると要点が見えなくなります。" },
                { id: "q502_3", type: "choice", question: "売上達成率がいくつ以下の場合に要対策としますか？", options: ["95%", "90%", "85%", "80%"], answer: 3, explanation: "売上達成率が80%未満の場合に要対策とするのがアクション基準の例です。" }
            ]
        },
        {
            id: 503,
            title: "営業会議でのデータ活用",
            duration: "15分",
            content: `
<h2>週次営業会議のデータ活用テンプレート（30分）</h2>

<table>
<thead><tr><th>議題</th><th>時間</th><th>内容</th></tr></thead>
<tbody>
<tr><td><strong>1. KPIレビュー</strong></td><td>5分</td><td>ダッシュボードを全員で確認。目標との差分、アラートの確認</td></tr>
<tr><td><strong>2. パイプラインレビュー</strong></td><td>10分</td><td>フェーズ別案件数と金額、30日以上滞留案件のアクション確認、今週クローズ予定の状況</td></tr>
<tr><td><strong>3. 注目案件の共有</strong></td><td>10分</td><td>今週の受注（何が良かったか→横展開）、今週の失注（何が問題だったか→改善策）、リスク案件の相談</td></tr>
<tr><td><strong>4. アクション確認</strong></td><td>5分</td><td>各メンバーの重点アクション、マネージャーからの支援が必要な項目</td></tr>
</tbody>
</table>

<h2>データ活用の成功パターン</h2>

<h3>パターン1: 数字で「何が起きているか」を把握</h3>
<table>
<thead><tr><th>従来の会議</th><th>データ活用の会議</th></tr></thead>
<tbody>
<tr><td>「今月は厳しいかもしれません」</td><td>「達成率72%で、残り28%を埋めるには見積フェーズの4件中2件の受注が必要です」</td></tr>
<tr><td>「A社案件は順調です」</td><td>「A社は提案フェーズで45日滞留中。平均より20日長く、追加アクションが必要です」</td></tr>
</tbody>
</table>

<h3>パターン2: データで「なぜ起きたか」を分析</h3>
<table>
<thead><tr><th>従来の分析</th><th>データ活用の分析</th></tr></thead>
<tbody>
<tr><td>「今月は失注が多かった」</td><td>「失注12件中7件が提案フェーズ。原因は5件が競合A社、2件が予算凍結」</td></tr>
<tr><td>「新規が取れない」</td><td>「リード→商談化の転換率が先月の45%から28%に低下。リードの質を確認すべき」</td></tr>
</tbody>
</table>

<h2>データ活用で避けるべきこと</h2>
<div class="info-box warning">
<div class="info-box-title">NG行動</div>
<ul>
<li><strong>数字で「詰める」</strong> → 営業は数字を隠すようになる。心理的安全性を確保する</li>
<li><strong>分析して終わり</strong> → 必ずアクションと効果検証まで行う</li>
<li><strong>全部見ようとする</strong> → 重要な指標に絞る。情報過多は判断を鈍らせる</li>
<li><strong>過去のデータだけ見る</strong> → 未来のアクション（予測・計画）に繋げる</li>
</ul>
</div>

<h2>データ活用の効果測定</h2>
<table>
<thead><tr><th>指標</th><th>導入前</th><th>導入後目標</th></tr></thead>
<tbody>
<tr><td>フォーキャスト精度</td><td>±30%</td><td>±10%以内</td></tr>
<tr><td>営業会議の時間</td><td>60分（報告中心）</td><td>30分（議論中心）</td></tr>
<tr><td>案件の滞留日数</td><td>平均45日</td><td>平均30日</td></tr>
<tr><td>受注率</td><td>18%</td><td>25%</td></tr>
</tbody>
</table>

<div class="info-box tip">
<div class="info-box-title">ポイントまとめ</div>
<ul>
<li>営業会議はダッシュボードベースで30分以内に収める</li>
<li>数字は「詰め」ではなく「学び」の材料として使う</li>
<li>データ活用の効果は、フォーキャスト精度や受注率で測定する</li>
</ul>
</div>
`,
            quiz: [
                { id: "q503_1", type: "choice", question: "週次営業会議の推奨時間はどれですか？", options: ["15分", "30分", "60分", "90分"], answer: 1, explanation: "週次営業会議はダッシュボードベースで30分以内に収めることが推奨されます。" },
                { id: "q503_2", type: "choice", question: "データ活用で最も避けるべきことはどれですか？", options: ["ダッシュボードで可視化する", "数字で営業を詰める", "パイプラインをレビューする", "受注事例を共有する"], answer: 1, explanation: "数字で営業を「詰める」と、営業は数字を隠すようになり、データの質が下がります。心理的安全性の確保が重要です。" },
                { id: "q503_3", type: "choice", question: "フォーキャスト精度の導入後目標として適切なのはどれですか？", options: ["±50%", "±30%", "±10%以内", "誤差なし"], answer: 2, explanation: "フォーキャスト精度は±10%以内が導入後の目標値です。" }
            ]
        }
    ]
};
