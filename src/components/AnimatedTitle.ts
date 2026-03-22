import {useEffect, useState} from 'react';

export default function AnimatedTitle() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState('Home');

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex(prev => (prev + 1) % 4);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const prefixes = ['/', '-', '\\', '|'];
    document.title = `${prefixes[titleIndex]} Denel | ${currentPage}`;
  }, [titleIndex, currentPage]);

  return null;
}