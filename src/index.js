window.onload = function () {
  const quoteList = document.getElementById("quote-list");

  function getQuotes(quotesData) {
    quotesData.forEach((quote) => {
      if (quote.likes.length === 0) {
        quoteList.innerHTML += `<li class='quote-card'>
              <blockquote class="blockquote">
                <p class="mb-0">${quote.quote}</p>
                <footer class="blockquote-footer">${quote.author}</footer>
                <br>
                <button class='btn-success'>Likes: <span>0</span></button>
                <button class='btn-danger' id=${quote.id}>Delete</button>
              </blockquote>
            </li>`;
      } else {
        quoteList.innerHTML += `<li class='quote-card'>
              <blockquote class="blockquote">
                <p class="mb-0">${quote.quote}</p>
                <footer class="blockquote-footer">${quote.author}</footer>
                <br>
                <button class='btn-success'>Likes: <span>${quote.likes[0].createdAt}</span></button>
                <button class='btn-danger' id=${quote.id}>Delete</button>
              </blockquote>
            </li>`;
      }
    });
  }

  function newQuote() {
    //const submitForm = document.getElementById("new-quote-form");
    const quoteInput = document.getElementById("new-quote");
    const authorInput = document.getElementById("author");
    const submitForm = document.getElementsByClassName("btn btn-primary");

    submitForm[0].addEventListener("click", (event) => {
      event.preventDefault();

      quoteList.innerHTML += `<li class='quote-card'>
            <blockquote class="blockquote">
              <p class="mb-0">${quoteInput.value}</p>
              <footer class="blockquote-footer">${authorInput.value}</footer>
              <br>
              <button class='btn-success'>Likes: <span>0</span></button>
              <button class='btn-danger' id=${quote.id}>Delete</button>
            </blockquote>
          </li>`;
    });
  }

  function deleteQuote(quotesData) {
    const deleteButtons = document.querySelectorAll(".btn-danger");

    quotesData.map((quote) => {
      console.log(quote);
    //   for (let i = 0; i < deleteButtons.length; i++) {
    //     deleteButtons[i].addEventListener("click", (e) => {
    //       if (deleteButtons[i].id === quote.id) {
    //         quoteList.innerHTML = "";
    //       }
    //     });
    //   }
    });
  }

  fetch("http://localhost:3000/quotes?_embed=likes")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
      getQuotes(data);
      deleteQuote(data);
    });
  newQuote();
};

// const quoteConfiguration = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
//   body: JSON.stringify({
//     quote: quoteInput.value,
//     author: authorInput.value,
//   }),
// };

// console.log(quote);
// console.log(author);
// fetch("http://localhost:3000/quotes", quoteConfiguration)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
