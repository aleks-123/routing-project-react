import React from "react";
import EventFrom from "../components/EventForm";
import { useRouteLoaderData } from "react-router-dom";

const EditEventPage = () => {
  const data = useRouteLoaderData("event-detail");
  const event = data.event;
  return (
    <div>
      <EventFrom event={event} method="patch" />
    </div>
  );
};

export default EditEventPage;
