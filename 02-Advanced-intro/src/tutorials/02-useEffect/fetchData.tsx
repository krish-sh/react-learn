import { useCallback, useEffect, useState } from "react";

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
  const [error, setError] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      const data = await fetch(url);
      if (!data.ok) {
        throw new Error("data not found");
        setError(true);
        setLoading(false);
      }
      const response = await data.json();
      setUsers(response);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError(true);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

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
          <img
            src={user.avatar_url}
            alt={user.login}
            style={{ width: "200px", height: "150px", objectFit: "cover" }}
          />
          <h3>{user.name ?? user.login}</h3>
        </div>
      ))}
    </div>
  );
};

export default FetchData;
