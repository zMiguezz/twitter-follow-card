import { useState } from 'react'

export function TwitterFollowCard ({ userName, name }){
    const [isFollowing, setIsFollowing] = useState(false)

    const text = isFollowing ? 'Siguiendo': 'Seguir'
    const buttonClassName = isFollowing 
    ? 'tw-followCard-button is-following'     
    : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    return (
        <arteicle className="tw-followCard">\
        <header className="tw-followCard-header">
            <img 
                className="tw-followCard-avatar" 
                src={`https://unavatar.io/${userName}`}
                alt="avatar-migue" />
            <div className="twitter-followCard-info">
                <strong>{name}</strong>
                <span className="twitter-followCard-infoUserName">@{userName}</span>
            </div>
        </header>

        <aside>
            <button className="twitter-followCard-button" onclick={handleClick}>
                {text}
            </button>
        </aside>
       </arteicle>
    )
}