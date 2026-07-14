/* @ds-bundle: {"format":4,"namespace":"CuidoSistemaDeDiseO_5a985d","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Slider","sourcePath":"components/forms/Slider.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"GlassCard","sourcePath":"components/surfaces/GlassCard.jsx"},{"name":"ProgressRing","sourcePath":"components/surfaces/ProgressRing.jsx"},{"name":"StatCard","sourcePath":"components/surfaces/StatCard.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"539ebab7ddbf","components/core/Badge.jsx":"8c94c09b30de","components/core/Button.jsx":"33bd6873aba9","components/core/Chip.jsx":"0a3b9dec8c9a","components/core/IconButton.jsx":"de5c2ec0edd1","components/feedback/Dialog.jsx":"471876938397","components/feedback/Toast.jsx":"01fff9454e74","components/feedback/Tooltip.jsx":"4f336ffd99d7","components/forms/Checkbox.jsx":"f7c3add6ff92","components/forms/Input.jsx":"cd4114d60073","components/forms/Radio.jsx":"43b722363343","components/forms/Select.jsx":"ed0c635b79e7","components/forms/Slider.jsx":"a344e44c014a","components/forms/Switch.jsx":"df4784f3a196","components/forms/Textarea.jsx":"3c14c7a37e2b","components/navigation/Tabs.jsx":"20b1f674f7c0","components/surfaces/Card.jsx":"6be4175af60f","components/surfaces/GlassCard.jsx":"6f28d89e9fa5","components/surfaces/ProgressRing.jsx":"fafe4a94caf5","components/surfaces/StatCard.jsx":"84541963b4d7","ui_kits/app_movil/HomeScreen.jsx":"cf0154c95eaa","ui_kits/app_movil/RegistrarScreen.jsx":"99892bdf332e","ui_kits/app_movil/ResumenScreen.jsx":"4c3ba05ec9cd","ui_kits/dashboard/Sidebar.jsx":"e3f1cc3d58af","ui_kits/dashboard/Widgets.jsx":"d94d8a43aede"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CuidoSistemaDeDiseO_5a985d = window.CuidoSistemaDeDiseO_5a985d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  lime: 'var(--lime-300)',
  lavender: 'var(--lavender)',
  purple: 'var(--lavender-strong)',
  cyan: 'var(--cyan)',
  peach: 'var(--peach)',
  mint: 'var(--mint)',
  ink: 'var(--ink-800)'
};

/**
 * Avatar circular. Muestra imagen, o iniciales sobre fondo de acento.
 */
function Avatar({
  src = null,
  name = '',
  size = 44,
  tone = 'lavender',
  ring = false,
  style = {},
  ...rest
}) {
  const initials = name.split(' ').filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  const bg = TONES[tone] || TONES.lavender;
  const fg = tone === 'ink' || tone === 'purple' ? 'var(--white)' : 'var(--ink-800)';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-full)',
      overflow: 'hidden',
      background: bg,
      color: fg,
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: Math.max(11, size * 0.36),
      boxShadow: ring ? '0 0 0 2px var(--surface-card), 0 0 0 4px var(--lime-300)' : 'none',
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials || '·');
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Etiqueta de estado compacta. Colores suaves de acento.
 */
function Badge({
  tone = 'neutral',
  size = 'md',
  dot = false,
  style = {},
  children,
  ...rest
}) {
  const tones = {
    neutral: {
      background: 'var(--ink-150)',
      color: 'var(--ink-700)'
    },
    lime: {
      background: 'var(--lime-200)',
      color: 'var(--ink-800)'
    },
    lavender: {
      background: 'var(--lavender)',
      color: 'var(--ink-800)'
    },
    purple: {
      background: 'var(--lavender-strong)',
      color: 'var(--white)'
    },
    cyan: {
      background: 'var(--cyan)',
      color: 'var(--ink-800)'
    },
    peach: {
      background: 'var(--peach)',
      color: 'var(--ink-800)'
    },
    ink: {
      background: 'var(--surface-inverse)',
      color: 'var(--text-inverse)'
    },
    success: {
      background: color('--success', 0.16),
      color: 'var(--success)'
    },
    warning: {
      background: color('--warning', 0.18),
      color: '#8a6216'
    },
    danger: {
      background: color('--danger', 0.16),
      color: 'var(--danger)'
    }
  };
  const t = tones[tone] || tones.neutral;
  const sz = size === 'sm' ? {
    fontSize: 'var(--text-3xs)',
    padding: '2px 8px',
    height: 20
  } : {
    fontSize: 'var(--text-2xs)',
    padding: '3px 10px',
    height: 24
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: sz.height,
      padding: sz.padding,
      fontFamily: 'var(--font-sans)',
      fontSize: sz.fontSize,
      fontWeight: 'var(--weight-semibold)',
      lineHeight: 1,
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap',
      ...t,
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'currentColor'
    }
  }), children);
}
function color(varName, alpha) {
  return `color-mix(in srgb, var(${varName}) ${Math.round(alpha * 100)}%, transparent)`;
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Botón principal de Cuido. Pill por defecto, acento lima.
 */
function Button({
  variant = 'primary',
  size = 'md',
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  disabled = false,
  type = 'button',
  style = {},
  children,
  ...rest
}) {
  const sizes = {
    sm: {
      height: 34,
      padding: '0 16px',
      font: 'var(--text-sm)',
      gap: 6
    },
    md: {
      height: 44,
      padding: '0 22px',
      font: 'var(--text-md)',
      gap: 8
    },
    lg: {
      height: 54,
      padding: '0 30px',
      font: 'var(--text-lg)',
      gap: 10
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: 'var(--accent)',
      color: 'var(--accent-contrast)',
      border: '1px solid transparent'
    },
    secondary: {
      background: 'var(--surface-inverse)',
      color: 'var(--text-inverse)',
      border: '1px solid transparent'
    },
    outline: {
      background: 'transparent',
      color: 'var(--ink-800)',
      border: '1px solid var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--ink-800)',
      border: '1px solid transparent'
    },
    glass: {
      background: 'var(--glass-fill)',
      color: 'var(--ink-800)',
      border: '1px solid var(--glass-border)',
      backdropFilter: 'var(--glass-blur)',
      WebkitBackdropFilter: 'var(--glass-blur)'
    }
  };
  const v = variants[variant] || variants.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    "data-variant": variant,
    className: "cuido-btn",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      height: s.height,
      padding: s.padding,
      width: fullWidth ? '100%' : 'auto',
      font: 'var(--type-body)',
      fontSize: s.font,
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: '0.01em',
      borderRadius: 'var(--radius-button)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'transform var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
      ...v,
      ...style
    }
  }, rest), iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      flex: '0 0 auto'
    }
  }, iconLeft), children, iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      flex: '0 0 auto'
    }
  }, iconRight), /*#__PURE__*/React.createElement("style", null, `
        .cuido-btn:not(:disabled):hover { filter: brightness(0.97); }
        .cuido-btn[data-variant="primary"]:not(:disabled):hover { background: var(--accent-hover); }
        .cuido-btn[data-variant="ghost"]:not(:disabled):hover,
        .cuido-btn[data-variant="outline"]:not(:disabled):hover { background: var(--ink-100); }
        .cuido-btn:not(:disabled):active { transform: scale(0.97); }
      `));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Chip interactivo / seleccionable (filtros, categorías de cuidado).
 */
