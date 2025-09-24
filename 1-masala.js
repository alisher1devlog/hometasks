import fs from "fs";
// 1. writeNumbers Funksiyasi:
// 100 ta tasodifiy son generatsiya qiladi (masalan, 1 dan 100 gacha).
// Har bir sonni yangi qatorga sonlar.txt fayliga yozadi.

//1-usul 

// function writeNumbers() {
//     fs.writeFile("sonlar.txt", "", (err) => {
//         if (err) {
//             console.error(err)
//         }
//     });
//     for (let i = 0; i < 100; i++) {
//         const randomNumber = Math.floor(Math.random() * 100) + 1;
//         fs.appendFile("sonlar.txt", randomNumber + '\n', (err) => {
//             if (err) {
//                 console.error(err)
//             }
//         })
//     }
//     console.log("done");
// };

// writeNumbers();

// 2-usul
// bu code xotiradan va tezlikdan yutadi va xavfsiz

async function writeNumber() {
    try {
        let content = "";
        for (let i = 0; i < 100; i++) {
            const numberRandom = Math.floor((Math.random() * 100) + 1);
            content += numberRandom + '\n';
        }
        await fs.promises.writeFile("sonlar.txt", content);
        console.log("Tayyor!");
    } catch (err) {
        console.error(err);
    }
}

writeNumber();