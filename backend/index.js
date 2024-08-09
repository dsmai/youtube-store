const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

// Serve static files directly from the ./assets/images directory
// Using static middleware
app.use('/assets/images', express.static(path.join(__dirname, '/assets/images')));

const songs = [
  {
    name: "Call me by fire",
    artist: "Anh trai vuot ngan chong gai",
    videoId: "v9XkENdZi1o",
  },
  {
    name: "Call me maybe",
    artist: "Carly Rae Jepsen",
    videoId: "fWNaR-rxAic",
  },
  {
    name: "Payphone",
    artist: "Maroon 5",
    videoId: "KRaWnd3LJfs",
  },
  {
    name: "Dam ruc ro",
    artist: "HIEUTHUHAI",
    videoId: "cFfuy_2wsz4",
  },
];

const dogs = [
  {
    id: 1,
    name: "Miu",
    breed: "Pug",
    description: "mac ao duoi tom",
    imageName: "miu1.JPG"
  },
  {
    id: 2,
    name: "Miu",
    breed: "Pug",
    description: "mac suon xam",
    imageName: "miu2.JPG"
  },
  {
    id: 3,
    name: "Miu",
    breed: "Pug",
    description: "tim do choi duoi ghe",
    imageName: "miu3.JPG"
  },
  {
    id: 4,
    name: "Miu",
    breed: "Pug",
    description: "nam ngu tren office chair",
    imageName: "miu4.JPG"
  },
  {
    id: 5,
    name: "Miu",
    breed: "Pug",
    description: "moi bi thien",
    imageName: "miu5.JPG"
  },
  {
    id: 6,
    name: "Miu",
    breed: "Pug",
    description: "sinh nhat 5 tuoi",
    imageName: "miu6.JPG"
  },
  {
    id: 7,
    name: "Miu",
    breed: "Pug",
    description: "ngam treat",
    imageName: "miu7.JPG"
  },
  {
    id: 8,
    name: "Miu",
    breed: "Pug",
    description: "ngoi choi tren ban an",
    imageName: "miu8.JPG"
  },
];

// tao GET routes cho http GET
app.get("/", (req, res) => {
  res.send("Hello Miu");
});

// tao route cho /v1/songs
app.get("/v1/songs", (req, res) => {
  res.status(200).json(songs);
});

app.get("/v1/dogs", (req, res) => {
  res.status(200).json(dogs);
});

app.get("/v1/latestDog", (req, res) => {
  res.status(200).json(dogs.pop());
});

// tao POST route cho http POST
app.post("/v1/add", (req, res) => {
  // destructure the incoming payload from POST request
  const { name, breed } = req.body;
  // save {name} and {breed} to a newDog object
  const newDog = {
    name,
    breed,
  };
  // push to dogs array
  dogs.push(newDog);
  // prepare the respond
  res.status(201).json({ message: `Data saved successfully: ${name}, ${breed}` });
});

// setting server to local port 8000
app.listen("8000", () => {
  console.log("Server is running....");
});