function Chip({
  selected = false,
  iconLeft = null,
  count = null,
  onClose = null,
  disabled = false,
  style = {},
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    "aria-pressed": selected,
    className: "cuido-chip",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      height: 38,
      padding: iconLeft ? '0 16px 0 12px' : '0 16px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: selected ? 'var(--ink-800)' : 'var(--ink-700)',
      background: selected ? 'var(--surface-card)' : 'transparent',
      border: '1px solid ' + (selected ? 'transparent' : 'var(--border-default)'),
      boxShadow: selected ? 'var(--shadow-sm)' : 'none',
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'all var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, rest), iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, iconLeft), children, count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 20,
      height: 20,
      padding: '0 6px',
      borderRadius: 'var(--radius-pill)',
      background: selected ? 'var(--lavender-strong)' : 'var(--ink-150)',
      color: selected ? 'var(--white)' : 'var(--ink-600)',
      fontSize: 'var(--text-3xs)',
      fontWeight: 'var(--weight-bold)'
    }
  }, count), onClose && /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onClose(e);
    },
    style: {
      display: 'inline-flex',
      marginLeft: 2,
      opacity: 0.6
    }
  }, "\u2715"), /*#__PURE__*/React.createElement("style", null, `
        .cuido-chip:not([aria-pressed="true"]):not(:disabled):hover { background: var(--ink-100); }
        .cuido-chip:not(:disabled):active { transform: scale(0.97); }
      `));
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Botón circular solo-icono.
 */
function IconButton({
  variant = 'ghost',
  size = 'md',
  label,
  disabled = false,
  style = {},
  children,
  ...rest
}) {
  const sizes = {
    sm: 34,
    md: 42,
    lg: 52
  };
  const dim = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: 'var(--accent)',
      color: 'var(--accent-contrast)',
      border: '1px solid transparent'
    },
    dark: {
      background: 'var(--surface-inverse)',
      color: 'var(--text-inverse)',
      border: '1px solid transparent'
    },
    outline: {
      background: 'var(--surface-card)',
      color: 'var(--ink-800)',
      border: '1px solid var(--border-default)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--ink-800)',
      border: '1px solid transparent'
    },
    glass: {
      background: 'var(--glass-fill)',
      color: 'var(--ink-800)',
      border: '1px solid var(--glass-border)',
      backdropFilter: 'var(--glass-blur)',
      WebkitBackdropFilter: 'var(--glass-blur)'
    }
  };
  const v = variants[variant] || variants.ghost;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    className: "cuido-iconbtn",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dim,
      height: dim,
      borderRadius: 'var(--radius-full)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'transform var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out)',
      ...v,
      ...style
    }
  }, rest), children, /*#__PURE__*/React.createElement("style", null, `
        .cuido-iconbtn:not(:disabled):hover { filter: brightness(0.96); }
        .cuido-iconbtn:not(:disabled):active { transform: scale(0.92); }
      `));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
/** Modal / hoja centrada con sobrefondo. */
function Dialog({
  open = false,
  onClose,
  title = null,
  description = null,
  footer = null,
  width = 460,
  style = {},
  children
}) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => e.key === 'Escape' && onClose && onClose();
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
      background: 'color-mix(in srgb, var(--ink-900) 42%, transparent)',
      backdropFilter: 'blur(4px)',
      WebkitBackdropFilter: 'blur(4px)',
      animation: 'cuidoFade var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-sheet)',
      boxShadow: 'var(--shadow-xl)',
      padding: 'var(--space-8)',
      animation: 'cuidoPop var(--dur-base) var(--ease-spring)',
      ...style
    }
  }, title && /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-h3)',
      color: 'var(--text-strong)',
      marginBottom: description ? 8 : 16
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-muted)',
      marginBottom: 20
    }
  }, description), children, footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 12,
      marginTop: 24
    }
  }, footer)), /*#__PURE__*/React.createElement("style", null, `
        @keyframes cuidoFade { from { opacity: 0; } to { opacity: 1; } }
        @keyframes cuidoPop { from { opacity: 0; transform: translateY(12px) scale(0.97); } to { opacity: 1; transform: none; } }
      `));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Notificación breve (píldora). Renderiza en línea; gestiona su visibilidad tú. */
