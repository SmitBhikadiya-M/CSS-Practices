import User from "@/components/User";
import Link from "next/link";

function UserList({ users }){
    return <>
        <h1>List of user <Link href={"/"}>Home</Link></h1>

        <br />
        <br />

        {
            users.length && users.map((user)=>{
                return <div key={user.id}>
                    <User user={user} />
                </div>
            })
        }
    </>
}

export default UserList;

export async function getStaticProps(){
    const users = await fetch("https://jsonplaceholder.typicode.com/users").then(r => r.json());
    return {
        props: {
            users
        }
    }
}