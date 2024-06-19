'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CardList from './components/CardList/CardList';
import ThemeProvider from './components/ThemeProvider/ThemeProvider';

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
    <ThemeProvider>
      <main>
        <h1 style={{ textAlign: 'center' }}>Posts Pages</h1>
        <CardList data={data} />
      </main>
    </ThemeProvider>
  );
}
