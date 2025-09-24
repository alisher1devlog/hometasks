// 2. readNumbers Funksiyasi:
// sonlar.txt faylidan barcha sonlarni o'qiydi.
// O'qilgan sonlarni massivga saqlaydi.

import { log } from "node:console";
import fs from "node:fs";

// function readNumbers() {
//     fs.readFile("./sonlar.txt", "utf-8", (err, data) => {
//         if (err) {
//             console.error(err);
//             return;
//         }
//         const strNumber = data.trim().split("\n");
//         console.log(strNumber);

//     });
// }
// readNumbers();

async function readNumber() {
    try {
        const data = await fs.promises.readFile("./sonlar.txt","utf-8");
        console.log(data.trim().split("\n"));
    } catch (err) {
        console.error(err);
    };
};

readNumber();
