// Icon helper — wraps Lucide icons as a React component, matches Cuido UI kit.
window.CuidoIcon = function Icon({ n, s = 22, color = 'currentColor' }) {
  const ref = React.useRef();
  React.useEffect(() => {
    if (!ref.current || !window.lucide || !lucide[n]) return;
    ref.current.innerHTML = '';
    const el = lucide.createElement(lucide[n]);
    el.setAttribute('width', s);
    el.setAttribute('height', s);
    el.setAttribute('stroke', color);
    el.setAttribute('stroke-width', '1.75');
    ref.current.appendChild(el);
  });
  return React.createElement('span', { ref, style: { display: 'inline-flex' } });
};
