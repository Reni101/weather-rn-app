import {Provider} from "react-redux";
import {store} from "./src/service/store";
import {Weather} from "./src/components/weather/weather";

export default function App() {


    return (
        <Provider store={store}>
                <Weather/>
        </Provider>
    );
}

