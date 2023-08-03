function mysSplit(str, needle) {
    str = "Aries  Dimas Yudhistira";
    needle = " ";
    result = ["Aries", "Dimas Yudhistira"];
    result = ["Aries", "", "Dimas", "Yudhistira"];
}
console.log(result);

function mysSplit(str, needle) {
    console.log(str.split(needle));
}

mysSplit ("Aries   Dimas Yudhistira", " ");

// kode diatas cuma clue, buat mastiin nya coba compare pake split method