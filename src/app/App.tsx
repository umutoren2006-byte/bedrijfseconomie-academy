import { useState } from "react";
import StudentDashboard from "./StudentDashboard";
import { ChaptersPage, LessonPage } from "../features/learning/LearningPages";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import { ArrowRight, BookOpen, BrainCircuit, Calculator, ChartColumnIncreasing, Check, ChevronDown, ClipboardCheck, GraduationCap, Menu, Play, Rocket, Target, UserRound, X } from "lucide-react";

const features = [
  { icon: BookOpen, name: "Theorie", description: "Heldere uitleg, voorbeelden en korte samenvattingen." },
  { icon: BrainCircuit, name: "AI-docent", description: "Persoonlijke uitleg, hints en extra oefenvragen." },
  { icon: Calculator, name: "Oefenen", description: "Adaptieve opdrachten en berekeningen." },
  { icon: ClipboardCheck, name: "Proeftoetsen", description: "Realistische toetsen en directe feedback." },
  { icon: ChartColumnIncreasing, name: "Voortgang", description: "Zie wat je al beheerst en waar je kunt groeien." },
  { icon: Target, name: "Studieplan", description: "Een persoonlijk plan dat zich aanpast aan jou." },
];

function Brand() {
  return <Link className="brand" to="/" aria-label="Bedrijfseconomie Academy: naar homepage">
    <GraduationCap size={46} strokeWidth={1.7} aria-hidden="true"/>
    <span><strong>Bedrijfseconomie</strong><small>ACADEMY</small></span>
  </Link>;
}

function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <div className="header-inner">
      <Brand/>
      <nav id="main-navigation" aria-label="Hoofdnavigatie" className={open ? "nav open" : "nav"}>
        <NavLink to="/" end onClick={() => setOpen(false)}>Home</NavLink>
        <NavLink to="/hoofdstukken" onClick={() => setOpen(false)}>Hoofdstukken</NavLink>
        <a href={`${import.meta.env.BASE_URL}#studenten`} onClick={() => setOpen(false)}>Voor studenten</a>
        <a href={`${import.meta.env.BASE_URL}#docenten`} onClick={() => setOpen(false)}>Voor docenten</a>
        <a href={`${import.meta.env.BASE_URL}#faq`} onClick={() => setOpen(false)}>Veelgestelde vragen</a>
      </nav>
      <div className="header-actions">
        <Link to="/inloggen" className="button button-outline"><UserRound size={18}/> Inloggen</Link>
        <Link to="/hoofdstukken" className="button button-gold">Start met leren <ArrowRight size={18}/></Link>
      </div>
      <button className="menu-toggle" aria-label={open ? "Menu sluiten" : "Menu openen"} aria-controls="main-navigation" aria-expanded={open} onClick={() => setOpen(v => !v)}>{open ? <X/> : <Menu/>}</button>
    </div>
  </header>;
}

