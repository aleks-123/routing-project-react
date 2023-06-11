import React from "react";
import { Link } from "react-router-dom";

const DUMMY_EVENETS = [
  { id: "1d", event: "Rock festival" },
  { id: "2d", event: "Rap festival" },
  { id: "3d", event: "Kpop festival" },
  { id: "4d", event: "Mak muzika" },
];

const EventsPage = () => {
  return (
    <div>
      <h1>EventsPage</h1>
      <ul>
        {DUMMY_EVENETS.map((even) => (
          <li key={even.id}>
            <Link to={even.id}>{even.event}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventsPage;
