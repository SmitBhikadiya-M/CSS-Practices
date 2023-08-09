import { useRouter } from "next/router";

function DocParams(){

    const router = useRouter();

    console.log(router.query.params);

    return <h2>
        Eliplses Routing
    </h2>
}

export default DocParams;