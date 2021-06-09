import React, { useRef, useEffect, useState } from 'react';

import './auction.css';

export default function Auction(auction) {
  let auct = auction.auction;

  const [offer, setOffer] = useState(
    auct.bids.length > 0
      ? auct.bids.slice(auct.bids.length - 1, auct.bids.length)[0].amount
      : 0,
  );
  const [currentTime, setCurrentTime] = useState(auct.remainingTime);
  const [clock, setClock] = useState('0:0:0');

  let intervalRef = useRef();

  const increaseNum = () => setCurrentTime((prev) => prev - 1);

  useEffect(() => {
    intervalRef.current = setInterval(increaseNum, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    let hours = Math.floor(currentTime / 3600);
    hours = hours < 10 ? '0' + hours : hours;
    let minutes = Math.floor((currentTime % 3600) / 60);
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let seconds = currentTime % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    let timer = hours + ':' + minutes + ':' + seconds;

    setClock(timer);
  }, [currentTime]);

  const handleNewBid = () => {
    auct.bids.push({
      amount: offer + 250,
      dealership: 'Instacarro',
      createdAt: new Date().toISOString(),
      channel: 'Web',
    });
    setOffer(offer + 250);
  };

  return (
    <div className="card-item">
      <div className="card-img">
        <img src={auct.imageUrl} alt={auct.make} />
        <div className="more-details">ver detalhes</div>
      </div>
      <div className="details">
        <div className="time">
          <div className="time-left">
            <small>tempo restante</small>
            <div className="remaining-time">{clock}</div>
          </div>
          <div className="last-offer">
            <small>ultima oferta</small>
            <div className="offer">R$ {offer.toLocaleString('pt-Br')}</div>
          </div>
        </div>
        <div className="description">
          {auct.make} {auct.model} {auct.version} {auct.year}
        </div>
        <div className="since">
          <div className="year">{auct.year}</div>
          <div className="km">{auct.km.toLocaleString('pt-Br')} KM</div>
        </div>
        <div className="action">
          <button type="button" onClick={handleNewBid}>
            fazer oferta
          </button>
        </div>
      </div>
    </div>
  );
}
