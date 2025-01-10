export default function CustomButton({ url, isSecondary, type, className, children }) {

    if (type == 'secondary') isSecondary == true

    return (
        <a className={`custom-button ${className ?? ''}${isSecondary ? 'secondary' : ''}`} href={url}>
            {children}
        </a>
    )
}