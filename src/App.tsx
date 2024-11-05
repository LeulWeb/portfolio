import { Footer } from "./components/Footer"
import { Navbar } from "./components/Navbar"

export const App = ()=>{
  return (
    <main>
      <section className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <h1 className="bg-red-500">Working </h1>
        </div>
        <Footer />
      </section>
    </main>
  );
}