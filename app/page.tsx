import BBSCardList from "./components/BBSCardList";
import { BBSData } from "./types/types";

async function getBBSAllData() {
  const responce = await fetch("http://localhost:3000/api/post", {
    cache: "no-store",
  })

  const bbsAllData: BBSData[] = await responce.json();

  return bbsAllData;
}

export default async function Home() {
  const bbsAllData = await getBBSAllData();

  return (
    <main>
      <BBSCardList bbsAllData={bbsAllData} />
    </main>
  );
}
