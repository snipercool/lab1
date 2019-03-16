
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
    localStorage.setItem(title, JSON.stringify(newNote));
  }
  
  remove(){
    // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
    // in this function, 'this' will refer to the current note element
    localStorage.removeItem(title);
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
    this.loadNotesFromStorage();
  }
  
  loadNotesFromStorage() {
    // HINT🤩
    // load all notes from storage here and add them to the screen
    // something like note.add() in a loop would be nice
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