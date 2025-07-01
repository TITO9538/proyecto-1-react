import { Card } from "./components/card";
import { DarkModeToggle } from "./components/darkMode";

function App() {
  const people = [
  {
    img: "/images/photo1.png",
    roll: "PRODUCT OWNER",
    name: "Bill Mahoney",
  },
  {
    img: "/images/photo2.png",
    roll: "ART DIRECTOR",
    name: "Saba Cabrera",
  },
  {
    img: "/images/photo3.png",
    roll: "TECH LEAD",
    name: "Shae Le",
  },
  {
    img: "/images/photo4.png",
    roll: "UX DESIGNER",
    name: "Skylah Lu",
  },
  {
    img: "/images/photo5.png",
    roll: "DEVELOPER",
    name: "Griff Richards",
  },
  {
    img: "/images/photo6.png",
    roll: "DEVELOPER",
    name: "Stan John",
  },
];


  return (
    <div className="h-full bg-white dark:bg-slate-900 transform transition-colors duration-500">
      <header className="w-full p-5">
        <nav className="flex justify-end items-center">
          <DarkModeToggle />
        </nav>
        <div className="w-full flex flex-col justify-between items-center gap-3 mt-3 md:flex-row">
          <h1 className="text-3xl font-serif font-semibold dark:text-slate-200">The creative crew</h1>
          <span className="px-10 p-5 md:w-[50%] dark:text-slate-200">
            <h3 className="text-sm font-bold">Who we are</h3>
            <p className="text-xs font-light">
              We are team of creatively diverse. driven. innovative individuals working in various
              locations from the world.
            </p>
          </span>
        </div>
      </header>
      <main className="w-full grid grid-cols-2 gap-10 p-5 md:grid-cols-3">
        {people.map((person) => (
          <Card key={person.id} name={person.name} img={person.img} roll={person.roll} />
        ))}
      </main>
    </div>
  );
}

export default App;
