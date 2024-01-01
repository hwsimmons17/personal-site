import Link from "next/link";
import { MdArrowBackIos } from "react-icons/md";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Link href={"/"}>
        <MdArrowBackIos size={24} className="absolute top-10 left-10 m-4" />
      </Link>
      <h1>Books</h1>
      <p>A list of books I&apos;ve read and what I thought about them</p>

      <h2 className="mt-4">2023</h2>

      <div className="mt-8 w-96">
        <a href="https://www.amazon.com/Grand-Strategy-John-Lewis-Gaddis/dp/1594203512/ref=sr_1_1?crid=3G4V9PGBZZH35&keywords=on+grand+strategy&qid=1704085610&sprefix=on+grand+strategy%2Caps%2C140&sr=8-1">
          <b>On Grand Strategy</b>
        </a>
        <p>John Lewis Gaddis</p>
        <p>Rating: 3/5</p>
        <p>Interesting high level summary of war</p>
        <p>
          It&apos;s easy to lose one&apos;s bearings when one becomes successful
        </p>
      </div>
      <div className="mt-8 w-96">
        <a href="https://www.amazon.com/Creativity-Inc-Expanded-Overcoming-Inspiration/dp/0593594649/ref=sr_1_1?crid=JQ675226KDDL&keywords=creativity+inc&qid=1704085931&sprefix=creativity+inc%2Caps%2C156&sr=8-1">
          <b>Creativity Inc</b>
        </a>
        <p>Ed Catmull</p>
        <p>Rating: 4/5</p>
        <p>Great book on Ed Catmull&apos;s life and how he built Pixar</p>
        <p>
          Being candid and open is hard, but is the only way to create a
          sustainable culture
        </p>
      </div>
      <div className="mt-8 w-96">
        <a href="https://www.amazon.com/Square-Tower-Networks-Freemasons-Facebook/dp/0735222932/ref=sr_1_1?crid=U1045VWE346P&keywords=the+square+and+the+tower&qid=1704133850&sprefix=the+square+and+the+tower%2Caps%2C146&sr=8-1">
          <b>The Square and the Tower</b>
        </a>
        <p>Niall Ferguson</p>
        <p>Rating: 4/5</p>
        <p>Great history book about networks</p>
        <p>
          People that achieve greatness go through a period of great humility in
          their life
        </p>
      </div>
      <div className="mt-8 w-96">
        <a href="https://www.amazon.com/One-Device-Secret-History-iPhone/dp/0316555983/ref=sr_1_2?crid=2ZQ30UIY2SBSL&keywords=the+one+device&qid=1704133951&sprefix=the+one+devic%2Caps%2C139&sr=8-2">
          <b>The One Device</b>
        </a>
        <p>Brian Merchant</p>
        <p>Rating: 2/5</p>
        <p>
          The parts about Apple creating the iPhone are fascinating, but the
          book suffers from scope creep
        </p>
        <p>
          Steve Jobs created greatness, but his top-down management style forced
          him to wander through a desert of his own making
        </p>
      </div>
      <div className="mt-8 w-96">
        <a href="https://www.amazon.com/Joseph-Smith-Rough-Stone-Rolling/dp/1400077532/ref=sr_1_1?crid=2EINWLFEHES8X&keywords=rough+stone+rolling&qid=1704135712&sprefix=rough+stone+rolling%2Caps%2C140&sr=8-1">
          <b>Joseph Smith: Rough Stone Rolling</b>
        </a>
        <p>Richard Lyman Bushman</p>
        <p>Rating: 4/5</p>
        <p>Great biography of Joseph Smith. Humanized a figure I look up to</p>
        <p>Achievement only comes in the crucible of adversity</p>
      </div>
      <div className="mt-8 w-96">
        <a href="https://www.amazon.com/Joseph-Smith-Rough-Stone-Rolling/dp/1400077532/ref=sr_1_1?crid=2EINWLFEHES8X&keywords=rough+stone+rolling&qid=1704135712&sprefix=rough+stone+rolling%2Caps%2C140&sr=8-1">
          <b>Joseph Smith: Rough Stone Rolling</b>
        </a>
        <p>Richard Lyman Bushman</p>
        <p>Rating: 4/5</p>
        <p>Great biography of Joseph Smith. Humanized a figure I look up to</p>
        <p>Achievement only comes in the crucible of adversity</p>
      </div>
      <div className="mt-8 w-96">
        <a href="https://www.amazon.com/Fooled-Randomness-Hidden-Markets-Incerto/dp/0812975219/ref=sr_1_1?crid=1NHBAY4QB3L49&keywords=fooled+by+randomness&qid=1704136035&sprefix=fooled+by+randomnes%2Caps%2C142&sr=8-1">
          <b>Fooled by Randomness</b>
        </a>
        <p>Nassim Taleb</p>
        <p>Rating: 4/5</p>
        <p>Great book about how our brains fail to comprehend randomness</p>
        <p>
          The truth of things usually lies beneath what is obvious. In the words
          of Jesus: &quot;Ye hypocrites, ye can discern the face of the sky and
          of the earth; but how is it that ye do not discern this time?&quot;
        </p>
      </div>
      <div className="mt-8 w-96">
        <a href="https://www.amazon.com/Map-That-Changed-World-William/dp/0061767905/ref=sr_1_1?crid=27FWOSN4ZAQGT&keywords=the+map+that+changed+the+world+by+simon+winchester&qid=1704136599&sprefix=the+map+that+chn%2Caps%2C156&sr=8-1">
          <b>The Map That Changed the World</b>
        </a>
        <p>Simon Winchester</p>
        <p>Rating: 3/5</p>
        <p>Decent book on the origins of geology</p>
        <p>Times change quickly with new technology</p>
      </div>
      <div className="mt-8 w-96">
        <a href="https://www.amazon.com/Talent-Code-Greatness-Born-Grown/dp/055380684X/ref=sr_1_1?crid=3QWXA6TZ4AXVW&keywords=the+talent+code&qid=1704136719&sprefix=the+talent+cod%2Caps%2C137&sr=8-1">
          <b>The Talent Code</b>
        </a>
        <p>Daniel Coyle</p>
        <p>Rating: 3/5</p>
        <p>Interesting book on how talent develops</p>
        <p>
          We develop myolin when we are in a zone where things are just outside
          our grasp
        </p>
      </div>
      <div className="mt-8 w-96">
        <a href="https://www.amazon.com/Quantum-Marketing-Mastering-Tomorrows-Consumers/dp/1400223954/ref=sr_1_1?crid=1O6G4XRKW3M40&keywords=quantum+marketing&qid=1704136816&sprefix=quantum+marketing%2Caps%2C141&sr=8-1">
          <b>Quantum Marketing</b>
        </a>
        <p>Raja Rajamannar</p>
        <p>Rating: 1/5</p>
        <p>Boring book on marketing from the CMO of Mastercard</p>
        <p>Legacy industries are boring and should be disrupted</p>
      </div>
      <div className="mt-8 w-96">
        <a href="https://www.amazon.com/Scarcity-Science-Having-Defines-Lives/dp/125005611X/ref=sr_1_1?crid=1UVUQFLFBENHB&keywords=scarcity&qid=1704136904&sprefix=scarcity%2Caps%2C139&sr=8-1">
          <b>Scarcity</b>
        </a>
        <p>Sendhil Mullainathan</p>
        <p>Rating: 2/5</p>
        <p>A study on how scarcity affects the brain</p>
        <p>Scarcity can be a powerful source of good or bad</p>
      </div>
      <div className="mt-8 w-96">
        <a href="https://www.amazon.com/Key-Person-Influence-Five-Step-Industry/dp/1781331162/ref=sr_1_1?crid=2UJX7CDE5KE7K&keywords=key+person+of+influence&qid=1704137042&sprefix=key+person+of+influenc%2Caps%2C136&sr=8-1">
          <b>Key Person of Influence</b>
        </a>
        <p>Daniel Priestley</p>
        <p>Rating: 3/5</p>
        <p>
          Teaches you how to market yourself. Would be a 4/5 if not so salesy
        </p>
        <p>I can be an important person in my industry if I work at it</p>
      </div>
      <div className="mt-8 w-96">
        <a href="https://www.amazon.com/Success-Equation-Untangling-Business-Investing/dp/1422184234/ref=sr_1_1?crid=O7DCF631M7IO&keywords=success+equation&qid=1704137186&sprefix=success+equation%2Caps%2C130&sr=8-1">
          <b>The Success Equation</b>
        </a>
        <p>Michael Mauboussin</p>
        <p>Rating: 3/5</p>
        <p>A study into how much of success is luck vs skill</p>
        <p>I can create my own luck through hard work</p>
      </div>
      <div className="mt-8 w-96">
        <a href="https://www.amazon.com/Secrets-Sand-Hill-Road-Venture/dp/059308358X/ref=sr_1_1?crid=3QD4QL0R6XN2U&keywords=secrets+of+sandhill+road&qid=1704137321&sprefix=secrets+of+sandhill%2Caps%2C140&sr=8-1">
          <b>Secrets of Sand Hill Road</b>
        </a>
        <p>Scott Kupor</p>
        <p>Rating: 4/5</p>
        <p>Fascinating look into the incentives of venture capital</p>
        <p>
          Venture capitalists expect to be with a company for ~10 years, so pick
          your partners well
        </p>
      </div>
      <div className="mt-8 w-96">
        <a href="https://www.amazon.com/Power-Law-Venture-Capital-Making/dp/052555999X/ref=sr_1_1?crid=3IYNCGCBU8GGB&keywords=the+power+law&qid=1704137475&sprefix=the+power+law%2Caps%2C144&sr=8-1">
          <b>The Power Law</b>
        </a>
        <p>Sebastian Mallaby</p>
        <p>Rating: 5/5</p>
        <p>
          One of the best books on the history of venture capital I&apos;v ever
          read
        </p>
        <p>
          There are 1,000 ways to succeed in venture capital and equally as many
          business models for venture capital firms
        </p>
      </div>
      <div className="mt-8 w-96">
        <a href="https://www.amazon.com/Republic-Penguin-Classics-Plato/dp/0140455116/ref=sr_1_1?crid=2PXBXKTUA6NHQ&keywords=republic&qid=1704137646&sprefix=republic%2Caps%2C149&sr=8-1">
          <b>The Republic</b>
        </a>
        <p>Plato</p>
        <p>Rating: 2/5</p>
        <p>Study on class interactions</p>
        <p>Acting justly is the best way to act in the end</p>
      </div>
      <div className="mt-8 w-96">
        <a href="https://www.amazon.com/Four-Agreements-Practical-Personal-Freedom/dp/1878424319/ref=sr_1_1?crid=1DBXN0JNA5UTX&keywords=the+four+agreements&qid=1704137787&sprefix=the+four+agreement%2Caps%2C143&sr=8-1">
          <b>The Four Agreements</b>
        </a>
        <p>Don Miguel Ruiz</p>
        <p>Rating: 1/5</p>
        <p>
          Toltec wisdom on being free. I did&apos;t like it at all (read it out
          of obligation)
        </p>
        <p>I am free when I work on controlling the things I can control</p>
      </div>
      <div className="mt-8 w-96">
        <a href="https://www.amazon.com/Washington-Life-Ron-Chernow/dp/0143119966/ref=sr_1_1?crid=2AOEF37RZGE9Q&keywords=washington+a+life&qid=1704137913&sprefix=washington+a+lif%2Caps%2C147&sr=8-1">
          <b>Washington: A Life</b>
        </a>
        <p>Ron Chernow</p>
        <p>Rating: 5/5</p>
        <p>
          One of the best biographies I&apos;ve ever read. Washington is a
          fascinating person who endured great adversity for a greater cause
        </p>
        <p>Great people suffer greatly in their life</p>
      </div>
      <div className="mt-8 w-96">
        <a href="https://www.amazon.com/Odyssey-Homer/dp/0393356256/ref=sr_1_1?crid=2SQWKLHZANU9M&keywords=the+odyssey+homer&qid=1704138025&sprefix=The+oddys%2Caps%2C143&sr=8-1">
          <b>The Odyssey</b>
        </a>
        <p>Homer</p>
        <p>Rating: 4/5</p>
        <p>
          Greek epic poem about Odysseus&apos;s journey home after the Trojan
          War
        </p>
        <p>Adjectives make stories much more interesting</p>
      </div>
      <div className="mt-8 w-96">
        <a href="https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299/ref=sr_1_1?crid=2VR6IR6TJAH8S&keywords=atomic+habits&qid=1704138170&sprefix=atomic+habit%2Caps%2C144&sr=8-1">
          <b>Atomic Habits</b>
        </a>
        <p>James Clear</p>
        <p>Rating: 3/5</p>
        <p>Good book on how to build habits</p>
        <p>By small habits, great things can be achieved</p>
      </div>
      <div className="mt-8 w-96">
        <a href="https://www.amazon.com/House-Rothschild-Niall-Ferguson/dp/0140240845/ref=sr_1_4?crid=FBM0YJ3J9VUN&keywords=the+house+of+rothschild&qid=1704138245&sprefix=the+house+of+rothschild%2Caps%2C135&sr=8-4">
          <b>The House of Rothschild Vol 1</b>
        </a>
        <p>Niall Ferguson</p>
        <p>Rating: 4/5</p>
        <p>Fasinating book on 19th century Jewish banking</p>
        <p>
          Greatness can be achieved over time through focused, persistent hard
          work and being in the right place at the right time
        </p>
      </div>
      <div className="mt-8 w-96">
        <a href="https://www.amazon.com/Men-Who-United-States-Indivisible/dp/0062079603/ref=sr_1_1?crid=8O8CVC95FTKD&keywords=the+men+who+united+the+states&qid=1704138502&sprefix=the+men+who+united+the+states%2Caps%2C139&sr=8-1">
          <b>The Men Who United the States</b>
        </a>
        <p>Simon Winchester</p>
        <p>Rating: 3/5</p>
        <p>Interesting book on the discovery of the West</p>
        <p>People in the 1800s had the same incentives we have today</p>
      </div>

      <h2 className="mt-4">2022</h2>
    </main>
  );
}
