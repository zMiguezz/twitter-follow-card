/* eslint-disable react/prop-types */
export function TwitterFollowCard ({ userName, name, isFollowing,}){
    
    
    return (
        <arteicle className="tw-followCard">
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
            <button className="twitter-followCard-button">
                Seguir
            </button>
        </aside>
       </arteicle>
    )
}