import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="flex w-full p-8 justify-center">
        <p className="text-xl">DOC DOC</p>
      </div>
      <div className="flex w-full p-8 justify-center">
      <Link className="underline text-center w-full" href="/auth">logar</Link>
      </div>
      
    </div>
  );
}
