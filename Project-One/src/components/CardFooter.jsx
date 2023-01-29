import facebookLogo from "../assets/facebook-icon.png"
import githubLogo from "../assets/github-icon.png"
import instagramLogo from "../assets/instagram-icon.png"
import twitterLogo from "../assets/twitter-icon.png"

export default function CardFooter(){
    return(
        <div className="footer--container">
            <img className="footer--element" src={twitterLogo} />
            <img className="footer--element" src={facebookLogo} />
            <img className="footer--element" src={instagramLogo} />
            <img className="footer--element" src={githubLogo} />
            
        </div>
    )
}