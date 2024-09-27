import './App.css'
import Ingredients from "./components/Ingredients/Ingredients.tsx";
import Burger from "./components/Burger/Burger.tsx";

const App = () => {

  return (
    <>
      <div className="container">
        <Ingredients/>
        <Burger />
      </div>
    </>
  )
};

export default App
