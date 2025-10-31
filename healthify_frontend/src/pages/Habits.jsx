import Card from '../components/Card';

// PUBLIC_INTERFACE
export default function Habits() {
  /** Habits section page. */
  return (
    <div className="grid cols-2">
      <Card title="Habits">
        <p>Build and track healthy habits.</p>
      </Card>
      <Card title="Streaks">
        <p>Your streaks will appear here.</p>
      </Card>
    </div>
  );
}
