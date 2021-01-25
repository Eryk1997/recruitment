import "./App.css";
import Navbar from "./components/Navbar";
import Footer from './components/Footer'
import { Switch, Route } from "react-router-dom";
import AllPokemon from './views/allPokemon/AllPokemon'
import PokemonInfo from './views/pokemonInfo/PokemonInfo'
import Search from "./views/search/Search";
import NotFoundPage from './views/notFoundPage/NotFoundPage'

import { ProtectedRoute } from './configuration/ProtectedRoute'

function App() {
  return (
    <div className="App bg-primary">
        <Navbar />
        <Switch>
          <Route exact path="/" component={AllPokemon} />
          <ProtectedRoute path="/pokemonInfo" component={PokemonInfo} />
          <ProtectedRoute path="/search" component={Search} />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
    </div>
  );
}

export default App;
