const jawaban = document.getElementById("jawaban");
const pertanyaan = document.getElementById("pertanyaan");

let init = 0;

const botSay = (data) => {
    return [
        "Halo, perkenalkan nama saya DanBot, siapa nama kamu?",
        `Halo ${data?.nama}, usia kamu berapa?`,
        `ohh ${data?.usia}, hobi kamu apa ya?`,
        `waww sama dong aku juga hobi ${data?.hobi},btw punya pacar gak?`,
        `ohh ${data?.pacar}, yaudah kalo gitu udahan ya`,
        ]
}

let userData = []

pertanyaan.innerHTML = botSay()[0];

function botStart() {
    init++
    if (init == 1) {
        botDelay({nama: jawaban.value})
    }else if (init == 2) {
        botDelay({usia: jawaban.value})
    }else if (init == 3) {
        botDelay({hobi: jawaban.value})
    }else if (init == 4) {
        botDelay({pacar: jawaban.value})
    }else if (init == 5) {
        finishing()
    }else {
        botEnd()
    }
}

function botDelay(jawabanUser) {
    setTimeout(() => {
    pertanyaan.innerHTML = botSay(jawabanUser)[init]
    },[1000])
    userData.push(jawaban.value);
    jawaban.value = "";
}
    

function finishing() {
    pertanyaan.innerHTML = `Thank u ya ${userData[0]} udah mampir ke DanBot 😁,
    kali kali kita main ${userData[2]} bareng ya!`;
    jawaban.value = "Makasih juga ya!"
}

function botEnd() {
    window.location.reload()
}