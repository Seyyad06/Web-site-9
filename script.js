let ad = prompt("Adınızı daxil edin:");

let yas = prompt("Yaşınızı daxil edin:");
yas = Number(yas);

let hobbiDaxilEt = confirm("Hobbilərinizi daxil etmək istəyirsiniz?");
let hobbilər = "";

if (hobbiDaxilEt) {
    hobbilər = prompt("Hobbilərinizi vergüllə ayrılmış formada daxil edin:");
}

let mesaj = `Ad: ${ad}\nYaş: ${yas}`;
if (hobbilər) {
    mesaj += `\nHobbilər: ${hobbilər}`;
}

alert(mesaj);