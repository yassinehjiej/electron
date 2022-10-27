import './App.css';
import 'antd/dist/antd.min.css';
import React from 'react';
import ProtectedApp from './pages';
import { BrowserRouter , HashRouter} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <React.Suspense fallback="Loading...">
          <ProtectedApp />
        </React.Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
