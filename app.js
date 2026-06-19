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
              <path d="M55 208 C115 204 165 195 205 175 C244 155 274 119 300 72 C313 49 325 34 338 24" fill="none" stroke="#ef4444" stroke-width="3.2" stroke-linecap="round"></path>
              <path d="M55 196 C105 190 155 181 205 164 C250 149 294 122 338 82 C362 60 382 43 402 30" fill="none" stroke="#2563eb" stroke-width="3" stroke-linecap="round"></path>
              <path d="M55 24 C91 42 122 62 150 86 C180 113 205 151 235 165 C270 181 322 192 402 200" fill="none" stroke="#16a34a" stroke-width="3" stroke-linecap="round"></path>
              <circle cx="235" cy="165" r="4" fill="#111"></circle>
              <g font-family="Times New Roman, serif" font-size="15" fill="#111">
                <text x="438" y="224">x</text><text x="244" y="35">y</text>
                <text x="239" y="224">0</text><text x="244" y="167">1</text>
                <text x="310" y="68" fill="#ef4444">k&gt;1</text>
                <text x="370" y="57" fill="#2563eb">0&lt;k&lt;1</text>
                <text x="75" y="43" fill="#16a34a">k&lt;0</text>
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
        title: "تمرين 1",
        statement: "بسط: A = e^2 × e^5 / e^3.",
        solution: "A = e^(2+5-3) = e^4.",
      },
      {
        title: "تمرين 2",
        statement: "قارن بين e^1.7 و e^2.1.",
        solution: "بما أن 1.7 < 2.1 والدالة exp متزايدة تمامًا، فإن e^1.7 < e^2.1.",
      },
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
    exercises: [
      {
        title: "تمرين 1",
        statement: "بسط: ln(12)-ln(3).",
        solution: "ln(12)-ln(3)=ln(12/3)=ln(4).",
      },
      {
        title: "تمرين 2",
        statement: "حل: ln(x)=2.",
        solution: "ln(x)=2 ⇔ x=e^2، والحل مقبول لأن e^2>0.",
      },
    ],
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
    exercises: [
      {
        title: "تمرين 1",
        statement: "حل: e^(3x)=4.",
        solution: "نأخذ ln للطرفين: 3x=ln4، إذن x=ln4/3.",
      },
      {
        title: "تمرين 2",
        statement: "حل: ln(x+1) ≤ ln(4).",
        solution: "شرط التعريف x>-1. وبما أن ln متزايدة: x+1≤4 أي x≤3. إذن الحل: ]-1,3].",
      },
    ],
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
    exercises: [
      {
        title: "تمرين 1",
        statement: "احسب مشتقة f(x)=ln(2x+3).",
        solution: "المجال x>-3/2. f'(x)=2/(2x+3).",
      },
      {
        title: "تمرين 2",
        statement: "احسب مشتقة g(x)=(x-1)e^x.",
        solution: "g'(x)=1.e^x+(x-1)e^x=xe^x.",
      },
    ],
    solved: [
      {
        title: "تمرين محلول 1",
        statement: "ادرس تغيرات f(x)=ln(x)/x على ]0,+∞[.",
        solution: "f'(x)=(1-ln x)/x^2. بما أن x^2>0، فإشارة f' هي إشارة 1-ln x. إذن f متزايدة على ]0,e] ومتناقصة على [e,+∞[، وتبلغ قيمة عظمى f(e)=1/e.",
      },
    ],
  },
];

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
  document.getElementById("moduleCountLabel").textContent = `${modules.length} محاور`;
  const next = getNextModule();
  grid.innerHTML = modules
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
      <section class="cards-grid">${module.exercises.map((exercise, index) => renderExerciseCard(module, exercise, index)).join("")}</section>
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
      <p>${escapeHtml(exercise.statement)}</p>
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
      <p>${escapeHtml(exercise.statement)}</p>
      <button class="solution-toggle" type="button" data-solution-key="${key}">
        ${isOpen ? "إخفاء الحل" : "إظهار الحل"}
      </button>
      <section class="solution-panel ${isOpen ? "active" : ""}" data-solution-panel="${key}">
        ${solution}
      </section>
    </article>
  `;
}

function renderExercises() {
  const grid = document.getElementById("exerciseGrid");
  grid.innerHTML = modules
    .flatMap((module) => module.exercises.map((exercise, index) => renderExerciseCard(module, exercise, index)))
    .join("");
  document.getElementById("homeExerciseCount").textContent = `${modules.reduce((sum, module) => sum + module.exercises.length, 0)} تمارين`;
}

function renderSolved() {
  const list = document.getElementById("solvedList");
  list.innerHTML = modules
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
  const completed = state.progress.completed.length;
  const percent = Math.round((completed / modules.length) * 100);
  const completedIds = new Set(state.progress.completed);
  const next = getNextModule();
  const isAllComplete = completed === modules.length;

  document.getElementById("progressSummary").textContent = `${completed} من ${modules.length} محاور مكتملة`;
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
        <h3>${completed} من ${modules.length} محاور مكتملة</h3>
        <p>المحور التالي المقترح: <strong>${next.title}</strong></p>
        <p class="recommendation">${recommendation}</p>
      </div>
      <div class="progress-summary-actions">
        <button class="primary-btn" type="button" data-open-module="${next.id}">${isAllComplete ? "راجع المحور" : "استكمل التعلم"}</button>
        <button class="ghost-btn" type="button" data-view-jump="learn">تصفح كل المحاور</button>
      </div>
    `;
  }

  document.getElementById("progressGrid").innerHTML = modules
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
      const tip = isNext ? "<p class=\"recommendation\">⏳ أكمل هذا المحور أولاً.</p>" : "";
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
  const completedIds = new Set(state.progress.completed);
  const firstIncomplete = modules.find((module) => !completedIds.has(module.id));
  if (firstIncomplete) return firstIncomplete;
  return modules[0];
}

