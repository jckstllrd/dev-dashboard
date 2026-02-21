import './App.css';
import DailyFocus from './components/DailyFocus';
import PomodoroTimer from './components/PomodoroTimer';
import GitHubActivity from './components/GitHubActivity';

function App() {
  return (
    <div className="app-container">
      <div className="dailyFocus">
        <DailyFocus />
      </div>
      <div className="pomodoro">
        <PomodoroTimer />
      </div>
      <div className="activity">
        <GitHubActivity />
      </div>
    </div>
  );
}

export default App;
