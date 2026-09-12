import { sitePath } from '@/lib/site-path';
export const metadata = {title:"Menu | Johnny's Donuts"};
const items=[
['Raised Donuts','Soft and fluffy yeast dough with a variety of flavors. Choose from glazed, chocolate, maple or sugar coated!','bec1dd_ca1105cef1a54395a1967df52f41b803~mv2.jpg'],
['Cake Donuts','Made from our delicious cake batter, a traditional taste with a little density perfect to dunk in coffee or milk. We offer different icings from chocolate, vanilla, or maple and with sprinkles. Also a variety of flavors such as cinnamon crumb, blueberry and chocolate devilsfood!','bec1dd_fb3d2579d9344b319c882ebf804a0c94~mv2.jpg'],
['Old Fashioned Donuts','Closely related to the cake donut but has its own unique taste and texture with crispy edges and flavorful dough. Great just plain or with icing for a little extra sweetness.','bec1dd_d567ac78ce2342d48800d768461371bf~mv2.jpg'],
['Jelly Filled Donuts','Glazed raspberry, blueberry or lemon jelly.','bec1dd_f8858a7d26b449beba01446544e24fec~mv2.jpg'],
['Chocolate/Maple Bars','A yeast donut shaped in a long bar. Good alone or filled with our delicious vanilla custard.','bec1dd_18d27cedee0f449a9cd104507245f3fb~mv2.jpg'],
['Buttermilk Bars','Soft and cakey inside, golden brown on the outside with a buttermilk taste. Perfect for dunking.','bec1dd_687bade4945a45a48295e25d89efab0a~mv2.jpg'],
['French Crullers','A light fluffy donut different from a yeast dough. Soft and airy texture on the inside with a little crisp outside.','bec1dd_dcd4de86fd524f7695dae981f845de5f~mv2.jpg'],
['Twists','Similar to a raised donut but twisted giving it a little more fluff.','bec1dd_13834f56b8414e33b731a3547d4d3781~mv2.jpg'],
['Cinnamon Rolls','Rolled to perfection with just the right amount of cinnamon then covered in glaze.','bec1dd_58425be9de8a43969a5fc7d63f8470f5~mv2.jpg'],
['Apple Fritters','Bits of apples and cinnamon mixed in the dough then cooked to a perfect crisp.','bec1dd_9928c9795b364228a7dcac3e110d885b~mv2.jpg'],
['Killer Donut','Jumbo sized yeast donut. Fun for birthdays or as a special treat!','bec1dd_54130cfb8279470aa76bb2a2b4c08d38~mv2.jpg']];
function Cards({data}:{data:string[][]}){return <div className="menu-grid">{data.map(([name,desc,img])=><article key={name} id={name.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-")}><img src={sitePath('/assets/'+img)} alt={name}/><h3>{name}</h3><p>{desc}</p></article>)}</div>}
export default function Menu(){return <main className="menu-page"><h1 id="anchor1">The Classics</h1><Cards data={items.slice(0,3)}/><h2 id="premium">Premium and Specialties</h2><Cards data={items.slice(3)}/></main>}
