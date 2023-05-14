import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const AdminModule = lazy(() => import('./modules/Admin/Admin'));
const UserModule = lazy(() => import('./modules/User/User'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/admin" component={AdminModule} />
          <Route path="/" component={UserModule} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
