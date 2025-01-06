export default function CustomButton({ url, isSecondary, className, children }) {

    return (
        <a className={`custom-button ${className ?? ''}`} href={url}>
            {children}
        </a>
    )
}