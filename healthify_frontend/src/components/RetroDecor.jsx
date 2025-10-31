export default function RetroDecor() {
  /** Adds subtle retro decorative accents to the page corners. */
  return (
    <div aria-hidden="true" style={{ position: 'fixed', inset: 0, pointerEvents: 'none' }}>
      <div
        style={{
          position: 'absolute',
          top: -40,
          left: -40,
          width: 140,
          height: 140,
          borderRadius: '50%',
          background: 'radial-gradient(circle at center, rgba(37,99,235,0.18), transparent 60%)',
          filter: 'blur(10px)'
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: -40,
          right: -40,
          width: 180,
          height: 180,
          borderRadius: '50%',
          background: 'radial-gradient(circle at center, rgba(245,158,11,0.18), transparent 60%)',
          filter: 'blur(12px)'
        }}
      />
    </div>
  );
}
