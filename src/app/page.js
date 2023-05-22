import Card from '@/components/Card';
import Image from 'next/image'

export const metadata={
  title:"istad.co",
  description:"ISTAD is a noteworthy science and technology institute in Cambodia. ISTAD has routed Cambodian students to advanced science and technology, research, and develop digital skills and our graduates have been guaranteed excellent job opportunities with the Top IT company."
};

//get data from API
export async function getData() {
  const Resources = await fetch('https://api.escuelajs.co/api/v1/products?limit=20&offset=1' , {cache:"no-store"});
  const data =await Resources.json()
  return data;
}
export default async function Home() {
  const products=await getData()
  // console.log(products)

  return (
    <main className="flex min-h-screen flex-wrap items-center justify-between p-24">
      {products.map((product)=>(
    <Card
      key={product.id}
      id={product.id}
      title={product.title}
      description={product.description}
      creationA={product.creationA}
      image={product.images[0]}
      price={product.price}
    
    />
      ))}
  </main>
  );
}
