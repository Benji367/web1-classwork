<script>
    import Navbar from "$lib/components/Navbar.svelte";
    import Touge from "$lib/images/touge.jpg";
    import FormComponent from "$lib/components/FormComponent.svelte";
</script>

<Navbar />
<FormComponent />


<h1>About</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<div>
    <img src={Touge} alt="Road in Japan">
</div>
 

<style>
    img {
        width: 200px; 
    }

    div img{
        width: 700px;
        border: 4px solid orange;
        border-radius: 10px;
        }
</style>
