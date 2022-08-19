import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App,{players} from "./App";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App initialPlayers={players} />
  </StrictMode>
);
