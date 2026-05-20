<script>
    import Navbar from "$lib/components/Navbar.svelte";
    import Touge from "$lib/images/touge.jpg";
</script>

<Navbar>

</Navbar>

<h1>About</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<img src="https://tse3.mm.bing.net/th/id/OIP.vrepPy4ZARZd4qsDrZ0dwAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3" alt="F22 Jet">
<div>
    <img src={Touge} alt="Road in Japan">
</div>
 

<style>
    img {
        width: 200px; 
    }

    div img{
        width: 600px;
        border: 3px solid orange;
        border-radius: 8px;
        }
</style>
