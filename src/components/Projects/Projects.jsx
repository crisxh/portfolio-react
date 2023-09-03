import './Projects.scss';
import Project from '../Project/Project';
import ChatImg from '../../assets/projectImages/Chat With Yourself.png'
import CheckersImg from '../../assets/projectImages/checkers.png'
import Magic8BallImg from '../../assets/projectImages/Magic8Ball.png'
import MarkdownImg from '../../assets/projectImages/Markdown Previewer.png';
import PomodoroImg from '../../assets/projectImages/Pomodoro.png';
import RandomQuoteImg from '../../assets/projectImages/RandomQuote.png';



const projectList = [
    {
        name: 'Pomodoro Timer',
        image: PomodoroImg,
        url: 'https://sprightly-cranachan-c6808e.netlify.app/',
        tags: ['game',]
    },
    {
        name: "Google Frontend Clone",
        image: 'https://via.placeholder.com/150?text=Credit Card',
        url: "https://codepen.io/crisxh/full/PoRjNKQ",
        tags: ['design']
    },
    {
        name: 'Chat With Yourself',
        image: ChatImg,
        url: `https://crisxh.github.io/chat_with_yourself/`,
        tags: []
    },
    {
        name: 'checkers',
        image: CheckersImg,
        url: 'https://crisxh.github.io/checkers',
        tags: ['game',]
    },
    {
        name: 'Markdown Previewer',
        image: MarkdownImg,
        url: 'https://codepen.io/crisxh/full/KKoMbYg',
        tags: []
    },
    {
        name: 'Random Quote Machine',
        image: RandomQuoteImg,
        url: 'https://codepen.io/crisxh/full/NWYrEML',
        tags: []
    },
    {
        name: "Magic 8 Ball",
        image: Magic8BallImg,
        url: '',
        tags: ['game',]
    },
    {
        name: 'virtual pet',
        image: ['virtual pet.png'],
        url: `https://crisxh.github.io/virtual_pet/`,
        tags: ['game',]

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