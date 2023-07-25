import { AppProvider, AppState } from './providers';
import { AppRoutes } from './routes';

function App() {
  return (
    <AppState>
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </AppState>
  );
}

export default App;
