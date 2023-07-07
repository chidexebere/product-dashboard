import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useAppConfig } from './api/hooks';
import { RootState } from './appState/store';
import ErrorPage from './pages/404';
import Home from './pages/home';
import Loading from './pages/loading';

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
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      )}
    </Router>
  );
}

export default App;
