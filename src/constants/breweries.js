import beerStyles from "../dados/beer-styles.js";


const breweries = [
  {
    id: "guinness",
    name: "Guinness Brewery",
    description: "Founded in 1759 in Dublin, it's one of the world's most iconic breweries, known for Guinness Stout.",
    country: "Ireland",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/34/Guinness_Storehouse.jpg",
    link: "https://www.guinness.com/en",
    beers: [
      {
        id: "guinness-draught",
        name: "Guinness Draught",
        style: beerStyles.find((s) => s.id === "stout"),
        abv: "4.2%",
        image: "https://m.media-amazon.com/images/I/61Dk2xGdVPL._SL1500_.jpg",
        link: "https://www.guinness.com/en/beers/guinness-draught",
      },
    ],
  },
  {
    id: "brewdog",
    name: "BrewDog",
    description: "A modern Scottish brewery known for its bold and creative approach to craft beer.",
    country: "Scotland",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/af/BrewDog_Bar.jpg",
    link: "https://brewdog.com/",
    beers: [
      {
        id: "punk-ipa",
        name: "Punk IPA",
        style: beerStyles.find((s) => s.id === "ipa"),
        abv: "5.6%",
        image: "https://brewdog.com/cdn/shop/files/Punk_Falling_-_Landing_Page_Promotion.png?v=1750894122&width=2048",
        link: "https://brewdog.com/products/punk-ipa",
      },
      {
        id: "dead-pony-club",
        name: "Dead Pony Club",
        style: beerStyles.find((s) => s.id === "pilsner"),
        abv: "3.8%",
        image: "https://m.media-amazon.com/images/I/71iY6gI2nYL._SL1500_.jpg",
        link: "https://brewdog.com/products/punk-ipa",
      },
    ],
  },
];

export default breweries;
