import { useMemo, useState } from "react";
import { toast } from "sonner";
import {
  ArrowLeft,
  ArrowUpLeft,
  BookOpen,
  Check,
  ChevronDown,
  Clock3,
  Compass,
  Eye,
  Instagram,
  Layers3,
  Menu,
  Play,
  Search,
  Sparkles,
  Star,
  Trophy,
  Users,
  X,
  Youtube,
} from "lucide-react";

const assetBase = import.meta.env.BASE_URL;
const heroImage = `${assetBase}assets/midad-hero.jpg`;
const workshopImage = `${assetBase}assets/midad-workshop.jpg`;
const exerciseImages = {
  composition: `${assetBase}assets/exercises/composition.jpg`,
  color: `${assetBase}assets/exercises/color.jpg`,
  typography: `${assetBase}assets/exercises/typography.jpg`,
};

const tracks = [
  {
    number: "01",
    title: "أساسيات التصميم",
    description: "ابنِ عينًا بصرية تفهم التكوين، اللون، والهرمية من أول تمرين.",
    meta: "6 دروس · مبتدئ",
    color: "sun",
    icon: Layers3,
  },
  {
    number: "02",
    title: "هوية بصرية",
    description: "حوّل الفكرة إلى نظام بصري متماسك يصلح للعلامات والمنتجات.",
    meta: "9 دروس · متوسط",
    color: "coral",
    icon: Compass,
  },
  {
    number: "03",
    title: "تصميم رقمي",
    description: "صمّم واجهات ومحتوى رقميًا له هدف، إيقاع، وشخصية واضحة.",
    meta: "8 دروس · متوسط",
    color: "mint",
    icon: Eye,
  },
];

const lessons = [
  { title: "كيف ترى قبل أن تصمّم؟", tag: "تفكير بصري", time: "12 د", type: "popular" },
  { title: "قاعدة الثلث والفراغ الذكي", tag: "تكوين", time: "18 د", type: "new" },
  { title: "اختيار الخط العربي المناسب", tag: "تايبوجرافي", time: "24 د", type: "popular" },
  { title: "لوحة ألوان تبني الإحساس", tag: "لون", time: "15 د", type: "new" },
];

const softwarePrograms = [
  { number: "01", name: "فوتوشوب", english: "Photoshop", description: "من أول طبقة إلى صورة تحكي قصة.", color: "blue" },
  { number: "02", name: "إليستريتور", english: "Illustrator", description: "ارسم هويتك بدقة ومرونة لا نهائية.", color: "orange" },
  { number: "03", name: "إنديزاين", english: "InDesign", description: "صمّم الصفحات التي تُقرأ وتُحفظ.", color: "pink" },
  { number: "04", name: "كوريل درو", english: "CorelDRAW", description: "أدوات عملية للطباعة والإنتاج اليومي.", color: "green" },
  { number: "05", name: "أنيميت", english: "Animate", description: "امنح أفكارك حركة وشخصية.", color: "purple" },
  { number: "06", name: "بريمير", english: "Premiere Pro", description: "احكِ القصة بإيقاع يترك أثرًا.", color: "violet" },
  { number: "07", name: "آفتر إفيكت", english: "After Effects", description: "اصنع الحركة والمؤثرات بثقة.", color: "cyan" },
];

const foundationLessons = [
  {
    number: "01",
    title: "أساسيات التصميم الجرافيكي",
    eyebrow: "ابدأ من الصورة الكبيرة",
    description: "افهم التكوين، الهرمية، التوازن، المحاذاة، والفراغ لتصنع تصميمًا واضحًا ومقنعًا.",
    topics: ["التكوين البصري", "الهرمية والمحاذاة", "الفراغ والتوازن"],
    duration: "8 دروس · 2 ساعة",
    color: "yellow",
  },
  {
    number: "02",
    title: "نظريات الألوان",
    eyebrow: "اجعل اللون يتحدث",
    description: "استخدم دائرة الألوان، التباين، والانسجام لبناء لوحات تعبّر عن الفكرة والإحساس.",
    topics: ["دائرة الألوان", "التباين والانسجام", "سيكولوجية اللون"],
    duration: "6 دروس · 1.5 ساعة",
    color: "coral",
  },
];

