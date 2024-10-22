import Link from "next/link";
import { MdArrowBackIos } from "react-icons/md";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Link href={"/"}>
        <MdArrowBackIos size={24} className="absolute top-10 left-10 m-4" />
      </Link>
      <h1>Web Design</h1>
      <p>A list of websites I think are cool</p>

      <li>
        <a href="https://www.nardone-automotive.com/the-928">
          Nardone Automotive
        </a>
      </li>
      <li>
        <a href="https://www.typewolf.com/">Typewolf</a>
      </li>
    </main>
  );
}
