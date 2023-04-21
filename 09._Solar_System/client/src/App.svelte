<script>
  import { Router, Link, Route } from 'svelte-navigator';
  import { useNavigate } from 'svelte-navigator';
  const navigate = useNavigate();
  
  import Home from './pages/Home/Home.svelte';
  import Planets from './pages/Planets/Planets.svelte';
</script>

<Router>
  <nav>
    <Link to="Home">Home</Link>
    <Link to="Planets">Planets</Link>
  </nav>
  <Route path="/">
    <Home />
  </Route>
  <Route path="/planets">
    <Planets />
  </Route>
</Router>