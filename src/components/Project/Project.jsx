import './Project.scss'

export default function Project({ url, title, image, description }) {
    return (
        <div className='projectContainer'>

            <a href={url} rel="noreferrer" target="_blank">
                <img src={image ? image : null} />
                {title}
            </a>
        </div>
    )
}