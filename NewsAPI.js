async function newsapi()
{
    let section = document.querySelector(".section");
    let search= document.getElementById("search");
    let keyword=search.value;
    console.log(search.value);
    console.log(keyword);
    let newsApis= await fetch(`https://newsapi.org/v2/everything?q=${keyword}&apiKey=a98ad7af9a3f4d079d3bfb025dfb3144`);
    newsApis= await newsApis.json();
    console.log(newsApis);
    let tbody= document.querySelector("tbody");

    for(let news of newsApis.articles)
    {
        tbody.innerHTML+=
        `<tr>
        <th>${news.title}</th>
        <th><img src="${news.urlToImage}"></th> 
        <th>${news.description}</th>
        <th>${news.publishedAt}</th>         
        </tr>`
    }    
}

function removenews()
{
    let tbody=document.querySelector("tbody")
    let search= document.getElementById("search")
    let table=document.querySelector("table")
    if(search.value=="")
    {
        tbody.remove();
        tbody.innerHTML=``;
        table.append(tbody);

    }
}