import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/styles.css";
import Providers from "@/Providers.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Providers>
    <App/>
  </Providers>,
);