function Toast({
  tone = 'default',
  icon = null,
  title,
  description = null,
  onClose = null,
  style = {},
  ...rest
}) {
  const tones = {
    default: {
      background: 'var(--surface-inverse)',
      color: 'var(--white)'
    },
    lime: {
      background: 'var(--lime-300)',
      color: 'var(--ink-800)'
    },
    success: {
      background: 'var(--success)',
      color: 'var(--white)'
    },
    danger: {
      background: 'var(--danger)',
      color: 'var(--white)'
    }
  };
  const t = tones[tone] || tones.default;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      padding: '14px 18px',
      minWidth: 260,
      maxWidth: 420,
      borderRadius: 'var(--radius-pill)',
      boxShadow: 'var(--shadow-lg)',
      ...t,
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      flex: '0 0 auto'
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-label)',
      fontSize: 'var(--text-sm)'
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body-sm)',
      fontSize: 'var(--text-xs)',
      opacity: 0.8
    }
  }, description)), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Cerrar",
    style: {
      background: 'none',
      border: 'none',
      color: 'inherit',
      cursor: 'pointer',
      opacity: 0.7,
      fontSize: 16,
      padding: 0,
      lineHeight: 1
    }
  }, "\u2715"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
/** Tooltip en hover/focus. Envuelve un único hijo. */
function Tooltip({
  content,
  placement = 'top',
  children,
  style = {}
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginBottom: 8
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginTop: 8
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginRight: 8
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginLeft: 8
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, children, show && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      zIndex: 900,
      whiteSpace: 'nowrap',
      padding: '7px 12px',
      background: 'var(--surface-inverse)',
      color: 'var(--white)',
      font: 'var(--type-body-sm)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-medium)',
      borderRadius: 'var(--radius-sm)',
      boxShadow: 'var(--shadow-md)',
      pointerEvents: 'none',
      animation: 'cuidoTip var(--dur-fast) var(--ease-out)',
      ...pos[placement],
      ...style
    }
  }, content, /*#__PURE__*/React.createElement("style", null, `@keyframes cuidoTip { from { opacity: 0; } to { opacity: 1; } }`)));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Casilla de verificación. Marcada = relleno púrpura con check blanco (motivo de marca). */
function Checkbox({
  checked = false,
  onChange,
  label = null,
  shape = 'circle',
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const autoId = React.useId();
  const fieldId = id || autoId;
  const radius = shape === 'square' ? 'var(--radius-xs)' : 'var(--radius-full)';
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 24,
      height: 24,
      flex: '0 0 auto',
      borderRadius: radius,
      background: checked ? 'var(--lavender-strong)' : 'var(--surface-card)',
      border: '2px solid ' + (checked ? 'var(--lavender-strong)' : 'var(--border-default)'),
      color: 'var(--white)',
      transition: 'all var(--dur-fast) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    style: {
      opacity: checked ? 1 : 0,
      transition: 'opacity var(--dur-fast)'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5",
    stroke: "currentColor",
    strokeWidth: "3.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Campo de texto. Forma pill, borde sutil, foco de tinta.
 */
function Input({
  label = null,
  hint = null,
  error = null,
  iconLeft = null,
  iconRight = null,
  size = 'md',
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const autoId = React.useId();
  const fieldId = id || autoId;
  const h = size === 'sm' ? 40 : size === 'lg' ? 56 : 48;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "cuido-input-wrap",
    "data-error": !!error,
    "data-disabled": disabled,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      height: h,
      padding: '0 18px',
      background: 'var(--surface-card)',
      border: '1px solid ' + (error ? 'var(--danger)' : 'var(--border-default)'),
      borderRadius: 'var(--radius-input)',
      opacity: disabled ? 0.55 : 1,
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)'
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--text-subtle)'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    disabled: disabled,
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      font: 'var(--type-body)',
      fontSize: size === 'sm' ? 'var(--text-sm)' : 'var(--text-md)',
      color: 'var(--text-strong)',
      ...style
    }
  }, rest)), iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--text-subtle)'
    }
  }, iconRight)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--danger)' : 'var(--text-muted)'
    }
  }, error || hint), /*#__PURE__*/React.createElement("style", null, `
        .cuido-input-wrap:focus-within { border-color: var(--ink-800); box-shadow: var(--ring-focus); }
      `));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Grupo de opciones exclusivas (radio). */
function Radio({
  value,
  checked = false,
  onChange,
  label = null,
  name,
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const autoId = React.useId();
  const fieldId = id || autoId;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 24,
      height: 24,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-full)',
      background: 'var(--surface-card)',
      border: '2px solid ' + (checked ? 'var(--ink-800)' : 'var(--border-default)'),
      transition: 'all var(--dur-fast) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 11,
      height: 11,
      borderRadius: '50%',
      background: 'var(--ink-800)',
      transform: checked ? 'scale(1)' : 'scale(0)',
      transition: 'transform var(--dur-fast) var(--ease-spring)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Selector desplegable nativo con estilo Cuido. */
function Select({
  label = null,
  hint = null,
  error = null,
  options = [],
  placeholder = null,
  size = 'md',
  disabled = false,
  id,
  style = {},
  children,
  ...rest
}) {
  const autoId = React.useId();
  const fieldId = id || autoId;
  const h = size === 'sm' ? 40 : size === 'lg' ? 56 : 48;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    disabled: disabled,
    className: "cuido-select",
    style: {
      width: '100%',
      height: h,
      padding: '0 44px 0 18px',
      appearance: 'none',
      WebkitAppearance: 'none',
      border: '1px solid ' + (error ? 'var(--danger)' : 'var(--border-default)'),
      borderRadius: 'var(--radius-input)',
      background: 'var(--surface-card)',
      font: 'var(--type-body)',
      fontSize: size === 'sm' ? 'var(--text-sm)' : 'var(--text-md)',
      color: 'var(--text-strong)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      outline: 'none',
      opacity: disabled ? 0.55 : 1,
      ...style
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const lab = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lab);
  }), children), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      right: 18,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-muted)',
      fontSize: 12
    }
  }, "\u25BE"), /*#__PURE__*/React.createElement("style", null, `.cuido-select:focus { border-color: var(--ink-800); box-shadow: var(--ring-focus); }`)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Slider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Deslizador de rango. Pista rellena en lima, perilla de tinta. */
