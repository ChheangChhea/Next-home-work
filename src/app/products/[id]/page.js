/* eslint-disable @next/next/no-img-element */
import React from "react";

async function getProductDetail(id) {
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
  const data = await res.json();
  return data;
}
//========================GenerateStaticParams================================
//  export async function generateStaticParams({ params}){
//   const products= await fetch('https://api.escuelajs.co/api/v1/products?limit=20&offset=0').then(res=>res.json());
//   return products.id.map(product=>({
//       id: product.id.tostring(),

// }));

//  }
export default async function ProductDetail({ params }) {
  const { id } = params;
  const product = await getProductDetail(id);
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-20 h-16 w-50">
      <a
        href="#"
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mt-16 "
      >
        {product.images && (
          <img
            className="object-cover w-full rounded-t-lg h-1000 md:h-auto md:w-3/5 md:rounded-none md:rounded-l-lg"
            src={product.images[0]}
            alt=""
          />
        )}
        <div className="flex flex-col justify-between p-4 md:w-auto leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {product.title ? product.title : "Loading...."}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {product.description ? product.description : "Loading....."}
          </p>
          <p className="mb-3 font-normal text-gray-700  colors.red dark:text-gray-400">
            {product.price}$
          </p>
          <a
            href="#"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add Card
          </a>
        </div>
      </a>
    </div>
  );
}
