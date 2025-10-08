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
    image: "https://images.unsplash.com/photo-1504502350688-00f5d59bbdeb",
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
    image: "https://images.unsplash.com/photo-1505075106905-fb052892c116?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  // placeholder/fallback
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
    image: "https://images.unsplash.com/photo-1505075106905-fb052892c116?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  // placeholder/fallback
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
image: "https://images.unsplash.com/photo-1505075106905-fb052892c116?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  // placeholder
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
  image: "https://images.unsplash.com/photo-1522057306606-8d84daa75e87",  // placeholder
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
  image: "https://images.unsplash.com/photo-1505075106905-fb052892c116?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
  image: "https://images.unsplash.com/photo-1505075106905-fb052892c116?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
  image: "https://www.tasteatlas.com/images/ingredients/718fa83a14814c308fbb2d1cd10d42a4.jpg",  // placeholder
  },
  {
    id: "helles",
    name: "Helles",
    description: `
**Helles** (German pale lager) emphasizes **malt — bread, biscuit, light honey** — with a delicate hop balance.  It's clean, easy-drinking, and refreshing, designed for everyday enjoyment.  
Pairs nicely with pretzels, grilled chicken, seafood, or soft cheeses.
    `,
    origin: "Germany",
    image: "https://images.unsplash.com/photo-1505075106905-fb052892c116?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  // placeholder
  },
  {
    id: "ipa",
    name: "IPA",
    description: `  
## The Journey of IPA

**India Pale Ale (IPA)** has a story as bold and adventurous as its flavor. Born from the needs of British brewers, IPA was designed to endure **long voyages to the colonies**, where the tropical climate made beer preservation a challenge. By **boosting alcohol content and adding extra hops**, the beer not only survived the journey but **developed a refreshing character** that improved with age.

---

#### Origins and Early Development

The first references to **India Pale Ale** date back to the **1830s**, though the style likely existed decades earlier. Its prototype is attributed to **Hodgson in the 1780s**, whose clever use of hops allowed the beer to remain crisp and lively even after months at sea. Light, effervescent, and robust, IPA quickly became a favorite in hot and humid climates.

---

#### Revival and Modern Styles

By the **end of the 19th century**, lagers began to dominate, and IPA faded from prominence. It was **reborn in the 1980s** thanks to American microbreweries, achieving spectacular results and solidifying its status as one of the world's most popular beer styles. Today, IPA thrives both in **England**, its birthplace, and the **United States**, where craft brewers have added new dimensions to the style.

* **English IPAs**: flowery, spicy, and traditional.
* **American IPAs**: bold, aromatic, often with **tropical fruit and pine notes**.

---

#### Food Pairings

IPA's **dominant hop character** makes it a natural partner for **spicy and hearty dishes**, **Asian cuisine**, **grilled and fried meats**, and a variety of **cheeses**, enhancing every bite with its lively bitterness and aromatic complexity.

IPA is not just a beer; it is **a journey of flavor, innovation, and resilience**, celebrated wherever craft beer is cherished.
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
    image: "https://images.unsplash.com/photo-1505075106905-fb052892c116?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  // placeholder
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
    image: "https://images.unsplash.com/photo-1522057306606-8d84daa75e87",  // placeholder
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
    image: "https://images.unsplash.com/photo-1505075106905-fb052892c116?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  // placeholder
  },
  {
    id: "pilsner",
    name: "Pilsner",
    description: `
### The Golden lager style from Pilsen

Emerging from the historic city of **Pilsen (Plzeň)** in western Bohemia, the **Pilsner** is a relatively young beer style, first brewed in **1842**. Its creation was driven by the local citizens' dissatisfaction with the beer of their time, prompting the founding of **Bürger Brauerei** (later known as Pilsner Urquell). To achieve their vision, they enlisted **Josef Groll**, a Bavarian brewmaster, who crafted a beer that would forever change brewing history.

---

#### Crafting a New Style

Though inspired by Bavarian lagers, the **Czech ingredients**—including **light malted barley from Moravia** and the iconic **Saaz hops**—gave birth to a distinct, clear, golden beer with a refreshing character. The result was a revolutionary **pale, crisp, and elegantly hoppy** beer that set the standard for modern lagers.

---

#### Global Influence and Variations

The success of Pilsner quickly spread, inspiring brewers worldwide. Today, it is officially classified into two main regional styles: **Bohemian** and **German Pilsner**. While subtle differences exist between them, the hallmark of a great Pilsner remains **crispness**, **refreshing drinkability**, and a **prominent hop presence** that delights the palate.

---

#### Names and Traditions

In the **Czech Republic**, only beer brewed in Pilsen can be called **Pilsner**, a mark of authenticity. In **Germany** and beyond, the same style is more commonly known simply as **Pils**, continuing its global legacy as one of the most influential beers in history.

Pilsner isn't just a beer; it is **a celebration of clarity, precision, and timeless flavor**.

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
    image: "https://images.unsplash.com/photo-1505075106905-fb052892c116?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  // placeholder
  },
  {
    id: "saison",
    name: "Saison",
    description: `
**Saison**, or farmhouse ale, is lively and dry, with **spice, citrus, pepper, and tropical fruit esters**.  
Traditionally brewed in Belgian farms, it's refreshing, often bottle-conditioned, and pairs nicely with salads, shellfish, goat cheese, or light fare.
    `,
    origin: "Belgium",
    image: "https://images.unsplash.com/photo-1505075106905-fb052892c116?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  // placeholder
  },
  {
    id: "stout",
    name: "Stout",
    description: `
### The Depth of Stout

**Stouts** are dark, top-fermented beers renowned for their **roasted richness** and bold character. Their history is intertwined with the **British porter**, a London-born style from the 18th century. Originally, stouts were simply stronger, fuller versions of porter, though today the line between the two has largely blurred.

---

#### Aromas and Flavor Profile

A classic stout enchants the senses with **aromas of roasted barley and malt**, evoking **coffee, chocolate, and cocoa**. Traditional dry stouts range from **deep brown to jet black**, offering a **medium-light to medium-full body** that is **smooth, creamy, and silky**. Hops are subtle, allowing the roasted flavors to shine, and the finish is typically **long and dry**, leaving a satisfying lingering taste.

---

#### Versatility and Modern Styles

While **Guinness Stout** remains the iconic prototype, the stout category has expanded dramatically. Today, it encompasses **sweet, oatmeal, English, Imperial, Foreign Extra, and American stouts**, some of which bring a **bolder hop presence** and inventive flavor additions. Distinctions are also made between **draught and bottled stouts**, with draught versions offering a **creamier texture** and a **more persistent head**.

---

#### Food Pairings

Stouts are remarkable companions to **fried, salty, and spicy foods**, as well as **rich desserts**. They also pair beautifully with **blue-veined and aged alpine cheeses**, where their roasted depth complements and enhances the flavors on the plate.

Stout is more than a beer—it is a **celebration of darkness, creaminess, and mastery of malt**, offering a sip that is both comforting and intensely satisfying.
    `,
    origin: "Ireland / UK",
    image: "https://images.ctfassets.net/8nq3bs98o7cv/jb4Bun8BuXIpBx66l8OAq/b41bbe3af43b7a39da1fbc0ec9e05a6a/eyJidWNrZXQiOiJzZXJ2ZXJsZXNzaW1naG5kbHItcHJkIiwia2V5IjoiRENIL2ltYWdlL2pwZWcvMTA4MDE1NjgvTElHSFQgQlVaWl9zbWFsbC5qcGciLCJlZGl0cyI6?fm=avif&w=1080&q=60",  // placeholder
  },
  {
    id: "tripel",
    name: "Tripel",
    description: `
**Tripel** is a strong Belgian pale ale presenting **spicy phenols, fruity esters, and a firm malt backbone** — often hiding its high ABV behind elegance.  
Usually bright gold, with lively carbonation, it pairs with soft cheeses, seafood, or citrus desserts.
    `,
    origin: "Belgium",
    image: "https://images.unsplash.com/photo-1505075106905-fb052892c116?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  // placeholder
  },
  {
    id: "weissbier",
    name: "Weissbier (Hefeweizen)",
    description: `
### The Spirit of Weissbier

The **Weissbier**, a timeless symbol of Bavarian brewing artistry, is a **top-fermented wheat ale** that delights the senses with its **creamy, mousse-like foam** and **naturally cloudy appearance**. This gentle haze comes from its high proportion of wheat—at least **50% malted wheat**, though many brewers use more—balanced by a touch of barley malt to create perfect harmony in the glass.

---

#### A Symphony of Aromas and Flavors

Fermented with distinctive German yeast strains, Weissbier unfolds in layers of aroma and flavor that are unmistakable: **clove**, **banana**, a hint of **smoke**, and sometimes even a playful touch of **bubble gum**. The taste is **mildly malty**, **softly bitter**, and deeply satisfying. Though traditional bottle fermentation is now rare, Weissbier has preserved its **light body**, **silky texture**, and **lively effervescence**—traits that make it instantly recognizable.

---

#### From Ancient Roots to Modern Renaissance

While today it is inseparable from **Bavaria**, the story of wheat beer began long before. Its European roots trace back to **Bohemia**, in what is now the Czech Republic, from where it made its way into German brewing tradition. Over the centuries, Weissbier saw its share of decline, nearly disappearing at one point. Yet, in the **1960s**, it rose once again—reclaiming its place among the world’s most cherished beer styles.

---

#### Perfect Pairings

Unfiltered and hazy, it's soft, lively, and great with salads, seafood, or light seasonal foods.

With every sip, Weissbier celebrates centuries of craft and culture—a living expression of German brewing heritage that continues to inspire beer lovers around the world.
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
    image: "https://images.unsplash.com/photo-1505075106905-fb052892c116?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  // fallback/placeholder
    // (Note: TasteAtlas doesn’t always expose dedicated “style” image URLs)
  },
];


export default beerStyles;
