import { sitePath } from '@/lib/site-path';
export const metadata = {title:"Our Story | Johnny's Donuts"};
export default function Story(){return <main className="story"><div className="story-copy"><h1>Our Story</h1><p>Established in 1969, Johnny’s Donuts is the oldest family-run eatery in Dublin. We make our donuts fresh daily and are proud to serve the tri-valley for so many years!</p></div><img src={sitePath("/assets/bec1dd_6c7cd191422445fb98ddbe792e6476e5~mv2.png")} alt="Johnny at the donut shop"/></main>}
