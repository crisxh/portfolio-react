export default function Project({ url, title }) {
    return (
        <div>
            <a href={url} rel="noreferrer" target="_blank">{title}</a>
        </div>
    )
}