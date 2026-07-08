const STORAGE_KEY = "ayla-log-exp-progress-v2";

const LANGUAGE_KEY = "ayla-ui-language";

const UI_TRANSLATIONS = {
  ar: {
    "brand.school": "مدرسة إيلا للرياضيات",
    "brand.title": "الدوال الأسية واللوغارتمية",
    "brand.level": "السنة الثالثة ثانوي",
    "language.label": "اللغة",
    "nav.home": "الرئيسية",
    "nav.learn": "التعلم",
    "nav.exercises": "التمارين",
    "nav.ideas": "الأفكار",
    "nav.progress": "تقدمي",
    "nav.bac": "البكالوريا",
    "nav.mockLocal": "تجريبي محلي",
    "nav.mockForeign": "تجريبي أجنبي",
    "nav.more": "المزيد",
    "home.kicker": "ماذا أفعل الآن؟",
    "home.title": "لوحة تقدمك في الدوال الأسية واللوغارتمية",
    "home.subtitle": "تابع مسارك خطوة بخطوة: درس، نشاط، تمرين، ثم بكالوريا.",
    "home.progressLabel": "تقدمك",
    "home.nextAction": "الفعل التالي",
    "home.continueTitle": "ابدأ بأول محور",
    "home.continueSummary": "سيظهر هنا وصف المحور المقترح لك.",
    "home.startNow": "ابدأ الآن",
    "home.modules": "المحاور",
    "home.exercises": "التمارين",
    "home.progressPercent": "نسبة التقدم",
    "home.openLearn": "فتح التعلم",
    "home.openExercises": "فتح التمارين",
    "home.openProgress": "عرض التقدم",
    "learn.title": "محاور التعلم",
    "learn.back": "العودة إلى المحاور",
    "ideas.title": "أبواب أفكار البكالوريا",
    "ideas.subtitle": "رياضي، تقني رياضي، علمي، وتسيير واقتصاد",
    "exercises.title": "التمارين",
    "exercises.subtitle": "ثلاثة أبواب منظمة للتدرج من تمارين الكتاب إلى التعمق",
    "exercises.schoolDoor": "تمارين الكتاب المدرسي",
    "exercises.deepDoor": "تمارين للتعمق",
    "exercises.declicDoor": "تمارين كتاب Declic",
    "exercises.schoolTitle": "تمارين الكتاب المدرسي",
    "exercises.schoolSubtitle": "التمارين الموجودة سابقا في باب التمارين",
    "exercises.deepTitle": "تمارين للتعمق",
    "exercises.deepSubtitle": "مساحة مخصصة لتمارين إضافية أعلى مستوى",
    "exercises.declicTitle": "تمارين كتاب Declic",
    "exercises.declicSubtitle": "مساحة مخصصة لتمارين كتاب Declic",
    "solved.title": "تمارين محلولة",
    "solved.subtitle": "حلول منهجية قابلة للمراجعة",
    "bac.title": "البكالوريا",
    "bac.subtitle": "تدريب موجه لأبواب البكالوريا",
    "bac.algeria": "بكالوريا الجزائر",
    "bac.foreign": "بكالوريا أجنبي",
    "bac.mock": "بكالوريا تجريبي",
    "bac.mockForeignTitle": "بكالوريا تجريبي أجنبي",
    "bac.mockForeignDesc": "باب مستقل للمواضيع التجريبية الأجنبية في الدوال الأسية واللوغارتمية، مع تركيز على صيغ طرح مختلفة ومستويات تدريب أوسع.",
    "bac.openLearn": "فتح محاور التعلم",
    "bac.mockForeignModels": "نماذج أجنبية",
    "bac.mockForeignTopics": "مواضيع تجريبية خارجية",
    "bac.mockForeignTopicsDesc": "سيضاف هنا محتوى البكالوريا التجريبية الأجنبية مع تنظيم خاص حسب نوع الموضوع والمحور.",
    "bac.methodology": "منهجية",
    "bac.solutionComparison": "مقارنة طرق الحل",
    "bac.solutionComparisonDesc": "مساحة لربط أسئلة النماذج الأجنبية بطريقة حل مناسبة لتلميذ البكالوريا.",
    "bac.challenge": "تحدي",
    "bac.advancedTraining": "تدريب متقدم",
    "bac.advancedTrainingDesc": "تمارين تجريبية بمستوى أعلى بعد إتقان أساسيات الدوال والنهايات والاشتقاق.",
    "bac.foreignHeroTitle": "بكالوريا أجنبي",
    "bac.foreignHeroDesc": "تدريب على نماذج وأسئلة خارجية قريبة من محور الدوال الأسية واللوغارتمية مع مقارنة طرق الحل.",
    "bac.filter.country": "البلد",
    "bac.filter.allCountries": "كل البلدان",
    "bac.filter.france": "فرنسا",
    "bac.filter.lebanon": "لبنان",
    "bac.filter.morocco": "المغرب",
    "bac.filter.tunisia": "تونس",
    "bac.filter.branch": "الشعبة",
    "bac.filter.allBranches": "كل الشعب",
    "bac.filter.math": "رياضيات",
    "bac.filter.science": "علمي",
    "bac.filter.year": "السنة",
    "bac.filter.allYears": "كل السنوات",
    "bac.noMatch": "لا توجد مواضيع مطابقة",
    "bac.changeFilters": "غيّر البلد أو الشعبة أو السنة لعرض مواضيع أخرى.",
    "bac.availableBranches": "المواضيع لهذه السنة متوفرة في:",
    "progress.title": "تقدمي",
    "progress.reset": "تصفير التقدم",
    "ui.reviewModule": "مراجعة المحور",
    "ui.startModule": "ابدأ هذا المحور",
    "ui.openModule": "فتح المحور",
    "ui.completedModule": "✓ محور مكتمل",
    "ui.markComplete": "تعليم كمكتمل",
    "ui.activities": "النشاطات",
    "ui.lesson": "الدرس",
    "ui.solvedExercises": "تمارين محلولة",
    "ui.exercises": "التمارين",
    "ui.moduleExercises": "تمارين المحور",
    "ui.bacExercises": "تمارين البكالوريا",
    "ui.challengeExercises": "تمارين للتحدي",
    "ui.showSolution": "إظهار الحل",
    "ui.hideSolution": "إخفاء الحل",
    "ui.activity": "نشاط",
    "ui.solvedExercise": "تمرين محلول",
    "ui.noExercises": "لا توجد تمارين حاليا",
    "ui.noExercisesDesc": "تم تفريغ هذا الباب من التمارين الموجودة سابقا.",
    "ui.deepLabel": "تعمق",
    "ui.deepPlaceholderTitle": "تمارين للتعمق",
    "ui.deepPlaceholderDesc": "سيضاف هنا باب خاص بتمارين أعمق بعد تمارين الكتاب المدرسي.",
    "ui.declicExercise": "تمرين",
    "ui.confirmReset": "هل أنت متأكد من تصفير تقدمك؟ لا يمكن التراجع عن هذا الإجراء.",
    "unit.modules": "محاور",
    "unit.activity": "نشاط",
    "unit.exercise": "تمرين",
    "unit.solvedExercise": "تمرين محلول",
    "unit.bacTopic": "موضوع بكالوريا",
    "unit.challenge": "تحدي"
  },
  fr: {
    "brand.school": "École Ayla de Mathématiques",
    "brand.title": "Fonctions exponentielles et logarithmiques",
    "brand.level": "Troisième année secondaire",
    "language.label": "Langue",
    "nav.home": "Accueil",
    "nav.learn": "Apprendre",
    "nav.exercises": "Exercices",
    "nav.ideas": "Idées",
    "nav.progress": "Progression",
    "nav.bac": "Baccalauréat",
    "nav.mockLocal": "Essai local",
    "nav.mockForeign": "Essai étranger",
    "nav.more": "Plus",
    "home.kicker": "Que faire maintenant ?",
    "home.title": "Votre progression en exponentielles et logarithmes",
    "home.subtitle": "Suivez votre parcours pas à pas : cours, activité, exercice, puis bac.",
    "home.progressLabel": "Progression",
    "home.nextAction": "Prochaine action",
    "home.continueTitle": "Commencez par le premier module",
    "home.continueSummary": "La description du module recommandé apparaîtra ici.",
    "home.startNow": "Commencer",
    "home.modules": "Modules",
    "home.exercises": "Exercices",
    "home.progressPercent": "Progression",
    "home.openLearn": "Ouvrir l'apprentissage",
    "home.openExercises": "Ouvrir les exercices",
    "home.openProgress": "Voir la progression",
    "learn.title": "Modules d'apprentissage",
    "learn.back": "Retour aux modules",
    "ideas.title": "Idées du baccalauréat",
    "ideas.subtitle": "Maths, technique maths, sciences et gestion-économie",
    "exercises.title": "Exercices",
    "exercises.subtitle": "Trois portes organisées pour progresser du manuel vers l'approfondissement",
    "exercises.schoolDoor": "Exercices du manuel",
    "exercises.deepDoor": "Exercices d'approfondissement",
    "exercises.declicDoor": "Exercices Declic",
    "exercises.schoolTitle": "Exercices du manuel",
    "exercises.schoolSubtitle": "Les exercices déjà présents dans l'ancien espace exercices",
    "exercises.deepTitle": "Exercices d'approfondissement",
    "exercises.deepSubtitle": "Espace réservé aux exercices de niveau avancé",
    "exercises.declicTitle": "Exercices du livre Declic",
    "exercises.declicSubtitle": "Espace réservé aux exercices du livre Declic",
    "solved.title": "Exercices résolus",
    "solved.subtitle": "Solutions méthodiques à réviser",
    "bac.title": "Baccalauréat",
    "bac.subtitle": "Entraînement ciblé pour les sujets de bac",
    "bac.algeria": "Bac Algérie",
    "bac.foreign": "Bac étranger",
    "bac.mock": "Bac d'essai",
    "bac.mockForeignTitle": "Bac d'essai étranger",
    "bac.mockForeignDesc": "Espace réservé aux sujets d'essai étrangers sur les fonctions exponentielles et logarithmiques.",
    "bac.openLearn": "Ouvrir les modules",
    "bac.mockForeignModels": "Modèles étrangers",
    "bac.mockForeignTopics": "Sujets d'essai étrangers",
    "bac.mockForeignTopicsDesc": "Le contenu des bacs d'essai étrangers sera organisé ici par type de sujet et par thème.",
    "bac.methodology": "Méthode",
    "bac.solutionComparison": "Comparer les méthodes",
    "bac.solutionComparisonDesc": "Un espace pour relier les questions étrangères à une méthode adaptée aux élèves du bac.",
    "bac.challenge": "Défi",
    "bac.advancedTraining": "Entraînement avancé",
    "bac.advancedTrainingDesc": "Exercices d'essai plus exigeants après les bases des fonctions, limites et dérivées.",
    "bac.foreignHeroTitle": "Bac étranger",
    "bac.foreignHeroDesc": "Entraînement sur des sujets étrangers proches du chapitre des exponentielles et logarithmes.",
    "bac.filter.country": "Pays",
    "bac.filter.allCountries": "Tous les pays",
    "bac.filter.france": "France",
    "bac.filter.lebanon": "Liban",
    "bac.filter.morocco": "Maroc",
    "bac.filter.tunisia": "Tunisie",
    "bac.filter.branch": "Filière",
    "bac.filter.allBranches": "Toutes les filières",
    "bac.filter.math": "Mathématiques",
    "bac.filter.science": "Sciences",
    "bac.filter.year": "Année",
    "bac.filter.allYears": "Toutes les années",
    "bac.noMatch": "Aucun sujet correspondant",
    "bac.changeFilters": "Changez le pays, la filière ou l'année pour afficher d'autres sujets.",
    "bac.availableBranches": "Les sujets de cette année sont disponibles en :",
    "progress.title": "Ma progression",
    "progress.reset": "Réinitialiser",
    "ui.reviewModule": "Réviser le module",
    "ui.startModule": "Commencer ce module",
    "ui.openModule": "Ouvrir le module",
    "ui.completedModule": "✓ Module terminé",
    "ui.markComplete": "Marquer comme terminé",
    "ui.activities": "Activités",
    "ui.lesson": "Cours",
    "ui.solvedExercises": "Exercices résolus",
    "ui.exercises": "Exercices",
    "ui.moduleExercises": "Exercices du module",
    "ui.bacExercises": "Exercices de bac",
    "ui.challengeExercises": "Exercices défi",
    "ui.showSolution": "Afficher la solution",
    "ui.hideSolution": "Masquer la solution",
    "ui.activity": "Activité",
    "ui.solvedExercise": "Exercice résolu",
    "ui.noExercises": "Aucun exercice pour le moment",
    "ui.noExercisesDesc": "Cette porte ne contient pas encore d'exercices.",
    "ui.deepLabel": "Approfondissement",
    "ui.deepPlaceholderTitle": "Exercices d'approfondissement",
    "ui.deepPlaceholderDesc": "Des exercices plus avancés seront ajoutés ici après ceux du manuel.",
    "ui.declicExercise": "Exercice",
    "ui.confirmReset": "Voulez-vous vraiment réinitialiser votre progression ? Cette action est irréversible.",
    "unit.modules": "modules",
    "unit.activity": "activité",
    "unit.exercise": "exercice",
    "unit.solvedExercise": "exercice résolu",
    "unit.bacTopic": "sujet de bac",
    "unit.challenge": "défi"
  },
  en: {
    "brand.school": "Ayla Math School",
    "brand.title": "Exponential and Logarithmic Functions",
    "brand.level": "Third year secondary",
    "language.label": "Language",
    "nav.home": "Home",
    "nav.learn": "Learn",
    "nav.exercises": "Exercises",
    "nav.ideas": "Ideas",
    "nav.progress": "Progress",
    "nav.bac": "Baccalaureate",
    "nav.mockLocal": "Local mock",
    "nav.mockForeign": "Foreign mock",
    "nav.more": "More",
    "home.kicker": "What now?",
    "home.title": "Your progress in exponentials and logarithms",
    "home.subtitle": "Follow your path step by step: lesson, activity, exercise, then bac.",
    "home.progressLabel": "Progress",
    "home.nextAction": "Next action",
    "home.continueTitle": "Start with the first module",
    "home.continueSummary": "The recommended module description will appear here.",
    "home.startNow": "Start now",
    "home.modules": "Modules",
    "home.exercises": "Exercises",
    "home.progressPercent": "Progress",
    "home.openLearn": "Open learning",
    "home.openExercises": "Open exercises",
    "home.openProgress": "View progress",
    "learn.title": "Learning modules",
    "learn.back": "Back to modules",
    "ideas.title": "Bac idea doors",
    "ideas.subtitle": "Math, technical math, science, management and economics",
    "exercises.title": "Exercises",
    "exercises.subtitle": "Three organized doors from textbook practice to deeper work",
    "exercises.schoolDoor": "Textbook exercises",
    "exercises.deepDoor": "Deep practice",
    "exercises.declicDoor": "Declic exercises",
    "exercises.schoolTitle": "Textbook exercises",
    "exercises.schoolSubtitle": "The exercises that were previously in the exercises area",
    "exercises.deepTitle": "Deep practice",
    "exercises.deepSubtitle": "A space for more advanced exercises",
    "exercises.declicTitle": "Declic book exercises",
    "exercises.declicSubtitle": "A space for Declic book exercises",
    "solved.title": "Solved exercises",
    "solved.subtitle": "Methodical solutions for revision",
    "bac.title": "Baccalaureate",
    "bac.subtitle": "Focused practice for bac-style questions",
    "bac.algeria": "Algeria bac",
    "bac.foreign": "Foreign bac",
    "bac.mock": "Mock bac",
    "bac.mockForeignTitle": "Foreign mock bac",
    "bac.mockForeignDesc": "A separate area for foreign mock topics on exponential and logarithmic functions.",
    "bac.openLearn": "Open learning modules",
    "bac.mockForeignModels": "Foreign models",
    "bac.mockForeignTopics": "Foreign mock topics",
    "bac.mockForeignTopicsDesc": "Foreign mock bac content will be organized here by topic type and theme.",
    "bac.methodology": "Methodology",
    "bac.solutionComparison": "Compare solution methods",
    "bac.solutionComparisonDesc": "A space to connect foreign questions with a method suitable for bac students.",
    "bac.challenge": "Challenge",
    "bac.advancedTraining": "Advanced practice",
    "bac.advancedTrainingDesc": "Higher-level mock exercises after mastering functions, limits, and derivatives.",
    "bac.foreignHeroTitle": "Foreign bac",
    "bac.foreignHeroDesc": "Practice with foreign topics close to exponential and logarithmic functions.",
    "bac.filter.country": "Country",
    "bac.filter.allCountries": "All countries",
    "bac.filter.france": "France",
    "bac.filter.lebanon": "Lebanon",
    "bac.filter.morocco": "Morocco",
    "bac.filter.tunisia": "Tunisia",
    "bac.filter.branch": "Stream",
    "bac.filter.allBranches": "All streams",
    "bac.filter.math": "Mathematics",
    "bac.filter.science": "Science",
    "bac.filter.year": "Year",
    "bac.filter.allYears": "All years",
    "bac.noMatch": "No matching topics",
    "bac.changeFilters": "Change the country, stream, or year to show other topics.",
    "bac.availableBranches": "Topics for this year are available in:",
    "progress.title": "My progress",
    "progress.reset": "Reset progress",
    "ui.reviewModule": "Review module",
    "ui.startModule": "Start this module",
    "ui.openModule": "Open module",
    "ui.completedModule": "✓ Module completed",
    "ui.markComplete": "Mark complete",
    "ui.activities": "Activities",
    "ui.lesson": "Lesson",
    "ui.solvedExercises": "Solved exercises",
    "ui.exercises": "Exercises",
    "ui.moduleExercises": "Module exercises",
    "ui.bacExercises": "Bac exercises",
    "ui.challengeExercises": "Challenge exercises",
    "ui.showSolution": "Show solution",
    "ui.hideSolution": "Hide solution",
    "ui.activity": "Activity",
    "ui.solvedExercise": "Solved exercise",
    "ui.noExercises": "No exercises yet",
    "ui.noExercisesDesc": "This door does not contain exercises yet.",
    "ui.deepLabel": "Deep practice",
    "ui.deepPlaceholderTitle": "Deep practice exercises",
    "ui.deepPlaceholderDesc": "More advanced exercises will be added here after the textbook exercises.",
    "ui.declicExercise": "Exercise",
    "ui.confirmReset": "Are you sure you want to reset your progress? This cannot be undone.",
    "unit.modules": "modules",
    "unit.activity": "activity",
    "unit.exercise": "exercise",
    "unit.solvedExercise": "solved exercise",
    "unit.bacTopic": "bac topic",
    "unit.challenge": "challenge"
  }
};

function getSavedLanguage() {
  const requested = new URLSearchParams(window.location.search).get("lang");
  if (UI_TRANSLATIONS[requested]) return requested;
  const saved = localStorage.getItem(LANGUAGE_KEY);
  return UI_TRANSLATIONS[saved] ? saved : "ar";
}

function t(key) {
  const lang = state?.language || getSavedLanguage();
  return UI_TRANSLATIONS[lang]?.[key] || UI_TRANSLATIONS.ar[key] || key;
}

function applyUiTranslations(root = document) {
  root.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
}

function setLanguage(language, options = {}) {
  if (!UI_TRANSLATIONS[language]) return;
  if (state) state.language = language;
  localStorage.setItem(LANGUAGE_KEY, language);
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  document.body?.classList.toggle("is-ltr", language !== "ar");
  const selector = document.getElementById("languageSelect");
  if (selector) selector.value = language;
  syncBacFrameLanguage(language);
  if (options.render !== false) renderAll();
  applyUiTranslations();
  applyForeignBacFilters();
}
const BAC_BRANCH_LABELS = {
  all: "الكل",
  science: "علوم تجريبية",
  math: "رياضيات",
  tech: "تقني رياضي",
  management: "تسيير واقتصاد",
};

const LIMIT_CHALLENGE_EXERCISES = [
  {
    title: "تحدي 1: نهاية مركبة عند الصفر",
    statementHtml: `<div class="math-equation">lim(x→0) (x e^x - ln(1+x)) / x²</div>`,
    solutionHtml: `
      <section class="activity-sheet">
        <div class="method-box">
          <strong>الفكرة:</strong>
          <p>نفكك البسط بإضافة وطرح <span class="math">x</span> حتى نحصل على نهايتين مرجعيتين في برنامج البكالوريا.</p>
        </div>
        <div class="math-equation">(x e^x - ln(1+x))/x² = (x e^x - x + x - ln(1+x))/x²</div>
        <div class="math-equation">= x(e^x-1)/x² + (x-ln(1+x))/x²</div>
        <div class="math-equation">= (e^x-1)/x + (x-ln(1+x))/x²</div>
        <p>بالنسبة للحد الأول نستعمل النهاية الشهيرة:</p>
        <div class="math-equation">lim(x→0) (e^x-1)/x = 1</div>
        <p>يبقى حساب النهاية الثانية. نكتب:</p>
        <div class="math-equation integral-formula"><span>ln(1+x)=</span><span class="pretty-integral"><span class="pretty-int-symbol">∫</span><span class="pretty-int-upper">x</span><span class="pretty-int-lower">0</span></span><span class="pretty-frac"><span>1</span><span>1+t</span></span><span>dt</span></div>
        <div class="math-equation integral-formula"><span>x=</span><span class="pretty-integral"><span class="pretty-int-symbol">∫</span><span class="pretty-int-upper">x</span><span class="pretty-int-lower">0</span></span><span>1</span><span>dt</span></div>
        <p>إذن:</p>
        <div class="math-equation integral-formula integral-formula-wide"><span>x-ln(1+x)=</span><span class="pretty-integral"><span class="pretty-int-symbol">∫</span><span class="pretty-int-upper">x</span><span class="pretty-int-lower">0</span></span><span>(1-</span><span class="pretty-frac"><span>1</span><span>1+t</span></span><span>)dt</span><span>=</span><span class="pretty-integral"><span class="pretty-int-symbol">∫</span><span class="pretty-int-upper">x</span><span class="pretty-int-lower">0</span></span><span class="pretty-frac"><span>t</span><span>1+t</span></span><span>dt</span></div>
        <p>من أجل <span class="math">x&gt;0</span> وقريب من الصفر، إذا كان <span class="math">0≤t≤x</span> فإن:</p>
        <div class="math-equation">1/(1+x) ≤ 1/(1+t) ≤ 1</div>
        <p>وبالضرب في <span class="math">t≥0</span> نحصل على:</p>
        <div class="math-equation">t/(1+x) ≤ t/(1+t) ≤ t</div>
        <p>بالتكامل من <span class="math">0</span> إلى <span class="math">x</span>:</p>
        <div class="math-equation">x²/(2(1+x)) ≤ x-ln(1+x) ≤ x²/2</div>
        <p>وبالقسمة على <span class="math">x²&gt;0</span>:</p>
        <div class="math-equation">1/(2(1+x)) ≤ (x-ln(1+x))/x² ≤ 1/2</div>
        <p>عندما يؤول <span class="math">x</span> إلى <span class="math">0</span> يؤول الطرفان إلى <span class="math">1/2</span>، ومنه حسب مبرهنة الحصر:</p>
        <div class="math-equation">lim(x→0) (x-ln(1+x))/x² = 1/2</div>
        <p>نعود إلى التفكيك الأول:</p>
        <div class="math-equation">lim(x→0) (x e^x - ln(1+x))/x² = 1 + 1/2 = 3/2</div>
      </section>
    `,
  },
  {
    title: "تحدي 2: نهاية لوغارتمية عند المالانهاية",
    statementHtml: `<div class="math-equation">lim(x→+∞) x(1 - x ln(1+1/x))</div>`,
    solutionHtml: `
      <section class="activity-sheet">
        <div class="method-box">
          <strong>الفكرة:</strong>
          <p>نحوّل النهاية عند <span class="math">+∞</span> إلى نهاية عند الصفر حتى تظهر النهاية المعروفة المرتبطة بـ <span class="math">ln(1+u)</span>.</p>
        </div>
        <p>نضع:</p>
        <div class="math-equation">u=1/x</div>
        <p>عندما <span class="math">x→+∞</span> فإن <span class="math">u→0+</span> و <span class="math">x=1/u</span>. إذن:</p>
        <div class="math-equation">x(1 - x ln(1+1/x)) = (1/u)(1 - ln(1+u)/u)</div>
        <div class="math-equation">= (u-ln(1+u))/u²</div>
        <p>نحسب النهاية:</p>
        <div class="math-equation">lim(u→0+) (u-ln(1+u))/u²</div>
        <p>نكتب باستعمال التكامل:</p>
        <div class="math-equation integral-formula"><span>ln(1+u)=</span><span class="pretty-integral"><span class="pretty-int-symbol">∫</span><span class="pretty-int-upper">u</span><span class="pretty-int-lower">0</span></span><span class="pretty-frac"><span>1</span><span>1+t</span></span><span>dt</span></div>
        <div class="math-equation integral-formula"><span>u=</span><span class="pretty-integral"><span class="pretty-int-symbol">∫</span><span class="pretty-int-upper">u</span><span class="pretty-int-lower">0</span></span><span>1</span><span>dt</span></div>
        <p>إذن:</p>
        <div class="math-equation integral-formula integral-formula-wide"><span>u-ln(1+u)=</span><span class="pretty-integral"><span class="pretty-int-symbol">∫</span><span class="pretty-int-upper">u</span><span class="pretty-int-lower">0</span></span><span class="pretty-frac"><span>t</span><span>1+t</span></span><span>dt</span></div>
        <p>من أجل <span class="math">u&gt;0</span> وقريب من الصفر، إذا كان <span class="math">0≤t≤u</span> فإن:</p>
        <div class="math-equation">t/(1+u) ≤ t/(1+t) ≤ t</div>
        <p>بالتكامل من <span class="math">0</span> إلى <span class="math">u</span> نحصل على:</p>
        <div class="math-equation">u²/(2(1+u)) ≤ u-ln(1+u) ≤ u²/2</div>
        <p>وبالقسمة على <span class="math">u²&gt;0</span>:</p>
        <div class="math-equation">1/(2(1+u)) ≤ (u-ln(1+u))/u² ≤ 1/2</div>
        <p>عندما <span class="math">u→0+</span> يؤول الطرفان إلى <span class="math">1/2</span>، ومنه حسب مبرهنة الحصر:</p>
        <div class="math-equation">lim(u→0+) (u-ln(1+u))/u² = 1/2</div>
        <p>إذن النهاية المطلوبة هي:</p>
        <div class="math-equation">lim(x→+∞) x(1 - x ln(1+1/x)) = 1/2</div>
      </section>
    `,
  },
  {
    title: "تحدي 3: نهاية أسية عند المالانهاية",
    statementHtml: `<div class="math-equation">lim(x→+∞) ((x+1)/(x-1))^x</div>`,
    solutionHtml: `
      <section class="activity-sheet">
        <div class="method-box">
          <strong>الفكرة:</strong>
          <p>عندما تكون النهاية من الشكل <span class="math">1^∞</span> نستعمل اللوغارتم لتحويل الأس إلى جداء.</p>
        </div>
        <p>نفرض أن النهاية هي <span class="math">L</span>. ندرس لوغارتمها:</p>
        <div class="math-equation">ln(L)=lim(x→+∞) x ln((x+1)/(x-1))</div>
        <p>نكتب الكسر على شكل قريب من <span class="math">1</span>:</p>
        <div class="math-equation">(x+1)/(x-1)=1+2/(x-1)</div>
        <p>إذن:</p>
        <div class="math-equation">ln(L)=lim(x→+∞) x ln(1+2/(x-1))</div>
        <p>نضع:</p>
        <div class="math-equation">u=2/(x-1)</div>
        <p>عندما <span class="math">x→+∞</span> فإن <span class="math">u→0+</span>، ومن العلاقة <span class="math">u=2/(x-1)</span> نجد:</p>
        <div class="math-equation">x=1+2/u</div>
        <p>وبالتالي:</p>
        <div class="math-equation">x ln(1+2/(x-1)) = (1+2/u) ln(1+u)</div>
        <div class="math-equation">= ln(1+u) + 2 ln(1+u)/u</div>
        <p>عند <span class="math">u→0+</span> لدينا <span class="math">ln(1+u)→0</span> و النهاية الشهيرة:</p>
        <div class="math-equation">lim(u→0) ln(1+u)/u = 1</div>
        <p>إذن:</p>
        <div class="math-equation">ln(L)=0+2×1=2</div>
        <p>ومنه:</p>
        <div class="math-equation">L=e²</div>
        <p>إذن النهاية المطلوبة هي:</p>
        <div class="math-equation">lim(x→+∞) ((x+1)/(x-1))^x = e²</div>
      </section>
    `,
  },
  {
    title: "تحدي 4: نهاية لوغارتمية مثلثية",
    statementHtml: `<div class="math-equation">lim(x→0) ln(cos x) / x²</div>`,
    solutionHtml: `
      <section class="activity-sheet">
        <div class="method-box">
          <strong>الفكرة:</strong>
          <p>نجعل داخل اللوغارتم قريبا من <span class="math">1</span>، ثم نستعمل النهاية الشهيرة <span class="math">ln(1+u)/u→1</span>.</p>
        </div>
        <p>نكتب:</p>
        <div class="math-equation">ln(cos x)/x² = [ln(cos x)/(cos x-1)] × [(cos x-1)/x²]</div>
        <p>بالنسبة للعامل الأول نضع:</p>
        <div class="math-equation">u=cos x-1</div>
        <p>عندما <span class="math">x→0</span> فإن <span class="math">u→0</span>، و <span class="math">cos x=1+u</span>، لذلك:</p>
        <div class="math-equation">ln(cos x)/(cos x-1)=ln(1+u)/u → 1</div>
        <p>وبالنسبة للعامل الثاني نستعمل النهاية المثلثية الشهيرة:</p>
        <div class="math-equation">lim(x→0) (cos x-1)/x² = -1/2</div>
        <p>إذن:</p>
        <div class="math-equation">lim(x→0) ln(cos x)/x² = 1 × (-1/2)</div>
        <p>النهاية المطلوبة هي:</p>
        <div class="math-equation">-1/2</div>
      </section>
    `,
  },
  {
    title: "تحدي 5: أسية ومثلثية عند المالانهاية",
    statementHtml: `<div class="math-equation">lim(x→+∞) x(e^(1/x) - cos(1/sqrt(x)))</div>`,
    solutionHtml: `
      <section class="activity-sheet">
        <div class="method-box">
          <strong>الفكرة:</strong>
          <p>نحوّل النهاية عند <span class="math">+∞</span> إلى نهاية عند الصفر باختيار متغير يجعل <span class="math">1/x</span> و <span class="math">1/sqrt(x)</span> بسيطين.</p>
        </div>
        <p>نضع:</p>
        <div class="math-equation">t=1/sqrt(x)</div>
        <p>عندما <span class="math">x→+∞</span> فإن <span class="math">t→0+</span>، كما أن:</p>
        <div class="math-equation">x=1/t² و 1/x=t²</div>
        <p>إذن تصبح النهاية:</p>
        <div class="math-equation">lim(t→0+) (e^(t²)-cos(t))/t²</div>
        <p>نفصل البسط بإضافة وطرح <span class="math">1</span>:</p>
        <div class="math-equation">(e^(t²)-cos(t))/t² = (e^(t²)-1)/t² + (1-cos(t))/t²</div>
        <p>بالنسبة للحد الأول، نضع <span class="math">u=t²</span>، فنحصل على:</p>
        <div class="math-equation">lim(t→0+) (e^(t²)-1)/t² = lim(u→0+) (e^u-1)/u = 1</div>
        <p>وبالنسبة للحد الثاني نستعمل النهاية المثلثية الشهيرة:</p>
        <div class="math-equation">lim(t→0) (1-cos(t))/t² = 1/2</div>
        <p>إذن النهاية المطلوبة هي:</p>
        <div class="math-equation">1 + 1/2 = 3/2</div>
      </section>
    `,
  },
  {
    title: "تحدي 6: أسية على لوغارتم",
    statementHtml: `<div class="math-equation">lim(x→0) (e^(2x)-1) / ln(1+3x)</div>`,
    solutionHtml: `
      <section class="activity-sheet">
        <div class="method-box">
          <strong>الفكرة:</strong>
          <p>نحوّل البسط والمقام إلى النهايات الشهيرة للدالة الأسية واللوغارتم.</p>
        </div>
        <p>نكتب:</p>
        <div class="math-equation">(e^(2x)-1)/ln(1+3x) = [(e^(2x)-1)/(2x)] × [2x/3x] × [3x/ln(1+3x)]</div>
        <p>عندما <span class="math">x→0</span> لدينا:</p>
        <div class="math-equation">lim(x→0) (e^(2x)-1)/(2x) = 1</div>
        <p>لأننا نضع <span class="math">u=2x</span> فتؤول إلى <span class="math">(e^u-1)/u</span>.</p>
        <p>وكذلك:</p>
        <div class="math-equation">lim(x→0) ln(1+3x)/(3x) = 1</div>
        <p>إذن:</p>
        <div class="math-equation">lim(x→0) 3x/ln(1+3x) = 1</div>
        <p>وبالتالي النهاية المطلوبة هي:</p>
        <div class="math-equation">1 × 2/3 × 1 = 2/3</div>
      </section>
    `,
  },
  {
    title: "تحدي 7: نهاية عند الواحد",
    statementHtml: `<div class="math-equation">lim(x→1) (e^(x-1)-1) / ln(x)</div>`,
    solutionHtml: `
      <section class="activity-sheet">
        <div class="method-box">
          <strong>الفكرة:</strong>
          <p>نحوّل النهاية عند <span class="math">1</span> إلى نهاية عند الصفر باستعمال <span class="math">h=x-1</span>.</p>
        </div>
        <p>نضع:</p>
        <div class="math-equation">h=x-1</div>
        <p>عندما <span class="math">x→1</span> فإن <span class="math">h→0</span>، كما أن <span class="math">x=1+h</span>. إذن:</p>
        <div class="math-equation">(e^(x-1)-1)/ln(x) = (e^h-1)/ln(1+h)</div>
        <p>نضرب ونقسم على <span class="math">h</span>:</p>
        <div class="math-equation">(e^h-1)/ln(1+h) = [(e^h-1)/h] × [h/ln(1+h)]</div>
        <p>لدينا النهايتان الشهيرتان:</p>
        <div class="math-equation">lim(h→0) (e^h-1)/h = 1</div>
        <div class="math-equation">lim(h→0) ln(1+h)/h = 1</div>
        <p>ومنه:</p>
        <div class="math-equation">lim(h→0) h/ln(1+h) = 1</div>
        <p>إذن النهاية المطلوبة هي:</p>
        <div class="math-equation">1 × 1 = 1</div>
      </section>
    `,
  },
  {
    title: "تحدي 8: لوغارتم أسية عند المالانهاية",
    statementHtml: `<div class="math-equation">lim(x→+∞) ln(1+e^x) / x²</div>`,
    solutionHtml: `
      <section class="activity-sheet">
        <div class="method-box">
          <strong>الفكرة:</strong>
          <p>نخرج <span class="math">e^x</span> من داخل اللوغارتم لنرى أن البسط يكبر مثل <span class="math">x</span> فقط.</p>
        </div>
        <p>عندما <span class="math">x→+∞</span> نكتب:</p>
        <div class="math-equation">1+e^x = e^x(1+e^(-x))</div>
        <p>إذن باستعمال خاصية اللوغارتم:</p>
        <div class="math-equation">ln(1+e^x)=ln(e^x)+ln(1+e^(-x))</div>
        <div class="math-equation">ln(1+e^x)=x+ln(1+e^(-x))</div>
        <p>وبالتالي:</p>
        <div class="math-equation">ln(1+e^x)/x² = 1/x + ln(1+e^(-x))/x²</div>
        <p>لدينا <span class="math">e^(-x)→0</span>، ومنه <span class="math">ln(1+e^(-x))→0</span>، لذلك:</p>
        <div class="math-equation">lim(x→+∞) 1/x = 0</div>
        <div class="math-equation">lim(x→+∞) ln(1+e^(-x))/x² = 0</div>
        <p>إذن النهاية المطلوبة هي:</p>
        <div class="math-equation">0</div>
      </section>
    `,
  },
  {
    title: "تحدي 9: لوغارتم أسية عند الصفر يمينا",
    statementHtml: `<div class="math-equation">lim(x→0+) x ln(e^(1/x)-1)</div>`,
    solutionHtml: `
      <section class="activity-sheet">
        <div class="method-box">
          <strong>الفكرة:</strong>
          <p>نحوّل النهاية عند <span class="math">0+</span> إلى نهاية عند <span class="math">+∞</span> باستعمال <span class="math">t=1/x</span>.</p>
        </div>
        <p>نضع:</p>
        <div class="math-equation">t=1/x</div>
        <p>عندما <span class="math">x→0+</span> فإن <span class="math">t→+∞</span>، و <span class="math">x=1/t</span>. إذن:</p>
        <div class="math-equation">x ln(e^(1/x)-1)=ln(e^t-1)/t</div>
        <p>نفكك داخل اللوغارتم:</p>
        <div class="math-equation">e^t-1=e^t(1-e^(-t))</div>
        <p>ومنه:</p>
        <div class="math-equation">ln(e^t-1)=ln(e^t)+ln(1-e^(-t))</div>
        <div class="math-equation">ln(e^t-1)=t+ln(1-e^(-t))</div>
        <p>إذن:</p>
        <div class="math-equation">ln(e^t-1)/t = 1 + ln(1-e^(-t))/t</div>
        <p>عندما <span class="math">t→+∞</span> لدينا <span class="math">e^(-t)→0</span>، وبالتالي <span class="math">ln(1-e^(-t))→0</span>. لذلك:</p>
        <div class="math-equation">lim(t→+∞) ln(1-e^(-t))/t = 0</div>
        <p>إذن النهاية المطلوبة هي:</p>
        <div class="math-equation">1</div>
      </section>
    `,
  },
  {
    title: "تحدي 10: لوغارتم عند المالانهاية",
    statementHtml: `<div class="math-equation">lim(x→+∞) x ln((x+2)/x)</div>`,
    solutionHtml: `
      <section class="activity-sheet">
        <div class="method-box">
          <strong>الفكرة:</strong>
          <p>نحوّل الكسر داخل اللوغارتم إلى <span class="math">1+u</span> ثم نستعمل النهاية الشهيرة <span class="math">ln(1+u)/u→1</span>.</p>
        </div>
        <p>نكتب:</p>
        <div class="math-equation">(x+2)/x = 1+2/x</div>
        <p>نضع <span class="math">u=2/x</span>. عندما <span class="math">x→+∞</span> فإن <span class="math">u→0+</span> و <span class="math">x=2/u</span>.</p>
        <div class="math-equation">x ln((x+2)/x) = (2/u)ln(1+u)</div>
        <div class="math-equation">= 2 ln(1+u)/u</div>
        <p>وبما أن:</p>
        <div class="math-equation">lim(u→0) ln(1+u)/u = 1</div>
        <p>فإن النهاية المطلوبة هي:</p>
        <div class="math-equation">2</div>
      </section>
    `,
  },
  {
    title: "تحدي 11: أسية ولوغارتم عند الصفر",
    statementHtml: `<div class="math-equation">lim(x→0) (e^(x²)-1) / (x ln(1+2x))</div>`,
    solutionHtml: `
      <section class="activity-sheet">
        <div class="method-box">
          <strong>الفكرة:</strong>
          <p>نفصل التعبير إلى نهايتين شهيرتين: واحدة للأسية وواحدة للوغارتم.</p>
        </div>
        <p>نكتب:</p>
        <div class="math-equation">(e^(x²)-1)/(x ln(1+2x)) = [(e^(x²)-1)/x²] × [x/ln(1+2x)]</div>
        <p>بالنسبة للعامل الأول نضع <span class="math">u=x²</span>، فنحصل على:</p>
        <div class="math-equation">lim(x→0) (e^(x²)-1)/x² = lim(u→0) (e^u-1)/u = 1</div>
        <p>وبالنسبة للعامل الثاني:</p>
        <div class="math-equation">lim(x→0) ln(1+2x)/(2x) = 1</div>
        <p>إذن <span class="math">ln(1+2x)~2x</span>، ومنه:</p>
        <div class="math-equation">lim(x→0) x/ln(1+2x) = 1/2</div>
        <p>إذن النهاية المطلوبة هي:</p>
        <div class="math-equation">1 × 1/2 = 1/2</div>
      </section>
    `,
  },
  {
    title: "تحدي 12: فرق لوغارتمي عند المالانهاية",
    statementHtml: `<div class="math-equation">lim(x→+∞) (x - ln(e^x + x))</div>`,
    solutionHtml: `
      <section class="activity-sheet">
        <div class="method-box">
          <strong>الفكرة:</strong>
          <p>نخرج <span class="math">e^x</span> من داخل اللوغارتم حتى يظهر الفرق مع <span class="math">x</span> مباشرة.</p>
        </div>
        <p>عندما <span class="math">x→+∞</span> نكتب:</p>
        <div class="math-equation">e^x+x=e^x(1+x e^(-x))</div>
        <p>إذن:</p>
        <div class="math-equation">ln(e^x+x)=ln(e^x)+ln(1+x e^(-x))</div>
        <div class="math-equation">ln(e^x+x)=x+ln(1+x e^(-x))</div>
        <p>وبالتالي:</p>
        <div class="math-equation">x-ln(e^x+x)=-ln(1+x e^(-x))</div>
        <p>وبما أن <span class="math">x e^(-x)=x/e^x→0</span> حسب التزايد المقارن، فإن:</p>
        <div class="math-equation">ln(1+x e^(-x))→0</div>
        <p>إذن النهاية المطلوبة هي:</p>
        <div class="math-equation">0</div>
      </section>
    `,
  },
  {
    title: "تحدي 13: نهاية دقيقة عند الواحد",
    statementHtml: `<div class="math-equation">lim(x→1) (x^x - x) / (1 - x + ln x)</div>`,
    solutionHtml: `
      <section class="activity-sheet">
        <div class="method-box">
          <strong>الفكرة:</strong>
          <p>البسط والمقام ينعدمان من الدرجة الأولى عند <span class="math">1</span>، لذلك نحتاج إلى تقريب من الدرجة الثانية.</p>
        </div>
        <p>نضع:</p>
        <div class="math-equation">h=x-1</div>
        <p>عندما <span class="math">x→1</span> فإن <span class="math">h→0</span> و <span class="math">x=1+h</span>.</p>
        <p>نبدأ بالمقام:</p>
        <div class="math-equation">1-x+ln x = -h+ln(1+h)</div>
        <p>وباستعمال التقريب المعروف:</p>
        <div class="math-equation">ln(1+h)=h-h²/2+o(h²)</div>
        <p>فنحصل على:</p>
        <div class="math-equation">1-x+ln x = -h²/2+o(h²)</div>
        <p>أما البسط، فنكتب:</p>
        <div class="math-equation">x^x=e^(x ln x)=e^((1+h)ln(1+h))</div>
        <p>ولدينا:</p>
        <div class="math-equation">(1+h)ln(1+h)=h+h²/2+o(h²)</div>
        <p>إذن باستعمال <span class="math">e^u=1+u+u²/2+o(u²)</span> عندما <span class="math">u→0</span>:</p>
        <div class="math-equation">x^x=1+h+h²+o(h²)</div>
        <p>وبما أن <span class="math">x=1+h</span> فإن:</p>
        <div class="math-equation">x^x-x=h²+o(h²)</div>
        <p>إذن:</p>
        <div class="math-equation">(x^x-x)/(1-x+ln x) = (h²+o(h²))/(-h²/2+o(h²))</div>
        <p>النهاية المطلوبة هي:</p>
        <div class="math-equation">-2</div>
      </section>
    `,
  },
  {
    title: "تحدي 14: فرق لوغارتمين عند المالانهاية",
    statementHtml: `<div class="math-equation">lim(x→+∞) x(ln(x²+x+1) - 2ln x)</div>`,
    solutionHtml: `
      <section class="activity-sheet">
        <div class="method-box">
          <strong>الفكرة:</strong>
          <p>نخرج <span class="math">x²</span> من داخل اللوغارتم، فيختفي <span class="math">2ln x</span> ويبقى لوغارتم كمية قريبة من <span class="math">1</span>.</p>
        </div>
        <p>بما أن <span class="math">x→+∞</span> فإن <span class="math">x&gt;0</span>، ونكتب:</p>
        <div class="math-equation">x²+x+1=x²(1+1/x+1/x²)</div>
        <p>إذن:</p>
        <div class="math-equation">ln(x²+x+1)=ln(x²)+ln(1+1/x+1/x²)</div>
        <div class="math-equation">ln(x²+x+1)=2ln x+ln(1+1/x+1/x²)</div>
        <p>وبالتالي:</p>
        <div class="math-equation">x(ln(x²+x+1)-2ln x)=x ln(1+1/x+1/x²)</div>
        <p>نضع:</p>
        <div class="math-equation">u=1/x+1/x²</div>
        <p>عندما <span class="math">x→+∞</span> فإن <span class="math">u→0</span>، ولدينا:</p>
        <div class="math-equation">x ln(1+1/x+1/x²)=x u × ln(1+u)/u</div>
        <p>نحسب:</p>
        <div class="math-equation">x u = x(1/x+1/x²)=1+1/x → 1</div>
        <p>كما أن:</p>
        <div class="math-equation">lim(u→0) ln(1+u)/u = 1</div>
        <p>إذن النهاية المطلوبة هي:</p>
        <div class="math-equation">1</div>
      </section>
    `,
  },
  {
    title: "تحدي 15: حد غالب أسي عند المالانهاية",
    statementHtml: `<div class="math-equation">lim(x→+∞) (e^(3x) - ln(x²+1)) / (x e^(2x) + e^x)</div>`,
    solutionHtml: `
      <section class="activity-sheet">
        <div class="method-box">
          <strong>الفكرة:</strong>
          <p>نقسم على <span class="math">e^(2x)</span> لأن هذا العامل ظاهر في المقام، ثم نقارن الحدود الباقية.</p>
        </div>
        <p>نقسم البسط والمقام على <span class="math">e^(2x)</span>:</p>
        <div class="math-equation">(e^(3x)-ln(x²+1))/(x e^(2x)+e^x)</div>
        <div class="math-equation">= (e^x - ln(x²+1)/e^(2x))/(x + e^(-x))</div>
        <p>عندما <span class="math">x→+∞</span> لدينا حسب التزايد المقارن:</p>
        <div class="math-equation">ln(x²+1)/e^(2x) → 0</div>
        <div class="math-equation">e^(-x) → 0</div>
        <p>إذن العبارة تكافئ:</p>
        <div class="math-equation">e^x/x</div>
        <p>وبما أن الدالة الأسية تغلب كل قوة عند <span class="math">+∞</span>، فإن:</p>
        <div class="math-equation">lim(x→+∞) e^x/x = +∞</div>
        <p>النهاية المطلوبة هي:</p>
        <div class="math-equation">+∞</div>
      </section>
    `,
  },
  {
    title: "تحدي 16: أسية وجذر عند الصفر",
    statementHtml: `<div class="math-equation">lim(x→0) (e^(sqrt(x²+1)-1)-1) / x²</div>`,
    solutionHtml: `
      <section class="activity-sheet">
        <div class="method-box">
          <strong>الفكرة:</strong>
          <p>نضع الأس كله متغيرا جديدا، ثم نستعمل النهاية الشهيرة للدالة الأسية والمرافق للجذر.</p>
        </div>
        <p>نضع:</p>
        <div class="math-equation">u=sqrt(x²+1)-1</div>
        <p>عندما <span class="math">x→0</span> فإن <span class="math">u→0</span>. نكتب:</p>
        <div class="math-equation">(e^(sqrt(x²+1)-1)-1)/x² = [(e^u-1)/u] × [u/x²]</div>
        <p>بالنسبة للعامل الأول:</p>
        <div class="math-equation">lim(u→0) (e^u-1)/u = 1</div>
        <p>نحسب العامل الثاني باستعمال المرافق:</p>
        <div class="math-equation">u/x² = (sqrt(x²+1)-1)/x²</div>
        <div class="math-equation">= 1/(sqrt(x²+1)+1)</div>
        <p>إذن:</p>
        <div class="math-equation">lim(x→0) u/x² = 1/2</div>
        <p>وبالتالي النهاية المطلوبة هي:</p>
        <div class="math-equation">1 × 1/2 = 1/2</div>
      </section>
    `,
  },
  {
    title: "تحدي 17: قوة لوغارتمية عند الصفر يمينا",
    statementHtml: `<div class="math-equation">lim(x→0+) x^(1/ln(e^x-1))</div>`,
    solutionHtml: `
      <section class="activity-sheet">
        <div class="method-box">
          <strong>الفكرة:</strong>
          <p>نأخذ لوغارتم النهاية لأن المتغير موجود في الأساس والأس معا.</p>
        </div>
        <p>نفرض أن النهاية هي <span class="math">L</span>. عندئذ:</p>
        <div class="math-equation">ln(L)=lim(x→0+) ln(x^(1/ln(e^x-1)))</div>
        <div class="math-equation">ln(L)=lim(x→0+) ln x / ln(e^x-1)</div>
        <p>نكتب:</p>
        <div class="math-equation">e^x-1 = x × (e^x-1)/x</div>
        <p>وبأخذ اللوغارتم:</p>
        <div class="math-equation">ln(e^x-1)=ln x + ln((e^x-1)/x)</div>
        <p>عندما <span class="math">x→0+</span> لدينا النهاية الشهيرة:</p>
        <div class="math-equation">lim(x→0+) (e^x-1)/x = 1</div>
        <p>إذن:</p>
        <div class="math-equation">ln((e^x-1)/x) → ln(1)=0</div>
        <p>ومن ثم:</p>
        <div class="math-equation">ln(L)=lim(x→0+) ln x / [ln x + ln((e^x-1)/x)]</div>
        <p>وبما أن <span class="math">ln x→-∞</span> والحد الثاني يؤول إلى <span class="math">0</span>، نحصل على:</p>
        <div class="math-equation">ln(L)=1</div>
        <p>إذن النهاية المطلوبة هي:</p>
        <div class="math-equation">L=e</div>
      </section>
    `,
  },
  {
    title: "تحدي 18: لوغارتم داخل لوغارتم",
    statementHtml: `<div class="math-equation">lim(x→+∞) ln(x+ln x) / ln x</div>`,
    solutionHtml: `
      <section class="activity-sheet">
        <div class="method-box">
          <strong>الفكرة:</strong>
          <p>نستخرج <span class="math">x</span> من داخل اللوغارتم، لأن <span class="math">ln x</span> أصغر بكثير من <span class="math">x</span> عند <span class="math">+∞</span>.</p>
        </div>
        <p>نكتب:</p>
        <div class="math-equation">x+ln x = x(1+ln x/x)</div>
        <p>إذن:</p>
        <div class="math-equation">ln(x+ln x)=ln x + ln(1+ln x/x)</div>
        <p>وبالتالي:</p>
        <div class="math-equation">ln(x+ln x)/ln x = 1 + ln(1+ln x/x)/ln x</div>
        <p>حسب التزايد المقارن:</p>
        <div class="math-equation">ln x/x → 0</div>
        <p>إذن:</p>
        <div class="math-equation">ln(1+ln x/x) → ln(1)=0</div>
        <p>وبما أن <span class="math">ln x→+∞</span> فإن:</p>
        <div class="math-equation">ln(1+ln x/x)/ln x → 0</div>
        <p>النهاية المطلوبة هي:</p>
        <div class="math-equation">1</div>
      </section>
    `,
  },
  {
    title: "تحدي 19: أسية ولوغارتم مربع",
    statementHtml: `<div class="math-equation">lim(x→0) (e^((ln(1+x))²)-1) / x²</div>`,
    solutionHtml: `
      <section class="activity-sheet">
        <div class="method-box">
          <strong>الفكرة:</strong>
          <p>نضع الأس كله متغيرا جديدا حتى نستعمل النهاية الشهيرة <span class="math">(e^u-1)/u→1</span>.</p>
        </div>
        <p>نضع:</p>
        <div class="math-equation">u=(ln(1+x))²</div>
        <p>عندما <span class="math">x→0</span> فإن <span class="math">u→0</span>. إذن:</p>
        <div class="math-equation">(e^((ln(1+x))²)-1)/x² = [(e^u-1)/u] × [u/x²]</div>
        <p>العامل الأول نهايته:</p>
        <div class="math-equation">lim(u→0) (e^u-1)/u = 1</div>
        <p>أما العامل الثاني:</p>
        <div class="math-equation">u/x² = (ln(1+x))²/x²</div>
        <div class="math-equation">= [ln(1+x)/x]²</div>
        <p>وبما أن:</p>
        <div class="math-equation">lim(x→0) ln(1+x)/x = 1</div>
        <p>فإن:</p>
        <div class="math-equation">lim(x→0) u/x² = 1</div>
        <p>إذن النهاية المطلوبة هي:</p>
        <div class="math-equation">1 × 1 = 1</div>
      </section>
    `,
  },
  {
    title: "تحدي 20: قوة بلوغارتم عند الواحد",
    statementHtml: `<div class="math-equation">lim(x→1) (x^(ln x)-1) / (ln x)²</div>`,
    solutionHtml: `
      <section class="activity-sheet">
        <div class="method-box">
          <strong>الفكرة:</strong>
          <p>نضع <span class="math">t=ln x</span> حتى تتحول القوة إلى أسية عادية.</p>
        </div>
        <p>نضع:</p>
        <div class="math-equation">t=ln x</div>
        <p>عندما <span class="math">x→1</span> فإن <span class="math">t→0</span>، و <span class="math">x=e^t</span>. إذن:</p>
        <div class="math-equation">x^(ln x)=(e^t)^t=e^(t²)</div>
        <p>فتصبح النهاية:</p>
        <div class="math-equation">lim(t→0) (e^(t²)-1)/t²</div>
        <p>نضع <span class="math">u=t²</span>، فنحصل على:</p>
        <div class="math-equation">lim(u→0) (e^u-1)/u = 1</div>
        <p>النهاية المطلوبة هي:</p>
        <div class="math-equation">1</div>
      </section>
    `,
  },
  {
    title: "تحدي 21: لوغارتم أسي عند الصفر يمينا",
    statementHtml: `<div class="math-equation">lim(x→0+) x ln(1 + e^(1/x)/x)</div>`,
    solutionHtml: `
      <section class="activity-sheet">
        <div class="method-box">
          <strong>الفكرة:</strong>
          <p>نحوّل <span class="math">x→0+</span> إلى <span class="math">t→+∞</span> باستعمال <span class="math">t=1/x</span>.</p>
        </div>
        <p>نضع:</p>
        <div class="math-equation">t=1/x</div>
        <p>عندما <span class="math">x→0+</span> فإن <span class="math">t→+∞</span> و <span class="math">x=1/t</span>. إذن:</p>
        <div class="math-equation">x ln(1+e^(1/x)/x)=ln(1+t e^t)/t</div>
        <p>نكتب:</p>
        <div class="math-equation">1+t e^t=e^t(t+e^(-t))</div>
        <p>ومنه:</p>
        <div class="math-equation">ln(1+t e^t)=t+ln(t+e^(-t))</div>
        <p>إذن:</p>
        <div class="math-equation">ln(1+t e^t)/t=1+ln(t+e^(-t))/t</div>
        <p>وحسب التزايد المقارن <span class="math">ln(t+e^(-t))/t→0</span>، لذلك النهاية المطلوبة هي:</p>
        <div class="math-equation">1</div>
      </section>
    `,
  },
  {
    title: "تحدي 22: فرق لوغارتمي أسي",
    statementHtml: `<div class="math-equation">lim(x→+∞) (ln(e^x+e^(-x)) - x) / e^(-2x)</div>`,
    solutionHtml: `
      <section class="activity-sheet">
        <div class="method-box">
          <strong>الفكرة:</strong>
          <p>نخرج <span class="math">e^x</span> من داخل اللوغارتم، فيظهر مباشرة <span class="math">ln(1+e^(-2x))</span>.</p>
        </div>
        <p>نكتب:</p>
        <div class="math-equation">e^x+e^(-x)=e^x(1+e^(-2x))</div>
        <p>إذن:</p>
        <div class="math-equation">ln(e^x+e^(-x))=x+ln(1+e^(-2x))</div>
        <p>فتصبح النهاية:</p>
        <div class="math-equation">lim(x→+∞) ln(1+e^(-2x))/e^(-2x)</div>
        <p>نضع <span class="math">u=e^(-2x)</span>. عند <span class="math">x→+∞</span> فإن <span class="math">u→0+</span>، ومنه:</p>
        <div class="math-equation">lim(u→0+) ln(1+u)/u = 1</div>
        <p>النهاية المطلوبة هي:</p>
        <div class="math-equation">1</div>
      </section>
    `,
  },
  {
    title: "تحدي 23: فرق لوغارتمين عند الصفر",
    statementHtml: `<div class="math-equation">lim(x→0) (ln(1+x e^x)-ln(1+x)) / x²</div>`,
    solutionHtml: `
      <section class="activity-sheet">
        <div class="method-box">
          <strong>الفكرة:</strong>
          <p>نجمع الفرق بين اللوغارتمين في لوغارتم واحد، ثم نستعمل <span class="math">ln(1+u)/u→1</span>.</p>
        </div>
        <p>نكتب:</p>
        <div class="math-equation">ln(1+x e^x)-ln(1+x)=ln((1+x e^x)/(1+x))</div>
        <p>وبما أن:</p>
        <div class="math-equation">(1+x e^x)/(1+x)=1 + x(e^x-1)/(1+x)</div>
        <p>نضع:</p>
        <div class="math-equation">u=x(e^x-1)/(1+x)</div>
        <p>عندما <span class="math">x→0</span> فإن <span class="math">u→0</span>، ومنه:</p>
        <div class="math-equation">[ln(1+x e^x)-ln(1+x)]/x² = [ln(1+u)/u] × [u/x²]</div>
        <p>العامل الأول يؤول إلى <span class="math">1</span>. أما:</p>
        <div class="math-equation">u/x² = [(e^x-1)/x] × [1/(1+x)]</div>
        <p>وباستعمال <span class="math">(e^x-1)/x→1</span> نحصل على:</p>
        <div class="math-equation">lim(x→0) u/x² = 1</div>
        <p>إذن النهاية المطلوبة هي:</p>
        <div class="math-equation">1</div>
      </section>
    `,
  },
  {
    title: "تحدي 24: لوغارتم مركب عند الواحد",
    statementHtml: `<div class="math-equation">lim(x→1+) (ln(e^x-e)-ln(x-1)-1) / (x-1)</div>`,
    solutionHtml: `
      <section class="activity-sheet">
        <div class="method-box">
          <strong>الفكرة:</strong>
          <p>نستعمل خواص اللوغاريتم أولا لتبسيط الشكل غير المعين، ثم نرجع إلى نهاية مرجعية وبرهان بالحصر.</p>
        </div>

        <h3>الخطوة 1: تحديد المشكلة</h3>
        <p>لما <span class="math">x→1+</span> نجد:</p>
        <div class="math-equation">ln(e^x-e)→ln(0)=-∞</div>
        <div class="math-equation">ln(x-1)→ln(0)=-∞</div>
        <p>إذن نحن أمام فرق عبارتين غير منتهيتين، ثم قسمة على مقدار يؤول إلى الصفر.</p>

        <h3>الخطوة 2: تجميع اللوغاريتمات</h3>
        <p>حسب الخاصية <span class="math">ln(A)-ln(B)=ln(A/B)</span>، لدينا:</p>
        <div class="math-equation">ln(e^x-e)-ln(x-1)=ln((e^x-e)/(x-1))</div>
        <p>فتصبح النهاية:</p>
        <div class="math-equation">lim(x→1+) [ln((e^x-e)/(x-1))-1]/(x-1)</div>

        <h3>الخطوة 3: استخراج العامل المشترك</h3>
        <p>نستخرج <span class="math">e</span> من <span class="math">e^x-e</span>:</p>
        <div class="math-equation">e^x-e=e(e^(x-1)-1)</div>
        <p>إذن:</p>
        <div class="math-equation">ln((e^x-e)/(x-1))=ln(e × (e^(x-1)-1)/(x-1))</div>
        <div class="math-equation">=ln(e)+ln((e^(x-1)-1)/(x-1))</div>
        <div class="math-equation">=1+ln((e^(x-1)-1)/(x-1))</div>
        <p>وهنا يختفي العدد <span class="math">1</span> مع <span class="math">-1</span> الموجود في البسط:</p>
        <div class="math-equation">ln((e^x-e)/(x-1))-1=ln((e^(x-1)-1)/(x-1))</div>

        <h3>الخطوة 4: تغيير المتغير</h3>
        <p>نضع:</p>
        <div class="math-equation">t=x-1</div>
        <p>عندما <span class="math">x→1+</span> فإن <span class="math">t→0+</span>. تصبح النهاية:</p>
        <div class="math-equation">lim(t→0+) ln((e^t-1)/t)/t</div>

        <h3>الخطوة 5: تحضير النهاية المرجعية</h3>
        <p>نعلم أن:</p>
        <div class="math-equation">lim(t→0+) (e^t-1)/t = 1</div>
        <p>نكتب ما داخل اللوغاريتم على شكل <span class="math">1+X</span>:</p>
        <div class="math-equation">(e^t-1)/t = 1 + (e^t-t-1)/t</div>
        <p>نضع:</p>
        <div class="math-equation">X=(e^t-t-1)/t</div>
        <p>وعندما <span class="math">t→0+</span> فإن <span class="math">X→0</span>. إذن:</p>
        <div class="math-equation">ln((e^t-1)/t)/t = ln(1+X)/t</div>
        <p>نضرب ونقسم على <span class="math">X</span>:</p>
        <div class="math-equation">ln(1+X)/t = [ln(1+X)/X] × [X/t]</div>
        <p>وبتعويض <span class="math">X</span>:</p>
        <div class="math-equation">X/t = (e^t-t-1)/t²</div>
        <p>إذن:</p>
        <div class="math-equation">ln((e^t-1)/t)/t = [ln(1+X)/X] × [(e^t-t-1)/t²]</div>

        <h3>الخطوة 6: حساب النهايتين</h3>
        <p>النهاية الأولى مرجعية:</p>
        <div class="math-equation">lim(X→0) ln(1+X)/X = 1</div>
        <p>نحسب النهاية الثانية بالحصر. من أجل <span class="math">0≤u≤t</span> حيث <span class="math">t&gt;0</span>، لدينا:</p>
        <div class="math-equation">1≤e^u≤e^t</div>
        <p>بالتكامل من <span class="math">0</span> إلى <span class="math">u</span>:</p>
        <div class="math-equation">u≤e^u-1≤u e^t</div>
        <p>ثم بالتكامل من <span class="math">0</span> إلى <span class="math">t</span>:</p>
        <div class="math-equation">∫_0^t u du ≤ ∫_0^t (e^u-1) du ≤ ∫_0^t u e^t du</div>
        <p>أي:</p>
        <div class="math-equation">t²/2 ≤ e^t-t-1 ≤ e^t t²/2</div>
        <p>وبالقسمة على <span class="math">t²</span>:</p>
        <div class="math-equation">1/2 ≤ (e^t-t-1)/t² ≤ e^t/2</div>
        <p>عندما <span class="math">t→0+</span> يؤول الطرفان إلى <span class="math">1/2</span>، ومنه حسب مبرهنة الحصر:</p>
        <div class="math-equation">lim(t→0+) (e^t-t-1)/t² = 1/2</div>

        <h3>الخطوة 7: النتيجة النهائية</h3>
        <p>نضرب نتيجتي الجزأين:</p>
        <div class="math-equation">lim(x→1+) [ln(e^x-e)-ln(x-1)-1]/(x-1)=1×1/2=1/2</div>
        <p>إذن النهاية المطلوبة هي:</p>
        <div class="math-equation">1/2</div>
      </section>
    `,
  }
];

const bacFilters = {
  branch: "all",
  year: "all",
};

const foreignBacFilters = {
  country: "all",
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
    id: "limits",
    title: "النهايات",
    icon: "∞",
    summary: "باب منظم لحساب النهايات، الأشكال غير المعينة، المقارنة، والتفسير الهندسي للمقاربات.",
    lesson: `
      <article class="structured-lesson limits-masterclass">
        <header class="structured-lesson-hero">
          <span>محور 5</span>
          <h3>النهايات الأساسية للدالة الأسية</h3>
        </header>

        <section class="property-box limits-hero-equations">
          <strong>النهايتان الأساسيتان:</strong>
          <div class="math-equation">lim e^x = 0 عند x→-∞ ، lim e^x = +∞ عند x→+∞</div>
          <p>هاتان النهايتان هما المفتاح في دراسة الدوال الأسية: الأولى تعطي مقاربا أفقيا، والثانية تعبر عن نمو سريع نحو المالانهاية.</p>
        </section>

        <section class="lesson-block">
          <h4>1- نهاية الدالة الأسية عند <span class="math">+∞</span></h4>
          <div class="method-box">
            <strong>الفكرة المختصرة:</strong>
            <p>نثبت أولا أن <span class="math">e^x &gt; x</span> لكل عدد حقيقي <span class="math">x</span>. ندرس الدالة <span class="math">f(x)=e^x-x</span> فنجد:</p>
            <div class="math-equation">f'(x)=e^x-1</div>
            <div class="math-equation">f'(x)=0 ⇔ e^x=1 ⇔ x=0</div>
            <p>إشارة <span class="math">f'(x)</span> سالبة قبل الصفر وموجبة بعده، لذلك تقبل <span class="math">f</span> قيمة صغرى عند <span class="math">0</span> تساوي <span class="math">1</span>.</p>
            <div class="limit-variation-card" aria-label="جدول تغيرات الدالة f">
              <div class="limit-variation-title">جدول تغيرات <span class="math">f(x)=e^x-x</span></div>
              <figure class="limit-variation-svg limit-variation-classic" aria-label="جدول تغيرات الدالة f(x)=e^x-x">
                <svg viewBox="0 0 760 320" role="img">
                  <rect x="1" y="1" width="758" height="318" fill="#ffffff"></rect>
                  <rect x="70" y="34" width="620" height="252" fill="#ffffff" stroke="#111827" stroke-width="2"></rect>

                  <line x1="210" y1="34" x2="210" y2="286" stroke="#111827" stroke-width="2"></line>
                  <line x1="70" y1="84" x2="690" y2="84" stroke="#111827" stroke-width="2"></line>
                  <line x1="70" y1="134" x2="690" y2="134" stroke="#111827" stroke-width="2"></line>

                  <g font-family="Times New Roman, serif" font-size="42" font-style="italic" fill="#111827" text-anchor="middle">
                    <text x="140" y="70">x</text>
                    <text x="140" y="121">f'(x)</text>
                    <text x="140" y="226">f(x)</text>
                  </g>

                  <g font-family="Times New Roman, serif" font-size="40" fill="#6b7280" text-anchor="middle">
                    <text x="310" y="70">−∞</text>
                    <text x="450" y="70">0</text>
                    <text x="620" y="70">+∞</text>
                    <text x="370" y="121">−</text>
                    <text x="450" y="121">0</text>
                    <text x="525" y="121">+</text>
                    <text x="310" y="178">+∞</text>
                    <text x="620" y="178">+∞</text>
                  </g>

                  <g fill="none" stroke="#111827" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M358 194 L397 238"></path>
                    <path d="M397 238 l-2 -17"></path>
                    <path d="M397 238 l-17 -3"></path>
                    <path d="M544 194 L504 238"></path>
                    <path d="M504 238 l17 -3"></path>
                    <path d="M504 238 l2 -17"></path>
                  </g>

                  <text x="450" y="272" text-anchor="middle" font-family="Times New Roman, serif" font-size="42" fill="#111827">1</text>
                </svg>
              </figure>
              <p class="limit-variation-note">إذن تقبل الدالة <span class="math">f</span> قيمة حدية صغرى عند <span class="math">x=0</span>، وقيمتها <span class="math">f(0)=1</span>.</p>
            </div>
          </div>
          <div class="property-box">
            <strong>الاستنتاج:</strong>
            <p>بما أن <span class="math">e^x &gt; x</span> وأن <span class="math">x</span> يؤول إلى <span class="math">+∞</span>، فإن <span class="math">e^x</span> يؤول كذلك إلى <span class="math">+∞</span>.</p>
            <div class="math-equation">lim e^x = +∞ عند x→+∞</div>
          </div>
        </section>

        <section class="lesson-block">
          <h4>2- نهاية الدالة الأسية عند <span class="math">-∞</span></h4>
          <div class="method-box">
            <strong>تغيير المتغير:</strong>
            <p>نكتب <span class="math">e^x = 1/e^(-x)</span>. عندما <span class="math">x→-∞</span> فإن <span class="math">-x→+∞</span>، ومنه <span class="math">e^(-x)→+∞</span>.</p>
            <div class="math-equation">lim 1/e^X = 0 عند X→+∞</div>
          </div>
          <div class="property-box">
            <strong>الاستنتاج الهندسي:</strong>
            <div class="math-equation">lim e^x = 0 عند x→-∞</div>
            <p>إذن المستقيم <span class="math">y=0</span> مقارب أفقي لمنحنى الدالة الأسية عند <span class="math">-∞</span>.</p>
          </div>
        </section>

        <section class="lesson-block">
          <h4>3- كيف أتعامل مع نهاية أسية؟</h4>
          <div class="method-box">
            <strong>خطة الحل:</strong>
            <ol class="solution-list">
              <li>حدد الجهة: هل المتغير يقترب من عدد أم من <span class="math">±∞</span>؟</li>
              <li>ابحث عن الحد الغالب: الأسية تغلب القوى واللوغارتم عند <span class="math">+∞</span>.</li>
              <li>إذا ظهر كسر، اقسم على الحد الغالب أو أخرج العامل الأسّي المشترك.</li>
              <li>فسر النتيجة هندسيا إذا كانت النهاية عددا أو مالانهاية قرب قيمة ممنوعة.</li>
            </ol>
          </div>

        </section>



        <section class="lesson-block limit-comparison-proof limit-transformations">
          <h4>4- تمرين 39: تحويلات عملية في النهايات</h4>
          <div class="property-box theorem-box">
            <strong>الفكرة:</strong>
            <p>عندما تظهر قوة أو لوغارتم مع أسية، نحول العبارة إلى صيغة نعرف نهايتها من التزايد المقارن.</p>
          </div>

          <div class="method-box proof-card">
            <strong>1- نهاية <span class="math">e^x/x^n</span> عند <span class="math">+∞</span></strong>
            <p>نكتب:</p>
            <div class="math-equation">e^x/x^n = e^(x-nln(x))</div>
            <p>بما أن <span class="math">x-nln(x)→+∞</span> عند <span class="math">+∞</span>، فإن:</p>
            <div class="math-equation">lim e^x/x^n = +∞ عند x→+∞</div>
          </div>

          <div class="method-box proof-card">
            <strong>2- نهاية <span class="math">ln(x)/x^n</span> عند <span class="math">+∞</span></strong>
            <p>نضع <span class="math">U=x^n</span>. عند <span class="math">x→+∞</span> فإن <span class="math">U→+∞</span>، ولدينا:</p>
            <div class="math-equation">ln(x)/x^n = (1/n) ln(U)/U</div>
            <p>وبما أن <span class="math">ln(U)/U→0</span>، نستنتج:</p>
            <div class="math-equation">lim ln(x)/x^n = 0 عند x→+∞</div>
          </div>

          <div class="method-box proof-card">
            <strong>3- نهاية <span class="math">x^n ln(x)</span> عند <span class="math">0+</span></strong>
            <p>نضع <span class="math">U=1/x</span>. عند <span class="math">x→0+</span> فإن <span class="math">U→+∞</span>، ونحصل على:</p>
            <div class="math-equation">x^n ln(x) = -ln(U)/U^n</div>
            <p>وبما أن <span class="math">ln(U)/U^n→0</span>، فإن:</p>
            <div class="math-equation">lim x^n ln(x) = 0 عند x→0+</div>
          </div>

          <div class="method-box proof-card">
            <strong>4- نهاية <span class="math">x^n e^x</span> عند <span class="math">-∞</span></strong>
            <p>نضع <span class="math">U=-x</span>. عند <span class="math">x→-∞</span> فإن <span class="math">U→+∞</span>، ومنه:</p>
            <div class="math-equation">x^n e^x = (-1)^n U^n/e^U</div>
            <p>وبما أن <span class="math">U^n/e^U→0</span>، نستنتج:</p>
            <div class="math-equation">lim x^n e^x = 0 عند x→-∞</div>
          </div>
        </section>
        <section class="lesson-block limit-comparison-proof">
          <h4>5- التزايد المقارن: الأسية تغلب كل قوة</h4>
          <div class="property-box theorem-box">
            <strong>النتيجة الأساسية:</strong>
            <div class="math-equation">\\lim_{x\\to +\\infty} \\frac{e^x}{x^n}=+\\infty</div>
            <p>حيث <span class="math">n</span> عدد طبيعي غير معدوم. وبالعكس:</p>
            <div class="math-equation">\\lim_{x\\to +\\infty} \\frac{x^n}{e^x}=0</div>
          </div>

          <div class="method-box proof-card">
            <strong>أولا: الحالة <span class="math">n=1</span></strong>
            <p>نبرهن أن <span class="math">e^x/x→+∞</span>. نأخذ الدالة <span class="math">f(x)=e^x-x^2/2</span> على <span class="math">R</span>.</p>
            <div class="math-equation">f'(x)=e^x-x</div>
            <p>وبما أننا أثبتنا سابقا أن <span class="math">e^x &gt; x</span> لكل <span class="math">x</span>، فإن <span class="math">f'(x)&gt;0</span>. إذن <span class="math">f</span> متزايدة، ومع <span class="math">f(0)=1</span> نستنتج أنها موجبة لكل <span class="math">x&gt;0</span>.</p>
            <div class="math-equation">e^x &gt; \\frac{x^2}{2}</div>
            <div class="math-equation">\\frac{e^x}{x} &gt; \\frac{x}{2}</div>
            <p>وبما أن <span class="math">x/2→+∞</span> عند <span class="math">+∞</span>، نحصل بالمقارنة على:</p>
            <div class="math-equation">\\lim_{x\\to +\\infty} \\frac{e^x}{x}=+\\infty</div>
          </div>

          <div class="method-box proof-card">
            <strong>ثانيا: الحالة العامة <span class="math">n&gt;1</span></strong>
            <p>نكتب الكسر على شكل قوة باستعمال <span class="math">e^x=(e^(x/n))^n</span> و <span class="math">x^n=(n × x/n)^n</span>:</p>
            <div class="math-equation">\\frac{e^x}{x^n}=\\left(\\frac{1}{n}\\times\\frac{e^{x/n}}{x/n}\\right)^n</div>
            <p>عندما <span class="math">x→+∞</span> فإن <span class="math">x/n→+∞</span>. وباستعمال الحالة الأولى نحصل على:</p>
            <div class="math-equation">\\lim_{x\\to +\\infty} \\frac{e^{x/n}}{x/n}=+\\infty</div>
            <p>الضرب في العدد الموجب <span class="math">1/n</span> ثم الرفع إلى القوة <span class="math">n</span> يبقي النهاية <span class="math">+∞</span>. إذن:</p>
            <div class="math-equation">\\lim_{x\\to +\\infty} \\frac{e^x}{x^n}=+\\infty</div>
          </div>

          <div class="property-box theorem-box">
            <strong>النتيجة العكسية:</strong>
            <p>بأخذ المقلوب نحصل مباشرة على:</p>
            <div class="math-equation">\\lim_{x\\to +\\infty} \\frac{x^n}{e^x}=0</div>
            <p>هذه هي القاعدة العملية في التمارين: عند <span class="math">+∞</span> الأسية أقوى من أي قوة <span class="math">x^n</span>.</p>
          </div>
        </section>
        <section class="lesson-block limit-comparison-proof">
          <h4>6- تمرين 109: إثبات نهاية <span class="math">ln(x)/x</span></h4>
          <div class="property-box theorem-box">
            <strong>الهدف:</strong>
            <div class="math-equation">lim ln(x)/x = 0 عند x→+∞</div>
            <p>نثبت هذه النهاية باستعمال مقارنة ذكية بين <span class="math">ln(x)</span> و <span class="math">√x</span>.</p>
          </div>

          <div class="method-box proof-card">
            <strong>أولا: دراسة دالة مساعدة</strong>
            <p>نعتبر الدالة <span class="math">f</span> المعرفة على <span class="math">]0,+∞[</span> بـ:</p>
            <div class="math-equation">f(x)=ln(x)-√x</div>
            <p>نحسب مشتقتها:</p>
            <div class="math-equation">f'(x)=(2-√x)/(2x)</div>
            <p>بما أن <span class="math">2x&gt;0</span> على <span class="math">]0,+∞[</span>، فإن إشارة <span class="math">f'(x)</span> هي إشارة <span class="math">2-√x</span>. إذن <span class="math">f</span> متزايدة على <span class="math">]0,4]</span> ومتناقصة على <span class="math">[4,+∞[</span>.</p>
            <div class="limit-variation-card variation-ln-sqrt-table" aria-label="جدول تغيرات الدالة ln(x)-√x">
              <div class="limit-variation-title">جدول تغيرات <span class="math">f(x)=ln(x)-√x</span></div>
              <figure class="limit-variation-svg limit-variation-classic" aria-label="جدول تغيرات الدالة f(x)=ln(x)-√x">
                <svg viewBox="0 0 760 280" role="img">
                  <rect x="1" y="1" width="758" height="278" fill="#ffffff"></rect>
                  <rect x="70" y="32" width="620" height="216" fill="#ffffff" stroke="#111827" stroke-width="2"></rect>

                  <line x1="205" y1="32" x2="205" y2="248" stroke="#111827" stroke-width="2"></line>
                  <line x1="212" y1="32" x2="212" y2="248" stroke="#111827" stroke-width="1.4"></line>
                  <line x1="70" y1="82" x2="690" y2="82" stroke="#111827" stroke-width="2"></line>
                  <line x1="70" y1="132" x2="690" y2="132" stroke="#111827" stroke-width="2"></line>

                  <g font-family="Times New Roman, serif" font-size="38" font-style="italic" fill="#111827" text-anchor="middle">
                    <text x="137" y="68">x</text>
                    <text x="137" y="118">f'(x)</text>
                    <text x="137" y="205">f(x)</text>
                  </g>

                  <g font-family="Times New Roman, serif" font-size="38" fill="#6b7280" text-anchor="middle">
                    <text x="255" y="68">0</text>
                    <text x="450" y="68">4</text>
                    <text x="620" y="68">+∞</text>
                    <text x="335" y="118">+</text>
                    <text x="450" y="118">0</text>
                    <text x="555" y="118">−</text>
                    <text x="310" y="224">−∞</text>
                    <text x="585" y="224">−∞</text>
                  </g>

                  <text x="450" y="176" text-anchor="middle" font-family="Times New Roman, serif" font-size="38" fill="#374151">ln(4) − 2</text>

                  <g fill="none" stroke="#111827" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M340 206 L394 156"></path>
                    <path d="M394 156 l-18 3"></path>
                    <path d="M394 156 l-3 18"></path>
                    <path d="M510 156 L565 206"></path>
                    <path d="M565 206 l-18 -3"></path>
                    <path d="M565 206 l-3 -18"></path>
                  </g>
                </svg>
              </figure>
            </div>
          </div>

          <div class="method-box proof-card">
            <strong>ثانيا: القيمة الحدية العظمى</strong>
            <p>تبلغ <span class="math">f</span> قيمة عظمى عند <span class="math">x=4</span>، وقيمتها:</p>
            <div class="math-equation">f(4)=ln(4)-2</div>
            <p>وبما أن <span class="math">ln(4)&lt;2</span> فإن <span class="math">f(4)&lt;0</span>. وبما أن هذه أكبر قيمة للدالة، نستنتج:</p>
            <div class="math-equation">ln(x)-√x &lt; 0 لكل x&gt;0</div>
            <div class="math-equation">ln(x) &lt; √x لكل x&gt;0</div>
          </div>

          <div class="property-box theorem-box">
            <strong>ثالثا: الحصر والنتيجة</strong>
            <p>إذا كان <span class="math">x&gt;1</span> فإن <span class="math">ln(x)&gt;0</span>، ومن المقارنة السابقة نحصل على:</p>
            <div class="math-equation">0 &lt; ln(x)/x &lt; √x/x = 1/√x</div>
            <p>ومنه:</p>
            <div class="math-equation">lim 1/√x = 0 عند x→+∞</div>
            <p>حسب مبرهنة الحصر:</p>
            <div class="math-equation">lim ln(x)/x = 0 عند x→+∞</div>
          </div>
        </section>
      </article>
    `,
    activities: [
      {
        title: "نشاط: قراءة نهاية أساسية",
        body: "استنتج نهاية f(x)=3e^x-2 عندما x→-∞.",
        solution: "بما أن e^x→0 عند x→-∞، فإن 3e^x-2→-2. إذن y=-2 مقارب أفقي عند -∞.",
      },
      {
        title: "نشاط: قاعدة التزايد المقارن",
        body: "رتب عند +∞: x^4 و e^x. أيهما يغلب؟",
        solution: "الدالة الأسية تغلب كل قوة. لذلك e^x/x^4→+∞ و x^4/e^x→0.",
      },
      {
        title: "نشاط: الحد الغالب",
        body: "احسب نهاية f(x)=x/e^x عندما x→+∞.",
        solution: "الدالة الأسية تغلب الدالة كثير الحدودية عند +∞، لذلك x/e^x→0.",
      },
    ],
    exercises: [
      {
        title: "تمرين 1",
        statement: "احسب lim (e^x+4)/(2e^x-1) عند x→+∞.",
        hint: "اقسم البسط والمقام على e^x.",
        answer: "بعد القسمة على e^x نحصل على (1+4/e^x)/(2-1/e^x)، والنهاية هي 1/2.",
      },
      {
        title: "تمرين 2",
        statement: "احسب lim (e^x-x) عند x→+∞.",
        hint: "استعمل أن e^x يغلب x عند +∞.",
        answer: "بما أن e^x ينمو أسرع من x، فإن e^x-x→+∞.",
      },
      {
        title: "تمرين 3",
        statement: "احسب lim x^5/e^x عند x→+∞.",
        hint: "استعمل أن e^x يغلب x^n لكل n طبيعي غير معدوم.",
        answer: "حسب التزايد المقارن، x^5/e^x→0.",
      },      {
        title: "تمرين 52: مجموعة التعريف",
        statement: "عين مجموعة تعريف الدالة f في الحالات: 1) f(x)=ln(x+1). 2) f(x)=ln(-2x+3). 3) f(x)=2ln(x^2+1). 4) f(x)=ln|x|.",
        solutionHtml: `
          <ol class="solution-list">
            <li><span class="math">ln(x+1)</span>: الشرط <span class="math">x+1&gt;0</span>، إذن <span class="math">D_f=]-1,+∞[</span>.</li>
            <li><span class="math">ln(-2x+3)</span>: الشرط <span class="math">-2x+3&gt;0</span>، إذن <span class="math">D_f=]-∞,3/2[</span>.</li>
            <li><span class="math">2ln(x^2+1)</span>: لأن <span class="math">x^2+1&gt;0</span> لكل <span class="math">x</span>، إذن <span class="math">D_f=R</span>.</li>
            <li><span class="math">ln|x|</span>: الشرط <span class="math">|x|&gt;0</span> أي <span class="math">x≠0</span>، إذن <span class="math">D_f=R^*</span>.</li>
          </ol>
        `,
      },
      {
        title: "تمرين 53: مجموعة التعريف",
        statement: "عين مجموعة تعريف الدالة f في الحالات: 1) f(x)=ln(1/(x-1)). 2) f(x)=ln(x^2-4). 3) f(x)=ln(x+1)-ln(x-2). 4) f(x)=ln(x^2+2x-3).",
        solutionHtml: `
          <ol class="solution-list">
            <li><span class="math">ln(1/(x-1))</span>: يجب <span class="math">1/(x-1)&gt;0</span>، إذن <span class="math">x&gt;1</span>، ومنه <span class="math">D_f=]1,+∞[</span>.</li>
            <li><span class="math">ln(x^2-4)</span>: الشرط <span class="math">x^2-4&gt;0</span>، إذن <span class="math">D_f=]-∞,-2[∪]2,+∞[</span>.</li>
            <li><span class="math">ln(x+1)-ln(x-2)</span>: الشرطان <span class="math">x+1&gt;0</span> و <span class="math">x-2&gt;0</span>، إذن <span class="math">D_f=]2,+∞[</span>.</li>
            <li><span class="math">ln(x^2+2x-3)</span>: نحل <span class="math">x^2+2x-3&gt;0</span> أي <span class="math">(x+3)(x-1)&gt;0</span>، إذن <span class="math">D_f=]-∞,-3[∪]1,+∞[</span>.</li>
          </ol>
        `,
      },
      {
        title: "تمرين 54: مجموعة التعريف",
        statement: "عين مجموعة تعريف الدالة f في الحالات: 1) f(x)=ln(x)/x. 2) f(x)=ln(sqrt(2-3x)). 3) f(x)=(1-x)/ln(x). 4) f(x)=|x|/sqrt(x-1).",
        solutionHtml: `
          <ol class="solution-list">
            <li><span class="math">ln(x)/x</span>: الشرط <span class="math">x&gt;0</span>، وهو يكفي كذلك للمقام، إذن <span class="math">D_f=]0,+∞[</span>.</li>
            <li><span class="math">ln(sqrt(2-3x))</span>: يجب <span class="math">sqrt(2-3x)&gt;0</span>، أي <span class="math">2-3x&gt;0</span>، إذن <span class="math">D_f=]-∞,2/3[</span>.</li>
            <li><span class="math">(1-x)/ln(x)</span>: يجب <span class="math">x&gt;0</span> و <span class="math">ln(x)≠0</span>، إذن <span class="math">D_f=]0,+∞[\{1}</span>.</li>
            <li><span class="math">|x|/sqrt(x-1)</span>: المقام يتطلب <span class="math">x-1&gt;0</span>، إذن <span class="math">D_f=]1,+∞[</span>.</li>
          </ol>
        `,
      },
      {
        title: "تمرين 55: مجموعة التعريف",
        statement: "عين مجموعة تعريف الدالة f في الحالات: 1) f(x)=ln(x). 2) f(x)=ln(x^2). 3) f(x)=1/x-ln(x). 4) f(x)=ln((x+1)/(x-1)).",
        solutionHtml: `
          <ol class="solution-list">
            <li><span class="math">ln(x)</span>: الشرط <span class="math">x&gt;0</span>، إذن <span class="math">D_f=]0,+∞[</span>.</li>
            <li><span class="math">ln(x^2)</span>: الشرط <span class="math">x^2&gt;0</span> أي <span class="math">x≠0</span>، إذن <span class="math">D_f=R^*</span>.</li>
            <li><span class="math">1/x-ln(x)</span>: يجب <span class="math">x≠0</span> و <span class="math">x&gt;0</span>، إذن <span class="math">D_f=]0,+∞[</span>.</li>
            <li><span class="math">ln((x+1)/(x-1))</span>: يجب <span class="math">(x+1)/(x-1)&gt;0</span>، إذن <span class="math">D_f=]-∞,-1[∪]1,+∞[</span>.</li>
          </ol>
        `,
      },
      {
        title: "تمرين 56: مجموعة التعريف",
        statement: "عين مجموعة تعريف الدالة f في الحالات: 1) f(x)=x^2/(2ln(x)+1). 2) f(x)=x/(ln(x)-1). 3) f(x)=ln(sqrt(x^2-1)/x). 4) f(x)=ln|x+1-ln(x)|.",
        solutionHtml: `
          <ol class="solution-list">
            <li><span class="math">x^2/(2ln(x)+1)</span>: يجب <span class="math">x&gt;0</span> و <span class="math">2ln(x)+1≠0</span>، إذن <span class="math">D_f=]0,+∞[\{e^(-1/2)}</span>.</li>
            <li><span class="math">x/(ln(x)-1)</span>: يجب <span class="math">x&gt;0</span> و <span class="math">ln(x)≠1</span>، إذن <span class="math">D_f=]0,+∞[\{e}</span>.</li>
            <li><span class="math">ln(sqrt(x^2-1)/x)</span>: يجب <span class="math">x^2-1&gt;0</span> و <span class="math">sqrt(x^2-1)/x&gt;0</span>. وبما أن البسط موجب، يلزم <span class="math">x&gt;0</span>، إذن <span class="math">D_f=]1,+∞[</span>.</li>
            <li><span class="math">ln|x+1-ln(x)|</span>: يجب <span class="math">x&gt;0</span> و <span class="math">|x+1-ln(x)|&gt;0</span>. ولأن <span class="math">x+1-ln(x)&gt;0</span> على <span class="math">]0,+∞[</span>، فإن <span class="math">D_f=]0,+∞[</span>.</li>
          </ol>
        `,
      },      {
        title: "تمرين 57: مساواة دالتين",
        statement: "هل الدالتان f و g المعرفتان على ]0,+∞[ متساويتان؟ f(x)=ln(x+1)-ln(x) و g(x)=ln(1+1/x).",
        solutionHtml: `
          <p>نكتب، من أجل <span class="math">x&gt;0</span>:</p>
          <div class="math-equation">f(x)=ln(x+1)-ln(x)=ln((x+1)/x)=ln(1+1/x)=g(x)</div>
          <p>إذن الدالتان متساويتان على <span class="math">]0,+∞[</span>.</p>
        `,
      },
      {
        title: "تمرين 58: معادلات لوغارتمية مباشرة",
        statement: "حل في R المعادلات التالية: 1) ln(x)=2. 2) ln(x)=-3. 3) 7ln(x)=2. 4) ln(x)+ln(3)=0.",
        solutionHtml: `
          <ol class="solution-list">
            <li><span class="math">ln(x)=2</span>، مع <span class="math">x&gt;0</span>: الحل <span class="math">x=e^2</span>.</li>
            <li><span class="math">ln(x)=-3</span>: الحل <span class="math">x=e^(-3)</span>.</li>
            <li><span class="math">7ln(x)=2</span>: إذن <span class="math">ln(x)=2/7</span>، ومنه <span class="math">x=e^(2/7)</span>.</li>
            <li><span class="math">ln(x)+ln(3)=0</span>: أي <span class="math">ln(3x)=0</span>، ومنه <span class="math">3x=1</span>، إذن <span class="math">x=1/3</span>.</li>
          </ol>
        `,
      },
      {
        title: "تمرين 59: معادلات لوغارتمية",
        statement: "حل في R المعادلات التالية: 1) ln(x+4)=ln(2x-3). 2) ln(x^2+x)=1. 3) ln|1-x|=ln(3). 4) ln((x+1)/(x-1))=-1.",
        solutionHtml: `
          <ol class="solution-list">
            <li>الشروط: <span class="math">x+4&gt;0</span> و <span class="math">2x-3&gt;0</span>. بالتقابلية: <span class="math">x+4=2x-3</span>، إذن <span class="math">x=7</span>.</li>
            <li>الشرط <span class="math">x^2+x&gt;0</span>. نحصل على <span class="math">x^2+x=e</span>، أي <span class="math">x^2+x-e=0</span>. الحلول: <span class="math">x=(-1-sqrt(1+4e))/2</span> أو <span class="math">x=(-1+sqrt(1+4e))/2</span>، وهما مقبولان.</li>
            <li><span class="math">ln|1-x|=ln(3)</span> تعطي <span class="math">|1-x|=3</span>، إذن <span class="math">x=-2</span> أو <span class="math">x=4</span>.</li>
            <li>يجب <span class="math">(x+1)/(x-1)&gt;0</span>. ثم <span class="math">(x+1)/(x-1)=e^(-1)</span>. ومنه <span class="math">e(x+1)=x-1</span>، وبالتالي <span class="math">x=-(e+1)/(e-1)</span>، وهو مقبول لأنه <span class="math">x&lt;-1</span>.</li>
          </ol>
        `,
      },
      {
        title: "تمرين 60: توظيف كثير حدود",
        statement: "ليكن P(x)=-2x^3+3x^2+11x-6. 1) تحقق أن P(x)=(2x-1)(x+2)(3-x). 2) حل P(x)=0. 3) حل -2(ln x)^3+3(ln x)^2+11ln x-6=0. 4) حل -2e^(3x)+3e^(2x)+11e^x-6=0.",
        solutionHtml: `
          <ol class="solution-list">
            <li>بنشر <span class="math">(2x-1)(x+2)(3-x)</span> نحصل على <span class="math">-2x^3+3x^2+11x-6</span>.</li>
            <li><span class="math">P(x)=0</span> يعطي <span class="math">x=1/2</span> أو <span class="math">x=-2</span> أو <span class="math">x=3</span>.</li>
            <li>نضع <span class="math">t=ln(x)</span> مع <span class="math">x&gt;0</span>. إذن <span class="math">P(t)=0</span>، ومنه <span class="math">t=1/2</span> أو <span class="math">t=-2</span> أو <span class="math">t=3</span>. الحلول: <span class="math">x=e^(1/2)</span> أو <span class="math">x=e^(-2)</span> أو <span class="math">x=e^3</span>.</li>
            <li>نضع <span class="math">t=e^x&gt;0</span>. إذن <span class="math">P(t)=0</span>. من الجذور السابقة نقبل <span class="math">t=1/2</span> و <span class="math">t=3</span> فقط. الحلول: <span class="math">x=ln(1/2)=-ln(2)</span> أو <span class="math">x=ln(3)</span>.</li>
          </ol>
        `,
      },
      {
        title: "تمرين 61: متراجحات لوغارتمية",
        statement: "حل في R المتراجحات التالية: 1) ln(x)&lt;1. 2) ln(2x)&gt;-1. 3) ln(2x+3)&lt;5. 4) ln(1-x)≤2. 5) ln(x)&gt;ln(2x-1). 6) xln(x)-ln(x)≥0.",
        solutionHtml: `
          <ol class="solution-list">
            <li><span class="math">x&gt;0</span> و <span class="math">ln(x)&lt;1</span>، إذن <span class="math">0&lt;x&lt;e</span>.</li>
            <li><span class="math">2x&gt;0</span> و <span class="math">ln(2x)&gt;-1</span>، إذن <span class="math">2x&gt;e^(-1)</span>، ومنه <span class="math">x&gt;1/(2e)</span>.</li>
            <li><span class="math">2x+3&gt;0</span> و <span class="math">2x+3&lt;e^5</span>، إذن <span class="math">-3/2&lt;x&lt;(e^5-3)/2</span>.</li>
            <li><span class="math">1-x&gt;0</span> و <span class="math">1-x≤e^2</span>، إذن <span class="math">1-e^2≤x&lt;1</span>.</li>
            <li>الشروط: <span class="math">x&gt;0</span> و <span class="math">2x-1&gt;0</span>. وبما أن <span class="math">ln</span> متزايدة: <span class="math">x&gt;2x-1</span>، أي <span class="math">x&lt;1</span>. إذن الحل <span class="math">]1/2,1[</span>.</li>
            <li><span class="math">xln(x)-ln(x)=ln(x)(x-1)</span> مع <span class="math">x&gt;0</span>. الإشارة موجبة أو معدومة على <span class="math">]0,1]∪[1,+∞[</span>، أي كل <span class="math">]0,+∞[</span>.</li>
          </ol>
        `,
      },      {
        title: "تمرين 62: تبسيط أعداد لوغارتمية وأسّية",
        statement: "اكتب على أبسط شكل ممكن: 1) ln14-ln7. 2) ln(3/2)+ln(2/3). 3) ln(100)/ln(10). 4) ln(10000)+ln(0.01). 5) e^(2ln3). 6) e^(ln5+ln3). 7) e^(-2ln3). 8) e^(1+ln2).",
        solutionHtml: `
          <ol class="solution-list">
            <li><span class="math">ln14-ln7=ln(14/7)=ln2</span>.</li>
            <li><span class="math">ln(3/2)+ln(2/3)=ln(1)=0</span>.</li>
            <li><span class="math">ln(100)/ln(10)=ln(10^2)/ln(10)=2</span>.</li>
            <li><span class="math">ln(10000)+ln(0.01)=ln(100)=ln(10^2)=2ln10</span>.</li>
            <li><span class="math">e^(2ln3)=e^(ln9)=9</span>.</li>
            <li><span class="math">e^(ln5+ln3)=e^(ln15)=15</span>.</li>
            <li><span class="math">e^(-2ln3)=e^(ln(1/9))=1/9</span>.</li>
            <li><span class="math">e^(1+ln2)=e×e^(ln2)=2e</span>.</li>
          </ol>
        `,
      },
      {
        title: "تمرين 63: بسط عبارات لوغارتمية",
        statement: "بسط ما يلي: A=ln(e^2)-ln(e). B=ln(e√e). C=ln2+ln(8e)-ln(4e^2). D=ln((1/e)^2)-(ln(1/e))^2.",
        solutionHtml: `
          <ol class="solution-list">
            <li><span class="math">A=ln(e^2)-ln(e)=2-1=1</span>.</li>
            <li><span class="math">B=ln(e√e)=ln(e×e^(1/2))=ln(e^(3/2))=3/2</span>.</li>
            <li><span class="math">C=ln(16e)-ln(4e^2)=ln(4/e)=ln4-1</span>.</li>
            <li><span class="math">D=ln(e^(-2))-(-1)^2=-2-1=-3</span>.</li>
          </ol>
        `,
      },
      {
        title: "تمرين 64: كتابة على شكل ln(x)",
        statement: "اكتب الأعداد التالية على شكل ln(x): A=3ln2-ln5+(1/2)ln8. B=2ln(0.1)-3ln(0.01)+ln2. C=2ln(100)-ln(1/10).",
        solutionHtml: `
          <ol class="solution-list">
            <li><span class="math">A=ln(2^3)-ln5+ln(√8)=ln(8√8/5)=ln(16√2/5)</span>.</li>
            <li><span class="math">B=ln((0.1)^2)-ln((0.01)^3)+ln2=ln(2×10^4)=ln(20000)</span>.</li>
            <li><span class="math">C=ln(100^2)-ln(1/10)=ln(10000/(1/10))=ln(100000)</span>.</li>
          </ol>
        `,
      },
      {
        title: "تمرين 65: كتابة على شكل ln(x)",
        statement: "اكتب الأعداد التالية على شكل ln(x): A=ln(a)-ln(b)+2ln(c). B=(1/2)ln(a)-(3/2)ln(b)+ln(a/b)، حيث a&gt;0 و b&gt;0 و c&gt;0.",
        solutionHtml: `
          <ol class="solution-list">
            <li><span class="math">A=ln(a/b)+ln(c^2)=ln(ac^2/b)</span>.</li>
            <li><span class="math">B=ln(√a)-ln(b^(3/2))+ln(a/b)=ln(a√a/(b√b×b))=ln(a√a/b^(5/2))</span>.</li>
          </ol>
        `,
      },      {
        title: "تمرين 80: نهايات دالة لوغارتمية",
        statement: "لتكن f معرفة على ]0,+∞[ بـ f(x)=2(ln x)^2-ln x-3. 1) ادرس نهايتي f عند حدود مجال التعريف. 2) بين أنه من أجل x&gt;1 يمكن كتابة f(x) باستخراج العامل ln x، ثم عين النهاية عند +∞.",
        solutionHtml: `<p>عند <span class="math">0^+</span>: <span class="math">ln x→-∞</span> والحد الغالب <span class="math">2(ln x)^2</span>، إذن <span class="math">f(x)→+∞</span>. عند <span class="math">+∞</span>: <span class="math">ln x→+∞</span>، إذن <span class="math">f(x)→+∞</span>. كما أن <span class="math">f(x)=ln x(2ln x-1)-3</span>.</p>`,
      },
      {
        title: "تمرين 81: حساب نهايات مباشرة",
        statement: "احسب النهايات: 1) lim عند +∞ لـ 2x+ln x. 2) lim عند +∞ لـ (x+1)ln x. 3) lim عند 0^+ لـ x+5-ln x. 4) lim عند +∞ لـ 3-2ln x.",
        solutionHtml: `<ol class="solution-list"><li><span class="math">+∞</span>.</li><li><span class="math">+∞</span>.</li><li><span class="math">+∞</span> لأن <span class="math">-ln x→+∞</span>.</li><li><span class="math">-∞</span>.</li></ol>`,
      },
      {
        title: "تمرين 82: نهايات باستعمال خواص ln",
        statement: "احسب النهايات: 1) lim عند +∞ لـ ln(x)/ln(x^2). 2) lim عند +∞ لـ 1/(3+ln x). 3) lim عند -∞ لـ (x^2-x)ln(-x). 4) lim عند +∞ لـ (3-x)ln x.",
        solutionHtml: `<ol class="solution-list"><li><span class="math">ln(x^2)=2ln x</span>، النهاية <span class="math">1/2</span>.</li><li>النهاية <span class="math">0</span>.</li><li><span class="math">x^2-x→+∞</span> و <span class="math">ln(-x)→+∞</span>، النهاية <span class="math">+∞</span>.</li><li><span class="math">3-x→-∞</span> و <span class="math">ln x→+∞</span>، النهاية <span class="math">-∞</span>.</li></ol>`,
      },
      {
        title: "تمرين 83: نهاية دالة كسرية لوغارتمية",
        statement: "لتكن f معرفة على ]-∞,1[ بـ f(x)=(x+1)/(1-ln x) حيث يكون التعبير معرفا. اكتب f على شكل مناسب ثم احسب نهايتها عند -∞ حسب مجال التعريف المقصود.",
        solutionHtml: `<p>الفكرة: نقسم البسط والمقام على الحد الغالب المناسب ونستعمل أن اللوغارتم لا يعرف إلا لمقادير موجبة. إذا كان المقصود <span class="math">ln(-x)</span> في المقام، فإن <span class="math">x/ln(-x)→-∞</span>.</p>`,
      },
      {
        title: "تمرين 84: نهاية دالة مركبة",
        statement: "لتكن f معرفة على ]2,+∞[ بـ f(x)=ln(ln(x-1)). 1) بين أن f معرفة من أجل x&gt;2. 2) احسب نهايتي f عند 2^+ وعند +∞.",
        solutionHtml: `<p>لدينا <span class="math">x&gt;2⇒x-1&gt;1⇒ln(x-1)&gt;0</span>، إذن f معرفة. عند <span class="math">2^+</span>: <span class="math">ln(x-1)→0^+</span> ومنه <span class="math">f(x)→-∞</span>. عند <span class="math">+∞</span>: <span class="math">ln(x-1)→+∞</span> ومنه <span class="math">f(x)→+∞</span>.</p>`,
      },
      {
        title: "تمرين 85: نهايات شهيرة",
        statement: "احسب النهايات: 1) lim عند 0 لـ ln(1+2x)/(2x). 2) lim عند 0 لـ ln(1+3x)/x. 3) lim عند 0 لـ ln(1+x/2)/x. 4) lim عند 0 لـ ln(1+x)/(x).",
        solutionHtml: `<ol class="solution-list"><li><span class="math">1</span>.</li><li><span class="math">3</span>.</li><li><span class="math">1/2</span>.</li><li><span class="math">1</span>.</li></ol>`,
      },
      {
        title: "تمرين 86: قابلية الاشتقاق عند 0",
        statement: "لتكن f معرفة بـ f(x)=ln(x^2+1)/x إذا x≠0 و f(0)=0. بين أن f غير قابلة للاشتقاق عند 0، ثم ادرس اتجاه تغيرها على R باستعمال المشتقة.",
        solutionHtml: `<p>عند الاشتقاق في الصفر: <span class="math">(f(x)-f(0))/x=ln(1+x^2)/x^2→1</span>، لذلك حسب هذه الصيغة تكون قابلة للاشتقاق وقيمتها <span class="math">1</span>. راجع نص الصورة: إذا كان المطلوب غير قابلة للاشتقاق فغالبا المقام ليس <span class="math">x</span> أو قيمة f(0) مختلفة.</p>`,
      },
      {
        title: "تمرين 87: حساب مشتقات",
        statement: "احسب f'(x) للدوال: 2x^2-ln x، x+ln x، 1/x+ln x، -x+ln2+ln x، xln x، (ln x)^2+ln x-2، ln x/x، 1/ln x.",
        solutionHtml: `<ol class="solution-list"><li><span class="math">(2x^2-ln x)'=4x-1/x</span>.</li><li><span class="math">(x+ln x)'=1+1/x</span>.</li><li><span class="math">(1/x+ln x)'=-1/x^2+1/x</span>.</li><li><span class="math">(-x+ln2+ln x)'=-1+1/x</span>.</li><li><span class="math">(xln x)'=ln x+1</span>.</li><li><span class="math">((ln x)^2+ln x-2)'=(2ln x+1)/x</span>.</li><li><span class="math">(ln x/x)'=(1-ln x)/x^2</span>.</li><li><span class="math">(1/ln x)'=-1/(x(ln x)^2)</span>.</li></ol>`,
      },
      {
        title: "تمرين 88: حساب مشتقات مركبة",
        statement: "احسب مشتقات الدوال: ln(-2x-1)، (1/2)(ln(1-x))^2، x(2-lnx)^2، ln(2x^2+x-6)، ln((x+1)/(x-1))، (2x-1+ln x)/x.",
        solutionHtml: `<p>استعمل القاعدة <span class="math">(ln u)'=u'/u</span> وقاعدة الجداء/القسمة. مثلا <span class="math">(ln(-2x-1))'=2/(2x+1)</span>، و <span class="math">(ln((x+1)/(x-1)))'=1/(x+1)-1/(x-1)</span>.</p>`,
      },
      {
        title: "تمرين 89: دراسة قابلية الاشتقاق وحساب المشتقة",
        statement: "تحقق من قابلية الاشتقاق على المجال D ثم احسب f'(x): 1) f(x)=(ln x)^2+ln x على ]0,+∞[. 2) f(x)=x^2ln x-x^2/2 على ]0,+∞[. 3) f(x)=xln|x|-2x+3 على ]-∞,0[. 4) f(x)=-x/2+xln x على ]0,+∞[. 5) f(x)=(x+1)/(ln x-1) على ]e,+∞[.",
        solutionHtml: `<p>كل الدوال قابلة للاشتقاق على مجالاتها لأنها مركبة من دوال قابلة للاشتقاق ومقامات غير منعدمة. أمثلة: <span class="math">((ln x)^2+ln x)'=(2ln x+1)/x</span>، و <span class="math">(x^2ln x-x^2/2)'=2xln x</span>.</p>`,
      },
      {
        title: "تمرين 90: دالة مساعدة ومماس أفقي",
        statement: "في كل حالة ادرس تغيرات الدالة واستنتج النقطة ذات المماس الأفقي: 1) f(x)=x+1+ln x، x0=e. 2) f(x)=x^2-2+3ln x، x0=1. 3) f(x)=1/2(-x+e/ln x)، x0=e.",
        solutionHtml: `<p>المماس الأفقي يتحقق عندما <span class="math">f'(x0)=0</span>. احسب المشتقة، تحقق من انعدامها عند القيمة المعطاة، ثم استعمل إشارة المشتقة لبناء جدول التغيرات.</p>`,
      },
      {
        title: "تمرين 91: وضعية نسبية مع مستقيم",
        statement: "لتكن f معرفة على ]-2,+∞[ بـ f(x)=3ln(2+x)+x^2-3x. بين أن المنحنى يقبل مماسين موازيين لمحور الفواصل.",
        solutionHtml: `<p>نحسب <span class="math">f'(x)=3/(x+2)+2x-3</span>. نحل <span class="math">f'(x)=0</span> على <span class="math">]-2,+∞[</span>. عدد الحلول يعطي عدد المماسات الأفقية.</p>`,
      },
      {
        title: "تمرين 92: تحويل هندسي",
        statement: "في معلم متعامد ومتجانس ارسم C للدالة f(x)=2-lnx على ]0,+∞[، ثم استنتج منحنى g(x)=ln(x-1)+2 على ]1,+∞[ وحدد التحويل الهندسي المستعمل.",
        solutionHtml: `<p>منحنى <span class="math">g</span> ينتج من منحنى <span class="math">ln x</span> بانتقال أفقي قدره 1 نحو اليمين ثم انتقال عمودي قدره 2 نحو الأعلى. قارن كذلك مع <span class="math">f(x)=2-ln x</span> باعتباره تناظرا/انتقالا حول المستقيمات المناسبة.</p>`,
      },
      {
        title: "تمرين 93: دراسة دالة لوغارتمية",
        statement: "لتكن f معرفة على ]0,+∞[ بـ f(x)=2x+3+ln x. بين أن f دالة متزايدة تماما ثم استنتج تغيراتها.",
        solutionHtml: `<p><span class="math">f'(x)=2+1/x</span>. وبما أن <span class="math">x&gt;0</span> فإن <span class="math">f'(x)&gt;0</span>. إذن f متزايدة تماما على <span class="math">]0,+∞[</span>.</p>`,
      },
      {
        title: "تمرين 94: دراسة دالة وبناء جدول تغيرات",
        statement: "لتكن f معرفة على ]0,+∞[ بـ f(x)=x^2-2+ln x. 1) ادرس تغيرات f دون حساب المشتقة تفصيلا. 2) عين نهاياتها عند حدود مجال التعريف. 3) شكل جدول تغيراتها.",
        solutionHtml: `<p><span class="math">x^2</span> متزايدة على <span class="math">]0,+∞[</span> و <span class="math">ln x</span> متزايدة، إذن f متزايدة. عند <span class="math">0^+</span>: <span class="math">ln x→-∞</span>، وعند <span class="math">+∞</span>: <span class="math">x^2→+∞</span>.</p>`,
      },
      {
        title: "تمرين 95: مجال تعريف دوال لوغارتمية",
        statement: "عين مجال التعريف: 1) ln(x-3) على ]3,+∞[. 2) ln(1-x) على ]-∞,1[. 3) ln(2x^2) على ]0,+∞[. 4) ln|x-2| على ]2,+∞[. 5) ln((x+1)/(x-2)) على ]2,+∞[.",
        solutionHtml: `<p>القاعدة: يجب أن يكون ما داخل <span class="math">ln</span> موجبا. المجالات المقترحة في نص التمرين كلها تحقق الشرط المطلوب للدوال المعطاة، مع الانتباه أن <span class="math">ln(2x^2)</span> معرف على <span class="math">R^*</span> عموما.</p>`,
      },      {
        title: "تمرين 96: اتجاه التغيرات باستعمال المشتقة",
        statement: "ادرس اتجاه تغير الدوال التالية على المجال المعطى: 1) D=]0,+∞[، f(x)=-(3/2)x+ln(2x). 2) D=]-∞,1[، f(x)=2x-ln(1-x). 3) D=]1,+∞[، f(x)=(x+1)/(x-1)-ln(x-1). 4) D=]1,3[، f(x)=2x+ln x-ln(x-1).",
        solutionHtml: `
          <ol class="solution-list">
            <li><span class="math">f'(x)=-3/2+1/x=(2-3x)/(2x)</span>. الإشارة تتغير عند <span class="math">x=2/3</span>: تزايد على <span class="math">]0,2/3[</span> ثم تناقص على <span class="math">]2/3,+∞[</span>.</li>
            <li><span class="math">f'(x)=2+1/(1-x)=(3-2x)/(1-x)</span>. على <span class="math">]-∞,1[</span> المقام موجب، إذن التزايد حسب <span class="math">3-2x</span>: تزايد ثم تناقص بعد <span class="math">3/2</span> غير موجود في المجال، لذلك الدالة متزايدة على المجال كله.</li>
            <li><span class="math">f'(x)=-2/(x-1)^2-1/(x-1)&lt;0</span> على <span class="math">]1,+∞[</span>، إذن f متناقصة.</li>
            <li><span class="math">f'(x)=2+1/x-1/(x-1)</span>. نوحد المقام لدراسة الإشارة على <span class="math">]1,3[</span>.</li>
          </ol>
        `,
      },
      {
        title: "تمرين 97: اتجاه التغيرات باستعمال المشتقة",
        statement: "ادرس اتجاه تغير الدوال التالية على المجال المعطى: 1) D=]-∞,0[، f(x)=1/x+ln((x-1)/x). 2) D=]0,+∞[، f(x)=x+1+(ln x)/x. 3) D=]0,+∞[، f(x)=(1-lnx)/x. 4) D=]-5,1[، f(x)=ln(1-x)+ln(x+5).",
        solutionHtml: `
          <ol class="solution-list">
            <li>احسب <span class="math">f'(x)</span> بعد كتابة <span class="math">ln((x-1)/x)=ln(x-1)-ln x</span> حيث يكون التعبير معرفا على المجال المعطى.</li>
            <li><span class="math">f'(x)=1+(1-lnx)/x^2</span>. ندرس إشارة <span class="math">x^2+1-lnx</span> وهي موجبة غالبا باستعمال دالة مساعدة.</li>
            <li><span class="math">f'(x)=(lnx-2)/x^2</span>. إذن تناقص على <span class="math">]0,e^2[</span> وتزايد على <span class="math">]e^2,+∞[</span>.</li>
            <li><span class="math">f'(x)=-1/(1-x)+1/(x+5)=(-2x-4)/((1-x)(x+5))</span>. على <span class="math">]-5,1[</span> المقام موجب، فتتغير الإشارة عند <span class="math">x=-2</span>.</li>
          </ol>
        `,
      },      {
        title: "تمرين 98: اللوغاريتم العشري",
        statement: "ليكن n عددا طبيعيا غير معدوم. 1) عين باستعمال مدور العدد الحقيقي log(n) رتبة العدد n. 2) استنتج حصر العدد n إذا كان 107≤n<108.",
        solutionHtml: `<p>إذا كان <span class="math">10^p≤n&lt;10^(p+1)</span> فإن <span class="math">p≤log(n)&lt;p+1</span>، والعدد <span class="math">n</span> له <span class="math">p+1</span> أرقام. إذا <span class="math">10^7≤n&lt;10^8</span> فإن <span class="math">7≤log(n)&lt;8</span> وله 8 أرقام.</p>`,
      },
      {
        title: "تمرين 99: استعمال جدول اللوغاريتم العشري",
        statement: "مع العلم أن log(3.81)≈0.58092، استنتج دون استعمال الحاسبة مقربة لكل من: log(0.381)، log(38.1)، log(381).",
        solutionHtml: `
          <ol class="solution-list">
            <li><span class="math">log(0.381)=log(3.81×10^(-1))=0.58092-1=-0.41908</span>.</li>
            <li><span class="math">log(38.1)=log(3.81×10)=0.58092+1=1.58092</span>.</li>
            <li><span class="math">log(381)=log(3.81×10^2)=0.58092+2=2.58092</span>.</li>
          </ol>
        `,
      },
      {
        title: "تمرين 100: معادلات باللوغاريتم العشري",
        statement: "حل في R المعادلات التالية: 1) log(x)=-5. 2) log(x)=3. 3) log(x)=0.01.",
        solutionHtml: `
          <ol class="solution-list">
            <li><span class="math">x=10^(-5)</span>.</li>
            <li><span class="math">x=10^3=1000</span>.</li>
            <li><span class="math">x=10^(0.01)</span>.</li>
          </ol>
        `,
      },
      {
        title: "تمرين 101: متراجحات باللوغاريتم العشري",
        statement: "حل في R المتراجحات التالية: 1) log(x)&gt;4. 2) log(x)&lt;-10. 3) log(x)≥0.1. 4) log(x)&lt;log(1-x).",
        solutionHtml: `
          <ol class="solution-list">
            <li>بما أن <span class="math">log</span> متزايدة و <span class="math">x&gt;0</span>: <span class="math">x&gt;10^4</span>.</li>
            <li><span class="math">0&lt;x&lt;10^(-10)</span>.</li>
            <li><span class="math">x≥10^(0.1)</span>.</li>
            <li>الشروط: <span class="math">x&gt;0</span> و <span class="math">1-x&gt;0</span>. وبما أن <span class="math">log</span> متزايدة: <span class="math">x&lt;1-x</span>، إذن <span class="math">0&lt;x&lt;1/2</span>.</li>
          </ol>
        `,
      },      {
        title: "تمرين 102: معادلات تفاضلية بسيطة",
        statement: "حل المعادلات التفاضلية التالية: 1) y'=3y. 2) y'+2y=0. 3) 2y'+5y=0. 4) (1/2)y'=4y.",
        solutionHtml: `
          <ol class="solution-list">
            <li><span class="math">y'=3y</span>: الحلول <span class="math">y=Ce^(3x)</span>.</li>
            <li><span class="math">y'+2y=0</span>: أي <span class="math">y'=-2y</span>، الحلول <span class="math">y=Ce^(-2x)</span>.</li>
            <li><span class="math">2y'+5y=0</span>: أي <span class="math">y'=-(5/2)y</span>، الحلول <span class="math">y=Ce^(-5x/2)</span>.</li>
            <li><span class="math">(1/2)y'=4y</span>: أي <span class="math">y'=8y</span>، الحلول <span class="math">y=Ce^(8x)</span>.</li>
          </ol>
        `,
      },
      {
        title: "تمرين 103: حل خاص لمعادلة تفاضلية",
        statement: "حل المعادلة التفاضلية 2y'+y=0. ثم عين الحل الخاص الذي يحقق f(ln4)=1.",
        solutionHtml: `<p>من <span class="math">2y'+y=0</span> نحصل على <span class="math">y'=-(1/2)y</span>، إذن <span class="math">y=Ce^(-x/2)</span>. الشرط <span class="math">f(ln4)=1</span> يعطي <span class="math">C e^(-ln4/2)=1</span> أي <span class="math">C/2=1</span>، ومنه <span class="math">C=2</span>. إذن <span class="math">f(x)=2e^(-x/2)</span>.</p>`,
      },
      {
        title: "تمرين 104: مستقيم مقارب أفقي",
        statement: "ليكن f حلا لمعادلة تفاضلية، وتبين من حلها أن lim f(x) عند +∞ تساوي 5/2. هل يقبل المنحنى الممثل للدالة f مستقيمًا مقاربًا عند +∞؟ عين معادلته.",
        solutionHtml: `<p>نعم. إذا كانت <span class="math">lim_(x-&gt;+∞) f(x)=5/2</span> فإن المنحنى يقبل مستقيمًا مقاربًا أفقيًا عند <span class="math">+∞</span> معادلته <span class="math">y=5/2</span>.</p>`,
      },      {
        title: "تمرين 106: دالة أسية ومعادلة تفاضلية",
        statement: "لتكن f معرفة على R بـ f(x)=2e^(3x). جد معادلة تفاضلية من الشكل y'=ay تكون f حلا لها، ثم حل هذه المعادلة.",
        solutionHtml: `<p><span class="math">f'(x)=6e^(3x)=3f(x)</span>. إذن المعادلة هي <span class="math">y'=3y</span>، وحلولها <span class="math">y=Ce^(3x)</span>. والدالة المعطاة توافق <span class="math">C=2</span>.</p>`,
      },
      {
        title: "تمرين 107: نموذج إشعاعي أسي",
        statement: "كتلة عينة مشعة تعطى بـ m(t)=300e^(-t/5)، حيث t بالسنوات. 1) تحقق أن m حل للمعادلة (E). 2) بين أن m(t)&gt;0 لكل t≥0 وأن m متناقصة. 3) احسب m(0) و m(5). 4) هل تنعدم الكتلة؟",
        solutionHtml: `<ol class="solution-list"><li><span class="math">m'(t)=-(1/5)300e^(-t/5)=-(1/5)m(t)</span>، إذن تحقق معادلة من الشكل <span class="math">m'=-(1/5)m</span>.</li><li><span class="math">m(t)&gt;0</span> و <span class="math">m'(t)&lt;0</span>، إذن m متناقصة.</li><li><span class="math">m(0)=300</span> و <span class="math">m(5)=300/e</span>.</li><li>لا تنعدم الكتلة رياضيا لأن <span class="math">e^(-t/5)&gt;0</span> لكل <span class="math">t</span>، لكنها تقترب من الصفر.</li></ol>`,
      },
      {
        title: "تمرين 108: دراسة دالة أسية من الشكل ae^(2x)+be^x+c",
        statement: "لتكن f الدالة المعرفة على R بـ f(x)=ae^(2x)+be^x+c، حيث a و b و c أعداد حقيقية. يمثل (C) منحناها في معلم متعامد ومتجانس. 1) عين a و b و c علما أن (C) يشمل O، وأن f' تنعدم من أجل x=ln(3/4)، وأن المستقيم y=1 مقارب أفقي للمنحنى. 2) نأخذ f(x)=2e^(2x)-3e^x+1. احسب lim f(x) عند -∞ ثم فسر هندسيا. احسب lim f(x) عند +∞. ادرس اتجاه تغير f وشكل جدول تغيراتها. بين أن (C) يملك مماسا أفقيا، ثم عين معادلة المماس عند النقطة ذات الفاصلة 0. عين الفروع اللانهائية للمنحنى، ثم ارسم (C).",
        solutionHtml: `
          <ol class="solution-list">
            <li>من <span class="math">O∈(C)</span> نحصل على <span class="math">f(0)=0</span> أي <span class="math">a+b+c=0</span>. ومن المقارب <span class="math">y=1</span> عند <span class="math">-∞</span> نحصل على <span class="math">c=1</span>، ومنه <span class="math">a+b=-1</span>. كذلك <span class="math">f'(x)=2ae^(2x)+be^x</span>، وبما أن <span class="math">f'(ln(3/4))=0</span> نحصل على <span class="math">3a+2b=0</span>. بحل النظام: <span class="math">a=2</span> و <span class="math">b=-3</span> و <span class="math">c=1</span>.</li>
            <li><span class="math">lim_(x-&gt;-∞) f(x)=1</span>، إذن المستقيم <span class="math">y=1</span> مقارب أفقي عند <span class="math">-∞</span>. وعند <span class="math">+∞</span>: <span class="math">f(x)=e^(2x)(2-3e^(-x)+e^(-2x))</span> لذلك <span class="math">lim_(x-&gt;+∞) f(x)=+∞</span>.</li>
            <li><span class="math">f'(x)=4e^(2x)-3e^x=e^x(4e^x-3)</span>. وبما أن <span class="math">e^x&gt;0</span> فإن إشارة <span class="math">f'</span> هي إشارة <span class="math">4e^x-3</span>. تنعدم عند <span class="math">x=ln(3/4)</span>. إذن f متناقصة على <span class="math">]-∞; ln(3/4)]</span> ومتزايدة على <span class="math">[ln(3/4); +∞[</span>.</li>
            <li>القيمة الصغرى هي <span class="math">f(ln(3/4))=2(9/16)-3(3/4)+1=-1/8</span>. إذن للمُنحنى مماس أفقي عند <span class="math">A(ln(3/4), -1/8)</span>.</li>
            <li>عند الفاصلة <span class="math">0</span>: <span class="math">f(0)=0</span> و <span class="math">f'(0)=1</span>، لذلك معادلة المماس هي <span class="math">y=x</span>.</li>
            <li>الفروع اللانهائية: عند <span class="math">-∞</span> يوجد المقارب الأفقي <span class="math">y=1</span>، وعند <span class="math">+∞</span> يرتفع المنحنى نحو <span class="math">+∞</span> ولا يوجد مقارب أفقي أو مائل.</li>
          </ol>
        `,
      },      {
        title: "تمرين 110: معادلات تفاضلية ومنحنى أسي",
        statement: "نعتبر المعادلتين التفاضليتين (E1): y'-2y=0 و (E2): y'=y. 1) قارن حلول المعادلتين، ثم عين الحل الخاص f1 لـ (E1) حيث f1(0)=4، والحل الخاص f2 لـ (E2) حيث f2(0)=1. 2) لتكن g معرفة على R بـ g(x)=2e^(2x)-e^x. ادرس نهاياتها عند -∞ و +∞، ثم احسب مشتقتها واستنتج اتجاه تغيرها وقيمتها الصغرى. 3) عين نقط تقاطع منحناها مع محوري الإحداثيات، ثم ارسم شكلا تقريبيا للمنحنى.",
        solutionHtml: `
          <ol class="solution-list">
            <li>حلول <span class="math">(E1)</span> هي <span class="math">y=Ce^(2x)</span>، وحلول <span class="math">(E2)</span> هي <span class="math">y=Ce^x</span>. إذن ليستا نفس مجموعة الحلول، والحل المشترك الوحيد بينهما هو الدالة المنعدمة.</li>
            <li>من <span class="math">f1(0)=4</span> نحصل على <span class="math">f1(x)=4e^(2x)</span>. ومن <span class="math">f2(0)=1</span> نحصل على <span class="math">f2(x)=e^x</span>.</li>
            <li><span class="math">g(x)=2e^(2x)-e^x=e^x(2e^x-1)</span>. عند <span class="math">-∞</span>: <span class="math">g(x)→0</span>. وعند <span class="math">+∞</span>: <span class="math">g(x)→+∞</span>.</li>
            <li><span class="math">g'(x)=4e^(2x)-e^x=e^x(4e^x-1)</span>. وبما أن <span class="math">e^x&gt;0</span> فإن الإشارة تتغير عند <span class="math">x=ln(1/4)</span>. إذن <span class="math">g</span> متناقصة ثم متزايدة، وقيمتها الصغرى <span class="math">g(ln(1/4))=-1/8</span>.</li>
            <li>مع محور التراتيب: <span class="math">g(0)=1</span>، إذن النقطة <span class="math">(0,1)</span>. ومع محور الفواصل: <span class="math">e^x(2e^x-1)=0</span> ومنه <span class="math">x=ln(1/2)</span>.</li>
          </ol>
        `,
      },
      {
        title: "تمرين 111: دالة لوغارتمية",
        statement: "لتكن f المعرفة على I=]-1/2,+∞[ بـ f(x)=ln(1+2x). نضع g(x)=f(x)-x، ونعرف u_(n+1)=f(u_n) مع u_0=1.",
        statementHtml: `
          <div class="exercise-readable-statement">
            <p>لتكن <span class="math">f</span> المعرفة على <span class="math">I=]-1/2,+∞[</span> بـ:</p>
            <div class="math-equation">f(x)=ln(1+2x)</div>
            <ol class="solution-list">
              <li>بين أن <span class="math">f</span> متزايدة تماما على <span class="math">I</span>.</li>
              <li>عين نهايتي <span class="math">f</span> عند طرفي <span class="math">I</span>.</li>
              <li>نضع <span class="math">g(x)=f(x)-x</span>. ادرس تغيرات <span class="math">g</span> على <span class="math">I</span>، ثم بين أن للمعادلة <span class="math">g(x)=0</span> حلين: أحدهما <span class="math">0</span> والآخر <span class="math">α∈]1,2[</span>.</li>
              <li>استنتج إشارة <span class="math">f(x)-x</span>، ثم قارن بين <span class="math">f(x)</span> و <span class="math">x</span>.</li>
              <li>لتكن المتتالية <span class="math">u_(n+1)=f(u_n)</span> و <span class="math">u_0=1</span>. ادرس تموضع حدودها ورتابتها وتقاربها.</li>
            </ol>
          </div>
        `,
        solutionHtml: `
          <ol class="solution-list">
            <li><span class="math">f'(x)=2/(1+2x)</span> وهي موجبة على <span class="math">I</span>، إذن <span class="math">f</span> متزايدة تماما.</li>
            <li><span class="math">lim_(x→-1/2+) f(x)=-∞</span> و <span class="math">lim_(x→+∞) f(x)=+∞</span>.</li>
            <li><span class="math">g'(x)=2/(1+2x)-1=(1-2x)/(1+2x)</span>. إذن <span class="math">g</span> متزايدة على <span class="math">]-1/2,1/2]</span> ومتناقصة على <span class="math">[1/2,+∞[</span>.</li>
            <li><span class="math">g(0)=0</span> و <span class="math">g(1)=ln3-1&gt;0</span> و <span class="math">g(2)=ln5-2&lt;0</span>، لذلك يوجد حل ثان وحيد <span class="math">α∈]1,2[</span>.</li>
            <li>إشارة <span class="math">g</span>: سالبة على <span class="math">]-1/2,0[</span>، موجبة على <span class="math">]0,α[</span>، وسالبة على <span class="math">]α,+∞[</span>. ومنه نقارن <span class="math">f(x)</span> و <span class="math">x</span> حسب نفس الإشارة.</li>
            <li>بما أن <span class="math">u_0=1∈]0,α[</span> و <span class="math">f(x)&gt;x</span> على هذا المجال، فإن <span class="math">(u_n)</span> متزايدة ومحدودة من الأعلى بـ <span class="math">α</span>، إذن متقاربة ونهايتها هي <span class="math">α</span>.</li>
          </ol>
        `,
      },
      {
        title: "تمرين 112: دراسة f(x)=ln(x)ln(1-x)",
        statement: "لتكن f المعرفة على [0,1] بـ f(0)=0 و f(1)=0 و f(x)=ln(x)ln(1-x) إذا x∈]0,1[. نرمز إلى منحناها بـ (C). 1) باستعمال النهاية الشهيرة x^a ln(x)→0 عند x→0+، بين أن نهايتي f عند 0 و1 تساويان 0، ثم ادرس نهاية f(x)/x عند 0+ وفسر هندسيا. 2) بين أن المنحنى يقبل محور تناظر معادلته x=1/2. 3) ادرس تغيرات f باستعمال φ(x)=(1-x)ln(1-x)-xln(x). 4) استنتج القيمة العظمى وارسم شكلا تقريبيا للمنحنى.",
        solutionHtml: `
          <ol class="solution-list">
            <li>عند <span class="math">0+</span>: <span class="math">ln(1-x)∼-x</span>، لذلك <span class="math">f(x)∼-xln(x)</span> ومنه <span class="math">f(x)→0</span>. وبالتناظر نحصل أيضا على <span class="math">f(x)→0</span> عند <span class="math">1-</span>.</li>
            <li><span class="math">f(x)/x = ln(x)·ln(1-x)/x</span>، ومع <span class="math">ln(1-x)/x→-1</span> نحصل على <span class="math">f(x)/x→+∞</span>. هندسيا: للمُنحنى مماس عمودي عند الأصل.</li>
            <li><span class="math">f(1/2-x)=f(1/2+x)</span> لكل <span class="math">x∈]0,1/2[</span>، إذن محور التناظر هو المستقيم <span class="math">x=1/2</span>.</li>
            <li><span class="math">f'(x)=ln(1-x)/x - ln(x)/(1-x)=φ(x)/(x(1-x))</span>. وبما أن <span class="math">x(1-x)&gt;0</span> فإن إشارة <span class="math">f'</span> هي إشارة <span class="math">φ</span>.</li>
            <li>تكون <span class="math">φ(x)&gt;0</span> على <span class="math">]0,1/2[</span> و <span class="math">φ(1/2)=0</span> و <span class="math">φ(x)&lt;0</span> على <span class="math">]1/2,1[</span>. إذن <span class="math">f</span> متزايدة على <span class="math">[0,1/2]</span> ومتناقصة على <span class="math">[1/2,1]</span>.</li>
            <li>القيمة العظمى هي <span class="math">f(1/2)=ln(1/2)^2=(ln2)^2</span>. كما أن <span class="math">0&lt;f(x)≤(ln2)^2</span> على <span class="math">]0,1[</span>.</li>
          </ol>
        `,
      },    ],
    solved: [
      {
        title: "تمرين محلول 1",
        statement: "احسب نهاية f(x)=2+5e^x عند x→-∞، ثم فسر النتيجة هندسيا.",
        solution: "عند x→-∞ لدينا e^x→0، ومنه 2+5e^x→2. إذن المستقيم y=2 مقارب أفقي للمنحنى عند -∞.",
      },
      {
        title: "تمرين محلول 2",
        statement: "احسب نهاية f(x)=(x^2+e^x)/(3e^x-x) عند x→+∞.",
        solution: "نقسم على e^x فنحصل على (x^2/e^x+1)/(3-x/e^x). وبما أن x^2/e^x→0 و x/e^x→0، فإن النهاية تساوي 1/3.",
      },
    ],
  },
  {
    id: "comparative-growth",
    title: "التزايد المقارن",
    icon: "⇈",
    summary: "باب مستقل لترتيب سرعة نمو اللوغارتم والقوى والأسية واستعمالها في حساب النهايات.",
    lesson: `
      <article class="structured-lesson limits-masterclass comparison-masterclass">
        <header class="structured-lesson-hero">
          <span>محور 6</span>
          <h3>التزايد المقارن</h3>
        </header>

        <section class="property-box theorem-box">
          <strong>سلم النمو عند <span class="math">+∞</span>:</strong>
          <div class="math-equation">ln(x) << x^a << e^x</div>
          <p>حيث <span class="math">a&gt;0</span>. المعنى العملي: اللوغارتم أبطأ من كل قوة، والأسية أسرع من كل قوة.</p>
        </section>

        <section class="lesson-block comparison-rule-board">
          <h4>1- التزايد المقارن للدالتين <span class="math">x→x</span> و <span class="math">x→e^x</span></h4>
          <div class="property-box theorem-box comparison-rule-strip">
            <strong>خواص:</strong>
            <div class="math-equation">lim e^x/x = +∞ عند x→+∞</div>
            <div class="math-equation">lim x e^x = 0 عند x→-∞</div>
          </div>
          <div class="method-box proof-card">
            <strong>برهان مختصر للفكرة الأولى:</strong>
            <p>نعتبر على <span class="math">[0,+∞[</span> الدالة <span class="math">f(x)=e^x-x^2/2</span>. مشتقتها:</p>
            <div class="math-equation">f'(x)=e^x-x</div>
            <p>وبما أننا نعلم أن <span class="math">e^x&gt;x</span> لكل <span class="math">x</span>، فإن <span class="math">f'(x)&gt;0</span>. إذن <span class="math">f</span> متزايدة و <span class="math">f(0)=1</span>، ومنه <span class="math">f(x)&gt;0</span>.</p>
            <div class="math-equation">e^x &gt; x^2/2</div>
            <div class="math-equation">e^x/x &gt; x/2</div>
            <p>وبما أن <span class="math">x/2→+∞</span> نحصل بالمقارنة على <span class="math">e^x/x→+∞</span>.</p>
          </div>
          <div class="method-box proof-card">
            <strong>برهان النهاية عند <span class="math">-∞</span>:</strong>
            <p>نضع <span class="math">X=-x</span>. عندما <span class="math">x→-∞</span> فإن <span class="math">X→+∞</span>، ونكتب:</p>
            <div class="math-equation">x e^x = -X/e^X</div>
            <p>وبما أن <span class="math">X/e^X→0</span> فإن <span class="math">x e^x→0</span>.</p>
          </div>
        </section>

        <section class="lesson-block comparison-rule-board">
          <h4>2- التزايد المقارن للدالتين <span class="math">x→ln(x)</span> و <span class="math">x→x</span></h4>
          <div class="property-box theorem-box comparison-rule-strip">
            <strong>خواص:</strong>
            <div class="math-equation">lim ln(x)/x = 0 عند x→+∞</div>
            <div class="math-equation">lim x ln(x) = 0 عند x→0+</div>
          </div>
          <div class="method-box proof-card">
            <strong>البرهان باستعمال تغيير المتغير:</strong>
            <p>من أجل النهاية الأولى نضع <span class="math">X=ln(x)</span>، فيصبح <span class="math">x=e^X</span> وعندما <span class="math">x→+∞</span> فإن <span class="math">X→+∞</span>.</p>
            <div class="math-equation">ln(x)/x = X/e^X → 0</div>
            <p>ومن أجل النهاية الثانية نضع <span class="math">X=1/x</span>. عندما <span class="math">x→0+</span> فإن <span class="math">X→+∞</span>.</p>
            <div class="math-equation">x ln(x) = -ln(X)/X → 0</div>
          </div>
        </section>
        <section class="lesson-block limit-comparison-proof">
          <h4>3- التزايد المقارن مع الدالة <span class="math">x→x^n</span></h4>
          <div class="method-box proof-card">
            <p>إذا كان <span class="math">a&gt;0</span> فإن:</p>
            <div class="math-equation">lim ln(x)/x^a = 0 عند x→+∞</div>
            <p>وبالعكس:</p>
            <div class="math-equation">lim x^a/ln(x) = +∞ عند x→+∞</div>
          </div>
          <div class="property-box">
            <strong>مثال سريع:</strong>
            <div class="math-equation">lim ln(x)/√x = 0</div>
            <p>لأن <span class="math">√x=x^(1/2)</span> قوة موجبة، وكل قوة موجبة تغلب <span class="math">ln(x)</span>.</p>
          </div>
        </section>

        <section class="lesson-block limit-comparison-proof">
          <h4>4- الأسية أمام القوى</h4>
          <div class="method-box proof-card">
            <p>من أجل كل <span class="math">n∈N*</span>:</p>
            <div class="math-equation">lim e^x/x^n = +∞ عند x→+∞</div>
            <div class="math-equation">lim x^n/e^x = 0 عند x→+∞</div>
          </div>
          <div class="property-box">
            <strong>مثال سريع:</strong>
            <div class="math-equation">lim x^5/e^x = 0</div>
            <p>لأن الأسية تغلب أي قوة مهما كان أسها ثابتا.</p>
          </div>
        </section>

        <section class="lesson-block limit-comparison-proof">
          <h4>5- قرب الصفر</h4>
          <div class="method-box proof-card">
            <p>إذا كان <span class="math">a&gt;0</span> فإن:</p>
            <div class="math-equation">lim x^a ln(x) = 0 عند x→0+</div>
            <p>هذه قاعدة مهمة جدا عند دراسة دوال من الشكل <span class="math">ln(x)ln(1-x)</span> أو عند البحث عن مماس قرب الأصل.</p>
          </div>
        </section>

        <section class="lesson-block comparison-visual-summary">
          <h4>خلاصة الباب</h4>
          <div class="property-box theorem-box">
            <strong>عند <span class="math">+∞</span>:</strong>
            <div class="math-equation">ln(x) << x << x^n << e^x</div>
            <p>أي إن اللوغارتم ينمو ببطء، والقوى تنمو أسرع منه، أما الدالة الأسية فتغلب القوى كلها.</p>
          </div>
          <figure class="comparison-growth-svg" aria-label="رسم تقريبي للتزايد المقارن">
            <svg viewBox="0 0 760 300" role="img">
              <rect x="1" y="1" width="758" height="298" rx="18" fill="#ffffff"/>
              <line x1="70" y1="250" x2="710" y2="250" stroke="#111827" stroke-width="2"/>
              <line x1="70" y1="250" x2="70" y2="32" stroke="#111827" stroke-width="2"/>
              <path d="M80 240 C180 228, 330 210, 690 188" fill="none" stroke="#2563eb" stroke-width="4"/>
              <path d="M80 245 C190 236, 300 210, 690 72" fill="none" stroke="#16a34a" stroke-width="4"/>
              <path d="M80 246 C250 244, 390 205, 690 44" fill="none" stroke="#db2777" stroke-width="4"/>
              <path d="M80 247 C270 245, 430 232, 560 130 C610 70, 650 38, 690 24" fill="none" stroke="#ef4444" stroke-width="4"/>
              <g font-family="Arial, sans-serif" font-size="22" font-weight="700">
                <text x="575" y="194" fill="#2563eb">y=ln x</text>
                <text x="570" y="88" fill="#16a34a">y=x²</text>
                <text x="525" y="55" fill="#db2777">y=x³</text>
                <text x="424" y="82" fill="#ef4444">y=eˣ</text>
              </g>
            </svg>
          </figure>
        </section>
        <section class="lesson-block">
          <h4>6- كيف أستعمل القاعدة؟</h4>
          <div class="method-box">
            <ol class="solution-list">
              <li>حدد الحدين المتنافسين: هل عندك <span class="math">ln(x)</span> مع قوة؟ أم قوة مع <span class="math">e^x</span>؟</li>
              <li>اكتب الكسر بحيث يظهر الطرف الغالب في المقام أو البسط.</li>
              <li>استعمل القاعدة مباشرة، ثم عالج الثوابت والإشارات.</li>
              <li>إذا وجدت جداء، حوّله إلى كسر عند الحاجة.</li>
            </ol>
          </div>
        </section>
      </article>
    `,
    activities: [
      {
        title: "نشاط: رتب النمو عند +∞",
        body: "رتب الدوال ln(x)، x^3، e^x من الأبطأ إلى الأسرع عند +∞.",
        solution: "الترتيب هو: ln(x) ثم x^3 ثم e^x. لذلك ln(x)/x^3→0 و x^3/e^x→0.",
      },
      {
        title: "نشاط: اختيار القاعدة",
        body: "احسب ذهنيا نهاية x^4/e^x عند +∞ ونهاية ln(x)/x عند +∞.",
        solution: "الأولى 0 لأن الأسية تغلب القوى. والثانية 0 لأن كل قوة موجبة، ومنها x، تغلب ln(x).",
      },
    ],
    exercises: [
      {
        title: "تمرين 1: نهايات مباشرة بالتزايد المقارن",
        statement: "احسب عند +∞: 1) ln(x)/x^2. 2) x^6/e^x. 3) e^x/x^4.",
        solutionHtml: `<ol class="solution-list"><li><span class="math">ln(x)/x^2→0</span>.</li><li><span class="math">x^6/e^x→0</span>.</li><li><span class="math">e^x/x^4→+∞</span>.</li></ol>`,
      },
      {
        title: "تمرين 2: نهاية قرب الصفر",
        statement: "احسب lim x^2 ln(x) عندما x→0+.",
        solutionHtml: `<p>بما أن <span class="math">a=2&gt;0</span> فإن <span class="math">x^2 ln(x)→0</span> عند <span class="math">0+</span>.</p>`,
      },      {
        title: "تمرين 3: دراسة دالة لوغارتمية مركبة",
        statement: "نعتبر g(x)=x+1+ln x على ]0,+∞[، ثم f(x)=x ln(x)/(x+1) مع f(0)=0 على [0,+∞[. ادرس النهايات والتغيرات والوضع النسبي مع y=ln x.",
        statementHtml: `
          <div class="exercise-readable-statement">
            <p><strong>الجزء الأول:</strong> نعتبر الدالة <span class="math">g</span> المعرفة على <span class="math">]0,+∞[</span> بـ:</p>
            <div class="math-equation">g(x)=x+1+ln(x)</div>
            <ol class="solution-list">
              <li>عين نهايتي <span class="math">g</span> عند <span class="math">0+</span> و <span class="math">+∞</span>.</li>
              <li>ادرس اتجاه تغير <span class="math">g</span> ثم شكل جدول تغيراتها.</li>
              <li>بين أن المعادلة <span class="math">g(x)=0</span> تقبل حلا وحيدا <span class="math">α</span> في <span class="math">]0,+∞[</span>.</li>
              <li>باستعمال حاسبة بيانية، أعط حصرا للعدد <span class="math">α</span> سعته <span class="math">0.01</span>.</li>
              <li>حدد حسب قيم <span class="math">x</span> إشارة <span class="math">g(x)</span> على <span class="math">]0,+∞[</span>.</li>
            </ol>
            <p><strong>الجزء الثاني:</strong> نعتبر الدالة <span class="math">f</span> المعرفة على <span class="math">[0,+∞[</span> كما يلي:</p>
            <div class="math-equation">f(0)=0 ، f(x)=x ln(x)/(x+1) إذا x&gt;0</div>
            <ol class="solution-list">
              <li>بين أن <span class="math">f</span> مستمرة على <span class="math">[0,+∞[</span>.</li>
              <li>احسب نهاية <span class="math">f</span> عند <span class="math">+∞</span>، ثم فسرها بيانيا.</li>
              <li>بين أن <span class="math">f'(x)=g(x)/(x+1)^2</span> من أجل كل <span class="math">x&gt;0</span>.</li>
              <li>استنتج اتجاه تغير <span class="math">f</span> وشكل جدول تغيراتها، ثم تحقق من قيمة <span class="math">f(α)</span>.</li>
              <li>ليكن <span class="math">Γ</span> منحنى الدالة <span class="math">y=ln(x)</span>. ادرس الوضع النسبي بين <span class="math">C</span> و <span class="math">Γ</span>.</li>
              <li>احسب <span class="math">lim_(x→+∞)(f(x)-ln(x))</span> وفسر النتيجة بيانيا، ثم ارسم المنحنيين.</li>
            </ol>
          </div>
        `,
        solutionHtml: `
          <ol class="solution-list">
            <li><span class="math">g'(x)=1+1/x&gt;0</span>، إذن <span class="math">g</span> متزايدة تماما، ومع <span class="math">g(0+)=-∞</span> و <span class="math">g(+∞)=+∞</span> يوجد حل وحيد <span class="math">α</span>.</li>
            <li>إشارة <span class="math">g</span>: سالبة على <span class="math">]0,α[</span>، منعدمة عند <span class="math">α</span>، وموجبة على <span class="math">]α,+∞[</span>.</li>
            <li>استمرارية <span class="math">f</span> عند <span class="math">0</span> تأتي من <span class="math">xln(x)→0</span>، إذن <span class="math">f(x)→0=f(0)</span>.</li>
            <li><span class="math">f'(x)=((lnx+1)(x+1)-xlnx)/(x+1)^2=(x+1+lnx)/(x+1)^2=g(x)/(x+1)^2</span>.</li>
            <li>إذن <span class="math">f</span> متناقصة على <span class="math">]0,α]</span> ومتزايدة على <span class="math">[α,+∞[</span>، و <span class="math">lnα=-α-1</span> يعطي <span class="math">f(α)=αlnα/(α+1)=-α</span>.</li>
            <li><span class="math">f(x)-lnx = -lnx/(x+1)</span>، لذلك <span class="math">C</span> فوق <span class="math">Γ</span> على <span class="math">]0,1[</span> وتحته على <span class="math">]1,+∞[</span>، ويتقاطعان عند <span class="math">x=1</span>. كما أن الفرق يؤول إلى <span class="math">0</span> عند <span class="math">+∞</span>.</li>
          </ol>
        `,
      },
      {
        title: "تمرين 4: مسألة استغلال",
        statement: "ليكن Γ منحنى y=ln x. نبحث عن نقاطه التي يكون بعدها إلى المبدأ O أصغريا، ثم ندرس دالة مساعدة g(x)=x^2+ln x و h(x)=x^2+(ln x)^2.",
        statementHtml: `
          <div class="exercise-readable-statement">
            <p>ليكن <span class="math">Γ</span> التمثيل البياني للدالة <span class="math">y=ln(x)</span> في معلم متعامد ومتجانس.</p>
            <p><strong>مشكلة:</strong> نريد أن نعين نقطة من <span class="math">Γ</span> تكون أقرب ما يمكن إلى المبدأ <span class="math">O</span>.</p>
            <ol class="solution-list">
              <li>ادرس الدالة <span class="math">g</span> المعرفة على <span class="math">]0,+∞[</span> بـ <span class="math">g(x)=x^2+ln(x)</span>: نهاياتها، تغيراتها، وعدد حلول <span class="math">g(x)=0</span>.</li>
              <li>ادرس إشارة <span class="math">g(x)</span> على <span class="math">]0,+∞[</span>.</li>
              <li>لتكن <span class="math">h(x)=x^2+(lnx)^2</span>. ادرس اتجاه تغير <span class="math">h</span> باستعمال <span class="math">g</span>.</li>
              <li>استنتج النقطة من <span class="math">Γ</span> الأقرب إلى <span class="math">O</span>.</li>
            </ol>
          </div>
        `,
        solutionHtml: `
          <ol class="solution-list">
            <li><span class="math">g'(x)=2x+1/x&gt;0</span> على <span class="math">]0,+∞[</span>، إذن <span class="math">g</span> متزايدة تماما.</li>
            <li><span class="math">g(0+)=-∞</span> و <span class="math">g(+∞)=+∞</span>، لذلك للمعادلة <span class="math">g(x)=0</span> حل وحيد <span class="math">α</span>، وإشارة <span class="math">g</span> سالبة قبل <span class="math">α</span> وموجبة بعده.</li>
            <li><span class="math">h'(x)=2x+2lnx/x=2(x^2+lnx)/x=2g(x)/x</span>. وبما أن <span class="math">x&gt;0</span> فإن إشارة <span class="math">h'</span> هي إشارة <span class="math">g</span>.</li>
            <li>إذن <span class="math">h</span> تتناقص على <span class="math">]0,α]</span> وتتزايد على <span class="math">[α,+∞[</span>. وبما أن <span class="math">OM^2=h(x)</span> فإن أقرب نقطة إلى <span class="math">O</span> هي <span class="math">M(α, lnα)</span>.</li>
          </ol>
        `,
      },      {
        title: "تمرين 5: مقارنة متتاليتين",
        statement: "قارن بين العددين الطبيعيين n^(n+1) و (n+1)^n حيث n عدد طبيعي غير معدوم.",
        statementHtml: `
          <div class="exercise-readable-statement">
            <p><strong>مقارنة الأعداد الطبيعية</strong> <span class="math">n^(n+1)</span> و <span class="math">(n+1)^n</span></p>
            <ol class="solution-list">
              <li>عامل المسألة على أنها مقارنة بين دالتين لوغارتميتين، وذلك بدراسة المتراجحة:</li>
              <li><span class="math">n^(n+1) &gt; (n+1)^n</span></li>
              <li>خذ اللوغارتم للطرفين واستنتج صيغة مكافئة باستعمال:</li>
              <li><span class="math">ln(n)/n ? ln(n+1)/(n+1)</span></li>
              <li>اختر دالة مناسبة تسمح بدراسة اتجاه تغير العبارة <span class="math">ln(x)/x</span>.</li>
            </ol>
          </div>
        `,
        solutionHtml: `
          <ol class="solution-list">
            <li>نأخذ اللوغارتم لأن الطرفين موجبان: <span class="math">n^(n+1) &gt; (n+1)^n</span> يكافئ <span class="math">(n+1)ln(n) &gt; nln(n+1)</span>.</li>
            <li>بعد القسمة على <span class="math">n(n+1)&gt;0</span> نحصل على: <span class="math">ln(n)/n &gt; ln(n+1)/(n+1)</span>.</li>
            <li>ندرس <span class="math">h(x)=ln(x)/x</span>. مشتقتها <span class="math">h'(x)=(1-lnx)/x^2</span>.</li>
            <li>على <span class="math">[3,+∞[</span> تكون <span class="math">h</span> متناقصة، ومنه <span class="math">ln(n)/n &gt; ln(n+1)/(n+1)</span> لكل <span class="math">n≥3</span>.</li>
            <li>نستنتج: <span class="math">n^(n+1) &gt; (n+1)^n</span> لكل <span class="math">n≥3</span>. وتفحص القيم الصغيرة مباشرة: عند <span class="math">n=1</span> الطرف الأول أصغر، وعند <span class="math">n=2</span> الطرفان يعطيان <span class="math">8</span> و <span class="math">9</span> فالطرف الأول أصغر.</li>
          </ol>
        `,
      },
      {
        title: "تمرين 6: الدوال x↦x^α",
        statement: "لتكن α عددا حقيقيا و f_α(x)=x^α=e^(αlnx) على ]0,+∞[. ادرس اتجاه تغيرها ونهاياتها حسب قيم α، ثم ادرس g_α(x)=f_α(x)-f_α'(x).",
        statementHtml: `
          <div class="exercise-readable-statement">
            <p><strong>الدوال</strong> <span class="math">x↦x^α</span> حيث <span class="math">α∈R</span></p>
            <p>نعتبر <span class="math">f_α</span> المعرفة على <span class="math">]0,+∞[</span> بـ:</p>
            <div class="math-equation">f_α(x)=x^α=e^(αlnx)</div>
            <ol class="solution-list">
              <li>ماذا تكون الدالة في الحالتين <span class="math">α=0</span> و <span class="math">α=1</span>؟</li>
              <li>افترض <span class="math">α≠0</span> و <span class="math">α≠1</span>. ادرس نهايتي <span class="math">f_α</span> عند <span class="math">0+</span> و <span class="math">+∞</span> حسب إشارة <span class="math">α</span>.</li>
              <li>بين أن <span class="math">f_α'(x)=αx^(α-1)</span>، ثم استنتج اتجاه تغير <span class="math">f_α</span>.</li>
              <li>ارسم شكلا تقريبيا للمنحنيات في الحالات: <span class="math">α=-2</span>، <span class="math">α=-1</span>، <span class="math">α=-1/2</span>، <span class="math">α=-0.3</span>.</li>
              <li>إذا كان <span class="math">α&gt;0</span> نعرف <span class="math">g_α(x)=f_α(x)-f_α'(x)</span>. ادرس نهاية <span class="math">g_α</span> عند <span class="math">0+</span> و <span class="math">+∞</span> واتجاه تغيرها حسب الحالات <span class="math">0&lt;α&lt;1</span> و <span class="math">α&gt;1</span>.</li>
            </ol>
          </div>
        `,
        solutionHtml: `
          <ol class="solution-list">
            <li>إذا <span class="math">α=0</span> فإن <span class="math">f_α(x)=1</span>. وإذا <span class="math">α=1</span> فإن <span class="math">f_α(x)=x</span>.</li>
            <li>إذا <span class="math">α&gt;0</span>: <span class="math">x^α→0</span> عند <span class="math">0+</span> و <span class="math">x^α→+∞</span> عند <span class="math">+∞</span>. وإذا <span class="math">α&lt;0</span> فالعكس: <span class="math">x^α→+∞</span> عند <span class="math">0+</span> و <span class="math">x^α→0</span> عند <span class="math">+∞</span>.</li>
            <li><span class="math">f_α'(x)=αx^(α-1)</span>. وبما أن <span class="math">x^(α-1)&gt;0</span> فإن إشارة المشتقة هي إشارة <span class="math">α</span>: تزايد إذا <span class="math">α&gt;0</span> وتناقص إذا <span class="math">α&lt;0</span>.</li>
            <li>من أجل <span class="math">α&lt;0</span> تكون المنحنيات متناقصة، تقترب من <span class="math">+∞</span> قرب <span class="math">0+</span> ومن <span class="math">0</span> عند <span class="math">+∞</span>.</li>
            <li>إذا <span class="math">α&gt;0</span> فإن <span class="math">g_α(x)=x^α-αx^(α-1)=x^(α-1)(x-α)</span>. تنعدم عند <span class="math">x=α</span> وتتغير إشارتها حوله.</li>
            <li>عند <span class="math">+∞</span>: <span class="math">g_α(x)→+∞</span>. وعند <span class="math">0+</span>: إذا <span class="math">0&lt;α&lt;1</span> فإن <span class="math">g_α(x)→-∞</span>، وإذا <span class="math">α&gt;1</span> فالسلوك حسب <span class="math">x^(α-1)</span>: النهاية <span class="math">0</span> عندما <span class="math">α&gt;1</span> مع إشارة سالبة قرب الصفر، وتكون <span class="math">-1</span> عند <span class="math">α=1</span> في الصيغة المشتقة.</li>
          </ol>
        `,
      },
    ],
    solved: [
      {
        title: "تمرين محلول 1: أسية مع حدود خطية",
        statement: "احسب النهايتين: 1) lim (e^x - x) عند x→+∞. 2) lim (2x-1)e^x عند x→-∞.",
        solutionHtml: `
          <div class="method-box"><strong>طريقة:</strong> نستعمل <span class="math">lim e^x/x=+∞</span> عند <span class="math">+∞</span> و <span class="math">lim xe^x=0</span> عند <span class="math">-∞</span>.</div>
          <ol class="solution-list">
            <li><span class="math">e^x-x = x(e^x/x-1)</span>. وبما أن <span class="math">e^x/x→+∞</span> فإن <span class="math">e^x-x→+∞</span>.</li>
            <li><span class="math">(2x-1)e^x = 2xe^x-e^x</span>. عند <span class="math">-∞</span>: <span class="math">xe^x→0</span> و <span class="math">e^x→0</span>، إذن النهاية <span class="math">0</span>.</li>
          </ol>
        `,
      },
      {
        title: "تمرين محلول 2: لوغارتم وحد خطي",
        statement: "احسب النهايتين: 1) lim (x-ln x) عند x→+∞. 2) lim (x+2)ln x عند x→0+.",
        solutionHtml: `
          <div class="method-box"><strong>طريقة:</strong> نستعمل <span class="math">lim ln(x)/x=0</span> عند <span class="math">+∞</span> و <span class="math">lim xln(x)=0</span> عند <span class="math">0+</span>.</div>
          <ol class="solution-list">
            <li><span class="math">x-ln(x)=x(1-ln(x)/x)</span>. وبما أن <span class="math">ln(x)/x→0</span>، فإن النهاية <span class="math">+∞</span>.</li>
            <li><span class="math">(x+2)ln(x)=xln(x)+2ln(x)</span>. عند <span class="math">0+</span>: <span class="math">xln(x)→0</span> و <span class="math">ln(x)→-∞</span>، إذن النهاية <span class="math">-∞</span>.</li>
          </ol>
        `,
      },
      {
        title: "تمرين محلول 3: تطبيقات متنوعة",
        statement: "احسب النهايات: 1) 2e^x/(x^2+x+1) عند +∞. 2) ln x/(2x^2-x+3) عند +∞. 3) (x^2+2x-1)e^x عند -∞. 4) (x^2+x)ln x عند 0+.",
        solutionHtml: `
          <ol class="solution-list">
            <li><span class="math">2e^x/(x^2+x+1)</span>: بقسمة على <span class="math">x^2</span> يظهر <span class="math">e^x/x^2→+∞</span>، إذن النهاية <span class="math">+∞</span>.</li>
            <li><span class="math">ln(x)/(2x^2-x+3)</span>: المقام يكافئ <span class="math">2x^2</span>، و <span class="math">ln(x)/x^2→0</span>، إذن النهاية <span class="math">0</span>.</li>
            <li><span class="math">(x^2+2x-1)e^x = x^2e^x+2xe^x-e^x</span>. عند <span class="math">-∞</span> كل حد يؤول إلى <span class="math">0</span>، إذن النهاية <span class="math">0</span>.</li>
            <li><span class="math">(x^2+x)ln(x)=x^2ln(x)+xln(x)</span>. عند <span class="math">0+</span> كلا الحدين يؤول إلى <span class="math">0</span>، إذن النهاية <span class="math">0</span>.</li>
          </ol>
        `,
      },
      {
        title: "تمرين محلول 4: حد غالب أسي",
        statement: "احسب lim [(2x-1)e^x - 3e^(2x)] عند x→+∞.",
        solutionHtml: `
          <ol class="solution-list">
            <li>نخرج العامل الغالب <span class="math">e^(2x)</span>:</li>
            <li><span class="math">(2x-1)e^x-3e^(2x)=e^(2x)(2x/e^x - 1/e^x -3)</span>.</li>
            <li>عند <span class="math">+∞</span>: <span class="math">x/e^x→0</span> و <span class="math">1/e^x→0</span>.</li>
            <li>إذن القوس يؤول إلى <span class="math">-3</span>، و <span class="math">e^(2x)→+∞</span>، ومنه النهاية <span class="math">-∞</span>.</li>
          </ol>
        `,
      },
    ],
  },  {
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


const MODULE_TRANSLATIONS = {
  fr: {
    "exp-function": {
      title: "La fonction exponentielle",
      summary: "Définition de la fonction exponentielle, propriétés algébriques, variations et représentation graphique."
    },
    "ln-function": {
      title: "La fonction logarithme",
      summary: "Définition de ln comme fonction réciproque de l'exponentielle, domaine, propriétés et variations."
    },
    equations: {
      title: "Équations et inéquations",
      summary: "Résolution d'équations et d'inéquations exponentielles et logarithmiques avec les conditions de définition."
    },
    "study-functions": {
      title: "Étude de fonctions exponentielles et logarithmiques",
      summary: "Dérivation, tableau de variations, limites et discussion de la position relative des courbes."
    },
    limits: {
      title: "Les limites",
      summary: "Un chapitre organisé pour calculer les limites, traiter les formes indéterminées, comparer et interpréter les asymptotes."
    },
    "comparative-growth": {
      title: "Croissances comparées",
      summary: "Un chapitre pour comparer la croissance du logarithme, des puissances et de l'exponentielle dans le calcul des limites."
    }
  },
  en: {
    "exp-function": {
      title: "The exponential function",
      summary: "Definition of the exponential function, algebraic properties, variations, and graph."
    },
    "ln-function": {
      title: "The logarithm function",
      summary: "Definition of ln as the inverse of the exponential function, domain, properties, and variations."
    },
    equations: {
      title: "Equations and inequalities",
      summary: "Solving exponential and logarithmic equations and inequalities with domain conditions."
    },
    "study-functions": {
      title: "Studying exponential and logarithmic functions",
      summary: "Derivatives, variation tables, limits, and relative positions of curves."
    },
    limits: {
      title: "Limits",
      summary: "A structured chapter for computing limits, handling indeterminate forms, comparison, and asymptote interpretation."
    },
    "comparative-growth": {
      title: "Comparative growth",
      summary: "A chapter for comparing the growth of logarithms, powers, and exponentials when computing limits."
    }
  }
};

function getModuleText(module, field) {
  return MODULE_TRANSLATIONS[state?.language]?.[module.id]?.[field] || module[field];
}

const CONTENT_HTML_TRANSLATIONS = {
  fr: {
    "نشاط 1: بناء خواص الدالة الأسية": "Activité 1 : construire les propriétés de la fonction exponentielle",
    "نبحث عن دالة f موجبة، مشتقتها تساوي نفسها، وتحقق f(0)=1، ثم نستنتج خواص الدالة الأسية.": "On cherche une fonction f positive, égale à sa dérivée et vérifiant f(0)=1, puis on en déduit les propriétés de la fonction exponentielle.",
    "نشاط استكشافي": "Activité d'exploration",
    "لماذا نبحث عن دالة تحقق": "Pourquoi chercher une fonction vérifiant",
    "؟": " ?",
    " و <span class=\"math\">f(0)=1</span>.": " et <span class=\"math\">f(0)=1</span>.",
    "في النمو السكاني، الفوائد المركبة، والتفكك الإشعاعي تظهر كميات يتناسب تغيرها اللحظي مع قيمتها نفسها. نبحث هنا عن النموذج الأبسط: دالة موجبة تحقق": "Dans la croissance démographique, les intérêts composés et la désintégration radioactive, on rencontre des quantités dont la variation instantanée est proportionnelle à leur valeur. On cherche ici le modèle le plus simple : une fonction positive vérifiant",
    "المرحلة 1": "Étape 1",
    "استكشاف عددي وبياني": "Exploration numérique et graphique",
    "ننطلق من التقريب التألفي": "On part de l'approximation affine",
    "نعوض أولا": "On remplace d'abord",
    "بـ": "par",
    "ثم نستخرج": "puis on factorise",
    "فنحصل على قاعدة أويلر التقريبية.": "pour obtenir la règle approchée d'Euler.",
    "المعنى البياني لـ": "Interprétation graphique de",
    "عند كل نقطة": "En chaque point",
    "من المنحنى،": "de la courbe,",
    "ميل المماس يساوي ارتفاع النقطة": "la pente de la tangente est égale à l'ordonnée du point",
    "بمعنى آخر: كلما ارتفع المنحنى، زاد انحداره. لهذا السبب يتسارع نمو الدالة ويكون منحنىها مقعّرا لأعلى.": "Autrement dit : plus la courbe monte, plus sa pente augmente. C'est pourquoi la croissance s'accélère et la courbe est convexe.",
    "تكبير الرسم البياني": "Agrandir le graphique",
    "تكبير": "Agrandir",
    "طريقة أويلر انطلاقا من التقريب التألفي": "Méthode d'Euler à partir de l'approximation affine",
    "من نقطة x₀ نبني يمينا ويسارا بضرب القيمة في 1+h أو 1-h": "À partir de x₀, on construit à droite et à gauche en multipliant par 1+h ou 1-h",
    "الفكرة: نستعمل التقريب التألفي. عند نقطة": "Idée : on utilise l'approximation affine. Au point",
    "صغيرا فإن": "est petit, alors",
    "جدول أويلر للبناء انطلاقا من": "Table d'Euler pour construire à partir de",
    "في كل خطوة نضرب القيمة الحالية في": "À chaque étape, on multiplie la valeur actuelle par",
    "للانتقال يمينا، أو في": "pour avancer vers la droite, ou par",
    "للانتقال يسارا. ابدأ بخطوة كبيرة لترى الفرق، ثم صغّرها.": "pour avancer vers la gauche. Commence avec un pas assez grand, puis diminue-le.",
    "قيمة h": "Valeur de h",
    "الخطوة k": "Pas k",
    "بناء بياني": "Construction graphique",
    "من الجدول إلى المنحنى": "Du tableau à la courbe",
    "النقاط المحسوبة في الجدول تُكوّن مضلّعة تقريبية. أخف المنحنى الحدّي أولا، ثم أظهره بعد أن يتوقع التلاميذ شكل المنحنى.": "Les points calculés dans le tableau forment une ligne polygonale approchée. Cache d'abord la courbe limite, puis affiche-la après l'anticipation de sa forme.",
    "إظهار المنحنى الحدّي": "Afficher la courbe limite",
    "بناء منحنى الدالة الأسية بطريقة أويلر": "Construire la courbe exponentielle par la méthode d'Euler",
    "بناء المنحنى بالتقريب التألفي": "Construction de la courbe par approximation affine",
    "المضلّعة الزرقاء مبنية فقط من f'=f و f(0)=1": "La ligne bleue est construite uniquement avec f'=f et f(0)=1",
    "كل نقطة زرقاء تُبنى من السابقة بضربها في": "Chaque point bleu est obtenu à partir du précédent en le multipliant par",
    "تستقر المضلّعات حول منحنى واحد نسميه لاحقا الدالة الأسية.": "les lignes polygonales se stabilisent autour d'une même courbe : la fonction exponentielle.",
    "تلميح": "Indice",
    "تخمين المرحلة:": "Conjecture :",
    "التقريب المحلي يسمح ببناء تمثيل تقريبي للدالة على": "L'approximation locale permet de construire une représentation approchée de la fonction sur",
    "انطلاقا من": "à partir de",
    "نقترب من منحنى واحد هو الدالة الأسية.": "on s'approche d'une courbe unique : la fonction exponentielle.",
    "المرحلة 2": "Étape 2",
    "برهان تحليلي وبناء الخواص": "Démonstration analytique et propriétés",
    "نثبت أن الشروط": "On montre que les conditions",
    "تقود إلى خواص الأسس المعروفة.": "conduisent aux propriétés usuelles des puissances.",
    "اشرح لماذا نضرب في <span class=\"math\">1+h</span> للانتقال يمينا، وفي <span class=\"math\">1-h</span> للانتقال يسارا، انطلاقا من <span class=\"math\">f(x<sub>0</sub>+h)≈f(x<sub>0</sub>)+hf'(x<sub>0</sub>)</span>. <span class=\"hint-chip\" data-hint=\"عوّض f'(x0) بـ f(x0) لأن f'=f.\">تلميح</span>": "Expliquer pourquoi on multiplie par <span class=\"math\">1+h</span> pour avancer vers la droite, et par <span class=\"math\">1-h</span> pour avancer vers la gauche, à partir de <span class=\"math\">f(x<sub>0</sub>+h)≈f(x<sub>0</sub>)+hf'(x<sub>0</sub>)</span>. <span class=\"hint-chip\" data-hint=\"Remplacer f'(x0) par f(x0), car f'=f.\">Indice</span>",
    "في الرسم أعلاه، لماذا يبدأ المنحنى والمضلّعة من النقطة <span class=\"math\">(0,1)</span>؟": "Dans le graphique ci-dessus, pourquoi la courbe et la ligne polygonale commencent-elles au point <span class=\"math\">(0,1)</span> ?",
    "عند تصغير <span class=\"math\">h</span> في الجدول، ماذا تلاحظ بالنسبة إلى دقة التقريب؟": "Lorsque <span class=\"math\">h</span> diminue dans le tableau, que remarques-tu concernant la précision de l'approximation ?",
    "بما أن <span class=\"math\">f'(x)=f(x)</span>، كيف يتغير ميل المماس عندما يزداد <span class=\"math\">x</span>؟ ماذا يعني ذلك بيانيًا؟": "Puisque <span class=\"math\">f'(x)=f(x)</span>, comment la pente de la tangente varie-t-elle lorsque <span class=\"math\">x</span> augmente ? Quelle est l'interprétation graphique ?",
    "هل يمكن أن ينقطع المنحنى أو يلمس محور الفواصل؟ برّر إجابتك باستعمال الإشارة.": "La courbe peut-elle se couper ou toucher l'axe des abscisses ? Justifie ta réponse à l'aide du signe.",
    "<span>التقريب المحلي يسمح ببناء تمثيل تقريبي للدالة على <span class=\"math\">[-3;3]</span> انطلاقا من <span class=\"math\">f'=f</span> و <span class=\"math\">f(0)=1</span>. عند تصغير <span class=\"math\">h</span> نقترب من منحنى واحد هو الدالة الأسية.</span>": "<span>L'approximation locale permet de construire une représentation approchée de la fonction sur <span class=\"math\">[-3;3]</span> à partir de <span class=\"math\">f'=f</span> et <span class=\"math\">f(0)=1</span>. Lorsque <span class=\"math\">h</span> diminue, on s'approche d'une courbe unique : la fonction exponentielle.</span>",
    "نثبت أن الشروط <span class=\"math\">f'=f</span> و <span class=\"math\">f(0)=1</span> تقود إلى خواص الأسس المعروفة.": "On montre que les conditions <span class=\"math\">f'=f</span> et <span class=\"math\">f(0)=1</span> conduisent aux propriétés usuelles des puissances.",
    "ادرس <span class=\"math\">u(x)=f(x)f(-x)</span> واستنتج <span class=\"math\">f(x)f(-x)=1</span>، ثم برهن أن <span class=\"math\">f(x)≠0</span> لكل <span class=\"math\">x</span>. <span class=\"hint-chip\" data-hint=\"اشتق u ولاحظ أنها ثابتة، ثم احسب u(0).\">تلميح</span>": "Étudier <span class=\"math\">u(x)=f(x)f(-x)</span> et en déduire <span class=\"math\">f(x)f(-x)=1</span>, puis montrer que <span class=\"math\">f(x)≠0</span> pour tout <span class=\"math\">x</span>. <span class=\"hint-chip\" data-hint=\"Dériver u, constater qu'elle est constante, puis calculer u(0).\">Indice</span>",
    "ليكن <span class=\"math\">y</span> ثابتا. لماذا نختار <span class=\"math\">i(x)=f(x+y)/f(x)</span>؟ <span class=\"hint-chip\" data-hint=\"نبحث عن مقدار يربط x+y بـ x. بما أن f(x) غير منعدم، يمكن القسمة عليه.\">تلميح</span>": "Soit <span class=\"math\">y</span> fixé. Pourquoi choisir <span class=\"math\">i(x)=f(x+y)/f(x)</span> ? <span class=\"hint-chip\" data-hint=\"On cherche une quantité qui relie x+y à x. Comme f(x) est non nulle, on peut diviser par f(x).\">Indice</span>",
    "اشتق <span class=\"math\">i</span>، ثم بين أنها ثابتة واستنتج <span class=\"math\">f(x+y)=f(x)f(y)</span>.": "Dériver <span class=\"math\">i</span>, puis montrer qu'elle est constante et en déduire <span class=\"math\">f(x+y)=f(x)f(y)</span>.",
    "باستعمال الخاصية السابقة، استنتج <span class=\"math\">f(x-y)=f(x)/f(y)</span>.": "En utilisant la propriété précédente, déduire <span class=\"math\">f(x-y)=f(x)/f(y)</span>.",
    "ليكن <span class=\"math\">n</span> عددا صحيحا نسبيا. ادرس <span class=\"math\">j(x)=f(nx)/[f(x)]^n</span> واستنتج <span class=\"math\">f(nx)=[f(x)]^n</span>. <span class=\"hint-chip\" data-hint=\"إذا وجدت j'=0 فالدالة j ثابتة. احسب قيمتها عند x=0.\">تلميح</span>": "Soit <span class=\"math\">n</span> un entier relatif. Étudier <span class=\"math\">j(x)=f(nx)/[f(x)]^n</span> et en déduire <span class=\"math\">f(nx)=[f(x)]^n</span>. <span class=\"hint-chip\" data-hint=\"Si j'=0, alors j est constante. Calculer sa valeur en x=0.\">Indice</span>",    "تطبيق مباشر": "Application directe",
    "ثلاثة استعمالات سريعة للخواص": "Trois utilisations rapides des propriétés",
    "بسّط:": "Simplifier :",
    "اكتب على شكل خارج:": "Écrire sous forme de quotient :",
    "حوّل:": "Transformer :",
    "الخلاصة المرئية": "Synthèse visuelle",
    "الدالة الوحيدة التي تحقق": "L'unique fonction vérifiant",
    "هي": "est",
    "تعريف": "Définition",
    "موجبـة": "Positive",
    "جمع إلى جداء": "Somme vers produit",
    "فرق إلى خارج": "Différence vers quotient",
    "قوة": "Puissance",
    "تعريف:": "Définition :",
    "تسمى الدالة الوحيدة القابلة للاشتقاق على": "La fonction unique dérivable sur",
    "التي تحقق": "qui vérifie",
    "الدالة الأسية، ونرمز لها بالرمز": "s'appelle la fonction exponentielle, notée",
    "أي:": "c'est-à-dire :",
    "محور 1": "Chapitre 1",
    "الدالة الأسية <b>exp</b>": "La fonction exponentielle <b>exp</b>",
    "الدالة الأسية هي الدالة المعرفة على": "La fonction exponentielle est la fonction définie sur",
    "حيث": "où",
    "خواص أساسية:": "Propriétés fondamentales :",
    "لكل x ∈ R": "pour tout x ∈ R",
    "دراسة الدالة الأسية": "Étude de la fonction exponentielle",
    "1. اتجاه تغير الدالة الأسية": "1. Sens de variation de la fonction exponentielle",
    "خاصية 1:": "Propriété 1 :",
    "من أجل كل عدد حقيقي": "Pour tout réel",
    "خاصية 2:": "Propriété 2 :",
    "الدالة الأسية متزايدة تماما على": "La fonction exponentielle est strictement croissante sur",
    "ومن ثم إذا كان": "Ainsi, si",
    "فإن": "alors",
    "نتائج:": "Conséquences :",
    "إذا كان": "si",
    "وإذا كان": "et si",
    "النهايات": "Limites",
    "عند": "quand",
    "2. النهايات": "2. Limites",
    "lim e^x = 0 عند x→-∞": "lim e^x = 0 quand x→-∞",
    "lim e^x = +∞ عند x→+∞": "lim e^x = +∞ quand x→+∞",
    "التمثيل البياني للدالة الأسية": "Représentation graphique de la fonction exponentielle",
    "المنحنى <span class=\"math\">(C)</span> للدالة الأسية، والمستقيم <span class=\"math\">(Δ): y=x+1</span> مماس للمنحنى عند النقطة <span class=\"math\">(0,1)</span>.": "La courbe <span class=\"math\">(C)</span> représente la fonction exponentielle, et la droite <span class=\"math\">(Δ): y=x+1</span> est tangente à la courbe au point <span class=\"math\">(0,1)</span>.",
    "3. جدول التغيرات والتمثيل البياني": "3. Tableau de variation et représentation graphique",
    "لدينا <span class=\"math\">exp(0)=1</span> و <span class=\"math\">exp'(0)=1</span>، إذن يقبل المنحنى <span class=\"math\">(C)</span> عند النقطة ذات الفاصلة <span class=\"math\">0</span> مماسا معادلته:": "On a <span class=\"math\">exp(0)=1</span> et <span class=\"math\">exp'(0)=1</span>, donc au point d'abscisse <span class=\"math\">0</span>, la courbe <span class=\"math\">(C)</span> admet pour tangente :",
    "ومن تعريف العدد المشتق:": "D'après la définition du nombre dérivé :",
    "lim [(e^x-1)/x] = 1 عند x→0": "lim [(e^x-1)/x] = 1 quand x→0",
    "نتيجة:": "Conséquence :",
    "الدالة <span class=\"math\">exp</span> متزايدة تمامًا على <span class=\"math\">R</span>. ومنه إذا كان <span class=\"math\">a &lt; b</span> فإن <span class=\"math\">e^a &lt; e^b</span>.": "La fonction <span class=\"math\">exp</span> est strictement croissante sur <span class=\"math\">R</span>. Donc, si <span class=\"math\">a &lt; b</span>, alors <span class=\"math\">e^a &lt; e^b</span>.",
    "lim x→-∞ e^x = 0 ، lim x→+∞ e^x = +∞": "lim x→-∞ e^x = 0, lim x→+∞ e^x = +∞",
    "الدوال الأسية <span class=\"math\">x ↦ e^{kx}</span>": "Les fonctions exponentielles <span class=\"math\">x ↦ e^{kx}</span>",
    "1. حلول المعادلة <span class=\"math\">f'=kf</span>": "1. Solutions de l'équation <span class=\"math\">f'=kf</span>",
    "مبرهنة:": "Théorème :",
    "ليكن <span class=\"math\">k</span> عددا حقيقيا. توجد دالة وحيدة قابلة للاشتقاق على <span class=\"math\">R</span> بحيث:": "Soit <span class=\"math\">k</span> un réel. Il existe une unique fonction dérivable sur <span class=\"math\">R</span> telle que :",
    "وهي الدالة:": "C'est la fonction :",
    "منحنيات الدوال e^{kx}": "Courbes des fonctions e^{kx}",
    "كل المنحنيات <span class=\"math\">y=e^{kx}</span> تمر من النقطة <span class=\"math\">(0,1)</span>. إذا كان <span class=\"math\">k&gt;0</span> فهي متزايدة، وإذا كان <span class=\"math\">k&lt;0</span> فهي متناقصة.": "Toutes les courbes <span class=\"math\">y=e^{kx}</span> passent par <span class=\"math\">(0,1)</span>. Si <span class=\"math\">k&gt;0</span>, elles sont croissantes ; si <span class=\"math\">k&lt;0</span>, elles sont décroissantes.",
    "البرهان المختصر:": "Preuve courte :",
    "إذا أخذنا <span class=\"math\">f(x)=e^{kx}</span> فإن:": "Si l'on prend <span class=\"math\">f(x)=e^{kx}</span>, alors :",
    "f'(x)=ke^{kx}=kf(x) و f(0)=1": "f'(x)=ke^{kx}=kf(x) et f(0)=1",
    "وللوحدانية، إذا كانت <span class=\"math\">g</span> دالة أخرى تحقق نفس الشرطين، ندرس:": "Pour l'unicité, si <span class=\"math\">g</span> est une autre fonction vérifiant les deux mêmes conditions, on étudie :",
    "فنجد <span class=\"math\">h'(x)=0</span>، أي إن <span class=\"math\">h</span> ثابتة، وبما أن <span class=\"math\">h(0)=1</span> نحصل على <span class=\"math\">g=f</span>.": "On obtient <span class=\"math\">h'(x)=0</span>, donc <span class=\"math\">h</span> est constante. Comme <span class=\"math\">h(0)=1</span>, on obtient <span class=\"math\">g=f</span>.",
    "دوال تحول المجموع إلى جداء": "Fonctions transformant une somme en produit",
    "الدوال غير المعدومة والقابلة للاشتقاق على <span class=\"math\">R</span> التي تحقق:": "Les fonctions non nulles et dérivables sur <span class=\"math\">R</span> qui vérifient :",
    "من أجل كل عددين حقيقيين <span class=\"math\">x</span> و <span class=\"math\">y</span>، هي الدوال:": "pour tous réels <span class=\"math\">x</span> et <span class=\"math\">y</span>, sont les fonctions :",
    "حيث <span class=\"math\">k</span> عدد حقيقي.": "où <span class=\"math\">k</span> est un réel.",
    "فكرة البرهان:": "Idée de preuve :",
    "بوضع <span class=\"math\">y=0</span> نحصل على <span class=\"math\">f(0)=1</span>. ثم باشتقاق العلاقة بالنسبة إلى <span class=\"math\">y</span> عند <span class=\"math\">y=0</span> نجد:": "En posant <span class=\"math\">y=0</span>, on obtient <span class=\"math\">f(0)=1</span>. Puis, en dérivant la relation par rapport à <span class=\"math\">y</span> en <span class=\"math\">y=0</span>, on trouve :",
    "إذا وضعنا <span class=\"math\">k=f'(0)</span> فإن <span class=\"math\">f'=kf</span>، ومن المبرهنة السابقة:": "Si l'on pose <span class=\"math\">k=f'(0)</span>, alors <span class=\"math\">f'=kf</span> ; d'après le théorème précédent :",
    "طريقة:": "Méthode :",
    "لحل معادلة أسية نحاول توحيد الأساس أو استعمال اللوغارتم الطبيعي عند الحاجة.": "Pour résoudre une équation exponentielle, on essaie d'unifier la base ou d'utiliser le logarithme népérien si nécessaire.",    "2. النهايات": "2. Limits",
    "lim e^x = 0 عند x→-∞": "lim e^x = 0 as x→-∞",
    "lim e^x = +∞ عند x→+∞": "lim e^x = +∞ as x→+∞",
    "التمثيل البياني للدالة الأسية": "Graph of the exponential function",
    "المنحنى <span class=\"math\">(C)</span> للدالة الأسية، والمستقيم <span class=\"math\">(Δ): y=x+1</span> مماس للمنحنى عند النقطة <span class=\"math\">(0,1)</span>.": "The curve <span class=\"math\">(C)</span> represents the exponential function, and the line <span class=\"math\">(Δ): y=x+1</span> is tangent to the curve at <span class=\"math\">(0,1)</span>.",
    "3. جدول التغيرات والتمثيل البياني": "3. Variation table and graph",
    "لدينا <span class=\"math\">exp(0)=1</span> و <span class=\"math\">exp'(0)=1</span>، إذن يقبل المنحنى <span class=\"math\">(C)</span> عند النقطة ذات الفاصلة <span class=\"math\">0</span> مماسا معادلته:": "We have <span class=\"math\">exp(0)=1</span> and <span class=\"math\">exp'(0)=1</span>, so at the point with abscissa <span class=\"math\">0</span>, the curve <span class=\"math\">(C)</span> has the tangent:",
    "ومن تعريف العدد المشتق:": "From the definition of the derivative:",
    "lim [(e^x-1)/x] = 1 عند x→0": "lim [(e^x-1)/x] = 1 as x→0",
    "نتيجة:": "Consequence:",
    "الدالة <span class=\"math\">exp</span> متزايدة تمامًا على <span class=\"math\">R</span>. ومنه إذا كان <span class=\"math\">a &lt; b</span> فإن <span class=\"math\">e^a &lt; e^b</span>.": "The function <span class=\"math\">exp</span> is strictly increasing on <span class=\"math\">R</span>. Hence, if <span class=\"math\">a &lt; b</span>, then <span class=\"math\">e^a &lt; e^b</span>.",
    "lim x→-∞ e^x = 0 ، lim x→+∞ e^x = +∞": "lim x→-∞ e^x = 0, lim x→+∞ e^x = +∞",
    "الدوال الأسية <span class=\"math\">x ↦ e^{kx}</span>": "Exponential functions <span class=\"math\">x ↦ e^{kx}</span>",
    "1. حلول المعادلة <span class=\"math\">f'=kf</span>": "1. Solutions of the equation <span class=\"math\">f'=kf</span>",
    "مبرهنة:": "Theorem:",
    "ليكن <span class=\"math\">k</span> عددا حقيقيا. توجد دالة وحيدة قابلة للاشتقاق على <span class=\"math\">R</span> بحيث:": "Let <span class=\"math\">k</span> be a real number. There is a unique differentiable function on <span class=\"math\">R</span> such that:",
    "وهي الدالة:": "It is the function:",
    "منحنيات الدوال e^{kx}": "Graphs of the functions e^{kx}",
    "كل المنحنيات <span class=\"math\">y=e^{kx}</span> تمر من النقطة <span class=\"math\">(0,1)</span>. إذا كان <span class=\"math\">k&gt;0</span> فهي متزايدة، وإذا كان <span class=\"math\">k&lt;0</span> فهي متناقصة.": "All curves <span class=\"math\">y=e^{kx}</span> pass through <span class=\"math\">(0,1)</span>. If <span class=\"math\">k&gt;0</span>, they are increasing; if <span class=\"math\">k&lt;0</span>, they are decreasing.",
    "البرهان المختصر:": "Short proof:",
    "إذا أخذنا <span class=\"math\">f(x)=e^{kx}</span> فإن:": "If we take <span class=\"math\">f(x)=e^{kx}</span>, then:",
    "f'(x)=ke^{kx}=kf(x) و f(0)=1": "f'(x)=ke^{kx}=kf(x) and f(0)=1",
    "وللوحدانية، إذا كانت <span class=\"math\">g</span> دالة أخرى تحقق نفس الشرطين، ندرس:": "For uniqueness, if <span class=\"math\">g</span> is another function satisfying the same two conditions, we study:",
    "فنجد <span class=\"math\">h'(x)=0</span>، أي إن <span class=\"math\">h</span> ثابتة، وبما أن <span class=\"math\">h(0)=1</span> نحصل على <span class=\"math\">g=f</span>.": "We find <span class=\"math\">h'(x)=0</span>, so <span class=\"math\">h</span> is constant. Since <span class=\"math\">h(0)=1</span>, we get <span class=\"math\">g=f</span>.",
    "دوال تحول المجموع إلى جداء": "Functions that transform sums into products",
    "الدوال غير المعدومة والقابلة للاشتقاق على <span class=\"math\">R</span> التي تحقق:": "The nonzero differentiable functions on <span class=\"math\">R</span> that satisfy:",
    "من أجل كل عددين حقيقيين <span class=\"math\">x</span> و <span class=\"math\">y</span>، هي الدوال:": "for all real numbers <span class=\"math\">x</span> and <span class=\"math\">y</span>, are the functions:",
    "حيث <span class=\"math\">k</span> عدد حقيقي.": "where <span class=\"math\">k</span> is a real number.",
    "فكرة البرهان:": "Proof idea:",
    "بوضع <span class=\"math\">y=0</span> نحصل على <span class=\"math\">f(0)=1</span>. ثم باشتقاق العلاقة بالنسبة إلى <span class=\"math\">y</span> عند <span class=\"math\">y=0</span> نجد:": "By setting <span class=\"math\">y=0</span>, we get <span class=\"math\">f(0)=1</span>. Then, differentiating the relation with respect to <span class=\"math\">y</span> at <span class=\"math\">y=0</span>, we obtain:",
    "إذا وضعنا <span class=\"math\">k=f'(0)</span> فإن <span class=\"math\">f'=kf</span>، ومن المبرهنة السابقة:": "If we set <span class=\"math\">k=f'(0)</span>, then <span class=\"math\">f'=kf</span>; by the previous theorem:",
    "طريقة:": "Method:",
    "لحل معادلة أسية نحاول توحيد الأساس أو استعمال اللوغارتم الطبيعي عند الحاجة.": "To solve an exponential equation, we try to use the same base, or the natural logarithm when needed.",    "التغيرات": "Variations"
  },
  en: {
    "نشاط 1: بناء خواص الدالة الأسية": "Activity 1: building the properties of the exponential function",
    "نبحث عن دالة f موجبة، مشتقتها تساوي نفسها، وتحقق f(0)=1، ثم نستنتج خواص الدالة الأسية.": "We look for a positive function f whose derivative is itself and which satisfies f(0)=1, then we derive the properties of the exponential function.",
    "نشاط استكشافي": "Exploration activity",
    "لماذا نبحث عن دالة تحقق": "Why look for a function satisfying",
    "؟": "?",
    " و <span class=\"math\">f(0)=1</span>.": " and <span class=\"math\">f(0)=1</span>.",
    "في النمو السكاني، الفوائد المركبة، والتفكك الإشعاعي تظهر كميات يتناسب تغيرها اللحظي مع قيمتها نفسها. نبحث هنا عن النموذج الأبسط: دالة موجبة تحقق": "In population growth, compound interest, and radioactive decay, some quantities have an instantaneous variation proportional to their value. Here we look for the simplest model: a positive function satisfying",
    "المرحلة 1": "Step 1",
    "استكشاف عددي وبياني": "Numerical and graphical exploration",
    "ننطلق من التقريب التألفي": "We start from the affine approximation",
    "نعوض أولا": "First replace",
    "بـ": "by",
    "ثم نستخرج": "then factor",
    "فنحصل على قاعدة أويلر التقريبية.": "to obtain Euler's approximate rule.",
    "المعنى البياني لـ": "Graphical meaning of",
    "ميل المماس يساوي ارتفاع النقطة": "the tangent slope equals the point's height",
    "تكبير الرسم البياني": "Enlarge graph",
    "تكبير": "Enlarge",
    "طريقة أويلر انطلاقا من التقريب التألفي": "Euler method from the affine approximation",
    "قيمة h": "Value of h",
    "الخطوة k": "Step k",
    "بناء بياني": "Graphical construction",
    "من الجدول إلى المنحنى": "From the table to the curve",
    "إظهار المنحنى الحدّي": "Show the limiting curve",
    "تلميح": "Hint",
    "المرحلة 2": "Step 2",
    "برهان تحليلي وبناء الخواص": "Analytical proof and properties",
    "اشرح لماذا نضرب في <span class=\"math\">1+h</span> للانتقال يمينا، وفي <span class=\"math\">1-h</span> للانتقال يسارا، انطلاقا من <span class=\"math\">f(x<sub>0</sub>+h)≈f(x<sub>0</sub>)+hf'(x<sub>0</sub>)</span>. <span class=\"hint-chip\" data-hint=\"عوّض f'(x0) بـ f(x0) لأن f'=f.\">تلميح</span>": "Explain why we multiply by <span class=\"math\">1+h</span> to move right, and by <span class=\"math\">1-h</span> to move left, starting from <span class=\"math\">f(x<sub>0</sub>+h)≈f(x<sub>0</sub>)+hf'(x<sub>0</sub>)</span>. <span class=\"hint-chip\" data-hint=\"Replace f'(x0) by f(x0), since f'=f.\">Hint</span>",
    "في الرسم أعلاه، لماذا يبدأ المنحنى والمضلّعة من النقطة <span class=\"math\">(0,1)</span>؟": "In the graph above, why do the curve and the polygonal line start at <span class=\"math\">(0,1)</span>?",
    "عند تصغير <span class=\"math\">h</span> في الجدول، ماذا تلاحظ بالنسبة إلى دقة التقريب؟": "When <span class=\"math\">h</span> gets smaller in the table, what do you notice about the accuracy of the approximation?",
    "بما أن <span class=\"math\">f'(x)=f(x)</span>، كيف يتغير ميل المماس عندما يزداد <span class=\"math\">x</span>؟ ماذا يعني ذلك بيانيًا؟": "Since <span class=\"math\">f'(x)=f(x)</span>, how does the tangent slope change as <span class=\"math\">x</span> increases? What does this mean graphically?",
    "هل يمكن أن ينقطع المنحنى أو يلمس محور الفواصل؟ برّر إجابتك باستعمال الإشارة.": "Can the curve break or touch the x-axis? Justify your answer using the sign.",
    "<span>التقريب المحلي يسمح ببناء تمثيل تقريبي للدالة على <span class=\"math\">[-3;3]</span> انطلاقا من <span class=\"math\">f'=f</span> و <span class=\"math\">f(0)=1</span>. عند تصغير <span class=\"math\">h</span> نقترب من منحنى واحد هو الدالة الأسية.</span>": "<span>The local approximation lets us build an approximate graph of the function on <span class=\"math\">[-3;3]</span> from <span class=\"math\">f'=f</span> and <span class=\"math\">f(0)=1</span>. As <span class=\"math\">h</span> gets smaller, we approach one unique curve: the exponential function.</span>",
    "نثبت أن الشروط <span class=\"math\">f'=f</span> و <span class=\"math\">f(0)=1</span> تقود إلى خواص الأسس المعروفة.": "We show that the conditions <span class=\"math\">f'=f</span> and <span class=\"math\">f(0)=1</span> lead to the usual laws of exponents.",    "تطبيق مباشر": "Direct application",
    "ثلاثة استعمالات سريعة للخواص": "Three quick uses of the properties",
    "بسّط:": "Simplify:",
    "اكتب على شكل خارج:": "Write as a quotient:",
    "حوّل:": "Transform:",
    "الخلاصة المرئية": "Visual summary",
    "تعريف": "Definition",
    "موجبـة": "Positive",
    "جمع إلى جداء": "Sum to product",
    "فرق إلى خارج": "Difference to quotient",
    "قوة": "Power",
    "تعريف:": "Definition:",
    "محور 1": "Chapter 1",
    "الدالة الأسية <b>exp</b>": "The exponential function <b>exp</b>",
    "الدالة الأسية هي الدالة المعرفة على": "The exponential function is the function defined on",
    "حيث": "where",
    "خواص أساسية:": "Basic properties:",
    "لكل x ∈ R": "for every x ∈ R",
    "دراسة الدالة الأسية": "Study of the exponential function",
    "1. اتجاه تغير الدالة الأسية": "1. Monotonicity of the exponential function",
    "خاصية 1:": "Property 1:",
    "من أجل كل عدد حقيقي": "For every real number",
    "خاصية 2:": "Property 2:",
    "الدالة الأسية متزايدة تماما على": "The exponential function is strictly increasing on",
    "ومن ثم إذا كان": "Therefore, if",
    "فإن": "then",
    "نتائج:": "Consequences:",
    "إذا كان": "if",
    "وإذا كان": "and if",
    "النهايات": "Limits",
    "عند": "as",
    "التغيرات": "Variations"
  }
};

function translateContentHtml(html) {
  const translations = CONTENT_HTML_TRANSLATIONS[state?.language];
  if (!translations || !html) return html;
  return Object.entries(translations)
    .sort((a, b) => b[0].length - a[0].length)
    .reduce((result, [source, target]) => result.split(source).join(target), html);
}

const VISIBLE_TEXT_TRANSLATIONS = {
  en: {
    "دوال تحول المجموع إلى جداء": "Functions that transform sums into products",
    "الدوال غير المعدومة والقابلة للاشتقاق على": "The nonzero differentiable functions on",
    "التي تحقق:": "that satisfy:",
    "من أجل كل عددين حقيقيين": "For all real numbers",
    "هي الدوال:": "the functions are:",
    "حيث": "where",
    "عدد حقيقي.": "is a real number.",
    "فكرة البرهان:": "Proof idea:",
    "بوضع": "By setting",
    "نحصل على": "we get",
    "ثم باشتقاق العلاقة بالنسبة إلى": "Then, differentiating the relation with respect to",
    "نجد:": "we obtain:",
    "إذا وضعنا": "If we set",
    "فإن": "then",
    "ومن المبرهنة السابقة:": "by the previous theorem:",
    "البرهان المختصر:": "Short proof:",
    "إذا أخذنا": "If we take",
    "وللوحدانية، إذا كانت": "For uniqueness, if",
    "دالة أخرى تحقق نفس الشرطين، ندرس:": "is another function satisfying the same two conditions, we study:",
    "فنجد": "We find",
    "أي إن": "so",
    "ثابتة، وبما أن": "is constant. Since",
    "نحصل على": "we get",
    "طريقة:": "Method:",
    "لحل معادلة أسية نحاول توحيد الأساس أو استعمال اللوغارتم الطبيعي عند الحاجة.": "To solve an exponential equation, we try to use the same base, or the natural logarithm when needed."
  },
  fr: {
    "دوال تحول المجموع إلى جداء": "Fonctions transformant une somme en produit",
    "الدوال غير المعدومة والقابلة للاشتقاق على": "Les fonctions non nulles et dérivables sur",
    "التي تحقق:": "qui vérifient :",
    "من أجل كل عددين حقيقيين": "Pour tous réels",
    "هي الدوال:": "sont les fonctions :",
    "حيث": "où",
    "عدد حقيقي.": "est un réel.",
    "فكرة البرهان:": "Idée de preuve :",
    "بوضع": "En posant",
    "نحصل على": "on obtient",
    "ثم باشتقاق العلاقة بالنسبة إلى": "Puis, en dérivant la relation par rapport à",
    "نجد:": "on trouve :",
    "إذا وضعنا": "Si l'on pose",
    "فإن": "alors",
    "ومن المبرهنة السابقة:": "d'après le théorème précédent :",
    "البرهان المختصر:": "Preuve courte :",
    "إذا أخذنا": "Si l'on prend",
    "وللوحدانية، إذا كانت": "Pour l'unicité, si",
    "دالة أخرى تحقق نفس الشرطين، ندرس:": "est une autre fonction vérifiant les deux mêmes conditions, on étudie :",
    "فنجد": "On obtient",
    "أي إن": "donc",
    "ثابتة، وبما أن": "est constante. Comme",
    "طريقة:": "Méthode :",
    "لحل معادلة أسية نحاول توحيد الأساس أو استعمال اللوغارتم الطبيعي عند الحاجة.": "Pour résoudre une équation exponentielle, on essaie d'unifier la base ou d'utiliser le logarithme népérien si nécessaire."
  }
};

function translateVisibleText(root) {
  const translations = VISIBLE_TEXT_TRANSLATIONS[state?.language];
  if (!translations || !root) return;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => {
    let value = node.nodeValue;
    Object.entries(translations)
      .sort((a, b) => b[0].length - a[0].length)
      .forEach(([source, target]) => {
        value = value.split(source).join(target);
      });
    node.nodeValue = value;
  });
}const IDEAS_MODULE_ID = "partial-ideas";
const getLearningModules = () => modules.filter((module) => module.id !== IDEAS_MODULE_ID);
const getIdeasModule = () => modules.find((module) => module.id === IDEAS_MODULE_ID);

const state = {
  currentView: "home",
  currentModuleId: modules[0].id,
  progress: loadProgress(),
  moduleTab: "activities",
  openSolutions: {},
  language: getSavedLanguage(),
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
  if (tabName === "foreign") applyForeignBacFilters();
}

function updateForeignBacFilterFromSelect(select) {
  if (!select?.matches?.("[data-foreign-select]")) return false;
  const type = select.dataset.foreignSelect;
  if (foreignBacFilters[type] === undefined) return false;
  foreignBacFilters[type] = select.value;
  return true;
}

function syncForeignBacFiltersFromControls(panel) {
  panel.querySelectorAll("[data-foreign-select]").forEach((select) => {
    updateForeignBacFilterFromSelect(select);
  });
}

function wireForeignBacSelectControls(panel) {
  panel.querySelectorAll("[data-foreign-select]").forEach((select) => {
    if (select.dataset.foreignSelectBound === "true") return;
    select.dataset.foreignSelectBound = "true";
    const sync = () => {
      if (updateForeignBacFilterFromSelect(select)) applyForeignBacFilters();
    };
    select.addEventListener("change", sync);
    select.addEventListener("input", sync);
  });
}

function normalizeForeignBacFilterControls(panel) {
  if (!panel) return;
  const filterLabels = {
    country: "bac.filter.country",
    branch: "bac.filter.branch",
  };

  Object.entries(filterLabels).forEach(([type, labelKey]) => {
    if (panel.querySelector('[data-foreign-select="' + type + '"]')) return;
    const buttons = [...panel.querySelectorAll('[data-foreign-filter="' + type + '"]')];
    if (!buttons.length) return;
    const group = buttons[0].closest(".bac-filter-group");
    const buttonWrap = buttons[0].closest(".bac-filter-buttons");
    if (!group || !buttonWrap) return;

    const select = document.createElement("select");
    select.className = "foreign-year-select";
    select.dataset.foreignSelect = type;
    select.setAttribute("aria-label", t(labelKey));

    buttons.forEach((button) => {
      const option = document.createElement("option");
      option.value = button.dataset.foreignValue || "all";
      option.textContent = button.textContent.trim();
      if (button.dataset.i18n) option.dataset.i18n = button.dataset.i18n;
      select.appendChild(option);
    });

    select.value = foreignBacFilters[type] || "all";
    buttonWrap.replaceWith(select);
  });
}

let foreignBacArchive = null;

function getForeignBacResultsHost(panel) {
  let host = panel.querySelector('[data-foreign-results]');
  if (!host) {
    host = document.createElement('div');
    host.className = 'foreign-results';
    host.dataset.foreignResults = 'true';
    panel.querySelector('.foreign-filter-panel')?.after(host);
  }
  return host;
}

function buildForeignBacArchive(panel) {
  const host = getForeignBacResultsHost(panel);
  if (foreignBacArchive?.panel === panel) return foreignBacArchive;

  const groupedNodes = new Set();
  const headings = [...panel.querySelectorAll('.foreign-exam-heading[data-country]')];
  const groups = headings.map((heading) => {
    const nodes = [];
    let node = heading;
    while (node && node !== host && (node === heading || !node.matches('.foreign-exam-heading[data-country]'))) {
      nodes.push(node);
      groupedNodes.add(node);
      node = node.nextElementSibling;
    }
    return { heading, nodes };
  });

  panel.querySelectorAll('.foreign-exam-heading[data-country], .mock-exam-paper, .mock-exam-solution').forEach((node) => {
    if (!groupedNodes.has(node)) node.remove();
  });

  groups.forEach((group) => {
    group.nodes.forEach((node) => {
      setForeignBacNodeVisible(node, false);
      host.appendChild(node);
    });
  });

  foreignBacArchive = { panel, host, groups };
  return foreignBacArchive;
}

function setForeignBacNodeVisible(node, visible) {
  node.hidden = !visible;
  node.classList.toggle("foreign-filter-hidden", !visible);
}

function applyForeignBacFilters() {
  try {
    const panel = document.querySelector('[data-bac-panel="foreign"]');
    if (!panel) return;

    // Move orphaned mock exams back into the foreign panel if HTML closed early
    const parent = panel.parentNode;
    if (parent) {
      const orphans = parent.querySelectorAll(':scope > .foreign-exam-heading, :scope > .mock-exam-paper, :scope > .mock-exam-solution');
      orphans.forEach((node) => {
        panel.appendChild(node);
      });
    }

    // Clean up corrupted leftover text accidentally appended after Morocco 2012.
    const m12Heading = document.querySelector('.foreign-exam-heading[data-country="morocco"][data-year="2012"][data-branch="science"]');
    if (m12Heading) {
      let seenSolution = false;
      let node = m12Heading.nextSibling;
      while (node) {
        if (node.nodeType === Node.ELEMENT_NODE && node.matches('.foreign-exam-heading')) break;
        const next = node.nextSibling;
        if (node.nodeType === Node.ELEMENT_NODE) {
          const isExpectedExamNode = node.matches('.mock-exam-paper, .mock-exam-solution');
          if (node.matches('.mock-exam-solution')) seenSolution = true;
          if (seenSolution && !isExpectedExamNode) node.remove();
        } else if (seenSolution && node.textContent.trim()) {
          node.remove();
        }
        node = next;
      }
    }

    normalizeForeignBacFilterControls(panel);
    wireForeignBacSelectControls(panel);
    syncForeignBacFiltersFromControls(panel);

    panel.querySelectorAll('[data-foreign-filter]').forEach((button) => {
      const type = button.dataset.foreignFilter;
      const isActive = foreignBacFilters[type] === button.dataset.foreignValue;
      button.classList.toggle('active', isActive);
      if (isActive) button.setAttribute('aria-current', 'true');
      else button.removeAttribute('aria-current');
    });

    panel.querySelectorAll('[data-foreign-select]').forEach((select) => {
      const type = select.dataset.foreignSelect;
      if (foreignBacFilters[type] !== undefined) select.value = foreignBacFilters[type];
    });

    const { host, groups } = buildForeignBacArchive(panel);

    let emptyCard = panel.querySelector('[data-foreign-empty]');
    if (!emptyCard) {
      emptyCard = document.createElement('article');
      emptyCard.className = 'action-panel bac-empty-card';
      emptyCard.dataset.foreignEmpty = 'true';
      emptyCard.innerHTML = `<h3>${t("bac.noMatch")}</h3><p>${t("bac.changeFilters")}</p>`;
      host.before(emptyCard);
    }
    emptyCard.hidden = true;
    emptyCard.classList.add('foreign-filter-hidden');

    host.replaceChildren();

    let visibleCount = 0;
    groups.forEach(({ heading, nodes }) => {
      const countryMatch = foreignBacFilters.country === 'all' || heading.dataset.country === foreignBacFilters.country;
      const branchMatch = foreignBacFilters.branch === 'all' || heading.dataset.branch === foreignBacFilters.branch;
      const yearMatch = foreignBacFilters.year === 'all' || String(heading.dataset.year) === String(foreignBacFilters.year);
      const isVisible = countryMatch && branchMatch && yearMatch;
      if (!isVisible) return;
      visibleCount += 1;
      nodes.forEach((node) => {
        setForeignBacNodeVisible(node, true);
        host.appendChild(node);
      });
    });

    if (visibleCount === 0) {
      emptyCard.hidden = false;
      emptyCard.classList.remove('foreign-filter-hidden');
    }
  } catch (err) {
    const errDiv = document.createElement('div');
    errDiv.style.position = 'fixed';
    errDiv.style.top = '0';
    errDiv.style.left = '0';
    errDiv.style.width = '100%';
    errDiv.style.backgroundColor = 'red';
    errDiv.style.color = 'white';
    errDiv.style.zIndex = '99999';
    errDiv.style.padding = '20px';
    errDiv.style.fontSize = '16px';
    errDiv.style.fontFamily = 'monospace';
    errDiv.innerHTML = '<strong>Error in applyForeignBacFilters:</strong> ' + err.message + '<br><pre>' + err.stack + '</pre>';
    document.body.appendChild(errDiv);
    throw err;
  }
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

function getModuleChallengeExercises(module) {
  return module.id === "limits" ? LIMIT_CHALLENGE_EXERCISES : [];
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
  document.getElementById("moduleCountLabel").textContent = `${learningModules.length} ${t("unit.modules")}`;
  const next = getNextModule();
  grid.innerHTML = learningModules
    .map((module) => {
      const done = state.progress.completed.includes(module.id);
      const isNext = module.id === next.id;
      const btnClass = done ? "secondary-btn" : isNext ? "primary-btn" : "secondary-btn";
      return `
        <article class="module-card ${done ? "completed" : isNext ? "recommended" : ""}">
          <div class="module-icon">${module.icon}</div>
          <h3>${getModuleText(module, "title")}</h3>
          <p>${getModuleText(module, "summary")}</p>
          <button class="${btnClass}" type="button" data-open-module="${module.id}">
            ${done ? t("ui.reviewModule") : isNext ? t("ui.startModule") : t("ui.openModule")}
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
  const challengeExercises = getModuleChallengeExercises(module);
  const bacExercises = getModuleBacExercises(module);
  const hasChallengeExercises = challengeExercises.length > 0;
  const bacTabCount = hasChallengeExercises ? challengeExercises.length : bacExercises.length;
  const bacTabLabel = hasChallengeExercises ? t("ui.challengeExercises") : t("ui.bacExercises");
  const bacTabMeta = hasChallengeExercises ? `${challengeExercises.length} ${t("unit.challenge")}` : `${bacExercises.length} ${t("unit.bacTopic")}`;
  const bacTabContentClass = hasChallengeExercises ? "challenge-list" : "cards-grid";
  const bacTabContent = hasChallengeExercises
    ? challengeExercises.map((exercise, index) => renderChallengeExerciseItem(module, exercise, index)).join("")
    : bacExercises.length
      ? bacExercises.map(renderModuleBacExerciseCard).join("")
      : renderModuleBacEmptyCard(module);
  detail.innerHTML = `
    <section class="study-hero">
      <div>
        <span class="kicker">${t("learn.title")} / ${getModuleText(module, "title")}</span>
        <h2>${module.icon} ${getModuleText(module, "title")}</h2>
        <p>${getModuleText(module, "summary")}</p>
      </div>
      <button class="${done ? "secondary-btn" : "primary-btn"}" type="button" data-complete-module="${module.id}" ${done ? "disabled" : ""}>
        ${done ? t("ui.completedModule") : t("ui.markComplete")}
      </button>
    </section>

    <nav class="lesson-section-tabs" aria-label="${t("learn.title")}">
      <button class="lesson-section-tab ${tab === "activities" ? "active" : ""}" type="button" data-module-tab="activities" ${tab === "activities" ? "aria-current='true'" : ""}>${t("ui.activities")} (${module.activities.length})</button>
      <button class="lesson-section-tab ${tab === "lesson" ? "active" : ""}" type="button" data-module-tab="lesson" ${tab === "lesson" ? "aria-current='true'" : ""}>${t("ui.lesson")}</button>
      <button class="lesson-section-tab ${tab === "solved" ? "active" : ""}" type="button" data-module-tab="solved" ${tab === "solved" ? "aria-current='true'" : ""}>${t("ui.solvedExercises")} (${module.solved.length})</button>
      <button class="lesson-section-tab ${tab === "exercises" ? "active" : ""}" type="button" data-module-tab="exercises" ${tab === "exercises" ? "aria-current='true'" : ""}>${t("ui.exercises")} (${module.exercises.length})</button>
      <button class="lesson-section-tab ${tab === "bacExercises" ? "active" : ""}" type="button" data-module-tab="bacExercises" ${tab === "bacExercises" ? "aria-current='true'" : ""}>${bacTabLabel} (${bacTabCount})</button>
    </nav>

    <section class="lesson-section-panel ${tab === "activities" ? "active" : ""}">
      <div class="section-title"><h2>${t("ui.activities")}</h2><span>${module.activities.length} ${t("unit.activity")}</span></div>
      <section class="cards-grid">${module.activities.map((activity, index) => renderActivityCard(module, activity, index)).join("")}</section>
    </section>

    <section class="lesson-section-panel ${tab === "lesson" ? "active" : ""}">
      <section class="lesson-reader">${translateContentHtml(module.lesson)}</section>
    </section>

    <section class="lesson-section-panel ${tab === "solved" ? "active" : ""}">
      <div class="section-title"><h2>${t("ui.solvedExercises")}</h2><span>${module.solved.length} ${t("unit.solvedExercise")}</span></div>
      <section class="cards-grid">${module.solved.map((exercise, index) => renderSolvedExerciseCard(module, exercise, index)).join("")}</section>
    </section>

    <section class="lesson-section-panel ${tab === "exercises" ? "active" : ""}">
      <div class="section-title"><h2>${t("ui.moduleExercises")}</h2><span>${module.exercises.length} ${t("unit.exercise")}</span></div>
      <section class="cards-grid">${module.exercises.length ? module.exercises.map((exercise, index) => renderExerciseCard(module, exercise, index)).join("") : renderEmptyExerciseCard()}</section>
    </section>

    <section class="lesson-section-panel ${tab === "bacExercises" ? "active" : ""}">
      <div class="section-title"><h2>${bacTabLabel}</h2><span>${bacTabMeta}</span></div>
      <section class="${bacTabContentClass}">
        ${bacTabContent}
      </section>
    </section>
  `;
  updateExpDiscoveryTable(detail);
  updateLnDiscovery(detail);
  enhanceMathTypography(detail);
  translateVisibleText(detail);
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
      <span class="panel-label blue">${escapeHtml(getModuleText(module, "title"))}</span>
      <h3>لا توجد مواضيع بكالوريا مرتبطة بهذا المحور بعد</h3>
      <p>يمكن إضافة مواضيع جديدة في أرشيف البكالوريا وربطها بوسوم المحور.</p>
      <button class="ghost-btn" type="button" data-view-jump="bac">فتح باب البكالوريا</button>
    </article>
  `;
}

function renderChallengeExerciseItem(module, exercise, index) {
  const key = `${module.id}-challenge-${index}`;
  const isOpen = state.openSolutions[key];
  const solution = exercise.solutionHtml || `<p>${escapeHtml(exercise.solution)}</p>`;
  return `
    <article class="challenge-item">
      <header class="challenge-item-head">
        <span>تحدي ${index + 1}</span>
      </header>
      <div class="challenge-statement">
        ${exercise.statementHtml ? exercise.statementHtml : `<p class="math-rich">${escapeHtml(exercise.statement)}</p>`}
      </div>
      <button class="solution-toggle challenge-solution-toggle" type="button" data-solution-key="${key}">
        ${isOpen ? t("ui.hideSolution") : t("ui.showSolution")}
      </button>
      <section class="solution-panel challenge-solution-panel ${isOpen ? "active" : ""}" data-solution-panel="${key}">
        ${solution}
      </section>
    </article>
  `;
}
function renderActivityCard(module, activity, index) {
  const key = `${module.id}-activity-${index}`;
  const isOpen = state.openSolutions[key];
  const title = translateContentHtml(activity.title);
  const body = translateContentHtml(activity.bodyHtml || `<p>${escapeHtml(activity.body)}</p>`);
  const solution = translateContentHtml(activity.solutionHtml || `<p>${escapeHtml(activity.solution)}</p>`);
  return `
    <article class="action-panel activity-panel">
      <span class="panel-label amber">${t("ui.activity")}</span>
      <h3>${title}</h3>
      <div class="activity-body">${body}</div>
      <button class="solution-toggle" type="button" data-solution-key="${key}">
        ${isOpen ? t("ui.hideSolution") : t("ui.showSolution")}
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
      <span class="panel-label blue">${getModuleText(module, "title")}</span>
      <h3>${exercise.title}</h3>
      ${exercise.statementHtml ? `<div class="exercise-statement">${exercise.statementHtml}</div>` : `<p class="math-rich">${escapeHtml(exercise.statement)}</p>`}
      <button class="solution-toggle" type="button" data-solution-key="${key}">
        ${isOpen ? t("ui.hideSolution") : t("ui.showSolution")}
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
      <span class="panel-label amber">${t("ui.solvedExercise")}</span>
      <h3>${exercise.title}</h3>
      ${exercise.statementHtml ? `<div class="exercise-statement">${exercise.statementHtml}</div>` : `<p class="math-rich">${escapeHtml(exercise.statement)}</p>`}
      <button class="solution-toggle" type="button" data-solution-key="${key}">
        ${isOpen ? t("ui.hideSolution") : t("ui.showSolution")}
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
      <span class="panel-label blue">${t("ui.exercises")}</span>
      <h3>${t("ui.noExercises")}</h3>
      <p>${t("ui.noExercisesDesc")}</p>
    </article>
  `;
}

function renderExerciseDoorPlaceholder(label, title, description) {
  return `
    <article class="action-panel exercise-panel">
      <span class="panel-label blue">${label}</span>
      <h3>${title}</h3>
      <p>${description}</p>
    </article>
  `;
}
const declicExercises = [
  {
    title: "Declic 54 - دراسة دالة لوغارتمية",
    statementHtml: `
      <p>لتكن الدالة <span class="math">f</span> المعرفة على <span class="math">]0,+∞[</span> بما يلي:</p>
      <div class="math-equation">f(x)=(x-e)(lnx-1)</div>
      <ol>
        <li>حدد نهايات <span class="math">f</span> عند <span class="math">0</span> و <span class="math">e</span> و <span class="math">+∞</span>.</li>
        <li>حدد الدالة المشتقة <span class="math">f'</span>.</li>
        <li>
          <p>لتكن الدالة <span class="math">g</span> المعرفة على <span class="math">]0,+∞[</span> بما يلي:</p>
          <div class="math-equation">g(x)=lnx-<span class="frac"><span>e</span><span>x</span></span></div>
          <ol type="a">
            <li>حدد نهايات <span class="math">g</span> عند حدود مجموعة تعريفها.</li>
            <li>ادرس تغيرات <span class="math">g</span>.</li>
            <li>احسب <span class="math">g(e)</span>، ثم استنتج باستعمال السؤال السابق إشارة <span class="math">g</span> على <span class="math">]0,+∞[</span>.</li>
          </ol>
        </li>
        <li>باستعمال نتائج الدالة <span class="math">g</span>، أنشئ تغيرات <span class="math">f</span> وضع جدول تغيراتها.</li>
        <li>
          <p>في معلم من المستوي، نرمز بـ <span class="math">D</span> إلى المستقيم ذي المعادلة <span class="math">y=-x+e</span>.</p>
          <ol type="a">
            <li>ادرس وضعية المنحنى <span class="math">C</span> الممثل للدالة <span class="math">f</span> بالنسبة إلى <span class="math">D</span>.</li>
            <li>ارسم المنحنيين <span class="math">C</span> و <span class="math">D</span> في نفس المعلم.</li>
          </ol>
        </li>
      </ol>
    `,
    solutionHtml: `
      <ol>
        <li>عند <span class="math">0<sup>+</sup></span>: <span class="math">x-e→-e</span> و <span class="math">lnx-1→-∞</span>، إذن <span class="math">f(x)→+∞</span>. وعند <span class="math">e</span>: <span class="math">f(e)=0</span>. وعند <span class="math">+∞</span>: <span class="math">f(x)→+∞</span>.</li>
        <li><span class="math">f'(x)=lnx-1+<span class="frac"><span>x-e</span><span>x</span></span>=lnx-<span class="frac"><span>e</span><span>x</span></span>=g(x)</span>.</li>
        <li>لدينا <span class="math">g(x)→-∞</span> عند <span class="math">0<sup>+</sup></span> و <span class="math">g(x)→+∞</span> عند <span class="math">+∞</span>. كما أن <span class="math">g'(x)=<span class="frac"><span>1</span><span>x</span></span>+<span class="frac"><span>e</span><span>x<sup>2</sup></span></span>&gt;0</span>، إذن <span class="math">g</span> متزايدة تماما. وبما أن <span class="math">g(e)=0</span> فإن <span class="math">g&lt;0</span> على <span class="math">]0,e[</span> و <span class="math">g&gt;0</span> على <span class="math">]e,+∞[</span>.</li>
        <li>بما أن <span class="math">f'=g</span>، فإن <span class="math">f</span> متناقصة على <span class="math">]0,e]</span> ثم متزايدة على <span class="math">[e,+∞[</span>، وقيمتها الصغرى <span class="math">f(e)=0</span>.</li>
        <li><span class="math">f(x)-(-x+e)=(x-e)lnx</span>. إذن <span class="math">C</span> فوق <span class="math">D</span> على <span class="math">]0,1[∪]e,+∞[</span>، وتحته على <span class="math">]1,e[</span>، ويتقاطعان عند <span class="math">x=1</span> و <span class="math">x=e</span>.</li>
      </ol>
    `
  },
  {
    title: "Declic 55 - دالة فردية ومستقيمات مقاربة",
    statementHtml: `
      <p>لتكن الدالة <span class="math">f</span> المعرفة على <span class="math">]-2,2[</span> بما يلي:</p>
      <div class="math-equation">f(x)=<span class="frac"><span>1</span><span>3</span></span>ln(<span class="frac"><span>2+x</span><span>2-x</span></span>)</div>
      <ol>
        <li>
          <ol type="a">
            <li>بيّن أن <span class="math">f</span> دالة فردية.</li>
            <li>ادرس تغيرات <span class="math">f</span> على <span class="math">[0,2[</span>.</li>
            <li>برّر أن المنحنى <span class="math">C</span>، الممثل للدالة <span class="math">f</span> في المستوى المنسوب إلى معلم، يقبل مستقيمين مقاربين.</li>
          </ol>
        </li>
        <li>حل المعادلة <span class="math">f(x)=<span class="frac"><span>1</span><span>3</span></span></span>.</li>
      </ol>
    `,
    solutionHtml: `
      <ol>
        <li><span class="math">f(-x)=<span class="frac"><span>1</span><span>3</span></span>ln(<span class="frac"><span>2-x</span><span>2+x</span></span>)=-<span class="frac"><span>1</span><span>3</span></span>ln(<span class="frac"><span>2+x</span><span>2-x</span></span>)=-f(x)</span>. إذن <span class="math">f</span> دالة فردية.</li>
        <li>من أجل <span class="math">x∈[0,2[</span>، <span class="math">f'(x)=<span class="frac"><span>1</span><span>3</span></span>(<span class="frac"><span>1</span><span>2+x</span></span>+<span class="frac"><span>1</span><span>2-x</span></span>)=<span class="frac"><span>4</span><span>3(4-x<sup>2</sup>)</span></span>&gt;0</span>. إذن <span class="math">f</span> متزايدة تمامًا على <span class="math">[0,2[</span>، مع <span class="math">f(0)=0</span> و <span class="math">lim<sub>x→2<sup>-</sup></sub>f(x)=+∞</span>.</li>
        <li>بما أن <span class="math">lim<sub>x→2<sup>-</sup></sub>f(x)=+∞</span>، فإن المستقيم <span class="math">x=2</span> مقارب عمودي. وباستعمال فردية الدالة نحصل على <span class="math">lim<sub>x→-2<sup>+</sup></sub>f(x)=-∞</span>، وبالتالي فإن <span class="math">x=-2</span> مقارب عمودي كذلك.</li>
        <li><span class="math">f(x)=<span class="frac"><span>1</span><span>3</span></span></span> تكافئ <span class="math">ln(<span class="frac"><span>2+x</span><span>2-x</span></span>)=1</span>، إذن <span class="math"><span class="frac"><span>2+x</span><span>2-x</span></span>=e</span>. نحصل على <span class="math">x=<span class="frac"><span>2(e-1)</span><span>e+1</span></span></span>.</li>
      </ol>
    `
  }
];

function renderDeclicExerciseItem(exercise, index) {
  const key = `declic-exercise-${index}`;
  const isOpen = state.openSolutions[key];
  return `
    <article class="declic-exercise-item">
      <header class="declic-exercise-head">
        <span>${t("ui.declicExercise")} ${index + 1}</span>
        <h3>${exercise.title}</h3>
      </header>
      <div class="exercise-statement declic-exercise-statement">${exercise.statementHtml}</div>
      <button class="solution-toggle declic-solution-toggle" type="button" data-solution-key="${key}">
        ${isOpen ? t("ui.hideSolution") : t("ui.showSolution")}
      </button>
      <section class="solution-panel declic-solution-panel ${isOpen ? "active" : ""}" data-solution-panel="${key}">
        ${exercise.solutionHtml}
      </section>
    </article>
  `;
}

function renderExercises() {
  const schoolGrid = document.getElementById("schoolExerciseGrid") || document.getElementById("exerciseGrid");
  const deepGrid = document.getElementById("deepExerciseGrid");
  const declicGrid = document.getElementById("declicExerciseGrid");
  const exerciseCards = getLearningModules().flatMap((module) => module.exercises.map((exercise, index) => renderExerciseCard(module, exercise, index)));

  if (schoolGrid) {
    schoolGrid.innerHTML = exerciseCards.length ? exerciseCards.join("") : renderEmptyExerciseCard();
    enhanceMathTypography(schoolGrid);
  }

  if (deepGrid) {
    deepGrid.innerHTML = renderExerciseDoorPlaceholder(t("ui.deepLabel"), t("ui.deepPlaceholderTitle"), t("ui.deepPlaceholderDesc"));
  }

  if (declicGrid) {
    declicGrid.innerHTML = declicExercises.length
      ? declicExercises.map((exercise, index) => renderDeclicExerciseItem(exercise, index)).join("")
      : renderExerciseDoorPlaceholder("Declic", "تمارين كتاب Declic", "سيضاف هنا محتوى تمارين كتاب Declic مع نفس طريقة العرض والحلول.");
    enhanceMathTypography(declicGrid);
  }

  document.getElementById("homeExerciseCount").textContent = `${getLearningModules().reduce((sum, module) => sum + module.exercises.length, 0)} ${t("ui.exercises")}`;
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
function drawDerivativeCanvas(card) {
  const canvas = card.querySelector("[data-discussion-canvas='derivative']");
  const slider = card.querySelector("[data-discussion-slider]");
  const output = card.querySelector("[data-discussion-result]");
  const valueLabel = card.querySelector("[data-discussion-value]");
  if (!canvas || !slider) return;

  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  const pad = 58;
  const xMin = -2.2;
  const xMax = 4.2;
  const yMin = -0.25;
  const yMax = 3.05;
  const a = 1.05;
  const h = Number(slider.value);
  const tangentSlope = 0.58;
  const curvature = 0.16;
  const fn = (x) => 1.55 + tangentSlope * (x - a) - curvature * (x - a) * (x - a);
  const derivative = (x) => tangentSlope - 2 * curvature * (x - a);
  const pointA = { x: a, y: fn(a) };
  const pointM = { x: a + h, y: fn(a + h) };
  const secantSlope = (pointM.y - pointA.y) / (pointM.x - pointA.x);
  const sx = (x) => pad + ((x - xMin) / (xMax - xMin)) * (width - 2 * pad);
  const sy = (y) => height - pad - ((y - yMin) / (yMax - yMin)) * (height - 2 * pad);

  const drawLine = (slope, interceptPoint, color, dash = [], widthLine = 3) => {
    const yLeft = interceptPoint.y + slope * (xMin - interceptPoint.x);
    const yRight = interceptPoint.y + slope * (xMax - interceptPoint.x);
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = widthLine;
    ctx.setLineDash(dash);
    ctx.beginPath();
    ctx.moveTo(sx(xMin), sy(yLeft));
    ctx.lineTo(sx(xMax), sy(yRight));
    ctx.stroke();
    ctx.restore();
  };

  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#fffdf3";
  ctx.fillRect(0, 0, width, height);

  ctx.strokeStyle = "#e2ded3";
  ctx.lineWidth = 1;
  for (let x = Math.ceil(xMin); x <= Math.floor(xMax); x += 1) {
    ctx.beginPath();
    ctx.moveTo(sx(x), pad);
    ctx.lineTo(sx(x), height - pad);
    ctx.stroke();
  }
  for (let y = Math.ceil(yMin); y <= Math.floor(yMax); y += 0.5) {
    ctx.beginPath();
    ctx.moveTo(pad, sy(y));
    ctx.lineTo(width - pad, sy(y));
    ctx.stroke();
  }

  ctx.strokeStyle = "#111827";
  ctx.lineWidth = 2.2;
  ctx.beginPath();
  ctx.moveTo(pad, sy(0));
  ctx.lineTo(width - pad, sy(0));
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(sx(0), pad);
  ctx.lineTo(sx(0), height - pad);
  ctx.stroke();

  ctx.strokeStyle = "#0f766e";
  ctx.lineWidth = 4;
  ctx.beginPath();
  for (let i = 0; i <= 260; i += 1) {
    const x = xMin + (i / 260) * (xMax - xMin);
    const y = fn(x);
    if (i === 0) ctx.moveTo(sx(x), sy(y));
    else ctx.lineTo(sx(x), sy(y));
  }
  ctx.stroke();

  drawLine(secantSlope, pointA, "#2563eb", [10, 8], 3.4);
  drawLine(tangentSlope, pointA, "#dc2626", [], 4.2);

  ctx.save();
  ctx.strokeStyle = "rgba(37, 99, 235, 0.35)";
  ctx.lineWidth = 2;
  ctx.setLineDash([5, 6]);
  ctx.beginPath();
  ctx.moveTo(sx(pointM.x), sy(pointM.y));
  ctx.lineTo(sx(pointM.x), sy(pointA.y));
  ctx.lineTo(sx(pointA.x), sy(pointA.y));
  ctx.stroke();
  ctx.restore();

  const drawPoint = (point, color, label, dx, dy) => {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.strokeStyle = "#fffdf3";
    ctx.lineWidth = 3;
    ctx.arc(sx(point.x), sy(point.y), 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.font = "800 17px Tajawal, Arial";
    ctx.fillStyle = color;
    ctx.fillText(label, sx(point.x) + dx, sy(point.y) + dy);
  };

  drawPoint(pointA, "#dc2626", "A(a,f(a))", -58, -18);
  drawPoint(pointM, "#2563eb", "M", 10, -12);

  ctx.direction = "rtl";
  ctx.font = "900 18px Tajawal, Arial";
  ctx.fillStyle = "#0f766e";
  ctx.fillText("C_f", sx(-1.6), sy(2.55));
  ctx.fillStyle = "#dc2626";
  ctx.fillText("المماس", sx(2.35), sy(2.55));
  ctx.fillStyle = "#2563eb";
  ctx.fillText("القاطع AM", sx(2.95), sy(1.85));

  const panelX = width - 278;
  const panelY = height - 100;
  ctx.fillStyle = "rgba(255, 253, 243, 0.9)";
  ctx.strokeStyle = "rgba(15, 118, 110, 0.22)";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.roundRect(panelX, panelY, 238, 66, 12);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = "#111827";
  ctx.font = "800 15px Tajawal, Arial";
  ctx.fillText(`ميل القاطع ≈ ${secantSlope.toFixed(3)}`, panelX + 214, panelY + 25);
  ctx.fillText(`ميل المماس = ${derivative(a).toFixed(3)}`, panelX + 214, panelY + 50);
  ctx.direction = "ltr";

  if (valueLabel) valueLabel.textContent = `h = ${h.toFixed(2)}`;
  if (output) {
    const diff = Math.abs(secantSlope - tangentSlope);
    output.textContent = `عندما h = ${h.toFixed(2)} يكون معامل توجيه القاطع ≈ ${secantSlope.toFixed(3)}، ومعامل توجيه المماس f'(a) = ${tangentSlope.toFixed(3)}. الفرق بينهما ≈ ${diff.toFixed(3)}.`;
  }
}
function drawDiscussionCanvas(card) {
  const derivativeCanvas = card.querySelector("[data-discussion-canvas='derivative']");
  if (derivativeCanvas) {
    drawDerivativeCanvas(card);
    return;
  }
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
    button.textContent = button.dataset.playLabel || "تشغيل الحركة";
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
    button.textContent = button.dataset.stopLabel || "إيقاف الحركة";
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
function renderGraphTransformDoor() {
  return `
    <article class="lesson-block discussion-door graph-transform-door is-collapsed" data-discussion-door>
      <button class="discussion-door-toggle" type="button" data-discussion-door-toggle aria-expanded="false">
        <span>بيان دالة انطلاقا من بيان دالة أخرى</span>
        <small>افتح قواعد التحويل</small>
      </button>
      <div class="discussion-door-body" data-discussion-door-body hidden>
        <section class="unified-door-section">
          <header class="unified-door-head"><span>الفكرة الأساسية</span><strong>لا نعيد الرسم من الصفر</strong></header>
          <div class="method-box">
            <strong>طريقة العمل:</strong>
            <p>نبدأ من المنحنى المعروف <span class="math">(C_f)</span>، ثم نطبق تحويلا هندسيا واضحا للحصول على منحنى الدالة الجديدة. المطلوب هو معرفة ماذا يحدث لكل نقطة <span class="math">(x,f(x))</span>.</p>
          </div>
          <div class="graph-transform-grid">
            <div class="property-box"><strong><span class="math">f(x)+a</span></strong><p>نقل عمودي: إلى الأعلى إذا <span class="math">a&gt;0</span>، وإلى الأسفل إذا <span class="math">a&lt;0</span>.</p></div>
            <div class="property-box"><strong><span class="math">f(x-a)</span></strong><p>نقل أفقي: نحو اليمين إذا <span class="math">a&gt;0</span>، ونحو اليسار إذا <span class="math">a&lt;0</span>.</p></div>
            <div class="property-box"><strong><span class="math">-f(x)</span></strong><p>تناظر بالنسبة إلى محور الفواصل.</p></div>
            <div class="property-box"><strong><span class="math">f(-x)</span></strong><p>تناظر بالنسبة إلى محور التراتيب.</p></div>
            <div class="property-box"><strong><span class="math">|f(x)|</span></strong><p>نترك الجزء فوق محور الفواصل كما هو، ونقلب الجزء السالب إلى الأعلى.</p></div>
            <div class="property-box"><strong><span class="math">f(|x|)</span></strong><p>نحتفظ بفرع <span class="math">x≥0</span>، ثم نرسم صورته بالتناظر حول محور التراتيب.</p></div>
          </div>
        </section>
        <section class="unified-door-section">
          <header class="unified-door-head"><span>مثال مرئي</span><strong>من <span class="math">C_f</span> إلى منحنيات مرتبطة</strong></header>
          <figure class="graph-transform-figure" aria-label="تحويلات بيان دالة انطلاقا من بيان دالة أخرى">
            <svg viewBox="0 0 760 420" role="img">
              <rect x="0" y="0" width="760" height="420" rx="18" fill="#fffdf4"></rect>
              <g stroke="#e5e7eb" stroke-width="1">
                <line x1="80" y1="40" x2="80" y2="360"></line>
                <line x1="160" y1="40" x2="160" y2="360"></line>
                <line x1="240" y1="40" x2="240" y2="360"></line>
                <line x1="320" y1="40" x2="320" y2="360"></line>
                <line x1="400" y1="40" x2="400" y2="360"></line>
                <line x1="480" y1="40" x2="480" y2="360"></line>
                <line x1="560" y1="40" x2="560" y2="360"></line>
                <line x1="640" y1="40" x2="640" y2="360"></line>
                <line x1="50" y1="120" x2="710" y2="120"></line>
                <line x1="50" y1="200" x2="710" y2="200"></line>
                <line x1="50" y1="280" x2="710" y2="280"></line>
              </g>
              <g stroke="#111827" stroke-width="2">
                <line x1="50" y1="200" x2="710" y2="200"></line>
                <line x1="380" y1="40" x2="380" y2="360"></line>
              </g>
              <path d="M120 285 C190 210 255 112 330 150 C390 180 430 260 500 232 C560 208 600 135 650 108" fill="none" stroke="#dc2626" stroke-width="4" stroke-linecap="round"></path>
              <path d="M120 205 C190 130 255 32 330 70 C390 100 430 180 500 152 C560 128 600 55 650 28" fill="none" stroke="#2563eb" stroke-width="3.5" stroke-linecap="round" stroke-dasharray="10 8"></path>
              <path d="M110 115 C180 190 245 288 320 250 C380 220 420 140 490 168 C550 192 590 265 640 292" fill="none" stroke="#059669" stroke-width="3.5" stroke-linecap="round" stroke-dasharray="6 8"></path>
              <path d="M120 115 C190 190 255 288 330 250 C390 220 430 140 500 168 C560 192 600 265 650 292" fill="none" stroke="#7c3aed" stroke-width="3.5" stroke-linecap="round" opacity="0.82"></path>
              <g font-family="Tajawal, Arial, sans-serif" font-size="15" font-weight="800">
                <text x="718" y="216" fill="#111827">x</text>
                <text x="392" y="54" fill="#111827">y</text>
                <text x="612" y="104" fill="#dc2626">C_f</text>
                <text x="522" y="58" fill="#2563eb">C: y=f(x)+1</text>
                <text x="86" y="108" fill="#059669">C: y=-f(x)</text>
                <text x="452" y="306" fill="#7c3aed">C: y=f(x-1)</text>
              </g>
            </svg>
            <figcaption>كل لون يمثل تحويلا هندسيا بسيطا للمنحنى الأصلي: نقل، تناظر، أو تغيير في الجزء السالب.</figcaption>
          </figure>
        </section>
        <section class="unified-door-section">
          <header class="unified-door-head"><span>التدريب الأول</span><strong>استنتاج منحنيات من منحنى دالة</strong></header>
          <article class="training-exercise graph-transform-first-exercise">
            <h4>الجزء الأول: دراسة الدالة الأصلية</h4>
            <p>لتكن الدالة <span class="math">f</span> المعرفة على المجال <span class="math">]-1,+∞[</span> بالعبارة:</p>
            <div class="math-equation">f(x)=ln(x+1)-1</div>
            <p>و <span class="math">(C_f)</span> تمثيلها البياني في مستو منسوب إلى معلم متعامد ومتجانس <span class="math">(O;i,j)</span>.</p>
            <ol>
              <li>احسب نهايات الدالة <span class="math">f</span> عند أطراف مجال تعريفها، وفسر النتيجة هندسيا إن أمكن.</li>
              <li>ادرس اتجاه تغير الدالة <span class="math">f</span>، ثم شكل جدول تغيراتها.</li>
              <li>احسب <span class="math">f(0)</span>، وبيّن أن المنحنى <span class="math">(C_f)</span> يقطع محور الفواصل في نقطة فاصلتها <span class="math">x_0=e-1</span>.</li>
              <li>ارسم المنحنى <span class="math">(C_f)</span>.</li>
            </ol>
            <h4>الجزء الثاني: استنتاج المنحنيات</h4>
            <p>باستعمال المنحنى <span class="math">(C_f)</span> والقواعد المذكورة في ملخصك، اشرح كيف يمكن استنتاج رسم المنحنيات التالية، ثم ارسمها. يمكنك رسم كل منحنى بلون مختلف في نفس المعلم أو في معلم منفصل.</p>
            <ol>
              <li>المنحنى <span class="math">(C_1)</span> الممثل للدالة <span class="math">g</span> المعرفة على <span class="math">]-1,+∞[</span> بـ:</li>
            </ol>
            <div class="math-equation">g(x)=|ln(x+1)-1|</div>
            <ol start="2">
              <li>المنحنى <span class="math">(C_2)</span> الممثل للدالة <span class="math">h</span> المعرفة على <span class="math">R</span> بـ:</li>
            </ol>
            <div class="math-equation">h(x)=ln(|x|+1)-1</div>
            <ol start="3">
              <li>المنحنى <span class="math">(C_3)</span> الممثل للدالة <span class="math">k</span> المعرفة على <span class="math">]-∞,1[</span> بـ:</li>
            </ol>
            <div class="math-equation">k(x)=ln(-x+1)-1</div>
            <section class="training-solution solution-toggle-door is-collapsed" data-discussion-door>
              <button class="solution-detail-toggle" type="button" data-discussion-door-toggle aria-expanded="false"><span>الحل المفصل</span><small>افتح الحل</small></button>
              <div class="training-solution-body" data-discussion-door-body hidden>
                <header class="solution-subhead"><span>الجزء الأول</span><h4>دراسة الدالة الأصلية</h4></header>
                <article class="solution-step-card">
                  <h5>1. مجال التعريف والنهايات</h5>
                  <p>لدينا <span class="math">f(x)=ln(x+1)-1</span>. يجب أن يكون:</p>
                  <div class="math-equation">x+1&gt;0 ⇔ x&gt;-1</div>
                  <p>إذن مجال التعريف هو <span class="math">D_f=]-1,+∞[</span>.</p>
                  <div class="solution-case">
                    <strong>عند <span class="math">-1^+</span>:</strong>
                    <div class="math-equation">lim(x→-1+) (x+1)=0^+ ⇒ lim(x→-1+) ln(x+1)=-∞</div>
                    <div class="math-equation">lim(x→-1+) f(x)=-∞</div>
                    <p><strong>التفسير الهندسي:</strong> المستقيم <span class="math">x=-1</span> مقارب عمودي للمنحنى <span class="math">(C_f)</span>.</p>
                  </div>
                  <div class="solution-case">
                    <strong>عند <span class="math">+∞</span>:</strong>
                    <div class="math-equation">lim(x→+∞) ln(x+1)=+∞ ⇒ lim(x→+∞) f(x)=+∞</div>
                  </div>
                </article>
                <article class="solution-step-card">
                  <h5>2. اتجاه التغير وجدول التغيرات</h5>
                  <p>الدالة <span class="math">f</span> قابلة للاشتقاق على <span class="math">]-1,+∞[</span>، ومشتقتها:</p>
                  <div class="math-equation">f'(x)=1/(x+1)</div>
                  <p>وبما أن <span class="math">x+1&gt;0</span> على مجال التعريف، فإن:</p>
                  <div class="math-equation">f'(x)&gt;0</div>
                  <p>إذن <span class="math">f</span> متزايدة تماما على <span class="math">]-1,+∞[</span>.</p>
                  <div class="variation-mini-table" aria-label="جدول تغيرات الدالة f"><div>x</div><div>-1</div><div></div><div>+∞</div><div>f'(x)</div><div></div><div>+</div><div></div><div>f(x)</div><div>-∞</div><div>↗</div><div>+∞</div></div>
                </article>
                <article class="solution-step-card">
                  <h5>3. التقاطعات المهمة</h5>
                  <p>نحسب صورة الصفر:</p>
                  <div class="math-equation">f(0)=ln(1)-1=-1</div>
                  <p>إذن يقطع المنحنى محور التراتيب في النقطة <span class="math">(0,-1)</span>.</p>
                  <p>لإيجاد تقاطعه مع محور الفواصل نحل <span class="math">f(x)=0</span>:</p>
                  <div class="math-equation">ln(x+1)-1=0 ⇔ ln(x+1)=1</div>
                  <div class="math-equation">x+1=e ⇔ x=e-1</div>
                  <p>إذن يقطع <span class="math">(C_f)</span> محور الفواصل في النقطة <span class="math">(e-1,0)</span>.</p>
                </article>
                <article class="solution-step-card solution-graph-card">
                  <h5>4. رسم المنحنى <span class="math">(C_f)</span></h5>
                  <p>لرسم <span class="math">(C_f)</span> نعتمد على: المقارب العمودي <span class="math">x=-1</span>، التزايد التام، النقطة <span class="math">(0,-1)</span>، والنقطة <span class="math">(e-1,0)</span>.</p>
                  <figure class="function-solution-graph" aria-label="رسم توضيحي للدالة f(x)=ln(x+1)-1">
                    <svg viewBox="0 0 680 420" role="img">
                      <rect x="0" y="0" width="680" height="420" rx="18" fill="#fffdf4"></rect>
                      <g stroke="#e5e7eb" stroke-width="1"><line x1="90" y1="45" x2="90" y2="350"></line><line x1="180" y1="45" x2="180" y2="350"></line><line x1="270" y1="45" x2="270" y2="350"></line><line x1="360" y1="45" x2="360" y2="350"></line><line x1="450" y1="45" x2="450" y2="350"></line><line x1="540" y1="45" x2="540" y2="350"></line><line x1="70" y1="105" x2="620" y2="105"></line><line x1="70" y1="195" x2="620" y2="195"></line><line x1="70" y1="285" x2="620" y2="285"></line></g>
                      <g stroke="#111827" stroke-width="2"><line x1="70" y1="195" x2="620" y2="195"></line><line x1="270" y1="45" x2="270" y2="350"></line></g>
                      <line x1="180" y1="45" x2="180" y2="350" stroke="#2563eb" stroke-width="3" stroke-dasharray="9 8"></line>
                      <path d="M187 350 C194 317 205 280 224 246 C250 198 286 154 330 126 C400 82 508 63 620 54" fill="none" stroke="#dc2626" stroke-width="4" stroke-linecap="round"></path>
                      <circle cx="270" cy="285" r="6" fill="#059669"></circle><circle cx="425" cy="195" r="6" fill="#059669"></circle>
                      <g font-family="Tajawal, Arial, sans-serif" font-size="15" font-weight="800"><text x="628" y="210" fill="#111827">x</text><text x="282" y="58" fill="#111827">y</text><text x="190" y="72" fill="#2563eb">x=-1</text><text x="282" y="304" fill="#059669">(0,-1)</text><text x="438" y="188" fill="#059669">e-1</text><text x="535" y="72" fill="#dc2626">C_f</text></g>
                    </svg>
                    <figcaption>منحنى لوغارتمي منزاح: مقارب عمودي عند <span class="math">x=-1</span>، ومتزايد على كامل مجاله.</figcaption>
                  </figure>
                </article>
                <header class="solution-subhead"><span>الجزء الثاني</span><h4>استنتاج المنحنيات من <span class="math">(C_f)</span></h4></header>
                <article class="solution-step-card">
                  <h5>1. منحنى <span class="math">g(x)=|ln(x+1)-1|=|f(x)|</span></h5>
                  <p>بما أن <span class="math">g(x)=|f(x)|</span> فإننا نستنتج <span class="math">(C_1)</span> من <span class="math">(C_f)</span> كما يلي:</p>
                  <ul class="solution-list"><li>الجزء من <span class="math">(C_f)</span> الواقع فوق محور الفواصل أو عليه يبقى كما هو.</li><li>الجزء الواقع تحت محور الفواصل نقلبه بتناظر بالنسبة إلى محور الفواصل.</li></ul>
                  <p>وبما أن <span class="math">f(x)&lt;0</span> على <span class="math">]-1,e-1[</span> و <span class="math">f(x)≥0</span> على <span class="math">[e-1,+∞[</span>، فإن الانعكاس يخص الفرع الموجود قبل <span class="math">e-1</span>.</p>
                </article>
                <article class="solution-step-card">
                  <h5>2. منحنى <span class="math">h(x)=ln(|x|+1)-1=f(|x|)</span></h5>
                  <p>الدالة <span class="math">h</span> معرفة على <span class="math">R</span>، وهي زوجية لأن:</p>
                  <div class="math-equation">h(-x)=ln(|-x|+1)-1=ln(|x|+1)-1=h(x)</div>
                  <p>لرسم <span class="math">(C_2)</span> نأخذ فرع <span class="math">(C_f)</span> الموافق لـ <span class="math">x≥0</span> فقط، ثم نرسم صورته بالتناظر بالنسبة إلى محور التراتيب.</p>
                  <p>النقطة <span class="math">(0,-1)</span> تبقى مشتركة، والتقاطعان مع محور الفواصل هما <span class="math">x=e-1</span> و <span class="math">x=1-e</span>.</p>
                  <figure class="function-solution-graph" aria-label="رسم الدالة h(x)=ln(|x|+1)-1">
                    <svg viewBox="0 0 680 420" role="img">
                      <rect x="0" y="0" width="680" height="420" rx="18" fill="#fffdf4"></rect>
                      <g stroke="#e5e7eb" stroke-width="1">
                        <line x1="80" y1="45" x2="80" y2="350"></line><line x1="160" y1="45" x2="160" y2="350"></line><line x1="240" y1="45" x2="240" y2="350"></line><line x1="320" y1="45" x2="320" y2="350"></line><line x1="400" y1="45" x2="400" y2="350"></line><line x1="480" y1="45" x2="480" y2="350"></line><line x1="560" y1="45" x2="560" y2="350"></line>
                        <line x1="70" y1="105" x2="620" y2="105"></line><line x1="70" y1="195" x2="620" y2="195"></line><line x1="70" y1="285" x2="620" y2="285"></line>
                      </g>
                      <g stroke="#111827" stroke-width="2"><line x1="70" y1="195" x2="620" y2="195"></line><line x1="340" y1="45" x2="340" y2="350"></line></g>
                      <path d="M340 285 C377 210 425 152 482 119 C528 92 574 76 620 68" fill="none" stroke="#dc2626" stroke-width="4" stroke-linecap="round"></path>
                      <path d="M340 285 C303 210 255 152 198 119 C152 92 106 76 60 68" fill="none" stroke="#dc2626" stroke-width="4" stroke-linecap="round"></path>
                      <line x1="340" y1="45" x2="340" y2="350" stroke="#2563eb" stroke-width="3" stroke-dasharray="9 8" opacity="0.6"></line>
                      <circle cx="340" cy="285" r="6" fill="#059669"></circle><circle cx="463" cy="195" r="6" fill="#059669"></circle><circle cx="217" cy="195" r="6" fill="#059669"></circle>
                      <g font-family="Tajawal, Arial, sans-serif" font-size="15" font-weight="800"><text x="628" y="210" fill="#111827">x</text><text x="352" y="58" fill="#111827">y</text><text x="352" y="304" fill="#059669">(0,-1)</text><text x="474" y="188" fill="#059669">e-1</text><text x="160" y="188" fill="#059669">1-e</text><text x="490" y="92" fill="#dc2626">C_2</text><text x="356" y="88" fill="#2563eb">محور تناظر</text></g>
                    </svg>
                    <figcaption>منحنى <span class="math">h</span> زوجي: نرسم الفرع الأيمن ثم ننسخه بتناظر حول محور التراتيب.</figcaption>
                  </figure>
                </article>
                <article class="solution-step-card">
                  <h5>3. منحنى <span class="math">k(x)=ln(-x+1)-1=f(-x)</span></h5>
                  <p>نلاحظ أن:</p>
                  <div class="math-equation">k(x)=ln(1-x)-1=f(-x)</div>
                  <p>إذن <span class="math">(C_3)</span> هو صورة <span class="math">(C_f)</span> بتناظر بالنسبة إلى محور التراتيب.</p>
                  <p>مجال تعريفه هو <span class="math">]-∞,1[</span>، والمستقيم <span class="math">x=1</span> مقارب عمودي له، لأنه صورة المقارب <span class="math">x=-1</span> بالتناظر حول محور التراتيب.</p>
                  <p>كما أن <span class="math">k(0)=-1</span>، ويقطع محور الفواصل عندما:</p>
                  <div class="math-equation">ln(1-x)-1=0 ⇔ 1-x=e ⇔ x=1-e</div>
                  <figure class="function-solution-graph" aria-label="رسم الدالة k(x)=ln(1-x)-1">
                    <svg viewBox="0 0 680 420" role="img">
                      <rect x="0" y="0" width="680" height="420" rx="18" fill="#fffdf4"></rect>
                      <g stroke="#e5e7eb" stroke-width="1">
                        <line x1="90" y1="45" x2="90" y2="350"></line><line x1="180" y1="45" x2="180" y2="350"></line><line x1="270" y1="45" x2="270" y2="350"></line><line x1="360" y1="45" x2="360" y2="350"></line><line x1="450" y1="45" x2="450" y2="350"></line><line x1="540" y1="45" x2="540" y2="350"></line><line x1="630" y1="45" x2="630" y2="350"></line>
                        <line x1="70" y1="105" x2="620" y2="105"></line><line x1="70" y1="195" x2="620" y2="195"></line><line x1="70" y1="285" x2="620" y2="285"></line>
                      </g>
                      <g stroke="#111827" stroke-width="2"><line x1="70" y1="195" x2="620" y2="195"></line><line x1="360" y1="45" x2="360" y2="350"></line></g>
                      <line x1="450" y1="45" x2="450" y2="350" stroke="#2563eb" stroke-width="3" stroke-dasharray="9 8"></line>
                      <path d="M70 54 C182 63 290 82 360 126 C404 154 440 198 466 246 C485 280 496 317 503 350" fill="none" stroke="#7c3aed" stroke-width="4" stroke-linecap="round"></path>
                      <circle cx="360" cy="285" r="6" fill="#059669"></circle><circle cx="205" cy="195" r="6" fill="#059669"></circle>
                      <g font-family="Tajawal, Arial, sans-serif" font-size="15" font-weight="800"><text x="628" y="210" fill="#111827">x</text><text x="372" y="58" fill="#111827">y</text><text x="462" y="72" fill="#2563eb">x=1</text><text x="372" y="304" fill="#059669">(0,-1)</text><text x="145" y="188" fill="#059669">1-e</text><text x="105" y="78" fill="#7c3aed">C_3</text></g>
                    </svg>
                    <figcaption>منحنى <span class="math">k</span> هو صورة <span class="math">C_f</span> بتناظر حول محور التراتيب؛ لذلك صار المقارب العمودي <span class="math">x=1</span>.</figcaption>
                  </figure>
                </article>
              </div>
            </section>
          </article>
        </section>
        <section class="unified-door-section">
          <header class="unified-door-head"><span>التدريب الثاني</span><strong>دالة أصلية ثم استنتاج منحنيات</strong></header>
          <article class="training-exercise graph-transform-second-exercise">
            <h4>الجزء الأول: دراسة الدالة الأصلية</h4>
            <p>لتكن الدالة <span class="math">f</span> المعرفة على المجال <span class="math">]0,+∞[</span> بالعبارة:</p>
            <div class="math-equation">f(x)=1+ln(x)/x</div>
            <p>وليكن <span class="math">(C_f)</span> تمثيلها البياني في معلم متعامد ومتجانس <span class="math">(O;i,j)</span>.</p>
            <ol>
              <li>احسب <span class="math">lim(x→0+) f(x)</span> و <span class="math">lim(x→+∞) f(x)</span>، واستنتج المستقيمات المقاربة للمنحنى <span class="math">(C_f)</span>.</li>
              <li>ادرس اتجاه تغير الدالة <span class="math">f</span>، ثم شكل جدول تغيراتها.</li>
              <li>بيّن أن المنحنى <span class="math">(C_f)</span> يقطع محور الفواصل في نقطة وحيدة فاصلتها <span class="math">α</span> حيث <span class="math">0.5&lt;α&lt;0.6</span>.</li>
              <li>ارسم المستقيمات المقاربة والمنحنى <span class="math">(C_f)</span>.</li>
            </ol>
            <h4>الجزء الثاني: استنتاج المنحنيات</h4>
            <p>نعتبر الدوال <span class="math">g</span> و <span class="math">h</span> و <span class="math">k</span> حيث:</p>
            <div class="math-equation">g(x)=|1+ln(x)/x|</div>
            <div class="math-equation">h(x)=1+ln(|x|)/|x|</div>
            <div class="math-equation">k(x)=1+ln(-x)/(-x)</div>
            <p>وليكن <span class="math">(C_g)</span> و <span class="math">(C_h)</span> و <span class="math">(C_k)</span> منحنياتها البيانية على الترتيب.</p>
            <ol>
              <li>عيّن مجموعة تعريف كل من الدوال <span class="math">g</span> و <span class="math">h</span> و <span class="math">k</span>.</li>
              <li>بيّن أن الدالة <span class="math">h</span> زوجية.</li>
              <li>اعتمادا على القواعد السابقة، اشرح بدقة كيف يمكن استنتاج رسم المنحنيات <span class="math">(C_g)</span> و <span class="math">(C_h)</span> و <span class="math">(C_k)</span> انطلاقا من المنحنى <span class="math">(C_f)</span>.</li>
            </ol>
            <section class="training-solution solution-toggle-door is-collapsed" data-discussion-door>
              <button class="solution-detail-toggle" type="button" data-discussion-door-toggle aria-expanded="false"><span>الحل المفصل</span><small>افتح الحل</small></button>
              <div class="training-solution-body" data-discussion-door-body hidden>
                <header class="solution-subhead"><span>الجزء الأول</span><h4>دراسة الدالة الأصلية</h4></header>
                <article class="solution-step-card">
                  <h5>1. النهايات والمستقيمات المقاربة</h5>
                  <p>مجال تعريف الدالة هو <span class="math">]0,+∞[</span>.</p>
                  <div class="solution-case"><strong>عند <span class="math">0^+</span>:</strong><div class="math-equation">lim(x→0+) ln(x)/x=-∞</div><div class="math-equation">lim(x→0+) f(x)=-∞</div><p>إذن المستقيم <span class="math">x=0</span> مقارب عمودي للمنحنى <span class="math">(C_f)</span>.</p></div>
                  <div class="solution-case"><strong>عند <span class="math">+∞</span>:</strong><div class="math-equation">lim(x→+∞) ln(x)/x=0</div><div class="math-equation">lim(x→+∞) f(x)=1</div><p>إذن المستقيم <span class="math">y=1</span> مقارب أفقي للمنحنى عند <span class="math">+∞</span>.</p></div>
                </article>
                <article class="solution-step-card">
                  <h5>2. المشتقة وجدول التغيرات</h5>
                  <p>نشتق الحد <span class="math">ln(x)/x</span> باستعمال مشتقة خارج:</p>
                  <div class="math-equation">f'(x)=((1/x)x-ln(x))/x²=(1-ln(x))/x²</div>
                  <p>بما أن <span class="math">x²&gt;0</span>، فإن إشارة <span class="math">f'(x)</span> هي إشارة <span class="math">1-ln(x)</span>.</p>
                  <ul class="solution-list"><li><span class="math">f'(x)&gt;0</span> إذا <span class="math">0&lt;x&lt;e</span>.</li><li><span class="math">f'(e)=0</span>.</li><li><span class="math">f'(x)&lt;0</span> إذا <span class="math">x&gt;e</span>.</li></ul>
                  <p>إذن <span class="math">f</span> متزايدة على <span class="math">]0,e]</span> ومتناقصة على <span class="math">[e,+∞[</span>، وقيمتها الكبرى هي:</p>
                  <div class="math-equation">f(e)=1+1/e</div>
                  <div class="variation-mini-table" aria-label="جدول تغيرات الدالة f"><div>x</div><div>0</div><div>e</div><div>+∞</div><div>f'(x)</div><div>+</div><div>0</div><div>-</div><div>f(x)</div><div>-∞</div><div>1+1/e</div><div>1</div></div>
                </article>
                <article class="solution-step-card">
                  <h5>3. الجذر الوحيد <span class="math">α</span></h5>
                  <p>بما أن <span class="math">f</span> متزايدة على <span class="math">]0,e]</span> وتنتقل من <span class="math">-∞</span> إلى <span class="math">1+1/e</span>، فهي تقطع محور الفواصل مرة واحدة فقط في هذا المجال. ولا يوجد جذر بعد <span class="math">e</span> لأن <span class="math">f</span> تتناقص نحو <span class="math">1</span> وتبقى موجبة.</p>
                  <p>نحسب قيمتين محيطتين:</p>
                  <div class="math-equation">f(0.5)=1+ln(0.5)/0.5≈-0.386&lt;0</div>
                  <div class="math-equation">f(0.6)=1+ln(0.6)/0.6≈0.149&gt;0</div>
                  <p>إذن حسب مبرهنة القيم المتوسطة يوجد الجذر الوحيد <span class="math">α</span> حيث:</p>
                  <div class="math-equation">0.5&lt;α&lt;0.6</div>
                </article>
                <article class="solution-step-card solution-graph-card">
                  <h5>4. رسم <span class="math">(C_f)</span></h5>
                  <figure class="function-solution-graph" aria-label="رسم الدالة f(x)=1+ln(x)/x">
                    <svg viewBox="0 0 680 420" role="img"><rect x="0" y="0" width="680" height="420" rx="18" fill="#fffdf4"></rect><g stroke="#e5e7eb"><line x1="100" y1="45" x2="100" y2="350"></line><line x1="190" y1="45" x2="190" y2="350"></line><line x1="280" y1="45" x2="280" y2="350"></line><line x1="370" y1="45" x2="370" y2="350"></line><line x1="460" y1="45" x2="460" y2="350"></line><line x1="550" y1="45" x2="550" y2="350"></line><line x1="70" y1="125" x2="620" y2="125"></line><line x1="70" y1="210" x2="620" y2="210"></line><line x1="70" y1="295" x2="620" y2="295"></line></g><g stroke="#111827" stroke-width="2"><line x1="70" y1="295" x2="620" y2="295"></line><line x1="100" y1="45" x2="100" y2="350"></line></g><line x1="70" y1="185" x2="620" y2="185" stroke="#2563eb" stroke-width="3" stroke-dasharray="9 8"></line><line x1="100" y1="45" x2="100" y2="350" stroke="#2563eb" stroke-width="3" stroke-dasharray="9 8"></line><path d="M108 350 C118 318 134 280 160 245 C198 194 244 130 304 112 C365 94 434 130 500 157 C552 178 590 184 620 185" fill="none" stroke="#dc2626" stroke-width="4" stroke-linecap="round"></path><circle cx="152" cy="295" r="6" fill="#059669"></circle><circle cx="304" cy="112" r="6" fill="#059669"></circle><g font-family="Tajawal, Arial, sans-serif" font-size="15" font-weight="800"><text x="628" y="310" fill="#111827">x</text><text x="112" y="58" fill="#111827">y</text><text x="112" y="72" fill="#2563eb">x=0</text><text x="540" y="177" fill="#2563eb">y=1</text><text x="162" y="288" fill="#059669">α</text><text x="315" y="106" fill="#059669">e</text><text x="515" y="132" fill="#dc2626">C_f</text></g></svg>
                    <figcaption>يبدأ المنحنى من <span class="math">-∞</span> قرب <span class="math">0^+</span>، يبلغ قيمة كبرى عند <span class="math">e</span>، ثم يقترب من <span class="math">y=1</span>.</figcaption>
                  </figure>
                </article>
                <header class="solution-subhead"><span>الجزء الثاني</span><h4>استنتاج المنحنيات</h4></header>
                <article class="solution-step-card">
                  <h5>1. مجالات التعريف</h5>
                  <ul class="solution-list"><li><span class="math">D_g=]0,+∞[</span> لأن <span class="math">ln(x)</span> يتطلب <span class="math">x&gt;0</span>.</li><li><span class="math">D_h=R*</span> لأن <span class="math">|x|&gt;0</span>، أي <span class="math">x≠0</span>.</li><li><span class="math">D_k=]-∞,0[</span> لأن <span class="math">-x&gt;0</span>.</li></ul>
                </article>
                <article class="solution-step-card">
                  <h5>2. زوجية الدالة <span class="math">h</span></h5>
                  <p>لكل <span class="math">x≠0</span> لدينا:</p>
                  <div class="math-equation">h(-x)=1+ln(|-x|)/|-x|=1+ln(|x|)/|x|=h(x)</div>
                  <p>إذن <span class="math">h</span> زوجية، ومنحناها متناظر بالنسبة إلى محور التراتيب.</p>
                </article>
                <article class="solution-step-card">
                  <h5>3. استنتاج <span class="math">(C_g)</span></h5>
                  <p>لدينا <span class="math">g(x)=|f(x)|</span>. إذن نترك الجزء من <span class="math">(C_f)</span> الواقع فوق محور الفواصل كما هو، ونقلب الجزء الواقع تحته إلى الأعلى بتناظر بالنسبة إلى محور الفواصل. وبما أن الجزء السالب يقع على <span class="math">]0,α[</span>، فهذا هو الجزء الذي ينعكس.</p>
                  <figure class="function-solution-graph" aria-label="رسم الدالة g(x)=|1+ln(x)/x|">
                    <svg viewBox="0 0 680 420" role="img"><rect x="0" y="0" width="680" height="420" rx="18" fill="#fffdf4"></rect><g stroke="#e5e7eb"><line x1="100" y1="45" x2="100" y2="350"></line><line x1="190" y1="45" x2="190" y2="350"></line><line x1="280" y1="45" x2="280" y2="350"></line><line x1="370" y1="45" x2="370" y2="350"></line><line x1="460" y1="45" x2="460" y2="350"></line><line x1="550" y1="45" x2="550" y2="350"></line><line x1="70" y1="125" x2="620" y2="125"></line><line x1="70" y1="210" x2="620" y2="210"></line><line x1="70" y1="295" x2="620" y2="295"></line></g><g stroke="#111827" stroke-width="2"><line x1="70" y1="295" x2="620" y2="295"></line><line x1="100" y1="45" x2="100" y2="350"></line></g><line x1="70" y1="185" x2="620" y2="185" stroke="#2563eb" stroke-width="3" stroke-dasharray="9 8"></line><line x1="100" y1="45" x2="100" y2="350" stroke="#2563eb" stroke-width="3" stroke-dasharray="9 8"></line><path d="M108 45 C118 72 134 110 160 145 C198 194 244 130 304 112 C365 94 434 130 500 157 C552 178 590 184 620 185" fill="none" stroke="#059669" stroke-width="4" stroke-linecap="round"></path><path d="M108 350 C118 318 134 280 160 245" fill="none" stroke="#94a3b8" stroke-width="3" stroke-linecap="round" stroke-dasharray="8 8"></path><circle cx="152" cy="295" r="6" fill="#111827"></circle><circle cx="304" cy="112" r="6" fill="#059669"></circle><g font-family="Tajawal, Arial, sans-serif" font-size="15" font-weight="800"><text x="628" y="310" fill="#111827">x</text><text x="112" y="58" fill="#111827">y</text><text x="112" y="72" fill="#2563eb">x=0</text><text x="540" y="177" fill="#2563eb">y=1</text><text x="162" y="288" fill="#111827">α</text><text x="315" y="106" fill="#059669">e</text><text x="505" y="132" fill="#059669">C_g</text><text x="122" y="118" fill="#64748b">انعكاس الجزء السالب</text></g></svg>
                    <figcaption>بيان <span class="math">g=|f|</span>: الجزء السالب من <span class="math">C_f</span> على <span class="math">]0,α[</span> ينعكس فوق محور الفواصل.</figcaption>
                  </figure>
                </article>
                <article class="solution-step-card">
                  <h5>4. استنتاج <span class="math">(C_h)</span> و <span class="math">(C_k)</span></h5>
                  <p>لدينا <span class="math">h(x)=f(|x|)</span>: نحتفظ بفرع <span class="math">(C_f)</span> على <span class="math">]0,+∞[</span> ثم نرسم صورته بتناظر بالنسبة إلى محور التراتيب.</p>
                  <p>ولدينا <span class="math">k(x)=f(-x)</span>: منحنى <span class="math">(C_k)</span> هو صورة <span class="math">(C_f)</span> كلها بتناظر بالنسبة إلى محور التراتيب، لذلك مجاله <span class="math">]-∞,0[</span> ومقاربه العمودي هو <span class="math">x=0</span> من الجهة اليسرى.</p>
                  <figure class="function-solution-graph" aria-label="رسم الدالة h(x)=1+ln(|x|)/|x|">
                    <svg viewBox="0 0 680 420" role="img"><rect x="0" y="0" width="680" height="420" rx="18" fill="#fffdf4"></rect><g stroke="#e5e7eb"><line x1="80" y1="45" x2="80" y2="350"></line><line x1="160" y1="45" x2="160" y2="350"></line><line x1="240" y1="45" x2="240" y2="350"></line><line x1="320" y1="45" x2="320" y2="350"></line><line x1="400" y1="45" x2="400" y2="350"></line><line x1="480" y1="45" x2="480" y2="350"></line><line x1="560" y1="45" x2="560" y2="350"></line><line x1="70" y1="125" x2="620" y2="125"></line><line x1="70" y1="210" x2="620" y2="210"></line><line x1="70" y1="295" x2="620" y2="295"></line></g><g stroke="#111827" stroke-width="2"><line x1="70" y1="295" x2="620" y2="295"></line><line x1="340" y1="45" x2="340" y2="350"></line></g><line x1="70" y1="185" x2="620" y2="185" stroke="#2563eb" stroke-width="3" stroke-dasharray="9 8"></line><line x1="340" y1="45" x2="340" y2="350" stroke="#2563eb" stroke-width="3" stroke-dasharray="9 8" opacity="0.58"></line><path d="M348 350 C358 318 374 280 400 245 C438 194 484 130 544 112 C585 100 610 128 620 150" fill="none" stroke="#dc2626" stroke-width="4" stroke-linecap="round"></path><path d="M332 350 C322 318 306 280 280 245 C242 194 196 130 136 112 C95 100 70 128 60 150" fill="none" stroke="#dc2626" stroke-width="4" stroke-linecap="round"></path><circle cx="392" cy="295" r="6" fill="#059669"></circle><circle cx="288" cy="295" r="6" fill="#059669"></circle><circle cx="544" cy="112" r="6" fill="#059669"></circle><circle cx="136" cy="112" r="6" fill="#059669"></circle><g font-family="Tajawal, Arial, sans-serif" font-size="15" font-weight="800"><text x="628" y="310" fill="#111827">x</text><text x="352" y="58" fill="#111827">y</text><text x="350" y="76" fill="#2563eb">x=0 محور تناظر ومقارب</text><text x="540" y="177" fill="#2563eb">y=1</text><text x="402" y="288" fill="#059669">α</text><text x="248" y="288" fill="#059669">-α</text><text x="514" y="102" fill="#dc2626">C_h</text></g></svg>
                    <figcaption>بيان <span class="math">h=f(|x|)</span>: نرسم الفرع الأيمن من <span class="math">C_f</span> ثم ننسخه بتناظر بالنسبة إلى محور التراتيب.</figcaption>
                  </figure>
                  <figure class="function-solution-graph" aria-label="رسم الدالة k(x)=1+ln(-x)/(-x)">
                    <svg viewBox="0 0 680 420" role="img"><rect x="0" y="0" width="680" height="420" rx="18" fill="#fffdf4"></rect><g stroke="#e5e7eb"><line x1="80" y1="45" x2="80" y2="350"></line><line x1="160" y1="45" x2="160" y2="350"></line><line x1="240" y1="45" x2="240" y2="350"></line><line x1="320" y1="45" x2="320" y2="350"></line><line x1="400" y1="45" x2="400" y2="350"></line><line x1="480" y1="45" x2="480" y2="350"></line><line x1="560" y1="45" x2="560" y2="350"></line><line x1="70" y1="125" x2="620" y2="125"></line><line x1="70" y1="210" x2="620" y2="210"></line><line x1="70" y1="295" x2="620" y2="295"></line></g><g stroke="#111827" stroke-width="2"><line x1="70" y1="295" x2="620" y2="295"></line><line x1="340" y1="45" x2="340" y2="350"></line></g><line x1="70" y1="185" x2="620" y2="185" stroke="#2563eb" stroke-width="3" stroke-dasharray="9 8"></line><line x1="340" y1="45" x2="340" y2="350" stroke="#2563eb" stroke-width="3" stroke-dasharray="9 8"></line><path d="M332 350 C322 318 306 280 280 245 C242 194 196 130 136 112 C75 94 26 130 -20 157" fill="none" stroke="#7c3aed" stroke-width="4" stroke-linecap="round"></path><circle cx="288" cy="295" r="6" fill="#059669"></circle><circle cx="136" cy="112" r="6" fill="#059669"></circle><g font-family="Tajawal, Arial, sans-serif" font-size="15" font-weight="800"><text x="628" y="310" fill="#111827">x</text><text x="352" y="58" fill="#111827">y</text><text x="350" y="76" fill="#2563eb">x=0</text><text x="540" y="177" fill="#2563eb">y=1</text><text x="248" y="288" fill="#059669">-α</text><text x="145" y="106" fill="#059669">-e</text><text x="98" y="142" fill="#7c3aed">C_k</text></g></svg>
                    <figcaption>بيان <span class="math">k=f(-x)</span>: هو صورة <span class="math">C_f</span> بتناظر حول محور التراتيب، لذلك يوجد فقط على <span class="math">]-∞,0[</span>.</figcaption>
                  </figure>
                </article>
              </div>
            </section>
          </article>
        </section>
        <section class="unified-door-section">
          <header class="unified-door-head"><span>التدريب الثالث</span><strong>تحويلات منحنى دالة لوغارتمية</strong></header>
          <article class="training-exercise graph-transform-third-exercise">
            <h4>الجزء الأول: دراسة الدالة الأصلية</h4>
            <p>تعتبر الدالة <span class="math">f</span> المعرفة على المجال <span class="math">]0,+∞[</span> بالعبارة:</p>
            <div class="math-equation">f(x)=(ln(x))²-2ln(x)</div>
            <p>وليكن <span class="math">(C_f)</span> تمثيلها البياني في مستو منسوب إلى معلم متعامد ومتجانس <span class="math">(O;i,j)</span>.</p>
            <ol>
              <li>احسب <span class="math">lim(x→0+) f(x)</span> و <span class="math">lim(x→+∞) f(x)</span>. ماذا تستنتج هندسيا عند الصفر؟</li>
              <li>بيّن أنه من أجل كل <span class="math">x</span> من المجال <span class="math">]0,+∞[</span>، المشتقة تعطى بالعبارة: <span class="math">f'(x)=2(ln(x)-1)/x</span>.</li>
              <li>ادرس إشارة <span class="math">f'(x)</span>، ثم شكل جدول تغيرات الدالة <span class="math">f</span>.</li>
              <li>عيّن إحداثيات نقط تقاطع المنحنى <span class="math">(C_f)</span> مع محور الفواصل.</li>
              <li>ارسم المنحنى <span class="math">(C_f)</span>.</li>
            </ol>
            <h4>الجزء الثاني: استنتاج المنحنيات</h4>
            <p>لتكن الدوال <span class="math">g</span> و <span class="math">h</span> و <span class="math">k</span> المعرفة كما يلي:</p>
            <div class="math-equation">g(x)=|(ln(x))²-2ln(x)|</div>
            <div class="math-equation">h(x)=(ln|x|)²-2ln|x|</div>
            <div class="math-equation">k(x)=(ln(-x))²-2ln(-x)</div>
            <ol>
              <li>حدد مجموعة التعريف لكل دالة من الدوال الثلاث.</li>
              <li>اشرح كيف يمكن استنتاج رسم المنحنيات <span class="math">(C_g)</span> و <span class="math">(C_h)</span> و <span class="math">(C_k)</span> انطلاقا من المنحنى <span class="math">(C_f)</span>، معتمدا على القواعد الهندسية للتحويلات النقطية.</li>
            </ol>
            <section class="training-solution solution-toggle-door is-collapsed" data-discussion-door>
              <button class="solution-detail-toggle" type="button" data-discussion-door-toggle aria-expanded="false"><span>الحل المفصل</span><small>افتح الحل</small></button>
              <div class="training-solution-body" data-discussion-door-body hidden>
                <header class="solution-subhead"><span>الجزء الأول</span><h4>دراسة الدالة الأصلية</h4></header>
                <article class="solution-step-card">
                  <h5>1. النهايات والتفسير الهندسي</h5>
                  <p>عند <span class="math">0^+</span> لدينا <span class="math">ln(x)→-∞</span>، ومنه:</p>
                  <div class="math-equation">f(x)=(ln(x))²-2ln(x)→+∞</div>
                  <p>إذن المستقيم <span class="math">x=0</span> مقارب عمودي للمنحنى <span class="math">(C_f)</span>.</p>
                  <p>وعند <span class="math">+∞</span> لدينا <span class="math">ln(x)→+∞</span>، ومنه:</p>
                  <div class="math-equation">lim(x→+∞)f(x)=+∞</div>
                </article>
                <article class="solution-step-card">
                  <h5>2. المشتقة وإشارة التغير</h5>
                  <p>نشتق:</p>
                  <div class="math-equation">f'(x)=2ln(x)/x-2/x=2(ln(x)-1)/x</div>
                  <p>وبما أن <span class="math">x&gt;0</span>، فإن إشارة <span class="math">f'(x)</span> هي إشارة <span class="math">ln(x)-1</span>.</p>
                  <ul class="solution-list"><li><span class="math">f'(x)&lt;0</span> إذا <span class="math">0&lt;x&lt;e</span>.</li><li><span class="math">f'(e)=0</span>.</li><li><span class="math">f'(x)&gt;0</span> إذا <span class="math">x&gt;e</span>.</li></ul>
                  <p>إذن <span class="math">f</span> متناقصة على <span class="math">]0,e]</span> ومتزايدة على <span class="math">[e,+∞[</span>، وقيمتها الصغرى:</p>
                  <div class="math-equation">f(e)=1-2=-1</div>
                  <div class="variation-mini-table" aria-label="جدول تغيرات الدالة f"><div>x</div><div>0</div><div>e</div><div>+∞</div><div>f'(x)</div><div>-</div><div>0</div><div>+</div><div>f(x)</div><div>+∞</div><div>-1</div><div>+∞</div></div>
                </article>
                <article class="solution-step-card">
                  <h5>3. التقاطع مع محور الفواصل</h5>
                  <p>نحل <span class="math">f(x)=0</span>:</p>
                  <div class="math-equation">(ln(x))²-2ln(x)=0</div>
                  <div class="math-equation">ln(x)(ln(x)-2)=0</div>
                  <p>إذن:</p>
                  <div class="math-equation">ln(x)=0 ⇔ x=1</div>
                  <div class="math-equation">ln(x)=2 ⇔ x=e²</div>
                  <p>إذن نقطتا التقاطع مع محور الفواصل هما <span class="math">(1,0)</span> و <span class="math">(e²,0)</span>.</p>
                </article>
                <article class="solution-step-card solution-graph-card">
                  <h5>4. رسم <span class="math">(C_f)</span></h5>
                  <figure class="function-solution-graph" aria-label="رسم الدالة f(x)=(ln(x))²-2ln(x)">
                    <svg viewBox="0 0 680 420" role="img"><rect x="0" y="0" width="680" height="420" rx="18" fill="#fffdf4"></rect><g stroke="#e5e7eb"><line x1="100" y1="45" x2="100" y2="350"></line><line x1="190" y1="45" x2="190" y2="350"></line><line x1="280" y1="45" x2="280" y2="350"></line><line x1="370" y1="45" x2="370" y2="350"></line><line x1="460" y1="45" x2="460" y2="350"></line><line x1="550" y1="45" x2="550" y2="350"></line><line x1="70" y1="120" x2="620" y2="120"></line><line x1="70" y1="210" x2="620" y2="210"></line><line x1="70" y1="300" x2="620" y2="300"></line></g><g stroke="#111827" stroke-width="2"><line x1="70" y1="210" x2="620" y2="210"></line><line x1="100" y1="45" x2="100" y2="350"></line></g><line x1="100" y1="45" x2="100" y2="350" stroke="#2563eb" stroke-width="3" stroke-dasharray="9 8"></line><path d="M108 55 C124 98 148 160 190 210 C235 264 282 296 340 300 C410 304 465 260 520 210 C570 164 600 104 620 60" fill="none" stroke="#dc2626" stroke-width="4" stroke-linecap="round"></path><circle cx="190" cy="210" r="6" fill="#059669"></circle><circle cx="340" cy="300" r="6" fill="#059669"></circle><circle cx="520" cy="210" r="6" fill="#059669"></circle><g font-family="Tajawal, Arial, sans-serif" font-size="15" font-weight="800"><text x="628" y="225" fill="#111827">x</text><text x="112" y="58" fill="#111827">y</text><text x="112" y="80" fill="#2563eb">x=0</text><text x="178" y="233" fill="#059669">1</text><text x="346" y="318" fill="#059669">e</text><text x="512" y="233" fill="#059669">e²</text><text x="500" y="92" fill="#dc2626">C_f</text></g></svg>
                    <figcaption>منحنى <span class="math">f</span> يتناقص من <span class="math">+∞</span> إلى القيمة الصغرى <span class="math">-1</span> عند <span class="math">e</span> ثم يتزايد إلى <span class="math">+∞</span>.</figcaption>
                  </figure>
                </article>
                <header class="solution-subhead"><span>الجزء الثاني</span><h4>استنتاج المنحنيات</h4></header>
                <article class="solution-step-card">
                  <h5>1. مجالات التعريف</h5>
                  <ul class="solution-list"><li><span class="math">D_g=]0,+∞[</span>.</li><li><span class="math">D_h=R*</span> لأن <span class="math">|x|&gt;0</span>.</li><li><span class="math">D_k=]-∞,0[</span> لأن <span class="math">-x&gt;0</span>.</li></ul>
                </article>
                <article class="solution-step-card">
                  <h5>2. بيان <span class="math">g(x)=|f(x)|</span></h5>
                  <p>نترك الجزأين الموجبين من <span class="math">(C_f)</span> كما هما، ونقلب الجزء الواقع تحت محور الفواصل، أي بين <span class="math">1</span> و <span class="math">e²</span>، بتناظر بالنسبة إلى محور الفواصل.</p>
                  <figure class="function-solution-graph" aria-label="رسم الدالة g(x)=|(ln(x))²-2ln(x)|"><svg viewBox="0 0 680 420" role="img"><rect x="0" y="0" width="680" height="420" rx="18" fill="#fffdf4"></rect><g stroke="#e5e7eb"><line x1="100" y1="45" x2="100" y2="350"></line><line x1="190" y1="45" x2="190" y2="350"></line><line x1="280" y1="45" x2="280" y2="350"></line><line x1="370" y1="45" x2="370" y2="350"></line><line x1="460" y1="45" x2="460" y2="350"></line><line x1="550" y1="45" x2="550" y2="350"></line><line x1="70" y1="120" x2="620" y2="120"></line><line x1="70" y1="210" x2="620" y2="210"></line><line x1="70" y1="300" x2="620" y2="300"></line></g><g stroke="#111827" stroke-width="2"><line x1="70" y1="210" x2="620" y2="210"></line><line x1="100" y1="45" x2="100" y2="350"></line></g><line x1="100" y1="45" x2="100" y2="350" stroke="#2563eb" stroke-width="3" stroke-dasharray="9 8"></line><path d="M108 55 C124 98 148 160 190 210 C235 156 282 124 340 120 C410 116 465 160 520 210 C570 164 600 104 620 60" fill="none" stroke="#059669" stroke-width="4" stroke-linecap="round"></path><path d="M190 210 C235 264 282 296 340 300 C410 304 465 260 520 210" fill="none" stroke="#94a3b8" stroke-width="3" stroke-dasharray="8 8"></path><circle cx="190" cy="210" r="6" fill="#111827"></circle><circle cx="340" cy="120" r="6" fill="#059669"></circle><circle cx="520" cy="210" r="6" fill="#111827"></circle><g font-family="Tajawal, Arial, sans-serif" font-size="15" font-weight="800"><text x="178" y="233" fill="#111827">1</text><text x="346" y="112" fill="#059669">e</text><text x="512" y="233" fill="#111827">e²</text><text x="500" y="92" fill="#059669">C_g</text></g></svg><figcaption>بيان <span class="math">g</span>: الجزء السالب من <span class="math">C_f</span> بين <span class="math">1</span> و <span class="math">e²</span> أصبح فوق محور الفواصل.</figcaption></figure>
                </article>
                <article class="solution-step-card">
                  <h5>3. بيان <span class="math">h=f(|x|)</span> و <span class="math">k=f(-x)</span></h5>
                  <p><span class="math">h</span> زوجية، فنأخذ فرع <span class="math">C_f</span> على <span class="math">]0,+∞[</span> ونرسم صورته بتناظر حول محور التراتيب. أما <span class="math">k</span> فهو صورة <span class="math">C_f</span> بتناظر حول محور التراتيب ومجاله <span class="math">]-∞,0[</span>.</p>
                  <figure class="function-solution-graph" aria-label="رسم الدالة h(x)=(ln|x|)²-2ln|x|"><svg viewBox="0 0 680 420" role="img"><rect x="0" y="0" width="680" height="420" rx="18" fill="#fffdf4"></rect><g stroke="#e5e7eb"><line x1="100" y1="45" x2="100" y2="350"></line><line x1="180" y1="45" x2="180" y2="350"></line><line x1="260" y1="45" x2="260" y2="350"></line><line x1="340" y1="45" x2="340" y2="350"></line><line x1="420" y1="45" x2="420" y2="350"></line><line x1="500" y1="45" x2="500" y2="350"></line><line x1="580" y1="45" x2="580" y2="350"></line><line x1="70" y1="120" x2="620" y2="120"></line><line x1="70" y1="210" x2="620" y2="210"></line><line x1="70" y1="300" x2="620" y2="300"></line></g><g stroke="#111827" stroke-width="2"><line x1="70" y1="210" x2="620" y2="210"></line><line x1="340" y1="45" x2="340" y2="350"></line></g><line x1="340" y1="45" x2="340" y2="350" stroke="#2563eb" stroke-width="3" stroke-dasharray="9 8"></line><path d="M348 55 C364 98 388 160 430 210 C475 264 522 296 580 300 C610 302 628 284 640 260" fill="none" stroke="#dc2626" stroke-width="4" stroke-linecap="round"></path><path d="M332 55 C316 98 292 160 250 210 C205 264 158 296 100 300 C70 302 52 284 40 260" fill="none" stroke="#dc2626" stroke-width="4" stroke-linecap="round"></path><circle cx="430" cy="210" r="6" fill="#059669"></circle><circle cx="250" cy="210" r="6" fill="#059669"></circle><circle cx="580" cy="300" r="6" fill="#059669"></circle><circle cx="100" cy="300" r="6" fill="#059669"></circle><g font-family="Tajawal, Arial, sans-serif" font-size="15" font-weight="800"><text x="350" y="78" fill="#2563eb">x=0</text><text x="508" y="105" fill="#dc2626">C_h</text><text x="438" y="233" fill="#059669">1</text><text x="210" y="233" fill="#059669">-1</text></g></svg><figcaption>بيان <span class="math">h</span> زوجي وله فرعان متناظران حول محور التراتيب.</figcaption></figure>
                  <figure class="function-solution-graph" aria-label="رسم الدالة k(x)=(ln(-x))²-2ln(-x)"><svg viewBox="0 0 680 420" role="img"><rect x="0" y="0" width="680" height="420" rx="18" fill="#fffdf4"></rect><g stroke="#e5e7eb"><line x1="100" y1="45" x2="100" y2="350"></line><line x1="180" y1="45" x2="180" y2="350"></line><line x1="260" y1="45" x2="260" y2="350"></line><line x1="340" y1="45" x2="340" y2="350"></line><line x1="420" y1="45" x2="420" y2="350"></line><line x1="500" y1="45" x2="500" y2="350"></line><line x1="580" y1="45" x2="580" y2="350"></line><line x1="70" y1="120" x2="620" y2="120"></line><line x1="70" y1="210" x2="620" y2="210"></line><line x1="70" y1="300" x2="620" y2="300"></line></g><g stroke="#111827" stroke-width="2"><line x1="70" y1="210" x2="620" y2="210"></line><line x1="340" y1="45" x2="340" y2="350"></line></g><line x1="340" y1="45" x2="340" y2="350" stroke="#2563eb" stroke-width="3" stroke-dasharray="9 8"></line><path d="M332 55 C316 98 292 160 250 210 C205 264 158 296 100 300 C70 302 52 284 40 260" fill="none" stroke="#7c3aed" stroke-width="4" stroke-linecap="round"></path><circle cx="250" cy="210" r="6" fill="#059669"></circle><circle cx="100" cy="300" r="6" fill="#059669"></circle><g font-family="Tajawal, Arial, sans-serif" font-size="15" font-weight="800"><text x="350" y="78" fill="#2563eb">x=0</text><text x="105" y="95" fill="#7c3aed">C_k</text><text x="210" y="233" fill="#059669">-1</text><text x="70" y="318" fill="#059669">-e</text></g></svg><figcaption>بيان <span class="math">k=f(-x)</span> هو الفرع الأيسر الناتج عن تناظر <span class="math">C_f</span> حول محور التراتيب.</figcaption></figure>
                </article>
              </div>
            </section>
          </article>
        </section>
        <section class="unified-door-section">
          <header class="unified-door-head"><span>التدريب الرابع</span><strong>دالة مساعدة وتحويلات متقدمة</strong></header>
          <article class="training-exercise graph-transform-fourth-exercise">
            <h4>الجزء الأول: دراسة الدالة المساعدة <span class="math">g</span></h4>
            <p>تعتبر الدالة <span class="math">g</span> المعرفة على المجال <span class="math">]0,+∞[</span> بالعبارة:</p>
            <div class="math-equation">g(x)=x²+2-2ln(x)</div>
            <ol>
              <li>ادرس اتجاه تغير الدالة <span class="math">g</span> على مجال تعريفها، ثم شكل جدول تغيراتها.</li>
              <li>احسب <span class="math">g(1)</span>، ثم استنتج إشارة <span class="math">g(x)</span> من أجل كل <span class="math">x∈]0,+∞[</span>.</li>
            </ol>
            <h4>الجزء الثاني: دراسة الدالة الرئيسية <span class="math">f</span></h4>
            <p>تعتبر الدالة <span class="math">f</span> المعرفة على المجال <span class="math">]0,+∞[</span> بالعبارة:</p>
            <div class="math-equation">f(x)=x/2+1+ln(x)/x</div>
            <p>وليكن <span class="math">(C_f)</span> تمثيلها البياني في معلم متعامد ومتجانس <span class="math">(O;i,j)</span>.</p>
            <ol>
              <li>احسب نهايات الدالة <span class="math">f</span> عند <span class="math">0</span> بقيم كبرى وعند <span class="math">+∞</span>. ماذا تستنتج هندسيا عند الصفر؟</li>
              <li>بيّن أنه من أجل كل <span class="math">x∈]0,+∞[</span>: <span class="math">f'(x)=g(x)/(2x²)</span>.</li>
              <li>استنتج اتجاه تغير الدالة <span class="math">f</span> وشكل جدول تغيراتها.</li>
              <li>بيّن أن المستقيم <span class="math">Δ: y=x/2+1</span> مقارب مائل للمنحنى <span class="math">(C_f)</span> عند <span class="math">+∞</span>.</li>
              <li>ادرس الوضع النسبي للمنحنى <span class="math">(C_f)</span> والمستقيم <span class="math">(Δ)</span>.</li>
              <li>بيّن أن المعادلة <span class="math">f(x)=0</span> تقبل حلا وحيدا <span class="math">α</span> حيث <span class="math">0.3&lt;α&lt;0.4</span>.</li>
              <li>ارسم المستقيم المقارب <span class="math">(Δ)</span> والمنحنى <span class="math">(C_f)</span>.</li>
            </ol>
            <h4>الجزء الثالث: تركيب التحويلات النقطية</h4>
            <p>نعتبر الدالتين <span class="math">h</span> و <span class="math">m</span> المعرفتين كما يلي:</p>
            <div class="math-equation">h(x)=|x|/2+1+ln(|x|)/|x|</div>
            <div class="math-equation">m(x)=|x|/2+1+ln(|x|)/x</div>
            <ol>
              <li>حدد مجموعة تعريف الدالة <span class="math">h</span>، وبيّن أنها دالة زوجية.</li>
              <li>بالاعتماد على المنحنى <span class="math">(C_f)</span> والقواعد الهندسية للتحويلات، اشرح بدقة كيف يتم رسم المنحنى <span class="math">(C_h)</span>.</li>
              <li>استنتج كيف يتم رسم المنحنى <span class="math">(C_m)</span> انطلاقا من <span class="math">(C_h)</span>.</li>
            </ol>
            <section class="training-solution solution-toggle-door is-collapsed" data-discussion-door>
              <button class="solution-detail-toggle" type="button" data-discussion-door-toggle aria-expanded="false"><span>الحل المفصل</span><small>افتح الحل</small></button>
              <div class="training-solution-body" data-discussion-door-body hidden>
                <header class="solution-subhead"><span>الجزء الأول</span><h4>دراسة الدالة المساعدة</h4></header>
                <article class="solution-step-card">
                  <h5>1. تغيرات <span class="math">g</span> وإشارتها</h5>
                  <p>نشتق:</p>
                  <div class="math-equation">g'(x)=2x-2/x=2(x²-1)/x</div>
                  <p>وبما أن <span class="math">x&gt;0</span>، فإن إشارة <span class="math">g'(x)</span> هي إشارة <span class="math">x²-1</span>.</p>
                  <ul class="solution-list"><li><span class="math">g</span> متناقصة على <span class="math">]0,1]</span>.</li><li><span class="math">g</span> متزايدة على <span class="math">[1,+∞[</span>.</li></ul>
                  <div class="math-equation">g(1)=1+2-2ln(1)=3</div>
                  <p>إذن القيمة الصغرى للدالة <span class="math">g</span> هي <span class="math">3</span>، ومنه:</p>
                  <div class="math-equation">∀x∈]0,+∞[, g(x)&gt;0</div>
                </article>
                <header class="solution-subhead"><span>الجزء الثاني</span><h4>دراسة الدالة الرئيسية</h4></header>
                <article class="solution-step-card">
                  <h5>2. النهايات والمشتقة</h5>
                  <p>عند <span class="math">0^+</span> لدينا <span class="math">ln(x)/x→-∞</span>، إذن:</p>
                  <div class="math-equation">lim(x→0+)f(x)=-∞</div>
                  <p>فيكون المستقيم <span class="math">x=0</span> مقاربا عموديا للمنحنى.</p>
                  <p>وعند <span class="math">+∞</span>، الحد <span class="math">x/2</span> يفرض:</p>
                  <div class="math-equation">lim(x→+∞)f(x)=+∞</div>
                  <p>نشتق:</p>
                  <div class="math-equation">f'(x)=1/2+(1-ln(x))/x²</div>
                  <div class="math-equation">f'(x)=(x²+2-2ln(x))/(2x²)=g(x)/(2x²)</div>
                  <p>وبما أن <span class="math">g(x)&gt;0</span> و <span class="math">2x²&gt;0</span>، فإن <span class="math">f'(x)&gt;0</span>. إذن <span class="math">f</span> متزايدة تماما على <span class="math">]0,+∞[</span>.</p>
                </article>
                <article class="solution-step-card">
                  <h5>3. المقارب المائل والوضع النسبي</h5>
                  <p>نحسب الفرق بين الدالة والمستقيم <span class="math">Δ: y=x/2+1</span>:</p>
                  <div class="math-equation">f(x)-(x/2+1)=ln(x)/x</div>
                  <p>وعند <span class="math">+∞</span> نجد <span class="math">ln(x)/x→0</span>، إذن <span class="math">Δ</span> مقارب مائل عند <span class="math">+∞</span>.</p>
                  <ul class="solution-list"><li>إذا <span class="math">0&lt;x&lt;1</span> فإن <span class="math">ln(x)&lt;0</span>، فيكون <span class="math">C_f</span> أسفل <span class="math">Δ</span>.</li><li>إذا <span class="math">x=1</span> يقطع المنحنى المقارب في النقطة <span class="math">(1,3/2)</span>.</li><li>إذا <span class="math">x&gt;1</span> فإن <span class="math">C_f</span> أعلى <span class="math">Δ</span>.</li></ul>
                </article>
                <article class="solution-step-card">
                  <h5>4. وجود الجذر الوحيد</h5>
                  <p>بما أن <span class="math">f</span> متزايدة تماما، فالمعادلة <span class="math">f(x)=0</span> لها على الأكثر حل واحد. نحسب:</p>
                  <div class="math-equation">f(0.3)≈0.15+1+ln(0.3)/0.3≈-2.86&lt;0</div>
                  <div class="math-equation">f(0.4)≈0.2+1+ln(0.4)/0.4≈-1.09&lt;0</div>
                  <p>وبما أن التقدير المطلوب في الصورة هو <span class="math">0.3&lt;α&lt;0.4</span>، نحتفظ به كمعطى تدريبي ونستعمله على الرسم. ملاحظة حسابية: بالعبارة المكتوبة <span class="math">x/2+1+ln(x)/x</span> الجذر العددي يقع تقريبا قرب <span class="math">0.53</span>، لذلك قد تكون هناك علامة أو معامل ناقص في نص المصدر.</p>
                </article>
                <article class="solution-step-card solution-graph-card">
                  <h5>5. رسم <span class="math">C_f</span> و <span class="math">Δ</span></h5>
                  <figure class="function-solution-graph" aria-label="رسم الدالة f والمقارب المائل"><svg viewBox="0 0 680 420" role="img"><rect x="0" y="0" width="680" height="420" rx="18" fill="#fffdf4"></rect><g stroke="#e5e7eb"><line x1="100" y1="45" x2="100" y2="350"></line><line x1="190" y1="45" x2="190" y2="350"></line><line x1="280" y1="45" x2="280" y2="350"></line><line x1="370" y1="45" x2="370" y2="350"></line><line x1="460" y1="45" x2="460" y2="350"></line><line x1="550" y1="45" x2="550" y2="350"></line><line x1="70" y1="120" x2="620" y2="120"></line><line x1="70" y1="210" x2="620" y2="210"></line><line x1="70" y1="300" x2="620" y2="300"></line></g><g stroke="#111827" stroke-width="2"><line x1="70" y1="300" x2="620" y2="300"></line><line x1="100" y1="45" x2="100" y2="350"></line></g><line x1="100" y1="45" x2="100" y2="350" stroke="#2563eb" stroke-width="3" stroke-dasharray="9 8"></line><line x1="95" y1="265" x2="620" y2="84" stroke="#2563eb" stroke-width="3" stroke-dasharray="10 8"></line><path d="M106 350 C128 320 145 290 174 300 C218 315 250 252 300 214 C370 160 455 119 620 76" fill="none" stroke="#dc2626" stroke-width="4" stroke-linecap="round"></path><circle cx="208" cy="300" r="6" fill="#059669"></circle><circle cx="280" cy="203" r="6" fill="#059669"></circle><g font-family="Tajawal, Arial, sans-serif" font-size="15" font-weight="800"><text x="112" y="72" fill="#2563eb">x=0</text><text x="505" y="102" fill="#2563eb">Δ</text><text x="540" y="70" fill="#dc2626">C_f</text><text x="218" y="323" fill="#059669">α</text><text x="292" y="197" fill="#059669">(1,3/2)</text></g></svg><figcaption>الرسم يوضح التزايد، المقارب العمودي <span class="math">x=0</span>، والمقارب المائل <span class="math">Δ</span>.</figcaption></figure>
                </article>
                <header class="solution-subhead"><span>الجزء الثالث</span><h4>التحويلات</h4></header>
                <article class="solution-step-card">
                  <h5>6. رسم <span class="math">C_h</span></h5>
                  <p>مجال تعريف <span class="math">h</span> هو <span class="math">R*</span>. كما أن:</p>
                  <div class="math-equation">h(-x)=|-x|/2+1+ln(|-x|)/|-x|=h(x)</div>
                  <p>إذن <span class="math">h</span> زوجية. لرسم <span class="math">C_h</span> نأخذ فرع <span class="math">C_f</span> على <span class="math">]0,+∞[</span> ثم ننسخه بتناظر حول محور التراتيب.</p>
                  <figure class="function-solution-graph" aria-label="رسم الدالة h"><svg viewBox="0 0 680 420" role="img"><rect x="0" y="0" width="680" height="420" rx="18" fill="#fffdf4"></rect><g stroke="#e5e7eb"><line x1="100" y1="45" x2="100" y2="350"></line><line x1="180" y1="45" x2="180" y2="350"></line><line x1="260" y1="45" x2="260" y2="350"></line><line x1="340" y1="45" x2="340" y2="350"></line><line x1="420" y1="45" x2="420" y2="350"></line><line x1="500" y1="45" x2="500" y2="350"></line><line x1="580" y1="45" x2="580" y2="350"></line><line x1="70" y1="120" x2="620" y2="120"></line><line x1="70" y1="300" x2="620" y2="300"></line></g><g stroke="#111827" stroke-width="2"><line x1="70" y1="300" x2="620" y2="300"></line><line x1="340" y1="45" x2="340" y2="350"></line></g><line x1="340" y1="45" x2="340" y2="350" stroke="#2563eb" stroke-width="3" stroke-dasharray="9 8"></line><path d="M348 350 C370 320 388 290 414 300 C458 315 490 252 540 214 C590 176 620 120 635 76" fill="none" stroke="#dc2626" stroke-width="4" stroke-linecap="round"></path><path d="M332 350 C310 320 292 290 266 300 C222 315 190 252 140 214 C90 176 60 120 45 76" fill="none" stroke="#dc2626" stroke-width="4" stroke-linecap="round"></path><g font-family="Tajawal, Arial, sans-serif" font-size="15" font-weight="800"><text x="350" y="78" fill="#2563eb">x=0</text><text x="505" y="98" fill="#dc2626">C_h</text><text x="170" y="98" fill="#dc2626">C_h</text></g></svg><figcaption>بيان <span class="math">h=f(|x|)</span> متناظر حول محور التراتيب.</figcaption></figure>
                </article>
                <article class="solution-step-card">
                  <h5>7. رسم <span class="math">C_m</span></h5>
                  <p>على <span class="math">]0,+∞[</span> لدينا <span class="math">m(x)=f(x)</span>، لذلك الفرع الأيمن من <span class="math">C_m</span> هو نفسه الفرع الأيمن من <span class="math">C_h</span>. وعلى <span class="math">]-∞,0[</span> نكتب:</p>
                  <div class="math-equation">m(x)=|x|/2+1+ln(|x|)/x</div>
                  <p>أي إن الحد اللوغارتمي يغيّر إشارته مقارنة بـ <span class="math">h</span>. لذلك نستنتج الفرع الأيسر من <span class="math">C_m</span> بعكس الفرع الأيسر لـ <span class="math">C_h</span> حول المستقيم المائل <span class="math">y=|x|/2+1</span>.</p>
                  <figure class="function-solution-graph" aria-label="رسم الدالة m"><svg viewBox="0 0 680 420" role="img"><rect x="0" y="0" width="680" height="420" rx="18" fill="#fffdf4"></rect><g stroke="#e5e7eb"><line x1="100" y1="45" x2="100" y2="350"></line><line x1="180" y1="45" x2="180" y2="350"></line><line x1="260" y1="45" x2="260" y2="350"></line><line x1="340" y1="45" x2="340" y2="350"></line><line x1="420" y1="45" x2="420" y2="350"></line><line x1="500" y1="45" x2="500" y2="350"></line><line x1="580" y1="45" x2="580" y2="350"></line><line x1="70" y1="120" x2="620" y2="120"></line><line x1="70" y1="300" x2="620" y2="300"></line></g><g stroke="#111827" stroke-width="2"><line x1="70" y1="300" x2="620" y2="300"></line><line x1="340" y1="45" x2="340" y2="350"></line></g><line x1="340" y1="45" x2="340" y2="350" stroke="#2563eb" stroke-width="3" stroke-dasharray="9 8"></line><line x1="340" y1="265" x2="70" y2="84" stroke="#2563eb" stroke-width="3" stroke-dasharray="10 8"></line><line x1="340" y1="265" x2="620" y2="84" stroke="#2563eb" stroke-width="3" stroke-dasharray="10 8"></line><path d="M348 350 C370 320 388 290 414 300 C458 315 490 252 540 214 C590 176 620 120 635 76" fill="none" stroke="#7c3aed" stroke-width="4" stroke-linecap="round"></path><path d="M332 180 C310 210 292 240 266 230 C222 214 190 278 140 316 C90 354 60 410 45 454" fill="none" stroke="#7c3aed" stroke-width="4" stroke-linecap="round"></path><g font-family="Tajawal, Arial, sans-serif" font-size="15" font-weight="800"><text x="350" y="78" fill="#2563eb">x=0</text><text x="505" y="98" fill="#7c3aed">C_m</text><text x="75" y="108" fill="#2563eb">y=|x|/2+1</text></g></svg><figcaption>بيان <span class="math">m</span>: الفرع الأيمن كما هو، والفرع الأيسر ينتج من تغيير إشارة الحد اللوغارتمي.</figcaption></figure>
                </article>
              </div>
            </section>
          </article>
        </section>
        <section class="unified-door-section">
          <header class="unified-door-head"><span>التدريب الخامس</span><strong>رسم كل الدوال الواردة في التدريب</strong></header>
          <article class="training-exercise graph-transform-fifth-exercise">
            <h4>الجزء الأول: دراسة الدالة المساعدة <span class="math">g</span></h4>
            <p>تعتبر الدالة <span class="math">g</span> المعرفة على <span class="math">R</span> بالعبارة:</p>
            <div class="math-equation">g(x)=1-(x+1)e^(-x)</div>
            <ol>
              <li>احسب نهايات الدالة <span class="math">g</span> عند <span class="math">-∞</span> وعند <span class="math">+∞</span>.</li>
              <li>بيّن أن <span class="math">g'(x)=xe^(-x)</span>.</li>
              <li>ادرس إشارة <span class="math">g'(x)</span>، ثم شكل جدول تغيرات <span class="math">g</span>.</li>
              <li>احسب <span class="math">g(0)</span>، ثم استنتج إشارة <span class="math">g(x)</span> على <span class="math">R</span>.</li>
            </ol>
            <h4>الجزء الثاني: دراسة الدالة الرئيسية <span class="math">f</span></h4>
            <p>تعتبر الدالة <span class="math">f</span> المعرفة على <span class="math">R</span> بالعبارة:</p>
            <div class="math-equation">f(x)=x+(x+2)e^(-x)</div>
            <ol>
              <li>احسب نهايتي الدالة <span class="math">f</span> عند <span class="math">-∞</span> وعند <span class="math">+∞</span>.</li>
              <li>بيّن أنه من أجل كل <span class="math">x∈R</span>: <span class="math">f'(x)=g(x)</span>.</li>
              <li>استنتج اتجاه تغير الدالة <span class="math">f</span> وشكل جدول تغيراتها.</li>
              <li>بيّن أن المستقيم <span class="math">Δ: y=x</span> مقارب مائل للمنحنى <span class="math">(C_f)</span> بجوار <span class="math">+∞</span>.</li>
              <li>ادرس الوضع النسبي للمنحنى <span class="math">(C_f)</span> والمستقيم <span class="math">(Δ)</span>.</li>
              <li>بيّن أن المعادلة <span class="math">f(x)=0</span> تقبل حلا وحيدا <span class="math">α</span> حيث <span class="math">-1.7&lt;α&lt;-1.6</span>.</li>
              <li>ارسم المستقيم <span class="math">(Δ)</span> والمنحنى <span class="math">(C_f)</span>.</li>
            </ol>
            <h4>الجزء الثالث: استنتاج المنحنيات</h4>
            <p>نعتبر الدوال <span class="math">h</span> و <span class="math">k</span> و <span class="math">m</span> المعرفة على <span class="math">R</span> كما يلي:</p>
            <div class="math-equation">h(x)=|x+(x+2)e^(-x)|</div>
            <div class="math-equation">k(x)=|x|+(|x|+2)e^(-|x|)</div>
            <div class="math-equation">m(x)=-x+(-x+2)e^x</div>
            <ol>
              <li>تحقق أن <span class="math">m(x)=f(-x)</span>، وأن <span class="math">k(x)=f(|x|)</span>، وأن <span class="math">h(x)=|f(x)|</span>.</li>
              <li>بيّن أن الدالة <span class="math">k</span> زوجية.</li>
              <li>اعتمادا على المنحنى <span class="math">(C_f)</span>، اشرح كيف يمكن رسم <span class="math">(C_h)</span> و <span class="math">(C_k)</span> و <span class="math">(C_m)</span>.</li>
            </ol>
            <section class="training-solution solution-toggle-door is-collapsed" data-discussion-door>
              <button class="solution-detail-toggle" type="button" data-discussion-door-toggle aria-expanded="false"><span>الحل المفصل</span><small>افتح الحل</small></button>
              <div class="training-solution-body" data-discussion-door-body hidden>
                <header class="solution-subhead"><span>رسم الدوال</span><h4>الرسوم البيانية لكل الدوال الواردة</h4></header>
                <article class="solution-step-card">
                  <h5>1. بيان الدالة المساعدة <span class="math">g</span></h5>
                  <p>لدينا <span class="math">g'(x)=xe^{-x}</span>، وبما أن <span class="math">e^{-x}&gt;0</span> فإن <span class="math">g</span> متناقصة على <span class="math">]-∞,0]</span> ومتزايدة على <span class="math">[0,+∞[</span>. كما أن <span class="math">g(0)=0</span>، ومنه <span class="math">g(x)≥0</span>.</p>
                  <figure class="function-solution-graph" aria-label="رسم الدالة g(x)=1-(x+1)e^(-x)"><svg viewBox="0 0 680 420" role="img"><rect x="0" y="0" width="680" height="420" rx="18" fill="#fffdf4"></rect><g stroke="#e5e7eb"><line x1="100" y1="45" x2="100" y2="350"></line><line x1="180" y1="45" x2="180" y2="350"></line><line x1="260" y1="45" x2="260" y2="350"></line><line x1="340" y1="45" x2="340" y2="350"></line><line x1="420" y1="45" x2="420" y2="350"></line><line x1="500" y1="45" x2="500" y2="350"></line><line x1="580" y1="45" x2="580" y2="350"></line><line x1="70" y1="120" x2="620" y2="120"></line><line x1="70" y1="250" x2="620" y2="250"></line></g><g stroke="#111827" stroke-width="2"><line x1="70" y1="250" x2="620" y2="250"></line><line x1="340" y1="45" x2="340" y2="350"></line></g><line x1="70" y1="120" x2="620" y2="120" stroke="#2563eb" stroke-width="3" stroke-dasharray="9 8"></line><path d="M80 60 C145 102 220 186 285 235 C315 257 335 253 340 250 C348 246 380 195 430 160 C500 123 570 120 620 120" fill="none" stroke="#059669" stroke-width="4" stroke-linecap="round"></path><circle cx="340" cy="250" r="6" fill="#111827"></circle><g font-family="Tajawal, Arial, sans-serif" font-size="15" font-weight="800"><text x="350" y="272" fill="#111827">O</text><text x="520" y="111" fill="#2563eb">y=1</text><text x="520" y="150" fill="#059669">C_g</text></g></svg><figcaption>بيان <span class="math">g</span>: له قيمة صغرى <span class="math">0</span> عند <span class="math">x=0</span> ويقترب من <span class="math">1</span> عند <span class="math">+∞</span>.</figcaption></figure>
                </article>
                <article class="solution-step-card">
                  <h5>2. بيان الدالة الرئيسية <span class="math">f</span> والمستقيم <span class="math">Δ:y=x</span></h5>
                  <p>بما أن <span class="math">f'(x)=g(x)≥0</span> فإن <span class="math">f</span> متزايدة على <span class="math">R</span>. كما أن <span class="math">f(x)-x=(x+2)e^{-x}</span>، فيكون <span class="math">Δ:y=x</span> مقاربا مائلا عند <span class="math">+∞</span>.</p>
                  <figure class="function-solution-graph" aria-label="رسم الدالة f(x)=x+(x+2)e^(-x)"><svg viewBox="0 0 680 420" role="img"><rect x="0" y="0" width="680" height="420" rx="18" fill="#fffdf4"></rect><g stroke="#e5e7eb"><line x1="100" y1="45" x2="100" y2="350"></line><line x1="180" y1="45" x2="180" y2="350"></line><line x1="260" y1="45" x2="260" y2="350"></line><line x1="340" y1="45" x2="340" y2="350"></line><line x1="420" y1="45" x2="420" y2="350"></line><line x1="500" y1="45" x2="500" y2="350"></line><line x1="580" y1="45" x2="580" y2="350"></line><line x1="70" y1="250" x2="620" y2="250"></line></g><g stroke="#111827" stroke-width="2"><line x1="70" y1="250" x2="620" y2="250"></line><line x1="340" y1="45" x2="340" y2="350"></line></g><line x1="95" y1="340" x2="620" y2="75" stroke="#2563eb" stroke-width="3" stroke-dasharray="10 8"></line><path d="M105 340 C155 310 205 285 255 265 C305 245 338 210 370 188 C430 146 510 105 620 72" fill="none" stroke="#dc2626" stroke-width="4" stroke-linecap="round"></path><circle cx="200" cy="250" r="6" fill="#059669"></circle><circle cx="315" cy="176" r="6" fill="#059669"></circle><circle cx="340" cy="160" r="6" fill="#059669"></circle><g font-family="Tajawal, Arial, sans-serif" font-size="15" font-weight="800"><text x="540" y="96" fill="#2563eb">Δ:y=x</text><text x="510" y="128" fill="#dc2626">C_f</text><text x="175" y="273" fill="#059669">α</text><text x="286" y="168" fill="#059669">f(-1)≈1.7</text><text x="350" y="156" fill="#059669">f(0)=2</text></g></svg><figcaption>بيان <span class="math">f</span>: متزايد، يقطع محور الفواصل عند <span class="math">α</span>، ويقترب من <span class="math">Δ:y=x</span> عند <span class="math">+∞</span>.</figcaption></figure>
                </article>
                <article class="solution-step-card">
                  <h5>3. بيان <span class="math">h(x)=|f(x)|</span></h5>
                  <p>نستنتج <span class="math">C_h</span> من <span class="math">C_f</span> بقلب الجزء الواقع تحت محور الفواصل إلى الأعلى. وبما أن <span class="math">f(x)&lt;0</span> قبل الجذر <span class="math">α</span>، فهذا هو الجزء الذي ينعكس.</p>
                  <figure class="function-solution-graph" aria-label="رسم الدالة h(x)=|x+(x+2)e^(-x)|"><svg viewBox="0 0 680 420" role="img"><rect x="0" y="0" width="680" height="420" rx="18" fill="#fffdf4"></rect><g stroke="#e5e7eb"><line x1="100" y1="45" x2="100" y2="350"></line><line x1="180" y1="45" x2="180" y2="350"></line><line x1="260" y1="45" x2="260" y2="350"></line><line x1="340" y1="45" x2="340" y2="350"></line><line x1="420" y1="45" x2="420" y2="350"></line><line x1="500" y1="45" x2="500" y2="350"></line><line x1="580" y1="45" x2="580" y2="350"></line><line x1="70" y1="250" x2="620" y2="250"></line></g><g stroke="#111827" stroke-width="2"><line x1="70" y1="250" x2="620" y2="250"></line><line x1="340" y1="45" x2="340" y2="350"></line></g><path d="M105 160 C155 190 205 215 255 235 C295 248 330 214 370 188 C430 146 510 105 620 72" fill="none" stroke="#059669" stroke-width="4" stroke-linecap="round"></path><path d="M105 340 C155 310 205 285 255 265" fill="none" stroke="#94a3b8" stroke-width="3" stroke-dasharray="8 8"></path><circle cx="200" cy="250" r="6" fill="#111827"></circle><g font-family="Tajawal, Arial, sans-serif" font-size="15" font-weight="800"><text x="175" y="273" fill="#111827">α</text><text x="505" y="128" fill="#059669">C_h</text><text x="110" y="145" fill="#64748b">انعكاس</text></g></svg><figcaption>بيان <span class="math">h=|f|</span>: كل القيم تصبح موجبة أو منعدمة.</figcaption></figure>
                </article>
                <article class="solution-step-card">
                  <h5>4. بيان <span class="math">k(x)=f(|x|)</span></h5>
                  <p>نرسم فرع <span class="math">C_f</span> على <span class="math">x≥0</span>، ثم ننسخه بتناظر حول محور التراتيب. لذلك <span class="math">k</span> زوجية.</p>
                  <figure class="function-solution-graph" aria-label="رسم الدالة k(x)=|x|+(|x|+2)e^(-|x|)"><svg viewBox="0 0 680 420" role="img"><rect x="0" y="0" width="680" height="420" rx="18" fill="#fffdf4"></rect><g stroke="#e5e7eb"><line x1="100" y1="45" x2="100" y2="350"></line><line x1="180" y1="45" x2="180" y2="350"></line><line x1="260" y1="45" x2="260" y2="350"></line><line x1="340" y1="45" x2="340" y2="350"></line><line x1="420" y1="45" x2="420" y2="350"></line><line x1="500" y1="45" x2="500" y2="350"></line><line x1="580" y1="45" x2="580" y2="350"></line><line x1="70" y1="250" x2="620" y2="250"></line></g><g stroke="#111827" stroke-width="2"><line x1="70" y1="250" x2="620" y2="250"></line><line x1="340" y1="45" x2="340" y2="350"></line></g><path d="M340 160 C375 140 425 116 485 92 C535 72 580 60 620 52" fill="none" stroke="#dc2626" stroke-width="4" stroke-linecap="round"></path><path d="M340 160 C305 140 255 116 195 92 C145 72 100 60 60 52" fill="none" stroke="#dc2626" stroke-width="4" stroke-linecap="round"></path><circle cx="340" cy="160" r="6" fill="#059669"></circle><g font-family="Tajawal, Arial, sans-serif" font-size="15" font-weight="800"><text x="350" y="156" fill="#059669">2</text><text x="508" y="88" fill="#dc2626">C_k</text><text x="170" y="88" fill="#dc2626">C_k</text></g></svg><figcaption>بيان <span class="math">k=f(|x|)</span>: فرع أيمن من <span class="math">C_f</span> وصورته المرآتية يسارا.</figcaption></figure>
                </article>
                <article class="solution-step-card">
                  <h5>5. بيان <span class="math">m(x)=f(-x)</span></h5>
                  <p>نستنتج <span class="math">C_m</span> من <span class="math">C_f</span> بتناظر كامل حول محور التراتيب.</p>
                  <figure class="function-solution-graph" aria-label="رسم الدالة m(x)=-x+(-x+2)e^x"><svg viewBox="0 0 680 420" role="img"><rect x="0" y="0" width="680" height="420" rx="18" fill="#fffdf4"></rect><g stroke="#e5e7eb"><line x1="100" y1="45" x2="100" y2="350"></line><line x1="180" y1="45" x2="180" y2="350"></line><line x1="260" y1="45" x2="260" y2="350"></line><line x1="340" y1="45" x2="340" y2="350"></line><line x1="420" y1="45" x2="420" y2="350"></line><line x1="500" y1="45" x2="500" y2="350"></line><line x1="580" y1="45" x2="580" y2="350"></line><line x1="70" y1="250" x2="620" y2="250"></line></g><g stroke="#111827" stroke-width="2"><line x1="70" y1="250" x2="620" y2="250"></line><line x1="340" y1="45" x2="340" y2="350"></line></g><line x1="60" y1="75" x2="585" y2="340" stroke="#2563eb" stroke-width="3" stroke-dasharray="10 8"></line><path d="M575 340 C525 310 475 285 425 265 C375 245 342 210 310 188 C250 146 170 105 60 72" fill="none" stroke="#7c3aed" stroke-width="4" stroke-linecap="round"></path><circle cx="480" cy="250" r="6" fill="#059669"></circle><circle cx="365" cy="176" r="6" fill="#059669"></circle><circle cx="340" cy="160" r="6" fill="#059669"></circle><g font-family="Tajawal, Arial, sans-serif" font-size="15" font-weight="800"><text x="140" y="96" fill="#2563eb">y=-x</text><text x="92" y="128" fill="#7c3aed">C_m</text><text x="490" y="273" fill="#059669">-α</text><text x="352" y="156" fill="#059669">2</text></g></svg><figcaption>بيان <span class="math">m=f(-x)</span>: صورة <span class="math">C_f</span> بتناظر حول محور التراتيب، ومقاربه عند <span class="math">-∞</span> هو <span class="math">y=-x</span>.</figcaption></figure>
                </article>
              </div>
            </section>
          </article>
        </section>
        <section class="unified-door-section">
          <header class="unified-door-head"><span>التدريب السادس</span><strong>تركيب دالة مع اللوغارتم</strong></header>
          <article class="training-exercise graph-transform-sixth-exercise">
            <h4>الجزء الأول: دراسة الدالة الأصلية <span class="math">f</span></h4>
            <p>تعتبر الدالة العددية <span class="math">f</span> المعرفة على <span class="math">R</span> بالعبارة:</p>
            <div class="math-equation">f(x)=2x/(x²+1)</div>
            <ol>
              <li>احسب نهايات الدالة <span class="math">f</span> عند <span class="math">-∞</span> وعند <span class="math">+∞</span>. ماذا تستنتج هندسيا؟</li>
              <li>ادرس اتجاه تغير الدالة <span class="math">f</span>، ثم شكل جدول تغيراتها.</li>
              <li>اكتب معادلة المماس <span class="math">T</span> للمنحنى <span class="math">(C_f)</span> عند النقطة ذات الفاصلة <span class="math">0</span>.</li>
              <li>ادرس الوضع النسبي للمنحنى <span class="math">(C_f)</span> بالنسبة للمماس <span class="math">T</span>.</li>
              <li>ارسم <span class="math">(T)</span> و <span class="math">(C_f)</span>.</li>
            </ol>
            <h4>الجزء الثاني: استنتاج الدالة المركبة <span class="math">h</span></h4>
            <p>تعتبر الدالة <span class="math">h</span> المعرفة على <span class="math">]0,+∞[</span> بالعبارة:</p>
            <div class="math-equation">h(x)=2ln(x)/((ln(x))²+1)</div>
            <ol>
              <li>تحقق أنه من أجل كل <span class="math">x∈]0,+∞[</span>: <span class="math">h(x)=f(ln(x))</span>.</li>
              <li>استنتج نهايتي <span class="math">h</span> عند <span class="math">0^+</span> وعند <span class="math">+∞</span>.</li>
              <li>بيّن أن <span class="math">h'(x)=f'(ln(x))/x</span>، واستنتج إشارة <span class="math">h'</span> وجدول تغيرات <span class="math">h</span>.</li>
              <li>استنتج إحداثيات النقاط الحدية للمنحنى <span class="math">(C_h)</span>.</li>
              <li>ارسم المنحنى <span class="math">(C_h)</span>.</li>
            </ol>
            <section class="training-solution solution-toggle-door is-collapsed" data-discussion-door>
              <button class="solution-detail-toggle" type="button" data-discussion-door-toggle aria-expanded="false"><span>الحل المفصل</span><small>افتح الحل</small></button>
              <div class="training-solution-body" data-discussion-door-body hidden>
                <header class="solution-subhead"><span>الجزء الأول</span><h4>دراسة <span class="math">f</span></h4></header>
                <article class="solution-step-card">
                  <h5>1. النهايات والتغيرات</h5>
                  <p>عند <span class="math">±∞</span> لدينا:</p>
                  <div class="math-equation">f(x)=2x/(x²+1) ~ 2/x → 0</div>
                  <p>إذن المستقيم <span class="math">y=0</span> مقارب أفقي للمنحنى عند الطرفين.</p>
                  <p>نشتق:</p>
                  <div class="math-equation">f'(x)=2(1-x²)/(x²+1)²</div>
                  <p>إشارة <span class="math">f'</span> هي إشارة <span class="math">1-x²</span>.</p>
                  <ul class="solution-list"><li><span class="math">f</span> متناقصة على <span class="math">]-∞,-1]</span>.</li><li><span class="math">f</span> متزايدة على <span class="math">[-1,1]</span>.</li><li><span class="math">f</span> متناقصة على <span class="math">[1,+∞[</span>.</li></ul>
                  <div class="math-equation">f(-1)=-1, f(1)=1, f(0)=0</div>
                </article>
                <article class="solution-step-card">
                  <h5>2. المماس والوضع النسبي</h5>
                  <p>لدينا <span class="math">f(0)=0</span> و <span class="math">f'(0)=2</span>، إذن معادلة المماس عند <span class="math">0</span> هي:</p>
                  <div class="math-equation">T: y=2x</div>
                  <p>نحسب الفرق:</p>
                  <div class="math-equation">f(x)-2x=2x/(x²+1)-2x=-2x³/(x²+1)</div>
                  <p>إذن <span class="math">C_f</span> فوق <span class="math">T</span> إذا <span class="math">x&lt;0</span>، وتحته إذا <span class="math">x&gt;0</span>.</p>
                </article>
                <article class="solution-step-card solution-graph-card">
                  <h5>3. رسم <span class="math">C_f</span> و <span class="math">T</span></h5>
                  <figure class="function-solution-graph" aria-label="رسم الدالة f(x)=2x/(x²+1) والمماس"><svg viewBox="0 0 680 420" role="img"><rect x="0" y="0" width="680" height="420" rx="18" fill="#fffdf4"></rect><g stroke="#e5e7eb"><line x1="100" y1="45" x2="100" y2="350"></line><line x1="180" y1="45" x2="180" y2="350"></line><line x1="260" y1="45" x2="260" y2="350"></line><line x1="340" y1="45" x2="340" y2="350"></line><line x1="420" y1="45" x2="420" y2="350"></line><line x1="500" y1="45" x2="500" y2="350"></line><line x1="580" y1="45" x2="580" y2="350"></line><line x1="70" y1="105" x2="620" y2="105"></line><line x1="70" y1="210" x2="620" y2="210"></line><line x1="70" y1="315" x2="620" y2="315"></line></g><g stroke="#111827" stroke-width="2"><line x1="70" y1="210" x2="620" y2="210"></line><line x1="340" y1="45" x2="340" y2="350"></line></g><line x1="245" y1="350" x2="435" y2="70" stroke="#2563eb" stroke-width="3" stroke-dasharray="10 8"></line><line x1="70" y1="210" x2="620" y2="210" stroke="#2563eb" stroke-width="3" stroke-dasharray="8 8" opacity="0.55"></line><path d="M70 205 C135 200 205 250 260 315 C300 260 320 220 340 210 C360 200 380 160 420 105 C475 170 545 220 620 215" fill="none" stroke="#dc2626" stroke-width="4" stroke-linecap="round"></path><circle cx="260" cy="315" r="6" fill="#059669"></circle><circle cx="340" cy="210" r="6" fill="#111827"></circle><circle cx="420" cy="105" r="6" fill="#059669"></circle><g font-family="Tajawal, Arial, sans-serif" font-size="15" font-weight="800"><text x="438" y="88" fill="#2563eb">T:y=2x</text><text x="535" y="197" fill="#2563eb">y=0</text><text x="432" y="105" fill="#059669">(1,1)</text><text x="192" y="330" fill="#059669">(-1,-1)</text><text x="520" y="158" fill="#dc2626">C_f</text></g></svg><figcaption>الدالة <span class="math">f</span> فردية، ومماسها عند الأصل هو <span class="math">y=2x</span>.</figcaption></figure>
                </article>
                <header class="solution-subhead"><span>الجزء الثاني</span><h4>استنتاج <span class="math">h=f(ln x)</span></h4></header>
                <article class="solution-step-card">
                  <h5>4. النهايات والتغيرات</h5>
                  <p>لدينا مباشرة:</p>
                  <div class="math-equation">h(x)=f(ln(x))</div>
                  <p>عندما <span class="math">x→0^+</span> فإن <span class="math">ln(x)→-∞</span>، وعندما <span class="math">x→+∞</span> فإن <span class="math">ln(x)→+∞</span>. وبما أن <span class="math">f(t)→0</span> عند <span class="math">t→±∞</span>، نحصل على:</p>
                  <div class="math-equation">lim(x→0+)h(x)=0, lim(x→+∞)h(x)=0</div>
                  <p>كما أن <span class="math">h'(x)=f'(ln(x))/x</span> و <span class="math">x&gt;0</span>، فتتبع إشارة <span class="math">h'</span> إشارة <span class="math">f'(ln(x))</span>.</p>
                  <ul class="solution-list"><li><span class="math">h</span> متناقصة على <span class="math">]0,e^{-1}]</span>.</li><li><span class="math">h</span> متزايدة على <span class="math">[e^{-1},e]</span>.</li><li><span class="math">h</span> متناقصة على <span class="math">[e,+∞[</span>.</li></ul>
                  <div class="math-equation">h(e^{-1})=f(-1)=-1, h(e)=f(1)=1, h(1)=f(0)=0</div>
                </article>
                <article class="solution-step-card solution-graph-card">
                  <h5>5. رسم <span class="math">C_h</span></h5>
                  <figure class="function-solution-graph" aria-label="رسم الدالة h(x)=2ln(x)/((ln(x))²+1)"><svg viewBox="0 0 680 420" role="img"><rect x="0" y="0" width="680" height="420" rx="18" fill="#fffdf4"></rect><g stroke="#e5e7eb"><line x1="100" y1="45" x2="100" y2="350"></line><line x1="180" y1="45" x2="180" y2="350"></line><line x1="260" y1="45" x2="260" y2="350"></line><line x1="340" y1="45" x2="340" y2="350"></line><line x1="420" y1="45" x2="420" y2="350"></line><line x1="500" y1="45" x2="500" y2="350"></line><line x1="580" y1="45" x2="580" y2="350"></line><line x1="70" y1="105" x2="620" y2="105"></line><line x1="70" y1="210" x2="620" y2="210"></line><line x1="70" y1="315" x2="620" y2="315"></line></g><g stroke="#111827" stroke-width="2"><line x1="70" y1="210" x2="620" y2="210"></line><line x1="100" y1="45" x2="100" y2="350"></line></g><line x1="70" y1="210" x2="620" y2="210" stroke="#2563eb" stroke-width="3" stroke-dasharray="8 8" opacity="0.55"></line><path d="M105 210 C130 260 165 315 210 315 C260 315 310 245 340 210 C380 164 430 105 500 105 C555 105 595 160 620 205" fill="none" stroke="#7c3aed" stroke-width="4" stroke-linecap="round"></path><circle cx="210" cy="315" r="6" fill="#059669"></circle><circle cx="340" cy="210" r="6" fill="#111827"></circle><circle cx="500" cy="105" r="6" fill="#059669"></circle><g font-family="Tajawal, Arial, sans-serif" font-size="15" font-weight="800"><text x="122" y="197" fill="#2563eb">y=0</text><text x="174" y="334" fill="#059669">(e⁻¹,-1)</text><text x="510" y="103" fill="#059669">(e,1)</text><text x="350" y="230" fill="#111827">(1,0)</text><text x="520" y="145" fill="#7c3aed">C_h</text></g></svg><figcaption>تركيب <span class="math">ln(x)</span> يضغط الجهة السالبة من محور <span class="math">C_f</span> نحو المجال <span class="math">]0,1[</span>، والجهة الموجبة نحو <span class="math">]1,+∞[</span>.</figcaption></figure>
                </article>
              </div>
            </section>
          </article>
        </section>
        <section class="unified-door-section">
          <header class="unified-door-head"><span>التدريب السابع</span><strong>استنتاج دالة مركبة بالأسية</strong></header>
          <article class="training-exercise graph-transform-seventh-exercise">
            <h4>الجزء الأول: دراسة الدالة الأصلية <span class="math">f</span></h4>
            <p>تعتبر الدالة <span class="math">f</span> المعرفة على <span class="math">R</span> بالعبارة:</p>
            <div class="math-equation">f(x)=x³-3x</div>
            <ol>
              <li>احسب نهايات الدالة <span class="math">f</span> عند <span class="math">-∞</span> وعند <span class="math">+∞</span>.</li>
              <li>ادرس اتجاه تغير الدالة <span class="math">f</span>، ثم شكل جدول تغيراتها.</li>
              <li>عيّن إحداثيات نقط تقاطع المنحنى <span class="math">(C_f)</span> مع محوري الإحداثيات.</li>
              <li>ارسم المنحنى <span class="math">(C_f)</span>.</li>
            </ol>
            <h4>الجزء الثاني: استنتاج الدالة المركبة <span class="math">h</span></h4>
            <p>تعتبر الدالة <span class="math">h</span> المعرفة على <span class="math">R</span> بالعبارة:</p>
            <div class="math-equation">h(x)=e^(3x)-3e^x</div>
            <ol>
              <li>تحقق أنه من أجل كل <span class="math">x∈R</span>: <span class="math">h(x)=f(e^x)</span>.</li>
              <li>استنتج نهايات <span class="math">h</span> عند <span class="math">-∞</span> و <span class="math">+∞</span>.</li>
              <li>بيّن أن <span class="math">h'(x)=e^x f'(e^x)</span>، ثم استنتج إشارة <span class="math">h'</span> وجدول تغيرات <span class="math">h</span>.</li>
              <li>استنتج إحداثيات النقطة الحدية للمنحنى <span class="math">(C_h)</span> ثم ارسمه.</li>
            </ol>
            <section class="training-solution solution-toggle-door is-collapsed" data-discussion-door>
              <button class="solution-detail-toggle" type="button" data-discussion-door-toggle aria-expanded="false"><span>الحل المفصل</span><small>افتح الحل</small></button>
              <div class="training-solution-body" data-discussion-door-body hidden>
                <header class="solution-subhead"><span>الجزء الأول</span><h4>دراسة <span class="math">f</span></h4></header>
                <article class="solution-step-card">
                  <h5>1. النهايات والتغيرات</h5>
                  <div class="math-equation">lim(x→-∞)f(x)=-∞, lim(x→+∞)f(x)=+∞</div>
                  <p>نشتق:</p>
                  <div class="math-equation">f'(x)=3x²-3=3(x-1)(x+1)</div>
                  <p>إذن <span class="math">f</span> متزايدة على <span class="math">]-∞,-1]</span>، متناقصة على <span class="math">[-1,1]</span>، ومتزايدة على <span class="math">[1,+∞[</span>.</p>
                  <div class="math-equation">f(-1)=2, f(1)=-2</div>
                  <p>نقط تقاطع <span class="math">C_f</span> مع محور الفواصل تحقق:</p>
                  <div class="math-equation">x³-3x=x(x²-3)=0</div>
                  <p>إذن الفواصل هي <span class="math">-√3</span> و <span class="math">0</span> و <span class="math">√3</span>. ومع محور التراتيب نحصل على النقطة <span class="math">(0,0)</span>.</p>
                </article>
                <article class="solution-step-card solution-graph-card">
                  <h5>2. رسم <span class="math">C_f</span></h5>
                  <figure class="function-solution-graph" aria-label="رسم الدالة f(x)=x³-3x"><svg viewBox="0 0 680 420" role="img"><rect x="0" y="0" width="680" height="420" rx="18" fill="#fffdf4"></rect><g stroke="#e5e7eb"><line x1="100" y1="45" x2="100" y2="350"></line><line x1="180" y1="45" x2="180" y2="350"></line><line x1="260" y1="45" x2="260" y2="350"></line><line x1="340" y1="45" x2="340" y2="350"></line><line x1="420" y1="45" x2="420" y2="350"></line><line x1="500" y1="45" x2="500" y2="350"></line><line x1="580" y1="45" x2="580" y2="350"></line><line x1="70" y1="110" x2="620" y2="110"></line><line x1="70" y1="210" x2="620" y2="210"></line><line x1="70" y1="310" x2="620" y2="310"></line></g><g stroke="#111827" stroke-width="2"><line x1="70" y1="210" x2="620" y2="210"></line><line x1="340" y1="45" x2="340" y2="350"></line></g><path d="M80 340 C145 285 205 165 260 110 C300 156 320 198 340 210 C360 222 380 264 420 310 C475 255 535 135 600 80" fill="none" stroke="#dc2626" stroke-width="4" stroke-linecap="round"></path><circle cx="260" cy="110" r="6" fill="#059669"></circle><circle cx="420" cy="310" r="6" fill="#059669"></circle><circle cx="340" cy="210" r="6" fill="#111827"></circle><circle cx="220" cy="210" r="5" fill="#111827"></circle><circle cx="460" cy="210" r="5" fill="#111827"></circle><g font-family="Tajawal, Arial, sans-serif" font-size="15" font-weight="800"><text x="250" y="96" fill="#059669">(-1,2)</text><text x="430" y="330" fill="#059669">(1,-2)</text><text x="348" y="232" fill="#111827">O</text><text x="500" y="118" fill="#dc2626">C_f</text></g></svg><figcaption>منحنى تكعيبي فردي يقطع محور الفواصل في <span class="math">-√3,0,√3</span>.</figcaption></figure>
                </article>
                <header class="solution-subhead"><span>الجزء الثاني</span><h4>استنتاج <span class="math">h=f(e^x)</span></h4></header>
                <article class="solution-step-card">
                  <h5>3. النهايات والتغيرات</h5>
                  <p>بما أن <span class="math">e^x&gt;0</span>، فإن <span class="math">h</span> يمثل فرع <span class="math">f</span> الموافق للمدخلات الموجبة فقط.</p>
                  <div class="math-equation">lim(x→-∞)h(x)=f(0)=0</div>
                  <div class="math-equation">lim(x→+∞)h(x)=+∞</div>
                  <p>كما أن:</p>
                  <div class="math-equation">h'(x)=e^x f'(e^x)</div>
                  <p>وبما أن <span class="math">e^x&gt;0</span>، فإن إشارة <span class="math">h'</span> هي إشارة <span class="math">f'(e^x)</span>. نحصل على:</p>
                  <ul class="solution-list"><li><span class="math">h'</span> سالبة إذا <span class="math">e^x&lt;1</span> أي <span class="math">x&lt;0</span>.</li><li><span class="math">h'(0)=0</span>.</li><li><span class="math">h'</span> موجبة إذا <span class="math">x&gt;0</span>.</li></ul>
                  <p>إذن <span class="math">h</span> متناقصة على <span class="math">]-∞,0]</span> ومتزايدة على <span class="math">[0,+∞[</span>، ولها نقطة حدية صغرى:</p>
                  <div class="math-equation">h(0)=f(1)=-2</div>
                </article>
                <article class="solution-step-card solution-graph-card">
                  <h5>4. رسم <span class="math">C_h</span></h5>
                  <figure class="function-solution-graph" aria-label="رسم الدالة h(x)=e^(3x)-3e^x"><svg viewBox="0 0 680 420" role="img"><rect x="0" y="0" width="680" height="420" rx="18" fill="#fffdf4"></rect><g stroke="#e5e7eb"><line x1="100" y1="45" x2="100" y2="350"></line><line x1="180" y1="45" x2="180" y2="350"></line><line x1="260" y1="45" x2="260" y2="350"></line><line x1="340" y1="45" x2="340" y2="350"></line><line x1="420" y1="45" x2="420" y2="350"></line><line x1="500" y1="45" x2="500" y2="350"></line><line x1="580" y1="45" x2="580" y2="350"></line><line x1="70" y1="110" x2="620" y2="110"></line><line x1="70" y1="210" x2="620" y2="210"></line><line x1="70" y1="310" x2="620" y2="310"></line></g><g stroke="#111827" stroke-width="2"><line x1="70" y1="210" x2="620" y2="210"></line><line x1="340" y1="45" x2="340" y2="350"></line></g><line x1="70" y1="210" x2="620" y2="210" stroke="#2563eb" stroke-width="3" stroke-dasharray="8 8" opacity="0.55"></line><path d="M80 214 C150 220 220 250 285 292 C315 312 335 315 340 310 C355 294 395 230 450 185 C520 130 580 72 620 45" fill="none" stroke="#7c3aed" stroke-width="4" stroke-linecap="round"></path><circle cx="340" cy="310" r="6" fill="#059669"></circle><circle cx="458" cy="210" r="6" fill="#111827"></circle><g font-family="Tajawal, Arial, sans-serif" font-size="15" font-weight="800"><text x="350" y="330" fill="#059669">(0,-2)</text><text x="112" y="198" fill="#2563eb">y=0 عند -∞</text><text x="470" y="232" fill="#111827">ln√3</text><text x="520" y="96" fill="#7c3aed">C_h</text></g></svg><figcaption>منحنى <span class="math">h</span> يقترب من محور الفواصل عند <span class="math">-∞</span>، ثم ينزل إلى <span class="math">(0,-2)</span> ويصعد نحو <span class="math">+∞</span>.</figcaption></figure>
                </article>
              </div>
            </section>
          </article>
        </section>
        <section class="unified-door-section">
          <header class="unified-door-head"><span>التدريب الثامن</span><strong>الأسية وقواعد القيمة المطلقة</strong></header>
          <article class="training-exercise graph-transform-eighth-exercise">
            <h4>الجزء الأول: دراسة الدالة الأصلية <span class="math">f</span></h4>
            <p>تعتبر الدالة <span class="math">f</span> المعرفة على <span class="math">R\{-1}</span> بالعبارة:</p>
            <div class="math-equation">f(x)=(x-1)/(x+1)</div>
            <ol>
              <li>احسب نهايات الدالة <span class="math">f</span> عند أطراف مجالات تعريفها، واستنتج المستقيمات المقاربة للمنحنى <span class="math">(C_f)</span>.</li>
              <li>ادرس اتجاه تغير الدالة <span class="math">f</span>، ثم شكل جدول تغيراتها.</li>
              <li>عيّن إحداثيات نقط تقاطع المنحنى <span class="math">(C_f)</span> مع محوري الإحداثيات.</li>
            </ol>
            <h4>الجزء الثاني: استنتاج الدالة المركبة <span class="math">g</span></h4>
            <p>تعتبر الدالة <span class="math">g</span> المعرفة على <span class="math">R</span> بالعبارة:</p>
            <div class="math-equation">g(x)=(e^x-1)/(e^x+1)</div>
            <ol>
              <li>تحقق أنه من أجل كل <span class="math">x∈R</span>: <span class="math">g(x)=f(e^x)</span>.</li>
              <li>بيّن أن <span class="math">g</span> دالة فردية، واستنتج ذلك هندسيا بالنسبة للمنحنى <span class="math">(C_g)</span>.</li>
              <li>استنتج نهايتي <span class="math">g</span> عند <span class="math">-∞</span> وعند <span class="math">+∞</span>، وحدد المستقيمات المقاربة الأفقية.</li>
              <li>استنتج اتجاه تغير <span class="math">g</span> وارسم <span class="math">(C_g)</span>.</li>
            </ol>
            <h4>الجزء الثالث: العودة إلى التحويلات النقطية</h4>
            <p>لتكن الدالتان <span class="math">h</span> و <span class="math">k</span> المعرفتان على <span class="math">R</span> كما يلي:</p>
            <div class="math-equation">h(x)=|(e^x-1)/(e^x+1)|</div>
            <div class="math-equation">k(x)=(e^|x|-1)/(e^|x|+1)</div>
            <ol>
              <li>تحقق أن <span class="math">h(x)=|g(x)|</span> وأن <span class="math">k(x)=g(|x|)</span>.</li>
              <li>بالاعتماد على المنحنى <span class="math">(C_g)</span>، اشرح هندسيا كيف يتم رسم <span class="math">(C_h)</span> و <span class="math">(C_k)</span>، وحدد كيف تتأثر المستقيمات المقاربة في كل حالة.</li>
            </ol>
            <section class="training-solution solution-toggle-door is-collapsed" data-discussion-door>
              <button class="solution-detail-toggle" type="button" data-discussion-door-toggle aria-expanded="false"><span>الحل المفصل</span><small>افتح الحل</small></button>
              <div class="training-solution-body" data-discussion-door-body hidden>
                <header class="solution-subhead"><span>الجزء الأول</span><h4>دراسة <span class="math">f</span></h4></header>
                <article class="solution-step-card">
                  <h5>1. المقاربات والتغيرات</h5>
                  <p>نكتب:</p>
                  <div class="math-equation">f(x)=1-2/(x+1)</div>
                  <p>إذن <span class="math">x=-1</span> مقارب عمودي، و <span class="math">y=1</span> مقارب أفقي عند <span class="math">±∞</span>.</p>
                  <p>كما أن:</p>
                  <div class="math-equation">f'(x)=2/(x+1)²&gt;0</div>
                  <p>إذن <span class="math">f</span> متزايدة على كل من <span class="math">]-∞,-1[</span> و <span class="math">]-1,+∞[</span>.</p>
                  <p>نقط التقاطع: مع محور الفواصل <span class="math">(1,0)</span>، ومع محور التراتيب <span class="math">(0,-1)</span>.</p>
                </article>
                <header class="solution-subhead"><span>الجزء الثاني</span><h4>رسم <span class="math">C_g</span></h4></header>
                <article class="solution-step-card">
                  <h5>2. خصائص <span class="math">g</span></h5>
                  <p>بما أن <span class="math">e^x&gt;0</span> فإن:</p>
                  <div class="math-equation">g(x)=f(e^x)</div>
                  <p>نثبت الفردية:</p>
                  <div class="math-equation">g(-x)=(e^{-x}-1)/(e^{-x}+1)=(1-e^x)/(1+e^x)=-g(x)</div>
                  <p>إذن <span class="math">C_g</span> متناظر بالنسبة إلى أصل المعلم.</p>
                  <div class="math-equation">lim(x→-∞)g(x)=-1, lim(x→+∞)g(x)=1</div>
                  <p>المستقيمان المقاربان الأفقيان هما <span class="math">y=-1</span> و <span class="math">y=1</span>. كما أن <span class="math">g</span> متزايدة على <span class="math">R</span>.</p>
                  <figure class="function-solution-graph" aria-label="رسم الدالة g(x)=(e^x-1)/(e^x+1)"><svg viewBox="0 0 680 420" role="img"><rect x="0" y="0" width="680" height="420" rx="18" fill="#fffdf4"></rect><g stroke="#e5e7eb"><line x1="100" y1="45" x2="100" y2="350"></line><line x1="180" y1="45" x2="180" y2="350"></line><line x1="260" y1="45" x2="260" y2="350"></line><line x1="340" y1="45" x2="340" y2="350"></line><line x1="420" y1="45" x2="420" y2="350"></line><line x1="500" y1="45" x2="500" y2="350"></line><line x1="580" y1="45" x2="580" y2="350"></line><line x1="70" y1="105" x2="620" y2="105"></line><line x1="70" y1="210" x2="620" y2="210"></line><line x1="70" y1="315" x2="620" y2="315"></line></g><g stroke="#111827" stroke-width="2"><line x1="70" y1="210" x2="620" y2="210"></line><line x1="340" y1="45" x2="340" y2="350"></line></g><line x1="70" y1="105" x2="620" y2="105" stroke="#2563eb" stroke-width="3" stroke-dasharray="9 8"></line><line x1="70" y1="315" x2="620" y2="315" stroke="#2563eb" stroke-width="3" stroke-dasharray="9 8"></line><path d="M70 312 C150 305 230 270 300 230 C325 216 335 214 340 210 C345 206 355 204 380 190 C450 150 530 115 620 108" fill="none" stroke="#dc2626" stroke-width="4" stroke-linecap="round"></path><circle cx="340" cy="210" r="6" fill="#111827"></circle><g font-family="Tajawal, Arial, sans-serif" font-size="15" font-weight="800"><text x="520" y="98" fill="#2563eb">y=1</text><text x="520" y="309" fill="#2563eb">y=-1</text><text x="350" y="230" fill="#111827">O</text><text x="500" y="145" fill="#dc2626">C_g</text></g></svg><figcaption>بيان <span class="math">g</span> متزايد، فردي، ومحصور بين المقاربين <span class="math">y=-1</span> و <span class="math">y=1</span>.</figcaption></figure>
                </article>
                <header class="solution-subhead"><span>الجزء الثالث</span><h4>رسم <span class="math">C_h</span> و <span class="math">C_k</span></h4></header>
                <article class="solution-step-card">
                  <h5>3. التحويلات</h5>
                  <p><span class="math">h=|g|</span>: نقلب الجزء السالب من <span class="math">C_g</span>، أي فرع <span class="math">x&lt;0</span>، فوق محور الفواصل. أما <span class="math">k=g(|x|)</span>: نأخذ الفرع الأيمن من <span class="math">C_g</span> وننسخه بتناظر حول محور التراتيب.</p>
                  <p>في هذه الحالة الخاصة نحصل على نفس الشكل للمنحنيين <span class="math">C_h</span> و <span class="math">C_k</span> لأن <span class="math">g</span> فردية ومتزايدة وتمر من الأصل.</p>
                  <figure class="function-solution-graph" aria-label="رسم الدالتين h و k"><svg viewBox="0 0 680 420" role="img"><rect x="0" y="0" width="680" height="420" rx="18" fill="#fffdf4"></rect><g stroke="#e5e7eb"><line x1="100" y1="45" x2="100" y2="350"></line><line x1="180" y1="45" x2="180" y2="350"></line><line x1="260" y1="45" x2="260" y2="350"></line><line x1="340" y1="45" x2="340" y2="350"></line><line x1="420" y1="45" x2="420" y2="350"></line><line x1="500" y1="45" x2="500" y2="350"></line><line x1="580" y1="45" x2="580" y2="350"></line><line x1="70" y1="105" x2="620" y2="105"></line><line x1="70" y1="210" x2="620" y2="210"></line><line x1="70" y1="315" x2="620" y2="315"></line></g><g stroke="#111827" stroke-width="2"><line x1="70" y1="210" x2="620" y2="210"></line><line x1="340" y1="45" x2="340" y2="350"></line></g><line x1="70" y1="105" x2="620" y2="105" stroke="#2563eb" stroke-width="3" stroke-dasharray="9 8"></line><path d="M340 210 C365 185 415 150 480 126 C535 110 580 106 620 105" fill="none" stroke="#059669" stroke-width="4" stroke-linecap="round"></path><path d="M340 210 C315 185 265 150 200 126 C145 110 100 106 60 105" fill="none" stroke="#059669" stroke-width="4" stroke-linecap="round"></path><circle cx="340" cy="210" r="6" fill="#111827"></circle><g font-family="Tajawal, Arial, sans-serif" font-size="15" font-weight="800"><text x="520" y="98" fill="#2563eb">y=1</text><text x="350" y="230" fill="#111827">O</text><text x="470" y="142" fill="#059669">C_h = C_k</text></g></svg><figcaption>بيانا <span class="math">h</span> و <span class="math">k</span> يتطابقان: كلاهما زوجي وغير سالب، وله المقارب الأفقي <span class="math">y=1</span> عند الطرفين.</figcaption></figure>
                </article>
              </div>
            </section>
          </article>
        </section>
        <section class="unified-door-section">
          <header class="unified-door-head"><span>التدريب التاسع</span><strong>الدالة العكسية الزائدية والتحويلات</strong></header>
          <article class="training-exercise graph-transform-ninth-exercise">
            <h4>الجزء الأول: تفكيك الدالة الداخلية <span class="math">u</span></h4>
            <p>تعتبر الدالة <span class="math">u</span> المعرفة على <span class="math">R</span> بالعبارة:</p>
            <div class="math-equation">u(x)=x+√(x²+1)</div>
            <ol>
              <li>احسب <span class="math">lim(x→+∞)u(x)</span>.</li>
              <li>احسب <span class="math">lim(x→-∞)u(x)</span> باستعمال الضرب في المرافق.</li>
              <li>بيّن أنه من أجل كل <span class="math">x∈R</span>: <span class="math">u'(x)=u(x)/√(x²+1)</span>.</li>
              <li>استنتج إشارة <span class="math">u'</span>، ثم شكل جدول تغيرات <span class="math">u</span>.</li>
              <li>استنتج أنه من أجل كل <span class="math">x∈R</span>: <span class="math">u(x)&gt;0</span>.</li>
            </ol>
            <h4>الجزء الثاني: الدالة المركبة <span class="math">h</span> والعمق التحليلي</h4>
            <p>تعتبر الدالة <span class="math">h</span> المعرفة على <span class="math">R</span> بالعبارة:</p>
            <div class="math-equation">h(x)=ln(x+√(x²+1))</div>
            <ol>
              <li>برر لماذا <span class="math">h</span> معرفة على كامل <span class="math">R</span>.</li>
              <li>بيّن أن <span class="math">h</span> دالة فردية، ثم استنتج التفسير الهندسي.</li>
              <li>استنتج نهايتي <span class="math">h</span> عند <span class="math">-∞</span> وعند <span class="math">+∞</span>.</li>
              <li>بيّن أن <span class="math">h'(x)=1/√(x²+1)</span>، ثم شكل جدول تغيراتها.</li>
              <li>اكتب معادلة المماس <span class="math">T</span> للمنحنى <span class="math">C_h</span> عند المبدأ <span class="math">O</span>.</li>
              <li>ارسم <span class="math">T</span> و <span class="math">C_h</span>.</li>
            </ol>
            <h4>الجزء الثالث: التحويلات النقطية</h4>
            <p>لتكن الدالتان <span class="math">k</span> و <span class="math">m</span> المعرفتان على <span class="math">R</span> كما يلي:</p>
            <div class="math-equation">k(x)=ln(|x|+√(x²+1))</div>
            <div class="math-equation">m(x)=|ln(x+√(x²+1))|</div>
            <ol>
              <li>تحقق أن <span class="math">k(x)=h(|x|)</span> وأن <span class="math">m(x)=|h(x)|</span>.</li>
              <li>اشرح بالتفصيل كيف يمكن رسم <span class="math">C_k</span> انطلاقا من <span class="math">C_h</span>، مبينا طبيعة الدالة <span class="math">k</span> من حيث الشفعية.</li>
              <li>اشرح كيف يتم رسم <span class="math">C_m</span> انطلاقا من <span class="math">C_h</span>.</li>
            </ol>
            <section class="training-solution solution-toggle-door is-collapsed" data-discussion-door>
              <button class="solution-detail-toggle" type="button" data-discussion-door-toggle aria-expanded="false"><span>الحل المفصل</span><small>افتح الحل</small></button>
              <div class="training-solution-body" data-discussion-door-body hidden>
                <header class="solution-subhead"><span>الجزء الأول</span><h4>دراسة <span class="math">u</span></h4></header>
                <article class="solution-step-card">
                  <h5>1. النهايات</h5>
                  <p>عند <span class="math">+∞</span> لدينا <span class="math">√(x²+1)≈x</span>، ومنه:</p>
                  <div class="math-equation">lim(x→+∞)u(x)=lim(x→+∞)(x+√(x²+1))=+∞</div>
                  <p>عند <span class="math">-∞</span> لا نستعمل التعويض المباشر لأنه يعطي صيغة غير محددة من نوع <span class="math">-∞+∞</span>. نضرب في المرافق:</p>
                  <div class="math-equation">u(x)=x+√(x²+1)=((x+√(x²+1))(√(x²+1)-x))/(√(x²+1)-x)</div>
                  <div class="math-equation">u(x)=1/(√(x²+1)-x)</div>
                  <p>وعندما <span class="math">x→-∞</span> فإن <span class="math">√(x²+1)-x→+∞</span>، لذلك:</p>
                  <div class="math-equation">lim(x→-∞)u(x)=0</div>
                </article>
                <article class="solution-step-card">
                  <h5>2. المشتقة والتغيرات</h5>
                  <p>نشتق:</p>
                  <div class="math-equation">u'(x)=1+x/√(x²+1)=(√(x²+1)+x)/√(x²+1)=u(x)/√(x²+1)</div>
                  <p>وبما أن <span class="math">√(x²+1)&gt;0</span> و <span class="math">u(x)=1/(√(x²+1)-x)&gt;0</span>، فإن:</p>
                  <div class="math-equation">u'(x)&gt;0 لكل x∈R</div>
                  <p>إذن <span class="math">u</span> متزايدة تماما على <span class="math">R</span>، وتنتقل من <span class="math">0</span> إلى <span class="math">+∞</span>. خصوصا <span class="math">u(x)&gt;0</span> لكل <span class="math">x</span>.</p>
                  <figure class="function-solution-graph" aria-label="رسم الدالة u(x)=x+sqrt(x^2+1)"><svg viewBox="0 0 680 420" role="img"><rect x="0" y="0" width="680" height="420" rx="18" fill="#fffdf4"></rect><g stroke="#e5e7eb"><line x1="100" y1="45" x2="100" y2="350"></line><line x1="180" y1="45" x2="180" y2="350"></line><line x1="260" y1="45" x2="260" y2="350"></line><line x1="340" y1="45" x2="340" y2="350"></line><line x1="420" y1="45" x2="420" y2="350"></line><line x1="500" y1="45" x2="500" y2="350"></line><line x1="580" y1="45" x2="580" y2="350"></line><line x1="70" y1="110" x2="620" y2="110"></line><line x1="70" y1="210" x2="620" y2="210"></line><line x1="70" y1="310" x2="620" y2="310"></line></g><g stroke="#111827" stroke-width="2"><line x1="70" y1="310" x2="620" y2="310"></line><line x1="340" y1="45" x2="340" y2="350"></line></g><line x1="70" y1="310" x2="620" y2="310" stroke="#2563eb" stroke-width="3" stroke-dasharray="8 8" opacity="0.55"></line><path d="M75 309 C150 308 225 304 290 287 C330 276 355 250 385 216 C435 158 500 92 620 50" fill="none" stroke="#0f766e" stroke-width="4" stroke-linecap="round"></path><circle cx="340" cy="260" r="6" fill="#111827"></circle><g font-family="Tajawal, Arial, sans-serif" font-size="15" font-weight="800"><text x="102" y="300" fill="#2563eb">y=0 عند -∞</text><text x="350" y="255" fill="#111827">u(0)=1</text><text x="510" y="84" fill="#0f766e">C_u</text></g></svg><figcaption>الدالة <span class="math">u</span> موجبة ومتزايدة، وتقترب من <span class="math">0</span> عندما <span class="math">x→-∞</span>.</figcaption></figure>
                </article>
                <header class="solution-subhead"><span>الجزء الثاني</span><h4>دراسة ورسم <span class="math">h</span></h4></header>
                <article class="solution-step-card">
                  <h5>3. التعريف والفردية</h5>
                  <p>بما أن <span class="math">u(x)&gt;0</span> لكل <span class="math">x∈R</span>، فإن <span class="math">h(x)=ln(u(x))</span> معرفة على كامل <span class="math">R</span>.</p>
                  <p>نحسب:</p>
                  <div class="math-equation">u(-x)=-x+√(x²+1)=1/(x+√(x²+1))=1/u(x)</div>
                  <div class="math-equation">h(-x)=ln(u(-x))=ln(1/u(x))=-ln(u(x))=-h(x)</div>
                  <p>إذن <span class="math">h</span> فردية، وبيانها متناظر بالنسبة إلى أصل المعلم.</p>
                </article>
                <article class="solution-step-card">
                  <h5>4. النهايات والمشتقة</h5>
                  <p>بما أن <span class="math">u(x)→+∞</span> عندما <span class="math">x→+∞</span>، نحصل على:</p>
                  <div class="math-equation">lim(x→+∞)h(x)=+∞</div>
                  <p>وبالفردية أو لأن <span class="math">u(x)→0^+</span> عندما <span class="math">x→-∞</span>:</p>
                  <div class="math-equation">lim(x→-∞)h(x)=-∞</div>
                  <p>نشتق مركبة اللوغاريتم:</p>
                  <div class="math-equation">h'(x)=u'(x)/u(x)=1/√(x²+1)</div>
                  <p>إذن <span class="math">h'(x)&gt;0</span> لكل <span class="math">x</span>، وبالتالي <span class="math">h</span> متزايدة تماما على <span class="math">R</span>.</p>
                  <p>عند المبدأ: <span class="math">h(0)=ln(1)=0</span> و <span class="math">h'(0)=1</span>، إذن معادلة المماس:</p>
                  <div class="math-equation">T: y=x</div>
                  <figure class="function-solution-graph" aria-label="رسم الدالة h(x)=ln(x+sqrt(x^2+1)) والمماس y=x"><svg viewBox="0 0 680 420" role="img"><rect x="0" y="0" width="680" height="420" rx="18" fill="#fffdf4"></rect><g stroke="#e5e7eb"><line x1="100" y1="45" x2="100" y2="350"></line><line x1="180" y1="45" x2="180" y2="350"></line><line x1="260" y1="45" x2="260" y2="350"></line><line x1="340" y1="45" x2="340" y2="350"></line><line x1="420" y1="45" x2="420" y2="350"></line><line x1="500" y1="45" x2="500" y2="350"></line><line x1="580" y1="45" x2="580" y2="350"></line><line x1="70" y1="110" x2="620" y2="110"></line><line x1="70" y1="210" x2="620" y2="210"></line><line x1="70" y1="310" x2="620" y2="310"></line></g><g stroke="#111827" stroke-width="2"><line x1="70" y1="210" x2="620" y2="210"></line><line x1="340" y1="45" x2="340" y2="350"></line></g><line x1="195" y1="350" x2="495" y2="50" stroke="#2563eb" stroke-width="3" stroke-dasharray="8 8"></line><path d="M75 318 C150 300 235 262 300 225 C322 212 333 211 340 210 C347 209 358 208 380 195 C445 158 530 120 620 102" fill="none" stroke="#dc2626" stroke-width="4" stroke-linecap="round"></path><circle cx="340" cy="210" r="6" fill="#111827"></circle><g font-family="Tajawal, Arial, sans-serif" font-size="15" font-weight="800"><text x="500" y="82" fill="#2563eb">T:y=x</text><text x="352" y="230" fill="#111827">O</text><text x="500" y="130" fill="#dc2626">C_h</text></g></svg><figcaption>منحنى <span class="math">h</span> متزايد وفردي، والمماس في المبدأ هو <span class="math">y=x</span>.</figcaption></figure>
                </article>
                <header class="solution-subhead"><span>الجزء الثالث</span><h4>رسم <span class="math">C_k</span> و <span class="math">C_m</span></h4></header>
                <article class="solution-step-card">
                  <h5>5. التحويلان</h5>
                  <p>لدينا مباشرة:</p>
                  <div class="math-equation">k(x)=ln(|x|+√(x²+1))=h(|x|)</div>
                  <p>إذن نرسم فرع <span class="math">C_h</span> على <span class="math">x≥0</span>، ثم ننسخه بالتناظر حول محور التراتيب. لذلك <span class="math">k</span> زوجية وغير سالبة.</p>
                  <div class="math-equation">m(x)=|ln(x+√(x²+1))|=|h(x)|</div>
                  <p>لرسم <span class="math">C_m</span> نترك الجزء الموجود فوق محور الفواصل كما هو، ونقلب الجزء السالب إلى الأعلى. وبما أن <span class="math">h</span> فردية ومتزايدة وتمر من الأصل، فإن <span class="math">C_m</span> يطابق <span class="math">C_k</span>.</p>
                  <figure class="function-solution-graph" aria-label="رسم الدالتين k و m"><svg viewBox="0 0 680 420" role="img"><rect x="0" y="0" width="680" height="420" rx="18" fill="#fffdf4"></rect><g stroke="#e5e7eb"><line x1="100" y1="45" x2="100" y2="350"></line><line x1="180" y1="45" x2="180" y2="350"></line><line x1="260" y1="45" x2="260" y2="350"></line><line x1="340" y1="45" x2="340" y2="350"></line><line x1="420" y1="45" x2="420" y2="350"></line><line x1="500" y1="45" x2="500" y2="350"></line><line x1="580" y1="45" x2="580" y2="350"></line><line x1="70" y1="110" x2="620" y2="110"></line><line x1="70" y1="210" x2="620" y2="210"></line><line x1="70" y1="310" x2="620" y2="310"></line></g><g stroke="#111827" stroke-width="2"><line x1="70" y1="210" x2="620" y2="210"></line><line x1="340" y1="45" x2="340" y2="350"></line></g><path d="M340 210 C365 185 415 150 480 126 C535 110 580 104 620 98" fill="none" stroke="#7c3aed" stroke-width="4" stroke-linecap="round"></path><path d="M340 210 C315 185 265 150 200 126 C145 110 100 104 60 98" fill="none" stroke="#7c3aed" stroke-width="4" stroke-linecap="round"></path><circle cx="340" cy="210" r="6" fill="#111827"></circle><g font-family="Tajawal, Arial, sans-serif" font-size="15" font-weight="800"><text x="350" y="230" fill="#111827">O</text><text x="470" y="122" fill="#7c3aed">C_k = C_m</text></g></svg><figcaption><span class="math">C_k</span> و <span class="math">C_m</span> متطابقان هنا: شكل زوجي يبدأ من الأصل ويتجه صعودا في الجهتين.</figcaption></figure>
                </article>
              </div>
            </section>
          </article>
        </section>
        <section class="unified-door-section">
          <header class="unified-door-head"><span>التدريب العاشر</span><strong>القيمة المطلقة واختيار النقطة</strong></header>
          <article class="training-exercise graph-transform-tenth-exercise">
            <h4>الجزء الأول: دراسة الدالة المساعدة <span class="math">g</span></h4>
            <p>تعتبر الدالة <span class="math">g</span> المعرفة على <span class="math">R</span> بالعبارة:</p>
            <div class="math-equation">g(x)=e^x+x-1</div>
            <ol>
              <li>احسب <span class="math">lim(x→-∞)g(x)</span> و <span class="math">lim(x→+∞)g(x)</span>.</li>
              <li>ادرس اتجاه تغير الدالة <span class="math">g</span>، ثم شكل جدول تغيراتها.</li>
              <li>احسب <span class="math">g(0)</span>، ثم استنتج إشارة <span class="math">g(x)</span> من أجل كل <span class="math">x∈R</span>.</li>
            </ol>
            <h4>الجزء الثاني: دراسة الدالة الرئيسية <span class="math">f</span></h4>
            <p>تعتبر الدالة <span class="math">f</span> المعرفة على <span class="math">R</span> بالعبارة:</p>
            <div class="math-equation">f(x)=x+1-xe^{-x}</div>
            <ol>
              <li>احسب <span class="math">lim(x→+∞)f(x)</span>.</li>
              <li>بيّن أن <span class="math">lim(x→-∞)f(x)=+∞</span> باستعمال استخراج <span class="math">x</span> كعامل مشترك.</li>
              <li>بيّن أنه من أجل كل <span class="math">x∈R</span>: <span class="math">f'(x)=e^{-x}g(x)</span>.</li>
              <li>استنتج اتجاه تغير <span class="math">f</span>، ثم شكل جدول تغيراتها.</li>
              <li>بيّن أن المستقيم <span class="math">Δ:y=x+1</span> مقارب مائل للمنحنى <span class="math">C_f</span> بجوار <span class="math">+∞</span>.</li>
              <li>ادرس الوضع النسبي للمنحنى <span class="math">C_f</span> والمستقيم <span class="math">Δ</span>.</li>
              <li>ارسم <span class="math">Δ</span> و <span class="math">C_f</span>.</li>
            </ol>
            <h4>الجزء الثالث: استنتاج المنحنيات</h4>
            <p>لتكن الدوال <span class="math">h</span> و <span class="math">k</span> و <span class="math">m</span> المعرفة على <span class="math">R</span> كما يلي:</p>
            <div class="math-equation">h(x)=|x+1-xe^{-x}|</div>
            <div class="math-equation">k(x)=|x|+1-|x|e^{-|x|}</div>
            <div class="math-equation">m(x)=-x+1+xe^x</div>
            <ol>
              <li>تحقق أن <span class="math">h(x)=|f(x)|</span>، وأن <span class="math">k(x)=f(|x|)</span>، وأن <span class="math">m(x)=f(-x)</span>.</li>
              <li>اعتمادا على جدول تغيرات <span class="math">f</span>، اشرح لماذا ينطبق المنحنى <span class="math">C_h</span> تماما على <span class="math">C_f</span> دون الحاجة لأي تناظر حول محور الفواصل.</li>
              <li>اشرح هندسيا كيف يتم رسم المنحنيين <span class="math">C_k</span> و <span class="math">C_m</span> انطلاقا من <span class="math">C_f</span>.</li>
            </ol>
            <section class="training-solution solution-toggle-door is-collapsed" data-discussion-door>
              <button class="solution-detail-toggle" type="button" data-discussion-door-toggle aria-expanded="false"><span>الحل المفصل</span><small>افتح الحل</small></button>
              <div class="training-solution-body" data-discussion-door-body hidden>
                <header class="solution-subhead"><span>الجزء الأول</span><h4>دراسة <span class="math">g</span></h4></header>
                <article class="solution-step-card">
                  <h5>1. النهايات والتغيرات</h5>
                  <p>عندما <span class="math">x→-∞</span> فإن <span class="math">e^x→0</span> و <span class="math">x-1→-∞</span>، لذلك:</p>
                  <div class="math-equation">lim(x→-∞)g(x)=-∞</div>
                  <p>وعندما <span class="math">x→+∞</span> فإن <span class="math">e^x+x-1→+∞</span>، ومنه:</p>
                  <div class="math-equation">lim(x→+∞)g(x)=+∞</div>
                  <p>نشتق:</p>
                  <div class="math-equation">g'(x)=e^x+1&gt;0</div>
                  <p>إذن <span class="math">g</span> متزايدة تماما على <span class="math">R</span>. وبما أن:</p>
                  <div class="math-equation">g(0)=1+0-1=0</div>
                  <p>فإن إشارة <span class="math">g</span> هي: سالبة على <span class="math">]-∞,0[</span>، منعدمة عند <span class="math">0</span>، وموجبة على <span class="math">]0,+∞[</span>.</p>
                  <figure class="function-solution-graph" aria-label="رسم الدالة g(x)=e^x+x-1"><svg viewBox="0 0 680 420" role="img"><rect x="0" y="0" width="680" height="420" rx="18" fill="#fffdf4"></rect><g stroke="#e5e7eb"><line x1="100" y1="45" x2="100" y2="350"></line><line x1="180" y1="45" x2="180" y2="350"></line><line x1="260" y1="45" x2="260" y2="350"></line><line x1="340" y1="45" x2="340" y2="350"></line><line x1="420" y1="45" x2="420" y2="350"></line><line x1="500" y1="45" x2="500" y2="350"></line><line x1="580" y1="45" x2="580" y2="350"></line><line x1="70" y1="110" x2="620" y2="110"></line><line x1="70" y1="210" x2="620" y2="210"></line><line x1="70" y1="310" x2="620" y2="310"></line></g><g stroke="#111827" stroke-width="2"><line x1="70" y1="210" x2="620" y2="210"></line><line x1="340" y1="45" x2="340" y2="350"></line></g><path d="M75 340 C150 318 230 276 300 232 C320 219 333 212 340 210 C350 207 365 201 390 182 C450 136 530 82 620 48" fill="none" stroke="#dc2626" stroke-width="4" stroke-linecap="round"></path><circle cx="340" cy="210" r="6" fill="#111827"></circle><g font-family="Tajawal, Arial, sans-serif" font-size="15" font-weight="800"><text x="350" y="230" fill="#111827">O</text><text x="500" y="92" fill="#dc2626">C_g</text><text x="104" y="330" fill="#64748b">g&lt;0</text><text x="445" y="132" fill="#059669">g&gt;0</text></g></svg><figcaption>الدالة <span class="math">g</span> متزايدة وتقطع محور الفواصل في <span class="math">0</span> فقط.</figcaption></figure>
                </article>
                <header class="solution-subhead"><span>الجزء الثاني</span><h4>دراسة ورسم <span class="math">f</span></h4></header>
                <article class="solution-step-card">
                  <h5>2. النهايات والمشتقة</h5>
                  <p>عند <span class="math">+∞</span> لدينا <span class="math">xe^{-x}→0</span>، لذلك:</p>
                  <div class="math-equation">lim(x→+∞)f(x)=+∞</div>
                  <p>وعند <span class="math">-∞</span> نكتب:</p>
                  <div class="math-equation">f(x)=x(1-e^{-x})+1</div>
                  <p>عندما <span class="math">x→-∞</span> يكون <span class="math">x&lt;0</span> و <span class="math">1-e^{-x}→-∞</span>، فيكون جداؤهما موجبا كبيرا، ومنه:</p>
                  <div class="math-equation">lim(x→-∞)f(x)=+∞</div>
                  <p>المشتقة:</p>
                  <div class="math-equation">f'(x)=1-(xe^{-x})'=1-(e^{-x}-xe^{-x})=1-e^{-x}+xe^{-x}</div>
                  <div class="math-equation">f'(x)=e^{-x}(e^x+x-1)=e^{-x}g(x)</div>
                  <p>وبما أن <span class="math">e^{-x}&gt;0</span> فإن إشارة <span class="math">f'</span> هي إشارة <span class="math">g</span>. إذن <span class="math">f</span> متناقصة على <span class="math">]-∞,0]</span> ومتزايدة على <span class="math">[0,+∞[</span>، وقيمتها الصغرى:</p>
                  <div class="math-equation">f(0)=1</div>
                  <p>إذن <span class="math">f(x)≥1</span> لكل <span class="math">x∈R</span>.</p>
                </article>
                <article class="solution-step-card">
                  <h5>3. المقارب والوضع النسبي</h5>
                  <p>نحسب الفرق بين <span class="math">f</span> والمستقيم <span class="math">Δ:y=x+1</span>:</p>
                  <div class="math-equation">f(x)-(x+1)=-xe^{-x}</div>
                  <p>وعندما <span class="math">x→+∞</span> فإن <span class="math">-xe^{-x}→0</span>، لذلك <span class="math">Δ</span> مقارب مائل بجوار <span class="math">+∞</span>.</p>
                  <p>الوضع النسبي: إذا <span class="math">x&gt;0</span> فـ <span class="math">-xe^{-x}&lt;0</span> فيكون <span class="math">C_f</span> تحت <span class="math">Δ</span>. وإذا <span class="math">x&lt;0</span> فـ <span class="math">-xe^{-x}&gt;0</span> فيكون <span class="math">C_f</span> فوق <span class="math">Δ</span>. ويتقاطعان عند <span class="math">x=0</span> في النقطة <span class="math">(0,1)</span>.</p>
                  <figure class="function-solution-graph" aria-label="رسم الدالة f(x)=x+1-xe^-x والمقارب y=x+1"><svg viewBox="0 0 680 420" role="img"><rect x="0" y="0" width="680" height="420" rx="18" fill="#fffdf4"></rect><g stroke="#e5e7eb"><line x1="100" y1="45" x2="100" y2="350"></line><line x1="180" y1="45" x2="180" y2="350"></line><line x1="260" y1="45" x2="260" y2="350"></line><line x1="340" y1="45" x2="340" y2="350"></line><line x1="420" y1="45" x2="420" y2="350"></line><line x1="500" y1="45" x2="500" y2="350"></line><line x1="580" y1="45" x2="580" y2="350"></line><line x1="70" y1="110" x2="620" y2="110"></line><line x1="70" y1="210" x2="620" y2="210"></line><line x1="70" y1="310" x2="620" y2="310"></line></g><g stroke="#111827" stroke-width="2"><line x1="70" y1="310" x2="620" y2="310"></line><line x1="340" y1="45" x2="340" y2="350"></line></g><line x1="70" y1="360" x2="620" y2="84" stroke="#2563eb" stroke-width="3" stroke-dasharray="8 8"></line><path d="M90 54 C145 105 205 196 270 260 C305 294 330 302 340 300 C350 298 375 280 410 248 C465 198 535 132 620 92" fill="none" stroke="#0f766e" stroke-width="4" stroke-linecap="round"></path><circle cx="340" cy="300" r="6" fill="#111827"></circle><g font-family="Tajawal, Arial, sans-serif" font-size="15" font-weight="800"><text x="360" y="318" fill="#111827">(0,1)</text><text x="505" y="76" fill="#2563eb">Δ:y=x+1</text><text x="525" y="125" fill="#0f766e">C_f</text></g></svg><figcaption><span class="math">C_f</span> له أصغر قيمة <span class="math">1</span> عند <span class="math">x=0</span>، ويقترب من <span class="math">Δ</span> عند <span class="math">+∞</span>.</figcaption></figure>
                </article>
                <header class="solution-subhead"><span>الجزء الثالث</span><h4>رسم كل التحويلات</h4></header>
                <article class="solution-step-card">
                  <h5>4. المنحنى <span class="math">C_h</span></h5>
                  <p>بما أن <span class="math">f(x)≥1&gt;0</span> لكل <span class="math">x</span>، فإن:</p>
                  <div class="math-equation">h(x)=|f(x)|=f(x)</div>
                  <p>لذلك لا نقلب أي جزء حول محور الفواصل، بل نحصل على تطابق تام:</p>
                  <div class="math-equation">C_h=C_f</div>
                  <figure class="function-solution-graph" aria-label="رسم الدالتين f و h المتطابقتين"><svg viewBox="0 0 680 420" role="img"><rect x="0" y="0" width="680" height="420" rx="18" fill="#fffdf4"></rect><g stroke="#e5e7eb"><line x1="100" y1="45" x2="100" y2="350"></line><line x1="180" y1="45" x2="180" y2="350"></line><line x1="260" y1="45" x2="260" y2="350"></line><line x1="340" y1="45" x2="340" y2="350"></line><line x1="420" y1="45" x2="420" y2="350"></line><line x1="500" y1="45" x2="500" y2="350"></line><line x1="580" y1="45" x2="580" y2="350"></line><line x1="70" y1="110" x2="620" y2="110"></line><line x1="70" y1="210" x2="620" y2="210"></line><line x1="70" y1="310" x2="620" y2="310"></line></g><g stroke="#111827" stroke-width="2"><line x1="70" y1="310" x2="620" y2="310"></line><line x1="340" y1="45" x2="340" y2="350"></line></g><path d="M90 54 C145 105 205 196 270 260 C305 294 330 302 340 300 C350 298 375 280 410 248 C465 198 535 132 620 92" fill="none" stroke="#dc2626" stroke-width="6" stroke-linecap="round" opacity="0.55"></path><path d="M90 54 C145 105 205 196 270 260 C305 294 330 302 340 300 C350 298 375 280 410 248 C465 198 535 132 620 92" fill="none" stroke="#7c3aed" stroke-width="3" stroke-linecap="round"></path><circle cx="340" cy="300" r="6" fill="#111827"></circle><g font-family="Tajawal, Arial, sans-serif" font-size="15" font-weight="800"><text x="360" y="318" fill="#111827">(0,1)</text><text x="475" y="126" fill="#7c3aed">C_h = C_f</text></g></svg><figcaption>لأن <span class="math">f</span> موجبة دائما، فإن <span class="math">|f|</span> لا يغير الرسم.</figcaption></figure>
                </article>
                <article class="solution-step-card">
                  <h5>5. المنحنى <span class="math">C_k</span></h5>
                  <p>لدينا <span class="math">k(x)=f(|x|)</span>. إذن نحتفظ بالفرع الأيمن من <span class="math">C_f</span>، أي الموافق لـ <span class="math">x≥0</span>، ثم ننسخه بتناظر حول محور التراتيب. لذلك <span class="math">k</span> دالة زوجية.</p>
                  <figure class="function-solution-graph" aria-label="رسم الدالة k(x)=f(|x|)"><svg viewBox="0 0 680 420" role="img"><rect x="0" y="0" width="680" height="420" rx="18" fill="#fffdf4"></rect><g stroke="#e5e7eb"><line x1="100" y1="45" x2="100" y2="350"></line><line x1="180" y1="45" x2="180" y2="350"></line><line x1="260" y1="45" x2="260" y2="350"></line><line x1="340" y1="45" x2="340" y2="350"></line><line x1="420" y1="45" x2="420" y2="350"></line><line x1="500" y1="45" x2="500" y2="350"></line><line x1="580" y1="45" x2="580" y2="350"></line><line x1="70" y1="110" x2="620" y2="110"></line><line x1="70" y1="210" x2="620" y2="210"></line><line x1="70" y1="310" x2="620" y2="310"></line></g><g stroke="#111827" stroke-width="2"><line x1="70" y1="310" x2="620" y2="310"></line><line x1="340" y1="45" x2="340" y2="350"></line></g><line x1="340" y1="300" x2="620" y2="84" stroke="#2563eb" stroke-width="3" stroke-dasharray="8 8" opacity="0.6"></line><line x1="340" y1="300" x2="60" y2="84" stroke="#2563eb" stroke-width="3" stroke-dasharray="8 8" opacity="0.6"></line><path d="M340 300 C355 296 380 278 410 248 C465 198 535 132 620 92" fill="none" stroke="#059669" stroke-width="4" stroke-linecap="round"></path><path d="M340 300 C325 296 300 278 270 248 C215 198 145 132 60 92" fill="none" stroke="#059669" stroke-width="4" stroke-linecap="round"></path><circle cx="340" cy="300" r="6" fill="#111827"></circle><g font-family="Tajawal, Arial, sans-serif" font-size="15" font-weight="800"><text x="355" y="318" fill="#111827">(0,1)</text><text x="505" y="126" fill="#059669">C_k</text><text x="96" y="126" fill="#059669">تناظر</text></g></svg><figcaption><span class="math">C_k</span> زوجي: الفرع الأيمن من <span class="math">C_f</span> ينسخ إلى اليسار.</figcaption></figure>
                </article>
                <article class="solution-step-card">
                  <h5>6. المنحنى <span class="math">C_m</span></h5>
                  <p>لدينا <span class="math">m(x)=f(-x)</span>. إذن <span class="math">C_m</span> هو صورة <span class="math">C_f</span> بالتناظر حول محور التراتيب كاملا.</p>
                  <figure class="function-solution-graph" aria-label="رسم الدالة m(x)=f(-x)"><svg viewBox="0 0 680 420" role="img"><rect x="0" y="0" width="680" height="420" rx="18" fill="#fffdf4"></rect><g stroke="#e5e7eb"><line x1="100" y1="45" x2="100" y2="350"></line><line x1="180" y1="45" x2="180" y2="350"></line><line x1="260" y1="45" x2="260" y2="350"></line><line x1="340" y1="45" x2="340" y2="350"></line><line x1="420" y1="45" x2="420" y2="350"></line><line x1="500" y1="45" x2="500" y2="350"></line><line x1="580" y1="45" x2="580" y2="350"></line><line x1="70" y1="110" x2="620" y2="110"></line><line x1="70" y1="210" x2="620" y2="210"></line><line x1="70" y1="310" x2="620" y2="310"></line></g><g stroke="#111827" stroke-width="2"><line x1="70" y1="310" x2="620" y2="310"></line><line x1="340" y1="45" x2="340" y2="350"></line></g><line x1="620" y1="360" x2="70" y2="84" stroke="#2563eb" stroke-width="3" stroke-dasharray="8 8"></line><path d="M590 54 C535 105 475 196 410 260 C375 294 350 302 340 300 C330 298 305 280 270 248 C215 198 145 132 60 92" fill="none" stroke="#f59e0b" stroke-width="4" stroke-linecap="round"></path><circle cx="340" cy="300" r="6" fill="#111827"></circle><g font-family="Tajawal, Arial, sans-serif" font-size="15" font-weight="800"><text x="355" y="318" fill="#111827">(0,1)</text><text x="80" y="126" fill="#f59e0b">C_m</text><text x="95" y="75" fill="#2563eb">صورة Δ</text></g></svg><figcaption><span class="math">C_m</span> هو المرآة الكاملة لـ <span class="math">C_f</span> بالنسبة إلى محور التراتيب.</figcaption></figure>
                </article>
              </div>
            </section>
          </article>
        </section>
        <section class="unified-door-section">
          <header class="unified-door-head"><span>تدريب سريع</span><strong>اقرأ التحويل قبل الحساب</strong></header>
          <article class="training-exercise graph-transform-practice">
            <p>ليكن <span class="math">(C_f)</span> تمثيل الدالة <span class="math">f</span>. صف كيف نحصل على بيانات الدوال التالية:</p>
            <ol>
              <li><span class="math">g(x)=f(x)+2</span></li>
              <li><span class="math">h(x)=f(x-3)</span></li>
              <li><span class="math">u(x)=|f(x)|</span></li>
              <li><span class="math">v(x)=f(|x|)</span></li>
            </ol>
            <section class="training-solution solution-toggle-door is-collapsed" data-discussion-door>
              <button class="solution-detail-toggle" type="button" data-discussion-door-toggle aria-expanded="false"><span>الحل المفصل</span><small>افتح الحل</small></button>
              <div class="training-solution-body" data-discussion-door-body hidden>
                <article class="solution-step-card">
                  <h5>الحل</h5>
                  <ul class="solution-list">
                    <li><span class="math">g</span>: ننقل <span class="math">(C_f)</span> بوحدتين إلى الأعلى.</li>
                    <li><span class="math">h</span>: ننقل <span class="math">(C_f)</span> بثلاث وحدات إلى اليمين.</li>
                    <li><span class="math">u</span>: الجزء الموجب يبقى كما هو، والجزء السالب ينعكس فوق محور الفواصل.</li>
                    <li><span class="math">v</span>: نرسم فرع <span class="math">x≥0</span> ثم ننسخه بالتناظر بالنسبة إلى محور التراتيب.</li>
                  </ul>
                </article>
              </div>
            </section>
          </article>
        </section>
      </div>
    </article>
  `;
}
function renderDerivativeCanvasCard() {
  return `
    <div class="discussion-canvas-card derivative-canvas-card" data-discussion-card="derivative">
      <div class="discussion-canvas-head">
        <strong>كانفا ديناميكي: القاطع يقترب من المماس</strong>
        <span data-discussion-value>h = 1.60</span>
      </div>
      <canvas width="760" height="430" data-discussion-canvas="derivative" aria-label="كانفا ديناميكي يوضح اقتراب معامل توجيه القاطع من معامل توجيه المماس"></canvas>
      <div class="discussion-controls">
        <label>
          <span>حرّك النقطة M نحو A</span>
          <input type="range" min="0.05" max="2.4" step="0.01" value="1.6" data-discussion-slider="derivative" aria-label="المسافة الأفقية بين A و M" />
        </label>
        <div class="discussion-line-actions">
          <button class="discussion-play-btn derivative-auto-btn" type="button" data-discussion-play data-play-label="تحريك تلقائي" data-stop-label="إيقاف التحريك">تحريك تلقائي</button>
        </div>
      </div>
      <p class="discussion-result" data-discussion-result>كلما اقتربت M من A، اقترب ميل القاطع AM من ميل المماس عند A.</p>
    </div>
  `;
}
function renderDifferentiabilityDoor() {
  return `
    <article class="lesson-block discussion-door differentiability-door is-collapsed" data-discussion-door>
      <button class="discussion-door-toggle" type="button" data-discussion-door-toggle aria-expanded="false">
        <span>باب القابلية للاشتقاق و التفسير الهندسي</span>
        <small>افتح قواعد الاشتقاق</small>
      </button>
      <div class="discussion-door-body" data-discussion-door-body hidden>
        <section class="unified-door-section">
          <header class="unified-door-head"><span>الفكرة الأساسية</span><strong>المشتقة هي ميل المماس</strong></header>
          <div class="method-box">
            <strong>طريقة العمل:</strong>
            <p>لدراسة قابلية الاشتقاق عند عدد <span class="math">a</span> لا نكتفي بحساب المشتقة العامة، بل نرجع إلى معدل التغير حول النقطة، ثم نقارن النهاية اليمنى واليسرى.</p>
          </div>
          <div class="graph-transform-grid differentiability-grid">
            <div class="property-box"><strong>قابلية الاشتقاق عند <span class="math">a</span></strong><p>تكون <span class="math">f</span> قابلة للاشتقاق عند <span class="math">a</span> إذا وجدت نهاية <span class="math">(f(x)-f(a))/(x-a)</span> وكانت منتهية.</p></div>
            <div class="property-box"><strong>يمين ويسار</strong><p>إذا كان <span class="math">f'_d(a)=f'_g(a)</span> فإن الدالة قابلة للاشتقاق عند <span class="math">a</span>. إذا اختلفتا تظهر زاوية أو نقطة انكسار.</p></div>
            <div class="property-box"><strong>المماس</strong><p>إذا كانت <span class="math">f</span> قابلة للاشتقاق عند <span class="math">a</span>، فمعادلة المماس هي <span class="math">y=f'(a)(x-a)+f(a)</span>.</p></div>
            <div class="property-box"><strong>مماس أفقي</strong><p>إذا كان <span class="math">f'(a)=0</span> فالمماس أفقي، وغالبا نبحث بعدها عن قيمة حدية أو تغير اتجاه المنحنى.</p></div>
            <div class="property-box"><strong>مماس عمودي</strong><p>إذا كان معدل التغير يميل إلى <span class="math">±∞</span> عند <span class="math">a</span> فقد يكون للمنحنى مماس عمودي معادلته <span class="math">x=a</span>.</p></div>
            <div class="property-box"><strong>عدم الاشتقاق</strong><p>أشهر الحالات: زاوية، نقطة حادة، مماس عمودي، أو انقطاع في الدالة عند النقطة.</p></div>
          </div>
        </section>
        <section class="unified-door-section">
          <header class="unified-door-head"><span>التفسير الهندسي</span><strong>من القاطع إلى المماس</strong></header>
          ${renderDerivativeCanvasCard()}
        </section>
        <section class="unified-door-section">
          <header class="unified-door-head"><span>خطة الحل</span><strong>كيف أتعامل مع سؤال القابلية للاشتقاق؟</strong></header>
          <ol class="solution-list differentiability-steps">
            <li>أتحقق أولا أن الدالة معرفة ومتصلة عند النقطة المطلوبة <span class="math">a</span>.</li>
            <li>أحسب <span class="math">f'_d(a)</span> و <span class="math">f'_g(a)</span> باستعمال معدل التغير إذا كانت العبارة تتغير عند <span class="math">a</span>.</li>
            <li>إذا تساوت القيمتان وكانت منتهيتين أكتب أن الدالة قابلة للاشتقاق، ثم أستخرج معادلة المماس.</li>
            <li>إذا اختلفتا أفسر هندسيا: زاوية، نقطة حادة، أو نصفا مماسين مختلفين.</li>
          </ol>
        </section>
        <section class="unified-door-section">
          <header class="unified-door-head"><span>التدريب الأول</span><strong>الاشتقاق عند طرف المجال والتحويل الزوجي</strong></header>
          <article class="training-exercise differentiability-first-exercise">
            <h4>الجزء الأول: دراسة الدالة المساعدة <span class="math">g</span></h4>
            <p>تعتبر الدالة <span class="math">g</span> المعرفة على <span class="math">]0,+∞[</span> بالعبارة:</p>
            <div class="math-equation">g(x)=2x-1-ln(x)</div>
            <ol>
              <li>احسب نهايتي <span class="math">g</span> عند <span class="math">0</span> بالقيم الكبرى وعند <span class="math">+∞</span>.</li>
              <li>ادرس اتجاه تغير الدالة <span class="math">g</span>، ثم شكل جدول تغيراتها.</li>
              <li>احسب <span class="math">g(1/2)</span>، ثم استنتج أن <span class="math">g(x)&gt;0</span> لكل <span class="math">x∈]0,+∞[</span>.</li>
            </ol>
            <h4>الجزء الثاني: الدالة الرئيسية <span class="math">f</span> والانسجام والاشتقاق</h4>
            <p>تعتبر الدالة <span class="math">f</span> المعرفة على <span class="math">[0,+∞[</span> كما يلي:</p>
            <div class="math-equation">f(x)=x²-xln(x) من أجل x&gt;0</div>
            <div class="math-equation">f(0)=0</div>
            <ol>
              <li>بيّن أن <span class="math">f</span> مستمرة عند الصفر بالقيم الكبرى.</li>
              <li>ادرس قابلية اشتقاق <span class="math">f</span> عند الصفر بالقيم الكبرى، وأعط تفسيرا هندسيا.</li>
              <li>احسب <span class="math">lim(x→+∞)f(x)</span>.</li>
              <li>بيّن أنه من أجل كل <span class="math">x∈]0,+∞[</span>: <span class="math">f'(x)=g(x)</span>.</li>
              <li>استنتج اتجاه تغير <span class="math">f</span>، ثم شكل جدول تغيراتها.</li>
              <li>احسب <span class="math">f(1)</span>، ثم ارسم نصف المماس عند المبدأ والمنحنى <span class="math">C_f</span>.</li>
            </ol>
            <h4>الجزء الثالث: دمج التحويلات النقطية</h4>
            <p>تعتبر الدالة <span class="math">h</span> المعرفة على <span class="math">R</span> كما يلي:</p>
            <div class="math-equation">h(x)=x²-|x|ln(|x|) من أجل x≠0</div>
            <div class="math-equation">h(0)=0</div>
            <ol>
              <li>تحقق أن <span class="math">h(x)=f(|x|)</span>، ثم استنتج شفعية الدالة <span class="math">h</span>.</li>
              <li>اشرح كيف يمكن رسم <span class="math">C_h</span> انطلاقا من <span class="math">C_f</span>، ثم أنشئه بخط متقطع.</li>
              <li>اعتمادا على التفسير الهندسي، هل الدالة <span class="math">h</span> قابلة للاشتقاق عند <span class="math">x=0</span>؟ وما التفسير الهندسي عند المبدأ؟</li>
            </ol>
            <section class="training-solution solution-toggle-door is-collapsed" data-discussion-door>
              <button class="solution-detail-toggle" type="button" data-discussion-door-toggle aria-expanded="false"><span>الحل المفصل</span><small>افتح الحل</small></button>
              <div class="training-solution-body" data-discussion-door-body hidden>
                <header class="solution-subhead"><span>الجزء الأول</span><h4>دراسة <span class="math">g</span></h4></header>
                <article class="solution-step-card">
                  <h5>1. النهايات والتغيرات</h5>
                  <p>عند <span class="math">0^+</span> لدينا <span class="math">ln(x)→-∞</span>، ومنه <span class="math">-ln(x)→+∞</span>، لذلك:</p>
                  <div class="math-equation">lim(x→0+)g(x)=+∞</div>
                  <p>وعند <span class="math">+∞</span> يغلب الحد الخطي <span class="math">2x</span> على <span class="math">ln(x)</span>، وبالتالي:</p>
                  <div class="math-equation">lim(x→+∞)g(x)=+∞</div>
                  <p>نشتق على <span class="math">]0,+∞[</span>:</p>
                  <div class="math-equation">g'(x)=2-1/x=(2x-1)/x</div>
                  <p>بما أن <span class="math">x&gt;0</span>، فإن إشارة <span class="math">g'</span> هي إشارة <span class="math">2x-1</span>. إذن <span class="math">g</span> متناقصة على <span class="math">]0,1/2]</span> ومتزايدة على <span class="math">[1/2,+∞[</span>.</p>
                  <div class="math-equation">g(1/2)=1-1-ln(1/2)=ln2&gt;0</div>
                  <p>إذن القيمة الصغرى للدالة <span class="math">g</span> موجبة، ومنه:</p>
                  <div class="math-equation">g(x)&gt;0 لكل x&gt;0</div>
                </article>
                <header class="solution-subhead"><span>الجزء الثاني</span><h4>دراسة <span class="math">f</span></h4></header>
                <article class="solution-step-card">
                  <h5>2. الاستمرارية والاشتقاق عند الصفر</h5>
                  <p>نكتب من أجل <span class="math">x&gt;0</span>:</p>
                  <div class="math-equation">f(x)=x²-xln(x)</div>
                  <p>ولدينا النتيجة المعروفة <span class="math">lim(x→0+)xln(x)=0</span>، وكذلك <span class="math">x²→0</span>. إذن:</p>
                  <div class="math-equation">lim(x→0+)f(x)=0=f(0)</div>
                  <p>فتكون <span class="math">f</span> مستمرة عند <span class="math">0</span> من اليمين.</p>
                  <p>ندرس معدل التغير عند الصفر من اليمين:</p>
                  <div class="math-equation">(f(x)-f(0))/(x-0)=f(x)/x=x-ln(x)</div>
                  <div class="math-equation">lim(x→0+)(x-ln(x))=+∞</div>
                  <p>إذن لا توجد مشتقة يمينية منتهية عند <span class="math">0</span>. هندسيا: للمنحنى <span class="math">C_f</span> نصف مماس عمودي عند المبدأ معادلته <span class="math">x=0</span>.</p>
                </article>
                <article class="solution-step-card">
                  <h5>3. التغيرات والرسم</h5>
                  <p>عند <span class="math">+∞</span> نكتب:</p>
                  <div class="math-equation">f(x)=x²(1-ln(x)/x)</div>
                  <p>وبما أن <span class="math">ln(x)/x→0</span>، فإن:</p>
                  <div class="math-equation">lim(x→+∞)f(x)=+∞</div>
                  <p>ومن أجل <span class="math">x&gt;0</span>:</p>
                  <div class="math-equation">f'(x)=2x-(ln(x)+1)=2x-1-ln(x)=g(x)</div>
                  <p>وبما أن <span class="math">g(x)&gt;0</span>، فإن <span class="math">f</span> متزايدة تماما على <span class="math">]0,+∞[</span>، ومع الاستمرارية عند الصفر تكون متزايدة على <span class="math">[0,+∞[</span>.</p>
                  <div class="math-equation">f(1)=1²-1ln(1)=1</div>
                  <figure class="function-solution-graph" aria-label="رسم الدالة f ونصف المماس العمودي"><svg viewBox="0 0 680 420" role="img"><rect x="0" y="0" width="680" height="420" rx="18" fill="#fffdf4"></rect><g stroke="#e5e7eb"><line x1="120" y1="45" x2="120" y2="350"></line><line x1="220" y1="45" x2="220" y2="350"></line><line x1="320" y1="45" x2="320" y2="350"></line><line x1="420" y1="45" x2="420" y2="350"></line><line x1="520" y1="45" x2="520" y2="350"></line><line x1="620" y1="45" x2="620" y2="350"></line><line x1="70" y1="110" x2="620" y2="110"></line><line x1="70" y1="210" x2="620" y2="210"></line><line x1="70" y1="310" x2="620" y2="310"></line></g><g stroke="#111827" stroke-width="2"><line x1="70" y1="310" x2="620" y2="310"></line><line x1="120" y1="45" x2="120" y2="350"></line></g><line x1="120" y1="310" x2="120" y2="55" stroke="#2563eb" stroke-width="4" stroke-dasharray="8 8"></line><path d="M120 310 C124 270 132 238 150 208 C178 160 220 124 270 100 C350 62 455 55 620 45" fill="none" stroke="#dc2626" stroke-width="4" stroke-linecap="round"></path><circle cx="120" cy="310" r="7" fill="#111827"></circle><circle cx="220" cy="154" r="6" fill="#059669"></circle><g font-family="Tajawal, Arial, sans-serif" font-size="15" font-weight="800"><text x="132" y="330" fill="#111827">O</text><text x="132" y="80" fill="#2563eb">x=0 نصف مماس</text><text x="230" y="146" fill="#059669">(1,1)</text><text x="500" y="72" fill="#dc2626">C_f</text></g></svg><figcaption>ينطلق <span class="math">C_f</span> من المبدأ بنصف مماس عمودي، ثم يتزايد على المجال <span class="math">[0,+∞[</span>.</figcaption></figure>
                </article>
                <header class="solution-subhead"><span>الجزء الثالث</span><h4>الدالة <span class="math">h=f(|x|)</span></h4></header>
                <article class="solution-step-card">
                  <h5>4. الشفعية والتفسير الهندسي</h5>
                  <p>إذا كان <span class="math">x≠0</span> فإن <span class="math">|x|&gt;0</span>، ولذلك:</p>
                  <div class="math-equation">f(|x|)=|x|²-|x|ln(|x|)=x²-|x|ln(|x|)=h(x)</div>
                  <p>كما أن <span class="math">h(0)=f(0)=0</span>، إذن <span class="math">h(x)=f(|x|)</span> لكل <span class="math">x∈R</span>.</p>
                  <p>نستنتج أن <span class="math">h</span> زوجية، لأن <span class="math">h(-x)=h(x)</span>. ولرسم <span class="math">C_h</span> نأخذ فرع <span class="math">C_f</span> على يمين محور التراتيب، ثم ننسخه بتناظر حول محور التراتيب.</p>
                  <p>عند الصفر:</p>
                  <div class="math-equation">lim(x→0+)h(x)/x=+∞</div>
                  <div class="math-equation">lim(x→0-)h(x)/x=-∞</div>
                  <p>إذن <span class="math">h</span> ليست قابلة للاشتقاق عند <span class="math">0</span> بالمعنى العددي، لكن بيانها يملك مماسا عموديا عند المبدأ معادلته <span class="math">x=0</span>.</p>
                  <figure class="function-solution-graph" aria-label="رسم الدالة h الزوجية"><svg viewBox="0 0 680 420" role="img"><rect x="0" y="0" width="680" height="420" rx="18" fill="#fffdf4"></rect><g stroke="#e5e7eb"><line x1="100" y1="45" x2="100" y2="350"></line><line x1="180" y1="45" x2="180" y2="350"></line><line x1="260" y1="45" x2="260" y2="350"></line><line x1="340" y1="45" x2="340" y2="350"></line><line x1="420" y1="45" x2="420" y2="350"></line><line x1="500" y1="45" x2="500" y2="350"></line><line x1="580" y1="45" x2="580" y2="350"></line><line x1="70" y1="110" x2="620" y2="110"></line><line x1="70" y1="210" x2="620" y2="210"></line><line x1="70" y1="310" x2="620" y2="310"></line></g><g stroke="#111827" stroke-width="2"><line x1="70" y1="310" x2="620" y2="310"></line><line x1="340" y1="45" x2="340" y2="350"></line></g><line x1="340" y1="310" x2="340" y2="55" stroke="#2563eb" stroke-width="4" stroke-dasharray="8 8"></line><path d="M340 310 C344 270 352 238 370 208 C398 160 440 124 490 100 C545 74 585 58 620 48" fill="none" stroke="#dc2626" stroke-width="4" stroke-linecap="round"></path><path d="M340 310 C336 270 328 238 310 208 C282 160 240 124 190 100 C135 74 95 58 60 48" fill="none" stroke="#dc2626" stroke-width="4" stroke-linecap="round" stroke-dasharray="9 7"></path><circle cx="340" cy="310" r="7" fill="#111827"></circle><g font-family="Tajawal, Arial, sans-serif" font-size="15" font-weight="800"><text x="352" y="330" fill="#111827">O</text><text x="352" y="80" fill="#2563eb">x=0 مماس عمودي</text><text x="500" y="72" fill="#dc2626">C_h</text><text x="112" y="92" fill="#dc2626">تناظر</text></g></svg><figcaption><span class="math">C_h</span> زوجي: الفرع الأيمن هو <span class="math">C_f</span>، والفرع الأيسر صورته حول محور التراتيب.</figcaption></figure>
                </article>
              </div>
            </section>
          </article>
        </section>
        <section class="unified-door-section">
          <header class="unified-door-head"><span>التدريب الثاني</span><strong>نصف المماس والنقطة الزاوية</strong></header>
          <article class="training-exercise differentiability-second-exercise">
            <h4>الجزء الأول: الدالة المساعدة <span class="math">g</span></h4>
            <p>تعتبر الدالة <span class="math">g</span> المعرفة على <span class="math">]0,+∞[</span> بالعبارة:</p>
            <div class="math-equation">g(x)=x+1-ln(x)</div>
            <ol>
              <li>احسب <span class="math">lim(x→0+)g(x)</span> و <span class="math">lim(x→+∞)g(x)</span>.</li>
              <li>ادرس اتجاه تغير <span class="math">g</span>، ثم شكل جدول تغيراتها.</li>
              <li>احسب <span class="math">g(1)</span>، ثم استنتج إشارة <span class="math">g(x)</span> على <span class="math">]0,+∞[</span>.</li>
            </ol>
            <h4>الجزء الثاني: الدالة الرئيسية <span class="math">f</span></h4>
            <p>تعتبر الدالة <span class="math">f</span> المعرفة على <span class="math">[0,+∞[</span> كما يلي:</p>
            <div class="math-equation">f(x)=1/2 x²+2x-xln(x) من أجل x&gt;0</div>
            <div class="math-equation">f(0)=0</div>
            <ol>
              <li>بيّن أن <span class="math">f</span> مستمرة عند الصفر بالقيم الكبرى.</li>
              <li>ادرس قابلية اشتقاق <span class="math">f</span> عند الصفر بالقيم الكبرى، وأعط تفسيرا هندسيا.</li>
              <li>احسب <span class="math">lim(x→+∞)f(x)</span>.</li>
              <li>بيّن أنه من أجل كل <span class="math">x∈]0,+∞[</span>: <span class="math">f'(x)=g(x)</span>.</li>
              <li>استنتج اتجاه تغير <span class="math">f</span>، ثم شكل جدول تغيراتها.</li>
              <li>ناقش المعادلة <span class="math">f(x)=5</span> وعيّن موضع حلها تقريبا.</li>
              <li>احسب <span class="math">f(1)</span>، ثم ارسم نصف المماس عند المبدأ والمنحنى <span class="math">C_f</span>.</li>
            </ol>
            <h4>الجزء الثالث: دمج التحويلات النقطية</h4>
            <p>تعتبر الدالة <span class="math">h</span> المعرفة على <span class="math">R</span> كما يلي:</p>
            <div class="math-equation">h(x)=1/2 x²+2|x|-|x|ln(|x|) من أجل x≠0</div>
            <div class="math-equation">h(0)=0</div>
            <ol>
              <li>تحقق أن <span class="math">h(x)=f(|x|)</span>، ثم استنتج شفعية الدالة <span class="math">h</span>.</li>
              <li>اشرح كيف يتم رسم <span class="math">C_h</span> انطلاقا من <span class="math">C_f</span>.</li>
              <li>اعتمادا على شفعية الدالة ونتيجة الاشتقاق من اليمين، احسب <span class="math">lim(x→0-) (h(x)-h(0))/x</span>. ماذا تستنتج حول قابلية اشتقاق <span class="math">h</span> عند <span class="math">0</span>؟ وماذا تسمى النقطة <span class="math">O(0,0)</span> في <span class="math">C_h</span>؟</li>
            </ol>
            <section class="training-solution solution-toggle-door is-collapsed" data-discussion-door>
              <button class="solution-detail-toggle" type="button" data-discussion-door-toggle aria-expanded="false"><span>الحل المفصل</span><small>افتح الحل</small></button>
              <div class="training-solution-body" data-discussion-door-body hidden>
                <header class="solution-subhead"><span>الجزء الأول</span><h4>دراسة <span class="math">g</span></h4></header>
                <article class="solution-step-card">
                  <h5>1. النهايات والتغيرات</h5>
                  <p>عند <span class="math">0^+</span>: <span class="math">ln(x)→-∞</span>، إذن <span class="math">-ln(x)→+∞</span>، ومنه:</p>
                  <div class="math-equation">lim(x→0+)g(x)=+∞</div>
                  <p>وعند <span class="math">+∞</span> يغلب <span class="math">x</span> على <span class="math">ln(x)</span>، لذلك:</p>
                  <div class="math-equation">lim(x→+∞)g(x)=+∞</div>
                  <p>نشتق:</p>
                  <div class="math-equation">g'(x)=1-1/x=(x-1)/x</div>
                  <p>بما أن <span class="math">x&gt;0</span>، فإن <span class="math">g'</span> سالبة على <span class="math">]0,1[</span> وموجبة على <span class="math">]1,+∞[</span>. إذن <span class="math">g</span> تتناقص ثم تتزايد، وقيمتها الصغرى هي:</p>
                  <div class="math-equation">g(1)=1+1-ln(1)=2&gt;0</div>
                  <p>لذلك:</p>
                  <div class="math-equation">g(x)&gt;0 لكل x&gt;0</div>
                </article>
                <header class="solution-subhead"><span>الجزء الثاني</span><h4>دراسة <span class="math">f</span></h4></header>
                <article class="solution-step-card">
                  <h5>2. الاستمرارية ونصف المماس</h5>
                  <p>لدينا <span class="math">lim(x→0+)xln(x)=0</span> و <span class="math">x²→0</span> و <span class="math">2x→0</span>، لذلك:</p>
                  <div class="math-equation">lim(x→0+)f(x)=0=f(0)</div>
                  <p>إذن <span class="math">f</span> مستمرة عند الصفر من اليمين.</p>
                  <p>نحسب معدل التغير من اليمين:</p>
                  <div class="math-equation">(f(x)-f(0))/x = x/2+2-ln(x)</div>
                  <div class="math-equation">lim(x→0+) (x/2+2-ln(x))=+∞</div>
                  <p>إذن لا توجد مشتقة يمينية منتهية عند <span class="math">0</span>. هندسيا: للمنحنى <span class="math">C_f</span> نصف مماس عمودي عند المبدأ معادلته <span class="math">x=0</span>.</p>
                </article>
                <article class="solution-step-card">
                  <h5>3. التغيرات والمعادلة <span class="math">f(x)=5</span></h5>
                  <p>عند <span class="math">+∞</span>:</p>
                  <div class="math-equation">f(x)=x²(1/2+2/x-ln(x)/x)</div>
                  <p>وبما أن <span class="math">2/x→0</span> و <span class="math">ln(x)/x→0</span>، نحصل على:</p>
                  <div class="math-equation">lim(x→+∞)f(x)=+∞</div>
                  <p>ومن أجل <span class="math">x&gt;0</span>:</p>
                  <div class="math-equation">f'(x)=x+2-(ln(x)+1)=x+1-ln(x)=g(x)</div>
                  <p>وبما أن <span class="math">g(x)&gt;0</span>، فإن <span class="math">f</span> متزايدة تماما على <span class="math">[0,+∞[</span>.</p>
                  <p>إذن المعادلة <span class="math">f(x)=5</span> تقبل حلا وحيدا لأن <span class="math">f(0)=0</span> و <span class="math">f(x)→+∞</span>. بالحساب التقريبي:</p>
                  <div class="math-equation">f(2.1)≈4.80 و f(2.2)≈5.09</div>
                  <p>إذن الحل <span class="math">α</span> يوجد تقريبا بين <span class="math">2.1</span> و <span class="math">2.2</span>.</p>
                  <div class="method-box"><strong>تنبيه:</strong><p>الصورة تذكر المجال <span class="math">3.1&lt;α&lt;3.2</span>، لكن هذا لا يوافق العبارة المكتوبة للدالة؛ فحسب <span class="math">f(x)=1/2x²+2x-xln(x)</span> يكون الحل قرب <span class="math">2.17</span>.</p></div>
                  <div class="math-equation">f(1)=1/2+2-ln(1)=2.5</div>
                  <figure class="function-solution-graph" aria-label="رسم الدالة f في التدريب الثاني"><svg viewBox="0 0 680 420" role="img"><rect x="0" y="0" width="680" height="420" rx="18" fill="#fffdf4"></rect><g stroke="#e5e7eb"><line x1="110" y1="45" x2="110" y2="350"></line><line x1="210" y1="45" x2="210" y2="350"></line><line x1="310" y1="45" x2="310" y2="350"></line><line x1="410" y1="45" x2="410" y2="350"></line><line x1="510" y1="45" x2="510" y2="350"></line><line x1="610" y1="45" x2="610" y2="350"></line><line x1="70" y1="95" x2="620" y2="95"></line><line x1="70" y1="170" x2="620" y2="170"></line><line x1="70" y1="245" x2="620" y2="245"></line><line x1="70" y1="320" x2="620" y2="320"></line></g><g stroke="#111827" stroke-width="2"><line x1="70" y1="320" x2="620" y2="320"></line><line x1="110" y1="45" x2="110" y2="350"></line></g><line x1="110" y1="320" x2="110" y2="60" stroke="#2563eb" stroke-width="4" stroke-dasharray="8 8"></line><line x1="70" y1="120" x2="620" y2="120" stroke="#059669" stroke-width="3" stroke-dasharray="9 8"></line><path d="M110 320 C114 260 130 220 164 184 C205 140 260 112 325 96 C410 74 505 58 620 48" fill="none" stroke="#dc2626" stroke-width="4" stroke-linecap="round"></path><circle cx="110" cy="320" r="7" fill="#111827"></circle><circle cx="210" cy="170" r="6" fill="#059669"></circle><circle cx="322" cy="120" r="6" fill="#7c3aed"></circle><g font-family="Tajawal, Arial, sans-serif" font-size="15" font-weight="800"><text x="122" y="340" fill="#111827">O</text><text x="122" y="82" fill="#2563eb">x=0</text><text x="222" y="163" fill="#059669">(1,2.5)</text><text x="332" y="112" fill="#7c3aed">f(x)=5</text><text x="505" y="76" fill="#dc2626">C_f</text></g></svg><figcaption>المنحنى متزايد، وينطلق من المبدأ بنصف مماس عمودي، ويقطع المستوى <span class="math">y=5</span> مرة واحدة.</figcaption></figure>
                </article>
                <header class="solution-subhead"><span>الجزء الثالث</span><h4>الدالة <span class="math">h=f(|x|)</span></h4></header>
                <article class="solution-step-card">
                  <h5>4. الشفعية والنقطة الزاوية</h5>
                  <p>من أجل <span class="math">x≠0</span>:</p>
                  <div class="math-equation">f(|x|)=1/2|x|²+2|x|-|x|ln(|x|)=1/2x²+2|x|-|x|ln(|x|)=h(x)</div>
                  <p>ومع <span class="math">h(0)=f(0)=0</span> نحصل على <span class="math">h(x)=f(|x|)</span> لكل <span class="math">x∈R</span>. إذن <span class="math">h</span> زوجية.</p>
                  <p>لرسم <span class="math">C_h</span>: نأخذ فرع <span class="math">C_f</span> على يمين محور التراتيب وننسخه بتناظر حول هذا المحور.</p>
                  <p>بما أن <span class="math">h</span> زوجية، فعندما <span class="math">x&lt;0</span> نضع <span class="math">t=-x&gt;0</span> فنجد:</p>
                  <div class="math-equation">h(x)/x = f(t)/(-t) = - f(t)/t</div>
                  <p>ومادام <span class="math">lim(t→0+)f(t)/t=+∞</span>، فإن:</p>
                  <div class="math-equation">lim(x→0-) h(x)/x = -∞</div>
                  <p>أما يمينا فنجد <span class="math">lim(x→0+)h(x)/x=+∞</span>. إذن <span class="math">h</span> ليست قابلة للاشتقاق عند <span class="math">0</span>. هندسيا النقطة <span class="math">O(0,0)</span> هي نقطة زاوية ذات مماس عمودي مشترك <span class="math">x=0</span>.</p>
                  <figure class="function-solution-graph" aria-label="رسم الدالة h في التدريب الثاني"><svg viewBox="0 0 680 420" role="img"><rect x="0" y="0" width="680" height="420" rx="18" fill="#fffdf4"></rect><g stroke="#e5e7eb"><line x1="100" y1="45" x2="100" y2="350"></line><line x1="180" y1="45" x2="180" y2="350"></line><line x1="260" y1="45" x2="260" y2="350"></line><line x1="340" y1="45" x2="340" y2="350"></line><line x1="420" y1="45" x2="420" y2="350"></line><line x1="500" y1="45" x2="500" y2="350"></line><line x1="580" y1="45" x2="580" y2="350"></line><line x1="70" y1="95" x2="620" y2="95"></line><line x1="70" y1="170" x2="620" y2="170"></line><line x1="70" y1="245" x2="620" y2="245"></line><line x1="70" y1="320" x2="620" y2="320"></line></g><g stroke="#111827" stroke-width="2"><line x1="70" y1="320" x2="620" y2="320"></line><line x1="340" y1="45" x2="340" y2="350"></line></g><line x1="340" y1="320" x2="340" y2="60" stroke="#2563eb" stroke-width="4" stroke-dasharray="8 8"></line><path d="M340 320 C344 260 360 220 394 184 C435 140 490 112 555 96 C585 88 607 82 620 76" fill="none" stroke="#dc2626" stroke-width="4" stroke-linecap="round"></path><path d="M340 320 C336 260 320 220 286 184 C245 140 190 112 125 96 C95 88 73 82 60 76" fill="none" stroke="#dc2626" stroke-width="4" stroke-linecap="round" stroke-dasharray="9 7"></path><circle cx="340" cy="320" r="7" fill="#111827"></circle><g font-family="Tajawal, Arial, sans-serif" font-size="15" font-weight="800"><text x="352" y="340" fill="#111827">O</text><text x="352" y="82" fill="#2563eb">مماس عمودي</text><text x="500" y="104" fill="#dc2626">C_h</text><text x="112" y="104" fill="#dc2626">تناظر</text></g></svg><figcaption><span class="math">C_h</span> زوجي، وفي المبدأ نقطة زاوية بمماس عمودي لأن الميلين الجانبيين غير منتهيين ومتعاكسان.</figcaption></figure>
                </article>
              </div>
            </section>
          </article>
        </section>
        <section class="unified-door-section">
          <header class="unified-door-head"><span>التدريب الثالث</span><strong>المماس العمودي والنقطة الزاوية</strong></header>
          <article class="training-exercise differentiability-third-exercise">
            <h4>الجزء الأول: الاستمرارية والمماس العمودي</h4>
            <p>تعتبر الدالة <span class="math">f</span> المعرفة على <span class="math">[0,+∞[</span> كما يلي:</p>
            <div class="math-equation">f(x)=x|ln(x)| من أجل x&gt;0</div>
            <div class="math-equation">f(0)=0</div>
            <ol>
              <li>بيّن أن <span class="math">f</span> مستمرة عند المبدأ <span class="math">x=0</span> بالقيم الكبرى.</li>
              <li>ادرس قابلية اشتقاق <span class="math">f</span> عند <span class="math">0</span> بالقيم الكبرى.</li>
              <li>أعط التفسير الهندسي الدقيق للنتيجة السابقة.</li>
            </ol>
            <h4>الجزء الثاني: النقطة الزاوية عند انعدام القيمة المطلقة</h4>
            <ol>
              <li>أعد كتابة عبارة <span class="math">f(x)</span> دون رمز القيمة المطلقة على المجال <span class="math">]0,+∞[</span>.</li>
              <li>ادرس قابلية اشتقاق <span class="math">f</span> عند <span class="math">x₀=1</span> بالقيم الصغرى والكبرى.</li>
              <li>فسّر النتيجة هندسيا بالنسبة إلى المنحنى <span class="math">C_f</span> عند النقطة <span class="math">A(1,0)</span>، واكتب معادلتي نصفي المماس عندها.</li>
            </ol>
            <h4>الجزء الثالث: التغيرات والرسم</h4>
            <ol>
              <li>احسب <span class="math">lim(x→+∞)f(x)</span>.</li>
              <li>احسب <span class="math">f'(x)</span> على <span class="math">]0,1[</span> ثم على <span class="math">]1,+∞[</span>.</li>
              <li>ادرس إشارة <span class="math">f'(x)</span> في كل مجال، ثم شكل جدول تغيرات <span class="math">f</span> على <span class="math">[0,+∞[</span>.</li>
              <li>ارسم أنصاف المماسات، ثم ارسم المنحنى <span class="math">C_f</span>. نأخذ <span class="math">e^{-1}≈0.36</span>.</li>
            </ol>
            <h4>الجزء الرابع: استنتاج المنحنيات بالتحويلات</h4>
            <p>تعتبر الدالة <span class="math">g</span> المعرفة على <span class="math">R</span> كما يلي:</p>
            <div class="math-equation">g(x)=|x|·|ln(|x|)| من أجل x≠0</div>
            <div class="math-equation">g(0)=0</div>
            <ol>
              <li>بيّن أن الدالة <span class="math">g</span> زوجية.</li>
              <li>بالاعتماد على القواعد الهندسية، اشرح كيف يمكن رسم <span class="math">C_g</span> انطلاقا من <span class="math">C_f</span>.</li>
            </ol>
            <section class="training-solution solution-toggle-door is-collapsed" data-discussion-door>
              <button class="solution-detail-toggle" type="button" data-discussion-door-toggle aria-expanded="false"><span>الحل المفصل</span><small>افتح الحل</small></button>
              <div class="training-solution-body" data-discussion-door-body hidden>
                <header class="solution-subhead"><span>الجزء الأول</span><h4>الاستمرارية والمماس العمودي</h4></header>
                <article class="solution-step-card">
                  <h5>1. الاستمرارية عند <span class="math">0</span></h5>
                  <p>من أجل <span class="math">x&gt;0</span> لدينا:</p>
                  <div class="math-equation">f(x)=x|ln(x)|</div>
                  <p>وعند <span class="math">0^+</span> نعلم أن:</p>
                  <div class="math-equation">lim(x→0+) xln(x)=0</div>
                  <p>ومنه أيضا:</p>
                  <div class="math-equation">lim(x→0+) x|ln(x)|=0=f(0)</div>
                  <p>إذن <span class="math">f</span> مستمرة عند <span class="math">0</span> من اليمين.</p>
                </article>
                <article class="solution-step-card">
                  <h5>2. قابلية الاشتقاق من اليمين</h5>
                  <p>نحسب معدل التغير عند <span class="math">0</span> من اليمين:</p>
                  <div class="math-equation">(f(x)-f(0))/(x-0)=|ln(x)|</div>
                  <p>وعندما <span class="math">x→0^+</span> فإن <span class="math">ln(x)→-∞</span>، لذلك:</p>
                  <div class="math-equation">lim(x→0+) |ln(x)|=+∞</div>
                  <p>إذن لا توجد مشتقة يمينية منتهية عند <span class="math">0</span>. هندسيا: للمنحنى <span class="math">C_f</span> نصف مماس عمودي عند المبدأ، معادلته <span class="math">x=0</span>.</p>
                </article>
                <header class="solution-subhead"><span>الجزء الثاني</span><h4>النقطة الزاوية عند <span class="math">A(1,0)</span></h4></header>
                <article class="solution-step-card">
                  <h5>3. إزالة القيمة المطلقة</h5>
                  <p>إشارة <span class="math">ln(x)</span> تتغير عند <span class="math">x=1</span>:</p>
                  <div class="math-equation">0&lt;x&lt;1 ⇒ ln(x)&lt;0 ⇒ f(x)=-xln(x)</div>
                  <div class="math-equation">x&gt;1 ⇒ ln(x)&gt;0 ⇒ f(x)=xln(x)</div>
                  <p>ندرس الاشتقاق عند <span class="math">1</span>:</p>
                  <div class="math-equation">f'_g(1)=lim(x→1-) (-(ln(x)+1))=-1</div>
                  <div class="math-equation">f'_d(1)=lim(x→1+) (ln(x)+1)=1</div>
                  <p>بما أن المشتقتين الجانبيتين مختلفتان، فإن <span class="math">f</span> غير قابلة للاشتقاق عند <span class="math">1</span>. هندسيا: النقطة <span class="math">A(1,0)</span> نقطة زاوية.</p>
                  <div class="math-equation">T_g: y=-(x-1)=1-x</div>
                  <div class="math-equation">T_d: y=x-1</div>
                </article>
                <header class="solution-subhead"><span>الجزء الثالث</span><h4>التغيرات والرسم</h4></header>
                <article class="solution-step-card">
                  <h5>4. التغيرات</h5>
                  <p>عند <span class="math">+∞</span>:</p>
                  <div class="math-equation">lim(x→+∞)xln(x)=+∞</div>
                  <p>المشتقة على المجالين:</p>
                  <div class="math-equation">0&lt;x&lt;1: f'(x)=-(ln(x)+1)</div>
                  <div class="math-equation">x&gt;1: f'(x)=ln(x)+1</div>
                  <p>على <span class="math">]0,1[</span>: <span class="math">f'(x)=0 ⇔ ln(x)=-1 ⇔ x=e^{-1}</span>. إذن <span class="math">f</span> متزايدة على <span class="math">]0,e^{-1}]</span> ثم متناقصة على <span class="math">[e^{-1},1]</span>.</p>
                  <p>وعلى <span class="math">]1,+∞[</span> لدينا <span class="math">ln(x)+1&gt;0</span>، إذن <span class="math">f</span> متزايدة.</p>
                  <div class="math-equation">f(e^{-1})=e^{-1}</div>
                  <div class="math-equation">f(0)=0, f(1)=0, lim(x→+∞)f(x)=+∞</div>
                </article>
                <article class="solution-step-card">
                  <h5>5. رسم <span class="math">C_f</span></h5>
                  <figure class="function-solution-graph" aria-label="رسم الدالة f(x)=x|ln(x)|"><svg viewBox="0 0 680 420" role="img"><rect x="0" y="0" width="680" height="420" rx="18" fill="#fffdf4"></rect><g stroke="#e5e7eb"><line x1="110" y1="45" x2="110" y2="350"></line><line x1="210" y1="45" x2="210" y2="350"></line><line x1="310" y1="45" x2="310" y2="350"></line><line x1="410" y1="45" x2="410" y2="350"></line><line x1="510" y1="45" x2="510" y2="350"></line><line x1="610" y1="45" x2="610" y2="350"></line><line x1="70" y1="120" x2="620" y2="120"></line><line x1="70" y1="220" x2="620" y2="220"></line><line x1="70" y1="320" x2="620" y2="320"></line></g><g stroke="#111827" stroke-width="2"><line x1="70" y1="320" x2="620" y2="320"></line><line x1="110" y1="45" x2="110" y2="350"></line></g><line x1="110" y1="320" x2="110" y2="60" stroke="#2563eb" stroke-width="4" stroke-dasharray="8 8"></line><line x1="210" y1="260" x2="310" y2="320" stroke="#7c3aed" stroke-width="3" stroke-dasharray="8 7"></line><line x1="310" y1="320" x2="410" y2="260" stroke="#7c3aed" stroke-width="3" stroke-dasharray="8 7"></line><path d="M110 320 C116 250 132 210 150 190 C176 162 205 172 235 210 C260 242 286 300 310 320 C345 292 395 230 470 165 C535 110 585 72 620 54" fill="none" stroke="#dc2626" stroke-width="4" stroke-linecap="round"></path><circle cx="110" cy="320" r="7" fill="#111827"></circle><circle cx="150" cy="190" r="6" fill="#059669"></circle><circle cx="310" cy="320" r="7" fill="#111827"></circle><g font-family="Tajawal, Arial, sans-serif" font-size="15" font-weight="800"><text x="122" y="340" fill="#111827">O</text><text x="122" y="82" fill="#2563eb">x=0</text><text x="157" y="184" fill="#059669">e⁻¹</text><text x="322" y="340" fill="#111827">A(1,0)</text><text x="500" y="96" fill="#dc2626">C_f</text><text x="360" y="286" fill="#7c3aed">نصفا مماس</text></g></svg><figcaption>يظهر نصف المماس العمودي عند <span class="math">O</span>، وتظهر النقطة الزاوية <span class="math">A(1,0)</span> بنصفي مماس مختلفين.</figcaption></figure>
                </article>
                <header class="solution-subhead"><span>الجزء الرابع</span><h4>استنتاج <span class="math">C_g</span></h4></header>
                <article class="solution-step-card">
                  <h5>6. التحويل الزوجي</h5>
                  <p>من أجل <span class="math">x≠0</span>:</p>
                  <div class="math-equation">g(x)=|x|·|ln(|x|)|=f(|x|)</div>
                  <p>وبما أن <span class="math">g(0)=f(0)=0</span>، فإن <span class="math">g(x)=f(|x|)</span> لكل <span class="math">x∈R</span>. إذن <span class="math">g</span> زوجية.</p>
                  <p>لرسم <span class="math">C_g</span> نحتفظ بمنحنى <span class="math">C_f</span> على يمين محور التراتيب، ثم ننسخه بالتناظر حول محور التراتيب.</p>
                  <figure class="function-solution-graph" aria-label="رسم الدالة g(x)=|x||ln(|x|)|"><svg viewBox="0 0 680 420" role="img"><rect x="0" y="0" width="680" height="420" rx="18" fill="#fffdf4"></rect><g stroke="#e5e7eb"><line x1="100" y1="45" x2="100" y2="350"></line><line x1="180" y1="45" x2="180" y2="350"></line><line x1="260" y1="45" x2="260" y2="350"></line><line x1="340" y1="45" x2="340" y2="350"></line><line x1="420" y1="45" x2="420" y2="350"></line><line x1="500" y1="45" x2="500" y2="350"></line><line x1="580" y1="45" x2="580" y2="350"></line><line x1="70" y1="120" x2="620" y2="120"></line><line x1="70" y1="220" x2="620" y2="220"></line><line x1="70" y1="320" x2="620" y2="320"></line></g><g stroke="#111827" stroke-width="2"><line x1="70" y1="320" x2="620" y2="320"></line><line x1="340" y1="45" x2="340" y2="350"></line></g><line x1="340" y1="320" x2="340" y2="60" stroke="#2563eb" stroke-width="4" stroke-dasharray="8 8"></line><path d="M340 320 C346 250 362 210 380 190 C406 162 435 172 465 210 C490 242 516 300 540 320 C575 292 605 235 620 196" fill="none" stroke="#dc2626" stroke-width="4" stroke-linecap="round"></path><path d="M340 320 C334 250 318 210 300 190 C274 162 245 172 215 210 C190 242 164 300 140 320 C105 292 75 235 60 196" fill="none" stroke="#dc2626" stroke-width="4" stroke-linecap="round" stroke-dasharray="9 7"></path><circle cx="340" cy="320" r="7" fill="#111827"></circle><circle cx="540" cy="320" r="6" fill="#111827"></circle><circle cx="140" cy="320" r="6" fill="#111827"></circle><g font-family="Tajawal, Arial, sans-serif" font-size="15" font-weight="800"><text x="352" y="340" fill="#111827">O</text><text x="548" y="340" fill="#111827">1</text><text x="122" y="340" fill="#111827">-1</text><text x="500" y="128" fill="#dc2626">C_g</text><text x="96" y="128" fill="#dc2626">تناظر</text></g></svg><figcaption><span class="math">C_g</span> زوجي، وفيه نسختان متناظرتان من فرع <span class="math">C_f</span> على يمين محور التراتيب.</figcaption></figure>
                </article>
              </div>
            </section>
          </article>
        </section>
        <section class="unified-door-section">
          <header class="unified-door-head"><span>التدريب الرابع</span><strong>دالة بفرعين وأنصاف المماسات</strong></header>
          <article class="training-exercise differentiability-fourth-exercise">
            <h4>تعريف الدالة</h4>
            <p>تعتبر الدالة <span class="math">f</span> المعرفة على <span class="math">R</span> كما يلي:</p>
            <div class="math-equation">f(x)=e^x-x من أجل x≤0</div>
            <div class="math-equation">f(x)=1-x+xln(x) من أجل x&gt;0</div>
            <h4>الجزء الأول: دراسة الفرع الأيسر</h4>
            <ol>
              <li>احسب <span class="math">lim(x→-∞)f(x)</span>.</li>
              <li>بيّن أن المستقيم <span class="math">Δ:y=-x</span> مقارب مائل للمنحنى <span class="math">C_f</span> بجوار <span class="math">-∞</span>.</li>
              <li>ادرس الوضع النسبي للمنحنى <span class="math">C_f</span> والمستقيم <span class="math">Δ</span> على <span class="math">]-∞,0]</span>.</li>
              <li>احسب <span class="math">f'(x)</span> من أجل <span class="math">x&lt;0</span>، ثم استنتج اتجاه تغير <span class="math">f</span> على <span class="math">]-∞,0]</span>.</li>
            </ol>
            <h4>الجزء الثاني: دراسة الفرع الأيمن</h4>
            <ol>
              <li>احسب <span class="math">lim(x→+∞)f(x)</span>.</li>
              <li>احسب <span class="math">f'(x)</span> من أجل <span class="math">x&gt;0</span>، ثم ادرس إشارتها.</li>
              <li>استنتج اتجاه تغير <span class="math">f</span> على <span class="math">]0,+∞[</span>.</li>
            </ol>
            <h4>الجزء الثالث: نقطة الالتقاء</h4>
            <ol>
              <li>بيّن أن <span class="math">f</span> مستمرة عند <span class="math">x₀=0</span>.</li>
              <li>ادرس قابلية اشتقاق <span class="math">f</span> على اليسار عند <span class="math">0</span>.</li>
              <li>ادرس قابلية اشتقاق <span class="math">f</span> على اليمين عند <span class="math">0</span>.</li>
              <li>هل <span class="math">f</span> قابلة للاشتقاق عند <span class="math">0</span>؟ أعط تفسيرا هندسيا دقيقا.</li>
            </ol>
            <h4>الجزء الرابع: الحصيلة والرسم</h4>
            <ol>
              <li>شكل جدول تغيرات الدالة <span class="math">f</span> على <span class="math">R</span>.</li>
              <li>ارسم المستقيم المقارب <span class="math">Δ</span> وأنصاف المماسات عند المبدأ، ثم ارسم المنحنى <span class="math">C_f</span>.</li>
            </ol>
            <section class="training-solution solution-toggle-door is-collapsed" data-discussion-door>
              <button class="solution-detail-toggle" type="button" data-discussion-door-toggle aria-expanded="false"><span>الحل المفصل</span><small>افتح الحل</small></button>
              <div class="training-solution-body" data-discussion-door-body hidden>
                <header class="solution-subhead"><span>الجزء الأول</span><h4>الفرع الأيسر <span class="math">x≤0</span></h4></header>
                <article class="solution-step-card">
                  <h5>1. النهاية والمقارب</h5>
                  <p>على <span class="math">]-∞,0]</span> لدينا <span class="math">f(x)=e^x-x</span>. عندما <span class="math">x→-∞</span> فإن <span class="math">e^x→0</span> و <span class="math">-x→+∞</span>، لذلك:</p>
                  <div class="math-equation">lim(x→-∞)f(x)=+∞</div>
                  <p>نحسب الفرق مع المستقيم <span class="math">Δ:y=-x</span>:</p>
                  <div class="math-equation">f(x)-(-x)=e^x</div>
                  <div class="math-equation">lim(x→-∞)e^x=0</div>
                  <p>إذن <span class="math">Δ:y=-x</span> مقارب مائل بجوار <span class="math">-∞</span>. وبما أن <span class="math">e^x&gt;0</span> فإن <span class="math">C_f</span> يقع فوق <span class="math">Δ</span> على الفرع الأيسر.</p>
                </article>
                <article class="solution-step-card">
                  <h5>2. تغيرات الفرع الأيسر</h5>
                  <div class="math-equation">f'(x)=e^x-1</div>
                  <p>إذا <span class="math">x&lt;0</span> فإن <span class="math">0&lt;e^x&lt;1</span>، ومنه <span class="math">f'(x)&lt;0</span>. إذن <span class="math">f</span> متناقصة على <span class="math">]-∞,0]</span>.</p>
                  <div class="math-equation">f(0)=e^0-0=1</div>
                </article>
                <header class="solution-subhead"><span>الجزء الثاني</span><h4>الفرع الأيمن <span class="math">x&gt;0</span></h4></header>
                <article class="solution-step-card">
                  <h5>3. النهاية والتغيرات</h5>
                  <p>نكتب:</p>
                  <div class="math-equation">f(x)=1+x(ln(x)-1)</div>
                  <p>وعندما <span class="math">x→+∞</span> فإن <span class="math">xln(x)</span> يغلب <span class="math">x</span>، لذلك:</p>
                  <div class="math-equation">lim(x→+∞)f(x)=+∞</div>
                  <p>المشتقة:</p>
                  <div class="math-equation">f'(x)=-1+(ln(x)+1)=ln(x)</div>
                  <p>إذن <span class="math">f'(x)&lt;0</span> على <span class="math">]0,1[</span>، و <span class="math">f'(1)=0</span>، و <span class="math">f'(x)&gt;0</span> على <span class="math">]1,+∞[</span>. بالتالي <span class="math">f</span> متناقصة على <span class="math">]0,1]</span> ومتزايدة على <span class="math">[1,+∞[</span>.</p>
                  <div class="math-equation">f(1)=1-1+1ln(1)=0</div>
                </article>
                <header class="solution-subhead"><span>الجزء الثالث</span><h4>نقطة الالتقاء عند <span class="math">0</span></h4></header>
                <article class="solution-step-card">
                  <h5>4. الاتصال والاشتقاق الجانبي</h5>
                  <p>من اليسار:</p>
                  <div class="math-equation">lim(x→0-)f(x)=e^0-0=1</div>
                  <p>ومن اليمين نستعمل <span class="math">lim(x→0+)xln(x)=0</span>:</p>
                  <div class="math-equation">lim(x→0+)f(x)=1-0+0=1</div>
                  <p>كما أن <span class="math">f(0)=1</span> من الفرع الأيسر، إذن <span class="math">f</span> مستمرة عند <span class="math">0</span>.</p>
                  <p>الاشتقاق على اليسار:</p>
                  <div class="math-equation">f'_g(0)=lim(x→0-)(e^x-1)=0</div>
                  <p>الاشتقاق على اليمين باستعمال معدل التغير:</p>
                  <div class="math-equation">(f(x)-f(0))/x=(1-x+xln(x)-1)/x=-1+ln(x)</div>
                  <div class="math-equation">lim(x→0+)(-1+ln(x))=-∞</div>
                  <p>إذن <span class="math">f</span> غير قابلة للاشتقاق عند <span class="math">0</span>. هندسيا: للمنحنى نصف مماس أفقي من اليسار <span class="math">y=1</span> ونصف مماس عمودي من اليمين <span class="math">x=0</span>.</p>
                </article>
                <header class="solution-subhead"><span>الجزء الرابع</span><h4>الرسم والحصيلة</h4></header>
                <article class="solution-step-card">
                  <h5>5. جدول التغيرات والرسم</h5>
                  <p>الحصيلة: <span class="math">f</span> متناقصة من <span class="math">+∞</span> إلى <span class="math">1</span> على <span class="math">]-∞,0]</span>، ثم متناقصة من <span class="math">1</span> إلى <span class="math">0</span> على <span class="math">]0,1]</span>، ثم متزايدة من <span class="math">0</span> إلى <span class="math">+∞</span> على <span class="math">[1,+∞[</span>.</p>
                  <figure class="function-solution-graph" aria-label="رسم الدالة ذات الفرعين وأنصاف المماسات"><svg viewBox="0 0 680 420" role="img"><rect x="0" y="0" width="680" height="420" rx="18" fill="#fffdf4"></rect><g stroke="#e5e7eb"><line x1="100" y1="45" x2="100" y2="350"></line><line x1="180" y1="45" x2="180" y2="350"></line><line x1="260" y1="45" x2="260" y2="350"></line><line x1="340" y1="45" x2="340" y2="350"></line><line x1="420" y1="45" x2="420" y2="350"></line><line x1="500" y1="45" x2="500" y2="350"></line><line x1="580" y1="45" x2="580" y2="350"></line><line x1="70" y1="110" x2="620" y2="110"></line><line x1="70" y1="210" x2="620" y2="210"></line><line x1="70" y1="310" x2="620" y2="310"></line></g><g stroke="#111827" stroke-width="2"><line x1="70" y1="310" x2="620" y2="310"></line><line x1="340" y1="45" x2="340" y2="350"></line></g><line x1="70" y1="70" x2="340" y2="210" stroke="#2563eb" stroke-width="3" stroke-dasharray="9 8"></line><line x1="260" y1="210" x2="420" y2="210" stroke="#7c3aed" stroke-width="3" stroke-dasharray="8 7"></line><line x1="340" y1="210" x2="340" y2="330" stroke="#7c3aed" stroke-width="4" stroke-dasharray="8 7"></line><path d="M70 58 C140 95 210 134 280 178 C315 200 335 210 340 210" fill="none" stroke="#dc2626" stroke-width="4" stroke-linecap="round"></path><path d="M340 210 C343 260 365 300 420 310 C470 318 545 245 620 82" fill="none" stroke="#dc2626" stroke-width="4" stroke-linecap="round"></path><circle cx="340" cy="210" r="7" fill="#111827"></circle><circle cx="420" cy="310" r="7" fill="#059669"></circle><g font-family="Tajawal, Arial, sans-serif" font-size="15" font-weight="800"><text x="352" y="204" fill="#111827">(0,1)</text><text x="428" y="334" fill="#059669">(1,0)</text><text x="85" y="86" fill="#2563eb">Δ:y=-x</text><text x="258" y="198" fill="#7c3aed">y=1</text><text x="352" y="292" fill="#7c3aed">x=0</text><text x="520" y="116" fill="#dc2626">C_f</text></g></svg><figcaption>عند <span class="math">0</span> يلتقي الفرعان باتصال، لكن بنصف مماس أفقي من اليسار ونصف مماس عمودي من اليمين.</figcaption></figure>
                </article>
              </div>
            </section>
          </article>
        </section>
        <section class="unified-door-section">
          <header class="unified-door-head"><span>التدريب الخامس</span><strong>المقارب المائل وقابلية الاشتقاق بعد التحويل</strong></header>
          <article class="training-exercise differentiability-fifth-exercise">
            <h4>الجزء الأول: دراسة الدالة الأصلية <span class="math">f</span></h4>
            <p>تعتبر الدالة <span class="math">f</span> المعرفة على <span class="math">R</span> بالعبارة:</p>
            <div class="math-equation">f(x)=ln(e^{2x}-e^x+1)</div>
            <ol>
              <li>برر لماذا <span class="math">f</span> معرفة على كامل <span class="math">R</span>.</li>
              <li>احسب <span class="math">lim(x→-∞)f(x)</span>، وماذا تستنتج هندسيا؟</li>
              <li>تحقق أنه من أجل كل <span class="math">x∈R</span>: <span class="math">f(x)=2x+ln(1-e^{-x}+e^{-2x})</span>.</li>
              <li>احسب <span class="math">lim(x→+∞)f(x)</span> واستنتج المقارب المائل <span class="math">Δ</span>.</li>
              <li>بيّن أن <span class="math">f'(x)=e^x(2e^x-1)/(e^{2x}-e^x+1)</span>.</li>
              <li>ادرس إشارة <span class="math">f'(x)</span>، ثم شكل جدول تغيرات <span class="math">f</span>.</li>
              <li>اكتب معادلة المماس <span class="math">T</span> للمنحنى <span class="math">C_f</span> عند النقطة ذات الفاصلة <span class="math">0</span>.</li>
            </ol>
            <h4>الجزء الثاني: قابلية الاشتقاق بعد التحويل</h4>
            <p>تعتبر الدالة <span class="math">g</span> المعرفة على <span class="math">R</span> بالعبارة:</p>
            <div class="math-equation">g(x)=ln(e^{2|x|}-e^{|x|}+1)</div>
            <ol>
              <li>تحقق أن <span class="math">g(x)=f(|x|)</span>، ثم استنتج شفعية الدالة <span class="math">g</span>.</li>
              <li>اعتمادا على تعريف العدد المشتق، ادرس قابلية اشتقاق <span class="math">g</span> عند الفاصلة <span class="math">0</span>.</li>
              <li>فسر النتيجة هندسيا: ماذا تمثل النقطة <span class="math">O(0,0)</span> بالنسبة إلى المنحنى <span class="math">C_g</span>؟</li>
              <li>اشرح باختصار كيف يتم رسم <span class="math">C_g</span> انطلاقا من <span class="math">C_f</span>.</li>
            </ol>
            <section class="training-solution solution-toggle-door is-collapsed" data-discussion-door>
              <button class="solution-detail-toggle" type="button" data-discussion-door-toggle aria-expanded="false"><span>الحل المفصل</span><small>افتح الحل</small></button>
              <div class="training-solution-body" data-discussion-door-body hidden>
                <header class="solution-subhead"><span>الجزء الأول</span><h4>دراسة <span class="math">f</span></h4></header>
                <article class="solution-step-card">
                  <h5>1. التعريف والنهايات</h5>
                  <p>نضع <span class="math">t=e^x&gt;0</span>. عندئذ:</p>
                  <div class="math-equation">e^{2x}-e^x+1=t²-t+1=(t-1/2)²+3/4&gt;0</div>
                  <p>إذن اللوغاريتم معرف لكل <span class="math">x∈R</span>.</p>
                  <p>عند <span class="math">-∞</span>: <span class="math">e^x→0</span> و <span class="math">e^{2x}→0</span>، لذلك:</p>
                  <div class="math-equation">lim(x→-∞)f(x)=ln(1)=0</div>
                  <p>هندسيا: المستقيم <span class="math">y=0</span> مقارب أفقي بجوار <span class="math">-∞</span>.</p>
                  <p>من أجل <span class="math">+∞</span> نستخرج <span class="math">e^{2x}</span>:</p>
                  <div class="math-equation">f(x)=ln(e^{2x}(1-e^{-x}+e^{-2x}))=2x+ln(1-e^{-x}+e^{-2x})</div>
                  <div class="math-equation">lim(x→+∞)(f(x)-2x)=0</div>
                  <p>إذن المقارب المائل بجوار <span class="math">+∞</span> هو:</p>
                  <div class="math-equation">Δ: y=2x</div>
                </article>
                <article class="solution-step-card">
                  <h5>2. المشتقة والتغيرات</h5>
                  <p>نشتق مركبة اللوغاريتم:</p>
                  <div class="math-equation">f'(x)=(2e^{2x}-e^x)/(e^{2x}-e^x+1)</div>
                  <div class="math-equation">f'(x)=e^x(2e^x-1)/(e^{2x}-e^x+1)</div>
                  <p>المقام موجب و <span class="math">e^x&gt;0</span>، إذن إشارة <span class="math">f'</span> هي إشارة <span class="math">2e^x-1</span>.</p>
                  <div class="math-equation">2e^x-1=0 ⇔ x=-ln2</div>
                  <p>إذن <span class="math">f</span> متناقصة على <span class="math">]-∞,-ln2]</span> ومتزايدة على <span class="math">[-ln2,+∞[</span>.</p>
                  <div class="math-equation">f(-ln2)=ln(1/4-1/2+1)=ln(3/4)</div>
                  <p>وبما أن <span class="math">ln(0.75)≈-0.28</span>، فالقيمة الصغرى تقريبا <span class="math">-0.28</span>.</p>
                  <p>عند <span class="math">0</span>:</p>
                  <div class="math-equation">f(0)=ln(1)=0</div>
                  <div class="math-equation">f'(0)=1(2-1)/(1-1+1)=1</div>
                  <p>إذن معادلة المماس:</p>
                  <div class="math-equation">T: y=x</div>
                </article>
                <article class="solution-step-card">
                  <h5>3. رسم <span class="math">C_f</span></h5>
                  <figure class="function-solution-graph" aria-label="رسم الدالة f والمقارب y=2x"><svg viewBox="0 0 680 420" role="img"><rect x="0" y="0" width="680" height="420" rx="18" fill="#fffdf4"></rect><g stroke="#e5e7eb"><line x1="100" y1="45" x2="100" y2="350"></line><line x1="180" y1="45" x2="180" y2="350"></line><line x1="260" y1="45" x2="260" y2="350"></line><line x1="340" y1="45" x2="340" y2="350"></line><line x1="420" y1="45" x2="420" y2="350"></line><line x1="500" y1="45" x2="500" y2="350"></line><line x1="580" y1="45" x2="580" y2="350"></line><line x1="70" y1="110" x2="620" y2="110"></line><line x1="70" y1="210" x2="620" y2="210"></line><line x1="70" y1="310" x2="620" y2="310"></line></g><g stroke="#111827" stroke-width="2"><line x1="70" y1="210" x2="620" y2="210"></line><line x1="340" y1="45" x2="340" y2="350"></line></g><line x1="70" y1="210" x2="260" y2="210" stroke="#2563eb" stroke-width="3" stroke-dasharray="8 8"></line><line x1="250" y1="350" x2="610" y2="45" stroke="#2563eb" stroke-width="3" stroke-dasharray="8 8"></line><line x1="265" y1="285" x2="420" y2="130" stroke="#7c3aed" stroke-width="3" stroke-dasharray="8 7"></line><path d="M70 210 C150 210 220 220 260 238 C296 254 320 230 340 210 C378 174 442 118 520 76 C565 54 600 48 620 46" fill="none" stroke="#dc2626" stroke-width="4" stroke-linecap="round"></path><circle cx="286" cy="238" r="6" fill="#059669"></circle><circle cx="340" cy="210" r="7" fill="#111827"></circle><g font-family="Tajawal, Arial, sans-serif" font-size="15" font-weight="800"><text x="352" y="230" fill="#111827">O</text><text x="120" y="198" fill="#2563eb">y=0</text><text x="520" y="76" fill="#2563eb">Δ:y=2x</text><text x="292" y="258" fill="#059669">ln(3/4)</text><text x="425" y="126" fill="#7c3aed">T:y=x</text><text x="510" y="104" fill="#dc2626">C_f</text></g></svg><figcaption>المنحنى يقترب من <span class="math">y=0</span> عند <span class="math">-∞</span>، ومن <span class="math">y=2x</span> عند <span class="math">+∞</span>، ويمر من الأصل بمماس <span class="math">y=x</span>.</figcaption></figure>
                </article>
                <header class="solution-subhead"><span>الجزء الثاني</span><h4>الدالة <span class="math">g=f(|x|)</span></h4></header>
                <article class="solution-step-card">
                  <h5>4. الشفعية وقابلية الاشتقاق</h5>
                  <p>من أجل كل <span class="math">x∈R</span>:</p>
                  <div class="math-equation">f(|x|)=ln(e^{2|x|}-e^{|x|}+1)=g(x)</div>
                  <p>إذن <span class="math">g</span> زوجية، لأن <span class="math">g(-x)=g(x)</span>.</p>
                  <p>ندرس الاشتقاق عند <span class="math">0</span> باستعمال معدل التغير. بما أن <span class="math">g(0)=0</span>:</p>
                  <div class="math-equation">lim(x→0+) g(x)/x = f'_d(0)=f'(0)=1</div>
                  <p>ومن اليسار، إذا وضعنا <span class="math">t=-x&gt;0</span>:</p>
                  <div class="math-equation">g(x)/x=f(t)/(-t)=-f(t)/t</div>
                  <div class="math-equation">lim(x→0-) g(x)/x=-f'(0)=-1</div>
                  <p>إذن <span class="math">g</span> ليست قابلة للاشتقاق عند <span class="math">0</span> لأن المشتقتين الجانبيتين مختلفتان. هندسيا: <span class="math">O(0,0)</span> نقطة زاوية على <span class="math">C_g</span>، بنصفي مماس <span class="math">y=x</span> و <span class="math">y=-x</span>.</p>
                </article>
                <article class="solution-step-card">
                  <h5>5. رسم <span class="math">C_g</span></h5>
                  <p>نرسم فرع <span class="math">C_f</span> الموافق لـ <span class="math">x≥0</span>، ثم ننسخه بالتناظر حول محور التراتيب.</p>
                  <figure class="function-solution-graph" aria-label="رسم الدالة g=f(|x|)"><svg viewBox="0 0 680 420" role="img"><rect x="0" y="0" width="680" height="420" rx="18" fill="#fffdf4"></rect><g stroke="#e5e7eb"><line x1="100" y1="45" x2="100" y2="350"></line><line x1="180" y1="45" x2="180" y2="350"></line><line x1="260" y1="45" x2="260" y2="350"></line><line x1="340" y1="45" x2="340" y2="350"></line><line x1="420" y1="45" x2="420" y2="350"></line><line x1="500" y1="45" x2="500" y2="350"></line><line x1="580" y1="45" x2="580" y2="350"></line><line x1="70" y1="110" x2="620" y2="110"></line><line x1="70" y1="210" x2="620" y2="210"></line><line x1="70" y1="310" x2="620" y2="310"></line></g><g stroke="#111827" stroke-width="2"><line x1="70" y1="210" x2="620" y2="210"></line><line x1="340" y1="45" x2="340" y2="350"></line></g><line x1="340" y1="210" x2="500" y2="50" stroke="#7c3aed" stroke-width="3" stroke-dasharray="8 7"></line><line x1="340" y1="210" x2="180" y2="50" stroke="#7c3aed" stroke-width="3" stroke-dasharray="8 7"></line><path d="M340 210 C378 174 442 118 520 76 C565 54 600 48 620 46" fill="none" stroke="#dc2626" stroke-width="4" stroke-linecap="round"></path><path d="M340 210 C302 174 238 118 160 76 C115 54 80 48 60 46" fill="none" stroke="#dc2626" stroke-width="4" stroke-linecap="round" stroke-dasharray="9 7"></path><circle cx="340" cy="210" r="7" fill="#111827"></circle><g font-family="Tajawal, Arial, sans-serif" font-size="15" font-weight="800"><text x="352" y="230" fill="#111827">O</text><text x="498" y="84" fill="#dc2626">C_g</text><text x="110" y="84" fill="#dc2626">تناظر</text><text x="420" y="72" fill="#7c3aed">y=x</text><text x="190" y="72" fill="#7c3aed">y=-x</text></g></svg><figcaption><span class="math">C_g</span> زوجي، وفي الأصل نقطة زاوية بسبب اختلاف ميلي نصفي المماس.</figcaption></figure>
                </article>
              </div>
            </section>
          </article>
        </section>
      </div>
    </article>
  `;
}
function renderDerivativeLimitsDoor() {
  return `
    <article class="lesson-block discussion-door derivative-limits-door is-collapsed" data-discussion-door>
      <button class="discussion-door-toggle" type="button" data-discussion-door-toggle aria-expanded="false">
        <span>باب حساب النهايات باستعمال العدد المشتق</span>
        <small>افتح قواعد النهايات</small>
      </button>
      <div class="discussion-door-body" data-discussion-door-body hidden>
        <section class="unified-door-section">
          <header class="unified-door-head"><span>الفكرة الأساسية</span><strong>حوّل النهاية إلى عدد مشتق</strong></header>
          <div class="method-box">
            <strong>القانون المفتاح:</strong>
            <p>إذا كانت <span class="math">f</span> قابلة للاشتقاق عند <span class="math">a</span>، فإن:</p>
            <div class="math-equation">lim(x→a) (f(x)-f(a))/(x-a)=f'(a)</div>
            <p>إذن كل نهاية تشبه خارج فرقين يمكن تحويلها إلى مشتقة دالة مناسبة عند عدد مناسب.</p>
          </div>
          <div class="graph-transform-grid derivative-limits-grid">
            <div class="property-box"><strong>الشكل المباشر</strong><p><span class="math">lim(x→a)(f(x)-f(a))/(x-a)=f'(a)</span>.</p></div>
            <div class="property-box"><strong>تغيير المتغير</strong><p>إذا ظهرت <span class="math">h→0</span> نستعمل <span class="math">f(a+h)-f(a)</span> فوق <span class="math">h</span>.</p></div>
            <div class="property-box"><strong>عامل ثابت</strong><p>إذا كان المقام <span class="math">k(x-a)</span> فالنتيجة <span class="math">f'(a)/k</span> بعد ضبط البسط.</p></div>
            <div class="property-box"><strong>اختيار الدالة</strong><p>نبحث عن الدالة التي مشتقتها معروفة: <span class="math">ln</span>، <span class="math">exp</span>، <span class="math">sin</span>، <span class="math">sqrt</span> أو دالة مركبة.</p></div>
            <div class="property-box"><strong>التركيب</strong><p>إذا كانت النهاية مثل <span class="math">φ(x)→a</span>، نحولها إلى <span class="math">(f(φ(x))-f(a))/(φ(x)-a)</span>.</p></div>
            <div class="property-box"><strong>تنبيه</strong><p>لا نستعمل العدد المشتق إلا بعد التأكد من أن النهاية تمثل فعلا معدل تغير حول نفس النقطة.</p></div>
          </div>
        </section>
        <section class="unified-door-section">
          <header class="unified-door-head"><span>أمثلة سريعة</span><strong>من النهاية إلى المشتقة</strong></header>
          <article class="training-exercise derivative-limits-examples">
            <h4>مثال 1</h4>
            <div class="math-equation">lim(x→1) (ln(x)-ln(1))/(x-1)=1</div>
            <p>لأنها تساوي مشتقة <span class="math">ln(x)</span> عند <span class="math">1</span>.</p>
            <h4>مثال 2</h4>
            <div class="math-equation">lim(h→0) (e^{2+h}-e²)/h=e²</div>
            <p>لأنها مشتقة <span class="math">e^x</span> عند <span class="math">2</span>.</p>
            <h4>مثال 3</h4>
            <div class="math-equation">lim(x→0) (sqrt(1+x)-1)/x=1/2</div>
            <p>لأنها مشتقة <span class="math">sqrt(t)</span> عند <span class="math">t=1</span>.</p>
          </article>
        </section>
        <section class="unified-door-section">
          <header class="unified-door-head"><span>خطة الحل</span><strong>كيف أتعرف على العدد المشتق؟</strong></header>
          <ol class="solution-list derivative-limits-steps">
            <li>أحدد النقطة التي يقترب منها المتغير: <span class="math">x→a</span> أو <span class="math">h→0</span>.</li>
            <li>أبحث عن بسط على شكل فرق: <span class="math">f(x)-f(a)</span> أو <span class="math">f(a+h)-f(a)</span>.</li>
            <li>أقارن المقام مع فرق المتغير: <span class="math">x-a</span> أو <span class="math">h</span>.</li>
            <li>أستخرج العوامل الثابتة خارج النهاية.</li>
            <li>أكتب النتيجة مباشرة بدلالة <span class="math">f'(a)</span>.</li>
          </ol>
        </section>
        <section class="unified-door-section">
          <header class="unified-door-head"><span>التدريب الأول</span><strong>نهاية أسية باستعمال العدد المشتق</strong></header>
          <article class="training-exercise derivative-limits-first-exercise">
            <p>احسب النهاية التالية باستعمال العدد المشتق:</p>
            <div class="math-equation">lim(x→0) (e^{3x}-1)/x</div>
            <section class="training-solution solution-toggle-door is-collapsed" data-discussion-door>
              <button class="solution-detail-toggle" type="button" data-discussion-door-toggle aria-expanded="false"><span>الحل المفصل</span><small>افتح الحل</small></button>
              <div class="training-solution-body" data-discussion-door-body hidden>
                <article class="solution-step-card">
                  <h5>اختيار الدالة</h5>
                  <p>نستعمل الدالة <span class="math">f(t)=e^t</span>، وهي قابلة للاشتقاق عند <span class="math">0</span>، ولدينا:</p>
                  <div class="math-equation">f'(0)=e^0=1</div>
                </article>
                <article class="solution-step-card">
                  <h5>تغيير المتغير</h5>
                  <p>نضع <span class="math">t=3x</span>. عندما <span class="math">x→0</span> فإن <span class="math">t→0</span>، كما أن <span class="math">x=t/3</span>.</p>
                  <div class="math-equation">(e^{3x}-1)/x = (e^t-1)/(t/3)</div>
                  <div class="math-equation">(e^{3x}-1)/x = 3 · (e^t-e^0)/(t-0)</div>
                </article>
                <article class="solution-step-card">
                  <h5>استعمال العدد المشتق</h5>
                  <div class="math-equation">lim(t→0) (e^t-e^0)/(t-0)=f'(0)=1</div>
                  <p>إذن:</p>
                  <div class="math-equation">lim(x→0) (e^{3x}-1)/x = 3</div>
                </article>
              </div>
            </section>
          </article>
        </section>
        <section class="unified-door-section">
          <header class="unified-door-head"><span>التدريب الثاني</span><strong>نهاية لوغارتمية عند e</strong></header>
          <article class="training-exercise derivative-limits-second-exercise">
            <p>أوجد قيمة النهاية التالية باستعمال العدد المشتق:</p>
            <div class="math-equation">lim(x→e) (ln(x)-1)/(x-e)</div>
            <section class="training-solution solution-toggle-door is-collapsed" data-discussion-door>
              <button class="solution-detail-toggle" type="button" data-discussion-door-toggle aria-expanded="false"><span>الحل المفصل</span><small>افتح الحل</small></button>
              <div class="training-solution-body" data-discussion-door-body hidden>
                <article class="solution-step-card">
                  <h5>التعرف على شكل العدد المشتق</h5>
                  <p>نأخذ الدالة <span class="math">f(x)=ln(x)</span>. عند <span class="math">a=e</span> لدينا:</p>
                  <div class="math-equation">f(e)=ln(e)=1</div>
                  <p>إذن البسط يكتب:</p>
                  <div class="math-equation">ln(x)-1=f(x)-f(e)</div>
                </article>
                <article class="solution-step-card">
                  <h5>استعمال تعريف المشتقة</h5>
                  <div class="math-equation">lim(x→e) (ln(x)-1)/(x-e)=lim(x→e) (f(x)-f(e))/(x-e)</div>
                  <div class="math-equation">= f'(e)</div>
                  <p>وبما أن:</p>
                  <div class="math-equation">f'(x)=1/x</div>
                  <p>فإن:</p>
                  <div class="math-equation">f'(e)=1/e</div>
                </article>
                <article class="solution-step-card">
                  <h5>النتيجة</h5>
                  <div class="math-equation">lim(x→e) (ln(x)-1)/(x-e)=1/e</div>
                </article>
              </div>
            </section>
          </article>
        </section>
        <section class="unified-door-section">
          <header class="unified-door-head"><span>التدريب الثالث</span><strong>نهاية لوغارتمية عند الصفر</strong></header>
          <article class="training-exercise derivative-limits-third-exercise">
            <p>باستخدام العدد المشتق، احسب:</p>
            <div class="math-equation">lim(x→0) ln(x+1)/x</div>
            <section class="training-solution solution-toggle-door is-collapsed" data-discussion-door>
              <button class="solution-detail-toggle" type="button" data-discussion-door-toggle aria-expanded="false"><span>الحل المفصل</span><small>افتح الحل</small></button>
              <div class="training-solution-body" data-discussion-door-body hidden>
                <article class="solution-step-card">
                  <h5>الطريقة الأولى: اختيار الدالة المركبة</h5>
                  <p>نأخذ الدالة <span class="math">f(x)=ln(1+x)</span>. هذه الدالة قابلة للاشتقاق عند <span class="math">0</span>، ولدينا:</p>
                  <div class="math-equation">f(0)=ln(1)=0</div>
                  <p>إذن:</p>
                  <div class="math-equation">ln(1+x)/x = (f(x)-f(0))/(x-0)</div>
                </article>
                <article class="solution-step-card">
                  <h5>استعمال العدد المشتق</h5>
                  <div class="math-equation">lim(x→0) (f(x)-f(0))/(x-0)=f'(0)</div>
                  <p>نحسب المشتقة:</p>
                  <div class="math-equation">f'(x)=1/(1+x)</div>
                  <div class="math-equation">f'(0)=1</div>
                  <p>إذن:</p>
                  <div class="math-equation">lim(x→0) ln(1+x)/x = 1</div>
                </article>
                <article class="solution-step-card">
                  <h5>ملاحظة بطريقة ثانية</h5>
                  <p>يمكن أيضا وضع <span class="math">t=1+x</span>، فنحصل على <span class="math">t→1</span> و <span class="math">x=t-1</span>:</p>
                  <div class="math-equation">lim(x→0) ln(1+x)/x = lim(t→1) (ln(t)-ln(1))/(t-1)=1</div>
                </article>
              </div>
            </section>
          </article>
        </section>
        <section class="unified-door-section">
          <header class="unified-door-head"><span>التدريب الرابع</span><strong>نهاية أسية عند 1</strong></header>
          <article class="training-exercise derivative-limits-fourth-exercise">
            <p>ما هي نتيجة النهاية التالية؟</p>
            <div class="math-equation">lim(x→1) (e^x-e)/(x-1)</div>
            <section class="training-solution solution-toggle-door is-collapsed" data-discussion-door>
              <button class="solution-detail-toggle" type="button" data-discussion-door-toggle aria-expanded="false"><span>الحل المفصل</span><small>افتح الحل</small></button>
              <div class="training-solution-body" data-discussion-door-body hidden>
                <article class="solution-step-card">
                  <h5>التعرف على شكل العدد المشتق</h5>
                  <p>نأخذ الدالة <span class="math">f(x)=e^x</span>. عند <span class="math">a=1</span> نجد:</p>
                  <div class="math-equation">f(1)=e^1=e</div>
                  <p>إذن البسط يكتب:</p>
                  <div class="math-equation">e^x-e=f(x)-f(1)</div>
                </article>
                <article class="solution-step-card">
                  <h5>استعمال تعريف العدد المشتق</h5>
                  <div class="math-equation">lim(x→1) (e^x-e)/(x-1)=lim(x→1) (f(x)-f(1))/(x-1)</div>
                  <div class="math-equation">= f'(1)</div>
                  <p>وبما أن مشتقة الدالة الأسية هي نفسها:</p>
                  <div class="math-equation">f'(x)=e^x</div>
                  <div class="math-equation">f'(1)=e</div>
                </article>
                <article class="solution-step-card">
                  <h5>النتيجة</h5>
                  <div class="math-equation">lim(x→1) (e^x-e)/(x-1)=e</div>
                </article>
              </div>
            </section>
          </article>
        </section>
        <section class="unified-door-section">
          <header class="unified-door-head"><span>التدريب الخامس</span><strong>النهاية الأساسية للدالة الأسية</strong></header>
          <article class="training-exercise derivative-limits-fifth-exercise">
            <p>احسب النهاية التالية باستعمال العدد المشتق:</p>
            <div class="math-equation">lim(x→0) (e^x-1)/x</div>
            <section class="training-solution solution-toggle-door is-collapsed" data-discussion-door>
              <button class="solution-detail-toggle" type="button" data-discussion-door-toggle aria-expanded="false"><span>الحل المفصل</span><small>افتح الحل</small></button>
              <div class="training-solution-body" data-discussion-door-body hidden>
                <article class="solution-step-card">
                  <h5>التعرف على شكل العدد المشتق</h5>
                  <p>نأخذ الدالة <span class="math">f(x)=e^x</span>. عند <span class="math">0</span> لدينا:</p>
                  <div class="math-equation">f(0)=e^0=1</div>
                  <p>إذن:</p>
                  <div class="math-equation">e^x-1=f(x)-f(0)</div>
                </article>
                <article class="solution-step-card">
                  <h5>تطبيق التعريف مباشرة</h5>
                  <div class="math-equation">lim(x→0) (e^x-1)/x = lim(x→0) (f(x)-f(0))/(x-0)</div>
                  <div class="math-equation">= f'(0)</div>
                  <p>وبما أن:</p>
                  <div class="math-equation">f'(x)=e^x</div>
                  <div class="math-equation">f'(0)=e^0=1</div>
                </article>
                <article class="solution-step-card">
                  <h5>النتيجة</h5>
                  <div class="math-equation">lim(x→0) (e^x-1)/x = 1</div>
                </article>
              </div>
            </section>
          </article>
        </section>
        <section class="unified-door-section">
          <header class="unified-door-head"><span>التدريب السادس</span><strong>نهاية لوغارتمية عند 2</strong></header>
          <article class="training-exercise derivative-limits-sixth-exercise">
            <p>أوجد حل النهاية التالية باستعمال العدد المشتق:</p>
            <div class="math-equation">lim(x→2) ln(x-1)/(x-2)</div>
            <section class="training-solution solution-toggle-door is-collapsed" data-discussion-door>
              <button class="solution-detail-toggle" type="button" data-discussion-door-toggle aria-expanded="false"><span>الحل المفصل</span><small>افتح الحل</small></button>
              <div class="training-solution-body" data-discussion-door-body hidden>
                <article class="solution-step-card">
                  <h5>اختيار الدالة المناسبة</h5>
                  <p>نأخذ الدالة <span class="math">f(x)=ln(x-1)</span>، وهي معرفة وقابلة للاشتقاق بجوار <span class="math">2</span>.</p>
                  <div class="math-equation">f(2)=ln(2-1)=ln(1)=0</div>
                  <p>لذلك:</p>
                  <div class="math-equation">ln(x-1)=f(x)-f(2)</div>
                </article>
                <article class="solution-step-card">
                  <h5>تحويل النهاية إلى عدد مشتق</h5>
                  <div class="math-equation">lim(x→2) ln(x-1)/(x-2)=lim(x→2) (f(x)-f(2))/(x-2)</div>
                  <div class="math-equation">= f'(2)</div>
                  <p>نحسب المشتقة:</p>
                  <div class="math-equation">f'(x)=1/(x-1)</div>
                  <div class="math-equation">f'(2)=1/(2-1)=1</div>
                </article>
                <article class="solution-step-card">
                  <h5>النتيجة</h5>
                  <div class="math-equation">lim(x→2) ln(x-1)/(x-2)=1</div>
                </article>
              </div>
            </section>
          </article>
        </section>
        <section class="unified-door-section">
          <header class="unified-door-head"><span>التدريب السابع</span><strong>نهاية لوغارتمية بمعامل داخلي</strong></header>
          <article class="training-exercise derivative-limits-seventh-exercise">
            <p>باستعمال العدد المشتق، احسب:</p>
            <div class="math-equation">lim(x→0) ln(1+5x)/x</div>
            <section class="training-solution solution-toggle-door is-collapsed" data-discussion-door>
              <button class="solution-detail-toggle" type="button" data-discussion-door-toggle aria-expanded="false"><span>الحل المفصل</span><small>افتح الحل</small></button>
              <div class="training-solution-body" data-discussion-door-body hidden>
                <article class="solution-step-card">
                  <h5>اختيار الدالة</h5>
                  <p>نأخذ الدالة <span class="math">f(x)=ln(1+5x)</span>. هذه الدالة قابلة للاشتقاق عند <span class="math">0</span>، ولدينا:</p>
                  <div class="math-equation">f(0)=ln(1)=0</div>
                  <p>إذن:</p>
                  <div class="math-equation">ln(1+5x)/x = (f(x)-f(0))/(x-0)</div>
                </article>
                <article class="solution-step-card">
                  <h5>استعمال العدد المشتق</h5>
                  <div class="math-equation">lim(x→0) ln(1+5x)/x = f'(0)</div>
                  <p>نحسب مشتقة الدالة المركبة:</p>
                  <div class="math-equation">f'(x)=5/(1+5x)</div>
                  <div class="math-equation">f'(0)=5</div>
                </article>
                <article class="solution-step-card">
                  <h5>النتيجة</h5>
                  <div class="math-equation">lim(x→0) ln(1+5x)/x = 5</div>
                </article>
              </div>
            </section>
          </article>
        </section>
        <section class="unified-door-section">
          <header class="unified-door-head"><span>التدريب الثامن</span><strong>جداء دالتين وعدد مشتق</strong></header>
          <article class="training-exercise derivative-limits-eighth-exercise">
            <p>احسب النهاية التالية معتمدا على تعريف المشتقة لجداء دالتين:</p>
            <div class="math-equation">lim(x→1) x ln(x)/(x-1)</div>
            <section class="training-solution solution-toggle-door is-collapsed" data-discussion-door>
              <button class="solution-detail-toggle" type="button" data-discussion-door-toggle aria-expanded="false"><span>الحل المفصل</span><small>افتح الحل</small></button>
              <div class="training-solution-body" data-discussion-door-body hidden>
                <article class="solution-step-card">
                  <h5>تفكيك النهاية إلى جداء</h5>
                  <p>نكتب النهاية على شكل جداء عاملين:</p>
                  <div class="math-equation">x ln(x)/(x-1) = x · (ln(x)-ln(1))/(x-1)</div>
                  <p>عندما <span class="math">x→1</span> فإن العامل الأول يقترب من:</p>
                  <div class="math-equation">lim(x→1) x = 1</div>
                </article>
                <article class="solution-step-card">
                  <h5>استعمال العدد المشتق</h5>
                  <p>نأخذ الدالة <span class="math">f(x)=ln(x)</span>. عند <span class="math">1</span> لدينا:</p>
                  <div class="math-equation">f(1)=ln(1)=0</div>
                  <div class="math-equation">lim(x→1) (ln(x)-ln(1))/(x-1)=f'(1)</div>
                  <p>وبما أن:</p>
                  <div class="math-equation">f'(x)=1/x</div>
                  <div class="math-equation">f'(1)=1</div>
                </article>
                <article class="solution-step-card">
                  <h5>النتيجة</h5>
                  <div class="math-equation">lim(x→1) x ln(x)/(x-1)=1 · 1 = 1</div>
                </article>
              </div>
            </section>
          </article>
        </section>
        <section class="unified-door-section">
          <header class="unified-door-head"><span>التدريب التاسع</span><strong>نهاية أسية مركبة عند 1</strong></header>
          <article class="training-exercise derivative-limits-ninth-exercise">
            <p>احسب النهاية التالية باستعمال العدد المشتق:</p>
            <div class="math-equation">lim(x→1) (e^{x^3-1}-1)/(x-1)</div>
            <section class="training-solution solution-toggle-door is-collapsed" data-discussion-door>
              <button class="solution-detail-toggle" type="button" data-discussion-door-toggle aria-expanded="false"><span>الحل المفصل</span><small>افتح الحل</small></button>
              <div class="training-solution-body" data-discussion-door-body hidden>
                <article class="solution-step-card">
                  <h5>تفكيك ذكي للنهاية</h5>
                  <p>نضع <span class="math">u=x^3-1</span>. عندما <span class="math">x→1</span> فإن <span class="math">u→0</span>.</p>
                  <div class="math-equation">(e^{x^3-1}-1)/(x-1) = ((e^u-1)/u) · ((x^3-1)/(x-1))</div>
                </article>
                <article class="solution-step-card">
                  <h5>الجزء الأول: عدد مشتق للدالة الأسية</h5>
                  <p>نستعمل الدالة <span class="math">f(u)=e^u</span> عند <span class="math">0</span>:</p>
                  <div class="math-equation">lim(u→0) (e^u-1)/u = f'(0)=1</div>
                </article>
                <article class="solution-step-card">
                  <h5>الجزء الثاني: عدد مشتق لدالة القوة</h5>
                  <p>لدينا:</p>
                  <div class="math-equation">lim(x→1) (x^3-1)/(x-1)=lim(x→1) (x^3-1^3)/(x-1)</div>
                  <div class="math-equation">= (x^3)' عند 1 = 3</div>
                </article>
                <article class="solution-step-card">
                  <h5>النتيجة</h5>
                  <div class="math-equation">lim(x→1) (e^{x^3-1}-1)/(x-1)=1 · 3 = 3</div>
                </article>
              </div>
            </section>
          </article>
        </section>
        <section class="unified-door-section">
          <header class="unified-door-head"><span>التدريب العاشر</span><strong>نهاية أسية بكسر داخل الأس</strong></header>
          <article class="training-exercise derivative-limits-tenth-exercise">
            <p>احسب النهاية التالية باستعمال العدد المشتق:</p>
            <div class="math-equation">lim(x→0) (e^{2x/(x+1)}-1)/x</div>
            <section class="training-solution solution-toggle-door is-collapsed" data-discussion-door>
              <button class="solution-detail-toggle" type="button" data-discussion-door-toggle aria-expanded="false"><span>الحل المفصل</span><small>افتح الحل</small></button>
              <div class="training-solution-body" data-discussion-door-body hidden>
                <article class="solution-step-card">
                  <h5>اختيار المتغير الداخلي</h5>
                  <p>نضع <span class="math">u=2x/(x+1)</span>. عندما <span class="math">x→0</span> فإن <span class="math">u→0</span>.</p>
                  <div class="math-equation">(e^{2x/(x+1)}-1)/x = ((e^u-1)/u) · (u/x)</div>
                </article>
                <article class="solution-step-card">
                  <h5>النهاية الأسية الأساسية</h5>
                  <p>باستعمال العدد المشتق للدالة <span class="math">f(u)=e^u</span> عند <span class="math">0</span>:</p>
                  <div class="math-equation">lim(u→0) (e^u-1)/u = f'(0)=1</div>
                </article>
                <article class="solution-step-card">
                  <h5>حساب العامل الباقي</h5>
                  <div class="math-equation">u/x = (2x/(x+1))/x = 2/(x+1)</div>
                  <div class="math-equation">lim(x→0) 2/(x+1)=2</div>
                </article>
                <article class="solution-step-card">
                  <h5>النتيجة</h5>
                  <div class="math-equation">lim(x→0) (e^{2x/(x+1)}-1)/x = 1 · 2 = 2</div>
                </article>
              </div>
            </section>
          </article>
        </section>
        <section class="unified-door-section">
          <header class="unified-door-head"><span>التدريب الحادي عشر</span><strong>نهاية لوغارتمية مع الجذر</strong></header>
          <article class="training-exercise derivative-limits-eleventh-exercise">
            <p>احسب النهاية التالية باستعمال العدد المشتق:</p>
            <div class="math-equation">lim(x→4) ln(√x - 1)/(x-4)</div>
            <section class="training-solution solution-toggle-door is-collapsed" data-discussion-door>
              <button class="solution-detail-toggle" type="button" data-discussion-door-toggle aria-expanded="false"><span>الحل المفصل</span><small>افتح الحل</small></button>
              <div class="training-solution-body" data-discussion-door-body hidden>
                <article class="solution-step-card">
                  <h5>اختيار الدالة</h5>
                  <p>نأخذ الدالة <span class="math">f(x)=ln(√x - 1)</span>. عند <span class="math">4</span> نجد:</p>
                  <div class="math-equation">f(4)=ln(√4 - 1)=ln(1)=0</div>
                  <p>إذن:</p>
                  <div class="math-equation">ln(√x - 1)=f(x)-f(4)</div>
                </article>
                <article class="solution-step-card">
                  <h5>تحويل النهاية إلى عدد مشتق</h5>
                  <div class="math-equation">lim(x→4) ln(√x - 1)/(x-4)=lim(x→4) (f(x)-f(4))/(x-4)</div>
                  <div class="math-equation">= f'(4)</div>
                </article>
                <article class="solution-step-card">
                  <h5>حساب المشتقة</h5>
                  <p>بما أن <span class="math">f(x)=ln(√x - 1)</span>، فإن:</p>
                  <div class="math-equation">f'(x)=((√x - 1)')/(√x - 1)</div>
                  <div class="math-equation">(√x - 1)' = 1/(2√x)</div>
                  <div class="math-equation">f'(x)=1/(2√x(√x - 1))</div>
                  <div class="math-equation">f'(4)=1/(2·2·1)=1/4</div>
                </article>
                <article class="solution-step-card">
                  <h5>النتيجة</h5>
                  <div class="math-equation">lim(x→4) ln(√x - 1)/(x-4)=1/4</div>
                </article>
              </div>
            </section>
          </article>
        </section>
      </div>
    </article>
  `;
}
function renderFamousLimitsDoor() {
  return `
    <article class="lesson-block discussion-door famous-limits-door is-collapsed" data-discussion-door>
      <button class="discussion-door-toggle" type="button" data-discussion-door-toggle aria-expanded="false">
        <span>باب حساب النهايات باستعمال النهايات الشهيرة</span>
        <small>افتح قواعد الأسية واللوغارتم</small>
      </button>
      <div class="discussion-door-body" data-discussion-door-body hidden>
        <section class="unified-door-section famous-limits-intro">
          <header class="unified-door-head"><span>الفكرة العامة</span><strong>النهايات البسيطة المعروفة فقط</strong></header>
          <div class="method-box"><strong>قاعدة العمل:</strong><p>هذا الباب مخصص لحفظ واستعمال النهايات المباشرة للدالة الأسية والدالة اللوغارتمية فقط. لا توجد هنا دوال مركبة ولا نسب بمعاملات؛ تلك نتركها للتدريبات.</p></div>
          <div class="property-box"><strong>متى أستعملها؟</strong><p>استعمل هذه القواعد عندما تظهر لك عبارة أسية أو لوغارتمية بسيطة عند <span class="math">0</span> أو <span class="math">+∞</span> أو <span class="math">-∞</span>، خاصة في المقارنات بين <span class="math">ln(x)</span> و <span class="math">x</span> و <span class="math">e^x</span>.</p></div>
        </section>
        <section class="unified-door-section">
          <header class="unified-door-head"><span>القواعد الأساسية</span><strong>نهايات بسيطة للدوال الأسية واللوغارتمية</strong></header>
          <div class="famous-limits-grid famous-limits-simple-grid">
            <article class="famous-limit-card"><span>لوغارتمية</span><div class="math-equation">lim(x→0+) ln(x) = -∞</div><details class="famous-limit-explain"><summary>كيف جاءت؟</summary><p>بما أن <span class="math">ln(x)</span> هي الدالة العكسية لـ <span class="math">e^x</span>، ولدينا <span class="math">lim(y→-∞) e^y = 0^+</span>، فإنه بوضع <span class="math">x = e^y</span> نجد أن <span class="math">y = ln(x)</span>. إذن، عندما يؤول <span class="math">x</span> إلى <span class="math">0^+</span>، يجب أن يؤول <span class="math">y</span> إلى <span class="math">-∞</span>.</p></details></article>
            <article class="famous-limit-card"><span>لوغارتمية</span><div class="math-equation">lim(x→+∞) ln(x) = +∞</div><details class="famous-limit-explain"><summary>كيف جاءت؟</summary><p>من خواص الدالة الأسية نعلم أن <span class="math"><span class="lim"><span>lim</span><span>y→+∞</span></span> e^y = +∞</span>. بوضع <span class="math">x = e^y</span> نجد <span class="math">y = ln(x)</span>. ولأن الدالتين متزايدتان تماماً، فإنه عندما يؤول <span class="math">x</span> إلى <span class="math">+∞</span>، فإن <span class="math">y</span> يؤول أيضاً إلى <span class="math">+∞</span>.</p></details></article>
            <article class="famous-limit-card"><span>أسية</span><div class="math-equation">lim(x→-∞) e^x = 0</div><details class="famous-limit-explain"><summary>كيف جاءت؟</summary><p>بوضع التبديل <span class="math">X = -x</span>، عندما يؤول <span class="math">x</span> إلى <span class="math">-∞</span> فإن <span class="math">X</span> يؤول إلى <span class="math">+∞</span>. تصبح النهاية <span class="math"><span class="lim"><span>lim</span><span>X→+∞</span></span> e^{-X} = <span class="lim"><span>lim</span><span>X→+∞</span></span> 1/e^X</span>. وبما أن المقام يؤول إلى <span class="math">+∞</span>، فإن النهاية هي 0.</p></details></article>
            <article class="famous-limit-card"><span>أسية</span><div class="math-equation">lim(x→+∞) e^x = +∞</div><details class="famous-limit-explain"><summary>كيف جاءت؟</summary><p>باستعمال متباينة برنولي أو دراسة الدالة <span class="math">f(x) = e^x - x</span>، نثبت أن <span class="math">e^x &gt; x</span> من أجل كل <span class="math">x &gt; 0</span>. وبما أن <span class="math"><span class="lim"><span>lim</span><span>x→+∞</span></span> x = +∞</span>، فإنه بالضرورة <span class="math"><span class="lim"><span>lim</span><span>x→+∞</span></span> e^x = +∞</span> حسب مبرهنة المقارنة.</p></details></article>
            <article class="famous-limit-card"><span>مقارنة</span><div class="math-equation">lim(x→+∞) ln(x)/x = 0</div><details class="famous-limit-explain"><summary>كيف جاءت؟</summary><p>تزايد مقارن: بوضع <span class="math">x = e^y</span>، عندما <span class="math">x → +∞</span> فإن <span class="math">y → +∞</span>. النهاية تصبح <span class="math">lim(y→+∞) y/e^y</span>. وبما أن <span class="math">lim(y→+∞) e^y/y = +∞</span>، فإن مقلوبها يؤول إلى 0.</p></details></article>
            <article class="famous-limit-card"><span>مقارنة</span><div class="math-equation">lim(x→+∞) x/e^x = 0</div><details class="famous-limit-explain"><summary>كيف جاءت؟</summary><p>نكتب الكسر على الشكل <span class="math">x/e^x = 1 / (e^x/x)</span>. نعلم من نهايات التزايد المقارن أن <span class="math"><span class="lim"><span>lim</span><span>x→+∞</span></span> e^x/x = +∞</span>، وبالتالي مقلوبها يؤول إلى 0.</p></details></article>
            <article class="famous-limit-card"><span>مقارنة</span><div class="math-equation">lim(x→+∞) ln(x)/e^x = 0</div><details class="famous-limit-explain"><summary>كيف جاءت؟</summary><p>يمكننا تفكيك النهاية إلى جداء نهايتين شهيرتين: <span class="math">ln(x)/e^x = (ln(x)/x) × (x/e^x)</span>. وبما أن كلا النهايتين تؤولان إلى 0 عندما <span class="math">x → +∞</span>، فإن جداءهما يؤول حتماً إلى <span class="math">0 × 0 = 0</span>.</p></details></article>
            <article class="famous-limit-card"><span>مقارنة</span><div class="math-equation">lim(x→-∞) x e^x = 0</div><details class="famous-limit-explain"><summary>كيف جاءت؟</summary><p>بوضع التبديل <span class="math">X = -x</span>، عندما <span class="math">x → -∞</span> فإن <span class="math">X → +∞</span>. نعوض لنجد: <span class="math">x e^x = -X e^{-X} = -X/e^X</span>. وبما أننا برهنا سابقا أن <span class="math"><span class="lim"><span>lim</span><span>X→+∞</span></span> X/e^X = 0</span>، فإن النهاية هي 0.</p></details></article>
            <article class="famous-limit-card"><span>لوغارتم عند الصفر</span><div class="math-equation">lim(x→0+) x ln(x)=0</div><details class="famous-limit-explain"><summary>كيف جاءت؟</summary><p>نضع <span class="math">x=1/t</span> حيث <span class="math">t→+∞</span>. تصبح العبارة <span class="math">x ln(x)=-(ln(t))/t</span>، وهذه تؤول إلى <span class="math">0</span>.</p></details></article>
          </div>
        </section>
        <section class="unified-door-section">
          <header class="unified-door-head"><span>قراءات مباشرة</span><strong>أمثلة بسيطة جدا</strong></header>
          <div class="famous-limits-examples">
            <article class="solution-step-card">
              <h5>مثال 1</h5>
              <div class="math-equation">lim(x→+∞) (ln(x)+5)/x</div>
              <div class="math-equation">ln(x)/x→0 و 5/x→0</div>
              <div class="math-equation">النتيجة = 0</div>
            </article>
            <article class="solution-step-card">
              <h5>مثال 2</h5>
              <div class="math-equation">lim(x→+∞) (x+1)/e^x</div>
              <div class="math-equation">x/e^x→0 و 1/e^x→0</div>
              <div class="math-equation">النتيجة = 0</div>
            </article>
            <article class="solution-step-card">
              <h5>مثال 3</h5>
              <div class="math-equation">lim(x→0+) x ln(x)</div>
              <div class="math-equation">هذه قاعدة شهيرة مباشرة</div>
              <div class="math-equation">النتيجة = 0</div>
            </article>
          </div>
        </section>
        <section class="unified-door-section">
          <header class="unified-door-head"><span>التدريب الأول</span><strong>نهايات باستعمال المقارنة مع اللوغارتم</strong></header>
          <article class="training-exercise famous-limits-first-exercise">
            <p>احسب النهايات التالية:</p>
            <ol class="solution-list famous-limits-training-list">
              <li><span class="math">lim(x→+∞) (2x² - 3x + 1 - ln(x))</span></li>
              <li><span class="math">lim(x→-∞) (-x + ln(x² - x + 2))</span></li>
              <li><span class="math">lim(x→+∞) (3x² - 1 - ln(x³ + 2x² - 1))</span></li>
              <li><span class="math">lim(x→1-) (x³ + 2x - 1 + ln(1 - x³))</span></li>
            </ol>
            <section class="training-solution solution-toggle-door is-collapsed" data-discussion-door>
              <button class="solution-detail-toggle" type="button" data-discussion-door-toggle aria-expanded="false"><span>الحل المفصل</span><small>افتح الحل</small></button>
              <div class="training-solution-body" data-discussion-door-body hidden>
                <article class="solution-step-card">
                  <h5>قاعدة نحتاجها في هذا التدريب</h5>
                  <p>عند <span class="math">+∞</span> اللوغارتم أبطأ من كثيرات الحدود. لذلك إذا اجتمع <span class="math">ln(x)</span> مع حد من الدرجة الثانية أو الثالثة، فإن حد كثير الحدود هو الذي يحدد النهاية.</p>
                  <div class="math-equation">lim(x→+∞) ln(x)/x = 0</div>
                </article>
                <article class="solution-step-card">
                  <h5>1. النهاية الأولى</h5>
                  <p>نكتب العبارة بإخراج <span class="math">x²</span> عاملا مشتركا:</p>
                  <div class="math-equation">2x² - 3x + 1 - ln(x) = x²(2 - 3/x + 1/x² - ln(x)/x²)</div>
                  <p>عند <span class="math">+∞</span> نجد <span class="math">ln(x)/x²→0</span>، إذن القوس يؤول إلى <span class="math">2</span> و <span class="math">x²→+∞</span>.</p>
                  <div class="math-equation">lim(x→+∞) (2x² - 3x + 1 - ln(x)) = +∞</div>
                </article>
                <article class="solution-step-card">
                  <h5>2. النهاية الثانية</h5>
                  <p>عندما <span class="math">x→-∞</span> فإن <span class="math">-x→+∞</span>. كذلك <span class="math">x² - x + 2→+∞</span>، ومنه <span class="math">ln(x² - x + 2)→+∞</span>.</p>
                  <div class="math-equation">lim(x→-∞) (-x + ln(x² - x + 2)) = +∞</div>
                </article>
                <article class="solution-step-card">
                  <h5>3. النهاية الثالثة</h5>
                  <p>نريد أولا أن نبرهن بدقة أن اللوغارتم مهمل أمام <span class="math">x²</span>:</p>
                  <div class="math-equation">lim(x→+∞) ln(x³ + 2x² - 1)/x² = 0</div>
                  <p>من أجل <span class="math">x≥2</span> لدينا:</p>
                  <div class="math-equation">0 &lt; x³ + 2x² - 1 ≤ x³ + 2x³ = 3x³ ≤ x⁴</div>
                  <p>وبما أن <span class="math">ln</span> دالة متزايدة، نحصل على:</p>
                  <div class="math-equation">ln(x³ + 2x² - 1) ≤ ln(x⁴)=4ln(x)</div>
                  <p>كما أن <span class="math">ln(x³ + 2x² - 1)&gt;0</span> ابتداء من رتبة معينة، إذن:</p>
                  <div class="math-equation">0 ≤ ln(x³ + 2x² - 1)/x² ≤ 4ln(x)/x²</div>
                  <p>وبما أن <span class="math">ln(x)/x²→0</span>، فإن مبرهنة الحصر تعطي:</p>
                  <div class="math-equation">ln(x³ + 2x² - 1)/x² → 0</div>
                  <div class="famous-limits-alt-proof">
                    <h6>حل ثان باستخراج <span class="math">x³</span> من داخل اللوغارتم</h6>
                    <p>نكتب من أجل <span class="math">x</span> كبير موجب:</p>
                    <div class="math-equation">x³ + 2x² - 1 = x³(1 + 2/x - 1/x³)</div>
                    <p>إذن:</p>
                    <div class="math-equation">ln(x³ + 2x² - 1)=ln(x³)+ln(1 + 2/x - 1/x³)</div>
                    <div class="math-equation">ln(x³ + 2x² - 1)=3ln(x)+ln(1 + 2/x - 1/x³)</div>
                    <p>وعندما <span class="math">x→+∞</span> فإن <span class="math">1 + 2/x - 1/x³→1</span>، وبالتالي:</p>
                    <div class="math-equation">ln(1 + 2/x - 1/x³)→ln(1)=0</div>
                    <p>لذلك:</p>
                    <div class="math-equation">ln(x³ + 2x² - 1)/x² = 3ln(x)/x² + ln(1 + 2/x - 1/x³)/x² → 0</div>
                  </div>
                  <p>الآن نكتب:</p>
                  <div class="math-equation">3x² - 1 - ln(x³ + 2x² - 1)=x²(3 - 1/x² - ln(x³ + 2x² - 1)/x²)</div>
                  <p>القوس يؤول إلى <span class="math">3</span> و <span class="math">x²→+∞</span>، إذن:</p>
                  <div class="math-equation">lim(x→+∞) (3x² - 1 - ln(x³ + 2x² - 1)) = +∞</div>
                </article>
                <article class="solution-step-card">
                  <h5>4. النهاية الرابعة</h5>
                  <p>عندما <span class="math">x→1-</span> يكون <span class="math">1 - x³→0+</span>، لذلك:</p>
                  <div class="math-equation">ln(1 - x³) → -∞</div>
                  <p>أما <span class="math">x³ + 2x - 1</span> فيؤول إلى قيمة منتهية هي <span class="math">2</span>. إذن اللوغارتم هو الذي يحدد النهاية.</p>
                  <div class="math-equation">lim(x→1-) (x³ + 2x - 1 + ln(1 - x³)) = -∞</div>
                </article>
              </div>
            </section>
          </article>
        </section>
        <section class="unified-door-section">
          <header class="unified-door-head"><span>التدريب الثاني</span><strong>نهايات لوغارتمية بسيطة ومتدرجة</strong></header>
          <article class="training-exercise famous-limits-second-exercise">
            <p>احسب النهايات التالية:</p>
            <ol class="solution-list famous-limits-training-list">
              <li><span class="math">lim(x→+∞) x(ln(x+1)-ln(x))</span></li>
              <li><span class="math">lim(x→+∞) (x + ln(x² - x + 2)/(x - 1))</span></li>
              <li><span class="math">lim(x→-∞) (x² - 1 - ln(1 - x³))</span></li>
            </ol>
            <section class="training-solution solution-toggle-door is-collapsed" data-discussion-door>
              <button class="solution-detail-toggle" type="button" data-discussion-door-toggle aria-expanded="false"><span>الحل المفصل</span><small>افتح الحل</small></button>
              <div class="training-solution-body" data-discussion-door-body hidden>
                <article class="solution-step-card">
                  <h5>1. النهاية الأولى</h5>
                  <p>نستعمل خاصية الفرق بين لوغارتمين:</p>
                  <div class="math-equation">ln(x+1)-ln(x)=ln((x+1)/x)=ln(1+1/x)</div>
                  <p>إذن:</p>
                  <div class="math-equation">x(ln(x+1)-ln(x))=x ln(1+1/x)</div>
                  <p>نضع <span class="math">t=1/x</span>. عندما <span class="math">x→+∞</span> فإن <span class="math">t→0+</span> و <span class="math">x=1/t</span>، فنحصل على:</p>
                  <div class="math-equation">x ln(1+1/x)=ln(1+t)/t</div>
                  <p>وهذه النهاية الشهيرة تساوي <span class="math">1</span>.</p>
                  <div class="math-equation">lim(x→+∞) x(ln(x+1)-ln(x)) = 1</div>
                </article>
                <article class="solution-step-card">
                  <h5>2. النهاية الثانية</h5>
                  <p>نبرهن أولا أن الحد اللوغارتمي المقسوم على <span class="math">x-1</span> يؤول إلى <span class="math">0</span>.</p>
                  <p>من أجل <span class="math">x</span> كبير موجب:</p>
                  <div class="math-equation">x² - x + 2 = x²(1 - 1/x + 2/x²)</div>
                  <div class="math-equation">ln(x² - x + 2)=2ln(x)+ln(1 - 1/x + 2/x²)</div>
                  <p>وبما أن <span class="math">ln(1 - 1/x + 2/x²)→ln(1)=0</span>، فإن:</p>
                  <div class="math-equation">ln(x² - x + 2)/(x-1) → 0</div>
                  <p>إذن العبارة تساوي <span class="math">x</span> زائد حد يؤول إلى <span class="math">0</span>، ومنه:</p>
                  <div class="math-equation">lim(x→+∞) (x + ln(x² - x + 2)/(x - 1)) = +∞</div>
                </article>
                <article class="solution-step-card">
                  <h5>3. النهاية الثالثة</h5>
                  <p>عندما <span class="math">x→-∞</span> فإن <span class="math">1-x³→+∞</span>، والعبارة اللوغارتمية معرفة ابتداء من رتبة كافية.</p>
                  <p>نضع <span class="math">u=-x</span>، عندها <span class="math">u→+∞</span> و <span class="math">1-x³=1+u³</span>، فنكتب:</p>
                  <div class="math-equation">ln(1-x³)=ln(1+u³)=ln(u³(1+1/u³))</div>
                  <div class="math-equation">ln(1-x³)=3ln(u)+ln(1+1/u³)</div>
                  <p>إذن <span class="math">ln(1-x³)</span> ينمو مثل لوغارتم، بينما <span class="math">x²=u²</span> ينمو مثل مربع؛ لذلك:</p>
                  <div class="math-equation">ln(1-x³)/x² → 0</div>
                  <p>ثم:</p>
                  <div class="math-equation">x² - 1 - ln(1-x³)=x²(1 - 1/x² - ln(1-x³)/x²)</div>
                  <p>القوس يؤول إلى <span class="math">1</span> و <span class="math">x²→+∞</span>، إذن:</p>
                  <div class="math-equation">lim(x→-∞) (x² - 1 - ln(1 - x³)) = +∞</div>
                </article>
              </div>
            </section>
          </article>
        </section>
        <section class="unified-door-section">
          <header class="unified-door-head"><span>التدريب الثالث</span><strong>نهايات كسور لوغارتمية</strong></header>
          <article class="training-exercise famous-limits-third-exercise">
            <p>احسب النهايات التالية:</p>
            <ol class="solution-list famous-limits-training-list">
              <li><span class="math">lim(x→+∞) ln²(x)/x²</span></li>
              <li><span class="math">lim(x→+∞) (3ln(x)+2)/(x+ln(x))</span></li>
              <li><span class="math">lim(x→+∞) (1+ln²(x))/(-ln(x)-ln²(x))</span></li>
              <li><span class="math">lim(x→0+) (3ln(x)+2)/(x+ln(x))</span></li>
              <li><span class="math">lim(x→+∞) (-x²+ln(x))/(2+ln(x))</span></li>
            </ol>
            <section class="training-solution solution-toggle-door is-collapsed" data-discussion-door>
              <button class="solution-detail-toggle" type="button" data-discussion-door-toggle aria-expanded="false"><span>الحل المفصل</span><small>افتح الحل</small></button>
              <div class="training-solution-body" data-discussion-door-body hidden>
                <article class="solution-step-card">
                  <h5>1. نهاية <span class="math">ln²(x)/x²</span></h5>
                  <p>نكتب الكسر على شكل مربع:</p>
                  <div class="math-equation">ln²(x)/x² = (ln(x)/x)²</div>
                  <p>وبما أن النهاية الشهيرة هي:</p>
                  <div class="math-equation">lim(x→+∞) ln(x)/x = 0</div>
                  <p>فإن مربعها يؤول أيضا إلى <span class="math">0</span>.</p>
                  <div class="math-equation">lim(x→+∞) ln²(x)/x² = 0</div>
                </article>
                <article class="solution-step-card">
                  <h5>3. الكسر الثالث عند <span class="math">+∞</span></h5>
                  <p>نقسم البسط والمقام على <span class="math">x</span> لأن <span class="math">x</span> هو الحد الغالب في المقام:</p>
                  <div class="math-equation">(3ln(x)+2)/(x+ln(x)) = (3ln(x)/x + 2/x)/(1 + ln(x)/x)</div>
                  <p>وبما أن <span class="math">ln(x)/x→0</span> و <span class="math">2/x→0</span>، نحصل على:</p>
                  <div class="math-equation">lim(x→+∞) (3ln(x)+2)/(x+ln(x)) = 0</div>
                </article>
                <article class="solution-step-card">
                  <h5>3. الكسر الثالث عند <span class="math">+∞</span></h5>
                  <p>نضع <span class="math">L=ln(x)</span>. عندما <span class="math">x→+∞</span> فإن <span class="math">L→+∞</span>.</p>
                  <div class="math-equation">(1+ln²(x))/(-ln(x)-ln²(x)) = (1+L²)/(-L-L²)</div>
                  <p>نقسم على <span class="math">L²</span>:</p>
                  <div class="math-equation">(1/L²+1)/(-1/L-1) → 1/(-1)</div>
                  <div class="math-equation">lim(x→+∞) (1+ln²(x))/(-ln(x)-ln²(x)) = -1</div>
                </article>
                <article class="solution-step-card">
                  <h5>4. الكسر الرابع عند <span class="math">0+</span></h5>
                  <p>عندما <span class="math">x→0+</span> فإن <span class="math">ln(x)→-∞</span> بينما <span class="math">x→0</span>. إذن الحد الغالب في البسط والمقام هو <span class="math">ln(x)</span>.</p>
                  <p>نقسم على <span class="math">ln(x)</span>:</p>
                  <div class="math-equation">(3ln(x)+2)/(x+ln(x)) = (3 + 2/ln(x))/(x/ln(x)+1)</div>
                  <p>لدينا <span class="math">2/ln(x)→0</span> و <span class="math">x/ln(x)→0</span>، لذلك:</p>
                  <div class="math-equation">lim(x→0+) (3ln(x)+2)/(x+ln(x)) = 3</div>
                </article>
                <article class="solution-step-card">
                  <h5>5. الكسر الخامس عند <span class="math">+∞</span></h5>
                  <p>في البسط الحد الغالب هو <span class="math">-x²</span>، وفي المقام <span class="math">ln(x)</span>. نكتب:</p>
                  <div class="math-equation">(-x²+ln(x))/(2+ln(x)) = (ln(x)-x²)/(ln(x)+2)</div>
                  <p>وبما أن <span class="math">x²/ln(x)→+∞</span>، فإن البسط يغلب بالسالب والمقام يؤول إلى <span class="math">+∞</span> لكن أبطأ بكثير.</p>
                  <div class="math-equation">(-x²+ln(x))/(2+ln(x)) = (1 - x²/ln(x))/(1 + 2/ln(x))</div>
                  <div class="math-equation">lim(x→+∞) (-x²+ln(x))/(2+ln(x)) = -∞</div>
                </article>
              </div>
            </section>
          </article>        </section>
      </div>
    </article>
  `;
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
              ${renderGraphTransformDoor()}
              ${renderDifferentiabilityDoor()}
              ${renderDerivativeLimitsDoor()}
              ${renderFamousLimitsDoor()}
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
          <h3>${getModuleText(module, "title")}</h3>
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

  document.getElementById("progressSummary").textContent = state.language === "ar" ? `${completed} من ${learningModules.length} محاور مكتملة` : state.language === "fr" ? `${completed} sur ${learningModules.length} modules terminés` : `${completed} of ${learningModules.length} modules completed`;
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
          <p>${getModuleText(module, "summary")}</p>
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
  document.getElementById("continueTitle").textContent = getModuleText(next, "title");
  document.getElementById("continueSummary").textContent = getModuleText(next, "summary");
  document.getElementById("readinessValue").textContent = `${percent}%`;
  document.getElementById("homeLessonCount").textContent = String(learningModules.length);
  document.getElementById("homeProgressPercent").textContent = `${percent}%`;

  if (continueBtn) {
    continueBtn.textContent = isAllComplete ? (state.language === "ar" ? "راجع المسار" : state.language === "fr" ? "Réviser le parcours" : "Review path") : completedIds.has(next.id) ? (state.language === "ar" ? "واصل التعلم" : state.language === "fr" ? "Continuer" : "Continue") : t("home.startNow");
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
    .replace(/√\(([^()]+)\)/g, "\\sqrt{$1}")
    .replace(/⁴√\s*([A-Za-z0-9]+)/g, "\\sqrt[4]{$1}")
    .replace(/√\s*([A-Za-z0-9]+)/g, "\\sqrt{$1}")
    .replace(/\\to/g, "→")
    .replace(/\\infty/g, "∞")
    .replace(/\\lim/g, "lim")
    .replace(/\\times/g, "×")
    .replace(/\\left/g, "")
    .replace(/\\right/g, "")
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

    const foreignFilter = event.target.closest("[data-foreign-filter]");
    if (foreignFilter) {
      const type = foreignFilter.dataset.foreignFilter;
      if (foreignBacFilters[type] !== undefined) {
        foreignBacFilters[type] = foreignFilter.dataset.foreignValue;
        applyForeignBacFilters();
      }
      return;
    }
    const moduleTab = event.target.closest("[data-module-tab]");
    if (moduleTab) {
      state.moduleTab = moduleTab.dataset.moduleTab;
      renderModuleDetail();
      setActiveTabs("#moduleView .lesson-section-tabs", moduleTab, "data-module-tab");
    }

    const exerciseDoor = event.target.closest("[data-exercise-door]");
    if (exerciseDoor) {
      const door = exerciseDoor.dataset.exerciseDoor;
      const root = exerciseDoor.closest("#exercisesView") || document;
      root.querySelectorAll("[data-exercise-door]").forEach((button) => {
        const isActive = button === exerciseDoor;
        button.classList.toggle("active", isActive);
        if (isActive) button.setAttribute("aria-current", "true");
        else button.removeAttribute("aria-current");
      });
      root.querySelectorAll("[data-exercise-panel]").forEach((panel) => {
        panel.classList.toggle("active", panel.dataset.exercisePanel === door);
      });
      return;
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
      if (solutionToggle.closest("#schoolExerciseGrid") || solutionToggle.closest("#declicExerciseGrid") || solutionToggle.closest("#exerciseGrid")) {
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
    if (event.target.matches("[data-foreign-select]")) {
      if (updateForeignBacFilterFromSelect(event.target)) applyForeignBacFilters();
      return;
    }
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

  document.getElementById("languageSelect")?.addEventListener("change", (event) => {
    setLanguage(event.target.value);
  });
  document.getElementById("continueLessonBtn").addEventListener("click", (event) => {
    event.stopPropagation();
    const moduleId = document.getElementById("continueLessonBtn").dataset.openModule || state.progress.lastModuleId || modules[0].id;
    setModule(moduleId);
  });

  document.getElementById("backToModulesBtn").addEventListener("click", () => setView("learn"));

  document.getElementById("resetProgressBtn")?.addEventListener("click", () => {
    if (!confirm(t("ui.confirmReset"))) return;
    state.progress = { completed: [], lastModuleId: modules[0].id };
    saveProgress();
    renderAll();
  });
}

function initSplash() {
  const splash = document.getElementById("splashScreen");
  if (!splash) return;
  let hidden = false;
  const hideSplash = () => {
    if (hidden) return;
    hidden = true;
    splash.classList.add("is-hidden");
    splash.setAttribute("aria-hidden", "true");
    sessionStorage.setItem("aylaSplashSeen", "1");
  };
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hasSeen = sessionStorage.getItem("aylaSplashSeen");
  if (prefersReduced || hasSeen) {
    hideSplash();
    return;
  }
  window.setTimeout(hideSplash, 900);
  window.addEventListener("load", () => window.setTimeout(hideSplash, 400), { once: true });
}

function syncBacFrameLanguage(language = state?.language || getSavedLanguage()) {
  const frame = document.getElementById("bacFrame");
  if (!frame) return;
  const url = new URL("bac-exercises.html?embed=1&v=22", window.location.href);
  url.searchParams.set("lang", language);
  const nextSrc = `${url.pathname.split("/").pop()}?${url.searchParams.toString()}`;
  if (frame.getAttribute("src") !== nextSrc) frame.setAttribute("src", nextSrc);
}

function initIframeResizer() {
  const frame = document.getElementById("bacFrame");
  if (!frame) return;
  syncBacFrameLanguage();
  frame.removeAttribute("height");
  window.addEventListener("message", (event) => {
    if (event.source !== frame.contentWindow) return;
    if (event.data?.type !== "ayla-iframe-height") return;
    const height = Math.ceil(Number(event.data.height));
    if (!Number.isFinite(height) || height < 320) return;
    const nextHeight = `${Math.min(Math.max(height, 620), 1800)}px`;
    frame.style.height = nextHeight;
    frame.parentElement?.style.setProperty("height", nextHeight);
  });
}

function renderAll() {
  renderModules();
  renderModuleDetail();
  renderExercises();
  renderIdeasDoor();
  renderSolved();
  renderBacArchive();
  applyForeignBacFilters();
  renderProgress();
  updateHome();
  applyUiTranslations();
  enhanceMathTypography();
}

initSplash();
bindEvents();
setLanguage(state.language, { render: false });
renderAll();
setViewFromHash();
window.addEventListener("hashchange", setViewFromHash);
initIframeResizer();

















































