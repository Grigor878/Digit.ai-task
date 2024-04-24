import ReactDOM from 'react-dom/client'
import './index.scss'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from './store/store'
import View from './view/view'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <View />
    </PersistGate>
  </Provider >
);
