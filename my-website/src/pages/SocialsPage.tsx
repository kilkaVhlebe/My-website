import SocialItem from "../components/Socialtem";
import './SocialPage.css'


export default function ProjectPage() {
    return (
        <div className="SocialPage">
            <SocialItem name="kilka_v_hlebe" imgLink="../../public/discord-white-icon.png" />
            <SocialItem name="Telegram" imgLink="../../public/telegram-svgrepo-com.png" link="https://t.me/Kilkavhlebe"/>
            <SocialItem name="YouTube" imgLink="../../public/youtube-svgrepo-com.png" link="https://www.youtube.com/@kilka_v_hJlebe"/>
            <SocialItem name="Twitch" imgLink="../../public/logo-twitch-svgrepo-com.png" link="https://www.twitch.tv/kilka_v_hjiebe"/>
            <SocialItem name="GitHub" imgLink="../../public/github-icon-1-logo-svgrepo-com.png" link="https://github.com/kilkaVhlebe"/>
        </div>
    )
}