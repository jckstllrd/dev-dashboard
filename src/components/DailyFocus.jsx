import { useEffect, useState } from 'react';
import '../styles/DailyFocus.css';

export default function DailyFocus() {
  const [dailyFocusValue, setDailyFocusValue] = useState('');
  const [dailyFocus, setDailyFocus] = useState(
    () => localStorage.getItem('dailyFocus') ?? ''
  );

  function handleSubmit(e) {
    e.preventDefault();

    setDailyFocus(dailyFocusValue);
    setDailyFocusValue('');
  }

  useEffect(() => {
    localStorage.setItem('dailyFocus', dailyFocus);
  }, [dailyFocus]);

  return (
    <>
      <form className="dailyFocusForm" action="" onSubmit={handleSubmit}>
        <label htmlFor="dailyFocusValue">
          Daily Focus:
          <input
            type="text"
            name="dailyFocusValue"
            id="dailyFocusValue"
            placeholder="Learn React..."
            value={dailyFocusValue}
            onChange={(event) => setDailyFocusValue(event.target.value)}
          />
        </label>
        <button className="dailyFocusBtn btn" type="submit">
          Set Focus
        </button>
      </form>
      <div>
        <h2 className="dailyFocusHero">{dailyFocus}</h2>
      </div>
    </>
  );
}
