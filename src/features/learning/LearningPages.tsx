import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, BookOpen, Calculator, CheckCircle2, ChevronRight, GraduationCap, Lightbulb, RotateCcw } from "lucide-react";
import { gradeNumeric, lessons } from "./content";
import type { Lesson } from "./content";
import "./learning.css";

export function ChaptersPage() {
 return <main className="learning-shell">
  <div className="learning-top"><Link to="/" className="learning-back"><ArrowLeft size={16}/> Home</Link><span className="learning-label">BEGRIJP DE BASIS</span></div>
  <div className="learning-heading"><span className="learning-icon"><BookOpen size={30}/></span><div><h1>Mijn hoofdstukken</h1><p>Kies een onderwerp en leer met korte uitleg en gecontroleerde oefenvragen.</p></div></div>
  <div className="learning-note">Dit zijn voorbeeldlessen, niet de officiële toetsstof van jouw school. Je resultaten worden nog niet opgeslagen.</div>
  <div className="chapter-grid">{lessons.map((lesson, i) => <article className="chapter-card" key={lesson.slug}>
   <div className="chapter-index">HOOFDSTUK {String(i+1).padStart(2,"0")} · {lesson.section}</div>
   <div className="chapter-graphic"><Calculator size={38}/></div><h2>{lesson.title}</h2><p>{lesson.intro}</p>
   <div className="chapter-meta"><span><BookOpen size={15}/> Theorie</span><span><CheckCircle2 size={15}/> {lesson.exercises.length} opdrachten</span></div>
   <Link className="learning-action" to={`/hoofdstukken/${lesson.slug}`}>Begin met leren <ArrowRight size={17}/></Link>
  </article>)}</div>
 </main>;
}
function LessonContent({lesson}:{lesson:Lesson}){
 return <div className="lesson-content">
  <p className="learning-label">{lesson.section.toUpperCase()}</p><h1>{lesson.title}</h1><p className="lesson-intro">{lesson.intro}</p>
  <section className="lesson-block"><h2><BookOpen size={20}/> Theorie</h2><p>Onthoud de volgende formule:</p><div className="formula-card">{lesson.formula}</div></section>
  <section className="lesson-block"><h2><Calculator size={20}/> Voorbeeld</h2><p>{lesson.example}</p><ol>{lesson.steps.map(step=><li key={step}>{step}</li>)}</ol></section>
 </div>;
}
function ExercisePanel({lesson}:{lesson:Lesson}){
 const [index,setIndex]=useState(0),[input,setInput]=useState(""),[submitted,setSubmitted]=useState(false),[showHint,setShowHint]=useState(false),[correctCount,setCorrectCount]=useState(0);
 const [finished,setFinished]=useState(false); const question=lesson.exercises[index];const grade=gradeNumeric(input,question.answer,question.tolerance);
 function submit(e:React.FormEvent){e.preventDefault();if(grade===null)return;setSubmitted(true);if(grade)setCorrectCount(n=>n+1)}
 function next(){if(index+1===lesson.exercises.length){setFinished(true)}else{setIndex(n=>n+1);setInput("");setSubmitted(false);setShowHint(false)}}
 function restart(){setIndex(0);setInput("");setSubmitted(false);setShowHint(false);setCorrectCount(0);setFinished(false)}
 if(finished)return <section className="exercise-panel" aria-live="polite"><GraduationCap size={46} className="finished-icon"/><h2>Oefensessie afgerond!</h2><p>Je hebt {correctCount} van de {lesson.exercises.length} vragen bij de eerste poging goed beantwoord.</p><p className="learning-fineprint">Dit is alleen een sessieresultaat. Het wordt niet opgeslagen en zegt niets over je officiële toetsniveau.</p><button className="learning-action" onClick={restart}><RotateCcw size={17}/> Opnieuw oefenen</button></section>;
 return <section className="exercise-panel" aria-label="Oefenopdracht">
  <div className="exercise-header"><span><CheckCircle2 size={18}/> Oefen je kennis</span><span>Vraag {index+1} van {lesson.exercises.length}</span></div>
  <div className="exercise-track"><span style={{width:`${((index+1)/lesson.exercises.length)*100}%`}}/></div>
  <h2>{question.prompt}</h2>
  <form onSubmit={submit}>
   <label htmlFor="exercise-answer">Jouw antwoord ({question.unit})</label>
   <input id="exercise-answer" type="text" inputMode="decimal" autoComplete="off" value={input} onChange={e=>{if(!submitted)setInput(e.target.value)}} disabled={submitted} placeholder="Vul een getal in" aria-describedby="exercise-hint"/>
   {!submitted && grade===null && input.trim()!=="" && <p role="alert" className="learning-error">Gebruik alleen een getal, eventueel met komma en maximaal twee decimalen.</p>}
   {!submitted && <div className="exercise-buttons"><button className="learning-secondary" type="button" onClick={()=>setShowHint(v=>!v)}><Lightbulb size={17}/> {showHint?"Verberg hint":"Bekijk hint"}</button><button className="learning-action" type="submit" disabled={grade===null}>Controleer antwoord <ArrowRight size={17}/></button></div>}
  </form>
  {showHint&&!submitted&&<p id="exercise-hint" className="hint-card"><Lightbulb size={17}/>{question.hint}</p>}
  {submitted&&<div role="status" className={grade?"feedback-card correct":"feedback-card incorrect"}>
   <strong>{grade?"Goed gedaan!":"Nog niet goed."}</strong><p>{question.explanation}</p>
   <button className="learning-action" onClick={next}>{index+1===lesson.exercises.length?"Bekijk resultaat":"Volgende vraag"} <ChevronRight size={18}/></button>
  </div>}
  <p className="learning-fineprint">Antwoordcontrole gebeurt lokaal en gebruikt vooraf gecontroleerde voorbeeldantwoorden. Geen AI of account nodig.</p>
 </section>;
}
export function LessonPage(){
 const {slug}=useParams();const lesson=lessons.find(item=>item.slug===slug);
 if(!lesson)return <main className="learning-shell"><h1>Hoofdstuk niet gevonden</h1><Link to="/hoofdstukken" className="learning-action">Terug naar hoofdstukken</Link></main>;
 return <main className="learning-shell"><div className="learning-top"><Link to="/hoofdstukken" className="learning-back"><ArrowLeft size={16}/> Alle hoofdstukken</Link><span className="learning-label">THEORIE & OEFENEN</span></div><div className="lesson-grid"><LessonContent lesson={lesson}/><ExercisePanel key={lesson.slug} lesson={lesson}/></div></main>;
}
