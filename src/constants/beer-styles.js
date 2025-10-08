const beerStyles = [
  {
    id: "amber-ale",
    name: "Amber Ale",
    description: `
    **Amber Ale** is a broadly styled ale characterized by **crystal malts**, offering toasty, caramel, and toffee flavors.  
    It's medium-bodied, balanced between malt sweetness and hop bitterness, and often shows notes of caramel, nuts, or light fruit.  
    It's an approachable, flavorful ale that works well with grilled meats, burgers, stews, or aged cheese.
    `,
    origin: "United States / Europe",
    image: "https://www.tasteatlas.com/images/ingredients/718fa83a14814c308fbb2d1cd10d42a4.jpg?mw=1300",
  },
  {
    id: "barley-wine",
    name: "Barley Wine",
    description: `
    **Barley Wine** is an intense, rich ale featuring deep malt complexity: **caramel, dried fruit, toffee, dark sugar**, and warming alcohol.  
    Often aged, it can evolve with layers of dark fruit, oxidation, and subtle hop character.  
    Best enjoyed slowly as a sipping beer, perhaps paired with blue cheese, dessert, or dark chocolate.
    `,
    origin: "England",
    image: "https://www.tasteatlas.com/images/dishes/barley-wine.jpg",  // placeholder/fallback
  },
  {
    id: "bierre-de-garde",
    name: "Bière de Garde",
    description: `
    **Bière de Garde** is a traditional farmhouse ale from Northern France (“beer for keeping”).  
    It offers a malty, smooth profile with notes of **toffee, biscuit, light spice, and earthiness**.  
    Often matured after fermentation, it develops complexity while staying balanced and dry.  
    Great match for charcuterie, roast pork, or rustic country cooking.
    `,
    origin: "France",
    image: "https://www.tasteatlas.com/images/dishes/bierre-de-garde.jpg",  // placeholder/fallback
  },
  {
    id: "bitter",
    name: "Bitter",
    description: `
**Bitter** (British style) is a sessionable ale that emphasizes **soft malt character, light biscuit or caramel notes**, and modest hop bitterness (often floral or earthy).  
Clean, easy to drink, and traditionally served fresh in pubs, it's a staple everyday ale.  
Pairs nicely with fish & chips, lighter pub fare, and sandwiches.
`,
origin: "England",
image: "https://www.tasteatlas.com/images/dishes/bitter.jpg",  // placeholder
},
{
  id: "blonde-ale",
  name: "Blonde Ale",
  description: `
  **Blonde Ale** is a light, friendly ale style — **soft malt body, gentle sweetness, and subtle hop character** (citrus, floral).  
  It's often clear, drinkable, and designed to appeal broadly.  
  A good companion to lighter dishes, chicken, salads, or mild cheese.
  `,
  origin: "Belgium / Europe",
  image: "https://www.tasteatlas.com/images/dishes/blonde-ale.jpg",  // placeholder
},
{
  id: "bock",
  name: "Bock",
  description: `
  **Bock** is a traditional German lager with a strong malt backbone: **caramel, toast, bread crust, and light roast**.  
  Fuller in body but still smooth, it's warming and rich without being overly bitter.  
  Enjoy with sausages, pork, or roasted vegetables.
  `,
  origin: "Germany",
  image: "https://images.pexels.com/photos/31653088/pexels-photo-31653088.jpeg?_gl=1*1uaytxq*_ga*Mzg5OTYyNjg0LjE3NTk5MjY0NDI.*_ga_8JE65Q40S6*czE3NTk5MjY0NDEkbzEkZzEkdDE3NTk5MjY0NDMkajU4JGwwJGgw",
},
{
  id: "dubbel",
  name: "Dubbel",
  description: `
### The Soul of Belgian Dubbel

Born from the monastic tradition of Belgium, the **Dubbel** is more than a beer — it's a revelation in a glass. This Trappist treasure embodies warmth, depth, and harmony, carrying with it nearly a century of brewing devotion. Though inspired by ancient recipes, its modern form emerged in **1926**, when **Henrik Verlinden** crafted the first Dubbel at the **Westmalle Abbey Brewery**. Known as *Dubbel Bruin*, it quickly captured the hearts of brewers across Belgium, sparking a legacy that endures to this day.

---

#### The Heart of Its Flavor

What sets the Dubbel apart from other dark ales is its soul: **Belgian candi sugar**. This rich, caramelized syrup — dark, glossy, and full of character — infuses the beer with notes of **toffee, malt, raisins, and ripe dark fruit**. Its color dances from deep amber to luminous copper, revealing complexity both in sight and flavor.

---

#### A Complex Yet Balanced Experience

The experience is layered and refined: a **dry finish** that balances a whisper of sweetness, a **velvety texture**, and aromas that invite contemplation. Most Dubbels are **bottle-conditioned**, alive with subtle natural carbonation and a gentle haze that hints at their artisanal roots. Despite their strength — often above **6.5% ABV** — the alcohol remains elegantly hidden, letting the malt and yeast harmonize without harshness.

---

#### Perfect Pairings

To truly appreciate a Dubbel, pair it with life's indulgences:

* **Aged Alpine or wash-rind cheeses**  
* **Dark chocolate**  
* **Slow-roasted or barbecued meats**  
* **Hearty stews and sausages**

Its malty richness complements robust flavors, elevating every bite with a touch of Belgian magic.

The Dubbel isn't just a beer style — it's a **testament to craftsmanship, patience, and passion**. Every sip tells a story of monks, malt, and mastery.
  `,
  origin: "Belgium",
  image: "https://www.tasteatlas.com/images/ingredients/cc747e318a4d47f61fc1e77b30df2a22.jpg?mw=1300",
},
{
  id: "dunkel",
  name: "Dunkel",
  description: `
  **Dunkel** (Munich Dark Lager) is medium-bodied and smooth, with **biscuit, caramel, bread crust, and mild roast** notes.  
It's less intense than stout or porter but offers depth and malt richness.  
Pairs well with bratwurst, smoked meats, and hearty roast dishes.
`,
  origin: "Germany",
  image: "https://www.tasteatlas.com/images/dishes/dunkel.jpg",  // placeholder
  },
  {
    id: "helles",
    name: "Helles",
    description: `
    **Helles** (German pale lager) emphasizes **malt — bread, biscuit, light honey** — with a delicate hop balance.  
    It's clean, easy-drinking, and refreshing, designed for everyday enjoyment.  
    Pairs nicely with pretzels, grilled chicken, seafood, or soft cheeses.
    `,
    origin: "Germany",
    image: "https://www.tasteatlas.com/images/dishes/helles.jpg",  // placeholder
  },
  {
    id: "ipa",
    name: "IPA (India Pale Ale)",
    description: `
    **IPA (India Pale Ale)** is a hop-forward ale with expressive aroma and flavor — **citrus, pine, tropical fruit, resin**, balanced on a malt backbone.  
    Born as an export-style beer with extra hopping for preservation, it evolved into many substyles (NEIPA, West Coast, Session).  
    Often paired with spicy food, grilled meats, bold cheeses, or hops-forward cuisine.
    `,
    origin: "England",
    image: "https://cdn.craftbeer.com/wp-content/uploads/IPAs-HopCones_1200pix.jpg",
  },
  {
    id: "italian-grape-ale",
    name: "Italian Grape Ale",
    description: `
    **Italian Grape Ale (IGA)** is an experimental beer-wine hybrid where brewers add **grape must or wine yeast** into beer fermentation.  
    The result: a beer with **wine-like aromas, fruity esters, moderate bitterness**, and interplay between grape and malt.  
    It's uniquely Italian and often regionally expressive.
    `,
    origin: "Italy",
    image: "https://www.tasteatlas.com/images/dishes/italian-grape-ale.jpg",  // placeholder
  },
  {
    id: "lager",
    name: "Lager",
    description: `
    **Lager** is a broad category of bottom-fermented beers, usually clean and crisp, with **subtle malt sweetness and mild hop bitterness**.  
    It covers many substyles (Pilsner, Helles, Märzen, Dunkel) and is prized for drinkability and clarity.  
    Pairs well with nearly anything: pizza, pasta, seafood, or simple snacks.
    `,
    origin: "Germany / Europe",
    image: "https://www.tasteatlas.com/images/dishes/lager.jpg",  // placeholder
  },
  {
    id: "pale-ale",
    name: "Pale Ale",
    description: `
    **Pale Ale** is a balanced ale featuring **biscuit, soft caramel, light fruit esters**, and moderate hop bitterness (often citrus or floral).  
    Less aggressive than IPA but still flavorful, it's versatile and easy to enjoy.  
    Pairs well with burgers, grilled vegetables, and mid-bodied dishes.
    `,
    origin: "England / Europe",
    image: "https://www.tasteatlas.com/images/dishes/pale-ale.jpg",  // placeholder
  },
  {
    id: "pilsner",
    name: "Pilsner",
    description: `
    **Pilsner** is a golden lager style from Pilsen (Czech Republic) celebrated for crispness, bright clarity, **noble hop spiciness**, and a delicate malt balance.  
    Usually pale straw to golden, it's refreshing, clean, and slightly bitter.  
    Great companion to seafood, light meats, or simply for drinking on hot days.
    `,
    origin: "Czech Republic",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Pilsner_urquell_mug.jpg/800px-Pilsner_urquell_mug.jpg?20171210233057",  // placeholder
  },
  {
    id: "porter",
    name: "Porter",
    description: `
    **Porter** is a rich, dark ale showcasing **roasted malt, chocolate, coffee, and caramel** flavors, but generally lighter in roast than stouts.  
    It balances roast and malt complexity, making it good for pairing with smoked meats, stews, or desserts with chocolate.
    `,
    origin: "England",
    image: "https://www.tasteatlas.com/images/dishes/porter.jpg",  // placeholder
  },
  {
    id: "saison",
    name: "Saison",
    description: `
    **Saison**, or farmhouse ale, is lively and dry, with **spice, citrus, pepper, and tropical fruit esters**.  
    Traditionally brewed in Belgian farms, it's refreshing, often bottle-conditioned, and pairs nicely with salads, shellfish, goat cheese, or light fare.
    `,
    origin: "Belgium",
    image: "https://www.tasteatlas.com/images/dishes/saison.jpg",  // placeholder
  },
  {
    id: "stout",
    name: "Stout",
    description: "Stout is a robust dark ale with espresso, dark chocolate, roast malt, coffee, and sometimes sweetness (milk stout, oatmeal stout).Full-bodied, silky or creamy, often with lingering bitterness or roast.  Ideal with desserts, oysters, or strong cheese.",
    origin: "Ireland / UK",
    image: "https://www.tasteatlas.com/images/ingredients/718fa83a14814c308fbb2d1cd10d42a4.jpg",  // placeholder
  },
  {
    id: "tripel",
    name: "Tripel",
    description: `
    **Tripel** is a strong Belgian pale ale presenting **spicy phenols, fruity esters, and a firm malt backbone** — often hiding its high ABV behind elegance.  
    Usually bright gold, with lively carbonation, it pairs with soft cheeses, seafood, or citrus desserts.
    `,
    origin: "Belgium",
    image: "https://www.tasteatlas.com/images/dishes/tripel.jpg",  // placeholder
  },
  {
    id: "weissbier",
    name: "Weissbier (Hefeweizen)",
    description: `
    **Weissbier** or **Hefeweizen** is a German wheat ale with **banana, clove, bubblegum** aromas, smooth wheat malt, and refreshing body.  
    Unfiltered and hazy, it's soft, lively, and great with salads, seafood, or light seasonal foods.
    `,
    origin: "Germany",
    image: "https://c.pxhere.com/photos/f6/82/beer_mountains_dolomites_paulaner-1046812.jpg!d",
  },
  {
    id: "witbier",
    name: "Witbier",
    description: `
  **Witbier** (Belgian white beer) is a pale, cloudy wheat beer brewed with **orange peel, coriander**, and subtle spice.  
  It's refreshing, lightly citrusy, and low in bitterness — a classic style with medieval origins in the Low Countries.  
  Witbiers are often unfiltered, with a soft mouthfeel and delicate complexity.  
  Pair with seafood, salads, light cheeses, or citrus desserts.
    `,
    origin: "Belgium",
    image: "https://www.tasteatlas.com/images/dishes/witbier.jpg",  // fallback/placeholder
    // (Note: TasteAtlas doesn’t always expose dedicated “style” image URLs)
  },
];


export default beerStyles;
