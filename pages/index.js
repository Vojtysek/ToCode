import Link from "next/link";

export default function Home() {
  return (
    <div className="grid place-items-center">
      <h1 className="text-3xl font-bold py-10">
        To<span className="text-sky-400">Code</span>
      </h1>
      <div className="flex w-full">
        <ul className="flex flex-col w-1/2">
          <li className="flex cursor-pointer p-5 m-5 bg-sky-400 text-sm text-black rounded-lg sm:text-base lg:text-xl">
            React-Native App
          </li>
          <li className="flex cursor-pointer p-5 m-5 bg-sky-400 text-sm text-black rounded-lg sm:text-base lg:text-xl">
            Next.js Formater
          </li>
          <li className="flex cursor-pointer p-5 m-5 bg-sky-400 text-sm text-black rounded-lg sm:text-base lg:text-xl">
            React-Native App
          </li>
        </ul>
        <ul className="flex flex-col w-1/2">
          <Link href="">
            <li className="flex cursor-pointer p-5 m-5 bg-sky-400 text-sm text-black rounded-lg sm:text-base lg:text-xl">
              React-Native App
            </li>
          </Link>
          <Link href="">
            <li className="flex cursor-pointer p-5 m-5 bg-sky-400 text-sm text-black rounded-lg sm:text-base lg:text-xl">
              Next.js Formater
            </li>
          </Link>
          <Link href="">
            <li className="flex cursor-pointer p-5 m-5 bg-sky-400 text-sm text-black rounded-lg sm:text-base lg:text-xl">
              React-Native App
            </li>
          </Link>
        </ul>
      </div>
      <button className="rounded-full w-12 h-12 text-2xl align-middle bg-sky-400">
        <Link href="/add">
          <p>+</p>
        </Link>
      </button>
    </div>
  );
}
