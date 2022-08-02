import Link from "next/link";
import { useRef, useEffect } from "react";
import "../styles/List.module.css";

export default function Home({ codes }) {
  let name = [];

  codes.map(function (item) {
    name.push(item.name);
  });

  useEffect(() => {
    const firstUl = document.getElementById("firstUl");
    const secondUl = document.getElementById("secondUl");

    return () => {
      for (let i = 0; i < name.length; i++) {
       
      }
    };
  }, [name]);

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
        <ul id="firstUl" className="flex flex-col w-1/2">
          <Link href="/">
            <li className="flex cursor-pointer p-5 m-5 bg-sky-400 text-sm text-black rounded-lg sm:text-base lg:text-xl">
              <p>{name[0]}</p>
            </li>
          </Link>
        </ul>
        <ul id="secondUl" className="flex flex-col w-1/2"></ul>
      </div>
      <button className="rounded-full w-12 h-12 text-2xl align-middle bg-sky-400">
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
