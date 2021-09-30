import React, { useState } from 'react';

import { Button, Navbar, Container } from 'react-bootstrap';

import SettingsModal from './components/SettingsModal';

function App() {
  const [difficulty, setDifficulty] = useState(null);
  const [modalShow, setModalShow] = useState(false);

  const getDifficulty = (data) => {
    setDifficulty(data);
  };

  return (
    <div className="App">
      <header>
        <Navbar bg="dark" className="shadow">
          <Container>
            <Navbar.Brand href="#home">
              <img
                src="/images/evista.png"
                width="110"
                height="38"
                className="d-inline-block align-top"
                alt="Evista logo"
              />
            </Navbar.Brand>

            {difficulty === null ? (
              <>
                <Button variant="primary" onClick={() => setModalShow(true)}>
                  Start new Game
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="secondary"
                  onClick={() => {
                    const previousDifficulty = difficulty;
                    setDifficulty(null);
                    setTimeout(() => {
                      setDifficulty(previousDifficulty);
                    }, 5);
                  }}
                >
                  Start over
                </Button>
                <Button onClick={() => setDifficulty(null)}>
                  Start a new Game
                </Button>
              </>
            )}
          </Container>
        </Navbar>
      </header>

      <SettingsModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        getDifficulty={getDifficulty}
      />
    </div>
  );
}

export default App;
