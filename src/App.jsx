import "./assets/App.css"
import { TwitterFollowCard } from "./assets/TwitterFollowCard"

export function App () {
 
    return (
    <div className="App-contendor">    
        <TwitterFollowCard userName="zMiguezz" name="Hector Miguel"/>
        <TwitterFollowCard userName="jaredmazapann" name="Jared"/>
        <TwitterFollowCard userName="jhumbertto" name="Jorge Garcia"/>
        <TwitterFollowCard userName="ClexyT" name="Eduardo Aguilar"/>
    </div> 
   )
}

