import Person from "./Person";

interface ListProps {
  users: string[];
}

const List = ({ users }: ListProps) => {
  return (
    <div>
      {users.map((name, index) => (
        <div>
          <Person key={index} name={name} />
        </div>
      ))}
    </div>
  );
};

export default List;