const visualExercises = [
  { number: "01", title: "ملصق من ثلاثة أشكال", category: "تكوين بصري", duration: "25 دقيقة", description: "حوّل دائرة ومربعًا وخطًا إلى ملصق يملك إيقاعًا واضحًا.", image: exerciseImages.composition, color: "navy" },
  { number: "02", title: "لوحة لون واحدة", category: "نظرية الألوان", duration: "20 دقيقة", description: "ابنِ لوحة إحساس كاملة من لون أساسي وتدرجاته فقط.", image: exerciseImages.color, color: "yellow" },
  { number: "03", title: "حروف لها شخصية", category: "تايبوجرافي", duration: "30 دقيقة", description: "اكتشف كيف يمكن للشكل والإيقاع أن يقولا أكثر من الكلمات.", image: exerciseImages.typography, color: "coral" },
];

const programBooks = [
  { number: "01", title: "الفوتوشوب من الفكرة إلى الصورة", program: "Photoshop", meta: "52 صفحة · 7 فصول", color: "blue" },
  { number: "02", title: "الإليستريتور: ارسم نظامك", program: "Illustrator", meta: "46 صفحة · 6 فصول", color: "orange" },
  { number: "03", title: "الإنديزاين وترتيب الحكاية", program: "InDesign", meta: "44 صفحة · 5 فصول", color: "pink" },
  { number: "04", title: "كوريل درو للعمل اليومي", program: "CorelDRAW", meta: "38 صفحة · 5 فصول", color: "green" },
  { number: "05", title: "أنيميت: الفكرة تتحرّك", program: "Animate", meta: "50 صفحة · 6 فصول", color: "purple" },
  { number: "06", title: "بريمير وإيقاع القصة", program: "Premiere Pro", meta: "48 صفحة · 6 فصول", color: "violet" },
  { number: "07", title: "آفتر إفيكت وصناعة الأثر", program: "After Effects", meta: "56 صفحة · 7 فصول", color: "cyan" },
];

const navItems = [
  { label: "المسارات", href: "#tracks" },
  { label: "المستشار", href: "#advisor" },
  { label: "التمارين", href: "#exercises" },
  { label: "الكتب", href: "#books" },
  { label: "الأساسيات", href: "#foundations" },
  { label: "البرامج", href: "#software" },
  { label: "الدروس", href: "#lessons" },
  { label: "عن أكاديمية التصميم الجرافيكي", href: "#about" },
];

const advisorQuestions = [
  { key: "goal", label: "ما الذي تريد أن تصنعه أولًا؟", options: ["أريد أساسًا قويًا", "أريد بناء هوية", "أريد تصميمًا رقميًا"] },
  { key: "experience", label: "كيف تصف مستواك؟", options: ["أبدأ من الصفر", "لدي بعض التجربة", "أعمل كمصمم"] },
  { key: "mood", label: "ما الذي يحمّسك أكثر؟", options: ["فهم القواعد", "صناعة شخصية بصرية", "تجربة أفكار جديدة"] },
];

