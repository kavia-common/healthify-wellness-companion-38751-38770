import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Workouts from '../pages/Workouts';
import Meals from '../pages/Meals';
import Hydration from '../pages/Hydration';
import Sleep from '../pages/Sleep';
import Habits from '../pages/Habits';
import Mind from '../pages/Mind';
import Insights from '../pages/Insights';
import Settings from '../pages/Settings';

// PUBLIC_INTERFACE
export default function AppRoutes() {
  /** Defines application routes. */
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/workouts" element={<Workouts />} />
      <Route path="/meals" element={<Meals />} />
      <Route path="/hydration" element={<Hydration />} />
      <Route path="/sleep" element={<Sleep />} />
      <Route path="/habits" element={<Habits />} />
      <Route path="/mind" element={<Mind />} />
      <Route path="/insights" element={<Insights />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}
