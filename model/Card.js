const path = require("path");
const fs = require("fs");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "card.json"
);

class Card {
  add(phone) {
    const card = await Card.fetch();

    const idx = card.phones.findIndex((c) => c.id === phone.id);
    const candidate = card.phones[idx]
  }



  static async fetch() {
    return Promise((resolve, reject) => {
      fs.readFile(p, "utf-8", (err, content) => {
        if (err) {
          reject(err);
        } else {
          resolve(JSON.parse(content));
        }
      });
    });
  }
}

module.exports = Card;
