const books = [
  {
    title: "the cat in the hat",
    published: 1960,
    author: "DrSussue",
    coauthor: {
      name: "Dr. Oz"
    },
    pages: 79
  },
  {
    title: "the cat in the paper hat",
    published: 1960,
    author: "DrSussue",
    coauthor: {
      name: "Dr. Oz"
    },
    pages: 79
  },
  {
    title: "the cat in the cotton hat",
    published: 1960,
    author: "DrSussue",
    coauthor: {
      name: "Dr. Oz"
    },
    pages: 79
  }
];

const book2 = {
  title: "the cat in the red hat",
  published: 1960,
  author: "DrSussue",
  coauthor: {
    name: "Dr. Oz"
  },
  pages: 79
};

console.log(books.push(book2));

for (var i = 0; i < books.length; i++) {
  console.log(books[i].title);
}
