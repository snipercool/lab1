
class Note {
  constructor(title) {
    this.title = title;
    this.element = this.createElement(title);
  }
  
  createElement(title){
    let newNote = document.createElement('div');
    /*let getTitle = document.createElement('p');
    let removeBtn = document.createElement('a');
    getTitle.innerHTML = title;
    removeBtn.innerHTML = "remove";
    removeBtn.classList.add("card-remove");
    a.addEventListener('click', this.remove.bind(newNote)); of*/
    newNote.classList.add("card");
    newNote.innerHTML = `<p>${title}</p>
    <a href="#" class="card-remove">Remove</a>`;
    
    newNote.addEventListener('click', this.remove.bind(newNote));
    newNote.addEventListener('click', this.removeNote.bind(this.title));
    

    return newNote;
  }
  
  add(){
    let noteContent  = this.element;
  document.querySelector('div.notes').appendChild(noteContent);
  }
  
  saveToStorage(){
    // HINT🤩
    // localStorage only supports strings, not arrays
    // if you want to store arrays, look at JSON.parse and JSON.stringify
    let dataStorage = JSON.parse( localStorage.getItem("dataStorage"));
    if (dataStorage != null) {
    dataStorage.push(this.title);
    console.log(dataStorage);
    
    localStorage.setItem("dataStorage", JSON.stringify( dataStorage ));
    }else{
      dataStorage = [];
      dataStorage.push(this.title);
      console.log(dataStorage);
      localStorage.setItem("dataStorage", JSON.stringify( dataStorage ));
    }
    
  }
  removeNote(){
    let dataArray = JSON.parse(localStorage.getItem("dataStorage"));
    let splycing = dataArray.indexOf(this);
    dataArray.splice(splycing, 1);
    localStorage.setItem("dataStorage", JSON.stringify(dataArray));
  }
  remove(){
    // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
    // in this function, 'this' will refer to the current note element
    this.style.display = "none";
  } 
}

class App {
  constructor() {
    console.log("👊🏼 The Constructor!");
  
    // HINT🤩
    // clicking the button should work
    // pressing the enter key should also work
    this.btnAdd = document.querySelector("#btnAddNote");
    this.btnAdd.addEventListener("click", this.createNote.bind(this));
    this.textAdd = document.querySelector("#txtAddNote");
    this.textAdd.addEventListener("keydown", event => {
      if(event.keyCode == 13 ){
      document.querySelector("#btnAddNote").click();
      return true;
      }
      
    });
    this.loadNotesFromStorage();
  }
  
  loadNotesFromStorage() {
    // HINT🤩
    // load all notes from storage here and add them to the screen
    // something like note.add() in a loop would be nice
    let storedData = JSON.parse(localStorage.getItem("dataStorage"));

    if(storedData.length > 0) {
      storedData.forEach( title => {
          let dataStorage = new Note( title );
          dataStorage.add();
      });
  }
  }
   
  createNote(e){
    // this function should create a new note by using the Note() class
    let titleNote = document.querySelector("#txtAddNote").value;
    let note = new Note(titleNote);
    // HINT🤩
    note.add();
    note.saveToStorage();
    this.reset();
  }
  
  reset(){
    // this function should reset the form 
    document.getElementById("txtAddNote").value = '';
  }
  
}

let app = new App();