
export default function TabViews({ onClick, icon: Icon, title }) {
    return (
        <li tabIndex="0" onClick={onClick}>
            <Icon />
            <p>{title}</p>
        </li>
    );
}