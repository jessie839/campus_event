const STORAGE_KEY = "campusconnect.events";

const initialEvents = [
  {
    id: "react-workshop",
    name: "React Workshop",
    category: "TECH",
    description: "Build interactive interfaces in this hands-on React workshop.",
    date: "2027-11-10",
    venue: "Block A"
  },
  {
    id: "ai-seminar",
    name: "AI Seminar",
    category: "TECH",
    description: "Explore current applications and ideas in artificial intelligence.",
    date: "2027-11-12",
    venue: "Hall 2"
  },
  {
    id: "cultural-night",
    name: "Cultural Night",
    category: "CULTURE",
    description: "Celebrate campus cultures through performances, food, and music.",
    date: "2027-11-15",
    venue: "Open Air Theatre"
  }
];

function normalizeEvent(event) {
  return { ...event, name: event.name ?? event.title ?? "" };
}

function readEvents() {
  const savedEvents = window.localStorage.getItem(STORAGE_KEY);
  if (savedEvents === null) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(initialEvents));
    return initialEvents;
  }

  let events;
  try {
    events = JSON.parse(savedEvents);
  } catch {
    throw new Error("Saved event data is invalid. Clear this site's local storage and reload.");
  }

  if (!Array.isArray(events)) {
    throw new Error("Saved event data is invalid. Clear this site's local storage and reload.");
  }

  return events.map(normalizeEvent);
}

function saveEvents(events) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
}

export async function getEvents() {
  return readEvents();
}

export async function createEvent(eventData) {
  const events = readEvents();
  const savedEvent = normalizeEvent({
    ...eventData,
    id: globalThis.crypto.randomUUID()
  });

  saveEvents([...events, savedEvent]);
  return savedEvent;
}

export async function deleteEvent(eventId) {
  const events = readEvents();
  const remainingEvents = events.filter(
    event => String(event.id) !== String(eventId)
  );

  if (remainingEvents.length === events.length) {
    throw new Error("The event could not be found.");
  }

  saveEvents(remainingEvents);
}
