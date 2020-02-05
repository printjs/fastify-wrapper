import { exec } from "child_process";
import { join } from "path";

console.log(join(__dirname, "../dist"));
exec(`rm -rf ${join(__dirname, "../dist")}`, function (err, stdout, stderr) {
    // your callback goes here
});
