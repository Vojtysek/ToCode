import Link from "next/link";

export default function Home({ codes }) {
  return (
    <div className="grid place-items-center">
      <div className="flex py-10">
        <h1 className="text-3xl font-bold px-10">
          To<span className="text-sky-400">Code</span>
        </h1>
        <Link href="/admin">
          <a className="text-3xl font-bold ">Admin</a>
        </Link>
      </div>
      <div className="flex w-full">
        <ul id="firstUl" className="flex items-center w-full flex-col">
          {codes.map((code) => (
            <Link href={`/${code.name}`}>
              <li className="flex cursor-pointer p-5 m-5 w-1/2 bg-sky-400 text-sm text-black rounded-lg sm:text-base lg:text-xl">
                <a className="text-xxl font-bold">{code.name}</a>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <button className="rounded-full w-12 h-12 my-10 text-2xl align-middle bg-sky-400">
        <Link href="/add">
          <p>+</p>
        </Link>
      </button>
    </div>
  );
}

export async function getServerSideProps() {
  const url = "http://localhost:3000/api/data";
  const res = await fetch(url);
  const codes = await res.json();
  return {
    props: {
      codes,
    },
  };
}
