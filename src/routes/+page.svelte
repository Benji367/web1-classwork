<script>
    import Navbar from "$lib/components/Navbar.svelte";
    import Card from "$lib/components/card.svelte";
    import rubio from "$lib/images/rubio.jpg"
    import carrierVideo from '$lib/images/carrierVideo.mp4';
    
    let person = {
        name: "Marco Rubio",
        image: rubio
    }
</script>

<Navbar />


<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<img src="https://tse3.mm.bing.net/th/id/OIP.vrepPy4ZARZd4qsDrZ0dwAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3" alt="F22 Jet">
<video width="200" height="200" controls
    source src={carrierVideo} type="video/mp4"
    autoplay
    loop
    muted
    playsinline
    Your browser does not support the video tag.>
</video>
    <section>

        <Card name = {"Benjamin"}/>
        <Card name = {"Buddy"} image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc-NtG8CdrFyh9z9Kas0h4AEDGN5887RDzhxTXcV9bs4-vyPf2TZ6F0qNycorXrHO3xguANV_7zZhuVjLIFwoDoUacu1VW0OGuIaXN3X0S0N04UjzrFXSdwoirSKglfpk&s=10&ec=121691717"}/>
        <Card {...person} image={rubio}/>
        <Card />
    </section>

<style>
    p a{
        color: red;
        font: size 12px;
        text-decoration: underline;
    }

    p{
        color: lightseagreen;
        font-size: 25px;

    }

    h1{
        font-size: 40px;
    }

    img{
        width: 200px;
        height: 200px;
    }

    /* section{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1em;

    }

    @media screen and (width < 1120px){  
    } */

    /* Replacement for media query for accessability*/
     section{
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));

     }
</style>
