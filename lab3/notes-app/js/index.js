
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
    
    addEventListener.addEventListener('click', this.remove.bind(newNote));

    return newNote;
  }
  
  add(){
    // HINT🤩
    // this function should append the note to the screen somehow
  }
  
  saveToStorage(){
    // HINT🤩
    // localStorage only supports strings, not arrays
    // if you want to store arrays, look at JSON.parse and JSON.stringify
    
  }
  
  remove(){
    // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
    // in this function, 'this' will refer to the current note element
    
  } 
}

class App {
  constructor() {
    console.log("👊🏼 The Constructor!");
  
    // HINT🤩
    // clicking the button should work
    // pressing the enter key should also work
    
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