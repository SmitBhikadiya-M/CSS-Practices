import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>Hello World</h1>
      <br />
      <div style={{display:'flex', gap: '10px'}}>
        <Link href={"/users"}>Users</Link>
        <Link href={"/posts"}>Posts</Link>
        <Link href={"/products"}>Products</Link>
        {/* <Link href={"/news"}>News</Link> */}
      </div>
    </>
  )
}
