const sqlite3 = require("sqlite3").verbose();
const path = require("node:path");

const db = new sqlite3.Database(path.join(__dirname, "sample.db"), sqlite3.OPEN_READWRITE, (error) => {
    if (error){
        return console.error(error);
    }
    console.log("Connected to database!");
})

/*
CRUD
CREATE
READ
UPDATE
DELETE
*/

const Timmy = {
    ID: "1234567",
    Username: "Timmy",
    Email: "timmy@failure.org",
    DOB: "2005-10-28"
}

function CallbackFunc(Error, Results){
    if (Error){
        console.error(Error);
        return;
    }
    console.log("Executed SQL Query successfully!");
    if (!Results) return;
    Results.forEach(data => console.log(data));
}

let sql = `
CREATE TABLE IF NOT EXISTS Users (
    id TEXT PRIMARY KEY,
    Username TEXT ,
    Email TEXT ,
    DOB TEXT
);
`
let Tables = `SELECT name FROM pragma_table_info("Users");`

let c = `
ALTER TABLE Users
RENAME COLUMN Emali TO Email;
`
let d = `
INSERT INTO Users(id,Username,Email,DOB)
VALUES ("13581","Bob","bob@csie.com","2005-10-28"
);
`
let e = `
SELECT ID FROM Users
WHERE Username="Bob";
`

db.exec(c, CallbackFunc);
db.all(d, CallbackFunc);
db.all(e, CallbackFunc)



// let sql = `
// CREATE TABLE IF NOT EXISTS Users2 (
//     id TEXT PRIMARY KEY,
//     Username TEXT ,
//     Email TEXT ,
//     DOB TEXT,
//     test INT
// );
// `


// let sql = `
// DROP TABLE Users2;
// `