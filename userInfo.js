import { formatArrayStrings } from "./arrayManipulation.js";

function createUserProfile(namesArr, modifiedNameArr){
    let users = [];
    for (let i = 0; i < namesArr.length; i++) {
        let userInfo = {
            name: namesArr[i],
            modifiedName: modifiedNameArr[i],
            id: i + 1
        };
        users.push(userInfo);
    }
    return users;
}

// Test cases
let namesArr = ["Alice", "Bob", "Charlie", "David"];

let modifiedNameArr = formatArrayStrings([1, 2, 3, 4], namesArr);
//Expected Output
// [ 'alice', 'BOB', 'charlie', 'DAVID' ]

console.log(createUserProfile(namesArr, modifiedNameArr));

//Expected Output
// [{name: "Alice", modifiedName: "alice", id: 1}, {name: "Bob", modifiedName: "BOB", id: 2}, {name: "Charlie", modifiedName: "charlie", id: 3}, {name: "David", modifiedName: "DAVID", id: 4}]