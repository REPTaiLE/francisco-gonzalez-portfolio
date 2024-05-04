import './styles/App.scss';
import Home from './components/Home/Home';
import ProjectsPage from './components/ProjectsPage/ProjectsPage';
import IntegratorProject from './components/IntegratorProject/IntegratorProject';
import ThunderFocus from './components/ThunderFocus/ThunderFocus';
import { 
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { ThemeProvider } from './context/DarkModeContext';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  { 
    path: '/projects',
    element: <ProjectsPage />,
  },
  {
    path: '/integrator-project',
    element: <IntegratorProject />,
  },
  {
    path: 'thunder-focus-theme',
    element: <ThunderFocus />
  }
]);
function App() {


  return (
    <>
      <ThemeProvider>
          <RouterProvider router={router} />
      </ThemeProvider>
    </>
  )
}

export default App;
