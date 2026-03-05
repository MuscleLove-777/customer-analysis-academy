/* ============================================
   Customer Analysis Academy - Level 1: 顧客分析の基礎
   ============================================ */

const LEVEL1_DATA = {
    id: 1,
    title: "顧客分析の基礎",
    icon: "📚",
    description: "なぜ顧客分析が必要か、データ収集と整理の基本を学ぶ",
    modules: [
        {
            id: 101,
            title: "なぜ営業に顧客分析が必要か",
            duration: "15分",
            content: `
<h2>営業現場の「あるある」問題</h2>
<p>多くの営業組織では、以下のような問題を抱えています。これらの共通原因は<strong>「分析していない」</strong>こと、つまり感覚に頼り、事実を見ていないことです。</p>

<table>
<thead><tr><th>よくある問題</th><th>根本原因</th></tr></thead>
<tbody>
<tr><td>「なんで失注したんだろう...価格かな？」</td><td>原因を特定できず、同じ失敗を繰り返す</td></tr>
<tr><td>「あの案件は大丈夫だと思ってたのに...」</td><td>受注確度の読みが甘く、パイプラインが不安定</td></tr>
<tr><td>「トップ営業の○○さんは何が違うんだ？」</td><td>属人的スキルが言語化・共有されない</td></tr>
<tr><td>「どの顧客に時間を使えばいいか分からない」</td><td>優先順位がつけられず、全方位に薄く対応</td></tr>
<tr><td>「既存顧客からの売上が年々減っている...」</td><td>離脱の予兆を見逃し、手遅れになる</td></tr>
</tbody>
</table>

<h2>顧客分析がもたらす効果</h2>
<table>
<thead><tr><th>分析領域</th><th>解決される問題</th><th>期待効果</th></tr></thead>
<tbody>
<tr><td>受注分析</td><td>なぜ受注できたか不明</td><td>勝ちパターンの再現性向上</td></tr>
<tr><td>失注分析</td><td>なぜ失注したか不明</td><td>同じ失敗の撲滅、提案改善</td></tr>
<tr><td>競合分析</td><td>競合に負ける理由が不明</td><td>差別化ポイントの明確化</td></tr>
<tr><td>LTV分析</td><td>どの顧客が重要か不明</td><td>リソース配分の最適化</td></tr>
<tr><td>離脱予兆分析</td><td>顧客離脱を事前察知できない</td><td>プロアクティブなフォロー</td></tr>
<tr><td>パイプライン分析</td><td>着地見込みが不正確</td><td>フォーキャスト精度向上</td></tr>
</tbody>
</table>

<h2>データドリブン営業の成熟度モデル</h2>
<div class="info-box tip">
<div class="info-box-title">営業組織の成熟度5段階</div>
<ul>
<li><strong>Level 5: 予測型（Predictive）</strong> - AIによる受注予測・最適アクション提案</li>
<li><strong>Level 4: 最適化型（Optimized）</strong> - データに基づくリソース最適配分</li>
<li><strong>Level 3: 分析型（Analytical）</strong> - 失注原因・受注要因の体系的分析</li>
<li><strong>Level 2: 記録型（Recording）</strong> - SFA/CRMにデータを蓄積</li>
<li><strong>Level 1: 勘と経験型（Intuitive）</strong> - 個人の経験と感覚に依存</li>
</ul>
</div>
<p><strong>多くの企業はLevel 1-2で停滞しています。このアカデミーはLevel 3-4に引き上げることを目指します。</strong></p>

<h2>顧客分析の全体フレームワーク</h2>
<p>顧客分析は<strong>INPUT → ANALYSIS → OUTPUT</strong>の3段階で構成されます。</p>
<table>
<thead><tr><th>INPUT（収集）</th><th>ANALYSIS（分析）</th><th>OUTPUT（活用）</th></tr></thead>
<tbody>
<tr><td>CRM/SFAデータ</td><td>セグメンテーション</td><td>ターゲット選定</td></tr>
<tr><td>商談履歴</td><td>受注/失注分析</td><td>アクション計画</td></tr>
<tr><td>顧客属性</td><td>LTV分析</td><td>リソース配分</td></tr>
<tr><td>競合情報</td><td>競合分析</td><td>提案戦略</td></tr>
<tr><td>市場データ</td><td>パイプライン分析</td><td>フォーキャスト</td></tr>
<tr><td>問合せ履歴</td><td>離脱予兆分析</td><td>アラート設定</td></tr>
</tbody>
</table>

<div class="info-box warning">
<div class="info-box-title">ポイントまとめ</div>
<ul>
<li>営業の「なぜ？」に答えるのが顧客分析</li>
<li>Level 1-2（勘と記録）からLevel 3-4（分析と最適化）への進化を目指す</li>
<li>分析は6つの領域（受注・失注・競合・LTV・離脱・パイプライン）で構成される</li>
</ul>
</div>
`,
            quiz: [
                { id: "q101_1", type: "choice", question: "データドリブン営業の成熟度モデルで、SFA/CRMにデータを蓄積する段階はどのレベルですか？", options: ["Level 1: 勘と経験型", "Level 2: 記録型", "Level 3: 分析型", "Level 4: 最適化型"], answer: 1, explanation: "Level 2（記録型）はSFA/CRMにデータを蓄積する段階です。多くの企業がLevel 1-2で停滞しています。" },
                { id: "q101_2", type: "choice", question: "顧客分析の6つの領域に含まれないのはどれですか？", options: ["受注分析", "人事分析", "競合分析", "離脱予兆分析"], answer: 1, explanation: "顧客分析の6領域は受注・失注・競合・LTV・離脱予兆・パイプラインです。人事分析は含まれません。" },
                { id: "q101_3", type: "choice", question: "顧客分析のフレームワークで、正しい順序はどれですか？", options: ["ANALYSIS → INPUT → OUTPUT", "OUTPUT → ANALYSIS → INPUT", "INPUT → ANALYSIS → OUTPUT", "INPUT → OUTPUT → ANALYSIS"], answer: 2, explanation: "顧客分析はINPUT（収集）→ ANALYSIS（分析）→ OUTPUT（活用）の3段階で構成されます。" }
            ]
        },
        {
            id: 102,
            title: "顧客データの収集と整理",
            duration: "20分",
            content: `
<h2>顧客データの4分類</h2>
<p>顧客データは、<strong>WHO（誰か）・WHAT（何をしたか）・HOW MUCH（いくらか）・WHY（なぜか）</strong>の4つの視点で整理します。</p>

<table>
<thead><tr><th>分類</th><th>視点</th><th>データ例</th><th>取得元</th><th>取得難易度</th></tr></thead>
<tbody>
<tr><td><strong>属性データ</strong></td><td>WHO</td><td>企業名、業界、売上規模、従業員数、所在地、決裁者</td><td>名刺交換、企業DB、HP/IR</td><td>低</td></tr>
<tr><td><strong>行動データ</strong></td><td>WHAT</td><td>Web訪問、セミナー参加、問合せ、DL資料、商談回数</td><td>MA/SFA、Webログ、メール</td><td>中</td></tr>
<tr><td><strong>取引データ</strong></td><td>HOW MUCH</td><td>受注額、取引回数、契約期間、LTV、粗利率</td><td>会計/SFA、請求書、CRM</td><td>低</td></tr>
<tr><td><strong>心理データ</strong></td><td>WHY</td><td>満足度、NPS、要望/不満、意思決定基準</td><td>アンケート、ヒアリング、CS対応</td><td>高</td></tr>
</tbody>
</table>

<h2>SFA/CRMに記録すべき商談情報</h2>
<p><strong>失注分析に最低限必要なフィールド：</strong></p>
<table>
<thead><tr><th>フィールド名</th><th>内容</th><th>記載例</th></tr></thead>
<tbody>
<tr><td>案件名</td><td>具体的に特定できる名称</td><td>○○社_CRMリプレイス案件</td></tr>
<tr><td>顧客ランク</td><td>A/B/C/D</td><td>A（年商100億以上）</td></tr>
<tr><td>案件金額</td><td>見込み金額</td><td>3,000万円</td></tr>
<tr><td>フェーズ</td><td>商談ステージ</td><td>提案→見積→交渉→内示</td></tr>
<tr><td>競合</td><td>競合企業名</td><td>X社、Y社</td></tr>
<tr><td>決裁者</td><td>キーマン名と役職</td><td>田中部長（情シス）</td></tr>
<tr><td>受注/失注理由</td><td><strong>必須</strong>（選択式+自由記述）</td><td>価格が競合より20%高い</td></tr>
</tbody>
</table>

<h2>データクレンジングの基本</h2>
<div class="info-box tip">
<div class="info-box-title">データ品質の5要素</div>
<ol>
<li><strong>正確性（Accuracy）</strong> - 企業名の表記揺れ（(株) / 株式会社 / (株)）を統一</li>
<li><strong>完全性（Completeness）</strong> - 失注理由が空欄の案件が50%では分析不可能</li>
<li><strong>一貫性（Consistency）</strong> - 同じ顧客が「ABC商事」と「エービーシー商事」で重複</li>
<li><strong>鮮度（Timeliness）</strong> - 担当者が異動しているのに更新されていない</li>
<li><strong>一意性（Uniqueness）</strong> - 名寄せされていない重複レコード</li>
</ol>
</div>

<h2>データ入力を定着させる仕組み</h2>
<p><strong>営業が入力しない3大理由と対策：</strong></p>
<table>
<thead><tr><th>理由</th><th>対策</th></tr></thead>
<tbody>
<tr><td>面倒くさい</td><td>選択式・プルダウンを多用、入力項目を最小限に</td></tr>
<tr><td>メリットを感じない</td><td>入力データから自動でレポート生成、自分の成績を可視化</td></tr>
<tr><td>入力する時間がない</td><td>モバイル対応、音声入力、商談直後のリマインド通知</td></tr>
</tbody>
</table>

<div class="info-box warning">
<div class="info-box-title">ポイントまとめ</div>
<ul>
<li>顧客データは「属性」「行動」「取引」「心理」の4分類で捉える</li>
<li>失注理由は必須入力にし、選択式+自由記述で記録する</li>
<li>データ品質を保つ仕組み（入力の簡素化、メリットの可視化）が不可欠</li>
</ul>
</div>
`,
            quiz: [
                { id: "q102_1", type: "choice", question: "顧客データの4分類のうち、取得難易度が最も高いのはどれですか？", options: ["属性データ", "行動データ", "取引データ", "心理データ"], answer: 3, explanation: "心理データ（満足度、NPS、要望/不満など）はアンケートやヒアリングが必要で、取得難易度が最も高いです。" },
                { id: "q102_2", type: "choice", question: "データ品質の5要素に含まれないものはどれですか？", options: ["正確性", "完全性", "拡張性", "一意性"], answer: 2, explanation: "データ品質の5要素は正確性・完全性・一貫性・鮮度・一意性です。拡張性は含まれません。" },
                { id: "q102_3", type: "choice", question: "SFA/CRMの商談情報で「必須」とされるのはどれですか？", options: ["Next Action", "商談期間", "受注/失注理由", "提案内容"], answer: 2, explanation: "受注/失注理由は必須入力とし、選択式+自由記述で記録することが失注分析の基盤です。" }
            ]
        },
        {
            id: 103,
            title: "顧客セグメンテーション",
            duration: "20分",
            content: `
<h2>セグメンテーションの目的</h2>
<p>全顧客を一律に扱うと、リソースが分散して成果が出ません。セグメント別に最適化することで、リソースを集中し成果を最大化します。</p>

<table>
<thead><tr><th>一律対応</th><th>セグメント別最適化</th></tr></thead>
<tbody>
<tr><td>全員に同じ対応</td><td>VIP → 専任担当+月次訪問</td></tr>
<tr><td>リソースが分散</td><td>成長顧客 → 提案強化+育成</td></tr>
<tr><td>成果が出にくい</td><td>維持顧客 → 効率的フォロー</td></tr>
<tr><td></td><td>休眠顧客 → 掘り起こし</td></tr>
</tbody>
</table>

<h2>ABC分析（パレート分析）</h2>
<p>売上貢献度で顧客をA/B/Cにランク分けします。<strong>80:20の法則（パレートの法則）</strong>により、上位20%の顧客が売上の80%を生み出します。</p>

<table>
<thead><tr><th>ランク</th><th>売上構成比</th><th>顧客数比</th><th>営業戦略</th></tr></thead>
<tbody>
<tr><td><strong>A</strong></td><td>上位80%</td><td>約20%</td><td>専任担当、月次訪問、深耕提案、経営層アプローチ</td></tr>
<tr><td><strong>B</strong></td><td>次の15%</td><td>約30%</td><td>定期フォロー、アップセル提案、A昇格の育成</td></tr>
<tr><td><strong>C</strong></td><td>残り5%</td><td>約50%</td><td>メール中心、セミナー誘導、自動化対応</td></tr>
</tbody>
</table>

<h2>RFM分析</h2>
<p>RFM分析は3つの軸で顧客を分類します。</p>
<table>
<thead><tr><th>軸</th><th>名称</th><th>意味</th><th>判断基準</th></tr></thead>
<tbody>
<tr><td><strong>R</strong></td><td>Recency（最新購買日）</td><td>最後に取引したのはいつ？</td><td>直近ほど良い</td></tr>
<tr><td><strong>F</strong></td><td>Frequency（購買頻度）</td><td>何回取引した？</td><td>多いほど良い</td></tr>
<tr><td><strong>M</strong></td><td>Monetary（購買金額）</td><td>いくら使った？</td><td>大きいほど良い</td></tr>
</tbody>
</table>

<h3>RFMセグメント別アクション</h3>
<table>
<thead><tr><th>セグメント</th><th>R</th><th>F</th><th>M</th><th>アクション</th></tr></thead>
<tbody>
<tr><td>最優良顧客</td><td>5</td><td>5</td><td>5</td><td>VIP対応、特別提案、経営層リレーション</td></tr>
<tr><td>優良顧客</td><td>4-5</td><td>4-5</td><td>3-4</td><td>アップセル提案、満足度調査</td></tr>
<tr><td>新規有望</td><td>5</td><td>1-2</td><td>3-5</td><td>オンボーディング強化、2回目受注促進</td></tr>
<tr><td>休眠顧客</td><td>1-2</td><td>3-5</td><td>3-5</td><td>掘り起こしキャンペーン、理由ヒアリング</td></tr>
<tr><td>離反危険</td><td>1-2</td><td>1-2</td><td>3-5</td><td>緊急フォロー、離反原因の調査</td></tr>
</tbody>
</table>

<h2>業界×ニーズマトリクス</h2>
<p>BtoB営業では<strong>属性（企業規模）×ニーズ（課題の緊急度）</strong>の2軸が実用的です。</p>
<table>
<thead><tr><th></th><th>緊急度 低</th><th>緊急度 中</th><th>緊急度 高</th></tr></thead>
<tbody>
<tr><td><strong>大企業</strong></td><td>情報提供ゾーン</td><td>育成ゾーン</td><td>即提案ゾーン</td></tr>
<tr><td><strong>中小企業</strong></td><td>低優先ゾーン</td><td>ナーチャリング</td><td>クイックウィン</td></tr>
</tbody>
</table>

<div class="info-box warning">
<div class="info-box-title">ポイントまとめ</div>
<ul>
<li>ABC分析で「誰が売上を支えているか」を把握する</li>
<li>RFM分析で「いつ」「何回」「いくら」の3軸で顧客を分類する</li>
<li>セグメントごとに異なる営業アクションを設計する</li>
</ul>
</div>
`,
            quiz: [
                { id: "q103_1", type: "choice", question: "ABC分析（パレートの法則）で、上位20%の顧客が生み出す売上の割合はどれですか？", options: ["50%", "60%", "80%", "95%"], answer: 2, explanation: "パレートの法則（80:20の法則）により、上位20%の顧客が売上の80%を生み出します。" },
                { id: "q103_2", type: "choice", question: "RFM分析の「F」は何を表しますか？", options: ["Financial（財務）", "Frequency（頻度）", "Forecast（予測）", "Feedback（フィードバック）"], answer: 1, explanation: "RFMのFはFrequency（購買頻度）を表します。R=Recency、M=Monetaryです。" },
                { id: "q103_3", type: "choice", question: "RFMスコアが R=1, F=3, M=4 の顧客は、どのセグメントに該当しますか？", options: ["最優良顧客", "新規有望顧客", "休眠顧客", "低関与顧客"], answer: 2, explanation: "Rが低く（最近の取引がない）、FとMが中〜高の顧客は「休眠顧客」です。過去には頻繁に取引していた優良顧客が離れている状態です。" }
            ]
        }
    ]
};
