import UserInfo from './UserInfo'


export default function Profile() {
    
    const user = {
        fullName: "Isser Gagan",
        occupation: "Computer Science Student",
        location: "Pasay, PH",
        email: "issertmg@gmail.com",
        profilePhoto: "https://media-exp1.licdn.com/dms/image/C5603AQE6m-bnAWvm2w/profile-displayphoto-shrink_800_800/0/1651909120704?e=1659571200&v=beta&t=SYsF031GPWmOCJ2dXEFDUZz1Ifej-0JG13cnwAQRvh0",
        socials: [
            { icon: "facebook", link: "https://facebook.com/issertmg"},
            { icon: "twitter", link: "https://twitter.com/issertmg"},
            { icon: "linkedin", link: "https://linkedin.com/in/issertmg"}
        ]
    }
    
    return (
        <>
            <h1>Profile</h1>

            <UserInfo user={user}/>

            
        </>
    )
}