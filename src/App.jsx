import "./assets/App.css"
import { TwitterFollowCard } from "./assets/TwitterFollowCard"

export function App () {
    const formatUserName = (userName) => `@${userName}`
    
    return (
    <div className="App-contendor">    
        <TwitterFollowCard formatUserName={formatUserName} isFollowing={true} userName="zMiguezz" name="Hector Miguel"/>
        <TwitterFollowCard formatUserName={formatUserName} isFollowing={true} userName="jaredmazapann" name="Jared"/>
        <TwitterFollowCard formatUserName={formatUserName} isFollowing={true} userName="jhumbertto" name="Jorge Garcia"/>
        <TwitterFollowCard formatUserName={formatUserName} isFollowing={true} userName="ClexyT" name="Eduardo Aguilar"/>
    </div> 
   )
}

