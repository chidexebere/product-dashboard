import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useAppConfig } from './api/hooks';
import { RootState } from './appState/store';
import ErrorPage from './pages/404';
import Home from './pages/home';
import Loading from './pages/loading';
import Product from './pages/product';

function App() {
  const APP_ID = useSelector((state: RootState) => state.app.appId);

  const { isLoading, isError, data } = useAppConfig(APP_ID);

  if (isError) {
    return <ErrorPage />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router>
      {data && (
        <div className="bg-[#F9FAFB]">
          <Routes>
            <Route path="/" element={<Home configData={data} />} />
            <Route path="/product">
              <Route index element={<Product configData={data} />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      )}
    </Router>
  );
}

export default App;
