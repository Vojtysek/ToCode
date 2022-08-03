import Link from "next/link";
import { useRouter } from "next/router";
import DefaultErrorPage from "next/error";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default function Code({ data }) {
  return (
    <div className="grid place-items-center">
      <div className="flex py-10">
        <Link href="/">
          <h1 className="text-3xl cursor-pointer font-bold px-10">
            To<span className="text-sky-400">Code</span>
          </h1>
        </Link>
      </div>
      {data?.map((code) => (
        <div key={code.id} className="flex flex-col items-center">
          <h1 className="text-4xl font-bold">{code.title}</h1>
          <div className="flex m-10 w-1/2 text-justify text-lg">
            <p key={code.id} className=" text-sm">
              {code.content}
            </p>
          </div>
          <img src={code.image} className=" w-30 my-5" />
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const codes = await prisma.content.findMany();
  return {
    props: {
      data: JSON.parse(JSON.stringify(codes)),
    },
  };
}

/*
<div>
            <label>Status:</label>
            <input
              type="checkbox"
              className="rounded-full m-5 w-6 h-6 bg-white border-sky-400 border-4"
            />
          </div>
*/
