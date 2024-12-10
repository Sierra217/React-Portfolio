import exampleImg from "../assets/Example_image.png"


const Portfolio = () => {
    const projects = [
        {
            title: 'Project 1',
            image: exampleImg,  
            Git: 'https://github.com/project',     
            Deployed: 'https://example.com'
        },
        {
            title: 'Project 2',
            image: exampleImg,
            Git: 'https://github.com/project',
            Deployed: 'https://example.com'
        },
        {
            title: 'Project 3',
            image: exampleImg,
            Git: 'https://github.com/project',
            Deployed: 'https://example.com'
        },
        {
            title: 'Project 4',
            image: exampleImg,
            Git: 'https://github.com/project',
            Deployed: 'https://example.com'
        },
        {
            title: 'Project 5',
            image: exampleImg,
            Git: 'https://github.com/project',
            Deployed: 'https://example.com'
        },
        {
            title: 'Project 6',
            image: exampleImg,
            Git: 'https://github.com/project',
            Deployed: 'https://example.com'
        }
    ]
    return (
        <div className="portfolio">
            <h1>My Projects</h1>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div key={index} className="project">
                        <h2>{project.title}</h2> 
                        <img src={project.image} alt={project.title} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;