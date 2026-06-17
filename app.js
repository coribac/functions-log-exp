const STORAGE_KEY = "ayla-log-exp-progress-v2";

const BAC_BRANCH_LABELS = {
  all: "كل الشعب",
  science: "علوم تجريبية",
  math: "رياضيات",
  tech: "تقني رياضي",
  management: "تسيير واقتصاد",
  literature: "آداب وفلسفة",
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
          <h4>التغيرات</h4>
          <p>الدالة <span class="math">exp</span> متزايدة تمامًا على <span class="math">R</span>. ومنه إذا كان <span class="math">a &lt; b</span> فإن <span class="math">e^a &lt; e^b</span>.</p>
          <div class="math-equation">lim x→-∞ e^x = 0 ، lim x→+∞ e^x = +∞</div>
        </section>
        <section class="method-box">
          <strong>طريقة:</strong>
          <p>لحل معادلة أسية نحاول توحيد الأساس أو استعمال اللوغارتم الطبيعي عند الحاجة.</p>
        </section>
      </article>
    `,
    activities: [
      {
        title: "نشاط: نمو بكتيري",
        body: "عدد البكتيريا في تجربة يعطى بالعلاقة N(t)=500e^(0.2t). احسب N(0)، ثم N(5)، واشرح معنى كون الدالة متزايدة.",
        solution: "N(0)=500. و N(5)=500e ≈ 1359. بما أن معامل t موجب والدالة exp متزايدة، فإن عدد البكتيريا يزداد مع الزمن.",
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
};

const views = {
  home: document.getElementById("homeView"),
  learn: document.getElementById("learnView"),
  module: document.getElementById("moduleView"),
  exercises: document.getElementById("exercisesView"),
  solved: document.getElementById("solvedView"),
  bac: document.getElementById("bacView"),
  mockBac: document.getElementById("mockBacView"),
  foreignBac: document.getElementById("foreignBacView"),
  progress: document.getElementById("progressView"),
};

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

function setView(viewName) {
  state.currentView = viewName;
  Object.entries(views).forEach(([name, node]) => node?.classList.toggle("active", name === viewName));
  document.querySelectorAll("[data-view]").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === viewName);
  });
  if (viewName === "progress") renderProgress();
}

function setModule(moduleId) {
  state.currentModuleId = moduleId;
  state.progress.lastModuleId = moduleId;
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

    <section class="dashboard-grid">
      <article class="action-panel">
        <span class="panel-label green">الدرس</span>
        <h3>${module.title}</h3>
        <p>${module.summary}</p>
      </article>
      <article class="action-panel">
        <span class="panel-label blue">نشاطات</span>
        <h3>${module.activities.length} نشاط</h3>
        <p>وضعيات قصيرة قبل التمارين.</p>
      </article>
      <article class="action-panel">
        <span class="panel-label">تمارين</span>
        <h3>${module.exercises.length} تمرين</h3>
        <p>تدريب مباشر على المحور.</p>
      </article>
    </section>

    <section class="lesson-reader">${module.lesson}</section>

    <div class="section-title">
      <h2>النشاطات</h2>
      <span>${module.activities.length} نشاط</span>
    </div>
    <section class="cards-grid">
      ${module.activities.map(renderActivityCard).join("")}
    </section>

    <div class="section-title">
      <h2>تمارين المحور</h2>
      <span>${module.exercises.length} تمرين</span>
    </div>
    <section class="cards-grid">
      ${module.exercises.map((exercise) => renderExerciseCard(module, exercise)).join("")}
    </section>
  `;
}

function renderActivityCard(activity) {
  return `
    <article class="action-panel">
      <span class="panel-label">نشاط</span>
      <h3>${activity.title}</h3>
      <p>${escapeHtml(activity.body)}</p>
      <details>
        <summary>الحل</summary>
        <p>${escapeHtml(activity.solution)}</p>
      </details>
    </article>
  `;
}

function renderExerciseCard(module, exercise) {
  return `
    <article class="action-panel">
      <span class="panel-label blue">${module.title}</span>
      <h3>${exercise.title}</h3>
      <p>${escapeHtml(exercise.statement)}</p>
      <details>
        <summary>الحل</summary>
        <p>${escapeHtml(exercise.solution)}</p>
      </details>
    </article>
  `;
}

function renderExercises() {
  const grid = document.getElementById("exerciseGrid");
  grid.innerHTML = modules
    .flatMap((module) => module.exercises.map((exercise) => renderExerciseCard(module, exercise)))
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
    if (viewButton) setView(viewButton.dataset.view);

    const jumpButton = event.target.closest("[data-view-jump]");
    if (jumpButton) setView(jumpButton.dataset.viewJump);

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
  });

  document.getElementById("continueLessonBtn").addEventListener("click", () => {
    setModule(state.progress.lastModuleId || modules[0].id);
  });

  document.getElementById("backToModulesBtn").addEventListener("click", () => setView("learn"));

  document.getElementById("resetProgressBtn").addEventListener("click", () => {
    state.progress = { completed: [], lastModuleId: modules[0].id };
    saveProgress();
    renderAll();
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

window.addEventListener("load", () => {
  setTimeout(() => document.getElementById("splashScreen")?.classList.add("is-hidden"), 650);
});

bindEvents();
renderAll();
