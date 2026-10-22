interface PersonProps {
  name: string;
}

const Person = ({ name }: PersonProps) => {
  return (
    <div>
      <h4>{name}</h4>
    </div>
  );
};

export default Person;
