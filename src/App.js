import Header from "./components/Header/Header"
import Home from "./views/Home/Home"

const App = () => {
  return (
    <>
      <Header />
      <main className="h-screen bg-white text-black">
        <Home />
      </main>
      <footer className="h-40 bg-blue-300"></footer>
    </>
  )
}

export default App
