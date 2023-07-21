
// Basic Type
let id: number = 5;
let company: string = 'Traversy Media'
let isPublished: boolean = true
let x:any = 'Hello'

x = true
x = isPublished

let ids: number[] = [1,2,3,4]
ids.push(5)

let names: {} = { name: "smit" }
console.log(names);

let getName = (fname: string, lname: string): void => {
    console.log("getName", fname+" "+lname);
}
getName("Smit", "Bhikadiya");


//*** Type  */
type Person = {
    name: string,
    age: number
}

const employees: Person = {
    name: "Smit",
    age: 0
}

// Achieving intersection and union with type

type Name = string | null;
let name1: Name = "smit"
let name2!: Name;
console.log(name1, name2);

//*** Interface */
interface Person2 {
    name: string,
    age: number
}

const labour: Person2 = {
    name: "Smit",
    age: 0
}




