import { Link } from "react-router-dom"

const headerLinkStyle = {
    display: "inline",
    margin: "20px"
}

const headerLinkContainerStyle = {
    margin: "20px"
}

export default function Header() {

    return (
        <nav>
            <ul style={headerLinkContainerStyle}>
                <li style={headerLinkStyle}><Link to="/">Home</Link></li>
                <li style={headerLinkStyle}><Link to="/about">About</Link></li>
                <li style={headerLinkStyle}><Link to="/portfolio">Portfolio</Link></li>
            </ul>
        </nav>
    )
}