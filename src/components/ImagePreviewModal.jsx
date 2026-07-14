import Icon from './ds/Icon';
import IconButton from './ds/IconButton';

export default function ImagePreviewModal({ src, onClose }) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        background: 'rgba(20, 20, 20, 0.92)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px 16px',
        gap: 16,
      }}
    >
      <div style={{ position: 'absolute', top: 16, right: 16 }}>
        <IconButton
          onClick={onClose}
          label="Cerrar"
          style={{ background: 'rgba(255,255,255,0.15)', color: '#fff' }}
        >
          <Icon n="X" s={22} />
        </IconButton>
      </div>
      <p style={{ font: 'var(--type-body)', color: '#fff', textAlign: 'center', margin: 0 }}>
        Mantén presionada la imagen para guardarla en tu galería.
      </p>
      <img
        src={src}
        alt="Reporte de cuidado"
        style={{
          maxWidth: '100%',
          maxHeight: '75vh',
          borderRadius: 'var(--radius-md)',
          boxShadow: '0 12px 40px rgba(0,0,0,0.5)',
        }}
      />
    </div>
  );
}
