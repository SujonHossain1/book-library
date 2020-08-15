const ul = document.querySelector("#book-list ul");
        ul.addEventListener('click', (event) =>{
           if(event.target.className == "delete"){
               const li = event.target.parentElement;
               ul.removeChild(li);
           }
        })

        const form = document.forms['add-new-book'];
        form.addEventListener('submit', function(event) {
            const book = event.target.querySelector("#book").value.trim();
            createBookListItem(book);

            event.target.querySelector("#book").value = "";
            event.preventDefault();
        })

        
         // create element 
         function createBookListItem(value) {
            const li = document.createElement('li');
            const bookName = document.createElement('span');
            const deleteBtn = document.createElement('span');

            bookName.innerText = value;
            bookName.classList.add('name');
            deleteBtn.classList.add('delete');
            deleteBtn.innerText = "delete";
            
            li.appendChild(bookName);
            li.appendChild(deleteBtn);
            ul.appendChild(li);
        }
