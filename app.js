const STORAGE_KEY = "ayla-log-exp-progress-v2";

const BAC_BRANCH_LABELS = {
  all: "الكل",
  science: "علوم تجريبية",
  math: "رياضيات",
  tech: "تقني رياضي",
  management: "تسيير واقتصاد",
};

const bacFilters = {
  branch: "all",
  year: "all",
};

function renderExerciseGraph(kind) {
  const specs = {
    asymptote27: {
      title: "تمرين 27: المقارب المائل y=2x+1",
      xRange: [-1.5, 4],
      yRange: [-2.5, 10],
      curves: [
        { label: "C", color: "#ef4444", fn: (x) => 2 * x + 1 - Math.exp(-x) },
        { label: "D", color: "#2563eb", fn: (x) => 2 * x + 1, dash: true },
      ],
      notes: [{ x: 1.9, y: 5.6, text: "C أسفل D", color: "#ef4444" }],
    },
    asymptote28: {
      title: "تمرين 28: المقارب y=-x+2 عند +∞",
      xRange: [-0.5, 6],
      yRange: [-5, 8],
      curves: [
        { label: "C", color: "#ef4444", fn: (x) => -x + 2 + 3 * Math.exp(2 - x) },
        { label: "D", color: "#2563eb", fn: (x) => -x + 2, dash: true },
      ],
      notes: [{ x: 3.7, y: -1.8, text: "C يقترب من D", color: "#2563eb" }],
    },
    transforms41: {
      title: "تمرين 41: تحويلات منحنى e^x",
      xRange: [-3, 2.2],
      yRange: [-4, 6],
      curves: [
        { label: "e^x", color: "#111827", fn: (x) => Math.exp(x) },
        { label: "e^x+1", color: "#2563eb", fn: (x) => Math.exp(x) + 1 },
        { label: "-e^x", color: "#16a34a", fn: (x) => -Math.exp(x) },
        { label: "e^x-2", color: "#f97316", fn: (x) => Math.exp(x) - 2 },
        { label: "|e^x-2|", color: "#d946ef", fn: (x) => Math.abs(Math.exp(x) - 2) },
      ],
    },
    match42: {
      title: "تمرين 42: مطابقة الدوال مع المنحنيات",
      xRange: [-3, 1.6],
      yRange: [-5, 7],
      curves: [
        { label: "f=e^x", color: "#ef4444", fn: (x) => Math.exp(x) },
        { label: "g=-e^x", color: "#2563eb", fn: (x) => -Math.exp(x) },
        { label: "h=1-e^x", color: "#16a34a", fn: (x) => 1 - Math.exp(x) },
        { label: "k=1+2e^x", color: "#d946ef", fn: (x) => 1 + 2 * Math.exp(x) },
      ],
    },
    min43: {
      title: "تمرين 43: القيمة الصغرى f(0)=2",
      xRange: [-3, 4],
      yRange: [0, 10],
      curves: [{ label: "C", color: "#ef4444", fn: (x) => x + 1 + Math.exp(-x) }],
      points: [{ x: 0, y: 2, label: "min(0,2)", color: "#111827" }],
    },
    oblique44: {
      title: "تمرين 44: C أسفل المقارب D",
      xRange: [-2, 6],
      yRange: [-8, 6],
      curves: [
        { label: "C", color: "#ef4444", fn: (x) => 0.5 * x + 1 - Math.exp(-x) },
        { label: "D", color: "#2563eb", fn: (x) => 0.5 * x + 1, dash: true },
      ],
      notes: [{ x: 2.2, y: 2.9, text: "D: y=x/2+1", color: "#2563eb" }],
    },
    sigmoid45: {
      title: "تمرين 45: تزايد بين المقاربين y=-3 و y=1",
      xRange: [-2, 2],
      yRange: [-4, 2],
      curves: [
        { label: "C", color: "#ef4444", fn: (x) => (Math.exp(4 * x) - 3) / (Math.exp(4 * x) + 1) },
        { label: "y=1", color: "#2563eb", fn: () => 1, dash: true },
        { label: "y=-3", color: "#2563eb", fn: () => -3, dash: true },
      ],
    },
    sigmoid46: {
      title: "تمرين 46: منحنى بين y=3/2 و y=2",
      xRange: [-5, 5],
      yRange: [1.2, 2.2],
      curves: [
        { label: "C", color: "#ef4444", fn: (x) => (4 * Math.exp(x) + 3) / (2 * (Math.exp(x) + 1)) },
        { label: "y=2", color: "#2563eb", fn: () => 2, dash: true },
        { label: "y=3/2", color: "#16a34a", fn: () => 1.5, dash: true },
      ],
    },
  };
  const spec = specs[kind];
  if (!spec) return "";
  const width = 520;
  const height = 320;
  const pad = 42;
  const [xMin, xMax] = spec.xRange;
  const [yMin, yMax] = spec.yRange;
  const sx = (x) => pad + ((x - xMin) / (xMax - xMin)) * (width - 2 * pad);
  const sy = (y) => height - pad - ((y - yMin) / (yMax - yMin)) * (height - 2 * pad);
  const inRange = (y) => Number.isFinite(y) && y >= yMin - (yMax - yMin) * 0.3 && y <= yMax + (yMax - yMin) * 0.3;
  const pathFor = (fn) => {
    const parts = [];
    let drawing = false;
    for (let i = 0; i <= 180; i++) {
      const x = xMin + (i / 180) * (xMax - xMin);
      const y = fn(x);
      if (!inRange(y)) {
        drawing = false;
        continue;
      }
      parts.push(`${drawing ? "L" : "M"}${sx(x).toFixed(1)} ${sy(y).toFixed(1)}`);
      drawing = true;
    }
    return parts.join(" ");
  };
  const ticks = [];
  for (let i = Math.ceil(xMin); i <= Math.floor(xMax); i++) ticks.push(`<line x1="${sx(i).toFixed(1)}" y1="${pad}" x2="${sx(i).toFixed(1)}" y2="${height - pad}" />`);
  for (let j = Math.ceil(yMin); j <= Math.floor(yMax); j++) ticks.push(`<line x1="${pad}" y1="${sy(j).toFixed(1)}" x2="${width - pad}" y2="${sy(j).toFixed(1)}" />`);
  const xAxis = yMin <= 0 && yMax >= 0 ? `<line x1="${pad}" y1="${sy(0).toFixed(1)}" x2="${width - pad}" y2="${sy(0).toFixed(1)}" />` : "";
  const yAxis = xMin <= 0 && xMax >= 0 ? `<line x1="${sx(0).toFixed(1)}" y1="${pad}" x2="${sx(0).toFixed(1)}" y2="${height - pad}" />` : "";
  const curves = spec.curves.map((curve) => `<path d="${pathFor(curve.fn)}" fill="none" stroke="${curve.color}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" ${curve.dash ? 'stroke-dasharray="8 7"' : ""}></path>`).join("");
  const labels = spec.curves.map((curve, index) => {
    const x = xMin + (0.72 - index * 0.08) * (xMax - xMin);
    const y = curve.fn(x);
    if (!inRange(y)) return "";
    return `<text x="${sx(x).toFixed(1)}" y="${sy(y).toFixed(1)}" fill="${curve.color}">${curve.label}</text>`;
  }).join("");
  const points = (spec.points || []).map((p) => `<circle cx="${sx(p.x).toFixed(1)}" cy="${sy(p.y).toFixed(1)}" r="4.5" fill="${p.color}"></circle><text x="${(sx(p.x) + 8).toFixed(1)}" y="${(sy(p.y) - 8).toFixed(1)}" fill="${p.color}">${p.label}</text>`).join("");
  const notes = (spec.notes || []).map((note) => `<text x="${sx(note.x).toFixed(1)}" y="${sy(note.y).toFixed(1)}" fill="${note.color}">${note.text}</text>`).join("");
  return `
    <figure class="mini-graph lesson-graph zoomable-graph" data-zoom-figure>
      <button class="graph-zoom-btn" type="button" data-zoom-graph aria-label="تكبير الرسم البياني">تكبير</button>
      <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${spec.title}">
        <rect x="0" y="0" width="${width}" height="${height}" fill="#fffdf2"></rect>
        <g stroke="#d6d3d1" stroke-width="1" opacity="0.8">${ticks.join("")}</g>
        <g stroke="#111827" stroke-width="2">${xAxis}${yAxis}</g>
        ${curves}
        <g font-family="Times New Roman, serif" font-size="15" font-weight="700">${labels}${points}${notes}</g>
        <text x="${width / 2}" y="24" text-anchor="middle" font-family="Tajawal, Arial, sans-serif" font-size="15" font-weight="800" fill="#111827">${spec.title}</text>
      </svg>
      <figcaption>${spec.title}</figcaption>
    </figure>
  `;
}

const modules = [
  {
    id: "exp-function",
    title: "الدالة الأسية",
    icon: "📈",
    summary: "تعريف الدالة الأسية، خواصها الجبرية، تغيراتها، وتمثيلها البياني.",
    lesson: `
      <article class="structured-lesson">
        <header class="structured-lesson-hero">
          <span>محور 1</span>
          <h3>الدالة الأسية <b>exp</b></h3>
        </header>
        <section class="definition-box">
          <strong>تعريف:</strong>
          <p>الدالة الأسية هي الدالة المعرفة على <span class="math">R</span> بـ <span class="math">x ↦ e^x</span>، حيث <span class="math">e ≈ 2.718</span>.</p>
        </section>
        <section class="property-box">
          <strong>خواص أساسية:</strong>
          <div class="math-equation">e^0 = 1 ، e^1 = e ، e^x &gt; 0 لكل x ∈ R</div>
          <div class="math-equation">e^x × e^y = e^(x+y) ، e^x / e^y = e^(x-y) ، (e^x)^n = e^(nx)</div>
        </section>
        <section class="lesson-block">
          <h4>دراسة الدالة الأسية</h4>
          <div class="method-box">
            <strong>1. اتجاه تغير الدالة الأسية</strong>
            <p><strong>خاصية 1:</strong> من أجل كل عدد حقيقي <span class="math">x</span>:</p>
            <div class="math-equation">e^x &gt; 0</div>
            <p><strong>خاصية 2:</strong> الدالة الأسية متزايدة تماما على <span class="math">R</span>.</p>
            <p>ومن ثم إذا كان <span class="math">a&lt;b</span> فإن <span class="math">e^a&lt;e^b</span>.</p>
            <p><strong>نتائج:</strong> من أجل كل عدد حقيقي <span class="math">x</span>:
              إذا كان <span class="math">x&lt;0</span> فإن <span class="math">0&lt;e^x&lt;1</span>،
              وإذا كان <span class="math">x&gt;0</span> فإن <span class="math">e^x&gt;1</span>.
            </p>
          </div>
          <div class="property-box">
            <strong>2. النهايات</strong>
            <div class="math-equation">lim e^x = 0 عند x→-∞</div>
            <div class="math-equation">lim e^x = +∞ عند x→+∞</div>
          </div>
          <div class="activity-visual-grid">
            <figure class="mini-graph">
              <svg viewBox="0 0 280 260" role="img" aria-label="التمثيل البياني للدالة الأسية">
                <rect x="0" y="0" width="280" height="260" fill="#fff"></rect>
                <g stroke="#d946ef" stroke-width="1">
                  <line x1="20" y1="25" x2="255" y2="25"></line><line x1="20" y1="60" x2="255" y2="60"></line><line x1="20" y1="95" x2="255" y2="95"></line><line x1="20" y1="130" x2="255" y2="130"></line><line x1="20" y1="165" x2="255" y2="165"></line><line x1="20" y1="200" x2="255" y2="200"></line><line x1="20" y1="235" x2="255" y2="235"></line>
                  <line x1="35" y1="20" x2="35" y2="240"></line><line x1="70" y1="20" x2="70" y2="240"></line><line x1="105" y1="20" x2="105" y2="240"></line><line x1="140" y1="20" x2="140" y2="240"></line><line x1="175" y1="20" x2="175" y2="240"></line><line x1="210" y1="20" x2="210" y2="240"></line><line x1="245" y1="20" x2="245" y2="240"></line>
                </g>
                <g stroke="#111" stroke-width="2">
                  <line x1="20" y1="200" x2="260" y2="200"></line>
                  <line x1="140" y1="20" x2="140" y2="240"></line>
                </g>
                <path d="M24 198 C64 197 98 192 126 181 C153 170 171 145 190 106 C204 77 220 42 241 15" fill="none" stroke="#ef4444" stroke-width="3"></path>
                <line x1="40" y1="240" x2="250" y2="30" stroke="#2563eb" stroke-width="2"></line>
                <circle cx="140" cy="165" r="4" fill="#ef4444"></circle>
                <g font-family="Times New Roman, serif" font-size="13" fill="#111">
                  <text x="145" y="198">0</text><text x="144" y="167">1</text><text x="238" y="194">3</text>
                  <text x="148" y="32">y</text><text x="253" y="214">x</text>
                  <text x="55" y="162">(C)</text><text x="214" y="80">(Δ)</text>
                </g>
              </svg>
              <figcaption>المنحنى <span class="math">(C)</span> للدالة الأسية، والمستقيم <span class="math">(Δ): y=x+1</span> مماس للمنحنى عند النقطة <span class="math">(0,1)</span>.</figcaption>
            </figure>
            <table class="variation-table">
              <tr><th>x</th><td class="interval">-∞</td><td class="interval">0</td><td class="interval">+∞</td></tr>
              <tr><th>exp'(x)</th><td>+</td><td>+</td><td>+</td></tr>
              <tr><th>e^x</th><td>0</td><td>↗ 1 ↗</td><td>+∞</td></tr>
            </table>
          </div>
          <div class="method-box">
            <strong>3. جدول التغيرات والتمثيل البياني</strong>
            <p>لدينا <span class="math">exp(0)=1</span> و <span class="math">exp'(0)=1</span>، إذن يقبل المنحنى <span class="math">(C)</span> عند النقطة ذات الفاصلة <span class="math">0</span> مماسا معادلته:</p>
            <div class="math-equation">y=x+1</div>
            <p>ومن تعريف العدد المشتق:</p>
            <div class="math-equation">lim [(e^x-1)/x] = 1 عند x→0</div>
            <p><strong>نتيجة:</strong> من أجل كل عدد حقيقي <span class="math">x</span>:</p>
            <div class="math-equation">e^x ≥ x+1</div>
          </div>
        </section>
        <section class="lesson-block">
          <h4>التغيرات</h4>
          <p>الدالة <span class="math">exp</span> متزايدة تمامًا على <span class="math">R</span>. ومنه إذا كان <span class="math">a &lt; b</span> فإن <span class="math">e^a &lt; e^b</span>.</p>
          <div class="math-equation">lim x→-∞ e^x = 0 ، lim x→+∞ e^x = +∞</div>
        </section>
        <section class="lesson-block">
          <h4>الدوال الأسية <span class="math">x ↦ e^{kx}</span></h4>
          <div class="method-box">
            <strong>1. حلول المعادلة <span class="math">f'=kf</span></strong>
            <p><strong>مبرهنة:</strong> ليكن <span class="math">k</span> عددا حقيقيا. توجد دالة وحيدة قابلة للاشتقاق على <span class="math">R</span> بحيث:</p>
            <div class="math-equation">f'=kf و f(0)=1</div>
            <p>وهي الدالة:</p>
            <div class="math-equation">f(x)=e^{kx}</div>
          </div>
          <figure class="mini-graph lesson-graph">
            <svg viewBox="0 0 460 280" role="img" aria-label="منحنيات الدوال e^{kx}">
              <rect x="0" y="0" width="460" height="280" fill="#ffffff"></rect>
              <g stroke="#d7dde3" stroke-width="1">
                <line x1="35" y1="30" x2="430" y2="30"></line><line x1="35" y1="75" x2="430" y2="75"></line><line x1="35" y1="120" x2="430" y2="120"></line><line x1="35" y1="165" x2="430" y2="165"></line><line x1="35" y1="210" x2="430" y2="210"></line><line x1="35" y1="255" x2="430" y2="255"></line>
                <line x1="55" y1="25" x2="55" y2="260"></line><line x1="115" y1="25" x2="115" y2="260"></line><line x1="175" y1="25" x2="175" y2="260"></line><line x1="235" y1="25" x2="235" y2="260"></line><line x1="295" y1="25" x2="295" y2="260"></line><line x1="355" y1="25" x2="355" y2="260"></line><line x1="415" y1="25" x2="415" y2="260"></line>
              </g>
              <g stroke="#111" stroke-width="2">
                <line x1="35" y1="210" x2="435" y2="210"></line>
                <line x1="235" y1="25" x2="235" y2="260"></line>
              </g>
              <path d="M85.0 207.8 L87.7 207.6 L90.5 207.5 L93.2 207.4 L96.0 207.2 L98.7 207.1 L101.4 206.9 L104.2 206.7 L106.9 206.5 L109.6 206.3 L112.4 206.1 L115.1 205.9 L117.8 205.7 L120.6 205.4 L123.3 205.2 L126.1 204.9 L128.8 204.6 L131.5 204.3 L134.3 204.0 L137.0 203.7 L139.8 203.3 L142.5 202.9 L145.2 202.5 L148.0 202.1 L150.7 201.7 L153.4 201.2 L156.2 200.7 L158.9 200.2 L161.7 199.6 L164.4 199.0 L167.1 198.4 L169.9 197.8 L172.6 197.1 L175.3 196.4 L178.1 195.6 L180.8 194.8 L183.6 193.9 L186.3 193.0 L189.0 192.1 L191.8 191.0 L194.5 190.0 L197.2 188.9 L200.0 187.7 L202.7 186.4 L205.4 185.1 L208.2 183.7 L210.9 182.2 L213.7 180.6 L216.4 179.0 L219.1 177.2 L221.9 175.4 L224.6 173.4 L227.3 171.4 L230.1 169.2 L232.8 166.9 L235.6 164.5 L238.3 161.9 L241.0 159.2 L243.8 156.4 L246.5 153.3 L249.3 150.2 L252.0 146.8 L254.7 143.2 L257.5 139.5 L260.2 135.5 L262.9 131.3 L265.7 126.9 L268.4 122.2 L271.1 117.3 L273.9 112.1 L276.6 106.5 L279.4 100.7 L282.1 94.6 L284.8 88.1 L287.6 81.2 L290.3 74.0 L293.1 66.3 L295.8 58.2 L298.5 49.7 L301.3 40.7 L304.0 31.1" fill="none" stroke="#ef4444" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M55.0 192.8 L59.4 192.4 L63.8 191.9 L68.2 191.5 L72.6 191.1 L76.9 190.6 L81.3 190.2 L85.7 189.7 L90.1 189.2 L94.5 188.7 L98.9 188.2 L103.3 187.7 L107.6 187.2 L112.0 186.6 L116.4 186.1 L120.8 185.5 L125.2 184.9 L129.6 184.4 L134.0 183.7 L138.4 183.1 L142.8 182.5 L147.1 181.8 L151.5 181.2 L155.9 180.5 L160.3 179.8 L164.7 179.1 L169.1 178.3 L173.5 177.6 L177.8 176.8 L182.2 176.0 L186.6 175.2 L191.0 174.4 L195.4 173.6 L199.8 172.7 L204.2 171.8 L208.6 170.9 L212.9 170.0 L217.3 169.0 L221.7 168.1 L226.1 167.1 L230.5 166.1 L234.9 165.0 L239.3 164.0 L243.7 162.9 L248.0 161.8 L252.4 160.6 L256.8 159.4 L261.2 158.2 L265.6 157.0 L270.0 155.8 L274.4 154.5 L278.8 153.2 L283.1 151.8 L287.5 150.4 L291.9 149.0 L296.3 147.6 L300.7 146.1 L305.1 144.6 L309.5 143.1 L313.9 141.5 L318.3 139.8 L322.6 138.2 L327.0 136.5 L331.4 134.7 L335.8 133.0 L340.2 131.1 L344.6 129.3 L349.0 127.4 L353.3 125.4 L357.7 123.4 L362.1 121.4 L366.5 119.3 L370.9 117.1 L375.3 114.9 L379.7 112.7 L384.1 110.4 L388.4 108.0 L392.8 105.6 L397.2 103.1 L401.6 100.6 L406.0 98.0" fill="none" stroke="#2563eb" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M55.0 92.5 L59.4 95.2 L63.8 97.8 L68.2 100.4 L72.6 103.0 L76.9 105.5 L81.3 107.9 L85.7 110.2 L90.1 112.5 L94.5 114.8 L98.9 117.0 L103.3 119.1 L107.6 121.2 L112.0 123.3 L116.4 125.3 L120.8 127.3 L125.2 129.2 L129.6 131.0 L134.0 132.9 L138.4 134.7 L142.8 136.4 L147.1 138.1 L151.5 139.8 L155.9 141.4 L160.3 143.0 L164.7 144.5 L169.1 146.0 L173.5 147.5 L177.8 149.0 L182.2 150.4 L186.6 151.8 L191.0 153.1 L195.4 154.4 L199.8 155.7 L204.2 157.0 L208.6 158.2 L212.9 159.4 L217.3 160.6 L221.7 161.7 L226.1 162.8 L230.5 163.9 L234.9 165.0 L239.3 166.0 L243.7 167.0 L248.0 168.0 L252.4 169.0 L256.8 169.9 L261.2 170.9 L265.6 171.8 L270.0 172.7 L274.4 173.5 L278.8 174.4 L283.1 175.2 L287.5 176.0 L291.9 176.8 L296.3 177.6 L300.7 178.3 L305.1 179.0 L309.5 179.8 L313.9 180.5 L318.3 181.1 L322.6 181.8 L327.0 182.5 L331.4 183.1 L335.8 183.7 L340.2 184.3 L344.6 184.9 L349.0 185.5 L353.3 186.1 L357.7 186.6 L362.1 187.2 L366.5 187.7 L370.9 188.2 L375.3 188.7 L379.7 189.2 L384.1 189.7 L388.4 190.1 L392.8 190.6 L397.2 191.1 L401.6 191.5 L406.0 191.9" fill="none" stroke="#16a34a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
              <circle cx="235" cy="165" r="4" fill="#111"></circle>
              <g font-family="Times New Roman, serif" font-size="15" fill="#111">
                <text x="438" y="224">x</text><text x="244" y="35">y</text>
                <text x="239" y="224">0</text><text x="244" y="167">1</text>
                <text x="300" y="74" fill="#ef4444">k&gt;1</text>
                <text x="345" y="74" fill="#2563eb">0&lt;k&lt;1</text>
                <text x="64" y="61" fill="#16a34a">k&lt;0</text>
                <text x="247" y="154">(0,1)</text>
              </g>
            </svg>
            <figcaption>كل المنحنيات <span class="math">y=e^{kx}</span> تمر من النقطة <span class="math">(0,1)</span>. إذا كان <span class="math">k&gt;0</span> فهي متزايدة، وإذا كان <span class="math">k&lt;0</span> فهي متناقصة.</figcaption>
          </figure>
          <div class="property-box">
            <strong>البرهان المختصر:</strong>
            <p>إذا أخذنا <span class="math">f(x)=e^{kx}</span> فإن:</p>
            <div class="math-equation">f'(x)=ke^{kx}=kf(x) و f(0)=1</div>
            <p>وللوحدانية، إذا كانت <span class="math">g</span> دالة أخرى تحقق نفس الشرطين، ندرس:</p>
            <div class="math-equation">h(x)=g(x)/f(x)</div>
            <p>فنجد <span class="math">h'(x)=0</span>، أي إن <span class="math">h</span> ثابتة، وبما أن <span class="math">h(0)=1</span> نحصل على <span class="math">g=f</span>.</p>
          </div>
        </section>
        <section class="lesson-block">
          <h4>دوال تحول المجموع إلى جداء</h4>
          <div class="method-box">
            <strong>مبرهنة:</strong>
            <p>الدوال غير المعدومة والقابلة للاشتقاق على <span class="math">R</span> التي تحقق:</p>
            <div class="math-equation">f(x+y)=f(x)f(y)</div>
            <p>من أجل كل عددين حقيقيين <span class="math">x</span> و <span class="math">y</span>، هي الدوال:</p>
            <div class="math-equation">x ↦ e^{kx}</div>
            <p>حيث <span class="math">k</span> عدد حقيقي.</p>
          </div>
          <div class="property-box">
            <strong>فكرة البرهان:</strong>
            <p>بوضع <span class="math">y=0</span> نحصل على <span class="math">f(0)=1</span>. ثم باشتقاق العلاقة بالنسبة إلى <span class="math">y</span> عند <span class="math">y=0</span> نجد:</p>
            <div class="math-equation">f'(x)=f'(0)f(x)</div>
            <p>إذا وضعنا <span class="math">k=f'(0)</span> فإن <span class="math">f'=kf</span>، ومن المبرهنة السابقة:</p>
            <div class="math-equation">f(x)=e^{kx}</div>
          </div>
        </section>
        <section class="method-box">
          <strong>طريقة:</strong>
          <p>لحل معادلة أسية نحاول توحيد الأساس أو استعمال اللوغارتم الطبيعي عند الحاجة.</p>
        </section>
      </article>
    `,
    activities: [
      {
        title: "نشاط 1: بناء خواص الدالة الأسية",
        body: "نبحث عن دالة f موجبة، مشتقتها تساوي نفسها، وتحقق f(0)=1، ثم نستنتج خواص الدالة الأسية.",
        bodyHtml: `
          <section class="activity-sheet exp-discovery">
            <header class="activity-intro">
              <span class="panel-label amber">نشاط استكشافي</span>
              <h4>لماذا نبحث عن دالة تحقق <span class="math">f'=f</span>؟</h4>
              <p>في النمو السكاني، الفوائد المركبة، والتفكك الإشعاعي تظهر كميات يتناسب تغيرها اللحظي مع قيمتها نفسها. نبحث هنا عن النموذج الأبسط: دالة موجبة تحقق <span class="math">f'=f</span> و <span class="math">f(0)=1</span>.</p>
            </header>

            <div class="activity-stage">
              <div class="stage-heading">
                <span>المرحلة 1</span>
                <h4>استكشاف عددي وبياني</h4>
                <p>ننطلق من التقريب التألفي <span class="math">f(x<sub>0</sub>+h)≈f(x<sub>0</sub>)+hf'(x<sub>0</sub>)</span>. نعوض أولا <span class="math">f'(x<sub>0</sub>)</span> بـ <span class="math">f(x<sub>0</sub>)</span>، ثم نستخرج <span class="math">f(x<sub>0</sub>)</span> فنحصل على قاعدة أويلر التقريبية.</p>
              </div>

              <div class="graphical-meaning-card">
                <strong>المعنى البياني لـ <span class="math">f'(x)=f(x)</span></strong>
                <p>عند كل نقطة <span class="math">(x, f(x))</span> من المنحنى، <strong>ميل المماس يساوي ارتفاع النقطة</strong>. بمعنى آخر: كلما ارتفع المنحنى، زاد انحداره. لهذا السبب يتسارع نمو الدالة ويكون منحنىها مقعّرا لأعلى.</p>
              </div>

              <div class="activity-visual-grid exp-visual-grid">
                <figure class="mini-graph zoomable-graph" data-zoom-figure>
                  <button class="graph-zoom-btn" type="button" data-zoom-graph aria-label="تكبير الرسم البياني">تكبير</button>
                  <svg viewBox="0 0 360 230" role="img" aria-label="تقريب بياني من نقطة عامة x0 للدالة f">
                    <rect x="0" y="0" width="360" height="230" fill="#fbff9b"></rect>
                    <text x="180" y="22" text-anchor="middle" font-family="Tajawal, Arial, sans-serif" font-size="14" font-weight="700" fill="#111">طريقة أويلر انطلاقا من التقريب التألفي</text>
                    <g stroke="#8bbf63" stroke-width="1" opacity="0.72">
                      <line x1="50" y1="45" x2="50" y2="190"></line><line x1="100" y1="45" x2="100" y2="190"></line><line x1="150" y1="45" x2="150" y2="190"></line><line x1="200" y1="45" x2="200" y2="190"></line><line x1="250" y1="45" x2="250" y2="190"></line><line x1="300" y1="45" x2="300" y2="190"></line>
                      <line x1="35" y1="60" x2="325" y2="60"></line><line x1="35" y1="95" x2="325" y2="95"></line><line x1="35" y1="130" x2="325" y2="130"></line><line x1="35" y1="165" x2="325" y2="165"></line>
                    </g>
                    <g stroke="#111" stroke-width="2">
                      <line x1="35" y1="165" x2="330" y2="165"></line>
                      <line x1="180" y1="45" x2="180" y2="190"></line>
                    </g>
                    <path d="M55 176 C95 172 130 167 158 158 C184 149 207 134 230 111 C254 87 279 60 310 30" fill="none" stroke="#ef4444" stroke-width="4" stroke-linecap="round"></path>
                    <line x1="128" y1="169" x2="260" y2="89" stroke="#2563eb" stroke-width="3" stroke-linecap="round"></line>
                    <circle cx="190" cy="138" r="5" fill="#ef4444"></circle>
                    <circle cx="145" cy="160" r="4" fill="#2563eb"></circle>
                    <circle cx="235" cy="111" r="4" fill="#2563eb"></circle>
                    <line x1="145" y1="160" x2="145" y2="165" stroke="#111" stroke-dasharray="4 3"></line>
                    <line x1="190" y1="138" x2="190" y2="165" stroke="#111" stroke-dasharray="4 3"></line>
                    <line x1="235" y1="111" x2="235" y2="165" stroke="#111" stroke-dasharray="4 3"></line>
                    <g font-family="Times New Roman, serif" font-size="13" fill="#111">
                      <text x="136" y="181">x₀-h</text><text x="184" y="181">x₀</text><text x="226" y="181">x₀+h</text>
                      <text x="197" y="136">f(x₀)</text>
                      <text x="238" y="104" fill="#2563eb">f(x₀)(1+h)</text>
                      <text x="52" y="168" fill="#2563eb">f(x₀)(1-h)</text>
                      <text x="260" y="54" fill="#ef4444">(C)</text>
                    </g>
                    <g font-family="Tajawal, Arial, sans-serif" font-size="12" fill="#111">
                      <rect x="34" y="198" width="292" height="22" rx="11" fill="rgba(255,255,255,0.72)"></rect>
                      <text x="180" y="214" text-anchor="middle">من نقطة x₀ نبني يمينا ويسارا بضرب القيمة في 1+h أو 1-h</text>
                    </g>
                  </svg>
                  <figcaption>الفكرة: نستعمل التقريب التألفي. عند نقطة <span class="math">x<sub>0</sub></span>، إذا كان <span class="math">h</span> صغيرا فإن <span class="math">f(x<sub>0</sub>+h)≈f(x<sub>0</sub>)(1+h)</span> و <span class="math">f(x<sub>0</sub>-h)≈f(x<sub>0</sub>)(1-h)</span>.</figcaption>
                </figure>
                <div class="interactive-table-card">
                  <strong>جدول أويلر للبناء انطلاقا من <span class="math">f(0)=1</span></strong>
                  <p>في كل خطوة نضرب القيمة الحالية في <span class="math">1+h</span> للانتقال يمينا، أو في <span class="math">1-h</span> للانتقال يسارا. ابدأ بخطوة كبيرة لترى الفرق، ثم صغّرها.</p>
                  <label class="table-step-control">
                    <span>قيمة h</span>
                    <input data-exp-step-h type="number" step="0.01" min="0.001" max="0.2" value="0.2" aria-label="قيمة h لبناء الجدول">
                  </label>
                  <div class="step-presets" aria-label="قيم مقترحة للخطوة h">
                    <button type="button" data-exp-step-preset="0.2">0.2</button>
                    <button type="button" data-exp-step-preset="0.1">0.1</button>
                    <button type="button" data-exp-step-preset="0.05">0.05</button>
                    <button type="button" data-exp-step-preset="0.01">0.01</button>
                  </div>
                  <table class="activity-mini-table exp-table exp-build-table">
                    <thead>
                      <tr>
                        <th>الخطوة k</th>
                        <th>x = -kh</th>
                        <th>f(-kh) ≈ (1-h)<sup>k</sup></th>
                        <th>x = kh</th>
                        <th>f(kh) ≈ (1+h)<sup>k</sup></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr data-exp-row data-step="0"><td data-step-num></td><td data-left-x></td><td data-left-value></td><td data-right-x></td><td data-right-value></td></tr>
                      <tr data-exp-row data-step="1"><td data-step-num></td><td data-left-x></td><td data-left-value></td><td data-right-x></td><td data-right-value></td></tr>
                      <tr data-exp-row data-step="2"><td data-step-num></td><td data-left-x></td><td data-left-value></td><td data-right-x></td><td data-right-value></td></tr>
                      <tr data-exp-row data-step="3"><td data-step-num></td><td data-left-x></td><td data-left-value></td><td data-right-x></td><td data-right-value></td></tr>
                      <tr data-exp-row data-step="4"><td data-step-num></td><td data-left-x></td><td data-left-value></td><td data-right-x></td><td data-right-value></td></tr>
                      <tr data-exp-row data-step="5"><td data-step-num></td><td data-left-x></td><td data-left-value></td><td data-right-x></td><td data-right-value></td></tr>
                      <tr data-exp-row data-step="6"><td data-step-num></td><td data-left-x></td><td data-left-value></td><td data-right-x></td><td data-right-value></td></tr>
                      <tr data-exp-row data-step="7"><td data-step-num></td><td data-left-x></td><td data-left-value></td><td data-right-x></td><td data-right-value></td></tr>
                      <tr data-exp-row data-step="8"><td data-step-num></td><td data-left-x></td><td data-left-value></td><td data-right-x></td><td data-right-value></td></tr>
                      <tr data-exp-row data-step="9"><td data-step-num></td><td data-left-x></td><td data-left-value></td><td data-right-x></td><td data-right-value></td></tr>
                      <tr data-exp-row data-step="10"><td data-step-num></td><td data-left-x></td><td data-left-value></td><td data-right-x></td><td data-right-value></td></tr>
                      <tr data-exp-row data-step="11"><td data-step-num></td><td data-left-x></td><td data-left-value></td><td data-right-x></td><td data-right-value></td></tr>
                      <tr data-exp-row data-step="12"><td data-step-num></td><td data-left-x></td><td data-left-value></td><td data-right-x></td><td data-right-value></td></tr>
                      <tr data-exp-row data-step="13"><td data-step-num></td><td data-left-x></td><td data-left-value></td><td data-right-x></td><td data-right-value></td></tr>
                      <tr data-exp-row data-step="14"><td data-step-num></td><td data-left-x></td><td data-left-value></td><td data-right-x></td><td data-right-value></td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div class="curve-builder-section">
                <div class="stage-heading">
                  <span>بناء بياني</span>
                  <h4>من الجدول إلى المنحنى</h4>
                  <p>النقاط المحسوبة في الجدول تُكوّن مضلّعة تقريبية. أخف المنحنى الحدّي أولا، ثم أظهره بعد أن يتوقع التلاميذ شكل المنحنى.</p>
                </div>
                <div class="curve-controls">
                  <button class="curve-toggle-btn" type="button" data-exp-toggle-limit aria-pressed="false">إظهار المنحنى الحدّي</button>
                  <output class="curve-error-note" data-exp-error-note aria-live="polite"></output>
                </div>
                <figure class="mini-graph zoomable-graph curve-builder-graph" data-zoom-figure>
                  <button class="graph-zoom-btn" type="button" data-zoom-graph aria-label="تكبير الرسم البياني">تكبير</button>
                  <svg data-exp-curve-builder viewBox="0 0 420 260" role="img" aria-label="بناء منحنى الدالة الأسية بطريقة أويلر">
                    <rect x="0" y="0" width="420" height="260" fill="#fbff9b"></rect>
                    <text x="210" y="22" text-anchor="middle" font-family="Tajawal, Arial, sans-serif" font-size="14" font-weight="700" fill="#111">بناء المنحنى بالتقريب التألفي</text>
                    <g data-exp-cb-grid stroke="#8bbf63" stroke-width="1" opacity="0.55"></g>
                    <g data-exp-cb-axes stroke="#111" stroke-width="2"></g>
                    <path data-exp-cb-true stroke="#ef4444" fill="none" stroke-width="3" stroke-linecap="round"></path>
                    <path data-exp-cb-poly stroke="#2563eb" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <g data-exp-cb-points></g>
                    <g data-exp-cb-labels font-family="Times New Roman, serif" font-size="12" fill="#111"></g>
                    <g font-family="Tajawal, Arial, sans-serif" font-size="12" fill="#111">
                      <rect x="34" y="232" width="352" height="22" rx="11" fill="rgba(255,255,255,0.72)"></rect>
                      <text data-exp-cb-caption x="210" y="248" text-anchor="middle">المضلّعة الزرقاء مبنية فقط من f'=f و f(0)=1</text>
                    </g>
                  </svg>
                  <figcaption>كل نقطة زرقاء تُبنى من السابقة بضربها في <span class="math">1+h</span> (يمينا) أو <span class="math">1-h</span> (يسارا). عند تصغير <span class="math">h</span> تستقر المضلّعات حول منحنى واحد نسميه لاحقا الدالة الأسية.</figcaption>
                </figure>
              </div>

              <ol class="activity-questions guided-questions">
                <li>اشرح لماذا نضرب في <span class="math">1+h</span> للانتقال يمينا، وفي <span class="math">1-h</span> للانتقال يسارا، انطلاقا من <span class="math">f(x<sub>0</sub>+h)≈f(x<sub>0</sub>)+hf'(x<sub>0</sub>)</span>. <span class="hint-chip" data-hint="عوّض f'(x0) بـ f(x0) لأن f'=f.">تلميح</span></li>
                <li>في الرسم أعلاه، لماذا يبدأ المنحنى والمضلّعة من النقطة <span class="math">(0,1)</span>؟</li>
                <li>عند تصغير <span class="math">h</span> في الجدول، ماذا تلاحظ بالنسبة إلى دقة التقريب؟</li>
                <li>بما أن <span class="math">f'(x)=f(x)</span>، كيف يتغير ميل المماس عندما يزداد <span class="math">x</span>؟ ماذا يعني ذلك بيانيًا؟</li>
                <li>هل يمكن أن ينقطع المنحنى أو يلمس محور الفواصل؟ برّر إجابتك باستعمال الإشارة.</li>
              </ol>
              <div class="discovery-note">
                <strong>تخمين المرحلة:</strong>
                <span>التقريب المحلي يسمح ببناء تمثيل تقريبي للدالة على <span class="math">[-3;3]</span> انطلاقا من <span class="math">f'=f</span> و <span class="math">f(0)=1</span>. عند تصغير <span class="math">h</span> نقترب من منحنى واحد هو الدالة الأسية.</span>
              </div>
            </div>

            <div class="activity-stage proof-stage">
              <div class="stage-heading">
                <span>المرحلة 2</span>
                <h4>برهان تحليلي وبناء الخواص</h4>
                <p>نثبت أن الشروط <span class="math">f'=f</span> و <span class="math">f(0)=1</span> تقود إلى خواص الأسس المعروفة.</p>
              </div>
              <ol class="activity-questions guided-questions">
                <li>ادرس <span class="math">u(x)=f(x)f(-x)</span> واستنتج <span class="math">f(x)f(-x)=1</span>، ثم برهن أن <span class="math">f(x)≠0</span> لكل <span class="math">x</span>. <span class="hint-chip" data-hint="اشتق u ولاحظ أنها ثابتة، ثم احسب u(0).">تلميح</span></li>
                <li>ليكن <span class="math">y</span> ثابتا. لماذا نختار <span class="math">i(x)=f(x+y)/f(x)</span>؟ <span class="hint-chip" data-hint="نبحث عن مقدار يربط x+y بـ x. بما أن f(x) غير منعدم، يمكن القسمة عليه.">تلميح</span></li>
                <li>اشتق <span class="math">i</span>، ثم بين أنها ثابتة واستنتج <span class="math">f(x+y)=f(x)f(y)</span>.</li>
                <li>باستعمال الخاصية السابقة، استنتج <span class="math">f(x-y)=f(x)/f(y)</span>.</li>
                <li>ليكن <span class="math">n</span> عددا صحيحا نسبيا. ادرس <span class="math">j(x)=f(nx)/[f(x)]^n</span> واستنتج <span class="math">f(nx)=[f(x)]^n</span>. <span class="hint-chip" data-hint="إذا وجدت j'=0 فالدالة j ثابتة. احسب قيمتها عند x=0.">تلميح</span></li>
              </ol>
            </div>

            <section class="quick-practice">
              <div class="stage-heading">
                <span>تطبيق مباشر</span>
                <h4>ثلاثة استعمالات سريعة للخواص</h4>
              </div>
              <div class="practice-grid">
                <article><strong>1</strong><span>بسّط: <span class="math">exp(2)exp(3)</span></span></article>
                <article><strong>2</strong><span>اكتب على شكل خارج: <span class="math">exp(x-4)</span></span></article>
                <article><strong>3</strong><span>حوّل: <span class="math">[exp(t)]^5</span></span></article>
              </div>
            </section>

            <section class="exp-summary-card">
              <strong>الخلاصة المرئية</strong>
              <div class="summary-formula">الدالة الوحيدة التي تحقق <span class="math">f'=f</span> و <span class="math">f(0)=1</span> هي <span class="math">exp</span></div>
              <div class="summary-grid">
                <span><b>تعريف</b><em>f(x)=exp(x)</em></span>
                <span><b>موجبـة</b><em>exp(x)&gt;0</em></span>
                <span><b>جمع إلى جداء</b><em>exp(x+y)=exp(x)exp(y)</em></span>
                <span><b>فرق إلى خارج</b><em>exp(x-y)=exp(x)/exp(y)</em></span>
                <span><b>قوة</b><em>exp(nx)=[exp(x)]^n</em></span>
              </div>
            </section>

            <div class="definition-box activity-definition">
              <strong>تعريف:</strong>
              تسمى الدالة الوحيدة القابلة للاشتقاق على <span class="math">R</span> التي تحقق
              <span class="math">f'=f</span> و <span class="math">f(0)=1</span>
              الدالة الأسية، ونرمز لها بالرمز <span class="math">exp</span>، أي:
              <div class="math-equation">f(x)=exp(x)</div>
            </div>
          </section>
        `,
        solution: "هذا النشاط يمهد للدالة الأسية وخواصها الأساسية.",
        solutionHtml: `
          <section class="activity-sheet">
            <div class="solution-phases">
              <article class="solution-phase-card solution-phase-info">
                <h4>المرحلة 1: التقريب التألفي وطريقة أويلر</h4>
                <p>نستعمل التقريب التألفي قرب <span class="math">x<sub>0</sub></span>:</p>
                <div class="math-equation">f(x<sub>0</sub>+h)≈f(x<sub>0</sub>)+hf'(x<sub>0</sub>)</div>
                <p>وبما أن <span class="math">f'=f</span> نحصل على قاعدة أويلر:</p>
                <div class="math-equation">f(x<sub>0</sub>+h)≈f(x<sub>0</sub>)(1+h)</div>
                <div class="math-equation">f(x<sub>0</sub>-h)≈f(x<sub>0</sub>)(1-h)</div>
                <p>ومن <span class="math">f(0)=1</span> نبني القيم التقريبية يمينا ويسارا خطوة بخطوة.</p>
              </article>
              <article class="solution-phase-card solution-phase-math">
                <h4>الإيجابية وعدم الانعدام</h4>
                <p>إذا وضعنا <span class="math">u(x)=f(x)f(-x)</span> فإن <span class="math">u'(x)=0</span>، إذن <span class="math">u</span> ثابتة. وبما أن <span class="math">u(0)=1</span> نحصل على:</p>
                <div class="math-equation">f(x)f(-x)=1</div>
                <p>إذن <span class="math">f(x)≠0</span> لكل <span class="math">x</span>.</p>
              </article>
              <article class="solution-phase-card solution-phase-compute">
                <h4>خاصية الجمع</h4>
                <p>نختار <span class="math">i(x)=f(x+y)/f(x)</span> لأننا نريد مقارنة <span class="math">f(x+y)</span> بـ <span class="math">f(x)</span>. وبما أن <span class="math">f(x)</span> غير منعدم يمكن القسمة عليه.</p>
                <p>باشتقاق <span class="math">i</span> نجد <span class="math">i'(x)=0</span>، فهي ثابتة. عند <span class="math">x=0</span> نحصل على <span class="math">i(0)=f(y)</span>، ومنه:</p>
                <div class="math-equation">f(x+y)=f(x)f(y)</div>
              </article>
              <article class="solution-phase-card solution-phase-result">
                <h4>الخواص المستنتجة والتطبيق</h4>
                <div class="math-equation">f(x-y)=f(x)/f(y)</div>
                <div class="math-equation">f(nx)=[f(x)]^n</div>
                <p>أجوبة التطبيق: <span class="math">exp(2)exp(3)=exp(5)</span>، و <span class="math">exp(x-4)=exp(x)/exp(4)</span>، و <span class="math">[exp(t)]^5=exp(5t)</span>.</p>
              </article>
              <article class="solution-phase-card solution-phase-note">
                <h4>التعريف النهائي</h4>
                <p>نسمي الدالة الوحيدة القابلة للاشتقاق على <span class="math">R</span> التي تحقق <span class="math">f'=f</span> و <span class="math">f(0)=1</span> الدالة الأسية، ونرمز لها بـ <span class="math">exp</span>.</p>
              </article>
            </div>
          </section>
        `,
      },
    ],
    exercises: [
      {
        title: "تمرين 1: مجالات تعريف دوال أسية",
        statement: "عين مجموعة تعريف كل دالة: f(x)=e^(x+2)، f(x)=e^x/(e^x-1)، f(x)=e^(1/x)، f(x)=e^sqrt(x)، f(x)=1/(x e^x)، f(x)=e^x-e^(-x).",
        solutionHtml: `
          <ol>
            <li><span class="math">e^{x+2}</span>: معرفة على <span class="math">R</span>.</li>
            <li><span class="math">\frac{e^x}{e^x-1}</span>: الشرط <span class="math">e^x-1≠0</span> أي <span class="math">x≠0</span>، إذن المجال <span class="math">R\{0}</span>.</li>
            <li><span class="math">e^{1/x}</span>: الشرط <span class="math">x≠0</span>، إذن المجال <span class="math">R^*</span>.</li>
            <li><span class="math">e^{√x}</span>: الشرط <span class="math">x≥0</span>، إذن المجال <span class="math">[0,+∞[</span>.</li>
            <li><span class="math">\frac{1}{xe^x}</span>: بما أن <span class="math">e^x&gt;0</span> فالشرط <span class="math">x≠0</span>، إذن المجال <span class="math">R^*</span>.</li>
            <li><span class="math">e^x-e^{-x}</span>: معرفة على <span class="math">R</span>.</li>
          </ol>
        `,
      },
      {
        title: "تمرين 2: تبسيط عبارات أسية",
        statement: "بسط العبارات: (e^x)^3 × e^(5x)، e^(2x+3)/e^(2x)، (e^x+e^(-x))/e^(2x).",
        solutionHtml: `
          <ol>
            <li><span class="math">(e^x)^3 e^{5x}=e^{3x}e^{5x}=e^{8x}</span>.</li>
            <li><span class="math">\frac{e^{2x+3}}{e^{2x}}=e^{2x+3-2x}=e^3</span>.</li>
            <li><span class="math">\frac{e^x+e^{-x}}{e^{2x}}=e^{-x}+e^{-3x}</span>.</li>
          </ol>
        `,
      },
      {
        title: "تمرين 3: تبسيط كسور أسية",
        statement: "بسط: (e^x-1)/e^(2x)، (1-e^(-2x))/e^(-2x)، (e^(2x)-1)/(e^(2x)+1)، (e^x+e^(-x))^2.",
        solutionHtml: `
          <ol>
            <li><span class="math">\frac{e^x-1}{e^{2x}}=e^{-x}-e^{-2x}</span>.</li>
            <li><span class="math">\frac{1-e^{-2x}}{e^{-2x}}=e^{2x}-1</span>.</li>
            <li><span class="math">\frac{e^{2x}-1}{e^{2x}+1}</span> لا تختزل أكثر عموما، ويمكن كتابتها <span class="math">\frac{(e^x-1)(e^x+1)}{e^{2x}+1}</span>.</li>
            <li><span class="math">(e^x+e^{-x})^2=e^{2x}+2+e^{-2x}</span>.</li>
          </ol>
        `,
      },
      {
        title: "تمرين 4: متتالية أسية",
        statement: "لتكن المتتالية u_n = e^(n+1)/e^n. بين أنها متتالية ثابتة تماما.",
        solutionHtml: `
          <p>نستعمل خاصية القسمة:</p>
          <div class="math-equation">u_n=\frac{e^{n+1}}{e^n}=e^{n+1-n}=e</div>
          <p>إذن <span class="math">u_n=e</span> من أجل كل <span class="math">n</span>، فهي متتالية ثابتة تماما.</p>
        `,
      },
      {
        title: "تمرين 5: حل معادلات أسية بسيطة",
        statement: "حل المعادلات: e^(2x)=1، e^(-5x)=e، e^x=e^(-2x).",
        solutionHtml: `
          <ol>
            <li><span class="math">e^{2x}=1=e^0</span> ومنه <span class="math">2x=0</span> إذن <span class="math">x=0</span>.</li>
            <li><span class="math">e^{-5x}=e=e^1</span> ومنه <span class="math">-5x=1</span> إذن <span class="math">x=-\frac15</span>.</li>
            <li><span class="math">e^x=e^{-2x}</span> ومنه <span class="math">x=-2x</span> إذن <span class="math">x=0</span>.</li>
          </ol>
        `,
      },
      {
        title: "تمرين 6: معادلات بالتحويل إلى نفس الأساس",
        statement: "حل: e^(2x)=e^4، e^(-x)=1/e، e^(x+1)=e^(-2).",
        solutionHtml: `
          <ol>
            <li><span class="math">e^{2x}=e^4</span> يعني <span class="math">2x=4</span>، ومنه <span class="math">x=2</span>.</li>
            <li><span class="math">e^{-x}=\frac1e=e^{-1}</span> يعني <span class="math">-x=-1</span>، ومنه <span class="math">x=1</span>.</li>
            <li><span class="math">e^{x+1}=e^{-2}</span> يعني <span class="math">x+1=-2</span>، ومنه <span class="math">x=-3</span>.</li>
          </ol>
        `,
      },
      {
        title: "تمرين 7: معادلات أسية مركبة",
        statement: "حل: e^(x^2)=e^(3x+1)، e^((x+1)/(x-1))=1/e^2.",
        solutionHtml: `
          <ol>
            <li><span class="math">e^{x^2}=e^{3x+1}</span> يكافئ <span class="math">x^2=3x+1</span>، أي <span class="math">x^2-3x-1=0</span>. إذن <span class="math">x=(3±√13)/2</span>.</li>
            <li>الشرط <span class="math">x≠1</span>. لدينا <span class="math">\frac{x+1}{x-1}=-2</span>، ومنه <span class="math">x+1=-2x+2</span>، إذن <span class="math">x=\frac13</span>.</li>
          </ol>
        `,
      },
      {
        title: "تمرين 8: معادلات جداء",
        statement: "حل في R: (e^x-1)(e^x-e^2)=0، ثم (e^x-1)(e^x-e^2)>0.",
        solutionHtml: `
          <ol>
            <li>الجداء يساوي الصفر إذا كان أحد العاملين صفرا: <span class="math">e^x=1=e^0</span> أو <span class="math">e^x=e^2</span>. إذن <span class="math">x=0</span> أو <span class="math">x=2</span>.</li>
            <li>نضع <span class="math">X=e^x</span> حيث <span class="math">X&gt;0</span>. المتراجحة تصبح <span class="math">(X-1)(X-e^2)&gt;0</span>، ومنه <span class="math">X&lt;1</span> أو <span class="math">X&gt;e^2</span>. إذن <span class="math">x&lt;0</span> أو <span class="math">x&gt;2</span>.</li>
          </ol>
        `,
      },
      {
        title: "تمرين 9: حل متراجحات أسية",
        statement: "حل: e^(2x)<e^(x+3)، e^x>e^2، e^(3x)≤1، e^(-x)≥1.",
        solutionHtml: `
          <ol>
            <li>بما أن <span class="math">exp</span> متزايدة: <span class="math">2x&lt;x+3</span> إذن <span class="math">x&lt;3</span>.</li>
            <li><span class="math">e^x&gt;e^2</span> يكافئ <span class="math">x&gt;2</span>.</li>
            <li><span class="math">e^{3x}≤1=e^0</span> يكافئ <span class="math">3x≤0</span> إذن <span class="math">x≤0</span>.</li>
            <li><span class="math">e^{-x}≥1=e^0</span> يكافئ <span class="math">-x≥0</span> إذن <span class="math">x≤0</span>.</li>
          </ol>
        `,
      },
      {
        title: "تمرين 10: معادلة ومتراجحة من الدرجة الثانية في e^x",
        statement: "حل: (e^x-1)(e^x-e^2)=0 و (e^x-1)(e^x-e^2)>0 باستعمال جدول إشارة.",
        solutionHtml: `
          <p>نضع <span class="math">X=e^x</span> مع <span class="math">X&gt;0</span>.</p>
          <ol>
            <li><span class="math">(X-1)(X-e^2)=0</span> يعطي <span class="math">X=1</span> أو <span class="math">X=e^2</span>، إذن <span class="math">x=0</span> أو <span class="math">x=2</span>.</li>
            <li>إشارة الجداء موجبة خارج الجذرين: <span class="math">X&lt;1</span> أو <span class="math">X&gt;e^2</span>. وبما أن <span class="math">X=e^x</span> نحصل على <span class="math">x&lt;0</span> أو <span class="math">x&gt;2</span>.</li>
          </ol>
        `,
      },
      {
        title: "تمرين 11: تعيين الدالة الوحيدة",
        statement: "عين في كل حالة الدالة الوحيدة f المعرفة على R: 1) f'=3f و f(0)=1. 2) f'=-f و f(0)=1. 3) f'=1/2 f و f(0)=1.",
        solutionHtml: `
          <p>القاعدة العامة: إذا كانت <span class="math">f'=kf</span> و <span class="math">f(0)=a</span> فإن <span class="math">f(x)=ae^{kx}</span>.</p>
          <ol>
            <li><span class="math">k=3</span> و <span class="math">a=1</span>، إذن <span class="math">f(x)=e^{3x}</span>.</li>
            <li><span class="math">k=-1</span> و <span class="math">a=1</span>، إذن <span class="math">f(x)=e^{-x}</span>.</li>
            <li><span class="math">k=\frac12</span> و <span class="math">a=1</span>، إذن <span class="math">f(x)=e^{x/2}</span>.</li>
          </ol>
        `,
      },
      {
        title: "تمرين 12: دالة تحقق f'=λf",
        statement: "لتكن λ عددا حقيقيا غير معدوم. f هي الدالة الوحيدة التي تحقق f'=λf و f(0)=λ. نضع g=(1/λ)f. تحقق أن g'=λg و g(0)=1، ثم استنتج عبارة f(x).",
        solutionHtml: `
          <ol>
            <li>بما أن <span class="math">g=(1/λ)f</span> فإن <span class="math">g'=(1/λ)f'</span>. وبما أن <span class="math">f'=λ f</span> نحصل على:
              <div class="math-equation">g'=(1/λ)λf=f=λg</div>
              كما أن <span class="math">g(0)=(1/λ)f(0)=1</span>.
            </li>
            <li>الدالة الوحيدة التي تحقق <span class="math">g'=λ g</span> و <span class="math">g(0)=1</span> هي <span class="math">g(x)=e^{λ x}</span>.</li>
            <li>إذن <span class="math">f(x)=λ g(x)=λ e^{λ x}</span>.</li>
          </ol>
        `,
      },
      {
        title: "تمرين 13: تعيين دوال من شرط ابتدائي",
        statement: "عين الدالة الوحيدة f في الحالات: 1) f'=-6f و f(0)=-1. 2) f'=-2f و f(0)=1/2. 3) f'=√2 f و f(0)=2.",
        solutionHtml: `
          <p>نستعمل دائما <span class="math">f(x)=f(0)e^{kx}</span> عندما <span class="math">f'=kf</span>.</p>
          <ol>
            <li><span class="math">f(x)=-e^{-6x}</span>.</li>
            <li><span class="math">f(x)=\frac12 e^{-2x}</span>.</li>
            <li><span class="math">f(x)=2e^{√2 x}</span>.</li>
          </ol>
        `,
      },
      {
        title: "تمرين 14: طريقة أويلر لدالة تحقق f'=2f",
        statement: "لتكن f الدالة التي تحقق f'=2f و f(0)=1. باستعمال طريقة أويلر، أعط تقريبا لـ f(2) بخطوتين h=0.2 و h=0.1، ثم قارن بالقيمة المضبوطة.",
        solutionHtml: `
          <p>بما أن <span class="math">f'=2f</span> و <span class="math">f(0)=1</span> فإن القيمة المضبوطة هي <span class="math">f(x)=e^{2x}</span>، وبالتالي <span class="math">f(2)=e^4approx54.60</span>.</p>
          <p>في طريقة أويلر: <span class="math">y_{n+1}=y_n+h,2y_n=(1+2h)y_n</span>.</p>
          <ol>
            <li>إذا <span class="math">h=0.2</span> فعدد الخطوات إلى <span class="math">2</span> هو <span class="math">10</span>، ومنه <span class="math">y_{10}=1.4^{10}approx28.93</span>.</li>
            <li>إذا <span class="math">h=0.1</span> فعدد الخطوات هو <span class="math">20</span>، ومنه <span class="math">y_{20}=1.2^{20}approx38.34</span>.</li>
          </ol>
          <p>عندما نصغر الخطوة يتحسن التقريب، لكنه يبقى دون القيمة المضبوطة هنا.</p>
        `,
      },
      {
        title: "تمرين 15: إشارة دالة تحقق علاقة الضرب",
        statement: "لتكن f دالة معرفة على R تحقق f(x+y)=f(x)f(y) و f(0)=1. بين أن f(x)f(-x)=1، ثم أن f(x)>0 لكل x حقيقي، واستنتج أن f(x/2)^2=f(x).",
        solutionHtml: `
          <ol>
            <li>نأخذ <span class="math">y=-x</span> فنحصل على:
              <div class="math-equation">f(x)f(-x)=f(0)=1</div>
              إذن <span class="math">f(x)≠0</span> لكل <span class="math">x</span>.
            </li>
            <li>نكتب <span class="math">x=\frac{x}{2}+\frac{x}{2}</span>، ومنه:
              <div class="math-equation">f(x)=f(x/2)f(x/2)=[f(x/2)]^2</div>
            </li>
            <li>بما أن <span class="math">f(x)</span> مربع عدد حقيقي وغير منعدم، فإن <span class="math">f(x)>0</span> لكل <span class="math">x</span>.</li>
          </ol>
        `,
      },
      {
        title: "تمرين 16: خواص الدالة المضاعفة",
        statement: "لتكن f دالة معرفة على R تحقق f(x+y)=f(x)f(y). 1) بين أن f(2x)=f(x)^2، f(3x)=f(x)^3، f(4x)=f(x)^4. 2) استنتج أن f(nx)=f(x)^n. إذا كان k=f(1)، بين أن f(n)=k^n و f(1/n)^n=k، ثم استنتج f(1/2) و f(1/4) بدلالة k.",
        solutionHtml: `
          <ol>
            <li>
              <div class="math-equation">f(2x)=f(x+x)=f(x)^2</div>
              <div class="math-equation">f(3x)=f(2x+x)=f(2x)f(x)=f(x)^3</div>
              <div class="math-equation">f(4x)=f(3x+x)=f(3x)f(x)=f(x)^4</div>
            </li>
            <li>بالتراجع نحصل من أجل كل <span class="math">n∈N^*</span> على:
              <div class="math-equation">f(nx)=f(x)^n</div>
            </li>
            <li>بوضع <span class="math">x=1</span> و <span class="math">k=f(1)</span> نجد:
              <div class="math-equation">f(n)=f(n·1)=f(1)^n=k^n</div>
            </li>
            <li>بوضع <span class="math">x=\frac1n</span> نحصل على:
              <div class="math-equation">f(1)=f(n·1/n)=f(1/n)^n</div>
              أي <span class="math">f(1/n)^n=k</span>.
            </li>
            <li>وبما أن قيم <span class="math">f</span> موجبة، فإن:
              <div class="math-equation">f(1/2)=√k ، f(1/4)=⁴√k</div>
            </li>
          </ol>
        `,
      },
      {
        title: "تمرين 17: نهايات دوال أسية",
        statement: "ادرس في كل حالة نهاية الدالة عند -∞ وعند +∞: f(x)=e^(-x)، f(x)=2e^(2x)، f(x)=e^x+e^(-x)، f(x)=x+e^x.",
        solutionHtml: `
          <ol>
            <li><span class="math">f(x)=e^{-x}</span>: عند <span class="math">x→-∞</span> لدينا <span class="math">-x→+∞</span> إذن النهاية <span class="math">+∞</span>، وعند <span class="math">x→+∞</span> النهاية <span class="math">0</span>.</li>
            <li><span class="math">f(x)=2e^{2x}</span>: عند <span class="math">-∞</span> النهاية <span class="math">0</span>، وعند <span class="math">+∞</span> النهاية <span class="math">+∞</span>.</li>
            <li><span class="math">f(x)=e^x+e^{-x}</span>: عند <span class="math">-∞</span> الحد <span class="math">e^{-x}</span> يهيمن، فالنهاية <span class="math">+∞</span>؛ وعند <span class="math">+∞</span> الحد <span class="math">e^x</span> يهيمن، فالنهاية <span class="math">+∞</span>.</li>
            <li><span class="math">f(x)=x+e^x</span>: عند <span class="math">-∞</span> لدينا <span class="math">e^x→0</span> و <span class="math">x→-∞</span> إذن النهاية <span class="math">-∞</span>؛ وعند <span class="math">+∞</span> النهاية <span class="math">+∞</span>.</li>
          </ol>
        `,
      },
      {
        title: "تمرين 18: نهاية باستعمال الحد الغالب",
        statement: "ادرس نهاية الدالة f(x)=x+e^x+e^(-x) عند -∞ وعند +∞.",
        solutionHtml: `
          <p>عند <span class="math">x→+∞</span> يهيمن الحد <span class="math">e^x</span>، ومنه <span class="math">f(x)→+∞</span>.</p>
          <p>عند <span class="math">x→-∞</span> يهيمن الحد <span class="math">e^{-x}</span> لأنه يتجه إلى <span class="math">+∞</span>. والنمو الأسي يغلب النمو الخطي، إذن <span class="math">f(x)→+∞</span>.</p>
        `,
      },
      {
        title: "تمرين 19: دالة مكتوبة بطريقتين",
        statement: "لتكن f المعرفة على R بـ f(x)=e^(x+1)-e^x. 1) ادرس نهاية الدالة عند -∞ وعند +∞. 2) تحقق أن f(x)=e^x(e-1). 3) استنتج أن f(x)>0 لكل x.",
        solutionHtml: `
          <ol>
            <li><span class="math">f(x)=e^x(e-1)</span>. عند <span class="math">x→-∞</span> النهاية <span class="math">0</span>، وعند <span class="math">x→+∞</span> النهاية <span class="math">+∞</span>.</li>
            <li><span class="math">e^{x+1}=e^x e</span>، إذن <span class="math">e^{x+1}-e^x=e^x(e-1)</span>.</li>
            <li>لأن <span class="math">e^x>0</span> و <span class="math">e-1>0</span>، فإن <span class="math">f(x)>0</span> لكل <span class="math">x</span>.</li>
          </ol>
        `,
      },
      {
        title: "تمرين 20: نهاية كسر أسي",
        statement: "ادرس نهاية f(x)=(e^x-1)/(2e^x+1) عند -∞ وعند +∞.",
        solutionHtml: `
          <ol>
            <li>عند <span class="math">x→-∞</span>: <span class="math">e^x→0</span>، ومنه <span class="math">f(x)→(0-1)/(0+1)=-1</span>.</li>
            <li>عند <span class="math">x→+∞</span> نقسم على <span class="math">e^x</span>:
              <div class="math-equation">f(x)=\frac{1-e^{-x}}{2+e^{-x}}</div>
              ومنه <span class="math">f(x)→1/2</span>.
            </li>
          </ol>
        `,
      },
      {
        title: "تمرين 21: نهاية كسر أسي عند 0",
        statement: "ادرس نهاية f(x)=(e^x-1)/(2x) عند 0.",
        solutionHtml: `
          <p>نستعمل النهاية الأساسية:</p>
          <div class="math-equation">lim_{x→0} \frac{e^x-1}{x}=1</div>
          <p>إذن:</p>
          <div class="math-equation">lim_{x→0} \frac{e^x-1}{2x}=\frac12</div>
        `,
      },
      {
        title: "تمرين 22: نهاية دالة عند 0 و +∞",
        statement: "ادرس نهاية f(x)=1/x (e^(3x)-1) عند 0 وعند +∞.",
        solutionHtml: `
          <ol>
            <li>عند <span class="math">x→0</span>:
              <div class="math-equation">\frac{e^{3x}-1}{x}=3\frac{e^{3x}-1}{3x}→3</div>
            </li>
            <li>عند <span class="math">x→+∞</span> لدينا <span class="math">e^{3x}</span> يغلب <span class="math">x</span>، ومنه <span class="math">f(x)→+∞</span>.</li>
          </ol>
        `,
      },
      {
        title: "تمرين 23: نهاية باستبدال المتغير",
        statement: "ادرس نهاية f(x)=x(e^(1/x)-1) عند -∞ وعند +∞. يمكنك وضع X=1/x.",
        solutionHtml: `
          <p>نضع <span class="math">X=1/x</span>. عندما <span class="math">x→±∞</span> فإن <span class="math">X→0</span>، ونكتب:</p>
          <div class="math-equation">x(e^{1/x}-1)=\frac{e^X-1}{X}</div>
          <p>وبما أن <span class="math">lim_{X→0}(e^X-1)/X=1</span>، فإن النهاية عند <span class="math">-∞</span> وعند <span class="math">+∞</span> هي <span class="math">1</span>.</p>
        `,
      },
      {
        title: "تمرين 24: كتابة على الشكل e^x g(x)",
        statement: "لتكن f المعرفة على R بـ f(x)=e^x-e^(2x). 1) اكتب f على الشكل f(x)=e^x g(x). 2) احسب نهاية الدالة عند +∞.",
        solutionHtml: `
          <ol>
            <li><span class="math">f(x)=e^x(1-e^x)</span>، إذن <span class="math">g(x)=1-e^x</span>.</li>
            <li>عند <span class="math">x→+∞</span>: <span class="math">f(x)=-e^{2x}+e^x</span> ومنه <span class="math">f(x)→-∞</span>.</li>
          </ol>
        `,
      },
      {
        title: "تمرين 25: حدود مجال التعريف",
        statement: "لتكن f(x)=e^(1/x)-1. ادرس نهايات الدالة عند حدود مجموعة تعريفها.",
        solutionHtml: `
          <p>مجموعة التعريف هي <span class="math">R^*</span>. ندرس النهايات عند <span class="math">0^-</span> و <span class="math">0^+</span> و <span class="math">±∞</span>.</p>
          <ol>
            <li>عند <span class="math">x→0^+</span>: <span class="math">1/x→+∞</span>، إذن <span class="math">f(x)→+∞</span>.</li>
            <li>عند <span class="math">x→0^-</span>: <span class="math">1/x→-∞</span>، إذن <span class="math">e^{1/x}→0</span> ومنه <span class="math">f(x)→-1</span>.</li>
            <li>عند <span class="math">x→±∞</span>: <span class="math">1/x→0</span>، إذن <span class="math">f(x)→0</span>.</li>
          </ol>
        `,
      },
      {
        title: "تمرين 26: مقارب أفقي وشاقولي",
        statement: "لتكن f المعرفة على R* بـ f(x)=(e^x+1)/(e^x-1). 1) احسب نهايتي f عند -∞ و +∞. 2) بين أن y=-1 مقارب أفقي عند -∞. 3) بين أن f فردية. 4) احسب نهايتي f عند 0^- و 0^+، واستنتج مقاربا شاقوليا.",
        solutionHtml: `
          <ol>
            <li>عند <span class="math">x→+∞</span> النهاية <span class="math">1</span>. وعند <span class="math">x→-∞</span> لدينا <span class="math">e^x→0</span>، إذن النهاية <span class="math">-1</span>.</li>
            <li>بما أن <span class="math">lim_{x→-∞} f(x)=-1</span> فإن <span class="math">y=-1</span> مقارب أفقي عند <span class="math">-∞</span>.</li>
            <li><div class="math-equation">f(-x)=\frac{e^{-x}+1}{e^{-x}-1}=\frac{1+e^x}{1-e^x}=-f(x)</div>إذن <span class="math">f</span> فردية.</li>
            <li>عند <span class="math">x→0^+</span>: <span class="math">f(x)→+∞</span>. وعند <span class="math">x→0^-</span>: <span class="math">f(x)→-∞</span>. إذن <span class="math">x=0</span> مقارب شاقولي.</li>
          </ol>
        `,
      },
      {
        title: "تمرين 27: مقارب مائل ووضعية المنحنى",
        statement: "لتكن f(x)=2x+1-e^(-x). بين أن المستقيم D ذو المعادلة y=2x+1 مقارب مائل للمنحنى عند +∞. ادرس وضعية (C) بالنسبة إلى D.",
        solutionHtml: `
          <ol>
            <li><div class="math-equation">f(x)-(2x+1)=-e^{-x}</div>وعند <span class="math">x→+∞</span> نجد <span class="math">e^{-x}→0</span>، إذن <span class="math">D</span> مقارب مائل عند <span class="math">+∞</span>.</li>
            <li>بما أن <span class="math">-e^{-x}<0</span> لكل <span class="math">x</span>، فإن المنحنى <span class="math">(C)</span> يقع أسفل المستقيم <span class="math">D</span>.</li>
          </ol>
          ${renderExerciseGraph("asymptote27")}
        `,
      },
      {
        title: "تمرين 28: مقارب مائل",
        statement: "لتكن f المعرفة على R بـ f(x)=-x+2+3e^(2-x). بين أن للمنحنى الممثل للدالة f مقاربا، ثم عين معادلته.",
        solutionHtml: `
          <ol>
            <li>حسب الصيغة الظاهرة <span class="math">f(x)=-x+2+3e^{2-x}</span>. عند <span class="math">x→+∞</span> لدينا <span class="math">e^{2-x}→0</span>، ومنه:
              <div class="math-equation">f(x)-(-x+2)=3e^{2-x}→0</div>
              إذن المقارب المائل عند <span class="math">+∞</span> هو <span class="math">y=-x+2</span>.
            </li>
            <li>عند <span class="math">x→-∞</span> لدينا <span class="math">e^{2-x}→+∞</span>، لذلك لا نحصل من هذه الصيغة على مقارب أفقي في هذه الجهة.</li>
          </ol>
          ${renderExerciseGraph("asymptote28")}
        `,
      },
      {
        title: "تمرين 29: مشتقة جداء x و e^x",
        statement: "على المجال I=R، احسب مشتقة الدالة f حيث: f(x)=x e^x.",
        solutionHtml: `
          <p>الدالة قابلة للاشتقاق على <span class="math">R</span>.</p>
          <div class="math-equation">f'(x)=1·e^x+x·e^x=(x+1)e^x</div>
        `,
      },
      {
        title: "تمرين 30: مشتقة (2x-3)e^x",
        statement: "على المجال I=R، احسب مشتقة الدالة f حيث: f(x)=(2x-3)e^x.",
        solutionHtml: `
          <p>نطبق قاعدة مشتقة جداء دالتين:</p>
          <div class="math-equation">f'(x)=2e^x+(2x-3)e^x=(2x-1)e^x</div>
        `,
      },
      {
        title: "تمرين 31: مشتقة كثيرة حدود مضروبة في e^x",
        statement: "على المجال I=R، احسب مشتقة الدالة f حيث: f(x)=(x^2+x+1)e^x.",
        solutionHtml: `
          <p>نشتق الجداء <span class="math">u(x)e^x</span> حيث <span class="math">u(x)=x^2+x+1</span>.</p>
          <div class="math-equation">u'(x)=2x+1</div>
          <div class="math-equation">f'(x)=(2x+1)e^x+(x^2+x+1)e^x=(x^2+3x+2)e^x</div>
        `,
      },
      {
        title: "تمرين 32: مشتقة كسر أسي",
        statement: "على المجال I=R*، احسب مشتقة الدالة f حيث: f(x)=(e^x-1)/x.",
        solutionHtml: `
          <p>نستعمل قاعدة مشتقة خارج القسمة على <span class="math">R^*</span>:</p>
          <div class="math-equation">f'(x)=\frac{x e^x-(e^x-1)}{x^2}</div>
          <div class="math-equation">f'(x)=\frac{(x-1)e^x+1}{x^2}</div>
        `,
      },
      {
        title: "تمرين 33: مشتقة خارج قسمة أسية",
        statement: "على المجال I=R، احسب مشتقة الدالة f حيث: f(x)=(3e^x-2)/(e^x+1).",
        solutionHtml: `
          <p>بما أن <span class="math">e^x+1>0</span> فالدالة معرفة وقابلة للاشتقاق على <span class="math">R</span>.</p>
          <div class="math-equation">f'(x)=\frac{3e^x(e^x+1)-(3e^x-2)e^x}{(e^x+1)^2}</div>
          <div class="math-equation">f'(x)=\frac{5e^x}{(e^x+1)^2}</div>
        `,
      },
      {
        title: "تمرين 34: مشتقة e^x/(e^x-x)",
        statement: "على المجال I=R، احسب مشتقة الدالة f حيث: f(x)=e^x/(e^x-x).",
        solutionHtml: `
          <p>لدينا <span class="math">e^x-x>0</span> لكل <span class="math">x</span>، لذلك <span class="math">I=R</span>.</p>
          <div class="math-equation">f'(x)=\frac{e^x(e^x-x)-e^x(e^x-1)}{(e^x-x)^2}</div>
          <div class="math-equation">f'(x)=\frac{e^x(1-x)}{(e^x-x)^2}</div>
        `,
      },
      {
        title: "تمرين 35: مشتقة (1+cos x)e^x",
        statement: "على المجال I=R، احسب مشتقة الدالة f حيث: f(x)=(1+cos x)e^x.",
        solutionHtml: `
          <p>نشتق الجداء، مع <span class="math">(1+cos x)'=-sin x</span>.</p>
          <div class="math-equation">f'(x)=(-sin x)e^x+(1+cos x)e^x</div>
          <div class="math-equation">f'(x)=(1+cos x-sin x)e^x</div>
        `,
      },
      {
        title: "تمرين 36: مشتقة جداء دالتين أسيتين",
        statement: "على المجال I=R، احسب مشتقة الدالة f حيث: f(x)=(e^x-1)(e^x+2).",
        solutionHtml: `
          <p>يمكن التوسيع أولا:</p>
          <div class="math-equation">f(x)=e^{2x}+e^x-2</div>
          <p>إذن:</p>
          <div class="math-equation">f'(x)=2e^{2x}+e^x</div>
          <p>وباستعمال قاعدة الجداء نحصل على نفس النتيجة.</p>
        `,
      },
      {
        title: "تمرين 37: مشتقة دالة أسية مركبة",
        statement: "على المجال I=R، احسب مشتقة الدالة f حيث: f(x)=e^(2x+3).",
        solutionHtml: `
          <p>نستعمل القاعدة <span class="math">(e^{u})'=u'e^u</span> حيث <span class="math">u(x)=2x+3</span>.</p>
          <div class="math-equation">u'(x)=2</div>
          <div class="math-equation">f'(x)=2e^{2x+3}</div>
        `,
      },
      {
        title: "تمرين 38: مشتقة 1/(1+e^(-x))",
        statement: "على المجال I=R، احسب مشتقة الدالة f حيث: f(x)=1/(1+e^(-x)).",
        solutionHtml: `
          <p>نكتب <span class="math">f(x)=(1+e^{-x})^{-1}</span>.</p>
          <div class="math-equation">(1+e^{-x})'=-e^{-x}</div>
          <div class="math-equation">f'(x)=\\frac{e^{-x}}{(1+e^{-x})^2}</div>
        `,
      },
      {
        title: "تمرين 39: مشتقة جداء مع e^(1/x)",
        statement: "على المجال I=R*، احسب مشتقة الدالة f حيث: f(x)=(1+1/x+1/x^2)e^(1/x).",
        solutionHtml: `
          <p>نضع <span class="math">u(x)=1+1/x+1/x^2</span> و <span class="math">v(x)=e^{1/x}</span>.</p>
          <div class="math-equation">u'(x)=-\\frac{1}{x^2}-\\frac{2}{x^3}</div>
          <div class="math-equation">v'(x)=-\\frac{1}{x^2}e^{1/x}</div>
          <div class="math-equation">f'(x)=u'v+uv'</div>
          <div class="math-equation">f'(x)=-e^{1/x}(\\frac{2}{x^2}+\\frac{3}{x^3}+\\frac{1}{x^4})</div>
        `,
      },
      {
        title: "تمرين 40: تقريب أعداد أسية",
        statement: "باستعمال التقريب e^h≈1+h من أجل h قريب من الصفر، أعط قيمة مقربة لكل من: e^0.01، e^1.999/e^2، e^0.0002.",
        solutionHtml: `
          <ol>
            <li><span class="math">e^{0.01}≈1+0.01=1.01</span>.</li>
            <li><span class="math">e^{1.999}/e^2=e^{-0.001}≈1-0.001=0.999</span>.</li>
            <li><span class="math">e^{0.0002}≈1+0.0002=1.0002</span>.</li>
          </ol>
        `,
      },
      {
        title: "تمرين 41: منحنيات مشتقة من منحنى e^x",
        statement: "ارسم في معلم متعامد ومتجانس المنحنى (C) الممثل للدالة x↦e^x، ثم استنتج منحنيات الدوال: f1(x)=e^x+1، f2(x)=-e^x، f3(x)=e^x-2، f4(x)=|e^x-2|.",
        solutionHtml: `
          <ol>
            <li><span class="math">f_1(x)=e^x+1</span>: نترجم منحنى <span class="math">e^x</span> بوحدة واحدة إلى الأعلى.</li>
            <li><span class="math">f_2(x)=-e^x</span>: نأخذ صورة المنحنى بتناظر بالنسبة إلى محور الفواصل.</li>
            <li><span class="math">f_3(x)=e^x-2</span>: نترجم منحنى <span class="math">e^x</span> بوحدتين إلى الأسفل.</li>
            <li><span class="math">f_4(x)=|e^x-2|</span>: نرسم <span class="math">e^x-2</span>، ثم نعكس الجزء الواقع تحت محور الفواصل إلى الأعلى.</li>
          </ol>
          ${renderExerciseGraph("transforms41")}
        `,
      },
      {
        title: "تمرين 42: ربط الدوال بمنحنياتها",
        statement: "ارفق كل دالة من الدوال الآتية بتمثيلها البياني: f(x)=e^x، g(x)=-e^x، h(x)=1-e^x، k(x)=1+2e^x.",
        solutionHtml: `
          <ol>
            <li><span class="math">f(x)=e^x</span>: منحنى متزايد يقطع محور التراتيب في <span class="math">1</span>.</li>
            <li><span class="math">g(x)=-e^x</span>: منحنى سالب ومتناقص، يقطع محور التراتيب في <span class="math">-1</span>.</li>
            <li><span class="math">h(x)=1-e^x</span>: منحنى متناقص، يقطع المبدأ <span class="math">(0,0)</span>، وله مقارب أفقي <span class="math">y=1</span> عند <span class="math">-∞</span>.</li>
            <li><span class="math">k(x)=1+2e^x</span>: منحنى متزايد يقطع محور التراتيب في <span class="math">3</span> وله مقارب أفقي <span class="math">y=1</span> عند <span class="math">-∞</span>.</li>
          </ol>
          ${renderExerciseGraph("match42")}
        `,
      },
      {
        title: "تمرين 43: دراسة تغيرات x+1+e^(-x)",
        statement: "لتكن f معرفة على R بـ f(x)=x+1+e^(-x). 1) ادرس تغيرات الدالة f. 2) ادرس نهاية الدالة عند -∞ وعند +∞. 3) شكل جدول تغيرات f. 4) استنتج قيمة صغرى للدالة f.",
        solutionHtml: `
          <ol>
            <li><span class="math">f'(x)=1-e^{-x}</span>. إذن <span class="math">f'(x)<0</span> إذا <span class="math">x<0</span>، و <span class="math">f'(0)=0</span>، و <span class="math">f'(x)>0</span> إذا <span class="math">x>0</span>.</li>
            <li>عند <span class="math">x→-∞</span> لدينا <span class="math">e^{-x}→+∞</span> وهو يغلب <span class="math">x</span>، إذن <span class="math">f(x)→+∞</span>. وعند <span class="math">x→+∞</span> لدينا <span class="math">e^{-x}→0</span> ومنه <span class="math">f(x)→+∞</span>.</li>
            <li>الدالة متناقصة على <span class="math">]-∞,0]</span> ومتزايدة على <span class="math">[0,+∞[</span>.</li>
            <li><span class="math">f(0)=2</span>، إذن القيمة الصغرى هي <span class="math">2</span>.</li>
          </ol>
          ${renderExerciseGraph("min43")}
        `,
      },
      {
        title: "تمرين 44: مقارب مائل ووضعية المنحنى",
        statement: "لتكن f معرفة على R بـ f(x)=1/2 x+1-e^(-x). 1) ادرس تغيرات f ونهايتها عند +∞. 2) بين أن المنحنى (C) يقبل عند +∞ مقاربا مائلا D، ثم عين معادلته. 3) ادرس وضعية (C) بالنسبة إلى D. 4) ارسم المنحنى (C).",
        solutionHtml: `
          <ol>
            <li><span class="math">f'(x)=1/2+e^{-x}>0</span>، إذن <span class="math">f</span> متزايدة تماما على <span class="math">R</span>. وعند <span class="math">+∞</span>: <span class="math">f(x)→+∞</span>.</li>
            <li>نحسب الفرق مع المستقيم <span class="math">D: y=1/2 x+1</span>:
              <div class="math-equation">f(x)-(1/2 x+1)=-e^{-x}</div>
              وعند <span class="math">x→+∞</span> نجد <span class="math">-e^{-x}→0</span>، إذن <span class="math">D</span> مقارب مائل عند <span class="math">+∞</span>.
            </li>
            <li>لأن <span class="math">-e^{-x}<0</span>، فإن <span class="math">(C)</span> يقع أسفل المستقيم <span class="math">D</span> لكل <span class="math">x</span>.</li>
          </ol>
          ${renderExerciseGraph("oblique44")}
        `,
      },
      {
        title: "تمرين 45: دراسة دالة كسرية أسية",
        statement: "لتكن f معرفة على R بـ f(x)=(e^(4x)-3)/(e^(4x)+1). 1) بين أن f(x)=(1-3e^(-4x))/(1+e^(-4x)). 2) ادرس نهاية الدالة عند -∞ وعند +∞. 3) احسب f'(x) وادرس تغيراتها. 4) شكل جدول تغيرات f.",
        solutionHtml: `
          <ol>
            <li>نقسم البسط والمقام على <span class="math">e^{4x}</span> فنجد:
              <div class="math-equation">f(x)=\\frac{1-3e^{-4x}}{1+e^{-4x}}</div>
            </li>
            <li>عند <span class="math">x→-∞</span>: <span class="math">e^{4x}→0</span> ومنه <span class="math">f(x)→-3</span>. وعند <span class="math">x→+∞</span>: <span class="math">f(x)→1</span>.</li>
            <li>
              <div class="math-equation">f'(x)=\\frac{16e^{4x}}{(e^{4x}+1)^2}</div>
              وبما أن <span class="math">f'(x)>0</span> لكل <span class="math">x</span>، فإن <span class="math">f</span> متزايدة تماما على <span class="math">R</span>.
            </li>
            <li>جدول التغيرات: من <span class="math">-3</span> عند <span class="math">-∞</span> إلى <span class="math">1</span> عند <span class="math">+∞</span>، مع تزايد تام.</li>
          </ol>
          ${renderExerciseGraph("sigmoid45")}
        `,
      },
      {
        title: "تمرين 46: مقاربان أفقيان ومقارنة المنحنى",
        statement: "لتكن f معرفة على R بـ f(x)=(4e^x+3)/(2(e^x+1))، و(C) منحناها. 1) دلل أن للمستقيمين D1 وD2 ذوي المعادلتين y=3/2 و y=2 مقاربين أفقيين للمنحنى (C). 2) احسب f'(x) واستنتج اتجاه تغير f. 3) ادرس وضعية (C) بالنسبة إلى D1 وD2.",
        solutionHtml: `
          <ol>
            <li>عند <span class="math">x→-∞</span>: <span class="math">e^x→0</span>، إذن <span class="math">f(x)→3/2</span>. وعند <span class="math">x→+∞</span> نقسم على <span class="math">e^x</span> فنحصل على <span class="math">f(x)→2</span>. إذن <span class="math">y=3/2</span> و <span class="math">y=2</span> مقاربان أفقيان.</li>
            <li>
              <div class="math-equation">f'(x)=\\frac{e^x}{2(e^x+1)^2}</div>
              ومنه <span class="math">f'(x)>0</span> لكل <span class="math">x</span>، إذن <span class="math">f</span> متزايدة تماما.
            </li>
            <li>
              <div class="math-equation">f(x)-2=-\\frac{1}{2(e^x+1)}<0</div>
              إذن <span class="math">(C)</span> تحت المستقيم <span class="math">y=2</span>.
              <div class="math-equation">f(x)-3/2=\\frac{e^x}{2(e^x+1)}>0</div>
              إذن <span class="math">(C)</span> فوق المستقيم <span class="math">y=3/2</span>.
            </li>
          </ol>
          ${renderExerciseGraph("sigmoid46")}
        `,
      }
    ],
    solved: [
      {
        title: "تمرين محلول 1",
        statement: "حل في R المعادلة: e^(2x-1)=e^5.",
        solution: "بما أن الدالة exp تقابلية، فإن 2x-1=5، ومنه 2x=6، إذن x=3.",
      },
      {
        title: "تمرين محلول 2",
        statement: "نعتبر الدالة f المعرفة على R بـ: f(x)=(3e^x-1)/(e^x+1). 1) بين أنه من أجل كل x من R: f(-x)+f(x)=2. 2) بين أنه من أجل كل x من R: f(x)=4e^x/(e^x+1)-1.",
        solutionHtml: `
          <section class="activity-sheet">
            <div class="definition-box">
              <strong>نص التمرين:</strong>
              <p>نعتبر الدالة <span class="math">f</span> المعرفة على <span class="math">R</span> بـ:</p>
              <div class="math-equation">f(x)=<span style="display:inline-block;vertical-align:middle;text-align:center;"><span>3e^x-1</span><span style="display:block;border-top:1px solid currentColor;">e^x+1</span></span></div>
              <ol class="activity-questions">
                <li>بين أنه من أجل كل <span class="math">x</span> من <span class="math">R</span>:
                  <span class="math">f(-x)+f(x)=2</span>.
                </li>
                <li>بين أنه من أجل كل <span class="math">x</span> من <span class="math">R</span>:
                  <span class="math">f(x)=4e^x/(e^x+1)-1</span>.
                </li>
              </ol>
            </div>
            <h4>الحل</h4>
            <ol class="activity-questions">
              <li>
                من أجل كل عدد حقيقي <span class="math">x</span>:
                <div class="math-equation">
                  f(-x)=<span style="display:inline-block;vertical-align:middle;text-align:center;"><span>3e^{-x}-1</span><span style="display:block;border-top:1px solid currentColor;">e^{-x}+1</span></span>
                  =
                  <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>3-e^x</span><span style="display:block;border-top:1px solid currentColor;">1+e^x</span></span>
                </div>
                ومنه:
                <div class="math-equation">
                  f(-x)+f(x)=
                  <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>3-e^x</span><span style="display:block;border-top:1px solid currentColor;">1+e^x</span></span>
                  +
                  <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>3e^x-1</span><span style="display:block;border-top:1px solid currentColor;">e^x+1</span></span>
                </div>
                إذن:
                <div class="math-equation">
                  f(-x)+f(x)=
                  <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>2e^x+2</span><span style="display:block;border-top:1px solid currentColor;">e^x+1</span></span>
                  =2
                </div>
              </li>
              <li>
                نكتب:
                <div class="math-equation">
                  f(x)=<span style="display:inline-block;vertical-align:middle;text-align:center;"><span>3e^x-1</span><span style="display:block;border-top:1px solid currentColor;">e^x+1</span></span>
                </div>
                ونلاحظ أن:
                <div class="math-equation">
                  3e^x-1=4e^x-(e^x+1)
                </div>
                لذلك:
                <div class="math-equation">
                  f(x)=
                  <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>4e^x-(e^x+1)</span><span style="display:block;border-top:1px solid currentColor;">e^x+1</span></span>
                  =
                  <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>4e^x</span><span style="display:block;border-top:1px solid currentColor;">e^x+1</span></span>
                  -1
                </div>
              </li>
            </ol>
          </section>
        `,
        solution: "نحسب f(-x) بعد ضرب البسط والمقام في e^x فنجد f(-x)+f(x)=2. كما أن 3e^x-1=4e^x-(e^x+1)، ومنه f(x)=4e^x/(e^x+1)-1.",
      },
      {
        title: "تمرين محلول 3",
        statement: "مبرهنة: ليكن k عددا حقيقيا. الدوال f القابلة للاشتقاق على R بحيث f'=kf هي الدوال f(x)=Ce^(kx)، حيث C عدد حقيقي ثابت. 1) اقبل المبرهنة. 2) عين كل الدوال f القابلة للاشتقاق على R بحيث f'(x)-2f(x)=0. 3) عين الدالة التي يمر منحناها البياني من النقطة A(1/2, e^2).",
        solutionHtml: `
          <section class="activity-sheet">
            <div class="definition-box">
              <strong>نص التمرين:</strong>
              <p><strong>مبرهنة:</strong> ليكن <span class="math">k</span> عددا حقيقيا. الدوال <span class="math">f</span> القابلة للاشتقاق على <span class="math">R</span> بحيث:</p>
              <div class="math-equation">f'=kf</div>
              <p>هي الدوال:</p>
              <div class="math-equation">f(x)=Ce^{kx}</div>
              <p>حيث <span class="math">C</span> عدد حقيقي ثابت.</p>
              <ol class="activity-questions">
                <li>اقبل هذه المبرهنة.</li>
                <li>عين كل الدوال <span class="math">f</span> القابلة للاشتقاق على <span class="math">R</span> بحيث:
                  <span class="math">f'(x)-2f(x)=0</span>.
                </li>
                <li>عين من بين هذه الدوال، الدالة التي يمر منحناها البياني من النقطة:
                  <span class="math">A(1/2, e^2)</span>.
                </li>
              </ol>
            </div>
            <h4>الحل</h4>
            <ol class="activity-questions">
              <li>
                إذا كانت <span class="math">f</span> قابلة للاشتقاق وتحقق
                <span class="math">f'=kf</span>، فحسب المبرهنة:
                <div class="math-equation">f(x)=Ce^{kx}</div>
                حيث <span class="math">C</span> ثابت حقيقي.
              </li>
              <li>
                لدينا:
                <div class="math-equation">f'(x)-2f(x)=0 ⇔ f'(x)=2f(x)</div>
                إذن هنا <span class="math">k=2</span>. حسب المبرهنة، كل الحلول هي:
                <div class="math-equation">f(x)=Ce^{2x}</div>
                حيث <span class="math">C</span> عدد حقيقي ثابت.
              </li>
              <li>
                نبحث عن الحل الذي يمر منحناه البياني من النقطة
                <span class="math">A(1/2,e^2)</span>، أي:
                <div class="math-equation">f(1/2)=e^2</div>
                وبما أن <span class="math">f(x)=Ce^{2x}</span>، فإن:
                <div class="math-equation">f(1/2)=Ce^{2×1/2}=Ce</div>
                إذن:
                <div class="math-equation">Ce=e^2 ⇔ C=e</div>
                ومنه الدالة المطلوبة هي:
                <div class="math-equation">f(x)=e·e^{2x}=e^{2x+1}</div>
              </li>
            </ol>
            <figure class="mini-graph lesson-graph">
              <svg viewBox="0 0 460 260" role="img" aria-label="عائلة حلول f'=2f">
                <rect x="0" y="0" width="460" height="260" fill="#fff"></rect>
                <g stroke="#d946ef" stroke-width="1">
                  <line x1="35" y1="25" x2="430" y2="25"></line><line x1="35" y1="55" x2="430" y2="55"></line><line x1="35" y1="85" x2="430" y2="85"></line><line x1="35" y1="115" x2="430" y2="115"></line><line x1="35" y1="145" x2="430" y2="145"></line><line x1="35" y1="175" x2="430" y2="175"></line><line x1="35" y1="205" x2="430" y2="205"></line><line x1="35" y1="235" x2="430" y2="235"></line>
                  <line x1="55" y1="20" x2="55" y2="240"></line><line x1="105" y1="20" x2="105" y2="240"></line><line x1="155" y1="20" x2="155" y2="240"></line><line x1="205" y1="20" x2="205" y2="240"></line><line x1="255" y1="20" x2="255" y2="240"></line><line x1="305" y1="20" x2="305" y2="240"></line><line x1="355" y1="20" x2="355" y2="240"></line><line x1="405" y1="20" x2="405" y2="240"></line>
                </g>
                <g stroke="#111" stroke-width="2">
                  <line x1="35" y1="190" x2="430" y2="190"></line>
                  <line x1="255" y1="20" x2="255" y2="240"></line>
                </g>
                <path d="M80 189 C150 187 205 178 245 148 C280 122 306 74 325 25" fill="none" stroke="#ef4444" stroke-width="2.4"></path>
                <path d="M80 191 C150 193 205 202 245 232 C280 258 306 306 325 355" fill="none" stroke="#ef4444" stroke-width="2.4"></path>
                <path d="M80 188 C155 185 220 170 265 120 C300 82 325 38 350 18" fill="none" stroke="#ef4444" stroke-width="2.4" opacity="0.75"></path>
                <path d="M80 190 C155 190 215 187 252 176 C287 166 318 135 345 83" fill="none" stroke="#ef4444" stroke-width="3.2"></path>
                <circle cx="280" cy="159" r="4" fill="#111"></circle>
                <g font-family="Times New Roman, serif" font-size="14" fill="#111">
                  <text x="262" y="204">0</text><text x="414" y="205">x</text><text x="264" y="32">y</text>
                  <text x="287" y="154">A</text>
                  <text x="65" y="52">f(x)=Ce^{2x}</text>
                </g>
              </svg>
              <figcaption>تمثيلات بعض حلول المعادلة <span class="math">f'=2f</span>. الدالة المطلوبة هي التي تمر من النقطة <span class="math">A(1/2,e^2)</span>.</figcaption>
            </figure>
          </section>
        `,
        solution: "من f'(x)-2f(x)=0 نحصل على f'=2f، إذن f(x)=Ce^{2x}. وباستعمال f(1/2)=e^2 نجد Ce=e^2، ومنه C=e والدالة هي f(x)=e^{2x+1}.",
      },
      {
        title: "تمرين محلول 4",
        statement: "حل في R المعادلات والمتراجحات: (1) e^(2x)+3=0. (2) e^(x^2-2x-1)=1. (3) e^(-2x-1) ≥ e^0. (4) e^(2x)+e^x-2<0.",
        solutionHtml: `
          <section class="activity-sheet">
            <div class="definition-box">
              <strong>نص التمرين:</strong>
              <p>حل في <span class="math">R</span> المعادلات والمتراجحات التالية:</p>
              <ol class="activity-questions">
                <li><span class="math">e^{2x}+3=0</span></li>
                <li><span class="math">e^{x^2-2x-1}=1</span></li>
                <li><span class="math">e^{-2x-1} ≥ e^0</span></li>
                <li><span class="math">e^{2x}+e^x-2&lt;0</span></li>
              </ol>
            </div>
            <h4>الحل</h4>
            <ol class="activity-questions">
              <li>
                لدينا <span class="math">e^{2x}&gt;0</span> من أجل كل <span class="math">x</span>، وبالتالي:
                <div class="math-equation">e^{2x}+3&gt;0</div>
                إذن لا توجد حلول:
                <div class="math-equation">S=∅</div>
              </li>
              <li>
                بما أن <span class="math">1=e^0</span> والدالة الأسية تقابلية:
                <div class="math-equation">e^{x^2-2x-1}=1 ⇔ e^{x^2-2x-1}=e^0</div>
                ومنه:
                <div class="math-equation">x^2-2x-1=0</div>
                بحل المعادلة نجد:
                <div class="math-equation">x=1-√2 أو x=1+√2</div>
                إذن:
                <div class="math-equation">S={1-√2, 1+√2}</div>
              </li>
              <li>
                بما أن الدالة الأسية متزايدة تماما:
                <div class="math-equation">e^{-2x-1} ≥ e^0 ⇔ -2x-1 ≥ 0</div>
                أي:
                <div class="math-equation">x ≤ -1/2</div>
                ومنه:
                <div class="math-equation">S=]-∞,-1/2]</div>
              </li>
              <li>
                نضع <span class="math">X=e^x</span>، وبما أن <span class="math">e^x&gt;0</span> فإن <span class="math">X&gt;0</span>.
                تصبح المتراجحة:
                <div class="math-equation">X^2+X-2&lt;0</div>
                نحلل:
                <div class="math-equation">X^2+X-2=(X+2)(X-1)</div>
                ومنه:
                <div class="math-equation">-2&lt;X&lt;1</div>
                وبما أن <span class="math">X&gt;0</span> نحصل على:
                <div class="math-equation">0&lt;X&lt;1</div>
                أي:
                <div class="math-equation">0&lt;e^x&lt;1 ⇔ x&lt;0</div>
                إذن:
                <div class="math-equation">S=]-∞,0[</div>
              </li>
            </ol>
          </section>
        `,
        solution: "الحلول: (1) ∅. (2) {1-√2,1+√2}. (3) ]-∞,-1/2]. (4) ]-∞,0[.",
      },
      {
        title: "تمرين محلول 5",
        statement: "نعتبر الدالة f المعرفة على R\\{0} بـ: f(x)=(e^x+1)/(e^x-1)، و(C) منحناها البياني. 1) عين نهايات الدالة عند أطراف مجموعة تعريفها واستنتج المستقيمات المقاربة. 2) ادرس اتجاه تغير الدالة ثم شكل جدول تغيراتها. 3) ارسم المنحنى (C).",
        solutionHtml: `
          <section class="activity-sheet">
            <div class="definition-box">
              <strong>نص التمرين:</strong>
              <p>نعتبر الدالة <span class="math">f</span> المعرفة على <span class="math">R\\{0}</span> بـ:</p>
              <div class="math-equation">f(x)=<span style="display:inline-block;vertical-align:middle;text-align:center;"><span>e^x+1</span><span style="display:block;border-top:1px solid currentColor;">e^x-1</span></span></div>
              <p>و <span class="math">(C)</span> منحناها البياني.</p>
              <ol class="activity-questions">
                <li>عين نهايات الدالة <span class="math">f</span> عند أطراف مجموعة تعريفها، واستنتج المستقيمات المقاربة للمنحنى <span class="math">(C)</span>.</li>
                <li>ادرس اتجاه تغير الدالة <span class="math">f</span> ثم شكل جدول تغيراتها.</li>
                <li>ارسم المنحنى <span class="math">(C)</span> في معلم متعامد ومتجانس.</li>
              </ol>
            </div>
            <h4>الحل</h4>
            <ol class="activity-questions">
              <li>
                مجموعة التعريف هي:
                <div class="math-equation">D_f=R\\{0}</div>
                لأن <span class="math">e^x-1=0 ⇔ x=0</span>.
                عند <span class="math">-∞</span> لدينا <span class="math">e^x→0</span>، ومنه:
                <div class="math-equation">lim f(x)=-1 عند x→-∞</div>
                وعند <span class="math">+∞</span> نقسم على <span class="math">e^x</span>:
                <div class="math-equation">f(x)=<span style="display:inline-block;vertical-align:middle;text-align:center;"><span>1+e^{-x}</span><span style="display:block;border-top:1px solid currentColor;">1-e^{-x}</span></span> ⇒ lim f(x)=1 عند x→+∞</div>
                عند <span class="math">0</span> لدينا <span class="math">e^x-1→0</span> و <span class="math">e^x+1→2</span>، ومنه:
                <div class="math-equation">lim f(x)=-∞ عند x→0^-</div>
                <div class="math-equation">lim f(x)=+∞ عند x→0^+</div>
                إذن المستقيمات المقاربة هي:
                <div class="math-equation">x=0 ، y=-1 ، y=1</div>
              </li>
              <li>
                نحسب المشتقة:
                <div class="math-equation">
                  f'(x)=<span style="display:inline-block;vertical-align:middle;text-align:center;"><span>e^x(e^x-1)-e^x(e^x+1)</span><span style="display:block;border-top:1px solid currentColor;">(e^x-1)^2</span></span>
                  =
                  <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>-2e^x</span><span style="display:block;border-top:1px solid currentColor;">(e^x-1)^2</span></span>
                </div>
                بما أن <span class="math">e^x&gt;0</span> و <span class="math">(e^x-1)^2&gt;0</span> على مجال التعريف، فإن:
                <div class="math-equation">f'(x)&lt;0</div>
                إذن <span class="math">f</span> متناقصة تماما على كل من:
                <div class="math-equation">]-∞,0[ و ]0,+∞[</div>
                <table class="variation-table">
                  <tr><th>x</th><td class="interval">-∞</td><td class="interval">0^-</td><td class="interval">0^+</td><td class="interval">+∞</td></tr>
                  <tr><th>f'(x)</th><td>-</td><td>-</td><td>-</td><td>-</td></tr>
                  <tr><th>f(x)</th><td>-1</td><td>↘ -∞</td><td>+∞ ↘</td><td>1</td></tr>
                </table>
              </li>
            </ol>
            <figure class="mini-graph lesson-graph">
              <svg viewBox="0 0 430 310" role="img" aria-label="منحنى الدالة (e^x+1)/(e^x-1)">
                <rect x="0" y="0" width="430" height="310" fill="#ffffff"></rect>
                <g stroke="#d946ef" stroke-width="1">
                  <line x1="25" y1="35" x2="405" y2="35"></line><line x1="25" y1="70" x2="405" y2="70"></line><line x1="25" y1="105" x2="405" y2="105"></line><line x1="25" y1="140" x2="405" y2="140"></line><line x1="25" y1="175" x2="405" y2="175"></line><line x1="25" y1="210" x2="405" y2="210"></line><line x1="25" y1="245" x2="405" y2="245"></line><line x1="25" y1="280" x2="405" y2="280"></line>
                  <line x1="40" y1="25" x2="40" y2="285"></line><line x1="85" y1="25" x2="85" y2="285"></line><line x1="130" y1="25" x2="130" y2="285"></line><line x1="175" y1="25" x2="175" y2="285"></line><line x1="220" y1="25" x2="220" y2="285"></line><line x1="265" y1="25" x2="265" y2="285"></line><line x1="310" y1="25" x2="310" y2="285"></line><line x1="355" y1="25" x2="355" y2="285"></line><line x1="400" y1="25" x2="400" y2="285"></line>
                </g>
                <g stroke="#111" stroke-width="2">
                  <line x1="25" y1="175" x2="410" y2="175"></line>
                  <line x1="220" y1="25" x2="220" y2="285"></line>
                </g>
                <line x1="25" y1="140" x2="410" y2="140" stroke="#2563eb" stroke-width="2" stroke-dasharray="7 5"></line>
                <line x1="25" y1="210" x2="410" y2="210" stroke="#2563eb" stroke-width="2" stroke-dasharray="7 5"></line>
                <line x1="220" y1="25" x2="220" y2="285" stroke="#111" stroke-width="2.5" stroke-dasharray="5 4"></line>
                <path d="M45 207 C90 204 130 205 165 218 C190 228 209 251 217 282" fill="none" stroke="#ef4444" stroke-width="3" stroke-linecap="round"></path>
                <path d="M223 28 C230 62 247 86 275 102 C309 121 350 132 398 136" fill="none" stroke="#ef4444" stroke-width="3" stroke-linecap="round"></path>
                <g font-family="Times New Roman, serif" font-size="14" fill="#111">
                  <text x="412" y="190">x</text><text x="229" y="34">y</text>
                  <text x="225" y="190">0</text><text x="225" y="143">1</text><text x="225" y="213">-1</text>
                  <text x="345" y="132">y=1</text><text x="338" y="204">y=-1</text>
                  <text x="231" y="60">x=0</text><text x="310" y="91">(C)</text>
                </g>
              </svg>
              <figcaption>المنحنى <span class="math">(C)</span> له مقارب عمودي <span class="math">x=0</span> ومقاربان أفقيان <span class="math">y=-1</span> و <span class="math">y=1</span>.</figcaption>
            </figure>
          </section>
        `,
        solution: "مجال التعريف R\\{0}. المستقيمات المقاربة: x=0 و y=-1 عند -∞ و y=1 عند +∞. والمشتقة f'(x)=-2e^x/(e^x-1)^2<0، إذن f متناقصة على ]-∞,0[ و ]0,+∞[.",
      },
    ],
  },
  {
    id: "ln-function",
    title: "الدالة اللوغارتمية",
    icon: "📘",
    summary: "تعريف ln كدالة عكسية للدالة الأسية، مجال التعريف، الخواص والتغيرات.",
    lesson: `
      <article class="structured-lesson">
        <header class="structured-lesson-hero">
          <span>محور 2</span>
          <h3>الدالة اللوغارتمية الطبيعية <b>ln</b></h3>
        </header>
        <section class="definition-box">
          <strong>تعريف:</strong>
          <p>الدالة <span class="math">ln</span> معرفة على <span class="math">]0,+∞[</span>، وهي الدالة العكسية للدالة الأسية.</p>
          <div class="math-equation">ln(a)=b ⇔ e^b=a</div>
        </section>
        <section class="property-box">
          <strong>خواص:</strong>
          <div class="math-equation">ln(1)=0 ، ln(e)=1</div>
          <div class="math-equation">ln(ab)=ln(a)+ln(b)</div>
          <div class="math-equation">ln(a/b)=ln(a)-ln(b) ، ln(a^n)=nln(a)</div>
        </section>
        <section class="lesson-block">
          <h4>التغيرات والنهايات</h4>
          <p>الدالة <span class="math">ln</span> متزايدة تمامًا على <span class="math">]0,+∞[</span>.</p>
          <div class="math-equation">lim x→0+ ln(x) = -∞ ، lim x→+∞ ln(x)=+∞</div>
        </section>
      </article>
    `,
    activities: [
      {
        title: "نشاط 2",
        body: "تعريف الدالة اللوغارتمية النيبيرية انطلاقا من الدالة الأسية.",
        bodyHtml: `
          <section class="activity-sheet ln-discovery">
            <header class="activity-intro">
              <span class="panel-label amber">نشاط عكسي</span>
              <h4>إذا عرفنا الصورة، كيف نرجع إلى السابق؟</h4>
              <p>نعرف أن الدالة الأسية تحول كل عدد حقيقي <span class="math">a</span> إلى عدد موجب <span class="math">e^a</span>. نسأل الآن السؤال العكسي: إذا أعطينا عددًا موجبًا <span class="math">b</span>، ما العدد <span class="math">a</span> الذي يحقق <span class="math">e^a=b</span>؟</p>
            </header>

            <div class="activity-stage ln-stage">
              <div class="stage-heading">
                <span>المرحلة 1</span>
                <h4>قراءة السابق على منحنى الدالة الأسية</h4>
                <p>غيّر قيمة <span class="math">b</span>. النقطة الزرقاء تقرأ السابق <span class="math">a</span> على منحنى <span class="math">exp</span>، والنقطة الخضراء تمثل النقطة المقابلة على منحنى الدالة الجديدة.</p>
              </div>
              <div class="activity-visual-grid ln-visual-grid">
                <figure class="mini-graph zoomable-graph ln-inverse-graph" data-zoom-figure>
                  <button class="graph-zoom-btn" type="button" data-zoom-graph aria-label="تكبير الرسم البياني">تكبير</button>
                  <svg data-ln-inverse-graph viewBox="0 0 430 285" role="img" aria-label="قراءة اللوغارتم كدالة عكسية للدالة الأسية">
                    <rect x="0" y="0" width="430" height="285" fill="#fffdf2"></rect>
                    <text x="215" y="24" text-anchor="middle" font-family="Tajawal, Arial, sans-serif" font-size="15" font-weight="800" fill="#111">قراءة ln(b) من منحنى exp</text>
                    <g data-ln-grid stroke="#cbd5a1" stroke-width="1" opacity="0.75"></g>
                    <g data-ln-axes stroke="#111" stroke-width="2"></g>
                    <path data-ln-line stroke="#64748b" fill="none" stroke-width="2" stroke-dasharray="6 5"></path>
                    <path data-ln-exp-path stroke="#ef4444" fill="none" stroke-width="3.2" stroke-linecap="round"></path>
                    <path data-ln-log-path stroke="#00a86b" fill="none" stroke-width="3.2" stroke-linecap="round"></path>
                    <g data-ln-guides></g>
                    <g data-ln-points></g>
                    <g data-ln-labels font-family="Times New Roman, serif" font-size="13" fill="#111"></g>
                  </svg>
                  <figcaption>إذا كانت <span class="math">e^a=b</span> فإننا نسمي السابق <span class="math">a</span> بالعدد <span class="math">ln(b)</span>. إذن <span class="math">ln(b)</span> ليس صورة جديدة، بل هو السابق بالدالة الأسية.</figcaption>
                </figure>
                <div class="ln-control-card">
                  <strong>اختر قيمة موجبة لـ <span class="math">b</span></strong>
                  <label class="table-step-control">
                    <span>b</span>
                    <input data-ln-b type="number" step="0.1" min="0.1" max="5.5" value="2" aria-label="قيمة b لحساب ln(b)">
                  </label>
                  <div class="step-presets" aria-label="قيم مقترحة للعدد b">
                    <button type="button" data-ln-b-preset="0.5">0.5</button>
                    <button type="button" data-ln-b-preset="1">1</button>
                    <button type="button" data-ln-b-preset="2">2</button>
                    <button type="button" data-ln-b-preset="2.718281828">e</button>
                    <button type="button" data-ln-b-preset="5">5</button>
                  </div>
                  <output class="ln-reading-output" data-ln-reading aria-live="polite"></output>
                  <ol class="activity-questions guided-questions">
                    <li>لماذا لا نقبل إلا القيم الموجبة لـ <span class="math">b</span>؟</li>
                    <li>عندما <span class="math">b=1</span>، ما قيمة السابق <span class="math">a</span>؟</li>
                    <li>عندما <span class="math">b&gt;1</span>، هل يكون <span class="math">ln(b)</span> موجبًا أم سالبًا؟ وماذا يحدث عندما <span class="math">0&lt;b&lt;1</span>؟</li>
                  </ol>
                </div>
              </div>
            </div>

            <div class="definition-box activity-definition">
              <strong>تعريف:</strong>
              لكل عدد حقيقي موجب <span class="math">b</span> يوجد عدد حقيقي وحيد <span class="math">a</span> بحيث <span class="math">e^a=b</span>. نكتب هذا العدد:
              <div class="math-equation">a=ln(b) ⇔ e^a=b</div>
            </div>

            <div class="activity-stage">
              <div class="stage-heading">
                <span>المرحلة 2</span>
                <h4>جدول قيم وبداية الإحساس بالإشارة</h4>
                <p>املأ الجدول انطلاقًا من معنى <span class="math">ln(b)</span> كسابق للعدد <span class="math">b</span> بالدالة الأسية.</p>
              </div>
              <table class="activity-mini-table ln-value-table">
                <thead>
                  <tr><th>b</th><th>معناه</th><th>ln(b)</th><th>الإشارة</th></tr>
                </thead>
                <tbody>
                  <tr data-ln-row data-b="1"><td>1</td><td>e^0</td><td data-ln-value></td><td data-ln-sign></td></tr>
                  <tr data-ln-row data-b="2.718281828"><td>e</td><td>e^1</td><td data-ln-value></td><td data-ln-sign></td></tr>
                  <tr data-ln-row data-b="0.367879441"><td>1/e</td><td>e^-1</td><td data-ln-value></td><td data-ln-sign></td></tr>
                  <tr data-ln-row data-b="7.389056099"><td>e^2</td><td>e^2</td><td data-ln-value></td><td data-ln-sign></td></tr>
                  <tr data-ln-row data-b="2"><td>2</td><td>بين e^0 و e^1</td><td data-ln-value></td><td data-ln-sign></td></tr>
                  <tr data-ln-row data-b="0.5"><td>1/2</td><td>بين e^-1 و e^0</td><td data-ln-value></td><td data-ln-sign></td></tr>
                </tbody>
              </table>
            </div>

            <div class="activity-stage">
              <div class="stage-heading">
                <span>المرحلة 3</span>
                <h4>بناء الخواص من خواص الأسية</h4>
                <p>بدل حفظ خواص اللوغارتم، نبنيها من خاصية الأسية <span class="math">e^(x+y)=e^x e^y</span>.</p>
              </div>
              <ol class="activity-questions guided-questions">
                <li>نضع <span class="math">u=ln(a)</span> و <span class="math">v=ln(b)</span>. اكتب <span class="math">a</span> و <span class="math">b</span> بدلالة <span class="math">e^u</span> و <span class="math">e^v</span>.</li>
                <li>استنتج أن <span class="math">ab=e^(u+v)</span> ثم بين أن <span class="math">ln(ab)=ln(a)+ln(b)</span>.</li>
                <li>بنفس الطريقة، استنتج <span class="math">ln(a/b)=ln(a)-ln(b)</span> عندما <span class="math">a&gt;0</span> و <span class="math">b&gt;0</span>.</li>
                <li>استنتج <span class="math">ln(a^n)=nln(a)</span> من العلاقة <span class="math">(e^u)^n=e^(nu)</span>.</li>
              </ol>
            </div>

            <div class="activity-stage">
              <div class="stage-heading">
                <span>المرحلة 4</span>
                <h4>التمثيل البياني والتغيرات</h4>
                <p>منحنى <span class="math">ln</span> يحصل من منحنى <span class="math">exp</span> بتبديل الفاصلة والترتيبة، أي بالتناظر بالنسبة إلى المستقيم <span class="math">y=x</span>.</p>
              </div>
              <ol class="activity-questions guided-questions">
                <li>إذا كانت <span class="math">M(a,b)</span> على منحنى <span class="math">exp</span>، فلماذا تكون <span class="math">M'(b,a)</span> على منحنى <span class="math">ln</span>؟</li>
                <li>خمن اتجاه تغير <span class="math">ln</span> من اتجاه تغير <span class="math">exp</span>.</li>
                <li>ماذا تلاحظ عندما يقترب <span class="math">b</span> من <span class="math">0</span>؟ وماذا يحدث عندما يكبر <span class="math">b</span>؟</li>
              </ol>
            </div>
          </section>
        `,
        solution: "لكل b>0 يوجد عدد وحيد a بحيث e^a=b، وهذا العدد هو ln(b).",
        solutionHtml: `
          <section class="activity-sheet">
            <p>بما أن الدالة الأسية مستمرة ومتزايدة تماما، وبما أن صورها تمتد من <span class="math">0</span> إلى <span class="math">+∞</span>، فإن كل عدد موجب تماما <span class="math">b</span> له سابق وحيد <span class="math">a</span>.</p>
            <p>نكتب هذا السابق على الشكل: <span class="math">a=ln(b)</span>، أي:
              <span class="math">e^a=b ⇔ a=ln(b)</span>.
            </p>
            <ol class="activity-questions">
              <li><span class="math">ln(1)=0</span>، <span class="math">ln(e)=1</span>، <span class="math">ln(1/e)=-1</span>، و <span class="math">ln(e^2)=2</span>.</li>
              <li><span class="math">ln(2)≈0.693</span>، ومنه <span class="math">ln(1/2)=-ln(2)≈-0.693</span>.</li>
              <li>النقطتان <span class="math">M(x,y)</span> و <span class="math">M'(y,x)</span> متناظرتان بالنسبة إلى المستقيم <span class="math">y=x</span>.</li>
              <li><span class="math">M(a,b)∈(C)</span> يعني <span class="math">b=e^a</span>، وهذا يكافئ <span class="math">a=ln(b)</span>، أي <span class="math">M'(b,a)∈(C')</span>.</li>
              <li>إذن المنحنيان <span class="math">(C)</span> و <span class="math">(C')</span> متناظران بالنسبة إلى المستقيم <span class="math">y=x</span>.</li>
              <li>الدالة <span class="math">ln</span> متزايدة تماما على <span class="math">]0,+∞[</span>، و <span class="math">lim ln(x)=-∞</span> عند <span class="math">x→0^+</span>، و <span class="math">lim ln(x)=+∞</span> عند <span class="math">x→+∞</span>.</li>
            </ol>
          </section>
        `,
      },
      {
        title: "نشاط: مقياس لوغارتمي",
        body: "إذا تضاعفت كمية موجبة من a إلى 2a، ما مقدار التغير في ln؟",
        solution: "ln(2a)-ln(a)=ln(2)+ln(a)-ln(a)=ln(2). التغير ثابت ولا يعتمد على a.",
      },
    ],
    exercises: [],
    solved: [
      {
        title: "تمرين محلول 1",
        statement: "حل في R المعادلة: ln(2x-1)=ln(5).",
        solution: "شرط التعريف: 2x-1>0 أي x>1/2. وبما أن ln تقابلية: 2x-1=5، إذن x=3. الحل مقبول.",
      },
    ],
  },
  {
    id: "equations",
    title: "معادلات ومتراجحات",
    icon: "🧮",
    summary: "حل المعادلات والمتراجحات الأسية واللوغارتمية مع شروط التعريف.",
    lesson: `
      <article class="structured-lesson">
        <header class="structured-lesson-hero">
          <span>محور 3</span>
          <h3>المعادلات والمتراجحات الأسية واللوغارتمية</h3>
        </header>
        <section class="method-box">
          <strong>منهجية عامة:</strong>
          <p>في اللوغارتم نبدأ دائمًا بشرط التعريف. في الأسية نستعمل تقابلية <span class="math">exp</span> أو نأخذ <span class="math">ln</span> للطرفين عندما يكون ذلك مناسبًا.</p>
        </section>
        <section class="property-box">
          <strong>قواعد مفيدة:</strong>
          <div class="math-equation">e^u = e^v ⇔ u=v</div>
          <div class="math-equation">ln(u)=ln(v) ⇔ u=v مع u>0 و v>0</div>
          <div class="math-equation">ln(u) &lt; ln(v) ⇔ 0&lt;u&lt;v</div>
        </section>
      </article>
    `,
    activities: [
      {
        title: "نشاط: اختيار طريقة الحل",
        body: "صنف المعادلتين حسب الطريقة: e^(x+1)=7 و ln(x-2)=3.",
        solution: "الأولى نأخذ ln للطرفين: x+1=ln7. الثانية نستعمل تعريف ln: x-2=e^3.",
      },
    ],
    exercises: [],
    solved: [
      {
        title: "تمرين محلول 1",
        statement: "حل في R: ln(x^2-1)=ln(3x+1).",
        solution: "الشروط: x^2-1>0 و 3x+1>0. ثم x^2-1=3x+1 أي x^2-3x-2=0. الحل المقبول بعد فحص الشروط هو x=(3+√17)/2.",
      },
    ],
  },
  {
    id: "study-functions",
    title: "دراسة دوال أسية ولوغارتمية",
    icon: "🎯",
    summary: "اشتقاق، جدول تغيرات، نهايات، ومناقشة الوضعية النسبية للمنحنيات.",
    lesson: `
      <article class="structured-lesson">
        <header class="structured-lesson-hero">
          <span>محور 4</span>
          <h3>دراسة دوال أسية ولوغارتمية</h3>
        </header>
        <section class="property-box">
          <strong>مشتقات أساسية:</strong>
          <div class="math-equation">(e^u)' = u'e^u</div>
          <div class="math-equation">(ln u)' = u'/u حيث u&gt;0</div>
        </section>
        <section class="method-box">
          <strong>خطة دراسة دالة:</strong>
          <p>نحدد المجال، نحسب النهايات، نشتق، ندرس إشارة المشتقة، نبني جدول التغيرات، ثم نستنتج القيم المطلوبة.</p>
        </section>
      </article>
    `,
    activities: [
      {
        title: "نشاط: قراءة جدول تغيرات",
        body: "لدالة f(x)=xe^x، احسب f'(x) واستنتج اتجاه التغير.",
        solution: "f'(x)=e^x+xe^x=e^x(x+1). بما أن e^x>0، فإشارة f' هي إشارة x+1. إذن f متناقصة على ]-∞,-1] ومتزايدة على [-1,+∞[.",
      },
    ],
    exercises: [],
    solved: [
      {
        title: "تمرين محلول 1",
        statement: "ادرس تغيرات f(x)=ln(x)/x على ]0,+∞[.",
        solution: "f'(x)=(1-ln x)/x^2. بما أن x^2>0، فإشارة f' هي إشارة 1-ln x. إذن f متزايدة على ]0,e] ومتناقصة على [e,+∞[، وتبلغ قيمة عظمى f(e)=1/e.",
      },
    ],
  },
  {
    id: "partial-ideas",
    title: "أفكار التمارين والبكالوريا",
    icon: "🧭",
    summary: "باب جامع يقتبس الأفكار الجزئية المتكررة في الدروس والتمارين ومواضيع البكالوريا، مع أمثلة تدريبية مرتبطة بالمحاور.",
    lesson: `
      <article class="structured-lesson">
        <header class="structured-lesson-hero">
          <span>محور جامع</span>
          <h3>خريطة الأفكار الجزئية في الدوال الأسية واللوغارتمية</h3>
        </header>

        <section class="definition-box">
          <strong>هدف الباب:</strong>
          <p>هذا الباب لا يضيف قاعدة جديدة، بل يجمع طريقة تفكير البكالوريا: السؤال الواحد غالبا يختبر فكرة صغيرة مثل مجال التعريف، نهاية، إشارة مشتقة، مقارب، مماس، مناقشة وسيط، أو مساحة. عندما تتعرف على الفكرة الجزئية بسرعة يصبح الحل أقصر وأوضح.</p>
        </section>

        <section class="lesson-block">
          <h4>الخلاصة التعليمية لشعبة الرياضيات منذ 2008</h4>
          <div class="method-box">
            <strong>العدة القاعدية:</strong>
            <p>مواضيع شعبة الرياضيات في الدوال الأسية واللوغارتمية تدور حول دراسة دالة كاملة، لكن مفتاح الحل غالبا يكون فكرة صغيرة: دالة مساعدة، إشارة مشتقة، مقارب، مماس، وسيط، أو مساحة.</p>
            <ul>
              <li>دراسة دالة مساعدة واستعمال إشارتها في تحديد إشارة مشتقة دالة أخرى.</li>
              <li>حساب النهايات وتفسيرها هندسيا كمقارب عمودي، أفقي، أو مائل.</li>
              <li>الاشتقاق وبناء جدول التغيرات انطلاقا من عوامل موجبة وإشارات بسيطة.</li>
              <li>دراسة الوضع النسبي بين منحنى ومستقيم أو بين منحنيين باستعمال فرق الدالتين.</li>
              <li>كتابة معادلة المماس، أو البحث عن مماس مواز لمستقيم معلوم.</li>
              <li>إثبات وجود وحيد لجذر وحصره باستعمال الاستمرارية والرتابة.</li>
              <li>مناقشة عدد حلول معادلة وسيطية بالاعتماد على جدول التغيرات أو القراءة البيانية.</li>
              <li>حساب مساحة باستعمال التكامل بعد تحديد الدالة العليا والدالة السفلى.</li>
              <li>التعامل مع الدوال المرتبطة مثل <span class="math">f(|x|)</span>، <span class="math">f(-x)</span>، <span class="math">f(ln x)</span>، و <span class="math">f(e^x)</span>.</li>
              <li>استعمال التناظر، الزوجية، القيمة المطلقة، وأحيانا المتتاليات المرتبطة بالدالة.</li>
            </ul>
          </div>
          <div class="property-box">
            <strong>ترتيب المراجعة المقترح:</strong>
            <p>الجبر والإشارة → النهايات → الاشتقاق → جدول التغيرات → المقارب والمماس → المناقشة البيانية → التكامل والمساحة → الدوال المركبة والمتتاليات.</p>
          </div>
        </section>

        <section class="lesson-block">
          <h4>الدراسة الوافية لشعبة تقني رياضي</h4>
          <div class="method-box">
            <strong>الصورة العامة:</strong>
            <p>مواضيع تقني رياضي في الدوال الأسية واللوغارتمية تشبه شعبة الرياضيات في البنية، لكنها تميل أكثر إلى التمرين المنظم: قراءة أو دالة مساعدة، ثم دراسة دالة رئيسية، ثم استغلال بياني أو تكاملي. لذلك لا يكفي حفظ قواعد <span class="math">e^x</span> و <span class="math">ln x</span>؛ المطلوب هو معرفة متى نستعمل كل أداة داخل سلسلة حل واحدة.</p>
            <ul>
              <li>في البدايات الحديثة مثل 2025 و2024 يظهر غالبا سؤال يثبت مهارة الانطلاق: قراءة بيانية، دالة مساعدة، أو نهاية مرتبطة بمقارب.</li>
              <li>قلب الموضوع يكون في الاشتقاق وإشارة المشتقة، مع تفكيك العبارة إلى عامل موجب وعامل يحدد الإشارة.</li>
              <li>السؤال الهندسي لا يغيب: مماس، مقارب، وضعية نسبية، أو رسم منحنى بعد جمع المعلومات.</li>
              <li>الخاتمة غالبا تكون مناقشة وسيط، حساب مساحة، دالة أصلية، أو دالة مرتبطة بتناظر أو تركيب.</li>
            </ul>
          </div>
          <div class="property-box">
            <strong>ما الذي يتكرر أكثر؟</strong>
            <p>أكثر الأفكار حضورا في تقني رياضي هي: النهايات والمقاربات، الاشتقاق والتغيرات، المماس، المناقشة البيانية، المساحة، والدوال المساعدة. أما الأسئلة التي تميز الشعبة فهي كثرة الربط بين القراءة البيانية والحساب، واستعمال النتائج السابقة بسرعة في الجزء الموالي.</p>
          </div>
        </section>

        <section class="lesson-block">
          <h4>خريطة مواضيع تقني رياضي حسب نوع السؤال</h4>
          <div class="method-box">
            <strong>1. الدالة المساعدة:</strong>
            <p>تظهر عندما تكون مشتقة الدالة الرئيسية صعبة الإشارة. ندرس دالة أبسط مثل <span class="math">g</span>، ثم نستعمل إشارتها في <span class="math">f'</span>. هذه الفكرة حاضرة في مواضيع لوغارتمية كثيرة مثل 2019، 2018، 2016، 2013، و2012.</p>
            <div class="math-equation">g(x) ≥ 0 ⇒ f'(x) لها إشارة معلومة</div>
          </div>
          <div class="method-box">
            <strong>2. المقارب والوضع النسبي:</strong>
            <p>في تقني رياضي لا يطلب المقارب كحساب مجرد فقط؛ بعد إيجاده يأتي غالبا سؤال الوضع النسبي أو الرسم. المفتاح هو دراسة الفرق بين الدالة والمستقيم.</p>
            <div class="math-equation">f(x)-(ax+b) → 0 ثم ندرس إشارة f(x)-(ax+b)</div>
          </div>
          <div class="method-box">
            <strong>3. المماس:</strong>
            <p>قد يطلب مماسا عند نقطة معلومة، أو مماسا موازيا لمستقيم. في الحالة الثانية نحل <span class="math">f'(x)=a</span> حيث <span class="math">a</span> ميل المستقيم.</p>
            <div class="math-equation">T_a: y=f'(a)(x-a)+f(a)</div>
          </div>
          <div class="method-box">
            <strong>4. المناقشة بالوسيط:</strong>
            <p>تأتي غالبا بعد جدول التغيرات أو بعد الرسم. لا نعيد الدراسة من الصفر؛ نقرأ عدد التقاطعات حسب موضع المستقيم أو حسب مستوى <span class="math">m</span>.</p>
            <div class="math-equation">عدد حلول f(x)=m يقرأ من جدول التغيرات أو من C_f</div>
          </div>
          <div class="method-box">
            <strong>5. المساحة والدالة الأصلية:</strong>
            <p>المساحة في تقني رياضي مرتبطة غالبا بالوضع النسبي الذي أثبتناه قبلها. قبل التكامل نحدد من الأعلى ومن الأسفل، ثم ننتبه إلى وحدة المساحة إن طلبت بالسنتيمتر المربع.</p>
            <div class="math-equation">A = وحدة^2 × ∫<sub>a</sub><sup>b</sup> |f(x)-g(x)| dx</div>
          </div>
        </section>

        <section class="lesson-block">
          <h4>برنامج مراجعة تقني رياضي قبل البكالوريا</h4>
          <div class="property-box">
            <strong>الأسبوع الأول:</strong>
            <p>راجع المجال، النهايات، المقاربات، والوضع النسبي. الهدف أن تعرف مباشرة ماذا تحسب لإثبات مقارب أفقي أو مائل.</p>
          </div>
          <div class="property-box">
            <strong>الأسبوع الثاني:</strong>
            <p>ركز على الاشتقاق وجدول التغيرات: جداء، قسمة، تركيب، <span class="math">e^u</span> و <span class="math">ln u</span>. كل حل ناقص الإشارة سيضعف بقية التمرين.</p>
          </div>
          <div class="property-box">
            <strong>الأسبوع الثالث:</strong>
            <p>حل مواضيع 2025، 2024، 2023، و2022 تقني رياضي كاملة. لا تكتف بالقراءة: اكتب الحل كما سيكتب في ورقة الامتحان.</p>
          </div>
          <div class="property-box">
            <strong>الأسبوع الرابع:</strong>
            <p>اختم بالمناقشة البيانية، المساحة، الدوال الأصلية، والدوال المرتبطة. هذه الأسئلة تأتي في آخر التمرين لكنها تفرق كثيرا في العلامة.</p>
          </div>
        </section>

        <section class="lesson-block">
          <h4>1. أفكار الانطلاق: المجال والكتابة المناسبة</h4>
          <div class="method-box">
            <strong>الفكرة الجزئية:</strong>
            <p>قبل الاشتقاق أو النهاية نحدد المجال، ثم نبحث عن كتابة تكشف المطلوب: عامل مشترك، حد غالب، أو تحويل باللوغارتم.</p>
            <div class="math-equation">ln(u(x)) يتطلب u(x)&gt;0</div>
            <div class="math-equation">e^x&gt;0 لكل x، لذلك يفيد في الإشارة والمتراجحات</div>
          </div>
          <div class="property-box">
            <strong>أمثلة من التمارين:</strong>
            <p>تمرين 1 يستعمل مجال تعريف دوال أسية، وتمرين 2 و3 يركزان على تبسيط عبارات أسية قبل أي دراسة. في باب اللوغارتم، التمرين المحلول حول <span class="math">ln(2x-1)=ln(5)</span> يبدأ بشرط <span class="math">2x-1&gt;0</span>.</p>
          </div>
        </section>

        <section class="lesson-block">
          <h4>2. أفكار النهايات والمقاربات</h4>
          <div class="method-box">
            <strong>الفكرة الجزئية:</strong>
            <p>نهايات البكالوريا لا تطلب الحساب فقط، بل تطلب تفسير النتيجة: مقارب أفقي، شاقولي، أو مائل، ثم وضعية المنحنى بالنسبة إليه.</p>
            <div class="math-equation">f(x)-ax-b → 0 ⇒ y=ax+b مقارب مائل</div>
            <div class="math-equation">f(x)-k → 0 ⇒ y=k مقارب أفقي</div>
          </div>
          <div class="property-box">
            <strong>أمثلة من التمارين:</strong>
            <p>تمارين 17 إلى 24 تدرب على النهايات والحد الغالب. تمرين 26 يربط النهاية بالمقارب الأفقي والشاقولي، وتمرين 27 و28 يركزان على المقارب المائل. في بكالوريا الجزائر 2024 الموضوع الأول تظهر فكرة المقارب المائل مع الدالة <span class="math">-2x+3-xe^(-x+1)</span>.</p>
          </div>
        </section>

        <section class="lesson-block">
          <h4>3. أفكار الاشتقاق والتغيرات</h4>
          <div class="method-box">
            <strong>الفكرة الجزئية:</strong>
            <p>بعد حساب المشتقة لا ندرسها كعبارة معقدة، بل نفصل العامل الموجب عن العامل الذي يحدد الإشارة.</p>
            <div class="math-equation">(e^u)'=u'e^u ، و e^u&gt;0</div>
            <div class="math-equation">(ln u)'=u'/u مع u&gt;0</div>
          </div>
          <div class="property-box">
            <strong>أمثلة من التمارين:</strong>
            <p>تمارين 29 إلى 39 تجمع صيغ الاشتقاق: جداء، خارج قسمة، ودالة مركبة. تمرين <span class="math">f(x)=xe^x</span> في محور دراسة الدوال يختزل الإشارة في <span class="math">x+1</span>. مواضيع بكالوريا 2025 و2023 توظف الفكرة نفسها لبناء جدول التغيرات ثم استنتاج عدد الحلول.</p>
          </div>
        </section>

        <section class="lesson-block">
          <h4>4. أفكار القراءة البيانية والمماس</h4>
          <div class="method-box">
            <strong>الفكرة الجزئية:</strong>
            <p>من الرسم نستخرج قيمة، إشارة، عدد حلول، أو معادلة مماس. ومعادلة المماس عند <span class="math">x=a</span> هي:</p>
            <div class="math-equation">y=f'(a)(x-a)+f(a)</div>
          </div>
          <div class="property-box">
            <strong>أمثلة من التمارين:</strong>
            <p>تمرين 41 و42 يعلمان تحويل المنحنيات ومطابقة الدوال مع الرسوم. في بكالوريا الجزائر 2022 يظهر سؤال قراءة بيانية للدالة والمماس، وفي بكالوريا فرنسا 2025 تظهر مقارنة منحنيين انطلاقا من الشكل.</p>
          </div>
        </section>

        <section class="lesson-block">
          <h4>5. أفكار المناقشة بالوسيط والمعادلات</h4>
          <div class="method-box">
            <strong>الفكرة الجزئية:</strong>
            <p>عندما يظهر وسيط <span class="math">m</span> نربط المعادلة بتقاطع منحنيين أو بمستقيم أفقي/مائل، ثم نستعمل جدول التغيرات أو القراءة البيانية.</p>
            <div class="math-equation">f(x)=m ⇔ تقاطع C_f مع المستقيم y=m</div>
          </div>
          <div class="property-box">
            <strong>أمثلة من التمارين:</strong>
            <p>تمرين 10 يحول المعادلة إلى درجة ثانية في <span class="math">e^x</span>. مواضيع بكالوريا 2024 و2025 تتضمن مناقشة عدد حلول معادلة حسب وسيط، وهي نفس فكرة قراءة جدول التغيرات واختيار مستوى التقاطع.</p>
          </div>
        </section>

        <section class="lesson-block">
          <h4>6. أفكار المساحة والدوال الأصلية</h4>
          <div class="method-box">
            <strong>الفكرة الجزئية:</strong>
            <p>سؤال المساحة يأتي غالبا في آخر التمرين بعد معرفة الوضعية النسبية. نحدد الإشارة أولا ثم نحسب تكاملا أو فرقا بين دالتين.</p>
            <div class="math-equation">A = ∫(الدالة العليا - الدالة السفلى) dx</div>
          </div>
          <div class="property-box">
            <strong>أمثلة من البكالوريا:</strong>
            <p>بكالوريا الجزائر 2025 و2024 و2023 تتكرر فيها مساحة محصورة بعد دراسة المنحنى. في النماذج الأجنبية، تمارين المغرب وتونس تربط المساحة بالدوال الأسية أو اللوغارتمية وأحيانا بالمتتاليات.</p>
          </div>
        </section>
      </article>
    `,
    activities: [
      {
        title: "نشاط 1: تصنيف السؤال حسب فكرته",
        body: "صنف الأسئلة الآتية: تحديد D_f، حساب lim f(x)، إيجاد f'(x)، مناقشة f(x)=m، حساب مساحة محصورة.",
        solution: "D_f فكرة مجال التعريف، lim فكرة نهاية ومقارب، f' فكرة اشتقاق وتغيرات، f(x)=m فكرة مناقشة بالوسيط، والمساحة فكرة تكامل بعد معرفة الوضعية النسبية.",
      },
      {
        title: "نشاط 2: ربط التمرين بالفكرة",
        body: "اختر الفكرة المشتركة بين تمرين 27، تمرين 28، وبكالوريا 2024 الموضوع الأول.",
        solution: "الفكرة المشتركة هي المقارب المائل: نحسب f(x)-(ax+b)، فإذا كانت النهاية 0 نستنتج المقارب، ثم ندرس إشارة الفرق لمعرفة وضعية المنحنى.",
      },
      {
        title: "نشاط 3: ترتيب حل سؤال بكالوريا",
        body: "في تمرين يطلب المجال، النهاية، جدول التغيرات، ثم عدد الحلول، ما الترتيب المنهجي؟",
        solution: "نبدأ بالمجال، ثم النهايات، ثم المشتقة وإشارتها، ثم جدول التغيرات، وبعده نستعمل الجدول لمناقشة عدد الحلول أو قراءة القيم المطلوبة.",
      },
      {
        title: "نشاط 4: قراءة موضوع تقني رياضي",
        body: "موضوع تقني رياضي يبدأ بقراءة بيانية لدالة g، ثم يطلب دراسة دالة f، ثم مساحة. ما دور الجزء البياني الأول؟",
        solution: "الجزء البياني الأول ليس منفصلا عن الدراسة؛ غالبا نستعمله لمعرفة إشارة g أو عدد حلول معادلة، ثم ننقل هذه النتيجة إلى إشارة f' أو إلى مناقشة عدد حلول f(x)=m، وبعدها تأتي المساحة اعتمادا على الوضع النسبي.",
      },
    ],
    exercises: [
      {
        title: "تمرين 1: بطاقة فكرة المجال",
        statement: "استخرج فكرة المجال من العبارات: ln(2x-1)، e^(1/x)، و ln(e^x-1). ثم اكتب الشرط المناسب لكل حالة.",
        solution: "ln(2x-1): الشرط 2x-1>0 أي x>1/2. e^(1/x): الشرط x≠0 لأن 1/x معرف. ln(e^x-1): الشرط e^x-1>0 أي e^x>1 ومنه x>0.",
      },
      {
        title: "تمرين 2: بطاقة فكرة المقارب",
        statement: "إذا كانت f(x)=2x+1-e^(-x)، استعمل فكرة تمرين 27 لتحديد مقارب مائل عند +∞ ووضعية المنحنى بالنسبة إليه.",
        solution: "نحسب f(x)-(2x+1)=-e^(-x). عند +∞ النهاية 0، إذن y=2x+1 مقارب مائل. وبما أن -e^(-x)<0 فإن المنحنى يقع أسفل المقارب.",
      },
      {
        title: "تمرين 3: بطاقة فكرة التغيرات",
        statement: "استعمل فكرة فصل العامل الموجب لدراسة إشارة مشتقة f(x)=xe^x.",
        solution: "f'(x)=e^x+xe^x=e^x(x+1). بما أن e^x>0 فإن إشارة f' هي إشارة x+1. إذن f متناقصة على ]-∞,-1] ومتزايدة على [-1,+∞[.",
      },
      {
        title: "تمرين 4: بطاقة فكرة المناقشة",
        statement: "إذا كان جدول تغيرات f يبين أن لها قيمة صغرى 2 عند x=0 وأنها تتجه إلى +∞ في الطرفين، ناقش عدد حلول f(x)=m.",
        solution: "إذا m<2 فلا حلول. إذا m=2 يوجد حل وحيد هو x=0. إذا m>2 يوجد حلان لأن المستقيم y=m يقطع فرعي المنحنى في نقطتين.",
      },
      {
        title: "تمرين 5: بطاقة فكرة المساحة",
        statement: "في نهاية تمرين بكالوريا ثبت أن C_f أسفل المستقيم D: y=2x+1 على [0,1]. اكتب صيغة المساحة بينهما.",
        solution: "بما أن D أعلى C_f، فإن المساحة هي A=∫ من 0 إلى 1 [(2x+1)-f(x)] dx. نضع الفرق موجبا قبل الحساب.",
      },
      {
        title: "تمرين 6: سلسلة تقني رياضي",
        statement: "لتكن f(x)=x+2-e^(-x). بين أن y=x+2 مقارب مائل عند +∞، ثم حدد وضعية C_f بالنسبة إليه، واكتب مساحة الحيز بينهما على [0,1].",
        solution: "نحسب f(x)-(x+2)=-e^(-x). عند +∞ يؤول الفرق إلى 0، إذن y=x+2 مقارب مائل. وبما أن -e^(-x)<0 فإن C_f أسفل المستقيم. المساحة على [0,1] هي A=∫ من 0 إلى 1 [(x+2)-f(x)] dx=∫ من 0 إلى 1 e^(-x) dx=1-e^(-1).",
      },
    ],
    solved: [
      {
        title: "تمرين محلول: من سؤال جزئي إلى حل كامل",
        statement: "لدينا f(x)=x+1+e^(-x). حدد الفكرة الجزئية المناسبة لدراسة تغيراتها ومناقشة عدد حلول f(x)=m.",
        solution: "الفكرة الأولى هي الاشتقاق مع فصل العامل الموجب: f'(x)=1-e^(-x). إشارة f' سالبة إذا x<0 وموجبة إذا x>0، إذن f لها قيمة صغرى f(0)=2. الفكرة الثانية هي المناقشة بالوسيط: إذا m<2 لا يوجد حل، إذا m=2 حل وحيد، وإذا m>2 حلان.",
      },
    ],
  },
];

const IDEAS_MODULE_ID = "partial-ideas";
const getLearningModules = () => modules.filter((module) => module.id !== IDEAS_MODULE_ID);
const getIdeasModule = () => modules.find((module) => module.id === IDEAS_MODULE_ID);

const state = {
  currentView: "home",
  currentModuleId: modules[0].id,
  progress: loadProgress(),
  moduleTab: "activities",
  openSolutions: {},
};

const views = {
  home: document.getElementById("homeView"),
  learn: document.getElementById("learnView"),
  module: document.getElementById("moduleView"),
  exercises: document.getElementById("exercisesView"),
  ideas: document.getElementById("ideasView"),
  solved: document.getElementById("solvedView"),
  bac: document.getElementById("bacView"),
  progress: document.getElementById("progressView"),
};

function setActiveTabs(containerSelector, activeButton, attributeName) {
  const container = document.querySelector(containerSelector);
  if (!container) return;
  container.querySelectorAll(`[${attributeName}]`).forEach((button) => {
    const isActive = button === activeButton;
    button.classList.toggle("active", isActive);
    if (isActive) {
      button.setAttribute("aria-current", "true");
    } else {
      button.removeAttribute("aria-current");
    }
  });
}

function setBacPanel(tabName) {
  const container = document.getElementById("bacView");
  if (!container) return;
  container.classList.toggle("is-mock-active", tabName === "mock");
  document.querySelectorAll("[data-bac-tab]").forEach((button) => {
    const isActive = button.dataset.bacTab === tabName;
    button.classList.toggle("active", isActive);
    if (isActive) {
      button.setAttribute("aria-current", "true");
    } else {
      button.removeAttribute("aria-current");
    }
  });
  document.querySelectorAll('[data-view="bac"]:not([data-bac-tab])').forEach((button) => {
    const isActive = tabName !== "mock";
    button.classList.toggle("active", isActive);
    if (isActive) {
      button.setAttribute("aria-current", "true");
    } else {
      button.removeAttribute("aria-current");
    }
  });
  container.querySelectorAll("[data-bac-panel]").forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.bacPanel === tabName);
  });
}

function setMockBacBranch(branchName) {
  document.querySelectorAll("[data-mock-branch]").forEach((button) => {
    const isActive = button.dataset.mockBranch === branchName;
    button.classList.toggle("active", isActive);
    if (isActive) {
      button.setAttribute("aria-current", "true");
    } else {
      button.removeAttribute("aria-current");
    }
  });
  document.querySelectorAll("[data-mock-panel]").forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.mockPanel === branchName);
  });
}

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { completed: [], lastModuleId: modules[0]?.id };
  } catch {
    return { completed: [], lastModuleId: modules[0]?.id };
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getModuleBacTags(module) {
  const tagsByModule = {
    "exp-function": ["exp"],
    "ln-function": ["ln"],
    equations: ["equations"],
    "study-functions": ["study-functions"],
  };
  return tagsByModule[module.id] || [];
}

function getModuleBacExercises(module) {
  const tags = getModuleBacTags(module);
  const exams = Array.isArray(window.bacAlgeriaExams) ? window.bacAlgeriaExams : [];
  if (!tags.length) return [];
  return exams.filter((exam) => (exam.tags || []).some((tag) => tags.includes(tag)));
}

function setView(viewName) {
  if (!views[viewName]) return;
  state.currentView = viewName;
  Object.entries(views).forEach(([name, node]) => node?.classList.toggle("active", name === viewName));
  document.querySelectorAll("[data-view]").forEach((button) => {
    const isActive = button.dataset.view === viewName && !button.dataset.bacTab;
    button.classList.toggle("active", isActive);
    if (isActive) {
      button.setAttribute("aria-current", "true");
    } else {
      button.removeAttribute("aria-current");
    }
  });
  if (viewName === "progress") renderProgress();
}

function setViewFromHash() {
  const hashView = decodeURIComponent(window.location.hash.replace("#", ""));
  if (hashView && views[hashView]) setView(hashView);
}

function setModule(moduleId) {
  state.currentModuleId = moduleId;
  state.progress.lastModuleId = moduleId;
  state.moduleTab = "activities";
  state.openSolutions = {};
  saveProgress();
  renderModuleDetail();
  setView("module");
  updateHome();
}

function markComplete(moduleId) {
  if (!state.progress.completed.includes(moduleId)) {
    state.progress.completed.push(moduleId);
    saveProgress();
  }
  updateHome();
  renderModuleDetail();
}

function renderModules() {
  const grid = document.getElementById("moduleGrid");
  const learningModules = getLearningModules();
  document.getElementById("moduleCountLabel").textContent = `${learningModules.length} محاور`;
  const next = getNextModule();
  grid.innerHTML = learningModules
    .map((module) => {
      const done = state.progress.completed.includes(module.id);
      const isNext = module.id === next.id;
      const btnClass = done ? "secondary-btn" : isNext ? "primary-btn" : "secondary-btn";
      return `
        <article class="module-card ${done ? "completed" : isNext ? "recommended" : ""}">
          <div class="module-icon">${module.icon}</div>
          <h3>${module.title}</h3>
          <p>${module.summary}</p>
          <button class="${btnClass}" type="button" data-open-module="${module.id}">
            ${done ? "مراجعة المحور" : isNext ? "ابدأ هذا المحور" : "فتح المحور"}
          </button>
        </article>
      `;
    })
    .join("");
}

function renderModuleDetail() {
  const module = modules.find((item) => item.id === state.currentModuleId) || modules[0];
  const detail = document.getElementById("moduleDetail");
  const done = state.progress.completed.includes(module.id);
  const tab = state.moduleTab;
  const bacExercises = getModuleBacExercises(module);
  detail.innerHTML = `
    <section class="study-hero">
      <div>
        <span class="kicker">المحور / ${module.title}</span>
        <h2>${module.icon} ${module.title}</h2>
        <p>${module.summary}</p>
      </div>
      <button class="${done ? "secondary-btn" : "primary-btn"}" type="button" data-complete-module="${module.id}" ${done ? "disabled" : ""}>
        ${done ? "✓ محور مكتمل" : "تعليم كمكتمل"}
      </button>
    </section>

    <nav class="lesson-section-tabs" aria-label="أقسام المحور">
      <button class="lesson-section-tab ${tab === "activities" ? "active" : ""}" type="button" data-module-tab="activities" ${tab === "activities" ? "aria-current='true'" : ""}>النشاطات (${module.activities.length})</button>
      <button class="lesson-section-tab ${tab === "lesson" ? "active" : ""}" type="button" data-module-tab="lesson" ${tab === "lesson" ? "aria-current='true'" : ""}>الدرس</button>
      <button class="lesson-section-tab ${tab === "solved" ? "active" : ""}" type="button" data-module-tab="solved" ${tab === "solved" ? "aria-current='true'" : ""}>تمارين محلولة (${module.solved.length})</button>
      <button class="lesson-section-tab ${tab === "exercises" ? "active" : ""}" type="button" data-module-tab="exercises" ${tab === "exercises" ? "aria-current='true'" : ""}>التمارين (${module.exercises.length})</button>
      <button class="lesson-section-tab ${tab === "bacExercises" ? "active" : ""}" type="button" data-module-tab="bacExercises" ${tab === "bacExercises" ? "aria-current='true'" : ""}>تمارين البكالوريا (${bacExercises.length})</button>
    </nav>

    <section class="lesson-section-panel ${tab === "activities" ? "active" : ""}">
      <div class="section-title"><h2>النشاطات</h2><span>${module.activities.length} نشاط</span></div>
      <section class="cards-grid">${module.activities.map((activity, index) => renderActivityCard(module, activity, index)).join("")}</section>
    </section>

    <section class="lesson-section-panel ${tab === "lesson" ? "active" : ""}">
      <section class="lesson-reader">${module.lesson}</section>
    </section>

    <section class="lesson-section-panel ${tab === "solved" ? "active" : ""}">
      <div class="section-title"><h2>تمارين محلولة</h2><span>${module.solved.length} تمرين محلول</span></div>
      <section class="cards-grid">${module.solved.map((exercise, index) => renderSolvedExerciseCard(module, exercise, index)).join("")}</section>
    </section>

    <section class="lesson-section-panel ${tab === "exercises" ? "active" : ""}">
      <div class="section-title"><h2>تمارين المحور</h2><span>${module.exercises.length} تمرين</span></div>
      <section class="cards-grid">${module.exercises.length ? module.exercises.map((exercise, index) => renderExerciseCard(module, exercise, index)).join("") : renderEmptyExerciseCard()}</section>
    </section>

    <section class="lesson-section-panel ${tab === "bacExercises" ? "active" : ""}">
      <div class="section-title"><h2>تمارين البكالوريا</h2><span>${bacExercises.length} موضوع بكالوريا</span></div>
      <section class="cards-grid">
        ${bacExercises.length ? bacExercises.map(renderModuleBacExerciseCard).join("") : renderModuleBacEmptyCard(module)}
      </section>
    </section>
  `;
  updateExpDiscoveryTable(detail);
  updateLnDiscovery(detail);
  enhanceMathTypography(detail);
}

function renderModuleBacExerciseCard(exam) {
  const branch = BAC_BRANCH_LABELS[exam.branch] || exam.branch || "بكالوريا";
  const tags = (exam.tags || []).map((tag) => `<span>${escapeHtml(tag)}</span>`).join("");
  return `
    <article class="action-panel bac-module-card">
      <span class="panel-label purple">${escapeHtml(branch)} - ${escapeHtml(exam.year || exam.date || "")}</span>
      <h3>${escapeHtml(exam.title)}</h3>
      <p>${escapeHtml(exam.summary || "")}</p>
      <div class="bac-tag-row">${tags}</div>
      <div class="pdf-actions">
        ${exam.file ? `<a class="secondary-btn" href="${escapeHtml(exam.file)}" target="_blank" rel="noopener">فتح الموضوع</a>` : ""}
        <button class="ghost-btn" type="button" data-view-jump="bac">فتح باب البكالوريا</button>
      </div>
    </article>
  `;
}

function renderModuleBacEmptyCard(module) {
  return `
    <article class="action-panel bac-module-card">
      <span class="panel-label blue">${escapeHtml(module.title)}</span>
      <h3>لا توجد مواضيع بكالوريا مرتبطة بهذا المحور بعد</h3>
      <p>يمكن إضافة مواضيع جديدة في أرشيف البكالوريا وربطها بوسوم المحور.</p>
      <button class="ghost-btn" type="button" data-view-jump="bac">فتح باب البكالوريا</button>
    </article>
  `;
}

function renderActivityCard(module, activity, index) {
  const key = `${module.id}-activity-${index}`;
  const isOpen = state.openSolutions[key];
  const body = activity.bodyHtml || `<p>${escapeHtml(activity.body)}</p>`;
  const solution = activity.solutionHtml || `<p>${escapeHtml(activity.solution)}</p>`;
  return `
    <article class="action-panel activity-panel">
      <span class="panel-label amber">نشاط</span>
      <h3>${activity.title}</h3>
      <div class="activity-body">${body}</div>
      <button class="solution-toggle" type="button" data-solution-key="${key}">
        ${isOpen ? "إخفاء الحل" : "إظهار الحل"}
      </button>
      <section class="solution-panel ${isOpen ? "active" : ""}" data-solution-panel="${key}">
        ${solution}
      </section>
    </article>
  `;
}

function renderExerciseCard(module, exercise, index) {
  const key = `${module.id}-exercise-${index}`;
  const isOpen = state.openSolutions[key];
  const solution = exercise.solutionHtml || `<p>${escapeHtml(exercise.solution)}</p>`;
  return `
    <article class="action-panel exercise-panel">
      <span class="panel-label blue">${module.title}</span>
      <h3>${exercise.title}</h3>
      <p class="math-rich">${escapeHtml(exercise.statement)}</p>
      <button class="solution-toggle" type="button" data-solution-key="${key}">
        ${isOpen ? "إخفاء الحل" : "إظهار الحل"}
      </button>
      <section class="solution-panel ${isOpen ? "active" : ""}" data-solution-panel="${key}">
        ${solution}
      </section>
    </article>
  `;
}

function renderSolvedExerciseCard(module, exercise, index) {
  const key = `${module.id}-solved-${index}`;
  const isOpen = state.openSolutions[key];
  const solution = exercise.solutionHtml || `<p>${escapeHtml(exercise.solution)}</p>`;
  return `
    <article class="action-panel exercise-panel solved-practice-panel">
      <span class="panel-label amber">تمرين محلول</span>
      <h3>${exercise.title}</h3>
      <p class="math-rich">${escapeHtml(exercise.statement)}</p>
      <button class="solution-toggle" type="button" data-solution-key="${key}">
        ${isOpen ? "إخفاء الحل" : "إظهار الحل"}
      </button>
      <section class="solution-panel ${isOpen ? "active" : ""}" data-solution-panel="${key}">
        ${solution}
      </section>
    </article>
  `;
}

function renderEmptyExerciseCard() {
  return `
    <article class="action-panel exercise-panel">
      <span class="panel-label blue">التمارين</span>
      <h3>لا توجد تمارين حاليا</h3>
      <p>تم تفريغ هذا الباب من التمارين الموجودة سابقا.</p>
    </article>
  `;
}

function renderExercises() {
  const grid = document.getElementById("exerciseGrid");
  const exerciseCards = getLearningModules().flatMap((module) => module.exercises.map((exercise, index) => renderExerciseCard(module, exercise, index)));
  grid.innerHTML = exerciseCards.length ? exerciseCards.join("") : renderEmptyExerciseCard();
  document.getElementById("homeExerciseCount").textContent = `${getLearningModules().reduce((sum, module) => sum + module.exercises.length, 0)} تمارين`;
  enhanceMathTypography(grid);
}


const discussionTrainingPresets = [
  { label: "التدريب 1: f(x)=ln(x)/x", expression: "ln(x)/x" },
  { label: "التدريب 2: g(x)=x-ln(x)", expression: "x-ln(x)" },
  { label: "التدريب 3: h(x)=(1+ln(x))/x", expression: "(1+ln(x))/x" },
  { label: "التدريب 4: f(x)=x/ln(x)", expression: "x/ln(x)" },
  { label: "التدريب 5: f(x)=ln(x)^2-2ln(x)", expression: "ln(x)^2-2*ln(x)" },
  { label: "التدريب 5: h(x)=|f(x)|", expression: "abs(ln(x)^2-2*ln(x))" },
  { label: "التدريب 6: g(x)=x-1+ln((x+1)/x)", expression: "x-1+ln((x+1)/x)" },
  { label: "التدريب 7: h(x)=e^x-e^(-x)", expression: "exp(x)-exp(-x)" },
  { label: "التدريب 8: p(x)=x+2ln(x)/x", expression: "x+2*ln(x)/x" },
  { label: "التدريب 9: k(x)=ln(x^2-2|x|+2)", expression: "ln(x^2-2*abs(x)+2)" },
  { label: "التدريب 10: k(x)=2x-1-exp(x-1)", expression: "2*x-1-exp(x-1)" },
  { label: "التدريب 11: h(x)=x^2-2ln(x)", expression: "x^2-2*ln(x)" },
  { label: "التدريب 12: g(x)=x*exp(1-x)", expression: "x*exp(1-x)" },
  { label: "التدريب 13: f(x)=(x+ln(x))/(x-ln(x))", expression: "(x+ln(x))/(x-ln(x))" },
  { label: "التدريب 14: g(x)=x-ln(x)", expression: "x-ln(x)" },
  { label: "التدريب 15: h(x)=(exp(x)-1)/(exp(x)+1)", expression: "(exp(x)-1)/(exp(x)+1)" },
  { label: "التدريب 16: h(x)=x-1+(exp(x)-1)/x", expression: "x-1+(exp(x)-1)/x" },
];

function renderDiscussionPresetOptions() {
  return discussionTrainingPresets
    .map((preset) => `<option value="${preset.expression}">${preset.label}</option>`)
    .join("");
}
const discussionAnimations = new WeakMap();

function renderDiscussionCanvasCard(kind) {
  const labels = {
    math: "نشاط تفاعلي: دالة لوغارتمية والمستقيم y=m",
    tech: "نشاط تفاعلي: دالة لوغارتمية والمستقيم y=m",
    science: "نشاط تفاعلي: دالة لوغارتمية والمستقيم y=m",
    management: "نشاط تفاعلي: دالة لوغارتمية والمستقيم y=m",
  };
  const defaults = {
    math: { min: -2, max: 0.8, step: 0.05, value: 0.2 },
    tech: { min: -2, max: 0.8, step: 0.05, value: 0.2 },
    science: { min: -2, max: 0.8, step: 0.05, value: 0.2 },
    management: { min: -2, max: 0.8, step: 0.05, value: 0.2 },
  }[kind];
  return `
    <div class="discussion-canvas-card" data-discussion-card="${kind}">
      <div class="discussion-canvas-head">
        <strong>${labels[kind]}</strong>
        <span data-discussion-value>${defaults.value}</span>
      </div>
      <div class="discussion-function-row">
        <label class="discussion-preset-row">
          <span>اختر دالة من تدريبات الباب</span>
          <select data-discussion-preset aria-label="اختيار دالة من التدريبات">
            ${renderDiscussionPresetOptions()}
          </select>
        </label>
        <label>
          <span>أدخل الدالة f(x)</span>
          <span class="discussion-function-controls">
            <input type="text" value="ln(x)/x" dir="ltr" spellcheck="false" data-discussion-function="${kind}" aria-label="إدخال الدالة" />
            <button class="discussion-apply-btn" type="button" data-discussion-apply>تطبيق الدالة</button>
          </span>
        </label>
        <div class="discussion-builder" aria-label="مساعد تركيب الدالة">
          <button type="button" data-discussion-insert="ln()" data-caret-back="1">ln</button>
          <button type="button" data-discussion-insert="log()" data-caret-back="1">log</button>
          <button type="button" data-discussion-insert="exp()" data-caret-back="1">exp</button>
          <button type="button" data-discussion-insert="e^()" data-caret-back="1">e^</button>
          <button type="button" data-discussion-insert="sqrt()" data-caret-back="1">√</button>
          <button type="button" data-discussion-insert="x">x</button>
          <button type="button" data-discussion-insert="(">(</button>
          <button type="button" data-discussion-insert=")">)</button>
          <button type="button" data-discussion-insert="+">+</button>
          <button type="button" data-discussion-insert="-">−</button>
          <button type="button" data-discussion-insert="*">×</button>
          <button type="button" data-discussion-insert="/">÷</button>
          <button type="button" data-discussion-insert="^">أس</button>
          <button type="button" data-discussion-insert="^2">x²</button>
          <button type="button" data-discussion-insert="1/()" data-caret-back="1">1/□</button>
        </div>
      </div>
      <canvas width="640" height="360" data-discussion-canvas="${kind}" aria-label="تمثيل تفاعلي للمناقشة البيانية"></canvas>
      <div class="discussion-controls">
        <label>
          <span>غيّر قيمة الوسيط</span>
          <input type="range" min="${defaults.min}" max="${defaults.max}" step="${defaults.step}" value="${defaults.value}" data-discussion-slider="${kind}" />
        </label>
        <div class="discussion-line-actions">
          <button class="discussion-line-btn active" type="button" data-discussion-line-mode="horizontal" aria-pressed="true">اختيار y=m</button>
          <button class="discussion-line-btn" type="button" data-discussion-line-mode="oblique" aria-pressed="false">اختيار y=0.25x+m</button>
          <button class="discussion-play-btn" type="button" data-discussion-play>تشغيل الحركة</button>
        </div>
      </div>
      <p class="discussion-result" data-discussion-result></p>
    </div>
  `;
}

function normalizeDiscussionExpression(expression) {
  return String(expression || "")
    .trim()
    .toLowerCase()
    .replace(/،/g, ".")
    .replace(/×/g, "*")
    .replace(/÷/g, "/")
    .replace(/π/g, "pi")
    .replace(/√\s*\(/g, "sqrt(")
    .replace(/√\s*([a-z0-9.]+)/g, "sqrt($1)")
    .replace(/\be\s*\^\s*\(([^()]+)\)/g, "exp($1)")
    .replace(/\be\s*\^\s*([a-z0-9.]+)/g, "exp($1)")
    .replace(/\^/g, "**");
}

function compileDiscussionFunction(expression) {
  let source = normalizeDiscussionExpression(expression || "ln(x)/x");
  source = source
    .replace(/\bln\s*\(/g, "log(")
    .replace(/\bpi\b/g, "PI")
    .replace(/\be\b/g, "E");

  if (!source || source.length > 140) throw new Error("اكتب دالة أقصر.");
  if (/[^0-9x+\-*/().,\s_a-z]/i.test(source)) throw new Error("استعمل رموزا رياضية بسيطة فقط.");

  const allowedNames = new Set(["x", "log", "exp", "sqrt", "sin", "cos", "tan", "abs", "pow", "min", "max", "E", "PI"]);
  const names = source.match(/[a-zA-Z_]+/g) || [];
  const unknown = names.find((name) => !allowedNames.has(name));
  if (unknown) throw new Error(`الدالة ${unknown} غير مدعومة.`);

  const fn = new Function("x", "log", "exp", "sqrt", "sin", "cos", "tan", "abs", "pow", "min", "max", "E", "PI", `return ${source};`);
  return (x) => {
    const value = fn(x, Math.log, Math.exp, Math.sqrt, Math.sin, Math.cos, Math.tan, Math.abs, Math.pow, Math.min, Math.max, Math.E, Math.PI);
    return Number.isFinite(value) ? value : NaN;
  };
}

function getDiscussionFunction(card, fallback) {
  const input = card.querySelector("[data-discussion-function]");
  try {
    const fn = compileDiscussionFunction(input?.value || "ln(x)/x");
    if (input) input.classList.remove("is-invalid");
    return { fn, error: "" };
  } catch (error) {
    if (input) input.classList.add("is-invalid");
    return { fn: fallback, error: error.message || "صيغة الدالة غير مفهومة." };
  }
}
function insertDiscussionToken(card, token, caretBack = 0) {
  const input = card?.querySelector("[data-discussion-function]");
  if (!input) return;
  const start = input.selectionStart ?? input.value.length;
  const end = input.selectionEnd ?? input.value.length;
  input.value = `${input.value.slice(0, start)}${token}${input.value.slice(end)}`;
  const caret = start + token.length - caretBack;
  input.focus();
  input.setSelectionRange(caret, caret);
  stopDiscussionAnimation(card);
  drawDiscussionCanvas(card);
}
function getDiscussionLineMode(card) {
  return card?.dataset.discussionLineMode === "oblique" ? "oblique" : "horizontal";
}

function applyDiscussionLineMode(card, config, mode) {
  if (mode !== "oblique") return;
  const slope = 0.25;
  config.lineLabel = "y=0.25x+m";
  config.line = (x, m) => slope * x + m;
  config.note = "مستقيم مائل معامل توجيهه ثابت a=0.25، والعدد b يتغير بدلالة m.";
  config.result = (_m, roots) => {
    if (!roots.length) return "لا توجد حلول ظاهرة داخل نافذة الرسم الحالية.";
    const formatted = roots.map((root) => root.toFixed(2)).join(" ، ");
    const countLabel = roots.length === 1 ? "حل واحد" : `${roots.length} حلول`;
    return `${countLabel}: x ≈ ${formatted}`;
  };
}

function updateDiscussionLineModeButton(card) {
  const mode = getDiscussionLineMode(card);
  card?.querySelectorAll("[data-discussion-line-mode]").forEach((button) => {
    const isActive = button.dataset.discussionLineMode === mode;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function getDiscussionGraphConfig(kind) {
  const branchNotes = {
    math: "دالة لوغارتمية لها قيمة عظمى: تظهر حالات حلين، حل وحيد، أو لا حل.",
    tech: "نفس النموذج اللوغارتمي مع قراءة التقاطعات كما في المناقشة البيانية.",
    science: "نقرأ عدد الحلول من تقاطع المنحنى اللوغارتمي مع y=m.",
    management: "نموذج لوغارتمي بسيط لتثبيت فكرة المستقيم الأفقي y=m.",
  };
  return {
    xMin: 0.08,
    xMax: 8,
    yMin: -2.2,
    yMax: 1,
    curveLabel: "C_f",
    lineLabel: "y=m",
    fn: (x) => Math.log(x) / x,
    line: (x, m) => m,
    note: branchNotes[kind] || branchNotes.math,
    result: (m, roots) => {
      const maxValue = 1 / Math.E;
      if (!roots.length) {
        if (m > maxValue) return "لا توجد حلول: المستقيم y=m فوق القيمة العظمى للدالة.";
        return "لا توجد حلول ظاهرة داخل نافذة الرسم الحالية.";
      }
      const formatted = roots.map((root) => root.toFixed(2)).join(" ، ");
      const countLabel = roots.length === 1 ? "حل واحد" : `${roots.length} حلول`;
      return `${countLabel}: x ≈ ${formatted}`;
    },
  };
}

function findDiscussionIntersections(config, m) {
  const roots = [];
  const f = (x) => config.fn(x) - config.line(x, m);
  const samples = 420;
  let prevX = config.xMin;
  let prevY = f(prevX);
  const pushRoot = (root) => {
    if (!Number.isFinite(root)) return;
    if (root < config.xMin || root > config.xMax) return;
    if (roots.every((existing) => Math.abs(existing - root) > 0.025)) roots.push(root);
  };

  for (let i = 1; i <= samples; i += 1) {
    const x = config.xMin + (i / samples) * (config.xMax - config.xMin);
    const y = f(x);
    if (Number.isFinite(prevY) && Number.isFinite(y)) {
      if (Math.abs(y) < 0.002) pushRoot(x);
      if (prevY === 0 || prevY * y < 0) {
        let left = prevX;
        let right = x;
        let leftValue = prevY;
        for (let j = 0; j < 34; j += 1) {
          const mid = (left + right) / 2;
          const midValue = f(mid);
          if (leftValue * midValue <= 0) {
            right = mid;
          } else {
            left = mid;
            leftValue = midValue;
          }
        }
        pushRoot((left + right) / 2);
      }
    }
    prevX = x;
    prevY = y;
  }
  return roots.sort((a, b) => a - b);
}
function drawDiscussionCanvas(card) {
  const canvas = card.querySelector("[data-discussion-canvas]");
  const slider = card.querySelector("[data-discussion-slider]");
  const output = card.querySelector("[data-discussion-result]");
  const valueLabel = card.querySelector("[data-discussion-value]");
  if (!canvas || !slider) return;

  const kind = canvas.dataset.discussionCanvas;
  const config = getDiscussionGraphConfig(kind);
  const lineMode = getDiscussionLineMode(card);
  applyDiscussionLineMode(card, config, lineMode);
  updateDiscussionLineModeButton(card);
  const custom = getDiscussionFunction(card, config.fn);
  config.fn = custom.fn;
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  const pad = 46;
  const m = Number(slider.value);
  const sx = (x) => pad + ((x - config.xMin) / (config.xMax - config.xMin)) * (width - 2 * pad);
  const sy = (y) => height - pad - ((y - config.yMin) / (config.yMax - config.yMin)) * (height - 2 * pad);

  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#fffdf3";
  ctx.fillRect(0, 0, width, height);

  ctx.strokeStyle = "#e2ded3";
  ctx.lineWidth = 1;
  for (let x = Math.ceil(config.xMin); x <= Math.floor(config.xMax); x += 1) {
    ctx.beginPath();
    ctx.moveTo(sx(x), pad);
    ctx.lineTo(sx(x), height - pad);
    ctx.stroke();
  }
  for (let y = Math.ceil(config.yMin); y <= Math.floor(config.yMax); y += 1) {
    ctx.beginPath();
    ctx.moveTo(pad, sy(y));
    ctx.lineTo(width - pad, sy(y));
    ctx.stroke();
  }

  ctx.strokeStyle = "#111827";
  ctx.lineWidth = 2;
  if (config.yMin <= 0 && config.yMax >= 0) {
    ctx.beginPath();
    ctx.moveTo(pad, sy(0));
    ctx.lineTo(width - pad, sy(0));
    ctx.stroke();
  }
  if (config.xMin <= 0 && config.xMax >= 0) {
    ctx.beginPath();
    ctx.moveTo(sx(0), pad);
    ctx.lineTo(sx(0), height - pad);
    ctx.stroke();
  }

  const drawPath = (fn, color, dash = []) => {
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = 3.2;
    ctx.setLineDash(dash);
    ctx.beginPath();
    let started = false;
    for (let i = 0; i <= 240; i += 1) {
      const x = config.xMin + (i / 240) * (config.xMax - config.xMin);
      const y = fn(x);
      if (!Number.isFinite(y) || y < config.yMin - 2 || y > config.yMax + 2) {
        started = false;
        continue;
      }
      const px = sx(x);
      const py = sy(y);
      if (!started) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
      started = true;
    }
    ctx.stroke();
    ctx.restore();
  };

  drawPath(config.fn, "#d83a34");
  drawPath((x) => config.line(x, m), "#2563eb", [9, 7]);

  const roots = findDiscussionIntersections(config, m);
  roots.forEach((root, index) => {
    const px = sx(root);
    const py = sy(config.fn(root));
    ctx.beginPath();
    ctx.fillStyle = "#00a86b";
    ctx.strokeStyle = "#064e3b";
    ctx.lineWidth = 2;
    ctx.arc(px, py, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "#064e3b";
    ctx.font = "700 14px Tajawal, Arial";
    ctx.fillText(`x${index + 1}≈${root.toFixed(2)}`, px + 8, py - 10);
  });

  ctx.font = "700 18px Tajawal, Arial";
  ctx.fillStyle = "#d83a34";
  ctx.fillText(config.curveLabel, width - 110, 70);
  ctx.fillStyle = "#2563eb";
  ctx.fillText(config.lineLabel, width - 125, 100);

  ctx.direction = "rtl";
  ctx.fillStyle = "#111827";
  ctx.font = "700 18px Tajawal, Arial";
  ctx.fillText(`قيمة الوسيط: ${m.toFixed(2).replace(/\.00$/, "")}`, width - 36, height - 18);
  ctx.direction = "ltr";

  if (valueLabel) valueLabel.textContent = lineMode === "oblique" ? `b=m = ${m.toFixed(2).replace(/\.00$/, "")}` : `m = ${m.toFixed(2).replace(/\.00$/, "")}`;
  if (output) {
    const resultText = `${config.note} ${config.result(m, roots)}`;
    output.textContent = custom.error ? `${custom.error} تم عرض الدالة الافتراضية مؤقتا. ${resultText}` : resultText;
  }
}


function stopDiscussionAnimation(card) {
  const animation = discussionAnimations.get(card);
  if (animation?.frame) cancelAnimationFrame(animation.frame);
  if (animation?.timer) clearInterval(animation.timer);
  discussionAnimations.delete(card);
  const button = card.querySelector("[data-discussion-play]");
  if (button) {
    button.textContent = "تشغيل الحركة";
    button.setAttribute("aria-pressed", "false");
  }
}

function startDiscussionAnimation(card) {
  const slider = card.querySelector("[data-discussion-slider]");
  const button = card.querySelector("[data-discussion-play]");
  if (!slider) return;
  stopDiscussionAnimation(card);
  const min = Number(slider.min);
  const max = Number(slider.max);
  const duration = 4200;
  const startedAt = performance.now();
  const animation = { frame: 0, timer: 0 };
  if (button) {
    button.textContent = "إيقاف الحركة";
    button.setAttribute("aria-pressed", "true");
  }
  const tick = (now = performance.now()) => {
    const cycle = ((now - startedAt) % duration) / duration;
    const wave = 0.5 - 0.5 * Math.cos(cycle * Math.PI * 2);
    slider.value = String(min + wave * (max - min));
    drawDiscussionCanvas(card);
  };
  const loop = (now) => {
    tick(now);
    animation.frame = requestAnimationFrame(loop);
  };
  animation.frame = requestAnimationFrame(loop);
  animation.timer = setInterval(() => tick(), 80);
  discussionAnimations.set(card, animation);
}

function toggleDiscussionAnimation(card) {
  if (discussionAnimations.has(card)) {
    stopDiscussionAnimation(card);
  } else {
    startDiscussionAnimation(card);
  }
}
function bindDiscussionCardControls(card) {
  const playButton = card.querySelector("[data-discussion-play]");
  if (playButton) {
    playButton.onclick = (event) => {
      event.preventDefault();
      event.stopPropagation();
      toggleDiscussionAnimation(card);
    };
  }
}

function initDiscussionCanvases(scope = document) {
  scope.querySelectorAll("[data-discussion-card]").forEach((card) => {
    bindDiscussionCardControls(card);
    drawDiscussionCanvas(card);
  });
}
function renderIdeasDoor() {
  const module = getIdeasModule();
  const container = document.getElementById("ideasDoor");
  if (!container || !module) return;

  const branchDoors = [
    {
      id: "math",
      label: "باب رياضي",
      title: "أفكار شعبة الرياضيات",
      summary: "يركز هذا الباب على الدراسة الكاملة للدوال، المناقشة بالوسيط، الدوال المركبة، المساحات، والمتتاليات المرتبطة.",
      body: `
        <article class="structured-lesson">
          <header class="structured-lesson-hero"><span>باب رياضي</span><h3>كيف تفكر في موضوع شعبة الرياضيات؟</h3></header>
          <section class="lesson-block">
            <h4>الأفكار الأكثر تكرارا</h4>
            <div class="method-box"><strong>دالة مساعدة ثم دالة رئيسية:</strong><p>في كثير من المواضيع تبدأ بدراسة دالة <span class="math">g</span> لإثبات إشارة مشتقة <span class="math">f</span>. لا تتعامل مع <span class="math">g</span> كتمرين منفصل؛ هي مفتاح جدول تغيرات <span class="math">f</span>.</p></div>
            <div class="method-box"><strong>المناقشة بالوسيط:</strong><p>بعد جدول التغيرات أو الرسم، تتحول المعادلة <span class="math">f(x)=m</span> إلى قراءة عدد تقاطعات المنحنى مع المستقيم <span class="math">y=m</span>.</p></div>
            <div class="method-box"><strong>الدوال المرتبطة:</strong><p>تتكرر أفكار <span class="math">f(|x|)</span> و <span class="math">f(-x)</span> و <span class="math">f(lnx)</span> و <span class="math">f(e^x)</span>. هنا نربط المجال والتحويل الهندسي باتجاه التغير.</p></div>
          </section>
          <section class="lesson-block">
            <h4>خطة الحل</h4>
            <div class="property-box"><strong>الترتيب العملي:</strong><p>المجال → النهايات → المقارب والوضع النسبي → المشتقة وجدول التغيرات → الجذور والمناقشة → التكامل والمساحة → الدالة المركبة أو المتتالية.</p></div>
            <div class="math-equation">f(x)-ax-b → 0 ⇒ y=ax+b مقارب مائل</div>
            <div class="math-equation">f(x)=m ⇔ C_f يقطع y=m</div>
          </section>
          <section class="lesson-block discussion-door is-collapsed" data-discussion-door>
            <button class="discussion-door-toggle" type="button" data-discussion-door-toggle aria-expanded="false">
              <span>باب المناقشة البيانية</span>
              <small>افتح النشاط التفاعلي</small>
            </button>
            <div class="discussion-door-body" data-discussion-door-body hidden>
              <div class="method-box"><strong>الفكرة:</strong><p>في هذا النشاط نستعمل الدالة اللوغارتمية <span class="math">f(x)=ln(x)/x</span>. حرّك المستقيم الأفقي <span class="math">y=m</span> ولاحظ كيف يتغير عدد الحلول وتظهر قيمها التقريبية على الرسم.</p></div>
              ${renderDiscussionCanvasCard("math")}
            </div>
          </section>
          <section class="lesson-block">
            <h4>تدريب سريع</h4>
            <div class="method-box"><strong>سؤال نموذجي:</strong><p>إذا أثبت أن <span class="math">f</span> لها قيمة صغرى <span class="math">-2</span> وقيم الطرفين <span class="math">+∞</span>، فناقش <span class="math">f(x)=m</span>.</p><p><strong>الجواب:</strong> لا حل إذا <span class="math">m&lt;-2</span>، حل وحيد إذا <span class="math">m=-2</span>، وحلان إذا <span class="math">m&gt;-2</span>.</p></div>
          </section>
        </article>
      `,
    },
    {
      id: "tech",
      label: "باب تقني رياضي",
      title: "أفكار شعبة تقني رياضي",
      summary: "يركز هذا الباب على الربط بين القراءة البيانية والحساب، الدالة المساعدة، المقارب، المماس، والمساحة.",
      body: `
        <article class="structured-lesson">
          <header class="structured-lesson-hero"><span>باب تقني رياضي</span><h3>الأفكار العملية في مواضيع تقني رياضي</h3></header>
          <section class="lesson-block">
            <h4>ما الذي يميز الشعبة؟</h4>
            <div class="method-box"><strong>القراءة البيانية ليست زينة:</strong><p>إذا بدأ الموضوع بمنحنى أو جدول تغيرات، فغالبا سيستعمل لاحقا لمعرفة إشارة دالة مساعدة أو عدد حلول معادلة.</p></div>
            <div class="method-box"><strong>الدالة المساعدة:</strong><p>نثبت إشارة <span class="math">g</span> ثم نستنتج إشارة <span class="math">f'</span>. هذه الفكرة تختصر دراسة طويلة إلى جدول تغيرات واضح.</p><div class="math-equation">g(x) ≥ 0 ⇒ f'(x) ≥ 0</div></div>
            <div class="method-box"><strong>المقارب والوضع النسبي:</strong><p>بعد إثبات المقارب، احسب دائما الفرق <span class="math">f(x)-(ax+b)</span> لتحديد هل المنحنى فوقه أم تحته.</p></div>
          </section>
          <section class="lesson-block">
            <h4>برنامج مراجعة خاص</h4>
            <div class="property-box"><strong>الأولوية:</strong><p>النهايات والمقاربات → الاشتقاق والتغيرات → المماس → الوضع النسبي → المساحة → المناقشة البيانية.</p></div>
            <div class="math-equation">T_a: y=f'(a)(x-a)+f(a)</div>
            <div class="math-equation">A = ∫(الدالة العليا - الدالة السفلى) dx</div>
          </section>
          <section class="lesson-block discussion-door is-collapsed" data-discussion-door>
            <button class="discussion-door-toggle" type="button" data-discussion-door-toggle aria-expanded="false">
              <span>باب المناقشة البيانية</span>
              <small>افتح النشاط التفاعلي</small>
            </button>
            <div class="discussion-door-body" data-discussion-door-body hidden>
              <div class="method-box"><strong>الفكرة:</strong><p>في هذا النشاط نستعمل دالة لوغارتمية ونقرأ تقاطعاتها مع المستقيم الأفقي <span class="math">y=m</span>. الهدف هو تحويل المناقشة إلى مشاهدة مباشرة للحلول.</p></div>
              ${renderDiscussionCanvasCard("tech")}
            </div>
          </section>
          <section class="lesson-block">
            <h4>تدريب سريع</h4>
            <div class="method-box"><strong>سؤال نموذجي:</strong><p>إذا كان <span class="math">f(x)=x+2-e^{-x}</span>، فالمقارب عند <span class="math">+∞</span> هو <span class="math">y=x+2</span> لأن الفرق <span class="math">-e^{-x}</span> يؤول إلى <span class="math">0</span>. والمنحنى أسفل المقارب لأن الفرق سالب.</p></div>
          </section>
        </article>
      `,
    },
    {
      id: "science",
      label: "باب علمي",
      title: "أفكار شعبة العلوم التجريبية",
      summary: "يركز هذا الباب على الدراسة المنظمة للدوال، القراءة البيانية، الجذور، المماس، والمساحة بأسئلة مباشرة ومتدرجة.",
      body: `
        <article class="structured-lesson">
          <header class="structured-lesson-hero"><span>باب علمي</span><h3>الأفكار المناسبة لشعبة العلوم التجريبية</h3></header>
          <section class="lesson-block">
            <h4>الأفكار الأساسية</h4>
            <div class="method-box"><strong>دراسة دالة خطوة بخطوة:</strong><p>أكثر ما يتكرر هو: مجال التعريف، نهاية، مشتقة، جدول تغيرات، جذر وحيد، ثم رسم أو مساحة.</p></div>
            <div class="method-box"><strong>الجذر الوحيد:</strong><p>نستعمل الاستمرارية والرتابة: إذا تغيرت الإشارة بين قيمتين وكانت الدالة رتيبة، فالمنحنى يقطع محور الفواصل مرة واحدة.</p></div>
            <div class="method-box"><strong>القراءة البيانية:</strong><p>من الرسم نستخرج إشارة دالة، عدد حلول، أو قيمة تقريبية قبل الانتقال إلى الحساب.</p></div>
          </section>
          <section class="lesson-block">
            <h4>خطة الحل</h4>
            <div class="property-box"><strong>ترتيب مضمون:</strong><p>المجال → النهايات → المشتقة → جدول التغيرات → الجذور → المماس أو المقارب → المساحة.</p></div>
            <div class="math-equation">f'(x)=0 ⇒ نقطة حرجة محتملة</div>
            <div class="math-equation">f(a)f(b)&lt;0 مع الرتابة ⇒ حل وحيد بين a و b</div>
          </section>
          <section class="lesson-block discussion-door is-collapsed" data-discussion-door>
            <button class="discussion-door-toggle" type="button" data-discussion-door-toggle aria-expanded="false">
              <span>باب المناقشة البيانية</span>
              <small>افتح النشاط التفاعلي</small>
            </button>
            <div class="discussion-door-body" data-discussion-door-body hidden>
              <div class="method-box"><strong>الفكرة:</strong><p>في هذا النشاط نناقش دالة لوغارتمية باستعمال المستقيم الأفقي <span class="math">y=m</span>. كل تقاطع يمثل حلا للمعادلة <span class="math">f(x)=m</span>.</p></div>
              ${renderDiscussionCanvasCard("science")}
            </div>
          </section>
          <section class="lesson-block">
            <h4>تدريب سريع</h4>
            <div class="method-box"><strong>سؤال نموذجي:</strong><p>إذا كانت <span class="math">f</span> متزايدة و <span class="math">f(0)&lt;0</span> و <span class="math">f(1)&gt;0</span>، فالمعادلة <span class="math">f(x)=0</span> لها حل وحيد في <span class="math">]0,1[</span>.</p></div>
          </section>
        </article>
      `,
    },
    {
      id: "management",
      label: "باب تسيير واقتصاد",
      title: "أفكار شعبة تسيير واقتصاد",
      summary: "يركز هذا الباب على المعادلات والمتراجحات، الدوال الأسية واللوغارتمية المباشرة، القيمة المتوسطة، والمساحات البسيطة.",
      body: `
        <article class="structured-lesson">
          <header class="structured-lesson-hero"><span>باب تسيير واقتصاد</span><h3>الأفكار الخاصة بالتسيير والاقتصاد</h3></header>
          <section class="lesson-block">
            <h4>ما يتكرر في المواضيع</h4>
            <div class="method-box"><strong>المعادلات والمتراجحات:</strong><p>كثير من الأسئلة تبدأ بتحليل كثير حدود، ثم نستعمل نفس الإشارة مع <span class="math">lnx</span> أو <span class="math">e^x</span>.</p><div class="math-equation">t=lnx أو X=e^x</div></div>
            <div class="method-box"><strong>الدراسة المباشرة:</strong><p>الدوال غالبا تكون أبسط من الرياضي والتقني: مشتقة واضحة، جدول تغيرات، جذر أو مقارب، ثم مساحة.</p></div>
            <div class="method-box"><strong>القيمة المتوسطة والمساحة:</strong><p>عندما تعطى دالة أصلية، استعملها مباشرة لحساب <span class="math">∫ f(x)dx</span> أو القيمة المتوسطة على مجال.</p></div>
          </section>
          <section class="lesson-block">
            <h4>خطة الحل</h4>
            <div class="property-box"><strong>الترتيب العملي:</strong><p>شرط التعريف → تحويل المعادلة → استعمال التزايد في <span class="math">ln</span> أو <span class="math">exp</span> → جدول إشارة → استنتاج المجال النهائي.</p></div>
            <div class="math-equation">ln(A) ≥ 0 ⇔ A ≥ 1 مع A&gt;0</div>
            <div class="math-equation">e^x ≥ e^a ⇔ x ≥ a</div>
          </section>
          <section class="lesson-block discussion-door is-collapsed" data-discussion-door>
            <button class="discussion-door-toggle" type="button" data-discussion-door-toggle aria-expanded="false">
              <span>باب المناقشة البيانية</span>
              <small>افتح النشاط التفاعلي</small>
            </button>
            <div class="discussion-door-body" data-discussion-door-body hidden>
              <div class="method-box"><strong>الفكرة:</strong><p>في هذا النشاط نقرأ حلول معادلة لوغارتمية بيانيا. حرّك <span class="math">y=m</span> وسجل عدد نقاط التقاطع وقيم <span class="math">x</span> التقريبية.</p></div>
              ${renderDiscussionCanvasCard("management")}
            </div>
          </section>
          <section class="lesson-block">
            <h4>تدريب سريع</h4>
            <div class="method-box"><strong>سؤال نموذجي:</strong><p>حل <span class="math">ln(10x^2+9x)≥0</span> على <span class="math">]0,+∞[</span>: الشرط محقق، ثم <span class="math">10x^2+9x≥1</span>، أي <span class="math">(x+1)(10x-1)≥0</span>. وبما أن <span class="math">x&gt;0</span> فالحل <span class="math">x≥1/10</span>.</p></div>
          </section>
        </article>
      `,
    },
  ];

  container.innerHTML = `
    <section class="ideas-redesign">
      <header class="ideas-topbar">
        <div>
          <span class="kicker">أفكار حسب الشعبة</span>
          <h2>${module.icon} اختَر مسارك ثم طبّق مباشرة</h2>
          <p>صفحة خفيفة للمراجعة: أفكار مختصرة، خطة حل، ونشاط بياني تفاعلي في نفس المكان.</p>
        </div>
        <div class="ideas-quick-note" aria-hidden="true">
          <strong>3</strong>
          <span>خطوات: فهم، خطة، تطبيق</span>
        </div>
      </header>
      <nav class="ideas-branch-picker" aria-label="أبواب الأفكار حسب الشعبة">
        ${branchDoors.map((door, index) => `<button class="${index === 0 ? "active" : ""}" type="button" data-idea-branch="${door.id}" ${index === 0 ? "aria-current='true'" : ""}><span>${door.label}</span><small>${door.summary}</small></button>`).join("")}
      </nav>
      <section class="ideas-branch-panels">
        ${branchDoors.map((door, index) => `
          <section class="bac-panel ${index === 0 ? "active" : ""}" data-idea-panel="${door.id}">
            <section class="branch-idea-hero">
              <span class="kicker">${door.label}</span>
              <h2>${door.title}</h2>
              <p>${door.summary}</p>
            </section>
            <section class="ideas-action-deck ideas-action-deck-single" aria-label="تطبيقات وتدريبات الباب">
              <article class="lesson-block discussion-door unified-discussion-door is-collapsed" data-discussion-door>
                <button class="discussion-door-toggle" type="button" data-discussion-door-toggle aria-expanded="false">
                  <span>باب المناقشة البيانية والتدريبات</span>
                  <small>افتح التطبيق والتدريبات</small>
                </button>
                <div class="discussion-door-body" data-discussion-door-body hidden>
                  <section class="unified-door-section unified-interactive-section" aria-label="التطبيق التفاعلي">
                    <header class="unified-door-head"><span>التطبيق التفاعلي</span><strong>اختبر الدوال بيانيا</strong></header>
                    ${renderDiscussionCanvasCard(door.id)}
                  </section>
                  <section class="unified-door-section unified-training-section" aria-label="التدريبات">
                    <header class="unified-door-head"><span>التدريبات</span><strong>تمارين المناقشة البيانية</strong></header>
                                <article class="training-exercise">
                  <h4>نص التمرين</h4>
                  <p>تعتبر الدالة العددية <span class="math">f</span> المعرفة على المجال <span class="math">]0,+∞[</span> كما يلي:</p>
                  <div class="math-equation">f(x)=ln(x)/x</div>
                  <p>ليكن <span class="math">(C_f)</span> تمثيلها البياني في مستو منسوب إلى معلم متعامد ومتجانس <span class="math">(O;i,j)</span>.</p>
                  <h4>الجزء الأول: دراسة الدالة</h4>
                  <ol>
                    <li>احسب نهايات الدالة <span class="math">f</span> عند <span class="math">0</span> وعند <span class="math">+∞</span>. أعط تفسيرا هندسيا للنتائج.</li>
                    <li>احسب الدالة المشتقة <span class="math">f'(x)</span>، ثم ادرس إشارتها.</li>
                    <li>شكل جدول تغيرات الدالة <span class="math">f</span>.</li>
                    <li>عين إحداثيات نقطة تقاطع المنحنى <span class="math">(C_f)</span> مع محور الفواصل.</li>
                  </ol>
                  <h4>الجزء الثاني: المناقشة البيانية</h4>
                  <p>ناقش بيانيا، حسب قيم الوسيط الحقيقي <span class="math">m</span>، عدد وإشارة حلول المعادلة ذات المجهول <span class="math">x</span> التالية:</p>
                  <div class="math-equation">ln(x)-mx=0</div>
                  <section class="training-solution solution-toggle-door is-collapsed" data-discussion-door>
                    <button class="solution-detail-toggle" type="button" data-discussion-door-toggle aria-expanded="false">
                      <span>الحل المفصل</span>
                      <small>افتح الحل</small>
                    </button>
                    <div class="training-solution-body" data-discussion-door-body hidden>
                      <header class="solution-subhead">
                        <span>الجزء الأول</span>
                        <h4>الجزء الأول: دراسة الدالة</h4>
                      </header>

                    <article class="solution-step-card">
                      <h5>1. حساب النهايات</h5>
                      <div class="solution-case">
                        <strong>عند <span class="math">0^+</span>:</strong>
                        <div class="math-equation">lim(x→0+) f(x)=lim(x→0+) ln(x)/x=-∞</div>
                        <p>لأن <span class="math">ln(x)</span> تؤول إلى <span class="math">-∞</span> والمقام يؤول إلى <span class="math">0^+</span>.</p>
                        <p><strong>التفسير الهندسي:</strong> المستقيم ذو المعادلة <span class="math">x=0</span> هو مقارب عمودي للمنحنى <span class="math">(C_f)</span>.</p>
                      </div>
                      <div class="solution-case">
                        <strong>عند <span class="math">+∞</span>:</strong>
                        <div class="math-equation">lim(x→+∞) f(x)=lim(x→+∞) ln(x)/x=0</div>
                        <p>نهاية شهيرة، لأن اللوغارتم ينمو أبطأ بكثير من <span class="math">x</span>.</p>
                        <p><strong>التفسير الهندسي:</strong> المستقيم <span class="math">y=0</span> هو مقارب أفقي للمنحنى بجوار <span class="math">+∞</span>.</p>
                      </div>
                    </article>

                    <article class="solution-step-card">
                      <h5>2. المشتقة وإشارتها</h5>
                      <p>الدالة قابلة للاشتقاق على <span class="math">]0,+∞[</span>، وباستعمال مشتقة خارج قسمة نحصل على:</p>
                      <div class="math-equation">f'(x)=((1/x)x-ln(x))/x²=(1-ln(x))/x²</div>
                      <p>بما أن <span class="math">x²&gt;0</span> على مجال التعريف، فإن إشارة <span class="math">f'(x)</span> هي إشارة <span class="math">1-ln(x)</span>.</p>
                      <ul class="solution-list">
                        <li><span class="math">1-ln(x)=0 ⇔ x=e</span>.</li>
                        <li><span class="math">1-ln(x)&gt;0 ⇔ x&lt;e</span>.</li>
                        <li><span class="math">1-ln(x)&lt;0 ⇔ x&gt;e</span>.</li>
                      </ul>
                      <p>إذن الدالة <span class="math">f</span> متزايدة تماماً على <span class="math">]0,e]</span> ومتناقصة تماماً على <span class="math">[e,+∞[</span>.</p>
                    </article>

                    <article class="solution-step-card">
                      <h5>3. جدول التغيرات</h5>
                      <p>قيمة الحدية الكبرى هي:</p>
                      <div class="math-equation">f(e)=ln(e)/e=1/e</div>
                      <div class="variation-mini-table" aria-label="جدول تغيرات الدالة">
                        <div>x</div><div>0</div><div>e</div><div>+∞</div>
                        <div>f'(x)</div><div>+</div><div>0</div><div>-</div>
                        <div>f(x)</div><div>-∞</div><div>1/e</div><div>0</div>
                      </div>
                    </article>

                    <article class="solution-step-card">
                      <h5>4. التقاطع مع محور الفواصل</h5>
                      <p>نضع <span class="math">f(x)=0</span>:</p>
                      <div class="math-equation">ln(x)/x=0 ⇔ ln(x)=0 ⇔ x=1</div>
                      <p>إذن يقطع المنحنى <span class="math">(C_f)</span> محور الفواصل في النقطة <span class="math">(1,0)</span>.</p>
                    </article>


                    <article class="solution-step-card solution-graph-card">
                      <h5>الرسم البياني للدالة</h5>
                      <figure class="function-solution-graph" aria-label="الرسم البياني للدالة f(x)=ln(x)/x">
                        <svg viewBox="0 0 680 420" role="img">
                          <rect x="0" y="0" width="680" height="420" rx="18" fill="#fffdf4"></rect>
                          <g stroke="#e5e7eb" stroke-width="1">
                            <line x1="92" y1="36" x2="92" y2="354"></line>
                            <line x1="156" y1="36" x2="156" y2="354"></line>
                            <line x1="220" y1="36" x2="220" y2="354"></line>
                            <line x1="284" y1="36" x2="284" y2="354"></line>
                            <line x1="348" y1="36" x2="348" y2="354"></line>
                            <line x1="412" y1="36" x2="412" y2="354"></line>
                            <line x1="476" y1="36" x2="476" y2="354"></line>
                            <line x1="540" y1="36" x2="540" y2="354"></line>
                            <line x1="604" y1="36" x2="604" y2="354"></line>
                            <line x1="60" y1="82" x2="620" y2="82"></line>
                            <line x1="60" y1="146" x2="620" y2="146"></line>
                            <line x1="60" y1="210" x2="620" y2="210"></line>
                            <line x1="60" y1="274" x2="620" y2="274"></line>
                            <line x1="60" y1="338" x2="620" y2="338"></line>
                          </g>
                          <g stroke="#111827" stroke-width="2">
                            <line x1="60" y1="210" x2="620" y2="210"></line>
                            <line x1="92" y1="36" x2="92" y2="354"></line>
                          </g>
                          <g stroke="#2563eb" stroke-width="2" stroke-dasharray="8 8">
                            <line x1="92" y1="36" x2="92" y2="354"></line>
                            <line x1="60" y1="210" x2="620" y2="210"></line>
                          </g>
                          <path d="M100 354 C106 326 112 300 122 270 C136 232 152 212 172 210 C206 207 235 175 284 151 C328 131 382 135 436 148 C492 162 556 180 620 192" fill="none" stroke="#dc2626" stroke-width="4" stroke-linecap="round"></path>
                          <circle cx="156" cy="210" r="5" fill="#111827"></circle>
                          <circle cx="266" cy="145" r="5" fill="#059669"></circle>
                          <g font-family="Tajawal, Arial, sans-serif" font-size="15" font-weight="800" fill="#111827">
                            <text x="628" y="225">x</text>
                            <text x="102" y="48">y</text>
                            <text x="142" y="235">1</text>
                            <text x="256" y="132">e</text>
                            <text x="286" y="142" fill="#059669">القيمة الكبرى 1/e</text>
                            <text x="176" y="202" fill="#111827">(1,0)</text>
                            <text x="104" y="72" fill="#2563eb">x=0 مقارب عمودي</text>
                            <text x="456" y="203" fill="#2563eb">y=0 مقارب أفقي</text>
                            <text x="420" y="122" fill="#dc2626">C_f</text>
                          </g>
                        </svg>
                        <figcaption>منحنى <span class="math">f(x)=ln(x)/x</span>: يتزايد إلى غاية <span class="math">x=e</span> ثم يتناقص مقترباً من محور الفواصل.</figcaption>
                      </figure>
                    </article>                    <header class="solution-subhead">
                      <span>الجزء الثاني</span>
                      <h4>المناقشة البيانية</h4>
                    </header>
                    <article class="solution-step-card">
                      <p>المعادلة المعطاة هي:</p>
                      <div class="math-equation">ln(x)-mx=0</div>
                      <p>وبما أن <span class="math">x&gt;0</span>، نقسم الطرفين على <span class="math">x</span> فنحصل على:</p>
                      <div class="math-equation">ln(x)/x=m ⇔ f(x)=m</div>
                      <p>إذن حلول المعادلة هي فواصل نقاط تقاطع المنحنى <span class="math">(C_f)</span> مع المستقيم الأفقي <span class="math">y=m</span>.</p>
                      <div class="discussion-results-grid">
                        <div><strong>إذا <span class="math">m&lt;0</span></strong><p>حل وحيد موجب، وفاصلته في المجال <span class="math">]0,1[</span>.</p></div>
                        <div><strong>إذا <span class="math">m=0</span></strong><p>حل وحيد هو <span class="math">x=1</span>.</p></div>
                        <div><strong>إذا <span class="math">0&lt;m&lt;1/e</span></strong><p>حلّان موجبان: الأول في <span class="math">]1,e[</span> والثاني في <span class="math">]e,+∞[</span>.</p></div>
                        <div><strong>إذا <span class="math">m=1/e</span></strong><p>حل مضاعف موجب هو <span class="math">x=e</span>.</p></div>
                        <div><strong>إذا <span class="math">m&gt;1/e</span></strong><p>لا توجد حلول.</p></div>
                      </div>
                    </article>
                    </div>
                  </section>
                </article>
                <article class="training-exercise training-exercise-secondary">
                  <h4>التدريب الثاني</h4>
                  <p>تعتبر الدالة العددية <span class="math">g</span> المعرفة على المجال <span class="math">]0,+∞[</span> بالعبارة التالية:</p>
                  <div class="math-equation">g(x)=x-ln(x)</div>
                  <p>ليكن <span class="math">(C_g)</span> تمثيلها البياني في مستو منسوب إلى معلم متعامد ومتجانس.</p>
                  <h4>الجزء الأول: دراسة الدالة</h4>
                  <ol>
                    <li>احسب نهاية الدالة <span class="math">g</span> عند <span class="math">0</span> بقيم كبرى، وعند <span class="math">+∞</span>.</li>
                    <li>بيّن أنه من أجل كل <span class="math">x</span> من المجال <span class="math">]0,+∞[</span>، المشتقة تعطى بالعلاقة:</li>
                  </ol>
                  <div class="math-equation">g'(x)=(x-1)/x</div>
                  <ol start="3">
                    <li>ادرس إشارة <span class="math">g'(x)</span>، ثم شكل جدول تغيرات الدالة <span class="math">g</span>.</li>
                  </ol>
                  <h4>الجزء الثاني: المناقشة البيانية</h4>
                  <p>ناقش بيانيا، حسب قيم الوسيط الحقيقي <span class="math">m</span>، عدد حلول المعادلة ذات المجهول <span class="math">x</span> التالية:</p>
                  <div class="math-equation">ln(x)-x+m=0</div>
                  <section class="training-solution solution-toggle-door is-collapsed" data-discussion-door>
                    <button class="solution-detail-toggle" type="button" data-discussion-door-toggle aria-expanded="false">
                      <span>الحل المفصل</span>
                      <small>افتح الحل</small>
                    </button>
                    <div class="training-solution-body" data-discussion-door-body hidden>
                      <header class="solution-subhead">
                        <span>الجزء الأول</span>
                        <h4>دراسة الدالة</h4>
                      </header>

                      <article class="solution-step-card">
                        <h5>1. حساب النهايات</h5>
                        <div class="solution-case">
                          <strong>عند <span class="math">0^+</span>:</strong>
                          <p>لدينا <span class="math">x→0^+</span> و <span class="math">ln(x)→-∞</span>، ومنه <span class="math">-ln(x)→+∞</span>.</p>
                          <div class="math-equation">lim(x→0+) g(x)=lim(x→0+) (x-ln(x))=+∞</div>
                          <p><strong>التفسير الهندسي:</strong> المستقيم <span class="math">x=0</span> مقارب عمودي للمنحنى <span class="math">(C_g)</span>.</p>
                        </div>
                        <div class="solution-case">
                          <strong>عند <span class="math">+∞</span>:</strong>
                          <p>بما أن <span class="math">x</span> ينمو أسرع من <span class="math">ln(x)</span>، فإن الفرق <span class="math">x-ln(x)</span> يؤول إلى <span class="math">+∞</span>.</p>
                          <div class="math-equation">lim(x→+∞) g(x)=+∞</div>
                        </div>
                      </article>

                      <article class="solution-step-card">
                        <h5>2. حساب المشتقة</h5>
                        <p>الدالة <span class="math">g</span> قابلة للاشتقاق على <span class="math">]0,+∞[</span> لأنها فرق دالتين قابلتين للاشتقاق على هذا المجال.</p>
                        <div class="math-equation">g'(x)=1-1/x=(x-1)/x</div>
                      </article>

                      <article class="solution-step-card">
                        <h5>3. إشارة المشتقة وجدول التغيرات</h5>
                        <p>على المجال <span class="math">]0,+∞[</span> لدينا <span class="math">x&gt;0</span>، لذلك إشارة <span class="math">g'(x)</span> هي إشارة <span class="math">x-1</span>.</p>
                        <ul class="solution-list">
                          <li><span class="math">g'(x)&lt;0</span> إذا <span class="math">0&lt;x&lt;1</span>.</li>
                          <li><span class="math">g'(1)=0</span>.</li>
                          <li><span class="math">g'(x)&gt;0</span> إذا <span class="math">x&gt;1</span>.</li>
                        </ul>
                        <p>إذن <span class="math">g</span> متناقصة على <span class="math">]0,1]</span> ومتزايدة على <span class="math">[1,+∞[</span>.</p>
                        <p>كما أن:</p>
                        <div class="math-equation">g(1)=1-ln(1)=1</div>
                        <div class="variation-mini-table" aria-label="جدول تغيرات الدالة g">
                          <div>x</div><div>0</div><div>1</div><div>+∞</div>
                          <div>g'(x)</div><div>-</div><div>0</div><div>+</div>
                          <div>g(x)</div><div>+∞</div><div>1</div><div>+∞</div>
                        </div>
                        <p>القيمة الصغرى للدالة هي <span class="math">1</span> وتتحقق عند <span class="math">x=1</span>.</p>
                      </article>

                      <article class="solution-step-card solution-graph-card">
                        <h5>الرسم البياني للدالة</h5>
                        <figure class="function-solution-graph" aria-label="الرسم البياني للدالة g(x)=x-ln(x)">
                          <svg viewBox="0 0 680 420" role="img">
                            <rect x="0" y="0" width="680" height="420" rx="18" fill="#fffdf4"></rect>
                            <g stroke="#e5e7eb" stroke-width="1">
                              <line x1="92" y1="36" x2="92" y2="354"></line>
                              <line x1="156" y1="36" x2="156" y2="354"></line>
                              <line x1="220" y1="36" x2="220" y2="354"></line>
                              <line x1="284" y1="36" x2="284" y2="354"></line>
                              <line x1="348" y1="36" x2="348" y2="354"></line>
                              <line x1="412" y1="36" x2="412" y2="354"></line>
                              <line x1="476" y1="36" x2="476" y2="354"></line>
                              <line x1="540" y1="36" x2="540" y2="354"></line>
                              <line x1="604" y1="36" x2="604" y2="354"></line>
                              <line x1="60" y1="82" x2="620" y2="82"></line>
                              <line x1="60" y1="146" x2="620" y2="146"></line>
                              <line x1="60" y1="210" x2="620" y2="210"></line>
                              <line x1="60" y1="274" x2="620" y2="274"></line>
                              <line x1="60" y1="338" x2="620" y2="338"></line>
                            </g>
                            <g stroke="#111827" stroke-width="2">
                              <line x1="60" y1="338" x2="620" y2="338"></line>
                              <line x1="92" y1="36" x2="92" y2="354"></line>
                            </g>
                            <line x1="92" y1="36" x2="92" y2="354" stroke="#2563eb" stroke-width="2" stroke-dasharray="8 8"></line>
                            <path d="M102 58 C116 100 132 160 156 220 C180 268 210 292 248 306 C296 324 356 314 420 284 C486 253 552 205 620 142" fill="none" stroke="#dc2626" stroke-width="4" stroke-linecap="round"></path>
                            <circle cx="156" cy="306" r="5" fill="#059669"></circle>
                            <g font-family="Tajawal, Arial, sans-serif" font-size="15" font-weight="800" fill="#111827">
                              <text x="628" y="352">x</text>
                              <text x="102" y="48">y</text>
                              <text x="144" y="330">1</text>
                              <text x="168" y="300" fill="#059669">القيمة الصغرى (1,1)</text>
                              <text x="104" y="72" fill="#2563eb">x=0 مقارب عمودي</text>
                              <text x="470" y="158" fill="#dc2626">C_g</text>
                            </g>
                          </svg>
                          <figcaption>منحنى <span class="math">g(x)=x-ln(x)</span> يتناقص إلى القيمة الصغرى <span class="math">1</span> عند <span class="math">x=1</span> ثم يتزايد إلى <span class="math">+∞</span>.</figcaption>
                        </figure>
                      </article>

                      <header class="solution-subhead">
                        <span>الجزء الثاني</span>
                        <h4>المناقشة البيانية</h4>
                      </header>
                      <article class="solution-step-card">
                        <p>المعادلة المعطاة هي:</p>
                        <div class="math-equation">ln(x)-x+m=0</div>
                        <p>ننقل الحدود فنحصل على:</p>
                        <div class="math-equation">x-ln(x)=m ⇔ g(x)=m</div>
                        <p>إذن حلول المعادلة هي فواصل نقاط تقاطع المنحنى <span class="math">(C_g)</span> مع المستقيم الأفقي <span class="math">y=m</span>.</p>
                        <div class="discussion-results-grid">
                          <div><strong>إذا <span class="math">m&lt;1</span></strong><p>لا توجد حلول، لأن أصغر قيمة للدالة هي <span class="math">1</span>.</p></div>
                          <div><strong>إذا <span class="math">m=1</span></strong><p>حل وحيد مضاعف هو <span class="math">x=1</span>.</p></div>
                          <div><strong>إذا <span class="math">m&gt;1</span></strong><p>حلّان موجبان: الأول في <span class="math">]0,1[</span> والثاني في <span class="math">]1,+∞[</span>.</p></div>
                        </div>
                      </article>
                    </div>
                  </section>
                </article>
                <article class="training-exercise training-exercise-third">
                  <h4>التدريب الثالث</h4>
                  <p>تعتبر الدالة العددية <span class="math">h</span> المعرفة على المجال <span class="math">]0,+∞[</span> كما يلي:</p>
                  <div class="math-equation">h(x)=(1+ln(x))/x</div>
                  <p>ليكن <span class="math">(C_h)</span> تمثيلها البياني في مستو منسوب إلى معلم متعامد ومتجانس <span class="math">(O;i,j)</span>.</p>
                  <h4>الجزء الأول: دراسة الدالة</h4>
                  <ol>
                    <li>احسب نهايات الدالة <span class="math">h</span> عند <span class="math">0</span> بقيم كبرى، وعند <span class="math">+∞</span>. فسر النتيجتين هندسياً.</li>
                    <li>احسب الدالة المشتقة <span class="math">h'(x)</span>، ثم ادرس إشارتها.</li>
                    <li>شكل جدول تغيرات الدالة <span class="math">h</span>.</li>
                    <li>عين إحداثيات نقطة تقاطع المنحنى <span class="math">(C_h)</span> مع محور الفواصل.</li>
                  </ol>
                  <h4>الجزء الثاني: المناقشة البيانية</h4>
                  <p>ناقش بيانياً، حسب قيم الوسيط الحقيقي <span class="math">m</span>، عدد حلول المعادلة ذات المجهول <span class="math">x</span> التالية:</p>
                  <div class="math-equation">1+ln(x)-mx=0</div>
                  <section class="training-solution solution-toggle-door is-collapsed" data-discussion-door>
                    <button class="solution-detail-toggle" type="button" data-discussion-door-toggle aria-expanded="false">
                      <span>الحل المفصل</span>
                      <small>افتح الحل</small>
                    </button>
                    <div class="training-solution-body" data-discussion-door-body hidden>
                      <header class="solution-subhead"><span>الجزء الأول</span><h4>دراسة الدالة</h4></header>
                      <article class="solution-step-card">
                        <h5>1. حساب النهايات</h5>
                        <div class="solution-case"><strong>عند <span class="math">0^+</span>:</strong><p>لدينا <span class="math">1+ln(x)→-∞</span> و <span class="math">x→0^+</span>.</p><div class="math-equation">lim(x→0+) h(x)=-∞</div><p><strong>هندسياً:</strong> المستقيم <span class="math">x=0</span> مقارب عمودي للمنحنى <span class="math">(C_h)</span>.</p></div>
                        <div class="solution-case"><strong>عند <span class="math">+∞</span>:</strong><p>بما أن <span class="math">h(x)=1/x+ln(x)/x</span> وكل من الحدين يؤول إلى <span class="math">0</span>، فإن:</p><div class="math-equation">lim(x→+∞) h(x)=0</div><p><strong>هندسياً:</strong> المستقيم <span class="math">y=0</span> مقارب أفقي بجوار <span class="math">+∞</span>.</p></div>
                      </article>
                      <article class="solution-step-card">
                        <h5>2. المشتقة وإشارتها</h5>
                        <div class="math-equation">h'(x)=((1/x)x-(1+ln(x)))/x²=-ln(x)/x²</div>
                        <p>بما أن <span class="math">x²&gt;0</span>، فإن إشارة <span class="math">h'(x)</span> هي إشارة <span class="math">-ln(x)</span>.</p>
                        <ul class="solution-list"><li><span class="math">h'(x)&gt;0</span> على <span class="math">]0,1[</span>.</li><li><span class="math">h'(1)=0</span>.</li><li><span class="math">h'(x)&lt;0</span> على <span class="math">]1,+∞[</span>.</li></ul>
                      </article>
                      <article class="solution-step-card">
                        <h5>3. جدول التغيرات</h5>
                        <p>الدالة <span class="math">h</span> متزايدة على <span class="math">]0,1]</span> ومتناقصة على <span class="math">[1,+∞[</span>، وقيمتها الكبرى:</p>
                        <div class="math-equation">h(1)=(1+ln(1))/1=1</div>
                        <div class="variation-mini-table" aria-label="جدول تغيرات الدالة h"><div>x</div><div>0</div><div>1</div><div>+∞</div><div>h'(x)</div><div>+</div><div>0</div><div>-</div><div>h(x)</div><div>-∞</div><div>1</div><div>0</div></div>
                      </article>
                      <article class="solution-step-card">
                        <h5>4. التقاطع مع محور الفواصل</h5>
                        <div class="math-equation">h(x)=0 ⇔ 1+ln(x)=0 ⇔ x=e^(-1)</div>
                        <p>إذن نقطة التقاطع هي <span class="math">(e^(-1),0)</span>.</p>
                      </article>
                      <article class="solution-step-card solution-graph-card">
                        <h5>الرسم البياني للدالة</h5>
                        <figure class="function-solution-graph" aria-label="الرسم البياني للدالة h(x)=(1+ln(x))/x">
                          <svg viewBox="0 0 680 420" role="img"><rect x="0" y="0" width="680" height="420" rx="18" fill="#fffdf4"></rect><g stroke="#e5e7eb" stroke-width="1"><line x1="92" y1="36" x2="92" y2="354"></line><line x1="156" y1="36" x2="156" y2="354"></line><line x1="220" y1="36" x2="220" y2="354"></line><line x1="284" y1="36" x2="284" y2="354"></line><line x1="348" y1="36" x2="348" y2="354"></line><line x1="412" y1="36" x2="412" y2="354"></line><line x1="476" y1="36" x2="476" y2="354"></line><line x1="540" y1="36" x2="540" y2="354"></line><line x1="604" y1="36" x2="604" y2="354"></line><line x1="60" y1="82" x2="620" y2="82"></line><line x1="60" y1="146" x2="620" y2="146"></line><line x1="60" y1="210" x2="620" y2="210"></line><line x1="60" y1="274" x2="620" y2="274"></line><line x1="60" y1="338" x2="620" y2="338"></line></g><g stroke="#111827" stroke-width="2"><line x1="60" y1="210" x2="620" y2="210"></line><line x1="92" y1="36" x2="92" y2="354"></line></g><g stroke="#2563eb" stroke-width="2" stroke-dasharray="8 8"><line x1="92" y1="36" x2="92" y2="354"></line><line x1="60" y1="210" x2="620" y2="210"></line></g><path d="M100 354 C110 310 124 250 138 210 C148 182 154 116 156 86 C188 104 220 128 266 150 C342 184 470 198 620 204" fill="none" stroke="#dc2626" stroke-width="4" stroke-linecap="round"></path><circle cx="132" cy="210" r="5" fill="#111827"></circle><circle cx="156" cy="86" r="5" fill="#059669"></circle><g font-family="Tajawal, Arial, sans-serif" font-size="15" font-weight="800" fill="#111827"><text x="628" y="225">x</text><text x="102" y="48">y</text><text x="116" y="235">e⁻¹</text><text x="166" y="82" fill="#059669">(1,1)</text><text x="104" y="72" fill="#2563eb">x=0 مقارب عمودي</text><text x="452" y="203" fill="#2563eb">y=0 مقارب أفقي</text><text x="420" y="140" fill="#dc2626">C_h</text></g></svg>
                          <figcaption>المنحنى يرتفع من <span class="math">-∞</span> إلى القيمة الكبرى <span class="math">1</span> عند <span class="math">x=1</span> ثم يقترب من <span class="math">0</span>.</figcaption>
                        </figure>
                      </article>
                      <header class="solution-subhead"><span>الجزء الثاني</span><h4>المناقشة البيانية</h4></header>
                      <article class="solution-step-card"><p>بما أن <span class="math">x&gt;0</span>:</p><div class="math-equation">1+ln(x)-mx=0 ⇔ (1+ln(x))/x=m ⇔ h(x)=m</div><p>نناقش عدد تقاطعات <span class="math">(C_h)</span> مع المستقيم <span class="math">y=m</span>.</p><div class="discussion-results-grid"><div><strong>إذا <span class="math">m&lt;0</span></strong><p>حل وحيد في <span class="math">]0,e^(-1)[</span>.</p></div><div><strong>إذا <span class="math">m=0</span></strong><p>حل وحيد هو <span class="math">x=e^(-1)</span>.</p></div><div><strong>إذا <span class="math">0&lt;m&lt;1</span></strong><p>حلان موجبان: أحدهما في <span class="math">]e^(-1),1[</span> والثاني في <span class="math">]1,+∞[</span>.</p></div><div><strong>إذا <span class="math">m=1</span></strong><p>حل وحيد مضاعف هو <span class="math">x=1</span>.</p></div><div><strong>إذا <span class="math">m&gt;1</span></strong><p>لا توجد حلول.</p></div></div></article>
                    </div>
                  </section>
                </article>
                <article class="training-exercise training-exercise-fourth">
                  <h4>التدريب الرابع</h4>
                  <p>تعتبر الدالة العددية <span class="math">f</span> المعرفة على المجال <span class="math">D_f=]0,1[∪]1,+∞[</span> كما يلي:</p>
                  <div class="math-equation">f(x)=x/ln(x)</div>
                  <p>ليكن <span class="math">(C_f)</span> تمثيلها البياني في مستو منسوب إلى معلم متعامد ومتجانس.</p>
                  <h4>الجزء الأول: دراسة الدالة</h4>
                  <ol>
                    <li>احسب نهايات الدالة <span class="math">f</span> عند أطراف مجالات تعريفها: <span class="math">1^-</span>، <span class="math">1^+</span>، وعند <span class="math">+∞</span>.</li>
                    <li>برهن أن <span class="math">lim(x→0+) f(x)=0</span>. هل يمكن تمديد الدالة <span class="math">f</span> بالاستمرار عند <span class="math">0</span>؟</li>
                    <li>بيّن أنه من أجل كل <span class="math">x</span> من <span class="math">D_f</span>:</li>
                  </ol>
                  <div class="math-equation">f'(x)=(ln(x)-1)/(ln²(x))</div>
                  <ol start="4"><li>ادرس إشارة <span class="math">f'(x)</span>، ثم شكل جدول تغيرات الدالة <span class="math">f</span>.</li></ol>
                  <h4>الجزء الثاني: المناقشة البيانية</h4>
                  <p>ناقش بيانياً، حسب قيم الوسيط الحقيقي <span class="math">m</span>، عدد حلول المعادلة ذات المجهول <span class="math">x</span> التالية:</p>
                  <div class="math-equation">x-mln(x)=0</div>
                  <section class="training-solution solution-toggle-door is-collapsed" data-discussion-door>
                    <button class="solution-detail-toggle" type="button" data-discussion-door-toggle aria-expanded="false"><span>الحل المفصل</span><small>افتح الحل</small></button>
                    <div class="training-solution-body" data-discussion-door-body hidden>
                      <header class="solution-subhead"><span>الجزء الأول</span><h4>دراسة الدالة</h4></header>
                      <article class="solution-step-card">
                        <h5>1. النهايات</h5>
                        <div class="solution-case"><strong>عند <span class="math">1^-</span>:</strong><p><span class="math">ln(x)→0^-</span> و <span class="math">x→1</span>، إذن:</p><div class="math-equation">lim(x→1-) x/ln(x)=-∞</div></div>
                        <div class="solution-case"><strong>عند <span class="math">1^+</span>:</strong><p><span class="math">ln(x)→0^+</span> و <span class="math">x→1</span>، إذن:</p><div class="math-equation">lim(x→1+) x/ln(x)=+∞</div><p>المستقيم <span class="math">x=1</span> مقارب عمودي للمنحنى.</p></div>
                        <div class="solution-case"><strong>عند <span class="math">+∞</span>:</strong><p>بما أن <span class="math">x</span> ينمو أسرع من <span class="math">ln(x)</span>:</p><div class="math-equation">lim(x→+∞) x/ln(x)=+∞</div></div>
                        <div class="solution-case"><strong>عند <span class="math">0^+</span>:</strong><p>نضع <span class="math">t=1/x</span>، فإذا <span class="math">x→0^+</span> فإن <span class="math">t→+∞</span>، ولدينا:</p><div class="math-equation">x/ln(x)=1/(t ln(1/t))=-1/(t ln(t))→0</div><p>إذن يمكن تمديد <span class="math">f</span> بالاستمرار عند <span class="math">0</span> بوضع <span class="math">f(0)=0</span>.</p></div>
                      </article>
                      <article class="solution-step-card">
                        <h5>2. المشتقة وإشارتها</h5>
                        <p>باستعمال مشتقة خارج قسمة:</p><div class="math-equation">f'(x)=(ln(x)-1)/(ln²(x))</div><p>بما أن <span class="math">ln²(x)&gt;0</span> على <span class="math">D_f</span>، فإن إشارة <span class="math">f'(x)</span> هي إشارة <span class="math">ln(x)-1</span>.</p>
                        <ul class="solution-list"><li>على <span class="math">]0,1[</span>: <span class="math">ln(x)&lt;0</span> إذن <span class="math">f'(x)&lt;0</span>.</li><li>على <span class="math">]1,e[</span>: <span class="math">ln(x)&lt;1</span> إذن <span class="math">f'(x)&lt;0</span>.</li><li>عند <span class="math">x=e</span>: <span class="math">f'(e)=0</span>.</li><li>على <span class="math">]e,+∞[</span>: <span class="math">f'(x)&gt;0</span>.</li></ul>
                      </article>
                      <article class="solution-step-card">
                        <h5>3. جدول التغيرات</h5>
                        <p><span class="math">f(e)=e</span> وهي قيمة صغرى على المجال <span class="math">]1,+∞[</span>.</p>
                        <div class="variation-mini-table" aria-label="جدول تغيرات الدالة f"><div>x</div><div>0</div><div>1</div><div>e</div><div>+∞</div><div>f'(x)</div><div>-</div><div>||</div><div>0</div><div>+</div><div>f(x)</div><div>0</div><div>-∞ / +∞</div><div>e</div><div>+∞</div></div>
                      </article>
                      <article class="solution-step-card solution-graph-card">
                        <h5>الرسم البياني للدالة</h5>
                        <figure class="function-solution-graph" aria-label="الرسم البياني للدالة f(x)=x/ln(x)"><svg viewBox="0 0 680 420" role="img"><rect x="0" y="0" width="680" height="420" rx="18" fill="#fffdf4"></rect><g stroke="#e5e7eb" stroke-width="1"><line x1="90" y1="40" x2="90" y2="350"></line><line x1="170" y1="40" x2="170" y2="350"></line><line x1="250" y1="40" x2="250" y2="350"></line><line x1="330" y1="40" x2="330" y2="350"></line><line x1="410" y1="40" x2="410" y2="350"></line><line x1="490" y1="40" x2="490" y2="350"></line><line x1="570" y1="40" x2="570" y2="350"></line><line x1="60" y1="210" x2="620" y2="210"></line></g><g stroke="#111827" stroke-width="2"><line x1="60" y1="210" x2="620" y2="210"></line><line x1="90" y1="40" x2="90" y2="350"></line></g><line x1="170" y1="40" x2="170" y2="350" stroke="#2563eb" stroke-width="2" stroke-dasharray="8 8"></line><path d="M96 209 C120 214 145 248 165 350" fill="none" stroke="#dc2626" stroke-width="4" stroke-linecap="round"></path><path d="M176 44 C190 96 210 154 250 188 C288 220 330 228 380 214 C450 196 532 158 620 106" fill="none" stroke="#dc2626" stroke-width="4" stroke-linecap="round"></path><circle cx="330" cy="228" r="5" fill="#059669"></circle><g font-family="Tajawal, Arial, sans-serif" font-size="15" font-weight="800" fill="#111827"><text x="628" y="225">x</text><text x="100" y="52">y</text><text x="176" y="72" fill="#2563eb">x=1</text><text x="340" y="224" fill="#059669">(e,e)</text><text x="470" y="128" fill="#dc2626">C_f</text></g></svg><figcaption>للمنحنى فرع على <span class="math">]0,1[</span> وفرع على <span class="math">]1,+∞[</span>، والمستقيم <span class="math">x=1</span> مقارب عمودي.</figcaption></figure>
                      </article>
                      <header class="solution-subhead"><span>الجزء الثاني</span><h4>المناقشة البيانية</h4></header>
                      <article class="solution-step-card"><p>المعادلة:</p><div class="math-equation">x-mln(x)=0</div><p>إذا كان <span class="math">ln(x)≠0</span>، أي <span class="math">x≠1</span>، فهي تكافئ:</p><div class="math-equation">x/ln(x)=m ⇔ f(x)=m</div><p>إذن نناقش تقاطعات المنحنى <span class="math">(C_f)</span> مع المستقيم <span class="math">y=m</span>.</p><div class="discussion-results-grid"><div><strong>إذا <span class="math">m&lt;0</span></strong><p>حل وحيد في <span class="math">]0,1[</span>.</p></div><div><strong>إذا <span class="math">0≤m&lt;e</span></strong><p>لا توجد حلول.</p></div><div><strong>إذا <span class="math">m=e</span></strong><p>حل وحيد مضاعف هو <span class="math">x=e</span>.</p></div><div><strong>إذا <span class="math">m&gt;e</span></strong><p>حلان في المجال <span class="math">]1,+∞[</span>: أحدهما في <span class="math">]1,e[</span> والثاني في <span class="math">]e,+∞[</span>.</p></div></div></article>
                    </div>
                  </section>
                </article>
                <article class="training-exercise training-exercise-fifth">
                  <h4>التدريب الخامس</h4>
                  <p>تعتبر الدالة العددية <span class="math">f</span> المعرفة على المجال <span class="math">]0,+∞[</span> بالعبارة:</p>
                  <div class="math-equation">f(x)=ln²(x)-2ln(x)</div>
                  <p>حيث <span class="math">ln²(x)</span> تعني <span class="math">(ln(x))²</span>. وليكن <span class="math">(C_f)</span> تمثيلها البياني.</p>
                  <h4>الجزء الأول: دراسة الدالة الأصلية</h4>
                  <ol>
                    <li>احسب نهايات الدالة <span class="math">f</span> عند <span class="math">0</span> بقيم كبرى، وعند <span class="math">+∞</span>.</li>
                    <li>احسب الدالة المشتقة <span class="math">f'(x)</span>، وادرس إشارتها، ثم شكل جدول تغيرات الدالة <span class="math">f</span>.</li>
                    <li>عين إحداثيات نقط تقاطع المنحنى <span class="math">(C_f)</span> مع محور الفواصل.</li>
                  </ol>
                  <h4>الجزء الثاني: التحويل النقطي والقيمة المطلقة</h4>
                  <p>لتكن الدالة <span class="math">h</span> المعرفة على <span class="math">]0,+∞[</span> كما يلي: <span class="math">h(x)=|f(x)|</span>. اشرح كيف نستنتج رسم <span class="math">(C_h)</span> انطلاقاً من <span class="math">(C_f)</span>، ثم حدد القيمة الحدية الكبرى المحلية للدالة <span class="math">h</span>.</p>
                  <h4>الجزء الثالث: المناقشة البيانية</h4>
                  <p>ناقش بيانياً، حسب قيم الوسيط الحقيقي <span class="math">m</span>، عدد حلول المعادلة ذات المجهول <span class="math">x</span> التالية:</p>
                  <div class="math-equation">ln⁴(x)-4ln³(x)+4ln²(x)-m²=0</div>
                  <section class="training-solution solution-toggle-door is-collapsed" data-discussion-door>
                    <button class="solution-detail-toggle" type="button" data-discussion-door-toggle aria-expanded="false"><span>الحل المفصل</span><small>افتح الحل</small></button>
                    <div class="training-solution-body" data-discussion-door-body hidden>
                      <header class="solution-subhead"><span>الجزء الأول</span><h4>دراسة الدالة الأصلية</h4></header>
                      <article class="solution-step-card">
                        <h5>1. حساب النهايات</h5>
                        <p>نضع <span class="math">u=ln(x)</span>. عندما <span class="math">x→0^+</span> فإن <span class="math">u→-∞</span>، وعندما <span class="math">x→+∞</span> فإن <span class="math">u→+∞</span>.</p>
                        <div class="math-equation">f(x)=u²-2u=(u-1)²-1</div>
                        <p>إذن في الجهتين، الحد الغالب هو <span class="math">u²</span>، وبالتالي:</p>
                        <div class="math-equation">lim(x→0+) f(x)=+∞ و lim(x→+∞) f(x)=+∞</div>
                      </article>
                      <article class="solution-step-card">
                        <h5>2. المشتقة والتغيرات</h5>
                        <div class="math-equation">f'(x)=2ln(x)/x-2/x=2(ln(x)-1)/x</div>
                        <p>بما أن <span class="math">x&gt;0</span>، فإن إشارة <span class="math">f'(x)</span> هي إشارة <span class="math">ln(x)-1</span>.</p>
                        <ul class="solution-list"><li><span class="math">f'(x)&lt;0</span> إذا <span class="math">0&lt;x&lt;e</span>.</li><li><span class="math">f'(e)=0</span>.</li><li><span class="math">f'(x)&gt;0</span> إذا <span class="math">x&gt;e</span>.</li></ul>
                        <p>إذن <span class="math">f</span> متناقصة على <span class="math">]0,e]</span> ومتزايدة على <span class="math">[e,+∞[</span>، وقيمتها الصغرى:</p>
                        <div class="math-equation">f(e)=1-2=-1</div>
                        <div class="variation-mini-table" aria-label="جدول تغيرات الدالة f"><div>x</div><div>0</div><div>e</div><div>+∞</div><div>f'(x)</div><div>-</div><div>0</div><div>+</div><div>f(x)</div><div>+∞</div><div>-1</div><div>+∞</div></div>
                      </article>
                      <article class="solution-step-card">
                        <h5>3. التقاطع مع محور الفواصل</h5>
                        <div class="math-equation">f(x)=0 ⇔ ln²(x)-2ln(x)=0 ⇔ ln(x)(ln(x)-2)=0</div>
                        <p>ومنه <span class="math">ln(x)=0</span> أو <span class="math">ln(x)=2</span>، أي:</p>
                        <div class="math-equation">x=1 أو x=e²</div>
                        <p>نقطتا التقاطع هما <span class="math">(1,0)</span> و <span class="math">(e²,0)</span>.</p>
                      </article>
                      <header class="solution-subhead"><span>الجزء الثاني</span><h4>القيمة المطلقة</h4></header>
                      <article class="solution-step-card">
                        <p>لرسم <span class="math">(C_h)</span> حيث <span class="math">h(x)=|f(x)|</span>، نُبقي الجزء الموجود فوق محور الفواصل كما هو، ونعكس الجزء الموجود تحته بالنسبة إلى محور الفواصل.</p>
                        <p>بما أن <span class="math">f(x)&lt;0</span> على <span class="math">]1,e²[</span>، فإن هذا القوس فقط ينعكس إلى الأعلى.</p>
                        <p>عند <span class="math">x=e</span> لدينا <span class="math">f(e)=-1</span>، إذن:</p>
                        <div class="math-equation">h(e)=|f(e)|=1</div>
                        <p>فتكون القيمة الحدية الكبرى المحلية للدالة <span class="math">h</span> هي <span class="math">1</span> عند <span class="math">x=e</span>.</p>
                      </article>
                      <article class="solution-step-card solution-graph-card">
                        <h5>رسم توضيحي</h5>
                        <figure class="function-solution-graph" aria-label="رسم f و h=|f|"><svg viewBox="0 0 680 420" role="img"><rect x="0" y="0" width="680" height="420" rx="18" fill="#fffdf4"></rect><g stroke="#e5e7eb"><line x1="60" y1="210" x2="620" y2="210"></line><line x1="110" y1="40" x2="110" y2="350"></line><line x1="210" y1="40" x2="210" y2="350"></line><line x1="310" y1="40" x2="310" y2="350"></line><line x1="410" y1="40" x2="410" y2="350"></line><line x1="510" y1="40" x2="510" y2="350"></line></g><g stroke="#111827" stroke-width="2"><line x1="60" y1="210" x2="620" y2="210"></line><line x1="110" y1="40" x2="110" y2="350"></line></g><path d="M90 54 C150 90 210 168 260 210 C300 244 340 255 380 210 C450 132 535 74 620 48" fill="none" stroke="#dc2626" stroke-width="4" stroke-linecap="round"></path><path d="M260 210 C300 176 340 165 380 210" fill="none" stroke="#059669" stroke-width="4" stroke-linecap="round"></path><circle cx="260" cy="210" r="5" fill="#111827"></circle><circle cx="320" cy="165" r="5" fill="#059669"></circle><circle cx="380" cy="210" r="5" fill="#111827"></circle><g font-family="Tajawal, Arial, sans-serif" font-size="15" font-weight="800" fill="#111827"><text x="252" y="232">1</text><text x="310" y="154">e</text><text x="368" y="232">e²</text><text x="450" y="92" fill="#dc2626">C_f</text><text x="338" y="158" fill="#059669">C_h</text></g></svg><figcaption>القوس الأخضر هو انعكاس الجزء السالب من <span class="math">C_f</span>، وهو يعطي المنحنى <span class="math">C_h</span>.</figcaption></figure>
                      </article>
                      <header class="solution-subhead"><span>الجزء الثالث</span><h4>المناقشة البيانية</h4></header>
                      <article class="solution-step-card">
                        <p>نلاحظ أن:</p>
                        <div class="math-equation">ln⁴(x)-4ln³(x)+4ln²(x)=[ln²(x)-2ln(x)]²=f²(x)</div>
                        <p>إذن المعادلة تصبح:</p>
                        <div class="math-equation">f²(x)-m²=0 ⇔ |f(x)|=|m| ⇔ h(x)=|m|</div>
                        <p>نناقش تقاطعات منحنى <span class="math">h</span> مع المستقيم الأفقي <span class="math">y=|m|</span>.</p>
                        <div class="discussion-results-grid"><div><strong>إذا <span class="math">m=0</span></strong><p>حلّان: <span class="math">x=1</span> و <span class="math">x=e²</span>.</p></div><div><strong>إذا <span class="math">0&lt;|m|&lt;1</span></strong><p>أربعة حلول موجبة.</p></div><div><strong>إذا <span class="math">|m|=1</span></strong><p>ثلاثة حلول موجبة، لأن المستقيم يمس المنحنى عند <span class="math">x=e</span>.</p></div><div><strong>إذا <span class="math">|m|&gt;1</span></strong><p>حلّان موجبان.</p></div></div>
                      </article>
                    </div>
                  </section>
                </article>
                <article class="training-exercise training-exercise-sixth">
                  <h4>التدريب السادس</h4>
                  <p>تعتبر الدالة العددية <span class="math">g</span> المعرفة على المجال <span class="math">]0,+∞[</span> كما يلي:</p>
                  <div class="math-equation">g(x)=x-1+ln((x+1)/x)</div>
                  <p>وليكن <span class="math">(C_g)</span> تمثيلها البياني.</p>
                  <ol>
                    <li>بيّن أن المستقيم <span class="math">Δ</span> ذا المعادلة <span class="math">y=x-1</span> هو مقارب مائل للمنحنى <span class="math">(C_g)</span> بجوار <span class="math">+∞</span>.</li>
                    <li>ادرس وضعية المنحنى <span class="math">(C_g)</span> بالنسبة للمقارب <span class="math">Δ</span>.</li>
                    <li>ادرس تغيرات الدالة <span class="math">g</span>.</li>
                    <li>ناقش بيانياً، حسب قيم الوسيط الحقيقي <span class="math">m</span>، عدد حلول المعادلة:</li>
                  </ol>
                  <div class="math-equation">xln(x+1)-xln(x)-mx=0</div>
                  <section class="training-solution solution-toggle-door is-collapsed" data-discussion-door>
                    <button class="solution-detail-toggle" type="button" data-discussion-door-toggle aria-expanded="false"><span>الحل المفصل</span><small>افتح الحل</small></button>
                    <div class="training-solution-body" data-discussion-door-body hidden>
                      <header class="solution-subhead"><span>الحل</span><h4>دراسة الدالة والمناقشة</h4></header>
                      <article class="solution-step-card">
                        <h5>1. المقارب المائل</h5>
                        <p>نحسب الفرق بين الدالة والمستقيم <span class="math">Δ: y=x-1</span>:</p>
                        <div class="math-equation">g(x)-(x-1)=ln((x+1)/x)=ln(1+1/x)</div>
                        <p>عندما <span class="math">x→+∞</span> فإن <span class="math">1/x→0</span>، ومنه:</p>
                        <div class="math-equation">lim(x→+∞) [g(x)-(x-1)]=ln(1)=0</div>
                        <p>إذن المستقيم <span class="math">y=x-1</span> مقارب مائل للمنحنى بجوار <span class="math">+∞</span>.</p>
                      </article>
                      <article class="solution-step-card">
                        <h5>2. الوضع النسبي</h5>
                        <p>لدينا على <span class="math">]0,+∞[</span>:</p>
                        <div class="math-equation">g(x)-(x-1)=ln(1+1/x)</div>
                        <p>وبما أن <span class="math">1+1/x&gt;1</span>، فإن <span class="math">ln(1+1/x)&gt;0</span>.</p>
                        <p>إذن المنحنى <span class="math">(C_g)</span> يقع فوق المقارب المائل <span class="math">Δ</span> على كامل المجال.</p>
                      </article>
                      <article class="solution-step-card">
                        <h5>3. تغيرات الدالة</h5>
                        <p>نكتب:</p>
                        <div class="math-equation">g(x)=x-1+ln(x+1)-ln(x)</div>
                        <p>إذن:</p>
                        <div class="math-equation">g'(x)=1+1/(x+1)-1/x=1-1/(x(x+1))</div>
                        <div class="math-equation">g'(x)=(x²+x-1)/(x(x+1))</div>
                        <p>بما أن <span class="math">x(x+1)&gt;0</span> على المجال، فإن إشارة <span class="math">g'(x)</span> هي إشارة <span class="math">x²+x-1</span>.</p>
                        <p>الجذر الموجب للمعادلة <span class="math">x²+x-1=0</span> هو:</p>
                        <div class="math-equation">α=(-1+√5)/2</div>
                        <p>إذن <span class="math">g</span> متناقصة على <span class="math">]0,α]</span> ومتزايدة على <span class="math">[α,+∞[</span>.</p>
                        <p>كما أن <span class="math">lim(x→0+) g(x)=+∞</span> و <span class="math">lim(x→+∞) g(x)=+∞</span>، لذلك للدالة قيمة صغرى عند <span class="math">α</span>.</p>
                        <div class="variation-mini-table" aria-label="جدول تغيرات الدالة g"><div>x</div><div>0</div><div>α</div><div>+∞</div><div>g'(x)</div><div>-</div><div>0</div><div>+</div><div>g(x)</div><div>+∞</div><div>g(α)</div><div>+∞</div></div>
                      </article>
                      <article class="solution-step-card solution-graph-card">
                        <h5>رسم توضيحي</h5>
                        <figure class="function-solution-graph" aria-label="رسم الدالة g والمقارب y=x-1"><svg viewBox="0 0 680 420" role="img"><rect x="0" y="0" width="680" height="420" rx="18" fill="#fffdf4"></rect><g stroke="#e5e7eb"><line x1="90" y1="40" x2="90" y2="350"></line><line x1="170" y1="40" x2="170" y2="350"></line><line x1="250" y1="40" x2="250" y2="350"></line><line x1="330" y1="40" x2="330" y2="350"></line><line x1="410" y1="40" x2="410" y2="350"></line><line x1="490" y1="40" x2="490" y2="350"></line><line x1="570" y1="40" x2="570" y2="350"></line><line x1="60" y1="240" x2="620" y2="240"></line></g><g stroke="#111827" stroke-width="2"><line x1="60" y1="240" x2="620" y2="240"></line><line x1="90" y1="40" x2="90" y2="350"></line></g><path d="M105 334 L620 82" stroke="#2563eb" stroke-width="3" stroke-dasharray="8 8" fill="none"></path><path d="M104 70 C124 126 146 205 190 248 C240 292 312 292 384 250 C465 202 540 132 620 88" fill="none" stroke="#dc2626" stroke-width="4" stroke-linecap="round"></path><circle cx="210" cy="270" r="5" fill="#059669"></circle><g font-family="Tajawal, Arial, sans-serif" font-size="15" font-weight="800" fill="#111827"><text x="628" y="255">x</text><text x="100" y="52">y</text><text x="470" y="136" fill="#2563eb">Δ: y=x-1</text><text x="520" y="116" fill="#dc2626">C_g</text><text x="220" y="266" fill="#059669">α</text></g></svg><figcaption>المنحنى يبقى فوق المقارب المائل ويقترب منه بجوار <span class="math">+∞</span>.</figcaption></figure>
                      </article>
                      <article class="solution-step-card">
                        <h5>4. المناقشة البيانية</h5>
                        <p>المعادلة المعطاة هي:</p>
                        <div class="math-equation">xln(x+1)-xln(x)-mx=0</div>
                        <p>بما أن <span class="math">x&gt;0</span> نقسم على <span class="math">x</span>:</p>
                        <div class="math-equation">ln((x+1)/x)=m</div>
                        <p>وبما أن <span class="math">ln((x+1)/x)=g(x)-(x-1)</span>، فإن المناقشة تختزل إلى دراسة الدالة:</p>
                        <div class="math-equation">φ(x)=ln(1+1/x)</div>
                        <p>الدالة <span class="math">φ</span> متناقصة تماماً على <span class="math">]0,+∞[</span>، ونهايتاها:</p>
                        <div class="math-equation">lim(x→0+) φ(x)=+∞ و lim(x→+∞) φ(x)=0</div>
                        <div class="discussion-results-grid"><div><strong>إذا <span class="math">m≤0</span></strong><p>لا توجد حلول.</p></div><div><strong>إذا <span class="math">m&gt;0</span></strong><p>حل وحيد موجب، ويمكن كتابته <span class="math">x=1/(e^m-1)</span>.</p></div></div>
                      </article>
                    </div>
                  </section>
                </article>
                <article class="training-exercise training-exercise-seventh">
                  <h4>التدريب السابع</h4>
                  <p>تعتبر الدالة العددية <span class="math">h</span> المعرفة على <span class="math">R</span> بالعبارة:</p>
                  <div class="math-equation">h(x)=e^x-e^(-x)</div>
                  <p>وليكن <span class="math">(C_h)</span> تمثيلها البياني.</p>
                  <ol>
                    <li>ادرس شفعية الدالة <span class="math">h</span>. هل هي زوجية أم فردية؟ وفسر النتيجة هندسياً.</li>
                    <li>ادرس تغيرات الدالة <span class="math">h</span> على المجال <span class="math">[0,+∞[</span>، ثم استنتج تغيراتها على <span class="math">R</span>.</li>
                    <li>ناقش بيانياً، حسب قيم الوسيط الحقيقي الموجب تماماً <span class="math">m&gt;0</span>، عدد حلول المعادلة:</li>
                  </ol>
                  <div class="math-equation">e^(4x)-(m²+2)e^(2x)+1=0</div>
                  <section class="training-solution solution-toggle-door is-collapsed" data-discussion-door>
                    <button class="solution-detail-toggle" type="button" data-discussion-door-toggle aria-expanded="false"><span>الحل المفصل</span><small>افتح الحل</small></button>
                    <div class="training-solution-body" data-discussion-door-body hidden>
                      <header class="solution-subhead"><span>الحل</span><h4>دراسة الدالة والمناقشة</h4></header>
                      <article class="solution-step-card">
                        <h5>1. الشفعية والتفسير الهندسي</h5>
                        <p>نحسب <span class="math">h(-x)</span>:</p>
                        <div class="math-equation">h(-x)=e^(-x)-e^x=-(e^x-e^(-x))=-h(x)</div>
                        <p>إذن الدالة <span class="math">h</span> فردية.</p>
                        <p><strong>التفسير الهندسي:</strong> المنحنى <span class="math">(C_h)</span> متناظر بالنسبة إلى مبدأ المعلم <span class="math">O</span>.</p>
                      </article>
                      <article class="solution-step-card">
                        <h5>2. التغيرات</h5>
                        <p>الدالة قابلة للاشتقاق على <span class="math">R</span>، ولدينا:</p>
                        <div class="math-equation">h'(x)=e^x+e^(-x)</div>
                        <p>وبما أن <span class="math">e^x&gt;0</span> و <span class="math">e^(-x)&gt;0</span>، فإن <span class="math">h'(x)&gt;0</span> من أجل كل <span class="math">x∈R</span>.</p>
                        <p>إذن <span class="math">h</span> متزايدة تماماً على <span class="math">R</span>، وبالتالي أيضاً على <span class="math">[0,+∞[</span>.</p>
                        <p>كما أن:</p>
                        <div class="math-equation">h(0)=0, lim(x→+∞)h(x)=+∞, lim(x→-∞)h(x)=-∞</div>
                      </article>
                      <article class="solution-step-card solution-graph-card">
                        <h5>رسم توضيحي</h5>
                        <figure class="function-solution-graph" aria-label="رسم h(x)=e^x-e^(-x)"><svg viewBox="0 0 680 420" role="img"><rect x="0" y="0" width="680" height="420" rx="18" fill="#fffdf4"></rect><g stroke="#e5e7eb"><line x1="100" y1="40" x2="100" y2="350"></line><line x1="180" y1="40" x2="180" y2="350"></line><line x1="260" y1="40" x2="260" y2="350"></line><line x1="340" y1="40" x2="340" y2="350"></line><line x1="420" y1="40" x2="420" y2="350"></line><line x1="500" y1="40" x2="500" y2="350"></line><line x1="580" y1="40" x2="580" y2="350"></line><line x1="60" y1="210" x2="620" y2="210"></line></g><g stroke="#111827" stroke-width="2"><line x1="60" y1="210" x2="620" y2="210"></line><line x1="340" y1="40" x2="340" y2="350"></line></g><path d="M86 340 C150 322 226 276 300 226 C340 210 378 194 420 154 C478 98 548 54 620 42" fill="none" stroke="#dc2626" stroke-width="4" stroke-linecap="round"></path><circle cx="340" cy="210" r="5" fill="#111827"></circle><g font-family="Tajawal, Arial, sans-serif" font-size="15" font-weight="800" fill="#111827"><text x="628" y="225">x</text><text x="350" y="52">y</text><text x="352" y="205">O</text><text x="462" y="118" fill="#dc2626">C_h</text><text x="112" y="320" fill="#059669">تناظر حول O</text></g></svg><figcaption>المنحنى متزايد ويمر بالمبدأ، وتناظره حول <span class="math">O</span> نتيجة فردية الدالة.</figcaption></figure>
                      </article>
                      <article class="solution-step-card">
                        <h5>3. المناقشة</h5>
                        <p>المعادلة هي:</p>
                        <div class="math-equation">e^(4x)-(m²+2)e^(2x)+1=0</div>
                        <p>نلاحظ أن:</p>
                        <div class="math-equation">(e^x-e^(-x))²=e^(2x)-2+e^(-2x)</div>
                        <p>نقسم المعادلة على <span class="math">e^(2x)&gt;0</span>:</p>
                        <div class="math-equation">e^(2x)-(m²+2)+e^(-2x)=0</div>
                        <div class="math-equation">e^(2x)+e^(-2x)-2=m²</div>
                        <p>أي:</p>
                        <div class="math-equation">(e^x-e^(-x))²=m² ⇔ h²(x)=m²</div>
                        <p>وبما أن <span class="math">m&gt;0</span>، نحصل على:</p>
                        <div class="math-equation">h(x)=m أو h(x)=-m</div>
                        <p>الدالة <span class="math">h</span> متزايدة تماماً من <span class="math">-∞</span> إلى <span class="math">+∞</span>، لذلك لكل من المعادلتين حل وحيد.</p>
                        <div class="discussion-results-grid"><div><strong>لأي <span class="math">m&gt;0</span></strong><p>للمعادلة حلان حقيقيان بالضبط.</p></div><div><strong>تماثل الحلين</strong><p>إذا كان <span class="math">a</span> حل <span class="math">h(x)=m</span>، فإن <span class="math">-a</span> حل <span class="math">h(x)=-m</span>.</p></div></div>
                      </article>
                    </div>
                  </section>
                </article>
                <article class="training-exercise training-exercise-eighth">
                  <h4>التدريب الثامن</h4>
                  <p>تعتبر الدالة العددية <span class="math">p</span> المعرفة على المجال <span class="math">]0,+∞[</span> بالعبارة:</p>
                  <div class="math-equation">p(x)=x+2ln(x)/x</div>
                  <p>وليكن <span class="math">(C_p)</span> تمثيلها البياني.</p>
                  <ol>
                    <li>ادرس تغيرات الدالة <span class="math">p</span>.</li>
                    <li>بيّن أن المنحنى يقطع محور الفواصل في نقطة وحيدة <span class="math">α</span> يطلب حصرها.</li>
                    <li>ناقش بيانياً، حسب قيم الوسيط الحقيقي <span class="math">m</span>، عدد حلول المعادلة:</li>
                  </ol>
                  <div class="math-equation">x²+2ln(x)-xsin(m)=0</div>
                  <section class="training-solution solution-toggle-door is-collapsed" data-discussion-door>
                    <button class="solution-detail-toggle" type="button" data-discussion-door-toggle aria-expanded="false"><span>الحل المفصل</span><small>افتح الحل</small></button>
                    <div class="training-solution-body" data-discussion-door-body hidden>
                      <header class="solution-subhead"><span>الحل</span><h4>دراسة الدالة والمناقشة</h4></header>
                      <article class="solution-step-card">
                        <h5>1. النهايات</h5>
                        <div class="solution-case"><strong>عند <span class="math">0^+</span>:</strong><p>لدينا <span class="math">ln(x)/x→-∞</span>، ومنه:</p><div class="math-equation">lim(x→0+) p(x)=-∞</div></div>
                        <div class="solution-case"><strong>عند <span class="math">+∞</span>:</strong><p>لدينا <span class="math">2ln(x)/x→0</span> و <span class="math">x→+∞</span>، إذن:</p><div class="math-equation">lim(x→+∞) p(x)=+∞</div></div>
                      </article>
                      <article class="solution-step-card">
                        <h5>2. المشتقة والتغيرات</h5>
                        <p>نشتق:</p>
                        <div class="math-equation">p'(x)=1+2(1-ln(x))/x²</div>
                        <div class="math-equation">p'(x)=(x²+2-2ln(x))/x²</div>
                        <p>نضع <span class="math">q(x)=x²+2-2ln(x)</span>. عندئذ:</p>
                        <div class="math-equation">q'(x)=2x-2/x=2(x²-1)/x</div>
                        <p>إذن <span class="math">q</span> تتناقص على <span class="math">]0,1]</span> وتتزايد على <span class="math">[1,+∞[</span>، وقيمتها الصغرى:</p>
                        <div class="math-equation">q(1)=3&gt;0</div>
                        <p>إذن <span class="math">q(x)&gt;0</span> على <span class="math">]0,+∞[</span>، وبالتالي <span class="math">p'(x)&gt;0</span> على كامل المجال.</p>
                        <p>الدالة <span class="math">p</span> متزايدة تماماً من <span class="math">-∞</span> إلى <span class="math">+∞</span>.</p>
                      </article>
                      <article class="solution-step-card">
                        <h5>3. تقاطع محور الفواصل</h5>
                        <p>بما أن <span class="math">p</span> مستمرة ومتزايدة تماماً، و <span class="math">lim(x→0+)p(x)=-∞</span> و <span class="math">lim(x→+∞)p(x)=+∞</span>، فهي تقطع محور الفواصل في نقطة وحيدة <span class="math">α</span>.</p>
                        <p>للحصر نحسب مثلاً:</p>
                        <div class="math-equation">p(0.7)≈0.7+2ln(0.7)/0.7&lt;0</div>
                        <div class="math-equation">p(0.8)≈0.8+2ln(0.8)/0.8&gt;0</div>
                        <p>إذن <span class="math">0.7&lt;α&lt;0.8</span>.</p>
                      </article>
                      <article class="solution-step-card solution-graph-card">
                        <h5>رسم توضيحي</h5>
                        <figure class="function-solution-graph" aria-label="رسم p(x)=x+2ln(x)/x"><svg viewBox="0 0 680 420" role="img"><rect x="0" y="0" width="680" height="420" rx="18" fill="#fffdf4"></rect><g stroke="#e5e7eb"><line x1="90" y1="40" x2="90" y2="350"></line><line x1="170" y1="40" x2="170" y2="350"></line><line x1="250" y1="40" x2="250" y2="350"></line><line x1="330" y1="40" x2="330" y2="350"></line><line x1="410" y1="40" x2="410" y2="350"></line><line x1="490" y1="40" x2="490" y2="350"></line><line x1="570" y1="40" x2="570" y2="350"></line><line x1="60" y1="230" x2="620" y2="230"></line></g><g stroke="#111827" stroke-width="2"><line x1="60" y1="230" x2="620" y2="230"></line><line x1="90" y1="40" x2="90" y2="350"></line></g><path d="M102 350 C120 320 145 280 180 248 C220 214 262 230 300 212 C360 184 438 140 520 94 C562 70 594 54 620 44" fill="none" stroke="#dc2626" stroke-width="4" stroke-linecap="round"></path><circle cx="252" cy="230" r="5" fill="#059669"></circle><g font-family="Tajawal, Arial, sans-serif" font-size="15" font-weight="800" fill="#111827"><text x="628" y="245">x</text><text x="100" y="52">y</text><text x="262" y="224" fill="#059669">α</text><text x="468" y="112" fill="#dc2626">C_p</text></g></svg><figcaption>المنحنى متزايد تماماً ويقطع محور الفواصل مرة واحدة عند <span class="math">α</span>.</figcaption></figure>
                      </article>
                      <article class="solution-step-card">
                        <h5>4. المناقشة البيانية</h5>
                        <p>المعادلة هي:</p>
                        <div class="math-equation">x²+2ln(x)-xsin(m)=0</div>
                        <p>بما أن <span class="math">x&gt;0</span>، نقسم على <span class="math">x</span> فنحصل على:</p>
                        <div class="math-equation">x+2ln(x)/x=sin(m)</div>
                        <div class="math-equation">p(x)=sin(m)</div>
                        <p>وبما أن <span class="math">p</span> متزايدة تماماً من <span class="math">-∞</span> إلى <span class="math">+∞</span>، فإن كل مستقيم أفقي <span class="math">y=k</span> يقطع المنحنى مرة واحدة.</p>
                        <div class="discussion-results-grid"><div><strong>لكل <span class="math">m∈R</span></strong><p>للمعادلة حل وحيد موجب، لأن <span class="math">sin(m)</span> عدد حقيقي بين <span class="math">-1</span> و <span class="math">1</span>.</p></div></div>
                      </article>
                    </div>
                  </section>
                </article>
                <article class="training-exercise training-exercise-ninth">
                  <h4>التدريب التاسع</h4>
                  <p>تعتبر الدالة العددية <span class="math">k</span> المعرفة على <span class="math">R</span> كما يلي:</p>
                  <div class="math-equation">k(x)=ln(x²-2|x|+2)</div>
                  <ol>
                    <li>بيّن أن الدالة <span class="math">k</span> زوجية.</li>
                    <li>ادرس تغيرات الدالة <span class="math">k</span> على المجال <span class="math">[0,+∞[</span>.</li>
                    <li>ارسم المنحنى <span class="math">(C_k)</span> على <span class="math">R</span> اعتماداً على خواص التناظر.</li>
                    <li>ناقش بيانياً، حسب قيم الوسيط الحقيقي <span class="math">m</span>، عدد حلول المعادلة:</li>
                  </ol>
                  <div class="math-equation">x²-2|x|+2-e^(m-1)=0</div>
                  <section class="training-solution solution-toggle-door is-collapsed" data-discussion-door>
                    <button class="solution-detail-toggle" type="button" data-discussion-door-toggle aria-expanded="false"><span>الحل المفصل</span><small>افتح الحل</small></button>
                    <div class="training-solution-body" data-discussion-door-body hidden>
                      <header class="solution-subhead"><span>الحل</span><h4>دراسة الدالة والمناقشة</h4></header>
                      <article class="solution-step-card">
                        <h5>1. زوجية الدالة</h5>
                        <p>لدينا من أجل كل <span class="math">x∈R</span>:</p>
                        <div class="math-equation">k(-x)=ln((-x)²-2|-x|+2)=ln(x²-2|x|+2)=k(x)</div>
                        <p>إذن الدالة <span class="math">k</span> زوجية، ومنحناها متناظر بالنسبة إلى محور التراتيب.</p>
                      </article>
                      <article class="solution-step-card">
                        <h5>2. التغيرات على <span class="math">[0,+∞[</span></h5>
                        <p>على المجال <span class="math">[0,+∞[</span> لدينا <span class="math">|x|=x</span>، لذلك:</p>
                        <div class="math-equation">k(x)=ln(x²-2x+2)=ln((x-1)²+1)</div>
                        <p>المشتقة على <span class="math">]0,+∞[</span> هي:</p>
                        <div class="math-equation">k'(x)=2(x-1)/((x-1)²+1)</div>
                        <p>بما أن المقام موجب، فإن إشارة <span class="math">k'(x)</span> هي إشارة <span class="math">x-1</span>.</p>
                        <ul class="solution-list"><li><span class="math">k</span> متناقصة على <span class="math">[0,1]</span>.</li><li><span class="math">k</span> متزايدة على <span class="math">[1,+∞[</span>.</li></ul>
                        <div class="math-equation">k(0)=ln2, k(1)=0, lim(x→+∞)k(x)=+∞</div>
                        <div class="variation-mini-table" aria-label="جدول تغيرات الدالة k"><div>x</div><div>0</div><div>1</div><div>+∞</div><div>k'(x)</div><div>-</div><div>0</div><div>+</div><div>k(x)</div><div>ln2</div><div>0</div><div>+∞</div></div>
                      </article>
                      <article class="solution-step-card solution-graph-card">
                        <h5>رسم توضيحي</h5>
                        <figure class="function-solution-graph" aria-label="رسم k(x)=ln(x²-2|x|+2)"><svg viewBox="0 0 680 420" role="img"><rect x="0" y="0" width="680" height="420" rx="18" fill="#fffdf4"></rect><g stroke="#e5e7eb"><line x1="100" y1="40" x2="100" y2="350"></line><line x1="180" y1="40" x2="180" y2="350"></line><line x1="260" y1="40" x2="260" y2="350"></line><line x1="340" y1="40" x2="340" y2="350"></line><line x1="420" y1="40" x2="420" y2="350"></line><line x1="500" y1="40" x2="500" y2="350"></line><line x1="580" y1="40" x2="580" y2="350"></line><line x1="60" y1="260" x2="620" y2="260"></line></g><g stroke="#111827" stroke-width="2"><line x1="60" y1="260" x2="620" y2="260"></line><line x1="340" y1="40" x2="340" y2="350"></line></g><path d="M80 62 C140 124 206 210 260 260 C292 288 322 252 340 210 C358 252 388 288 420 260 C474 210 540 124 600 62" fill="none" stroke="#dc2626" stroke-width="4" stroke-linecap="round"></path><circle cx="260" cy="260" r="5" fill="#059669"></circle><circle cx="420" cy="260" r="5" fill="#059669"></circle><circle cx="340" cy="210" r="5" fill="#2563eb"></circle><g font-family="Tajawal, Arial, sans-serif" font-size="15" font-weight="800" fill="#111827"><text x="628" y="275">x</text><text x="350" y="52">y</text><text x="250" y="284">-1</text><text x="414" y="284">1</text><text x="352" y="205">ln2</text><text x="462" y="118" fill="#dc2626">C_k</text><text x="180" y="340" fill="#059669">تناظر حول محور y</text></g></svg><figcaption>نرسم الفرع على <span class="math">[0,+∞[</span> ثم نعكسه بالنسبة إلى محور التراتيب لأن الدالة زوجية.</figcaption></figure>
                      </article>
                      <article class="solution-step-card">
                        <h5>3. المناقشة</h5>
                        <p>المعادلة هي:</p>
                        <div class="math-equation">x²-2|x|+2-e^(m-1)=0</div>
                        <p>نضع <span class="math">X=|x|≥0</span>. تصبح المعادلة:</p>
                        <div class="math-equation">X²-2X+2=e^(m-1)</div>
                        <div class="math-equation">(X-1)²=e^(m-1)-1</div>
                        <p>ولكي توجد حلول يجب أن يكون <span class="math">e^(m-1)-1≥0</span> أي <span class="math">m≥1</span>.</p>
                        <div class="discussion-results-grid"><div><strong>إذا <span class="math">m&lt;1</span></strong><p>لا توجد حلول.</p></div><div><strong>إذا <span class="math">m=1</span></strong><p><span class="math">X=1</span>، ومنه حلان: <span class="math">x=±1</span>.</p></div><div><strong>إذا <span class="math">1&lt;m&lt;1+ln2</span></strong><p>نحصل على قيمتين موجبتين لـ <span class="math">X</span>، ومنه أربعة حلول حقيقية.</p></div><div><strong>إذا <span class="math">m=1+ln2</span></strong><p>نحصل على <span class="math">X=0</span> أو <span class="math">X=2</span>، ومنه ثلاثة حلول: <span class="math">x=0, ±2</span>.</p></div><div><strong>إذا <span class="math">m&gt;1+ln2</span></strong><p>نحصل على قيمة موجبة واحدة لـ <span class="math">X</span>، ومنه حلان حقيقيان متناظران.</p></div></div>
                      </article>
                    </div>
                  </section>
                </article>
                <article class="training-exercise training-exercise-tenth">
                  <h4>التدريب العاشر</h4>
                  <p>تعتبر الدالة العددية <span class="math">k</span> المعرفة على <span class="math">R</span> بالعبارة:</p>
                  <div class="math-equation">k(x)=2x-1-e^(x-1)</div>
                  <ol>
                    <li>ادرس تغيرات الدالة <span class="math">k</span>.</li>
                    <li>بيّن أن المستقيم <span class="math">Δ: y=2x-1</span> مقارب مائل للمنحنى <span class="math">(C_k)</span> بجوار <span class="math">-∞</span>.</li>
                    <li>ناقش بيانياً، حسب قيم الوسيط الحقيقي <span class="math">m</span>، عدد حلول المعادلة:</li>
                  </ol>
                  <div class="math-equation">e^(x-1)+mx-x+1=0</div>
                  <section class="training-solution solution-toggle-door is-collapsed" data-discussion-door>
                    <button class="solution-detail-toggle" type="button" data-discussion-door-toggle aria-expanded="false"><span>الحل المفصل</span><small>افتح الحل</small></button>
                    <div class="training-solution-body" data-discussion-door-body hidden>
                      <header class="solution-subhead"><span>الحل</span><h4>التغيرات، المقارب، والمناقشة البيانية</h4></header>
                      <article class="solution-step-card">
                        <h5>1. دراسة تغيرات الدالة</h5>
                        <p>الدالة <span class="math">k</span> معرفة وقابلة للاشتقاق على <span class="math">R</span>، ومشتقتها هي:</p>
                        <div class="math-equation">k'(x)=2-e^(x-1)</div>
                        <p>تنعدم المشتقة عندما <span class="math">e^(x-1)=2</span> أي عند <span class="math">x=1+ln2</span>.</p>
                        <ul class="solution-list"><li><span class="math">k</span> متزايدة على <span class="math">]-∞,1+ln2]</span>.</li><li><span class="math">k</span> متناقصة على <span class="math">[1+ln2,+∞[</span>.</li></ul>
                        <div class="math-equation">k(1+ln2)=2ln2-1</div>
                        <p>كما أن <span class="math">lim(x→-∞)k(x)=-∞</span> و <span class="math">lim(x→+∞)k(x)=-∞</span>.</p>
                        <div class="variation-mini-table" aria-label="جدول تغيرات الدالة k"><div>x</div><div>-∞</div><div>1+ln2</div><div>+∞</div><div>k'(x)</div><div>+</div><div>0</div><div>-</div><div>k(x)</div><div>-∞</div><div>2ln2-1</div><div>-∞</div></div>
                      </article>
                      <article class="solution-step-card">
                        <h5>2. المقارب المائل</h5>
                        <div class="math-equation">k(x)-(2x-1)=-e^(x-1)</div>
                        <div class="math-equation">lim(x→-∞)[k(x)-(2x-1)]=0</div>
                        <p>إذن <span class="math">Δ: y=2x-1</span> مقارب مائل للمنحنى بجوار <span class="math">-∞</span>، والمنحنى يقع أسفله لأن الفرق سالب دائما.</p>
                      </article>
                      <article class="solution-step-card solution-graph-card">
                        <h5>رسم توضيحي</h5>
                        <figure class="function-solution-graph" aria-label="رسم k(x)=2x-1-e^(x-1)"><svg viewBox="0 0 680 420" role="img"><rect x="0" y="0" width="680" height="420" rx="18" fill="#fffdf4"></rect><g stroke="#e5e7eb"><line x1="90" y1="40" x2="90" y2="350"></line><line x1="170" y1="40" x2="170" y2="350"></line><line x1="250" y1="40" x2="250" y2="350"></line><line x1="330" y1="40" x2="330" y2="350"></line><line x1="410" y1="40" x2="410" y2="350"></line><line x1="490" y1="40" x2="490" y2="350"></line><line x1="570" y1="40" x2="570" y2="350"></line><line x1="60" y1="250" x2="620" y2="250"></line></g><g stroke="#111827" stroke-width="2"><line x1="60" y1="250" x2="620" y2="250"></line><line x1="330" y1="40" x2="330" y2="350"></line></g><path d="M70 334 L140 300 L210 266 L280 232 L350 198 L420 164 L490 130 L560 96" fill="none" stroke="#2563eb" stroke-width="3" stroke-dasharray="10 8"></path><path d="M70 340 C155 306 235 266 315 225 C360 202 405 190 438 204 C485 224 520 286 545 350" fill="none" stroke="#dc2626" stroke-width="4" stroke-linecap="round"></path><circle cx="438" cy="204" r="5" fill="#059669"></circle><g font-family="Tajawal, Arial, sans-serif" font-size="15" font-weight="800" fill="#111827"><text x="628" y="265">x</text><text x="340" y="52">y</text><text x="500" y="118" fill="#2563eb">Δ: y=2x-1</text><text x="462" y="224" fill="#dc2626">C_k</text><text x="405" y="188" fill="#059669">القيمة الكبرى</text></g></svg><figcaption>المنحنى يقترب من المقارب المائل عند <span class="math">-∞</span> ثم يبلغ قيمة كبرى قبل أن ينحدر.</figcaption></figure>
                      </article>
                      <article class="solution-step-card">
                        <h5>3. المناقشة البيانية</h5>
                        <div class="math-equation">e^(x-1)+mx-x+1=0 ⇔ 2x-1-e^(x-1)=(m+1)x</div>
                        <div class="math-equation">k(x)=(m+1)x</div>
                        <p>إذن عدد الحلول هو عدد تقاطعات <span class="math">(C_k)</span> مع المستقيمات المارة من الأصل <span class="math">y=(m+1)x</span>.</p>
                        <p>لتحديد حالة التماس نضع <span class="math">α&gt;1</span> حيث <span class="math">αln(α)=1</span>، فتكون القيمة الحرجة <span class="math">m=1-α</span>.</p>
                        <div class="discussion-results-grid"><div><strong>إذا <span class="math">m&lt;1-α</span></strong><p>يوجد حلان حقيقيان.</p></div><div><strong>إذا <span class="math">m=1-α</span></strong><p>يوجد حل وحيد مضاعف لأن المستقيم مماس للمنحنى.</p></div><div><strong>إذا <span class="math">1-α&lt;m≤1</span></strong><p>لا توجد حلول.</p></div><div><strong>إذا <span class="math">m&gt;1</span></strong><p>يوجد حل حقيقي وحيد.</p></div></div>
                      </article>
                    </div>
                  </section>
                </article>
                <article class="training-exercise training-exercise-eleventh">
                  <h4>التدريب الحادي عشر</h4>
                  <p>تعتبر الدالة العددية <span class="math">h</span> المعرفة على المجال <span class="math">]0,+∞[</span> بالعبارة:</p>
                  <div class="math-equation">h(x)=x²-2ln(x)</div>
                  <ol>
                    <li>ادرس تغيرات الدالة <span class="math">h</span>.</li>
                    <li>بيّن أن <span class="math">h(x)≥1</span> من أجل كل <span class="math">x∈]0,+∞[</span>.</li>
                    <li>ناقش بيانياً، حسب قيم الوسيط الحقيقي الموجب تماما <span class="math">m</span>، عدد حلول المعادلة:</li>
                  </ol>
                  <div class="math-equation">x²-m²-2ln(x/m)=0</div>
                  <section class="training-solution solution-toggle-door is-collapsed" data-discussion-door>
                    <button class="solution-detail-toggle" type="button" data-discussion-door-toggle aria-expanded="false"><span>الحل المفصل</span><small>افتح الحل</small></button>
                    <div class="training-solution-body" data-discussion-door-body hidden>
                      <header class="solution-subhead"><span>الحل</span><h4>دراسة الدالة والمناقشة البيانية</h4></header>
                      <article class="solution-step-card">
                        <h5>1. تغيرات الدالة</h5>
                        <p>الدالة <span class="math">h</span> معرفة وقابلة للاشتقاق على <span class="math">]0,+∞[</span>، ومشتقتها:</p>
                        <div class="math-equation">h'(x)=2x-2/x=2(x²-1)/x</div>
                        <p>وبما أن <span class="math">x&gt;0</span>، فإن إشارة <span class="math">h'(x)</span> هي إشارة <span class="math">x²-1</span>.</p>
                        <ul class="solution-list"><li><span class="math">h</span> متناقصة على <span class="math">]0,1]</span>.</li><li><span class="math">h</span> متزايدة على <span class="math">[1,+∞[</span>.</li></ul>
                        <div class="math-equation">lim(x→0+)h(x)=+∞, h(1)=1, lim(x→+∞)h(x)=+∞</div>
                        <div class="variation-mini-table" aria-label="جدول تغيرات الدالة h"><div>x</div><div>0+</div><div>1</div><div>+∞</div><div>h'(x)</div><div>-</div><div>0</div><div>+</div><div>h(x)</div><div>+∞</div><div>1</div><div>+∞</div></div>
                      </article>
                      <article class="solution-step-card">
                        <h5>2. إثبات المتراجحة</h5>
                        <p>من جدول التغيرات، تبلغ الدالة قيمتها الصغرى عند <span class="math">x=1</span>، وقيمتها:</p>
                        <div class="math-equation">h(1)=1²-2ln(1)=1</div>
                        <p>إذن من أجل كل <span class="math">x&gt;0</span> نحصل على:</p>
                        <div class="math-equation">h(x)≥1</div>
                      </article>
                      <article class="solution-step-card solution-graph-card">
                        <h5>رسم توضيحي</h5>
                        <figure class="function-solution-graph" aria-label="رسم h(x)=x²-2ln(x)"><svg viewBox="0 0 680 420" role="img"><rect x="0" y="0" width="680" height="420" rx="18" fill="#fffdf4"></rect><g stroke="#e5e7eb"><line x1="100" y1="45" x2="100" y2="350"></line><line x1="190" y1="45" x2="190" y2="350"></line><line x1="280" y1="45" x2="280" y2="350"></line><line x1="370" y1="45" x2="370" y2="350"></line><line x1="460" y1="45" x2="460" y2="350"></line><line x1="550" y1="45" x2="550" y2="350"></line><line x1="70" y1="300" x2="620" y2="300"></line><line x1="70" y1="230" x2="620" y2="230"></line><line x1="70" y1="160" x2="620" y2="160"></line></g><g stroke="#111827" stroke-width="2"><line x1="70" y1="300" x2="620" y2="300"></line><line x1="100" y1="45" x2="100" y2="350"></line></g><path d="M130 56 C160 122 198 212 250 278 C282 312 325 312 360 278 C412 225 475 112 550 54" fill="none" stroke="#dc2626" stroke-width="4" stroke-linecap="round"></path><line x1="70" y1="278" x2="620" y2="278" stroke="#2563eb" stroke-width="3" stroke-dasharray="9 8"></line><circle cx="325" cy="278" r="6" fill="#059669"></circle><g font-family="Tajawal, Arial, sans-serif" font-size="15" font-weight="800" fill="#111827"><text x="628" y="315">x</text><text x="112" y="58">y</text><text x="335" y="304">1</text><text x="342" y="270" fill="#059669">min=1</text><text x="500" y="105" fill="#dc2626">C_h</text><text x="520" y="270" fill="#2563eb">y=1</text></g></svg><figcaption>المنحنى ينزل إلى القيمة الصغرى <span class="math">1</span> عند <span class="math">x=1</span> ثم يصعد من جديد.</figcaption></figure>
                      </article>
                      <article class="solution-step-card">
                        <h5>3. المناقشة البيانية</h5>
                        <p>بما أن <span class="math">m&gt;0</span>، نكتب المعادلة كما يلي:</p>
                        <div class="math-equation">x²-m²-2ln(x/m)=0</div>
                        <div class="math-equation">x²-2ln(x)=m²-2ln(m)</div>
                        <div class="math-equation">h(x)=h(m)</div>
                        <p>إذن عدد الحلول هو عدد تقاطعات المنحنى <span class="math">(C_h)</span> مع المستقيم الأفقي <span class="math">y=h(m)</span>.</p>
                        <div class="discussion-results-grid"><div><strong>إذا <span class="math">m=1</span></strong><p><span class="math">h(m)=1</span>، والمستقيم يلامس المنحنى في نقطة القيمة الصغرى، لذلك يوجد حل وحيد هو <span class="math">x=1</span>.</p></div><div><strong>إذا <span class="math">0&lt;m&lt;1</span></strong><p><span class="math">h(m)&gt;1</span>، فيوجد حلان: الأول هو <span class="math">x=m</span> في <span class="math">]0,1[</span>، والثاني في <span class="math">]1,+∞[</span>.</p></div><div><strong>إذا <span class="math">m&gt;1</span></strong><p><span class="math">h(m)&gt;1</span>، فيوجد حلان: الأول في <span class="math">]0,1[</span>، والثاني هو <span class="math">x=m</span> في <span class="math">]1,+∞[</span>.</p></div></div>
                      </article>
                    </div>
                  </section>
                </article>
                <article class="training-exercise training-exercise-twelfth">
                  <h4>التدريب الثاني عشر</h4>
                  <p>تعتبر الدالة العددية <span class="math">g</span> المعرفة على <span class="math">R</span> كما يلي:</p>
                  <div class="math-equation">g(x)=xe^(1-x)</div>
                  <ol>
                    <li>ادرس تغيرات الدالة <span class="math">g</span>.</li>
                    <li>حدد نقطة انعطاف المنحنى <span class="math">(C_g)</span>.</li>
                    <li>ناقش بيانياً، حسب قيم الوسيط الحقيقي غير المعدوم <span class="math">m</span>، عدد حلول المعادلة:</li>
                  </ol>
                  <div class="math-equation">x-ln(|m|)e^(x-1)=0</div>
                  <section class="training-solution solution-toggle-door is-collapsed" data-discussion-door>
                    <button class="solution-detail-toggle" type="button" data-discussion-door-toggle aria-expanded="false"><span>الحل المفصل</span><small>افتح الحل</small></button>
                    <div class="training-solution-body" data-discussion-door-body hidden>
                      <header class="solution-subhead"><span>الحل</span><h4>تغيرات الدالة، الانعطاف، والمناقشة</h4></header>
                      <article class="solution-step-card">
                        <h5>1. تغيرات الدالة</h5>
                        <p>الدالة <span class="math">g</span> معرفة وقابلة للاشتقاق على <span class="math">R</span>، ومشتقتها:</p>
                        <div class="math-equation">g'(x)=e^(1-x)(1-x)</div>
                        <p>بما أن <span class="math">e^(1-x)&gt;0</span> لكل <span class="math">x</span>، فإن إشارة <span class="math">g'(x)</span> هي إشارة <span class="math">1-x</span>.</p>
                        <ul class="solution-list"><li><span class="math">g</span> متزايدة على <span class="math">]-∞,1]</span>.</li><li><span class="math">g</span> متناقصة على <span class="math">[1,+∞[</span>.</li></ul>
                        <div class="math-equation">lim(x→-∞)g(x)=-∞, g(1)=1, lim(x→+∞)g(x)=0</div>
                        <div class="variation-mini-table" aria-label="جدول تغيرات الدالة g"><div>x</div><div>-∞</div><div>1</div><div>+∞</div><div>g'(x)</div><div>+</div><div>0</div><div>-</div><div>g(x)</div><div>-∞</div><div>1</div><div>0</div></div>
                      </article>
                      <article class="solution-step-card">
                        <h5>2. نقطة الانعطاف</h5>
                        <p>نحسب المشتقة الثانية:</p>
                        <div class="math-equation">g''(x)=e^(1-x)(x-2)</div>
                        <p>وبما أن <span class="math">e^(1-x)&gt;0</span>، فإن <span class="math">g''</span> تغير إشارتها عند <span class="math">x=2</span>.</p>
                        <div class="math-equation">g(2)=2/e</div>
                        <p>إذن نقطة الانعطاف هي <span class="math">I(2,2/e)</span>.</p>
                      </article>
                      <article class="solution-step-card solution-graph-card">
                        <h5>رسم توضيحي</h5>
                        <figure class="function-solution-graph" aria-label="رسم g(x)=xe^(1-x)"><svg viewBox="0 0 680 420" role="img"><rect x="0" y="0" width="680" height="420" rx="18" fill="#fffdf4"></rect><g stroke="#e5e7eb"><line x1="100" y1="45" x2="100" y2="350"></line><line x1="180" y1="45" x2="180" y2="350"></line><line x1="260" y1="45" x2="260" y2="350"></line><line x1="340" y1="45" x2="340" y2="350"></line><line x1="420" y1="45" x2="420" y2="350"></line><line x1="500" y1="45" x2="500" y2="350"></line><line x1="580" y1="45" x2="580" y2="350"></line><line x1="70" y1="270" x2="620" y2="270"></line><line x1="70" y1="190" x2="620" y2="190"></line></g><g stroke="#111827" stroke-width="2"><line x1="70" y1="270" x2="620" y2="270"></line><line x1="260" y1="45" x2="260" y2="350"></line></g><path d="M95 350 C145 330 205 295 260 270 C315 245 350 188 380 110 C415 146 455 178 500 198 C545 218 585 226 615 230" fill="none" stroke="#dc2626" stroke-width="4" stroke-linecap="round"></path><line x1="70" y1="230" x2="620" y2="230" stroke="#2563eb" stroke-width="3" stroke-dasharray="9 8"></line><circle cx="380" cy="110" r="6" fill="#059669"></circle><circle cx="460" cy="178" r="6" fill="#7c3aed"></circle><g font-family="Tajawal, Arial, sans-serif" font-size="15" font-weight="800" fill="#111827"><text x="628" y="285">x</text><text x="270" y="58">y</text><text x="390" y="98" fill="#059669">(1,1)</text><text x="470" y="170" fill="#7c3aed">I(2,2/e)</text><text x="530" y="218" fill="#2563eb">y=0</text><text x="520" y="150" fill="#dc2626">C_g</text></g></svg><figcaption>الدالة تبلغ قيمة كبرى عند <span class="math">x=1</span> ثم تتناقص مقتربة من المحور الأفقي.</figcaption></figure>
                      </article>
                      <article class="solution-step-card">
                        <h5>3. المناقشة البيانية</h5>
                        <p>بما أن <span class="math">m≠0</span>، فإن <span class="math">|m|&gt;0</span>. نضرب المعادلة في <span class="math">e^(1-x)</span> فنحصل على:</p>
                        <div class="math-equation">x e^(1-x)-ln(|m|)=0</div>
                        <div class="math-equation">g(x)=ln(|m|)</div>
                        <p>إذن عدد الحلول هو عدد تقاطعات المنحنى <span class="math">(C_g)</span> مع المستقيم الأفقي <span class="math">y=ln(|m|)</span>.</p>
                        <div class="discussion-results-grid"><div><strong>إذا <span class="math">0&lt;|m|&lt;1</span></strong><p><span class="math">ln(|m|)&lt;0</span>، فيوجد حل وحيد في <span class="math">]-∞,0[</span>.</p></div><div><strong>إذا <span class="math">|m|=1</span></strong><p><span class="math">ln(|m|)=0</span>، فيوجد حل وحيد هو <span class="math">x=0</span>.</p></div><div><strong>إذا <span class="math">1&lt;|m|&lt;e</span></strong><p><span class="math">0&lt;ln(|m|)&lt;1</span>، فيوجد حلان: أحدهما في <span class="math">]0,1[</span> والآخر في <span class="math">]1,+∞[</span>.</p></div><div><strong>إذا <span class="math">|m|=e</span></strong><p><span class="math">ln(|m|)=1</span>، فيوجد حل وحيد مضاعف هو <span class="math">x=1</span>.</p></div><div><strong>إذا <span class="math">|m|&gt;e</span></strong><p><span class="math">ln(|m|)&gt;1</span>، فلا توجد حلول.</p></div></div>
                      </article>
                    </div>
                  </section>
                </article>
                <article class="training-exercise training-exercise-thirteenth">
                  <h4>التدريب الثالث عشر</h4>
                  <p>تعتبر الدالة العددية <span class="math">f</span> المعرفة على المجال <span class="math">]0,e[∪]e,+∞[</span> بالعبارة:</p>
                  <div class="math-equation">f(x)=(x+ln(x))/(x-ln(x))</div>
                  <ol>
                    <li>احسب نهايات الدالة <span class="math">f</span> عند أطراف مجالات تعريفها.</li>
                    <li>ادرس تغيرات الدالة <span class="math">f</span>.</li>
                    <li>استنتج وضعية المنحنى <span class="math">(C_f)</span> بالنسبة للمستقيم المقارب الأفقي.</li>
                    <li>ناقش بيانياً، حسب قيم الوسيط الحقيقي <span class="math">m</span>، عدد حلول المعادلة:</li>
                  </ol>
                  <div class="math-equation">(m-1)x-(m+1)ln(x)=0</div>
                  <section class="training-solution solution-toggle-door is-collapsed" data-discussion-door>
                    <button class="solution-detail-toggle" type="button" data-discussion-door-toggle aria-expanded="false"><span>الحل المفصل</span><small>افتح الحل</small></button>
                    <div class="training-solution-body" data-discussion-door-body hidden>
                      <header class="solution-subhead"><span>الحل</span><h4>النهايات، التغيرات، والمناقشة</h4></header>
                      <article class="solution-step-card">
                        <h5>ملاحظة حول المجال</h5>
                        <p>حسب العبارة <span class="math">x-ln(x)</span> لا ينعدم على <span class="math">]0,+∞[</span>، لأن <span class="math">x-ln(x)≥1</span> عند <span class="math">x=1</span>. لذلك تكون الدالة معرفة فعليا على <span class="math">]0,+∞[</span>. سنحترم تقسيم النص عند <span class="math">e</span>، مع الانتباه إلى أن <span class="math">e</span> ليست نقطة عدم تعريف للعبارة.</p>
                      </article>
                      <article class="solution-step-card">
                        <h5>1. النهايات</h5>
                        <p>عند <span class="math">0+</span> لدينا <span class="math">ln(x)→-∞</span> و <span class="math">x→0</span>، ومنه:</p>
                        <div class="math-equation">lim(x→0+) f(x)=-1</div>
                        <p>وعند <span class="math">+∞</span> نقسم البسط والمقام على <span class="math">x</span>:</p>
                        <div class="math-equation">f(x)=(1+ln(x)/x)/(1-ln(x)/x)</div>
                        <div class="math-equation">lim(x→+∞)f(x)=1</div>
                        <p>وعند <span class="math">e</span> تكون النهاية من الجهتين مساوية لقيمة العبارة:</p>
                        <div class="math-equation">lim(x→e-)f(x)=lim(x→e+)f(x)=(e+1)/(e-1)</div>
                      </article>
                      <article class="solution-step-card">
                        <h5>2. تغيرات الدالة</h5>
                        <p>نشتق باستعمال قاعدة مشتقة خارج:</p>
                        <div class="math-equation">f'(x)=2(1-ln(x))/(x-ln(x))²</div>
                        <p>المقام موجب، لذلك إشارة المشتقة هي إشارة <span class="math">1-ln(x)</span>.</p>
                        <ul class="solution-list"><li><span class="math">f</span> متزايدة على <span class="math">]0,e]</span>.</li><li><span class="math">f</span> متناقصة على <span class="math">[e,+∞[</span>.</li></ul>
                        <div class="math-equation">f(e)=(e+1)/(e-1)</div>
                        <div class="variation-mini-table" aria-label="جدول تغيرات الدالة f"><div>x</div><div>0+</div><div>e</div><div>+∞</div><div>f'(x)</div><div>+</div><div>0</div><div>-</div><div>f(x)</div><div>-1</div><div>(e+1)/(e-1)</div><div>1</div></div>
                      </article>
                      <article class="solution-step-card">
                        <h5>3. الوضعية بالنسبة للمقارب الأفقي</h5>
                        <p>المستقيم المقارب الأفقي عند <span class="math">+∞</span> هو <span class="math">y=1</span>. ندرس الفرق:</p>
                        <div class="math-equation">f(x)-1=2ln(x)/(x-ln(x))</div>
                        <p>وبما أن <span class="math">x-ln(x)&gt;0</span>، فإن إشارة الفرق هي إشارة <span class="math">ln(x)</span>.</p>
                        <ul class="solution-list"><li>على <span class="math">]0,1[</span>: المنحنى أسفل <span class="math">y=1</span>.</li><li>عند <span class="math">x=1</span>: يقطع المنحنى المقارب في النقطة <span class="math">(1,1)</span>.</li><li>على <span class="math">]1,+∞[</span>: المنحنى أعلى <span class="math">y=1</span>.</li></ul>
                      </article>
                      <article class="solution-step-card solution-graph-card">
                        <h5>رسم توضيحي</h5>
                        <figure class="function-solution-graph" aria-label="رسم f(x)=(x+ln(x))/(x-ln(x))"><svg viewBox="0 0 680 420" role="img"><rect x="0" y="0" width="680" height="420" rx="18" fill="#fffdf4"></rect><g stroke="#e5e7eb"><line x1="110" y1="45" x2="110" y2="350"></line><line x1="210" y1="45" x2="210" y2="350"></line><line x1="310" y1="45" x2="310" y2="350"></line><line x1="410" y1="45" x2="410" y2="350"></line><line x1="510" y1="45" x2="510" y2="350"></line><line x1="610" y1="45" x2="610" y2="350"></line><line x1="70" y1="285" x2="620" y2="285"></line><line x1="70" y1="210" x2="620" y2="210"></line><line x1="70" y1="135" x2="620" y2="135"></line></g><g stroke="#111827" stroke-width="2"><line x1="70" y1="285" x2="620" y2="285"></line><line x1="110" y1="45" x2="110" y2="350"></line></g><line x1="70" y1="210" x2="620" y2="210" stroke="#2563eb" stroke-width="3" stroke-dasharray="9 8"></line><path d="M115 335 C150 310 190 250 235 210 C290 160 365 70 445 82 C520 94 575 155 620 188" fill="none" stroke="#dc2626" stroke-width="4" stroke-linecap="round"></path><circle cx="235" cy="210" r="5" fill="#059669"></circle><circle cx="445" cy="82" r="6" fill="#7c3aed"></circle><g font-family="Tajawal, Arial, sans-serif" font-size="15" font-weight="800" fill="#111827"><text x="628" y="300">x</text><text x="120" y="58">y</text><text x="520" y="202" fill="#2563eb">y=1</text><text x="245" y="202" fill="#059669">(1,1)</text><text x="452" y="75" fill="#7c3aed">x=e</text><text x="530" y="122" fill="#dc2626">C_f</text></g></svg><figcaption>المنحنى يقترب من <span class="math">y=-1</span> عند <span class="math">0+</span> ومن <span class="math">y=1</span> عند <span class="math">+∞</span>.</figcaption></figure>
                      </article>
                      <article class="solution-step-card">
                        <h5>4. المناقشة البيانية</h5>
                        <p>المعادلة المعطاة تكافئ:</p>
                        <div class="math-equation">(m-1)x-(m+1)ln(x)=0 ⇔ (x+ln(x))/(x-ln(x))=m</div>
                        <div class="math-equation">f(x)=m</div>
                        <p>إذن عدد الحلول هو عدد تقاطعات <span class="math">(C_f)</span> مع المستقيم الأفقي <span class="math">y=m</span>.</p>
                        <div class="discussion-results-grid"><div><strong>إذا <span class="math">m&lt;-1</span></strong><p>لا توجد حلول.</p></div><div><strong>إذا <span class="math">m=-1</span></strong><p>لا يوجد حل لأن <span class="math">-1</span> حدية غير مدركة عند <span class="math">0+</span>.</p></div><div><strong>إذا <span class="math">-1&lt;m&lt;1</span></strong><p>يوجد حل وحيد في <span class="math">]0,1[</span>.</p></div><div><strong>إذا <span class="math">m=1</span></strong><p>يوجد حل وحيد هو <span class="math">x=1</span>.</p></div><div><strong>إذا <span class="math">1&lt;m&lt;(e+1)/(e-1)</span></strong><p>يوجد حلان موجبان: أحدهما في <span class="math">]1,e[</span> والآخر في <span class="math">]e,+∞[</span>.</p></div><div><strong>إذا <span class="math">m=(e+1)/(e-1)</span></strong><p>يوجد حل وحيد هو <span class="math">x=e</span>.</p></div><div><strong>إذا <span class="math">m&gt;(e+1)/(e-1)</span></strong><p>لا توجد حلول.</p></div></div>
                      </article>
                    </div>
                  </section>
                </article>
                <article class="training-exercise training-exercise-fourteenth">
                  <h4>التدريب الرابع عشر</h4>
                  <p>تعتبر الدالة العددية <span class="math">g</span> المعرفة على المجال <span class="math">]0,+∞[</span> بالعبارة:</p>
                  <div class="math-equation">g(x)=x-ln(x)</div>
                  <ol>
                    <li>ادرس تغيرات الدالة <span class="math">g</span>.</li>
                    <li>استنتج أنه من أجل كل <span class="math">x∈]0,+∞[</span> فإن <span class="math">g(x)≥1</span>.</li>
                    <li>ناقش جبريا وبيانيا، حسب قيم الوسيط الحقيقي <span class="math">m</span>، عدد حلول المعادلة:</li>
                  </ol>
                  <div class="math-equation">ln(x)-x-m²+2m=0</div>
                  <section class="training-solution solution-toggle-door is-collapsed" data-discussion-door>
                    <button class="solution-detail-toggle" type="button" data-discussion-door-toggle aria-expanded="false"><span>الحل المفصل</span><small>افتح الحل</small></button>
                    <div class="training-solution-body" data-discussion-door-body hidden>
                      <header class="solution-subhead"><span>الحل</span><h4>التغيرات، المتراجحة، والمناقشة</h4></header>
                      <article class="solution-step-card">
                        <h5>1. دراسة تغيرات الدالة</h5>
                        <p>الدالة <span class="math">g</span> معرفة وقابلة للاشتقاق على <span class="math">]0,+∞[</span>، ومشتقتها:</p>
                        <div class="math-equation">g'(x)=1-1/x=(x-1)/x</div>
                        <p>وبما أن <span class="math">x&gt;0</span>، فإن إشارة <span class="math">g'(x)</span> هي إشارة <span class="math">x-1</span>.</p>
                        <ul class="solution-list"><li><span class="math">g</span> متناقصة على <span class="math">]0,1]</span>.</li><li><span class="math">g</span> متزايدة على <span class="math">[1,+∞[</span>.</li></ul>
                        <div class="math-equation">lim(x→0+)g(x)=+∞, g(1)=1, lim(x→+∞)g(x)=+∞</div>
                        <div class="variation-mini-table" aria-label="جدول تغيرات الدالة g"><div>x</div><div>0+</div><div>1</div><div>+∞</div><div>g'(x)</div><div>-</div><div>0</div><div>+</div><div>g(x)</div><div>+∞</div><div>1</div><div>+∞</div></div>
                      </article>
                      <article class="solution-step-card">
                        <h5>2. استنتاج المتراجحة</h5>
                        <p>من جدول التغيرات، القيمة الصغرى للدالة هي <span class="math">g(1)=1</span>. إذن:</p>
                        <div class="math-equation">∀x∈]0,+∞[, g(x)≥1</div>
                      </article>
                      <article class="solution-step-card solution-graph-card">
                        <h5>رسم توضيحي</h5>
                        <figure class="function-solution-graph" aria-label="رسم g(x)=x-ln(x)"><svg viewBox="0 0 680 420" role="img"><rect x="0" y="0" width="680" height="420" rx="18" fill="#fffdf4"></rect><g stroke="#e5e7eb"><line x1="100" y1="45" x2="100" y2="350"></line><line x1="190" y1="45" x2="190" y2="350"></line><line x1="280" y1="45" x2="280" y2="350"></line><line x1="370" y1="45" x2="370" y2="350"></line><line x1="460" y1="45" x2="460" y2="350"></line><line x1="550" y1="45" x2="550" y2="350"></line><line x1="70" y1="300" x2="620" y2="300"></line><line x1="70" y1="245" x2="620" y2="245"></line><line x1="70" y1="190" x2="620" y2="190"></line></g><g stroke="#111827" stroke-width="2"><line x1="70" y1="300" x2="620" y2="300"></line><line x1="100" y1="45" x2="100" y2="350"></line></g><path d="M125 60 C145 122 185 208 250 245 C305 276 360 268 415 232 C472 194 525 124 585 58" fill="none" stroke="#dc2626" stroke-width="4" stroke-linecap="round"></path><line x1="70" y1="245" x2="620" y2="245" stroke="#2563eb" stroke-width="3" stroke-dasharray="9 8"></line><circle cx="305" cy="245" r="6" fill="#059669"></circle><g font-family="Tajawal, Arial, sans-serif" font-size="15" font-weight="800" fill="#111827"><text x="628" y="315">x</text><text x="112" y="58">y</text><text x="315" y="270">1</text><text x="320" y="238" fill="#059669">min=1</text><text x="520" y="236" fill="#2563eb">y=1</text><text x="510" y="108" fill="#dc2626">C_g</text></g></svg><figcaption>المنحنى له قيمة صغرى <span class="math">1</span> عند <span class="math">x=1</span>، وكل مستقيم أفقي فوقها يقطعه مرتين.</figcaption></figure>
                      </article>
                      <article class="solution-step-card">
                        <h5>3. المناقشة الجبرية والبيانية</h5>
                        <p>نحوّل المعادلة المعطاة:</p>
                        <div class="math-equation">ln(x)-x-m²+2m=0</div>
                        <div class="math-equation">x-ln(x)=-m²+2m</div>
                        <div class="math-equation">g(x)=2m-m²</div>
                        <p>لكن <span class="math">2m-m²=1-(m-1)²≤1</span> لكل <span class="math">m∈R</span>، كما أن <span class="math">g(x)≥1</span>.</p>
                        <div class="discussion-results-grid"><div><strong>إذا <span class="math">m=1</span></strong><p>نحصل على <span class="math">2m-m²=1</span>، فتكون المعادلة <span class="math">g(x)=1</span> ولها حل وحيد هو <span class="math">x=1</span>.</p></div><div><strong>إذا <span class="math">m≠1</span></strong><p>نحصل على <span class="math">2m-m²&lt;1</span>، ولا يمكن أن يساوي قيمة للدالة <span class="math">g</span> لأنها لا تنزل تحت <span class="math">1</span>. إذن لا توجد حلول.</p></div></div>
                      </article>
                    </div>
                  </section>
                </article>
                <article class="training-exercise training-exercise-fifteenth">
                  <h4>التدريب الخامس عشر</h4>
                  <p>تعتبر الدالة العددية <span class="math">h</span> المعرفة على <span class="math">R</span> بالعبارة:</p>
                  <div class="math-equation">h(x)=(e^x-1)/(e^x+1)</div>
                  <ol>
                    <li>بيّن أن الدالة <span class="math">h</span> فردية، وماذا تستنتج هندسيا؟</li>
                    <li>ادرس نهايات الدالة <span class="math">h</span> عند <span class="math">-∞</span> و <span class="math">+∞</span>، واستنتج المستقيمات المقاربة.</li>
                    <li>ادرس تغيرات الدالة <span class="math">h</span>.</li>
                    <li>ناقش بيانياً، حسب قيم الوسيط الحقيقي <span class="math">m</span>، عدد حلول المعادلة:</li>
                  </ol>
                  <div class="math-equation">(m²+1)(e^x-1)-m(e^x+1)=0</div>
                  <section class="training-solution solution-toggle-door is-collapsed" data-discussion-door>
                    <button class="solution-detail-toggle" type="button" data-discussion-door-toggle aria-expanded="false"><span>الحل المفصل</span><small>افتح الحل</small></button>
                    <div class="training-solution-body" data-discussion-door-body hidden>
                      <header class="solution-subhead"><span>الحل</span><h4>الفردية، المقاربات، والتغيرات</h4></header>
                      <article class="solution-step-card">
                        <h5>1. فردية الدالة</h5>
                        <p>من أجل كل <span class="math">x∈R</span> لدينا:</p>
                        <div class="math-equation">h(-x)=(e^(-x)-1)/(e^(-x)+1)</div>
                        <p>نضرب البسط والمقام في <span class="math">e^x</span> فنحصل على:</p>
                        <div class="math-equation">h(-x)=(1-e^x)/(1+e^x)=-(e^x-1)/(e^x+1)=-h(x)</div>
                        <p>إذن الدالة <span class="math">h</span> فردية، ومنحناها <span class="math">(C_h)</span> متناظر بالنسبة إلى أصل المعلم.</p>
                      </article>
                      <article class="solution-step-card">
                        <h5>2. النهايات والمستقيمات المقاربة</h5>
                        <p>عند <span class="math">+∞</span> نقسم البسط والمقام على <span class="math">e^x</span>:</p>
                        <div class="math-equation">h(x)=(1-e^(-x))/(1+e^(-x)) → 1</div>
                        <p>وعند <span class="math">-∞</span> لدينا <span class="math">e^x→0</span>، ومنه:</p>
                        <div class="math-equation">h(x)→(0-1)/(0+1)=-1</div>
                        <p>إذن المستقيمان المقاربان الأفقيان هما <span class="math">y=1</span> عند <span class="math">+∞</span> و <span class="math">y=-1</span> عند <span class="math">-∞</span>.</p>
                      </article>
                      <article class="solution-step-card">
                        <h5>3. تغيرات الدالة</h5>
                        <p>نشتق باستعمال قاعدة مشتقة خارج:</p>
                        <div class="math-equation">h'(x)=2e^x/(e^x+1)²</div>
                        <p>وبما أن <span class="math">e^x&gt;0</span>، فإن <span class="math">h'(x)&gt;0</span> لكل <span class="math">x∈R</span>. إذن <span class="math">h</span> متزايدة تماما على <span class="math">R</span>.</p>
                        <div class="variation-mini-table" aria-label="جدول تغيرات الدالة h"><div>x</div><div>-∞</div><div>0</div><div>+∞</div><div>h'(x)</div><div>+</div><div>+</div><div>+</div><div>h(x)</div><div>-1</div><div>0</div><div>1</div></div>
                      </article>
                      <article class="solution-step-card solution-graph-card">
                        <h5>رسم توضيحي</h5>
                        <figure class="function-solution-graph" aria-label="رسم h(x)=(e^x-1)/(e^x+1)"><svg viewBox="0 0 680 420" role="img"><rect x="0" y="0" width="680" height="420" rx="18" fill="#fffdf4"></rect><g stroke="#e5e7eb"><line x1="100" y1="45" x2="100" y2="350"></line><line x1="180" y1="45" x2="180" y2="350"></line><line x1="260" y1="45" x2="260" y2="350"></line><line x1="340" y1="45" x2="340" y2="350"></line><line x1="420" y1="45" x2="420" y2="350"></line><line x1="500" y1="45" x2="500" y2="350"></line><line x1="580" y1="45" x2="580" y2="350"></line><line x1="70" y1="100" x2="620" y2="100"></line><line x1="70" y1="210" x2="620" y2="210"></line><line x1="70" y1="320" x2="620" y2="320"></line></g><g stroke="#111827" stroke-width="2"><line x1="70" y1="210" x2="620" y2="210"></line><line x1="340" y1="45" x2="340" y2="350"></line></g><line x1="70" y1="100" x2="620" y2="100" stroke="#2563eb" stroke-width="3" stroke-dasharray="9 8"></line><line x1="70" y1="320" x2="620" y2="320" stroke="#2563eb" stroke-width="3" stroke-dasharray="9 8"></line><path d="M80 315 C150 305 225 276 285 235 C315 215 335 205 340 210 C345 215 365 205 395 185 C455 144 530 115 600 105" fill="none" stroke="#dc2626" stroke-width="4" stroke-linecap="round"></path><circle cx="340" cy="210" r="6" fill="#059669"></circle><g font-family="Tajawal, Arial, sans-serif" font-size="15" font-weight="800" fill="#111827"><text x="628" y="225">x</text><text x="350" y="58">y</text><text x="525" y="93" fill="#2563eb">y=1</text><text x="520" y="314" fill="#2563eb">y=-1</text><text x="350" y="202" fill="#059669">O</text><text x="510" y="150" fill="#dc2626">C_h</text></g></svg><figcaption>شكل المنحنى يؤكد الفردية: تناظر حول أصل المعلم، مع مقاربين أفقيين <span class="math">y=±1</span>.</figcaption></figure>
                      </article>
                      <article class="solution-step-card">
                        <h5>4. المناقشة البيانية</h5>
                        <p>نقسم طرفي المعادلة على <span class="math">e^x+1</span> وهو موجب دائما:</p>
                        <div class="math-equation">(m²+1)(e^x-1)/(e^x+1)-m=0</div>
                        <div class="math-equation">h(x)=m/(m²+1)</div>
                        <p>لدينا من أجل كل <span class="math">m∈R</span>:</p>
                        <div class="math-equation">-1 &lt; m/(m²+1) &lt; 1</div>
                        <p>وبما أن <span class="math">h</span> متزايدة تماما من <span class="math">-1</span> إلى <span class="math">1</span>، فإن كل مستقيم أفقي مستواه بينهما يقطع المنحنى مرة واحدة فقط.</p>
                        <div class="discussion-results-grid"><div><strong>لكل <span class="math">m∈R</span></strong><p>للمعادلة حل حقيقي وحيد.</p></div></div>
                      </article>
                    </div>
                  </section>
                </article>
                <article class="training-exercise training-exercise-sixteenth">
                  <h4>التدريب السادس عشر</h4>
                  <p>تعتبر الدالة العددية <span class="math">h</span> المعرفة على المجال <span class="math">]0,+∞[</span> بالعبارة:</p>
                  <div class="math-equation">h(x)=x-1+(e^x-1)/x</div>
                  <ol>
                    <li>ادرس تغيرات الدالة المساعدة <span class="math">u(x)=xe^x-e^x+1</span> واستنتج إشارتها.</li>
                    <li>احسب المشتقة <span class="math">h'(x)</span> وبيّن أنها تكتب <span class="math">h'(x)=1+u(x)/x²</span>، ثم استنتج اتجاه تغير <span class="math">h</span>.</li>
                    <li>احسب نهايتي <span class="math">h</span> عند <span class="math">0</span> وعند <span class="math">+∞</span>.</li>
                    <li>ناقش بيانياً، حسب قيم الوسيط الحقيقي <span class="math">m</span>، عدد حلول المعادلة:</li>
                  </ol>
                  <div class="math-equation">x²-x+e^x-1-mx=0</div>
                  <section class="training-solution solution-toggle-door is-collapsed" data-discussion-door>
                    <button class="solution-detail-toggle" type="button" data-discussion-door-toggle aria-expanded="false"><span>الحل المفصل</span><small>افتح الحل</small></button>
                    <div class="training-solution-body" data-discussion-door-body hidden>
                      <header class="solution-subhead"><span>الحل</span><h4>الدالة المساعدة والمناقشة البيانية</h4></header>
                      <article class="solution-step-card">
                        <h5>1. دراسة الدالة المساعدة</h5>
                        <p>لدينا على <span class="math">]0,+∞[</span>:</p>
                        <div class="math-equation">u(x)=xe^x-e^x+1=e^x(x-1)+1</div>
                        <p>نحسب مشتقتها:</p>
                        <div class="math-equation">u'(x)=xe^x</div>
                        <p>وبما أن <span class="math">x&gt;0</span> و <span class="math">e^x&gt;0</span>، فإن <span class="math">u'(x)&gt;0</span>. إذن <span class="math">u</span> متزايدة تماما على <span class="math">]0,+∞[</span>.</p>
                        <p>كما أن:</p>
                        <div class="math-equation">lim(x→0+)u(x)=0</div>
                        <p>لذلك نستنتج أن:</p>
                        <div class="math-equation">u(x)&gt;0 لكل x&gt;0</div>
                      </article>
                      <article class="solution-step-card">
                        <h5>2. مشتقة h واتجاه تغيرها</h5>
                        <p>نشتق:</p>
                        <div class="math-equation">h'(x)=1+((xe^x)-(e^x-1))/x²</div>
                        <div class="math-equation">h'(x)=1+(xe^x-e^x+1)/x²=1+u(x)/x²</div>
                        <p>وبما أن <span class="math">x²&gt;0</span> و <span class="math">u(x)&gt;0</span>، فإن:</p>
                        <div class="math-equation">h'(x)&gt;0</div>
                        <p>إذن الدالة <span class="math">h</span> متزايدة تماما على <span class="math">]0,+∞[</span>.</p>
                      </article>
                      <article class="solution-step-card">
                        <h5>3. النهايات وجدول التغيرات</h5>
                        <p>عند <span class="math">0+</span> نستعمل النهاية الشهيرة:</p>
                        <div class="math-equation">lim(x→0+)(e^x-1)/x=1</div>
                        <div class="math-equation">lim(x→0+)h(x)=0-1+1=0</div>
                        <p>وعند <span class="math">+∞</span> الحد <span class="math">e^x/x</span> يؤول إلى <span class="math">+∞</span>، ومنه:</p>
                        <div class="math-equation">lim(x→+∞)h(x)=+∞</div>
                        <div class="variation-mini-table" aria-label="جدول تغيرات الدالة h"><div>x</div><div>0+</div><div></div><div>+∞</div><div>h'(x)</div><div>+</div><div>+</div><div>+</div><div>h(x)</div><div>0</div><div>↗</div><div>+∞</div></div>
                      </article>
                      <article class="solution-step-card solution-graph-card">
                        <h5>رسم توضيحي</h5>
                        <figure class="function-solution-graph" aria-label="رسم h(x)=x-1+(e^x-1)/x"><svg viewBox="0 0 680 420" role="img"><rect x="0" y="0" width="680" height="420" rx="18" fill="#fffdf4"></rect><g stroke="#e5e7eb"><line x1="110" y1="45" x2="110" y2="350"></line><line x1="210" y1="45" x2="210" y2="350"></line><line x1="310" y1="45" x2="310" y2="350"></line><line x1="410" y1="45" x2="410" y2="350"></line><line x1="510" y1="45" x2="510" y2="350"></line><line x1="610" y1="45" x2="610" y2="350"></line><line x1="70" y1="315" x2="620" y2="315"></line><line x1="70" y1="245" x2="620" y2="245"></line><line x1="70" y1="175" x2="620" y2="175"></line><line x1="70" y1="105" x2="620" y2="105"></line></g><g stroke="#111827" stroke-width="2"><line x1="70" y1="315" x2="620" y2="315"></line><line x1="110" y1="45" x2="110" y2="350"></line></g><path d="M112 314 C165 300 220 280 280 245 C350 204 420 152 500 82 C548 40 585 28 620 22" fill="none" stroke="#dc2626" stroke-width="4" stroke-linecap="round"></path><circle cx="112" cy="314" r="5" fill="#059669"></circle><g font-family="Tajawal, Arial, sans-serif" font-size="15" font-weight="800" fill="#111827"><text x="628" y="330">x</text><text x="122" y="58">y</text><text x="122" y="308" fill="#059669">0 حدية</text><text x="500" y="95" fill="#dc2626">C_h</text><text x="250" y="225" fill="#2563eb">تزايد تام</text></g></svg><figcaption>منحنى <span class="math">h</span> يبدأ حديا من <span class="math">0</span> عند <span class="math">0+</span> ثم يتزايد بلا توقف نحو <span class="math">+∞</span>.</figcaption></figure>
                      </article>
                      <article class="solution-step-card">
                        <h5>4. المناقشة البيانية</h5>
                        <p>بما أن <span class="math">x&gt;0</span>، نقسم المعادلة على <span class="math">x</span>:</p>
                        <div class="math-equation">x²-x+e^x-1-mx=0</div>
                        <div class="math-equation">x-1+(e^x-1)/x=m</div>
                        <div class="math-equation">h(x)=m</div>
                        <p>إذن عدد الحلول هو عدد تقاطعات المنحنى <span class="math">(C_h)</span> مع المستقيم الأفقي <span class="math">y=m</span>. وبما أن <span class="math">h</span> متزايدة تماما وصورتها هي <span class="math">]0,+∞[</span>، نحصل على:</p>
                        <div class="discussion-results-grid"><div><strong>إذا <span class="math">m≤0</span></strong><p>لا توجد حلول.</p></div><div><strong>إذا <span class="math">m&gt;0</span></strong><p>يوجد حل وحيد في <span class="math">]0,+∞[</span>.</p></div></div>
                      </article>
                    </div>
                  </section>
                </article>
                  </section>
                </div>
              </article>
            </section>
          </section>
        `).join("")}
      </section>
    </section>
  `;
  enhanceMathTypography(container);
  initDiscussionCanvases(container);
}
function renderSolved() {
  const list = document.getElementById("solvedList");
  list.innerHTML = getLearningModules()
    .map((module) => `
      <article class="structured-lesson">
        <header class="structured-lesson-hero">
          <span>تمارين محلولة</span>
          <h3>${module.title}</h3>
        </header>
        ${module.solved
          .map((exercise) => `
            <article class="solved-exercise">
              <header class="solved-exercise-statement">
                <strong>${exercise.title}:</strong>
                <span>${escapeHtml(exercise.statement)}</span>
              </header>
              <section class="solution-steps">
                <h4>الحل</h4>
                <p>${escapeHtml(exercise.solution)}</p>
              </section>
            </article>
          `)
          .join("")}
      </article>
    `)
    .join("");
}

function renderBacArchive() {
  const exams = Array.isArray(window.bacAlgeriaExams) ? window.bacAlgeriaExams : [];
  const grid = document.getElementById("bacArchiveGrid");
  const count = document.getElementById("bacArchiveCount");
  const branchFilters = document.getElementById("bacBranchFilters");
  const yearFilters = document.getElementById("bacYearFilters");
  if (!grid || !count || !branchFilters || !yearFilters) return;

  const years = [...new Set(exams.map((exam) => exam.year).filter(Boolean))].sort((a, b) => Number(b) - Number(a));
  branchFilters.innerHTML = Object.entries(BAC_BRANCH_LABELS)
    .map(
      ([value, label]) => `
        <button class="filter-btn ${bacFilters.branch === value ? "active" : ""}" type="button" data-bac-branch="${value}">
          ${label}
        </button>
      `
    )
    .join("");

  yearFilters.innerHTML = [
    `<button class="filter-btn ${bacFilters.year === "all" ? "active" : ""}" type="button" data-bac-year="all">كل السنوات</button>`,
    ...years.map(
      (year) => `
        <button class="filter-btn ${bacFilters.year === year ? "active" : ""}" type="button" data-bac-year="${year}">
          ${year}
        </button>
      `
    ),
  ].join("");

  const filtered = exams.filter((exam) => {
    const branchMatch = bacFilters.branch === "all" || exam.branch === "all" || exam.branch === bacFilters.branch;
    const yearMatch = bacFilters.year === "all" || String(exam.year) === String(bacFilters.year);
    return branchMatch && yearMatch;
  });

  count.textContent = `${filtered.length} موضوع`;

  if (!filtered.length) {
    grid.innerHTML = `
      <article class="bac-exercise-card bac-empty-card">
        <h3>لا توجد مواضيع مطابقة</h3>
        <p>غيّر الشعبة أو السنة، أو أضف ملف PDF جديد إلى assets ثم سجله في assets/bac-algeria-log-exp.js.</p>
      </article>
    `;
    return;
  }

  grid.innerHTML = filtered
    .map((exam) => {
      const branch = BAC_BRANCH_LABELS[exam.branch] || exam.branch || "كل الشعب";
      const tags = (exam.tags || []).map((tag) => `<span>${escapeHtml(tag)}</span>`).join("");
      return `
        <article class="bac-exercise-card bac-archive-card">
          <div>
            <div class="bac-card-meta">
              <span>${escapeHtml(branch)}</span>
              <span>${escapeHtml(exam.year || exam.date || "")}</span>
            </div>
            <h3>${escapeHtml(exam.title)}</h3>
            <p>${escapeHtml(exam.summary || "")}</p>
            <div class="bac-tag-row">${tags}</div>
          </div>
          <div class="pdf-actions">
            <a class="secondary-btn" href="${escapeHtml(exam.file)}" target="_blank" rel="noopener">فتح الموضوع</a>
            <a class="ghost-btn" href="${escapeHtml(exam.file)}" download>تحميل PDF</a>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderProgress() {
  const learningModules = getLearningModules();
  const learningModuleIds = new Set(learningModules.map((module) => module.id));
  const completed = state.progress.completed.filter((id) => learningModuleIds.has(id)).length;
  const percent = Math.round((completed / learningModules.length) * 100);
  const completedIds = new Set(state.progress.completed);
  const next = getNextModule();
  const isAllComplete = completed === learningModules.length;

  document.getElementById("progressSummary").textContent = `${completed} من ${learningModules.length} محاور مكتملة`;
  document.getElementById("readinessValue").textContent = `${percent}%`;

  const recommendation = isAllComplete
    ? "🎉 أكملتَ كل المحاور. راجع المواضيع الضعيفة قبل البكالوريا."
    : completed === 0
    ? "ابدأ بأول محور واستكمل المسار خطوة بخطوة."
    : `أكمل "${next.title}" أولاً لتثبيت تقدمك.`;

  const summaryCard = document.getElementById("progressSummaryCard");
  if (summaryCard) {
    summaryCard.style.setProperty("--progress-pct", `${percent}%`);
    summaryCard.innerHTML = `
      <div class="progress-summary-ring" aria-label="نسبة التقدم">
        <strong>${percent}%</strong>
      </div>
      <div class="progress-summary-body">
        <h3>${completed} من ${learningModules.length} محاور مكتملة</h3>
        <p>المحور التالي المقترح: <strong>${next.title}</strong></p>
        <p class="recommendation">${recommendation}</p>
      </div>
      <div class="progress-summary-actions">
        <button class="primary-btn" type="button" data-open-module="${next.id}">${isAllComplete ? "راجع المحور" : "استكمل التعلم"}</button>
        <button class="ghost-btn" type="button" data-view-jump="learn">تصفح كل المحاور</button>
      </div>
    `;
  }

  document.getElementById("progressGrid").innerHTML = learningModules
    .map((module) => {
      const isDone = completedIds.has(module.id);
      const isNext = module.id === next.id;
      let statusClass = "not-started";
      let statusLabel = "لم يبدأ";
      if (isDone) {
        statusClass = "completed";
        statusLabel = "مكتمل";
      } else if (isNext || state.progress.lastModuleId === module.id) {
        statusClass = "in-progress";
        statusLabel = "قيد التعلم";
      }
      const tip = isNext ? `<p class="recommendation">⏳ أكمل هذا المحور أولاً.</p>` : "";
      const btnClass = isDone ? "secondary-btn" : isNext ? "primary-btn" : "secondary-btn";
      return `
        <article class="action-panel">
          <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;">
            <h3 style="margin:0;">${module.title}</h3>
            <span class="module-status-badge ${statusClass}">${statusLabel}</span>
          </div>
          <p>${module.summary}</p>
          ${tip}
          <button class="${btnClass}" type="button" data-open-module="${module.id}">${isDone ? "مراجعة" : isNext ? "استكمل" : "فتح"}</button>
        </article>
      `;
    })
    .join("");
}

function getNextModule() {
  const learningModules = getLearningModules();
  const completedIds = new Set(state.progress.completed);
  const firstIncomplete = learningModules.find((module) => !completedIds.has(module.id));
  if (firstIncomplete) return firstIncomplete;
  return learningModules[0] || modules[0];
}

function updateHome() {
  const learningModules = getLearningModules();
  const learningModuleIds = new Set(learningModules.map((module) => module.id));
  const completed = state.progress.completed.filter((id) => learningModuleIds.has(id)).length;
  const percent = Math.round((completed / learningModules.length) * 100);
  const completedIds = new Set(state.progress.completed);
  const last = learningModules.find((module) => module.id === state.progress.lastModuleId);
  const next = last && !completedIds.has(last.id) ? last : getNextModule();
  const isAllComplete = completed === learningModules.length;

  const continueBtn = document.getElementById("continueLessonBtn");
  document.getElementById("continueTitle").textContent = next.title;
  document.getElementById("continueSummary").textContent = next.summary;
  document.getElementById("readinessValue").textContent = `${percent}%`;
  document.getElementById("homeLessonCount").textContent = String(learningModules.length);
  document.getElementById("homeProgressPercent").textContent = `${percent}%`;

  if (continueBtn) {
    continueBtn.textContent = isAllComplete ? "راجع المسار" : completedIds.has(next.id) ? "واصل التعلم" : "ابدأ الآن";
    continueBtn.dataset.openModule = next.id;
  }
}

function formatDiscoveryNumber(value, digits = 4) {
  if (!Number.isFinite(value)) return "-";
  return value.toFixed(digits).replace(/\.?0+$/, "");
}

function getExpStepH(root = document) {
  const input = root.querySelector("[data-exp-step-h]") || document.querySelector("[data-exp-step-h]");
  const value = Math.abs(Number(input?.value));
  return Number.isFinite(value) && value > 0 ? Math.min(value, 0.5) : 0.2;
}

function updateExpDiscoveryTable(root = document) {
  root.querySelectorAll(".interactive-table-card").forEach((card) => {
    const h = getExpStepH(card);
    card.querySelectorAll("[data-exp-row]").forEach((row) => {
      const step = Number(row.dataset.step) || 0;
      const leftX = step === 0 ? 0 : -step * h;
      const rightX = step * h;
      const leftValue = step === 0 ? 1 : Math.pow(1 - h, step);
      const rightValue = step === 0 ? 1 : Math.pow(1 + h, step);
      row.querySelector("[data-step-num]").textContent = String(step);
      row.querySelector("[data-left-x]").textContent = formatDiscoveryNumber(leftX, 3);
      row.querySelector("[data-right-x]").textContent = formatDiscoveryNumber(rightX, 3);
      row.querySelector("[data-left-value]").textContent = formatDiscoveryNumber(leftValue, 9);
      row.querySelector("[data-right-value]").textContent = formatDiscoveryNumber(rightValue, 9);
    });
    card.querySelectorAll("[data-exp-step-preset]").forEach((button) => {
      const preset = Number(button.dataset.expStepPreset);
      button.classList.toggle("active", Math.abs(preset - h) < 0.0005);
    });
  });
  updateExpCurveBuilder(root);
}

function updateExpCurveBuilder(root = document) {
  const h = getExpStepH(root);
  const svg = root.querySelector("[data-exp-curve-builder]");
  if (!svg) return;

  const discoveryRoot = svg.closest(".exp-discovery") || root;
  const showLimit = discoveryRoot.classList.contains("show-limit-curve");
  const grid = svg.querySelector("[data-exp-cb-grid]");
  const axes = svg.querySelector("[data-exp-cb-axes]");
  const truePath = svg.querySelector("[data-exp-cb-true]");
  const polyPath = svg.querySelector("[data-exp-cb-poly]");
  const pointsGroup = svg.querySelector("[data-exp-cb-points]");
  const labelsGroup = svg.querySelector("[data-exp-cb-labels]");
  const caption = svg.querySelector("[data-exp-cb-caption]");
  const errorNote = discoveryRoot.querySelector("[data-exp-error-note]");
  const toggleButton = discoveryRoot.querySelector("[data-exp-toggle-limit]");

  const xMin = -3;
  const xMax = 3;
  const yMin = 0;
  const yMax = 22;

  const plotLeft = 40;
  const plotRight = 380;
  const plotTop = 35;
  const plotBottom = 230;
  const plotWidth = plotRight - plotLeft;
  const plotHeight = plotBottom - plotTop;

  const mapX = (x) => plotLeft + ((x - xMin) / (xMax - xMin)) * plotWidth;
  const mapY = (y) => plotBottom - (y / yMax) * plotHeight;

  // Grid lines
  let gridHTML = "";
  for (let x = Math.ceil(xMin); x <= Math.floor(xMax); x++) {
    const sx = mapX(x);
    gridHTML += `<line x1="${sx}" y1="${plotTop}" x2="${sx}" y2="${plotBottom}"></line>`;
  }
  for (let y = 0; y <= yMax; y += 5) {
    const sy = mapY(y);
    gridHTML += `<line x1="${plotLeft}" y1="${sy}" x2="${plotRight}" y2="${sy}"></line>`;
  }
  grid.innerHTML = gridHTML;

  // Axes
  const xAxisY = mapY(0);
  const yAxisX = mapX(0);
  axes.innerHTML = `
    <line x1="${plotLeft}" y1="${xAxisY}" x2="${plotRight}" y2="${xAxisY}"></line>
    <line x1="${yAxisX}" y1="${plotTop}" x2="${yAxisX}" y2="${plotBottom}"></line>
    <polygon points="${plotRight},${xAxisY} ${plotRight - 6},${xAxisY - 4} ${plotRight - 6},${xAxisY + 4}" fill="#111"></polygon>
    <polygon points="${yAxisX},${plotTop} ${yAxisX - 4},${plotTop + 6} ${yAxisX + 4},${plotTop + 6}" fill="#111"></polygon>
  `;

  // True curve y = e^x
  const trueSamples = 200;
  let trueD = "";
  for (let i = 0; i <= trueSamples; i++) {
    const x = xMin + (i / trueSamples) * (xMax - xMin);
    const y = Math.exp(x);
    const sx = mapX(x);
    const sy = mapY(y);
    trueD += `${i === 0 ? "M" : "L"}${sx.toFixed(2)} ${sy.toFixed(2)}`;
  }
  truePath.setAttribute("d", trueD);
  truePath.style.display = showLimit ? "" : "none";

  // Euler polygon from 0 outward
  const eulerPoints = [{ x: 0, y: 1 }];

  // Right side
  let k = 0;
  let x = 0;
  let y = 1;
  while (x < xMax) {
    k += 1;
    x = k * h;
    if (x > xMax) {
      x = xMax;
      const ratio = (xMax - (k - 1) * h) / h;
      y = y * Math.pow(1 + h, ratio);
    } else {
      y = y * (1 + h);
    }
    eulerPoints.push({ x, y });
  }

  // Left side
  k = 0;
  x = 0;
  y = 1;
  const leftPoints = [];
  while (x > xMin) {
    k += 1;
    x = -k * h;
    if (x < xMin) {
      x = xMin;
      const ratio = (Math.abs(xMin) - (k - 1) * h) / h;
      y = y * Math.pow(1 - h, ratio);
    } else {
      y = y * (1 - h);
    }
    leftPoints.unshift({ x, y });
  }

  const allPoints = [...leftPoints, ...eulerPoints];
  let polyD = "";
  let pointsHTML = "";
  allPoints.forEach((p, i) => {
    const sx = mapX(p.x);
    const sy = mapY(p.y);
    polyD += `${i === 0 ? "M" : "L"}${sx.toFixed(2)} ${sy.toFixed(2)}`;
  });

  // Draw a subset of points for readability (every ~8 points)
  const pointStride = Math.max(1, Math.floor(allPoints.length / 35));
  allPoints.forEach((p, i) => {
    if (i % pointStride !== 0 && i !== allPoints.length - 1 && i !== 0) return;
    const sx = mapX(p.x);
    const sy = mapY(p.y);
    pointsHTML += `<circle cx="${sx.toFixed(2)}" cy="${sy.toFixed(2)}" r="2.5" fill="#2563eb"></circle>`;
  });
  // Highlight start point
  pointsHTML += `<circle cx="${mapX(0).toFixed(2)}" cy="${mapY(1).toFixed(2)}" r="4" fill="#ef4444"></circle>`;

  polyPath.setAttribute("d", polyD);
  pointsGroup.innerHTML = pointsHTML;

  // Labels
  labelsGroup.innerHTML = `
    <text x="${mapX(3) + 4}" y="${mapY(0) + 4}">x</text>
    <text x="${mapX(0) + 6}" y="${mapY(22) - 4}">y</text>
    <text x="${mapX(0) + 5}" y="${mapY(1) + 15}">(0,1)</text>
    ${showLimit ? `<text x="${mapX(2.05)}" y="${mapY(8)}" fill="#ef4444">المنحنى الحدّي</text>` : ""}
    <text x="${mapX(2)}" y="${mapY(15)}" fill="#2563eb">تقريب أويلر</text>
  `;
  if (caption) {
    caption.textContent = showLimit
      ? "المنحنى الحدّي (أحمر) × المضلّعة المقاربة (أزرق)"
      : "المضلّعة الزرقاء مبنية فقط من f'=f و f(0)=1";
  }
  if (toggleButton) {
    toggleButton.setAttribute("aria-pressed", String(showLimit));
    toggleButton.textContent = showLimit ? "إخفاء المنحنى الحدّي" : "إظهار المنحنى الحدّي";
  }
  if (errorNote) {
    const eulerAtOne = Math.pow(1 + h, 1 / h);
    const gap = Math.abs(Math.E - eulerAtOne);
    errorNote.textContent = `عند x=1: تقريب أويلر ≈ ${formatDiscoveryNumber(eulerAtOne, 4)}، والفارق عن القيمة الحدية ≈ ${formatDiscoveryNumber(gap, 4)}`;
  }
}

function getLnB(root = document) {
  const input = root.querySelector("[data-ln-b]") || document.querySelector("[data-ln-b]");
  const value = Number(input?.value);
  return Number.isFinite(value) && value > 0 ? Math.min(Math.max(value, 0.1), 5.5) : 2;
}

function getLnExactLabel(value) {
  if (Math.abs(value - 1) < 0.000001) return "0";
  if (Math.abs(value - Math.E) < 0.00001) return "1";
  if (Math.abs(value - 1 / Math.E) < 0.00001) return "-1";
  if (Math.abs(value - Math.E ** 2) < 0.00001) return "2";
  return `≈ ${formatDiscoveryNumber(Math.log(value), 3)}`;
}

function getLnSign(value) {
  const ln = Math.log(value);
  if (Math.abs(ln) < 0.000001) return "منعدم";
  return ln > 0 ? "موجب" : "سالب";
}

function updateLnDiscovery(root = document) {
  const discoveryRoot = root.querySelector?.(".ln-discovery") || root.closest?.(".ln-discovery") || root;
  if (!discoveryRoot?.querySelector) return;
  const b = getLnB(discoveryRoot);
  const a = Math.log(b);
  const output = discoveryRoot.querySelector("[data-ln-reading]");
  const input = discoveryRoot.querySelector("[data-ln-b]");
  if (input) input.value = formatDiscoveryNumber(b, 3);
  if (output) {
    output.innerHTML = `نقرأ على المنحنى: <span class="math">e^${formatDiscoveryNumber(a, 3)}≈${formatDiscoveryNumber(b, 3)}</span>، إذن <span class="math">ln(${formatDiscoveryNumber(b, 3)})≈${formatDiscoveryNumber(a, 3)}</span>`;
  }

  discoveryRoot.querySelectorAll("[data-ln-b-preset]").forEach((button) => {
    const preset = Number(button.dataset.lnBPreset);
    button.classList.toggle("active", Math.abs(preset - b) < 0.0005);
  });

  discoveryRoot.querySelectorAll("[data-ln-row]").forEach((row) => {
    const value = Number(row.dataset.b);
    row.querySelector("[data-ln-value]").textContent = getLnExactLabel(value);
    row.querySelector("[data-ln-sign]").textContent = getLnSign(value);
  });

  updateLnInverseGraph(discoveryRoot, b);
  enhanceMathTypography(discoveryRoot);
}

function updateLnInverseGraph(root, b) {
  const svg = root.querySelector("[data-ln-inverse-graph]");
  if (!svg) return;

  const grid = svg.querySelector("[data-ln-grid]");
  const axes = svg.querySelector("[data-ln-axes]");
  const line = svg.querySelector("[data-ln-line]");
  const expPath = svg.querySelector("[data-ln-exp-path]");
  const logPath = svg.querySelector("[data-ln-log-path]");
  const guides = svg.querySelector("[data-ln-guides]");
  const points = svg.querySelector("[data-ln-points]");
  const labels = svg.querySelector("[data-ln-labels]");

  const xMin = -3;
  const xMax = 6;
  const yMin = -3;
  const yMax = 6;
  const plotLeft = 42;
  const plotRight = 395;
  const plotTop = 38;
  const plotBottom = 252;
  const plotWidth = plotRight - plotLeft;
  const plotHeight = plotBottom - plotTop;
  const mapX = (x) => plotLeft + ((x - xMin) / (xMax - xMin)) * plotWidth;
  const mapY = (y) => plotBottom - ((y - yMin) / (yMax - yMin)) * plotHeight;

  let gridHTML = "";
  for (let x = Math.ceil(xMin); x <= Math.floor(xMax); x++) {
    const sx = mapX(x);
    gridHTML += `<line x1="${sx}" y1="${plotTop}" x2="${sx}" y2="${plotBottom}"></line>`;
  }
  for (let y = Math.ceil(yMin); y <= Math.floor(yMax); y++) {
    const sy = mapY(y);
    gridHTML += `<line x1="${plotLeft}" y1="${sy}" x2="${plotRight}" y2="${sy}"></line>`;
  }
  grid.innerHTML = gridHTML;

  const xAxisY = mapY(0);
  const yAxisX = mapX(0);
  axes.innerHTML = `
    <line x1="${plotLeft}" y1="${xAxisY}" x2="${plotRight}" y2="${xAxisY}"></line>
    <line x1="${yAxisX}" y1="${plotTop}" x2="${yAxisX}" y2="${plotBottom}"></line>
    <polygon points="${plotRight},${xAxisY} ${plotRight - 6},${xAxisY - 4} ${plotRight - 6},${xAxisY + 4}" fill="#111"></polygon>
    <polygon points="${yAxisX},${plotTop} ${yAxisX - 4},${plotTop + 6} ${yAxisX + 4},${plotTop + 6}" fill="#111"></polygon>
  `;
  line.setAttribute("d", `M${mapX(xMin)} ${mapY(xMin)} L${mapX(xMax)} ${mapY(xMax)}`);

  let expD = "";
  for (let i = 0; i <= 160; i++) {
    const x = xMin + (i / 160) * (Math.log(yMax) - xMin);
    const y = Math.exp(x);
    expD += `${i === 0 ? "M" : "L"}${mapX(x).toFixed(2)} ${mapY(y).toFixed(2)}`;
  }
  expPath.setAttribute("d", expD);

  let logD = "";
  const logMin = 0.06;
  for (let i = 0; i <= 180; i++) {
    const x = logMin + (i / 180) * (xMax - logMin);
    const y = Math.log(x);
    logD += `${i === 0 ? "M" : "L"}${mapX(x).toFixed(2)} ${mapY(y).toFixed(2)}`;
  }
  logPath.setAttribute("d", logD);

  const a = Math.log(b);
  const expX = mapX(a);
  const expY = mapY(b);
  const logX = mapX(b);
  const logY = mapY(a);
  guides.innerHTML = `
    <line x1="${mapX(0)}" y1="${expY}" x2="${expX}" y2="${expY}" stroke="#2563eb" stroke-width="2" stroke-dasharray="6 4"></line>
    <line x1="${expX}" y1="${expY}" x2="${expX}" y2="${mapY(0)}" stroke="#2563eb" stroke-width="2" stroke-dasharray="6 4"></line>
    <line x1="${expX}" y1="${expY}" x2="${logX}" y2="${logY}" stroke="#64748b" stroke-width="1.7" stroke-dasharray="5 5"></line>
    <line x1="${logX}" y1="${logY}" x2="${logX}" y2="${mapY(0)}" stroke="#00a86b" stroke-width="2" stroke-dasharray="6 4"></line>
  `;
  points.innerHTML = `
    <circle cx="${expX}" cy="${expY}" r="4.5" fill="#2563eb"></circle>
    <circle cx="${logX}" cy="${logY}" r="4.5" fill="#00a86b"></circle>
    <circle cx="${mapX(0)}" cy="${mapY(1)}" r="3.5" fill="#ef4444"></circle>
    <circle cx="${mapX(1)}" cy="${mapY(0)}" r="3.5" fill="#00a86b"></circle>
  `;
  labels.innerHTML = `
    <text x="${mapX(xMax) + 4}" y="${mapY(0) + 4}">x</text>
    <text x="${mapX(0) + 6}" y="${mapY(yMax) - 4}">y</text>
    <text x="${mapX(1.55)}" y="${mapY(5.15)}" fill="#ef4444">y=e^x</text>
    <text x="${mapX(3.25)}" y="${mapY(1.55)}" fill="#00a86b">y=ln(x)</text>
    <text x="${mapX(3.75)}" y="${mapY(3.45)}" fill="#64748b">y=x</text>
    <text x="${expX + 7}" y="${expY - 7}" fill="#2563eb">A(a,b)</text>
    <text x="${logX + 7}" y="${logY + 16}" fill="#00a86b">A'(b,a)</text>
    <text x="${mapX(0) - 22}" y="${expY + 4}" fill="#2563eb">b</text>
    <text x="${expX - 8}" y="${mapY(0) + 18}" fill="#2563eb">a</text>
  `;
}

function escapeMathHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function readMathGroup(text, startIndex) {
  const opener = text[startIndex];
  const closer = opener === "{" ? "}" : opener === "(" ? ")" : "";
  if (!closer) {
    let end = startIndex;
    if (text[end] === "-" || text[end] === "+" || text[end] === "−") end += 1;
    while (end < text.length && /[A-Za-z0-9∞]/.test(text[end])) end += 1;
    if (end === startIndex || (end === startIndex + 1 && (text[startIndex] === "-" || text[startIndex] === "+" || text[startIndex] === "−"))) {
      end = startIndex + 1;
    }
    return { value: text.slice(startIndex, end), end };
  }
  let depth = 0;
  for (let i = startIndex; i < text.length; i++) {
    if (text[i] === opener) depth += 1;
    if (text[i] === closer) depth -= 1;
    if (depth === 0) {
      return { value: text.slice(startIndex + 1, i), end: i + 1 };
    }
  }
  return { value: text.slice(startIndex + 1), end: text.length };
}

function normalizeMathSource(text) {
  return text
    .replace(/\u000crac/g, "\\frac")
    .replace(/\brac(?=\{|\s*[0-9A-Za-z])/g, "\\frac")
    .replace(/e\^sqrt\(([^()]+)\)/g, "e^{\\sqrt{$1}}")
    .replace(/\\frac\s*([0-9A-Za-z])\s*([0-9A-Za-z])/g, "\\frac{$1}{$2}")
    .replace(/([A-Za-z]+)\^\(([^()]+)\)/g, "$1^{$2}")
    .replace(/e\^\(([^()]+)\)/g, "e^{$1}")
    .replace(/sqrt\(([^()]+)\)/g, "\\sqrt{$1}")
    .replace(/⁴√\s*([A-Za-z0-9]+)/g, "\\sqrt[4]{$1}")
    .replace(/√\s*([A-Za-z0-9]+)/g, "\\sqrt{$1}")
    .replace(/->/g, "→")
    .replace(/-\s*∞/g, "−∞");
}

function readBracketGroup(text, startIndex, opener, closer) {
  if (text[startIndex] !== opener) return null;
  let depth = 0;
  for (let i = startIndex; i < text.length; i++) {
    if (text[i] === opener) depth += 1;
    if (text[i] === closer) depth -= 1;
    if (depth === 0) return { value: text.slice(startIndex + 1, i), end: i + 1 };
  }
  return { value: text.slice(startIndex + 1), end: text.length };
}

function formatInlineMathText(text) {
  text = normalizeMathSource(text);
  let html = "";
  for (let i = 0; i < text.length; i++) {
    if (text.startsWith("\\frac", i)) {
      const numerator = readBracketGroup(text, i + 5, "{", "}");
      const denominator = numerator ? readBracketGroup(text, numerator.end, "{", "}") : null;
      if (numerator && denominator) {
        html += `<span class="frac"><span>${formatInlineMathText(numerator.value)}</span><span>${formatInlineMathText(denominator.value)}</span></span>`;
        i = denominator.end - 1;
        continue;
      }
    }
    if (text.startsWith("\\sqrt", i)) {
      let cursor = i + 5;
      const indexGroup = readBracketGroup(text, cursor, "[", "]");
      if (indexGroup) cursor = indexGroup.end;
      const radicand = readBracketGroup(text, cursor, "{", "}");
      if (radicand) {
        const indexHtml = indexGroup ? `<sup>${formatInlineMathText(indexGroup.value)}</sup>` : "";
        html += `<span class="latex-root">${indexHtml}<span class="root-symbol">√</span><span class="radicand">${formatInlineMathText(radicand.value)}</span></span>`;
        i = radicand.end - 1;
        continue;
      }
    }
    const char = text[i];
    if (char === "^" || char === "_") {
      const group = readMathGroup(text, i + 1);
      const tag = char === "^" ? "sup" : "sub";
      html += `<${tag}>${formatInlineMathText(group.value)}</${tag}>`;
      i = group.end - 1;
      continue;
    }
    html += escapeMathHtml(char);
  }
  return html.replace(/\blim\b/g, '<span class="math-op">lim</span>');
}

function formatEquationText(text) {
  const escaped = formatInlineMathText(text.trim());
  const withLimits = escaped.replace(
    /<span class="math-op">lim<\/span>\s+([^=،]+?)\s*=\s*([^،]+?)\s+عند\s+([^،]+)/g,
    '<span class="limit-expr"><span class="math-op">lim</span><sub>$3</sub></span> $1 = $2'
  );
  return withLimits.replace(/\s*،\s*/g, '<span class="math-sep">،</span>');
}

function formatRichMathText(text) {
  return formatEquationText(text);
}

function enhanceMathTypography(scope = document) {
  scope.querySelectorAll(".math, .math-equation, .math-rich, .variation-table th, .variation-table td").forEach((node) => {
    if (node.dataset.mathEnhanced === "true" || (node.querySelector("*") && !node.classList.contains("math-rich"))) return;
    node.innerHTML = node.classList.contains("math-rich") ? formatRichMathText(node.textContent) : formatEquationText(node.textContent);
    node.dataset.mathEnhanced = "true";
  });
}

function openGraphLightbox(figure) {
  const clone = figure.cloneNode(true);
  clone.querySelector("[data-zoom-graph]")?.remove();
  enhanceMathTypography(clone);
  const lightbox = document.createElement("div");
  lightbox.className = "graph-lightbox";
  lightbox.setAttribute("role", "dialog");
  lightbox.setAttribute("aria-modal", "true");
  lightbox.innerHTML = `
    <div class="graph-lightbox-inner">
      <button class="graph-lightbox-close" type="button" data-close-graph>إغلاق</button>
    </div>
  `;
  lightbox.querySelector(".graph-lightbox-inner").appendChild(clone);
  document.body.appendChild(lightbox);
  lightbox.querySelector("[data-close-graph]").focus();
}

function bindEvents() {
  document.addEventListener("click", (event) => {

    const graphZoom = event.target.closest("[data-zoom-graph], [data-zoom-figure]");
    if (graphZoom) {
      const figure = graphZoom.closest("[data-zoom-figure]");
      if (figure) {
        event.preventDefault();
        openGraphLightbox(figure);
        return;
      }
    }

    const closeGraph = event.target.closest("[data-close-graph]");
    if (closeGraph || event.target.classList.contains("graph-lightbox")) {
      event.target.closest(".graph-lightbox")?.remove();
      return;
    }

    const stepPreset = event.target.closest("[data-exp-step-preset]");
    if (stepPreset) {
      const root = stepPreset.closest(".exp-discovery") || document;
      const input = root.querySelector("[data-exp-step-h]");
      if (input) input.value = stepPreset.dataset.expStepPreset;
      updateExpDiscoveryTable(root);
      return;
    }

    const limitToggle = event.target.closest("[data-exp-toggle-limit]");
    if (limitToggle) {
      const root = limitToggle.closest(".exp-discovery") || document;
      root.classList.toggle("show-limit-curve");
      updateExpCurveBuilder(root);
      return;
    }

    const lnPreset = event.target.closest("[data-ln-b-preset]");
    if (lnPreset) {
      const root = lnPreset.closest(".ln-discovery") || document;
      const input = root.querySelector("[data-ln-b]");
      if (input) input.value = lnPreset.dataset.lnBPreset;
      updateLnDiscovery(root);
      return;
    }

    const viewButton = event.target.closest("[data-view]");
    if (viewButton) {
      setView(viewButton.dataset.view);
      if (viewButton.dataset.view === "bac") {
        setBacPanel(viewButton.dataset.bacTab || "algeria");
      }

    }

    const jumpButton = event.target.closest("[data-view-jump]");
    if (jumpButton) {
      setView(jumpButton.dataset.viewJump);
      if (jumpButton.dataset.viewJump === "bac") {
        setBacPanel("algeria");
      }
    }

    const scrollButton = event.target.closest("[data-scroll-target]");
    if (scrollButton) {
      document.getElementById(scrollButton.dataset.scrollTarget)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    const openModule = event.target.closest("[data-open-module]");
    if (openModule) setModule(openModule.dataset.openModule);

    const completeModule = event.target.closest("[data-complete-module]");
    if (completeModule) markComplete(completeModule.dataset.completeModule);

    const bacBranch = event.target.closest("[data-bac-branch]");
    if (bacBranch) {
      bacFilters.branch = bacBranch.dataset.bacBranch;
      bacFilters.year = "all";
      renderBacArchive();
    }

    const bacYear = event.target.closest("[data-bac-year]");
    if (bacYear) {
      bacFilters.year = bacYear.dataset.bacYear;
      renderBacArchive();
    }

    const moduleTab = event.target.closest("[data-module-tab]");
    if (moduleTab) {
      state.moduleTab = moduleTab.dataset.moduleTab;
      renderModuleDetail();
      setActiveTabs("#moduleView .lesson-section-tabs", moduleTab, "data-module-tab");
    }

    const bacTab = event.target.closest("[data-bac-tab]");
    if (bacTab) {
      setBacPanel(bacTab.dataset.bacTab);
    }
    const ideaBranch = event.target.closest("[data-idea-branch]");
    if (ideaBranch) {
      const ideasRoot = ideaBranch.closest("#ideasDoor") || document;
      ideasRoot.querySelectorAll("[data-idea-branch]").forEach((button) => {
        const isActive = button === ideaBranch;
        button.classList.toggle("active", isActive);
        if (isActive) button.setAttribute("aria-current", "true");
        else button.removeAttribute("aria-current");
      });
      ideasRoot.querySelectorAll("[data-idea-panel]").forEach((panel) => {
        panel.classList.toggle("active", panel.dataset.ideaPanel === ideaBranch.dataset.ideaBranch);
      });
      initDiscussionCanvases(ideasRoot);
      return;
    }

    const discussionDoorToggle = event.target.closest("[data-discussion-door-toggle]");
    if (discussionDoorToggle) {
      event.preventDefault();
      const door = discussionDoorToggle.closest("[data-discussion-door]");
      const body = door?.querySelector("[data-discussion-door-body]");
      if (door && body) {
        const willOpen = body.hidden;
        body.hidden = !willOpen;
        door.classList.toggle("is-open", willOpen);
        door.classList.toggle("is-collapsed", !willOpen);
        discussionDoorToggle.setAttribute("aria-expanded", String(willOpen));
        if (willOpen) initDiscussionCanvases(door);
        else door.querySelectorAll("[data-discussion-card]").forEach(stopDiscussionAnimation);
      }
      return;
    }
    const mockBranch = event.target.closest("[data-mock-branch]");
    if (mockBranch) {
      event.preventDefault();
      setMockBacBranch(mockBranch.dataset.mockBranch);
      document.querySelector(".mock-bac-panels")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    const mockSolutionToggle = event.target.closest("[data-toggle-mock-solution]");
    if (mockSolutionToggle) {
      const solution = mockSolutionToggle.closest(".mock-exam-solution");
      const isCollapsed = solution?.classList.toggle("is-collapsed");
      mockSolutionToggle.setAttribute("aria-expanded", String(!isCollapsed));
      return;
    }

    const discussionInsert = event.target.closest("[data-discussion-insert]");
    if (discussionInsert) {
      event.preventDefault();
      const card = discussionInsert.closest("[data-discussion-card]");
      if (card) insertDiscussionToken(card, discussionInsert.dataset.discussionInsert || "", Number(discussionInsert.dataset.caretBack || 0));
      return;
    }

    const discussionApply = event.target.closest("[data-discussion-apply]");
    if (discussionApply) {
      event.preventDefault();
      const card = discussionApply.closest("[data-discussion-card]");
      if (card) {
        stopDiscussionAnimation(card);
        drawDiscussionCanvas(card);
      }
      return;
    }

    const discussionLineMode = event.target.closest("[data-discussion-line-mode]");
    if (discussionLineMode) {
      event.preventDefault();
      const card = discussionLineMode.closest("[data-discussion-card]");
      if (card) {
        stopDiscussionAnimation(card);
        card.dataset.discussionLineMode = discussionLineMode.dataset.discussionLineMode === "oblique" ? "oblique" : "horizontal";
        drawDiscussionCanvas(card);
      }
      return;
    }

    const discussionPlay = event.target.closest("[data-discussion-play]");
    if (discussionPlay) {
      event.preventDefault();
      const card = discussionPlay.closest("[data-discussion-card]");
      if (card) toggleDiscussionAnimation(card);
      return;
    }

    const solutionToggle = event.target.closest("[data-solution-key]");
    if (solutionToggle) {
      const key = solutionToggle.dataset.solutionKey;
      state.openSolutions[key] = !state.openSolutions[key];
      if (solutionToggle.closest("#exerciseGrid")) {
        renderExercises();
      } else if (solutionToggle.closest("#solvedList")) {
        renderSolved();
      } else {
        renderModuleDetail();
      }
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.target.matches("[data-discussion-function]") && event.key === "Enter") {
      event.preventDefault();
      const card = event.target.closest("[data-discussion-card]");
      if (card) {
        stopDiscussionAnimation(card);
        drawDiscussionCanvas(card);
      }
    }
  });

  document.addEventListener("change", (event) => {
    if (event.target.matches("[data-discussion-preset]")) {
      const card = event.target.closest("[data-discussion-card]");
      const input = card?.querySelector("[data-discussion-function]");
      if (card && input) {
        input.value = event.target.value;
        stopDiscussionAnimation(card);
        drawDiscussionCanvas(card);
      }
    }
  });
  document.addEventListener("input", (event) => {
    if (event.target.matches("[data-exp-step-h]")) {
      updateExpDiscoveryTable(event.target.closest(".exp-discovery") || document);
    }
    if (event.target.matches("[data-discussion-slider]")) {
      const card = event.target.closest("[data-discussion-card]");
      if (card) {
        stopDiscussionAnimation(card);
        drawDiscussionCanvas(card);
      }
    }
    if (event.target.matches("[data-discussion-function]")) {
      const card = event.target.closest("[data-discussion-card]");
      if (card) {
        stopDiscussionAnimation(card);
        drawDiscussionCanvas(card);
      }
    }
    if (event.target.matches("[data-ln-b]")) {
      updateLnDiscovery(event.target.closest(".ln-discovery") || document);
    }
  });

  document.getElementById("continueLessonBtn").addEventListener("click", (event) => {
    event.stopPropagation();
    const moduleId = document.getElementById("continueLessonBtn").dataset.openModule || state.progress.lastModuleId || modules[0].id;
    setModule(moduleId);
  });

  document.getElementById("backToModulesBtn").addEventListener("click", () => setView("learn"));

  document.getElementById("resetProgressBtn")?.addEventListener("click", () => {
    if (!confirm("هل أنت متأكد من تصفير تقدمك؟ لا يمكن التراجع عن هذا الإجراء.")) return;
    state.progress = { completed: [], lastModuleId: modules[0].id };
    saveProgress();
    renderAll();
  });
}

function initSplash() {
  const splash = document.getElementById("splashScreen");
  if (!splash) return;
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hasSeen = sessionStorage.getItem("aylaSplashSeen");
  if (prefersReduced || hasSeen) {
    splash.classList.add("is-hidden");
    splash.setAttribute("aria-hidden", "true");
    return;
  }
  window.addEventListener("load", () => {
    setTimeout(() => {
      splash.classList.add("is-hidden");
      splash.setAttribute("aria-hidden", "true");
      sessionStorage.setItem("aylaSplashSeen", "1");
    }, 400);
  });
}

function initIframeResizer() {
  const frame = document.getElementById("bacFrame");
  if (!frame) return;
  frame.removeAttribute("height");
}

function renderAll() {
  renderModules();
  renderModuleDetail();
  renderExercises();
  renderIdeasDoor();
  renderSolved();
  renderBacArchive();
  renderProgress();
  updateHome();
  enhanceMathTypography();
}

initSplash();
bindEvents();
renderAll();
setViewFromHash();
window.addEventListener("hashchange", setViewFromHash);
initIframeResizer();
