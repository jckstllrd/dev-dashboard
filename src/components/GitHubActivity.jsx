import { useEffect, useState } from 'react';
import '../styles/GitHubActivity.css';

const username = 'jckstllrd';
const repo = 'dev-dashboard';
const url = `https://api.github.com/repos/${username}/${repo}/commits`;

export default function GitHubActivity() {
  const [activity, setActivity] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        return res.json();
      })
      .then((result) => {
        setActivity(result);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoaded(true);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  } else {
    return (
      <>
        <h1>Your Github Activity</h1>
        <ul className="commitActivityList">
          {activity.map((commit) => (
            <li key={commit.node_id}>
              <div className="commit-card">
                {commit.committer.login} -{' '}
                <strong>"{commit.commit.message}"</strong>
              </div>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
