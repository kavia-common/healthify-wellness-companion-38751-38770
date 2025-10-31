import { NavLink } from 'react-router-dom';

const tabs = [
  { to: '/', label: 'Dashboard', icon: '🏠' },
  { to: '/workouts', label: 'Workouts', icon: '💪' },
  { to: '/meals', label: 'Meals', icon: '🍽️' },
  { to: '/hydration', label: 'Hydration', icon: '💧' },
  { to: '/sleep', label: 'Sleep', icon: '😴' },
  { to: '/habits', label: 'Habits', icon: '📈' },
  { to: '/mind', label: 'Mind', icon: '🧠' },
  { to: '/insights', label: 'Insights', icon: '📊' },
  { to: '/settings', label: 'Settings', icon: '⚙️' }
];

// PUBLIC_INTERFACE
export default function TabNav() {
  /** Secondary tab navigation. */
  return (
    <div className="container">
      <div className="tabnav" role="tablist" aria-label="Primary navigation">
        {tabs.map((t) => (
          <NavLink
            key={t.to}
            to={t.to}
            end={t.to === '/'}
            className={({ isActive }) => `tablink ${isActive ? 'active' : ''}`}
          >
            <span aria-hidden="true">{t.icon}</span>
            <span>{t.label}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
