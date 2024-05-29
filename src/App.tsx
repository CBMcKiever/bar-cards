import './App.css'
import '@mantine/core/styles.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { DrinkSearch } from './pages/search/search'
import { Random } from './pages/random/random'
import { Ingredient } from './pages/ingredient/ingredient'
import { Drink } from './pages/drink/drink'
import { Home } from './home'
import { AppShell, Burger } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

function App() {
  const [opened, { toggle }] = useDisclosure()
  return (
    <>
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 300,
          breakpoint: 'sm',
          collapsed: { desktop: !opened },
        }}
        padding="md"
      >
        <AppShell.Header>
          <Burger opened={opened} onClick={toggle} size="sm" />
          <div>Logo</div>
        </AppShell.Header>

        <AppShell.Navbar p="md">Navbar</AppShell.Navbar>

        <AppShell.Main>
          <Router>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route
                path="/search"
                element={<DrinkSearch />}
              ></Route>
              <Route
                path="/ingredient"
                element={<Ingredient />}
              ></Route>
              <Route path="/random" element={<Random />}></Route>
              <Route path="/drink/:drinkId" element={<Drink />}></Route>
            </Routes>
          </Router>
        </AppShell.Main>
      </AppShell>
    </>
  )
}

export default App
