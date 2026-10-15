import { useState } from 'react';
import { EVENT } from '../config.js';

const empty = { name: '', email: '', phone: '', team: '', role: '', consent: false };

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = 'Enter your full name.';
  if (!v.email.trim()) e.email = 'Enter your college email.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = 'Enter a valid email, like name@college.edu.';
  if (v.phone.trim() && !/^[+\d][\d\s-]{7,14}$/.test(v.phone.trim())) e.phone = 'Enter 8 to 15 digits, or leave this blank.';
  if (!v.consent) e.consent = 'Tick this box so SPARK can use your details for registration.';
  return e;
}

// status: idle | sending | success | error | demo
export default function RegisterForm() {
  const [v, setV] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const endpoint = EVENT.registrationEndpoint;
  const set = (k) => (e) => setV({ ...v, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value });
  const a11y = (k) => ({ id: `f-${k}`, value: v[k], onChange: set(k), 'aria-invalid': !!errors[k], 'aria-describedby': errors[k] ? `f-${k}-e` : undefined });
  // Plain function (not a component) so inputs keep focus while typing.
  const field = (k, label, req, rest = {}) => (
    <div className="field">
      <label htmlFor={`f-${k}`}>{label}{req ? <span aria-hidden="true"> *</span> : <small> (optional)</small>}</label>
      <input {...a11y(k)} required={req} {...rest} />
      {errors[k] && <p className="err" id={`f-${k}-e`} role="alert">{errors[k]}</p>}
    </div>
  );

  async function onSubmit(ev) {
    ev.preventDefault();
    if (status === 'sending') return; // blocks duplicate submits
    const errs = validate(v);
    setErrors(errs);
    if (Object.keys(errs).length) return document.getElementById(`f-${Object.keys(errs)[0]}`)?.focus();
    if (!endpoint) return setStatus('demo'); // nothing is sent or stored in demo mode
    setStatus('sending');
    try {
      const { consent, ...data } = v;
      const r = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(data) });
      if (!r.ok) throw new Error(r.status);
      setStatus('success');
      setV(empty);
    } catch {
      setStatus('error');
    }
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      {!endpoint && <p className="demo"><b>DEMO FORM.</b> No registration backend is connected, so nothing you type here is sent or saved.{EVENT.registrationUrl ? ' Use the official form button to register.' : ''}</p>}
      <div className="grid2">
        {field('name', 'Full name', true, { autoComplete: 'name' })}
        {field('email', 'College email', true, { type: 'email', autoComplete: 'email' })}
        {field('phone', 'Contact number', false, { type: 'tel', autoComplete: 'tel' })}
        {field('team', 'Team name')}
      </div>
      {field('role', 'Preferred role or team details')}
      <div className="field check">
        <input type="checkbox" id="f-consent" checked={v.consent} onChange={set('consent')} aria-invalid={!!errors.consent} aria-describedby={errors.consent ? 'f-consent-e' : undefined} />
        <label htmlFor="f-consent">I agree that SPARK may use these details only to manage my event registration. <span aria-hidden="true">*</span></label>
      </div>
      {errors.consent && <p className="err" id="f-consent-e" role="alert">{errors.consent}</p>}
      <div className="actions">
        <button className="btn btn-red" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'SENDING...' : endpoint ? 'SEND REGISTRATION' : 'TRY THE DEMO FORM'}</button>
        {EVENT.registrationUrl && <a className="btn btn-ghost" href={EVENT.registrationUrl} target="_blank" rel="noopener noreferrer">OPEN OFFICIAL FORM</a>}
      </div>
      <div role="status" aria-live="polite">
        {status === 'success' && <p className="msg ok">Registration sent. Watch your email for confirmation from SPARK.</p>}
        {status === 'error' && <p className="msg bad">Your registration was not sent. Check your connection and try again.</p>}
        {status === 'demo' && <p className="msg warn">Your entries look valid, but this is a demo: nothing was sent or saved. You are not registered yet.</p>}
      </div>
    </form>
  );
}
