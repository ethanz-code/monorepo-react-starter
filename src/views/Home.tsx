import React from 'react';
import { create } from '@ethan-utils/zustand';

interface UserStore {
  username: string;
  age: number;
  count: number;
  setCount: (count: number) => void;
}

const persistConfig = (useLocalStorage: boolean) =>
  useLocalStorage ? { name: 'home_count', storage: localStorage } : undefined;

const useUserStore = create<UserStore>(
  (set, _get) => ({
    username: 'zhangsan',
    age: 18,
    count: 0,
    setCount: (count) => set({ count }),
  }),
  persistConfig(true),
);

const Home: React.FC = () => {
  const store = useUserStore;
  const count = store((state) => state.count);
  const setCount = store((state) => state.setCount);

  return (
    <div className="flex flex-col items-center pt-[20vh] min-h-screen bg-gray-900 text-gray-200">
      <div className="p-8 pb-6 bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl flex gap-2 flex-col items-center text-center">
        <div className="flex w-full justify-center items-center">
          <h1 className="text-5xl font-bold tracking-wider whitespace-nowrap">
            Monorepo React Starter
          </h1>
        </div>
        <p className="mt-4 text-lg text-gray-400">一个现代化的 React.js 项目模板</p>
        <button
          className="ml-6 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white text-sm font-semibold transition-colors cursor-pointer"
          onClick={() => setCount(count + 1)}
        >
          计数：{count}
        </button>
      </div>
      <div className="mt-8 text-lg text-gray-400 flex flex-col items-center gap-4">
        <div className="flex items-center gap-2">
          <span>本地存储：</span>
          <button
            className="cursor-pointer px-3 py-1 rounded transition-colors text-sm font-medium bg-red-500 hover:bg-red-600 text-white"
            onClick={() => {
              store.persist.clearStorage();
              window.location.reload();
            }}
          >
            清除本地存储
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