function Slider({
  min = 0,
  max = 100,
  step = 1,
  value,
  defaultValue = 50,
  onChange,
  label = null,
  showValue = false,
  format = v => v,
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const autoId = React.useId();
  const fieldId = id || autoId;
  const [internal, setInternal] = React.useState(defaultValue);
  const val = value != null ? value : internal;
  const pct = (val - min) / (max - min) * 100;
  const handle = e => {
    const v = Number(e.target.value);
    if (value == null) setInternal(v);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      ...style
    }
  }, (label || showValue) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 8
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-strong)'
    }
  }, label), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-muted)'
    }
  }, format(val))), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: "range",
    min: min,
    max: max,
    step: step,
    value: val,
    onChange: handle,
    disabled: disabled,
    className: "cuido-slider",
    style: {
      width: '100%',
      height: 26,
      appearance: 'none',
      WebkitAppearance: 'none',
      background: 'transparent',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      '--pct': pct + '%'
    }
  }, rest)), /*#__PURE__*/React.createElement("style", null, `
        .cuido-slider { --pct: 50%; }
        .cuido-slider::-webkit-slider-runnable-track {
          height: 8px; border-radius: 999px;
          background: linear-gradient(to right, var(--lime-300) var(--pct), var(--ink-200) var(--pct));
        }
        .cuido-slider::-moz-range-track { height: 8px; border-radius: 999px; background: var(--ink-200); }
        .cuido-slider::-moz-range-progress { height: 8px; border-radius: 999px; background: var(--lime-300); }
        .cuido-slider::-webkit-slider-thumb {
          -webkit-appearance: none; appearance: none; margin-top: -7px;
          width: 22px; height: 22px; border-radius: 50%;
          background: var(--ink-800); border: 3px solid var(--white); box-shadow: var(--shadow-sm);
        }
        .cuido-slider::-moz-range-thumb {
          width: 22px; height: 22px; border-radius: 50%;
          background: var(--ink-800); border: 3px solid var(--white); box-shadow: var(--shadow-sm);
        }
        .cuido-slider:focus-visible { outline: none; }
        .cuido-slider:focus-visible::-webkit-slider-thumb { box-shadow: var(--ring-focus); }
      `));
}
Object.assign(__ds_scope, { Slider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Slider.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Interruptor on/off. Activo = pista lima. */
function Switch({
  checked = false,
  onChange,
  label = null,
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const autoId = React.useId();
  const fieldId = id || autoId;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: "checkbox",
    role: "switch",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      position: 'relative',
      width: 50,
      height: 30,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--lime-300)' : 'var(--ink-200)',
      border: '1px solid ' + (checked ? 'var(--lime-500)' : 'var(--border-default)'),
      transition: 'background var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: checked ? 22 : 3,
      width: 22,
      height: 22,
      borderRadius: '50%',
      background: checked ? 'var(--ink-800)' : 'var(--white)',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--dur-base) var(--ease-spring), background var(--dur-base)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Área de texto multilínea. */
function Textarea({
  label = null,
  hint = null,
  error = null,
  rows = 4,
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const autoId = React.useId();
  const fieldId = id || autoId;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: fieldId,
    rows: rows,
    disabled: disabled,
    className: "cuido-textarea",
    style: {
      width: '100%',
      padding: '14px 18px',
      border: '1px solid ' + (error ? 'var(--danger)' : 'var(--border-default)'),
      borderRadius: 'var(--radius-lg)',
      background: 'var(--surface-card)',
      font: 'var(--type-body)',
      color: 'var(--text-strong)',
      resize: 'vertical',
      outline: 'none',
      opacity: disabled ? 0.55 : 1,
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--danger)' : 'var(--text-muted)'
    }
  }, error || hint), /*#__PURE__*/React.createElement("style", null, `.cuido-textarea:focus { border-color: var(--ink-800); box-shadow: var(--ring-focus); }`));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Pestañas segmentadas tipo píldora. Controlado o no controlado. */
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  size = 'md',
  style = {},
  ...rest
}) {
  const first = defaultValue ?? (items[0] && (typeof items[0] === 'string' ? items[0] : items[0].value));
  const [internal, setInternal] = React.useState(first);
  const active = value != null ? value : internal;
  const h = size === 'sm' ? 36 : 44;
  const select = v => {
    if (value == null) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      padding: 4,
      background: 'var(--surface-sunken)',
      borderRadius: 'var(--radius-pill)',
      ...style
    }
  }, rest), items.map(it => {
    const val = typeof it === 'string' ? it : it.value;
    const lab = typeof it === 'string' ? it : it.label;
    const count = typeof it === 'object' ? it.count : null;
    const on = val === active;
    return /*#__PURE__*/React.createElement("button", {
      key: val,
      role: "tab",
      "aria-selected": on,
      onClick: () => select(val),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 7,
        height: h,
        padding: '0 18px',
        border: 'none',
        cursor: 'pointer',
        borderRadius: 'var(--radius-pill)',
        background: on ? 'var(--surface-card)' : 'transparent',
        color: on ? 'var(--ink-800)' : 'var(--text-muted)',
        boxShadow: on ? 'var(--shadow-sm)' : 'none',
        font: 'var(--type-label)',
        fontSize: size === 'sm' ? 'var(--text-xs)' : 'var(--text-sm)',
        transition: 'all var(--dur-fast) var(--ease-out)'
      }
    }, lab, count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 20,
        height: 20,
        padding: '0 6px',
        borderRadius: 'var(--radius-pill)',
        background: on ? 'var(--lavender-strong)' : 'var(--ink-200)',
        color: on ? 'var(--white)' : 'var(--ink-600)',
        fontSize: 'var(--text-3xs)',
        fontWeight: 'var(--weight-bold)'
      }
    }, count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Contenedor de superficie base. Redondeado, sombra suave. */
