import { RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { router } from './router';

// The global importation of CSS goes here
import './styles/index.scss';

// Creating the root of the application
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Creating the app in DOM
root.render(<RouterProvider router={router} />);
