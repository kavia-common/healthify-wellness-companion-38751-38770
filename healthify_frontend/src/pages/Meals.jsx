import Card from '../components/Card';

// PUBLIC_INTERFACE
export default function Meals() {
  /** Meals section page. */
  return (
    <div className="grid cols-2">
      <Card title="Meals">
        <p>Track meals and nutrition.</p>
      </Card>
      <Card title="Suggestions">
        <p>AI meal suggestions will appear here.</p>
      </Card>
    </div>
  );
}
