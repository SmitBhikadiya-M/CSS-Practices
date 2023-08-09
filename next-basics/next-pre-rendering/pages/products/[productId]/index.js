import Link from 'next/link';
import { useRouter } from 'next/router'
import React from 'react'

const Product = ({ product }) => {

    const router = useRouter();

    if(router.isFallback){
        return <h2>Loading...</h2>
    }

    return (
        <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: '300px',
            border: '1px solid blue',
            padding: '10px',
            boxShadow: '0 0 2px 2px blue',
            margin: '5px'
        }}>
            <h2 style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '5px'
            }}>
                <span>{product?.id}.</span> {product?.title}
            </h2>
            <p style={{
                margin: '10px',
                paddingTop: '10px',
                borderTop: '1px solid white'
            }}>{product?.body}</p>
            <div>
                <Link style={{ float: 'right' }} href={'/products'}>Back</Link>
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    const products = await fetch('http://localhost:4000/products').then(r => r.json());

    const paths = products.map((product) => ({
        params: {
            productId: product.id.toString()
        }
    }))

    return {
        paths, fallback: true
    }
}

export async function getStaticProps(context) {
    const { params } = context;

    console.log("GET STATIC PROPS CALLED", params);
    const product = await fetch(`http://localhost:4000/products/${params.productId}`).then(r => r.json())
    if (!product.id) {
       return {
        notFound: true
       }
    }
    console.log("GET STATIC PROPS EXECUTED", params);
    return {
        props: {
            product
        }
    }

}

export default Product