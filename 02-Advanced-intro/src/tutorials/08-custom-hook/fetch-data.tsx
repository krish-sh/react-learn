import useFetch from "./useFetch";

const url = "https://api.github.com/users/krish-sh";
function FetchData() {
  const { isLoading, isError, data } = useFetch(url);

  if (isLoading) {
    return <h4>Loading</h4>;
  }

  if (isError) {
    return <h4>Error:</h4>;
  }

  const { login, avatar_url, bio } = data;
  return (
    <div>
      <img src={avatar_url} alt={login} />
      <h4>{login}</h4>
      <h4>{bio}</h4>
    </div>
  );
}

export default FetchData;
