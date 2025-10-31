import PropTypes from 'prop-types';

// PUBLIC_INTERFACE
export default function StatBadge({ icon, label, value }) {
  /** Small badge showing a metric with retro accent. */
  return (
    <span className="stat-badge" aria-label={`${label}: ${value}`}>
      <span aria-hidden="true">{icon}</span>
      <strong>{value}</strong>
      <span style={{ opacity: 0.75 }}>{label}</span>
    </span>
  );
}

StatBadge.propTypes = {
  icon: PropTypes.node,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};
