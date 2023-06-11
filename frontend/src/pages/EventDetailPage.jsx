import React from "react";
import { Link, useParams } from "react-router-dom";

const EventDetailPage = () => {
  const params = useParams();
  return (
    <div>
      <h1>EventDetailPage</h1>
      <p>{params.id}</p>
      <Link to=".." relative="path">
        Go back
      </Link>
    </div>
  );
};

export default EventDetailPage;
