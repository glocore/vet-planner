import Head from "next/head";
import { AppBar } from "src/components/AppBar";
import { Calendar } from "src/components/Calendar";
import { NavRail } from "src/components/NavRail";
import { EventSheetProvider } from "src/components/EventSheet";

export default function Home() {
  return (
    <EventSheetProvider>
      <div className="h-full flex w-full">
        <Head>
          <title>Vet Planner</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavRail />
        <div>
          <AppBar />
          <Calendar />
        </div>
      </div>
    </EventSheetProvider>
  );
}
