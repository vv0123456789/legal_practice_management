import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useStore } from './store';
import LoginForm from './components/auth/LoginForm';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import Calendar from './pages/Calendar';
import Tasks from './pages/Tasks';
import Documents from './pages/Documents';
import DocumentEdit from './pages/DocumentEdit';
import Clients from './pages/Clients';
import Research from './pages/Research';

function App() {
  const user = useStore((state) => state.user);

  if (!user) {
    return <LoginForm />;
  }

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/documents/edit" element={<DocumentEdit />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/research" element={<Research />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;