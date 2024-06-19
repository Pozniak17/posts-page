import Card from '../Card/Card';
import { List } from './CardList.styled';

interface Item {
  id: string;
  title: string;
  body: string;
}

interface CardListProps {
  data: Item[];
}

const CardList: React.FC<CardListProps> = ({ data }) => {
  return (
    <List>
      {data.map(({ id, title, body }) => (
        <Card key={id} id={id} title={title} body={body} />
      ))}
    </List>
  );
};

export default CardList;
