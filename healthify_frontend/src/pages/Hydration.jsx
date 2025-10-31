import Card from '../components/Card';

// PUBLIC_INTERFACE
export default function Hydration() {
  /** Hydration section page. */
  return (
    <div className="grid cols-2">
      <Card title="Hydration">
        <p>Log your water intake.</p>
      </Card>
      <Card title="Tips">
        <p>Hydration tips will appear here.</p>
      </Card>
    </div>
  );
}
