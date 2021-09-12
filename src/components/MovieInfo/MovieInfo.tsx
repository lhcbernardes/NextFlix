import MenuSharpIcon from '@material-ui/icons/MenuSharp';

export default function Header({black}) {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png" alt="Logo"></img>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <MenuSharpIcon style={{fontSize: 50}}/>         
                </a>
            </div>
        </header>
    )
}