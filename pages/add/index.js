import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

async function createCode(content) {
  const response = await fetch("api/form", {
    method: "POST",
    body: JSON.stringify(content),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
}

export default function Add() {
  return (
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
            await createCode(data);
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
              <p>+</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
