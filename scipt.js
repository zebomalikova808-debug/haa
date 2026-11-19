// let str = "SALOM adwa wa a wa w aw";
// let str1 = "aliklar"

// console.log(str.length);

// console.log(str.trim()); // trim, trimStart, trimEnd

// console.log(str.toUpperCase());
// console.log(str.toLowerCase().trim());

// console.log(str.indexOf("wa"));
// console.log(str.lastIndexOf("wa"));

// console.log(str.includes("salom"));
// console.log(str.slice(1, 5));
// console.log(str.replace("salom", "qalaysan"));
// console.log(str + str1);
// console.log(str.concat(str1))

let ism = prompt("Ismingizni kiriting");

let ismizHarflari = prompt(
  "Salom, " +
    ism +
    ", siz ismingizni qanday harflarda qilishni xohlaysiz? \n 1) katta \n 2) kichik",
);


if (ismizHarflari === "1") {
  alert(ism.toUpperCase().trim());

} else if (ismizHarflari === "2") {
  alert(ism.toLowerCase().trim());

} else {
  alert("Siz ismingizni kiritmadingiz.");
  alert("Bunday son mavjud emas");
}

let ha = confirm (ism + " ismingizda nechta harf borligini bilishni xohlaysizmi?");

if (ha === true) {
    alert("Sizning ismingizda " + ism.length + " ta harf bor.")
}