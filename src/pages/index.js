import Head from "next/head";
import { Calendar } from "src/components/Calendar";

export default function Home() {
  return (
    <div style={{ border: "1px solid black" }}>
      <Head>
        <title>Vet Planner</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Calendar />
    </div>
  );
}
