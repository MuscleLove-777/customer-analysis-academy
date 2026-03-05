/* ============================================
   Customer Analysis Academy - Level 2: 受注・失注分析
   ============================================ */

const LEVEL2_DATA = {
    id: 2,
    title: "受注・失注分析",
    icon: "🔍",
    description: "勝ちパターンの言語化と負けから学ぶ手法を習得する",
    modules: [
        {
            id: 201,
            title: "受注分析 - 勝ちパターンを言語化する",
            duration: "20分",
            content: `
<h2>受注要因の分解フレームワーク（WIN分析）</h2>
<p>受注は単一の理由ではなく、<strong>5つの要因の掛け算</strong>で決まります。</p>

<table>
<thead><tr><th>要因</th><th>具体例</th></tr></thead>
<tbody>
<tr><td><strong>1. 顧客要因</strong></td><td>課題の深刻度が高かった / 予算が確保されていた / 決裁者と直接話せた</td></tr>
<tr><td><strong>2. 提案要因</strong></td><td>顧客課題にドンピシャの提案 / ROI試算が明確 / 導入実績（事例）が刺さった</td></tr>
<tr><td><strong>3. プロセス要因</strong></td><td>初回訪問からクローズまで適切なペース / キーマン全員にアプローチ / PoCで効果を体感</td></tr>
<tr><td><strong>4. 競合要因</strong></td><td>競合が提案していなかった / 競合より技術的優位性 / 既存ベンダーへの不満が強い</td></tr>
<tr><td><strong>5. タイミング要因</strong></td><td>年度予算策定時期に提案 / 法改正で対応が急務 / 既存契約の更新時期</td></tr>
</tbody>
</table>

<h2>受注分析テンプレート</h2>
<p>受注した全案件に対して以下を記録・分析します。</p>
<table>
<thead><tr><th>分析項目</th><th>具体的に記録すること</th></tr></thead>
<tbody>
<tr><td>受注決定打</td><td>最終的に受注を決めた1番の要因は何か？</td></tr>
<tr><td>顧客の本質課題</td><td>表面ニーズではなく、根本にあった課題は？</td></tr>
<tr><td>決裁プロセス</td><td>誰がどの順番で意思決定したか？</td></tr>
<tr><td>競合状況</td><td>競合は何社？何が自社の勝因だったか？</td></tr>
<tr><td>商談期間</td><td>初回接触から受注まで何日？各フェーズ何日？</td></tr>
<tr><td>接触回数</td><td>訪問○回、電話○回、メール○回</td></tr>
<tr><td>キーマン</td><td>推進者（Champion）は誰だったか？</td></tr>
<tr><td>再現ポイント</td><td>この勝ちパターンを他案件に応用するなら？</td></tr>
</tbody>
</table>

<h2>トップ営業の行動パターン分析</h2>
<table>
<thead><tr><th>指標</th><th>トップ20%</th><th>平均</th></tr></thead>
<tbody>
<tr><td>初回訪問→提案書送付</td><td>3日以内</td><td>7日以上</td></tr>
<tr><td>決裁者面談率</td><td>85%</td><td>45%</td></tr>
<tr><td>商談1件あたり接触回数</td><td>6.2回</td><td>3.8回</td></tr>
<tr><td>提案修正回数</td><td>2.5回</td><td>1.2回</td></tr>
<tr><td>PoC実施率</td><td>60%</td><td>15%</td></tr>
<tr><td>受注率</td><td>42%</td><td>18%</td></tr>
<tr><td>平均単価</td><td>850万</td><td>420万</td></tr>
</tbody>
</table>

<div class="info-box tip">
<div class="info-box-title">トップ営業の特徴</div>
トップ営業は「接触の量と質」の両方が高いことがデータで示されています。単に訪問回数が多いだけでなく、決裁者への面談率やPoC実施率が高い点が重要です。
</div>

<h2>受注パターンの類型化</h2>
<table>
<thead><tr><th>パターン</th><th>流れ</th><th>特徴</th></tr></thead>
<tbody>
<tr><td><strong>A: 課題解決型受注</strong></td><td>課題ヒアリング → 深掘り → カスタマイズ提案 → 受注</td><td>顧客の課題が明確。提案のフィット感が決め手</td></tr>
<tr><td><strong>B: 関係構築型受注</strong></td><td>情報提供 → 信頼構築（長期） → 相談持ちかけ → 受注</td><td>時間はかかるが単価が大きい。リプレイス案件に多い</td></tr>
<tr><td><strong>C: タイミング型受注</strong></td><td>外部環境変化 → ニーズ発生 → 即時提案 → 受注</td><td>法改正・事故・競合撤退等。スピードが命</td></tr>
</tbody>
</table>

<div class="info-box warning">
<div class="info-box-title">ポイントまとめ</div>
<ul>
<li>受注要因を5つの軸（顧客・提案・プロセス・競合・タイミング）で分解する</li>
<li>トップ営業の行動パターンを定量データで可視化する</li>
<li>受注パターンを類型化し、再現可能な「型」にする</li>
</ul>
</div>
`,
            quiz: [
                { id: "q201_1", type: "choice", question: "WIN分析における受注要因の5つの軸に含まれないものはどれですか？", options: ["顧客要因", "タイミング要因", "コスト要因", "競合要因"], answer: 2, explanation: "受注要因の5軸は顧客・提案・プロセス・競合・タイミングです。コスト要因は独立した軸ではありません。" },
                { id: "q201_2", type: "choice", question: "トップ営業（上位20%）と平均的営業の差が最も大きい指標はどれですか？", options: ["商談あたり接触回数", "PoC実施率", "提案修正回数", "受注率"], answer: 1, explanation: "PoC実施率はトップ20%が60%に対し平均15%と、4倍の差があり最も差が大きい指標です。" },
                { id: "q201_3", type: "choice", question: "法改正への対応で急いで提案し受注するパターンは何型ですか？", options: ["課題解決型", "関係構築型", "タイミング型", "価格競争型"], answer: 2, explanation: "外部環境変化（法改正等）をきっかけにスピード重視で提案するのは「タイミング型受注」です。" }
            ]
        },
        {
            id: 202,
            title: "失注分析 - 負けから学ぶ",
            duration: "20分",
            content: `
<h2>失注原因の8分類</h2>
<p>失注原因を構造的に分類することで、改善すべきポイントが明確になります。</p>

<h3>自社起因の失注</h3>
<table>
<thead><tr><th>分類</th><th>具体例</th></tr></thead>
<tbody>
<tr><td><strong>1. 価格</strong></td><td>競合より高い、予算オーバー、ROI説明不足</td></tr>
<tr><td><strong>2. 製品/サービス</strong></td><td>機能不足、カスタマイズ不可、技術的要件を満たせない</td></tr>
<tr><td><strong>3. 提案</strong></td><td>課題理解が浅い、提案が的外れ、資料の質が低い</td></tr>
<tr><td><strong>4. 営業プロセス</strong></td><td>レスポンスが遅い、フォロー不足、キーマンに会えなかった</td></tr>
</tbody>
</table>

<h3>外部起因の失注</h3>
<table>
<thead><tr><th>分類</th><th>具体例</th></tr></thead>
<tbody>
<tr><td><strong>5. 競合</strong></td><td>競合の方が優れていた、既存ベンダーの継続</td></tr>
<tr><td><strong>6. 顧客事情</strong></td><td>予算凍結、組織変更、担当者異動、プロジェクト中止</td></tr>
<tr><td><strong>7. タイミング</strong></td><td>提案のタイミングが早すぎ/遅すぎ、予算サイクルに合わなかった</td></tr>
<tr><td><strong>8. 政治/関係</strong></td><td>社内政治、上層部の意向、個人的な関係性</td></tr>
</tbody>
</table>

<h2>「価格が理由」の深掘り</h2>
<div class="info-box warning">
<div class="info-box-title">「価格で負けた」は思考停止ワード</div>
<p>「価格が高い」の裏にある真因を深掘りする必要があります。</p>
<ul>
<li><strong>本当に価格差が原因？</strong> → 競合との差が10%以内なら価値訴求で挽回可能</li>
<li><strong>ROIを説明できていない</strong> → 「高い」のではなく「価値が伝わっていない」可能性</li>
<li><strong>そもそも予算がなかった</strong> → 早期の予算確認で回避可能だった</li>
<li><strong>価格は建前で本音は別</strong> → 営業対応への不満、信頼不足の可能性</li>
</ul>
</div>

<h2>失注インタビューの実施方法</h2>
<table>
<thead><tr><th>項目</th><th>内容</th></tr></thead>
<tbody>
<tr><td>タイミング</td><td>失注判明から1-2週間以内（記憶が鮮明なうちに）</td></tr>
<tr><td>実施者</td><td><strong>担当営業以外</strong>が望ましい（本音が出やすい）</td></tr>
<tr><td>所要時間</td><td>15-20分（長すぎると断られる）</td></tr>
<tr><td>アポ取り</td><td>「今後の参考のために」と学びの姿勢で依頼</td></tr>
</tbody>
</table>

<h3>質問テンプレート（5問構成）</h3>
<ol>
<li><strong>Q1.</strong> 今回の選定で、最も重視されたポイントは何でしたか？（選定基準の確認）</li>
<li><strong>Q2.</strong> 弊社の提案で「ここは良かった」と思われた点はありましたか？（良い点から入ると本音が出やすい）</li>
<li><strong>Q3.</strong> 逆に「ここが足りなかった」と感じられた点は何でしたか？（失注の核心に迫る）</li>
<li><strong>Q4.</strong> 最終的に採用された企業の決め手は何でしたか？（競合の強みを把握）</li>
<li><strong>Q5.</strong> もし弊社がもう一度提案できるとしたら、どのような点を改善すべきでしょうか？（具体的な改善ポイント）</li>
</ol>

<h2>失注案件の再アプローチ戦略</h2>
<table>
<thead><tr><th>失注理由</th><th>再アプローチ時期</th><th>アプローチ方法</th></tr></thead>
<tbody>
<tr><td>価格</td><td>次年度予算策定期</td><td>新価格プラン・パッケージ提案</td></tr>
<tr><td>機能不足</td><td>新機能リリース時</td><td>アップデート情報の提供</td></tr>
<tr><td>競合採用</td><td>契約更新の半年前</td><td>満足度の変化を確認</td></tr>
<tr><td>予算凍結</td><td>3-6ヶ月後</td><td>業績改善のニュース確認後</td></tr>
<tr><td>タイミング</td><td>次の予算サイクル</td><td>事前に情報提供を継続</td></tr>
</tbody>
</table>

<div class="info-box warning">
<div class="info-box-title">ポイントまとめ</div>
<ul>
<li>失注原因を8分類で構造的に捉え、パレート図で「見える化」する</li>
<li>「価格が理由」は深掘りが必要。真因は別にある可能性が高い</li>
<li>失注インタビューは担当営業以外が実施すると本音を引き出せる</li>
<li>失注分析レポートは月次/四半期で作成し、組織の学びにする</li>
</ul>
</div>
`,
            quiz: [
                { id: "q202_1", type: "choice", question: "失注インタビューの実施者として最も望ましいのは誰ですか？", options: ["担当営業本人", "担当営業以外の営業メンバー", "社長", "外部コンサルタント"], answer: 1, explanation: "担当営業以外が実施することで、顧客が本音を話しやすくなります。" },
                { id: "q202_2", type: "choice", question: "失注原因の8分類のうち「自社起因」に該当するものはどれですか？", options: ["競合優位", "予算凍結", "提案品質", "社内政治"], answer: 2, explanation: "自社起因は価格・製品/サービス・提案・営業プロセスの4つです。提案品質は自社起因に該当します。" },
                { id: "q202_3", type: "choice", question: "「価格が高い」という失注理由の深掘りで、適切でないアプローチはどれですか？", options: ["競合との価格差を確認する", "ROIを説明できていたか振り返る", "すぐに値引きを提示する", "予算確認のタイミングを検証する"], answer: 2, explanation: "すぐに値引きは思考停止です。まず真因を探り、価値訴求や予算確認タイミングの改善など本質的な対策を取るべきです。" }
            ]
        },
        {
            id: 203,
            title: "失注分析レポートの作成と活用",
            duration: "15分",
            content: `
<h2>失注分析レポートの構成</h2>
<p><strong>月次/四半期で失注分析レポートを作成し、組織で共有します。</strong></p>

<div class="info-box tip">
<div class="info-box-title">失注分析レポート テンプレート例</div>
<ul>
<li><strong>対象期間：</strong>2026年1月〜3月</li>
<li><strong>失注件数：</strong>28件（前期比 +3件）</li>
<li><strong>失注金額：</strong>1億2,300万円</li>
<li><strong>失注原因TOP3：</strong>
  <ol>
  <li>価格（32%）→ うち「ROI未説明」が60%</li>
  <li>競合優位（25%）→ X社に12件、Y社に5件</li>
  <li>顧客事情（18%）→ 予算凍結が主因</li>
  </ol>
</li>
<li><strong>改善アクション：</strong>
  <ul>
  <li>ROI試算ツールを全営業に展開（4月中）</li>
  <li>X社対策：差別化ポイント資料を作成（4月中）</li>
  <li>予算確認を初回訪問の必須項目に追加</li>
  </ul>
</li>
</ul>
</div>

<h2>フェーズ別失注率の分析</h2>
<p>失注がどの商談フェーズで発生しているかを分析することで、ボトルネックが明確になります。</p>
<table>
<thead><tr><th>フェーズ</th><th>失注率</th><th>判定</th><th>対策</th></tr></thead>
<tbody>
<tr><td>初期（リード→商談化）</td><td>65%</td><td>やや高い</td><td>リードの質を改善、初回ヒアリングの精度向上</td></tr>
<tr><td>中期（提案→見積）</td><td>40%</td><td>改善余地あり</td><td>提案内容の磨き込み、競合対策強化</td></tr>
<tr><td>後期（見積→内示）</td><td>15%</td><td>健全</td><td>現状維持、条件交渉力の向上</td></tr>
</tbody>
</table>

<h2>失注パレート図の活用</h2>
<p>失注原因をパレート図（棒グラフ＋累積折れ線）で可視化することで、どの原因に集中的に対策を打つべきかが一目でわかります。</p>
<table>
<thead><tr><th>失注原因</th><th>割合</th><th>累積</th></tr></thead>
<tbody>
<tr><td>価格</td><td>35%</td><td>35%</td></tr>
<tr><td>競合優位</td><td>25%</td><td>60%</td></tr>
<tr><td>製品機能</td><td>15%</td><td>75%</td></tr>
<tr><td>提案品質</td><td>10%</td><td>85%</td></tr>
<tr><td>顧客事情</td><td>8%</td><td>93%</td></tr>
<tr><td>営業プロセス</td><td>5%</td><td>98%</td></tr>
<tr><td>その他</td><td>2%</td><td>100%</td></tr>
</tbody>
</table>

<div class="info-box tip">
<div class="info-box-title">上位3つで75%をカバー</div>
パレートの法則により、上位3つの失注原因（価格・競合・機能）で全体の75%をカバーしています。ここに集中的にリソースを投下すべきです。
</div>

<h2>組織での失注データ活用ルール</h2>
<table>
<thead><tr><th>ルール</th><th>理由</th></tr></thead>
<tbody>
<tr><td>失注を「恥」としない文化を作る</td><td>隠す文化だとデータが集まらない</td></tr>
<tr><td>失注レビューを定例化する</td><td>月次/四半期で習慣化する</td></tr>
<tr><td>改善アクションまで決める</td><td>分析だけで終わらせない</td></tr>
<tr><td>効果検証を行う</td><td>施策の有効性を確認する</td></tr>
</tbody>
</table>

<div class="info-box warning">
<div class="info-box-title">ポイントまとめ</div>
<ul>
<li>失注分析レポートは月次/四半期で定期的に作成・共有する</li>
<li>パレート図で上位原因に集中対策を打つ</li>
<li>失注データは「恥」ではなく「組織の財産」として活用する</li>
</ul>
</div>
`,
            quiz: [
                { id: "q203_1", type: "choice", question: "失注分析レポートの作成頻度として推奨されるのはどれですか？", options: ["年1回", "半年に1回", "月次/四半期", "毎日"], answer: 2, explanation: "失注分析レポートは月次/四半期で作成し、組織で共有することが推奨されます。" },
                { id: "q203_2", type: "choice", question: "パレートの法則によると、上位何%の原因で全体の大部分をカバーしますか？", options: ["10%", "20%", "50%", "80%"], answer: 1, explanation: "パレートの法則（80:20の法則）では、上位20%の原因が全体の約80%を占めます。" },
                { id: "q203_3", type: "choice", question: "失注データの組織活用で最も重要なルールはどれですか？", options: ["失注を厳しく叱責する", "失注を隠さない文化を作る", "失注した営業を異動させる", "失注データを非公開にする"], answer: 1, explanation: "失注を「恥」としない文化を作ることが最も重要です。隠す文化ではデータが集まらず、組織の学びになりません。" }
            ]
        }
    ]
};
