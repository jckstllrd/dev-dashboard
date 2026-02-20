import { useEffect, useState } from 'react';

const username = 'jckstllrd';
const repo = 'dev-dashboard';
const url = `https://api.github.com/repos/${username}/${repo}/commits`;

export default function GitHubActivity() {
  const [activity, setActivity] = useState([]);
  //   const [username, setUsername] = useState('jckstllrd');

  useEffect(() => {
    const getActivityJson = async () => {
      try {
        let response = await fetch(url);
        let result = await response.json();
        setActivity(result);
      } catch (error) {
        console.error(error);
      }
    };

    getActivityJson();
  }, []);

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
