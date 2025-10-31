import Card from '../components/Card';

// PUBLIC_INTERFACE
export default function Sleep() {
  /** Sleep section page. */
  return (
    <div className="grid cols-2">
      <Card title="Sleep">
        <p>Monitor your sleep schedule.</p>
      </Card>
      <Card title="Recommendations">
        <p>Sleep improvement strategies appear here.</p>
      </Card>
    </div>
  );
}
