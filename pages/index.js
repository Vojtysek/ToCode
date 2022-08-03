import Link from "next/link";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default function Home({ codes }) {
  console.log(codes);
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
        <ul
          id="firstUl"
          key={codes}
          className="flex items-center w-full flex-col"
        >
          {codes?.map((code) => (
            <Link href={`/${code.name}`}>
              <li className="flex cursor-pointer p-5 m-5 w-1/2 bg-sky-400 text-sm text-black rounded-lg sm:text-base lg:text-xl">
                <a key={code.id} className="text-xxl font-bold">
                  {code.name}
                </a>
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
  const codes = await prisma.content.findMany();
  return {
    props: {
      initialCodes: JSON.parse(JSON.stringify(codes)),
    },
  };
}