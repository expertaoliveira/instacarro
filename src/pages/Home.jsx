import React, { useState, useEffect } from 'react';
import Auction from '../components/Auction';
import './Home.css';

export default function Home() {
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    fetch(
      'https://s3-sa-east-1.amazonaws.com/config.instacarro.com/recruitment/auctions.json',
    )
      .then((response) => response.json())
      .then((arr) => {
        arr.sort((a, b) => {
          if (a.remainingTime > b.remainingTime) return 1;
          if (a.remainingTime < b.remainingTime) return -1;
          return 0;
        });
        setAuctions(arr);
      });
  }, [setAuctions]);

  return (
    <main className="container">
      <section className="auctions-list">
        {auctions.map((auction) => (
          <Auction key={auction.id} auction={auction} />
        ))}
      </section>
    </main>
  );
}
