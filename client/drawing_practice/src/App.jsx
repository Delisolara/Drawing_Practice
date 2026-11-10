import './App.css'
import { useState } from 'react'
import { useLocation, useOutlet } from 'react-router-dom'
import { AnimatePresence } from 'motion/react'

// import HomePage from './pages/HomePage';
import PageTransition from './components/PageTransition.jsx'

export default function App() {
  return <AnimatedOutlet/>;;
}

// Komponent pośredni - renderuje aktualną trasę route 
function AnimatedOutlet() {
  const location = useLocation();
  const outlet = useOutlet();

  return(
    <AnimatePresence mode='wait' initial={false}>
      <PageTransition key={location.pathname}>
        {outlet}
      </PageTransition>
    </AnimatePresence>
  );
}