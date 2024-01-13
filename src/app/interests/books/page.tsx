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

      <h2 className="mt-4">2024</h2>

      <div className="mt-8 w-96">
        <a href="https://www.amazon.com/Napoleon-Life-Andrew-Roberts/dp/0143127853/ref=asc_df_0143127853/?tag=hyprod-20&linkCode=df0&hvadid=312021252609&hvpos=&hvnetw=g&hvrand=9416865979249217082&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9029471&hvtargid=pla-435230722737&psc=1&mcid=cc5ea21cd03a3a94974cbb2d6753f6bc">
          <b>Napoleon: A Life</b>
        </a>
        <p>Andrew Roberts</p>
        <p>Rating: 4/5</p>
        <p>Fascinating book on Napoleon&apos;s life</p>
        <p>
          It is important to understand catastrophic weaknesses and hedge
          against those
        </p>
      </div>

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

      <div className="mt-8 w-96">
        <a href="https://www.amazon.com/Never-Split-Difference-Negotiating-Depended/dp/0062407805/ref=sr_1_1?crid=1FZEG6FPHL9Z&keywords=never+split+the+difference+chris+voss&qid=1704160250&sprefix=never+spli%2Caps%2C156&sr=8-1">
          <b>Never Split the Difference</b>
        </a>
        <p>Chris Voss</p>
        <p>Rating: 4/5</p>
        <p>Great book on negtiation and communication</p>
        <p>
          Negotiating is just communicating and it is in the other party&apos;s
          best interested to be well negotiated with
        </p>
      </div>
      <div className="mt-8 w-96">
        <a href="https://www.amazon.com/Carthage-Must-Be-Destroyed-Civilization/dp/0143121294/ref=sr_1_1?crid=17UJLKN8WLE71&keywords=carthage+must+be+destroyed&qid=1704160360&sprefix=carthage+must+be+destroye%2Caps%2C158&sr=8-1">
          <b>Carthage Must Be Destroyed</b>
        </a>
        <p>Richard Miles</p>
        <p>Rating: 3/5</p>
        <p>Interesting book on the rise and fall of Carthage</p>
        <p>The same forces that affected the ancient world affect us today</p>
      </div>
      <div className="mt-8 w-96">
        <a href="https://www.amazon.com/Culture-Code-Secrets-Highly-Successful/dp/0804176981/ref=sr_1_1?crid=3CBBANM55N3TR&keywords=the+culture+code&qid=1704160454&sprefix=the+culture+cod%2Caps%2C174&sr=8-1">
          <b>The Culture Code</b>
        </a>
        <p>Daniel Coyle</p>
        <p>Rating: 4/5</p>
        <p>A guide to building a strong culture</p>
        <p>Cultures work best when people feel comftorable to be themselves</p>
      </div>
      <div className="mt-8 w-96">
        <a href="https://www.amazon.com/Emotional-Intelligence-Matter-More-Than/dp/055338371X/ref=sr_1_1?crid=PYABT9CAI745&keywords=emotional+intelligence+daniel+goleman+book&qid=1704160618&sprefix=emotional+inteligence%2Caps%2C177&sr=8-1">
          <b>Emotional Inteligence</b>
        </a>
        <p>Daniel Goleman</p>
        <p>Rating: 2/5</p>
        <p>Scientific book on the science of emotional inteligence</p>
        <p>
          Understanding social situations can be more valuable than being smart
          in a traditional sense
        </p>
      </div>
      <div className="mt-8 w-96">
        <a href="https://www.amazon.com/Start-Why-Leaders-Inspire-Everyone/dp/1591846447/ref=sr_1_1?crid=1LI1MCJIE8D5F&keywords=start+with+why&qid=1704160744&sprefix=start+with+why%2Caps%2C196&sr=8-1">
          <b>Start with Why</b>
        </a>
        <p>Simon Sinek</p>
        <p>Rating: 4/5</p>
        <p>A study into successful people/organizations</p>
        <p>Understanding my personal why will help me be more successful</p>
      </div>
      <div className="mt-8 w-96">
        <a href="https://www.amazon.com/Crux-How-Leaders-Become-Strategists/dp/1541701240/ref=sr_1_1?crid=MZDBNJ36WC98&keywords=the+crux&qid=1704160893&sprefix=the+crux%2Caps%2C198&sr=8-1">
          <b>The Crux</b>
        </a>
        <p>Richard Rumelt</p>
        <p>Rating: 3/5</p>
        <p>A book on corporate strategy</p>
        <p>Focus on the challenges ahead</p>
      </div>
      <div className="mt-8 w-96">
        <a href="https://www.amazon.com/Iliad-Homer/dp/0140275363/ref=sr_1_3?crid=22UOJKK9TNORH&keywords=the+iliad&qid=1704161044&sprefix=the+ilia%2Caps%2C203&sr=8-3">
          <b>The Iliad</b>
        </a>
        <p>Homer</p>
        <p>Rating: 3/5</p>
        <p>Epic poem about the Trojan War</p>
        <p>Adjectives can make my writting better</p>
      </div>
      <div className="mt-8 w-96">
        <a href="https://www.amazon.com/The-History-of-Money-audiobook/dp/B0038NLX5W/ref=sr_1_1?crid=1STB7LD7IJN0J&keywords=the+history+of+money&qid=1704161138&sprefix=the+history+of+money%2Caps%2C160&sr=8-1">
          <b>The History of Money</b>
        </a>
        <p>Jack Weatherford</p>
        <p>Rating: 4/5</p>
        <p>
          A modern history of money and the people that shaped our relationship
          with money
        </p>
        <p>
          Many things we take for granite come from years of interconected
          history
        </p>
      </div>
      <div className="mt-8 w-96">
        <a href="https://www.amazon.com/Letters-Penguin-Classics-Lucius-Annaeus/dp/0140442103/ref=sr_1_1?crid=IZRLGK120NWA&keywords=letters+from+a+stoic+seneca&qid=1704161303&sprefix=letters+from+a+stoic%2Caps%2C316&sr=8-1">
          <b>Letters from a Stoic</b>
        </a>
        <p>Seneca</p>
        <p>Rating: 1/5</p>
        <p>Seneca&apos;s teachings on stoicism</p>
        <p>Honestly didn&apos;t take anything from this book</p>
      </div>
      <div className="mt-8 w-96">
        <a href="https://www.amazon.com/Turn-Ship-Around-Building-Breaking/dp/0241250943/ref=sr_1_1?crid=3EY59L72G418R&keywords=turn+the+ship+around&qid=1704161383&sprefix=turn+the+ship+around%2Caps%2C155&sr=8-1">
          <b>Turn the Ship Around</b>
        </a>
        <p>David Marquet</p>
        <p>Rating: 5/5</p>
        <p>David Marquet&apos;t take on leadership</p>
        <p>
          The most powerful kind of leadership is one where the leader steps out
          of the way and lets other exercise power when possible
        </p>
      </div>
      <div className="mt-8 w-96">
        <a href="https://www.amazon.com/Cold-Start-Problem-Andrew-Chen/dp/0062969749/ref=sr_1_1?crid=SIR6TDNC9TGB&keywords=cold+start+problem&qid=1704161599&sprefix=cold+start+problem%2Caps%2C160&sr=8-1">
          <b>The Cold Start Problem</b>
        </a>
        <p>Andrew Chen</p>
        <p>Rating: 3/5</p>
        <p>Andrew Chen&apos;s take on growing two-sided markets</p>
        <p>Two sided markets are usually about one side of the market more</p>
      </div>
      <div className="mt-8 w-96">
        <a href="https://www.amazon.com/Cold-Start-Problem-Andrew-Chen/dp/0062969749/ref=sr_1_1?crid=SIR6TDNC9TGB&keywords=cold+start+problem&qid=1704161599&sprefix=cold+start+problem%2Caps%2C160&sr=8-1">
          <b>Antifragile</b>
        </a>
        <p>Nassim Taleb</p>
        <p>Rating: 5/5</p>
        <p>A study into things that improve from randomness/time/disorder</p>
        <p>
          What are things I can do to expose myself to things that improve with
          uncertainty because the only thing certain is uncertainty?
        </p>
      </div>
      <div className="mt-8 w-96">
        <a href="https://www.amazon.com/Genghis-Khan-Making-Modern-World/dp/0609809644/ref=sr_1_1?crid=FYZMAQZXWR29&keywords=genghis+khan+and+the+making+of+the+modern+world&qid=1704162037&sprefix=gengis+khan%2Caps%2C202&sr=8-1">
          <b>Genghis Khan and the Making of the Modern World</b>
        </a>
        <p>Jack Weatherford</p>
        <p>Rating: 5/5</p>
        <p>
          Fascinating history of Genghis Khan and his effect on the modern world
        </p>
        <p>Deep struggles can lead to great success</p>
      </div>
      <div className="mt-8 w-96">
        <a href="https://www.amazon.com/What-You-Do-Who-Are/dp/0062871331/ref=sr_1_1?crid=4IDX8XSVLWLD&keywords=what+you+do+is+who+you+are+ben+horowitz&qid=1704162268&sprefix=what+you+do+is+w%2Caps%2C193&sr=8-1">
          <b>What You Do is Who You Are</b>
        </a>
        <p>Ben Horowitz</p>
        <p>Rating: 4/5</p>
        <p>A look at how great leaders create great cultures</p>
        <p>Toussaint Louverture was a fascinating dude</p>
      </div>
      <div className="mt-8 w-96">
        <a href="https://www.amazon.com/Blitzed-Norman-Ohler/dp/1328915344/ref=sr_1_1?crid=18LPSVSU45OBK&keywords=blitzed+drugs+in+nazi+germany&qid=1704162375&sprefix=blitzed+%2Caps%2C188&sr=8-1">
          <b>Blitzed: Drugs in the Third Reich</b>
        </a>
        <p>Norman Ohler</p>
        <p>Rating: 5/5</p>
        <p>A fun look into how drugs changed Nazi Germany</p>
        <p>Evil does not pay in the end</p>
      </div>
      <div className="mt-8 w-96">
        <a href="https://www.amazon.com/High-Output-Management-Andrew-Grove/dp/0679762884/ref=sr_1_1?crid=FVO7DS3D72KM&keywords=high+output+management&qid=1704162513&sprefix=high+output+management%2Caps%2C186&sr=8-1">
          <b>High Output Management</b>
        </a>
        <p>Andy Grove</p>
        <p>Rating: 4/5</p>
        <p>A Bible of sorts on management in tech</p>
        <p>
          There should always be a final decision maker in the room, otherwise
          decisions will not get made
        </p>
      </div>
      <div className="mt-8 w-96">
        <a href="https://www.amazon.com/Strategy-Conflict-New-Preface-Author/dp/0674840313/ref=sr_1_1?crid=LDJJ1D0NVD8M&dib=eyJ2IjoiMSJ9.NMkBE-ql2Vv5TzreUe3ZLSxFSA8y5ZmkOPmgDhTmTqE8vBIW63sxMunotsZAwEuOD1Omf5Mryz_5RVKKbAVlbs8OLKbJ2AFCHYdal6Em7mGB03d3PbCH1heEJyQwTnOqvMpEq83R1o73j_X_DfqWJQ.CGgH7zh_-xtyZTyXUX0U7Z9wAlE5GctSKoJrm5cjF-k&dib_tag=se&keywords=the+strategy+of+conflict&qid=1705187029&s=books&sprefix=the+strategy+of+conflic%2Cstripbooks%2C188&sr=1-1">
          <b>The Strategy of Conflict</b>
        </a>
        <p>Thomas Schelling</p>
        <p>Rating: 2/5</p>
        <p>A guide on how to act in conflicts</p>
        <p>Honestly didn&apos;t take much from the book. Very forgettable</p>
      </div>
      <div className="mt-8 w-96">
        <a href="https://www.amazon.com/Founders-Work-Stories-Startups-Early/dp/1430210788/ref=sr_1_1?crid=WOCHI8T20YVH&dib=eyJ2IjoiMSJ9.EX5Q93ctTJ3l1Iy9X2ErIl0LF4gs7wreq9Vx5E1W8BejJQ0BBkREscC5xEPA2TIAS4Wbhl5c6q5t1esL3FxjEUlwuavZLqbnukufpAOERQd8hubbFbOCvfAVKKOSpqichvXsGstNgn9oyOM-_gJA0w.zrAC014rN6cDPJ2RmOEIFA0rk--SC3P2YBGZwQxtiDg&dib_tag=se&keywords=founders+at+work&qid=1705187164&s=books&sprefix=founders+at+work%2Cstripbooks%2C176&sr=1-1">
          <b>Founders at Work</b>
        </a>
        <p>Jessica Livingston</p>
        <p>Rating: 5/5</p>
        <p>
          Interviews with some of the most successful founders in Silicon Valley
        </p>
        <p>
          Solving problems for others is the best way to create a successful
          business
        </p>
      </div>
      <div className="mt-8 w-96">
        <a href="https://www.amazon.com/Pre-Suasion-Revolutionary-Way-Influence-Persuade/dp/1501109804/ref=sr_1_1?crid=13BXCMNG6E5WJ&dib=eyJ2IjoiMSJ9.OQU1_TRCZztvIXY79PT5VkNbm25qa6cGY7x93AwiUzY5w9rPbS_dDlN3WQFcOGtB3STMEV_zPeFkHN9OlDnQBw8oGheiISHaBScpZUn_Yd7LsbDQjTzEI_8jrFJVfuqAhaBFqCcrmoyM92ohhlxrig.63KqgaO37jSCykPvfeuXJ3gjAcmHKcBzmw5zm6rpDgk&dib_tag=se&keywords=pre-suasion&qid=1705187287&s=books&sprefix=persuasion%2Cstripbooks%2C147&sr=1-1">
          <b>Pre-Suasion</b>
        </a>
        <p>Robert Cialdini</p>
        <p>Rating: 2/5</p>
        <p>We persuade people by setting the stage for them to be persuaded</p>
        <p>I can be more persuasive in my communications</p>
      </div>

      <h2 className="mt-4">2021</h2>

      <div className="mt-8 w-96">
        <a href="https://www.amazon.com/Cult-We-Neumann-Startup-Delusion/dp/0593237137/ref=sr_1_1?crid=1WW813E840803&dib=eyJ2IjoiMSJ9.Er0ylscNdtEQEjp3Ro3STLmjYrVxkvpkSQcTS_mV4ZMSZkDTbJxCs16obacGTSOSI32t_iXBNeTVqWWi_9y5UVqiJKxZeNXbIfRXfp-28FzPDjurEQQMzBqGr_--yHaXOfZbpGNJmsgdPB9OBBMhrw.zhBu14gaEqatrSeUD3ubuCIkXTqJCnUo2pO5HmANy10&dib_tag=se&keywords=the+cult+of+we&qid=1705187500&s=books&sprefix=the+cult+of+we%2Cstripbooks%2C193&sr=1-1">
          <b>The Cult of We</b>
        </a>
        <p>Eliot Brown</p>
        <p>Rating: 4/5</p>
        <p>A fun book on the rise and fall of WeWork</p>
        <p>
          Adding value and extracting value are two very different things. Be
          humble when I extract value
        </p>
      </div>
      <div className="mt-8 w-96">
        <a href="https://www.amazon.com/Only-Paranoid-Survive-Exploit-Challenge/dp/0385483821/ref=sr_1_1?crid=ID7Y5ZTQGQD9&dib=eyJ2IjoiMSJ9.MHDpDVrNhYr-2Bjm0moClYSFeA9wsu2Cf8V-2z7Cr7WabZS-xkTkJKIWKWDSFPERR34Z5MMWdrnett9u9jFpg8UBxwQ3sbuTjA3Zy0ePwkFFX8-i_j2o-WKdFTaJ1T0AYGK_k2yAPCCfkg88gBEaBA.XMyE5Y8v9VFWSuYzGPGtlkxYsOQFL7_tzieNneXbFq4&dib_tag=se&keywords=only+the+paranoid+survive&qid=1705187635&s=books&sprefix=only+the+paranoid+survive%2Cstripbooks%2C163&sr=1-1">
          <b>Only the Paranoid Survive</b>
        </a>
        <p>Andrew Grove</p>
        <p>Rating: 5/5</p>
        <p>Andy Grove&apos;s account from his time at Intel</p>
        <p>
          A leader must understand when people&apos;s feedback is noise or a
          bellweather for a looming problem
        </p>
      </div>
      <div className="mt-8 w-96">
        <a href="https://www.amazon.com/Warburgs-Twentieth-Century-Odyssey-Remarkable-Jewish/dp/0525431837/ref=sr_1_1?crid=1245XM714DQ1J&dib=eyJ2IjoiMSJ9.9hepVs2z2wSDRXJSz0bODGbTzv8_atOvwMvEeQN0Vab-D6_Y6OzUjEZtN0y1xfg12h7e-NxYstiUjxvxow6gaTgwedH-9Q8ugkGVr1PbKu9fGblup7-BKlt7MyQlSoJuHYisbpcmyAS1MMo4Ghczdw.f1LvlA4iQ2NhmiFOmIYZmbGiEZxVpLkXXIrZyvTaTNc&dib_tag=se&keywords=the+warburgs&qid=1705187828&s=books&sprefix=the+warburg%2Cstripbooks%2C235&sr=1-1">
          <b>The Warburgs</b>
        </a>
        <p>Ron Chernow</p>
        <p>Rating: 3/5</p>
        <p>A study into the family of the Warburgs</p>
        <p>
          Greatness is achieved through starting small, being in the right place
          at the right time, and understanding what is important and what is not
        </p>
      </div>
      <div className="mt-8 w-96">
        <a href="https://www.amazon.com/House-Morgan-American-Banking-Dynasty/dp/0802144659/ref=sr_1_1?crid=3ASI09Z0G62UI&dib=eyJ2IjoiMSJ9.Ws7Guzj9hcs048vwP6S7pL9_ktBLqa0DRLwI-B2YJGutd45TEpl50UQbHcHOgWbmxacnZfJyMx1Vc1YJKXNiq_rdhNx7u5ZMABbT2Q4OsLzM9AalQyMT6U4hDpIMh0DBvPlc55uztB_tXltJsMSqdw.nQ8IVQyrFo9NdNLVgnQyY8Sb-tprPxW7OZUhHVHmGiE&dib_tag=se&keywords=the+house+of+morgan&qid=1705188006&s=books&sprefix=the+house+of+morgan%2Cstripbooks%2C171&sr=1-1">
          <b>The House of Morgan</b>
        </a>
        <p>Ron Chernow</p>
        <p>Rating: 4/5</p>
        <p>A study into the modern history of banking and JP Morgan</p>
        <p>
          Wealth is created sometimes by being at the right place at the right
          time and can be captured through hard work and a bit of luck
        </p>
      </div>

      <h2 className="mt-4">2020</h2>
    </main>
  );
}
