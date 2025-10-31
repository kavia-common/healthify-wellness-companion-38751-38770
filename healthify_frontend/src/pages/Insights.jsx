import Card from '../components/Card';

// PUBLIC_INTERFACE
export default function Insights() {
  /** Insights section page. */
  return (
    <div className="grid cols-2">
      <Card title="Trends">
        <p>Review long-term wellness trends.</p>
      </Card>
      <Card title="AI Insights">
        <p>Recommendations and summaries will show here.</p>
      </Card>
    </div>
  );
}
