import {SocialMediaIconsReact} from 'social-media-icons-react';

const socialLinkStyle = {
    display: "inline",
    margin: "10px"
}

const socialLinkContainerStyle = {
    margin: "20px"
}

export default function UserInfo({ user }) {

    return (
        <>
            <img className="profile-photo" src={user.profilePhoto}/>
            <h1>I'm {user.fullName}</h1>
            <ul>
                <li>I am a {user.occupation}</li>
                <li>I live in {user.location}</li>
                <li>contact me {user.email}</li>
            </ul>

            <ul style={socialLinkContainerStyle}>
                {
                    user.socials.map(social => {
                    return <li style={socialLinkStyle}><SocialMediaIconsReact 
                                borderColor="rgba(0,0,0,0)" 
                                icon={social.icon} 
                                url={social.link} 
                                size="48" /></li>
                    })
                }
            </ul>
        </>
    )
}