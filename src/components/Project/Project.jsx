import './Project.scss'

export default function Project({ url, title, image, description }) {
    return (
        <div className='projectContainer'>
            <img src={image ? image : null} />
            <a href={url} rel="noreferrer" target="_blank">{title}</a>
        </div>
    )
}