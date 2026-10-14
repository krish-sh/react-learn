import { useEffect, useState } from "react";

let url = "https://api.github.com/repos/facebook/react/contributors";

interface GithubUser {
  id: number;
  login: string;
  name: string | null;
  avatar_url: string;
  public_repos: number;
}

const FetchData = () => {
  const [users, setUsers] = useState<GithubUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Link not work");
        }
        return res.json();
      })
      .then((data) => setUsers(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <>
        <h3>Loading...</h3>
      </>
    );
  }
  if (error) {
    return (
      <>
        <h3>Error: {error}</h3>
      </>
    );
  }

  return (
    <div>
      <h3>Fetch Github Profiles</h3>
      {users.map((user) => (
        <div key={user.id}>
          <img src={user.avatar_url} alt={user.login} />
          <h3>{user.name ?? user.login}</h3>
        </div>
      ))}
    </div>
  );
};

export default FetchData;
