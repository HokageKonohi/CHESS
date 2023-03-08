


/*        Раскаментировать при октеваций Плеера */
var tracks = ['./imges/music/HARD_TRAP.mp3'];
var players = document.getElementById('players');
var current = 0;
players.src = tracks[0];
players.onended = function () {
    current++;
    if (current >= tracks.length) current = 0;
    players.src = tracks[current];
    players.play();
}
















const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
})
// var colors = prompt(`Выбор Цвета Шахмат  Белые или Черные`)
colors = 'Белые'
// Шахмотная доска 
function drawChess() {
    let mainBlock = document.querySelector('.chess__gemes');
    let block;
    let flag = true;
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (j == 0) flag = !flag;
            block = document.createElement('div');   // добовления клетки 
            if (flag) {
                block.className = `block black`;  // добовляем цвет клетки 
                block.setAttribute("data-x", j);  // получаем кординак клетки по x
                block.setAttribute("data-y", i); // получаем кординак клетки по y
                // const dfrth = document.querySelector('[data-x="' + 0 + '"]')
            } else {
                block.className = `block white`;     // добовляем цвет клетки 
                block.setAttribute("data-x", j);  // получаем кординак клетки по x
                block.setAttribute("data-y", i);   // получаем кординак клетки по y
            }
            mainBlock.appendChild(block);
            flag = !flag;
        }
    }
}
drawChess();
//  Фигура конь





// window.addEventListener('click', function (event) {




//     // console.log(event.target)
//     var parentElement = event.target.parentNode;
//     console.log(parentElement)
//     let x = parentElement.dataset.x
//     let y = parentElement.dataset.y

//     console.log(x + "    " + y)


//     if (+x + 2 < 8 && +y + 1 < 8) {
//         document.querySelector(`.block[data-x="${+x + 2}"][data-y="${+y + 1}"]`).classList.add('active')
//     }
//     if (+x + 2 < 8 && +y - 1 >= 0) {
//         document.querySelector(`.block[data-x="${+x + 2}"][data-y="${+y - 1}"]`).classList.add('active')
//     }
//     if (+x - 2 >= 0 && +y + 1 < 8) {
//         document.querySelector(`.block[data-x="${+x - 2}"][data-y="${+y + 1}"]`).classList.add('active')
//     }
//     if (+x - 2 >= 0 && +y - 1 >= 0) {
//         document.querySelector(`.block[data-x="${+x - 2}"][data-y="${+y - 1}"]`).classList.add('active')
//     }
//     if (+x + 1 < 8 && +y - 2 >= 0) {
//         document.querySelector(`.block[data-x="${+x + 1}"][data-y="${+y - 2}"]`).classList.add('active')
//     }
//     if (+x - 1 >= 0 && +y - 2 >= 0) {
//         document.querySelector(`.block[data-x="${+x - 1}"][data-y="${+y - 2}"]`).classList.add('active')
//     }
//     if (+x + 1 < 8 && +y + 2 < 8) {
//         document.querySelector(`.block[data-x="${+x + 1}"][data-y="${+y + 2}"]`).classList.add('active')
//     }
//     if (+x - 1 >= 0 && +y + 2 < 8) {
//         document.querySelector(`.block[data-x="${+x - 1}"][data-y="${+y + 2}"]`).classList.add('active')
//     }





// })

// window.addEventListener('click', function (event) {
//     let x = event.target.dataset.x;
//     let y = event.target.dataset.y;

//     console.log(`${x} ${y}`)
//     console.log(event.target)

//     const item_img = document.querySelector('.item')

//     if (+x + 2 < 8 && +y + 1 < 8) {
//         document.querySelector(`.block[data-x="${+x + 2}"][data-y="${+y + 1}"]`).classList.add('active')
//     }
//     if (+x + 2 < 8 && +y - 1 >= 0) {
//         document.querySelector(`.block[data-x="${+x + 2}"][data-y="${+y - 1}"]`).classList.add('active')
//     }
//     if (+x - 2 >= 0 && +y + 1 < 8) {
//         document.querySelector(`.block[data-x="${+x - 2}"][data-y="${+y + 1}"]`).classList.add('active')
//     }
//     if (+x - 2 >= 0 && +y - 1 >= 0) {
//         document.querySelector(`.block[data-x="${+x - 2}"][data-y="${+y - 1}"]`).classList.add('active')
//     }
//     if (+x + 1 < 8 && +y - 2 >= 0) {
//         document.querySelector(`.block[data-x="${+x + 1}"][data-y="${+y - 2}"]`).classList.add('active')
//     }
//     if (+x - 1 >= 0 && +y - 2 >= 0) {
//         document.querySelector(`.block[data-x="${+x - 1}"][data-y="${+y - 2}"]`).classList.add('active')
//     }
//     if (+x + 1 < 8 && +y + 2 < 8) {
//         document.querySelector(`.block[data-x="${+x + 1}"][data-y="${+y + 2}"]`).classList.add('active')
//     }
//     if (+x - 1 >= 0 && +y + 2 < 8) {
//         document.querySelector(`.block[data-x="${+x - 1}"][data-y="${+y + 2}"]`).classList.add('active')
//     }


