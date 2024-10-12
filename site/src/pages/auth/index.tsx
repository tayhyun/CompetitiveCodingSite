import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
type AuthPageProps = {
  // Define any props here if needed, or remove if not necessary
};

const AuthPage: React.FC<AuthPageProps> = () => {
  return <div className = "bg-gray-500 h-screen relative">
  <div className = "max-w-7xl mx-auto">
    <Navbar />
    </div>
  </div>;
};

export default AuthPage;
