import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {createRoot} from "react-dom/client";
import {Provider} from "react-redux";
// import {setupStore} from "./store/store";

// const store = setupStore();
const container: HTMLElement | null = document.getElementById("root")
if (container) {
    createRoot(container).render(
        <BrowserRouter>
            {/*<Provider store={store}>*/}
            <App/>
            {/*</Provider>*/}
        </BrowserRouter>
    )
}
