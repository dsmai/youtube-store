import { useContext, useEffect, useState } from "react";
import "../Dogs/dogs.css";
import { CartContext } from "../../Contexts/CartContext";

const DogCard = (props) => {
  // destructure props
  const { id, name, breed, des, imageUrl } = props;

  // phai xai 1 cai React Hook ten la useContext de access cai CartContext
  // Trong cai const {}, lay nhung gia tri muon chuyen vao tu CartContext
  // We are consuming this context...
  const { cart, modifyCart } = useContext(CartContext);

  //useState to manage button "ADDED"
  const [isAdded, setAdded] = useState(false);
  const handleDogCartChange = () => {
    setAdded((prevState) => !prevState);
    if (!isAdded) {
      const newDog = {
        id: id,
        name: name,
        breed: breed,
        des: des,
        imageUrl: imageUrl,
      };
      modifyCart((prevItems) => [...prevItems, newDog]);
    }
  };
  //useState
  //   const [dogCart, setDogCart] = useState([]);

  //   const handleDogCartChange = () => {
  //     const newDog = { id, name, breed, des, imageUrl };
  //     setDogCart((prevDogCart) =>
  //       [...prevDogCart, newDog];
  //     );
  //   };

  // useEffect(() => {
  //   console.log(cart);
  // }, [cart]);

  return (
    <>
      <section className="dogs">
        <div className="dogs-info">
          <p>{breed}</p>
          <p> {name} </p>
          <p> {des} </p>
        </div>
        <div className="dogs-img-container">
          <img className="dog-img" src={imageUrl} alt="pic of: {name}" />
        </div>
        {isAdded ? (
          <button disabled className="dogs-btn-disabled" onClick={handleDogCartChange}>
            ADDED
          </button>
        ) : (
          <button className="dogs-btn" onClick={handleDogCartChange}>
            ADD TO CART
          </button>
        )}
      </section>
    </>
  );
};

export default DogCard;
