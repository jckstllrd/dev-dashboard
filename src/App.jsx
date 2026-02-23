import './styles/App.css';
import DailyFocus from './components/DailyFocus';
import PomodoroTimer from './components/PomodoroTimer';
import GitHubActivity from './components/GitHubActivity';

function App() {
  return (
    <>
      <div className="dailyFocus">
        <DailyFocus />
      </div>
      <div className="pomodoro">
        <PomodoroTimer />
      </div>
      <div className="activity">
        <GitHubActivity />
      </div>
    </>
  );
}

export default App;