const advisorRecommendations = {
  "أريد أساسًا قويًا": { title: "مسار أساسيات التصميم", description: "ابدأ بعين ترى التكوين واللون والهرمية قبل أن تختار أي أداة.", href: "#foundations", color: "sun" },
  "أريد بناء هوية": { title: "مسار الهوية البصرية", description: "حوّل أفكارك إلى نظام بصري متماسك يصلح للعلامات والمنتجات.", href: "#tracks", color: "coral" },
  "أريد تصميمًا رقميًا": { title: "مسار التصميم الرقمي", description: "صمّم واجهات ومحتوى رقميًا له هدف وإيقاع وشخصية واضحة.", href: "#tracks", color: "mint" },
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [lessonFilter, setLessonFilter] = useState<"all" | "new" | "popular">("all");
  const [advisorOpen, setAdvisorOpen] = useState(false);
  const [advisorStep, setAdvisorStep] = useState(0);
  const [advisorAnswers, setAdvisorAnswers] = useState<string[]>([]);

  const filteredLessons = useMemo(() => {
    return lessons.filter((lesson) => {
      const matchesFilter = lessonFilter === "all" || lesson.type === lessonFilter;
      const matchesSearch = !query || `${lesson.title} ${lesson.tag}`.includes(query);
      return matchesFilter && matchesSearch;
    });
  }, [lessonFilter, query]);

  const closeMenu = () => setMenuOpen(false);
  const handleStart = () => {
    document.querySelector("#tracks")?.scrollIntoView({ behavior: "smooth" });
    toast.success("أهلًا بك في أكاديمية التصميم الجرافيكي — اختر مسارك وابدأ أول تمرين.");
  };
  const handlePlaceholder = (message: string) => toast(message);
  const advisorComplete = advisorAnswers.length === advisorQuestions.length;
  const advisorResult = advisorComplete ? advisorRecommendations[advisorAnswers[0] as keyof typeof advisorRecommendations] : null;
  const handleAdvisorAnswer = (answer: string) => {
    const nextAnswers = [...advisorAnswers, answer];
    setAdvisorAnswers(nextAnswers);
    if (advisorStep < advisorQuestions.length - 1) setAdvisorStep((step) => step + 1);
  };
  const resetAdvisor = () => { setAdvisorStep(0); setAdvisorAnswers([]); };

  return (
    <main dir="rtl" className="midad-page">
      <div className="top-note">
        <span className="top-note__dot" />
        <span>درس جديد كل أسبوع — تعلّم شيئًا، واصنع شيئًا.</span>
        <button onClick={() => document.querySelector("#lessons")?.scrollIntoView({ behavior: "smooth" })}>
          اكتشف الدرس <ArrowLeft size={14} />
        </button>
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="أكاديمية التصميم الجرافيكي، الصفحة الرئيسية">
          <span className="brand__mark">م</span>
          <span className="brand__name">أكاديمية التصميم الجرافيكي</span>
          <span className="brand__descriptor">استوديو التعلّم البصري</span>
        </a>

        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="التنقل الرئيسي">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a href="#join" onClick={closeMenu}>المجتمع</a>
        </nav>

        <div className="header-actions">
          <button className="icon-button" aria-label="البحث" onClick={() => setSearchOpen((open) => !open)}>
            {searchOpen ? <X size={19} /> : <Search size={19} />}
          </button>
          <button className="text-button desktop-only" onClick={() => handlePlaceholder("صفحة تسجيل الدخول قيد التجهيز — ابدأ مجانًا الآن.")}>دخول</button>
          <button className="primary-button header-cta desktop-only" onClick={handleStart}>ابدأ مجانًا <ArrowUpLeft size={16} /></button>
          <button className="icon-button mobile-menu" aria-label="فتح القائمة" onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {searchOpen && (
          <div className="search-popover">
            <Search size={17} />
            <input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="ابحث عن درس أو مهارة..." />
            <span>⌘ K</span>
          </div>
        )}
      </header>

      <section id="top" className="hero-section">
        <div className="hero-copy">
          <div className="eyebrow"><Sparkles size={15} /> مساحة للفضول، أدوات للإنجاز</div>
          <h1>صمّم <em>بصيرة.</em><br />اصنع أثرًا.</h1>
          <p className="hero-lede">أكاديمية التصميم الجرافيكي أكاديمية عربية تعلّمك التصميم الجرافيكي بطريقة عملية، ذكية، وممتعة — من أول فكرة إلى عمل تفتخر به.</p>
          <div className="hero-actions">
            <button className="primary-button hero-button" onClick={handleStart}>استكشف المسارات <ArrowLeft size={18} /></button>
            <button className="play-button" onClick={() => handlePlaceholder("فيديو التعريف سيصل قريبًا — جهّز فضولك.")}><span className="play-button__icon"><Play size={15} fill="currentColor" /></span> شاهد كيف نعلّم</button>
          </div>
          <div className="hero-proof">
            <div className="avatar-stack" aria-label="أعضاء مجتمع أكاديمية التصميم الجرافيكي"><span>ن</span><span>س</span><span>ر</span><span className="avatar-more">+٢</span></div>
            <div><strong>+٢٬٤٠٠</strong><span>مصمم يتعلّم معنا الآن</span></div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-wrap">
            <img src={heroImage} alt="كولاج بصري من خامات وأشكال هندسية" />
            <div className="hero-image-overlay" />
          </div>
          <div className="hero-sticker hero-sticker--top"><span>أفكار</span><span>تتحوّل</span></div>
          <div className="hero-sticker hero-sticker--bottom"><span>01</span><small>ابدأ من هنا</small></div>
          <div className="hero-note"><span className="hero-note__line" /> كل شيء يبدأ بملاحظة صغيرة</div>
        </div>
        <div className="hero-index">01 <span>/</span> 04</div>
      </section>

      <section className="manifesto-strip" aria-label="قيم أكاديمية التصميم الجرافيكي">
        <span>ملاحظة</span><p>التصميم ليس زرًّا تضغطه. إنه طريقة جديدة لرؤية العالم.</p><span>↗</span>
      </section>

      <section id="tracks" className="tracks-section section-shell">
        <div className="section-heading">
          <div><span className="section-kicker">/ تعلّم على مهل، أنجز بثقة</span><h2>مسارك يبدأ<br /><span>من فضولك.</span></h2></div>
          <div className="section-heading__aside"><p>مسارات مصممة لترافقك خطوة بخطوة، بدون حشو أو تعقيد. اختر نقطة البداية التي تشبهك.</p><a href="#lessons">كل الدروس <ArrowLeft size={16} /></a></div>
        </div>
        <div className="track-grid">
          {tracks.map((track) => {
            const Icon = track.icon;
            return (
              <article className={`track-card track-card--${track.color}`} key={track.number}>
                <div className="track-card__top"><span className="track-number">{track.number}</span><Icon size={23} strokeWidth={1.7} /></div>
                <div className="track-card__body"><h3>{track.title}</h3><p>{track.description}</p></div>
                <div className="track-card__footer"><span>{track.meta}</span><button aria-label={`ابدأ مسار ${track.title}`} onClick={handleStart}><ArrowUpLeft size={19} /></button></div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="advisor" className={`advisor-section section-shell ${advisorOpen ? "is-open" : ""}`}>
        <div className="advisor-intro"><span className="advisor-orbit"><Sparkles size={20} /></span><span className="section-kicker">/ لا تعرف من أين تبدأ؟</span><h2>مستشارك<br /><span>يفهم فضولك.</span></h2><p>أجب عن ثلاثة أسئلة سريعة، وسنقترح عليك المسار الأقرب لاهتماماتك ومستواك.</p><button className="primary-button" onClick={() => { setAdvisorOpen(true); resetAdvisor(); }}>اكتشف مسارك <ArrowLeft size={17} /></button></div>
        <div className="advisor-panel" aria-live="polite">
          <div className="advisor-panel__header"><span>مستشار المسارات</span><span>{advisorResult ? "اكتمل الاختيار" : `0${advisorStep + 1} / 03`}</span></div>
          {!advisorOpen && <div className="advisor-panel__teaser"><span>ثلاث خطوات فقط</span><strong>لنصنع بداية تشبهك.</strong><div className="advisor-progress"><i /><i /><i /></div></div>}
          {advisorOpen && !advisorResult && <div className="advisor-question"><span className="advisor-question__eyebrow">السؤال {advisorStep + 1} من {advisorQuestions.length}</span><h3>{advisorQuestions[advisorStep].label}</h3><div className="advisor-options">{advisorQuestions[advisorStep].options.map((option) => <button key={option} onClick={() => handleAdvisorAnswer(option)}>{option}<ArrowUpLeft size={16} /></button>)}</div></div>}
          {advisorOpen && advisorResult && <div className="advisor-result"><span className={`advisor-result__badge advisor-result__badge--${advisorResult.color}`}><Star size={15} fill="currentColor" /> اقتراحنا لك</span><h3>{advisorResult.title}</h3><p>{advisorResult.description}</p><div className="advisor-result__actions"><a className="primary-button" href={advisorResult.href}>ابدأ الاستكشاف <ArrowLeft size={16} /></a><button className="advisor-restart" onClick={resetAdvisor}>أعد الاختبار</button></div></div>}
        </div>
      </section>

      <section id="software" className="software-section section-shell">
        <div className="section-heading software-heading">
          <div><span className="section-kicker">/ تعلّم الأدوات التي تصنع الفرق</span><h2>برنامج واحد.<br /><span>احتمالات كثيرة.</span></h2></div>
          <div className="section-heading__aside"><p>دروس منفصلة وعملية لكل برنامج، من الواجهة الأولى إلى مشروع يمكنك إضافته إلى معرض أعمالك.</p><span className="software-count"><strong>٧</strong> برامج إبداعية</span></div>
        </div>
        <div className="software-grid">
          {softwarePrograms.map((program) => (
            <article className={`software-card software-card--${program.color}`} key={program.english}>
              <div className="software-card__top"><span>{program.number}</span><span className="software-card__dot" /></div>
              <div className="software-card__body"><small>{program.english}</small><h3>{program.name}</h3><p>{program.description}</p></div>
              <button className="software-card__link" onClick={() => handlePlaceholder(`دروس ${program.name} ستتوفر قريبًا داخل أكاديمية التصميم الجرافيكي.`)}>ابدأ الدروس <ArrowUpLeft size={17} /></button>
            </article>
          ))}
        </div>
      </section>

      <section id="foundations" className="foundations-section section-shell">
        <div className="section-heading foundations-heading">
          <div><span className="section-kicker">/ قبل الأدوات، تعلّم الأساس</span><h2>عينك هي<br /><span>أهم أداة.</span></h2></div>
          <div className="section-heading__aside"><p>دروسان تأسيسيان يضعان بين يديك القواعد التي تجعل أي برنامج أسهل، وأي فكرة أوضح.</p><a href="#lessons">استكشف كل الدروس <ArrowLeft size={16} /></a></div>
        </div>
        <div className="foundations-grid">
          {foundationLessons.map((lesson) => (
            <article className={`foundation-card foundation-card--${lesson.color}`} key={lesson.number}>
              <div className="foundation-card__visual"><span className="foundation-card__number">{lesson.number}</span><div className="foundation-shape foundation-shape--one" /><div className="foundation-shape foundation-shape--two" /><span className="foundation-card__label">درس تأسيسي</span></div>
              <div className="foundation-card__content"><span className="section-kicker">{lesson.eyebrow}</span><h3>{lesson.title}</h3><p>{lesson.description}</p><div className="foundation-topics">{lesson.topics.map((topic) => <span key={topic}>{topic}</span>)}</div><div className="foundation-card__footer"><span>{lesson.duration}</span><button onClick={() => handlePlaceholder(`سيبدأ درس «${lesson.title}» قريبًا.`)}>ابدأ الدرس <ArrowUpLeft size={17} /></button></div></div>
            </article>
          ))}
        </div>
      </section>

      <section id="exercises" className="exercises-section section-shell">
        <div className="section-heading exercises-heading">
          <div><span className="section-kicker">/ تعلّم بيديك</span><h2>تمارين مصوّرة.<br /><span>نتائج تُرى.</span></h2></div>
          <div className="section-heading__aside"><p>افتح الصورة، اقرأ التحدي، ثم اصنع نسختك. تمارين قصيرة تساعدك على تحويل القاعدة إلى عادة.</p><span className="exercise-note"><Sparkles size={14} /> كل تمرين يبدأ بملاحظة</span></div>
        </div>
        <div className="exercise-grid">
          {visualExercises.map((exercise) => (
            <article className={`exercise-card exercise-card--${exercise.color}`} key={exercise.number}>
              <div className="exercise-card__image"><img src={exercise.image} alt={`تمرين مصور عن ${exercise.category}`} /><span>{exercise.number}</span><button aria-label={`عرض تمرين ${exercise.title}`} onClick={() => handlePlaceholder(`تمرين «${exercise.title}» سيُفتح قريبًا.`)}><ArrowUpLeft size={17} /></button></div>
              <div className="exercise-card__body"><div className="exercise-card__meta"><span>{exercise.category}</span><span>{exercise.duration}</span></div><h3>{exercise.title}</h3><p>{exercise.description}</p><button className="exercise-card__link" onClick={() => handlePlaceholder(`حمّل ورقة تمرين «${exercise.title}» قريبًا.`)}>افتح ورقة التمرين <ArrowLeft size={15} /></button></div>
            </article>
          ))}
        </div>
      </section>

      <section id="books" className="books-section section-shell">
        <div className="section-heading books-heading">
          <div><span className="section-kicker">/ مكتبة الأدوات</span><h2>كتب تشبه<br /><span>البرنامج.</span></h2></div>
          <div className="section-heading__aside"><p>مراجع عملية مصممة لكل برنامج داخل الأكاديمية: شرح بصري، اختصارات مهمة، ومشروع صغير في كل فصل.</p><span className="books-count"><BookOpen size={16} /> ٧ كتب عملية</span></div>
        </div>
        <div className="books-grid">
          {programBooks.map((book) => (
            <article className={`book-card book-card--${book.color}`} key={book.program}>
              <div className="book-cover"><span className="book-cover__number">{book.number}</span><BookOpen size={17} /><small>{book.program}</small><strong>{book.title}</strong><span className="book-cover__line" /></div>
              <div className="book-card__info"><span>{book.meta}</span><button onClick={() => handlePlaceholder(`كتاب «${book.title}» سيكون متاحًا للقراءة قريبًا.`)}>تصفّح الكتاب <ArrowUpLeft size={16} /></button></div>
            </article>
          ))}
        </div>
      </section>

      <section id="lessons" className="lessons-section section-shell">
        <div className="section-heading section-heading--lessons">
          <div><span className="section-kicker">/ مكتبة أكاديمية التصميم الجرافيكي</span><h2>دروس قصيرة.<br /><span>أثر طويل.</span></h2></div>
          <div className="lesson-filters" role="tablist" aria-label="فلترة الدروس">
            {[{ id: "all", label: "الكل" }, { id: "new", label: "الأحدث" }, { id: "popular", label: "الأكثر مشاهدة" }].map((filter) => (
              <button key={filter.id} className={lessonFilter === filter.id ? "is-active" : ""} onClick={() => setLessonFilter(filter.id as typeof lessonFilter)}>{filter.label}</button>
            ))}
          </div>
        </div>
        <div className="lesson-layout">
          <div className="featured-lesson">
            <div className="featured-lesson__image"><img src={workshopImage} alt="مصممة ترسم أفكارًا في دفتر ملاحظات" /><span className="featured-lesson__badge">الأكثر مشاهدة</span><button className="floating-play" onClick={() => handlePlaceholder("سيبدأ تشغيل الدرس التجريبي قريبًا.")}><Play size={18} fill="currentColor" /></button></div>
            <div className="featured-lesson__content"><span className="section-kicker">درس تمهيدي · ١٢ دقيقة</span><h3>قبل أن تفتح أي برنامج…<br /><em>تعلّم كيف ترى.</em></h3><p>تمرين بصري بسيط سيغيّر طريقتك في ملاحظة التفاصيل من حولك.</p><button className="underlined-link" onClick={() => handlePlaceholder("سجّل اهتمامك ليصلك الدرس عند إطلاقه.")}>شاهد الدرس <ArrowLeft size={16} /></button></div>
          </div>
          <div className="lesson-list">
            {filteredLessons.map((lesson, index) => (
              <button className="lesson-row" key={lesson.title} onClick={() => handlePlaceholder(`سيصل درس «${lesson.title}» إلى مكتبتك قريبًا.`)}>
                <span className="lesson-row__index">0{index + 1}</span><span className="lesson-row__play"><Play size={13} fill="currentColor" /></span><span className="lesson-row__info"><strong>{lesson.title}</strong><small>{lesson.tag}</small></span><span className="lesson-row__time"><Clock3 size={14} /> {lesson.time}</span><ArrowLeft className="lesson-row__arrow" size={17} />
              </button>
            ))}
            {filteredLessons.length === 0 && <div className="empty-lessons">لا توجد نتائج مطابقة. جرّب كلمة أخرى.</div>}
            <button className="all-lessons-link" onClick={() => handlePlaceholder("مكتبة الدروس الكاملة قيد البناء.")}>استكشف المكتبة كاملة <ArrowLeft size={16} /></button>
          </div>
        </div>
      </section>

      <section id="about" className="about-section section-shell">
        <div className="about-visual"><div className="about-frame"><img src={workshopImage} alt="مساحة عمل إبداعية داخل استوديو أكاديمية التصميم الجرافيكي" /></div><div className="about-caption"><span>استوديو أكاديمية التصميم الجرافيكي</span><span>القاهرة · عمّان · كل مكان</span></div></div>
        <div className="about-copy"><span className="section-kicker">/ لماذا أكاديمية التصميم الجرافيكي؟</span><h2>لأن أفضل<br /><span>التصاميم</span><br />تبدأ من سؤال.</h2><p>نؤمن أن تعلّم التصميم لا يحتاج إلى ضجيج. يحتاج إلى عين منتبهة، سؤال جيد، ومجتمع يشجّعك على المحاولة مرة أخرى.</p><div className="about-points"><div><Check size={15} /><span>تطبيق عملي، لا محاضرات طويلة</span></div><div><Check size={15} /><span>أمثلة من الثقافة البصرية العربية</span></div><div><Check size={15} /><span>مساحة آمنة لتجريب أفكارك</span></div></div><button className="underlined-link" onClick={() => handlePlaceholder("قصة أكاديمية التصميم الجرافيكي ستُحكى هنا قريبًا.")}>اقرأ قصتنا <ArrowLeft size={16} /></button></div>
      </section>

      <section id="join" className="join-section section-shell">
        <div className="join-deco join-deco--one">م</div><div className="join-deco join-deco--two">✳</div>
        <div className="join-content"><span className="section-kicker section-kicker--light">/ جاهز تبدأ؟</span><h2>فكرتك تستحق<br /><em>مساحة.</em></h2><p>انضم إلى قائمة الانتظار واحصل على أول درس مجاني عند إطلاق أكاديمية التصميم الجرافيكي.</p><button className="light-button" onClick={() => toast.success("تم تسجيل اهتمامك! سنلتقي قريبًا في أكاديمية التصميم الجرافيكي.")}>انضم إلى أكاديمية التصميم الجرافيكي <ArrowLeft size={17} /></button></div>
      </section>

      <footer className="site-footer"><div className="footer-brand"><span className="brand__mark">م</span><strong>أكاديمية التصميم الجرافيكي</strong><span>تعلم، لاحظ، اصنع.</span></div><div className="footer-links"><a href="#tracks">المسارات</a><a href="#lessons">الدروس</a><a href="#about">عن أكاديمية التصميم الجرافيكي</a><a href="#join">تواصل معنا</a></div><div className="footer-social"><button aria-label="انستغرام" onClick={() => handlePlaceholder("تابعنا على إنستغرام قريبًا.")}><Instagram size={17} /></button><button aria-label="يوتيوب" onClick={() => handlePlaceholder("قناة أكاديمية التصميم الجرافيكي ستنطلق قريبًا.")}><Youtube size={17} /></button><span>© ٢٠٢٦ أكاديمية التصميم الجرافيكي</span></div></footer>
    </main>
  );
}
