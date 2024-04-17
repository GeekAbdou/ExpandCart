import { createRoot } from "react-dom/client";
import { Suspense } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store from "@/store";
import AppRouter from "@/routes/AppRouter";
import "@/styles/normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/global.css";
import "@/services/axiosGlobalConfig.js";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <Provider store={store.store}>
    <PersistGate loading={null} persistor={store.persistedStore}>
      <Suspense fallback={<div>Loading...</div>}>
        <AppRouter />
      </Suspense>
    </PersistGate>
  </Provider>
);
