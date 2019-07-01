const mongoose = require("mongoose");
const dbBook = require("../models/books");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/googlebooks"
);

const bookSeed = [
    {
        title: "Harry Potter and the Sorcerer's Stone",
        author: ["J.K. Rowling"], 
        description: "Turning the envelope over, his hand trembling, Harry saw a purple wax seal bearing a coat of arms; a lion, an eagle, a badger and a snake surrounding a large letter 'H'.\" Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin! Pottermore has now launched the Wizarding World Book Club. Visit Pottermore to sign up and join weekly Twitter discussions at WW Book Club.",
        image: "http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        link: "http://books.google.com/books?id=wrOQLV6xB-wC&printsec=frontcover&dq=harry+potter&hl=&cd=1&source=gbs_api"
    },
    {
        title: "The Grapes of Wrath",
        author: ["John Steinbeck"], 
        description: "The Pulitzer Prize-winning epic of the Great Depression, a book that galvanized—and sometimes outraged—millions of readers. First published in 1939, Steinbeck’s Pulitzer Prize-winning epic of the Great Depression chronicles the Dust Bowl migration of the 1930s and tells the story of one Oklahoma farm family, the Joads—driven from their homestead and forced to travel west to the promised land of California. Out of their trials and their repeated collisions against the hard realities of an America divided into Haves and Have-Nots evolves a drama that is intensely human yet majestic in its scale and moral vision, elemental yet plainspoken, tragic but ultimately stirring in its human dignity. A portrait of the conflict between the powerful and the powerless, of one man’s fierce reaction to injustice, and of one woman’s stoical strength, the novel captures the horrors of the Great Depression and probes into the very nature of equality and justice in America. At once a naturalistic epic, captivity narrative, road novel, and transcendental gospel, Steinbeck’s powerful landmark novel is perhaps the most American of American Classics. This Centennial edition, specially designed to commemorate one hundred years of Steinbeck, features french flaps and deckle-edged pages. For more than sixty-five years, Penguin has been the leading publisher of classic literature in the English-speaking world. With more than 1,500 titles, Penguin Classics represents a global bookshelf of the best works throughout history and across genres and disciplines. Readers trust the series to provide authoritative texts enhanced by introductions and notes by distinguished scholars and contemporary authors, as well as up-to-date translations by award-winning translators.",
        image: "http://books.google.com/books/content?id=ClXiwSYzjtYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        link: "http://books.google.com/books?id=ClXiwSYzjtYC&printsec=frontcover&dq=the+grapes+of+wrath&hl=&cd=1&source=gbs_api"
    },
    {
        title: "Guns, Germs And Steel",
        author: ["Jared Diamond"], 
        description: "A book of big questions, and big answers' Yuval Noah Harari, bestselling author of Sapiens WITH A NEW AFTERWORD FROM THE AUTHOR Why has human history unfolded so differently across the globe? In his Pulitzer Prize-winning book, Jared Diamond puts the case that geography and biogeography, not race, moulded the contrasting fates of Europeans, Asians, Native Americans, sub-Saharan Africans, and aboriginal Australians. An ambitious synthesis of history, biology, ecology and linguistics, Guns, Germs and Steel remains a ground-breaking and humane work of popular science.",
        image: "http://books.google.com/books/content?id=_BrB7kg19RgC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        link: "http://books.google.com/books?id=_BrB7kg19RgC&dq=guns+germs+and+steel&hl=&cd=1&source=gbs_api"
    },
    {
        title: "Cod",
        author: ["Mark Kurlansky"], 
        description: "Wars have been fought over it, revolutions have been spurred by it, national diets have been based on it, economies have depended on it, and the settlement of North America was driven by it. Cod, it turns out, is the reason Europeans set sail across the Atlantic, and it is the only reason they could. What did the Vikings eat in icy Greenland and on the five expeditions to America recorded in the Icelandic sagas? Cod -- frozen and dried in the frosty air, then broken into pieces and eaten like hardtack. What was the staple of the medieval diet? Cod again, sold salted by the Basques, an enigmatic people with a mysterious, unlimited supply of cod. Cod is a charming tour of history with all its economic forces laid bare and a fish story embellished with great gastronomic detail. It is also a tragic tale of environmental failure, of depleted fishing stocks where once the cod's numbers were legendary. In this deceptively whimsical biography of a fish, Mark Kurlansky brings a thousand years of human civilization into captivating focus. From the Trade Paperback edition.",
        image: "http://books.google.com/books/content?id=czRsuc9K18wC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        link: "http://books.google.com/books?id=czRsuc9K18wC&printsec=frontcover&dq=cod&hl=&cd=1&source=gbs_api"
    }

];

async function seed() {
    await mongoose
      .connect(
        MONGODB_URI
      )
      .then(() => {
        console.log("connected to db");
      })
      .catch(err => {
        console.log("DB error ", err);
      });
    for (let book of bookSeed) {
      const { _id: bookId } = await new dbBook({
        title: book.title,
        author: book.author,
        description: book.description,
        image: book.image,
        link: book.link
      }).save();
    }
  
    mongoose.disconnect();
  
    console.info("Record Inserted");
  }
  
  seed();