import "./assets/App.css"
import { TwitterFollowCard } from "./assets/TwitterFollowCard"

export function App () {
 
    return (
    <div className="App-contendor">    
        <TwitterFollowCard userName="zMiguezz">Hector Miguel</TwitterFollowCard>
        <TwitterFollowCard userName="jaredmazapann"> Jared</TwitterFollowCard>
        <TwitterFollowCard userName="jhumbertto"> Jorge Garcia</TwitterFollowCard>
        <TwitterFollowCard userName="ClexyT" > Eduardo Aguilar</TwitterFollowCard>
    </div> 
   )
}

