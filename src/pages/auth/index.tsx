import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
type AuthPageProps = { 
  // Define any props here if needed, or remove if not necessary
};

const AuthPage: React.FC<AuthPageProps> = () => {
  return <div className = "bg-gradient-to-b from-blue-600 to-white h-screen relative">
  <div className = "max-w-7xl mx-auto">
    <Navbar />
    <div  className=" flex items-center justify-center h-[calc(100vh-5rem)] pointer-events-none select none">
      <img src='/hero.png' alt='Hero img'/>
    </div>
    </div>
  </div>;

};

export default AuthPage;
