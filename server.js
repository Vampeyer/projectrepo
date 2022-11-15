const express = require("express");
const app = express();

app.use(express.static(`public`));

PORT = 3000;

app.listen(PORT, () => console.log(` listening at http://localhost:${PORT}`));

const dog = {
  sound: "woof",
  feet: 4,
};

const cat = {
  sound: "scriptKittySaysMeow",
  feet: "four as well",
  toes: 20,
};





const fs = require(`fs`);
const finished = require("stream/promises");
//const { finished } = require('stream')

const saveData = (dog) => {
  const jsonData = JSON.stringify(dog);

  console.log(dog);
  console.log(jsonData);


  
};

saveData(dog);

////////
const saveData2 = (cat) => {
  const jsonCat = JSON.stringify(cat);

  console.log(dog);
  console.log(jsonCat);

  const finished = (error) => {
    if (error) {
      console.error(error);
      return;
    }
  };
  /*  */

  fs.writeFile("cat-json", jsonCat, finished);
};

saveData2(cat);
