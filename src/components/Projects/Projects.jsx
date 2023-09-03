import './Projects.scss';
import Project from '../Project/Project';

const projectList = [
    {
        name: 'checkers',
        image: [`checkers.png`],
        url: 'https://crisxh.github.io/checkers',
        tags: ['game',]
    },
    {
        name: 'virtual pet',
        image: ['virtual pet.png'],
        url: `https://crisxh.github.io/virtual_pet/`,
        tags: ['game',]

    },
    {
        name: 'Chat With Yourself',
        image: 'https://via.placeholder.com/150?text=Chat_With_Yourself',
        url: `https://crisxh.github.io/chat_with_yourself/`,
        tags: []
    },
    {
        name: "Magic 8 Ball",
        image: [`Magic 8 Ball.png`],
        url: 'https://crisxh.github.io/Magic-8-ball/',
        tags: ['game',]
    },
    {
        name: 'Random Quote Machine',
        image: ``,
        url: 'https://codepen.io/crisxh/full/NWYrEML',
        tags: []
    },
    {
        name: 'Markdown Previewer',
        image: 'https://via.placeholder.com/150?text=MarkDown-gPreviewer',
        url: 'https://codepen.io/crisxh/full/KKoMbYg',
        tags: []
    },
    {
        name: "Prison Break",
        image: 'https://via.placeholder.com/150?text=Python-PrisonBreak',
        url: "https://crisxh.github.io/ted-think-like-a-programmer",
        tags: ['game', 'python'],
        description: 'A simulated Experience Based on a TED video written in Python'
    },
    {
        name: "Credit Card Entry Front End",
        image: 'https://via.placeholder.com/150?text=Credit Card',
        url: "https://crisxh.github.io/credit-card-entry",
        tags: ['front-end', 'design', 'frontend-mentor-io']
    },
    {
        name: "Google Frontend Clone",
        image: 'https://via.placeholder.com/150?text=Credit Card',
        url: "https://codepen.io/crisxh/full/PoRjNKQ",
        tags: ['design']
    },
    {
        name: "Credit Card Entry Front End",
        image: 'https://via.placeholder.com/150?text=Credit Card',
        url: "https://crisxh.github.io/credit-card-entry",
        tags: ['front-end', 'design', 'frontend-mentor-io']
    },
    {
        name: "Credit Card Entry Front End",
        image: 'https://via.placeholder.com/150?text=Credit Card',
        url: "https://crisxh.github.io/credit-card-entry",
        tags: ['front-end', 'design', 'frontend-mentor-io']
    },
]

const ProjectMap = projectList.map((project, index) => {
    return (
        <Project title={project.name} url={project.url} image={project.image} description={project.description} key={index} />
    )
})

function Projects() {
    return (
        <div id='Projects'>
            {ProjectMap}
        </div>
    )
}

export default Projects