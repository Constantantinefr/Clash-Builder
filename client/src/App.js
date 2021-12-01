import logo from './logo.svg';
import Picture from './Clashwall.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={Picture}/>
      
        <p>
        <label for="Cards">Choose a Mini Tank:</label>
        <select name="Cards1" id="Cards">
        <option value="Knight">Knight</option>
        <option value="Mini Pekka">Mini Pekka</option>
        <option value="Royal Ghost">Royal Ghost</option>
        <option value="Elixer Golem">Elixer Golem</option>
        </select>
        <br></br>
        <label for="WinCondi">Choose a Win Condition:</label>
        <select name="Cards2" id="WinCond">
        <option value="Ram Rider">Ram Rider</option>
        <option value="Electro Giant">Electro Giant</option>
        <option value="Hog Rider">Hog Rider</option>
        <option value="Mega Knight">Mega Knight</option>
        </select>
        <br></br>
        <label for="Cycle">Choose a Cycle Card:</label>
        <select name="Cards3" id="Cycle">
        <option value="Skeleton">Skeleton</option>
        <option value="Ice Spirit">Ice Spirit</option>
        <option value="Fire Spirit">Fire Spirit</option>
        <option value="Electro spirit">Electro spirit</option>
        </select>
        <br></br>
        <label for="Spell">Choose a Spell Card:</label>
        <select name="Cards4" id="Spell1">
        <option value="FireBall">Fireball</option>
        <option value="Snowball">Snowball</option>
        <option value="Poison">Poison</option>
        <option value="Royal Delivery">Royal Delivery</option>
        </select>
        <br></br>
        <label for="Spell2">Choose a second Spell Card:</label>
        <select name="Cards5" id="Spell2">
        <option value="Rocket">Rocket</option>
        <option value="Lightning Spell">Lightning Spell</option>
        <option value="Earthquake">Earthquake</option>
        <option value="Zap">Zap</option>
        </select>
        <br></br>
        <label for="Air Support">Choose a Air Support Card:</label>
        <select name="Cards6" id="AirSup1">
        <option value="Archers">Archers</option>
        <option value="Minions">Minions</option>
        <option value="Musketeer">Musketeer</option>
        <option value="Magical Archer">Magical Archer</option>
        </select>
        <br></br>
        <label for="Second Air Support">Choose a Second Air Support Card:</label>
        <select name="Cards7" id="AirSup2">
        <option value="Electro Wizard">Electro Wizard</option>
        <option value="Wizard">Wizard</option>
        <option value="Ice Wizard">Ice Wizard</option>
        <option value="Minion Hoard">Minion Hoard</option>
        </select>
        <br></br>
        <label for="Building">Choose a Building:</label>
        <select name="Cards8" id="AirSup2">
        <option value="Tesla">Tesla</option>
        <option value="Cannon">Cannon</option>
        <option value="Bomb Tower">Bomb Tower</option>
        <option value="Goblin Cage">Goblin</option>
        </select>
        </p>
        Put a text box and a button to save choices that were selected
      </header>
    </div>
  );
}

export default App;
