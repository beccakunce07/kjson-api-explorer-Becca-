// so much empty so much sad

fetch("https://jsonplaceholder.typicode.com/posts")
       .then(function (response) {
           // Convert the response to JSON
           return response.json();
      })
       .then(function (json) {
           console.log(json); // Log the JSON data
       })
       .catch(function (error) {
           console.error("Our Apologies There was an error fetching your data:", error);
       });



const container = document.title.getElementById("postList");

postList.innerHTML = `
                <h2>${item.title}</h2>
                <p>${item.body}</p>
            `;
            
            // Append the new div to the main container
            container.appendChild(itemDiv);