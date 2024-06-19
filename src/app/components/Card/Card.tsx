interface CardProps {
  id: string;
  title: string;
  body: string;
}

const Card: React.FC<CardProps> = ({ id, title, body }) => {
  return (
    <li id={id}>
      <h1>{title}</h1>
      <p>{body}</p>
    </li>
  );
};

export default Card;
