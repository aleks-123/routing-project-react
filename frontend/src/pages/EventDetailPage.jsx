import React, { Suspense } from "react";
import {
  Link,
  useParams,
  json,
  useRouteLoaderData,
  redirect,
  defer,
  Await,
} from "react-router-dom";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";

const EventDetailPage = () => {
  const params = useParams();
  // const data = useRouteLoaderData("event-detail");
  const { event, events } = useRouteLoaderData("event-detail");

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>

      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>

      {/* <EventItem event={data.event} />
      <EventsList /> */}
      <Link to=".." relative="path">
        Go back
      </Link>
    </>
  );
};

export default EventDetailPage;

async function loadEvent(id) {
  const response = await fetch(`http://localhost:8080/events/${id}`);
  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected events." },
      { status: 500 }
    );
  } else {
    const resData = await response.json();
    return resData.event;
  }
}

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { isError: true, message: "Could not fetch events." };
    // throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
    //   status: 500,
    // });
    return json({ message: "Could not fetch events." }, { status: 500 });
  } else {
    // const resData = await response.json();
    // return resData.events;
    // const res = new Response("any data", { status: 201 });
    // return res;
    const resData = await response.json();
    return resData.events;
  }
}

export async function loader({ request, params }) {
  // const response = await fetch(`http://localhost:8080/events/${params.id}`);
  // if (!response.ok) {
  //   throw json(
  //     { message: "Could not fetch details for selected events." },
  //     { status: 500 }
  //   );
  // } else {
  //   return response;
  // }

  return defer({
    event: await loadEvent(params.id),
    events: loadEvents(),
  });
}

export async function action({ params, request }) {
  const eventId = params.id;

  const response = await fetch(`http://localhost:8080/events/${eventId}`, {
    method: request.method,
  });

  if (!response.ok) {
    throw json(
      { message: "Could not delete event." },
      {
        status: 500,
      }
    );
  }
  return redirect("/events");
}
