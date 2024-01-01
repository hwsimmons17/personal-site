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
        <p>It&apos;s easy to lose one's bearings when one becomes successful</p>
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
      <p className="mt-8">73 more books I need to record ...</p>
    </main>
  );
}
