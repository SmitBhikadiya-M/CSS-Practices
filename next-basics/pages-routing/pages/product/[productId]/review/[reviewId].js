import { useRouter } from "next/router";

function ReviewDetail(){
    const router = useRouter();
    const {reviewId, productId} = router.query;
    return <><h2>Review {reviewId} for product {productId}</h2></>
}

export default ReviewDetail;