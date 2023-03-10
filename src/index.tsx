import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Normalize } from 'styled-normalize';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <>
        <Normalize />
        <App />
    </>
);