function Card({
  tone = 'default',
  padding = 'md',
  interactive = false,
  style = {},
  children,
  ...rest
}) {
  const tones = {
    default: {
      background: 'var(--surface-card)',
      color: 'var(--text-body)'
    },
    sunken: {
      background: 'var(--surface-sunken)',
      color: 'var(--text-body)'
    },
    lime: {
      background: 'var(--lime-300)',
      color: 'var(--ink-800)'
    },
    lavender: {
      background: 'var(--lavender)',
      color: 'var(--ink-800)'
    },
    peach: {
      background: 'var(--peach)',
      color: 'var(--ink-800)'
    },
    ink: {
      background: 'var(--surface-inverse)',
      color: 'var(--text-inverse)'
    }
  };
  const pads = {
    none: 0,
    sm: 'var(--space-4)',
    md: 'var(--pad-card)',
    lg: 'var(--space-8)'
  };
  const t = tones[tone] || tones.default;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: interactive ? 'cuido-card-int' : undefined,
    style: {
      padding: pads[padding],
      borderRadius: 'var(--radius-card)',
      boxShadow: 'var(--shadow-sm)',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      cursor: interactive ? 'pointer' : 'default',
      ...t,
      ...style
    }
  }, rest), children, interactive && /*#__PURE__*/React.createElement("style", null, `.cuido-card-int:hover { transform: translateY(-2px); box-shadow: var(--shadow-md); }`));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/GlassCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Tarjeta de vidrio esmerilado (frost). Se apoya sobre fondos con imagen o gradiente. */
function GlassCard({
  scheme = 'light',
  padding = 'md',
  style = {},
  children,
  ...rest
}) {
  const pads = {
    none: 0,
    sm: 'var(--space-4)',
    md: 'var(--pad-card)',
    lg: 'var(--space-8)'
  };
  const schemes = {
    light: {
      background: 'var(--glass-fill)',
      color: 'var(--ink-800)',
      border: '1px solid var(--glass-border)'
    },
    dark: {
      background: 'var(--glass-fill-dark)',
      color: 'var(--white)',
      border: '1px solid color-mix(in srgb, var(--white) 22%, transparent)'
    }
  };
  const s = schemes[scheme] || schemes.light;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      padding: pads[padding],
      borderRadius: 'var(--radius-card)',
      backdropFilter: 'var(--glass-blur)',
      WebkitBackdropFilter: 'var(--glass-blur)',
      boxShadow: scheme === 'light' ? 'var(--shadow-inset-glass), var(--shadow-md)' : 'var(--shadow-md)',
      ...s,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { GlassCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/GlassCard.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/ProgressRing.jsx
try { (() => {
/** Anillo de progreso circular. Firma visual del dashboard. */
function ProgressRing({
  value = 0,
  size = 140,
  thickness = 16,
  track = 'var(--ink-200)',
  color = 'var(--lime-300)',
  label = null,
  caption = null,
  style = {}
}) {
  const r = (size - thickness) / 2;
  const circ = 2 * Math.PI * r;
  const dash = Math.min(100, Math.max(0, value)) / 100 * circ;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: size,
      height: size,
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    style: {
      transform: 'rotate(-90deg)'
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: track,
    strokeWidth: thickness
  }), /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: color,
    strokeWidth: thickness,
    strokeLinecap: "round",
    strokeDasharray: `${dash} ${circ}`,
    style: {
      transition: 'stroke-dasharray var(--dur-slow) var(--ease-out)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, label != null && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-h3)',
      fontSize: size * 0.2,
      color: 'var(--text-strong)',
      lineHeight: 1
    }
  }, label), caption && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)',
      marginTop: 4
    }
  }, caption)));
}
Object.assign(__ds_scope, { ProgressRing });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/ProgressRing.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Tarjeta de métrica: título, valor grande, delta y acción. Del dashboard del moodboard. */
function StatCard({
  title,
  value,
  unit = null,
  delta = null,
  deltaDir = 'up',
  icon = null,
  tone = 'default',
  action = null,
  style = {},
  ...rest
}) {
  const tones = {
    default: {
      background: 'var(--surface-card)',
      color: 'var(--text-strong)'
    },
    lime: {
      background: 'var(--lime-300)',
      color: 'var(--ink-800)'
    },
    ink: {
      background: 'var(--surface-inverse)',
      color: 'var(--white)'
    },
    sunken: {
      background: 'var(--surface-sunken)',
      color: 'var(--text-strong)'
    }
  };
  const t = tones[tone] || tones.default;
  const deltaColor = deltaDir === 'down' ? 'var(--danger)' : 'var(--success)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      padding: 'var(--space-5)',
      borderRadius: 'var(--radius-card)',
      boxShadow: 'var(--shadow-sm)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      ...t,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      font: 'var(--type-label)',
      fontSize: 'var(--text-sm)',
      opacity: 0.72
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, icon), title), action), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-h2)',
      fontSize: 'var(--text-3xl)',
      letterSpacing: 'var(--tracking-tight)',
      lineHeight: 1
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      opacity: 0.6
    }
  }, unit)), delta != null && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      font: 'var(--type-body-sm)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-semibold)',
      color: deltaColor
    }
  }, deltaDir === 'down' ? '↓' : '↑', " ", delta));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/StatCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app_movil/HomeScreen.jsx
