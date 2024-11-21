import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Members from './components/Members';
import Resources from './components/Resources';
import Contact from './components/Contact';
import LoginPage from './components/auth/LoginPage';

function App() {
  const [showLogin, setShowLogin] = useState(false);

  if (showLogin) {
    return <LoginPage />;
  }

  return (
    <div className="min-h-screen">
      <Navbar onLoginClick={() => setShowLogin(true)} />
      <Hero />
      <About />
      <Events />
      <Members />
      <Resources />
      <Contact />
    </div>
  );
}

export default App;