console.log("hello world hey....")



// if user add a notes

window.onload = function () {
    shownotes();                                // SPA feature called in begining again

    let addbtn = document.getElementById('addbtn');             // addBtn variable
    addbtn.addEventListener("click", function (e) {                // handle the event when button is clicked                

        let addTxt = document.getElementById("addtxt")            //access text area  
        let notes = localStorage.getItem("notes");                //create notes in local storage  
        if (notes == null) {

            notesobj = [];                                         // array empty  
        }
        else {
            notesobj = JSON.parse(notes);                         // parse   
        }

        notesobj.push(addTxt.value);                              //Adds input to array   
        localStorage.setItem("notes", JSON.stringify(notesobj));  // converts arrays to string
        addTxt.value = "";                                        // clears the value ones it being uploaded  
        console.log(notesobj)
        shownotes();                                               // display txt in cards 

    })
// function to show data
    function shownotes() {
        let notes = localStorage.getItem("notes");             // localstorage creates
        if (notes == null) {

            notesobj = [];                                         // if localstorage is empty then notesobj array empty  
        }
        else {
            notesobj = JSON.parse(notes);                         // parse
        }

        let html = "";

        notesobj.forEach(function (element, index) {                               //creates new note cards ++ html is a forEach var
                    
            html +=`<div id="card" class=" noteCard my-2 mx-2 card" style="width: 18rem;"> 
            <div class="card-body">
                <h5 class="card-title"><strong>Note ${index + 1}</strong></h5>
                <p class="card-text">${element}</p>
                

                            </div>
        </div> `;
        });

        let notesele = document.getElementById("notes");

        if(notesobj.length != 0){
            notesele.innerHTML = html; 
        }
         else{
             notesele.innerHTML = `nothing to display`
         }
        
    }

    document.getElementById("clrbtn").addEventListener("click",function(){
        console.log("cleared");
        localStorage.clear();
        shownotes();
    }
    )

    


    /*function deletenottes(index){
        let notes = localStorage.getItem("notes");             // localstorage creates
        if (notes == null) {

            notesobj = [];                                         // if localstorage is empty then notesobj array empty  
        }
        else {
            notesobj = JSON.parse(notes);                         // parse
        }

        notesobj.splice(index,1);
        localStorage.setItem("notes",JSON.stringify(notesobj));
        shownotes();
        console.log("am a fun body")

    }*/
       
    
    
                 
}
             
                              












