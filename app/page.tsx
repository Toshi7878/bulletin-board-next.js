import BBSCardList from "./components/BBSCardList";
import { BBSData } from "./types/types";
import { headers } from 'next/headers'

async function getBBSAllData() {

  const headersData = headers()
  const host :string = headersData.get('host')
  const protocol = headersData.get('x-forwarded-proto') ?? host.startWith('localhost') ? 'http' : 'https'
  const apiBase = `${protocol}://${host}`
  const responce = await fetch(`${apiBase}/api/post`, {
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
