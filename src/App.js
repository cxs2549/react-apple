import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Home from "./views/Home/Home"

const App = () => {
  return (
    <>
      <Header />
      <main className="bg-white text-black">
        <Home />
      </main>
      <Footer />
    </>
  )
}

export default App
