import PropTypes from 'prop-types';

// PUBLIC_INTERFACE
export default function Card({ title, children, footer }) {
  /** Generic card with title and optional footer. */
  return (
    <section className="card" role="region" aria-label={title || 'card'}>
      {title ? <h3 className="card-title">{title}</h3> : null}
      <div>{children}</div>
      {footer ? <div style={{ marginTop: 12 }}>{footer}</div> : null}
    </section>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  footer: PropTypes.node
};
