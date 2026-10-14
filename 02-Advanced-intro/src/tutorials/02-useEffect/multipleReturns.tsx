import { useEffect, useState } from "react";

let url = "https://api.github.com/users/krish-sh";

interface GithubUser {
  id: number;
  login: string;
  name: string | null;
  avatar_url: string;
  public_repos: number;
}

const MultipleReturns = () => {
  const [user, setUser] = useState<GithubUser[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res: any) => {
        if (!res.ok) {
          setError(true);
        }
        return res.json();
      })
      .then((data) => {
        setUser(data);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  if (error) {
    return (
      <>
        <h2>Error: {error}</h2>
      </>
    );
  }

  if (loading) {
    return (
      <>
        <h2>Loading...</h2>
      </>
    );
  }
  return (
    <>
      <div>MultipleReturns</div>
      <img src={user.avatar_url} alt="" />
      <h2>{user.name ?? user.login}</h2>
    </>
  );
};

export default MultipleReturns;
