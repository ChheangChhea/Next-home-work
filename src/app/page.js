import Card from "@/components/Card";
import Profil from "@/components/Profil";
import Image from "next/image";

export const metadata = {
  title: "istad.co",
  description:
    "ISTAD is a noteworthy science and technology institute in Cambodia. ISTAD has routed Cambodian students to advanced science and technology, research, and develop digital skills and our graduates have been guaranteed excellent job opportunities with the Top IT company.",
};
// get user
export async function getUser() {
  const res = await fetch("https://api.escuelajs.co/api/v1/users?limit=10", {cache:"no-store"})
  const dat = await res.json();
  return dat;
}


//get data from API
export async function getData() {
  const Resources = await fetch(
    "https://api.escuelajs.co/api/v1/products?limit=20&offset=1",
    { cache: "no-store" }
  );
  const data = await Resources.json();
  return data;
}

export default async function Home() {
  const u = await getUser();

  const products = await getData();
  console.log(products);

  return (
    <main className="max-w-screen-xl mx-auto px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
      { u.map((u) => (
        <Profil
          key={u.id}
          name={u.name}
          // description={product.description}
          // creationA={users.creationA}
          avatar={u.avatar}
          // price={users.price}
        />
      ))};
      {products.map((product) => (
        <Card
          key={product.id}
          id={product.id}
          title={product.title}
          // description={product.description}
          creationA={product.creationA}
          image={product.images[0]}
          price={product.price}
        />
      ))}
    </main>
  );
}
