
const Portfolio = () => {
    const projects = [
        {
            title: 'Project 1',
            image: '/src/assets/Example_image.png',  
            Git: 'https://github.com/project',     
            Deployed: 'https://example.com'
        },
        {
            title: 'Project 2',
            image: '/src/assets/Example_image.png',
            Git: 'https://github.com/project',
            Deployed: 'https://example.com'
        },
        {
            title: 'Project 3',
            image: '/src/assets/Example_image.png',
            Git: 'https://github.com/project',
            Deployed: 'https://example.com'
        },
        {
            title: 'Project 4',
            image: '/src/assets/Example_image.png',
            Git: 'https://github.com/project',
            Deployed: 'https://example.com'
        },
        {
            title: 'Project 5',
            image: '/src/assets/Example_image.png',
            Git: 'https://github.com/project',
            Deployed: 'https://example.com'
        },
        {
            title: 'Project 6',
            image: '/src/assets/Example_image.png',
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