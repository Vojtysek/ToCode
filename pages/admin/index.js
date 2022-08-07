import Link from "next/link";
import { PrismaClient } from "@prisma/client";
import Head from "next/head";

const prisma = new PrismaClient();

export default function Admin({ initialCodes }) {
  return (
    <>
      <Head>
        <title>ToCode Admin</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex justify-center">
        <Link href="/">
          <h1 className="cursor-pointer text-3xl font-bold my-10">
            To<span className="text-sky-400">Admin</span>
          </h1>
        </Link>
      </div>
      <div className="flex w-full">
        <ul id="firstUl" className="flex items-center w-full flex-col">
          {initialCodes?.map((code) => (
            <li
              key={code.id}
              className="flex p-5 m-5 justify-between w-1/2 bg-red-400 hover:bg-red-500 transition ease-in-out delay-150 text-sm text-white rounded-lg sm:text-base lg:text-xl"
            >
              <a className="text-xl tracking-wide font-bold">{code.title}</a>
              <button className="text-xl font-bold" >X</button>
            </li>
          ))}
        </ul>
      </div>
    </>
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
