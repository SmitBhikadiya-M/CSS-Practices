import { useRouter } from "next/router";

function ProductDetail(){
    const router = useRouter();
    const productId = router.query.productId;
    return <><h2>Product Detail: { productId }</h2></>
}

export default ProductDetail;