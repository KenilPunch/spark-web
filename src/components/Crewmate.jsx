// Original CSS/SVG crewmate illustration (no external assets, no fan-art copying).
export default function Crewmate({ color = '#F45858', visor = '#67C9F5', className = '', style, label }) {
  const a11y = label ? { role: 'img', 'aria-label': label } : { 'aria-hidden': true };
  return (
    <svg viewBox="0 0 120 135" className={`crew ${className}`} style={style} {...a11y}>
      <rect x="14" y="56" width="22" height="46" rx="9" fill={color} />
      <rect x="14" y="56" width="22" height="46" rx="9" fill="#000" opacity=".28" />
      <path fill={color} d="M30 48C30 26 44 12 62 12S94 26 94 48V112c0 6-4 10-10 10h-8c-5 0-8-3-8-8v-6H56v6c0 5-3 8-8 8h-8c-6 0-10-4-10-10Z" />
      <path fill="#000" opacity=".18" d="M30 88h64v24c0 6-4 10-10 10h-8c-5 0-8-3-8-8v-6H56v6c0 5-3 8-8 8h-8c-6 0-10-4-10-10Z" />
      <rect x="50" y="32" width="44" height="28" rx="14" fill={visor} />
      <rect x="76" y="37" width="12" height="6" rx="3" fill="#fff" opacity=".75" />
    </svg>
  );
}
