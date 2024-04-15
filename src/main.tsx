import ReactDOM from "react-dom/client";
import AppRouter from "@/routes/AppRouter";
//Redux
import { Provider } from "react-redux";
import store from "@/store";

// styles
import "@/styles/normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
