"use client"; // To ensure this component uses client-side rendering

import Navbar from '../components/Navbar/navbar'; 
import Landing from '../pages/landing/landing';
import landing from '../pages/landing/landing';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Landing/>

    </div>
  );
}

export default Home;
