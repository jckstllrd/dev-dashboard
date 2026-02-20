import './App.css';
import DailyFocus from './components/DailyFocus';
import PomodoroTimer from './components/PomodoroTimer';
import GitHubActivity from './components/GitHubActivity';

function App() {
  return (
    <>
      <DailyFocus />
      <PomodoroTimer />
      <GitHubActivity />
    </>
  );
}

export default App;
