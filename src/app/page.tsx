import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <p>Hunter Simmons</p>
      <h1 className="mt-8">About</h1>
      <p>
        I am a creator who has found technology to be the best way to express
        myself
      </p>
      <h1 className="mt-8">Links</h1>
      <a href="https://huntersimmons.substack.com/">Blog</a>
      <a href="https://twitter.com/HWilliamSimmons">Twitter</a>
      <a href="https://www.linkedin.com/in/hunter-simmons1/">LinkedIn</a>
      <a href="https://github.com/hwsimmons17/personal-site">Github</a>
      <h1 className="mt-8">Interests</h1>
      <Link href={"/interests/books"} className="hover:text-blue-200">
        Books
      </Link>
     <Link href={"/interests/web-design"} className="hover:text-blue-200">
        Web Design
      </Link>
      <p>Programming</p>
    </main>
  );
}
