
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Products from './components/Products';
import Advantages from './components/Advantages';
import Jobs from './components/Jobs';
import Roadmap from './components/Roadmap';
import Contact from './components/Contact';
import JobDetailDocuments from './components/JobDetailDocuments';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <Timeline />
        <Products />
        <Advantages />
        <Roadmap />
        <Jobs />
        <JobDetailDocuments />
      </main>
      <Contact />
    </div>
  );
};

export default App;
