import { useState } from 'react';

export default function DailyFocus() {
  const [dailyFocusValue, setDailyFocusValue] = useState('');
  const [dailyFocus, setDailyFocus] = useState("Add Today's Daily Focus Here!");

  function handleSubmit(e) {
    e.preventDefault();

    setDailyFocus(dailyFocusValue);
    setDailyFocusValue('');
  }

  return (
    <>
      <div>
        <form action="" onSubmit={handleSubmit}>
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
          <button type="submit">Set Focus</button>
        </form>
      </div>
      <div>
        <h1>{dailyFocus}</h1>
      </div>
    </>
  );
}
