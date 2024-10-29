import './Header.css'
import './Button'
import Button from './Button'
import ProjectPage from '../pages/ProjectPage';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage';


export default function Header() {


return (
    <div>
        <header>
            <h1>Kilka_v_HJIebe's website</h1>
            <Button icon="nf nf-md-link" title=" Social links" link='/'/>
            <Button icon="nf nf-oct-project_roadmap" title=" Projects" link='/projects'/>
            <Button icon="nf nf-cod-github" title=" Github" link='/'/>
        </header>
        <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/projects" element={<ProjectPage />} />
        </Routes>
    </div>
)
}