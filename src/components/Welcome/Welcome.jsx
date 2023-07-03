import Button from '@mui/material/Button';
import './Welcome.css'

function Welcome() {
    return (
        <div id="Welcome">
            <h1>My Name Is Chris</h1>
            <h2>And I am a Web Developer</h2>
            <a href="/projects"><Button variant='outlined'>Learn More</Button></a>
        </div>
    )
}
export default Welcome;