// app/page.tsx

'use client';

import { useEffect, useState } from 'react';

export default function HelloPage() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await fetch('/api/hello');
        const data = await response.json();
        setMessage(data.message);
      } catch (error) {
        console.error('Error fetching message:', error);
      }
    };

    fetchMessage();
  }, []);

  return (
    <div>
      <h1>API Response:</h1>
      <p>{message || 'Loading...'}</p>
    </div>
  );
}
