export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h3>Hunter Simmons</h3>
      <h1 className="mt-8">About</h1>
      <p>
        I am a creator who has found technology to be the best way to express
        myself
      </p>
      <h1 className="mt-8">Links</h1>
      <a
        href="https://huntersimmons.substack.com/"
        className="hover:text-blue-200"
      >
        Blog
      </a>
      <a
        href="https://twitter.com/HWilliamSimmons"
        className="hover:text-blue-200"
      >
        Twitter
      </a>
      <a
        href="https://www.linkedin.com/in/hunter-simmons1/"
        className="hover:text-blue-200"
      >
        LinkedIn
      </a>
      <a
        href="https://github.com/hwsimmons17/personal-site"
        className="hover:text-blue-200"
      >
        Github
      </a>
      <h1 className="mt-8">Things I find interesting</h1>
      <p>Books</p>
      <p>Keyboards</p>
      <p>Web design</p>
      <p>Programming</p>
    </main>
  );
}