try { (() => {
/* HomeScreen — pantalla principal de la app de cuidado.
   Lista de actividades registradas sobre gradiente cálido, con filtros. */
(function () {
  const NS = window.CuidoSistemaDeDiseO_5a985d;
  function HomeScreen({
    Icon,
    onOpenRegistrar
  }) {
    const {
      Tabs,
      GlassCard,
      IconButton,
      Avatar,
      Badge
    } = NS;
    const [filter, setFilter] = React.useState('todas');
    const activities = [{
      id: 1,
      title: 'Preparar comida',
      cat: 'Cocina',
      tone: 'peach',
      hours: '2 h',
      value: '$18.400',
      icon: 'CookingPot',
      imp: true
    }, {
      id: 2,
      title: 'Cuidado de niñas y niños',
      cat: 'Cuidado directo',
      tone: 'lavender',
      hours: '4 h',
      value: '$36.800',
      icon: 'Baby',
      imp: true
    }, {
      id: 3,
      title: 'Limpieza del hogar',
      cat: 'Hogar',
      tone: 'cyan',
      hours: '1.5 h',
      value: '$13.800',
      icon: 'Sparkles',
      imp: false
    }, {
      id: 4,
      title: 'Acompañar a cita médica',
      cat: 'Salud',
      tone: 'mint',
      hours: '2 h',
      value: '$18.400',
      icon: 'Stethoscope',
      imp: false
    }];
    const shown = filter === 'imp' ? activities.filter(a => a.imp) : activities;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--grad-warm)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '54px 22px 14px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-eyebrow)',
        textTransform: 'uppercase',
        letterSpacing: 'var(--tracking-wider)',
        color: 'var(--ink-600)'
      }
    }, "Martes, 12 jul"), /*#__PURE__*/React.createElement(Avatar, {
      name: "Mar\xEDa L\xF3pez",
      tone: "ink",
      size: 38,
      ring: true
    })), /*#__PURE__*/React.createElement("h1", {
      style: {
        font: 'var(--type-h1)',
        fontSize: 'var(--text-3xl)',
        color: 'var(--ink-800)',
        letterSpacing: 'var(--tracking-tight)'
      }
    }, "Tus cuidados"), /*#__PURE__*/React.createElement("p", {
      style: {
        font: 'var(--type-body-sm)',
        color: 'var(--ink-600)',
        marginTop: 4
      }
    }, "Hoy has aportado ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: 'var(--ink-800)'
      }
    }, "$87.400"), " en trabajo no remunerado")), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '4px 22px 12px'
      }
    }, /*#__PURE__*/React.createElement(Tabs, {
      size: "sm",
      value: filter,
      onChange: setFilter,
      items: [{
        value: 'todas',
        label: 'Todas',
        count: activities.length
      }, {
        value: 'imp',
        label: 'Importantes'
      }, {
        value: 'hoy',
        label: 'Hoy'
      }]
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: 'auto',
        padding: '4px 22px 120px',
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, shown.map(a => /*#__PURE__*/React.createElement(GlassCard, {
      key: a.id,
      scheme: "light",
      padding: "none",
      style: {
        padding: 16,
        display: 'flex',
        alignItems: 'center',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 46,
        height: 46,
        flex: '0 0 auto',
        borderRadius: 'var(--radius-full)',
        background: `var(--${a.tone})`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--ink-800)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      n: a.icon,
      s: 22
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-h4)',
        fontSize: 'var(--text-lg)',
        color: 'var(--ink-800)'
      }
    }, a.title), a.imp && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 7,
        height: 7,
        borderRadius: '50%',
        background: 'var(--lavender-strong)'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-body-sm)',
        fontSize: 'var(--text-xs)',
        color: 'var(--ink-600)',
        marginTop: 2
      }
    }, a.cat, " \xB7 ", a.hours)), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'right'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-label)',
        color: 'var(--ink-800)'
      }
    }, a.value), /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-body-sm)',
        fontSize: '10px',
        color: 'var(--ink-500)'
      }
    }, "valor est."))))));
  }
  window.CuidoHomeScreen = HomeScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app_movil/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app_movil/RegistrarScreen.jsx
try { (() => {
/* RegistrarScreen — registrar una nueva actividad de cuidado. */
(function () {
  const NS = window.CuidoSistemaDeDiseO_5a985d;
  function RegistrarScreen({
    Icon,
    onDone
  }) {
    const {
      Select,
      Slider,
      Textarea,
      Button,
      Chip,
      Card
    } = NS;
    const [hours, setHours] = React.useState(2);
    const [cat, setCat] = React.useState('Cocina');
    const rate = 9200; // valor por hora estimado
    const value = (hours * rate).toLocaleString('es-CO');
    return /*#__PURE__*/React.createElement("div", {
      style: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--surface-page)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '54px 22px 10px',
        display: 'flex',
        alignItems: 'center',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: onDone,
      style: {
        border: 'none',
        background: 'var(--surface-card)',
        width: 40,
        height: 40,
        borderRadius: '50%',
        boxShadow: 'var(--shadow-sm)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      n: "ArrowLeft",
      s: 20
    })), /*#__PURE__*/React.createElement("h1", {
      style: {
        font: 'var(--type-h3)',
        color: 'var(--ink-800)'
      }
    }, "Registrar cuidado")), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: 'auto',
        padding: '10px 22px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: 22
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-label)',
        marginBottom: 10,
        color: 'var(--text-strong)'
      }
    }, "Categor\xEDa"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8
      }
    }, ['Cocina', 'Cuidado directo', 'Hogar', 'Salud', 'Acompañamiento'].map(c => /*#__PURE__*/React.createElement(Chip, {
      key: c,
      selected: cat === c,
      onClick: () => setCat(c)
    }, c)))), /*#__PURE__*/React.createElement(Slider, {
      label: "Tiempo dedicado",
      min: 0.5,
      max: 12,
      step: 0.5,
      value: hours,
      showValue: true,
      format: v => `${v} h`,
      onChange: e => setHours(Number(e.target.value))
    }), /*#__PURE__*/React.createElement(Card, {
      tone: "lime",
      padding: "md",
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-eyebrow)',
        textTransform: 'uppercase',
        letterSpacing: 'var(--tracking-wider)',
        opacity: 0.6
      }
    }, "Valor econ\xF3mico estimado"), /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-h2)',
        fontSize: 'var(--text-3xl)',
        letterSpacing: 'var(--tracking-tight)',
        marginTop: 4
      }
    }, "$", value)), /*#__PURE__*/React.createElement(Icon, {
      n: "HandCoins",
      s: 40
    })), /*#__PURE__*/React.createElement(Textarea, {
      label: "Notas (opcional)",
      rows: 3,
      placeholder: "Describe la actividad\u2026"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '12px 22px 30px',
        background: 'var(--surface-page)'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      fullWidth: true,
      size: "lg",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        n: "Check",
        s: 20
      }),
      onClick: onDone
    }, "Guardar actividad")));
  }
  window.CuidoRegistrarScreen = RegistrarScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app_movil/RegistrarScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app_movil/ResumenScreen.jsx
