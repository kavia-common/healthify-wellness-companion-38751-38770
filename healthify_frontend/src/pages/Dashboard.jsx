import Card from '../components/Card';
import StatBadge from '../components/StatBadge';

// PUBLIC_INTERFACE
export default function Dashboard() {
  /** Overview dashboard showing quick stats. */
  return (
    <div className="grid cols-2" role="main">
      <div className="grid cols-2" style={{ alignContent: 'start' }}>
        <Card title="Today">
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <StatBadge icon="💪" label="Workout" value="40m" />
            <StatBadge icon="🍽️" label="Calories" value="1,280" />
            <StatBadge icon="💧" label="Water" value="1.2L" />
            <StatBadge icon="😴" label="Sleep" value="7h" />
          </div>
        </Card>
        <Card title="Streaks">
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <StatBadge icon="📈" label="Habits" value="12d" />
            <StatBadge icon="🧠" label="Mind" value="5d" />
          </div>
        </Card>
      </div>
      <div className="grid cols-1">
        <Card title="Insights">
          <p style={{ margin: 0, opacity: 0.8 }}>
            Keep up the good work. Consider a light recovery workout today and aim for 2.0L water.
          </p>
        </Card>
        <Card title="Upcoming">
          <ul style={{ margin: 0, paddingLeft: 16 }}>
            <li>Meal prep - 6pm</li>
            <li>Mindfulness - 9pm</li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
