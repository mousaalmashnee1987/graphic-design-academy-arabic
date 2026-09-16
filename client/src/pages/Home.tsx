import { useMemo, useState } from "react";
import { toast } from "sonner";
import {
  ArrowLeft,
  ArrowUpLeft,
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

const heroImage = "/manus-storage/midad-hero_0b00fcfc.jpg";
const workshopImage = "/manus-storage/midad-workshop_553a6f6f.jpg";

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

const navItems = [
  { label: "المسارات", href: "#tracks" },
  { label: "الدروس", href: "#lessons" },
  { label: "عن أكاديمية التصميم الجرافيكي", href: "#about" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [lessonFilter, setLessonFilter] = useState<"all" | "new" | "popular">("all");

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
