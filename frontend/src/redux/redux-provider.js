import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store from "./store";
import { persistStore } from "redux-persist";

// Create a persistor
const persistor = persistStore(store);

export default function ReduxProvider({ children }) {
  return (
    <Provider store={store}>
      {/* PersistGate delays the rendering of the UI until the persisted state has been retrieved and saved to redux */}
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
