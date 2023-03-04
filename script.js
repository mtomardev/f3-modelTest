let bookContainer = document.getElementById("bookContainer")
let query = document.getElementById("inputSearch").value;
console.log(query);


function Search(){
fetch("https://www.googleapis.com/books/v1/volumes?q=percy+jackson")
.then((resolve) => resolve.json())
.then((book)=>{
    console.log(book.items);

    
    for(let i=0; i<book.items.length; i++){
      bookContainer.innerHTML += `
        <div class="col">
            <div class="card h-100">
              <img src="${book.items[i].volumeInfo.imageLinks.smallThumbnail}" class="card-img-top" alt="book">
              <div class="card-body">
                <h5 class="card-title">Title:${book.items[i].volumeInfo.title}</h5>
              </div>
              <ul class="list-group list-group-flush">
              <li class="list-group-item">Authors : ${book.items[i].volumeInfo.authors}</li>
              <li class="list-group-item">Page Count : ${book.items[i].volumeInfo.pageCount}</li>
            </ul>
            <a href="${book.items[i].saleInfo.buyLink}" class="btn btn-primary" target="_blank">Buy Now</a>          
            </div>
        `
    }
    })

    let searchData = new Array
    //this is used to create multiple user deta
                //first Acces old data
                //Second after ? read data.  if aviable get Data 
                //3rd else set blank array 
                searchData = JSON.parse(localStorage.getItem("search"))?JSON.parse(localStorage.getItem("search")):[]
                user_records.push({
                  "query": query 
                  
              })
              console.log(user_records);

              // saving in local storage providing key and json data jason data will conver array to string
            localStorage.setItem("search", JSON.stringify(searchData))
}
