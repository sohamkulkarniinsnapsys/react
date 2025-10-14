import { useState } from "react"

function App() {

  const [color, setColor] = useState("purple");

  return (
    <div className="w-full h-screen duration-500"
    style={{background: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-3">
        <div className="flex flex-wrap justify-center gap-5 shadow-lg bg-amber-50 px-4 py-3 rounded-full">
          <button onClick={() => setColor("black")} className="cursor-pointer outline-none px-3 py-1 rounded-2xl text-white shadow-lg" style={{backgroundColor: "black"}}>Black</button>
          <button onClick={() => setColor("green")} className="cursor-pointer outline-none px-3 py-1 rounded-2xl text-white shadow-lg" style={{backgroundColor: "green"}}>Green</button>
          <button onClick={() => setColor("blue")} className="cursor-pointer outline-none px-3 py-1 rounded-2xl text-white shadow-lg" style={{backgroundColor: "blue"}}>Blue</button>
          <button onClick={() => setColor("red")} className="cursor-pointer outline-none px-3 py-1 rounded-2xl text-white shadow-lg" style={{backgroundColor: "red"}}>Red</button>
          <button onClick={() => setColor("lime")} className="cursor-pointer outline-none px-3 py-1 rounded-2xl text-white shadow-lg" style={{backgroundColor: "lime"}}>Lime</button>
          <button onClick={() => setColor("fuchsia")} className="cursor-pointer outline-none px-3 py-1 rounded-2xl text-white shadow-lg" style={{backgroundColor: "fuchsia"}}>Fuchsia</button>

          <button onClick={() => setColor("white")} className="cursor-pointer outline-1 outline-gray-500 px-3 py-1 rounded-2xl text-black shadow-lg" style={{backgroundColor: "white"}}>White</button>
        </div>
      </div>
    </div>
  )
}

export default App