function updateHome() {
  const completed = state.progress.completed.length;
  const percent = Math.round((completed / modules.length) * 100);
  const completedIds = new Set(state.progress.completed);
  const last = modules.find((module) => module.id === state.progress.lastModuleId);
  const next = last && !completedIds.has(last.id) ? last : getNextModule();
  const isAllComplete = completed === modules.length;

  const continueBtn = document.getElementById("continueLessonBtn");
  document.getElementById("continueTitle").textContent = next.title;
  document.getElementById("continueSummary").textContent = next.summary;
  document.getElementById("readinessValue").textContent = `${percent}%`;
  document.getElementById("homeLessonCount").textContent = String(modules.length);
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
    while (end < text.length && /[A-Za-z0-9.∞]/.test(text[end])) end += 1;
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

function formatInlineMathText(text) {
  let html = "";
  for (let i = 0; i < text.length; i++) {
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
  return html
    .replace(/\blim\b/g, '<span class="math-op">lim</span>')
    .replace(/-&gt;/g, "→")
    .replace(/-\s*∞/g, "−∞");
}

function formatEquationText(text) {
  const escaped = formatInlineMathText(text.trim());
  const withLimits = escaped.replace(
    /<span class="math-op">lim<\/span>\s+([^=،]+?)\s*=\s*([^،]+?)\s+عند\s+([^،]+)/g,
    '<span class="limit-expr"><span class="math-op">lim</span><sub>$3</sub></span> $1 = $2'
  );
  return withLimits.replace(/\s*،\s*/g, '<span class="math-sep">،</span>');
}

function enhanceMathTypography(scope = document) {
  scope.querySelectorAll(".math, .math-equation, .variation-table th, .variation-table td").forEach((node) => {
    if (node.dataset.mathEnhanced === "true" || node.querySelector("*")) return;
    node.innerHTML = formatEquationText(node.textContent);
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

    const solutionToggle = event.target.closest("[data-solution-key]");
    if (solutionToggle) {
      const key = solutionToggle.dataset.solutionKey;
      state.openSolutions[key] = !state.openSolutions[key];
      renderModuleDetail();
    }
  });

  document.addEventListener("input", (event) => {
    if (event.target.matches("[data-exp-step-h]")) {
      updateExpDiscoveryTable(event.target.closest(".exp-discovery") || document);
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
  window.addEventListener("message", (event) => {
    if (event.data?.type === "ayla-iframe-height" && typeof event.data.height === "number") {
      frame.style.height = `${Math.max(320, event.data.height)}px`;
    }
  });
}

function renderAll() {
  renderModules();
  renderModuleDetail();
  renderExercises();
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
