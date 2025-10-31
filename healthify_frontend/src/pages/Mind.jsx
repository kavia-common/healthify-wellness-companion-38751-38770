import Card from '../components/Card';

// PUBLIC_INTERFACE
export default function Mind() {
  /** Mind section page. */
  return (
    <div className="grid cols-2">
      <Card title="Mindfulness">
        <p>Practice mindfulness and record mood.</p>
      </Card>
      <Card title="Activities">
        <p>Guided sessions will appear here.</p>
      </Card>
    </div>
  );
}
