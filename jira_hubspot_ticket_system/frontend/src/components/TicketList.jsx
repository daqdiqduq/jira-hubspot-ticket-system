import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TicketList = () => {
  const [tickets, setTickets] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get(`/api/tickets?page=${page}`).then(res => {
      setTickets(res.data);
    });
  }, [page]);

  return (
    <div>
      {tickets.map(ticket => (
        <div key={ticket.id}>{ticket.title}</div>
      ))}
      <button onClick={() => setPage(p => p + 1)}>Next</button>
    </div>
  );
};

export default TicketList;