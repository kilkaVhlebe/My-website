import ProjectItem from "../components/ProjectItem"

export default function ProjectPage() {
    return (
        <div>
            <h3>Click on proj to redirect</h3>
            <p>Here's only released projects. I have more in process or non released but done projects on my github!</p>
              <ProjectItem name="ASCII-ART app" description="Andriod app for generation ascii images from real photo" link="https://github.com/kilkaVhlebe/ASCII-cam" /> 
              <ProjectItem name="Circle-Drawer script" description="Js script for drawing circles on perfect-circle.io" link="https://github.com/kilkaVhlebe/Circle-Drawer" />  
              <ProjectItem name="Step-by-Dungeon" description="Turn based game maked on godot. 2 minutes gameplay lol." link="https://github.com/kilkaVhlebe/Step-by-Dungeon.git" imgLink="https://media.discordapp.net/attachments/1308463333044912199/1308463455203754074/aboba1.png?ex=673e090d&is=673cb78d&hm=9d83824d36efc277b698b8bec79a5f6fc03e8e3570d02371098e163e1536d092&=&format=webp&quality=lossless&width=625&height=331"/> 
        </div>
    )
}