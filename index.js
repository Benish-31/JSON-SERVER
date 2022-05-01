
let tbody=document.getElementById("tbody");
let active=document.getElementById("active");
let inactive=document.getElementById("inactive");
let member=document.getElementById("member");
let owner=document.getElementById("owner");
let admin=document.getElementById("admin");


function getActive(){
    tbody.innerHTML = "";
    fetch("http://localhost:3000/user?status=Active")
    .then(res=>res.json()) 
    .then(json=>{
        json.map(data=>{
            console.log(data)
            tbody.append(td_fun(data));
        })
    })
}
function getInactive(){
    tbody.innerHTML = "";
    fetch("http://localhost:3000/user?status=Inactive")
    .then(res=>res.json())
    .then(json=>{
        json.map(data=>{
            tbody.append(td_fun(data));
        })
    })
}
function getMember(){
    tbody.innerHTML = "";
    fetch("http://localhost:3000/user?role=Member")
    .then(res=>res.json())
    .then(json=>{
        json.map(data=>{
            tbody.append(td_fun(data));
        })
    })
}
function getOwner(){
    tbody.innerHTML = "";
    fetch("http://localhost:3000/user?role=Owner")
    .then(res=>res.json())
    .then(json=>{
        json.map(data=>{
            tbody.append(td_fun(data));
        })
    })
}
function getAdmin(){
    tbody.innerHTML = "";
    fetch("http://localhost:3000/user?role=Admin")
    .then(res=>res.json())
    .then(json=>{
        json.map(data=>{
            tbody.append(td_fun(data));
        })
    })
}
// tbody.append(td_fun());
//fetch function
// fetch("http://localhost:3000/user")
// fetch("http://localhost:3000/user?id=1") // retrieving data with id = 1
// fetch("http://localhost:3000/user?id=1&id=2")
// fetch("http://localhost:3000/user?name=Ngenzi John")
// fetch("http://localhost:3000/user?status=Active")
// fetch("http://localhost:3000/user?role=Member")
// fetch("http://localhost:3000/user")
// // .then(res => console.log(res)) // res call upon a function here this is going to return a promise
// .then(res=>res.json()) // convert this data to json
// .then(json=>{
//     json.map(data=>{
//         // console.log(data) // print all data in array in console
//         // console.log(data.name) // print all names in array in console
//         console.log(data.name)
//         console.log(data.profile)
//         console.log(data.email)
//         console.log(data.status)
//         console.log(data.role)
//         console.log(data)
//         tbody.append(td_fun(data));
//         // tbody.append(td_fun(data.profile, data.name));
//         // tbody.append(td_fun(data.profile));
//     })
// })
// td_fun() // we have to append this data inside html element
// create td
// function td_fun(image, name){
    function td_fun({profile, name, email, status, role}){
    let td = document.createElement('tr');
    td.innerHTML=`
    <td class="px-6 py-4 whitespace-nowrap">
    <div class="flex items-center">
        <div class="flex-shrink-0 h-10 w-10">
            <img src="${profile}" class="h-10 w-10 rounded-full" alt="">
        </div>
        <div class="ml-4"> <!-- margin-left: 4 -->
            <div class="text-sm font-medium text-gray-900">
                ${name}
            </div>
            <div class="text-sm text-gray-500">
                ${email}
            </div>
        </div>
    </div>
</td>
<td class="px-6 py-4 whitespace-nowrap">
    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
        ${status}
    </span>
</td>
<td class="px-6 py-4 whitespace-nowrap">
    <span class="text-sm text-gray-500">${role}</span>
</td>

    `;
    return td; 
}