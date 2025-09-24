// 3. Fayl Tizimi Bilan O'yin:
// FS modulidan foydalanib quyidagilarni bajaradigan Node.js dasturini yozing:
// "my_nodejs_files" deb nomlangan yangi katalog yarating.
// "my_nodejs_files" ichida "hello_world.txt" deb nomlangan matnli fayl yarating, ichida "Hello, world!" deb yozilgan bo'lsin.
// "hello_world.txt" faylining tarkibini o'qib, uni konsolga chiqaring.
// Bonus: "hello_world.txt" fayliga hozirgi sana va vaqtni yangi qator sifatida qo'shing.
import path from "node:path";
import fs from "node:fs";

const folderName = "my_nodejs_files";
const fileName = "hello_world.txt";

async function createFolderAndFile(folderName, fileName, content = "Hello, world!") {
    try {
        console.log("1️.Papka yaratilmoqda...");
        await fs.promises.mkdir(folderName, { recursive: true });
        console.log(` Papka yaratildi: ${folderName}`);
        console.log("\n2️.Fayl yaratilmoqda...");
        const filePath = path.join(folderName, fileName);
        await fs.promises.writeFile(filePath, content);
        console.log(` Fayl yaratildi: ${filePath} \n`);

        console.log("3.fayl o'qilishni boshladi!");
        
        const data = await fs.promises.readFile(filePath, "utf-8");
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}

createFolderAndFile(folderName, fileName);

