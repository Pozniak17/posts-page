import { BookmarkIcon, Item } from './Card.module';

interface CardProps {
  id: string;
  title: string;
  body: string;
}

const Card: React.FC<CardProps> = ({ id, title, body }) => {
  return (
    <Item id={id}>
      <BookmarkIcon />
      <h1>{title}</h1>
      <p>{body}</p>
    </Item>
  );
};

export default Card;