try { (() => {
/* ResumenScreen — resumen del valor económico mensual del cuidado. */
(function () {
  const NS = window.CuidoSistemaDeDiseO_5a985d;
  function ResumenScreen({
    Icon
  }) {
    const {
      ProgressRing,
      StatCard,
      Card,
      Tabs,
      Badge
    } = NS;
    const [range, setRange] = React.useState('mes');
    const breakdown = [{
      label: 'Cuidado directo',
      value: '$920.000',
      pct: 42,
      tone: 'lavender-strong'
    }, {
      label: 'Cocina',
      value: '$540.000',
      pct: 25,
      tone: 'peach'
    }, {
      label: 'Hogar',
      value: '$430.000',
      pct: 20,
      tone: 'cyan'
    }, {
      label: 'Salud y otros',
      value: '$290.000',
      pct: 13,
      tone: 'mint'
    }];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--surface-page)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '54px 22px 8px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        font: 'var(--type-h2)',
        fontSize: 'var(--text-3xl)',
        color: 'var(--ink-800)',
        letterSpacing: 'var(--tracking-tight)'
      }
    }, "Tu valor"), /*#__PURE__*/React.createElement(Tabs, {
      size: "sm",
      value: range,
      onChange: setRange,
      items: ['Semana', 'Mes', 'Año'].map(l => ({
        value: l.toLowerCase(),
        label: l
      }))
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: 'auto',
        padding: '12px 22px 120px',
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(Card, {
      padding: "lg",
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-eyebrow)',
        textTransform: 'uppercase',
        letterSpacing: 'var(--tracking-wider)',
        color: 'var(--text-subtle)'
      }
    }, "Valor del cuidado \xB7 este mes"), /*#__PURE__*/React.createElement(ProgressRing, {
      value: 78,
      size: 200,
      thickness: 22,
      label: "$2.180.000",
      caption: "186 horas",
      color: "var(--lime-400)"
    }), /*#__PURE__*/React.createElement(Badge, {
      tone: "success",
      dot: true
    }, "+12% vs. mes anterior")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(StatCard, {
      title: "Horas",
      value: "186",
      unit: "h",
      delta: "+8%",
      icon: /*#__PURE__*/React.createElement(Icon, {
        n: "Clock",
        s: 16
      })
    }), /*#__PURE__*/React.createElement(StatCard, {
      title: "Actividades",
      value: "94",
      delta: "+15%",
      tone: "lime",
      icon: /*#__PURE__*/React.createElement(Icon, {
        n: "ListChecks",
        s: 16
      })
    })), /*#__PURE__*/React.createElement(Card, {
      padding: "md",
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-h4)',
        color: 'var(--ink-800)'
      }
    }, "Por tipo de cuidado"), breakdown.map(b => /*#__PURE__*/React.createElement("div", {
      key: b.label
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-body-sm)',
        color: 'var(--text-body)'
      }
    }, b.label), /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-label)',
        color: 'var(--ink-800)'
      }
    }, b.value)), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 8,
        borderRadius: 999,
        background: 'var(--ink-150)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: `${b.pct}%`,
        height: '100%',
        borderRadius: 999,
        background: `var(--${b.tone})`
      }
    })))))));
  }
  window.CuidoResumenScreen = ResumenScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app_movil/ResumenScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/Sidebar.jsx
