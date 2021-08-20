import { Provider } from 'react-redux';
import { AppRouter } from './components/routers/AppRouter'
import { store } from './components/store/store';
import TestGridView from './view/testGrid/TestGrid';

const App = () => {
  return (
    <Provider store={store}>
        <TestGridView />
    </Provider>
  );
}

export default App;