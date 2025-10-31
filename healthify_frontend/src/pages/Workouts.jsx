import Card from '../components/Card';

// PUBLIC_INTERFACE
export default function Workouts() {
  /** Workouts section page. */
  return (
    <div className="grid cols-2">
      <Card title="Workouts">
        <p>Plan and track your exercises.</p>
      </Card>
      <Card title="History">
        <p>Recent sessions will appear here.</p>
      </Card>
    </div>
  );
}
