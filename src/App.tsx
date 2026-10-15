import Navbar from './components/Navbar';
import Footer from './components/sections/Footer';
import Contact from './components/sections/Contact';
import IndustryPage from './pages/IndustryPage';
import StudentsPage from './pages/StudentsPage';
import { usePage } from './hooks';

export default function App() {
  const [page, go] = usePage();

  return (
    <>
      <Navbar page={page} go={go} />
      {page === 'industry' ? <IndustryPage go={go} /> : <StudentsPage />}
      <Contact />
      <Footer go={go} />
    </>
  );
}
