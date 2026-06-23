window.bacAlgeriaExams = [
  {
    id: "science-2025-log-exp",
    title: "موضوع بكالوريا الجزائر 2025 - علوم تجريبية الموضوع الأول",
    branch: "science",
    year: "2025",
    date: "2025",
    source: "inline",
    file: "",
    tags: ["exp", "study-functions", "equations"],
    summary: "الموضوع الأول من بكالوريا 2025 لشعبة علوم تجريبية: دراسة دالة أسية، مستقيم مقارب، مماس، جذور، نقطة انعطاف، مناقشة وسيط، ومساحة.",
    statement: `
      <section class="statement-block">
        <h3>بكالوريا 2025 - شعبة علوم تجريبية - الموضوع الأول</h3>
        <p><strong>الجزء الأول (I):</strong></p>
        <p>
          <span class="math-inline">f</span> الدالة المعرفة على <span class="math-inline">R</span> بـ:
          <span class="math-line">f(x)=e<sup>2x</sup>-e<sup>x</sup>-x-2</span>،
          و <span class="math-inline">(C<sub>f</sub>)</span> تمثيلها البياني في المستوي المنسوب إلى المعلم المتعامد والمتجانس
          <span class="math-inline">(O; i, j)</span> (وحدة الطول <span class="math-inline">2cm</span>).
        </p>
        <ol>
          <li>
            <strong>(أ)</strong> احسب <span class="math-line"><span class="lim"><strong>lim</strong><small>x&rarr;-&infin;</small></span>f(x)</span>
            و بين أن: <span class="math-line"><span class="lim"><strong>lim</strong><small>x&rarr;+&infin;</small></span>f(x)=+&infin;</span>.
            <br><strong>(ب)</strong> بين أن المستقيم <span class="math-inline">(&Delta;)</span> ذا المعادلة:
            <span class="math-inline">y=-x-2</span> مقارب مائل للمنحنى <span class="math-inline">(C<sub>f</sub>)</span> عند <span class="math-inline">-&infin;</span>.
            <br><strong>(ج)</strong> ادرس الوضع النسبي للمنحنى <span class="math-inline">(C<sub>f</sub>)</span> والمستقيم <span class="math-inline">(&Delta;)</span>.
          </li>
          <li>
            <strong>(أ)</strong> بين أنه من أجل كل عدد حقيقي <span class="math-inline">x</span>:
            <span class="math-line">f&prime;(x)=(e<sup>x</sup>-1)(2e<sup>x</sup>+1)</span>.
            <br><strong>(ب)</strong> استنتج اتجاه تغير الدالة <span class="math-inline">f</span> ثم شكّل جدول تغيراتها.
          </li>
          <li>
            بين أن المنحنى <span class="math-inline">(C<sub>f</sub>)</span> يقبل مماساً <span class="math-inline">(T)</span> موازياً للمستقيم <span class="math-inline">(&Delta;)</span>، يطلب تعيين معادلة له.
          </li>
          <li>
            أثبت أن المعادلة <span class="math-inline">f(x)=0</span> تقبل حلين فقط <span class="math-inline">&alpha;</span> و <span class="math-inline">&beta;</span> تحققان:
            <span class="math-line">-2.2&lt;&alpha;&lt;-2.1</span> و <span class="math-line">0.8&lt;&beta;&lt;0.9</span>.
          </li>
          <li>
            بين أن المنحنى <span class="math-inline">(C<sub>f</sub>)</span> يقبل نقطة انعطاف، يطلب تعيين إحداثييها.
          </li>
          <li>
            <strong>(أ)</strong> أرسم <span class="math-inline">(&Delta;)</span> و <span class="math-inline">(T)</span> و <span class="math-inline">(C<sub>f</sub>)</span>.
            <br><strong>(ب)</strong> ناقش بيانيا وحسب قيم العدد الحقيقي <span class="math-inline">m</span> عدد حلول المعادلة:
            <span class="math-line">e<sup>2x</sup>-e<sup>x</sup>-m-2=0</span>.
          </li>
          <li>
            احسب بالسنتيمتر المربع مساحة الحيز المستوي المحدد بالمنحنى <span class="math-inline">(C<sub>f</sub>)</span>
            والمستقيمات التي معادلاتها:
            <span class="math-line">y=-x-2</span> و <span class="math-line">x=-1</span> و <span class="math-line">x=0</span>.
          </li>
        </ol>
      </section>
    `,
    solution: `
      <h3>الحل التفصيلي</h3>

      <h4>I - النهايات والمقارب</h4>
      <ol>
        <li>
          عند <span class="math-inline">x&rarr;-&infin;</span> لدينا
          <span class="math-inline">e<sup>x</sup>&rarr;0</span> و
          <span class="math-inline">e<sup>2x</sup>&rarr;0</span>، ومنه
          <span class="math-inline">f(x)&sim -x-2</span>، إذن:
          <span class="math-line"><span class="lim"><strong>lim</strong><small>x&rarr;-&infin;</small></span>f(x)=+&infin;</span>.
          وعند <span class="math-inline">+&infin;</span> الحد
          <span class="math-inline">e<sup>2x</sup></span> هو الغالب، لذلك:
          <span class="math-line"><span class="lim"><strong>lim</strong><small>x&rarr;+&infin;</small></span>f(x)=+&infin;</span>.
        </li>
        <li>
          نحسب:
          <span class="math-line">f(x)-(-x-2)=e<sup>2x</sup>-e<sup>x</sup></span>.
          وعند <span class="math-inline">x&rarr;-&infin;</span> يؤول هذا الفرق إلى
          <span class="math-inline">0</span>، إذن:
          <span class="math-line">&Delta;: y=-x-2</span>
          مستقيم مقارب مائل للمنحنى عند <span class="math-inline">-&infin;</span>.
        </li>
        <li>
          لدينا:
          <span class="math-line">f(x)-(-x-2)=e<sup>x</sup>(e<sup>x</sup>-1)</span>.
          وبما أن <span class="math-inline">e<sup>x</sup>&gt;0</span>، فإن
          <span class="math-inline">(C<sub>f</sub>)</span> تحت
          <span class="math-inline">(&Delta;)</span> إذا <span class="math-inline">x&lt;0</span>،
          يقطعه عند <span class="math-inline">x=0</span>، وفوقه إذا
          <span class="math-inline">x&gt;0</span>.
        </li>
      </ol>

      <h4>II - المشتقة والتغيرات</h4>
      <ol>
        <li>
          بالاشتقاق:
          <span class="math-line">f&prime;(x)=2e<sup>2x</sup>-e<sup>x</sup>-1</span>.
          وبالتحليل:
          <span class="math-line">2e<sup>2x</sup>-e<sup>x</sup>-1=(e<sup>x</sup>-1)(2e<sup>x</sup>+1)</span>.
        </li>
        <li>
          بما أن <span class="math-inline">2e<sup>x</sup>+1&gt;0</span>، فإن إشارة
          <span class="math-inline">f&prime;(x)</span> هي إشارة
          <span class="math-inline">e<sup>x</sup>-1</span>.
          إذن <span class="math-inline">f</span> متناقصة على
          <span class="math-inline">]-&infin;,0]</span> ومتزايدة على
          <span class="math-inline">[0,+&infin;[</span>، وقيمتها الصغرى:
          <span class="math-line">f(0)=-2</span>.
          <table class="variation-table" aria-label="جدول تغيرات الدالة f">
            <tr>
              <th>x</th>
              <td class="interval">-&infin;</td>
              <td class="interval">0</td>
              <td class="interval">+&infin;</td>
            </tr>
            <tr>
              <th>f&prime;(x)</th>
              <td>-</td>
              <td>0</td>
              <td>+</td>
            </tr>
            <tr>
              <th>f(x)</th>
              <td>+&infin;</td>
              <td><span class="var-arrow">↘</span> −2 <span class="var-arrow">↗</span></td>
              <td>+&infin;</td>
            </tr>
          </table>
        </li>
      </ol>

      <h4>III - المماس والجذور والانعطاف</h4>
      <ol>
        <li>
          المماس الموازي لـ <span class="math-inline">&Delta;</span> ميله
          <span class="math-inline">-1</span>، فنحل:
          <span class="math-line">f&prime;(x)=-1</span>.
          أي:
          <span class="math-line">2e<sup>2x</sup>-e<sup>x</sup>=0</span>
          ومنه <span class="math-inline">e<sup>x</sup>=1/2</span>، أي
          <span class="math-line">x=-ln2</span>.
          كما أن:
          <span class="math-line">f(-ln2)=ln2-9/4</span>.
          إذن:
          <span class="math-line">T: y=-x-9/4</span>.
        </li>
        <li>
          من جدول التغيرات وكون <span class="math-inline">f(0)=-2&lt;0</span> مع
          نهايتي الطرفين <span class="math-inline">+&infin;</span>، تقبل المعادلة
          <span class="math-inline">f(x)=0</span> حلين فقط:
          <span class="math-inline">&alpha&lt;0</span> و <span class="math-inline">&beta&gt;0</span>.
          وبالتعويض نجد:
          <span class="math-line">f(-2.2)&gt;0,\ f(-2.1)&lt;0</span>
          و
          <span class="math-line">f(0.8)&lt;0,\ f(0.9)&gt;0</span>،
          ومنه:
          <span class="math-line">-2.2&lt;&alpha;&lt;-2.1,\quad 0.8&lt;&beta;&lt;0.9</span>.
        </li>
        <li>
          نحسب:
          <span class="math-line">f&Prime;(x)=4e<sup>2x</sup>-e<sup>x</sup>=e<sup>x</sup>(4e<sup>x</sup>-1)</span>.
          تتغير إشارة <span class="math-inline">f&Prime;</span> عند
          <span class="math-inline">e<sup>x</sup>=1/4</span> أي:
          <span class="math-line">x=-ln4</span>.
          إذن نقطة الانعطاف هي:
          <span class="math-line">I(-ln4,\ ln4-35/16)</span>.
        </li>
      </ol>

      <figure style="margin:18px auto;max-width:520px;text-align:center;">
        <svg viewBox="0 0 520 360" role="img" aria-label="رسم المنحنى Cf والمستقيمين Delta و T" style="width:100%;height:auto;background:#fff;border:1px solid #111;">
          <defs>
            <marker id="arrow-science-2025" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 Z" fill="#111"></path>
            </marker>
          </defs>
          <g stroke="#d6d6d6" stroke-width="1">
            <line x1="35" y1="40" x2="485" y2="40"></line>
            <line x1="35" y1="90" x2="485" y2="90"></line>
            <line x1="35" y1="140" x2="485" y2="140"></line>
            <line x1="35" y1="190" x2="485" y2="190"></line>
            <line x1="35" y1="240" x2="485" y2="240"></line>
            <line x1="35" y1="290" x2="485" y2="290"></line>
            <line x1="70" y1="24" x2="70" y2="315"></line>
            <line x1="150" y1="24" x2="150" y2="315"></line>
            <line x1="230" y1="24" x2="230" y2="315"></line>
            <line x1="310" y1="24" x2="310" y2="315"></line>
            <line x1="390" y1="24" x2="390" y2="315"></line>
            <line x1="470" y1="24" x2="470" y2="315"></line>
          </g>
          <g stroke="#111" stroke-width="2.2" marker-end="url(#arrow-science-2025)">
            <line x1="32" y1="190" x2="492" y2="190"></line>
            <line x1="390" y1="318" x2="390" y2="24"></line>
          </g>
          <path d="M70 90 L150 140 L230 190 L310 240 L390 290 L470 340" fill="none" stroke="#111" stroke-width="3" stroke-dasharray="8 6"></path>
          <path d="M70 102.5 L150 152.5 L230 202.5 L310 252.5 L390 302.5 L470 352.5" fill="none" stroke="#666" stroke-width="3" stroke-dasharray="3 6"></path>
          <path d="M70 89 C105 111 137 132 170 154 C205 178 235 200 265 220 C300 243 328 260 350 277 C365 288 378 292 390 290 C418 284 443 244 468 108" fill="none" stroke="#0057c2" stroke-width="4" stroke-linecap="round"></path>
          <circle cx="218" cy="186" r="4.5" fill="#0057c2"></circle>
          <circle cx="458" cy="160" r="4.5" fill="#0057c2"></circle>
          <circle cx="335" cy="264" r="4.5" fill="#9a3412"></circle>
          <circle cx="279" cy="229" r="4.5" fill="#047857"></circle>
          <g font-family="Times New Roman, serif" font-size="16" fill="#111">
            <text x="486" y="207">x</text>
            <text x="398" y="34">y</text>
            <text x="382" y="208">0</text>
            <text x="64" y="208">-4</text>
            <text x="144" y="208">-3</text>
            <text x="224" y="208">-2</text>
            <text x="304" y="208">-1</text>
            <text x="468" y="208">1</text>
            <text x="396" y="95">2</text>
            <text x="396" y="145">1</text>
            <text x="398" y="244">-1</text>
            <text x="398" y="294">-2</text>
            <text x="91" y="76">Δ: y=-x-2</text>
            <text x="103" y="120">T: y=-x-9/4</text>
            <text x="438" y="91">(C<tspan baseline-shift="sub" font-size="11">f</tspan>)</text>
            <text x="193" y="178">α</text>
            <text x="466" y="154">β</text>
            <text x="262" y="222">I</text>
          </g>
        </svg>
        <figcaption style="font-size:16px;margin-top:8px;">
          رسم تقريبي لـ <span class="math-inline">(C<sub>f</sub>)</span> مع
          <span class="math-inline">&Delta;: y=-x-2</span> و
          <span class="math-inline">T: y=-x-9/4</span>.
        </figcaption>
      </figure>

      <h4>IV - المناقشة والمساحة</h4>
      <ol>
        <li>
          المعادلة
          <span class="math-line">e<sup>2x</sup>-e<sup>x</sup>-m-2=0</span>
          تكافئ <span class="math-inline">&varphi;(x)=m</span> حيث:
          <span class="math-line">&varphi(x)=e<sup>2x</sup>-e<sup>x</sup>-2</span>.
          لهذه الدالة قيمة صغرى عند <span class="math-inline">x=-ln2</span> تساوي:
          <span class="math-line">-9/4</span>، كما أن
          <span class="math-line"><span class="lim"><strong>lim</strong><small>x&rarr;-&infin;</small></span>&varphi(x)=-2</span>.
          إذن عدد الحلول هو:
          <span class="math-line">m&lt;-9/4</span>: لا حل؛
          <span class="math-line">m=-9/4</span>: حل وحيد؛
          <span class="math-line">-9/4&lt;m&lt;-2</span>: حلان؛
          <span class="math-line">m&ge;-2</span>: حل وحيد.
        </li>
        <li>
          على <span class="math-inline">[-1,0]</span> يكون المنحنى تحت المستقيم
          <span class="math-inline">y=-x-2</span>، لذلك:
          <span class="math-line">A=4&int;<sub>-1</sub><sup>0</sup>((-x-2)-f(x))dx</span>.
          ومنه:
          <span class="math-line">A=4&int;<sub>-1</sub><sup>0</sup>(e<sup>x</sup>-e<sup>2x</sup>)dx</span>.
          إذن:
          <span class="math-line">A=4[\,e<sup>x</sup>-<span style="display:inline-block;vertical-align:middle;text-align:center;"><span>e<sup>2x</sup></span><span style="display:block;border-top:1px solid #fff;">2</span></span>\,]<sub>-1</sub><sup>0</sup></span>
          وبالتالي:
          <span class="math-line">A=2-4/e+2/e<sup>2</sup>=2(1-1/e)<sup>2</sup> cm<sup>2</sup></span>.
        </li>
      </ol>
    `
  },
  {
    id: "science-2025-log-exp-topic2",
    title: "موضوع بكالوريا الجزائر 2025 - علوم تجريبية الموضوع الثاني",
    branch: "science",
    year: "2025",
    date: "2025",
    source: "inline",
    file: "",
    tags: ["ln", "study-functions", "equations", "area"],
    summary: "الموضوع الثاني من بكالوريا 2025 لشعبة علوم تجريبية: دوال لوغارتمية، إشارة، نهايات، دراسة تغيرات، تقاطعات، مناقشة بيانية، ومساحة.",
    statement: `
      <section class="statement-block">
        <h3>بكالوريا 2025 - شعبة علوم تجريبية - الموضوع الثاني</h3>
        <p><strong>الجزء الأول (I):</strong></p>
        <p>
          عرّفت الدالة <span class="math-inline">g</span> على <span class="math-inline">]-4,+&infin;[</span> بـ:
          <span class="math-line">g(x)=<span class="frac"><span class="num">x<sup>2</sup>+(x<sup>2</sup>+8x)ln(x+4)</span><span class="den">x+4</span></span></span>.
        </p>
        <p>
          و <span class="math-inline">(C<sub>g</sub>)</span> تمثيلها البياني في الشكل المقابل، يقطع محور الفواصل في نقطتين فاصلتاهما
          <span class="math-inline">&alpha;</span> و <span class="math-inline">&beta;</span>.
        </p>
        <ol>
          <li>
            <strong>(أ)</strong> بقراءة منحنية، جد إشارة <span class="math-inline">g(x)</span> على <span class="math-inline">]-4,+&infin;[</span>.
          </li>
          <li>
            تبقّ أن: <span class="math-line">-2.4&lt;&alpha;&lt;-2.3</span>.
          </li>
        </ol>
        <p><strong>الجزء الثاني (II):</strong></p>
        <p>
          <span class="math-inline">f</span> الدالة المعرفة على <span class="math-inline">]-4,+&infin;[</span> بـ:
          <span class="math-line">f(x)=<span class="frac"><span class="num">x<sup>2</sup>ln(x+4)</span><span class="den">x+4</span></span></span>.
        </p>
        <p>
          و <span class="math-inline">(C<sub>f</sub>)</span> تمثيلها البياني في المستوى المنسوب إلى المعلم المتعامد والمتجانس
          <span class="math-inline">(O; i, j)</span>.
        </p>
        <ol>
          <li>
            أحسب <span class="math-line"><span class="lim"><strong>lim</strong><small>x&rarr;-4<sup>+</sup></small></span>f(x)</span>
            و <span class="math-line"><span class="lim"><strong>lim</strong><small>x&rarr;+&infin;</small></span>f(x)</span>.
          </li>
          <li>
            <strong>(أ)</strong> بين أنه من أجل كل <span class="math-inline">x</span> من <span class="math-inline">]-4,+&infin;[</span>:
            <span class="math-line">f&prime;(x)=g(x)</span>.
            <br><strong>(ب)</strong> استنتج اتجاه تغير الدالة <span class="math-inline">f</span> ثم شكّل جدول تغيراتها.
            <br><strong>(ج)</strong> عيّن فاصيلي نقاط تقاطع <span class="math-inline">(C<sub>f</sub>)</span> مع محور الفواصل.
          </li>
          <li>
            <strong>(أ)</strong> احسب <span class="math-inline">f(2)</span> و <span class="math-inline">f&prime;(4)</span> ثم ارسم <span class="math-inline">(C<sub>f</sub>)</span>.
            (نافذة: <span class="math-inline">f(&alpha;)=2.7</span>)
            <br><strong>(ب)</strong> عيّن قيم العدد الحقيقي الموجب <span class="math-inline">m</span> التي تعطي المعادلة:
            <span class="math-line">f(x)=ln m</span> ثلاثة حلول مختلفة.
          </li>
          <li>
            <span class="math-inline">h</span> الدالة المعرفة على <span class="math-inline">]-4,+&infin;[</span> بـ:
            <span class="math-line">h(x)=<span class="frac"><span class="num">(x<sup>2</sup>+1)ln(x+4)</span><span class="den">x+4</span></span></span>،
            و <span class="math-inline">(C<sub>h</sub>)</span> تمثيلها البياني.
            <br><strong>(أ)</strong> بين أنه من أجل كل <span class="math-inline">x</span> من <span class="math-inline">[-3,0]</span>:
            <span class="math-line">h(x)-f(x)&ge;0</span>.
            <br><strong>(ب)</strong> احسب مساحة الحيز المستوي المحدد بـ
            <span class="math-inline">(C<sub>f</sub>)</span> و <span class="math-inline">(C<sub>h</sub>)</span>
            والمستقيمين ذوي المعادلتين <span class="math-line">x=-3</span> و <span class="math-line">x=0</span>.
          </li>
        </ol>
      </section>
    `,
    solution: ""
  },
  {
    id: "science-2024-exp-function-cycle",
    title: "موضوع بكالوريا الجزائر 2024 - علوم تجريبية - دورة 2024 - التمرين 16",
    branch: "science",
    year: "2024",
    date: "2024",
    source: "learn-exp-function",
    file: "",
    tags: ["exp", "study-functions", "asymptotes", "tangents", "discussion"],
    summary: "تمرين من دورة 2024 - التمرين 16 لشعبة علوم تجريبية من باب الدالة الأسية، منقول من باب التعلم إلى أرشيف بكالوريا الجزائر حسب الدورة.",
    statement: `
      <section class="statement-block">
        <h3>بكالوريا الجزائر 2024 - شعبة علوم تجريبية - دورة 2024 - التمرين 16</h3>
        <div><span>الجزء الأول (I):</span></div>
                                <p>يمثل الجدول المقابل تغيرات الدالة <span class="math-inline">g</span> المعرفة على <span class="math-inline">R</span> بـ:</p>
                                <p>
                                    <span class="math-line">g(x) = xe<sup>-x+1</sup> - 2</span>
                                </p>
                                <table class="variation-table" aria-label="جدول تغيرات الدالة g">
                                    <tbody>
                                        <tr>
                                            <th>x</th>
                                            <td>-&infin;</td>
                                            <td>1</td>
                                            <td>+&infin;</td>
                                        </tr>
                                        <tr>
                                            <th>g&prime;(x)</th>
                                            <td>+</td>
                                            <td>0</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <th>g(x)</th>
                                            <td>-&infin;</td>
                                            <td><span class="var-arrow">&nearrow;</span> g(1) <span class="var-arrow">&searrow;</span></td>
                                            <td>-2</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <ol>
                                    <li>احسب <span class="math-inline">g(1)</span> ثم استنتج إشارة <span class="math-inline">g(x)</span>.</li>
                                </ol>
                                <div><span>الجزء الثاني (II):</span></div>
                                <p>الدالة العددية <span class="math-inline">f</span> المعرفة على <span class="math-inline">R</span> بـ: <span class="math-inline">f(x) = -2x + 3 - xe<sup>-x+1</sup></span>.</p>
                                <p>و <span class="math-inline">(C<sub>f</sub>)</span> تمثيلها البياني في المستوي المنسوب إلى معلم متعامد ومتجانس <span class="math-inline">(O; i, j)</span> (وحدة الطول <span class="math-inline">2cm</span>).</p>
                                <ol>
                                    <li>أ) أحسب <span class="math-inline">lim<sub>x &rarr; -&infin;</sub> f(x)</span> و <span class="math-inline">lim<sub>x &rarr; +&infin;</sub> f(x)</span>.</li>
                                    <li>ب) بين أن المستقيم <span class="math-inline">(&Delta;)</span> ذو المعادلة: <span class="math-inline">y = -2x + 3</span> مقارب مائل للمنحنى <span class="math-inline">(C<sub>f</sub>)</span>.<br>ثم ادرس وضعية المنحنى <span class="math-inline">(C<sub>f</sub>)</span> بالنسبة للمستقيم <span class="math-inline">(&Delta;)</span>.</li>
                                    <li>أ) بين أنه من أجل كل عدد حقيقي <span class="math-inline">x</span>: <span class="math-inline">f'(x) = g(x) - e<sup>-x+1</sup></span>.</li>
                                    <li>ب) استنتج اتجاه تغير الدالة <span class="math-inline">f</span> ، ثم شكل جدول تغيرات الدالة <span class="math-inline">f</span>.</li>
                                    <li>بين أن <span class="math-inline">(C<sub>f</sub>)</span> يقبل مماساً <span class="math-inline">(T)</span> موازياً للمستقيم <span class="math-inline">(&Delta;)</span> يطلب تعيين معادلة له.</li>
                                    <li>أ) أرسم <span class="math-inline">(T)</span> و <span class="math-inline">(&Delta;)</span> و <span class="math-inline">(C<sub>f</sub>)</span>.</li>
                                    <li>ب) عين قيم الوسيط الحقيقي <span class="math-inline">m</span> التي من اجلها يكون للمعادلة <span class="math-inline">f(x) = -2x + m</span> حلين مختلفين.</li>
                                </ol>
      </section>
    `
  },
  {
    id: "science-2024-topic-2-ln-area",
    title: "موضوع بكالوريا الجزائر 2024 - علوم تجريبية الموضوع الثاني",
    branch: "science",
    year: "2024",
    date: "2024",
    source: "inline",
    file: "",
    tags: ["ln", "study-functions", "tangents", "discussion", "area"],
    summary: "الموضوع الثاني من بكالوريا 2024 لشعبة علوم تجريبية: دالة لوغارتمية على ]0,+∞[، قراءة بيانية لإشارة دالة مساعدة، نهايات، اشتقاق، مقارب مائل، مماس، مناقشة بيانية، ومساحة.",
    statement: `
      <section class="statement-block">
        <h3>بكالوريا الجزائر 2024 - شعبة علوم تجريبية - الموضوع الثاني</h3>
        <div><span>الجزء الأول (I):</span></div>
        <p>
          لتكن <span class="math-inline">g</span> الدالة المعرفة على المجال
          <span class="math-inline">]0,+&infin;[</span> كما يلي:
          <span class="math-line">g(x)=<span class="frac"><span class="num">1</span><span class="den">2</span></span>x<sup>3</sup>+
          <span class="frac"><span class="num">1</span><span class="den">2</span></span>-ln x</span>
        </p>
        <p>
          و <span class="math-inline">(C<sub>g</sub>)</span> تمثيلها البياني كما في الشكل.
        </p>
        <div class="official-exam-note">
          <strong>قراءة الشكل:</strong>
          يظهر منحنى <span class="math-inline">(C<sub>g</sub>)</span> فوق محور الفواصل على
          <span class="math-inline">]0,+&infin;[</span>، وله قيمة صغرى موجبة قرب
          <span class="math-inline">x=1</span>.
        </div>
        <ol>
          <li>بقراءة بيانية، عين إشارة <span class="math-inline">g(x)</span> على <span class="math-inline">]0,+&infin;[</span>.</li>
        </ol>

        <div><span>الجزء الثاني (II):</span></div>
        <p>
          لتكن <span class="math-inline">f</span> الدالة المعرفة على <span class="math-inline">]0,+&infin;[</span> بـ:
          <span class="math-line">f(x)=x+<span class="frac"><span class="num">ln x</span><span class="den">x<sup>2</sup></span></span></span>
        </p>
        <p>
          و <span class="math-inline">(C<sub>f</sub>)</span> تمثيلها البياني في المستوي المنسوب إلى معلم متعامد ومتجانس
          <span class="math-inline">(O; i, j)</span>.
        </p>
        <ol>
          <li>
            احسب
            <span class="math-inline">lim<sub>x &rarr; 0<sup>+</sup></sub> f(x)</span>
            و
            <span class="math-inline">lim<sub>x &rarr; +&infin;</sub> f(x)</span>.
          </li>
          <li>
            <strong>أ)</strong> بين أنه من أجل كل عدد حقيقي <span class="math-inline">x</span> من
            <span class="math-inline">]0,+&infin;[</span>:
            <span class="math-line">f&prime;(x)=<span class="frac"><span class="num">2g(x)</span><span class="den">x<sup>3</sup></span></span></span>
            <br>
            <strong>ب)</strong> استنتج اتجاه تغير الدالة <span class="math-inline">f</span> ثم شكل جدول تغيراتها.
            <br>
            <strong>ج)</strong> بين أن المعادلة <span class="math-inline">f(x)=0</span> تقبل حلا وحيدا
            <span class="math-inline">&alpha;</span> حيث
            <span class="math-inline">0.7&lt;&alpha;&lt;0.71</span>.
          </li>
          <li>
            <strong>أ)</strong> بين أن المنحنى <span class="math-inline">(C<sub>f</sub>)</span> يقبل مستقيما مقاربا مائلا
            <span class="math-inline">(&Delta;)</span> يطلب تعيين معادلته.
            <br>
            <strong>ب)</strong> ادرس وضعية المنحنى <span class="math-inline">(C<sub>f</sub>)</span> بالنسبة إلى المستقيم
            <span class="math-inline">(&Delta;)</span>.
          </li>
          <li>
            بين أن المنحنى <span class="math-inline">(C<sub>f</sub>)</span> يقبل مماسا
            <span class="math-inline">(T)</span> عند النقطة ذات الفاصلة <span class="math-inline">1</span>، ثم عين معادلته.
          </li>
          <li>
            <strong>أ)</strong> ارسم <span class="math-inline">(&Delta;)</span> و
            <span class="math-inline">(T)</span> و <span class="math-inline">(C<sub>f</sub>)</span>.
            <br>
            <strong>ب)</strong> ناقش بيانيا، حسب قيم الوسيط الحقيقي <span class="math-inline">m</span>، عدد حلول المعادلة:
            <span class="math-line"><span class="frac"><span class="num">ln x</span><span class="den">x<sup>2</sup></span></span>=m</span>
          </li>
          <li>
            <strong>أ)</strong> بين أن الدالة
            <span class="math-line">H(x)=x-<span class="frac"><span class="num">ln x+1</span><span class="den">x</span></span></span>
            دالة أصلية للدالة
            <span class="math-line">h(x)=1+<span class="frac"><span class="num">ln x</span><span class="den">x<sup>2</sup></span></span></span>
            على <span class="math-inline">]0,+&infin;[</span>.
            <br>
            <strong>ب)</strong> احسب، بدلالة <span class="math-inline">&alpha;</span>، مساحة الحيز المستوي المحدد بالمنحنى
            <span class="math-inline">(C<sub>f</sub>)</span> والمستقيمات ذات المعادلات:
            <span class="math-line">x=1 ، x=&alpha; ، y=x</span>
          </li>
        </ol>
      </section>
    `,
    solution: ""
  },
  {
    id: "science-2023-exp-function-cycle",
    title: "موضوع بكالوريا الجزائر 2023 - علوم تجريبية - دورة 2023 - التمرين 17",
    branch: "science",
    year: "2023",
    date: "2023",
    source: "learn-exp-function",
    file: "",
    tags: ["exp", "study-functions", "asymptotes", "tangents", "discussion"],
    summary: "تمرين من دورة 2023 - التمرين 17 لشعبة علوم تجريبية من باب الدالة الأسية، منقول من باب التعلم إلى أرشيف بكالوريا الجزائر حسب الدورة.",
    statement: `
      <section class="statement-block">
        <h3>بكالوريا الجزائر 2023 - شعبة علوم تجريبية - دورة 2023 - التمرين 17</h3>
        <div><span>الجزء الأول (I):</span></div>
                                <p>التمثيل البياني للدالة <span class="math-inline">x \mapsto 2x - 1</span> و <span class="math-inline">(D)</span> المستقيم ذو المعادلة <span class="math-inline">y=1</span>.</p>
                                <p><span class="math-inline">&alpha;</span> هي فاصلة نقطة تقاطع <span class="math-inline">(&Gamma;)</span> و <span class="math-inline">(D)</span>.</p>
                                <svg viewBox="0 0 360 260" role="img" aria-label="بيان المنحنى Gamma والمستقيم D في موضوع 2023 علوم تجريبية" style="width:min(360px,100%);height:auto;background:#fff;border:1px solid #111;border-radius:8px;direction:ltr;">
                                  <defs>
                                    <pattern id="science2023Grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#d2d6dc" stroke-width="1"/>
                                    </pattern>
                                  </defs>
                                  <rect x="20" y="20" width="300" height="200" fill="url(#science2023Grid)"/>
                                  <path d="M20 100 H320" stroke="#111" stroke-width="2"/>
                                  <path d="M140 20 V220" stroke="#111" stroke-width="2"/>
                                  <path d="M20 60 H320" stroke="#111" stroke-width="2.4"/>
                                  <text x="292" y="94" fill="#111" font-size="15" font-family="Arial">(D)</text>
                                  <path d="M20 108 C58 112 101 126 140 140 C158 139 172 118 180 100 C186 85 190 69 196 60 C202 50 207 33 212 10"
                                    fill="none" stroke="#111" stroke-width="3" stroke-linecap="round"/>
                                  <text x="84" y="154" fill="#111" font-size="15" font-family="Arial">(&Gamma;)</text>
                                  <path d="M196 60 V100" stroke="#111" stroke-width="1.5" stroke-dasharray="5 4"/>
                                  <circle cx="196" cy="60" r="4" fill="#111"/>
                                  <text x="190" y="118" fill="#111" font-size="14" font-family="Arial">&alpha;</text>
                                  <text x="326" y="104" fill="#111" font-size="14" font-family="Arial">x</text>
                                  <text x="88" y="17" fill="#111" font-size="14" font-family="Arial">y</text>
                                  <text x="126" y="116" fill="#111" font-size="13" font-family="Arial">0</text>
                                  <text x="145" y="238" fill="#111" font-size="13" font-family="Arial">0.6 &lt; &alpha; &lt; 0.7</text>
                                </svg>
                                <ol>
                                    <li>بقراءة بيانية، حدد وضعية <span class="math-inline">(&Gamma;)</span> بالنسبة إلى <span class="math-inline">(D)</span>.</li>
                                    <li>الدالة <span class="math-inline">g</span> المعرفة على <span class="math-inline">R</span> بـ: 
                                        <p>
                                            <span class="math-line">g(x) = (2x-1)e<sup>2x</sup> - 1</span>
                                        </p>
                                        استنتج حسب قيم <span class="math-inline">x</span> إشارة <span class="math-inline">g(x)</span> ثم تحقق أن: <span class="math-inline">0.6 < &alpha; < 0.7</span>.
                                    </li>
                                </ol>
                                <div><span>الجزء الثاني (II):</span></div>
                                <p>الدالة العددية <span class="math-inline">f</span> المعرفة على <span class="math-inline">R</span> بـ: <span class="math-inline">f(x) = (x-1)(e<sup>2x</sup> - 1)</span>.</p>
                                <p>و <span class="math-inline">(C<sub>f</sub>)</span> تمثيلها البياني في المستوي منسوب إلى معلم متعامد و متجانس <span class="math-inline">(O; i, j)</span>.</p>
                                <ol>
                                    <li>أحسب <span class="math-inline">lim<sub>x &rarr; -&infin;</sub> f(x)</span> و <span class="math-inline">lim<sub>x &rarr; +&infin;</sub> f(x)</span>.</li>
                                    <li>أ) بين أن المستقيم <span class="math-inline">(&Delta;)</span> ذو المعادلة: <span class="math-inline">y = -x + 1</span> مقارب مائل للمنحنى <span class="math-inline">(C<sub>f</sub>)</span>.</li>
                                    <li>ب) ادرس وضعية المنحنى <span class="math-inline">(C<sub>f</sub>)</span> بالنسبة للمستقيم <span class="math-inline">(&Delta;)</span>.</li>
                                    <li>أ) بين أنه من أجل كل عدد حقيقي <span class="math-inline">x</span>: <span class="math-inline">f'(x) = g(x)</span>.</li>
                                    <li>ب) استنتج أن <span class="math-inline">f</span> متناقصة تماما على <span class="math-inline">]-&infin;, &alpha;]</span> ومتزايدة تماما على <span class="math-inline">[&alpha;, +&infin;[</span> ، ثم شكل جدول تغيراتها.</li>
                                    <li>ج) بين أن <span class="math-inline">(C<sub>f</sub>)</span> يقبل مماساً <span class="math-inline">(T)</span> موازياً للمستقيم <span class="math-inline">(&Delta;)</span> يطلب تعيين معادلة له.</li>
                                    <li>أ) عين نقط تقاطع <span class="math-inline">(C<sub>f</sub>)</span> مع محور الفواصل.</li>
                                    <li>ب) أرسم <span class="math-inline">(T)</span> و <span class="math-inline">(&Delta;)</span> و <span class="math-inline">(C<sub>f</sub>)</span> (نأخذ <span class="math-inline">f(1.4) \approx 6.2</span> و <span class="math-inline">f(&alpha;) \approx -0.9</span>).</li>
                                    <li>ج) ناقش بيانيا، وحسب قيم الوسيط الحقيقي <span class="math-inline">m</span> عدد حلول المعادلة <span class="math-inline">f(x) = -x + m</span>.</li>
                                </ol>
      </section>
    `
  },
  {
    id: "science-2023-topic-2-ln-area",
    title: "موضوع بكالوريا الجزائر 2023 - علوم تجريبية الموضوع الثاني",
    branch: "science",
    year: "2023",
    date: "2023",
    source: "inline",
    file: "",
    tags: ["ln", "study-functions", "tangents", "area"],
    summary: "الموضوع الثاني من بكالوريا 2023 لشعبة علوم تجريبية: دراسة دالة لوغارتمية على ]0,+∞[، نهايات، اشتقاق، مماس، تقاطع، دالة أصلية، مساحة، وتحويل منحنى.",
    statement: `
      <section class="statement-block">
        <h3>بكالوريا الجزائر 2023 - شعبة علوم تجريبية - الموضوع الثاني</h3>
        <p>
          لتكن <span class="math-inline">f</span> الدالة المعرفة على المجال
          <span class="math-inline">]0,+&infin;[</span> بـ:
          <span class="math-line">f(x)=(ln x)<sup>2</sup>-3ln x</span>
        </p>
        <p>
          و <span class="math-inline">(C<sub>f</sub>)</span> تمثيلها البياني في المستوي المنسوب إلى معلم متعامد ومتجانس
          <span class="math-inline">(O; i, j)</span>.
        </p>
        <ol>
          <li>
            <strong>أ)</strong> احسب <span class="math-inline">f(1)</span> ثم فسر النتيجة هندسيا.
            <br>
            <strong>ب)</strong> احسب
            <span class="math-inline">lim<sub>x &rarr; 0<sup>+</sup></sub> f(x)</span>
            و
            <span class="math-inline">lim<sub>x &rarr; +&infin;</sub> f(x)</span>.
          </li>
          <li>
            <strong>أ)</strong> بين أنه من أجل كل <span class="math-inline">x</span> من
            <span class="math-inline">]0,+&infin;[</span>:
            <span class="math-line">f&prime;(x)=<span class="frac"><span class="num">3(-1+ln x)(1+ln x)</span><span class="den">x</span></span></span>
            <br>
            <strong>ب)</strong> بين أن
            <span class="math-inline">(-1+ln x)(1+ln x)&gt;0</span>
            على
            <span class="math-inline">]0;e<sup>-1</sup>[ &cup; ]e;+&infin;[</span>.
            <br>
            <strong>ج)</strong> استنتج اتجاه تغير الدالة <span class="math-inline">f</span> ثم شكل جدول تغيراتها على
            <span class="math-inline">]0,+&infin;[</span>.
          </li>
          <li>
            عين معادلة المماس <span class="math-inline">(T)</span> للمنحنى
            <span class="math-inline">(C<sub>f</sub>)</span> عند النقطة ذات الفاصلة
            <span class="math-inline">1</span>.
          </li>
          <li>
            <strong>أ)</strong> عين فواصل نقط تقاطع <span class="math-inline">(C<sub>f</sub>)</span> مع محور الفواصل.
            <br>
            <strong>ب)</strong> ارسم <span class="math-inline">(T)</span> و
            <span class="math-inline">(C<sub>f</sub>)</span> على المجال
            <span class="math-inline">]0;e<sup>3</sup>]</span>.
          </li>
          <li>
            الدالة <span class="math-inline">F</span> المعرفة على المجال
            <span class="math-inline">]0,+&infin;[</span> بـ:
            <span class="math-line">F(x)=x((ln x)<sup>2</sup>-3ln x+3ln x-3)</span>
            <br>
            <strong>أ)</strong> تحقق أن <span class="math-inline">F</span> دالة أصلية للدالة
            <span class="math-inline">f</span> على المجال <span class="math-inline">]0,+&infin;[</span>.
            <br>
            <strong>ب)</strong> احسب مساحة الحيز المستوي المحدد بالمنحنى
            <span class="math-inline">(C<sub>f</sub>)</span> ومحور الفواصل والمستقيمين ذوي المعادلتين:
            <span class="math-line">x=1 و x=e</span>
          </li>
          <li>
            لتكن <span class="math-inline">h</span> الدالة المعرفة على المجال
            <span class="math-inline">]0,+&infin;[</span> بـ:
            <span class="math-line">h(x)=(ln x)<sup>2</sup>-3|ln x|</span>
            و <span class="math-inline">(C<sub>h</sub>)</span> تمثيلها البياني في نفس المعلم.
            <br>
            بين كيف يمكن رسم <span class="math-inline">(C<sub>h</sub>)</span> انطلاقا من
            <span class="math-inline">(C<sub>f</sub>)</span> ثم ارسمه على المجال
            <span class="math-inline">]0;e<sup>3</sup>]</span>.
          </li>
        </ol>
      </section>
    `,
    solution: ""
  },
  {
    id: "science-2022-exp-function-cycle",
    title: "موضوع بكالوريا الجزائر 2022 - علوم تجريبية الموضوع الأول",
    branch: "science",
    year: "2022",
    date: "2022",
    source: "learn-exp-function",
    file: "",
    tags: ["exp", "study-functions", "asymptotes", "tangents", "discussion"],
    summary: "الموضوع الأول من بكالوريا 2022 لشعبة علوم تجريبية: قراءة بيانية لدالة أسية، مماس، مناقشة f(x)=x+m، تحديد وسيطين، وإنشاء منحنى دالة زوجية مرتبطة.",
    statement: `
      <section class="statement-block">
        <h3>بكالوريا الجزائر 2022 - شعبة علوم تجريبية - الموضوع الأول</h3>
        <div><span>التمرين الرابع</span></div>
                                <p>الدالة العددية <span class="math-inline">f</span> المعرفة على <span class="math-inline">R</span> بتمثيلها البياني <span class="math-inline">(C<sub>f</sub>)</span> في المستوي منسوب إلى معلم متعامد ومتجانس <span class="math-inline">(O; i, j)</span> و <span class="math-inline">(T)</span> مماس لـ <span class="math-inline">(C<sub>f</sub>)</span> في النقطة ذات الفاصلة <span class="math-inline">0</span> كما هو مبين في الشكل.</p>
                                <svg viewBox="0 0 420 260" role="img" aria-label="بيان الدالة f والمماس T في موضوع 2022 علوم تجريبية" style="width:min(420px,100%);height:auto;background:#fff;border:1px solid #111;border-radius:8px;direction:ltr;">
                                  <defs>
                                    <pattern id="science2022Grid" width="32" height="32" patternUnits="userSpaceOnUse">
                                      <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#d3d7dd" stroke-width="1"/>
                                    </pattern>
                                  </defs>
                                  <rect x="20" y="20" width="360" height="208" fill="url(#science2022Grid)"/>
                                  <path d="M20 148 H380" stroke="#111" stroke-width="2"/>
                                  <path d="M188 20 V228" stroke="#111" stroke-width="2"/>
                                  <path d="M40 188 L360 28" stroke="#111" stroke-width="1.8" stroke-dasharray="6 5"/>
                                  <text x="330" y="42" fill="#111" font-size="14" font-family="Arial">y=x-1</text>
                                  <path d="M118 228 L228 20" stroke="#111" stroke-width="2.2"/>
                                  <text x="230" y="34" fill="#111" font-size="15" font-family="Arial">(T)</text>
                                  <path d="M24 204 C66 184 107 164 148 144 C166 135 180 127 188 116 C196 104 202 86 210 58 C217 34 224 21 234 20"
                                    fill="none" stroke="#111" stroke-width="3" stroke-linecap="round"/>
                                  <text x="238" y="58" fill="#111" font-size="15" font-family="Arial">(C<tspan baseline-shift="sub" font-size="10">f</tspan>)</text>
                                  <circle cx="188" cy="116" r="4" fill="#111"/>
                                  <text x="192" y="132" fill="#111" font-size="13" font-family="Arial">f(0)</text>
                                  <text x="384" y="152" fill="#111" font-size="14" font-family="Arial">x</text>
                                  <text x="176" y="18" fill="#111" font-size="14" font-family="Arial">y</text>
                                  <text x="176" y="162" fill="#111" font-size="13" font-family="Arial">0</text>
                                </svg>
                                <ol>
                                    <li>بقراءة بيانية: عين <span class="math-inline">f(0)</span> و <span class="math-inline">lim<sub>x &rarr; -&infin;</sub> f(x)</span> وأعط معادلة <span class="math-inline">(T)</span>.</li>
                                    <li>ناقش بيانيا، وحسب قيم الوسيط الحقيقي <span class="math-inline">m</span> عدد حلول المعادلة <span class="math-inline">f(x) = x + m</span>.</li>
                                    <li>إذا علمت أن <span class="math-inline">f(x)=x+ae<sup>2x</sup>+b</span>: بين أن <span class="math-inline">a=1</span> و <span class="math-inline">b=-1</span>، ثم اكتب عبارة <span class="math-inline">f(x)</span>.</li>
                                    <li>الدالة العددية <span class="math-inline">g</span> المعرفة على <span class="math-inline">R</span> بـ: 
                                        <p>
                                            <span class="math-line">g(x) = (x<sup>2</sup> + 1)e<sup>|x|</sup> - 1</span>
                                        </p>
                                        و <span class="math-inline">(C<sub>g</sub>)</span> تمثيلها البياني في المعلم السابق.<br>بين أن الدالة <span class="math-inline">g</span> زوجية ثم اشرح كيفية إنشاء <span class="math-inline">(C<sub>g</sub>)</span> انطلاقا من <span class="math-inline">(C<sub>f</sub>)</span> ، ثم أنشئ <span class="math-inline">(C<sub>g</sub>)</span>.
                                    </li>
                                </ol>
      </section>
    `
  },
  {
    id: "science-2022-topic-2-ln-abs",
    title: "موضوع بكالوريا الجزائر 2022 - علوم تجريبية الموضوع الثاني",
    branch: "science",
    year: "2022",
    date: "2022",
    source: "inline",
    file: "",
    tags: ["ln", "study-functions", "tangents", "discussion", "absolute-value"],
    summary: "الموضوع الثاني من بكالوريا 2022 لشعبة علوم تجريبية: دالة لوغارتمية، قراءة بيانية، مماس، تحديد وسيط، مناقشة معادلة، ودالة بالقيمة المطلقة.",
    statement: `
      <section class="statement-block">
        <h3>بكالوريا الجزائر 2022 - شعبة علوم تجريبية - الموضوع الثاني</h3>
        <div><span>التمرين الرابع</span></div>
        <p>
          لتكن <span class="math-inline">f</span> الدالة المعرفة على
          <span class="math-inline">]-1,+&infin;[</span> بـ:
          <span class="math-line">f(x)=ax-2ln(x+1)+b</span>
          حيث <span class="math-inline">a</span> و <span class="math-inline">b</span> عددان حقيقيان.
        </p>
        <p>
          و <span class="math-inline">(C<sub>f</sub>)</span> تمثيلها البياني في المستوي المنسوب إلى معلم متعامد ومتجانس
          <span class="math-inline">(O; i, j)</span>، و <span class="math-inline">(T)</span> مماس لـ
          <span class="math-inline">(C<sub>f</sub>)</span> عند النقطة ذات الفاصلة <span class="math-inline">0</span>.
        </p>
        <svg viewBox="0 0 360 260" role="img" aria-label="بيان الدالة f والمماس T في موضوع 2022 علوم تجريبية الموضوع الثاني" style="width:min(360px,100%);height:auto;background:#fff;border:1px solid #111;border-radius:8px;direction:ltr;">
          <defs>
            <pattern id="science2022Topic2Grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#d3d7dd" stroke-width="1"/>
            </pattern>
          </defs>
          <rect x="18" y="18" width="304" height="210" fill="url(#science2022Topic2Grid)"/>
          <path d="M18 116 H322" stroke="#111" stroke-width="2"/>
          <path d="M116 18 V228" stroke="#111" stroke-width="2"/>
          <path d="M42 28 L238 224" stroke="#111" stroke-width="2.2"/>
          <text x="52" y="52" fill="#111" font-size="15" font-family="Arial">(T)</text>
          <path d="M46 22 C57 55 72 88 94 112 C112 132 137 145 169 148 C204 151 243 134 306 92"
            fill="none" stroke="#111" stroke-width="3" stroke-linecap="round"/>
          <text x="246" y="102" fill="#111" font-size="15" font-family="Arial">(C<tspan baseline-shift="sub" font-size="10">f</tspan>)</text>
          <circle cx="116" cy="116" r="4" fill="#111"/>
          <text x="120" y="132" fill="#111" font-size="13" font-family="Arial">O</text>
          <text x="326" y="120" fill="#111" font-size="14" font-family="Arial">x</text>
          <text x="104" y="15" fill="#111" font-size="14" font-family="Arial">y</text>
        </svg>
        <ol>
          <li>بقراءة بيانية، عين <span class="math-inline">f(0)</span> و <span class="math-inline">f&prime;(0)</span>، ثم عين معادلة المماس <span class="math-inline">(T)</span>.</li>
          <li>بين أن <span class="math-inline">a=1</span> و <span class="math-inline">b=0</span>.</li>
          <li>
            ناقش بيانيا، حسب قيم الوسيط الحقيقي <span class="math-inline">m</span>، عدد وحلول المعادلة:
            <span class="math-line">f(x)+x-m=0</span>
          </li>
          <li>
            لتكن <span class="math-inline">g</span> الدالة المعرفة على <span class="math-inline">R</span> بـ:
            <span class="math-line">g(x)=|x+1|-2ln|x+1|</span>
            و <span class="math-inline">(C<sub>g</sub>)</span> تمثيلها البياني في نفس المعلم.
            <br>
            <strong>أ)</strong> بين أنه من أجل كل عدد حقيقي <span class="math-inline">x</span> حيث
            <span class="math-inline">x&lt;-1</span>:
            <span class="math-line">g(-2-x)=g(x)</span>
            <br>
            <strong>ب)</strong> بين أنه من أجل كل عدد حقيقي <span class="math-inline">x</span> من المجال
            <span class="math-inline">]-1,+&infin;[</span>:
            <span class="math-line">g(x)=f(x)</span>
            <br>
            <strong>ج)</strong> استنتج كيفية إنشاء <span class="math-inline">(C<sub>g</sub>)</span> في نفس المعلم.
          </li>
        </ol>
      </section>
    `,
    solution: ""
  },
  {
    id: "science-2021-exp-function-cycle",
    title: "موضوع بكالوريا الجزائر 2021 - علوم تجريبية - دورة 2021 - التمرين 20",
    branch: "science",
    year: "2021",
    date: "2021",
    source: "learn-exp-function",
    file: "",
    tags: ["exp", "study-functions", "asymptotes", "tangents", "discussion"],
    summary: "تمرين من دورة 2021 - التمرين 20 لشعبة علوم تجريبية من باب الدالة الأسية، منقول من باب التعلم إلى أرشيف بكالوريا الجزائر حسب الدورة.",
    statement: `
      <section class="statement-block">
        <h3>بكالوريا الجزائر 2021 - شعبة علوم تجريبية - دورة 2021 - التمرين 20</h3>
        <div><span>الجزء الأول (I):</span></div>
                                <p>الدالة العددية <span class="math-inline">g</span> المعرفة على <span class="math-inline">R</span> بـ: <span class="math-inline">g(x) = 1 + xe<sup>-x-1</sup></span></p>
                                <p>و <span class="math-inline">(C<sub>g</sub>)</span> تمثيلها البياني في المستوي المنسوب إلى معلم متعامد ومتجانس <span class="math-inline">(O; i, j)</span>.</p>
                                <ol>
                                    <li>احسب <span class="math-inline">g(-1)</span>.</li>
                                    <li>بقراءة بيانية، حدد حسب قيم <span class="math-inline">x</span> إشارة <span class="math-inline">g(x)</span>.</li>
                                </ol>
                                <div><span>الجزء الثاني (II):</span></div>
                                <p>الدالة العددية <span class="math-inline">f</span> معرفة على <span class="math-inline">R</span> بـ: <span class="math-inline">f(x) = x - (x+1)e<sup>-x-1</sup></span></p>
                                <p>و <span class="math-inline">(C<sub>f</sub>)</span> تمثيلها البياني.</p>
                                <ol>
                                    <li>تحقق انه من اجل كل <span class="math-inline">x</span> من <span class="math-inline">R</span>: 
                                        <p>
                                            <span class="math-line">f(x) = x [ 1 - (1 + <span class="frac"><span class="num">1</span><span class="den">x</span></span>)e<sup>-x-1</sup> ]</span>
                                        </p>
                                        احسب <span class="math-inline">lim<sub>x &rarr; -&infin;</sub> f(x)</span> و <span class="math-inline">lim<sub>x &rarr; +&infin;</sub> f(x)</span>.
                                    </li>
                                    <li>أ) بين أنه من أجل كل عدد حقيقي <span class="math-inline">x</span>: <span class="math-inline">f'(x) = g(x)</span>.</li>
                                    <li>ب) استنتج أن الدالة <span class="math-inline">f</span> متزايدة تماما على <span class="math-inline">[-1, +&infin;[</span> ومتناقصة تماما على <span class="math-inline">]-&infin;, -1]</span> ثم شكل جدول تغيراتها.</li>
                                    <li>أ) احسب <span class="math-inline">lim<sub>x &rarr; +&infin;</sub> (f(x) - x)</span> فسر النتيجة بيانيا.</li>
                                    <li>ب) ادرس وضعية <span class="math-inline">(C<sub>f</sub>)</span> بالنسبة للمستقيم <span class="math-inline">(&Delta;)</span> الذي معادلته <span class="math-inline">y = x</span>.</li>
                                    <li>ج) بين أن <span class="math-inline">(C<sub>f</sub>)</span> يقبل مماساً <span class="math-inline">(T)</span> موازياً للمستقيم <span class="math-inline">(&Delta;)</span> يطلب تعيين معادلة له.</li>
                                    <li>أ) بين أن <span class="math-inline">(C<sub>f</sub>)</span> يقطع محور الفواصل في نقطتين فاصلتاهما <span class="math-inline">&alpha;</span> و <span class="math-inline">&beta;</span> حيث <span class="math-inline">-1.9 < &beta; < -1.8</span> و <span class="math-inline">0.3 < &alpha; < 0.4</span>.</li>
                                    <li>ب) ارسم المستقيمين <span class="math-inline">(&Delta;)</span> و <span class="math-inline">(T)</span> ثم ارسم المنحنى <span class="math-inline">(C<sub>f</sub>)</span> على المجال <span class="math-inline">[-2, +&infin;[</span>.</li>
                                    <li><span class="math-inline">h</span> الدالة العددية معرفة على المجال <span class="math-inline">[-2, 2]</span> بـ: 
                                        <p>
                                            <span class="math-line">h(x) = -|x| + (|x| - 1)e<sup>|x|-1</sup></span>
                                        </p>
                                        واليكن <span class="math-inline">(C<sub>h</sub>)</span> تمثيلها البياني في المعلم السابق.<br>
                                        أ) بين أن الدالة <span class="math-inline">h</span> زوجية.<br>
                                        ب) بين أنه من أجل كل <span class="math-inline">x \in [-2, 0]</span>: <span class="math-inline">h(x) = f(x)</span>.<br>
                                        ج) أشرح كيف يمكن رسم <span class="math-inline">(C<sub>h</sub>)</span> انطلاقا من <span class="math-inline">(C<sub>f</sub>)</span> ثم ارسمه.
                                    </li>
                                </ol>
      </section>
    `
  },
  {
    id: "science-2020-exp-function-cycle",
    title: "موضوع بكالوريا الجزائر 2020 - علوم تجريبية - دورة 2020 - التمرين 21",
    branch: "science",
    year: "2020",
    date: "2020",
    source: "learn-exp-function",
    file: "",
    tags: ["exp", "study-functions", "asymptotes", "tangents", "discussion"],
    summary: "تمرين من دورة 2020 - التمرين 21 لشعبة علوم تجريبية من باب الدالة الأسية، منقول من باب التعلم إلى أرشيف بكالوريا الجزائر حسب الدورة.",
    statement: `
      <section class="statement-block">
        <h3>بكالوريا الجزائر 2020 - شعبة علوم تجريبية - دورة 2020 - التمرين 21</h3>
        <div><span>الجزء الأول (I):</span></div>
                                <p>المنحنى <span class="math-inline">(&Gamma;)</span> الممثل للدالة <span class="math-inline">g</span> المعرفة على <span class="math-inline">R</span> بـ: <span class="math-inline">g(x) = 2x<sup>2</sup> + 2x - 2xe<sup>x</sup></span>.</p>
                                <p>المستقيم <span class="math-inline">(&Delta;)</span> ذو المعادلة: <span class="math-inline">y = x</span> و <span class="math-inline">(&gamma;)</span> المنحنى الممثل للدالة: <span class="math-inline">x \mapsto e<sup>x</sup></span>.</p>
                                <ol>
                                    <li>بقراءة بيانية، برر أنه من أجل عدد حقيقي <span class="math-inline">x</span>: <span class="math-inline">e<sup>x</sup> - x > 0</span>.</li>
                                    <li>حدد تبعا لقيم العدد الحقيقي <span class="math-inline">x</span> إشارة <span class="math-inline">g(x)</span> علما ان : <span class="math-inline">g(&alpha;) = 0</span>.</li>
                                </ol>
                                <div><span>الجزء الثاني (II):</span></div>
                                <p>الدالة العددية <span class="math-inline">f</span> معرفة على <span class="math-inline">R</span> بـ: </p>
                                <p>
                                    <span class="math-line">f(x) = -1 + <span class="frac"><span class="num">2e<sup>x</sup></span><span class="den">e<sup>x</sup> - x</span></span></span>
                                </p>
                                <ol>
                                    <li>بين أن <span class="math-inline">lim<sub>x &rarr; +&infin;</sub> f(x) = 1</span> و احسب <span class="math-inline">lim<sub>x &rarr; -&infin;</sub> f(x)</span> فسر نتيجتي النهايتين هندسيا.</li>
                                    <li>أ) بين أنه من أجل كل عدد حقيقي <span class="math-inline">x</span>: 
                                        <p>
                                            <span class="math-line">f'(x) = <span class="frac"><span class="num">2e<sup>x</sup>(1 - x)</span><span class="den">(e<sup>x</sup> - x)<sup>2</sup></span></span></span>
                                        </p>
                                    </li>
                                    <li>ب) استنتج اتجاه تغير الدالة <span class="math-inline">f</span> ، ثم شكل جدول تغيراتها.</li>
                                    <li>أ) اكتب معادلة لـ : <span class="math-inline">(T)</span> المماس للمنحنى <span class="math-inline">(C<sub>f</sub>)</span> في النقطة <span class="math-inline">A</span> ذات الفاصلة <span class="math-inline">0</span>.</li>
                                    <li>ب) بين أنه من أجل كل عدد حقيقي <span class="math-inline">x</span>: <span class="math-inline">f(x) - (2x + 1) = <span class="frac"><span class="num">g(x)</span><span class="den">e<sup>x</sup> - x</span></span></span>.</li>
                                    <li>ج) استنتج الوضع النسبي للمنحنى <span class="math-inline">(C<sub>f</sub>)</span> و <span class="math-inline">(T)</span> على <span class="math-inline">R</span> ، ماذا تمثل النقطة <span class="math-inline">A</span> بالنسبة إلى <span class="math-inline">(C<sub>f</sub>)</span>.</li>
                                    <li>بين أن المعادلة <span class="math-inline">f(x) = 0</span> تقبل حلا وحيدا <span class="math-inline">&beta;</span> في المجال <span class="math-inline">]-&infin;, 0]</span> ثم تحقق أن: <span class="math-inline">-0.6 < &beta; < -0.5</span>.</li>
                                    <li>أنشئ المماس <span class="math-inline">(T)</span> والمستقيمين المقاربين ثم المنحنى <span class="math-inline">(C<sub>f</sub>)</span>.</li>
                                </ol>
      </section>
    `
  },
  {
    id: "science-2019-exp-function-cycle",
    title: "موضوع بكالوريا الجزائر 2019 - علوم تجريبية - دورة 2019 - التمرين 22",
    branch: "science",
    year: "2019",
    date: "2019",
    source: "learn-exp-function",
    file: "",
    tags: ["exp", "study-functions", "asymptotes", "tangents", "discussion"],
    summary: "تمرين من دورة 2019 - التمرين 22 لشعبة علوم تجريبية من باب الدالة الأسية، منقول من باب التعلم إلى أرشيف بكالوريا الجزائر حسب الدورة.",
    statement: `
      <section class="statement-block">
        <h3>بكالوريا الجزائر 2019 - شعبة علوم تجريبية - دورة 2019 - التمرين 22</h3>
        <div><span>دورة 2019 - التمرين 22</span></div>
                                <p>المستوي منسوب إلى معلم متعامد ومتجانس <span class="math-inline">(O; i, j)</span> وحدة الطول هي <span class="math-inline">2cm</span>.</p>
                                <p><span class="math-inline">(C<sub>f</sub>)</span> و <span class="math-inline">(C<sub>g</sub>)</span> التمثيلان البيانيان للدالتين <span class="math-inline">f</span> و <span class="math-inline">g</span> المعرفتين على <span class="math-inline">R</span> كما يلي:</p>
                                <p>
                                    <span class="math-line">f(x) = e<sup>x</sup> - <span class="frac"><span class="num">1</span><span class="den">2</span></span>ex<sup>2</sup></span>
                                    <span class="math-line">g(x) = e<sup>x</sup> - ex</span>
                                </p>
                                <ol>
                                    <li>أ) أدرس اتجاه تغير الدالة <span class="math-inline">g</span>.<br>ب) استنتج إشارة <span class="math-inline">g(x)</span> حسب قيم <span class="math-inline">x</span>.</li>
                                    <li>أدرس اتجاه تغير الدالة <span class="math-inline">f</span>.</li>
                                    <li>احسب كلا من <span class="math-inline">lim<sub>x &rarr; -&infin;</sub> f(x)</span> و <span class="math-inline">lim<sub>x &rarr; +&infin;</sub> f(x)</span> ، ثم شكل جدول تغيرات <span class="math-inline">f</span>.</li>
                                    <li>أدرس الوضع النسبي للمنحنيين <span class="math-inline">(C<sub>f</sub>)</span> و <span class="math-inline">(C<sub>g</sub>)</span> على <span class="math-inline">R</span>.</li>
                                    <li>أرسم على المجال <span class="math-inline">[0, 2]</span> المنحنيين <span class="math-inline">(C<sub>f</sub>)</span> و <span class="math-inline">(C<sub>g</sub>)</span> في نفس المعلم (تعطى <span class="math-inline">e<sup>2</sup> - 2e \approx 2</span>).</li>
                                    <li><span class="math-inline">h</span> دالة معرفة على المجال <span class="math-inline">[-2, 2]</span> بـ: <span class="math-inline">h(x) = <span class="frac"><span class="num">1</span><span class="den">2</span></span>ex<sup>2</sup> - e<sup>|x|</sup></span> و <span class="math-inline">(&Gamma;)</span> تمثيلها البياني في المعلم السابق.<br>أ) بين أن الدالة <span class="math-inline">h</span> زوجية.<br>ب) من اجل <span class="math-inline">x \in [0, 2]</span> احسب <span class="math-inline">h(x) + f(x)</span> واستنتج كيفية رسم <span class="math-inline">(&Gamma;)</span> إنطلاقا من <span class="math-inline">(C<sub>f</sub>)</span> ثم أرسمه.</li>
                                </ol>
      </section>
    `
  },
  {
    id: "science-2018-exp-function-cycle",
    title: "موضوع بكالوريا الجزائر 2018 - علوم تجريبية - دورة 2018 - التمرين 23",
    branch: "science",
    year: "2018",
    date: "2018",
    source: "learn-exp-function",
    file: "",
    tags: ["exp", "study-functions", "asymptotes", "tangents", "discussion"],
    summary: "تمرين من دورة 2018 - التمرين 23 لشعبة علوم تجريبية من باب الدالة الأسية، منقول من باب التعلم إلى أرشيف بكالوريا الجزائر حسب الدورة.",
    statement: `
      <section class="statement-block">
        <h3>بكالوريا الجزائر 2018 - شعبة علوم تجريبية - دورة 2018 - التمرين 23</h3>
        <div><span>الجزء الأول (I):</span></div>
                                <p>الدالة العددية <span class="math-inline">g</span> المعرفة على <span class="math-inline">R</span> كما يلي: <span class="math-inline">g(x) = 2 + (x - 1)e<sup>-x</sup></span></p>
                                <ol>
                                    <li>أ) أحسب <span class="math-inline">lim<sub>x &rarr; -&infin;</sub> g(x)</span> و <span class="math-inline">lim<sub>x &rarr; +&infin;</sub> g(x)</span>.<br>ب) ادراس اتجاه تغير الدالة <span class="math-inline">g</span> ، ثم شكل جدول تغيراتها.</li>
                                    <li>ج) بين أن المعادلة <span class="math-inline">g(x) = 0</span> تقبل حلا وحيدا <span class="math-inline">&alpha;</span> حيث <span class="math-inline">-0.38 < &alpha; < -0.36</span>. استنتج اشارة <span class="math-inline">g(x)</span> على <span class="math-inline">R</span>.</li>
                                </ol>
                                <div><span>الجزء الثاني (II):</span></div>
                                <p>لتكن <span class="math-inline">f</span> دالة عددية معرفة على <span class="math-inline">R</span> بـ: <span class="math-inline">f(x) = 2x + 1 - xe<sup>-x</sup></span> واليكن <span class="math-inline">(C<sub>f</sub>)</span> تمثيلها البياني.</p>
                                <ol>
                                    <li>أ) أحسب <span class="math-inline">lim<sub>x &rarr; -&infin;</sub> f(x)</span> و <span class="math-inline">lim<sub>x &rarr; +&infin;</sub> f(x)</span>.<br>ب) أحسب <span class="math-inline">lim<sub>x &rarr; +&infin;</sub> [f(x) - (2x+1)]</span> ثم فسر النتيجة بيانيا.<br>ج) ادرس الوضع النسبي للمنحنى <span class="math-inline">(C<sub>f</sub>)</span> والمستقيم <span class="math-inline">(&Delta;)</span> حيث: <span class="math-inline">y = 2x + 1</span>.</li>
                                    <li>بين أنه من أجل كل <span class="math-inline">x</span> يكون <span class="math-inline">f'(x) = g(x)</span>. استنتج اتجاه تغير الدالة <span class="math-inline">f</span> وشكل جدول تغيراتها.</li>
                                    <li>اكتب معادلة المماس <span class="math-inline">(T)</span> للمنحنى <span class="math-inline">(C<sub>f</sub>)</span> عند النقطة ذات الفاصلة <span class="math-inline">0</span>.</li>
                                    <li>ارسم <span class="math-inline">(T)</span> ، <span class="math-inline">(&Delta;)</span> والمنحنى <span class="math-inline">(C<sub>f</sub>)</span> نأخذ <span class="math-inline">f(&alpha;) \approx 0.8</span>.</li>
                                    <li>عين عدد وإشارة حلول المعادلة <span class="math-inline">x = (1 - m)e<sup>x</sup></span>.</li>
                                </ol>
      </section>
    `
  },
  {
    id: "science-2017-exp-function-cycle",
    title: "موضوع بكالوريا الجزائر 2017 - علوم تجريبية - دورة 2017 - التمرين 24",
    branch: "science",
    year: "2017",
    date: "2017",
    source: "learn-exp-function",
    file: "",
    tags: ["exp", "study-functions", "asymptotes", "tangents", "discussion"],
    summary: "تمرين من دورة 2017 - التمرين 24 لشعبة علوم تجريبية من باب الدالة الأسية، منقول من باب التعلم إلى أرشيف بكالوريا الجزائر حسب الدورة.",
    statement: `
      <section class="statement-block">
        <h3>بكالوريا الجزائر 2017 - شعبة علوم تجريبية - دورة 2017 - التمرين 24</h3>
        <div><span>الجزء الأول (I):</span></div>
                                <p>نعتبر الدالة العددية <span class="math-inline">f</span> المعرفة على <span class="math-inline">R</span> كمايلي: <span class="math-inline">f(x) = 2 - x<sup>2</sup> e<sup>1-x</sup></span></p>
                                <p>و <span class="math-inline">(C<sub>f</sub>)</span> تمثيلها البياني في المستوي المنسوب إلى معلم متعامد ومتجانس <span class="math-inline">(O; i, j)</span>.</p>
                                <ol>
                                    <li>بين أن <span class="math-inline">lim<sub>x &rarr; +&infin;</sub> f(x) = 2</span> و أعط تفسيرا هندسيا لهذه النتيجة ، ثم احسب <span class="math-inline">lim<sub>x &rarr; -&infin;</sub> f(x)</span>.</li>
                                    <li>أ) بين أنه من أجل كل <span class="math-inline">x</span> من <span class="math-inline">R</span>: <span class="math-inline">f'(x) = x(x - 2)e<sup>1-x</sup></span>.</li>
                                    <li>ب) أدرس اتجاه تغير الدالة <span class="math-inline">f</span> ، ثم شكل جدول تغيراتها.</li>
                                    <li>أكتب معادلة المماس <span class="math-inline">(T)</span> للمنحنى <span class="math-inline">(C<sub>f</sub>)</span> عند النقطة ذات الفاصلة <span class="math-inline">0</span>.</li>
                                </ol>
                                <div><span>الجزء الثاني (II):</span></div>
                                <p>نعتبر الدالة العددية <span class="math-inline">h</span> المعرفة على <span class="math-inline">R</span> كما يلي : <span class="math-inline">h(x) = 1 - x e<sup>1-x</sup></span></p>
                                <ol>
                                    <li>بين أنه من أجل كل <span class="math-inline">x</span> من <span class="math-inline">R</span>: <span class="math-inline">h(x) \ge 0</span>. أدرس الوضع النسبي للمنحنى <span class="math-inline">(C<sub>f</sub>)</span> والمماس <span class="math-inline">(T)</span>.</li>
                                    <li>بين أن المعادلة <span class="math-inline">f(x) = 0</span> تقبل حلا وحيدا <span class="math-inline">&alpha;</span> ، حيث <span class="math-inline">-0.7 < &alpha; < -0.6</span>.</li>
                                    <li>إنشئ المماس <span class="math-inline">(T)</span> والمنحنى <span class="math-inline">(C<sub>f</sub>)</span> على المجال <span class="math-inline">[-1, +&infin;[</span>.</li>
                                </ol>
      </section>
    `
  },
  {
    id: "science-2016-exp-function-cycle",
    title: "موضوع بكالوريا الجزائر 2016 - علوم تجريبية - دورة 2016 - التمرين 26",
    branch: "science",
    year: "2016",
    date: "2016",
    source: "learn-exp-function",
    file: "",
    tags: ["exp", "study-functions", "asymptotes", "tangents", "discussion"],
    summary: "تمرين من دورة 2016 - التمرين 26 لشعبة علوم تجريبية من باب الدالة الأسية، منقول من باب التعلم إلى أرشيف بكالوريا الجزائر حسب الدورة.",
    statement: `
      <section class="statement-block">
        <h3>بكالوريا الجزائر 2016 - شعبة علوم تجريبية - دورة 2016 - التمرين 26</h3>
        <div><span>الجزء الأول (I):</span></div>
                                <p>الدالة <span class="math-inline">g</span> معرفة على <span class="math-inline">R</span> بـ: <span class="math-inline">g(x) = 1 + (x<sup>2</sup> + x - 1)e<sup>-x</sup></span></p>
                                <ol>
                                    <li>أ) احسب <span class="math-inline">lim<sub>x &rarr; +&infin;</sub> g(x)</span> و <span class="math-inline">lim<sub>x &rarr; -&infin;</sub> g(x)</span>.<br>ب) ادرس اتجاه تغير الدالة <span class="math-inline">g</span> وشكل جدول تغيراتها.</li>
                                    <li>أ) بين أن المعادلة <span class="math-inline">g(x) = 0</span> تقبل حلين أحدهما معدوم والآخر <span class="math-inline">&alpha;</span> حيث: <span class="math-inline">-1.52 < &alpha; < -1.51</span>.<br>ب) استنتج إشارة <span class="math-inline">g(x)</span>.</li>
                                </ol>
                                <div><span>الجزء الثاني (II):</span></div>
                                <p>الدالة <span class="math-inline">f</span> معرفة على <span class="math-inline">R</span> بـ: <span class="math-inline">f(x) = -x + (x<sup>2</sup> + 3x + 2)e<sup>-x</sup></span></p>
                                <p>واليكن <span class="math-inline">(C<sub>f</sub>)</span> تمثيلها البياني في المستوي المنسوب إلى معلم متعامد ومتجانس.</p>
                                <ol>
                                    <li>أ) احسب <span class="math-inline">lim<sub>x &rarr; +&infin;</sub> f(x)</span> و <span class="math-inline">lim<sub>x &rarr; -&infin;</sub> f(x)</span>.<br>ب) بين أنه من أجل كل عدد حقيقي <span class="math-inline">x</span>: <span class="math-inline">f'(x) = -g(x)</span>.<br>ج) شكل جدول تغيرات الدالة <span class="math-inline">f</span> (نأخذ <span class="math-inline">f(&alpha;) \approx 0.38</span>).<br>د) عين دون حساب <span class="math-inline">lim<sub>h &rarr; 0</sub> <span class="frac"><span class="num">f(h) - f(0)</span><span class="den">h</span></span></span> وفسر هندسيا للنتيجة.</li>
                                    <li>أ) بين أن المستقيم <span class="math-inline">(&Delta;)</span> ذو المعادلة: <span class="math-inline">y = -x</span> مقارب مائل للمنحنى <span class="math-inline">(C<sub>f</sub>)</span> عند <span class="math-inline">+&infin;</span>.<br>ب) ادرس وضعية المنحنى <span class="math-inline">(C<sub>f</sub>)</span> بالنسبة للمستقيم <span class="math-inline">(&Delta;)</span>.<br>ج) بين أن <span class="math-inline">(C<sub>f</sub>)</span> يقبل نقطتي انعطاف يطلب تعيين احداثياهما.<br>د) ارسم <span class="math-inline">(&Delta;)</span> و <span class="math-inline">(C<sub>f</sub>)</span> على المجال <span class="math-inline">[-2, +&infin;[</span>.<br>هـ) ناقش بيانيا وحسب قيم الوسيط الحقيقي <span class="math-inline">m</span> عدد وإشارة حلول المعادلة: <span class="math-inline">(m - x)e<sup>x</sup> + (x<sup>2</sup> + 3x + 2) = 0</span>.</li>
                                </ol>
      </section>
    `
  },
  {
    id: "science-2015-exp-function-cycle",
    title: "موضوع بكالوريا الجزائر 2015 - علوم تجريبية - دورة 2015 - التمرين 28",
    branch: "science",
    year: "2015",
    date: "2015",
    source: "learn-exp-function",
    file: "",
    tags: ["exp", "study-functions", "asymptotes", "tangents", "discussion"],
    summary: "تمرين من دورة 2015 - التمرين 28 لشعبة علوم تجريبية من باب الدالة الأسية، منقول من باب التعلم إلى أرشيف بكالوريا الجزائر حسب الدورة.",
    statement: `
      <section class="statement-block">
        <h3>بكالوريا الجزائر 2015 - شعبة علوم تجريبية - دورة 2015 - التمرين 28</h3>
        <div><span>الجزء الأول (I):</span></div>
                                <p>الدالة العددية <span class="math-inline">g</span> المعرفة على <span class="math-inline">R</span> بـ: <span class="math-inline">g(x) = 1 - 2x - e<sup>2x-2</sup></span></p>
                                <ol>
                                    <li>أدرس اتجاه تغير الدالة <span class="math-inline">g</span> على <span class="math-inline">R</span>.</li>
                                    <li>بين أن المعادلة <span class="math-inline">g(x) = 0</span> تقبل حلا وحيدا <span class="math-inline">&alpha;</span> في <span class="math-inline">R</span> ، ثم تحقق أن : <span class="math-inline">0.36 < &alpha; < 0.37</span>.</li>
                                    <li>أستنتج إشارة <span class="math-inline">g(x)</span> على <span class="math-inline">R</span>.</li>
                                </ol>
                                <div><span>الجزء الثاني (II):</span></div>
                                <p>الدالة <span class="math-inline">f</span> المعرفة على <span class="math-inline">R</span> كما يلي: <span class="math-inline">f(x) = xe<sup>2x+2</sup> - x + 1</span> و <span class="math-inline">(C<sub>f</sub>)</span> تمثيلها البياني.</p>
                                <ol>
                                    <li>أ) بين أنه من أجل كل <span class="math-inline">x</span> من <span class="math-inline">R</span> فإن: <span class="math-inline">f'(x) = e<sup>2x+2</sup> g(-x)</span>.<br>ب) أستنتج أن الدالة <span class="math-inline">f</span> متناقصة تماما على <span class="math-inline">[-&alpha;, +&infin;[</span> ومتزايدة تماما على <span class="math-inline">]-&infin;, -&alpha;]</span>.</li>
                                    <li>أحسب نهاية <span class="math-inline">f</span> عند <span class="math-inline">-&infin;</span> وعند <span class="math-inline">+&infin;</span> ، ثم شكل جدول تغيرات الدالة <span class="math-inline">f</span>.</li>
                                    <li>احسب <span class="math-inline">lim<sub>x &rarr; -&infin;</sub> [f(x) + x - 1]</span> فسر النتيجة هندسيا.</li>
                                    <li>أدرس وضعية <span class="math-inline">(C<sub>f</sub>)</span> بالنسبة إلى المستقيم <span class="math-inline">(&Delta;)</span> الذي معادلته: <span class="math-inline">y = -x + 1</span>.</li>
                                    <li>أنشئ <span class="math-inline">(&Delta;)</span> و <span class="math-inline">(C<sub>f</sub>)</span> على المجال <span class="math-inline">[-2, <span class="frac"><span class="num">1</span><span class="den">2</span></span>]</span> ، نأخذ <span class="math-inline">f(-&alpha;) \approx 0.1</span>.</li>
                                </ol>
      </section>
    `
  },
  {
    id: "science-2014-exp-function-cycle",
    title: "موضوع بكالوريا الجزائر 2014 - علوم تجريبية - دورة 2014 - التمرين 29",
    branch: "science",
    year: "2014",
    date: "2014",
    source: "learn-exp-function",
    file: "",
    tags: ["exp", "study-functions", "asymptotes", "tangents", "discussion"],
    summary: "تمرين من دورة 2014 - التمرين 29 لشعبة علوم تجريبية من باب الدالة الأسية، منقول من باب التعلم إلى أرشيف بكالوريا الجزائر حسب الدورة.",
    statement: `
      <section class="statement-block">
        <h3>بكالوريا الجزائر 2014 - شعبة علوم تجريبية - دورة 2014 - التمرين 29</h3>
        <div><span>الجزء الأول (I):</span></div>
                                <p>نعتبر الدالة <span class="math-inline">g</span> المعرفة على <span class="math-inline">R</span> بـ: <span class="math-inline">g(x) = (x+1)e<sup>x</sup> - 1</span></p>
                                <ol>
                                    <li>أدرس تغيرات الدالة <span class="math-inline">g</span> ، ثم استنتج أنه من أجل كل عدد حقيقي <span class="math-inline">x</span>: <span class="math-inline">g(x) > 0</span>.</li>
                                </ol>
                                <div><span>الجزء الثاني (II):</span></div>
                                <p>نعتبر الدالة <span class="math-inline">f</span> المعرفة على <span class="math-inline">R*</span> بـ: <span class="math-inline">f(x) = x + <span class="frac"><span class="num">x+1</span><span class="den">e<sup>x</sup> - 1</span></span></span></p>
                                <p>و <span class="math-inline">(C<sub>f</sub>)</span> تمثيلها البياني في المستوي المنسوب إلى معلم متعامد ومتجانس.</p>
                                <ol>
                                    <li>احسب نهايات الدالة <span class="math-inline">f</span> عند <span class="math-inline">0^+</span> ، <span class="math-inline">0^-</span> ، <span class="math-inline">+&infin;</span> و <span class="math-inline">-&infin;</span>.</li>
                                    <li>أ) بين أنه من أجل كل عدد حقيقي <span class="math-inline">x \ne 0</span> : <span class="math-inline">f'(x) = \frac{e<sup>2x</sup> - 2e<sup>x</sup> + 1 - xe<sup>x</sup>}{(e<sup>x</sup> - 1)<sup>2</sup>}</span>.<br>ب) تحقق أن: <span class="math-inline">e<sup>2x</sup> - 2e<sup>x</sup> + 1 - xe<sup>x</sup> = (e<sup>x</sup> - 1)(e<sup>x</sup> - 1) - x(e<sup>x</sup> - 1) - x</span>.<br>ج) استنتج إشارة <span class="math-inline">f'(x)</span> وشكل جدول تغيراتها.</li>
                                    <li>أ) بين أن المستقيم <span class="math-inline">(d)</span> ذو المعادلة <span class="math-inline">y = x</span> مقارب مائل لـ <span class="math-inline">(C<sub>f</sub>)</span> عند <span class="math-inline">+&infin;</span> و أن المستقيم <span class="math-inline">(d')</span> ذو المعادلة <span class="math-inline">y = x - 1</span> مقارب مائل لـ <span class="math-inline">(C<sub>f</sub>)</span> عند <span class="math-inline">-&infin;</span>.<br>ب) ادرس وضعية المنحنى <span class="math-inline">(C<sub>f</sub>)</span> بالنسبة للمستقيمين <span class="math-inline">(d)</span> و <span class="math-inline">(d')</span>.</li>
                                    <li>بين أن المعادلة <span class="math-inline">f(x) = 0</span> تقبل حلين في <span class="math-inline">R*</span> أحدهما <span class="math-inline">&alpha;</span> حيث <span class="math-inline">-1.8 < &alpha; < -1.7</span>.</li>
                                    <li>ارسم المستقيمين <span class="math-inline">(d)</span> و <span class="math-inline">(d')</span> والمنحنى <span class="math-inline">(C<sub>f</sub>)</span>.</li>
                                </ol>
      </section>
    `
  },
  {
    id: "science-2013-exp-function-cycle",
    title: "موضوع بكالوريا الجزائر 2013 - علوم تجريبية - دورة 2013",
    branch: "science",
    year: "2013",
    date: "2013",
    source: "learn-exp-function",
    file: "",
    tags: ["exp", "study-functions", "asymptotes", "tangents", "discussion"],
    summary: "تمرين من دورة 2013 لشعبة علوم تجريبية من باب الدالة الأسية، منقول من باب التعلم إلى أرشيف بكالوريا الجزائر حسب الدورة.",
    statement: `
      <section class="statement-block">
        <h3>بكالوريا الجزائر 2013 - شعبة علوم تجريبية - دورة 2013</h3>
        <div><span>الجزء الأول (I):</span></div>
                                <p>نعتبر الدالة <span class="math-inline">g</span> المعرفة على <span class="math-inline">R</span> بـ: <span class="math-inline">g(x) = (x-1)e<sup>x</sup> - 1</span></p>
                                <ol>
                                    <li>أدرس اتجاه تغير الدالة <span class="math-inline">g</span> ثم شكل جدول تغيراتها.</li>
                                    <li>أ) بين أن المعادلة <span class="math-inline">g(x) = 0</span> تقبل حلا وحيدا <span class="math-inline">&alpha;</span> في <span class="math-inline">R</span> ، ثم تحقق أن : <span class="math-inline">1.27 < &alpha; < 1.28</span>.<br>ب) استنتج إشارة <span class="math-inline">g(x)</span>.</li>
                                </ol>
                                <div><span>الجزء الثاني (II):</span></div>
                                <p>لتكن <span class="math-inline">f</span> الدالة المعرفة على <span class="math-inline">R*</span> كما يلي: <span class="math-inline">f(x) = <span class="frac"><span class="num">e<sup>x</sup> - x</span><span class="den">x</span></span></span> و <span class="math-inline">(C<sub>f</sub>)</span> تمثيلها البياني.</p>
                                <ol>
                                    <li>احسب <span class="math-inline">lim<sub>x &rarr; -&infin;</sub> f(x)</span> و <span class="math-inline">lim<sub>x &rarr; +&infin;</sub> f(x)</span> و <span class="math-inline">lim<sub>x &rarr; 0</sub> f(x)</span> مفسرا النتيجة الأخيرة هندسيا.</li>
                                    <li>أ) بين أنه من أجل كل <span class="math-inline">x</span> من <span class="math-inline">R*</span> فإن: <span class="math-inline">f'(x) = <span class="frac"><span class="num">g(x)</span><span class="den">x<sup>2</sup></span></span></span>.<br>ب) استنتج اتجاه تغير الدالة <span class="math-inline">f</span> وشكل جدول تغيراتها.</li>
                                    <li>أ) بين أن <span class="math-inline">f(&alpha;) = e^&alpha;</span> ، استنتج حصرا للعدد <span class="math-inline">f(&alpha;)</span>.<br>ب) استنتج مما سبق وجود مستقيم مقارب مائل للمنحنى <span class="math-inline">(C<sub>f</sub>)</span> عند <span class="math-inline">-&infin;</span> معادلة له: <span class="math-inline">y = -1</span>.</li>
                                    <li>أدرس وضعية المنحنى <span class="math-inline">(C<sub>f</sub>)</span> بالنسبة إلى مستقيمه المقارب الأفقي.</li>
                                    <li>أنشئ <span class="math-inline">(C<sub>f</sub>)</span>.</li>
                                </ol>
      </section>
    `
  },
  {
    id: "science-2012-exp-function-cycle",
    title: "موضوع بكالوريا الجزائر 2012 - علوم تجريبية - دورة 2012 - التمرين 30",
    branch: "science",
    year: "2012",
    date: "2012",
    source: "learn-exp-function",
    file: "",
    tags: ["exp", "study-functions", "asymptotes", "tangents", "discussion"],
    summary: "تمرين من دورة 2012 - التمرين 30 لشعبة علوم تجريبية من باب الدالة الأسية، منقول من باب التعلم إلى أرشيف بكالوريا الجزائر حسب الدورة.",
    statement: `
      <section class="statement-block">
        <h3>بكالوريا الجزائر 2012 - شعبة علوم تجريبية - دورة 2012 - التمرين 30</h3>
        <div><span>الجزء الأول (I):</span></div>
                                <p>لتكن <span class="math-inline">g</span> الدالة المعرفة على <span class="math-inline">R</span> بـ: <span class="math-inline">g(x) = 1 - xe<sup>x</sup></span></p>
                                <ol>
                                    <li>احسب <span class="math-inline">lim<sub>x &rarr; -&infin;</sub> g(x)</span> و <span class="math-inline">lim<sub>x &rarr; +&infin;</sub> g(x)</span>.</li>
                                    <li>أدرس اتجاه تغير الدالة <span class="math-inline">g</span> ، ثم شكل جدول تغيراتها.</li>
                                    <li>أ) بين أن المعادلة <span class="math-inline">g(x) = 0</span> تقبل حلا وحيدا <span class="math-inline">&alpha;</span> حيث <span class="math-inline">0.5 < &alpha; < 0.6</span>.<br>ب) أستنتج إشارة <span class="math-inline">g(x)</span> على <span class="math-inline">R</span>.</li>
                                </ol>
                                <div><span>الجزء الثاني (II):</span></div>
                                <p><span class="math-inline">f</span> الدالة المعرفة على المجال <span class="math-inline">]-&infin;, 2]</span> كما يلي: <span class="math-inline">f(x) = (x-1)e<sup>x</sup> - x - 1</span> و <span class="math-inline">(C<sub>f</sub>)</span> تمثيلها البياني.</p>
                                <ol>
                                    <li>احسب <span class="math-inline">lim<sub>x &rarr; -&infin;</sub> f(x)</span>.</li>
                                    <li>لتكن <span class="math-inline">f'</span> مشتقة الدالة <span class="math-inline">f</span>. بين أنه من أجل كل عدد حقيقي <span class="math-inline">x</span> من <span class="math-inline">]-&infin;, 2]</span> فإن: <span class="math-inline">f'(x) = g(x)</span>. أستنتج إشارة <span class="math-inline">f'(x)</span> ثم شكل جدول تغيراتها.</li>
                                    <li>بين أن <span class="math-inline">f(&alpha;) = -(<span class="frac"><span class="num">&alpha;^2 + 1</span><span class="den">&alpha;</span></span>)</span> ثم استنتج حصراً للعدد <span class="math-inline">f(&alpha;)</span>.</li>
                                    <li>أ) بين أن المستقيم <span class="math-inline">(&Delta;)</span> ذو المعادلة <span class="math-inline">y = -x - 1</span> هو مستقيم مقارب مائل لـ <span class="math-inline">(C<sub>f</sub>)</span> بجوار <span class="math-inline">-&infin;</span>.<br>ب) أدرس وضعية <span class="math-inline">(C<sub>f</sub>)</span> بالنسبة إلى <span class="math-inline">(&Delta;)</span>.</li>
                                    <li>أ) بين أن المعادلة <span class="math-inline">f(x) = 0</span> تقبل حلين <span class="math-inline">x<sub>1</sub></span> و <span class="math-inline">x<sub>2</sub></span> حيث <span class="math-inline">-1.6 < x<sub>1</sub> < -1.5</span> و <span class="math-inline">1.5 < x<sub>2</sub> < 1.6</span>.<br>ب) أنشئ <span class="math-inline">(&Delta;)</span> و <span class="math-inline">(C<sub>f</sub>)</span>.</li>
                                </ol>
      </section>
    `
  },
  {
    id: "science-2011-exp-function-cycle",
    title: "موضوع بكالوريا الجزائر 2011 - علوم تجريبية - دورة 2011 - التمرين 31",
    branch: "science",
    year: "2011",
    date: "2011",
    source: "learn-exp-function",
    file: "",
    tags: ["exp", "study-functions", "asymptotes", "tangents", "discussion"],
    summary: "تمرين من دورة 2011 - التمرين 31 لشعبة علوم تجريبية من باب الدالة الأسية، منقول من باب التعلم إلى أرشيف بكالوريا الجزائر حسب الدورة.",
    statement: `
      <section class="statement-block">
        <h3>بكالوريا الجزائر 2011 - شعبة علوم تجريبية - دورة 2011 - التمرين 31</h3>
        <div><span>الجزء الأول (I):</span></div>
                                <p>لتكن الدالة <span class="math-inline">g</span> المعرفة على <span class="math-inline">R</span> بـ: <span class="math-inline">g(x) = (x+1)<sup>2</sup> - e<sup>x</sup></span></p>
                                <ol>
                                    <li>احسب نهايتي <span class="math-inline">g</span> عند <span class="math-inline">+&infin;</span> و <span class="math-inline">-&infin;</span>.</li>
                                    <li>أدرس تغيرات الدالة <span class="math-inline">g</span> ثم شكل جدول تغيراتها.</li>
                                    <li>بين أن المعادلة <span class="math-inline">g(x) = 0</span> تقبل حلين في <span class="math-inline">R</span> أحدهما معدوم والآخر <span class="math-inline">&alpha;</span> حيث: <span class="math-inline">-0.8 < &alpha; < -0.7</span>.</li>
                                    <li>استنتج إشارة <span class="math-inline">g(x)</span> على <span class="math-inline">R</span>.</li>
                                </ol>
                                <div><span>الجزء الثاني (II):</span></div>
                                <p>لتكن الدالة <span class="math-inline">f</span> المعرفة على <span class="math-inline">R*</span> بـ: <span class="math-inline">f(x) = <span class="frac"><span class="num">x e<sup>x</sup></span><span class="den">(e<sup>x</sup> - 1)<sup>2</sup></span></span></span> و <span class="math-inline">(C<sub>f</sub>)</span> تمثيلها البياني.</p>
                                <ol>
                                    <li>احسب نهايات الدالة <span class="math-inline">f</span> عند <span class="math-inline">+&infin;</span> ، <span class="math-inline">-&infin;</span> ، <span class="math-inline">0^+</span> ، <span class="math-inline">0^-</span> مفسراً النتائج هندسياً.</li>
                                    <li>بين أنه من أجل كل <span class="math-inline">x \in R*</span>: <span class="math-inline">f'(x) = <span class="frac"><span class="num">e<sup>x</sup> g(-x)</span><span class="den">(e<sup>x</sup> - 1)<sup>3</sup></span></span></span>.</li>
                                    <li>أدرس إتجاه تغير الدالة <span class="math-inline">f</span> ثم شكل جدول تغيراتها.</li>
                                    <li>بين أن <span class="math-inline">f(-&alpha;) = <span class="frac"><span class="num">&alpha;</span><span class="den">(&alpha;+1)<sup>2</sup> - 1</span></span></span>.</li>
                                    <li>ارسم المنحنى <span class="math-inline">(C<sub>f</sub>)</span>.</li>
                                </ol>
      </section>
    `
  },
  {
    id: "science-2010-exp-function-cycle",
    title: "موضوع بكالوريا الجزائر 2010 - علوم تجريبية - دورة 2010 - التمرين 27",
    branch: "science",
    year: "2010",
    date: "2010",
    source: "learn-exp-function",
    file: "",
    tags: ["exp", "study-functions", "asymptotes", "tangents", "discussion"],
    summary: "تمرين من دورة 2010 - التمرين 27 لشعبة علوم تجريبية من باب الدالة الأسية، منقول من باب التعلم إلى أرشيف بكالوريا الجزائر حسب الدورة.",
    statement: `
      <section class="statement-block">
        <h3>بكالوريا الجزائر 2010 - شعبة علوم تجريبية - دورة 2010 - التمرين 27</h3>
        <div><span>دورة 2010 - التمرين 27</span></div>
                                <p>الدالة العددية <span class="math-inline">f</span> المعرفة على <span class="math-inline">R</span> بـ: <span class="math-inline">f(x) = 3 - (x+1)e<sup>-x</sup></span></p>
                                <p>و <span class="math-inline">(C<sub>f</sub>)</span> تمثيلها البياني في المستوي المنسوب إلى معلم متعامد ومتجانس <span class="math-inline">(O; i, j)</span>.</p>
                                <ol>
                                    <li>احسب <span class="math-inline">lim<sub>x &rarr; -&infin;</sub> f(x)</span> و <span class="math-inline">lim<sub>x &rarr; +&infin;</sub> f(x)</span> وفسر النتيجة هندسيا.</li>
                                    <li>أ) بين أنه من أجل كل عدد حقيقي <span class="math-inline">x</span>: <span class="math-inline">f'(x) = xe<sup>-x</sup></span>.<br>ب) ادرس اتجاه تغير الدالة <span class="math-inline">f</span> وشكل جدول تغيراتها.</li>
                                    <li>اكتب معادلة المماس <span class="math-inline">(T)</span> للمنحنى <span class="math-inline">(C<sub>f</sub>)</span> عند النقطة ذات الفاصلة <span class="math-inline">0</span>.</li>
                                    <li>بين أن المعادلة <span class="math-inline">f(x) = 0</span> تقبل حلا وحيدا <span class="math-inline">&alpha;</span> حيث <span class="math-inline">-0.9 < &alpha; < -0.8</span>.</li>
                                    <li>ارسم المماس <span class="math-inline">(T)</span> والمنحنى <span class="math-inline">(C<sub>f</sub>)</span> (نأخذ <span class="math-inline">f(2) \approx 2.6</span>).</li>
                                    <li>ناقش بيانيا وحسب قيم الوسيط الحقيقي <span class="math-inline">m</span> عدد وإشارة حلول المعادلة: <span class="math-inline">f(x) = m</span>.</li>
                                </ol>
      </section>
    `
  },
  {
    id: "science-2009-exp-function-cycle",
    title: "موضوع بكالوريا الجزائر 2009 - علوم تجريبية - دورة 2009 - التمرين 28",
    branch: "science",
    year: "2009",
    date: "2009",
    source: "learn-exp-function",
    file: "",
    tags: ["exp", "study-functions", "asymptotes", "tangents", "discussion"],
    summary: "تمرين من دورة 2009 - التمرين 28 لشعبة علوم تجريبية من باب الدالة الأسية، منقول من باب التعلم إلى أرشيف بكالوريا الجزائر حسب الدورة.",
    statement: `
      <section class="statement-block">
        <h3>بكالوريا الجزائر 2009 - شعبة علوم تجريبية - دورة 2009 - التمرين 28</h3>
        <div><span>الجزء الأول (I):</span></div>
                                <p>الدالة <span class="math-inline">g</span> المعرفة على المجال <span class="math-inline">]0, +&infin;[</span> بـ: <span class="math-inline">g(x) = x<sup>2</sup> + 2 - 2\ln(x)</span></p>
                                <ol>
                                    <li>ادرس اتجاه تغير الدالة <span class="math-inline">g</span> ثم شكل جدول تغيراتها.</li>
                                    <li>استنتج أنه من أجل كل <span class="math-inline">x \in ]0, +&infin;[</span> فإن: <span class="math-inline">g(x) > 0</span>.</li>
                                </ol>
                                <div><span>الجزء الثاني (II):</span></div>
                                <p>الدالة <span class="math-inline">f</span> المعرفة على <span class="math-inline">]0, +&infin;[</span> بـ: <span class="math-inline">f(x) = x + <span class="frac"><span class="num">2\ln(x)</span><span class="den">x</span></span></span></p>
                                <p>و <span class="math-inline">(C<sub>f</sub>)</span> تمثيلها البياني في المستوي المنسوب إلى معلم متعامد ومتجانس.</p>
                                <ol>
                                    <li>احسب <span class="math-inline">lim<sub>x &rarr; 0^+</sub> f(x)</span> وفسر النتيجة هندسيا، ثم احسب <span class="math-inline">lim<sub>x &rarr; +&infin;</sub> f(x)</span>.</li>
                                    <li>أ) بين أنه من أجل كل <span class="math-inline">x \in ]0, +&infin;[</span> فإن: <span class="math-inline">f'(x) = <span class="frac"><span class="num">g(x)</span><span class="den">x<sup>2</sup></span></span></span>.<br>ب) استنتج اتجاه تغير الدالة <span class="math-inline">f</span> وشكل جدول تغيراتها.</li>
                                    <li>أ) بين أن المستقيم <span class="math-inline">(&Delta;)</span> ذو المعادلة <span class="math-inline">y = x</span> مقارب مائل للمنحنى <span class="math-inline">(C<sub>f</sub>)</span> عند <span class="math-inline">+&infin;</span>.<br>ب) ادرس وضعية المنحنى <span class="math-inline">(C<sub>f</sub>)</span> بالنسبة للمستقيم <span class="math-inline">(&Delta;)</span>.</li>
                                    <li>ارسم <span class="math-inline">(&Delta;)</span> و <span class="math-inline">(C<sub>f</sub>)</span>.</li>
                                </ol>
      </section>
    `
  },
  {
    id: "science-2008-exp-function-cycle",
    title: "موضوع بكالوريا الجزائر 2008 - علوم تجريبية - دورة 2008 - التمرين 33",
    branch: "science",
    year: "2008",
    date: "2008",
    source: "learn-exp-function",
    file: "",
    tags: ["exp", "study-functions", "asymptotes", "tangents", "discussion"],
    summary: "تمرين من دورة 2008 - التمرين 33 لشعبة علوم تجريبية من باب الدالة الأسية، منقول من باب التعلم إلى أرشيف بكالوريا الجزائر حسب الدورة.",
    statement: `
      <section class="statement-block">
        <h3>بكالوريا الجزائر 2008 - شعبة علوم تجريبية - دورة 2008 - التمرين 33</h3>
        <div><span>الجزء الأول (I):</span></div>
                                <p><span class="math-inline">f</span> الدالة العددية للمتغير الحقيقي <span class="math-inline">x</span> المعرفة على <span class="math-inline">R</span> كما يلي:</p>
                                <p>
                                    <span class="math-line">f(x) = (ax+b)e<sup>-x</sup> + 1</span>
                                </p>
                                <p>حيث <span class="math-inline">a</span> و <span class="math-inline">b</span> عددان حقيقيان و <span class="math-inline">(C<sub>f</sub>)</span> تمثيلها البياني في معلم متعامد و متجانس.</p>
                                <ol>
                                    <li>عين <span class="math-inline">a</span> و <span class="math-inline">b</span> بحيث تكون النقطة <span class="math-inline">A(-1; 1)</span> تنتمي إلى <span class="math-inline">(C<sub>f</sub>)</span> ومعامل توجيه المماس عند <span class="math-inline">A</span> يساوي <span class="math-inline">-e</span>.</li>
                                </ol>
        
                                <div><span>الجزء الثاني (II):</span></div>
                                <p>نعتبر الدالة العددية <span class="math-inline">g</span> للمتغير الحقيقي <span class="math-inline">x</span> المعرفة على <span class="math-inline">R</span> كما يلي:</p>
                                <p>
                                    <span class="math-line">g(x) = (-x-1)e<sup>-x</sup> + 1</span>
                                </p>
                                <p>و <span class="math-inline">(C<sub>g</sub>)</span> تمثيلها البياني في المعلم السابق.</p>
                                <ol>
                                    <li>أ) بين أن <span class="math-inline">lim<sub>x &rarr; +&infin;</sub> g(x) = 1</span> وفسر النتيجة بيانيا (يعطى <span class="math-inline">lim<sub>u &rarr; -&infin;</sub> ue<sup>u</sup> = 0</span>).</li>
                                    <li>ب) أدرس تغيرات الدالة <span class="math-inline">g</span> ، ثم أنشئ جدول تغيراتها.</li>
                                    <li>ج) بين أن <span class="math-inline">(C<sub>g</sub>)</span> يقبل نقطة انعطاف <span class="math-inline">I</span> يطلب تعيين احداثييها.</li>
                                    <li>د) اكتب معادلة المماس للمنحنى <span class="math-inline">(C<sub>g</sub>)</span> عند النقطة <span class="math-inline">I</span>.</li>
                                    <li>هـ) أرسم <span class="math-inline">(C<sub>g</sub>)</span>.</li>
                                </ol>
        
                                <div><span>الجزء الثالث (III):</span></div>
                                <p><span class="math-inline">k</span> الدالة المعرفة على <span class="math-inline">R</span> بـ: <span class="math-inline">k(x) = g(x<sup>2</sup>)</span>.</p>
                                <ol>
                                    <li>باستعمال مشتقة دالة مركبة ، عين اتجاه تغير الدالة <span class="math-inline">k</span> ثم شكل جدول تغيراتها.</li>
                                </ol>
      </section>
    `
  },
  {
    id: "management-2025-log-exp",
    title: "موضوع بكالوريا 2025 - التسيير والاقتصاد",
    branch: "management",
    year: "2025",
    date: "2025",
    source: "local",
    file: "assets/dzexams-docs-3as-904886.pdf",
    tags: ["ln", "equations", "study-functions"],
    summary: "موضوع بكالوريا موجه لشعبة التسيير والاقتصاد في محور الدوال، مع التركيز على القراءة البيانية والمعادلات."
  },
  {
    id: "math-2025-log-exp",
    title: "بكالوريا 2025 رياضيات - الموضوع الأول: دراسة دالة أسية",
    branch: "math",
    year: "2025",
    date: "2025",
    source: "inline",
    file: "",
    tags: ["exp", "study-functions", "equations"],
    summary: "التمرين الرابع (07 نقاط) من بكالوريا 2025 لشعبة رياضيات، الموضوع الأول: دراسة دالة أسية، النهايات، المقاربات، المشتقة، المماس، المساحة، ودالة مركبة.",
    statement: `
      <div class="official-exam">
        <h3>بكالوريا 2025 رياضيات - الموضوع الأول</h3>
        <p class="part"><strong>التمرين الرابع: (07 نقاط)</strong></p>

        <p class="part"><strong>I)</strong> الدالة <span class="math-inline">g</span> المعرفة على <span class="math-inline">ℝ</span> بـ:
          <span class="math-line">g(x) = 1 + x e<sup>x</sup></span>
        </p>
        <ol>
          <li>ادرس اتجاه تغير الدالة <span class="math-inline">g</span> ثم استنتج أنه من أجل كل عدد حقيقي <span class="math-inline">x</span>:
            <span class="math-line">1 + x e<sup>x</sup> &gt; 0</span>.
          </li>
          <li>الدالة <span class="math-inline">h</span> المعرفة على <span class="math-inline">ℝ</span> بـ:
            <span class="math-line">h(x) = (x<sup>2</sup> + 1) e<sup>2x</sup> + (x - 2) e<sup>x</sup> + 1</span>.
            <br>تمثيلها البياني <span class="math-inline">(C<sub>h</sub>)</span> يقطع محور الفواصل في نقطتين فاصلتاهما <span class="math-inline">0</span> و <span class="math-inline">α</span>، كما في الشكل المقابل.
            <ol type="أ">
              <li>بقراءة بيانية، حدد إشارة <span class="math-inline">h(x)</span> على <span class="math-inline">ℝ</span>.</li>
              <li>تحقق أنّ: <span class="math-line">-0,7 &lt; α &lt; -0,6</span>.</li>
            </ol>
          </li>
        </ol>

        <p class="part"><strong>II)</strong> الدالة <span class="math-inline">f</span> المعرفة على <span class="math-inline">ℝ</span> بـ:
          <span class="math-line">f(x) = 2x + <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>2 - 2 e<sup>x</sup></span><span style="display:block;border-top:1px solid #000;">1 + x e<sup>x</sup></span></span></span>
        </p>
        <p>و <span class="math-inline">(C<sub>f</sub>)</span> تمثيلها البياني في المستوي المنسوب إلى المعلم المتعامد والمتجانس <span class="math-inline">(O; i⃗, j⃗)</span>، وحدة الطول <span class="math-inline">2 cm</span>.</p>
        <ol>
          <li>
            <ol type="أ">
              <li>احسب <span class="math-line"><span class="lim"><strong>lim</strong><small>x→-∞</small></span> f(x)</span> و بين أنّ: <span class="math-line"><span class="lim"><strong>lim</strong><small>x→+∞</small></span> f(x) = +∞</span>.</li>
              <li>بين أنّ المستقيم <span class="math-inline">(Δ)</span> ذا المعادلة <span class="math-inline">y = 2x + 2</span> مقارب مائل للمنحنى <span class="math-inline">(C<sub>f</sub>)</span> عند <span class="math-inline">-∞</span>.</li>
              <li>بين أنّ المستقيم <span class="math-inline">(Δ')</span> ذا المعادلة <span class="math-inline">y = 2x</span> مقارب مائل للمنحنى <span class="math-inline">(C<sub>f</sub>)</span> عند <span class="math-inline">+∞</span>.</li>
              <li>ادرس وضعية كلّ من <span class="math-inline">(Δ)</span> و <span class="math-inline">(Δ')</span> بالنسبة إلى <span class="math-inline">(C<sub>f</sub>)</span>.</li>
            </ol>
          </li>
          <li>
            <ol type="أ">
              <li>بين أنّه من أجل كل عدد حقيقي <span class="math-inline">x</span>:
                <span class="math-line">f′(x) = <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>2 h(x)</span><span style="display:block;border-top:1px solid #000;">(1 + x e<sup>x</sup>)<sup>2</sup></span></span></span>.
              </li>
              <li>استنتج اتجاه تغير الدالة <span class="math-inline">f</span> ثم شكّل جدول تغيّراتها.</li>
            </ol>
          </li>
          <li>ارسم <span class="math-inline">(Δ)</span> و <span class="math-inline">(Δ')</span> و <span class="math-inline">(C<sub>f</sub>)</span>. <span class="math-inline">(f(α) ≃ 0,15)</span>.</li>
          <li>
            <ol type="أ">
              <li>تحقق أنّه من أجل كل عدد حقيقي <span class="math-inline">x</span>:
                <span class="math-line">1 - <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>1 - e<sup>x</sup></span><span style="display:block;border-top:1px solid #000;">1 + x e<sup>x</sup></span></span> = <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>(x + 1) e<sup>x</sup></span><span style="display:block;border-top:1px solid #000;">1 + x e<sup>x</sup></span></span></span>.
              </li>
              <li>استنتج بالتكامل بالتجزيئة حساب المساحة <span class="math-inline">A</span> للحيز المستوي المحدد بالمنحنى <span class="math-inline">(C<sub>f</sub>)</span> والمستقيمات التي معادلاتها: <span class="math-line">x = 0</span> و <span class="math-line">x = 1</span> و <span class="math-line">y = 2x + 2</span>.</li>
            </ol>
          </li>
          <li>الدالة <span class="math-inline">k</span> المعرفة على <span class="math-inline">ℝ</span> بـ: <span class="math-line">k(x) = f(x<sup>2</sup>)</span>.
            <ol type="أ">
              <li>دون حساب عبارة <span class="math-inline">k(x)</span>، حدد اتجاه تغير الدالة <span class="math-inline">k</span>.</li>
              <li>ثم شكّل جدول تغيّراتها.</li>
            </ol>
          </li>
        </ol>
      </div>
    `,
    solution: `
      <h3>الحل التفصيلي</h3>

      <h4>I - دراسة الدالتين g و h</h4>
      <ol>
        <li>
          الدالة <span class="math-inline">g(x) = 1 + x e<sup>x</sup></span> مشتقة على <span class="math-inline">ℝ</span> و:
          <span class="math-line">g′(x) = (1 + x) e<sup>x</sup></span>.
          بما أن <span class="math-inline">e<sup>x</sup> &gt; 0</span>، فإن إشارة <span class="math-inline">g′(x)</span> هي إشارة <span class="math-inline">(1 + x)</span>.
          إذن <span class="math-inline">g</span> متناقصة تماما على <span class="math-inline">]-∞, -1]</span> ومتزايدة تماما على <span class="math-inline">[-1, +∞[</span>.
          قيمتها الصغرى هي <span class="math-inline">g(-1) = 1 - e<sup>-1</sup> = 1 - 1/e &gt; 0</span>.
          ومنه من أجل كل <span class="math-inline">x ∈ ℝ</span>:
          <span class="math-line">g(x) &gt; 0</span>، أي <span class="math-line">1 + x e<sup>x</sup> &gt; 0</span>.
        </li>
        <li>
          <ol type="أ">
            <li>
              من الشكل، المنحنى <span class="math-inline">(C<sub>h</sub>)</span> يقطع محور الفواصل عند <span class="math-inline">x = 0</span> و <span class="math-inline">x = α</span> حيث <span class="math-inline">α &lt; 0</span>.
              ومنه:
              <span class="math-line">h(x) &gt; 0</span> على <span class="math-inline">]-∞, α[ ∪ ]0, +∞[</span>،
              و <span class="math-line">h(x) &lt; 0</span> على <span class="math-inline">]α, 0[</span>.
            </li>
            <li>
              نحسب:
              <span class="math-line">h(-0,7) ≃ 0,03 &gt; 0</span> و <span class="math-line">h(-0,6) ≃ -0,02 &lt; 0</span>.
              وبما أن <span class="math-inline">h</span> متصلة وتغيّر إشارتها بين <span class="math-inline">-0,7</span> و <span class="math-inline">-0,6</span>، فإنّ:
              <span class="math-line">-0,7 &lt; α &lt; -0,6</span>.
            </li>
          </ol>
        </li>
      </ol>

      <h4>II - دراسة الدالة f</h4>
      <ol>
        <li>
          <ol type="أ">
            <li>
              لدينا <span class="math-inline">f(x) = 2x + <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>2 - 2 e<sup>x</sup></span><span style="display:block;border-top:1px solid #fff;">1 + x e<sup>x</sup></span></span></span>.
              عند <span class="math-inline">x → +∞</span>، الحد الكسري يؤول إلى <span class="math-inline">0</span> (لأنّ البسط يؤول إلى <span class="math-inline">-∞</span> والمقام يؤول إلى <span class="math-inline">+∞</span> بشكل أسرع)، ومنه:
              <span class="math-line"><span class="lim"><strong>lim</strong><small>x→+∞</small></span> f(x) = +∞</span>.
              عند <span class="math-inline">x → -∞</span>، نضع <span class="math-inline">u = -x</span> فإنّ <span class="math-inline">u → +∞</span>، و:
              <span class="math-line">f(x) = -2u + <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>2 - 2 e<sup>-u</sup></span><span style="display:block;border-top:1px solid #fff;">1 - u e<sup>-u</sup></span></span></span>.
              عندما <span class="math-inline">u → +∞</span>، <span class="math-inline">e<sup>-u</sup> → 0</span>، إذن الحد الكسري يؤول إلى <span class="math-inline">2</span>، وبالتالي:
              <span class="math-line"><span class="lim"><strong>lim</strong><small>x→-∞</small></span> f(x) = -∞</span>.
            </li>
            <li>
              نحسب:
              <span class="math-line">f(x) - (2x + 2) = <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>2 - 2 e<sup>x</sup></span><span style="display:block;border-top:1px solid #fff;">1 + x e<sup>x</sup></span></span> - 2 = -<span style="display:inline-block;vertical-align:middle;text-align:center;"><span>2(x + 1) e<sup>x</sup></span><span style="display:block;border-top:1px solid #fff;">1 + x e<sup>x</sup></span></span></span>.
              عند <span class="math-inline">x → -∞</span>، <span class="math-inline">e<sup>x</sup> → 0</span>، إذن:
              <span class="math-line"><span class="lim"><strong>lim</strong><small>x→-∞</small></span> [f(x) - (2x + 2)] = 0</span>.
              وبالتالي <span class="math-inline">(Δ): y = 2x + 2</span> مقارب مائل للمنحنى عند <span class="math-inline">-∞</span>.
            </li>
            <li>
              نحسب:
              <span class="math-line">f(x) - 2x = <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>2 - 2 e<sup>x</sup></span><span style="display:block;border-top:1px solid #fff;">1 + x e<sup>x</sup></span></span></span>.
              عند <span class="math-inline">x → +∞</span>، هذا الحد يؤول إلى <span class="math-inline">0</span>، إذن:
              <span class="math-line"><span class="lim"><strong>lim</strong><small>x→+∞</small></span> [f(x) - 2x] = 0</span>.
              وبالتالي <span class="math-inline">(Δ'): y = 2x</span> مقارب مائل للمنحنى عند <span class="math-inline">+∞</span>.
            </li>
            <li>
              لدينا:
              <span class="math-line">f(x) - (2x + 2) = -<span style="display:inline-block;vertical-align:middle;text-align:center;"><span>2(x + 1) e<sup>x</sup></span><span style="display:block;border-top:1px solid #fff;">1 + x e<sup>x</sup></span></span></span>.
              بما أنّ <span class="math-inline">1 + x e<sup>x</sup> &gt; 0</span> و <span class="math-inline">e<sup>x</sup> &gt; 0</span>، فإنّ إشارة الفرق هي إشارة <span class="math-inline">-(x + 1)</span>.
              إذن <span class="math-inline">(C<sub>f</sub>)</span> أعلى <span class="math-inline">(Δ)</span> إذا <span class="math-inline">x &lt; -1</span>، وأسفله إذا <span class="math-inline">x &gt; -1</span>، ويقطعه عند <span class="math-inline">x = -1</span> في النقطة <span class="math-inline">A(-1, 0)</span>.
              <br><br>
              كذلك:
              <span class="math-line">f(x) - 2x = <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>2 - 2 e<sup>x</sup></span><span style="display:block;border-top:1px solid #fff;">1 + x e<sup>x</sup></span></span></span>.
              إشارة البسط هي إشارة <span class="math-inline">(1 - e<sup>x</sup>)</span>، أي موجبة لـ <span class="math-inline">x &lt; 0</span> وسالبة لـ <span class="math-inline">x &gt; 0</span>.
              إذن <span class="math-inline">(C<sub>f</sub>)</span> أعلى <span class="math-inline">(Δ')</span> إذا <span class="math-inline">x &lt; 0</span>، وأسفله إذا <span class="math-inline">x &gt; 0</span>، ويقطعه عند <span class="math-inline">x = 0</span> في النقطة <span class="math-inline">O(0, 0)</span>.
            </li>
          </ol>
        </li>
        <li>
          <ol type="أ">
            <li>
              بالاشتقاق:
              <span class="math-line">f′(x) = 2 + 2 · <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>-e<sup>x</sup>(1 + x e<sup>x</sup>) - (1 - e<sup>x</sup>)(e<sup>x</sup> + x e<sup>x</sup>)</span><span style="display:block;border-top:1px solid #fff;">(1 + x e<sup>x</sup>)<sup>2</sup></span></span></span>.
              بعد التبسيط نجد:
              <span class="math-line">f′(x) = <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>2 h(x)</span><span style="display:block;border-top:1px solid #fff;">(1 + x e<sup>x</sup>)<sup>2</sup></span></span></span>.
            </li>
            <li>
              بما أنّ <span class="math-inline">(1 + x e<sup>x</sup>)<sup>2</sup> &gt; 0</span>، فإنّ إشارة <span class="math-inline">f′(x)</span> هي إشارة <span class="math-inline">h(x)</span>.
              من دراسة <span class="math-inline">h</span>، نستنتج أنّ <span class="math-inline">f</span>:
              <ul>
                <li>متزايدة تماما على <span class="math-inline">]-∞, α]</span></li>
                <li>متناقصة تماما على <span class="math-inline">[α, 0]</span></li>
                <li>متزايدة تماما على <span class="math-inline">[0, +∞[</span></li>
              </ul>
              <table class="variation-table" aria-label="جدول تغيرات الدالة f">
                <tr>
                  <th>x</th>
                  <td class="interval">-∞</td>
                  <td class="interval">α</td>
                  <td class="interval">0</td>
                  <td class="interval">+∞</td>
                </tr>
                <tr>
                  <th>f′(x)</th>
                  <td>+</td>
                  <td>0</td>
                  <td>0</td>
                  <td>+</td>
                </tr>
                <tr>
                  <th>f(x)</th>
                  <td>-∞</td>
                  <td>↗ f(α) ↘</td>
                  <td>0</td>
                  <td>↗ +∞</td>
                </tr>
              </table>
              حيث <span class="math-inline">f(α) ≃ 0,15</span>.
            </li>
          </ol>
        </li>
        <li>
          يستعمل المقاربان <span class="math-inline">(Δ)</span> و <span class="math-inline">(Δ')</span> والنقطتان <span class="math-inline">A(-1, 0)</span> و <span class="math-inline">O(0, 0)</span> ونقطة الذروة <span class="math-inline">(α, f(α))</span> لرسم المنحنى.
        </li>
        <li>
          <ol type="أ">
            <li>
              نحسب:
              <span class="math-line">1 - <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>1 - e<sup>x</sup></span><span style="display:block;border-top:1px solid #fff;">1 + x e<sup>x</sup></span></span> = <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>(1 + x e<sup>x</sup>) - (1 - e<sup>x</sup>)</span><span style="display:block;border-top:1px solid #fff;">1 + x e<sup>x</sup></span></span> = <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>(x + 1) e<sup>x</sup></span><span style="display:block;border-top:1px solid #fff;">1 + x e<sup>x</sup></span></span></span>.
            </li>
            <li>
              المساحة المطلوبة (بوحدة المساحة) هي:
              <span class="math-line">A = ∫<sub>0</sub><sup>1</sup> [(2x + 2) - f(x)] dx</span>.
              أي:
              <span class="math-line">A = ∫<sub>0</sub><sup>1</sup> <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>2(x + 1) e<sup>x</sup></span><span style="display:block;border-top:1px solid #fff;">1 + x e<sup>x</sup></span></span> dx</span>.
              نلاحظ أنّ المشتقة للدالة <span class="math-inline">x ↦ ln(1 + x e<sup>x</sup>)</span> هي <span class="math-inline"><span style="display:inline-block;vertical-align:middle;text-align:center;"><span>(x + 1) e<sup>x</sup></span><span style="display:block;border-top:1px solid #fff;">1 + x e<sup>x</sup></span></span></span>.
              إذن:
              <span class="math-line">A = 2 [ln(1 + x e<sup>x</sup>)]<sub>0</sub><sup>1</sup> = 2 [ln(1 + e) - ln(1)] = 2 ln(e + 1)</span>.
              بوحدة الطول <span class="math-inline">2 cm</span>، المساحة بالسنتيمتر المربع هي:
              <span class="math-line">A = 4 × 2 ln(e + 1) = 8 ln(e + 1) cm<sup>2</sup></span>.
            </li>
          </ol>
        </li>
        <li>
          <ol type="أ">
            <li>
              الدالة <span class="math-inline">k(x) = f(x<sup>2</sup>)</span> مشتقة على <span class="math-inline">ℝ</span> و:
              <span class="math-line">k′(x) = 2x · f′(x<sup>2</sup>)</span>.
              بما أنّ <span class="math-inline">f′(x<sup>2</sup>) &gt; 0</span> لكلّ <span class="math-inline">x</span> (لأنّ <span class="math-inline">x<sup>2</sup> ≥ 0</span> و <span class="math-inline">f′</span> موجبة على <span class="math-inline">[0, +∞[</span>)، فإنّ إشارة <span class="math-inline">k′(x)</span> هي إشارة <span class="math-inline">x</span>.
            </li>
            <li>
              إذن <span class="math-inline">k</span> متناقصة تماما على <span class="math-inline">]-∞, 0]</span> ومتزايدة تماما على <span class="math-inline">[0, +∞[</span>.
              <table class="variation-table" aria-label="جدول تغيرات الدالة k">
                <tr>
                  <th>x</th>
                  <td class="interval">-∞</td>
                  <td class="interval">0</td>
                  <td class="interval">+∞</td>
                </tr>
                <tr>
                  <th>k′(x)</th>
                  <td>-</td>
                  <td>0</td>
                  <td>+</td>
                </tr>
                <tr>
                  <th>k(x)</th>
                  <td>+∞</td>
                  <td>↘ f(0) = 0 ↗</td>
                  <td>+∞</td>
                </tr>
              </table>
            </li>
          </ol>
        </li>
      </ol>
    `
  },
  {
    id: "math-2025-topic2-ln",
    title: "بكالوريا 2025 رياضيات - الموضوع الثاني: دراسة دالة لوغارتمية",
    branch: "math",
    year: "2025",
    date: "2025",
    source: "inline",
    file: "",
    tags: ["ln", "study-functions", "equations"],
    summary: "التمرين الرابع (07 نقاط) من بكالوريا 2025 لشعبة رياضيات، الموضوع الثاني: دراسة دالة لوغارتمية، النهايات، المماسان، نقطة الانعطاف، التكامل، والمساحة.",
    statement: `
      <div class="official-exam">
        <h3>بكالوريا 2025 رياضيات - الموضوع الثاني</h3>
        <p class="part"><strong>التمرين الرابع: (07 نقاط)</strong></p>

        <p class="part"><strong>I)</strong> الدالتان <span class="math-inline">g</span> و <span class="math-inline">h</span> المعرفتان على <span class="math-inline">]0, +∞[</span> بـ:
          <span class="math-line">g(x) = -x + (4 - x) ln x</span>
          و
          <span class="math-line">h(x) = 4 - x - 4 ln x</span>.
        </p>
        <p>تمثيلاهما البيانيان <span class="math-inline">(C<sub>g</sub>)</span> و <span class="math-inline">(C<sub>h</sub>)</span> مرسومان في الشكل المقابل.</p>
        <ol>
          <li>المنحنى <span class="math-inline">(C<sub>h</sub>)</span> يقطع محور الفواصل في النقطة ذات الفاصلة <span class="math-inline">α</span>. بقراءة بيانية، حدد إشارة كلّ من <span class="math-inline">g(x)</span> و <span class="math-inline">h(x)</span>.</li>
          <li>تحقق أنّ: <span class="math-line">1,7 &lt; α &lt; 1,8</span>.</li>
        </ol>

        <p class="part"><strong>II)</strong> الدالة <span class="math-inline">f</span> المعرفة على <span class="math-inline">]0, +∞[</span> بـ:
          <span class="math-line">f(x) = (-x + 2 ln x) ln x</span>
        </p>
        <p>و <span class="math-inline">(C<sub>f</sub>)</span> تمثيلها البياني في المستوي المنسوب إلى المعلم المتعامد والمتجانس <span class="math-inline">(O; i⃗, j⃗)</span>.</p>
        <ol>
          <li>
            <ol type="أ">
              <li>احسب <span class="math-line"><span class="lim"><strong>lim</strong><small>x→0<sup>+</sup></small></span> f(x)</span> و <span class="math-line"><span class="lim"><strong>lim</strong><small>x→+∞</small></span> f(x)</span>.</li>
              <li>بين أنّه من أجل كل <span class="math-inline">x ∈ ]0, +∞[</span>:
                <span class="math-line">f′(x) = <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>g(x)</span><span style="display:block;border-top:1px solid #000;">x</span></span></span>.
              </li>
              <li>استنتج اتجاه تغير الدالة <span class="math-inline">f</span> ثم شكّل جدول تغيّراتها.</li>
            </ol>
          </li>
          <li>بين أنّ المنحنى <span class="math-inline">(C<sub>f</sub>)</span> يقبل مماسين <span class="math-inline">(T)</span> و <span class="math-inline">(T')</span> معامّل توجيه كلّ منهما <span class="math-inline">-1</span>. عيّن معادلة لكلّ منهما.</li>
          <li>
            <ol type="أ">
              <li>بين أنّه من أجل كل <span class="math-inline">x ∈ ]0, +∞[</span>:
                <span class="math-line">f″(x) = <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>h(x)</span><span style="display:block;border-top:1px solid #000;">x<sup>2</sup></span></span></span>.
              </li>
              <li>استنتج أنّ للمنحنى <span class="math-inline">(C<sub>f</sub>)</span> نقطة انعطاف يطلب تعيين إحداثييها.</li>
            </ol>
          </li>
          <li>احسب <span class="math-inline">f(e²)</span> ثم ارسم <span class="math-inline">(T)</span> و <span class="math-inline">(T')</span> و <span class="math-inline">(C<sub>f</sub>)</span>.</li>
          <li>
            <ol type="أ">
              <li>بين أنّ الدالة <span class="math-inline">k</span> المعرفة على <span class="math-inline">]0, +∞[</span> بـ:
                <span class="math-line">k(x) = x (ln x)² - 2x ln x + 2x</span>
                أصلية للدالة <span class="math-inline">x ↦ (ln x)²</span>.
              </li>
              <li>باستعمال المكاملة بالتجزيئة، بين أنّ:
                <span class="math-line">∫<sub>1</sub><sup>e</sup> x ln x dx = <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>e² + 1</span><span style="display:block;border-top:1px solid #000;">4</span></span></span>.
              </li>
              <li>استنتج بوحدة المساحة حساب مساحة <span class="math-inline">A</span> للحيز المستوي المحدد بالمنحنى <span class="math-inline">(C<sub>f</sub>)</span> والمستقيمات التي معادلاتها:
                <span class="math-line">x = 1</span> و <span class="math-line">x = e</span> و <span class="math-line">y = 0</span>.
              </li>
            </ol>
          </li>
          <li>الدالة <span class="math-inline">φ</span> المعرفة على <span class="math-inline">]0, +∞[</span> بـ: <span class="math-line">φ(x) = f(<span style="display:inline-block;vertical-align:middle;text-align:center;"><span>1</span><span style="display:block;border-top:1px solid #000;">x</span></span>)</span>.
            <ol type="أ">
              <li>دون حساب عبارة <span class="math-inline">φ(x)</span>، حدد اتجاه تغير الدالة <span class="math-inline">φ</span>.</li>
              <li>ثم شكّل جدول تغيّراتها.</li>
            </ol>
          </li>
        </ol>
      </div>
    `,
    solution: `
      <h3>الحل التفصيلي</h3>

      <h4>I - دراسة الدالتين المساعدتين</h4>
      <ol>
        <li>
          من الشكل، المنحنى <span class="math-inline">(C<sub>h</sub>)</span> يقطع محور الفواصل عند <span class="math-inline">x = α</span> حيث <span class="math-inline">1 &lt; α &lt; 2</span>.
          <ul>
            <li>إشارة <span class="math-inline">h(x)</span>: موجبة على <span class="math-inline">]0, α[</span>، سالبة على <span class="math-inline">]α, +∞[</span>، و <span class="math-inline">h(α) = 0</span>.</li>
            <li>إشارة <span class="math-inline">g(x)</span>: من الشكل، <span class="math-inline">g(x)</span> موجبة على <span class="math-inline">]0, α[</span>، سالبة على <span class="math-inline">]α, +∞[</span>، و <span class="math-inline">g(α) = 0</span>.</li>
          </ul>
        </li>
        <li>
          نحسب:
          <span class="math-line">h(1,7) ≃ 0,18 &gt; 0</span> و <span class="math-line">h(1,8) ≃ -0,15 &lt; 0</span>.
          وبما أنّ <span class="math-inline">h</span> متصلة وتغيّر إشارتها بين <span class="math-inline">1,7</span> و <span class="math-inline">1,8</span>، فإنّ:
          <span class="math-line">1,7 &lt; α &lt; 1,8</span>.
        </li>
      </ol>

      <h4>II - دراسة الدالة f</h4>
      <ol>
        <li>
          <ol type="أ">
            <li>
              لدينا <span class="math-inline">f(x) = (-x + 2 ln x) ln x = -x ln x + 2 (ln x)²</span>.
              <br>عند <span class="math-inline">x → 0<sup>+</sup></span>: <span class="math-inline">x ln x → 0</span> و <span class="math-inline">(ln x)² → +∞</span>، إذن:
              <span class="math-line"><span class="lim"><strong>lim</strong><small>x→0<sup>+</sup></small></span> f(x) = +∞</span>.
              <br>عند <span class="math-inline">x → +∞</span>: <span class="math-inline">-x ln x → -∞</span> و <span class="math-inline">2(ln x)² → +∞</span>، والحدّ الغالب هو <span class="math-inline">-x ln x</span>، إذن:
              <span class="math-line"><span class="lim"><strong>lim</strong><small>x→+∞</small></span> f(x) = -∞</span>.
            </li>
            <li>
              بالاشتقاق:
              <span class="math-line">f′(x) = (-1 + <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>2</span><span style="display:block;border-top:1px solid #fff;">x</span></span>) ln x + (-x + 2 ln x) · <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>1</span><span style="display:block;border-top:1px solid #fff;">x</span></span></span>.
              بعد التبسيط:
              <span class="math-line">f′(x) = <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>-x + (4 - x) ln x</span><span style="display:block;border-top:1px solid #fff;">x</span></span> = <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>g(x)</span><span style="display:block;border-top:1px solid #fff;">x</span></span></span>.
            </li>
            <li>
              بما أنّ <span class="math-inline">x &gt; 0</span>، فإنّ إشارة <span class="math-inline">f′(x)</span> هي إشارة <span class="math-inline">g(x)</span>.
              من قراءة الشكل: <span class="math-inline">g(x) &gt; 0</span> على <span class="math-inline">]0, α[</span> و <span class="math-inline">g(x) &lt; 0</span> على <span class="math-inline">]α, +∞[</span>.
              إذن <span class="math-inline">f</span> متزايدة تماما على <span class="math-inline">]0, α]</span> ومتناقصة تماما على <span class="math-inline">[α, +∞[</span>.
              <table class="variation-table" aria-label="جدول تغيرات الدالة f">
                <tr>
                  <th>x</th>
                  <td class="interval">0</td>
                  <td class="interval">α</td>
                  <td class="interval">+∞</td>
                </tr>
                <tr>
                  <th>f′(x)</th>
                  <td>+</td>
                  <td>0</td>
                  <td>-</td>
                </tr>
                <tr>
                  <th>f(x)</th>
                  <td>+∞</td>
                  <td>↘ f(α) ↗</td>
                  <td>-∞</td>
                </tr>
              </table>
            </li>
          </ol>
        </li>
        <li>
          المماس ذو معامل توجيه <span class="math-inline">-1</span> يتحقق عندما <span class="math-inline">f′(x) = -1</span>.
          <span class="math-line"><span style="display:inline-block;vertical-align:middle;text-align:center;"><span>g(x)</span><span style="display:block;border-top:1px solid #fff;">x</span></span> = -1 ⇔ g(x) = -x ⇔ (4 - x) ln x = 0</span>.
          إذن <span class="math-inline">x = 1</span> أو <span class="math-inline">x = 4</span>.
          <ul>
            <li>عند <span class="math-inline">x = 1</span>: <span class="math-inline">f(1) = 0</span>. معادلة المماس: <span class="math-inline">(T): y = -x + 1</span>.</li>
            <li>عند <span class="math-inline">x = 4</span>: <span class="math-inline">f(4) = (-4 + 2 ln 4) ln 4 = -4 ln 4 + 8 (ln 2)²</span>. معادلة المماس:
              <span class="math-inline">(T'): y = -x + 4 - 8 ln 2 + 8 (ln 2)²</span>.
            </li>
          </ul>
        </li>
        <li>
          <ol type="أ">
            <li>
              باشتقاق <span class="math-inline">f′(x) = <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>g(x)</span><span style="display:block;border-top:1px solid #fff;">x</span></span></span>:
              <span class="math-line">f″(x) = <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>g′(x) · x - g(x)</span><span style="display:block;border-top:1px solid #fff;">x²</span></span></span>.
              بحساب <span class="math-inline">g′(x) = -1 - ln x + <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>4 - x</span><span style="display:block;border-top:1px solid #fff;">x</span></span></span>، وبعد التبسيط نجد:
              <span class="math-line">f″(x) = <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>4 - x - 4 ln x</span><span style="display:block;border-top:1px solid #fff;">x²</span></span> = <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>h(x)</span><span style="display:block;border-top:1px solid #fff;">x²</span></span></span>.
            </li>
            <li>
              بما أنّ <span class="math-inline">x² &gt; 0</span>، فإنّ إشارة <span class="math-inline">f″(x)</span> هي إشارة <span class="math-inline">h(x)</span>.
              تتغيّر إشارة <span class="math-inline">h</span> عند <span class="math-inline">x = α</span>، إذن للمنحنى <span class="math-inline">(C<sub>f</sub>)</span> نقطة انعطاف واحدة هي <span class="math-inline">B(α, f(α))</span>.
            </li>
          </ol>
        </li>
        <li>
          نحسب:
          <span class="math-line">f(e²) = (-e² + 2 ln e²) ln e² = (-e² + 4) · 2 = 8 - 2e²</span>.
          نرسم المماسين <span class="math-inline">(T)</span> و <span class="math-inline">(T')</span> والمنحنى باستعمال النقاط والجدول.
        </li>
        <li>
          <ol type="أ">
            <li>
              نشتق <span class="math-inline">k(x) = x (ln x)² - 2x ln x + 2x</span>:
              <span class="math-line">k′(x) = (ln x)² + x · 2 · <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>ln x</span><span style="display:block;border-top:1px solid #fff;">x</span></span> - 2 ln x - 2x · <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>1</span><span style="display:block;border-top:1px solid #fff;">x</span></span> + 2</span>.
              بعد التبسيط: <span class="math-line">k′(x) = (ln x)²</span>.
              إذن <span class="math-inline">k</span> أصلية للدالة <span class="math-inline">x ↦ (ln x)²</span>.
            </li>
            <li>
              بالتكامل بالتجزيئة <span class="math-inline">∫ x ln x dx</span> مع <span class="math-inline">u = ln x</span> و <span class="math-inline">dv = x dx</span>:
              <span class="math-line">∫<sub>1</sub><sup>e</sup> x ln x dx = [<span style="display:inline-block;vertical-align:middle;text-align:center;"><span>x²</span><span style="display:block;border-top:1px solid #fff;">2</span></span> ln x]<sub>1</sub><sup>e</sup> - ∫<sub>1</sub><sup>e</sup> <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>x</span><span style="display:block;border-top:1px solid #fff;">2</span></span> dx = <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>e²</span><span style="display:block;border-top:1px solid #fff;">2</span></span> - [<span style="display:inline-block;vertical-align:middle;text-align:center;"><span>x²</span><span style="display:block;border-top:1px solid #fff;">4</span></span>]<sub>1</sub><sup>e</sup> = <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>e² + 1</span><span style="display:block;border-top:1px solid #fff;">4</span></span></span>.
            </li>
            <li>
              المساحة المطلوبة هي:
              <span class="math-line">A = -∫<sub>1</sub><sup>e</sup> f(x) dx</span> (لأنّ <span class="math-inline">f(x) ≤ 0</span> على <span class="math-inline">[1, e]</span>).
              لدينا:
              <span class="math-line">∫<sub>1</sub><sup>e</sup> f(x) dx = -∫<sub>1</sub><sup>e</sup> x ln x dx + 2 ∫<sub>1</sub><sup>e</sup> (ln x)² dx</span>.
              باستعمال الأصلية <span class="math-inline">k</span>:
              <span class="math-line">∫<sub>1</sub><sup>e</sup> (ln x)² dx = k(e) - k(1) = e - 2</span>.
              إذن:
              <span class="math-line">∫<sub>1</sub><sup>e</sup> f(x) dx = -<span style="display:inline-block;vertical-align:middle;text-align:center;"><span>e² + 1</span><span style="display:block;border-top:1px solid #fff;">4</span></span> + 2(e - 2) = <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>-e² + 8e - 17</span><span style="display:block;border-top:1px solid #fff;">4</span></span></span>.
              وبالتالي:
              <span class="math-line">A = <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>e² - 8e + 17</span><span style="display:block;border-top:1px solid #fff;">4</span></span> u.a.</span>.
            </li>
          </ol>
        </li>
        <li>
          <ol type="أ">
            <li>
              الدالة <span class="math-inline">φ(x) = f(<span style="display:inline-block;vertical-align:middle;text-align:center;"><span>1</span><span style="display:block;border-top:1px solid #fff;">x</span></span>)</span> مشتقة على <span class="math-inline">]0, +∞[</span> و:
              <span class="math-line">φ′(x) = -<span style="display:inline-block;vertical-align:middle;text-align:center;"><span>1</span><span style="display:block;border-top:1px solid #fff;">x²</span></span> · f′(<span style="display:inline-block;vertical-align:middle;text-align:center;"><span>1</span><span style="display:block;border-top:1px solid #fff;">x</span></span>)</span>.
              بما أنّ <span class="math-inline">f′(<span style="display:inline-block;vertical-align:middle;text-align:center;"><span>1</span><span style="display:block;border-top:1px solid #fff;">x</span></span>)</span> موجبة على <span class="math-inline">]0, 1/α[</span> وسالبة على <span class="math-inline">]1/α, +∞[</span>، فإنّ <span class="math-inline">φ′(x)</span> سالبة على <span class="math-inline">]0, 1/α[</span> وموجبة على <span class="math-inline">]1/α, +∞[</span>.
            </li>
            <li>
              إذن <span class="math-inline">φ</span> متناقصة تماما على <span class="math-inline">]0, 1/α]</span> ومتزايدة تماما على <span class="math-inline">[1/α, +∞[</span>.
              <table class="variation-table" aria-label="جدول تغيرات الدالة φ">
                <tr>
                  <th>x</th>
                  <td class="interval">0</td>
                  <td class="interval">1/α</td>
                  <td class="interval">+∞</td>
                </tr>
                <tr>
                  <th>φ′(x)</th>
                  <td>-</td>
                  <td>0</td>
                  <td>+</td>
                </tr>
                <tr>
                  <th>φ(x)</th>
                  <td>+∞</td>
                  <td>↘ φ(1/α) ↗</td>
                  <td>-∞</td>
                </tr>
              </table>
            </li>
          </ol>
        </li>
      </ol>
    `
  },
  {
    id: "bac-algeria-tech-2025-ex34",
    title: "موضوع بكالوريا الجزائر 2025 - تقني رياضي",
    branch: "tech",
    year: "2025",
    date: "2025",
    source: "bac-algeria",
    file: "",
    tags: ["exp", "study-functions", "equations"],
    summary: "موضوع من بكالوريا الجزائر 2025 لشعبة تقني رياضي: التمرين 34 حول دراسة دالتين تتضمنان الدالة الأسية، النهايات، المشتقة، المماس، والمستقيم المقارب.",
    statement: `
      <div class="official-exam">
        <h3>بكالوريا 2025 تقني رياضي الموضوع الأول</h3>

        <p class="part"><strong>(I)</strong> الدالة <span class="math-inline">g</span> المعرفة على <span class="math-inline">ℝ</span> بـ:
          <span class="math-line">g(x) = 1 − (x − 1)<sup>2</sup>e<sup>−x</sup></span>
        </p>
        <ol>
          <li>
            أ- احسب
            <span class="lim"><strong>lim</strong><small>x→−∞</small></span><span class="math-inline">g(x)</span>
            وبين أن:
            <span class="lim"><strong>lim</strong><small>x→+∞</small></span><span class="math-inline">g(x) = 1</span>.
          </li>
          <li>
            ب- تحقق أنه من أجل كل عدد حقيقي <span class="math-inline">x</span>:
            <span class="math-line">g′(x) = (x − 1)(x − 3)e<sup>−x</sup></span>.
          </li>
          <li>ج- ادرس اتجاه تغير الدالة <span class="math-inline">g</span> ثم شكل جدول تغيراتها.</li>
          <li>احسب <span class="math-inline">g(0)</span> ثم استنتج حسب قيم <span class="math-inline">x</span> إشارة <span class="math-inline">g(x)</span>.</li>
        </ol>

        <p class="part"><strong>(II)</strong> الدالة <span class="math-inline">f</span> المعرفة على <span class="math-inline">ℝ</span> بـ:
          <span class="math-line">f(x) = x + (x<sup>2</sup> + 1)e<sup>−x</sup></span>،
          تمثيلها البياني هو <span class="math-inline">(C<sub>f</sub>)</span> في المستوى المنسوب إلى معلم متعامد ومتجانس
          <span class="math-inline">(O; i, j)</span>، وحدة الطول <span class="math-inline">2cm</span>.
        </p>
        <ol>
          <li>
            أ- احسب
            <span class="math-line"><span class="lim"><strong>lim</strong><small>x→−∞</small></span> f(x)</span>
            وبين أن:
            <span class="math-line"><span class="lim"><strong>lim</strong><small>x→+∞</small></span> f(x) = +∞</span>.
          </li>
          <li>
            ب- بين أن المستقيم <span class="math-inline">Δ</span> ذو المعادلة
            <span class="math-inline">y = x</span> مقارب مائل للمنحنى
            <span class="math-inline">(C<sub>f</sub>)</span> عند <span class="math-inline">+∞</span>.
          </li>
          <li>
            أ- تحقق أنه من أجل كل عدد حقيقي <span class="math-inline">x</span>:
            <span class="math-line">f′(x) = g(x)</span>.
          </li>
          <li>ب- استنتج اتجاه تغير الدالة <span class="math-inline">f</span> ثم شكل جدول تغيراتها.</li>
          <li>
            أ- بين أن المنحنى <span class="math-inline">(C<sub>f</sub>)</span> يقبل مماسا
            <span class="math-inline">(T)</span> موازيا لـ <span class="math-inline">(Δ)</span>، يطلب تعيين معادلة له.
          </li>
          <li>
            ب- تحقق أن للمنحنى <span class="math-inline">(C<sub>f</sub>)</span> نقطتي انعطاف، يطلب تعيين إحداثييهما.
          </li>
          <li>
            احسب <span class="math-inline">f(−1)</span> ثم ارسم كلا من
            <span class="math-inline">(Δ)</span>، <span class="math-inline">(T)</span> و
            <span class="math-inline">(C<sub>f</sub>)</span>.
          </li>
          <li>
            أ- عين العددين الحقيقيين <span class="math-inline">a</span> و <span class="math-inline">b</span>
            حتى تكون الدالة
            <span class="math-line">h: x ↦ −(x<sup>2</sup> + ax + b)e<sup>−x</sup></span>
            أصلية للدالة
            <span class="math-line">k: x ↦ (x<sup>2</sup> + 1)e<sup>−x</sup></span>
            على <span class="math-inline">ℝ</span>.
          </li>
          <li>
            ب- استنتج بالسنتيمتر المربع حساب مساحة <span class="math-inline">A</span> للحيز المستوي المحدد بالمنحنى
            <span class="math-inline">(C<sub>f</sub>)</span> والمستقيمات التي معادلاتها:
            <span class="math-line">y = x ، x = 0 ، x = 1</span>.
          </li>
        </ol>
      </div>
    `,
    solution: `
      <h3>الحل التفصيلي</h3>

      <h4>I - دراسة الدالة g</h4>
      <ol>
        <li>
          لدينا:
          <span class="math-line">g(x)=1-(x-1)<sup>2</sup>e<sup>-x</sup></span>.
          عندما <span class="math-inline">x→+∞</span> فإن <span class="math-inline">e<sup>-x</sup>→0</span> و
          <span class="math-inline">(x-1)<sup>2</sup>e<sup>-x</sup>→0</span>، ومنه:
          <span class="math-line">lim g(x)=1</span>.
          وعندما <span class="math-inline">x→-∞</span> فإن <span class="math-inline">e<sup>-x</sup>→+∞</span> و
          <span class="math-inline">(x-1)<sup>2</sup>→+∞</span>، إذن:
          <span class="math-line">lim g(x)=-∞</span>.
        </li>
        <li>
          باشتقاق <span class="math-inline">(x-1)<sup>2</sup>e<sup>-x</sup></span> باستعمال جداء دالتين نجد:
          <span class="math-line">g′(x)=(x-1)(x-3)e<sup>-x</sup></span>.
        </li>
        <li>
          بما أن <span class="math-inline">e<sup>-x</sup> &gt; 0</span> فإن إشارة
          <span class="math-inline">g′(x)</span> هي إشارة
          <span class="math-inline">(x-1)(x-3)</span>.
          إذن <span class="math-inline">g</span> متزايدة على
          <span class="math-inline">]-∞,1]</span>، متناقصة على
          <span class="math-inline">[1,3]</span>، ومتزايدة على
          <span class="math-inline">[3,+∞[</span>.
          <table class="variation-table" aria-label="جدول تغيرات الدالة g">
            <tr>
              <th>x</th>
              <td class="interval">−∞</td>
              <td class="interval">1</td>
              <td class="interval">3</td>
              <td class="interval">+∞</td>
            </tr>
            <tr>
              <th>g′(x)</th>
              <td>+</td>
              <td>0</td>
              <td>− ثم 0</td>
              <td>+</td>
            </tr>
            <tr>
              <th>g(x)</th>
              <td>−∞</td>
              <td>↗ 1</td>
              <td>↘ 1−4e<sup>−3</sup></td>
              <td>↗ 1</td>
            </tr>
          </table>
        </li>
        <li>
          نحسب:
          <span class="math-line">g(0)=1-1=0</span>.
          ومن جدول التغيرات نستنتج أن:
          <span class="math-line">g(x)&lt;0</span> على <span class="math-inline">]-∞,0[</span>،
          و <span class="math-line">g(x)&gt;0</span> على <span class="math-inline">]0,+∞[</span>.
        </li>
      </ol>

      <h4>II - دراسة الدالة f</h4>
      <ol>
        <li>
          <span class="math-line">f(x)=x+(x<sup>2</sup>+1)e<sup>-x</sup></span>.
          عندما <span class="math-inline">x→-∞</span> فإن الحد
          <span class="math-inline">(x<sup>2</sup>+1)e<sup>-x</sup></span> يؤول إلى
          <span class="math-inline">+∞</span>، ومنه
          <span class="math-line">lim f(x)=+∞</span>.
          وعندما <span class="math-inline">x→+∞</span> فإن
          <span class="math-inline">(x<sup>2</sup>+1)e<sup>-x</sup>→0</span>، وبالتالي
          <span class="math-line">lim f(x)=+∞</span>.
        </li>
        <li>
          نحسب:
          <span class="math-line">f(x)-x=(x<sup>2</sup>+1)e<sup>-x</sup></span>.
          وعندما <span class="math-inline">x→+∞</span> فإن هذا الفرق يؤول إلى
          <span class="math-inline">0</span>، إذن المستقيم
          <span class="math-inline">Δ: y=x</span> مقارب مائل للمنحنى
          <span class="math-inline">(C<sub>f</sub>)</span> عند <span class="math-inline">+∞</span>.
        </li>
        <li>
          بالاشتقاق:
          <span class="math-line">f′(x)=1+[2x-(x<sup>2</sup>+1)]e<sup>-x</sup></span>
          أي:
          <span class="math-line">f′(x)=1-(x-1)<sup>2</sup>e<sup>-x</sup>=g(x)</span>.
        </li>
        <li>
          بما أن إشارة <span class="math-inline">f′(x)</span> هي إشارة
          <span class="math-inline">g(x)</span>، فإن
          <span class="math-inline">f</span> متناقصة على
          <span class="math-inline">]-∞,0]</span> ومتزايدة على
          <span class="math-inline">[0,+∞[</span>.
          <table class="variation-table" aria-label="جدول تغيرات الدالة f">
            <tr>
              <th>x</th>
              <td class="interval">−∞</td>
              <td class="interval">0</td>
              <td class="interval">+∞</td>
            </tr>
            <tr>
              <th>f′(x)=g(x)</th>
              <td>−</td>
              <td>0</td>
              <td>+</td>
            </tr>
            <tr>
              <th>f(x)</th>
              <td>+∞</td>
              <td>↘ 1</td>
              <td>↗ +∞</td>
            </tr>
          </table>
        </li>
        <li>
          المماس الموازي لـ <span class="math-inline">Δ</span> يكون معامل توجيهه
          <span class="math-inline">1</span>، أي نحل:
          <span class="math-line">f′(x)=1 ⇔ g(x)=1</span>.
          ومن
          <span class="math-line">1-(x-1)<sup>2</sup>e<sup>-x</sup>=1</span>
          نجد <span class="math-inline">x=1</span>. كما أن
          <span class="math-line">f(1)=1+2e<sup>-1</sup></span>.
          إذن معادلة المماس:
          <span class="math-line">T: y=x+2/e</span>.
        </li>
        <li>
          نحسب المشتقة الثانية:
          <span class="math-line">f″(x)=g′(x)=(x-1)(x-3)e<sup>-x</sup></span>.
          تتغير إشارة <span class="math-inline">f″</span> عند
          <span class="math-inline">x=1</span> و <span class="math-inline">x=3</span>،
          إذن للمنحنى نقطتا انعطاف:
          <span class="math-line">A(1, 1+2/e)</span>
          و
          <span class="math-line">B(3, 3+10/e<sup>3</sup>)</span>.
        </li>
        <li>
          نحسب:
          <span class="math-line">f(-1)=-1+2e</span>.
          تستعمل هذه القيمة مع المماس والمقارب لرسم المنحنى بدقة.
        </li>
      </ol>

      <figure style="margin:18px auto;max-width:620px;text-align:center;">
        <svg viewBox="0 0 620 390" role="img" aria-label="رسم المنحنى Cf مع المقارب Delta والمماس T" style="width:100%;height:auto;background:#fff;border:1px solid #111;border-radius:10px;">
          <defs>
            <marker id="arrow-tech-2025-cf" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 Z" fill="#111"></path>
            </marker>
          </defs>
          <rect x="0" y="0" width="620" height="390" fill="#ffffff"></rect>
          <g stroke="#d6d6d6" stroke-width="1">
            <line x1="60" y1="40" x2="560" y2="40"></line>
            <line x1="60" y1="90" x2="560" y2="90"></line>
            <line x1="60" y1="140" x2="560" y2="140"></line>
            <line x1="60" y1="190" x2="560" y2="190"></line>
            <line x1="60" y1="240" x2="560" y2="240"></line>
            <line x1="60" y1="290" x2="560" y2="290"></line>
            <line x1="60" y1="340" x2="560" y2="340"></line>
            <line x1="90" y1="25" x2="90" y2="350"></line>
            <line x1="160" y1="25" x2="160" y2="350"></line>
            <line x1="230" y1="25" x2="230" y2="350"></line>
            <line x1="300" y1="25" x2="300" y2="350"></line>
            <line x1="370" y1="25" x2="370" y2="350"></line>
            <line x1="440" y1="25" x2="440" y2="350"></line>
            <line x1="510" y1="25" x2="510" y2="350"></line>
          </g>
          <g stroke="#111" stroke-width="2.2" marker-end="url(#arrow-tech-2025-cf)">
            <line x1="55" y1="240" x2="570" y2="240"></line>
            <line x1="300" y1="354" x2="300" y2="22"></line>
          </g>
          <path d="M66 408 L558 56" fill="none" stroke="#6b7280" stroke-width="2.4" stroke-dasharray="8 7"></path>
          <path d="M66 371 L558 19" fill="none" stroke="#f59e0b" stroke-width="2.4" stroke-dasharray="5 6"></path>
          <path d="M230 18 C246 62 278 190 300 190 C325 190 335 178 370 153 C412 123 463 88 510 65 C528 56 542 49 554 44" fill="none" stroke="#2563eb" stroke-width="4" stroke-linecap="round"></path>
          <circle cx="370" cy="153" r="5" fill="#dc2626"></circle>
          <circle cx="510" cy="65" r="5" fill="#dc2626"></circle>
          <circle cx="230" cy="18" r="5" fill="#16a34a"></circle>
          <g font-family="Times New Roman, serif" font-size="15" fill="#111">
            <text x="574" y="258">x</text>
            <text x="308" y="34">y</text>
            <text x="306" y="258">0</text>
            <text x="366" y="258">1</text>
            <text x="436" y="258">2</text>
            <text x="506" y="258">3</text>
            <text x="226" y="258">-1</text>
            <text x="308" y="192">1</text>
            <text x="308" y="142">2</text>
            <text x="308" y="92">3</text>
            <text x="542" y="39" fill="#2563eb">C<tspan baseline-shift="sub" font-size="11">f</tspan></text>
            <text x="470" y="111" fill="#6b7280">Δ: y=x</text>
            <text x="394" y="76" fill="#b45309">T: y=x+2/e</text>
            <text x="376" y="147" fill="#dc2626">A</text>
            <text x="518" y="59" fill="#dc2626">B</text>
            <text x="238" y="35" fill="#16a34a">f(-1)</text>
          </g>
        </svg>
        <figcaption style="margin-top:8px;color:#e8fff0;line-height:1.7;">
          رسم تقريبي للمنحنى <span class="math-inline">(C<sub>f</sub>)</span> مع المقارب المائل
          <span class="math-inline">Δ: y=x</span> والمماس
          <span class="math-inline">T: y=x+2/e</span> ونقطتي الانعطاف <span class="math-inline">A</span> و <span class="math-inline">B</span>.
        </figcaption>
      </figure>

      <h4>III - الأصلية والمساحة</h4>
      <ol>
        <li>
          نبحث عن <span class="math-inline">a</span> و <span class="math-inline">b</span> حتى تكون:
          <span class="math-line">h(x)=-(x<sup>2</sup>+ax+b)e<sup>-x</sup></span>
          أصلية لـ
          <span class="math-line">k(x)=(x<sup>2</sup>+1)e<sup>-x</sup></span>.
          بالاشتقاق:
          <span class="math-line">h′(x)=(x<sup>2</sup>+(a-2)x+(b-a))e<sup>-x</sup></span>.
          بالمطابقة نجد:
          <span class="math-line">a=2 , b=3</span>.
        </li>
        <li>
          المساحة بين <span class="math-inline">(C<sub>f</sub>)</span> و
          <span class="math-inline">y=x</span> من <span class="math-inline">0</span> إلى
          <span class="math-inline">1</span> هي:
          <span class="math-line">A = 4∫<sub>0</sub><sup>1</sup>(f(x)-x)dx</span>
          لأن وحدة الطول <span class="math-inline">2cm</span>.
          إذن:
          <span class="math-line">A = 4∫<sub>0</sub><sup>1</sup>(x<sup>2</sup>+1)e<sup>-x</sup>dx</span>.
          وباستعمال الأصلية:
          <span class="math-line">A = 4[h(1)-h(0)] = 4(3-6/e)</span>
          أي:
          <span class="math-line">A = 12 - 24/e cm<sup>2</sup></span>.
        </li>
      </ol>
    `
  },
  {
    id: "bac-algeria-tech-2025-topic-2-ln",
    title: "موضوع بكالوريا الجزائر 2025 - تقني رياضي الموضوع الثاني",
    branch: "tech",
    year: "2025",
    date: "2025",
    source: "inline",
    file: "",
    tags: ["ln", "study-functions", "equations"],
    summary: "التمرين الرابع من بكالوريا 2025 لشعبة تقني رياضي، الموضوع الثاني: دراسة دالتين لوغارتميتين، النهايات، المشتقات، المماس، نقطة الانعطاف، المناقشة البيانية، وحساب مساحة.",
    statement: `
      <div class="official-exam">
        <h3>بكالوريا 2025 تقني رياضي الموضوع الثاني</h3>
        <p class="part"><strong>التمرين الرابع: (07 نقاط)</strong></p>

        <p class="part">
          <strong>I)</strong> الدالة <span class="math-inline">g</span> المعرفة على
          <span class="math-inline">]-1,+&infin;[</span> بـ:
          <span class="math-line">g(x)=x<sup>2</sup>+2x+2-2ln(x+1)</span>
        </p>
        <ol>
          <li>
            <strong>أ)</strong> بين أنه من أجل كل <span class="math-inline">x</span> من
            <span class="math-inline">]-1,+&infin;[</span>:
            <span class="math-line">g&prime;(x)=<span style="display:inline-block;vertical-align:middle;text-align:center;"><span>2x(x+2)</span><span style="display:block;border-top:1px solid #000;">x+1</span></span></span>.
          </li>
          <li><strong>ب)</strong> ادرس اتجاه تغير الدالة <span class="math-inline">g</span> ثم شكل جدول تغيراتها. <span class="math-inline">(لا يطلب حساب النهايات)</span></li>
          <li><strong>2)</strong> استنتج إشارة <span class="math-inline">g(x)</span>.</li>
        </ol>

        <p class="part">
          <strong>II)</strong> الدالة <span class="math-inline">f</span> المعرفة على
          <span class="math-inline">]-1,+&infin;[</span> بـ:
          <span class="math-line">f(x)=x+<span style="display:inline-block;vertical-align:middle;text-align:center;"><span>1+2ln(x+1)</span><span style="display:block;border-top:1px solid #000;">x+1</span></span></span>
        </p>
        <p>
          <span class="math-inline">(C<sub>f</sub>)</span> تمثيلها البياني في المستوي المنسوب إلى المعلم المتعامد والمتجانس
          <span class="math-inline">(O; i, j)</span>.
        </p>
        <ol>
          <li>
            <strong>أ)</strong> احسب
            <span class="math-line"><span class="lim"><strong>lim</strong><small>x&rarr;+&infin;</small></span>f(x)</span>
            و
            <span class="math-line"><span class="lim"><strong>lim</strong><small>x&rarr;-1</small></span>f(x)</span>.
          </li>
          <li>
            <strong>ب)</strong> بين أنه من أجل كل <span class="math-inline">x</span> من
            <span class="math-inline">]-1,+&infin;[</span>:
            <span class="math-line">f&prime;(x)=<span style="display:inline-block;vertical-align:middle;text-align:center;"><span>g(x)</span><span style="display:block;border-top:1px solid #000;">(x+1)<sup>2</sup></span></span></span>.
          </li>
          <li><strong>ج)</strong> استنتج اتجاه تغير الدالة <span class="math-inline">f</span> ثم شكل جدول تغيراتها.</li>
          <li>
            <strong>2 أ)</strong> بين أن المستقيم <span class="math-inline">(&Delta;)</span> ذا المعادلة
            <span class="math-inline">y=x</span> مستقيم مقارب مائل للمنحنى
            <span class="math-inline">(C<sub>f</sub>)</span>.
          </li>
          <li>
            <strong>ب)</strong> بين أن المنحنى <span class="math-inline">(C<sub>f</sub>)</span> يقبل مماسا
            <span class="math-inline">(T)</span> موازيا لـ <span class="math-inline">(&Delta;)</span>، يطلب تعيين معادلة له.
          </li>
          <li>
            <strong>3 أ)</strong> بين أنه من أجل كل <span class="math-inline">x</span> من
            <span class="math-inline">]-1,+&infin;[</span>:
            <span class="math-line">f&Prime;(x)=<span style="display:inline-block;vertical-align:middle;text-align:center;"><span>4ln(x+1)-4</span><span style="display:block;border-top:1px solid #000;">(x+1)<sup>3</sup></span></span></span>.
          </li>
          <li><strong>ب)</strong> استنتج أن للمنحنى <span class="math-inline">(C<sub>f</sub>)</span> نقطة انعطاف يطلب تعيين إحداثييها.</li>
          <li>
            <strong>4 أ)</strong> احسب <span class="math-inline">f&prime;(0)</span> ثم ارسم كلا من
            <span class="math-inline">(&Delta;)</span> و <span class="math-inline">(T)</span> و
            <span class="math-inline">(C<sub>f</sub>)</span>.
          </li>
          <li>
            <strong>ب)</strong> ناقش بيانيا وحسب قيم العدد الحقيقي <span class="math-inline">m</span> عدد حلول المعادلة:
            <span class="math-line">1+2ln(x+1)=m(x+1)</span>.
          </li>
          <li>
            <strong>5)</strong> احسب مساحة الحيز المستوي المحدد بالمنحنى
            <span class="math-inline">(C<sub>f</sub>)</span> والمستقيمات التي معادلاتها:
            <span class="math-line">x=e-1</span> و <span class="math-line">x=0</span> و <span class="math-line">y=x</span>.
          </li>
        </ol>
      </div>
    `,
    solution: `
      <h3>الحل التفصيلي</h3>

      <h4>I - دراسة الدالة g</h4>
      <ol>
        <li>
          لدينا:
          <span class="math-line">g(x)=x<sup>2</sup>+2x+2-2ln(x+1)</span>
          على <span class="math-inline">]-1,+&infin;[</span>.
          بالاشتقاق:
          <span class="math-line">g&prime;(x)=2x+2-<span style="display:inline-block;vertical-align:middle;text-align:center;"><span>2</span><span style="display:block;border-top:1px solid #fff;">x+1</span></span></span>
          ومنه:
          <span class="math-line">g&prime;(x)=<span style="display:inline-block;vertical-align:middle;text-align:center;"><span>2x(x+2)</span><span style="display:block;border-top:1px solid #fff;">x+1</span></span></span>.
        </li>
        <li>
          بما أن <span class="math-inline">x+1&gt;0</span> و
          <span class="math-inline">x+2&gt;0</span> على المجال، فإن إشارة
          <span class="math-inline">g&prime;(x)</span> هي إشارة <span class="math-inline">x</span>.
          إذن <span class="math-inline">g</span> متناقصة على
          <span class="math-inline">]-1,0]</span> ومتزايدة على
          <span class="math-inline">[0,+&infin;[</span>.
          <table class="variation-table" aria-label="جدول تغيرات الدالة g">
            <tr>
              <th>x</th>
              <td class="interval">-1</td>
              <td class="interval">0</td>
              <td class="interval">+&infin;</td>
            </tr>
            <tr>
              <th>g&prime;(x)</th>
              <td>-</td>
              <td>0</td>
              <td>+</td>
            </tr>
            <tr>
              <th>g(x)</th>
              <td></td>
              <td><span class="var-arrow">↘</span> 2 <span class="var-arrow">↗</span></td>
              <td></td>
            </tr>
          </table>
        </li>
        <li>
          بما أن <span class="math-inline">g(0)=2</span> وهي القيمة الصغرى للدالة، نستنتج:
          <span class="math-line">g(x)&ge;2&gt;0</span>
          لكل <span class="math-inline">x&in;]-1,+&infin;[</span>.
        </li>
      </ol>

      <h4>II - دراسة الدالة f</h4>
      <ol>
        <li>
          نكتب:
          <span class="math-line">f(x)=x+<span style="display:inline-block;vertical-align:middle;text-align:center;"><span>1+2ln(x+1)</span><span style="display:block;border-top:1px solid #fff;">x+1</span></span></span>.
          عند <span class="math-inline">+&infin;</span> الحد الكسري يؤول إلى <span class="math-inline">0</span>، ومنه:
          <span class="math-line"><span class="lim"><strong>lim</strong><small>x&rarr;+&infin;</small></span>f(x)=+&infin;</span>.
          وعند <span class="math-inline">x&rarr;-1<sup>+</sup></span> نضع
          <span class="math-inline">t=x+1</span> فنجد <span class="math-inline">t&rarr;0<sup>+</sup></span> و
          <span class="math-inline">(1+2ln t)/t&rarr;-&infin;</span>، إذن:
          <span class="math-line"><span class="lim"><strong>lim</strong><small>x&rarr;-1<sup>+</sup></small></span>f(x)=-&infin;</span>.
        </li>
        <li>
          باشتقاق الحد الكسري نجد:
          <span class="math-line">f&prime;(x)=1+<span style="display:inline-block;vertical-align:middle;text-align:center;"><span>1-2ln(x+1)</span><span style="display:block;border-top:1px solid #fff;">(x+1)<sup>2</sup></span></span></span>
          وبالتالي:
          <span class="math-line">f&prime;(x)=<span style="display:inline-block;vertical-align:middle;text-align:center;"><span>g(x)</span><span style="display:block;border-top:1px solid #fff;">(x+1)<sup>2</sup></span></span></span>.
        </li>
        <li>
          بما أن <span class="math-inline">g(x)&gt;0</span> و
          <span class="math-inline">(x+1)<sup>2</sup>&gt;0</span> فإن
          <span class="math-inline">f&prime;(x)&gt;0</span>، ومنه
          <span class="math-inline">f</span> متزايدة تماما على
          <span class="math-inline">]-1,+&infin;[</span>.
          <table class="variation-table" aria-label="جدول تغيرات الدالة f">
            <tr>
              <th>x</th>
              <td class="interval">-1</td>
              <td class="interval">+&infin;</td>
            </tr>
            <tr>
              <th>f&prime;(x)</th>
              <td>+</td>
              <td>+</td>
            </tr>
            <tr>
              <th>f(x)</th>
              <td>-&infin;</td>
              <td><span class="var-arrow">↗</span> +∞</td>
            </tr>
          </table>
        </li>
        <li>
          لدينا:
          <span class="math-line">f(x)-x=<span style="display:inline-block;vertical-align:middle;text-align:center;"><span>1+2ln(x+1)</span><span style="display:block;border-top:1px solid #fff;">x+1</span></span></span>.
          وبما أن هذا الفرق يؤول إلى <span class="math-inline">0</span> عند
          <span class="math-inline">+&infin;</span>، فإن:
          <span class="math-line">&Delta;: y=x</span>
          مستقيم مقارب مائل للمنحنى <span class="math-inline">(C<sub>f</sub>)</span>.
        </li>
        <li>
          المماس الموازي لـ <span class="math-inline">&Delta;</span> معامل توجيهه
          <span class="math-inline">1</span>، فنحل:
          <span class="math-line">f&prime;(x)=1</span>.
          وهذا يكافئ:
          <span class="math-line">1-2ln(x+1)=0</span>
          أي:
          <span class="math-line">x=&radic;e-1</span>.
          عندها:
          <span class="math-line">f(x)-x=<span style="display:inline-block;vertical-align:middle;text-align:center;"><span>2</span><span style="display:block;border-top:1px solid #fff;">&radic;e</span></span></span>
          ومنه معادلة المماس:
          <span class="math-line">T: y=x+<span style="display:inline-block;vertical-align:middle;text-align:center;"><span>2</span><span style="display:block;border-top:1px solid #fff;">&radic;e</span></span></span>.
        </li>
        <li>
          لدينا:
          <span class="math-line">f&Prime;(x)=<span style="display:inline-block;vertical-align:middle;text-align:center;"><span>4ln(x+1)-4</span><span style="display:block;border-top:1px solid #fff;">(x+1)<sup>3</sup></span></span></span>.
          بما أن المقام موجب، فإن إشارة <span class="math-inline">f&Prime;</span> هي إشارة
          <span class="math-inline">ln(x+1)-1</span>. تتغير الإشارة عند:
          <span class="math-line">x=e-1</span>.
          إذن نقطة الانعطاف هي:
          <span class="math-line">I(e-1, e-1+3/e)</span>.
        </li>
        <li>
          نحسب:
          <span class="math-line">f&prime;(0)=<span style="display:inline-block;vertical-align:middle;text-align:center;"><span>g(0)</span><span style="display:block;border-top:1px solid #fff;">1</span></span>=2</span>.
          كما أن <span class="math-inline">f(0)=1</span>، فيساعد ذلك على رسم المنحنى مع
          <span class="math-inline">&Delta;</span> و <span class="math-inline">T</span>.
        </li>
      </ol>

      <h4>III - المناقشة البيانية والمساحة</h4>
      <ol>
        <li>
          المعادلة
          <span class="math-line">1+2ln(x+1)=m(x+1)</span>
          تكافئ:
          <span class="math-line">f(x)=x+m</span>.
          إذن نناقش تقاطع المنحنى مع المستقيمات الموازية لـ
          <span class="math-inline">&Delta;</span>.
          الدالة
          <span class="math-line">&phi;(x)=f(x)-x</span>
          تبلغ قيمتها العظمى عند <span class="math-inline">x=&radic;e-1</span> وقيمتها:
          <span class="math-line">&phi;<sub>max</sub>=2/&radic;e</span>.
          كما أن <span class="math-inline">&phi;</span> تنعدم عند
          <span class="math-line">x=e<sup>-1/2</sup>-1</span>.
          لذلك:
          <span class="math-line">m&gt;2/&radic;e</span>: لا حل؛
          <span class="math-line">m=2/&radic;e</span>: حل وحيد؛
          <span class="math-line">0&lt;m&lt;2/&radic;e</span>: حلان؛
          <span class="math-line">m&le;0</span>: حل وحيد.
        </li>
        <li>
          على المجال <span class="math-inline">[0,e-1]</span> يكون
          <span class="math-inline">f(x)-x&gt;0</span>، إذن:
          <span class="math-line">A=&int;<sub>0</sub><sup>e-1</sup>(f(x)-x)dx</span>.
          نضع <span class="math-inline">u=ln(x+1)</span> فنحصل على:
          <span class="math-line">A=&int;<sub>0</sub><sup>1</sup>(1+2u)du</span>
          ومنه:
          <span class="math-line">A=[u+u<sup>2</sup>]<sub>0</sub><sup>1</sup>=2</span>.
          المساحة تساوي <span class="math-inline">2</span> وحدة مساحة.
        </li>
      </ol>
    `
  },
  {
    id: "tech-2024-exp-function-cycle",
    title: "موضوع بكالوريا الجزائر 2024 - تقني رياضي - دورة 2024 - التمرين 34",
    branch: "tech",
    year: "2024",
    date: "2024",
    source: "learn-exp-function",
    file: "",
    tags: ["exp", "study-functions", "asymptotes", "tangents", "discussion"],
    summary: "تمرين من دورة 2024 - التمرين 34 لشعبة تقني رياضي من باب الدالة الأسية، منقول من باب التعلم إلى أرشيف بكالوريا الجزائر حسب الدورة.",
    statement: `
      <section class="statement-block">
        <h3>بكالوريا الجزائر 2024 - شعبة تقني رياضي - دورة 2024 - التمرين 34</h3>
        <div><span>الجزء الأول (I):</span></div>
                                <p>التمثيل البياني للدالة <span class="math-inline">h</span> المعرفة على <span class="math-inline">R</span> بـ: <span class="math-inline">h(x) = e<sup>-x</sup></span> و <span class="math-inline">(D)</span> المستقيم ذي المعادلة <span class="math-inline">y = x + 2</span> و <span class="math-inline">&alpha;</span> فاصلة نقطة تقاطع <span class="math-inline">(C<sub>h</sub>)</span> و <span class="math-inline">(D)</span> كما في الشكل المقابل.</p>
                                <ol>
                                    <li>بقراءة بيانية: حدد حسب قيم العدد الحقيقي <span class="math-inline">x</span> إشارة <span class="math-inline">g(x)</span> حيث:
                                    <p>
                                        <span class="math-line">g(x) = e<sup>-x</sup> - x - 2</span>
                                    </p>
                                    </li>
                                </ol>
                                <div><span>الجزء الثاني (II):</span></div>
                                <p>الدالة العددية <span class="math-inline">f</span> المعرفة على <span class="math-inline">R</span> بـ:</p>
                                <p>
                                    <span class="math-line">f(x) = -x + (x+1)e<sup>x</sup></span>
                                </p>
                                <p>و <span class="math-inline">(C<sub>f</sub>)</span> تمثيلها البياني في المستوي المنسوب إلى معلم متعامد ومتجانس <span class="math-inline">(O; i, j)</span> (وحدة الطول <span class="math-inline">2cm</span>).</p>
                                <ol>
                                    <li>احسب <span class="math-inline">lim<sub>x &rarr; -&infin;</sub> f(x)</span> ، ثم بين أن <span class="math-inline">lim<sub>x &rarr; +&infin;</sub> f(x) = +&infin;</span>.</li>
                                    <li>أ) بين أنه من أجل كل عدد حقيقي <span class="math-inline">x</span> فإن: <span class="math-inline">f'(x) = -g(-x) e<sup>x</sup></span>.</li>
                                    <li>ب) استنتج اتجاه تغير الدالة <span class="math-inline">f</span> ، ثم شكل جدول تغيراتها.</li>
                                    <li>أ) بين أن المستقيم <span class="math-inline">(&Delta;)</span> ذو المعادلة: <span class="math-inline">y = -x</span> مقارب مائل للمنحنى <span class="math-inline">(C<sub>f</sub>)</span> بجوار <span class="math-inline">-&infin;</span>.</li>
                                    <li>ب) أدرس وضعية <span class="math-inline">(C<sub>f</sub>)</span> بالنسبة إلى <span class="math-inline">(&Delta;)</span>.</li>
                                    <li>بين أن المنحنى <span class="math-inline">(C<sub>f</sub>)</span> يقبل مماساً <span class="math-inline">(T)</span> موازياً لـ <span class="math-inline">(&Delta;)</span> يطلب تعيين معادلة له.</li>
                                    <li>أ) أرسم <span class="math-inline">(&Delta;)</span> ، <span class="math-inline">(T)</span> و <span class="math-inline">(C<sub>f</sub>)</span> (نأخذ <span class="math-inline">&alpha; = -0.5</span>).</li>
                                    <li>ب) عين بيانيا قيم الوسيط الحقيقي <span class="math-inline">m</span> التي من أجلها تقبل المعادلة <span class="math-inline">f(x) = -x - e<sup>m</sup></span> حلين مختلفين.</li>
                                </ol>
      </section>
    `
  },
  {
    id: "tech-2023-exp-function-cycle",
    title: "موضوع بكالوريا الجزائر 2023 - تقني رياضي - دورة 2023 - التمرين 35",
    branch: "tech",
    year: "2023",
    date: "2023",
    source: "learn-exp-function",
    file: "",
    tags: ["exp", "study-functions", "asymptotes", "tangents", "discussion"],
    summary: "تمرين من دورة 2023 - التمرين 35 لشعبة تقني رياضي من باب الدالة الأسية، منقول من باب التعلم إلى أرشيف بكالوريا الجزائر حسب الدورة.",
    statement: `
      <section class="statement-block">
        <h3>بكالوريا الجزائر 2023 - شعبة تقني رياضي - دورة 2023 - التمرين 35</h3>
        <div><span>الجزء الأول (I):</span></div>
                                <p>الجدول المقابل يمثل تغيرات الدالة <span class="math-inline">g</span> المعرفة على <span class="math-inline">R</span> بـ:</p>
                                <p>
                                    <span class="math-line">g(x) = -1 + (2x - 1)e<sup>x</sup></span>
                                </p>
                                <ol>
                                    <li>أثبت أن المعادلة <span class="math-inline">g(x) = 0</span> تقبل حلاً وحيداً <span class="math-inline">&alpha;</span>، حيث <span class="math-inline">0.7 < &alpha; < 0.8</span>.</li>
                                    <li>استنتج حسب قيم <span class="math-inline">x</span> إشارة <span class="math-inline">g(x)</span>.</li>
                                </ol>
                                <div><span>الجزء الثاني (II):</span></div>
                                <p>الدالة العددية <span class="math-inline">f</span> المعرفة على <span class="math-inline">R</span> بـ:</p>
                                <p>
                                    <span class="math-line">f(x) = -x + 4 + (2x - 3)e<sup>x</sup></span>
                                </p>
                                <p>و <span class="math-inline">(C<sub>f</sub>)</span> تمثيلها البياني في المستوي المنسوب إلى معلم متعامد ومتجانس <span class="math-inline">(O; i, j)</span>.</p>
                                <ol>
                                    <li>أ) احسب <span class="math-inline">lim<sub>x &rarr; -&infin;</sub> f(x)</span> ، ثم بين أن <span class="math-inline">lim<sub>x &rarr; +&infin;</sub> f(x) = +&infin;</span>.</li>
                                    <li>ب) بين أن المستقيم <span class="math-inline">(&Delta;)</span> ذو المعادلة: <span class="math-inline">y = -x + 4</span> مقارب مائل للمنحنى <span class="math-inline">(C<sub>f</sub>)</span> بجوار <span class="math-inline">-&infin;</span>.</li>
                                    <li>ج) أدرس وضعية <span class="math-inline">(C<sub>f</sub>)</span> بالنسبة إلى <span class="math-inline">(&Delta;)</span>.</li>
                                    <li>أ) بين أنه من أجل كل عدد حقيقي <span class="math-inline">x</span> فإن: <span class="math-inline">f'(x) = g(x)</span>.</li>
                                    <li>ب) استنتج أن <span class="math-inline">f</span> متناقصة على <span class="math-inline">]-&infin;, &alpha;]</span> ومتزايدة تماما على <span class="math-inline">[&alpha;, +&infin;[</span> ثم شكل جدول تغيراتها.</li>
                                    <li>أ) أثبت أن المنحنى <span class="math-inline">(C<sub>f</sub>)</span> يقبل مماساً <span class="math-inline">(T)</span> موازياً لـ <span class="math-inline">(&Delta;)</span> يطلب تعيين معادلة له.</li>
                                    <li>ب) ارسم <span class="math-inline">(&Delta;)</span> ، <span class="math-inline">(T)</span> و <span class="math-inline">(C<sub>f</sub>)</span>.</li>
                                    <li>ج) عين بيانيا قيم الوسيط الحقيقي <span class="math-inline">m</span> التي من أجلها تقبل المعادلة <span class="math-inline">f(x) = -x + m</span> حلين بالضبط.</li>
                                </ol>
      </section>
    `
  },
  {
    id: "tech-2022-exp-function-cycle",
    title: "موضوع بكالوريا الجزائر 2022 - تقني رياضي - دورة 2022 - التمرين 36",
    branch: "tech",
    year: "2022",
    date: "2022",
    source: "learn-exp-function",
    file: "",
    tags: ["exp", "study-functions", "asymptotes", "tangents", "discussion"],
    summary: "تمرين من دورة 2022 - التمرين 36 لشعبة تقني رياضي من باب الدالة الأسية، منقول من باب التعلم إلى أرشيف بكالوريا الجزائر حسب الدورة.",
    statement: `
      <section class="statement-block">
        <h3>بكالوريا الجزائر 2022 - شعبة تقني رياضي - دورة 2022 - التمرين 36</h3>
        <div><span>الجزء الأول (I):</span></div>
                                <p>المستوي منسوب إلى معلم متعامد و متجانس <span class="math-inline">(O; i, j)</span>. <span class="math-inline">(&Gamma;)</span> التمثيل البياني للدالة <span class="math-inline">x \mapsto e<sup>-x</sup></span> و <span class="math-inline">(C<sub>g</sub>)</span> التمثيل البياني للدالة <span class="math-inline">g</span> المعرفة على <span class="math-inline">R</span> بـ:</p>
                                <p>
                                    <span class="math-line">g(x) = <span class="frac"><span class="num">x<sup>2</sup> + 2x - 1</span><span class="den">(x<sup>2</sup> + 1)<sup>2</sup></span></span></span>
                                </p>
                                <ol>
                                    <li>بقراءة بيانية ، حدد حسب قيم العدد الحقيقي <span class="math-inline">x</span> اشارة <span class="math-inline">g(x) - e<sup>-x</sup></span>.</li>
                                    <li>تحقق حسابيا أن <span class="math-inline">0.7 < &alpha; < 0.8</span>.</li>
                                </ol>
        
                                <div><span>الجزء الثاني (II):</span></div>
                                <p><span class="math-inline">f</span> دالة معرفة على <span class="math-inline">R</span> بـ:</p>
                                <p>
                                    <span class="math-line">f(x) = <span class="frac"><span class="num">x + 1</span><span class="den">x<sup>2</sup> + 1</span></span> - e<sup>-x</sup></span>
                                </p>
                                <p>و <span class="math-inline">(C<sub>f</sub>)</span> تمثيلها البياني في معلم متعامد و متجانس.</p>
                                <ol>
                                    <li>أحسب <span class="math-inline">lim<sub>x &rarr; -&infin;</sub> f(x)</span> ثم احسب <span class="math-inline">lim<sub>x &rarr; +&infin;</sub> f(x)</span> وفسر النتيجة بيانيا.</li>
                                    <li>أ) بين أنه من اجل كل عدد حقيقي <span class="math-inline">x</span>: <span class="math-inline">f'(x) = g(x) - e<sup>-x</sup></span>.</li>
                                    <li>ب) استنتج اتجاه تغير الدالة <span class="math-inline">f</span> وشكل جدول تغيراتها.</li>
                                    <li>أ) أحسب <span class="math-inline">lim<sub>x &rarr; +&infin;</sub> [f(x) - e<sup>-x</sup>]</span> وفسر النتيجة بيانيا.</li>
                                    <li>ب) أدرس الوضعية النسبية للمنحنيين <span class="math-inline">(C<sub>f</sub>)</span> و <span class="math-inline">(&Gamma;)</span>.</li>
                                    <li>أ) أكتب معادلة لـ <span class="math-inline">(T)</span> مماس <span class="math-inline">(C<sub>f</sub>)</span> عند النقطة ذات الفاصلة <span class="math-inline">0</span>.</li>
                                    <li>ب) أنشئ <span class="math-inline">(&Gamma;)</span> و <span class="math-inline">(T)</span> ثم <span class="math-inline">(C<sub>f</sub>)</span> (نأخذ <span class="math-inline">f(&alpha;) = -0.6</span>).</li>
                                    <li>ج) ناقش بیانیا و حسب قيم الوسيط الحقيقي <span class="math-inline">m</span> عدد واشارة حلول المعادلة : <span class="math-inline">f(x) - m = 0</span>.</li>
                                </ol>
      </section>
    `
  },
  {
    id: "tech-2021-exp-function-cycle",
    title: "موضوع بكالوريا الجزائر 2021 - تقني رياضي - دورة 2021 - التمرين 37",
    branch: "tech",
    year: "2021",
    date: "2021",
    source: "learn-exp-function",
    file: "",
    tags: ["exp", "study-functions", "asymptotes", "tangents", "discussion"],
    summary: "تمرين من دورة 2021 - التمرين 37 لشعبة تقني رياضي من باب الدالة الأسية، منقول من باب التعلم إلى أرشيف بكالوريا الجزائر حسب الدورة.",
    statement: `
      <section class="statement-block">
        <h3>بكالوريا الجزائر 2021 - شعبة تقني رياضي - دورة 2021 - التمرين 37</h3>
        <div><span>الجزء الأول (I):</span></div>
                                <p>الدالة العددية <span class="math-inline">g</span> المعرفة على المجال <span class="math-inline">[0, +&infin;[</span> بـ: <span class="math-inline">g(x) = x<sup>2</sup> - 5 + e<sup>x-1</sup></span></p>
                                <ol>
                                    <li>بين أن الدالة <span class="math-inline">g</span> متزايدة تماما على المجال <span class="math-inline">[0, +&infin;[</span>.</li>
                                    <li>أ) بين أن المعادلة <span class="math-inline">g(x) = 0</span> تقبل حلا وحيدا <span class="math-inline">&alpha;</span> حيث : <span class="math-inline">1.71 < &alpha; < 1.72</span>.</li>
                                    <li>ب) استنتج حسب قيم العدد الحقيقي الموجب <span class="math-inline">x</span> إشارة <span class="math-inline">g(x)</span>.</li>
                                </ol>
                                <div><span>الجزء الثاني (II):</span></div>
                                <p>الدالة العددية <span class="math-inline">f</span> معرفة على المجال <span class="math-inline">[0, +&infin;[</span> بـ:</p>
                                <p>
                                    <span class="math-line">f(x) = x + 1 + (-x<sup>2</sup> - 2x + 3)e<sup>1-x</sup></span>
                                </p>
                                <ol>
                                    <li>أ) بين أنه من أجل كل عدد حقيقي <span class="math-inline">x</span> من المجال <span class="math-inline">[0, +&infin;[</span>: <span class="math-inline">f'(x) = g(x)e<sup>1-x</sup></span>.</li>
                                    <li>ب) استنتج ان الدالة <span class="math-inline">f</span> متزايدة تماما على المجال <span class="math-inline">[&alpha;, +&infin;[</span> ومتناقصة تماما على المجال <span class="math-inline">[0, &alpha;]</span>.</li>
                                    <li>ج) بين أن <span class="math-inline">lim<sub>x &rarr; +&infin;</sub> f(x) = +&infin;</span> ثم شكل جدول تغيرات الدالة <span class="math-inline">f</span>.</li>
                                    <li>بين أن المستقيم <span class="math-inline">(&Delta;)</span> ذا المعادلة : <span class="math-inline">y = x + 1</span> مقارب مائل لـ <span class="math-inline">(C<sub>f</sub>)</span> وادرس وضعية <span class="math-inline">(C<sub>f</sub>)</span> و <span class="math-inline">(&Delta;)</span>.</li>
                                    <li>بين أن المنحنى <span class="math-inline">(C<sub>f</sub>)</span> يقبل مماسا <span class="math-inline">(T)</span> موازيا لـ <span class="math-inline">(&Delta;)</span> في نقطة <span class="math-inline">A</span> يطلب تعيين فاصلتها.</li>
                                    <li><span class="math-inline">h</span> الدالة العددية معرفة على المجال <span class="math-inline">]-&infin;, 0]</span> بـ: <span class="math-inline">h(x) = -x + 1 + (-x<sup>2</sup> + 2x + 3)e<sup>1+x</sup></span><br>أ) تحقق أنه من أجل كل عدد حقيقي <span class="math-inline">x</span> من المجال <span class="math-inline">]-&infin;, 0]</span>: <span class="math-inline">h(x) = f(-x)</span>.</li>
                                </ol>
      </section>
    `
  },
  {
    id: "tech-2020-exp-function-cycle",
    title: "موضوع بكالوريا الجزائر 2020 - تقني رياضي - دورة 2020 - التمرين 38",
    branch: "tech",
    year: "2020",
    date: "2020",
    source: "learn-exp-function",
    file: "",
    tags: ["exp", "study-functions", "asymptotes", "tangents", "discussion"],
    summary: "تمرين من دورة 2020 - التمرين 38 لشعبة تقني رياضي من باب الدالة الأسية، منقول من باب التعلم إلى أرشيف بكالوريا الجزائر حسب الدورة.",
    statement: `
      <section class="statement-block">
        <h3>بكالوريا الجزائر 2020 - شعبة تقني رياضي - دورة 2020 - التمرين 38</h3>
        <p>الدالة العددية <span class="math-inline">f</span> معرفة على المجال <span class="math-inline">[-1, +&infin;[</span> بـ:</p>
                                <p>
                                    <span class="math-line">f(x) = x - 1 + <span class="frac"><span class="num">1</span><span class="den">4</span></span>(2e<sup>-x</sup> - 1)<sup>2</sup></span>
                                </p>
                                <ol>
                                    <li>أ) بين أنه من أجل كل عدد حقيقي <span class="math-inline">x</span> من المجال <span class="math-inline">[-1, +&infin;[</span>: 
                                        <p>
                                            <span class="math-line">f'(x) = (1 - e<sup>-x</sup>)(2e<sup>-x</sup> + 1)</span>
                                        </p>
                                    </li>
                                    <li>ب) ادرس اشارة <span class="math-inline">f'(x)</span> واستنتج اتجاه تغير الدالة <span class="math-inline">f</span>.</li>
                                    <li>ج) احسب <span class="math-inline">lim<sub>x &rarr; +&infin;</sub> f(x)</span> ثم شكل جدول تغيرات الدالة <span class="math-inline">f</span>.</li>
                                    <li>أ) بين أن المستقيم <span class="math-inline">(&Delta;)</span> ذا المعادلة <span class="math-inline">y = x - <span class="frac"><span class="num">3</span><span class="den">4</span></span></span> مقارب مائل للمنحنى <span class="math-inline">(C<sub>f</sub>)</span>.</li>
                                    <li>ب) أدرس وضعية المنحنى <span class="math-inline">(C<sub>f</sub>)</span> بالنسبة للمستقيم <span class="math-inline">(&Delta;)</span>.</li>
                                    <li>بين أن المنحنى البياني <span class="math-inline">(C<sub>f</sub>)</span> يقبل مماسا <span class="math-inline">(T)</span> يوازي المستقيم <span class="math-inline">(&Delta;)</span> يطلب كتابة معادلة له.</li>
                                    <li>ليكن <span class="math-inline">m</span> وسيطا حقيقيا، عين مجموعة قيم <span class="math-inline">m</span> التي من أجلها تقبل المعادلة <span class="math-inline">f(x) = x + m</span> حلين مختلفين.</li>
                                </ol>
      </section>
    `
  },
  {
    id: "tech-2019-exp-function-cycle",
    title: "موضوع بكالوريا الجزائر 2019 - تقني رياضي - دورة 2019 - التمرين 39",
    branch: "tech",
    year: "2019",
    date: "2019",
    source: "learn-exp-function",
    file: "",
    tags: ["exp", "study-functions", "asymptotes", "tangents", "discussion"],
    summary: "تمرين من دورة 2019 - التمرين 39 لشعبة تقني رياضي من باب الدالة الأسية، منقول من باب التعلم إلى أرشيف بكالوريا الجزائر حسب الدورة.",
    statement: `
      <section class="statement-block">
        <h3>بكالوريا الجزائر 2019 - شعبة تقني رياضي - دورة 2019 - التمرين 39</h3>
        <div><span>الجزء الأول (I):</span></div>
                                <p>الدالة العددية <span class="math-inline">g</span> للمتغير الحقيقي <span class="math-inline">x</span> المعرفة على <span class="math-inline">R</span> بـ: <span class="math-inline">g(x) = (x+3)e<sup>x</sup> - 1</span> و <span class="math-inline">(C<sub>g</sub>)</span> تمثيلها البياني.</p>
                                <ol>
                                    <li>بقراءة بيانية:<br>أ) حدد إشارة <span class="math-inline">g(-1)</span> و <span class="math-inline">g(-<span class="frac"><span class="num">1</span><span class="den">2</span></span>)</span>.<br>ب) أستنتج وجود عدد حقيقي وحيد <span class="math-inline">&alpha;</span> من المجال <span class="math-inline">]-1, -<span class="frac"><span class="num">1</span><span class="den">2</span></span>[</span> بحيث <span class="math-inline">g(&alpha;) = 0</span>، ثم تحقق أن <span class="math-inline">-0.8 < &alpha; < -0.7</span>.<br>ج) أستنتج إشارة <span class="math-inline">g(x)</span> على <span class="math-inline">R</span>.</li>
                                </ol>
                                <div><span>الجزء الثاني (II):</span></div>
                                <p><span class="math-inline">f</span> الدالة العددية المعرفة على <span class="math-inline">R</span> كمايلي: <span class="math-inline">f(x) = (x+2)(e<sup>x</sup> - 1)</span> و <span class="math-inline">(C<sub>f</sub>)</span> تمثيلها البياني.</p>
                                <ol>
                                    <li>احسب <span class="math-inline">lim<sub>x &rarr; -&infin;</sub> f(x)</span> و <span class="math-inline">lim<sub>x &rarr; +&infin;</sub> f(x)</span>.</li>
                                    <li>بين أنه من أجل كل <span class="math-inline">x</span> من <span class="math-inline">R</span>: <span class="math-inline">f'(x) = g(x)</span>. شكل جدول تغيرات الدالة <span class="math-inline">f</span>.</li>
                                    <li>أ) احسب <span class="math-inline">lim<sub>x &rarr; -&infin;</sub> [f(x) + x + 2]</span> استنتج أن <span class="math-inline">(C<sub>f</sub>)</span> يقبل مستقيما مقاربا مائلا <span class="math-inline">(&Delta;)</span> يطلب تعيين معادلة له.<br>ب) أدرس الوضع النسبي للمنحنى <span class="math-inline">(C<sub>f</sub>)</span> والمستقيم <span class="math-inline">(&Delta;)</span>.<br>ج) اكتب معادلة لـ <span class="math-inline">(T)</span> مماس <span class="math-inline">(C<sub>f</sub>)</span> والموازي للمستقيم <span class="math-inline">(&Delta;)</span>.</li>
                                    <li>أرسم المستقيم <span class="math-inline">(&Delta;)</span> والمنحنى <span class="math-inline">(C<sub>f</sub>)</span> على المجال <span class="math-inline">[-4, 1]</span> (يعطى <span class="math-inline">f(&alpha;) \approx -0.7</span>).</li>
                                    <li><span class="math-inline">h</span> دالة معرفة على <span class="math-inline">R</span> بـ: <span class="math-inline">h(x) = |x|(e<sup>|x|-2</sup> - 1) + 1</span> و <span class="math-inline">(C<sub>h</sub>)</span> تمثيلها البياني.<br>أ) بين أن الدالة <span class="math-inline">h</span> زوجية.<br>ب) تأكد انه من اجل كل <span class="math-inline">x \in [0, +&infin;[</span>: <span class="math-inline">h(x) = f(x-2) + 1</span>.<br>ج) اشرح كيف يمكن رسم <span class="math-inline">(C<sub>h</sub>)</span> إنطلاقا من <span class="math-inline">(C<sub>f</sub>)</span> ثم أرسم <span class="math-inline">(C<sub>h</sub>)</span> على المجال <span class="math-inline">[-3, 3]</span>.</li>
                                </ol>
      </section>
    `
  },
  {
    id: "tech-2018-exp-function-cycle",
    title: "موضوع بكالوريا الجزائر 2018 - تقني رياضي - دورة 2018 - التمرين 40",
    branch: "tech",
    year: "2018",
    date: "2018",
    source: "learn-exp-function",
    file: "",
    tags: ["exp", "study-functions", "asymptotes", "tangents", "discussion"],
    summary: "تمرين من دورة 2018 - التمرين 40 لشعبة تقني رياضي من باب الدالة الأسية، منقول من باب التعلم إلى أرشيف بكالوريا الجزائر حسب الدورة.",
    statement: `
      <section class="statement-block">
        <h3>بكالوريا الجزائر 2018 - شعبة تقني رياضي - دورة 2018 - التمرين 40</h3>
        <div><span>دورة 2018 - التمرين 40</span></div>
                                <p>الدالة العددية <span class="math-inline">f</span> المعرفة على المجال <span class="math-inline">]-&infin;, 1[</span> بـ: <span class="math-inline">f(x) = <span class="frac"><span class="num">x</span><span class="den">x-1</span></span>e<sup>-x</sup></span> و <span class="math-inline">(C<sub>f</sub>)</span> تمثيلها البياني.</p>
                                <ol>
                                    <li>احسب: <span class="math-inline">lim<sub>x &rarr; 1^-</sub> f(x)</span> ثم فسر النتيجة بيانيا، ثم أحسب <span class="math-inline">lim<sub>x &rarr; -&infin;</sub> f(x)</span>.</li>
                                    <li>بين أنه من أجل كل <span class="math-inline">x</span> من <span class="math-inline">]-&infin;, 1[</span>: <span class="math-inline">f'(x) = \frac{(-x<sup>2</sup>+x-1)e<sup>-x</sup>}{(x-1)<sup>2</sup>}</span>. ثم ادرس اتجاه تغير الدالة <span class="math-inline">f</span> ثم شكل جدول تغيراتها.</li>
                                    <li>أ) أكتب معادلة المماس <span class="math-inline">(T)</span> للمنحنى <span class="math-inline">(C<sub>f</sub>)</span> عند النقطة ذات الفاصلة صفر.<br>ب) الدالة العددية <span class="math-inline">h</span> المعرفة على المجال <span class="math-inline">]-&infin;, 1[</span> بـ: <span class="math-inline">h(x) = e<sup>-x</sup> + x - 1</span>. ادرس اتجاه تغير الدالة <span class="math-inline">h</span> ثم أستنتج أنه من أجل كل <span class="math-inline">x</span> من <span class="math-inline">]-&infin;, 1[</span>: <span class="math-inline">h(x) \ge 0</span>.</li>
                                    <li>بين أنه من أجل كل <span class="math-inline">x</span> من <span class="math-inline">]-&infin;, 1[</span>: <span class="math-inline">f(x) + x = <span class="frac"><span class="num">x h(x)</span><span class="den">x-1</span></span></span>. استنتج الوضع النسبي للمنحنى <span class="math-inline">(C<sub>f</sub>)</span> والمماس <span class="math-inline">(T)</span>. فسر النتيجة بيانيا.</li>
                                    <li>أكتب معادلة المستقيم <span class="math-inline">(&Delta;)</span> الذي يشمل مبدأ المعلم والنقطة <span class="math-inline">A(-2, <span class="frac"><span class="num">2</span><span class="den">3</span></span>e<sup>2</sup>)</span>. أرسم المستقيمين <span class="math-inline">(&Delta;)</span> و <span class="math-inline">(T)</span> والمنحنى <span class="math-inline">(C<sub>f</sub>)</span> على المجال <span class="math-inline">[-2, 1[</span>.</li>
                                </ol>
      </section>
    `
  },
  {
    id: "tech-2017-exp-function-cycle",
    title: "موضوع بكالوريا الجزائر 2017 - تقني رياضي - دورة 2017 - التمرين 41",
    branch: "tech",
    year: "2017",
    date: "2017",
    source: "learn-exp-function",
    file: "",
    tags: ["exp", "study-functions", "asymptotes", "tangents", "discussion"],
    summary: "تمرين من دورة 2017 - التمرين 41 لشعبة تقني رياضي من باب الدالة الأسية، منقول من باب التعلم إلى أرشيف بكالوريا الجزائر حسب الدورة.",
    statement: `
      <section class="statement-block">
        <h3>بكالوريا الجزائر 2017 - شعبة تقني رياضي - دورة 2017 - التمرين 41</h3>
        <div><span>الجزء الأول (I):</span></div>
                                <p>لتكن الدالة <span class="math-inline">g</span> المعرفة على <span class="math-inline">R</span> كمايلي: <span class="math-inline">g(x) = 1 - 2xe<sup>-x</sup></span></p>
                                <ol>
                                    <li>أدرس إتجاه تغير الدالة <span class="math-inline">g</span> ثم استنتج اشارة <span class="math-inline">g(x)</span>.</li>
                                </ol>
                                <div><span>الجزء الثاني (II):</span></div>
                                <p>نعتبر الدالة العددية <span class="math-inline">f</span> المعرفة على <span class="math-inline">R</span> كمايلي : <span class="math-inline">f(x) = (x + 1)(1 + 2e<sup>-x</sup>)</span></p>
                                <p>و <span class="math-inline">(C<sub>f</sub>)</span> تمثيلها البياني في المستوي المنسوب إلى معلم متعامد ومتجانس <span class="math-inline">(O; i, j)</span>.</p>
                                <ol>
                                    <li>أ) أحسب <span class="math-inline">lim<sub>x &rarr; -&infin;</sub> f(x)</span> و <span class="math-inline">lim<sub>x &rarr; +&infin;</sub> f(x)</span>.<br>ب) ادرس اتجاه تغير الدالة <span class="math-inline">f</span> وشكل جدول تغيراتها.</li>
                                    <li>أ) بين أن <span class="math-inline">lim<sub>x &rarr; +&infin;</sub> [f(x) - x] = 1</span> ثم استنتج معادلة لـ : <span class="math-inline">(&Delta;)</span> المقارب المائل للمنحنى <span class="math-inline">(C<sub>f</sub>)</span>.<br>ب) أدرس وضعية المنحنى <span class="math-inline">(C<sub>f</sub>)</span> بالنسبة للمستقيم <span class="math-inline">(&Delta;)</span>.</li>
                                    <li>أثبت أن المنحنى <span class="math-inline">(C<sub>f</sub>)</span> يقبل مماسا وحيدا <span class="math-inline">(T)</span> يوازي <span class="math-inline">(&Delta;)</span> يطلب تعيين معادلة له.</li>
                                    <li>باستعمال <span class="math-inline">(C<sub>f</sub>)</span> ، عين قيم الوسيط الحقيقي <span class="math-inline">m</span> حتى يكون للمعادلة <span class="math-inline">f(x) = x + m</span> حلين مختلفين.</li>
                                </ol>
      </section>
    `
  },
  {
    id: "tech-2015-exp-function-cycle",
    title: "موضوع بكالوريا الجزائر 2015 - تقني رياضي - دورة 2015 - التمرين 42",
    branch: "tech",
    year: "2015",
    date: "2015",
    source: "learn-exp-function",
    file: "",
    tags: ["exp", "study-functions", "asymptotes", "tangents", "discussion"],
    summary: "تمرين من دورة 2015 - التمرين 42 لشعبة تقني رياضي من باب الدالة الأسية، منقول من باب التعلم إلى أرشيف بكالوريا الجزائر حسب الدورة.",
    statement: `
      <section class="statement-block">
        <h3>بكالوريا الجزائر 2015 - شعبة تقني رياضي - دورة 2015 - التمرين 42</h3>
        <div><span>الجزء الأول (I):</span></div>
                                <p>لتكن الدالة <span class="math-inline">g</span> المعرفة على <span class="math-inline">R</span> بـ: <span class="math-inline">g(x) = (x+2)e<sup>x</sup> - 2</span></p>
                                <ol>
                                    <li>احسب <span class="math-inline">lim<sub>x &rarr; -&infin;</sub> g(x)</span> و <span class="math-inline">lim<sub>x &rarr; +&infin;</sub> g(x)</span>.</li>
                                    <li>أدرس اتجاه تغير الدالة <span class="math-inline">g</span> ، ثم شكل جدول تغيراتها.</li>
                                    <li>أحسب <span class="math-inline">g(0)</span> ، ثم استنتج إشارة <span class="math-inline">g(x)</span>.</li>
                                </ol>
                                <div><span>الجزء الثاني (II):</span></div>
                                <p>الدالة <span class="math-inline">f</span> المعرفة على <span class="math-inline">R</span> كما يلي: <span class="math-inline">f(x) = 2x + 3 - (x+1)e<sup>x</sup></span> و <span class="math-inline">(C<sub>f</sub>)</span> تمثيلها البياني.</p>
                                <ol>
                                    <li>بين أن <span class="math-inline">lim<sub>x &rarr; +&infin;</sub> f(x) = -&infin;</span> و احسب <span class="math-inline">lim<sub>x &rarr; -&infin;</sub> f(x)</span>.</li>
                                    <li>أ) بين أنه من أجل كل <span class="math-inline">x</span> من <span class="math-inline">R</span> فإن: <span class="math-inline">f'(x) = -g(x)</span>.<br>ب) أستنتج إشارة <span class="math-inline">f'(x)</span> ، ثم شكل جدول تغيرات الدالة <span class="math-inline">f</span>.<br>ج) بين أن المستقيم <span class="math-inline">(&Delta;)</span> ذو المعادلة <span class="math-inline">y = 2x+3</span> مستقيم مقارب مائل لـ <span class="math-inline">(C<sub>f</sub>)</span> بجوار <span class="math-inline">-&infin;</span>. ثم أدرس وضعية <span class="math-inline">(C<sub>f</sub>)</span> بالنسبة إلى المستقيم <span class="math-inline">(&Delta;)</span>.</li>
                                    <li>أ) بين أن المعادلة <span class="math-inline">f(x) = 0</span> تقبل حلين <span class="math-inline">&alpha;</span> و <span class="math-inline">&beta;</span> حيث : <span class="math-inline">0.92 < &alpha; < 0.93</span> و <span class="math-inline">1.55 < &beta; < 1.56</span>.<br>ب) أرسم <span class="math-inline">(&Delta;)</span> و المنحنى <span class="math-inline">(C<sub>f</sub>)</span> على المجال <span class="math-inline">[-3, 2]</span>.</li>
                                </ol>
      </section>
    `
  },
  {
    id: "tech-2014-exp-function-cycle",
    title: "موضوع بكالوريا الجزائر 2014 - تقني رياضي - دورة 2014 - التمرين 43",
    branch: "tech",
    year: "2014",
    date: "2014",
    source: "learn-exp-function",
    file: "",
    tags: ["exp", "study-functions", "asymptotes", "tangents", "discussion"],
    summary: "تمرين من دورة 2014 - التمرين 43 لشعبة تقني رياضي من باب الدالة الأسية، منقول من باب التعلم إلى أرشيف بكالوريا الجزائر حسب الدورة.",
    statement: `
      <section class="statement-block">
        <h3>بكالوريا الجزائر 2014 - شعبة تقني رياضي - دورة 2014 - التمرين 43</h3>
        <div><span>دورة 2014 - التمرين 43</span></div>
                                <p><span class="math-inline">f</span> دالة معرفة على <span class="math-inline">R</span> بـ: <span class="math-inline">f(x) = (x-1)e<sup>x</sup></span>.</p>
                                <p><span class="math-inline">(C<sub>f</sub>)</span> منحنى الدالة <span class="math-inline">f</span> في المستوي المنسوب إلى المعلم المتعامد والمتجانس.</p>
                                <ol>
                                    <li>عين نهاية <span class="math-inline">f</span> عند كل من <span class="math-inline">-&infin;</span> و <span class="math-inline">+&infin;</span>.</li>
                                    <li>أدرس اتجاه تغير الدالة <span class="math-inline">f</span> على <span class="math-inline">R</span> ، ثم شكل جدول تغيراتها.</li>
                                    <li>أ) بين أن المعادلة <span class="math-inline">f(x) = 1</span> تقبل حلا وحيدا <span class="math-inline">&alpha;</span> على <span class="math-inline">R</span>. ثم تحقق أن <span class="math-inline">1.27 < &alpha; < 1.28</span>.<br>ب) أكتب معادلة لـ <span class="math-inline">(T)</span> مماس <span class="math-inline">(C<sub>f</sub>)</span> عند النقطة ذات الفاصلة 1 وحدد وضعية <span class="math-inline">(C<sub>f</sub>)</span> بالنسبة لـ <span class="math-inline">(T)</span>.<br>ج) أرسم <span class="math-inline">(T)</span> و <span class="math-inline">(C<sub>f</sub>)</span>.</li>
                                    <li>عين قيم العدد الحقيقي <span class="math-inline">m</span> التي من أجلها تقبل المعادلة : <span class="math-inline">(x-1)e<sup>x</sup> - (m-1)e<sup>m</sup> = -1</span> حلا واحدا في <span class="math-inline">R</span>.</li>
                                    <li><span class="math-inline">h</span> هي الدالة المعرفة على <span class="math-inline">R</span> بـ: <span class="math-inline">h(x) = (|x|-1)e<sup>|x|</sup></span> و <span class="math-inline">(C<sub>h</sub>)</span> تمثيلها البياني.<br>أ) بين أن الدالة <span class="math-inline">h</span> زوجية.<br>ب) أرسم <span class="math-inline">(C<sub>h</sub>)</span> مستعينا بالمنحنى <span class="math-inline">(C<sub>f</sub>)</span>.</li>
                                    <li><span class="math-inline">g</span> معرفة على <span class="math-inline">R</span> بـ: <span class="math-inline">g(x) = (ax+b)e<sup>x</sup></span> حيث <span class="math-inline">a</span> و <span class="math-inline">b</span> عددان حقيقيان.<br>عين <span class="math-inline">a</span> و <span class="math-inline">b</span> حتى يكون : من أجل كل <span class="math-inline">x</span> من <span class="math-inline">R</span> : <span class="math-inline">g'(x) = f(x)</span>.</li>
                                </ol>
      </section>
    `
  },
  {
    id: "tech-2013-exp-function-cycle",
    title: "موضوع بكالوريا الجزائر 2013 - تقني رياضي - دورة 2013 - التمرين 44",
    branch: "tech",
    year: "2013",
    date: "2013",
    source: "learn-exp-function",
    file: "",
    tags: ["exp", "study-functions", "asymptotes", "tangents", "discussion"],
    summary: "تمرين من دورة 2013 - التمرين 44 لشعبة تقني رياضي من باب الدالة الأسية، منقول من باب التعلم إلى أرشيف بكالوريا الجزائر حسب الدورة.",
    statement: `
      <section class="statement-block">
        <h3>بكالوريا الجزائر 2013 - شعبة تقني رياضي - دورة 2013 - التمرين 44</h3>
        <div><span>الجزء الأول (I):</span></div>
                                <p><span class="math-inline">g</span> هي الدالة المعرفة على <span class="math-inline">R</span> كما يلي: <span class="math-inline">g(x) = -4 + (4-2x)e<sup>x</sup></span></p>
                                <ol>
                                    <li>أدرس تغيرات الدالة <span class="math-inline">g</span> ، شكل جدول تغيراتها.</li>
                                    <li>بين أن المعادلة <span class="math-inline">g(x) = 0</span> تقبل حلين أحدهما معدوم والآخر <span class="math-inline">&alpha;</span> حيث: <span class="math-inline">1.59 < &alpha; < 1.60</span>.</li>
                                    <li>استنتج إشارة <span class="math-inline">g(x)</span>.</li>
                                </ol>
                                <div><span>الجزء الثاني (II):</span></div>
                                <p><span class="math-inline">f</span> هي الدالة المعرفة على <span class="math-inline">R</span> كما يلي: <span class="math-inline">f(x) = <span class="frac"><span class="num">2x-2</span><span class="den">e<sup>x</sup>-2x</span></span></span> و <span class="math-inline">(C<sub>f</sub>)</span> تمثيلها البياني.</p>
                                <ol>
                                    <li>بين أن <span class="math-inline">(C<sub>f</sub>)</span> يقبل عند <span class="math-inline">-&infin;</span> و <span class="math-inline">+&infin;</span> مستقيمين مقاربين معادلاتهما على الترتيب <span class="math-inline">y = -1</span> و <span class="math-inline">y = 0</span>.</li>
                                    <li>أ) برهن أنه من أجل <span class="math-inline">x \in R</span> : <span class="math-inline">f'(x) = <span class="frac"><span class="num">g(x)</span><span class="den">(e<sup>x</sup>-2x)<sup>2</sup></span></span></span>.<br>ب) أستنتج إشارة <span class="math-inline">f'(x)</span> ، ثم شكل جدول تغيرات الدالة <span class="math-inline">f</span>.<br>ج) احسب <span class="math-inline">f(1)</span> ، ثم أستنتج إشارة <span class="math-inline">f(x)</span>.</li>
                                    <li>أ) بين أن <span class="math-inline">f(&alpha;) = -1 + <span class="frac"><span class="num">1</span><span class="den">&alpha; - 1</span></span></span> ثم عين حصرا للعدد <span class="math-inline">f(&alpha;)</span>.<br>ب) أرسم <span class="math-inline">(C<sub>f</sub>)</span>.</li>
                                    <li>ناقش بيانيا، حسب قيم الوسيط الحقيقي <span class="math-inline">m</span>، عدد وإشارة حلول المعادلة <span class="math-inline">2x-2 = (e<sup>x</sup>-2x)(m+1)</span>.</li>
                                    <li><span class="math-inline">h</span> هي الدالة المعرفة على <span class="math-inline">R</span> كمايلي: <span class="math-inline">h(x) = [f(x)]^2</span>.<br>أ) أحسب <span class="math-inline">h'(x)</span> بدلالة <span class="math-inline">f'(x)</span> و <span class="math-inline">f(x)</span>. أستنتج إشارة <span class="math-inline">h'(x)</span>.<br>ب) شكل جدول تغيرات الدالة <span class="math-inline">h</span>.</li>
                                </ol>
      </section>
    `
  },
  {
    id: "tech-2011-exp-function-cycle",
    title: "موضوع بكالوريا الجزائر 2011 - تقني رياضي - دورة 2011 - التمرين 45",
    branch: "tech",
    year: "2011",
    date: "2011",
    source: "learn-exp-function",
    file: "",
    tags: ["exp", "study-functions", "asymptotes", "tangents", "discussion"],
    summary: "تمرين من دورة 2011 - التمرين 45 لشعبة تقني رياضي من باب الدالة الأسية، منقول من باب التعلم إلى أرشيف بكالوريا الجزائر حسب الدورة.",
    statement: `
      <section class="statement-block">
        <h3>بكالوريا الجزائر 2011 - شعبة تقني رياضي - دورة 2011 - التمرين 45</h3>
        <div><span>الجزء الأول (I):</span></div>
                                <p>الدالة <span class="math-inline">g</span> المعرفة على <span class="math-inline">R</span> بـ: <span class="math-inline">g(x) = (x+2)e<sup>x</sup> - 1</span></p>
                                <ol>
                                    <li>أدرس اتجاه تغير الدالة <span class="math-inline">g</span>.</li>
                                    <li>بين أن المعادلة <span class="math-inline">g(x) = 0</span> تقبل حلا وحيدا <span class="math-inline">&alpha;</span> في <span class="math-inline">R</span> وأن : <span class="math-inline">-0.5 < &alpha; < -0.4</span>.</li>
                                    <li>استنتج إشارة <span class="math-inline">g(x)</span> حسب قيم <span class="math-inline">x</span>.</li>
                                </ol>
                                <div><span>الجزء الثاني (II):</span></div>
                                <p>الدالة <span class="math-inline">f</span> المعرفة على <span class="math-inline">R</span> بـ: <span class="math-inline">f(x) = (x+1)e<sup>x</sup> - x</span> و <span class="math-inline">(C<sub>f</sub>)</span> تمثيلها البياني.</p>
                                <ol>
                                    <li>أ) احسب <span class="math-inline">lim<sub>x &rarr; -&infin;</sub> f(x)</span>.<br>ب) بين أن المستقيم <span class="math-inline">(&Delta;)</span> ذو المعادلة <span class="math-inline">y = -x</span> مقارب مائل للمنحنى <span class="math-inline">(C<sub>f</sub>)</span> بجوار <span class="math-inline">-&infin;</span> ، ثم ادرس وضعية <span class="math-inline">(C<sub>f</sub>)</span> بالنسبة إلى <span class="math-inline">(&Delta;)</span>.</li>
                                    <li>احسب <span class="math-inline">lim<sub>x &rarr; +&infin;</sub> f(x)</span>.</li>
                                    <li>أ) احسب <span class="math-inline">f'(x)</span> ، ثم استنتج اتجاه تغير الدالة <span class="math-inline">f</span>.<br>ب) شكل جدول تغيرات الدالة <span class="math-inline">f</span>.</li>
                                    <li>أ) بين أن <span class="math-inline">f(&alpha;) = -&alpha; - <span class="frac"><span class="num">1</span><span class="den">&alpha;+2</span></span></span> ثم استنتج حصراً لـ <span class="math-inline">f(&alpha;)</span>.<br>ب) ارسم المستقيم <span class="math-inline">(&Delta;)</span> والمنحنى <span class="math-inline">(C<sub>f</sub>)</span>.</li>
                                </ol>
      </section>
    `
  },
  {
    id: "tech-2010-exp-function-cycle",
    title: "موضوع بكالوريا الجزائر 2010 - تقني رياضي - دورة 2010 - التمرين 46",
    branch: "tech",
    year: "2010",
    date: "2010",
    source: "learn-exp-function",
    file: "",
    tags: ["exp", "study-functions", "asymptotes", "tangents", "discussion"],
    summary: "تمرين من دورة 2010 - التمرين 46 لشعبة تقني رياضي من باب الدالة الأسية، منقول من باب التعلم إلى أرشيف بكالوريا الجزائر حسب الدورة.",
    statement: `
      <section class="statement-block">
        <h3>بكالوريا الجزائر 2010 - شعبة تقني رياضي - دورة 2010 - التمرين 46</h3>
        <div><span>الجزء الأول (I):</span></div>
                                <p>الدالة <span class="math-inline">g</span> المعرفة على <span class="math-inline">R</span> بـ: <span class="math-inline">g(x) = e<sup>x</sup> - x - 1</span></p>
                                <ol>
                                    <li>ادرس اتجاه تغير الدالة <span class="math-inline">g</span> ثم شكل جدول تغيراتها.</li>
                                    <li>استنتج أنه من أجل كل <span class="math-inline">x \in R</span> فإن: <span class="math-inline">g(x) \ge 0</span>.</li>
                                </ol>
                                <div><span>الجزء الثاني (II):</span></div>
                                <p>الدالة <span class="math-inline">f</span> المعرفة على <span class="math-inline">R*</span> بـ: <span class="math-inline">f(x) = <span class="frac"><span class="num">x e<sup>x</sup></span><span class="den">e<sup>x</sup> - 1</span></span></span></p>
                                <p>و <span class="math-inline">(C<sub>f</sub>)</span> تمثيلها البياني في المستوي المنسوب إلى معلم متعامد ومتجانس.</p>
                                <ol>
                                    <li>احسب نهايات الدالة <span class="math-inline">f</span> عند أطراف مجموعة تعريفها.</li>
                                    <li>أ) بين أنه من أجل كل <span class="math-inline">x \in R*</span>: <span class="math-inline">f'(x) = <span class="frac"><span class="num">e<sup>x</sup> g(x)</span><span class="den">(e<sup>x</sup> - 1)<sup>2</sup></span></span></span>.<br>ب) استنتج اتجاه تغير الدالة <span class="math-inline">f</span> ثم شكل جدول تغيراتها.</li>
                                    <li>أ) بين أن المستقيم <span class="math-inline">(&Delta;)</span> ذو المعادلة <span class="math-inline">y = x</span> مقارب مائل للمنحنى <span class="math-inline">(C<sub>f</sub>)</span> عند <span class="math-inline">+&infin;</span>.<br>ب) استنتج المستقيم المقارب المائل الآخر <span class="math-inline">(&Delta;')</span> عند <span class="math-inline">-&infin;</span>.</li>
                                    <li>ارسم المستقيمين المقاربين والمنحنى <span class="math-inline">(C<sub>f</sub>)</span>.</li>
                                </ol>
      </section>
    `
  },
  {
    id: "tech-2009-exp-function-cycle",
    title: "موضوع بكالوريا الجزائر 2009 - تقني رياضي - دورة 2009 - التمرين 47",
    branch: "tech",
    year: "2009",
    date: "2009",
    source: "learn-exp-function",
    file: "",
    tags: ["exp", "study-functions", "asymptotes", "tangents", "discussion"],
    summary: "تمرين من دورة 2009 - التمرين 47 لشعبة تقني رياضي من باب الدالة الأسية، منقول من باب التعلم إلى أرشيف بكالوريا الجزائر حسب الدورة.",
    statement: `
      <section class="statement-block">
        <h3>بكالوريا الجزائر 2009 - شعبة تقني رياضي - دورة 2009 - التمرين 47</h3>
        <div><span>دورة 2009 - التمرين 47</span></div>
                                <p>الدالة <span class="math-inline">f</span> المعرفة على <span class="math-inline">R</span> بـ:</p>
                                <p>
                                    <span class="math-line">f(x) = x + \frac{2}{1+e<sup>x</sup>}</span>
                                </p>
                                <p>و <span class="math-inline">(C<sub>f</sub>)</span> تمثيلها البياني في المستوي المنسوب إلى المعلم المتعامد والمتجانس <span class="math-inline">(O; i, j)</span>.</p>
                                <ol>
                                    <li>أحسب <span class="math-inline">lim<sub>x &rarr; -&infin;</sub> f(x)</span> و <span class="math-inline">lim<sub>x &rarr; +&infin;</sub> f(x)</span>.</li>
                                    <li>أ) بين أنه من أجل كل <span class="math-inline">x \in R</span>: <span class="math-inline">f(x) = x + 2 - <span class="frac"><span class="num">2e<sup>x</sup></span><span class="den">1+e<sup>x</sup></span></span></span>.<br>ب) استنتج أن المنحنى <span class="math-inline">(C<sub>f</sub>)</span> يقبل مستقيمين مقاربين مائلين <span class="math-inline">(&Delta;)</span> و <span class="math-inline">(&Delta;')</span> معادلتاهما <span class="math-inline">y = x</span> و <span class="math-inline">y = x + 2</span> على الترتيب.<br>ج) ادرس وضعية <span class="math-inline">(C<sub>f</sub>)</span> بالنسبة إلى كل من <span class="math-inline">(&Delta;)</span> و <span class="math-inline">(&Delta;')</span>.</li>
                                    <li>بين أن النقطة <span class="math-inline">\omega(0; 1)</span> هي مركز تناظر للمنحنى <span class="math-inline">(C<sub>f</sub>)</span>.</li>
                                    <li>أ) بين أنه من أجل كل عدد حقيقي <span class="math-inline">x</span>: <span class="math-inline">f'(x) = 1 - <span class="frac"><span class="num">2e<sup>x</sup></span><span class="den">(1+e<sup>x</sup>)<sup>2</sup></span></span></span>.<br>ب) استنتج اتجاه تغير الدالة <span class="math-inline">f</span> ثم شكل جدول تغيراتها.</li>
                                    <li>ارسم <span class="math-inline">(&Delta;)</span> و <span class="math-inline">(&Delta;')</span> و <span class="math-inline">(C<sub>f</sub>)</span>.</li>
                                </ol>
      </section>
    `
  },
  {
    id: "bac-algeria-tech-2024-topic-1-exp",
    title: "موضوع بكالوريا الجزائر 2024 - تقني رياضي الموضوع الأول",
    branch: "tech",
    year: "2024",
    date: "2024",
    source: "inline",
    file: "",
    tags: ["exp", "study-functions", "equations"],
    summary: "التمرين الرابع من بكالوريا 2024 لشعبة تقني رياضي، الموضوع الأول: قراءة بيانية، دراسة دالة أسية، مستقيم مقارب، مماس، مناقشة وسيط، وحساب مساحة.",
    statement: `
      <div class="official-exam">
        <h3>بكالوريا 2024 تقني رياضي الموضوع الأول</h3>
        <p class="part"><strong>التمرين الرابع: (07 نقاط)</strong></p>

        <p class="part">
          <strong>I)</strong> التمثيل البياني للدالة <span class="math-inline">h</span> المعرفة على
          <span class="math-inline">R</span> بـ:
          <span class="math-line">h(x)=e<sup>-x</sup></span>
          هو <span class="math-inline">(C<sub>h</sub>)</span>.
        </p>
        <p>
          و <span class="math-inline">(D)</span> المستقيم ذو المعادلة
          <span class="math-inline">y=x+2</span>، و
          <span class="math-inline">&alpha;</span> فاصلة نقطة تقاطع
          <span class="math-inline">(C<sub>h</sub>)</span> و
          <span class="math-inline">(D)</span> كما في الشكل.
        </p>
        <figure style="margin:10px auto 16px;max-width:420px;text-align:center;">
          <svg viewBox="0 0 360 260" role="img" aria-label="الشكل البياني للدالة h والمستقيم D" style="width:100%;height:auto;border:1px solid #111;background:#9fc7d9;">
            <defs>
              <marker id="arrow-2024-tech" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#111"></path>
              </marker>
            </defs>
            <g stroke="#111" stroke-width="1" stroke-dasharray="5 4" opacity="0.85">
              <line x1="28" y1="25" x2="332" y2="25"></line>
              <line x1="28" y1="67" x2="332" y2="67"></line>
              <line x1="28" y1="109" x2="332" y2="109"></line>
              <line x1="28" y1="151" x2="332" y2="151"></line>
              <line x1="28" y1="193" x2="332" y2="193"></line>
              <line x1="28" y1="235" x2="332" y2="235"></line>
              <line x1="32" y1="20" x2="32" y2="239"></line>
              <line x1="82" y1="20" x2="82" y2="239"></line>
              <line x1="132" y1="20" x2="132" y2="239"></line>
              <line x1="182" y1="20" x2="182" y2="239"></line>
              <line x1="232" y1="20" x2="232" y2="239"></line>
              <line x1="282" y1="20" x2="282" y2="239"></line>
              <line x1="332" y1="20" x2="332" y2="239"></line>
            </g>
            <g stroke="#111" stroke-width="2.5" marker-end="url(#arrow-2024-tech)">
              <line x1="28" y1="193" x2="338" y2="193"></line>
              <line x1="132" y1="238" x2="132" y2="15"></line>
            </g>
            <path d="M32 193 L82 151 L132 109 L182 67 L232 25" fill="none" stroke="#111" stroke-width="4" stroke-linecap="round"></path>
            <path d="M66 18 C74 58 86 95 101 125 C114 151 129 169 150 179 C184 195 244 198 332 199" fill="none" stroke="#111" stroke-width="4" stroke-linecap="round"></path>
            <circle cx="105" cy="132" r="5" fill="#111"></circle>
            <line x1="105" y1="132" x2="105" y2="193" stroke="#111" stroke-width="1.6" stroke-dasharray="4 3"></line>
            <text x="100" y="209" font-size="18" font-family="Times New Roman, serif" font-style="italic">α</text>
            <text x="52" y="92" font-size="17" font-family="Times New Roman, serif">(C<tspan baseline-shift="sub" font-size="12">h</tspan>)</text>
            <text x="164" y="83" font-size="17" font-family="Times New Roman, serif">(D)</text>
            <g font-size="15" font-family="Times New Roman, serif" fill="#111">
              <text x="27" y="211">-2</text>
              <text x="78" y="211">-1</text>
              <text x="127" y="211">0</text>
              <text x="180" y="211">1</text>
              <text x="230" y="211">2</text>
              <text x="330" y="211">3</text>
              <text x="142" y="197">0</text>
              <text x="142" y="155">1</text>
              <text x="142" y="113">2</text>
              <text x="142" y="71">3</text>
              <text x="142" y="29">4</text>
              <text x="140" y="239">-1</text>
            </g>
          </svg>
        </figure>
        <ol>
          <li>
            بقراءة بيانية، حدد حسب قيم العدد الحقيقي <span class="math-inline">x</span> إشارة:
            <span class="math-line">g(x)=e<sup>-x</sup>-x-2</span>.
          </li>
        </ol>

        <p class="part">
          <strong>II)</strong> الدالة العددية <span class="math-inline">f</span> المعرفة على
          <span class="math-inline">R</span> بـ:
          <span class="math-line">f(x)=-x+(x+1)e<sup>x</sup></span>
        </p>
        <p>
          تمثيلها البياني في المستوي المنسوب إلى المعلم المتعامد والمتجانس
          <span class="math-inline">(O; i, j)</span> هو
          <span class="math-inline">(C<sub>f</sub>)</span>، ووحدة الطول <span class="math-inline">2cm</span>.
        </p>
        <ol>
          <li>
            احسب
            <span class="math-line"><span class="lim"><strong>lim</strong><small>x&rarr;-&infin;</small></span>f(x)</span>
            و
            <span class="math-line"><span class="lim"><strong>lim</strong><small>x&rarr;+&infin;</small></span>f(x)</span>.
          </li>
          <li>
            <strong>أ)</strong> بين أنه من أجل كل عدد حقيقي <span class="math-inline">x</span>:
            <span class="math-line">f&prime;(x)=-g(x)e<sup>x</sup></span>.
          </li>
          <li><strong>ب)</strong> استنتج اتجاه تغير الدالة <span class="math-inline">f</span> ثم شكل جدول تغيراتها.</li>
          <li>
            <strong>3 أ)</strong> بين أن المستقيم <span class="math-inline">(&Delta;)</span> ذا المعادلة
            <span class="math-inline">y=-x</span> مقارب مائل للمنحنى
            <span class="math-inline">(C<sub>f</sub>)</span> عند <span class="math-inline">-&infin;</span>.
          </li>
          <li><strong>ب)</strong> ادرس الوضع النسبي للمنحنى <span class="math-inline">(C<sub>f</sub>)</span> والمستقيم <span class="math-inline">(&Delta;)</span>.</li>
          <li>
            <strong>4)</strong> بين أن <span class="math-inline">(C<sub>f</sub>)</span> يقبل مماسا
            <span class="math-inline">(T)</span> موازيا لـ <span class="math-inline">(&Delta;)</span>، يطلب تعيين معادلة له.
          </li>
          <li>
            <strong>5 أ)</strong> ارسم <span class="math-inline">(T)</span> و
            <span class="math-inline">(&Delta;)</span> و
            <span class="math-inline">(C<sub>f</sub>)</span>.
            <span class="math-inline">(نأخذ: &alpha;=-0.5 و f(&alpha;)=0.8)</span>
          </li>
          <li>
            <strong>ب)</strong> عين بيانيا قيم الوسيط الحقيقي <span class="math-inline">m</span> التي من أجلها تقبل المعادلة:
            <span class="math-line">f(x)=-x-e<sup>m</sup></span>
            حلين مختلفين.
          </li>
          <li>
            <strong>6 أ)</strong> باستعمال التكاملة بالتجزئة، بين أن:
            <span class="math-line">&int;<sub>-1</sub><sup>0</sup>xe<sup>x</sup>dx=<span style="display:inline-block;vertical-align:middle;text-align:center;"><span>2</span><span style="display:block;border-top:1px solid #000;">e</span></span>-1</span>.
          </li>
          <li>
            <strong>ب)</strong> استنتج بالسنتيمتر المربع مساحة الحيز المستوي المحدد بـ
            <span class="math-inline">(C<sub>f</sub>)</span> والمستقيمات التي معادلاتها:
            <span class="math-line">x=0</span>،
            <span class="math-line">x=-1</span>،
            <span class="math-line">y=-x</span>.
          </li>
        </ol>
      </div>
    `,
    solution: `
      <h3>الحل التفصيلي</h3>

      <h4>I - القراءة البيانية وإشارة g</h4>
      <ol>
        <li>
          بما أن
          <span class="math-line">g(x)=e<sup>-x</sup>-x-2=h(x)-(x+2)</span>
          فإن إشارة <span class="math-inline">g(x)</span> تحدد موضع منحنى
          <span class="math-inline">(C<sub>h</sub>)</span> بالنسبة إلى المستقيم
          <span class="math-inline">(D)</span>.
          من الشكل:
          <span class="math-line">g(x)&gt;0</span> إذا <span class="math-inline">x&lt;&alpha;</span>،
          <span class="math-line">g(&alpha;)=0</span>،
          و
          <span class="math-line">g(x)&lt;0</span> إذا <span class="math-inline">x&gt;&alpha;</span>.
        </li>
      </ol>

      <h4>II - دراسة الدالة f</h4>
      <ol>
        <li>
          عند <span class="math-inline">x&rarr;-&infin;</span> لدينا
          <span class="math-inline">(x+1)e<sup>x</sup>&rarr;0</span> و
          <span class="math-inline">-x&rarr;+&infin;</span>، إذن:
          <span class="math-line"><span class="lim"><strong>lim</strong><small>x&rarr;-&infin;</small></span>f(x)=+&infin;</span>.
          وعند <span class="math-inline">x&rarr;+&infin;</span> فإن
          <span class="math-inline">(x+1)e<sup>x</sup>&rarr;+&infin;</span>، ومنه:
          <span class="math-line"><span class="lim"><strong>lim</strong><small>x&rarr;+&infin;</small></span>f(x)=+&infin;</span>.
        </li>
        <li>
          بالاشتقاق:
          <span class="math-line">f&prime;(x)=-1+(x+2)e<sup>x</sup></span>.
          ومن جهة أخرى:
          <span class="math-line">-g(x)e<sup>x</sup>=-(e<sup>-x</sup>-x-2)e<sup>x</sup>=-1+(x+2)e<sup>x</sup></span>.
          إذن:
          <span class="math-line">f&prime;(x)=-g(x)e<sup>x</sup></span>.
        </li>
        <li>
          بما أن <span class="math-inline">e<sup>x</sup>&gt;0</span> فإن إشارة
          <span class="math-inline">f&prime;(x)</span> هي عكس إشارة
          <span class="math-inline">g(x)</span>.
          ومنه <span class="math-inline">f</span> متناقصة على
          <span class="math-inline">]-&infin;,&alpha;]</span> ومتزايدة على
          <span class="math-inline">[&alpha;,+&infin;[</span>.
          <table class="variation-table" aria-label="جدول تغيرات الدالة f">
            <tr>
              <th>x</th>
              <td class="interval">-&infin;</td>
              <td class="interval">&alpha;</td>
              <td class="interval">+&infin;</td>
            </tr>
            <tr>
              <th>f&prime;(x)</th>
              <td>-</td>
              <td>0</td>
              <td>+</td>
            </tr>
            <tr>
              <th>f(x)</th>
              <td>+&infin;</td>
              <td><span class="var-arrow">↘</span> f(α) <span class="var-arrow">↗</span></td>
              <td>+&infin;</td>
            </tr>
          </table>
        </li>
        <li>
          نحسب:
          <span class="math-line">f(x)-(-x)=f(x)+x=(x+1)e<sup>x</sup></span>.
          وعند <span class="math-inline">x&rarr;-&infin;</span> يؤول هذا الفرق إلى
          <span class="math-inline">0</span>، إذن:
          <span class="math-line">&Delta;: y=-x</span>
          مستقيم مقارب مائل للمنحنى عند <span class="math-inline">-&infin;</span>.
        </li>
        <li>
          بما أن <span class="math-inline">e<sup>x</sup>&gt;0</span> فإن إشارة
          <span class="math-inline">f(x)+x</span> هي إشارة
          <span class="math-inline">x+1</span>.
          إذن <span class="math-inline">(C<sub>f</sub>)</span> أسفل
          <span class="math-inline">(&Delta;)</span> على
          <span class="math-inline">]-&infin;,-1[</span>، ويقطعه عند
          <span class="math-inline">x=-1</span>، وفوقه على
          <span class="math-inline">]-1,+&infin;[</span>.
        </li>
        <li>
          لكي يكون المماس موازيا لـ <span class="math-inline">&Delta;</span> يجب أن يكون ميله
          <span class="math-inline">-1</span>، أي:
          <span class="math-line">f&prime;(x)=-1</span>.
          ومن
          <span class="math-line">-1+(x+2)e<sup>x</sup>=-1</span>
          نجد <span class="math-inline">x=-2</span>.
          كما أن:
          <span class="math-line">f(-2)=2-e<sup>-2</sup></span>.
          إذن معادلة المماس:
          <span class="math-line">T: y=-x-e<sup>-2</sup></span>.
        </li>
        <li>
          للرسم نستعمل: <span class="math-inline">&alpha;=-0.5</span> و
          <span class="math-inline">f(&alpha;)=0.8</span>، مع المستقيمين
          <span class="math-inline">&Delta;: y=-x</span> و
          <span class="math-inline">T: y=-x-e<sup>-2</sup></span>.
        </li>
      </ol>

      <h4>III - المناقشة والمساحة</h4>
      <ol>
        <li>
          المعادلة
          <span class="math-line">f(x)=-x-e<sup>m</sup></span>
          تكافئ:
          <span class="math-line">(x+1)e<sup>x</sup>=-e<sup>m</sup></span>.
          ندرس الدالة <span class="math-inline">&varphi;(x)=(x+1)e<sup>x</sup></span>.
          قيمتها الصغرى هي:
          <span class="math-line">&varphi;(-2)=-e<sup>-2</sup></span>.
          لكي توجد حلان مختلفان يجب أن يكون المستوى الأفقي بين
          <span class="math-inline">-e<sup>-2</sup></span> و <span class="math-inline">0</span>:
          <span class="math-line">-e<sup>-2</sup>&lt;-e<sup>m</sup>&lt;0</span>.
          ومنه:
          <span class="math-line">m&lt;-2</span>.
        </li>
        <li>
          بالتكامل بالتجزئة:
          <span class="math-line">&int;xe<sup>x</sup>dx=xe<sup>x</sup>-&int;e<sup>x</sup>dx=(x-1)e<sup>x</sup></span>.
          إذن:
          <span class="math-line">&int;<sub>-1</sub><sup>0</sup>xe<sup>x</sup>dx=[(x-1)e<sup>x</sup>]<sub>-1</sub><sup>0</sup>=-1+2/e</span>.
        </li>
        <li>
          على <span class="math-inline">[-1,0]</span> يكون المنحنى فوق المستقيم
          <span class="math-inline">y=-x</span>، لذلك:
          <span class="math-line">A=4&int;<sub>-1</sub><sup>0</sup>(f(x)+x)dx</span>
          لأن وحدة الطول <span class="math-inline">2cm</span>.
          ومنه:
          <span class="math-line">A=4&int;<sub>-1</sub><sup>0</sup>(x+1)e<sup>x</sup>dx</span>.
          وبما أن
          <span class="math-line">&int;<sub>-1</sub><sup>0</sup>(x+1)e<sup>x</sup>dx=1/e</span>
          نحصل على:
          <span class="math-line">A=4/e cm<sup>2</sup></span>.
        </li>
      </ol>
    `
  },
  {
    id: "bac-algeria-tech-2024-topic-2-ln",
    title: "موضوع بكالوريا الجزائر 2024 - تقني رياضي الموضوع الثاني",
    branch: "tech",
    year: "2024",
    date: "2024",
    source: "inline",
    file: "",
    tags: ["ln", "study-functions", "equations"],
    summary: "التمرين الرابع من بكالوريا 2024 لشعبة تقني رياضي، الموضوع الثاني: جدول تغيرات، دراسة دالة لوغارتمية، منحنى مقارب، مناقشة بيانية، ومساحة.",
    statement: `
      <div class="official-exam">
        <h3>بكالوريا 2024 تقني رياضي الموضوع الثاني</h3>
        <p class="part"><strong>التمرين الرابع: (07 نقاط)</strong></p>

        <p class="part">
          <strong>I)</strong> يمثل الجدول المقابل تغيرات الدالة <span class="math-inline">g</span> المعرفة على
          <span class="math-inline">]-2,+&infin;[</span> بـ:
          <span class="math-line">g(x)=x+ln(x+2)</span>
        </p>
        <figure style="margin:10px auto 16px;max-width:360px;text-align:center;">
          <svg viewBox="0 0 340 135" role="img" aria-label="جدول تغيرات الدالة g" style="width:100%;height:auto;background:#fff;border:1px solid #111;">
            <g fill="none" stroke="#111" stroke-width="2">
              <rect x="10" y="10" width="320" height="110"></rect>
              <line x1="80" y1="10" x2="80" y2="120"></line>
              <line x1="10" y1="46" x2="330" y2="46"></line>
              <line x1="10" y1="82" x2="330" y2="82"></line>
            </g>
            <g font-family="Times New Roman, serif" font-size="21" fill="#111" font-style="italic">
              <text x="40" y="34">x</text>
              <text x="28" y="70">g'(x)</text>
              <text x="33" y="108">g(x)</text>
              <text x="98" y="34">-2</text>
              <text x="270" y="34">+∞</text>
              <text x="180" y="70">+</text>
              <text x="105" y="112">-∞</text>
              <text x="278" y="96">+∞</text>
            </g>
            <line x1="132" y1="108" x2="265" y2="91" stroke="#111" stroke-width="2.5" marker-end="url(#arrow-g-2024-2)"></line>
            <defs>
              <marker id="arrow-g-2024-2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#111"></path>
              </marker>
            </defs>
          </svg>
        </figure>
        <ol>
          <li>
            أثبت أن المعادلة <span class="math-inline">g(x)=0</span> تقبل حلا وحيدا
            <span class="math-inline">&alpha;</span> حيث:
            <span class="math-line">-0.45&lt;&alpha;&lt;-0.44</span>.
          </li>
          <li>استنتج حسب قيم <span class="math-inline">x</span> إشارة <span class="math-inline">g(x)</span>.</li>
        </ol>

        <p class="part">
          <strong>II)</strong> الدالة <span class="math-inline">f</span> المعرفة على
          <span class="math-inline">]-2,+&infin;[</span> بـ:
          <span class="math-line">f(x)=<span style="display:inline-block;vertical-align:middle;text-align:center;"><span>x+1</span><span style="display:block;border-top:1px solid #000;">x+2</span></span>(-1+ln(x+2))</span>
        </p>
        <p>
          <span class="math-inline">(C<sub>f</sub>)</span> تمثيلها البياني في المستوي المنسوب إلى المعلم المتعامد والمتجانس
          <span class="math-inline">(O; i, j)</span>، ووحدة الطول <span class="math-inline">2cm</span>.
        </p>
        <ol>
          <li>
            احسب
            <span class="math-line"><span class="lim"><strong>lim</strong><small>x&rarr;-2</small></span>f(x)</span>
            و
            <span class="math-line"><span class="lim"><strong>lim</strong><small>x&rarr;+&infin;</small></span>f(x)</span>.
          </li>
          <li>
            <strong>أ)</strong> بين أنه من أجل كل <span class="math-inline">x</span> من
            <span class="math-inline">]-2,+&infin;[</span>:
            <span class="math-line">f&prime;(x)=<span style="display:inline-block;vertical-align:middle;text-align:center;"><span>g(x)</span><span style="display:block;border-top:1px solid #000;">(x+2)<sup>2</sup></span></span></span>.
          </li>
          <li><strong>ب)</strong> استنتج اتجاه تغير الدالة <span class="math-inline">f</span> ثم شكل جدول تغيراتها.</li>
          <li>
            <strong>3)</strong> في الشكل المقابل،
            <span class="math-inline">(C<sub>h</sub>)</span> منحنى الدالة <span class="math-inline">h</span> المعرفة على
            <span class="math-inline">]-2,+&infin;[</span> بـ:
            <span class="math-line">h(x)=-1+ln(x+2)</span>.
          </li>
        </ol>
        <figure style="margin:10px auto 16px;max-width:470px;text-align:center;">
          <svg viewBox="0 0 430 250" role="img" aria-label="منحنى الدالة h" style="width:100%;height:auto;background:#fff;border:1px solid #111;">
            <defs>
              <marker id="arrow-2024-tech-topic2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#111"></path>
              </marker>
            </defs>
            <g stroke="#111" stroke-width="1" stroke-dasharray="5 4" opacity="0.9">
              <line x1="30" y1="25" x2="405" y2="25"></line>
              <line x1="30" y1="65" x2="405" y2="65"></line>
              <line x1="30" y1="105" x2="405" y2="105"></line>
              <line x1="30" y1="145" x2="405" y2="145"></line>
              <line x1="30" y1="185" x2="405" y2="185"></line>
              <line x1="30" y1="225" x2="405" y2="225"></line>
              <line x1="32" y1="20" x2="32" y2="230"></line>
              <line x1="80" y1="20" x2="80" y2="230"></line>
              <line x1="128" y1="20" x2="128" y2="230"></line>
              <line x1="176" y1="20" x2="176" y2="230"></line>
              <line x1="224" y1="20" x2="224" y2="230"></line>
              <line x1="272" y1="20" x2="272" y2="230"></line>
              <line x1="320" y1="20" x2="320" y2="230"></line>
              <line x1="368" y1="20" x2="368" y2="230"></line>
            </g>
            <g stroke="#111" stroke-width="2.4" marker-end="url(#arrow-2024-tech-topic2)">
              <line x1="28" y1="105" x2="410" y2="105"></line>
              <line x1="128" y1="232" x2="128" y2="16"></line>
            </g>
            <path d="M34 229 C38 198 43 178 54 159 C69 132 90 116 128 105 C168 93 220 82 272 74 C322 67 366 61 405 56" fill="none" stroke="#111" stroke-width="4" stroke-linecap="round"></path>
            <text x="300" y="61" font-size="18" font-family="Times New Roman, serif">(C<tspan baseline-shift="sub" font-size="12">h</tspan>)</text>
            <g font-size="15" font-family="Times New Roman, serif" fill="#111">
              <text x="24" y="123">-2</text>
              <text x="73" y="123">-1</text>
              <text x="122" y="123">0</text>
              <text x="173" y="123">1</text>
              <text x="221" y="123">2</text>
              <text x="269" y="123">3</text>
              <text x="317" y="123">4</text>
              <text x="365" y="123">5</text>
              <text x="399" y="123">6</text>
              <text x="136" y="30">2</text>
              <text x="136" y="70">1</text>
              <text x="136" y="110">0</text>
              <text x="136" y="150">-1</text>
              <text x="136" y="190">-2</text>
              <text x="136" y="230">-3</text>
            </g>
          </svg>
          <figcaption style="font-size:18px;margin-top:8px;">نأخذ: <span class="math-inline">f(&alpha;)&asymp;-0.2</span></figcaption>
        </figure>
        <ol start="4">
          <li>
            <strong>أ)</strong> بين أن <span class="math-inline">(C<sub>h</sub>)</span> منحنى مقارب لـ
            <span class="math-inline">(C<sub>f</sub>)</span> عند <span class="math-inline">+&infin;</span>.
          </li>
          <li><strong>ب)</strong> ادرس الوضع النسبي للمنحنيين <span class="math-inline">(C<sub>f</sub>)</span> و <span class="math-inline">(C<sub>h</sub>)</span>.</li>
          <li><strong>4 أ)</strong> أعد رسم <span class="math-inline">(C<sub>h</sub>)</span> على ورقة الإجابة ثم ارسم <span class="math-inline">(C<sub>f</sub>)</span>.</li>
          <li><strong>ب)</strong> ناقش بيانيا حسب قيم الوسيط الحقيقي <span class="math-inline">m</span> عدد حلول المعادلة <span class="math-inline">f(x)=m</span>.</li>
          <li>
            <strong>5)</strong> بين أن:
            <span class="math-line">&int;<sub>-1</sub><sup>e-2</sup><span style="display:inline-block;vertical-align:middle;text-align:center;"><span>ln(x+2)</span><span style="display:block;border-top:1px solid #000;">x+2</span></span>dx=<span style="display:inline-block;vertical-align:middle;text-align:center;"><span>1</span><span style="display:block;border-top:1px solid #000;">2</span></span></span>
            ثم احسب بالسنتيمتر المربع مساحة الحيز المستوي المحدد بالمنحنيين
            <span class="math-inline">(C<sub>f</sub>)</span> و <span class="math-inline">(C<sub>h</sub>)</span>
            والمستقيمين ذوي المعادلتين:
            <span class="math-line">x=e-2</span> و <span class="math-line">x=-1</span>.
          </li>
        </ol>
      </div>
    `,
    solution: `
      <h3>الحل التفصيلي</h3>

      <h4>I - دراسة g</h4>
      <ol>
        <li>
          من جدول التغيرات، الدالة <span class="math-inline">g</span> متزايدة تماما على
          <span class="math-inline">]-2,+&infin;[</span>، وتنتقل من
          <span class="math-inline">-&infin;</span> إلى <span class="math-inline">+&infin;</span>.
          إذن للمعادلة <span class="math-inline">g(x)=0</span> حل وحيد
          <span class="math-inline">&alpha;</span>.
          وبالحساب:
          <span class="math-line">g(-0.45)&lt;0</span> و
          <span class="math-line">g(-0.44)&gt;0</span>، ومنه:
          <span class="math-line">-0.45&lt;&alpha;&lt;-0.44</span>.
        </li>
        <li>
          بما أن <span class="math-inline">g</span> متزايدة وتعدم عند
          <span class="math-inline">&alpha;</span>، فإن:
          <span class="math-line">g(x)&lt;0</span> إذا <span class="math-inline">-2&lt;x&lt;&alpha;</span>،
          <span class="math-line">g(\alpha)=0</span>،
          و
          <span class="math-line">g(x)&gt;0</span> إذا <span class="math-inline">x&gt;&alpha;</span>.
        </li>
      </ol>

      <h4>II - دراسة f</h4>
      <ol>
        <li>
          عند <span class="math-inline">x&rarr;-2<sup>+</sup></span> لدينا
          <span class="math-inline">(x+1)/(x+2)&rarr;-&infin;</span> و
          <span class="math-inline">-1+ln(x+2)&rarr;-&infin;</span>، إذن:
          <span class="math-line"><span class="lim"><strong>lim</strong><small>x&rarr;-2<sup>+</sup></small></span>f(x)=+&infin;</span>.
          وعند <span class="math-inline">+&infin;</span> لدينا
          <span class="math-inline">(x+1)/(x+2)&rarr;1</span> و
          <span class="math-inline">-1+ln(x+2)&rarr;+&infin;</span>، ومنه:
          <span class="math-line"><span class="lim"><strong>lim</strong><small>x&rarr;+&infin;</small></span>f(x)=+&infin;</span>.
        </li>
        <li>
          باشتقاق جداء
          <span class="math-inline">(x+1)/(x+2)</span> و
          <span class="math-inline">-1+ln(x+2)</span> نجد:
          <span class="math-line">f&prime;(x)=<span style="display:inline-block;vertical-align:middle;text-align:center;"><span>x+ln(x+2)</span><span style="display:block;border-top:1px solid #fff;">(x+2)<sup>2</sup></span></span>=<span style="display:inline-block;vertical-align:middle;text-align:center;"><span>g(x)</span><span style="display:block;border-top:1px solid #fff;">(x+2)<sup>2</sup></span></span></span>.
        </li>
        <li>
          بما أن <span class="math-inline">(x+2)<sup>2</sup>&gt;0</span>، فإن إشارة
          <span class="math-inline">f&prime;</span> هي إشارة <span class="math-inline">g</span>.
          إذن <span class="math-inline">f</span> متناقصة على
          <span class="math-inline">]-2,\alpha]</span> ومتزايدة على
          <span class="math-inline">[\alpha,+&infin;[</span>.
          <table class="variation-table" aria-label="جدول تغيرات الدالة f">
            <tr>
              <th>x</th>
              <td class="interval">-2</td>
              <td class="interval">&alpha;</td>
              <td class="interval">+&infin;</td>
            </tr>
            <tr>
              <th>f&prime;(x)</th>
              <td>-</td>
              <td>0</td>
              <td>+</td>
            </tr>
            <tr>
              <th>f(x)</th>
              <td>+&infin;</td>
              <td><span class="var-arrow">↘</span> f(α) <span class="var-arrow">↗</span></td>
              <td>+&infin;</td>
            </tr>
          </table>
        </li>
      </ol>

      <h4>III - العلاقة بين C_f و C_h</h4>
      <ol>
        <li>
          لدينا:
          <span class="math-line">h(x)=-1+ln(x+2)</span>
          و
          <span class="math-line">f(x)-h(x)=<span style="display:inline-block;vertical-align:middle;text-align:center;"><span>-h(x)</span><span style="display:block;border-top:1px solid #fff;">x+2</span></span></span>.
          وبما أن <span class="math-inline">h(x)/(x+2)&rarr;0</span> عند
          <span class="math-inline">+&infin;</span>، فإن:
          <span class="math-line">f(x)-h(x)&rarr;0</span>.
          إذن <span class="math-inline">(C<sub>h</sub>)</span> منحنى مقارب لـ
          <span class="math-inline">(C<sub>f</sub>)</span> عند <span class="math-inline">+&infin;</span>.
        </li>
        <li>
          بما أن <span class="math-inline">x+2&gt;0</span>، فإن إشارة
          <span class="math-inline">f(x)-h(x)</span> هي عكس إشارة
          <span class="math-inline">h(x)</span>.
          وتنعدم <span class="math-inline">h</span> عند:
          <span class="math-line">x=e-2</span>.
          إذن <span class="math-inline">(C<sub>f</sub>)</span> فوق
          <span class="math-inline">(C<sub>h</sub>)</span> على
          <span class="math-inline">]-2,e-2[</span>، وتحته على
          <span class="math-inline">]e-2,+&infin;[</span>، ويتقاطعان عند
          <span class="math-inline">x=e-2</span>.
        </li>
        <li>
          بما أن <span class="math-inline">f</span> لها قيمة صغرى
          <span class="math-inline">f(\alpha)&asymp;-0.2</span>، فإن عدد حلول
          <span class="math-inline">f(x)=m</span> هو:
          <span class="math-line">m&lt;f(\alpha)</span>: لا حل؛
          <span class="math-line">m=f(\alpha)</span>: حل وحيد؛
          <span class="math-line">m&gt;f(\alpha)</span>: حلان.
          وبالتقريب:
          <span class="math-line">m&lt;-0.2</span>: لا حل،
          <span class="math-line">m=-0.2</span>: حل وحيد،
          <span class="math-line">m&gt;-0.2</span>: حلان.
        </li>
      </ol>

      <h4>IV - التكامل والمساحة</h4>
      <ol>
        <li>
          نضع <span class="math-inline">u=ln(x+2)</span>، فيكون:
          <span class="math-line">du=<span style="display:inline-block;vertical-align:middle;text-align:center;"><span>dx</span><span style="display:block;border-top:1px solid #fff;">x+2</span></span></span>.
          عند <span class="math-inline">x=-1</span> نجد <span class="math-inline">u=0</span>،
          وعند <span class="math-inline">x=e-2</span> نجد <span class="math-inline">u=1</span>.
          إذن:
          <span class="math-line">&int;<sub>-1</sub><sup>e-2</sup><span style="display:inline-block;vertical-align:middle;text-align:center;"><span>ln(x+2)</span><span style="display:block;border-top:1px solid #fff;">x+2</span></span>dx=&int;<sub>0</sub><sup>1</sup>u du=<span style="display:inline-block;vertical-align:middle;text-align:center;"><span>1</span><span style="display:block;border-top:1px solid #fff;">2</span></span></span>.
        </li>
        <li>
          على <span class="math-inline">[-1,e-2]</span> يكون
          <span class="math-inline">(C<sub>f</sub>)</span> فوق
          <span class="math-inline">(C<sub>h</sub>)</span>، إذن:
          <span class="math-line">A=4&int;<sub>-1</sub><sup>e-2</sup>(f(x)-h(x))dx</span>
          لأن وحدة الطول <span class="math-inline">2cm</span>.
          وبما أن:
          <span class="math-line">f(x)-h(x)=<span style="display:inline-block;vertical-align:middle;text-align:center;"><span>1-ln(x+2)</span><span style="display:block;border-top:1px solid #fff;">x+2</span></span></span>
          نحصل على:
          <span class="math-line">&int;<sub>-1</sub><sup>e-2</sup>(f(x)-h(x))dx=1-<span style="display:inline-block;vertical-align:middle;text-align:center;"><span>1</span><span style="display:block;border-top:1px solid #fff;">2</span></span>=<span style="display:inline-block;vertical-align:middle;text-align:center;"><span>1</span><span style="display:block;border-top:1px solid #fff;">2</span></span></span>.
          ومنه:
          <span class="math-line">A=2 cm<sup>2</sup></span>.
        </li>
      </ol>
    `
  },
  {
    id: "math-2020-topic-2-ln-asymptote",
    title: "موضوع بكالوريا الجزائر 2020 - رياضيات الموضوع الثاني",
    branch: "math",
    year: "2020",
    date: "2020",
    source: "user-image",
    file: "",
    tags: ["ln", "study-functions", "asymptotes", "discussion"],
    summary: "التمرين الرابع من بكالوريا 2020 لشعبة رياضيات، الموضوع الثاني: دراسة f(x)=ln(sqrt(9x^2+1)+3x)، الوضع النسبي مع y=x، دالة k(x)=ln(6x)، وتناظر الدالة f.",
    statement: `
      <section class="statement-block">
        <h3>بكالوريا الجزائر 2020 - شعبة رياضيات - الموضوع الثاني</h3>
        <p>
          الدالة العددية <span class="math-inline">f</span> معرفة على
          <span class="math-inline">R</span> بـ:
          <span class="math-line">f(x)=ln(&radic;(9x<sup>2</sup>+1)+3x)</span>.
        </p>
        <p>
          وليكن <span class="math-inline">(C<sub>f</sub>)</span> المنحنى البياني للدالة
          <span class="math-inline">f</span> في المستوى المنسوب إلى المعلم المتعامد المتجانس
          <span class="math-inline">(O; i, j)</span>.
        </p>
        <ol>
          <li>
            <strong>أ)</strong> احسب:
            <span class="math-line"><span class="lim"><strong>lim</strong><small>x&rarr;+&infin;</small></span>f(x)</span>
            ثم بيّن أن:
            <span class="math-line"><span class="lim"><strong>lim</strong><small>x&rarr;-&infin;</small></span>f(x)=-&infin;</span>.
          </li>
          <li>
            <strong>ب)</strong> بيّن أنه من أجل كل عدد حقيقي <span class="math-inline">x</span> لدينا:
            <span class="math-line">f&prime;(x)=<span class="frac"><span class="num">3</span><span class="den">&radic;(9x<sup>2</sup>+1)</span></span></span>.
          </li>
          <li>
            <strong>ج)</strong> استنتج اتجاه تغير الدالة <span class="math-inline">f</span> ثم شكّل جدول تغيراتها.
          </li>
          <li>
            <strong>2)</strong> نعتبر الدالة <span class="math-inline">g</span> المعرفة على المجال
            <span class="math-inline">[0,+&infin;[</span> كما يلي:
            <span class="math-line">g(x)=f(x)-x</span>.
            <ol>
              <li>
                بيّن أن:
                <span class="math-line"><span class="lim"><strong>lim</strong><small>x&rarr;+&infin;</small></span>g(x)=-&infin;</span>.
              </li>
              <li>
                بيّن أنه من أجل كل عدد حقيقي <span class="math-inline">x</span> من المجال
                <span class="math-inline">[0,+&infin;[</span>:
                <span class="math-line">g&prime;(x)=<span class="frac"><span class="num">-9x<sup>2</sup>+8</span><span class="den">(&radic;(9x<sup>2</sup>+1))(3+&radic;(9x<sup>2</sup>+1))</span></span></span>.
              </li>
              <li>
                ادرس اتجاه تغير الدالة <span class="math-inline">g</span> على المجال
                <span class="math-inline">[0,+&infin;[</span> ثم شكّل جدول تغيراتها.
                <span class="math-inline">(نأخذ g(2&radic;2/3)&asymp;0.8)</span>.
              </li>
            </ol>
          </li>
          <li>
            <strong>3 أ)</strong> بيّن أن المعادلة
            <span class="math-inline">g(x)=0</span>
            تقبل حلا وحيدا
            <span class="math-inline">&alpha;</span>
            في المجال
            <span class="math-inline">[2&radic;2/3,+&infin;[</span>
            ثم تحقق أن:
            <span class="math-line">2.83&lt;&alpha;&lt;2.84</span>.
          </li>
          <li>
            <strong>ب)</strong> استنتج إشارة <span class="math-inline">g(x)</span> على
            <span class="math-inline">[0,+&infin;[</span>.
          </li>
          <li>
            <strong>ج)</strong> حدّد الوضع النسبي للمستقيم
            <span class="math-inline">(&Delta;)</span> ذي المعادلة
            <span class="math-inline">y=x</span>
            والمنحنى <span class="math-inline">(C<sub>f</sub>)</span>
            على المجال <span class="math-inline">[0,+&infin;[</span>.
          </li>
          <li>
            <strong>4)</strong> نعتبر الدالة <span class="math-inline">k</span> المعرفة على
            <span class="math-inline">[0,+&infin;[</span> بـ:
            <span class="math-line">k(x)=ln(6x)</span>
            وليكن <span class="math-inline">(&gamma;)</span> منحناها البياني في المعلم السابق.
            <ol>
              <li>
                بيّن أن <span class="math-inline">(&gamma;)</span> هو صورة منحنى الدالة
                <span class="math-inline">x &mapsto; lnx</span>
                بتحويل نقطي بسيط يطلب تعيينه.
              </li>
              <li>
                احسب:
                <span class="math-line"><span class="lim"><strong>lim</strong><small>x&rarr;+&infin;</small></span>[f(x)-k(x)]</span>
                ثم فسّر النتيجة بيانيا.
              </li>
            </ol>
          </li>
          <li>
            <strong>5 أ)</strong> بيّن أن الدالة <span class="math-inline">f</span> فردية.
          </li>
          <li>
            <strong>ب)</strong> أنشئ كلا من
            <span class="math-inline">(&Delta;)</span> و
            <span class="math-inline">(&gamma;)</span> و
            <span class="math-inline">(C<sub>f</sub>)</span>
            على المجال <span class="math-inline">[0,+&infin;[</span>
            ثم استنتج إنشاء المنحنى
            <span class="math-inline">(C<sub>f</sub>)</span>
            على <span class="math-inline">R</span>.
          </li>
        </ol>
      </section>
    `
  },
  {
    id: "math-2019-topic-1-ln-area",
    title: "موضوع بكالوريا الجزائر 2019 - رياضيات الموضوع الأول",
    branch: "math",
    year: "2019",
    date: "2019",
    source: "user-image",
    file: "",
    tags: ["ln", "study-functions", "tangents", "area", "discussion"],
    summary: "التمرين الرابع من بكالوريا 2019 لشعبة رياضيات، الموضوع الأول: دراسة f(x)=x-x^2lnx على [0,+∞[، نصف مماس عند مبدأ المعلم، وضعية نسبية، مماسات، مناقشة بيانية، وحساب مساحة بالتكامل.",
    statement: `
      <section class="statement-block">
        <h3>بكالوريا الجزائر 2019 - شعبة رياضيات - الموضوع الأول</h3>
        <p><strong>التمرين الرابع: (07 نقاط)</strong></p>
        <p>
          <span class="math-inline">f</span> الدالة المعرفة على
          <span class="math-inline">[0,+&infin;[</span> بـ:
          <span class="math-line">f(x)=x-x<sup>2</sup>lnx ; x&gt;0</span>
          و
          <span class="math-line">f(0)=0</span>.
        </p>
        <p>
          <span class="math-inline">(C<sub>f</sub>)</span> منحناها البياني في المستوي المنسوب إلى المعلم المتعامد المتجانس
          <span class="math-inline">(O; i, j)</span>، الوحدة
          <span class="math-inline">3 cm</span>.
        </p>
        <ol>
          <li>
            برهن أن:
            <ul>
              <li>
                إذا كان <span class="math-inline">x&gt;1</span> فإن:
                <span class="math-line">1-x-2xlnx&lt;0</span>.
              </li>
              <li>
                إذا كان <span class="math-inline">0&lt;x&lt;1</span> فإن:
                <span class="math-line">1-x-2xlnx&gt;0</span>.
              </li>
            </ul>
          </li>
          <li>
            <strong>أ)</strong> أثبت أن الدالة <span class="math-inline">f</span> قابلة للاشتقاق على اليمين عند
            <span class="math-inline">0</span>، ثم اكتب معادلة نصف المماس
            <span class="math-inline">(&Delta;)</span> للمنحنى
            <span class="math-inline">(C<sub>f</sub>)</span> عند مبدأ المعلم.
            <br>
            <strong>ب)</strong> ادرس الوضع النسبي لـ
            <span class="math-inline">(&Delta;)</span> و
            <span class="math-inline">(C<sub>f</sub>)</span>.
          </li>
          <li>
            <strong>أ)</strong> احسب:
            <span class="math-line"><span class="lim"><strong>lim</strong><small>x&rarr;+&infin;</small></span>f(x)</span>.
            <br>
            <strong>ب)</strong> ادرس اتجاه تغير الدالة
            <span class="math-inline">f</span>
            ثم شكل جدول تغيراتها.
          </li>
          <li>
            <strong>أ)</strong> اكتب معادلة مماس المنحنى
            <span class="math-inline">(C<sub>f</sub>)</span>
            الموازي لـ
            <span class="math-inline">(&Delta;)</span>.
            <br>
            <strong>ب)</strong> أثبت أن المعادلة
            <span class="math-inline">f(x)=0</span>
            تقبل في المجال
            <span class="math-inline">[1,+&infin;[</span>
            حلا وحيدا <span class="math-inline">&alpha;</span> ثم تحقق أن:
            <span class="math-line">1.76&lt;&alpha;&lt;1.77</span>.
            <br>
            <strong>ج)</strong> اكتب معادلة المستقيم
            <span class="math-inline">(d)</span>
            الذي يوازي
            <span class="math-inline">(&Delta;)</span>
            ويشمل النقطة ذات الإحداثيين
            <span class="math-inline">(&alpha;;0)</span>.
            <br>
            أنشئ كلا من
            <span class="math-inline">(T)</span> و
            <span class="math-inline">(&Delta;)</span> و
            <span class="math-inline">(d)</span>
            ثم المنحنى
            <span class="math-inline">(C<sub>f</sub>)</span>
            على المجال
            <span class="math-inline">[0;&alpha;]</span>.
          </li>
          <li>
            ليكن <span class="math-inline">m</span> وسيطا حقيقيا، ناقش بيانيا وحسب قيم
            <span class="math-inline">m</span>
            عدد حلول المعادلة:
            <span class="math-line">x<sup>2</sup>lnx+m=0</span>
            في المجال
            <span class="math-inline">[0;&alpha;]</span>.
          </li>
          <li>
            نعتبر
            <span class="math-inline">0&lt;&lambda;&lt;1</span>
            و:
            <span class="math-line">A(&lambda;)=&int;<sub>&lambda;</sub><sup>1</sup>-x<sup>2</sup>lnx dx</span>.
            <ol>
              <li>
                باستعمال المكاملة بالتجزئة احسب
                <span class="math-inline">A(&lambda;)</span>
                بدلالة
                <span class="math-inline">&lambda;</span>.
              </li>
              <li>
                احسب:
                <span class="math-line"><span class="lim"><strong>lim</strong><small>&lambda;&rarr;0</small></span>A(&lambda;)</span>
                ثم فسر النتيجة هندسيا.
              </li>
            </ol>
          </li>
        </ol>
      </section>
    `
  },
  {
    id: "math-2019-topic-2-exp-family",
    title: "موضوع بكالوريا الجزائر 2019 - رياضيات الموضوع الثاني",
    branch: "math",
    year: "2019",
    date: "2019",
    source: "user-image",
    file: "",
    tags: ["exp", "study-functions", "area", "discussion"],
    summary: "التمرين الرابع من بكالوريا 2019 لشعبة رياضيات، الموضوع الثاني: عائلة الدوال f_k(x)=(x+1)^2e^(-kx)، نهايات وتغيرات حسب الوسيط، ثم دراسة الحالة k=2 ومساحة.",
    statement: `
      <section class="statement-block">
        <h3>بكالوريا الجزائر 2019 - شعبة رياضيات - الموضوع الثاني</h3>
        <p><strong>التمرين الرابع</strong></p>

        <h4>I - عائلة الدوال <span class="math-inline">f<sub>k</sub></span></h4>
        <p>
          <span class="math-inline">f<sub>k</sub></span> الدالة العددية المعرفة على
          <span class="math-inline">R</span> بـ:
          <span class="math-line">f<sub>k</sub>(x)=(x+1)<sup>2</sup>e<sup>-kx</sup></span>
          حيث <span class="math-inline">k</span> وسيط حقيقي.
        </p>
        <p>
          وليكن <span class="math-inline">(C<sub>k</sub>)</span> التمثيل البياني للدالة
          <span class="math-inline">f<sub>k</sub></span> في المعلم المتعامد والمتجانس
          <span class="math-inline">(O; i, j)</span>.
        </p>
        <ol>
          <li>
            بيّن أن كل المنحنيات
            <span class="math-inline">(C<sub>k</sub>)</span>
            تمر من نقطتين ثابتتين، يطلب تعيينهما.
          </li>
          <li>
            احسب نهايتي الدالة
            <span class="math-inline">f<sub>k</sub></span>
            عند <span class="math-inline">-&infin;</span> وعند
            <span class="math-inline">+&infin;</span> حسب قيم الوسيط الحقيقي
            <span class="math-inline">k</span>.
          </li>
          <li>
            احسب <span class="math-inline">f&prime;<sub>k</sub>(x)</span>، ثم حدّد حسب قيم الوسيط الحقيقي
            <span class="math-inline">k</span> اتجاه تغير الدالة
            <span class="math-inline">f<sub>k</sub></span>.
          </li>
          <li>
            شكّل جدول تغيرات الدالة
            <span class="math-inline">f<sub>k</sub></span>
            من أجل كل عدد حقيقي موجب تماما.
          </li>
          <li>
            ناقش حسب قيم الوسيط الحقيقي
            <span class="math-inline">k</span>
            الأوضاع النسبية للمنحنيين
            <span class="math-inline">(C<sub>k</sub>)</span>
            و
            <span class="math-inline">(C<sub>k+1</sub>)</span>.
          </li>
        </ol>

        <h4>II - الحالة <span class="math-inline">k=2</span></h4>
        <p>
          <span class="math-inline">f</span> الدالة المعرفة على
          <span class="math-inline">R</span> بـ:
          <span class="math-line">f(x)=(x+1)<sup>2</sup>e<sup>-2x</sup></span>.
          ونسمي تمثيلها البياني
          <span class="math-inline">(C<sub>f</sub>)</span>
          في المعلم المتعامد والمتجانس
          <span class="math-inline">(O; i, j)</span>.
        </p>
        <ol>
          <li>
            شكّل جدول تغيرات الدالة <span class="math-inline">f</span>، ثم ارسم المنحنى
            <span class="math-inline">(C<sub>f</sub>)</span>
            على المجال
            <span class="math-inline">[-3/2,+&infin;[</span>.
          </li>
          <li>
            <strong>أ)</strong> بيّن أن المعادلة
            <span class="math-inline">f(x)=1</span>
            تقبل حلين في <span class="math-inline">R</span> أحدهما
            <span class="math-inline">&alpha;</span> حيث:
            <span class="math-line">-1.28&lt;&alpha;&lt;-1.27</span>.
          </li>
          <li>
            <strong>ب)</strong> عيّن قيم العدد الحقيقي
            <span class="math-inline">m</span>
            التي من أجلها تقبل المعادلة:
            <span class="math-line">|<span class="frac"><span class="num">x+1</span><span class="den">e<sup>x</sup></span></span>|=|<span class="frac"><span class="num">m+1</span><span class="den">e<sup>m</sup></span></span>|</span>
            حلا وحيدا.
          </li>
          <li>
            <span class="math-inline">g</span> الدالة المعرفة على
            <span class="math-inline">R</span> بـ:
            <span class="math-line">g(x)=(x+1)e<sup>-2x</sup></span>.
            <ol>
              <li>
                بيّن أنه من أجل كل عدد حقيقي <span class="math-inline">x</span>:
                <span class="math-line">g&prime;(x)+2g(x)-e<sup>-2x</sup>=0</span>
                ثم استنتج دالة أصلية لـ <span class="math-inline">g</span> على
                <span class="math-inline">R</span>.
              </li>
              <li>
                باستعمال المكاملة بالتجزئة، احسب مساحة الحيز المستوي المحدد بالمنحنى
                <span class="math-inline">(C<sub>f</sub>)</span>
                ومحور الفواصل والمستقيمين اللذين معادلتاهما:
                <span class="math-line">x=-1 و x=0</span>.
              </li>
            </ol>
          </li>
        </ol>
      </section>
    `
  },
  {
    id: "math-2020-topic-1-exp-parabola",
    title: "موضوع بكالوريا الجزائر 2020 - رياضيات الموضوع الأول",
    branch: "math",
    year: "2020",
    date: "2020",
    source: "user-image",
    file: "",
    tags: ["exp", "study-functions", "asymptotes", "discussion"],
    summary: "التمرين الرابع من بكالوريا 2020 لشعبة رياضيات، الموضوع الأول: دراسة إشارات دالتين مساعدتين، ثم دراسة f(x)=(x-3)e^x+1/2 x^2 على ]-∞;0]، وضعية نسبية مع قطع مكافئ، ومناقشة بيانية.",
    statement: `
      <section class="statement-block">
        <h3>بكالوريا الجزائر 2020 - شعبة رياضيات - الموضوع الأول</h3>
        <p><strong>التمرين الرابع: (07 نقاط)</strong></p>

        <h4>I - الدالتان المساعدتان</h4>
        <p>
          الدالتان العدديتان <span class="math-inline">g</span> و
          <span class="math-inline">h</span> معرفتان على المجال
          <span class="math-inline">]-&infin;;0]</span> كما يلي:
          <span class="math-line">g(x)=-2e<sup>x</sup></span>
          و
          <span class="math-line">h(x)=x(e<sup>x</sup>+1)</span>.
        </p>
        <ol>
          <li>
            حدّد إشارة كل من
            <span class="math-inline">g(x)</span> و
            <span class="math-inline">h(x)</span>
            على المجال <span class="math-inline">]-&infin;;0]</span>.
          </li>
        </ol>

        <h4>II - دراسة الدالة <span class="math-inline">f</span></h4>
        <p>
          الدالة العددية <span class="math-inline">f</span> معرفة على المجال
          <span class="math-inline">]-&infin;;0]</span> بـ:
          <span class="math-line">f(x)=(x-3)e<sup>x</sup>+<span class="frac"><span class="num">1</span><span class="den">2</span></span>x<sup>2</sup></span>.
        </p>
        <p>
          <span class="math-inline">(C<sub>f</sub>)</span> تمثيلها البياني في المستوى المنسوب إلى المعلم المتعامد المتجانس
          <span class="math-inline">(O; i, j)</span>.
        </p>
        <ol>
          <li>
            <strong>أ)</strong> بيّن أنه من أجل كل عدد حقيقي <span class="math-inline">x</span> من المجال
            <span class="math-inline">]-&infin;;0]</span>:
            <span class="math-line">f&prime;(x)=h(x)+g(x)</span>.
            <br>
            استنتج اتجاه تغير الدالة <span class="math-inline">f</span> على المجال
            <span class="math-inline">]-&infin;;0]</span>.
          </li>
          <li>
            احسب:
            <span class="math-line"><span class="lim"><strong>lim</strong><small>x&rarr;-&infin;</small></span>f(x)</span>
            و <span class="math-inline">f(0)</span>،
            ثم شكّل جدول تغيرات الدالة <span class="math-inline">f</span>.
          </li>
          <li>
            بيّن أن المعادلة <span class="math-inline">f(x)=0</span> تقبل حلا وحيدا
            <span class="math-inline">&alpha;</span> في المجال
            <span class="math-inline">]-&infin;;0]</span>، ثم تحقق أن:
            <span class="math-line">-1.5&lt;&alpha;&lt;-1.4</span>.
          </li>
          <li>
            <span class="math-inline">(P)</span> هو التمثيل البياني للدالة:
            <span class="math-line">x &mapsto; <span class="frac"><span class="num">1</span><span class="den">2</span></span>x<sup>2</sup></span>
            على المجال <span class="math-inline">]-&infin;;0]</span>.
            <ol>
              <li>
                احسب:
                <span class="math-line"><span class="lim"><strong>lim</strong><small>x&rarr;-&infin;</small></span>[f(x)-<span class="frac"><span class="num">1</span><span class="den">2</span></span>x<sup>2</sup>]</span>
                ثم فسّر النتيجة بيانيا.
              </li>
              <li>
                ادرس الوضع النسبي للمنحنيين
                <span class="math-inline">(P)</span> و
                <span class="math-inline">(C<sub>f</sub>)</span>.
              </li>
              <li>
                أنشئ <span class="math-inline">(P)</span> ثم المنحنى
                <span class="math-inline">(C<sub>f</sub>)</span>
                على المجال <span class="math-inline">]-&infin;;0]</span>.
              </li>
            </ol>
          </li>
          <li>
            ليكن <span class="math-inline">m</span> وسيطا حقيقيا. ناقش بيانيا وحسب قيم
            <span class="math-inline">m</span>
            عدد حلول المعادلة:
            <span class="math-line">|f(x)|=e<sup>m</sup></span>
            في المجال <span class="math-inline">]-&infin;;0]</span>.
          </li>
        </ol>
      </section>
    `
  },
  {
    id: "math-2018-topic-2-exp",
    title: "موضوع بكالوريا الجزائر 2018 - رياضيات الموضوع الثاني",
    branch: "math",
    year: "2018",
    date: "2018",
    source: "user-image",
    file: "",
    tags: ["exp", "study-functions", "asymptotes", "sequences"],
    summary: "التمرين الرابع من بكالوريا 2018 لشعبة رياضيات، الموضوع الثاني: دالة مساعدة أسية، دراسة f(x)=1/x+(1+x)e^(-1/x)، مقارب بجوار +∞، وضعية نسبية، ومتتالية مرتبطة.",
    statement: `
      <section class="statement-block">
        <h3>بكالوريا الجزائر 2018 - شعبة رياضيات - الموضوع الثاني</h3>
        <p><strong>التمرين الرابع: (07 نقاط)</strong></p>

        <h4>I - الدالة المساعدة</h4>
        <p>
          <span class="math-inline">g</span> الدالة العددية المعرفة على المجال
          <span class="math-inline">]0,+&infin;[</span> بـ:
          <span class="math-line">g(x)=(1+x+x<sup>2</sup>)e<sup>-1/x</sup>-1</span>.
        </p>
        <ol>
          <li>
            بيّن أنه من أجل كل <span class="math-inline">x</span> من المجال
            <span class="math-inline">]0,+&infin;[</span>:
            <span class="math-line">g&prime;(x)=<span class="frac"><span class="num">(x+1)(2x<sup>2</sup>+1)</span><span class="den">x<sup>2</sup></span></span>e<sup>-1/x</sup></span>.
          </li>
          <li>
            استنتج اتجاه تغير الدالة <span class="math-inline">g</span> على المجال
            <span class="math-inline">]0,+&infin;[</span>.
          </li>
          <li>
            بيّن أن المعادلة <span class="math-inline">g(x)=0</span> تقبل حلا وحيدا
            <span class="math-inline">&alpha;</span> حيث:
            <span class="math-line">0.9&lt;&alpha;&lt;1</span>،
            واستنتج إشارة <span class="math-inline">g(x)</span> على المجال
            <span class="math-inline">]0,+&infin;[</span>.
          </li>
        </ol>

        <h4>II - دراسة الدالة <span class="math-inline">f</span></h4>
        <p>
          <span class="math-inline">f</span> الدالة العددية المعرفة على المجال
          <span class="math-inline">]0,+&infin;[</span> بـ:
          <span class="math-line">f(x)=<span class="frac"><span class="num">1</span><span class="den">x</span></span>+(1+x)e<sup>-1/x</sup></span>.
        </p>
        <p>
          <span class="math-inline">(C<sub>f</sub>)</span> التمثيل البياني للدالة
          <span class="math-inline">f</span> في المستوى المنسوب إلى المعلم المتعامد المتجانس
          <span class="math-inline">(O; i, j)</span>.
        </p>
        <ol>
          <li>
            <strong>أ)</strong> احسب:
            <span class="math-line"><span class="lim"><strong>lim</strong><small>x&rarr;0<sup>+</sup></small></span>f(x)</span>
            و
            <span class="math-line"><span class="lim"><strong>lim</strong><small>x&rarr;+&infin;</small></span>f(x)</span>.
          </li>
          <li>
            <strong>ب)</strong> بيّن أنه من أجل كل <span class="math-inline">x</span> من المجال
            <span class="math-inline">]0,+&infin;[</span>:
            <span class="math-line">f&prime;(x)=<span class="frac"><span class="num">g(x)</span><span class="den">x<sup>2</sup></span></span></span>.
            <br>
            واستنتج اتجاه تغير الدالة <span class="math-inline">f</span> ثم شكّل جدول تغيراتها.
          </li>
          <li>
            بيّن أن:
            <span class="math-line"><span class="lim"><strong>lim</strong><small>x&rarr;+&infin;</small></span>(xe<sup>-1/x</sup>-x)=-1</span>
            ويمكن وضع <span class="math-inline">t=1/x</span>.
            <br>
            ثم استنتج أن المستقيم
            <span class="math-inline">(&Delta;)</span> ذو المعادلة
            <span class="math-inline">y=x</span>
            مقارب للمنحنى
            <span class="math-inline">(C<sub>f</sub>)</span>
            بجوار <span class="math-inline">+&infin;</span>.
          </li>
          <li>
            <span class="math-inline">h</span> الدالة العددية المعرفة على المجال
            <span class="math-inline">]0,+&infin;[</span> بـ:
            <span class="math-line">h(x)=<span class="frac"><span class="num">1</span><span class="den">x</span></span>-1+e<sup>-1/x</sup></span>.
            <ol>
              <li>
                احسب:
                <span class="math-line"><span class="lim"><strong>lim</strong><small>x&rarr;+&infin;</small></span>h(x)</span>
                وادرس اتجاه تغير الدالة
                <span class="math-inline">h</span>
                واستنتج إشارة <span class="math-inline">h(x)</span> على
                <span class="math-inline">]0,+&infin;[</span>.
              </li>
              <li>
                تحقق أن:
                <span class="math-line">f(x)-x=(1+x)h(x)</span>
                ثم استنتج الوضعية النسبية لـ
                <span class="math-inline">(C<sub>f</sub>)</span>
                بالنسبة إلى المستقيم
                <span class="math-inline">(&Delta;)</span>.
              </li>
            </ol>
          </li>
          <li>
            ارسم المستقيم <span class="math-inline">(&Delta;)</span> والمنحنى
            <span class="math-inline">(C<sub>f</sub>)</span>.
            <span class="math-inline">(نأخذ f(&alpha;)=1.73)</span>.
          </li>
          <li>
            <span class="math-inline">(u<sub>n</sub>)</span> متتالية عددية معرفة على
            <span class="math-inline">N*</span> بحدها العام:
            <span class="math-line">u<sub>n</sub>=<span class="frac"><span class="num">n</span><span class="den">n+1</span></span>f(<span class="frac"><span class="num">1</span><span class="den">n</span></span>)-<span class="frac"><span class="num">n<sup>2</sup></span><span class="den">n+1</span></span></span>.
            <ol>
              <li>
                اكتب <span class="math-inline">u<sub>n</sub></span> بدلالة
                <span class="math-inline">n</span>، ثم بيّن أن المتتالية
                <span class="math-inline">(u<sub>n</sub>)</span>
                هندسية، يطلب تعيين أساسها وحدها الأول
                <span class="math-inline">u<sub>1</sub></span>.
              </li>
              <li>
                احسب بدلالة <span class="math-inline">n</span> المجموع
                <span class="math-inline">S<sub>n</sub></span> حيث:
                <span class="math-line">S<sub>n</sub>=(<span class="frac"><span class="num">1</span><span class="den">2</span></span>f(1)-<span class="frac"><span class="num">1</span><span class="den">2</span></span>)+(<span class="frac"><span class="num">2</span><span class="den">3</span></span>f(<span class="frac"><span class="num">1</span><span class="den">2</span></span>)-<span class="frac"><span class="num">3</span><span class="den">4</span></span>)+...+(<span class="frac"><span class="num">n</span><span class="den">n+1</span></span>f(<span class="frac"><span class="num">1</span><span class="den">n</span></span>)-<span class="frac"><span class="num">n<sup>2</sup></span><span class="den">n+1</span></span>)</span>.
              </li>
            </ol>
          </li>
        </ol>
      </section>
    `
  },
  {
    id: "math-2018-ln-study",
    title: "موضوع بكالوريا الجزائر 2018 - رياضيات",
    branch: "math",
    year: "2018",
    date: "2018",
    source: "user-image",
    file: "",
    tags: ["ln", "study-functions", "asymptotes", "tangents", "area"],
    summary: "التمرين الرابع من بكالوريا 2018 لشعبة رياضيات: دراسة دالة تتضمن 1/lnx، استمرارية واشتقاق عند الصفر، مقارب مائل، مماس، وضعية نسبية ومساحة.",
    statement: `
      <section class="statement-block">
        <h3>بكالوريا الجزائر 2018 - شعبة رياضيات</h3>
        <p><strong>التمرين الرابع: (07 نقاط)</strong></p>
        <p>
          <span class="math-inline">f</span> الدالة العددية المعرفة على
          <span class="math-inline">[0;1[ &cup; ]1,+&infin;[</span> بـ:
          <span class="math-line">f(x)=x+1-<span class="frac"><span class="num">1</span><span class="den">lnx</span></span> ; x&in;R<sup>+</sup>* - {1}</span>
          و
          <span class="math-line">f(0)=1</span>.
        </p>
        <p>
          يرمز <span class="math-inline">ln</span> إلى اللوغاريتم النيبيري، و
          <span class="math-inline">(C<sub>f</sub>)</span> التمثيل البياني للدالة
          <span class="math-inline">f</span> في المستوى المنسوب إلى المعلم المتعامد المتجانس
          <span class="math-inline">(O; i, j)</span>.
        </p>
        <ol>
          <li>
            <strong>أ)</strong> بيّن أن <span class="math-inline">f</span> مستمرة عند
            <span class="math-inline">0</span> بقيم أكبر.
          </li>
          <li>
            <strong>ب)</strong> احسب:
            <span class="math-line"><span class="lim"><strong>lim</strong><small>h&rarr;0<sup>+</sup></small></span><span class="frac"><span class="num">f(h)-f(0)</span><span class="den">h</span></span></span>
            ثم فسّر النتيجة هندسيا.
          </li>
          <li>
            <strong>2 أ)</strong> احسب:
            <span class="math-line"><span class="lim"><strong>lim</strong><small>x&rarr;1<sup>-</sup></small></span>f(x)</span>
            و
            <span class="math-line"><span class="lim"><strong>lim</strong><small>x&rarr;1<sup>+</sup></small></span>f(x)</span>
            و
            <span class="math-line"><span class="lim"><strong>lim</strong><small>x&rarr;+&infin;</small></span>f(x)</span>.
          </li>
          <li><strong>ب)</strong> ادرس اتجاه تغير الدالة <span class="math-inline">f</span> ثم شكّل جدول تغيراتها.</li>
          <li>
            <strong>3)</strong> بيّن أن المنحنى
            <span class="math-inline">(C<sub>f</sub>)</span>
            يقبل مستقيما مقاربا مائلا
            <span class="math-inline">(&Delta;)</span> يطلب تعيين معادلة له،
            ثم ادرس وضعية
            <span class="math-inline">(C<sub>f</sub>)</span>
            بالنسبة إلى
            <span class="math-inline">(&Delta;)</span>.
          </li>
          <li>
            <strong>4)</strong> بيّن أن المنحنى
            <span class="math-inline">(C<sub>f</sub>)</span>
            يقطع حامل محور الفواصل في نقطة وحيدة
            <span class="math-inline">&omega;</span>
            فاصلتها <span class="math-inline">&alpha;</span> حيث:
            <span class="math-line">1.49&lt;&alpha;&lt;1.5</span>.
            <br>
            ثم بيّن أن معادلة المماس للمنحنى
            <span class="math-inline">(C<sub>f</sub>)</span>
            في النقطة <span class="math-inline">&omega;</span> تكتب على الشكل:
            <span class="math-line">y=(a+3+<span class="frac"><span class="num">1</span><span class="den">a</span></span>)(x-a)</span>.
          </li>
          <li>
            ارسم المستقيم
            <span class="math-inline">(&Delta;)</span>
            والمنحنى
            <span class="math-inline">(C<sub>f</sub>)</span>.
          </li>
          <li>
            <span class="math-inline">h</span> الدالة العددية المعرفة على المجال
            <span class="math-inline">[1,+&infin;[</span> بـ:
            <span class="math-line">h(x)=1-x+xlnx</span>.
            <ol>
              <li>
                بيّن أن الدالة <span class="math-inline">h</span> متزايدة تماما على المجال
                <span class="math-inline">[1,+&infin;[</span>
                واستنتج إشارة <span class="math-inline">h(x)</span> على هذا المجال.
              </li>
              <li>
                بيّن أنه من أجل كل <span class="math-inline">x&gt;1</span>:
                <span class="math-line">f(x)-x+<span class="frac"><span class="num">1</span><span class="den">xlnx</span></span>=<span class="frac"><span class="num">h(x)</span><span class="den">xlnx</span></span></span>.
              </li>
              <li>
                واستنتج أنه من أجل كل <span class="math-inline">x&gt;1</span>:
                <span class="math-line">x-<span class="frac"><span class="num">1</span><span class="den">xlnx</span></span>&lt;f(x)&lt;x+1</span>.
              </li>
            </ol>
          </li>
          <li>
            <strong>7)</strong> <span class="math-inline">A</span> مساحة الحيز من المستوى المحدد بالمنحنى
            <span class="math-inline">(C<sub>f</sub>)</span>
            وحامل محور الفواصل والمستقيمين اللذين معادلتاهما:
            <span class="math-line">x=&alpha; و x=e</span>
            حيث <span class="math-inline">e</span> هو أساس اللوغاريتم النيبيري.
            <br>
            بيّن أن:
            <span class="math-line"><span class="frac"><span class="num">1</span><span class="den">2</span></span>(e<sup>2</sup>-&alpha;<sup>2</sup>)-ln(&alpha;+1)&lt;A&lt;<span class="frac"><span class="num">1</span><span class="den">2</span></span>(e-&alpha;)(e+&alpha;+2)</span>.
          </li>
        </ol>
      </section>
    `
  },
  {
    id: "math-2017-special-topic-2-exp-area",
    title: "دورة استثنائية 2017 - رياضيات الموضوع الثاني",
    branch: "math",
    year: "2017",
    date: "2017",
    source: "user-image",
    file: "",
    tags: ["exp", "study-functions", "area"],
    summary: "التمرين الرابع من الدورة الاستثنائية 2017 لشعبة رياضيات، الموضوع الثاني: دراسة f(x)=(x+1)^2e^-x، نقطة انعطاف، عائلة دوال f_m، منحنى ثابت، وضع نسبي ومساحة.",
    statement: `
      <section class="statement-block">
        <h3>بكالوريا الجزائر 2017 - دورة استثنائية - شعبة رياضيات - الموضوع الثاني</h3>
        <p><strong>التمرين الرابع: (07 نقاط)</strong></p>
        <p>
          المستوى منسوب إلى المعلم المتعامد المتجانس
          <span class="math-inline">(O; i, j)</span>
          حيث:
          <span class="math-inline">||i||=1cm</span>.
        </p>

        <h4>I - دراسة الدالة <span class="math-inline">f</span></h4>
        <p>
          نعتبر الدالة <span class="math-inline">f</span> المعرفة على
          <span class="math-inline">R</span> كما يلي:
          <span class="math-line">f(x)=(x+1)<sup>2</sup>e<sup>-x</sup></span>.
          و <span class="math-inline">(C)</span> تمثيلها البياني.
        </p>
        <ol>
          <li>
            احسب:
            <span class="math-line"><span class="lim"><strong>lim</strong><small>x&rarr;-&infin;</small></span>f(x)</span>
            و
            <span class="math-line"><span class="lim"><strong>lim</strong><small>x&rarr;+&infin;</small></span>f(x)</span>.
          </li>
          <li>ادرس اتجاه تغير الدالة <span class="math-inline">f</span> ثم شكّل جدول تغيراتها.</li>
          <li>
            أثبت أن المنحنى <span class="math-inline">(C)</span> يقبل نقطتي انعطاف، يطلب تعيين إحداثييهما،
            احسب <span class="math-inline">f(-2)</span>، ثم ارسم المنحنى
            <span class="math-inline">(C)</span>.
          </li>
        </ol>

        <h4>II - عائلة الدوال <span class="math-inline">f<sub>m</sub></span></h4>
        <p>
          ليكن <span class="math-inline">m</span> وسيطا حقيقيا. نعتبر الدالة
          <span class="math-inline">f<sub>m</sub></span> المعرفة على
          <span class="math-inline">R</span> كما يلي:
          <span class="math-line">f<sub>m</sub>(x)=(x<sup>2</sup>+mx+1)e<sup>-x</sup></span>.
        </p>
        <p>
          وليكن <span class="math-inline">(C<sub>m</sub>)</span> تمثيلها البياني في المعلم السابق.
        </p>
        <ol>
          <li>
            أثبت أن جميع المنحنيات
            <span class="math-inline">(C<sub>m</sub>)</span>
            تشمل نقطة ثابتة
            <span class="math-inline">&omega;</span>، يطلب تعيين إحداثييها.
          </li>
          <li>
            ادرس اتجاه تغير الدالة
            <span class="math-inline">f<sub>m</sub></span>
            واستنتج قيم <span class="math-inline">m</span> التي من أجلها تقبل الدالة
            <span class="math-inline">f<sub>m</sub></span>
            قيمتين حديتين، يطلب تعيينهما.
          </li>
          <li>
            <span class="math-inline">M<sub>m</sub></span> نقطة من المنحنى
            <span class="math-inline">(C<sub>m</sub>)</span>
            فاصلتها:
            <span class="math-line">x<sub>m</sub>=1-m</span>.
            <br>
            أثبت أنه عندما يمسح <span class="math-inline">m</span> مجموعة
            <span class="math-inline">R</span> فإن
            <span class="math-inline">M<sub>m</sub></span> تنتمي إلى منحنى، يطلب تعيين معادلة له.
          </li>
          <li>
            ادرس حسب قيم الوسيط الحقيقي <span class="math-inline">m</span>، حيث
            <span class="math-inline">m&ne;2</span>، الوضعية النسبية للمنحنيين
            <span class="math-inline">(C<sub>m</sub>)</span> و
            <span class="math-inline">(C)</span>.
          </li>
          <li>
            احسب بدلالة العدد الحقيقي الموجب تماما
            <span class="math-inline">&alpha;</span>
            مساحة الحيز المستوي المحدد بالمنحنيين
            <span class="math-inline">(C)</span> و
            <span class="math-inline">(C<sub>3</sub>)</span>
            والمستقيمين اللذين معادلتاهما:
            <span class="math-line">x=0 و x=&alpha;</span>
            ثم احسب:
            <span class="math-line"><span class="lim"><strong>lim</strong><small>&alpha;&rarr;+&infin;</small></span>A(&alpha;)</span>.
          </li>
        </ol>
      </section>
    `
  },
  {
    id: "math-2017-special-topic-1-ln",
    title: "دورة استثنائية 2017 - رياضيات الموضوع الأول",
    branch: "math",
    year: "2017",
    date: "2017",
    source: "user-image",
    file: "",
    tags: ["ln", "study-functions", "asymptotes", "tangents", "area", "discussion"],
    summary: "التمرين الرابع من الدورة الاستثنائية 2017 لشعبة رياضيات، الموضوع الأول: دالة مساعدة g، دراسة دالة f على R*، تناظر، مقارب مائل، مماسان، مناقشة وسيط، ومساحة.",
    statement: `
      <section class="statement-block">
        <h3>بكالوريا الجزائر 2017 - دورة استثنائية - شعبة رياضيات - الموضوع الأول</h3>
        <p><strong>التمرين الرابع</strong></p>

        <h4>I - الدالة المساعدة</h4>
        <p>
          نعتبر الدالة <span class="math-inline">g</span> المعرفة على
          <span class="math-inline">]0,+&infin;[</span> كما يلي:
          <span class="math-line">g(x)=x+2-lnx</span>.
        </p>
        <ol>
          <li>
            ادرس اتجاه تغير الدالة <span class="math-inline">g</span> ثم استنتج إشارة
            <span class="math-inline">g(x)</span>.
          </li>
        </ol>

        <h4>II - دراسة الدالة <span class="math-inline">f</span></h4>
        <p>
          لتكن الدالة <span class="math-inline">f</span> المعرفة على
          <span class="math-inline">R*</span> كما يلي:
          <span class="math-line">f(x)=<span class="frac"><span class="num">1</span><span class="den">2</span></span>(-x+e-<span class="frac"><span class="num">ln(x<sup>2</sup>)</span><span class="den">x</span></span>)</span>.
        </p>
        <p>
          <span class="math-inline">(C<sub>f</sub>)</span> تمثيلها البياني في المستوى المنسوب إلى المعلم المتعامد المتجانس
          <span class="math-inline">(O; i, j)</span> حيث
          <span class="math-inline">||i||=1cm</span>.
        </p>
        <ol>
          <li>
            بيّن أنه من أجل كل عدد حقيقي <span class="math-inline">x</span> غير معدوم:
            <span class="math-line">f&prime;(x)=-<span class="frac"><span class="num">g(x<sup>2</sup>)</span><span class="den">2x<sup>2</sup></span></span></span>
            ثم استنتج اتجاه تغير الدالة <span class="math-inline">f</span>.
          </li>
          <li>
            <strong>أ)</strong> احسب من أجل كل عدد حقيقي <span class="math-inline">x</span> غير معدوم:
            <span class="math-line">f(-x)+f(x)</span>
            ثم فسّر النتيجة بيانيا.
          </li>
          <li>
            <strong>ب)</strong> احسب:
            <span class="math-line"><span class="lim"><strong>lim</strong><small>x&rarr;0<sup>+</sup></small></span>f(x)</span>
            و
            <span class="math-line"><span class="lim"><strong>lim</strong><small>x&rarr;+&infin;</small></span>f(x)</span>
            ثم استنتج:
            <span class="math-line"><span class="lim"><strong>lim</strong><small>x&rarr;0<sup>-</sup></small></span>f(x)</span>
            و
            <span class="math-line"><span class="lim"><strong>lim</strong><small>x&rarr;-&infin;</small></span>f(x)</span>.
          </li>
          <li><strong>ج)</strong> شكّل جدول تغيرات الدالة <span class="math-inline">f</span>.</li>
          <li>
            بيّن أن المستقيم <span class="math-inline">(&Delta;)</span> ذا المعادلة:
            <span class="math-line">y=-<span class="frac"><span class="num">1</span><span class="den">2</span></span>x+<span class="frac"><span class="num">e</span><span class="den">2</span></span></span>
            مقارب لـ <span class="math-inline">(C<sub>f</sub>)</span>، ثم ادرس وضعية
            <span class="math-inline">(C<sub>f</sub>)</span> بالنسبة إلى
            <span class="math-inline">(&Delta;)</span>.
          </li>
          <li>
            <strong>4 أ)</strong> أثبت أنه يوجد مماسان للمنحنى
            <span class="math-inline">(C<sub>f</sub>)</span> معامل توجيه كل منهما يساوي:
            <span class="math-line">-<span class="frac"><span class="num">1</span><span class="den">2</span></span></span>
            ثم جد معادلة لكل منهما.
          </li>
          <li>
            <strong>ب)</strong> بيّن أن المنحنى
            <span class="math-inline">(C<sub>f</sub>)</span> يقطع حامل محور الفواصل في نقطتين فاصلتاهما
            <span class="math-inline">&alpha;</span> و <span class="math-inline">&beta;</span> حيث:
            <span class="math-line">2&lt;&alpha;&lt;2.1 و -0.5&lt;&beta;&lt;-0.4</span>.
          </li>
          <li>
            ارسم المماسين والمستقيم
            <span class="math-inline">(&Delta;)</span> ثم المنحنى
            <span class="math-inline">(C<sub>f</sub>)</span>.
          </li>
          <li>
            باستعمال المنحنى
            <span class="math-inline">(C<sub>f</sub>)</span>، عيّن قيم الوسيط الحقيقي
            <span class="math-inline">m</span> حتى تقبل المعادلة:
            <span class="math-line">x(e-2m)=ln(x<sup>2</sup>)</span>
            حلا وحيدا.
          </li>
          <li>
            نرمز بـ <span class="math-inline">A(&alpha;)</span> إلى مساحة الحيز المستوي المحدد بالمنحنى
            <span class="math-inline">(C<sub>f</sub>)</span> والمستقيمات التي معادلاتها:
            <span class="math-line">x=&alpha; ، x=1 ، x+2y=e</span>.
            تحقق أن:
            <span class="math-line">A(&alpha;)=<span class="frac"><span class="num">1</span><span class="den">2</span></span>(ln&alpha;)<sup>2</sup> cm<sup>2</sup></span>.
          </li>
        </ol>
      </section>
    `
  },
  {
    id: "math-2017-topic-2-ln-integral",
    title: "موضوع بكالوريا الجزائر 2017 - رياضيات الموضوع الثاني",
    branch: "math",
    year: "2017",
    date: "2017",
    source: "user-image",
    file: "",
    tags: ["ln", "study-functions", "asymptotes", "area"],
    summary: "تمرين من بكالوريا 2017 لشعبة رياضيات، الموضوع الثاني: دالة مساعدة g(x)=1/x-lnx، دراسة دالة f(x)=(x+1)/(x-lnx)، وضعية بالنسبة إلى y=1، ودالة تكاملية F.",
    statement: `
      <section class="statement-block">
        <h3>بكالوريا الجزائر 2017 - شعبة رياضيات - الموضوع الثاني</h3>

        <h4>I - الدالة المساعدة</h4>
        <p>
          نعتبر الدالة العددية <span class="math-inline">g</span> المعرفة على المجال
          <span class="math-inline">]0,+&infin;[</span> كما يلي:
          <span class="math-line">g(x)=<span class="frac"><span class="num">1</span><span class="den">x</span></span>-lnx</span>.
        </p>
        <ol>
          <li>ادرس اتجاه تغير الدالة <span class="math-inline">g</span>.</li>
          <li>
            بيّن أن المعادلة <span class="math-inline">g(x)=0</span> تقبل حلا وحيدا
            <span class="math-inline">&alpha;</span> من المجال
            <span class="math-inline">]1.76;1.77[</span>، ثم استنتج إشارة
            <span class="math-inline">g(x)</span> على
            <span class="math-inline">]0,+&infin;[</span>.
          </li>
        </ol>

        <h4>II - دراسة الدالة <span class="math-inline">f</span></h4>
        <p>
          نعتبر الدالة العددية <span class="math-inline">f</span> المعرفة على المجال
          <span class="math-inline">[0,+&infin;[</span> كما يلي:
          <span class="math-line">f(x)=<span class="frac"><span class="num">x+1</span><span class="den">x-lnx</span></span> ; x&gt;0</span>
          و
          <span class="math-line">f(0)=0</span>.
        </p>
        <p>
          <span class="math-inline">(C<sub>f</sub>)</span> تمثيلها البياني في المستوى المنسوب إلى المعلم المتعامد والمتجانس
          <span class="math-inline">(O; i, j)</span>.
        </p>
        <ol>
          <li>
            أثبت أن الدالة <span class="math-inline">f</span> مستمرة عند العدد
            <span class="math-inline">0</span> على اليمين، ثم احسب:
            <span class="math-line"><span class="lim"><strong>lim</strong><small>x&rarr;0<sup>+</sup></small></span><span class="frac"><span class="num">f(x)</span><span class="den">x</span></span></span>
            وفسّر النتيجة بيانيا.
          </li>
          <li>
            بيّن أنه، من أجل كل عدد حقيقي <span class="math-inline">x</span> من المجال
            <span class="math-inline">]0,+&infin;[</span>:
            <span class="math-line">f&prime;(x)=<span class="frac"><span class="num">g(x)</span><span class="den">(x-lnx)<sup>2</sup></span></span></span>.
          </li>
          <li>
            احسب:
            <span class="math-line"><span class="lim"><strong>lim</strong><small>x&rarr;+&infin;</small></span>f(x)</span>
            وفسّر ذلك بيانيا، ثم شكّل جدول تغيرات الدالة
            <span class="math-inline">f</span>.
          </li>
          <li>
            لتكن الدالة <span class="math-inline">h</span> المعرفة على
            <span class="math-inline">]0,+&infin;[</span> بـ:
            <span class="math-line">h(x)=x-lnx</span>.
            <ol>
              <li>
                بيّن أنه من أجل كل عدد حقيقي موجب تماما
                <span class="math-inline">x</span>:
                <span class="math-line">h(x)&gt;0</span>،
                واستنتج وضعية <span class="math-inline">(C<sub>f</sub>)</span>
                بالنسبة إلى المستقيم
                <span class="math-inline">(&Delta;)</span> ذي المعادلة
                <span class="math-inline">y=1</span>.
              </li>
              <li>
                ارسم <span class="math-inline">(C<sub>f</sub>)</span>.
                <span class="math-inline">(نأخذ f(&alpha;)&asymp;2.31)</span>.
              </li>
            </ol>
          </li>
          <li>
            لتكن الدالة <span class="math-inline">F</span> المعرفة على المجال
            <span class="math-inline">]0,+&infin;[</span> كما يلي:
            <span class="math-line">F(x)=&int;<sub>1</sub><sup>x</sup>f(t)dt</span>.
            <ol>
              <li>
                بيّن أنه من أجل كل عدد حقيقي <span class="math-inline">x</span> حيث
                <span class="math-inline">x&ge;1</span>:
                <span class="math-line"><span class="frac"><span class="num">1</span><span class="den">x</span></span>+1&le;f(x)&le;f(&alpha;)</span>.
              </li>
              <li>
                أعط تفسيرا هندسيا للعدد <span class="math-inline">F(e)</span> ثم استنتج حصرا له.
              </li>
            </ol>
          </li>
        </ol>
      </section>
    `
  },
  {
    id: "math-2017-topic-1-exp-discussion",
    title: "موضوع بكالوريا الجزائر 2017 - رياضيات الموضوع الأول",
    branch: "math",
    year: "2017",
    date: "2017",
    source: "user-image",
    file: "",
    tags: ["exp", "study-functions", "tangents", "discussion"],
    summary: "تمرين من بكالوريا 2017 لشعبة رياضيات، الموضوع الأول: دراسة الدالة f(x)=(-x^3+2x^2)e^(-x+1)، مماس، وضعية نسبية، مناقشة بيانية، ودالة مركبة g(x)=f(1/x).",
    statement: `
      <section class="statement-block">
        <h3>بكالوريا الجزائر 2017 - شعبة رياضيات - الموضوع الأول</h3>
        <p>
          نعتبر الدالة العددية <span class="math-inline">f</span> المعرفة على
          <span class="math-inline">R</span> بـ:
          <span class="math-line">f(x)=(-x<sup>3</sup>+2x<sup>2</sup>)e<sup>-x+1</sup></span>.
        </p>
        <p>
          <span class="math-inline">(C<sub>f</sub>)</span> المنحنى الممثل للدالة
          <span class="math-inline">f</span> في المستوى المنسوب إلى المعلم المتعامد والمتجانس
          <span class="math-inline">(O; i, j)</span>.
        </p>
        <ol>
          <li>
            <strong>أ)</strong> احسب:
            <span class="math-line"><span class="lim"><strong>lim</strong><small>x&rarr;-&infin;</small></span>f(x)</span>
            و
            <span class="math-line"><span class="lim"><strong>lim</strong><small>x&rarr;+&infin;</small></span>f(x)</span>
            واستنتج وجود مستقيم مقارب للمنحنى
            <span class="math-inline">(C<sub>f</sub>)</span>، يطلب تعيين معادلة له.
          </li>
          <li>
            <strong>ب)</strong> بيّن أنه، من أجل كل عدد حقيقي <span class="math-inline">x</span>:
            <span class="math-line">f&prime;(x)=x(x<sup>2</sup>-5x+4)e<sup>-x+1</sup></span>
            ثم استنتج اتجاه تغير الدالة <span class="math-inline">f</span> وشكّل جدول تغيراتها.
          </li>
          <li>
            اكتب معادلة المماس <span class="math-inline">(T)</span> للمنحنى
            <span class="math-inline">(C<sub>f</sub>)</span> في النقطة ذات الفاصلة
            <span class="math-inline">2</span>.
          </li>
          <li>
            <span class="math-inline">h</span> الدالة المعرفة على المجال
            <span class="math-inline">[0,+&infin;[</span> كما يلي:
            <span class="math-line">h(x)=x<sup>2</sup>e<sup>-x+2</sup>-4</span>.
            <br>
            ادرس اتجاه تغير الدالة <span class="math-inline">h</span> ثم استنتج إشارة
            <span class="math-inline">h(x)</span>، وحدد عندئذ وضعية المنحنى
            <span class="math-inline">(C<sub>f</sub>)</span> بالنسبة إلى
            <span class="math-inline">(T)</span> على المجال
            <span class="math-inline">[0,+&infin;[</span>.
          </li>
          <li>
            ارسم المماس <span class="math-inline">(T)</span> والمنحنى
            <span class="math-inline">(C<sub>f</sub>)</span> على المجال
            <span class="math-inline">[0,+&infin;[</span>.
          </li>
          <li>
            نعتبر <span class="math-inline">m</span> وسيطا حقيقيا والمعادلة ذات المجهول الحقيقي الموجب
            <span class="math-inline">x</span>:
            <span class="math-line">(E): f(x)=m(x-2)</span>.
            ناقش بيانيا حسب قيم <span class="math-inline">m</span> عدد حلول المعادلة
            <span class="math-inline">(E)</span>.
          </li>
          <li>
            <span class="math-inline">g</span> الدالة المعرفة على المجال
            <span class="math-inline">]0,+&infin;[</span> بـ:
            <span class="math-line">g(x)=f(<span class="frac"><span class="num">1</span><span class="den">x</span></span>)</span>.
            <br>
            اعتمادا على السؤال <span class="math-inline">(1)</span>، شكّل جدول تغيرات الدالة
            <span class="math-inline">g</span>.
          </li>
        </ol>
      </section>
    `
  },
  {
    id: "math-2016-topic-2-exp-sequence",
    title: "موضوع بكالوريا الجزائر 2016 - رياضيات الموضوع الثاني",
    branch: "math",
    year: "2016",
    date: "2016",
    source: "user-image",
    file: "",
    tags: ["exp", "study-functions", "tangents", "area", "sequences"],
    summary: "التمرين الرابع من بكالوريا 2016 لشعبة رياضيات، الموضوع الثاني: دالة مساعدة أسية، دراسة دالتين f وg، مماس، وضع نسبي ومساحة، مشتقات متتابعة ومتتالية.",
    statement: `
      <section class="statement-block">
        <h3>بكالوريا الجزائر 2016 - شعبة رياضيات - الموضوع الثاني</h3>
        <p><strong>التمرين الرابع: (07 نقاط)</strong></p>

        <h4>I - الدالة المساعدة</h4>
        <p>
          <span class="math-inline">&varphi;</span> الدالة العددية المعرفة على
          <span class="math-inline">R</span> كما يلي:
          <span class="math-line">&varphi;(x)=(x<sup>2</sup>-x+1)e<sup>-x+1</sup>-1</span>.
        </p>
        <ol>
          <li>
            احسب:
            <span class="math-line"><span class="lim"><strong>lim</strong><small>x&rarr;-&infin;</small></span>&varphi;(x)</span>
            و
            <span class="math-line"><span class="lim"><strong>lim</strong><small>x&rarr;+&infin;</small></span>&varphi;(x)</span>.
          </li>
          <li>ادرس اتجاه تغير الدالة <span class="math-inline">&varphi;</span> ثم شكّل جدول تغيراتها.</li>
          <li>
            بيّن أن المعادلة <span class="math-inline">&varphi;(x)=0</span> تقبل في
            <span class="math-inline">R</span> حلا
            <span class="math-inline">&alpha;</span> يختلف عن
            <span class="math-inline">1</span>، ثم تحقق أن:
            <span class="math-line">2.79&lt;&alpha;&lt;2.80</span>.
          </li>
          <li>استنتج إشارة <span class="math-inline">&varphi;(x)</span> على <span class="math-inline">R</span>.</li>
        </ol>

        <h4>II - دراسة الدالتين <span class="math-inline">f</span> و <span class="math-inline">g</span></h4>
        <p>
          الدالتان العدديتان <span class="math-inline">f</span> و
          <span class="math-inline">g</span> المعرفتان على <span class="math-inline">R</span> كما يلي:
          <span class="math-line">f(x)=(2x-1)e<sup>-x+1</sup></span>
          و
          <span class="math-line">g(x)=<span class="frac"><span class="num">2x-1</span><span class="den">x<sup>2</sup>-x+1</span></span></span>.
        </p>
        <p>
          <span class="math-inline">(C<sub>f</sub>)</span> و
          <span class="math-inline">(C<sub>g</sub>)</span> تمثيلاهما البيانيان في المستوى المنسوب إلى المعلم المتعامد والمتجانس
          <span class="math-inline">(O; i, j)</span>.
        </p>
        <ol>
          <li>
            احسب:
            <span class="math-line"><span class="lim"><strong>lim</strong><small>x&rarr;-&infin;</small></span>f(x)</span>
            و
            <span class="math-line"><span class="lim"><strong>lim</strong><small>x&rarr;+&infin;</small></span>f(x)</span>.
          </li>
          <li>ادرس اتجاه تغير الدالة <span class="math-inline">f</span> ثم شكّل جدول تغيراتها.</li>
          <li>
            بيّن أن للمنحنيين <span class="math-inline">(C<sub>f</sub>)</span> و
            <span class="math-inline">(C<sub>g</sub>)</span> مماسا مشتركا
            <span class="math-inline">(T)</span> في النقطة ذات الفاصلة
            <span class="math-inline">1</span>، ثم جد معادلته.
          </li>
          <li>ارسم المماس <span class="math-inline">(T)</span> والمنحنى <span class="math-inline">(C<sub>f</sub>)</span>.</li>
          <li>
            بيّن أنه من أجل كل عدد حقيقي <span class="math-inline">x</span>:
            <span class="math-line">f(x)-g(x)=<span class="frac"><span class="num">(2x-1)&varphi;(x)</span><span class="den">x<sup>2</sup>-x+1</span></span></span>.
          </li>
          <li>
            ادرس إشارة الفرق <span class="math-inline">f(x)-g(x)</span> على
            <span class="math-inline">R</span>، ثم استنتج الوضع النسبي للمنحنيين
            <span class="math-inline">(C<sub>f</sub>)</span> و
            <span class="math-inline">(C<sub>g</sub>)</span>.
          </li>
          <li>
            باستعمال مكاملة بالتجزئة، احسب بدلالة العدد الحقيقي
            <span class="math-inline">x</span>:
            <span class="math-line">&int;<sub>1</sub><sup>x</sup>f(t)dt</span>.
          </li>
          <li>
            احسب مساحة الحيز المستوي المحدد بالمنحنيين
            <span class="math-inline">(C<sub>f</sub>)</span> و
            <span class="math-inline">(C<sub>g</sub>)</span>
            والمستقيمين اللذين معادلتاهما:
            <span class="math-line">x=1 و x=2</span>.
          </li>
        </ol>

        <h4>III - المشتقات المتتابعة والمتتالية</h4>
        <ol>
          <li>
            احسب:
            <span class="math-inline">f&Prime;(x)</span> و
            <span class="math-inline">f<sup>(3)</sup>(x)</span> و
            <span class="math-inline">f<sup>(4)</sup>(x)</span>.
            أعط تخمينا لعبارة
            <span class="math-inline">f<sup>(n)</sup>(x)</span>
            حيث <span class="math-inline">n</span> عدد طبيعي غير معدوم.
          </li>
          <li>
            برهن بالتراجع أنه من أجل كل عدد طبيعي غير معدوم <span class="math-inline">n</span>:
            <span class="math-line">f<sup>(n)</sup>(x)=(-1)<sup>n</sup>[2x-(2n+1)]e<sup>1-x</sup></span>.
          </li>
          <li>
            <span class="math-inline">(u<sub>n</sub>)</span> المتتالية العددية المعرفة من أجل كل عدد طبيعي غير معدوم
            <span class="math-inline">n</span> كما يلي:
            <span class="math-line">u<sub>n</sub>=f<sup>(n)</sup>(1)</span>.
            <ol>
              <li>
                جد العلاقة التي تربط الحدين
                <span class="math-inline">u<sub>k+1</sub></span> و
                <span class="math-inline">u<sub>k</sub></span>.
              </li>
              <li>
                استنتج بدلالة <span class="math-inline">n</span> المجموع:
                <span class="math-line">u<sub>1</sub>+u<sub>2</sub>+...+u<sub>2n</sub></span>.
              </li>
            </ol>
          </li>
        </ol>
      </section>
    `
  },
  {
    id: "math-2016-topic-1-ln-sequence",
    title: "موضوع بكالوريا الجزائر 2016 - رياضيات الموضوع الأول",
    branch: "math",
    year: "2016",
    date: "2016",
    source: "user-image",
    file: "",
    tags: ["ln", "study-functions", "asymptotes", "sequences"],
    summary: "التمرين الرابع من بكالوريا 2016 لشعبة رياضيات، الموضوع الأول: دالة مساعدة لوغارتمية، دراسة دالة f(x)=-x+(3+2lnx)/x، مقارب ومماس، مناقشة وسيط، ومتتالية تكاملية.",
    statement: `
      <section class="statement-block">
        <h3>بكالوريا الجزائر 2016 - شعبة رياضيات - الموضوع الأول</h3>
        <p><strong>التمرين الرابع: (06,5 نقطة)</strong></p>

        <h4>I - الدالة المساعدة</h4>
        <p>
          <span class="math-inline">g</span> الدالة العددية المعرفة على المجال
          <span class="math-inline">]0,+&infin;[</span> بـ:
          <span class="math-line">g(x)=1+x<sup>2</sup>+2lnx</span>.
        </p>
        <ol>
          <li>ادرس اتجاه تغير الدالة <span class="math-inline">g</span>.</li>
          <li>
            بيّن أن المعادلة <span class="math-inline">g(x)=0</span> تقبل في المجال
            <span class="math-inline">]0.52;0.53[</span> حلا وحيدا
            <span class="math-inline">&alpha;</span>.
          </li>
          <li>استنتج إشارة <span class="math-inline">g(x)</span> على المجال <span class="math-inline">]0,+&infin;[</span>.</li>
        </ol>

        <h4>II - دراسة الدالة <span class="math-inline">f</span></h4>
        <p>
          <span class="math-inline">f</span> الدالة العددية المعرفة على المجال
          <span class="math-inline">]0,+&infin;[</span> بـ:
          <span class="math-line">f(x)=-x+<span class="frac"><span class="num">3+2lnx</span><span class="den">x</span></span></span>.
        </p>
        <p>
          <span class="math-inline">(C<sub>f</sub>)</span> تمثيلها البياني في المستوى المنسوب إلى المعلم المتعامد والمتجانس
          <span class="math-inline">(O; i, j)</span>.
        </p>
        <ol>
          <li>
            احسب:
            <span class="math-line"><span class="lim"><strong>lim</strong><small>x&rarr;0<sup>+</sup></small></span>f(x)</span>
            و
            <span class="math-line"><span class="lim"><strong>lim</strong><small>x&rarr;+&infin;</small></span>f(x)</span>.
          </li>
          <li>
            <strong>أ)</strong> بيّن أنه من أجل كل عدد حقيقي <span class="math-inline">x</span> من المجال
            <span class="math-inline">]0,+&infin;[</span>:
            <span class="math-line">f&prime;(x)=-<span class="frac"><span class="num">g(x)</span><span class="den">x<sup>2</sup></span></span></span>.
          </li>
          <li><strong>ب)</strong> شكّل جدول تغيرات الدالة <span class="math-inline">f</span>.</li>
          <li>
            <strong>ج)</strong> تحقق أن:
            <span class="math-line">f(&alpha;)=2(<span class="frac"><span class="num">1</span><span class="den">&alpha;</span></span>-&alpha;)</span>
            ثم عيّن حصرا له.
          </li>
          <li>
            <strong>3 أ)</strong> احسب:
            <span class="math-line"><span class="lim"><strong>lim</strong><small>x&rarr;+&infin;</small></span>[f(x)+x]</span>
            ثم فسّر النتيجة هندسيا.
          </li>
          <li>
            <strong>ب)</strong> ادرس وضعية
            <span class="math-inline">(C<sub>f</sub>)</span> بالنسبة إلى مستقيمه المقارب المائل
            <span class="math-inline">(&Delta;)</span>.
          </li>
          <li>
            <strong>ج)</strong> بيّن أن <span class="math-inline">(C<sub>f</sub>)</span> يقبل مماسا
            <span class="math-inline">(T)</span> يوازي
            <span class="math-inline">(&Delta;)</span>، يطلب كتابة معادلة ديكارتية له.
          </li>
          <li>
            <strong>4)</strong> بيّن أن <span class="math-inline">(C<sub>f</sub>)</span> يقطع حامل محور الفواصل في نقطتين فاصلتاهما
            <span class="math-inline">x<sub>0</sub></span> و
            <span class="math-inline">x<sub>1</sub></span> حيث:
            <span class="math-line">0.22&lt;x<sub>0</sub>&lt;0.23 و 2.11&lt;x<sub>1</sub>&lt;2.12</span>.
            <br>
            أنشئ <span class="math-inline">(T)</span> و <span class="math-inline">(&Delta;)</span> و
            <span class="math-inline">(C<sub>f</sub>)</span>.
          </li>
          <li>
            <strong>5)</strong> <span class="math-inline">m</span> وسيط حقيقي، ناقش بيانيا وحسب قيم
            <span class="math-inline">m</span> عدد حلول المعادلة:
            <span class="math-line">3+2lnx-mx=0</span>.
          </li>
        </ol>

        <h4>III - المتتالية</h4>
        <p>
          من أجل كل عدد طبيعي <span class="math-inline">n</span> نضع:
          <span class="math-line">u<sub>n</sub>=&int;<sub>e<sup>n</sup></sub><sup>e<sup>n+1</sup></sup>[f(x)+x]dx</span>.
        </p>
        <ol>
          <li>بيّن أنه من أجل كل عدد طبيعي <span class="math-inline">n</span>: <span class="math-inline">u<sub>n</sub>&gt;0</span>.</li>
          <li>أعط تفسيرا هندسيا للعدد <span class="math-inline">u<sub>0</sub></span>.</li>
          <li>احسب <span class="math-inline">u<sub>n</sub></span> بدلالة <span class="math-inline">n</span>.</li>
          <li>
            نضع:
            <span class="math-line">S<sub>n</sub>=u<sub>0</sub>+u<sub>1</sub>+u<sub>2</sub>+...+u<sub>n</sub></span>.
            احسب <span class="math-inline">S<sub>n</sub></span> بدلالة <span class="math-inline">n</span>.
          </li>
        </ol>
      </section>
    `
  },
  {
    id: "math-2015-topic-2-exp-sequence",
    title: "موضوع بكالوريا الجزائر 2015 - رياضيات الموضوع الثاني",
    branch: "math",
    year: "2015",
    date: "2015",
    source: "user-image",
    file: "",
    tags: ["exp", "study-functions", "asymptotes", "sequences"],
    summary: "التمرين الرابع من بكالوريا 2015 لشعبة رياضيات، الموضوع الثاني: دراسة الدالة f(x)=(x-1)e^(1/x) مع تمديد عند الصفر، مقارب، دالة مساعدة، متتالية راجعة، ومعادلة وسيط.",
    statement: `
      <section class="statement-block">
        <h3>بكالوريا الجزائر 2015 - شعبة رياضيات - الموضوع الثاني</h3>
        <p><strong>التمرين الرابع: (07 نقاط)</strong></p>
        <p>
          <span class="math-inline">f</span> الدالة العددية المعرفة على المجال
          <span class="math-inline">]0,+&infin;[</span> بـ:
          <span class="math-line">f(x)=(x-1)e<sup>1/x</sup></span>
          و <span class="math-line">f(0)=0</span>.
        </p>
        <p>
          <span class="math-inline">(C<sub>f</sub>)</span> المنحنى الممثل للدالة
          <span class="math-inline">f</span> في المستوى المنسوب إلى المعلم المتعامد والمتجانس
          <span class="math-inline">(O; i, j)</span>.
        </p>
        <ol>
          <li>ادرس استمرارية الدالة <span class="math-inline">f</span> عند <span class="math-inline">0</span> من اليمين.</li>
          <li>احسب <span class="math-line"><span class="lim"><strong>lim</strong><small>x&rarr;0<sup>+</sup></small></span><span class="frac"><span class="num">f(x)</span><span class="den">x</span></span></span> ثم فسّر النتيجة هندسيا.</li>
          <li><strong>أ)</strong> احسب <span class="math-line"><span class="lim"><strong>lim</strong><small>x&rarr;+&infin;</small></span>f(x)</span>.</li>
          <li><strong>ب)</strong> ادرس اتجاه تغير الدالة <span class="math-inline">f</span> ثم شكّل جدول تغيراتها.</li>
          <li><strong>4 أ)</strong> تحقق أن <span class="math-line"><span class="lim"><strong>lim</strong><small>x&rarr;+&infin;</small></span>[f(x)-x]=0</span>.</li>
          <li><strong>ب)</strong> استنتج للمنحنى <span class="math-inline">(C<sub>f</sub>)</span> مستقيما مقاربا <span class="math-inline">(&Delta;)</span> بجوار <span class="math-inline">+&infin;</span>، يطلب تعيين معادلته.</li>
          <li>
            <strong>5)</strong> <span class="math-inline">g</span> الدالة المعرفة على المجال <span class="math-inline">]0,+&infin;[</span> بـ:
            <span class="math-line">g(x)=<span class="frac"><span class="num">f(x)</span><span class="den">x</span></span>=(1-<span class="frac"><span class="num">1</span><span class="den">x</span></span>)e<sup>1/x</sup></span>.
            <ol>
              <li>احسب <span class="math-line"><span class="lim"><strong>lim</strong><small>x&rarr;0<sup>+</sup></small></span>g(x)</span>.</li>
              <li>ادرس اتجاه تغير الدالة <span class="math-inline">g</span> ثم شكّل جدول تغيراتها.</li>
            </ol>
          </li>
          <li><strong>6 أ)</strong> بيّن المتراجحة المطلوبة في نص التمرين من أجل كل <span class="math-inline">x</span> من المجال <span class="math-inline">]0,+&infin;[</span>، ثم استنتج وضعية <span class="math-inline">(C<sub>f</sub>)</span> بالنسبة إلى المستقيم <span class="math-inline">(&Delta;)</span>.</li>
          <li><strong>ب)</strong> أنشئ المنحنى <span class="math-inline">(C<sub>f</sub>)</span>.</li>
          <li>
            <strong>7)</strong> <span class="math-inline">(u<sub>n</sub>)</span> المتتالية المعرفة بـ:
            <span class="math-line">u<sub>0</sub>=3</span>
            ومن أجل كل عدد طبيعي <span class="math-inline">n</span>:
            <span class="math-line">u<sub>n+1</sub>=f(u<sub>n</sub>)</span>.
            <ol>
              <li>بيّن أنه من أجل كل <span class="math-inline">n</span> من <span class="math-inline">N</span>: <span class="math-inline">u<sub>n</sub>&gt;0</span>.</li>
              <li>خمّن اتجاه تغير المتتالية <span class="math-inline">(u<sub>n</sub>)</span>.</li>
              <li>بيّن أن المتتالية <span class="math-inline">(u<sub>n</sub>)</span> متقاربة، ثم عيّن نهايتها.</li>
            </ol>
          </li>
          <li>
            <strong>8)</strong> <span class="math-inline">m</span> عدد حقيقي، و <span class="math-inline">h<sub>m</sub></span> دالة عددية معرفة على المجال <span class="math-inline">]0,+&infin;[</span> وتتضمن وسيطا حقيقيا <span class="math-inline">m</span>.
            <ol>
              <li>بيّن العلاقة المطلوبة بين مشتقة <span class="math-inline">h<sub>m</sub></span> والدالة <span class="math-inline">f</span>.</li>
              <li>باستعمال المنحنى <span class="math-inline">(C<sub>f</sub>)</span>، ناقش بيانيا وحسب قيم الوسيط الحقيقي <span class="math-inline">m</span> عدد حلول المعادلة <span class="math-inline">h&prime;<sub>m</sub>(x)=0</span>.</li>
            </ol>
          </li>
        </ol>
      </section>
    `
  },
  {
    id: "math-2013-topic-2-ln",
    title: "موضوع بكالوريا الجزائر 2013 - رياضيات الموضوع الثاني",
    branch: "math",
    year: "2013",
    date: "2013",
    source: "user-image",
    file: "",
    tags: ["ln", "study-functions", "tangents"],
    summary: "التمرين الرابع من بكالوريا 2013 لشعبة رياضيات، الموضوع الثاني: دالة مساعدة لوغارتمية على ]-1;3]، دراسة دالة معرفة بالتجزئة، مماسات، وضعية نسبية، ومناقشة بيانية.",
    statement: `
      <section class="statement-block">
        <h3>بكالوريا الجزائر 2013 - شعبة رياضيات - الموضوع الثاني</h3>
        <p><strong>التمرين الرابع: (08 نقاط)</strong></p>

        <h4>I - الدالة المساعدة <span class="math-inline">g</span></h4>
        <p>
          <span class="math-inline">g</span> هي الدالة المعرفة على المجال
          <span class="math-inline">]-1;3]</span> كما يلي:
          <span class="math-line">g(x)=2ln(x+1)-<span class="frac"><span class="num">x</span><span class="den">x+1</span></span></span>
        </p>
        <ol>
          <li>ادرس تغيرات الدالة <span class="math-inline">g</span>، ثم شكّل جدول تغيراتها.</li>
          <li>
            بيّن أن المعادلة <span class="math-inline">g(x)=0</span> تقبل حلين أحدهما معدوم والآخر
            <span class="math-inline">&alpha;</span> يحقق:
            <span class="math-line">-0.8&lt;&alpha;&lt;-0.7</span>.
          </li>
          <li>عيّن، حسب قيم <span class="math-inline">x</span>، إشارة <span class="math-inline">g(x)</span>.</li>
          <li>
            <span class="math-inline">h</span> هي الدالة المعرفة على المجال
            <span class="math-inline">]-1;3]</span> بـ:
            <span class="math-line">h(x)=[g(x)]<sup>2</sup></span>.
            <ol>
              <li>
                احسب <span class="math-inline">h&prime;(x)</span> بدلالة كل من
                <span class="math-inline">g(x)</span> و <span class="math-inline">g&prime;(x)</span>.
              </li>
              <li>
                عيّن إشارة <span class="math-inline">h&prime;(x)</span> ثم شكّل جدول تغيرات الدالة
                <span class="math-inline">h</span>.
              </li>
            </ol>
          </li>
        </ol>

        <h4>II - دراسة الدالة <span class="math-inline">f</span></h4>
        <p>
          <span class="math-inline">f</span> هي الدالة المعرفة على المجال
          <span class="math-inline">]-1;3]</span> كما يلي:
          <span class="math-line">f(x)=<span class="frac"><span class="num">x<sup>2</sup></span><span class="den">ln(x+1)</span></span> ; x &ne; 0</span>
          و
          <span class="math-line">f(0)=0</span>.
        </p>
        <p>
          <span class="math-inline">(C<sub>f</sub>)</span> تمثيلها البياني في المستوى المنسوب إلى المعلم المتعامد والمتجانس
          <span class="math-inline">(O; i, j)</span>.
        </p>
        <ol>
          <li>
            بيّن أن الدالة <span class="math-inline">f</span> تقبل الاشتقاق عند الصفر، ثم اكتب معادلة لـ
            <span class="math-inline">(T)</span> مماس
            <span class="math-inline">(C<sub>f</sub>)</span> في النقطة ذات الفاصلة
            <span class="math-inline">0</span>.
          </li>
          <li>
            <strong>أ)</strong> بيّن أنه من أجل كل
            <span class="math-inline">x</span> من
            <span class="math-inline">]-1;0[ &cup; ]0;3]</span>:
            <span class="math-line">f&prime;(x)=<span class="frac"><span class="num">xg(x)</span><span class="den">[ln(x+1)]<sup>2</sup></span></span></span>
            ثم استنتج اتجاه تغير الدالة <span class="math-inline">f</span>.
          </li>
          <li>
            <strong>ب)</strong> بيّن أن:
            <span class="math-line">f(&alpha;)=2&alpha;(&alpha;+1)</span>
            ثم عيّن حصرا لـ <span class="math-inline">f(&alpha;)</span>.
          </li>
          <li>
            <strong>ج)</strong> احسب <span class="math-inline">f(3)</span> و
            <span class="math-line"><span class="lim"><strong>lim</strong><small>x&rarr;-1<sup>+</sup></small></span>f(x)</span>
            ثم شكّل جدول تغيرات الدالة <span class="math-inline">f</span>.
          </li>
          <li>
            <strong>أ)</strong> بيّن أنه من أجل كل
            <span class="math-inline">x</span> من المجال
            <span class="math-inline">]-1;3]</span> فإن:
            <span class="math-line">x-ln(x+1)&ge;0</span>.
          </li>
          <li>
            <strong>ب)</strong> ادرس وضعية
            <span class="math-inline">(C<sub>f</sub>)</span> بالنسبة إلى المماس
            <span class="math-inline">(T)</span>.
          </li>
          <li>
            عيّن معادلة المستقيم <span class="math-inline">(T&prime;)</span> الموازي للمماس
            <span class="math-inline">(T)</span> والذي يتقاطع مع
            <span class="math-inline">(C<sub>f</sub>)</span> في النقطة ذات الفاصلة
            <span class="math-inline">3</span>.
          </li>
          <li>
            ارسم <span class="math-inline">(T)</span> و
            <span class="math-inline">(T&prime;)</span> و
            <span class="math-inline">(C<sub>f</sub>)</span>.
          </li>
          <li>
            ناقش بيانيا، حسب قيم الوسيط الحقيقي
            <span class="math-inline">m</span>، عدد حلول المعادلة:
            <span class="math-line">f(x)=x+m</span>.
          </li>
        </ol>
      </section>
    `,
    solution: `
      <section class="solution-block">
        <h3>الحل التفصيلي</h3>

        <h4>I - دراسة الدالة المساعدة g و h</h4>
        <ol>
          <li>
            الدالة <span class="math-inline">g(x) = 2 ln(x+1) - <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>x</span><span style="display:block;border-top:1px solid #fff;">x+1</span></span></span> مشتقة على <span class="math-inline">]-1, 3]</span> و:
            <span class="math-line">g′(x) = <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>2</span><span style="display:block;border-top:1px solid #fff;">x+1</span></span> - <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>1</span><span style="display:block;border-top:1px solid #fff;">(x+1)²</span></span> = <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>2x + 1</span><span style="display:block;border-top:1px solid #fff;">(x+1)²</span></span></span>.
            بما أنّ <span class="math-inline">(x+1)² &gt; 0</span>، فإنّ إشارة <span class="math-inline">g′(x)</span> هي إشارة <span class="math-inline">(2x + 1)</span>.
            إذن <span class="math-inline">g</span> متناقصة تماما على <span class="math-inline">]-1, -1/2]</span> ومتزايدة تماما على <span class="math-inline">[-1/2, 3]</span>.
            <br>القيمة الصغرى: <span class="math-inline">g(-1/2) = 2 ln(1/2) + 1 = 1 - 2 ln 2 ≃ -0,39</span>.
            <br>كذلك <span class="math-inline">g(0) = 0</span> و <span class="math-inline">g(3) = 2 ln 4 - 3/4 = 4 ln 2 - 0,75 ≃ 2,02</span>.
            <table class="variation-table" aria-label="جدول تغيرات الدالة g">
              <tr>
                <th>x</th>
                <td class="interval">-1</td>
                <td class="interval">-1/2</td>
                <td class="interval">3</td>
              </tr>
              <tr>
                <th>g′(x)</th>
                <td>-</td>
                <td>0</td>
                <td>+</td>
              </tr>
              <tr>
                <th>g(x)</th>
                <td>-∞</td>
                <td>↘ 1 - 2ln2 ↗</td>
                <td>4ln2 - 3/4</td>
              </tr>
            </table>
          </li>
          <li>
            بما أنّ <span class="math-inline">g(0) = 0</span>، فإنّ <span class="math-inline">0</span> حل.
            <br>كذلك <span class="math-inline">g(-1/2) ≃ -0,39 &lt; 0</span> و <span class="math-inline"><span class="lim"><strong>lim</strong><small>x→-1<sup>+</sup></small></span> g(x) = +∞</span>، وبما أنّ <span class="math-inline">g</span> متناقصة تماما على <span class="math-inline">]-1, -1/2]</span>، فإنّ المعادلة تقبل حلا وحيدا <span class="math-inline">α ∈ ]-1, -1/2[</span>.
            <br>نحسب:
            <span class="math-line">g(-0,8) ≃ 0,78 &gt; 0</span> و <span class="math-line">g(-0,7) ≃ -0,07 &lt; 0</span>،
            إذن: <span class="math-line">-0,8 &lt; α &lt; -0,7</span>.
          </li>
          <li>
            من جدول التغيرات وكون <span class="math-inline">g(α) = g(0) = 0</span>:
            <ul>
              <li><span class="math-inline">g(x) &gt; 0</span> على <span class="math-inline">]-1, α[ ∪ ]0, 3]</span></li>
              <li><span class="math-inline">g(x) &lt; 0</span> على <span class="math-inline">]α, 0[</span></li>
            </ul>
          </li>
          <li>
            <ol>
              <li>
                <span class="math-inline">h(x) = [g(x)]²</span>، إذن:
                <span class="math-line">h′(x) = 2 g(x) g′(x)</span>.
              </li>
              <li>
                إشارة <span class="math-inline">h′(x)</span> هي إشارة <span class="math-inline">g(x) g′(x)</span>.
                <ul>
                  <li>على <span class="math-inline">]-1, α[</span>: <span class="math-inline">g &gt; 0</span> و <span class="math-inline">g′ &lt; 0</span>، إذن <span class="math-inline">h′ &lt; 0</span>.</li>
                  <li>على <span class="math-inline">]α, -1/2[</span>: <span class="math-inline">g &lt; 0</span> و <span class="math-inline">g′ &lt; 0</span>، إذن <span class="math-inline">h′ &gt; 0</span>.</li>
                  <li>على <span class="math-inline">]-1/2, 0[</span>: <span class="math-inline">g &lt; 0</span> و <span class="math-inline">g′ &gt; 0</span>، إذن <span class="math-inline">h′ &lt; 0</span>.</li>
                  <li>على <span class="math-inline">]0, 3]</span>: <span class="math-inline">g &gt; 0</span> و <span class="math-inline">g′ &gt; 0</span>، إذن <span class="math-inline">h′ &gt; 0</span>.</li>
                </ul>
                <table class="variation-table" aria-label="جدول تغيرات الدالة h">
                  <tr>
                    <th>x</th>
                    <td class="interval">-1</td>
                    <td class="interval">α</td>
                    <td class="interval">-1/2</td>
                    <td class="interval">0</td>
                    <td class="interval">3</td>
                  </tr>
                  <tr>
                    <th>h′(x)</th>
                    <td>-</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>+</td>
                  </tr>
                  <tr>
                    <th>h(x)</th>
                    <td>+∞</td>
                    <td>↘ 0 ↗</td>
                    <td>↗ (1-2ln2)² ↘</td>
                    <td>↘ 0 ↗</td>
                    <td>(4ln2-3/4)²</td>
                  </tr>
                </table>
              </li>
            </ol>
          </li>
        </ol>

        <h4>II - دراسة الدالة f</h4>
        <ol>
          <li>
            نحسب:
            <span class="math-line"><span class="lim"><strong>lim</strong><small>x→0</small></span> <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>f(x) - f(0)</span><span style="display:block;border-top:1px solid #fff;">x - 0</span></span> = <span class="lim"><strong>lim</strong><small>x→0</small></span> <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>x</span><span style="display:block;border-top:1px solid #fff;">ln(x+1)</span></span> = 1</span>
            (لأنّ <span class="math-inline">ln(x+1) ~ x</span> عند <span class="math-inline">0</span>).
            إذن <span class="math-inline">f</span> مشتقة عند <span class="math-inline">0</span> و <span class="math-inline">f′(0) = 1</span>.
            <br>معادلة المماس <span class="math-inline">(T)</span>: <span class="math-inline">y = x</span>.
          </li>
          <li>
            <ol type="أ">
              <li>
                لـ <span class="math-inline">x ≠ 0</span>، بالاشتقاق:
                <span class="math-line">f′(x) = <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>2x ln(x+1) - <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>x²</span><span style="display:block;border-top:1px solid #fff;">x+1</span></span></span><span style="display:block;border-top:1px solid #fff;">[ln(x+1)]²</span></span> = <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>x[2(x+1)ln(x+1) - x]</span><span style="display:block;border-top:1px solid #fff;">(x+1)[ln(x+1)]²</span></span></span>.
                وبما أنّ <span class="math-inline">g(x) = <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>2(x+1)ln(x+1) - x</span><span style="display:block;border-top:1px solid #fff;">x+1</span></span></span>، فإنّ:
                <span class="math-line">f′(x) = <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>x g(x)</span><span style="display:block;border-top:1px solid #fff;">[ln(x+1)]²</span></span></span>.
                <br>بما أنّ <span class="math-inline">[ln(x+1)]² &gt; 0</span> لـ <span class="math-inline">x ≠ 0</span>، فإنّ إشارة <span class="math-inline">f′(x)</span> هي إشارة <span class="math-inline">x g(x)</span>.
                <ul>
                  <li>على <span class="math-inline">]-1, α[</span>: <span class="math-inline">x &lt; 0</span> و <span class="math-inline">g &gt; 0</span>، إذن <span class="math-inline">f′ &lt; 0</span>.</li>
                  <li>على <span class="math-inline">]α, 0[</span>: <span class="math-inline">x &lt; 0</span> و <span class="math-inline">g &lt; 0</span>، إذن <span class="math-inline">f′ &gt; 0</span>.</li>
                  <li>على <span class="math-inline">]0, 3]</span>: <span class="math-inline">x &gt; 0</span> و <span class="math-inline">g &gt; 0</span>، إذن <span class="math-inline">f′ &gt; 0</span>.</li>
                </ul>
                إذن <span class="math-inline">f</span> متناقصة تماما على <span class="math-inline">]-1, α]</span> ومتزايدة تماما على <span class="math-inline">[α, 3]</span>.
              </li>
              <li>
                بما أنّ <span class="math-inline">g(α) = 0</span>، فإنّ <span class="math-inline">2 ln(α+1) = <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>α</span><span style="display:block;border-top:1px solid #fff;">α+1</span></span></span>، أي <span class="math-inline">ln(α+1) = <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>α</span><span style="display:block;border-top:1px solid #fff;">2(α+1)</span></span></span>.
                <br>وبالتالي:
                <span class="math-line">f(α) = <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>α²</span><span style="display:block;border-top:1px solid #fff;">ln(α+1)</span></span> = <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>α² · 2(α+1)</span><span style="display:block;border-top:1px solid #fff;">α</span></span> = 2α(α+1)</span>.
                <br>وبما أنّ <span class="math-inline">-0,8 &lt; α &lt; -0,7</span>، فإنّ:
                <span class="math-line">-0,42 &lt; f(α) &lt; -0,32</span>.
              </li>
              <li>
                <span class="math-line">f(3) = <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>9</span><span style="display:block;border-top:1px solid #fff;">ln 4</span></span> = <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>9</span><span style="display:block;border-top:1px solid #fff;">2 ln 2</span></span> ≃ 6,49</span>.
                <br>عند <span class="math-inline">x → -1<sup>+</sup></span>:
                <span class="math-line"><span class="lim"><strong>lim</strong><small>x→-1<sup>+</sup></small></span> f(x) = <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>1</span><span style="display:block;border-top:1px solid #fff;">-∞</span></span> = 0</span>.
                <table class="variation-table" aria-label="جدول تغيرات الدالة f">
                  <tr>
                    <th>x</th>
                    <td class="interval">-1</td>
                    <td class="interval">α</td>
                    <td class="interval">3</td>
                  </tr>
                  <tr>
                    <th>f′(x)</th>
                    <td>-</td>
                    <td>0</td>
                    <td>+</td>
                  </tr>
                  <tr>
                    <th>f(x)</th>
                    <td>0</td>
                    <td>↘ 2α(α+1) ↗</td>
                    <td>9/(2ln2)</td>
                  </tr>
                </table>
              </li>
            </ol>
          </li>
          <li>
            <ol type="أ">
              <li>
                نضع <span class="math-inline">k(x) = x - ln(x+1)</span>. الدالة <span class="math-inline">k</span> مشتقة على <span class="math-inline">]-1, +∞[</span> و:
                <span class="math-line">k′(x) = 1 - <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>1</span><span style="display:block;border-top:1px solid #fff;">x+1</span></span> = <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>x</span><span style="display:block;border-top:1px solid #fff;">x+1</span></span></span>.
                إذن <span class="math-inline">k</span> متناقصة على <span class="math-inline">]-1, 0]</span> ومتزايدة على <span class="math-inline">[0, +∞[</span>.
                <br>قيمتها الصغرى هي <span class="math-inline">k(0) = 0</span>، إذن <span class="math-inline">k(x) ≥ 0</span> لكلّ <span class="math-inline">x ∈ ]-1, +∞[</span>.
              </li>
              <li>
                نحسب:
                <span class="math-line">f(x) - x = <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>x²</span><span style="display:block;border-top:1px solid #fff;">ln(x+1)</span></span> - x = <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>x[x - ln(x+1)]</span><span style="display:block;border-top:1px solid #fff;">ln(x+1)</span></span></span>.
                <ul>
                  <li>إذا <span class="math-inline">x ∈ ]-1, 0[</span>: <span class="math-inline">x &lt; 0</span>، <span class="math-inline">x - ln(x+1) &gt; 0</span>، و <span class="math-inline">ln(x+1) &lt; 0</span>، إذن <span class="math-inline">f(x) - x &gt; 0</span>.</li>
                  <li>إذا <span class="math-inline">x ∈ ]0, 3]</span>: <span class="math-inline">x &gt; 0</span>، <span class="math-inline">x - ln(x+1) &gt; 0</span>، و <span class="math-inline">ln(x+1) &gt; 0</span>، إذن <span class="math-inline">f(x) - x &gt; 0</span>.</li>
                </ul>
                وبالتالي <span class="math-inline">(C<sub>f</sub>)</span> أعلى <span class="math-inline">(T)</span> في كلّ المجال، وتلمسه عند <span class="math-inline">x = 0</span>.
              </li>
            </ol>
          </li>
          <li>
            المستقيم <span class="math-inline">(T′)</span> موازٍ للمماس <span class="math-inline">(T)</span>، إذن معامل توجيهه <span class="math-inline">1</span>.
            <br>معادلته: <span class="math-inline">y = x + b</span>.
            يمرّ بالنقطة <span class="math-inline">(3, f(3))</span>، إذن:
            <span class="math-line">f(3) = 3 + b ⇒ b = <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>9</span><span style="display:block;border-top:1px solid #fff;">2 ln 2</span></span> - 3</span>.
            <br>إذن: <span class="math-inline">(T′): y = x + <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>9</span><span style="display:block;border-top:1px solid #fff;">2 ln 2</span></span> - 3</span>.
          </li>
          <li>
            نرسم <span class="math-inline">(T): y = x</span> و <span class="math-inline">(T′)</span> والمنحنى <span class="math-inline">(C<sub>f</sub>)</span> باستعمال النقاط والجدول.
          </li>
          <li>
            المعادلة <span class="math-inline">f(x) = x + m</span> تعني عدد نقاط تقاطع المنحنى <span class="math-inline">(C<sub>f</sub>)</span> بالمستقيم <span class="math-inline">(D<sub>m</sub>): y = x + m</span> الموازي للمماس <span class="math-inline">(T)</span>.
            <br>نضع <span class="math-inline">φ(x) = f(x) - x</span>. لدينا <span class="math-inline">φ(x) &gt; 0</span> لـ <span class="math-inline">x ≠ 0</span>، و <span class="math-inline">φ(x) → 0</span> عند <span class="math-inline">x → 0</span> و <span class="math-inline">x → -1<sup>+</sup></span>، و <span class="math-inline">φ(3) = f(3) - 3 ≃ 3,49</span>.
            <ul>
              <li>إذا <span class="math-inline">m &lt; 0</span>: لا يوجد حل.</li>
              <li>إذا <span class="math-inline">m = 0</span>: حل واحد <span class="math-inline">x = 0</span> (المماس).</li>
              <li>إذا <span class="math-inline">0 &lt; m &lt; 1</span>: حلان (واحد في <span class="math-inline">]-1, 0[</span> وآخر في <span class="math-inline">]0, 3[</span>).</li>
              <li>إذا <span class="math-inline">1 ≤ m ≤ f(3) - 3</span>: حل واحد في <span class="math-inline">]0, 3]</span>.</li>
              <li>إذا <span class="math-inline">m &gt; f(3) - 3</span>: لا يوجد حل.</li>
            </ul>
          </li>
        </ol>
      </section>
    `
  },
  {
    id: "math-2013-topic-1-exp-ln",
    title: "موضوع بكالوريا الجزائر 2013 - رياضيات الموضوع الأول",
    branch: "math",
    year: "2013",
    date: "2013",
    source: "user-image",
    file: "",
    tags: ["exp", "ln", "study-functions", "area"],
    summary: "التمرين الرابع من بكالوريا 2013 لشعبة رياضيات، الموضوع الأول: دوال مساعدة أسية ولوغارتمية، متراجحات، دراسة دالة f(x)=e^x-ex+lnx/x، ورسم ومساحة.",
    statement: `
      <section class="statement-block">
        <h3>بكالوريا الجزائر 2013 - شعبة رياضيات - الموضوع الأول</h3>
        <p><strong>التمرين الرابع</strong></p>

        <h4>I - دوال مساعدة</h4>
        <ol>
          <li>
            <span class="math-inline">u</span> الدالة المعرفة على المجال
            <span class="math-inline">]0,+&infin;[</span> بـ:
            <span class="math-line">u(x)=e<sup>x</sup>-3x+4-e</span>
            <ol>
              <li>ادرس اتجاه تغير الدالة <span class="math-inline">u</span>.</li>
              <li>
                بيّن أنه، من أجل كل عدد حقيقي <span class="math-inline">x</span> من المجال
                <span class="math-inline">]0,+&infin;[</span>:
                <span class="math-line">e<sup>x</sup>-e&gt;3x-4</span>.
              </li>
            </ol>
          </li>
          <li>
            <span class="math-inline">v</span> الدالة المعرفة على المجال
            <span class="math-inline">]0,+&infin;[</span> بـ:
            <span class="math-line">v(x)=-3x<sup>3</sup>+4x<sup>2</sup>-1+lnx</span>
            <ol>
              <li>
                بيّن أن <span class="math-inline">v&prime;(1)=0</span>
                حيث يرمز <span class="math-inline">v&prime;</span> إلى الدالة المشتقة للدالة
                <span class="math-inline">v</span>.
              </li>
              <li>
                أثبت أنه، من أجل كل عدد حقيقي <span class="math-inline">x</span> من المجال
                <span class="math-inline">]0,+&infin;[</span>:
                <span class="math-line">v(x)&le;0</span>.
              </li>
              <li>
                استنتج أنه، من أجل كل عدد حقيقي <span class="math-inline">x</span> من المجال
                <span class="math-inline">]0,+&infin;[</span>:
                <span class="math-line"><span class="frac"><span class="num">-1+lnx</span><span class="den">x<sup>2</sup></span></span>&le;3x-4</span>.
              </li>
            </ol>
          </li>
          <li>
            أثبت أنه، من أجل كل عدد حقيقي <span class="math-inline">x</span> من المجال
            <span class="math-inline">]0,+&infin;[</span>:
            <span class="math-line">e<sup>x</sup>-e+<span class="frac"><span class="num">1-lnx</span><span class="den">x<sup>2</sup></span></span>&gt;0</span>.
          </li>
        </ol>

        <h4>II - دراسة الدالة <span class="math-inline">f</span></h4>
        <p>
          <span class="math-inline">f</span> الدالة المعرفة على المجال
          <span class="math-inline">]0,+&infin;[</span> بـ:
          <span class="math-line">f(x)=e<sup>x</sup>-ex+<span class="frac"><span class="num">lnx</span><span class="den">x</span></span></span>
        </p>
        <p>
          <span class="math-inline">(C<sub>f</sub>)</span> المنحنى الممثل للدالة
          <span class="math-inline">f</span> في المستوى المنسوب إلى المعلم المتعامد والمتجانس
          <span class="math-inline">(O; i, j)</span>.
        </p>
        <ol>
          <li>
            احسب:
            <span class="math-line"><span class="lim"><strong>lim</strong><small>x&rarr;0<sup>+</sup></small></span>f(x)</span>
            و
            <span class="math-line"><span class="lim"><strong>lim</strong><small>x&rarr;+&infin;</small></span>f(x)</span>.
          </li>
          <li>
            بيّن أن الدالة <span class="math-inline">f</span> متزايدة تماما على المجال
            <span class="math-inline">]0,+&infin;[</span>، ثم شكّل جدول تغيراتها.
          </li>
          <li>
            احسب <span class="math-inline">f(1)</span>، ثم مثّل المنحنى
            <span class="math-inline">(C<sub>f</sub>)</span> على المجال
            <span class="math-inline">]0;5/2]</span>.
            <br>
            نأخذ:
            <span class="math-line">f(5/2)&asymp;5.75 ، f(1.64)&asymp;1 ، f(2)&asymp;2.3</span>.
          </li>
          <li>
            احسب مساحة الحيز المستوي المحدد بالمنحنى
            <span class="math-inline">(C<sub>f</sub>)</span>
            وحامل محور الفواصل والمستقيمين اللذين معادلتاهما:
            <span class="math-line">x=1/2 و x=2</span>.
          </li>
        </ol>
      </section>
    `
  },
  {
    id: "math-2012-topic-2-ln",
    title: "موضوع بكالوريا الجزائر 2012 - رياضيات الموضوع الثاني",
    branch: "math",
    year: "2012",
    date: "2012",
    source: "user-image",
    file: "",
    tags: ["ln", "study-functions", "tangents"],
    summary: "التمرين الرابع من بكالوريا 2012 لشعبة رياضيات، الموضوع الثاني: دالة مساعدة لوغارتمية على ]-1;3]، دراسة دالة معرفة بالتجزئة، مماسات، وضعية نسبية، ومناقشة بيانية.",
    statement: `
      <section class="statement-block">
        <h3>بكالوريا الجزائر 2012 - شعبة رياضيات - الموضوع الثاني</h3>
        <p><strong>التمرين الرابع: (08 نقاط)</strong></p>

        <h4>I - الدالة المساعدة <span class="math-inline">g</span></h4>
        <p>
          <span class="math-inline">g</span> هي الدالة المعرفة على المجال
          <span class="math-inline">]-1;3]</span> كما يلي:
          <span class="math-line">g(x)=2ln(x+1)-<span class="frac"><span class="num">x</span><span class="den">x+1</span></span></span>
        </p>
        <ol>
          <li>ادرس تغيرات الدالة <span class="math-inline">g</span>، ثم شكّل جدول تغيراتها.</li>
          <li>
            بيّن أن المعادلة <span class="math-inline">g(x)=0</span> تقبل حلين أحدهما معدوم والآخر
            <span class="math-inline">&alpha;</span> يحقق:
            <span class="math-line">-0.8&lt;&alpha;&lt;-0.7</span>.
          </li>
          <li>عيّن، حسب قيم <span class="math-inline">x</span>، إشارة <span class="math-inline">g(x)</span>.</li>
          <li>
            <span class="math-inline">h</span> هي الدالة المعرفة على المجال
            <span class="math-inline">]-1;3]</span> بـ:
            <span class="math-line">h(x)=[g(x)]<sup>2</sup></span>.
            <ol>
              <li>
                احسب <span class="math-inline">h&prime;(x)</span> بدلالة كل من
                <span class="math-inline">g(x)</span> و <span class="math-inline">g&prime;(x)</span>.
              </li>
              <li>
                عيّن إشارة <span class="math-inline">h&prime;(x)</span> ثم شكّل جدول تغيرات الدالة
                <span class="math-inline">h</span>.
              </li>
            </ol>
          </li>
        </ol>

        <h4>II - دراسة الدالة <span class="math-inline">f</span></h4>
        <p>
          <span class="math-inline">f</span> هي الدالة المعرفة على المجال
          <span class="math-inline">]-1;3]</span> كما يلي:
          <span class="math-line">f(x)=<span class="frac"><span class="num">x<sup>2</sup></span><span class="den">ln(x+1)</span></span> ; x &ne; 0</span>
          و
          <span class="math-line">f(0)=0</span>.
        </p>
        <p>
          <span class="math-inline">(C<sub>f</sub>)</span> تمثيلها البياني في المستوى المنسوب إلى المعلم المتعامد والمتجانس
          <span class="math-inline">(O; i, j)</span>.
        </p>
        <ol>
          <li>
            بيّن أن الدالة <span class="math-inline">f</span> تقبل الاشتقاق عند الصفر، ثم اكتب معادلة لـ
            <span class="math-inline">(T)</span> مماس
            <span class="math-inline">(C<sub>f</sub>)</span> في النقطة ذات الفاصلة
            <span class="math-inline">0</span>.
          </li>
          <li>
            <strong>أ)</strong> بيّن أنه من أجل كل
            <span class="math-inline">x</span> من
            <span class="math-inline">]-1;0[ &cup; ]0;3]</span>:
            <span class="math-line">f&prime;(x)=<span class="frac"><span class="num">xg(x)</span><span class="den">[ln(x+1)]<sup>2</sup></span></span></span>
            ثم استنتج اتجاه تغير الدالة <span class="math-inline">f</span>.
          </li>
          <li>
            <strong>ب)</strong> بيّن أن:
            <span class="math-line">f(&alpha;)=2&alpha;(\alpha+1)</span>
            ثم عيّن حصرا لـ <span class="math-inline">f(&alpha;)</span>.
          </li>
          <li>
            <strong>ج)</strong> احسب <span class="math-inline">f(3)</span> و
            <span class="math-line"><span class="lim"><strong>lim</strong><small>x&rarr;-1<sup>+</sup></small></span>f(x)</span>
            ثم شكّل جدول تغيرات الدالة <span class="math-inline">f</span>.
          </li>
          <li>
            <strong>أ)</strong> بيّن أنه من أجل كل
            <span class="math-inline">x</span> من المجال
            <span class="math-inline">]-1;3]</span> فإن:
            <span class="math-line">x-ln(x+1)&ge;0</span>.
          </li>
          <li>
            <strong>ب)</strong> ادرس وضعية
            <span class="math-inline">(C<sub>f</sub>)</span> بالنسبة إلى المماس
            <span class="math-inline">(T)</span>.
          </li>
          <li>
            عيّن معادلة المستقيم <span class="math-inline">(T&prime;)</span> الموازي للمماس
            <span class="math-inline">(T)</span> والذي يتقاطع مع
            <span class="math-inline">(C<sub>f</sub>)</span> في النقطة ذات الفاصلة
            <span class="math-inline">3</span>.
          </li>
          <li>
            ارسم <span class="math-inline">(T)</span> و
            <span class="math-inline">(T&prime;)</span> و
            <span class="math-inline">(C<sub>f</sub>)</span>.
          </li>
          <li>
            ناقش بيانيا، حسب قيم الوسيط الحقيقي
            <span class="math-inline">m</span>، عدد حلول المعادلة:
            <span class="math-line">f(x)=x+m</span>.
          </li>
        </ol>
      </section>
    `
  },
  {
    id: "math-2012-topic-1-exp",
    title: "موضوع بكالوريا الجزائر 2012 - رياضيات الموضوع الأول",
    branch: "math",
    year: "2012",
    date: "2012",
    source: "user-image",
    file: "",
    tags: ["exp", "study-functions", "asymptotes", "sequences"],
    summary: "التمرين الرابع من بكالوريا 2012 لشعبة رياضيات، الموضوع الأول: دالة مساعدة أسية، دراسة دالة كسرية تتضمن e^x، مقاربات، مناقشة بيانية، ومتتالية راجعة.",
    statement: `
      <section class="statement-block">
        <h3>بكالوريا الجزائر 2012 - شعبة رياضيات - الموضوع الأول</h3>
        <p><strong>التمرين الرابع: (08 نقاط)</strong></p>

        <h4>I - الدالة المساعدة</h4>
        <p>
          <span class="math-inline">g</span> هي الدالة المعرفة على
          <span class="math-inline">R</span> كما يلي:
          <span class="math-line">g(x)=2-xe<sup>x</sup></span>
        </p>
        <ol>
          <li>ادرس تغيرات الدالة <span class="math-inline">g</span>، ثم شكّل جدول تغيراتها.</li>
          <li>
            بيّن أن المعادلة <span class="math-inline">g(x)=0</span> تقبل حلا وحيدا
            <span class="math-inline">&alpha;</span> على
            <span class="math-inline">R</span>، ثم تحقق أن:
            <span class="math-line">0.8&lt;&alpha;&lt;0.9</span>.
          </li>
          <li>عيّن، حسب قيم <span class="math-inline">x</span>، إشارة <span class="math-inline">g(x)</span>.</li>
        </ol>

        <h4>II - دراسة الدالة <span class="math-inline">f</span></h4>
        <p>
          <span class="math-inline">f</span> هي الدالة المعرفة على
          <span class="math-inline">R</span> كما يلي:
          <span class="math-line">f(x)=<span class="frac"><span class="num">2x+2</span><span class="den">e<sup>x</sup>+2</span></span></span>
        </p>
        <p>
          <span class="math-inline">(C<sub>f</sub>)</span> تمثيلها البياني في المستوى المنسوب إلى المعلم المتعامد والمتجانس
          <span class="math-inline">(O; i, j)</span>، وحدة الطول
          <span class="math-inline">2cm</span>.
        </p>
        <ol>
          <li>
            بيّن أن:
            <span class="math-line"><span class="lim"><strong>lim</strong><small>x&rarr;+&infin;</small></span>f(x)=0</span>
            ثم فسّر النتيجة هندسيا.
          </li>
          <li>
            <strong>أ)</strong> احسب:
            <span class="math-line"><span class="lim"><strong>lim</strong><small>x&rarr;-&infin;</small></span>f(x)</span>.
          </li>
          <li>
            <strong>ب)</strong> بيّن أن المستقيم
            <span class="math-inline">(&Delta;&prime;)</span> ذا المعادلة
            <span class="math-inline">y=x+1</span>
            مستقيم مقارب للمنحنى
            <span class="math-inline">(C<sub>f</sub>)</span>.
          </li>
          <li>
            ادرس وضعية <span class="math-inline">(C<sub>f</sub>)</span> بالنسبة إلى كل من
            <span class="math-inline">(&Delta;&prime;)</span> و
            <span class="math-inline">(&Delta;)</span>، حيث
            <span class="math-inline">(&Delta;)</span> هو المستقيم ذو المعادلة
            <span class="math-inline">y=x</span>.
          </li>
          <li>
            <strong>أ)</strong> بيّن أنه من أجل كل عدد حقيقي <span class="math-inline">x</span>:
            <span class="math-line">f&prime;(x)=<span class="frac"><span class="num">2g(x)</span><span class="den">(e<sup>x</sup>+2)<sup>2</sup></span></span></span>
            ثم استنتج اتجاه تغير الدالة <span class="math-inline">f</span>.
          </li>
          <li>
            <strong>ب)</strong> بيّن أن:
            <span class="math-line">f(&alpha;)=&alpha;</span>
            ثم شكّل جدول تغيرات الدالة <span class="math-inline">f</span>.
          </li>
          <li>
            ارسم <span class="math-inline">(&Delta;)</span> و
            <span class="math-inline">(&Delta;&prime;)</span> و
            <span class="math-inline">(C<sub>f</sub>)</span>.
          </li>
          <li>
            ناقش، بيانيا وحسب قيم الوسيط الحقيقي
            <span class="math-inline">m</span>، عدد حلول المعادلة:
            <span class="math-line">f(x)=f(m)</span>.
          </li>
        </ol>

        <h4>III - المتتالية</h4>
        <p>
          <span class="math-inline">(U<sub>n</sub>)</span> هي المتتالية العددية المعرفة على
          <span class="math-inline">N</span> كما يلي:
          <span class="math-line">U<sub>0</sub>=0</span>
          ومن أجل كل عدد طبيعي <span class="math-inline">n</span>:
          <span class="math-line">U<sub>n+1</sub>=f(U<sub>n</sub>)</span>
        </p>
        <ol>
          <li>
            برهن بالتراجع أنه من أجل كل عدد طبيعي <span class="math-inline">n</span>:
            <span class="math-line">0&le;U<sub>n</sub>&lt;&alpha;</span>.
          </li>
          <li>
            باستعمال <span class="math-inline">(&Delta;)</span> و
            <span class="math-inline">(C<sub>f</sub>)</span> مثّل على محور الفواصل الحدود:
            <span class="math-inline">U<sub>0</sub></span> و
            <span class="math-inline">U<sub>1</sub></span> و
            <span class="math-inline">U<sub>2</sub></span>، ثم خمّن اتجاه تغير
            <span class="math-inline">(U<sub>n</sub>)</span>.
          </li>
          <li>
            برهن أن المتتالية <span class="math-inline">(U<sub>n</sub>)</span> متقاربة، ثم احسب نهايتها.
          </li>
        </ol>
      </section>
    `
  },
  {
    id: "math-2011-topic-2-ln",
    title: "موضوع بكالوريا الجزائر 2011 - رياضيات الموضوع الثاني",
    branch: "math",
    year: "2011",
    date: "2011",
    source: "user-image",
    file: "",
    tags: ["ln", "study-functions"],
    summary: "التمرين الرابع من بكالوريا 2011 لشعبة رياضيات، الموضوع الثاني: دراسة دالة لوغارتمية، دالة مساعدة، وضعية نسبية مع منحنى ln، تكامل بالتجزئة، ومساحة.",
    statement: `
      <section class="statement-block">
        <h3>بكالوريا الجزائر 2011 - شعبة رياضيات - الموضوع الثاني</h3>
        <p><strong>التمرين الرابع: (07 نقاط)</strong></p>

        <h4>1 - الدالة المساعدة</h4>
        <p>
          <span class="math-inline">g</span> الدالة العددية المعرفة على المجال
          <span class="math-inline">]0,+&infin;[</span> بـ:
          <span class="math-line">g(x)=x<sup>2</sup>+ln(x<sup>2</sup>)-1</span>
        </p>
        <ol>
          <li>
            ادرس اتجاه تغير الدالة <span class="math-inline">g</span>، ثم شكّل جدول تغيراتها على المجال
            <span class="math-inline">]0,+&infin;[</span>.
          </li>
          <li>
            احسب <span class="math-inline">g(1)</span> ثم استنتج إشارة
            <span class="math-inline">g(x)</span> في المجال
            <span class="math-inline">]0,+&infin;[</span>.
          </li>
        </ol>

        <h4>2 - دراسة الدالة <span class="math-inline">f</span></h4>
        <p>
          <span class="math-inline">f</span> الدالة العددية المعرفة على المجال
          <span class="math-inline">]0,+&infin;[</span> كما يلي:
          <span class="math-line">f(x)=(1-1/x<sup>2</sup>)lnx</span>
        </p>
        <p>
          و <span class="math-inline">(C<sub>f</sub>)</span> تمثيلها البياني في المستوى المزود بالمعلم المتعامد والمتجانس
          <span class="math-inline">(O; i, j)</span>.
        </p>
        <ol>
          <li>
            <strong>أ)</strong> بيّن أن <span class="math-inline">f</span> قابلة للاشتقاق على المجال
            <span class="math-inline">]0,+&infin;[</span>، وأن:
            <span class="math-line">f&prime;(x)=g(x)/x<sup>3</sup></span>.
          </li>
          <li>
            استنتج اتجاه تغير الدالة <span class="math-inline">f</span> ثم شكّل جدول تغيراتها.
          </li>
          <li>
            <strong>ب)</strong> <span class="math-inline">(&delta;)</span> المنحنى الممثل للدالة
            <span class="math-inline">x &mapsto; lnx</span> على المجال
            <span class="math-inline">]0,+&infin;[</span>.
          </li>
          <li>
            ادرس وضعية <span class="math-inline">(C<sub>f</sub>)</span> بالنسبة إلى
            <span class="math-inline">(&delta;)</span>، ثم جد:
            <span class="math-line"><span class="lim"><strong>lim</strong><small>x&rarr;+&infin;</small></span>(1/x<sup>2</sup>)lnx</span>
            ماذا تستنتج؟
          </li>
          <li>
            ارسم <span class="math-inline">(&delta;)</span> و
            <span class="math-inline">(C<sub>f</sub>)</span>.
          </li>
        </ol>

        <h4>3 - التكامل والمساحة</h4>
        <ol>
          <li>
            <strong>أ)</strong> <span class="math-inline">x</span> عدد حقيقي من المجال
            <span class="math-inline">[1,+&infin;[</span>. باستعمال التكامل بالتجزئة حدّد:
            <span class="math-line">&int;<sub>1</sub><sup>x</sup>(1/t<sup>2</sup>)lnt dt</span>
          </li>
          <li>
            تحقق أن:
            <span class="math-line">x &mapsto; xlnx - x</span>
            دالة أصلية للدالة
            <span class="math-inline">x &mapsto; lnx</span>
            على المجال <span class="math-inline">[1,+&infin;[</span>.
          </li>
          <li>
            استنتج دالة أصلية للدالة <span class="math-inline">f</span> على المجال
            <span class="math-inline">[1,+&infin;[</span>.
          </li>
          <li>
            <strong>ب)</strong> <span class="math-inline">&alpha;</span> عدد حقيقي أكبر تماما من
            <span class="math-inline">1</span>.
            احسب بدلالة <span class="math-inline">&alpha;</span> المساحة
            <span class="math-inline">A(&alpha;)</span> للحيز المستوي المحدد بالمنحنيين
            <span class="math-inline">(C<sub>f</sub>)</span> و
            <span class="math-inline">(&delta;)</span>
            والمستقيمين اللذين معادلتاهما:
            <span class="math-line">x=1 و x=&alpha;</span>
            ثم احسب:
            <span class="math-line"><span class="lim"><strong>lim</strong><small>&alpha;&rarr;+&infin;</small></span>A(&alpha;)</span>.
          </li>
        </ol>
      </section>
    `
  },
  {
    id: "math-2011-topic-1-exp",
    title: "موضوع بكالوريا الجزائر 2011 - رياضيات الموضوع الأول",
    branch: "math",
    year: "2011",
    date: "2011",
    source: "user-image",
    file: "",
    tags: ["exp", "study-functions", "asymptotes"],
    summary: "التمرين الرابع من بكالوريا 2011 لشعبة رياضيات، الموضوع الأول: دراسة الدالة f(x)=(3x+4)e^x، المشتقات المتتابعة، معادلة تفاضلية، مماس، نقطة انعطاف، ورسم ومساحة.",
    statement: `
      <section class="statement-block">
        <h3>بكالوريا الجزائر 2011 - شعبة رياضيات - الموضوع الأول</h3>
        <p><strong>التمرين الرابع: (07 نقاط)</strong></p>
        <p>
          نعرّف الدالة العددية <span class="math-inline">f</span> المعرفة على
          <span class="math-inline">R</span> كما يلي:
          <span class="math-line">f(x)=(3x+4)e<sup>x</sup></span>
        </p>
        <p>
          و <span class="math-inline">(C<sub>f</sub>)</span> تمثيلها البياني في المستوى المنسوب إلى المعلم المتعامد والمتجانس
          <span class="math-inline">(O; i, j)</span>.
        </p>
        <ol>
          <li>
            <strong>أ)</strong> احسب <span class="math-inline">f&prime;</span>، ثم برهن بالتراجع أنه من أجل كل عدد طبيعي
            <span class="math-inline">n</span> غير معدوم فإن:
            <span class="math-line">f<sup>(n)</sup>(x)=(3x+3n+4)e<sup>x</sup></span>
            حيث:
            <span class="math-inline">f&prime;, f&Prime;, ..., f<sup>(n)</sup></span>
            المشتقات المتتابعة للدالة <span class="math-inline">f</span>.
          </li>
          <li>
            <strong>ب)</strong> استنتج حل المعادلة التفاضلية:
            <span class="math-line">y&Prime;=(3x+16)e<sup>x</sup></span>.
          </li>
          <li>
            <strong>2 أ)</strong> بيّن أن:
            <span class="math-line"><span class="lim"><strong>lim</strong><small>x&rarr;-&infin;</small></span>f(x)=0</span>
            وفسّر النتيجة هندسيا.
          </li>
          <li><strong>ب)</strong> ادرس اتجاه تغير الدالة <span class="math-inline">f</span> ثم شكّل جدول تغيراتها.</li>
          <li>
            <strong>3 أ)</strong> اكتب معادلة للمماس <span class="math-inline">(&Delta;)</span> للمنحنى
            <span class="math-inline">(C<sub>f</sub>)</span> في النقطة التي فاصلتها:
            <span class="math-line">-10/3</span>.
          </li>
          <li><strong>ب)</strong> بيّن أن <span class="math-inline">A</span> هي نقطة انعطاف المنحنى <span class="math-inline">(C<sub>f</sub>)</span>.</li>
          <li>
            <strong>ج)</strong> ارسم <span class="math-inline">(&Delta;)</span> و
            <span class="math-inline">(C<sub>f</sub>)</span> على المجال
            <span class="math-inline">[-5;0]</span>.
          </li>
          <li>
            <strong>4 أ)</strong> <span class="math-inline">x</span> عدد حقيقي من المجال
            <span class="math-inline">]-&infin;;0]</span>. باستعمال التكامل بالتجزئة حدّد:
            <span class="math-line">&int;<sub>1</sub><sup>x</sup>te<sup>t</sup>dt</span>
            ثم استنتج دالة أصلية للدالة <span class="math-inline">f</span> على المجال
            <span class="math-inline">]-&infin;;0]</span>.
          </li>
          <li>
            <strong>ب)</strong> <span class="math-inline">&lambda;</span> عدد حقيقي أصغر تماما من
            <span class="math-line">-4/3</span>.
            احسب بدلالة <span class="math-inline">&lambda;</span> المساحة
            <span class="math-inline">A(&lambda;)</span> للجزء من المستوى المحدد بالمنحنى
            <span class="math-inline">(C<sub>f</sub>)</span> والمستقيمات التي معادلاتها:
            <span class="math-line">x=&lambda; ، x=-4/3 ، y=0</span>
            ثم جد:
            <span class="math-line"><span class="lim"><strong>lim</strong><small>&lambda;&rarr;-&infin;</small></span>A(&lambda;)</span>.
          </li>
        </ol>
      </section>
    `
  },
  {
    id: "math-2010-topic-1-exp",
    title: "موضوع بكالوريا الجزائر 2010 - رياضيات الموضوع الأول",
    branch: "math",
    year: "2010",
    date: "2010",
    source: "inline",
    file: "",
    tags: ["exp", "study-functions", "asymptotes"],
    summary: "التمرين الرابع من بكالوريا 2010 لشعبة رياضيات، الموضوع الأول: دراسة دالة أسية مساعدة، دالة معرفة بالتجزئة، الاشتقاق عند الصفر، جدول تغيرات، ووضعية نسبية مع منحنى دالة كثيرة حدود.",
    statement: `
      <section class="statement-block">
        <h3>بكالوريا الجزائر 2010 - شعبة رياضيات - الموضوع الأول</h3>
        <p><strong>التمرين الرابع: (07 نقاط)</strong></p>

        <h4>I - لتكن الدالة العددية <span class="math-inline">g</span> المعرفة على <span class="math-inline">R</span> كما يلي:</h4>
        <div class="formula">g(x) = (3 - x)e^x - 3</div>
        <ol>
          <li>ادرس تغيرات الدالة <span class="math-inline">g</span>.</li>
          <li>
            بين أن المعادلة <span class="math-inline">g(x)=0</span> تقبل في
            <span class="math-inline">R</span> حلين، أحدهما معدوم والآخر
            <span class="math-inline">&alpha;</span> حيث:
            <span class="math-line">2.82 &lt; &alpha; &lt; 2.83</span>
          </li>
          <li>استنتج إشارة <span class="math-inline">g(x)</span> حسب قيم <span class="math-inline">x</span>.</li>
        </ol>

        <h4>II - لتكن الدالة العددية <span class="math-inline">f</span> المعرفة على <span class="math-inline">R</span> كما يلي:</h4>
        <div class="formula">f(x) = x^3 / (e^x - 1), x != 0; f(0) = 0</div>
        <p>
          و <span class="math-inline">(C<sub>f</sub>)</span> تمثيلها البياني في المستوي المنسوب إلى المعلم المتعامد والمتجانس
          <span class="math-inline">(O; i, j)</span>.
        </p>
        <ol>
          <li>
            بين أن الدالة <span class="math-inline">f</span> تقبل الاشتقاق عند
            <span class="math-inline">x<sub>0</sub>=0</span>، ثم اكتب معادلة للمماس
            <span class="math-inline">(T)</span> لـ <span class="math-inline">(C<sub>f</sub>)</span> عند المبدأ
            <span class="math-inline">O</span>.
          </li>
          <li>
            <strong>أ)</strong> بين أن
            <span class="math-line"><span class="lim"><strong>lim</strong><small>x&rarr;+&infin;</small></span>x<sup>3</sup>e<sup>-x</sup>=0</span>
            ثم احسب
            <span class="math-line"><span class="lim"><strong>lim</strong><small>x&rarr;+&infin;</small></span>f(x)</span>
            و
            <span class="math-line"><span class="lim"><strong>lim</strong><small>x&rarr;-&infin;</small></span>f(x)</span>.
          </li>
          <li>
            <strong>ب)</strong> بين أنه من أجل <span class="math-inline">x &ne; 0</span> فإن:
            <span class="math-line">f&prime;(x)=<span style="display:inline-block;vertical-align:middle;text-align:center;"><span>x<sup>2</sup></span><span style="display:block;border-top:1px solid #fff;">(e<sup>x</sup>-1)<sup>2</sup></span></span> g(x)</span>
          </li>
          <li>
            <strong>ج)</strong> تحقق أن:
            <span class="math-line">f(&alpha;)=&alpha;<sup>2</sup>(3-&alpha;)</span>
            ثم عين حصرا له.
          </li>
          <li><strong>د)</strong> أنشئ جدول تغيرات الدالة <span class="math-inline">f</span>.</li>
          <li>
            احسب <span class="math-inline">f(x)+x<sup>3</sup></span> واستنتج الوضعية النسبية لـ
            <span class="math-inline">(C<sub>f</sub>)</span> و <span class="math-inline">(C)</span> منحنى الدالة
            <span class="math-inline">x &mapsto; -x<sup>3</sup></span>.
            <br>
            بين أن:
            <span class="math-line"><span class="lim"><strong>lim</strong><small>x&rarr;-&infin;</small></span>[f(x)+x<sup>3</sup>]=0</span>
            وفسر النتيجة هندسيا.
          </li>
          <li>أنشئ في نفس المعلم المماس <span class="math-inline">(T)</span> والمنحنيين <span class="math-inline">(C)</span> و <span class="math-inline">(C<sub>f</sub>)</span>.</li>
        </ol>
      </section>
    `,
    solution: `
      <section class="solution-block">
        <h3>الحل التفصيلي</h3>

        <h4>I - دراسة الدالة المساعدة g</h4>
        <ol>
          <li>
            الدالة <span class="math-inline">g(x) = (3 - x)e<sup>x</sup> - 3</span> مشتقة على <span class="math-inline">ℝ</span> و:
            <span class="math-line">g′(x) = -e<sup>x</sup> + (3 - x)e<sup>x</sup> = (2 - x)e<sup>x</sup></span>.
            بما أن <span class="math-inline">e<sup>x</sup> &gt; 0</span>، فإنّ إشارة <span class="math-inline">g′(x)</span> هي إشارة <span class="math-inline">(2 - x)</span>.
            إذن <span class="math-inline">g</span> متزايدة تماما على <span class="math-inline">]-∞, 2]</span> ومتناقصة تماما على <span class="math-inline">[2, +∞[</span>.
            <table class="variation-table" aria-label="جدول تغيرات الدالة g">
              <tr>
                <th>x</th>
                <td class="interval">-∞</td>
                <td class="interval">2</td>
                <td class="interval">+∞</td>
              </tr>
              <tr>
                <th>g′(x)</th>
                <td>+</td>
                <td>0</td>
                <td>-</td>
              </tr>
              <tr>
                <th>g(x)</th>
                <td>-3</td>
                <td>↗ e² - 3 ↘</td>
                <td>-∞</td>
              </tr>
            </table>
          </li>
          <li>
            نلاحظ أنّ <span class="math-inline">g(0) = 3 - 3 = 0</span>، إذن <span class="math-inline">0</span> حل.
            <br>كذلك <span class="math-inline">g(2) = e² - 3 &gt; 0</span> و <span class="math-inline"><span class="lim"><strong>lim</strong><small>x→+∞</small></span> g(x) = -∞</span>.
            وبما أنّ <span class="math-inline">g</span> متناقصة تماما على <span class="math-inline">[2, +∞[</span>، فإنّ المعادلة <span class="math-inline">g(x) = 0</span> تقبل حلا وحيدا <span class="math-inline">α &gt; 2</span>.
            <br>نحسب:
            <span class="math-line">g(2,82) ≃ 0,03 &gt; 0</span> و <span class="math-line">g(2,83) ≃ -0,02 &lt; 0</span>،
            إذن: <span class="math-line">2,82 &lt; α &lt; 2,83</span>.
          </li>
          <li>
            من جدول التغيرات وكون <span class="math-inline">g(0) = g(α) = 0</span>:
            <ul>
              <li><span class="math-inline">g(x) &lt; 0</span> على <span class="math-inline">]-∞, 0[ ∪ ]α, +∞[</span></li>
              <li><span class="math-inline">g(x) &gt; 0</span> على <span class="math-inline">]0, α[</span></li>
            </ul>
          </li>
        </ol>

        <h4>II - دراسة الدالة f</h4>
        <ol>
          <li>
            عند <span class="math-inline">x = 0</span>، نحسب:
            <span class="math-line"><span class="lim"><strong>lim</strong><small>x→0</small></span> <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>f(x) - f(0)</span><span style="display:block;border-top:1px solid #fff;">x - 0</span></span> = <span class="lim"><strong>lim</strong><small>x→0</small></span> <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>x²</span><span style="display:block;border-top:1px solid #fff;">e<sup>x</sup> - 1</span></span> = <span class="lim"><strong>lim</strong><small>x→0</small></span> <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>x²</span><span style="display:block;border-top:1px solid #fff;">x</span></span> = 0</span>.
            إذن <span class="math-inline">f</span> مشتقة عند <span class="math-inline">0</span> و <span class="math-inline">f′(0) = 0</span>.
            <br>معادلة المماس <span class="math-inline">(T)</span> عند <span class="math-inline">O</span>: <span class="math-inline">y = 0</span> (محور الفواصل).
          </li>
          <li>
            <ol type="أ">
              <li>
                نعلم أنّ <span class="math-inline"><span class="lim"><strong>lim</strong><small>x→+∞</small></span> x<sup>n</sup> e<sup>-x</sup> = 0</span> لكل <span class="math-inline">n ∈ ℕ</span>، إذن:
                <span class="math-line"><span class="lim"><strong>lim</strong><small>x→+∞</small></span> x<sup>3</sup> e<sup>-x</sup> = 0</span>.
                <br>وبالتالي:
                <span class="math-line"><span class="lim"><strong>lim</strong><small>x→+∞</small></span> f(x) = <span class="lim"><strong>lim</strong><small>x→+∞</small></span> <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>x³</span><span style="display:block;border-top:1px solid #fff;">e<sup>x</sup> - 1</span></span> = <span class="lim"><strong>lim</strong><small>x→+∞</small></span> <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>x³ e<sup>-x</sup></span><span style="display:block;border-top:1px solid #fff;">1 - e<sup>-x</sup></span></span> = 0</span>.
                <br>عند <span class="math-inline">x → -∞</span>:
                <span class="math-line"><span class="lim"><strong>lim</strong><small>x→-∞</small></span> f(x) = <span class="lim"><strong>lim</strong><small>x→-∞</small></span> <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>x³</span><span style="display:block;border-top:1px solid #fff;">e<sup>x</sup> - 1</span></span> = <span class="lim"><strong>lim</strong><small>x→-∞</small></span> <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>-∞</span><span style="display:block;border-top:1px solid #fff;">-1</span></span> = +∞</span>.
              </li>
              <li>
                لـ <span class="math-inline">x ≠ 0</span>، بالاشتقاق:
                <span class="math-line">f′(x) = <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>3x²(e<sup>x</sup> - 1) - x³ e<sup>x</sup></span><span style="display:block;border-top:1px solid #fff;">(e<sup>x</sup> - 1)²</span></span> = <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>x²[(3 - x)e<sup>x</sup> - 3]</span><span style="display:block;border-top:1px solid #fff;">(e<sup>x</sup> - 1)²</span></span> = <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>x²</span><span style="display:block;border-top:1px solid #fff;">(e<sup>x</sup> - 1)²</span></span> · g(x)</span>.
              </li>
              <li>
                بما أنّ <span class="math-inline">g(α) = 0</span>، فإنّ <span class="math-inline">(3 - α)e<sup>α</sup> = 3</span>، أي <span class="math-inline">e<sup>α</sup> = <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>3</span><span style="display:block;border-top:1px solid #fff;">3 - α</span></span></span>.
                <br>إذن:
                <span class="math-line">e<sup>α</sup> - 1 = <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>3</span><span style="display:block;border-top:1px solid #fff;">3 - α</span></span> - 1 = <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>α</span><span style="display:block;border-top:1px solid #fff;">3 - α</span></span></span>.
                <br>وبالتالي:
                <span class="math-line">f(α) = <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>α³</span><span style="display:block;border-top:1px solid #fff;">e<sup>α</sup> - 1</span></span> = <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>α³(3 - α)</span><span style="display:block;border-top:1px solid #fff;">α</span></span> = α²(3 - α)</span>.
                <br>وبما أنّ <span class="math-inline">2,82 &lt; α &lt; 2,83</span>، فإنّ:
                <span class="math-line">7,95 &lt; α² &lt; 8,01</span> و <span class="math-line">0,17 &lt; 3 - α &lt; 0,18</span>،
                إذن تقريبا: <span class="math-line">1,35 &lt; f(α) &lt; 1,45</span>.
              </li>
              <li>
                إشارة <span class="math-inline">f′(x)</span> هي إشارة <span class="math-inline">g(x)</span> لأنّ <span class="math-inline">x² &gt; 0</span> و <span class="math-inline">(e<sup>x</sup> - 1)² &gt; 0</span> لـ <span class="math-inline">x ≠ 0</span>.
                <table class="variation-table" aria-label="جدول تغيرات الدالة f">
                  <tr>
                    <th>x</th>
                    <td class="interval">-∞</td>
                    <td class="interval">0</td>
                    <td class="interval">α</td>
                    <td class="interval">+∞</td>
                  </tr>
                  <tr>
                    <th>f′(x)</th>
                    <td>-</td>
                    <td>0</td>
                    <td>0</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <th>f(x)</th>
                    <td>+∞</td>
                    <td>↘ 0 ↗</td>
                    <td>↗ f(α) ↘</td>
                    <td>0</td>
                  </tr>
                </table>
              </li>
            </ol>
          </li>
          <li>
            نحسب:
            <span class="math-line">f(x) + x³ = <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>x³</span><span style="display:block;border-top:1px solid #fff;">e<sup>x</sup> - 1</span></span> + x³ = <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>x³ e<sup>x</sup></span><span style="display:block;border-top:1px solid #fff;">e<sup>x</sup> - 1</span></span></span>.
            <ul>
              <li>إذا <span class="math-inline">x &gt; 0</span>: <span class="math-inline">e<sup>x</sup> - 1 &gt; 0</span>، إذن <span class="math-inline">f(x) + x³ &gt; 0</span>.</li>
              <li>إذا <span class="math-inline">x &lt; 0</span>: <span class="math-inline">x³ &lt; 0</span> و <span class="math-inline">e<sup>x</sup> - 1 &lt; 0</span>، إذن <span class="math-inline">f(x) + x³ &gt; 0</span>.</li>
            </ul>
            وبالتالي <span class="math-inline">(C<sub>f</sub>)</span> أعلى <span class="math-inline">(C)</span> في كلّ مكان.
            <br>عند <span class="math-inline">x → -∞</span>:
            <span class="math-line"><span class="lim"><strong>lim</strong><small>x→-∞</small></span> [f(x) + x³] = <span class="lim"><strong>lim</strong><small>x→-∞</small></span> <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>x³ e<sup>x</sup></span><span style="display:block;border-top:1px solid #fff;">e<sup>x</sup> - 1</span></span> = 0</span>
            (لأنّ <span class="math-inline">x³ e<sup>x</sup> → 0</span> و <span class="math-inline">e<sup>x</sup> - 1 → -1</span>).
            <br>التفسير الهندسي: المنحنى <span class="math-inline">(C)</span> ذو المعادلة <span class="math-inline">y = -x³</span> مقارب للمنحنى <span class="math-inline">(C<sub>f</sub>)</span> عند <span class="math-inline">-∞</span>، و <span class="math-inline">(C<sub>f</sub>)</span> أعلى منه.
          </li>
          <li>
            نرسم المماس <span class="math-inline">(T): y = 0</span> والمنحنى <span class="math-inline">(C): y = -x³</span> والمنحنى <span class="math-inline">(C<sub>f</sub>)</span> باستعمال النقاط والجدول.
          </li>
        </ol>
      </section>
    `
  },
  {
    id: "math-2008-topic-1-exp",
    title: "موضوع بكالوريا الجزائر 2008 - رياضيات الموضوع الأول",
    branch: "math",
    year: "2008",
    date: "2008",
    source: "inline",
    file: "",
    tags: ["exp", "study-functions", "asymptotes"],
    summary: "التمرين الرابع من بكالوريا 2008 لشعبة رياضيات، الموضوع الأول: دراسة دالة أسية، نقطة انعطاف، مركز تناظر، مستقيمان مقاربان، وجذر وحيد ثم إنشاء منحنى دالة مرتبطة.",
    statement: `
      <section class="statement-block">
        <h3>بكالوريا الجزائر 2008 - شعبة رياضيات - الموضوع الأول</h3>
        <p><strong>التمرين الرابع: (07 نقاط)</strong></p>
        <p>
          <span class="math-inline">f</span> الدالة العددية المعرفة على
          <span class="math-inline">R</span> بالعبارة:
          <span class="math-line">f(x)=x-1+<span style="display:inline-block;vertical-align:middle;text-align:center;"><span>4</span><span style="display:block;border-top:1px solid #fff;">e<sup>x</sup>+1</span></span></span>
          و <span class="math-inline">(C<sub>f</sub>)</span> تمثيلها البياني في المستوي المنسوب إلى المعلم المتعامد والمتجانس
          <span class="math-inline">(O; i, j)</span>.
        </p>
        <ol>
          <li>ادرس تغيرات الدالة <span class="math-inline">f</span>.</li>
          <li>
            بين أن <span class="math-inline">(C<sub>f</sub>)</span> يقبل نقطة انعطاف
            <span class="math-inline">&omega;</span>، واكتب معادلة لمماس
            <span class="math-inline">(C<sub>f</sub>)</span> عند النقطة <span class="math-inline">&omega;</span>.
            <br>
            أثبت أن <span class="math-inline">&omega;</span> مركز تناظر للمنحنى
            <span class="math-inline">(C<sub>f</sub>)</span>.
          </li>
          <li>
            احسب
            <span class="math-line"><span class="lim"><strong>lim</strong><small>x&rarr;-&infin;</small></span>[f(x)-(x+3)]</span>
            و
            <span class="math-line"><span class="lim"><strong>lim</strong><small>x&rarr;+&infin;</small></span>[f(x)-(x-1)]</span>
            واستنتج أن <span class="math-inline">(C<sub>f</sub>)</span> يقبل مستقيمين مقاربين يطلب إعطاء معادلة لكل منهما.
          </li>
          <li>
            بين أن <span class="math-inline">(C<sub>f</sub>)</span> يقطع محور الفواصل في نقطة وحيدة فاصلتها
            <span class="math-inline">x<sub>0</sub></span> من المجال
            <span class="math-inline">]-2.77; -2.76[</span>.
            <br>
            احسب <span class="math-inline">f(1)</span> و <span class="math-inline">f(-1)</span>
            (تدور النتائج إلى <span class="math-inline">10<sup>-2</sup></span>)، ثم ارسم
            <span class="math-inline">(C<sub>f</sub>)</span> ومستقيميه المقاربين.
          </li>
        </ol>
      </section>
      <section class="statement-block">
        <h3>II - لتكن الدالة العددية g المعرفة على R بالعبارة:</h3>
        <div class="formula" dir="ltr">g(x) = -x + 3 - <span class="frac"><span class="num">4</span><span class="den">e<sup>x</sup> + 1</span></span></div>
        <p>و <strong>(C<sub>g</sub>)</strong> منحنى الدالة <strong>g</strong>.</p>
        <ol>
          <li>بين أنه من أجل كل عدد حقيقي <span class="math-inline">x</span> فإن: <strong>g(x)=f(-x)</strong>.</li>
          <li>استنتج أنه يوجد تحويل نقطي بسيط يحول <strong>(C<sub>f</sub>)</strong> إلى <strong>(C<sub>g</sub>)</strong>.</li>
          <li>أنشئ في نفس المعلم السابق <strong>(C<sub>g</sub>)</strong> دون دراسة الدالة <strong>g</strong>.</li>
        </ol>
      </section>
    `,
    solution: `
      <section class="solution-block">
        <h3>الحل التفصيلي</h3>

        <h4>I - دراسة الدالة f</h4>
        <ol>
          <li>
            الدالة <span class="math-inline">f(x) = x - 1 + <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>4</span><span style="display:block;border-top:1px solid #fff;">e<sup>x</sup> + 1</span></span></span> مشتقة على <span class="math-inline">ℝ</span> و:
            <span class="math-line">f′(x) = 1 - <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>4 e<sup>x</sup></span><span style="display:block;border-top:1px solid #fff;">(e<sup>x</sup> + 1)²</span></span> = <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>(e<sup>x</sup> + 1)² - 4 e<sup>x</sup></span><span style="display:block;border-top:1px solid #fff;">(e<sup>x</sup> + 1)²</span></span> = <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>(e<sup>x</sup> - 1)²</span><span style="display:block;border-top:1px solid #fff;">(e<sup>x</sup> + 1)²</span></span></span>.
            بما أنّ <span class="math-inline">f′(x) ≥ 0</span> لكلّ <span class="math-inline">x ∈ ℝ</span> و <span class="math-inline">f′(x) = 0 ⇔ x = 0</span>، فإنّ <span class="math-inline">f</span> متزايدة تماما على <span class="math-inline">ℝ</span>.
          </li>
          <li>
            نحسب المشتقة الثانية:
            <span class="math-line">f″(x) = <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>4 e<sup>x</sup> (e<sup>x</sup> - 1)</span><span style="display:block;border-top:1px solid #fff;">(e<sup>x</sup> + 1)³</span></span></span>.
            تتغيّر إشارة <span class="math-inline">f″(x)</span> عند <span class="math-inline">x = 0</span>، إذن للمنحنى نقطة انعطاف:
            <span class="math-inline">ω(0, f(0)) = ω(0, 1)</span>.
            <br>بما أنّ <span class="math-inline">f′(0) = 0</span>، فإنّ المماس عند <span class="math-inline">ω</span> أفقي ومعادلته: <span class="math-inline">y = 1</span>.
            <br>لإثبات أنّ <span class="math-inline">ω</span> مركز تناظر، نبين أنّ <span class="math-inline">f(-x) + f(x) = 2</span>:
            <span class="math-line">f(-x) + f(x) = (-x - 1 + <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>4</span><span style="display:block;border-top:1px solid #fff;">e<sup>-x</sup> + 1</span></span>) + (x - 1 + <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>4</span><span style="display:block;border-top:1px solid #fff;">e<sup>x</sup> + 1</span></span>)</span>
            <span class="math-line">= -2 + 4(<span style="display:inline-block;vertical-align:middle;text-align:center;"><span>e<sup>x</sup></span><span style="display:block;border-top:1px solid #fff;">1 + e<sup>x</sup></span></span> + <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>1</span><span style="display:block;border-top:1px solid #fff;">e<sup>x</sup> + 1</span></span>) = -2 + 4 = 2</span>.
            إذن <span class="math-inline">ω(0, 1)</span> مركز تناظر للمنحنى <span class="math-inline">(C<sub>f</sub>)</span>.
          </li>
          <li>
            نحسب:
            <span class="math-line">f(x) - (x + 3) = x - 1 + <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>4</span><span style="display:block;border-top:1px solid #fff;">e<sup>x</sup> + 1</span></span> - x - 3 = <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>4</span><span style="display:block;border-top:1px solid #fff;">e<sup>x</sup> + 1</span></span> - 4</span>.
            عند <span class="math-inline">x → -∞</span>، <span class="math-inline">e<sup>x</sup> → 0</span>، إذن:
            <span class="math-line"><span class="lim"><strong>lim</strong><small>x→-∞</small></span> [f(x) - (x + 3)] = 0</span>.
            وبالتالي المستقيم <span class="math-inline">(Δ): y = x + 3</span> مقارب مائل للمنحنى عند <span class="math-inline">-∞</span>.
            <br><br>
            كذلك:
            <span class="math-line">f(x) - (x - 1) = x - 1 + <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>4</span><span style="display:block;border-top:1px solid #fff;">e<sup>x</sup> + 1</span></span> - x + 1 = <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>4</span><span style="display:block;border-top:1px solid #fff;">e<sup>x</sup> + 1</span></span></span>.
            عند <span class="math-inline">x → +∞</span>، <span class="math-inline">e<sup>x</sup> → +∞</span>، إذن:
            <span class="math-line"><span class="lim"><strong>lim</strong><small>x→+∞</small></span> [f(x) - (x - 1)] = 0</span>.
            وبالتالي المستقيم <span class="math-inline">(Δ'): y = x - 1</span> مقارب مائل للمنحنى عند <span class="math-inline">+∞</span>.
          </li>
          <li>
            الدالة <span class="math-inline">f</span> متصلة ومتزايدة تماما على <span class="math-inline">ℝ</span>، و:
            <span class="math-line"><span class="lim"><strong>lim</strong><small>x→-∞</small></span> f(x) = -∞</span> و <span class="math-line"><span class="lim"><strong>lim</strong><small>x→+∞</small></span> f(x) = +∞</span>.
            إذن المعادلة <span class="math-inline">f(x) = 0</span> تقبل حلا وحيدا <span class="math-inline">x<sub>0</sub></span>.
            <br>نحسب:
            <span class="math-line">f(-2,77) ≃ -0,01 &lt; 0</span> و <span class="math-line">f(-2,76) ≃ 0,02 &gt; 0</span>،
            إذن: <span class="math-line">-2,77 &lt; x<sub>0</sub> &lt; -2,76</span>.
            <br>كذلك:
            <span class="math-line">f(1) = 1 - 1 + <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>4</span><span style="display:block;border-top:1px solid #fff;">e + 1</span></span> = <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>4</span><span style="display:block;border-top:1px solid #fff;">e + 1</span></span> ≃ 1,04</span>
            و
            <span class="math-line">f(-1) = -1 - 1 + <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>4</span><span style="display:block;border-top:1px solid #fff;">e<sup>-1</sup> + 1</span></span> = -2 + <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>4e</span><span style="display:block;border-top:1px solid #fff;">1 + e</span></span> = <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>2e - 2</span><span style="display:block;border-top:1px solid #fff;">1 + e</span></span> ≃ 0,92</span>.
            نستعمل هذه النقاط مع المقاربين ومركز التناظر لرسم المنحنى.
          </li>
        </ol>

        <h4>II - علاقة (C<sub>f</sub>) و (C<sub>g</sub>)</h4>
        <ol>
          <li>
            لدينا:
            <span class="math-line">f(-x) = -x - 1 + <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>4</span><span style="display:block;border-top:1px solid #fff;">e<sup>-x</sup> + 1</span></span> = -x - 1 + <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>4 e<sup>x</sup></span><span style="display:block;border-top:1px solid #fff;">1 + e<sup>x</sup></span></span></span>.
            و:
            <span class="math-line">g(x) = -x + 3 - <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>4</span><span style="display:block;border-top:1px solid #fff;">e<sup>x</sup> + 1</span></span></span>.
            نحسب الفرق:
            <span class="math-line">g(x) - f(-x) = (-x + 3 - <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>4</span><span style="display:block;border-top:1px solid #fff;">e<sup>x</sup> + 1</span></span>) - (-x - 1 + <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>4 e<sup>x</sup></span><span style="display:block;border-top:1px solid #fff;">1 + e<sup>x</sup></span></span>) = 4 - 4(<span style="display:inline-block;vertical-align:middle;text-align:center;"><span>1</span><span style="display:block;border-top:1px solid #fff;">e<sup>x</sup> + 1</span></span> + <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>e<sup>x</sup></span><span style="display:block;border-top:1px solid #fff;">e<sup>x</sup> + 1</span></span>) = 4 - 4 = 0</span>.
            إذن <span class="math-inline">g(x) = f(-x)</span> لكلّ <span class="math-inline">x ∈ ℝ</span>.
          </li>
          <li>
            بما أنّ <span class="math-inline">g(x) = f(-x)</span>، فإنّ النقطة <span class="math-inline">M(x, y)</span> تنتمي إلى <span class="math-inline">(C<sub>g</sub>)</span> إذا وفقط إذا كانت النقطة <span class="math-inline">M'(-x, y)</span> تنتمي إلى <span class="math-inline">(C<sub>f</sub>)</span>.
            إذن <span class="math-inline">(C<sub>g</sub>)</span> صورة <span class="math-inline">(C<sub>f</sub>)</span> بالانعكاس حول محور الترتيب <span class="math-inline">(Oy)</span>.
          </li>
          <li>
            نرسم <span class="math-inline">(C<sub>g</sub>)</span> بانعكاس <span class="math-inline">(C<sub>f</sub>)</span> حول محور الترتيب، دون إجراء دراسة جديدة للدالة <span class="math-inline">g</span>.
          </li>
        </ol>
      </section>
    `
  },
  {
    id: "science-2008-topic-2-exp-ln",
    title: "الموضوع الثاني - بكالوريا 2008",
    branch: "science",
    year: "2008",
    date: "2008",
    source: "inline",
    file: "",
    tags: ["exp", "study-functions", "equations"],
    summary: "تمرين من الموضوع الثاني لبكالوريا 2008 حول دراسة دالة أسية، المستقيمات المقاربة، ومقارنة منحنيي دالتين.",
    statement: `
      <section class="statement-block">
        <h3>I - لتكن الدالة العددية f المعرفة على R بالعبارة:</h3>
        <div class="formula" dir="ltr">f(x) = x - 1 + <span class="frac"><span class="num">4</span><span class="den">e<sup>x</sup> + 1</span></span></div>
        <p>و <strong>(Cf)</strong> تمثيلها البياني في المستوى المنسوب إلى المعلم المتعامد والمتجانس <strong>(O; i, j)</strong>.</p>
        <ol>
          <li>ادرس تغيرات الدالة f.</li>
          <li>بين أن <strong>(Cf)</strong> يقبل نقطة انعطاف، واكتب معادلة المماس عند هذه النقطة.</li>
          <li>
            احسب النهايات:
            <div class="formula" dir="ltr">lim<sub>x→-∞</sub> [f(x) - (x + 3)]</div>
            <div class="formula" dir="ltr">lim<sub>x→+∞</sub> [f(x) - (x - 1)]</div>
            ثم استنتج المستقيمين المقاربين.
          </li>
          <li>بين أن المنحنى يقطع محور الفواصل في نقطة وحيدة فاصلتها محصورة بين -2.77 و -2.76.</li>
          <li>احسب f(1) و f(-1) ثم ارسم المنحنى والمستقيمين المقاربين.</li>
        </ol>
      </section>
      <section class="statement-block">
        <h3>II - لتكن الدالة g المعرفة على R بالعبارة:</h3>
        <div class="formula" dir="ltr">g(x) = -x + 3 - <span class="frac"><span class="num">4</span><span class="den">e<sup>x</sup> + 1</span></span></div>
        <ol>
          <li>بين أنه من أجل كل عدد حقيقي x فإن: <strong>g(x) = f(-x)</strong>.</li>
          <li>استنتج التحويل النقطي الذي يحول <strong>(Cf)</strong> إلى <strong>(Cg)</strong>.</li>
          <li>أنشئ <strong>(Cg)</strong> في نفس المعلم السابق دون دراسة الدالة g.</li>
        </ol>
      </section>
    `,
    solution: `
      <section class="solution-block">
        <h3>الحل التفصيلي</h3>

        <h4>I - دراسة الدالة f</h4>
        <ol>
          <li>
            الدالة <span class="math-inline">f(x) = x - 1 + <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>4</span><span style="display:block;border-top:1px solid #fff;">e<sup>x</sup> + 1</span></span></span> مشتقة على <span class="math-inline">ℝ</span> و:
            <span class="math-line">f′(x) = 1 - <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>4 e<sup>x</sup></span><span style="display:block;border-top:1px solid #fff;">(e<sup>x</sup> + 1)²</span></span> = <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>(e<sup>x</sup> - 1)²</span><span style="display:block;border-top:1px solid #fff;">(e<sup>x</sup> + 1)²</span></span> ≥ 0</span>.
            بما أنّ <span class="math-inline">f′(x) = 0 ⇔ x = 0</span>، فإنّ <span class="math-inline">f</span> متزايدة تماما على <span class="math-inline">ℝ</span>.
          </li>
          <li>
            المشتقة الثانية:
            <span class="math-line">f″(x) = <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>4 e<sup>x</sup> (e<sup>x</sup> - 1)</span><span style="display:block;border-top:1px solid #fff;">(e<sup>x</sup> + 1)³</span></span></span>.
            تتغيّر إشارة <span class="math-inline">f″</span> عند <span class="math-inline">x = 0</span>، إذن للمنحنى نقطة انعطاف:
            <span class="math-inline">Ω(0, f(0)) = Ω(0, 1)</span>.
            <br>بما أنّ <span class="math-inline">f′(0) = 0</span>، فإنّ المماس عند <span class="math-inline">Ω</span> أفقي ومعادلته: <span class="math-inline">y = 1</span>.
          </li>
          <li>
            نحسب:
            <span class="math-line">f(x) - (x + 3) = <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>4</span><span style="display:block;border-top:1px solid #fff;">e<sup>x</sup> + 1</span></span> - 4</span>.
            عند <span class="math-inline">x → -∞</span>: <span class="math-inline">e<sup>x</sup> → 0</span>، إذن:
            <span class="math-line"><span class="lim"><strong>lim</strong><small>x→-∞</small></span> [f(x) - (x + 3)] = 0</span>.
            <br>كذلك:
            <span class="math-line">f(x) - (x - 1) = <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>4</span><span style="display:block;border-top:1px solid #fff;">e<sup>x</sup> + 1</span></span></span>.
            عند <span class="math-inline">x → +∞</span>: <span class="math-inline">e<sup>x</sup> → +∞</span>، إذن:
            <span class="math-line"><span class="lim"><strong>lim</strong><small>x→+∞</small></span> [f(x) - (x - 1)] = 0</span>.
            <br>إذن المستقيمان المقاربان هما: <span class="math-inline">y = x + 3</span> عند <span class="math-inline">-∞</span> و <span class="math-inline">y = x - 1</span> عند <span class="math-inline">+∞</span>.
          </li>
          <li>
            بما أنّ <span class="math-inline">f</span> متصلة ومتزايدة تماما على <span class="math-inline">ℝ</span>، و:
            <span class="math-line"><span class="lim"><strong>lim</strong><small>x→-∞</small></span> f(x) = -∞</span> و <span class="math-line"><span class="lim"><strong>lim</strong><small>x→+∞</small></span> f(x) = +∞</span>،
            فإنّ المعادلة <span class="math-inline">f(x) = 0</span> تقبل حلا وحيدا <span class="math-inline">x<sub>0</sub></span>.
            <br>نحسب:
            <span class="math-line">f(-2,77) ≃ -0,01 &lt; 0</span> و <span class="math-line">f(-2,76) ≃ 0,02 &gt; 0</span>،
            إذن: <span class="math-line">-2,77 &lt; x<sub>0</sub> &lt; -2,76</span>.
          </li>
          <li>
            <span class="math-line">f(1) = <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>4</span><span style="display:block;border-top:1px solid #fff;">e + 1</span></span> ≃ 1,04</span>
            و
            <span class="math-line">f(-1) = <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>2e - 2</span><span style="display:block;border-top:1px solid #fff;">1 + e</span></span> ≃ 0,92</span>.
            نرسم المنحنى باستعمال المقاربين ونقطة الانعطاف والنقاط المحسوبة.
          </li>
        </ol>

        <h4>II - علاقة المنحنيين (Cf) و (Cg)</h4>
        <ol>
          <li>
            لدينا:
            <span class="math-line">f(-x) = -x - 1 + <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>4</span><span style="display:block;border-top:1px solid #fff;">e<sup>-x</sup> + 1</span></span> = -x - 1 + <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>4 e<sup>x</sup></span><span style="display:block;border-top:1px solid #fff;">1 + e<sup>x</sup></span></span></span>.
            و:
            <span class="math-line">g(x) = -x + 3 - <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>4</span><span style="display:block;border-top:1px solid #fff;">e<sup>x</sup> + 1</span></span></span>.
            بالتالي:
            <span class="math-line">g(x) - f(-x) = 4 - 4(<span style="display:inline-block;vertical-align:middle;text-align:center;"><span>1</span><span style="display:block;border-top:1px solid #fff;">e<sup>x</sup> + 1</span></span> + <span style="display:inline-block;vertical-align:middle;text-align:center;"><span>e<sup>x</sup></span><span style="display:block;border-top:1px solid #fff;">e<sup>x</sup> + 1</span></span>) = 4 - 4 = 0</span>.
            إذن <span class="math-inline">g(x) = f(-x)</span>.
          </li>
          <li>
            بما أنّ <span class="math-inline">g(x) = f(-x)</span>، فإنّ <span class="math-inline">(Cg)</span> صورة <span class="math-inline">(Cf)</span> بالانعكاس حول محور الترتيب <span class="math-inline">(Oy)</span>.
          </li>
          <li>
            نرسم <span class="math-inline">(Cg)</span> بانعكاس <span class="math-inline">(Cf)</span> حول محور الترتيب.
          </li>
        </ol>
      </section>
    `
  },
  {
    id: "management-2019-equations-ln",
    title: "تمرين مراجعة 2019 - التسيير والاقتصاد",
    branch: "management",
    year: "2019",
    date: "2019",
    source: "inline",
    file: "",
    tags: ["ln", "equations"],
    summary: "تمرين مركز على شروط تعريف اللوغارتم، حل معادلات بسيطة، وقراءة نتائج مرتبطة بوضعية اقتصادية.",
    statement: `
      <section class="statement-block">
        <h3>تمرين في الدالة اللوغارتمية</h3>
        <p>نعتبر الدالة المعرفة على المجال المناسب بالعبارة:</p>
        <div class="formula" dir="ltr">h(x) = ln(x + 2) - ln(3 - x)</div>
        <ol>
          <li>عين مجال تعريف الدالة h.</li>
          <li>حل المعادلة h(x) = 0.</li>
          <li>ادرس إشارة h(x) على مجال التعريف.</li>
          <li>فسر النتيجة في سياق مقارنة كميتين اقتصاديتين تتغيران حسب x.</li>
        </ol>
      </section>
    `
  }
];
