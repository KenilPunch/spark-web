import { useEffect, useState } from 'react';

// Shows a live countdown ONLY when a valid date is configured. Otherwise shows an honest "TBA".
export default function Countdown({ iso }) {
  const target = iso ? new Date(iso).getTime() : NaN;
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    if (Number.isNaN(target)) return;
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, [target]);

  if (Number.isNaN(target)) return <p className="tba">MISSION DATE TO BE ANNOUNCED</p>;
  const s = Math.floor((target - now) / 1000);
  if (s <= 0) return <p className="tba">THIS MISSION HAS STARTED OR ENDED. WATCH FOR UPDATES.</p>;
  const parts = [['Days', Math.floor(s / 86400)], ['Hours', Math.floor(s / 3600) % 24], ['Minutes', Math.floor(s / 60) % 60], ['Seconds', s % 60]];
  return (
    <div className="count" role="timer" aria-label={`${parts[0][1]} days, ${parts[1][1]} hours, ${parts[2][1]} minutes left`}>
      {parts.map(([l, v]) => <div key={l}><b>{String(v).padStart(2, '0')}</b><span>{l}</span></div>)}
    </div>
  );
}
