// React m har ik function component hota h  
//jaise index.html entry point hota h , similarily app.jsx react m entry point hota h
//React is a library not a framework, framework m already defined structure hoti h vo apko overall bni bnai cheeze deta h , but library
//m apko ik functionality milti h
// Comment

import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Card from "./components/Card"


function App() {

  return (
    <>
      <Navbar />
      <div className="cards">
        <Card title="card 1" description="card 1 desc" />
        <Card title="card 2" description="card 2 desc" />
        <Card title="card 3" description="card 3 desc" />
        <Card title="card 4" description="card 4 desc" />
      </div>
      <Footer />
    </>
  )
}

export default App