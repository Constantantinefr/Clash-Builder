import Picture from './Clash-Royale-logo.png'
import './App.css';

function App() {
  function handleCheckout_simple() {
    const payload = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
          Minitank:"Mini Pekka",
          WinCondition: "Mega Knight",
          Cycle:"Skeletons",
          Spell: "Fireball",
          Spell2:"rocket",
          Airsup:"minions",
          AirSup2: "wizard",
          Building:"tesla"
        })
    }
    fetch("/checkout",payload)
        .then(res => res.json())
        .then(res => console.info(res))
}
  return (
    <div className="App">
      <header className="App-header">
      <img src={Picture} alt = "Topheader"/>
        <p>
        <form action="" method="post">
        <label for="Cards">Choose a Mini Tank:</label>
        <select name="Cards1" id="Cards">
        <option value="">Select</option>
        <option id="1" value="Knight">Knight</option>
        <option id="2"value="Mini Pekka">Mini Pekka</option>
        <option id="3"value="Royal Ghost">Royal Ghost</option>
        <option id="4"value="Elixer Golem">Elixer Golem</option>
        </select>
        <br></br>
        <label for="WinCondi">Choose a Win Condition:</label>
        <select name="Cards2" id="WinCond">
        <option value="">Select</option>
        <option id="5" value="Ram Rider">Ram Rider</option>
        <option id="6" value="Electro Giant">Electro Giant</option>
        <option id="7" value="Hog Rider">Hog Rider</option>
        <option id="8" value="Mega Knight">Mega Knight</option>
        </select>
        <br></br>
        <label for="Cycle">Choose a Cycle Card:</label>
        <select name="Cards3" id="Cycle">
        <option  value="">Select</option>
        <option id="9" value="Skeleton">Skeleton</option>
        <option id="10" value="Ice Spirit">Ice Spirit</option>
        <option id="11" value="Fire Spirit">Fire Spirit</option>
        <option id="12" value="Electro spirit">Electro spirit</option>
        </select>
        <br></br>
        <label for="Spell">Choose a Spell Card:</label>
        <select name="Cards4" id="Spell1">
        <option value="">Select</option>
        <option id="13" value="FireBall">Fireball</option>
        <option id="14" value="Snowball">Snowball</option>
        <option id="15" value="Poison">Poison</option>
        <option id="16" value="Royal Delivery">Royal Delivery</option>
        </select>
        <br></br>
        <label for="Spell2">Choose a second Spell Card:</label>
        <select name="Cards5" id="Spell2">
        <option value="">Select</option>
        <option id="17" value="Rocket">Rocket</option>
        <option id="18" value="Lightning Spell">Lightning Spell</option>
        <option id="19" value="Earthquake">Earthquake</option>
        <option id="20" value="Zap">Zap</option>
        </select>
        <br></br>
        <label for="Air Support">Choose a Air Support Card:</label>
        <select name="Cards6" id="AirSup1">
        <option value="">Select</option>
        <option id="21" value="Archers">Archers</option>
        <option id="22" value="Minions">Minions</option>
        <option id="23" value="Musketeer">Musketeer</option>
        <option id="24" value="Magical Archer">Magical Archer</option>
        </select>
        <br></br>
        <label for="Second Air Support">Choose a Second Air Support Card:</label>
        <select name="Cards7" id="AirSup2">
        <option value="">Select</option>
        <option id="25" value="Electro Wizard">Electro Wizard</option>
        <option id="26" value="Wizard">Wizard</option>
        <option id="27" value="Ice Wizard">Ice Wizard</option>
        <option id="28" value="Minion Hoard">Minion Hoard</option>
        </select>
        <br></br>
        <label for="Building">Choose a Building:</label>
        <select name="Cards8" id="AirSup2" >
        <option value="">Select</option>
        <option id="29" value="Tesla">Tesla</option>
        <option id="30" value="Cannon">Cannon</option>
        <option id="31" value="Bomb Tower">Bomb Tower</option>
        <option id="32" value="Goblin Cage">Goblin</option>
        </select>
        </form>
        </p>
        Name your deck!
        <input type="submit" id="loginbtn" name="Submit"/>
        <br></br>
        <button type="submit" value="Submit"
        onClick={() => handleCheckout_simple()}
        >Load all other decks</button>
        <script src="Cards.js"></script>
      </header>
    </div>
  );
}

export default App;
