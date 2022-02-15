import React, { useState } from 'react'

import Main from './src/pages/Main';
import AppContext from './src/context/AppContext'

export default function App() {

  const [visor, setVisor] = useState('0')

  const userSettings = {
    visor: visor,
    setVisor
  }

  return (
    <AppContext.Provider value={userSettings}>
      <Main />
    </AppContext.Provider>
  );
}
