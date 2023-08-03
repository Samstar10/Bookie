document.querySelector('button').addEventListener('click', getFetch)
// document.querySelector('h2').innerText = localStorage.getItem('books')
displayBooks();

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://openlibrary.org/isbn/${choice}.json`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.title)
        // if(!localStorage.getItem('books')){
        //   localStorage.setItem('books', data.title)
        // }else{
        //   let books = localStorage.getItem('books') + "<br>" + data.title;
        //   localStorage.setItem('books', books)
        // }
        let books = localStorage.getItem('books') ? localStorage.getItem('books').split('<br>') : [];
        if(!books.includes(data.title)){
          books.push(data.title);
          localStorage.setItem('books', books.join('<br>'));
        }
        
        // document.querySelector('h2').innerText = localStorage.getItem('books')
        displayBooks();
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function displayBooks(){
  const booksHTML = localStorage.getItem('books') || '';
  document.querySelector('h2').innerHTML = booksHTML;
}