try { (() => {
/* Sidebar — riel de navegación izquierdo del dashboard. */
(function () {
  function Sidebar({
    Icon,
    active,
    onSelect
  }) {
    const items = [{
      id: 'panel',
      icon: 'LayoutGrid',
      label: 'Panel'
    }, {
      id: 'actividades',
      icon: 'ListChecks',
      label: 'Actividades'
    }, {
      id: 'cuidadoras',
      icon: 'Users',
      label: 'Cuidadoras'
    }, {
      id: 'valor',
      icon: 'HandCoins',
      label: 'Valor'
    }, {
      id: 'reportes',
      icon: 'FileBarChart',
      label: 'Reportes'
    }];
    return /*#__PURE__*/React.createElement("aside", {
      style: {
        width: 76,
        flex: '0 0 76px',
        background: 'var(--surface-card)',
        borderRight: '1px solid var(--border-subtle)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '22px 0',
        gap: 26
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 40,
        height: 40,
        borderRadius: 'var(--radius-md)',
        background: 'var(--ink-800)',
        color: 'var(--lime-300)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        font: 'var(--type-h4)',
        fontWeight: 800
      }
    }, "C"), /*#__PURE__*/React.createElement("nav", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        flex: 1
      }
    }, items.map(it => {
      const on = active === it.id;
      return /*#__PURE__*/React.createElement("button", {
        key: it.id,
        onClick: () => onSelect(it.id),
        title: it.label,
        style: {
          width: 46,
          height: 46,
          borderRadius: 'var(--radius-md)',
          border: 'none',
          cursor: 'pointer',
          background: on ? 'var(--lime-300)' : 'transparent',
          color: 'var(--ink-800)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background var(--dur-fast) var(--ease-out)'
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        n: it.icon,
        s: 22,
        color: on ? 'var(--ink-800)' : 'var(--ink-500)'
      }));
    })), /*#__PURE__*/React.createElement("button", {
      title: "Ajustes",
      style: {
        width: 46,
        height: 46,
        borderRadius: 'var(--radius-md)',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      n: "Settings",
      s: 22,
      color: "var(--ink-500)"
    })));
  }
  window.CuidoSidebar = Sidebar;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/Widgets.jsx
try { (() => {
/* Widgets del dashboard: panel principal, gráfico de barras, distribución. */
(function () {
  const NS = window.CuidoSistemaDeDiseO_5a985d;

  // Panel principal: valor total + gráfico de barras por mes.
  function ValuePanel({
    Icon
  }) {
    const {
      IconButton,
      Badge
    } = NS;
    const months = [{
      m: 'Ene',
      v: 62
    }, {
      m: 'Feb',
      v: 70
    }, {
      m: 'Mar',
      v: 58
    }, {
      m: 'Abr',
      v: 74
    }, {
      m: 'May',
      v: 88
    }, {
      m: 'Jun',
      v: 80
    }, {
      m: 'Jul',
      v: 95
    }, {
      m: 'Ago',
      v: 84
    }];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--surface-card)',
        borderRadius: 'var(--radius-card)',
        padding: 'var(--space-6)',
        display: 'flex',
        flexDirection: 'column',
        gap: 22,
        boxShadow: 'var(--shadow-sm)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-eyebrow)',
        textTransform: 'uppercase',
        letterSpacing: 'var(--tracking-wider)',
        color: 'var(--text-subtle)'
      }
    }, "Valor del cuidado \xB7 2026"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 10,
        marginTop: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-h1)',
        fontSize: 'var(--text-5xl)',
        letterSpacing: 'var(--tracking-tight)',
        color: 'var(--ink-800)'
      }
    }, "$14,8M"), /*#__PURE__*/React.createElement(Badge, {
      tone: "success",
      dot: true
    }, "+15%")), /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-body-sm)',
        color: 'var(--text-muted)',
        marginTop: 4
      }
    }, "Valor acumulado del trabajo de cuidado no remunerado")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      variant: "outline",
      label: "Comentarios"
    }, /*#__PURE__*/React.createElement(Icon, {
      n: "MessageSquare",
      s: 18
    })), /*#__PURE__*/React.createElement(IconButton, {
      variant: "dark",
      label: "Expandir"
    }, /*#__PURE__*/React.createElement(Icon, {
      n: "ArrowUpRight",
      s: 18
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-end',
        gap: 14,
        height: 180,
        paddingTop: 10
      }
    }, months.map((mo, i) => /*#__PURE__*/React.createElement("div", {
      key: mo.m,
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
        height: '100%'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        width: '100%',
        display: 'flex',
        alignItems: 'flex-end'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        height: `${mo.v}%`,
        borderRadius: 'var(--radius-pill)',
        background: i === 6 ? 'var(--lime-300)' : 'var(--ink-150)',
        position: 'relative'
      }
    }, i === 6 && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: -26,
        left: '50%',
        transform: 'translateX(-50%)',
        font: 'var(--type-label)',
        fontSize: 'var(--text-2xs)',
        color: 'var(--ink-800)'
      }
    }, "$2,1M"))), /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-body-sm)',
        fontSize: 'var(--text-xs)',
        color: 'var(--text-muted)'
      }
    }, mo.m)))));
  }

  // Distribución directo vs indirecto (barra doble como Talk/Listen).
  function SplitCard() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--surface-card)',
        borderRadius: 'var(--radius-card)',
        padding: 'var(--space-6)',
        boxShadow: 'var(--shadow-sm)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-h4)',
        color: 'var(--ink-800)',
        marginBottom: 4
      }
    }, "Cuidado directo / indirecto"), /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-body-sm)',
        color: 'var(--text-muted)',
        marginBottom: 18
      }
    }, "Proporci\xF3n del tiempo total"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        gap: 40,
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-h2)',
        color: 'var(--ink-800)'
      }
    }, "64%"), /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-body-sm)',
        fontSize: 'var(--text-xs)',
        color: 'var(--text-muted)'
      }
    }, "Directo")), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-h2)',
        color: 'var(--ink-400)'
      }
    }, "36%"), /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-body-sm)',
        fontSize: 'var(--text-xs)',
        color: 'var(--text-muted)'
      }
    }, "Indirecto"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        height: 14,
        borderRadius: 999,
        overflow: 'hidden',
        gap: 3
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '64%',
        background: 'var(--lime-300)',
        borderRadius: 999
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        width: '36%',
        background: 'var(--ink-200)',
        borderRadius: 999
      }
    })));
  }
  window.CuidoValuePanel = ValuePanel;
  window.CuidoSplitCard = SplitCard;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/Widgets.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Slider = __ds_scope.Slider;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.GlassCard = __ds_scope.GlassCard;

__ds_ns.ProgressRing = __ds_scope.ProgressRing;

__ds_ns.StatCard = __ds_scope.StatCard;

})();
