// Arrays
// Gavin STewart
// Oct. 17 2024

let names = ['Gavin', 'ryder', 'Mitsaal'];

function setup() {
  createCanvas(windowWidth, windowHeight);
  print(names);
  names.push('Lima');
  print(names);

  let lastname = names.pop();
  print(lastname);
  print(names);

  let firstname = names.shift();
  print(firstname);
  print(names);

  names.push('name0');
  names.push('name1');
  names.push('name2');
  names.push('name3');
  names.push('name4');

  for (n of names){
    print(n);
  }
}

function draw() {
  background(220);
}
