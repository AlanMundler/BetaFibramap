import Link from "next/link";

function NotFound() {
  return (
    <section className=" flex h-[calc(100vh-7rem)] justify-center items-center">
      <div>
        <h1 className=" text-4xl font-bold">Not Found</h1>
        <Link href="/">
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 ml-6 mt-4 ">
            Volver al inicio
          </button>
        </Link>
      </div>
    </section>
  );
}
export default NotFound;