function Home() {
  return <>
    <Header/>
    <main>
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow"><Rocket size={20}/> JOUW PERSOONLIJKE LEEROMGEVING</p>
            <h1>Begrijp bedrijfseconomie.<span>Ga voorbereid je toets in.</span></h1>
            <p className="hero-intro">Leer op jouw niveau, oefen met slimme opdrachten en ontdek precies welke onderwerpen je nog kunt verbeteren. De AI-docent wordt in een volgende fase toegevoegd.</p>
            <div className="hero-actions">
              <Link to="/hoofdstukken" className="button button-gold button-large"><Play size={18}/> Begin met leren <ArrowRight size={20}/></Link>
              <a href="#platform" className="button button-outline button-large"><BookOpen size={19}/> Bekijk het platform</a>
            </div>
            <p style={{marginTop:20}}><Link to="/dashboard" style={{color:"#f4d28d",textDecoration:"underline",fontWeight:700}}>Bekijk het studentendashboard (demo) →</Link></p><div className="hero-benefits"><span><Check/> Mbo-niveau</span><span><Check/> Persoonlijke leerdoelen</span><span><Check/> Startomgeving bekijken</span></div>
          </div>
          <div className="hero-visual" aria-label="Voorbeeld van een persoonlijke leeromgeving">
            <div className="illustration"><GraduationCap size={108} strokeWidth={1.1}/><span className="float-book"><BookOpen size={65}/></span><span className="float-calc"><Calculator size={46}/></span><span className="float-chart"><ChartColumnIncreasing size={58}/></span></div>
            <div className="progress-float"><div className="progress-title"><strong>Jouw voortgang</strong><span>DEMO</span></div><strong className="progress-number">78%</strong><div className="track"><div/></div><p><Check size={16}/> Theorie begrijpen</p><p><Check size={16}/> Oefeningen oefenen</p></div>
            <div className="coach-float"><BrainCircuit size={28}/><span><b>AI-docent</b><small>Binnenkort beschikbaar</small></span></div>
          </div>
        </div>
      </section>
      <section id="platform" className="discover">
        <p className="section-label">ONTDEK JOUW LEEROMGEVING</p>
        <h2>Alles om slimmer te leren</h2>
        <p className="section-subtitle">Eén omgeving voor theorie, oefenen en voorbereiding op je toets.</p>
        <div className="feature-grid">
          {features.map(({icon: Icon,name,description}) => <article className="feature-card" key={name}>
            <div className="feature-icon"><Icon size={32}/></div><h3>{name}</h3><p>{description}</p><span className="coming-soon">In ontwikkeling</span>
          </article>)}
        </div>
        <div id="studenten" className="study-banner">
          <GraduationCap className="banner-cap" size={74}/>
          <div><h3>Jouw toets. Jouw leerplan.</h3><p>De Academy wordt jouw persoonlijke plek om bedrijfseconomie écht te begrijpen.</p></div>
          <Link to="/hoofdstukken" className="button button-dark">Bekijk de hoofdstukken <ArrowRight size={19}/></Link>
        </div>
      </section>
      <section className="info-section" id="docenten">
        <div className="info-inner"><div><p className="section-label">VOOR DOCENTEN</p><h2>Gerichtere begeleiding. Meer inzicht.</h2><p>We ontwikkelen klasworkshops, gecontroleerde lesinhoud en een docentendashboard met aandacht voor privacy.</p></div>
        <div className="info-card"><ClipboardCheck size={38}/><h3>Workshopcentrum</h3><p>Live klasfuncties worden tijdens een volgende ontwikkelfase gerealiseerd.</p></div></div>
      </section>
      <section id="faq" className="faq">
        <h2>Veelgestelde vragen</h2>
        <details><summary>Kan ik al oefeningen maken? <ChevronDown size={18}/></summary><p>Nog niet. Deze eerste versie laat de vormgeving en navigatie zien; de oefeningen volgen later.</p></details>
        <details><summary>Kan ik al inloggen? <ChevronDown size={18}/></summary><p>Accountregistratie en inloggen worden pas geactiveerd nadat de beveiliging en opslag zijn ingericht.</p></details>
        <details><summary>Is de AI-docent beschikbaar? <ChevronDown size={18}/></summary><p>Nee. AI-hulp wordt toegevoegd na controle van lesinhoud, berekeningen en privacy.</p></details>
      </section>
    </main>
    <footer><Brand/><p>© 2026 Bedrijfseconomie Academy · In ontwikkeling</p></footer>
  </>;
}
function Entry({kind}:{kind:"login"|"start"}) {
  return <><Header/><main className="entry-main"><div className="entry-card">
    <GraduationCap size={58} className="entry-icon"/>
    <p className="section-label">BEDRIJFSECONOMIE ACADEMY</p>
    <h1>{kind === "login" ? "Welkom terug" : "Begin jouw leertraject"}</h1>
    <p>{kind === "login" ? "De veilige accountomgeving wordt nog ontwikkeld." : "Je kunt hier binnenkort als gast starten of een account aanmaken."}</p>
    <div className="entry-status"><Check size={20}/> Ontwerp gereed · Technische ontwikkeling gestart</div>
    <Link className="button button-gold button-large" to="/">Terug naar homepage <ArrowRight size={18}/></Link>
    <small>Er worden nog geen accounts of leerresultaten opgeslagen.</small>
  </div></main></>;
}
export default function App() {
  return <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/start" element={<Entry kind="start"/>}/>
    <Route path="/dashboard" element={<><Header/><StudentDashboard/></>}/>
    <Route path="/inloggen" element={<Entry kind="login"/>}/>
    <Route path="/hoofdstukken" element={<><Header/><ChaptersPage/></>}/>
    <Route path="/hoofdstukken/:slug" element={<><Header/><LessonPage/></>}/>
    <Route path="*" element={<><Header/><main className="entry-main"><div className="entry-card"><h1>Pagina niet gevonden</h1><Link to="/" className="button button-gold">Terug naar home <ArrowRight size={18}/></Link></div></main></>}/>
  </Routes>;
}
