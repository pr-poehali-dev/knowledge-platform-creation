import { useState } from 'react';
import { Home } from './Home';
import { Courses } from './Courses';
import { Knowledge } from './Knowledge';
import { Profile } from './Profile';
import { Quiz } from './Quiz';
import { Sidebar } from '../components/Sidebar';

type Page = 'home' | 'courses' | 'knowledge' | 'profile' | 'quiz';

const Index = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isAuthenticated] = useState(true);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'courses':
        return <Courses onNavigate={setCurrentPage} />;
      case 'knowledge':
        return <Knowledge />;
      case 'profile':
        return <Profile />;
      case 'quiz':
        return <Quiz onNavigate={setCurrentPage} />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar 
        currentPage={currentPage} 
        onNavigate={setCurrentPage}
        isAuthenticated={isAuthenticated}
      />
      <main className="flex-1 ml-64">
        {renderPage()}
      </main>
    </div>
  );
};

export default Index;