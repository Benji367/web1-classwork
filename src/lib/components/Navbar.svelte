<script>
    const navItems = [
        {label: "Home", href: "/"},
        {label: "About", href: "/about"}
    ];
</script>

<nav>
    <ul>
        <li>
            <a href={navItems[0].href}>{navItems[0].label}</a>
        </li>
        <li>
            <a href={navItems[1].href}>{navItems[1].label}</a>
        </li>
    </ul>
</nav>

<style>
    nav{
        background-color: orange;
        padding: 1em;
    }

    ul{
        display: flex;
        gap: 1em;
    }

    li{
        list-style-type: none;
    }

    a{
        color: black;
        text-decoration: none;
        padding: 10px;
        font-size: 1.5em;
        border: 2px solid red;
        border-radius: 6px;
    }

    a:hover{
        
        text-decoration-color: purple;
    }

</style>