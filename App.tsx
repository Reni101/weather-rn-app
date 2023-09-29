import {Provider} from "react-redux";
import {store} from "./src/service/store";
import {WeatherRoot} from "./src/components/weather-root/weather-root";

export default function App() {


    return (
        <Provider store={store}>
                <WeatherRoot/>
        </Provider>
    );
}

