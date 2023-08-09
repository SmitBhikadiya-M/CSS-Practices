import Link from 'next/link';
import React from 'react'

const ProductList = ({ products }) => {

  return (
    <div>
      <h1>Products</h1>
      {
        products.map(product => {
          return <div key={product.id} >
            <Link href={`products/${product.id}`}>
              <h2 style={{ padding: '15px 5px' }}>
                {product.id}. {product.title}
              </h2>
            </Link>
            <hr />
          </div>
        })
      }
    </div>
  )
}

export async function getStaticProps() {

  const res = await fetch('http://localhost:4000/products').then(r => r.json());

  return {
    props: {
      products: (res || [])
    }
  }
}

export default ProductList