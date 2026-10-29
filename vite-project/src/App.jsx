import Header from './components/header.jsx';
import Hero from './components/hero.jsx';
import Events from './components/events.jsx';
import Categories from './components/categories.jsx';
import Schedule from './components/schedule.jsx';
import Register from './components/register.jsx';
import Footer from './components/footer.jsx';
import './index.css'; // Bring your styles over here

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="container">
        <Hero />
        <Events />
        <Categories />
        <Schedule />
        <Register />
      </main>
      <Footer />
    </div>
  );
}