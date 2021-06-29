import {useLocation} from "react-router-dom";
export function Whoops() {
    let location = useLocation();
    console.log(location);
    if (location.pathname === '/' ) {
        console.log("hola")
        return null
    }else
    {
        return (<div>
            <h1>Resources not found at {location.pathname}</h1>
        </div>)
    }


}