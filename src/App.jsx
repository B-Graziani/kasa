
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicRouter from '@/pages/public/Public.router.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<PublicRouter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
