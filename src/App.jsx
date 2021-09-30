import React, { useState } from 'react';

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
        <SettingsModal
          show={settingsModalShow}
          onHide={() => setSettingsModalShow(false)}
          setdifficulty={(e) => setDifficulty(e)}
        />
      </main>
    </div>
  );
}

export default App;
