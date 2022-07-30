import Link from "next/link";
import { useRouter } from "next/router";
import DefaultErrorPage from "next/error";

export default function Code({ data }) {
  const router = useRouter();
  const { codeId } = router.query;
  let name;
  let content;
  let date;
  let image;

  data.map(function (item) {
    if (item.name === codeId) {
      name = item.name.replace(/-/g, " ");
      content = item.content;
      image = item.image;
    }
  });

  return (
    <div className="grid place-items-center">
      <div className="flex py-10">
        <Link href="/">
          <h1 className="text-3xl cursor-pointer font-bold px-10">
            To<span className="text-sky-400">Code</span>
          </h1>
        </Link>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold">{name}</h1>
        <div className="flex m-10 w-1/2 text-justify text-lg">
          <p className="">{content}</p>
        </div>
      <img src={image} className=" w-30 my-5"/>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const url = "http://localhost:3000/api/data";
  const res = await fetch(url);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
