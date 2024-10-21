// INtro to objects
// Gavin Stewart
// Oct 10, 2024

let myBook;
let bookShelf = [];
let xDis = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  append(bookShelf, new Book("CS30 Text", "Gavin Stewart", 8754239097875, "hard cover", 546, width * 0.3 + xDis));
  append(bookShelf, new Book("jsft", "Gavin Stewart", 8754239097875, "soft cover", 215, width * 0.3 + xDis));
  append(bookShelf, new Book("jaeyh", "Gavin Stewart", 8754239097875, "leather bound", 100, width * 0.3 + xDis));
  append(bookShelf, new Book("KHdf", "Gavin Stewart", 8754239097875, "leather bound", 1500, width * 0.3 + xDis));
  append(bookShelf, new Book("jhfet", "Gavin Stewart", 8754239097875, "hard cover", 605, width * 0.3 + xDis));
  append(bookShelf, new Book("Hi", "Gavin Stewart", 8754239097875, "soft cover", 255, width * 0.3 + xDis));
  append(bookShelf, new Book("S30 TexCt", "Gavin Stewart", 8754239097875, "hard cover", 600, width * 0.3 + xDis));
  append(bookShelf, new Book("byt", "Gavin Stewart", 8754239097875, "leather bound", 340, width * 0.3 + xDis));
  append(bookShelf, new Book("Cyetft", "Gavin Stewart", 8754239097875, "hard cover", 625, width * 0.3 + xDis));
  append(bookShelf, new Book("tyr hard", "Gavin Stewart", 8754239097875, "soft cover", 450, width * 0.3 + xDis));

}

function draw() {
  background(220);
  for (let i = 0; i < 10; i++){
    bookShelf[i].display();
  }
}

class Book {
  // 1.constrctor
  constructor(title, author, isbn, cover, pages, x) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.coverType = cover;
    this.pageCount = pages;
    this.x = x;
  }
  //2. class methods
  display() {
    // render our book on screen
    rectMode(CENTER); textAlign(CENTER, CENTER);
    textSize(20);
    switch (this.coverType) {
      case "soft cover":
        fill(250, 200, 150); break;
      case "hard cover":
        fill(200, 250, 66); break;

      case "leather bound":
        fill(100, 50, 50); break;
    }
    rect(this.x, height/2, this.pageCount/10, 150);
    fill(255);
    text(this.title[0], this.x, height/2 - 50);
    xDis += this.pageCount/20;

  }
  printOut() {
    print(this.title + ", by: " + this.author);
    print("length:" + this.pageCount);
    print("ISBN" + this.isbn);
  }
}