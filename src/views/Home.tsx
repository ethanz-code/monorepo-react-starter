import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center pt-[20vh] min-h-screen bg-gray-900 text-gray-200">
      <div className="p-8 bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl flex flex-col items-center text-center">
        <h1 className="text-5xl font-bold tracking-wider">Monorepo React Starter</h1>
        <p className="mt-4 text-lg text-gray-400">一个现代化的 React.js 项目模板</p>
      </div>
    </div>
  );
};

export default Home;
