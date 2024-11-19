import './Header.css'
import './Button'
import Button from './Button'
import { Route, Routes, Link } from 'react-router-dom';
import ProjectPage from '../pages/ProjectPage';
import MainPage from '../pages/MainPage';
import SocialsPage from '../pages/SocialsPage'
import GameReviews from '../pages/GameReviews'


export default function Header() {


return (
    <div>
        <header>
            <h1><Link className='Link' to='/'>Kilka_v_HJIebe's website</Link></h1>
            <Button icon="nf nf-md-link" title=" Social links" link='/socials'/>
            <Button icon="nf nf-oct-project_roadmap" title=" Projects" link='/projects'/>
            <Button icon="nf nf-fa-gamepad" title="Game Reviews" link='/reviews'/>
        </header>
        <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/projects" element={<ProjectPage />} />
                <Route path="/socials" element={<SocialsPage />} />
                <Route path="/reviews" element={<GameReviews />} />
        </Routes>
    </div>
)
}