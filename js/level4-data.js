/* ============================================
   Customer Analysis Academy - Level 4: LTV・離脱分析
   ============================================ */

const LEVEL4_DATA = {
    id: 4,
    title: "LTV・離脱分析",
    icon: "💎",
    description: "顧客生涯価値を最大化し、離脱を未然に防ぐ",
    modules: [
        {
            id: 401,
            title: "顧客LTV分析 - 本当に大切な顧客は誰か",
            duration: "20分",
            content: `
<h2>LTV（Life Time Value）とは</h2>
<p><strong>LTV（顧客生涯価値）</strong>とは、1人（1社）の顧客が取引開始から終了までにもたらす利益の総額です。</p>

<div class="info-box tip">
<div class="info-box-title">LTVの基本計算式</div>
<p><strong>LTV = 平均取引額 x 取引頻度 x 継続期間 x 粗利率</strong></p>
<p>例：月額50万円 x 12回/年 x 5年 x 粗利率40% = <strong>1,200万円</strong></p>
</div>

<h2>LTVの4つの計算モデル</h2>
<table>
<thead><tr><th>モデル</th><th>計算式</th><th>適用場面</th></tr></thead>
<tbody>
<tr><td><strong>簡易モデル</strong></td><td>平均取引額 x 取引回数 x 粗利率</td><td>クイックな試算</td></tr>
<tr><td><strong>継続率モデル</strong></td><td>月次売上 x 粗利率 / (1 - 月次継続率)</td><td>SaaS/サブスク</td></tr>
<tr><td><strong>コホートモデル</strong></td><td>同時期獲得顧客群の実績推移</td><td>正確な実績ベース</td></tr>
<tr><td><strong>予測モデル</strong></td><td>統計/MLで将来取引を予測</td><td>データ豊富な場合</td></tr>
</tbody>
</table>

<h3>継続率モデルの例（SaaS/サブスク型）</h3>
<table>
<thead><tr><th>項目</th><th>値</th></tr></thead>
<tbody>
<tr><td>月額利用料</td><td>30万円</td></tr>
<tr><td>粗利率</td><td>70%</td></tr>
<tr><td>月次解約率</td><td>2%</td></tr>
<tr><td><strong>LTV</strong></td><td><strong>30万 x 0.7 / 0.02 = 1,050万円</strong></td></tr>
</tbody>
</table>

<p>つまり、1社獲得すると生涯で1,050万円の粗利をもたらします。獲得コスト（CAC）が200万円でも、LTV/CAC = 5.25で十分にペイします。</p>

<h2>LTV x 成長ポテンシャルのマトリクス</h2>
<table>
<thead><tr><th></th><th>LTV 低</th><th>LTV 高</th></tr></thead>
<tbody>
<tr><td><strong>成長ポテンシャル 高</strong></td><td>育成ゾーン（将来のVIP候補 → 積極投資）</td><td>最重要ゾーン（今も将来もVIP → 最優先で死守）</td></tr>
<tr><td><strong>成長ポテンシャル 低</strong></td><td>効率化ゾーン（コスト最小で対応）</td><td>維持ゾーン（利益は大きいが成長は限定的 → 満足度維持）</td></tr>
</tbody>
</table>

<h2>LTV/CACの投資効率判断</h2>
<div class="info-box tip">
<div class="info-box-title">LTV/CAC比率の目安</div>
<ul>
<li><strong>3倍以上：</strong>健全な投資効率</li>
<li><strong>1-3倍：</strong>改善の余地あり</li>
<li><strong>1倍未満：</strong>赤字。獲得コストまたは継続率の改善が急務</li>
</ul>
</div>

<div class="info-box warning">
<div class="info-box-title">ポイントまとめ</div>
<ul>
<li>LTVは「その顧客がどれだけの価値をもたらすか」の指標</li>
<li>LTV/CACの比率で投資効率を判断する（3倍以上が目安）</li>
<li>LTV x 成長ポテンシャルのマトリクスでリソース配分を最適化する</li>
</ul>
</div>
`,
            quiz: [
                { id: "q401_1", type: "choice", question: "LTVの基本計算式で正しいのはどれですか？", options: ["平均取引額 x 取引頻度", "平均取引額 x 取引頻度 x 継続期間 x 粗利率", "年間売上 x 利益率", "月額料金 x 12"], answer: 1, explanation: "LTV = 平均取引額 x 取引頻度 x 継続期間 x 粗利率 が基本計算式です。" },
                { id: "q401_2", type: "choice", question: "LTV/CAC比率の健全な目安はどれですか？", options: ["1倍以上", "2倍以上", "3倍以上", "10倍以上"], answer: 2, explanation: "LTV/CACは3倍以上が健全な投資効率の目安です。" },
                { id: "q401_3", type: "choice", question: "SaaS/サブスク型のLTV計算（継続率モデル）で正しい式はどれですか？", options: ["月額売上 x 12", "月額売上 x 粗利率 / 月次解約率", "年間売上 x 継続年数", "月額売上 / 粗利率"], answer: 1, explanation: "継続率モデルでは LTV = 月次売上 x 粗利率 / (1 - 月次継続率) = 月次売上 x 粗利率 / 月次解約率 で計算します。" }
            ]
        },
        {
            id: 402,
            title: "アップセル・クロスセル戦略",
            duration: "15分",
            content: `
<h2>アップセル/クロスセルの定義</h2>
<table>
<thead><tr><th>施策</th><th>定義</th><th>例</th></tr></thead>
<tbody>
<tr><td><strong>アップセル</strong></td><td>上位プラン・上位製品への移行</td><td>スタンダード→プレミアムプラン</td></tr>
<tr><td><strong>クロスセル</strong></td><td>別製品・関連サービスの追加導入</td><td>CRMに加えてMAツールも導入</td></tr>
</tbody>
</table>

<h2>アップセル/クロスセル発見のシグナル</h2>

<h3>アップセルシグナル（上位プランへの移行）</h3>
<ul>
<li>利用量が上限に近づいている</li>
<li>新機能について頻繁に問合せがある</li>
<li>ユーザー数が増加している</li>
<li>「もっとこういうことはできないか」という相談</li>
</ul>

<h3>クロスセルシグナル（別製品の追加導入）</h3>
<ul>
<li>関連部署での利用ニーズの言及</li>
<li>他社製品との連携について質問がある</li>
<li>業務拡大や新事業の話が出ている</li>
<li>「他にどんなサービスがありますか？」という質問</li>
</ul>

<h2>LTVを最大化する顧客育成フレームワーク</h2>
<table>
<thead><tr><th>フェーズ</th><th>期間</th><th>目標</th><th>施策</th></tr></thead>
<tbody>
<tr><td><strong>オンボーディング</strong></td><td>導入後1-3ヶ月</td><td>定着・活用開始</td><td>導入支援、トレーニング、初期成果の確認</td></tr>
<tr><td><strong>活用拡大</strong></td><td>3-6ヶ月</td><td>利用範囲の拡大</td><td>新機能紹介、活用事例の共有、追加ユーザー提案</td></tr>
<tr><td><strong>深耕</strong></td><td>6-12ヶ月</td><td>アップセル/クロスセル</td><td>上位プラン提案、関連サービス紹介、成果レポート</td></tr>
<tr><td><strong>ロイヤル化</strong></td><td>12ヶ月以降</td><td>長期契約・推薦</td><td>事例取材協力依頼、パートナー関係構築</td></tr>
</tbody>
</table>

<h2>顧客育成のKPI</h2>
<table>
<thead><tr><th>KPI</th><th>計算方法</th><th>目標値</th></tr></thead>
<tbody>
<tr><td>Net Revenue Retention（NRR）</td><td>(期末MRR + アップセル - ダウングレード - 解約) / 期初MRR</td><td>120%以上</td></tr>
<tr><td>アップセル率</td><td>アップセル件数 / 対象顧客数</td><td>20%以上/年</td></tr>
<tr><td>クロスセル率</td><td>クロスセル件数 / 対象顧客数</td><td>15%以上/年</td></tr>
</tbody>
</table>

<div class="info-box warning">
<div class="info-box-title">ポイントまとめ</div>
<ul>
<li>アップセル/クロスセルのシグナルを日常的にウォッチする</li>
<li>顧客育成はオンボーディング → 活用拡大 → 深耕 → ロイヤル化の4フェーズで進める</li>
<li>NRR 120%以上を目標にLTVを最大化する</li>
</ul>
</div>
`,
            quiz: [
                { id: "q402_1", type: "choice", question: "アップセルの正しい定義はどれですか？", options: ["新規顧客を獲得すること", "上位プラン・上位製品への移行", "別製品の追加導入", "値引きによる継続"], answer: 1, explanation: "アップセルは既存顧客に上位プラン・上位製品へ移行してもらうことです。" },
                { id: "q402_2", type: "choice", question: "「他にどんなサービスがありますか？」は何のシグナルですか？", options: ["解約シグナル", "アップセルシグナル", "クロスセルシグナル", "不満シグナル"], answer: 2, explanation: "他のサービスへの興味は、別製品の追加導入（クロスセル）のシグナルです。" },
                { id: "q402_3", type: "choice", question: "NRR（Net Revenue Retention）の健全な目標値はどれですか？", options: ["80%以上", "100%以上", "120%以上", "200%以上"], answer: 2, explanation: "NRR 120%以上は、既存顧客からの売上が前期比20%成長していることを意味し、健全な目標値です。" }
            ]
        },
        {
            id: 403,
            title: "離脱予兆分析 - 解約を未然に防ぐ",
            duration: "20分",
            content: `
<h2>離脱コストの衝撃</h2>
<div class="info-box warning">
<div class="info-box-title">離脱が与えるインパクト</div>
<ul>
<li>新規顧客の獲得コストは既存顧客の維持コストの<strong>5〜25倍</strong></li>
<li>解約率が5%改善すると利益が<strong>25〜95%増加</strong>する（ベイン・アンド・カンパニー調査）</li>
<li>年間売上10億円・解約率10%の場合、年間損失は<strong>1億円</strong></li>
</ul>
</div>

<h2>離脱予兆の12のシグナル</h2>

<h3>危険度：高</h3>
<ul>
<li>契約更新の辞退連絡</li>
<li>競合の見積もりを取っている情報</li>
<li>クレーム・不満の直接表明</li>
</ul>

<h3>危険度：中</h3>
<ul>
<li>利用頻度の急激な低下（前月比30%以上減）</li>
<li>担当者（Champion）の異動・退職</li>
<li>定例会議のキャンセルが続く</li>
<li>問合せ件数の減少（関心の低下）</li>
<li>支払いの遅延</li>
</ul>

<h3>危険度：低（早期警戒）</h3>
<ul>
<li>NPS/満足度スコアの低下</li>
<li>セミナー・イベントへの不参加が続く</li>
<li>新機能のトライアルに興味を示さない</li>
<li>コミュニケーション頻度の漸減</li>
</ul>

<h2>ヘルススコアの設計</h2>
<table>
<thead><tr><th>カテゴリ</th><th>配点</th><th>指標</th></tr></thead>
<tbody>
<tr><td>利用状況</td><td>30点</td><td>ログイン頻度、機能利用率、アクティブユーザー数</td></tr>
<tr><td>エンゲージメント</td><td>25点</td><td>定例会議出席率、問合せ頻度、イベント参加</td></tr>
<tr><td>成果</td><td>20点</td><td>KPI達成度、ROI実現状況</td></tr>
<tr><td>関係性</td><td>15点</td><td>決裁者との接点、NPS、紹介・推薦の有無</td></tr>
<tr><td>取引拡大</td><td>10点</td><td>アップセル/クロスセルの動き</td></tr>
</tbody>
</table>

<h3>スコア別の対応ルール</h3>
<table>
<thead><tr><th>スコア</th><th>判定</th><th>施策</th><th>担当</th></tr></thead>
<tbody>
<tr><td>80-100点</td><td>健全（Healthy）</td><td>成功事例の共有、新機能紹介</td><td>CS（月1回）</td></tr>
<tr><td>60-79点</td><td>注意（At Risk）</td><td>個別ヒアリング、利用促進支援</td><td>営業+CS（週1回）</td></tr>
<tr><td>40-59点</td><td>警戒（Warning）</td><td>課題解決ミーティング、特別対応</td><td>マネージャー（即時）</td></tr>
<tr><td>0-39点</td><td>危険（Critical）</td><td>経営層面談、改善プランの提示</td><td>部長以上（即時）</td></tr>
</tbody>
</table>

<div class="info-box warning">
<div class="info-box-title">ポイントまとめ</div>
<ul>
<li>新規獲得より既存維持の方が5-25倍コスト効率が良い</li>
<li>12の離脱予兆シグナルを日常的にモニタリングする</li>
<li>ヘルススコアを設計し、スコアに応じた介入ルールを定める</li>
</ul>
</div>
`,
            quiz: [
                { id: "q403_1", type: "choice", question: "新規顧客の獲得コストは既存顧客の維持コストの何倍ですか？", options: ["2〜3倍", "5〜25倍", "50〜100倍", "同じくらい"], answer: 1, explanation: "新規顧客の獲得コストは既存顧客の維持コストの5〜25倍と言われています。" },
                { id: "q403_2", type: "choice", question: "ヘルススコアが45点の顧客に対する適切な対応はどれですか？", options: ["月1回のフォロー", "週1回のヒアリング", "課題解決ミーティング（即時）", "経営層面談（即時）"], answer: 2, explanation: "40-59点は「警戒」判定で、マネージャーが即時に課題解決ミーティングを実施すべきです。" },
                { id: "q403_3", type: "choice", question: "離脱予兆シグナルの中で、危険度が最も高いものはどれですか？", options: ["NPS/満足度スコアの低下", "定例会議のキャンセル", "競合の見積もりを取っている情報", "新機能への無関心"], answer: 2, explanation: "競合の見積もりを取っているという情報は、具体的な離脱行動に直結するため最も危険度が高いシグナルです。" }
            ]
        }
    ]
};
