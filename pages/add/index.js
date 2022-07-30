import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export const createCode = async () => {

	//Create a json file with the user's data
	
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
				<form className="flex flex-col">
					<label className="text-2xl font-bold mx-10">Title</label>
					<input
						type="text"
						placeholder="<h1>"
						className="px-3 py-1.5 text-white bg-clip-padding border border-solid border-sky-400 rounded transition ease-in-out m-10 mt-2 focus:text-gray-200 focus:bg-grey-900 focus:border-white focus:outline-none"
					/>
					<label className="text-2xl font-bold mx-10">Content</label>
					<textarea
						placeholder="<textarea>"
						className="px-3 py-1.5 text-white bg-clip-padding border border-solid border-sky-400 rounded transition ease-in-out m-10 mt-2 max-h-36 focus:text-gray-200 focus:bg-grey-900 focus:border-white focus:outline-none"
					></textarea>
					<label className="text-2xl font-bold mx-10">Image</label>
					<input
						type="file"
						className="m-10 mt-2 border border-sky-400 rounded-lg cursor-pointer bg-gray-900 focus:outline-none focus:text-gray-200 lg:w-1/4"
					></input>
				</form>
			</div>

			<div className="flex flex-row justify-center">
				<button className="rounded-full w-12 h-12 text-2xl align-middle bg-sky-400">
					<p>+</p>
				</button>
			</div>
		</div>
	);
}
