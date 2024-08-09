import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Songs from "./components/Songs/Songs";
import Dogs from "./components/Dogs/Dogs";
import Cart from "./components/Cart/Cart";
import NavBar from "./components/NavBar/NavBar";
import axios from "axios";
import { useEffect, useState } from "react";
import { CartContext } from "./Contexts/CartContext";

function App() {
  // create a state?
  // comment
  const [allSongs, setAllSongs] = useState([{}]);
  const [allDogs, setAllDogs] = useState([{}]);
  const [cart, modifyCart] = useState([{}]);
  const [isAdded1, setAdded1] = useState(false);

  // no need a state, because we want the effect whenever visit the page
  // useEffect(theEffect, whatChangeWillTriggerEffect)
  useEffect(() => {
    const serverUrl = "http://localhost:8000";
    // this is the effect statements
    async function fetchData() {
      const resWithoutImages = await axios.get(serverUrl + "/v1/dogs");
      const dogDataWithoutImages = resWithoutImages.data; // this is an array of dogs

      // dogDataWithImages is an array of dogs
      const dogDataWithImages = await Promise.all(
        // passed in an array of promises
        dogDataWithoutImages.map(async (dog) => {
          // fetch the image of that dog in term of 'blob'
          const dogImageRes = await axios.get(serverUrl + "/assets/images/" + dog.imageName, {
            responseType: "blob",
          });
          // convert to URL
          const imageUrl = URL.createObjectURL(dogImageRes.data);
          return { ...dog, imageUrl };
        })
      );
      return dogDataWithImages;
    }
    fetchData()
      .then((dogData) => {
        setAllDogs(dogData);
      })
      .catch((error) => console.log(error));
  }, []);

  // lay songs data tu server, khi chuyen qua tab "Songs", respond la 1 JSON object songs
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:8000/v1/songs");
      return res;
    };
    fetchData()
      .then((res) => setAllSongs(res.data))
      .catch((error) => console.log(error));
  }, []);

  //experiment with axios.post()
  // useEffect(() => {
  //   // definition of the function
  //   const postData = async () => {
  //     try {
  //       const res = await axios.post("http://localhost:8000/v1/add", {
  //         name: "Alex",
  //         breed: "Poddle"
  //       })
  //       console.log(res.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   // actually calling the function
  //   postData();
  // }, [])

  return (
    // To use React Context, wrap around everything, de chuyen value toi nhung thang do
    // React router implementation
    <CartContext.Provider value={{cart, modifyCart}}>
    <Router>
      <NavBar />
      <div className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/songs" element={<Songs allSongs={allSongs} />} />
          <Route path="/dogs" element={<Dogs allDogs={allDogs} />} />
          <Route path="/checkout" element={<Cart />} />
        </Routes>
      </div>
    </Router>
    </CartContext.Provider>
  );
}

export default App;
