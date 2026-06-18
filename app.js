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
          <section class="activity-sheet">
            <p><strong>مقدمة:</strong> تم صياغة العديد من الظواهر الفيزيائية والبيولوجية والاقتصادية باستعمال دوال خاصة. في هذا النشاط نبحث عن الدالة <span class="math">f</span> التي تحقق <span class="math">f'=f</span> و <span class="math">f(0)=1</span>.</p>
            <div class="math-equation">f'=f و f(0)=1</div>
            <div class="activity-visual-grid">
              <figure class="mini-graph">
                <svg viewBox="0 0 360 230" role="img" aria-label="منحنى تقريبي للدالة الأسية">
                  <rect x="0" y="0" width="360" height="230" fill="#fbff9b"></rect>
                  <g stroke="#6aa84f" stroke-width="1">
                    <line x1="35" y1="20" x2="35" y2="205"></line><line x1="85" y1="20" x2="85" y2="205"></line><line x1="135" y1="20" x2="135" y2="205"></line><line x1="185" y1="20" x2="185" y2="205"></line><line x1="235" y1="20" x2="235" y2="205"></line><line x1="285" y1="20" x2="285" y2="205"></line><line x1="335" y1="20" x2="335" y2="205"></line>
                    <line x1="30" y1="25" x2="340" y2="25"></line><line x1="30" y1="55" x2="340" y2="55"></line><line x1="30" y1="85" x2="340" y2="85"></line><line x1="30" y1="115" x2="340" y2="115"></line><line x1="30" y1="145" x2="340" y2="145"></line><line x1="30" y1="175" x2="340" y2="175"></line><line x1="30" y1="205" x2="340" y2="205"></line>
                  </g>
                  <g stroke="#111" stroke-width="1.7"><line x1="30" y1="190" x2="340" y2="190"></line><line x1="185" y1="20" x2="185" y2="205"></line></g>
                  <path d="M35 188 C80 187 122 184 160 178 C198 171 226 155 250 130 C278 100 307 54 335 23" fill="none" stroke="#ff1d1d" stroke-width="3"></path>
                  <g font-family="Times New Roman, serif" font-size="12" fill="#111">
                    <text x="32" y="204">-3</text><text x="82" y="204">-2</text><text x="132" y="204">-1</text><text x="183" y="204">0</text><text x="233" y="204">1</text><text x="283" y="204">2</text>
                    <text x="188" y="181">1</text><text x="188" y="151">4</text><text x="188" y="121">8</text><text x="188" y="91">12</text><text x="188" y="61">16</text><text x="188" y="31">20</text>
                  </g>
                </svg>
              </figure>
              <table class="activity-mini-table">
                <thead><tr><th>h</th><th>x</th><th>f(x+h)/f(x)</th><th>f(x+h)-f(x)</th></tr></thead>
                <tbody>
                  <tr><td>0.005</td><td>0</td><td>1.005</td><td>0.005</td></tr>
                  <tr><td>-0.01</td><td>-0.01</td><td>0.990</td><td>-0.00995</td></tr>
                  <tr><td>-0.02</td><td>-0.02</td><td>0.980</td><td>-0.0198</td></tr>
                  <tr><td>-0.03</td><td>-0.03</td><td>0.970</td><td>-0.0296</td></tr>
                  <tr><td>-0.05</td><td>-0.05</td><td>0.951</td><td>-0.0488</td></tr>
                  <tr><td>-0.07</td><td>-0.07</td><td>0.932</td><td>-0.0676</td></tr>
                </tbody>
              </table>
            </div>
            <ol class="activity-questions">
              <li>باستعمال الآلة الحاسبة والجدول، خمن القيم التقريبية لـ <span class="math">f(x)</span>.</li>
              <li>بين أن الدالة <span class="math">f</span> موجبة تماما، ثم ادرس <span class="math">h(x)=f(x)f(-x)</span> واستنتج <span class="math">f(x)f(-x)=1</span>.</li>
              <li>برهن أن <span class="math">f(x)≠0</span> من أجل كل <span class="math">x</span>.</li>
              <li>لتكن <span class="math">g(x)=f(x)-f'(x)</span>. بين أن <span class="math">g=0</span>.</li>
              <li>ليكن <span class="math">y</span> ثابتا و <span class="math">i(x)=f(x+y)/f(x)</span>. بين أن <span class="math">i</span> ثابتة ثم استنتج <span class="math">f(x+y)=f(x)f(y)</span>.</li>
              <li>استنتج أنه من أجل كل عددين حقيقيين <span class="math">x</span> و <span class="math">y</span>:
                <span class="math">f(x-y)=f(x)/f(y)</span>.
              </li>
              <li>ليكن <span class="math">n</span> عددا صحيحا نسبيا، ولتكن
                <span class="math">j(x)=f(nx)/[f(x)]^n</span>. عين الدالة المشتقة للدالة <span class="math">j</span>، ثم استنتج أنه من أجل كل <span class="math">x</span>:
                <span class="math">f(nx)=[f(x)]^n</span>.
              </li>
              <li>اعتمد التعريف الآتي للدالة الأسية واستعمله لاحقا في كتابة خواصها.</li>
            </ol>
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
            <ol class="activity-questions">
              <li>من <span class="math">f'=f</span> نحصل على التقريب <span class="math">f(x+h)≈f(x)(1+h)</span> عندما يكون <span class="math">h</span> صغيرا.</li>
              <li>إذا <span class="math">u(x)=f(x)f(-x)</span> فإن <span class="math">u'(x)=0</span>، إذن <span class="math">u</span> ثابتة. وبما أن <span class="math">u(0)=1</span> نحصل على <span class="math">f(x)f(-x)=1</span>.</li>
              <li>من العلاقة السابقة نستنتج مباشرة أن <span class="math">f(x)≠0</span> لكل <span class="math">x</span>.</li>
              <li>بما أن <span class="math">f'=f</span> فإن <span class="math">g(x)=f(x)-f'(x)=0</span>.</li>
              <li>باشتقاق <span class="math">i(x)=f(x+y)/f(x)</span> نجد <span class="math">i'(x)=0</span>، ومنه <span class="math">i</span> ثابتة. عند <span class="math">x=0</span>: <span class="math">i(0)=f(y)</span>، إذن <span class="math">f(x+y)=f(x)f(y)</span>.</li>
              <li>بوضع <span class="math">-y</span> مكان <span class="math">y</span> في العلاقة
                <span class="math">f(x+y)=f(x)f(y)</span> نحصل على
                <span class="math">f(x-y)=f(x)f(-y)</span>. وبما أن
                <span class="math">f(y)f(-y)=1</span>، فإن
                <span class="math">f(x-y)=f(x)/f(y)</span> من أجل كل
                <span class="math">x</span> و <span class="math">y</span> من <span class="math">R</span>.
              </li>
              <li>
                نشتق <span class="math">j(x)=f(nx)/[f(x)]^n</span>. باستعمال
                <span class="math">f'=f</span> نجد أن البسط بعد الاشتقاق يساوي صفرا، ومنه
                <span class="math">j'(x)=0</span>. إذن <span class="math">j</span> ثابتة.
                وبما أن <span class="math">j(0)=1</span> نستنتج:
                <span class="math">f(nx)=[f(x)]^n</span>.
              </li>
              <li>
                بهذا نعرّف الدالة الأسية:
                <span class="math">f(x)=exp(x)</span>، وهي الدالة الوحيدة التي تحقق
                <span class="math">f'=f</span> و <span class="math">f(0)=1</span>.
              </li>
            </ol>
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
          <section class="activity-sheet">
            <div class="activity-visual-grid">
              <figure class="mini-graph">
                <svg viewBox="0 0 270 220" role="img" aria-label="تمهيد تعريف اللوغارتم النيبيري">
                  <rect x="0" y="0" width="270" height="220" fill="#fff"></rect>
                  <g stroke="#e5e7eb" stroke-width="1">
                    <line x1="25" y1="20" x2="240" y2="20"></line><line x1="25" y1="60" x2="240" y2="60"></line><line x1="25" y1="100" x2="240" y2="100"></line><line x1="25" y1="140" x2="240" y2="140"></line><line x1="25" y1="180" x2="240" y2="180"></line>
                    <line x1="30" y1="15" x2="30" y2="190"></line><line x1="80" y1="15" x2="80" y2="190"></line><line x1="130" y1="15" x2="130" y2="190"></line><line x1="180" y1="15" x2="180" y2="190"></line><line x1="230" y1="15" x2="230" y2="190"></line>
                  </g>
                  <g stroke="#111" stroke-width="1.8">
                    <line x1="24" y1="180" x2="245" y2="180"></line>
                    <line x1="130" y1="15" x2="130" y2="193"></line>
                  </g>
                  <path d="M28 178 C68 178 101 176 128 164 C154 153 170 132 184 101 C196 76 207 43 228 10" fill="none" stroke="#ff1d1d" stroke-width="3.4" stroke-linecap="round"></path>
                  <circle cx="202" cy="58" r="3.5" fill="#174cff"></circle>
                  <line x1="130" y1="58" x2="202" y2="58" stroke="#174cff" stroke-width="2" stroke-dasharray="5 4"></line>
                  <line x1="202" y1="58" x2="202" y2="180" stroke="#174cff" stroke-width="2" stroke-dasharray="5 4"></line>
                  <g font-family="Times New Roman, serif" font-size="13" fill="#111">
                    <text x="132" y="174">0</text><text x="177" y="195">1</text><text x="201" y="196">a</text>
                    <text x="136" y="54">b</text><text x="134" y="23">5</text>
                    <text x="215" y="42">y=e^x</text>
                  </g>
                </svg>
              </figure>
              <div>
                <p>الدالة الأسية مستمرة ومتزايدة تماما على <span class="math">R</span> ولدينا:</p>
                <div class="math-equation">lim e^x = 0 عند x→-∞</div>
                <div class="math-equation">lim e^x = +∞ عند x→+∞</div>
                <p>إذن حسب مبرهنة القيم المتوسطة، من أجل كل عدد حقيقي <span class="math">b</span> من المجال
                  <span class="math">]0,+∞[</span> يوجد عدد حقيقي وحيد <span class="math">a</span> بحيث:
                </p>
                <div class="math-equation">e^a=b</div>
                <p>نضع: <span class="math">a=ln(b)</span>، ولكن بذلك نكون قد عرفنا دالة جديدة.</p>
              </div>
            </div>
            <div class="definition-box activity-definition">
              <strong>تعريف:</strong>
              تسمى هذه الدالة <strong>الدالة اللوغارتمية النيبيرية</strong>، ونرمز إليها بالرمز <span class="math">ln</span>.
            </div>
            <div class="method-box">
              <strong>1) حساب بعض الصور</strong>
              <ol class="activity-questions">
                <li>احسب الأعداد التالية: <span class="math">ln(1)</span>، <span class="math">ln(e)</span>، <span class="math">ln(1/e)</span>، <span class="math">ln(e^2)</span>.</li>
                <li>عين قيمة مقربة إلى <span class="math">10^-3</span> للعدد <span class="math">ln(2)</span>.</li>
                <li>بين أن <span class="math">ln(1/2)=-ln(2)</span>، ثم استنتج قيمة مقربة إلى <span class="math">10^-3</span> للعدد <span class="math">ln(1/2)</span>.</li>
              </ol>
            </div>
            <div class="property-box">
              <strong>2) التمثيل البياني</strong>
              <p>نعتبر في مستو منسوب إلى معلم متعامد ومتجانس <span class="math">(O; i, j)</span> المنحنيين <span class="math">(C)</span> و <span class="math">(C')</span> الممثلين للدالتين <span class="math">exp</span> و <span class="math">ln</span> على التوالي.</p>
              <ol class="activity-questions">
                <li>ماذا يمكن القول عن النقطتين <span class="math">M(x,y)</span> و <span class="math">M'(y,x)</span> حيث <span class="math">x</span> و <span class="math">y</span> عددان حقيقيان؟</li>
                <li>بين أن النقطة <span class="math">M(a,b)</span> تنتمي إلى المنحنى <span class="math">(C)</span> إذا وفقط إذا كانت النقطة <span class="math">M'(b,a)</span> تنتمي إلى المنحنى <span class="math">(C')</span>.</li>
                <li>ما طبيعة التناظر بين المنحنيين <span class="math">(C)</span> و <span class="math">(C')</span>؟</li>
                <li>ارسم المنحنى <span class="math">(C')</span> انطلاقا من المنحنى <span class="math">(C)</span> في نفس المعلم.</li>
              </ol>
            </div>
            <div class="method-box">
              <strong>3) وضع تخمينات</strong>
              <ol class="activity-questions">
                <li>خمن اتجاه تغير الدالة <span class="math">ln</span> على المجال <span class="math">]0,+∞[</span>.</li>
                <li>خمن نهايتي الدالة <span class="math">ln</span> عند <span class="math">0</span> وعند <span class="math">+∞</span>.</li>
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
  grid.innerHTML = modules
    .map((module) => {
      const done = state.progress.completed.includes(module.id);
      return `
        <article class="module-card ${done ? "is-complete" : ""}">
          <div class="module-icon">${module.icon}</div>
          <h3>${module.title}</h3>
          <p>${module.summary}</p>
          <button class="primary-btn" type="button" data-open-module="${module.id}">
            ${done ? "مراجعة المحور" : "فتح المحور"}
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
      <button class="primary-btn" type="button" data-complete-module="${module.id}">
        ${done ? "محور مكتمل" : "تعليم كمكتمل"}
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
        ${exam.file ? `<a class="primary-btn" href="${escapeHtml(exam.file)}" target="_blank" rel="noopener">فتح الموضوع</a>` : ""}
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
      <span class="panel-label">نشاط</span>
      <h3>${activity.title}</h3>
      <div class="activity-body">${body}</div>
      <button class="primary-btn solution-toggle" type="button" data-solution-key="${key}">
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
      <button class="primary-btn solution-toggle" type="button" data-solution-key="${key}">
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
      <span class="panel-label green">تمرين محلول</span>
      <h3>${exercise.title}</h3>
      <p>${escapeHtml(exercise.statement)}</p>
      <button class="primary-btn solution-toggle" type="button" data-solution-key="${key}">
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
            <a class="primary-btn" href="${escapeHtml(exam.file)}" target="_blank" rel="noopener">فتح الموضوع</a>
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
  document.getElementById("progressSummary").textContent = `${completed} من ${modules.length} محاور مكتملة`;
  document.getElementById("progressGrid").innerHTML = modules
    .map((module) => {
      const done = state.progress.completed.includes(module.id);
      return `
        <article class="action-panel">
          <span class="panel-label ${done ? "green" : "blue"}">${done ? "مكتمل" : "قيد التعلم"}</span>
          <h3>${module.title}</h3>
          <p>${module.summary}</p>
          <button class="ghost-btn" type="button" data-open-module="${module.id}">فتح</button>
        </article>
      `;
    })
    .join("");
  document.getElementById("readinessValue").textContent = `${percent}%`;
}

function updateHome() {
  const last = modules.find((module) => module.id === state.progress.lastModuleId) || modules[0];
  const completed = state.progress.completed.length;
  const percent = Math.round((completed / modules.length) * 100);
  document.getElementById("continueTitle").textContent = last.title;
  document.getElementById("continueSummary").textContent = last.summary;
  document.getElementById("readinessValue").textContent = `${percent}%`;
  document.getElementById("homeLessonCount").textContent = `${modules.length} محاور`;
}

function bindEvents() {
  document.addEventListener("click", (event) => {
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

  document.getElementById("continueLessonBtn").addEventListener("click", () => {
    setModule(state.progress.lastModuleId || modules[0].id);
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
}

initSplash();
bindEvents();
renderAll();
setViewFromHash();
window.addEventListener("hashchange", setViewFromHash);
initIframeResizer();
