import Image from "next/image";
import {trpc} from './trpc'

export default async function Home() {
  const greeting = await trpc.hello.query({name: `Kendrick`})
  return (
      <div>
        {greeting}
      </div>
  );
}
