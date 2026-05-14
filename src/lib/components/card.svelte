<script>
  let {
    name = "Web 1",
    image = "https://static.vecteezy.com/system/resources/thumbnails/002/534/006/small/social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.jpg",
  } = $props();
</script>

<p>
  {name} Lorem ipsum dolor sit amet consectetur adipisicing elit.
</p>

<div>
  <img src={image} alt="Placeholder" />
  
  <video>

  </video>

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
  div {
    margin: 0 auto;
    color: darkorange;
    display: flex;
    gap: 1em;
    border: 1px solid grey;
    margin-bottom: 1em;
    padding: 1em;
    max-width: 400px;
  }

  p {
    color: goldenrod;
  }

  img{
    margin: 0 auto;
    max-width: 200px;
  }
</style>