import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import Header from './components/Header';
import SettingsModal from './components/SettingsModal';

function App() {
  const [difficulty, setDifficulty] = useState(null);
  const [settingsModalShow, setSettingsModalShow] = useState(false);

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
          <>not playing</>
        ) : (
          // if a difficulty was selected, start the game
          <>playing</>
        )}

        <SettingsModal
          show={settingsModalShow}
          onHide={() => setSettingsModalShow(false)}
          setdifficulty={(e) => setDifficulty(e)}
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
