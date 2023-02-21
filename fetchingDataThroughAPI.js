// let gituser=fetch("https://api.github.com/users")
// gituser.then((res)=>
// {
// return res.json();
// })
// .then((user)=>
// {
//     console.log(user);
// })
// .catch((err)=>
// {
//     console.log(error);
// })

// Fetching the data trhough github API
// let gitusers=fetch("https://api.github.com/users")
// let tbody=document.querySelector("tbody")

// gitusers.then((resp)=>
// {
//     return resp.json()
// })
// .then((users)=>
// {
//    for(let user of users)
//    {
//     console.log(user);
//     tbody.innerHTML+=
//     `<tr>
//     <td>${user.id}</td>
//     <td>${user.login}</td>
//     <td><img src="${user.avatar_url}" height="150px", width="80%"></td>
//     <td>${user.node_id}</td>
//     </tr>`
//    }
// }).catch((err)=>
// {
//     console.log("error");
// })





// Fetching the data trhough my API
let Movies=fetch("http://www.omdbapi.com/?s=avengers&apikey=6d708f36")
let tbody=document.querySelector("tbody")

Movies.then((resp)=>
{
    return resp.json()
})
.then((Movies)=>
{
    console.log(Movies);
    console.log(Movies.Search);
    for(let movie of Movies.Search)
    {
        console.log(movie);
        tbody.innerHTML+=
        `<tr>
        <td>${movie.Title}</td>
        <td><img src="${movie.Poster}" height="150px", width="100%"></td>
        <td>${movie.Year}</td>
        </tr>`
    }
})
// .catch((err)=>
// {
//     console.log("error");

// })