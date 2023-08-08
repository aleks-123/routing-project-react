import { Suspense } from "react";
import { useLoaderData, json, Link, defer, Await } from "react-router-dom";
import EventsList from "../components/EventsList";

const EventsPage = () => {
  // const events = useLoaderData();
  const { events } = useLoaderData();
  // if (events.isError) {
  //   return <p>{events.message}</p>;
  // }
  // const events = data.events;

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents}></EventsList>}
      </Await>
    </Suspense>
  );

  // return (
  //   <>
  //     <EventsList events={events} />
  //     <Link to=".." relative="path">
  //       Go back
  //     </Link>
  //     {/* <EventsList /> */}
  //   </>
  // );
};

export default EventsPage;

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

export function loader() {
  return defer({
    events: loadEvents(),
  });
}
