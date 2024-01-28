export default function Header(props) {
    return (
        <>
            <header>
                <h2 class="logo">Moneyplant</h2>
                <nav class="navigation">
                    <a href="/home" class={"home" === props.active ? "active" : null }>
                        Home
                    </a>
                    <a href="/advisor" class={"advisor" === props.active ? "active" : null }>Advisor</a>
                    <a href="/portfolio" class={"portfolio" === props.active ? "active" : null }>Portfolio</a>
                    <a href="/login" class={"login" === props.active ? "active" : null }>Login</a>
                </nav>
            </header>
        </>
    );
}
