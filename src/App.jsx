import "./App.css";

function App() {
  const players = [
    {
      name: "Virat Kohli",
      role: "Batter",
      country: "India",
      emoji: "🏏",
      runs: "12,000+",
    },
    {
      name: "Rohit Sharma",
      role: "Batter",
      country: "India",
      emoji: "🏆",
      runs: "11,000+",
    },
    {
      name: "Jasprit Bumrah",
      role: "Bowler",
      country: "India",
      emoji: "⚡",
      runs: "400+ wickets",
    },
  ];

  return (
    <div className="app">

      <header className="navbar">
        <h1>🏏 CricketHub</h1>

        <nav>
          <a href="#home">Home</a>
          <a href="#matches">Matches</a>
          <a href="#players">Players</a>
        </nav>
      </header>

      <main>

        <section className="hero" id="home">
          <p className="tag">YOUR WORLD OF CRICKET</p>

          <h2>
            Every Match.
            <br />
            Every Moment.
          </h2>

          <p className="hero-text">
            Explore cricket, discover players, and celebrate the game.
          </p>

          <a className="button" href="#matches">
            Explore Matches →
          </a>
        </section>

        <section className="matches section" id="matches">

          <div className="section-heading">
            <div>
              <p className="tag">MATCH CENTRE</p>
              <h2>Featured Match</h2>
            </div>

            <span className="badge">
              DEMO SCORE
            </span>
          </div>

          <div className="match-card">

            <div className="team">
              <div className="flag">🇮🇳</div>
              <h3>India</h3>
              <p>185/4</p>
              <small>20 overs</small>
            </div>

            <div className="versus">
              <span>VS</span>
              <p>Friendly Demo</p>
            </div>

            <div className="team">
              <div className="flag">🇦🇺</div>
              <h3>Australia</h3>
              <p>180/8</p>
              <small>20 overs</small>
            </div>

            <div className="match-result">
              Sample result: India won by 5 runs.
            </div>

          </div>

          <p className="disclaimer">
            Scores are illustrative sample data, not live match information.
          </p>

        </section>

        <section className="players section" id="players">

          <div className="section-heading">
            <div>
              <p className="tag">MEET THE STARS</p>
              <h2>Popular Players</h2>
            </div>
          </div>

          <div className="player-grid">

            {players.map((player) => (
              <article
                className="player-card"
                key={player.name}
              >

                <div className="player-avatar">
                  {player.emoji}
                </div>

                <p className="player-country">
                  {player.country}
                </p>

                <h3>{player.name}</h3>

                <p className="player-role">
                  {player.role}
                </p>

                <div className="player-info">
                  <span>Career highlight</span>
                  <strong>{player.runs}</strong>
                </div>

              </article>
            ))}

          </div>

        </section>

      </main>

      <footer>
        <h2>🏏 CricketHub</h2>
        <p>Built with React. Made for cricket fans.</p>
        <p className="copyright">
          © 2026 CricketHub · Demo Project
        </p>
      </footer>

    </div>
  );
}

export default App;