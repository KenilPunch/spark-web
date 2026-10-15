import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV } from '../config.js';

// Sticky, slightly transparent navigation. On small screens the links collapse into a menu.
export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="nav">
      <div className="wrap nav-in">
        <a href="#home" className="logo" onClick={close} aria-label="SPARK home">SPARK<i /></a>
        <button className="menu-btn" aria-expanded={open} aria-controls="nav-links" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
        <nav id="nav-links" aria-label="Main" className={open ? 'open' : ''}>
          {NAV.map(([t, h]) => <a key={h} href={h} onClick={close}>{t}</a>)}
          <a href="#register" className="btn btn-red btn-sm" onClick={close}>JOIN THE MISSION</a>
        </nav>
      </div>
    </header>
  );
}
