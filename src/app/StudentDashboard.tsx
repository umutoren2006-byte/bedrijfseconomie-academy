import { useState } from "react";
import { ArrowRight, BookOpen, CalendarDays, CheckCircle2, ClipboardList, GraduationCap, LayoutDashboard, Search, Target, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
const chapters = [
  {name:"Kosten en opbrengsten",topic:"Vaste en variabele kosten",level:"Basis",duration:"15 min"},
  {name:"Omzet en winst",topic:"Brutowinst en nettowinst",level:"Basis",duration:"20 min"},
  {name:"Break-evenanalyse",topic:"Break-evenafzet berekenen",level:"Gevorderd",duration:"25 min"},
  {name:"Balans en resultatenrekening",topic:"Bezittingen, schulden en eigen vermogen",level:"Basis",duration:"20 min"}
];
export default function StudentDashboard() {
  const [query,setQuery]=useState("");
  const [selected,setSelected]=useState(0);
  const visible=chapters.filter(x=>(x.name+" "+x.topic).toLowerCase().includes(query.toLowerCase()));
  return <main className="student-page">
    <div className="student-shell">
      <aside className="student-sidebar">
        <div className="student-sidebar-heading">LEEROMGEVING</div>
        <Link className="student-nav active" to="/dashboard"><LayoutDashboard size={18}/> Dashboard</Link>
        <a className="student-nav" href="#hoofdstukken"><BookOpen size={18}/> Hoofdstukken</a>
        <a className="student-nav" href="#leerdoelen"><Target size={18}/> Leerdoelen</a>
        <a className="student-nav" href="#studieplanning"><CalendarDays size={18}/> Studieplanning</a>
        <div className="student-sidebar-foot"><GraduationCap size={32}/><b>Academy Preview</b><small>Demo zonder account of opslag</small></div>
      </aside>
      <div className="student-content">
        <div className="student-topline"><span>STUDENTENOMGEVING / DEMO</span><span className="student-pill">Ontwerpversie</span></div>
        <div className="student-welcome"><div><h1>Welkom bij jouw Academy</h1><p>Ontdek hoofdstukken en leerdoelen. Dit is een interactieve ontwerpversie; resultaten worden nog niet opgeslagen.</p></div><GraduationCap size={80}/></div>
        <div className="student-stats">
          <article><BookOpen/><span>Beschikbare hoofdstukken</span><strong>{chapters.length}</strong><small>Voorbeeldinhoud</small></article>
          <article><Target/><span>Leerdoelen</span><strong>4</strong><small>Demoleerdoelen</small></article>
          <article><TrendingUp/><span>Voortgang</span><strong>—</strong><small>Meten volgt later</small></article>
        </div>
        <section className="student-panel" id="hoofdstukken">
          <div className="student-section-title"><div><span className="student-overline">JOUW LEERSTOF</span><h2>Hoofdstukken ontdekken</h2></div><span className="student-muted">{visible.length} resultaten</span></div>
          <label className="student-search"><Search size={20}/><span className="sr-only">Zoek hoofdstuk</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Zoek op hoofdstuk of onderwerp…"/></label>
          <div className="student-chapter-grid">{visible.map((c)=>{const idx=chapters.indexOf(c);return <button type="button" className={"student-chapter"+(selected===idx?" chosen":"")} key={c.name} onClick={()=>setSelected(idx)} aria-pressed={selected===idx}><div className="student-chapter-icon"><BookOpen size={23}/></div><h3>{c.name}</h3><p>{c.topic}</p><div><span>{c.level}</span><span>{c.duration}</span></div></button>})}</div>
          {visible.length===0&&<p className="student-muted">Geen hoofdstukken gevonden. Probeer een andere zoekterm.</p>}
        </section>
        <div className="student-bottom-grid">
          <section className="student-panel" id="leerdoelen"><span className="student-overline">ACTIEF GESELECTEERD</span><h2>{chapters[selected].name}</h2><p>{chapters[selected].topic}</p><div className="student-note"><CheckCircle2 size={20}/> Dit is voorbeeldlesstof; inhoud wordt gecontroleerd vóór publicatie.</div><button className="student-disabled" disabled>Les starten — binnenkort <ArrowRight size={16}/></button></section>
          <section className="student-panel" id="studieplanning"><span className="student-overline">JOUW PLANNING</span><h2>Plan je volgende sessie</h2><p>Een persoonlijke studieplanning komt beschikbaar wanneer leerdoelen en voortgang veilig kunnen worden opgeslagen.</p><div className="student-note"><ClipboardList size={20}/> Nog geen planning opgeslagen</div></section>
        </div>
      </div>
    </div>
  </main>;
}
