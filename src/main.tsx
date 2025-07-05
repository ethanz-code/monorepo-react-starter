import ReactDOM from 'react-dom/client';
import './assets/main.css';
import App from './App';
import { createRequest } from '@ethan-utils/axios';

// Initialize the API client with the base URL
createRequest({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
  timeout: 10000, // Optional: Set a timeout for requests
});

const root = document.getElementById('root');

ReactDOM.createRoot(root!).render(<App />);
