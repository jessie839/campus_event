import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/navbar.jsx";
import Footer from "./components/Footer/footer.jsx";
import { FavoritesProvider } from "./context/favouritecontext.jsx";
import EventDetailsPage from "./pages/EventDetails/eventdetailspage.jsx";
import EventsPage from "./pages/Events/eventpage.jsx";
import HomePage from "./pages/Home/homepage.jsx";
import NotFoundPage from "./pages/Notfound/notfoundpage.jsx";
import RegisterPage from "./pages/Register/registerpage.jsx";
import "./App.css";
import {
  getEvents,
  createEvent,
  deleteEvent
} from "./services/eventservices.js";

export default function App() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  // Load events from this browser's local storage when the app mounts.
  useEffect(() => {
    async function loadEvents() {
      try {
        const data = await getEvents();
        setEvents(data);
        setLoadError("");
      } catch (error) {
        console.error("Failed to load events:", error);
        setLoadError(
          error instanceof Error
            ? `Could not load events: ${error.message}`
            : "Could not load events due to an unknown error."
        );
      } finally {
        setLoading(false);
      }
    }

    loadEvents();
  }, []);

  // Remove an event from the displayed list.
  async function handleRemove(eventId) {
    await deleteEvent(eventId);
    setEvents(previousEvents =>
      previousEvents.filter(event => String(event.id) !== String(eventId))
    );
  }

  // Save a new event to this browser's local storage.
  async function handleCreateEvent(eventData) {
    const savedEvent = await createEvent(eventData);

    setEvents(previousEvents => [
      ...previousEvents,
      savedEvent
    ]);

  }

  return (
    <FavoritesProvider>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  events={events}
                  loading={loading}
                  error={loadError}
                  onCreateEvent={handleCreateEvent}
                  onRemove={handleRemove}
                />
              }
            />
            <Route
              path="/events"
              element={
                <EventsPage
                  events={events}
                  loading={loading}
                  error={loadError}
                  onRemove={handleRemove}
                />
              }
            />
            <Route
              path="/events/:eventId"
              element={<EventDetailsPage events={events} loading={loading} />}
            />
            <Route
              path="/register/:eventId"
              element={<RegisterPage events={events} loading={loading} />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </FavoritesProvider>
  );
}