import { useEffect, useState } from 'react';

const username = 'jckstllrd';
const repo = 'dev-dashboard';
const url = `https://api.github.com/repos/${username}/${repo}/commits`;

export default function GitHubActivity() {
  const [activity, setActivity] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setActivity(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
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
        <ul>
          {activity.map((commit) => (
            <li key={commit.node_id}>
              {commit.committer.login} -{' '}
              <strong>"{commit.commit.message}"</strong>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
