import Link from "next/link";
import Head from "next/head";

async function createCode(content) {
  const response = await fetch("api/form", {
    method: "POST",
    body: content,
  });

  if (!response.ok) {
    throw new Error(response.statusText + content);
  }

  return await response.json();
}

export default function Add() {
  return (
    <>
      <Head>
        <title>AddCode</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <div className="flex justify-center">
          <Link href="/">
            <h1 className="text-3xl font-bold my-10 cursor-pointer">
              Add<span className="text-sky-400">Code</span>
            </h1>
          </Link>
        </div>
        <div>
          <form
            className="flex flex-col"
            onSubmit={async (data) => {
              data.preventDefault();
              const title = data.target.title.value;
              const content = data.target.content.value;
              const image = data.target.image.value;
              const jsonData = JSON.stringify({ title, content, image });
              await createCode(jsonData);
            }}
          >
            <label className="text-2xl font-bold mx-10">Title</label>
            <input
              type="text"
              name="title"
              placeholder="<h1>"
              className="px-3 py-1.5 text-white bg-clip-padding border border-solid border-sky-400 rounded bg-transparent transition ease-in-out m-10 mt-2 focus:text-gray-200 focus:bg-grey-900 focus:border-white focus:outline-none"
            />
            <label className="text-2xl font-bold mx-10">Content</label>
            <textarea
              name="content"
              placeholder="<textarea>"
              className="px-3 py-1.5 text-white bg-clip-padding border border-solid border-sky-400 rounded bg-transparent transition ease-in-out m-10 mt-2 max-h-36 focus:text-gray-200 focus:bg-grey-900 focus:border-white focus:outline-none"
            ></textarea>
            <label className="text-2xl font-bold mx-10">Image</label>
            <input
              type="text"
              name="image"
              className="px-3 py-1.5 text-white bg-clip-padding border border-solid border-sky-400 rounded bg-transparent transition ease-in-out m-10 mt-2 focus:text-gray-200 focus:bg-grey-900 focus:border-white focus:outline-none"
            ></input>
            <div className="flex flex-row justify-center">
              <button
                type="submit"
                className="rounded-full w-12 h-12 text-2xl align-middle bg-sky-400"
              >
                +
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
