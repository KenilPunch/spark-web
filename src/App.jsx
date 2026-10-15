import { useEffect, useRef, useState } from 'react';
import { ClipboardCheck, Search, Users, Siren, Rocket, ShieldAlert } from 'lucide-react';
import { EVENT, FEATURES, MISSIONS, RULES, FAQ, NAV } from './config.js';
import Nav from './components/Nav.jsx';
import Crewmate from './components/Crewmate.jsx';
import Countdown from './components/Countdown.jsx';
import Accordion from './components/Accordion.jsx';
import RegisterForm from './components/RegisterForm.jsx';

const ICONS = { tasks: ClipboardCheck, search: Search, crew: Users, alert: Siren };
const BRIEF = [['date', 'Event date'], ['time', 'Start time'], ['venue', 'Venue'], ['eligibility', 'Eligibility'], ['deadline', 'Registration deadline'], ['fee', 'Participation fee'], ['teamSize', 'Team size']];

// Fades content in once when it scrolls into view (disabled by CSS for reduced-motion users).
function Reveal({ children, className = '' }) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return setOn(true);
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (setOn(true), io.disconnect()), { threshold: 0.12 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${on ? 'in' : ''} ${className}`}>{children}</div>;
}

const Card = ({ icon, color, title, text }) => {
  const Icon = ICONS[icon];
  return (
    <article className="card" style={{ '--c': color }}>
      <span className="ico"><Icon aria-hidden="true" /></span>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
};

export default function App() {
  const f = EVENT.fields;
  const registerHref = EVENT.registrationUrl || '#register';
  const external = !!EVENT.registrationUrl;
  return (
    <>
      <div className="stars" aria-hidden="true" />
      <Nav />
      <main>
        <section id="home" className="hero">
          <div className="wrap hero-grid">
            <div>
              <p className="status"><i />{EVENT.status}</p>
              <h1>TRUST<br /><em>NO ONE.</em></h1>
              <p className="sub">One spaceship. A crew of suspects. Can you find the impostor?</p>
              <p className="lead">Join SPARK for an unforgettable Among Us-inspired college event. Work with your crew, complete your mission, and discover who is hiding in plain sight.</p>
              <div className="actions">
                <a className="btn btn-red" href={registerHref} {...(external && { target: '_blank', rel: 'noopener noreferrer' })}>REGISTER FOR THE MISSION</a>
                <a className="btn btn-ghost" href="#about">EXPLORE THE EVENT</a>
              </div>
              {(f.date || f.venue) && <ul className="badges">{f.date && <li>{f.date}</li>}{f.venue && <li>{f.venue}</li>}</ul>}
            </div>
            <div className="scene">
              <div className="glow" />
              <Crewmate className="c1" label="Red crewmate floating in space" />
              <Crewmate className="c2" color="#67C9F5" visor="#F5F5F5" />
              <Crewmate className="c3" color="#8DD982" visor="#10131F" />
              <Crewmate className="c4" color="#FFD166" visor="#B8A5F5" />
            </div>
          </div>
        </section>

        <section id="about">
          <div className="wrap">
            <Reveal>
              <h2>WELCOME ABOARD, CREWMATE.</h2>
              <p className="intro">A social deduction and teamwork experience inspired by Among Us. Collaborate with your crew, investigate suspicious activity, and work out who the impostor is.</p>
            </Reveal>
            <div className="grid3">{FEATURES.map((c) => <Reveal key={c.title}><Card {...c} /></Reveal>)}</div>
          </div>
        </section>

        <section id="briefing" className="alt">
          <div className="wrap">
            <h2>MISSION BRIEFING</h2>
            <div className="panel">
              <Countdown iso={EVENT.dateISO} />
              <dl>
                {BRIEF.map(([k, label]) => (
                  <div key={k} className={f[k] ? '' : 'ph'}>
                    <dt>{label}</dt>
                    <dd>{f[k] || `[INSERT ${label.toUpperCase()}]`}</dd>
                  </div>
                ))}
              </dl>
              <p className="note"><ShieldAlert aria-hidden="true" /> Items in brackets are placeholders, not confirmed details.</p>
            </div>
          </div>
        </section>

        <section id="missions">
          <div className="wrap">
            <h2>YOUR OBJECTIVES</h2>
            <p className="intro">Final activities depend on the event format confirmed by the organizers.</p>
            <div className="grid3">{MISSIONS.map((c) => <Reveal key={c.title}><Card {...c} /></Reveal>)}</div>
          </div>
        </section>

        <section id="rules" className="alt">
          <div className="wrap narrow">
            <h2>KNOW THE RULES. SURVIVE THE MISSION.</h2>
            <p className="proposed"><ShieldAlert aria-hidden="true" /> Proposed rules. Organizers must approve them before publication.</p>
            <Accordion items={RULES} numbered />
          </div>
        </section>

        <section id="register">
          <div className="wrap narrow">
            <h2>READY TO JOIN THE CREW?</h2>
            <p className="intro">Fill in the form to register. Fields marked * are required.</p>
            <RegisterForm />
          </div>
        </section>

        <section id="faq" className="alt">
          <div className="wrap narrow">
            <h2>QUESTIONS, CREWMATE?</h2>
            <Accordion items={FAQ} />
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap foot">
          <div>
            <a href="#home" className="logo">SPARK<i /></a>
            <p>Trust no one. Find the impostor.</p>
          </div>
          <nav aria-label="Footer">
            {NAV.map(([t, h]) => <a key={h} href={h}>{t}</a>)}
            {EVENT.contactUrl && <a href={EVENT.contactUrl}>Contact organizers</a>}
            {EVENT.social.map((s) => <a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer">{s.label}</a>)}
          </nav>
        </div>
        <p className="wrap legal"><Rocket aria-hidden="true" /> A fan-inspired college event by SPARK. Not an official Among Us event and not affiliated with or endorsed by Innersloth.</p>
      </footer>
    </>
  );
}
