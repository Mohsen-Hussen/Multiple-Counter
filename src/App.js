import React from 'react';
import CounterTwo from './components/CounterTwo'
import './App.css';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      <CounterTwo />
    </div>
  );
}

export default App;