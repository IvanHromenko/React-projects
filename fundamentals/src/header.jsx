function MainHeader() {
    return <h1 className="heading1">React basics</h1>;
}

function Header() {
    return (
        <div>
            <MainHeader />
        </div>
    )
}

export default Header;