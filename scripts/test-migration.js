const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');

(async () => {
    // open the database
    const db = await sqlite.open({
        filename: './laptops.sqlite',
        driver: sqlite3.Database
    })

    await db.migrate({ force: true });
    const laptops = await db.all("SELECT * FROM laptops");
    console.log(JSON.stringify(laptops, null, 2))

})()