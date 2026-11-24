
import './App.css';
import img from './images/image-1.avif'
import Title from './components/Title.jsx'
import MenuItems from './components/MenuItems.jsx'

// function Title(){
//   return (
//     <h1>Hello React from Title Component!!!</h1>
//   )
// }

function App() {
  const name = "John";
  const lastName = "Doe";
  const x = true;
  const imageUrl = "https://picsum.photos/seed/picsum/400/400"

  return (
    <div className="App">
      <MenuItems />
      <h1> Hello React!!!</h1>
      <Title />
      <h2>Hello {name} {lastName}</h2>
      <h2>{x ? "Yes" : "No"}</h2>
      <img src={img} alt="" />
      <br/>
      <img src={imageUrl} alt="" />
      <Title />
      
    </div>
    
  );
}

export default App;