// });


//=========================================================================  Фигуры =============================================================

switch (colors) {
    case 'Белые':

        // Лодя Черные
        const bRook = () => {
            const rook = document.querySelector('[data-x="0"]')
            // rook.setAttribute('draggable', 'true')
            rook.setAttribute('id', '3')
            const rookImg = document.createElement('img')
            rookImg.classList.add('item')
            rookImg.setAttribute('draggable', 'true')
            rookImg.setAttribute('id', '0')
            rookImg.classList.add('item')
            rookImg.src = './imges/bRook.png'
            rook.appendChild(rookImg)

        }
        bRook()
        // Конь Черные
        const bKnight = () => {
            const knight = document.querySelector('[data-x="1"]')
            // knight.setAttribute('draggable', 'true')
            knight.setAttribute('id', '3')
            const knightImg = document.createElement('img')
            knightImg.setAttribute('draggable', 'true')
            knightImg.setAttribute('id', '0')
            knightImg.classList.add('item')
            knightImg.src = './imges/bKnight.png'
            knight.appendChild(knightImg)
        }
        bKnight()
        // Слон  Черные
        const bBishop = () => {
            const bishop = document.querySelector('[data-x="2"]')
            // bishop.setAttribute('draggable', 'true')
            bishop.setAttribute('id', '3')
            const bishopImg = document.createElement('img')
            bishopImg.setAttribute('draggable', 'true')
            bishopImg.setAttribute('id', '0')
            bishopImg.classList.add('item')
            bishopImg.src = './imges/bBishop.png'
            bishop.appendChild(bishopImg)
        }
        bBishop()
        // Королева  Черные
        const bQueen = () => {
            const queen = document.querySelector('[data-x="3"]')
            // queen.setAttribute('draggable', 'true')
            queen.setAttribute('id', '3')
            const queenImg = document.createElement('img')
            queenImg.setAttribute('draggable', 'true')
            queenImg.setAttribute('id', '0')
            queenImg.classList.add('item')
            queenImg.src = './imges/bQueen.png'
            queen.appendChild(queenImg)
        }
        bQueen()
        // Король Черные
        const bKing = () => {
            const king = document.querySelector('[data-x="4"]')
            // king.setAttribute('draggable', 'true')
            king.setAttribute('id', '3')
            const kingImg = document.createElement('img')
            kingImg.setAttribute('draggable', 'true')
            kingImg.setAttribute('id', '0')
            kingImg.classList.add('item')
            kingImg.src = './imges/bKing.png'
            king.appendChild(kingImg)
        }
        bKing()
        // Слон  Черные
        const bBishop2 = () => {
            const bishop2 = document.querySelector('[data-x="5"]')
            // bishop2.setAttribute('draggable', 'true')
            bishop2.setAttribute('id', '3')
            const bishop2Img = document.createElement('img')
            bishop2Img.setAttribute('draggable', 'true')
            bishop2Img.setAttribute('id', '0')
            bishop2Img.classList.add('item')
            bishop2Img.src = './imges/bBishop.png'
            bishop2.appendChild(bishop2Img)
        }
        bBishop2()
        // Конь Черные
        const bKnight2 = () => {
            const knight2 = document.querySelector('[data-x="6"]')
            // knight2.setAttribute('draggable', 'true')
            knight2.setAttribute('id', '3')
            const knight2Img = document.createElement('img')
            knight2Img.setAttribute('draggable', 'true')
            knight2Img.setAttribute('id', '0')
            knight2Img.classList.add('item')
            knight2Img.src = './imges/bKnight.png'
            knight2.appendChild(knight2Img)
        }
        bKnight2()
        // Лодя Черные
        const bRook2 = () => {
            const rook2 = document.querySelector('[data-x="7"]')
            // rook2.setAttribute('draggable', 'true')
            rook2.setAttribute('id', '3')
            const rook2Img = document.createElement('img')
            rook2Img.setAttribute('draggable', 'true')
            rook2Img.setAttribute('id', '0')
            rook2Img.classList.add('item')
            rook2Img.src = './imges/bRook.png'
            rook2.appendChild(rook2Img)
        }
        bRook2()
        // Пешка Черные
        // console.log(p)
        const bPawn1 = () => {
            const pawn1 = document.querySelector('[data-x="0"][data-y="1"]')
            // pawn1.setAttribute('draggable', 'true')
            const bpawnImgi = document.createElement('img')
            bpawnImgi.setAttribute('draggable', 'true')
            bpawnImgi.setAttribute('id', '0.5')
            bpawnImgi.classList.add('item')
            bpawnImgi.src = './imges/bPawn.png'
            pawn1.appendChild(bpawnImgi)
        }
        bPawn1()
        const bPawn2 = () => {
            const pawn2 = document.querySelector('[data-x="1"][data-y="1"]')
            // pawn2.setAttribute('draggable', 'true')
            const bpawnImgi = document.createElement('img')
            bpawnImgi.setAttribute('draggable', 'true')
            bpawnImgi.setAttribute('id', '0.5')
            bpawnImgi.classList.add('item')
            bpawnImgi.src = './imges/bPawn.png'
            pawn2.appendChild(bpawnImgi)
        }
        bPawn2()
        const bPawn3 = () => {
            const pawn3 = document.querySelector('[data-x="2"][data-y="1"]')
            // pawn3.setAttribute('draggable', 'true')
            const bpawnImgi = document.createElement('img')
            bpawnImgi.setAttribute('draggable', 'true')
            bpawnImgi.setAttribute('id', '0.5')
            bpawnImgi.classList.add('item')
            bpawnImgi.src = './imges/bPawn.png'
            pawn3.appendChild(bpawnImgi)
        }
        bPawn3()
        const bPawn4 = () => {
            const pawn4 = document.querySelector('[data-x="3"][data-y="1"]')
            // pawn4.setAttribute('draggable', 'true')
            const bpawnImgi = document.createElement('img')
            bpawnImgi.setAttribute('draggable', 'true')
            bpawnImgi.setAttribute('id', '0.5')
            bpawnImgi.classList.add('item')
            bpawnImgi.src = './imges/bPawn.png'
            pawn4.appendChild(bpawnImgi)
        }
        bPawn4()
        const bPawn5 = () => {
            const pawn5 = document.querySelector('[data-x="4"][data-y="1"]')
            // pawn5.setAttribute('draggable', 'true')
            const bpawnImgi = document.createElement('img')
            bpawnImgi.setAttribute('draggable', 'true')
            bpawnImgi.setAttribute('id', '0.5')
            bpawnImgi.classList.add('item')
            bpawnImgi.src = './imges/bPawn.png'
            pawn5.appendChild(bpawnImgi)
        }
        bPawn5()
        const bPawn6 = () => {
            const pawn6 = document.querySelector('[data-x="5"][data-y="1"]')
            // pawn6.setAttribute('draggable', 'true')
            const bpawnImgi = document.createElement('img')
            bpawnImgi.setAttribute('draggable', 'true')
            bpawnImgi.setAttribute('id', '0.5')
            bpawnImgi.classList.add('item')
            bpawnImgi.src = './imges/bPawn.png'
            pawn6.appendChild(bpawnImgi)
        }
        bPawn6()
        const bPawn7 = () => {
            const pawn7 = document.querySelector('[data-x="6"][data-y="1"]')
            // pawn7.setAttribute('draggable', 'true')
            const bpawnImgi = document.createElement('img')
            bpawnImgi.setAttribute('draggable', 'true')
            bpawnImgi.setAttribute('id', '0.5')
            bpawnImgi.classList.add('item')
            bpawnImgi.src = './imges/bPawn.png'
            pawn7.appendChild(bpawnImgi)
        }
        bPawn7()
        const bPawn8 = () => {
            const pawn8 = document.querySelector('[data-x="7"][data-y="1"]')
            // pawn8.setAttribute('draggable', 'true')
            const bpawnImgi = document.createElement('img')
            bpawnImgi.setAttribute('draggable', 'true')
            bpawnImgi.setAttribute('id', '0.5')
            bpawnImgi.classList.add('item')
            bpawnImgi.src = './imges/bPawn.png'
            pawn8.appendChild(bpawnImgi)
        }
        bPawn8()
        /////////////////////////////////////////////////////

        // Лодя Белы
        const wRook = () => {
            const rook = document.querySelector('[data-x="0"][data-y="7"]')
            // rook.setAttribute('draggable', 'true')
            rook.setAttribute('id', '3')
            const rookImg = document.createElement('img')
            rookImg.setAttribute('draggable', 'true')
            rookImg.setAttribute('id', '1')
            rookImg.classList.add('item')
            rookImg.src = './imges/wRook.png'
            rook.appendChild(rookImg)
        }
        wRook()
        // Конь Белы
        const wKnight = () => {
            const rnight = document.querySelector('[data-x="1"][data-y="7"]')
            // rnight.setAttribute('draggable', 'true')
            rnight.setAttribute('id', '3')
            const rnightImg = document.createElement('img')
            rnightImg.setAttribute('draggable', 'true')
            rnightImg.setAttribute('id', '1')
            rnightImg.classList.add('item')
            rnightImg.src = './imges/wKnight.png'
            rnight.appendChild(rnightImg)
        }
        wKnight()
        // Слон  Белы
        const wBishop = () => {
            const bishop = document.querySelector('[data-x="2"][data-y="7"]')
            // bishop.setAttribute('draggable', 'true')
            bishop.setAttribute('id', '3')
            const bishopImg = document.createElement('img')
            bishopImg.setAttribute('draggable', 'true')
            bishopImg.setAttribute('id', '1')
            bishopImg.classList.add('item')
            bishopImg.src = './imges/wBishop.png'
            bishop.appendChild(bishopImg)
        }
        wBishop()
        // Королева  Белы
        const wQueen = () => {
            const queen = document.querySelector('[data-x="3"][data-y="7"]')
            // queen.setAttribute('draggable', 'true')
            queen.setAttribute('id', '3')
            const queenImg = document.createElement('img')
            queenImg.setAttribute('draggable', 'true')
            queenImg.setAttribute('id', '1')
            queenImg.classList.add('item')
            queenImg.src = './imges/wQueen.png'
            queen.appendChild(queenImg)
        }
        wQueen()
        // Король  Белы
        const wKing = () => {
            const king = document.querySelector('[data-x="4"][data-y="7"]')
            // king.setAttribute('draggable', 'true')
            king.setAttribute('id', '3')
            const kingImg = document.createElement('img')
            kingImg.setAttribute('draggable', 'true')
            kingImg.setAttribute('id', '1')
            kingImg.classList.add('item')
            kingImg.src = './imges/wKing.png'
            king.appendChild(kingImg)
        }
        wKing()
        // Слон  Белы
        const wBishop2 = () => {
            const bishop2 = document.querySelector('[data-x="5"][data-y="7"]')
            // bishop2.setAttribute('draggable', 'true')
            bishop2.setAttribute('id', '3')
            const bishop2Img = document.createElement('img')
            bishop2Img.setAttribute('draggable', 'true')
            bishop2Img.setAttribute('id', '1')
            bishop2Img.classList.add('item')
            bishop2Img.src = './imges/wBishop.png'
            bishop2.appendChild(bishop2Img)
        }
        wBishop2()
        // Конь Белы
        const wKnight2 = () => {
            const knight2 = document.querySelector('[data-x="6"][data-y="7"]')
            // knight2.setAttribute('draggable', 'true')
            knight2.setAttribute('id', '3')
            const knight2Img = document.createElement('img')
            knight2Img.setAttribute('draggable', 'true')
            knight2Img.setAttribute('id', '1')
            knight2Img.classList.add('item')
            knight2Img.src = './imges/wKnight.png'
            knight2.appendChild(knight2Img)
        }
        wKnight2()
        // Лодя Белы
        const wRook2 = () => {
            const rook2 = document.querySelector('[data-x="7"][data-y="7"]')
            // rook2.setAttribute('draggable', 'true')
            rook2.setAttribute('id', '3')
            const rook2Img = document.createElement('img')
            rook2Img.setAttribute('draggable', 'true')
            rook2Img.setAttribute('id', '1')
            rook2Img.classList.add('item')
            rook2Img.src = './imges/wRook.png'
            rook2.appendChild(rook2Img)
        }
        wRook2()
        // Пешка Белы
        const wPawn1 = () => {
            const pawn1 = document.querySelector('[data-x="0"][data-y="6"]')
            // pawn1.setAttribute('draggable', 'true')
            const bpawnImgi = document.createElement('img')
            bpawnImgi.setAttribute('draggable', 'true')
            bpawnImgi.setAttribute('id', '1.5')
            bpawnImgi.setAttribute('data-action', 'white')
            bpawnImgi.classList.add('item')
            bpawnImgi.src = './imges/wPawn.png'
            pawn1.appendChild(bpawnImgi)
        }
        wPawn1()
        const wPawn2 = () => {
            const pawn2 = document.querySelector('[data-x="1"][data-y="6"]')
            // pawn2.setAttribute('draggable', 'true')
            const bpawnImgi = document.createElement('img')
            bpawnImgi.setAttribute('draggable', 'true')
            bpawnImgi.setAttribute('id', '1.5')
            bpawnImgi.setAttribute('data-action', 'white')
            bpawnImgi.classList.add('item')
            bpawnImgi.src = './imges/wPawn.png'
            pawn2.appendChild(bpawnImgi)
        }
        wPawn2()
        const wPawn3 = () => {
            const pawn3 = document.querySelector('[data-x="2"][data-y="6"]')
            // pawn3.setAttribute('draggable', 'true')
            const bpawnImgi = document.createElement('img')
            bpawnImgi.setAttribute('draggable', 'true')
            bpawnImgi.setAttribute('id', '1.5')
            bpawnImgi.setAttribute('data-action', 'white')
            bpawnImgi.classList.add('item')
            bpawnImgi.src = './imges/wPawn.png'
            pawn3.appendChild(bpawnImgi)
        }
        wPawn3()
        const wPawn4 = () => {
            const pawn4 = document.querySelector('[data-x="3"][data-y="6"]')
            // pawn4.setAttribute('draggable', 'true')
            const bpawnImgi = document.createElement('img')
            bpawnImgi.setAttribute('draggable', 'true')
            bpawnImgi.setAttribute('id', '1.5')
            bpawnImgi.setAttribute('data-action', 'white')
            bpawnImgi.classList.add('item')
            bpawnImgi.src = './imges/wPawn.png'
            pawn4.appendChild(bpawnImgi)
        }
        wPawn4()
        const wPawn5 = () => {
            const pawn5 = document.querySelector('[data-x="4"][data-y="6"]')
            // pawn5.setAttribute('draggable', 'true')
            const bpawnImgi = document.createElement('img')
            bpawnImgi.setAttribute('draggable', 'true')
            bpawnImgi.setAttribute('id', '1.5')
            bpawnImgi.setAttribute('data-action', 'white')
            bpawnImgi.classList.add('item')
            bpawnImgi.src = './imges/wPawn.png'
            pawn5.appendChild(bpawnImgi)
        }
        wPawn5()
        const wPawn6 = () => {
            const pawn6 = document.querySelector('[data-x="5"][data-y="6"]')
            // pawn6.setAttribute('draggable', 'true')
            const bpawnImgi = document.createElement('img')
            bpawnImgi.setAttribute('draggable', 'true')
            bpawnImgi.setAttribute('id', '1.5')
            bpawnImgi.setAttribute('data-action', 'white')
            bpawnImgi.classList.add('item')
            bpawnImgi.src = './imges/wPawn.png'
            pawn6.appendChild(bpawnImgi)
        }
        wPawn6()
        const wPawn7 = () => {
            const pawn7 = document.querySelector('[data-x="6"][data-y="6"]')
            // pawn7.setAttribute('draggable', 'true')
            const bpawnImgi = document.createElement('img')
            bpawnImgi.setAttribute('draggable', 'true')
            bpawnImgi.setAttribute('id', '1.5')
            bpawnImgi.setAttribute('data-action', 'white')
            bpawnImgi.classList.add('item')
            bpawnImgi.src = './imges/wPawn.png'
            pawn7.appendChild(bpawnImgi)
        }
        wPawn7()
        const wPawn8 = () => {
            const pawn8 = document.querySelector('[data-x="7"][data-y="6"]')
            // pawn8.setAttribute('draggable', 'true')
            const bpawnImgi = document.createElement('img')
            bpawnImgi.setAttribute('draggable', 'true')
            bpawnImgi.setAttribute('id', '1.5')
            bpawnImgi.setAttribute('data-action', 'white')
            bpawnImgi.classList.add('item')
            bpawnImgi.src = './imges/wPawn.png'
            pawn8.appendChild(bpawnImgi)
        }
        wPawn8()
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // не дороботаный  case 'Черные':
        break;
    case 'Черные':
        // Лодя Черные
        const bRooki = () => {
            const rook = document.querySelector('[data-x="0"]')
            rook.setAttribute('draggable', 'true')
            // rook.setAttribute('id', '0')
            const rookImg = document.createElement('img')
            rookImg.classList.add('item')
            rookImg.setAttribute('draggable', 'true')
            rookImg.setAttribute('id', '0')
            rookImg.classList.add('item')
            rookImg.src = './imges/wRook.png'
            rook.appendChild(rookImg)
        }
        bRooki()
        // Конь Черные
        const bKnighti = () => {
            const knight = document.querySelector('[data-x="1"]')
            knight.setAttribute('draggable', 'true')
            // knight.setAttribute('id', 'b0')

            const knightImg = document.createElement('img')
            knightImg.setAttribute('draggable', 'true')
            knightImg.setAttribute('id', '0')
            knightImg.classList.add('item')
            knightImg.src = './imges/wKnight.png'
            knight.appendChild(knightImg)
        }
        bKnighti()
        // Слон  Черные
        const bBishopi = () => {
            const bishop = document.querySelector('[data-x="2"]')
            bishop.setAttribute('draggable', 'true')
            // bishop.setAttribute('id', 'b0')

            const bishopImg = document.createElement('img')
            bishopImg.setAttribute('draggable', 'true')
            bishopImg.setAttribute('id', '0')
            bishopImg.classList.add('item')
            bishopImg.src = './imges/wBishop.png'
            bishop.appendChild(bishopImg)
        }
        bBishopi()
        // Королева  Черные
        const bQueeni = () => {
            const queen = document.querySelector('[data-x="3"]')
            queen.setAttribute('draggable', 'true')
            const queenImg = document.createElement('img')
            queenImg.setAttribute('draggable', 'true')
            queenImg.setAttribute('id', '0')
            queenImg.classList.add('item')
            queenImg.src = './imges/wQueen.png'
            queen.appendChild(queenImg)
        }
        bQueeni()
        // Король Черные
        const bKingi = () => {
            const king = document.querySelector('[data-x="4"]')
            king.setAttribute('draggable', 'true')
            const kingImg = document.createElement('img')
            kingImg.setAttribute('draggable', 'true')
            kingImg.setAttribute('id', '0')
            kingImg.classList.add('item')
            kingImg.src = './imges/wKing.png'
            king.appendChild(kingImg)
        }
        bKingi()
        // Слон  Черные
        const bBishop2i = () => {
            const bishop2 = document.querySelector('[data-x="5"]')
            bishop2.setAttribute('draggable', 'true')
            const bishop2Img = document.createElement('img')
            bishop2Img.setAttribute('draggable', 'true')
            bishop2Img.setAttribute('id', '0')
            bishop2Img.classList.add('item')
            bishop2Img.src = './imges/wBishop.png'
            bishop2.appendChild(bishop2Img)
        }
        bBishop2i()
        // Конь Черные
        const bKnight2i = () => {
            const knight2 = document.querySelector('[data-x="6"]')
            knight2.setAttribute('draggable', 'true')
            const knight2Img = document.createElement('img')
            knight2Img.setAttribute('draggable', 'true')
            knight2Img.setAttribute('id', '0')
            knight2Img.classList.add('item')
            knight2Img.src = './imges/wKnight.png'
            knight2.appendChild(knight2Img)
        }
        bKnight2i()
        // Лодя Черные
        const bRook2i = () => {
            const rook2 = document.querySelector('[data-x="7"]')
            rook2.setAttribute('draggable', 'true')
            const rook2Img = document.createElement('img')
            rook2Img.setAttribute('draggable', 'true')
            rook2Img.setAttribute('id', '0')
            rook2Img.classList.add('item')
            rook2Img.src = './imges/wRook.png'
            rook2.appendChild(rook2Img)
        }
        bRook2i()
        // Пешка Черные

        // console.log(p)
        const bPawn1i = () => {
            const pawn1 = document.querySelector('[data-x="0"][data-y="1"]')
            pawn1.setAttribute('draggable', 'true')
            const bpawnImgi = document.createElement('img')
            bpawnImgi.setAttribute('draggable', 'true')
            bpawnImgi.setAttribute('id', '0')
            bpawnImgi.classList.add('item')
            bpawnImgi.src = './imges/wPawn.png'
            pawn1.appendChild(bpawnImgi)
        }
        bPawn1i()
        const bPawn2i = () => {
            const pawn2 = document.querySelector('[data-x="1"][data-y="1"]')
            pawn2.setAttribute('draggable', 'true')
            const bpawnImgi = document.createElement('img')
            bpawnImgi.setAttribute('draggable', 'true')
            bpawnImgi.setAttribute('id', '0')
            bpawnImgi.classList.add('item')
            bpawnImgi.src = './imges/wPawn.png'
            pawn2.appendChild(bpawnImgi)
        }
        bPawn2i()
        const bPawn3i = () => {
            const pawn3 = document.querySelector('[data-x="2"][data-y="1"]')
            pawn3.setAttribute('draggable', 'true')
            const bpawnImgi = document.createElement('img')
            bpawnImgi.setAttribute('draggable', 'true')
            bpawnImgi.setAttribute('id', '0')
            bpawnImgi.classList.add('item')
            bpawnImgi.src = './imges/wPawn.png'
            pawn3.appendChild(bpawnImgi)
        }
        bPawn3i()
        const bPawn4i = () => {
            const pawn4 = document.querySelector('[data-x="3"][data-y="1"]')
            pawn4.setAttribute('draggable', 'true')
            const bpawnImgi = document.createElement('img')
            bpawnImgi.setAttribute('draggable', 'true')
            bpawnImgi.setAttribute('id', '0')
            bpawnImgi.classList.add('item')
            bpawnImgi.src = './imges/wPawn.png'
            pawn4.appendChild(bpawnImgi)
        }
        bPawn4i()
        const bPawn5i = () => {
            const pawn5 = document.querySelector('[data-x="4"][data-y="1"]')
            pawn5.setAttribute('draggable', 'true')
            const bpawnImgi = document.createElement('img')
            bpawnImgi.setAttribute('draggable', 'true')
            bpawnImgi.setAttribute('id', '0')
            bpawnImgi.classList.add('item')
            bpawnImgi.src = './imges/wPawn.png'
            pawn5.appendChild(bpawnImgi)
        }
        bPawn5i()
        const bPawn6i = () => {
            const pawn6 = document.querySelector('[data-x="5"][data-y="1"]')
            pawn6.setAttribute('draggable', 'true')
            const bpawnImgi = document.createElement('img')
            bpawnImgi.setAttribute('draggable', 'true')
            bpawnImgi.setAttribute('id', '0')
            bpawnImgi.classList.add('item')
            bpawnImgi.src = './imges/wPawn.png'
            pawn6.appendChild(bpawnImgi)
        }
        bPawn6i()
        const bPawn7i = () => {
            const pawn7 = document.querySelector('[data-x="6"][data-y="1"]')
            pawn7.setAttribute('draggable', 'true')
            const bpawnImgi = document.createElement('img')
            bpawnImgi.setAttribute('draggable', 'true')
            bpawnImgi.setAttribute('id', '0')
            bpawnImgi.classList.add('item')
            bpawnImgi.src = './imges/wPawn.png'
            pawn7.appendChild(bpawnImgi)
        }
        bPawn7i()
        const bPawn8i = () => {
            const pawn8 = document.querySelector('[data-x="7"][data-y="1"]')
            pawn8.setAttribute('draggable', 'true')
            const bpawnImgi = document.createElement('img')
            bpawnImgi.setAttribute('draggable', 'true')
            bpawnImgi.setAttribute('id', '0')
            bpawnImgi.classList.add('item')
            bpawnImgi.src = './imges/wPawn.png'
            pawn8.appendChild(bpawnImgi)
        }
        bPawn8i()
        /////////////////////////////////////////////////////////////////////////

        // Лодя Белы
        const wRooki = () => {
            const rook = document.querySelector('[data-x="0"][data-y="7"]')
            rook.setAttribute('draggable', 'true')
            const rookImg = document.createElement('img')
            rookImg.setAttribute('draggable', 'true')
            rookImg.setAttribute('id', '1')
            rookImg.classList.add('item')
            rookImg.src = './imges/bRook.png'
            rook.appendChild(rookImg)
        }
        wRooki()
        // Конь Белы
        const wKnighti = () => {
            const rnight = document.querySelector('[data-x="1"][data-y="7"]')
            rnight.setAttribute('draggable', 'true')

            const rnightImg = document.createElement('img')
            rnightImg.setAttribute('draggable', 'true')
            rnightImg.setAttribute('id', '1')
            rnightImg.classList.add('item')
            rnightImg.src = './imges/bKnight.png'
            rnight.appendChild(rnightImg)
        }
        wKnighti()
        // Слон  Белы
        const wBishopi = () => {
            const bishop = document.querySelector('[data-x="2"][data-y="7"]')
            bishop.setAttribute('draggable', 'true')

            const bishopImg = document.createElement('img')
            bishopImg.setAttribute('draggable', 'true')
            bishopImg.setAttribute('id', '1')
            bishopImg.classList.add('item')
            bishopImg.src = './imges/bBishop.png'
            bishop.appendChild(bishopImg)
        }
        wBishopi()
        // Королева  Белы
        const wQueeni = () => {
            const queen = document.querySelector('[data-x="3"][data-y="7"]')
            queen.setAttribute('draggable', 'true')

            const queenImg = document.createElement('img')
            queenImg.setAttribute('draggable', 'true')
            queenImg.setAttribute('id', '1')
            queenImg.classList.add('item')
            queenImg.src = './imges/bQueen.png'
            queen.appendChild(queenImg)
        }
        wQueeni()
        // Король  Белы
        const wKingi = () => {
            const king = document.querySelector('[data-x="4"][data-y="7"]')
            king.setAttribute('draggable', 'true')

            const kingImg = document.createElement('img')
            kingImg.setAttribute('draggable', 'true')
            kingImg.setAttribute('id', '1')
            kingImg.classList.add('item')
            kingImg.src = './imges/bKing.png'
            king.appendChild(kingImg)
        }
        wKingi()
        // Слон  Белы
        const wBishop2i = () => {
            const bishop2 = document.querySelector('[data-x="5"][data-y="7"]')
            bishop2.setAttribute('draggable', 'true')

            const bishop2Img = document.createElement('img')
            bishop2Img.setAttribute('draggable', 'true')
            bishop2Img.setAttribute('id', '1')
            bishop2Img.classList.add('item')
            bishop2Img.src = './imges/bBishop.png'
            bishop2.appendChild(bishop2Img)
        }
        wBishop2i()
        // Конь Белы
        const wKnight2i = () => {
            const knight2 = document.querySelector('[data-x="6"][data-y="7"]')
            knight2.setAttribute('draggable', 'true')

            const knight2Img = document.createElement('img')
            knight2Img.setAttribute('draggable', 'true')
            knight2Img.setAttribute('id', '1')
            knight2Img.classList.add('item')
            knight2Img.src = './imges/bKnight.png'
            knight2.appendChild(knight2Img)
        }
        wKnight2i()
        // Лодя Белы
        const wRook2i = () => {
            const rook2 = document.querySelector('[data-x="7"][data-y="7"]')
            rook2.setAttribute('draggable', 'true')

            const rook2Img = document.createElement('img')
            rook2Img.setAttribute('draggable', 'true')
            rook2Img.setAttribute('id', '1')
            rook2Img.classList.add('item')
            rook2Img.src = './imges/bRook.png'
            rook2.appendChild(rook2Img)
        }
        wRook2i()
        // Пешка Белы
        const wPawn1i = () => {
            const pawn1 = document.querySelector('[data-x="0"][data-y="6"]')
            pawn1.setAttribute('draggable', 'true')
            const bpawnImgi = document.createElement('img')
            bpawnImgi.setAttribute('draggable', 'true')
            bpawnImgi.setAttribute('id', '1')
            bpawnImgi.classList.add('item')
            bpawnImgi.src = './imges/bPawn.png'
            pawn1.appendChild(bpawnImgi)
        }
        wPawn1i()
        const wPawn2i = () => {
            const pawn2 = document.querySelector('[data-x="1"][data-y="6"]')
            pawn2.setAttribute('draggable', 'true')
            const bpawnImgi = document.createElement('img')
            bpawnImgi.setAttribute('draggable', 'true')
            bpawnImgi.setAttribute('id', '1')
            bpawnImgi.classList.add('item')
            bpawnImgi.src = './imges/bPawn.png'
            pawn2.appendChild(bpawnImgi)
        }
        wPawn2i()
        const wPawn3i = () => {
            const pawn3 = document.querySelector('[data-x="2"][data-y="6"]')
            pawn3.setAttribute('draggable', 'true')
            const bpawnImgi = document.createElement('img')
            bpawnImgi.setAttribute('draggable', 'true')
            bpawnImgi.setAttribute('id', '1')
            bpawnImgi.classList.add('item')
            bpawnImgi.src = './imges/bPawn.png'
            pawn3.appendChild(bpawnImgi)
        }
        wPawn3i()
        const wPawn4i = () => {
            const pawn4 = document.querySelector('[data-x="3"][data-y="6"]')
            pawn4.setAttribute('draggable', 'true')
            const bpawnImgi = document.createElement('img')
            bpawnImgi.setAttribute('draggable', 'true')
            bpawnImgi.setAttribute('id', '1')
            bpawnImgi.classList.add('item')
            bpawnImgi.src = './imges/bPawn.png'
            pawn4.appendChild(bpawnImgi)
        }
        wPawn4i()
        const wPawn5i = () => {
            const pawn5 = document.querySelector('[data-x="4"][data-y="6"]')
            pawn5.setAttribute('draggable', 'true')
            const bpawnImgi = document.createElement('img')
            bpawnImgi.setAttribute('draggable', 'true')
            bpawnImgi.setAttribute('id', '1')
            bpawnImgi.classList.add('item')
            bpawnImgi.src = './imges/bPawn.png'
            pawn5.appendChild(bpawnImgi)
        }
        wPawn5i()
        const wPawn6i = () => {
            const pawn6 = document.querySelector('[data-x="5"][data-y="6"]')
            pawn6.setAttribute('draggable', 'true')
            const bpawnImgi = document.createElement('img')
            bpawnImgi.setAttribute('draggable', 'true')
            bpawnImgi.setAttribute('id', '1')
            bpawnImgi.classList.add('item')
            bpawnImgi.src = './imges/bPawn.png'
            pawn6.appendChild(bpawnImgi)
        }
        wPawn6i()
        const wPawn7i = () => {
            const pawn7 = document.querySelector('[data-x="6"][data-y="6"]')
            pawn7.setAttribute('draggable', 'true')
            const bpawnImgi = document.createElement('img')
            bpawnImgi.setAttribute('draggable', 'true')
            bpawnImgi.setAttribute('id', '1')
            bpawnImgi.classList.add('item')
            bpawnImgi.src = './imges/bPawn.png'
            pawn7.appendChild(bpawnImgi)
        }
        wPawn7i()
        const wPawn8i = () => {
            const pawn8 = document.querySelector('[data-x="7"][data-y="6"]')
            pawn8.setAttribute('draggable', 'true')
            const bpawnImgi = document.createElement('img')
            bpawnImgi.setAttribute('draggable', 'true')
            bpawnImgi.setAttribute('id', '1')
            bpawnImgi.classList.add('item')
            bpawnImgi.src = './imges/bPawn.png'
            pawn8.appendChild(bpawnImgi)
        }
        wPawn8i()
}








