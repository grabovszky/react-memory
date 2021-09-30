import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import Game from './components/Game';
import Header from './components/Header';
import Hero from './components/Hero';
import SettingsModal from './components/SettingsModal';
import WinningScreenModal from './components/WinningScreenModal';

/**
 * Main App file
 *
 * @param {null, int} difficulty serves two purpose, if null no game is being palyed, if integer, sets the number of pair of cards
 * @param score stores the final score of the current game
 */
function App() {
  const [difficulty, setDifficulty] = useState(null);
  const [score, setScore] = useState(0);
  const [settingsModalShow, setSettingsModalShow] = useState(false);
  const [winningScreenShow, setWinningScreenShow] = useState(false);

  return (
    <div className="App">
      <main className="main-content">
        <Header
          isplaying={difficulty === null ? false : true}
          setdifficulty={(e) => setDifficulty(e)}
          showsettings={(e) => setSettingsModalShow(e)}
        />

        {difficulty === null ? (
          // if no difficulty is selected, show the main screen
          <>
            <img
              alt=""
              src={`${process.env.PUBLIC_URL}/images/wave.svg`}
              className="img-fluid background-img"
            />
            <Hero showsettings={(e) => setSettingsModalShow(e)} />
          </>
        ) : (
          // if a difficulty was selected, start the game
          <>
            <img
              alt=""
              src={`${process.env.PUBLIC_URL}/images/wave-big.svg`}
              className="img-fluid background-img"
            />
            <Game
              difficulty={difficulty}
              setdifficulty={(e) => setDifficulty(e)}
              setscore={(e) => setScore(e)}
              showwinningscreen={(e) => setWinningScreenShow(e)}
            />
          </>
        )}

        <SettingsModal
          show={settingsModalShow}
          onHide={() => setSettingsModalShow(false)}
          setdifficulty={(e) => setDifficulty(e)}
        />

        <WinningScreenModal
          show={winningScreenShow}
          onHide={() => setWinningScreenShow(false)}
          showsettings={(e) => setSettingsModalShow(e)}
          setdifficulty={(e) => setDifficulty(e)}
          score={score}
        />
      </main>

      <Container className="footer">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <p className="col-md-4 mb-0 text-muted">© 2021 Kristóf Gábor</p>

          <span className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
            <img
              alt=""
              width="50px"
              height="50px"
              src={`${process.env.PUBLIC_URL}/images/react.svg`}
            />
          </span>

          <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item">
              <a
                href="https://evista.hu/"
                className="nav-link px-2 text-muted hover-blue"
              >
                eVista
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://gaborkristof.com/"
                className="nav-link px-2 text-muted hover-blue"
              >
                gaborkristof
              </a>
            </li>
          </ul>
        </footer>
      </Container>
    </div>
  );
}

export default App;
