import Link from "next/link";
import { useRouter } from "next/router";
import DefaultErrorPage from "next/error";
import Head from "next/head";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default function Code({ data }) {
  const router = useRouter();
  const { codeId } = router.query;

  let title;
  let content;
  let image;

  data.forEach((code) => {
    if (code.title === codeId) {
      title = code.title;
      content = code.content;
      image = code.image;
    }
  });

  return (
    <>
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="grid place-items-center">
      <div className="flex py-10">
        <Link href="/">
          <h1 className="text-3xl cursor-pointer font-bold px-10">
            To<span className="text-sky-400">Code</span>
          </h1>
        </Link>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold">{title}</h1>
        <div className="flex m-10 w-1/2 text-justify text-lg">
          <p className=" text-sm">{content}</p>
        </div>
        <img src={image} className=" w-30 my-5" />
      </div>
    </div>
    </>
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