'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CardList from './components/CardList/CardList';

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
      setData(response.data);
    });
  }, []);

  console.log(data);
  return (
    <main>
      <h1>Posts Pages</h1>
      <CardList data={data} />
    </main>
  );
}
