import { ChevronDown } from 'lucide-react';

// Uses native <details>: keyboard accessible with no extra JavaScript. Used for Rules and FAQ.
export default function Accordion({ items, numbered }) {
  return (
    <div className="acc">
      {items.map(([q, a], i) => (
        <details key={q}>
          <summary>
            {numbered && <span className="n">{i + 1}</span>}
            <span>{q}</span>
            <ChevronDown aria-hidden="true" />
          </summary>
          <p>{a}</p>
        </details>
      ))}
    </div>
  );
}
