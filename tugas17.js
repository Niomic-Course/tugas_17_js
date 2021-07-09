console.log('No. 1:');
function ubahKata() {
    let kata1 = 'Saya beLajar bahaSa peMrograman deNgan khUsuk';
    let kata2 = 'Allen SedAng MemAncinG IkaN di SuNgai, DIA MEndapat IkAN GaBuS 3 Ekor dan LanGsuNg Dijual.';
    
    // kata1:
    console.log(kata1.toLowerCase());
    console.log(kata1.toUpperCase());

    // kata2:
    console.log(kata2.toLowerCase());
    console.log(kata2.toUpperCase());

}

ubahKata();

console.log();
console.log('============');
console.log();

console.log('No. 2:');
function kodeAscii() {
    let kalimat = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";

    let cut = kalimat.substr(0, 6);
    let data = [];
    
    for (let x = 0; x < (cut.length); x++) {
        let tes = cut[x].charCodeAt(cut);
        data.push(tes);
    }

    //  memanggil masing-masing elemen secara manual:
    // console.log(`${data[0]}-${data[1]}-${data[2]}-${data[3]}-${data[4]}-${data[5]}`);

    // menggunakan method join:
    console.log(data.join('-'));
}

kodeAscii();