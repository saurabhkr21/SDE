import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChildA from './components/ChildA'
import { UserProvider } from './contexts/UserContext'

function App() {
  return (
    <UserProvider>
      <ChildA />
    </UserProvider>
  )
}

export default App

