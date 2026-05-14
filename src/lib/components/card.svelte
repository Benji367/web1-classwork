<script>
    let { name = "Web 1" } = $props();
</script>

<p>{name} Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus distinctio doloribus in voluptates animi t velit quo harum.</p>

<div>
    <img src="" alt="Placeholder" />
    <aside>
        <h3>{name}</h3>
        <ul>
            <li>Hobby 1</li>
            <li>Hobby 2</li>
            <li>Hobby 3</li>
        </ul>
    </aside>
</div>
<style>
    div{
        color: darkorange;
        display: flex;
        gap: 1em;
        border: 1px solid grey;
        margin-bottom: 1em;
        padding: 1em;
        max-width: 400px;
    }

    p{
        color: goldenrod;
    }
</style>