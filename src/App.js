import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routers/Router/Router';

function App() {
  return (
    <div className="max-w-[1400px] mx-auto">
      <RouterProvider
        router={router}
      ></RouterProvider>
    </div>
  );
}

export default App;
