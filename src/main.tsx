import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { inject } from "@vercel/analytics";
import { BrowserRouter } from "react-router";
import App from "./App.tsx";

inject();
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</StrictMode>,
);
