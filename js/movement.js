//  Перетаскивания
// https://www.youtube.com/watch?v=gmFHj_tg6g8&t=216s
/*
const item = document.querySelector('.item')
// const item = Array.from(document.querySelectorAll('.item'))
const boxe = Array.from(document.querySelectorAll(".block"))
item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)
boxe.forEach((box) => {
    box.addEventListener('dragover', dragover);
    box.addEventListener('drop', dragdrop);
});
function dragstart(event) {
    event.target.classList.add('hold')
    setTimeout(() => event.target.classList.add('hide'), 0)
}
function dragend(e) {
    e.target.classList.remove('hold', 'hide')
}
function dragover(e) {
    e.preventDefault()
}
function dragdrop(e) {
    e.target.append(item)
}
console.log(event.target)

*/
var modal = document.getElementById('myModal');


// var btn = document.getElementById("myBtn");


var span = document.getElementsByClassName("close")[0];

var btn_w1 = document.querySelector('.btn__w1')
var btn_w2 = document.querySelector('.btn__w2')
var btn_w3 = document.querySelector('.btn__w3')
var btn_w4 = document.querySelector('.btn__w4')

var btn_b1 = document.querySelector('.btn__b1')
var btn_b2 = document.querySelector('.btn__b2')
var btn_b3 = document.querySelector('.btn__b3')
var btn_b4 = document.querySelector('.btn__b4')

const dragItem = document.querySelectorAll('.item')
const dragZones = document.querySelectorAll('.block')

let draggedItem = null
let drappedItem = null








dragItem.forEach(dragItem => {
    dragItem.addEventListener('dragstart', handlerDragstart)
    dragItem.addEventListener('dragend', handlerDrag)
    dragItem.addEventListener('drag', handlerDrad)

    dragItem.addEventListener('dragenter', () => {
        if (draggedItem !== drappedItem) {
            drappedItem = dragItem
        }
    })

    dragItem.addEventListener('dragleave', () => {
        drappedItem = null

    })



})

dragZones.forEach(dragZones => {
    dragZones.addEventListener('dragenter', handlerDradenter)
    dragZones.addEventListener('dragleave', handlerDradleave)
    dragZones.addEventListener('dragover', handlerDradover)
    dragZones.addEventListener('drop', handlerDrop)
})
// const fffffffffff = () => {
//     window.addEventListener('click', function (event) {
//         let x = event.target.dataset.x;
//         let y = event.target.dataset.y;

//         console.log(`${x} ${y}`)
//         console.log(event.target)

//         const item_img = document.querySelector('.item')

//         if (+x + 2 < 8 && +y + 1 < 8) {
//             document.querySelector(`.block[data-x="${+x + 2}"][data-y="${+y + 1}"]`).classList.add('active')
//         }
//         if (+x + 2 < 8 && +y - 1 >= 0) {
//             document.querySelector(`.block[data-x="${+x + 2}"][data-y="${+y - 1}"]`).classList.add('active')
//         }
//         if (+x - 2 >= 0 && +y + 1 < 8) {
//             document.querySelector(`.block[data-x="${+x - 2}"][data-y="${+y + 1}"]`).classList.add('active')
//         }
//         if (+x - 2 >= 0 && +y - 1 >= 0) {
//             document.querySelector(`.block[data-x="${+x - 2}"][data-y="${+y - 1}"]`).classList.add('active')
//         }
//         if (+x + 1 < 8 && +y - 2 >= 0) {
//             document.querySelector(`.block[data-x="${+x + 1}"][data-y="${+y - 2}"]`).classList.add('active')
//         }
//         if (+x - 1 >= 0 && +y - 2 >= 0) {
//             document.querySelector(`.block[data-x="${+x - 1}"][data-y="${+y - 2}"]`).classList.add('active')
//         }
//         if (+x + 1 < 8 && +y + 2 < 8) {
//             document.querySelector(`.block[data-x="${+x + 1}"][data-y="${+y + 2}"]`).classList.add('active')
//         }
//         if (+x - 1 >= 0 && +y + 2 < 8) {
//             document.querySelector(`.block[data-x="${+x - 1}"][data-y="${+y + 2}"]`).classList.add('active')
//         }


//     });
// }

function handlerDragstart(event) {
    this.classList.add('item-activ')
    draggedItem = this

    // if (draggedItem) {
    //     // console.log(event.target.dataset)

    //     console.log(drappedItem)
    //     let blockItem = document.querySelector('.block')

    //     console.log(blockItem)



    // } else {
    //     console.log('-')
    // }













    // console.log(this)
}
function handlerDrag(event) {
    this.classList.remove('item-activ')
    if (drappedItem) {
        if (drappedItem.parentElement === draggedItem.parentElement) {
            const children = Array.from(drappedItem.parentElement.children);
            const draggedIndex = children.indexOf(draggedItem)
            const drappedIndex = children.indexOf(drappedItem)
            if (draggedItem > drappedItem) {




            } else {
                draggedItem.parentElement.insertBefore(
                    draggedItem,
                    drappedIndex.nextElementSibling
                );
                if (draggedItem === drappedItem) {
                    // console.log("+")
                } else {
                    let name = drappedItem.id;
                    let names = draggedItem.id;
                    // console.log(name)
                    // console.log(names)
                    if (name == "1.5" || names == "0.5" || names == "0") {
                        const Player = document.createElement('img')
                        Player.style['width'] = '30px';
                        Player.src = `${drappedItem.src}`
                        const Playeritem = document.querySelector('#Player_2')
                        Playeritem.append(Player)
                        drappedItem.remove()
                    } else {
                        const Player = document.createElement('img')
                        Player.style['width'] = '30px';
                        Player.src = `${drappedItem.src}`
                        const Playeritem = document.querySelector('#Player_1')
                        Playeritem.append(Player)
                        drappedItem.remove()
                    }
                }
            }
        }
    } else {
    }
    draggedItem = null

}
function handlerDrad(event) {
}
function handlerDradenter(event) {
    event.preventDefault()
    this.classList.add('square-activ')


}
function handlerDradleave(event) {
    this.classList.remove('square-activ')

}
function handlerDradover(event) {
    event.preventDefault()
}




// window.addEventListener('click', (event) => {

//     console.log(event.target)

// })
const item_img = document.querySelector('.item')



function handlerDrop(event) {
    this.classList.remove('square-activ')
    try {
        if (drappedItem.id === draggedItem.id) {
            // console.log('+')
            Swal.fire({
                title: 'Ой',
                text: 'Подумай Лучше',
                imageUrl: './imges/jan.jpg',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
            })
        } else {
            // для того чтобы бились
            this.append(draggedItem)
        }
    } catch {

















        this.append(draggedItem)   //  перетаскивания 
    }
    // для вызова королевы
    draggedZone = this
    if (draggedZone.id && draggedItem.id === '0.5' || draggedZone.id && draggedItem.id === '1.5') {
        // console.log("+")
        setTimeout(() => {
            modal.style.display = "block";
        }, 500)
        span.onclick = function () {
            modal.style.display = "none";
        }
        btn_w1.onclick = function kll(event) {
            // console.log(event.target.src)
            let vibronay_figura = event.target.src.substr(event.target.src.lastIndexOf("./imges/") + 1, event.target.src.length);
            // console.log(vibronay_figura)
            let element_zon = draggedZone.querySelector('.item')
            // console.log(element_zon.src)
            element_zon.src = `${vibronay_figura}`
            element_zon.id = '1'

            // console.log(element_zon.id)




            // console.log(element_zon.id)
            if (event.target == modal) {
                modal.style.display = "none";





            }
            // console.log(draggedZone)
        }
        btn_w2.onclick = function kll(event) {
            // console.log(event.target.src)
            let vibronay_figura = event.target.src.substr(event.target.src.lastIndexOf("./imges/") + 1, event.target.src.length);
            // console.log(vibronay_figura)
            let element_zon = draggedZone.querySelector('.item')
            // console.log(element_zon.src)
            element_zon.src = `${vibronay_figura}`
            element_zon.id = '1'

            console.log(element_zon.id)




            console.log(element_zon.id)
            if (event.target == modal) {
                modal.style.display = "none";





            }
            // console.log(draggedZone)
        }
        btn_w3.onclick = function kll(event) {
            // console.log(event.target.src)
            let vibronay_figura = event.target.src.substr(event.target.src.lastIndexOf("./imges/") + 1, event.target.src.length);
            // console.log(vibronay_figura)
            let element_zon = draggedZone.querySelector('.item')
            // console.log(element_zon.src)
            element_zon.src = `${vibronay_figura}`
            element_zon.id = '1'

            console.log(element_zon.id)




            console.log(element_zon.id)
            if (event.target == modal) {
                modal.style.display = "none";





            }
            // console.log(draggedZone)
        }
        btn_w4.onclick = function kll(event) {
            // console.log(event.target.src)
            let vibronay_figura = event.target.src.substr(event.target.src.lastIndexOf("./imges/") + 1, event.target.src.length);
            // console.log(vibronay_figura)
            let element_zon = draggedZone.querySelector('.item')
            // console.log(element_zon.src)
            element_zon.src = `${vibronay_figura}`
            element_zon.id = '1'

            console.log(element_zon.id)




            console.log(element_zon.id)
            if (event.target == modal) {
                modal.style.display = "none";





            }
            // console.log(draggedZone)
        }


        btn_b1.onclick = function kll(event) {
            // console.log(event.target.src)
            let vibronay_figura = event.target.src.substr(event.target.src.lastIndexOf("./imges/") + 1, event.target.src.length);
            // console.log(vibronay_figura)
            let element_zon = draggedZone.querySelector('.item')
            // console.log(element_zon.src)
            element_zon.src = `${vibronay_figura}`
            element_zon.id = '0'

            console.log(element_zon.id)




            console.log(element_zon.id)
            if (event.target == modal) {
                modal.style.display = "none";





            }
            // console.log(draggedZone)
        }
        btn_b2.onclick = function kll(event) {
            // console.log(event.target.src)
            let vibronay_figura = event.target.src.substr(event.target.src.lastIndexOf("./imges/") + 1, event.target.src.length);
            // console.log(vibronay_figura)
            let element_zon = draggedZone.querySelector('.item')
            // console.log(element_zon.src)
            element_zon.src = `${vibronay_figura}`
            element_zon.id = '0'

            console.log(element_zon.id)




            console.log(element_zon.id)
            if (event.target == modal) {
                modal.style.display = "none";





            }
            // console.log(draggedZone)
        }
        btn_b3.onclick = function kll(event) {
            // console.log(event.target.src)
            let vibronay_figura = event.target.src.substr(event.target.src.lastIndexOf("./imges/") + 1, event.target.src.length);
            // console.log(vibronay_figura)
            let element_zon = draggedZone.querySelector('.item')
            // console.log(element_zon.src)
            element_zon.src = `${vibronay_figura}`
            element_zon.id = '0'

            console.log(element_zon.id)




            console.log(element_zon.id)
            if (event.target == modal) {
                modal.style.display = "none";





            }
            // console.log(draggedZone)
        }
        btn_b4.onclick = function kll(event) {
            // console.log(event.target.src)
            let vibronay_figura = event.target.src.substr(event.target.src.lastIndexOf("./imges/") + 1, event.target.src.length);
            // console.log(vibronay_figura)
            let element_zon = draggedZone.querySelector('.item')
            // console.log(element_zon.src)
            element_zon.src = `${vibronay_figura}`
            element_zon.id = '0'

            console.log(element_zon.id)




            console.log(element_zon.id)
            if (event.target == modal) {
                modal.style.display = "none";





            }
            // console.log(draggedZone)
        }
    }
    //  else {
    // console.log("-")
    // }
}


// const item_img = document.querySelector('.item')


// window.addEventListener('click', function (event) {
//     let x = event.target.dataset.x;
//     let y = event.target.dataset.y;

//     console.log(`${x} ${y}`)
//     console.log(event.target)

//     if (event.target.dataset.x && event.target.dataset.y) {
//         console.log(item_img)

//     }
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


// window.addEventListener('click', function (event) {




//     let x = event.target.dataset.x;
//     let y = event.target.dataset.y;

//     // console.log(document.querySelector(event.target.dataset.x))


//     console.log(`${x} ${y}`)

//     // const hhh = document.querySelector('.block')
//     console.log(event.target.src)



//     if (true) {




//         if (+x + 2 < 8 && +y + 1 < 8) {
//             document.querySelector(`.block[data-x="${+x + 2}"][data-y="${+y + 1}"]`).classList.add('active')
//         }
//         if (+x + 2 < 8 && +y - 1 >= 0) {
//             document.querySelector(`.block[data-x="${+x + 2}"][data-y="${+y - 1}"]`).classList.add('active')
//         }
//         if (+x - 2 >= 0 && +y + 1 < 8) {
//             document.querySelector(`.block[data-x="${+x - 2}"][data-y="${+y + 1}"]`).classList.add('active')
//         }
//         if (+x - 2 >= 0 && +y - 1 >= 0) {
//             document.querySelector(`.block[data-x="${+x - 2}"][data-y="${+y - 1}"]`).classList.add('active')
//         }
//         if (+x + 1 < 8 && +y - 2 >= 0) {
//             document.querySelector(`.block[data-x="${+x + 1}"][data-y="${+y - 2}"]`).classList.add('active')
//         }
//         if (+x - 1 >= 0 && +y - 2 >= 0) {
//             document.querySelector(`.block[data-x="${+x - 1}"][data-y="${+y - 2}"]`).classList.add('active')
//         }
//         if (+x + 1 < 8 && +y + 2 < 8) {
//             document.querySelector(`.block[data-x="${+x + 1}"][data-y="${+y + 2}"]`).classList.add('active')
//         }
//         if (+x - 1 >= 0 && +y + 2 < 8) {
//             document.querySelector(`.block[data-x="${+x - 1}"][data-y="${+y + 2}"]`).classList.add('active')
//         }
//     } else {
//         console.log("-")
//     }
// })
// window.addEventListener('click', (event) => {





//     const ittttteteee = event.target
//     // console.log(ittttteteee.src)
//     if (ittttteteee.src) {
//         // console.log("+")
//         // if (x === y) {
//         //     document.querySelector(`.block[data-x="${2}"][data-y="${4}"]`).classList.add('active')
//         //     document.querySelector(`.block[data-x="${2}"][data-y="${5}"]`).classList.add('active')
//         // }
//         const items = document.querySelectorAll('.block')

//         const firstItem = items[0]

//         console.log(firstItem)
//         // console.log(`${x} ${y}`)
//         // console.log(event)

//         let x = event.target.dataset.x;
//         let y = event.target.dataset.y;

//         console.log(`${x} ${y}`)
//         // console.log(event.target)




//         if (+x + 2 < 8 && +y + 1 < 8) {
//             document.querySelector(`.block[data-x="${+x + 2}"][data-y="${+y + 1}"]`).classList.add('active')
//         }
//         if (+x + 2 < 8 && +y - 1 >= 0) {
//             document.querySelector(`.block[data-x="${+x + 2}"][data-y="${+y - 1}"]`).classList.add('active')
//         }
//         if (+x - 2 >= 0 && +y + 1 < 8) {
//             document.querySelector(`.block[data-x="${+x - 2}"][data-y="${+y + 1}"]`).classList.add('active')
//         }
//         if (+x - 2 >= 0 && +y - 1 >= 0) {
//             document.querySelector(`.block[data-x="${+x - 2}"][data-y="${+y - 1}"]`).classList.add('active')
//         }
//         if (+x + 1 < 8 && +y - 2 >= 0) {
//             document.querySelector(`.block[data-x="${+x + 1}"][data-y="${+y - 2}"]`).classList.add('active')
//         }
//         if (+x - 1 >= 0 && +y - 2 >= 0) {
//             document.querySelector(`.block[data-x="${+x - 1}"][data-y="${+y - 2}"]`).classList.add('active')
//         }
//         if (+x + 1 < 8 && +y + 2 < 8) {
//             document.querySelector(`.block[data-x="${+x + 1}"][data-y="${+y + 2}"]`).classList.add('active')
//         }
//         if (+x - 1 >= 0 && +y + 2 < 8) {
//             document.querySelector(`.block[data-x="${+x - 1}"][data-y="${+y + 2}"]`).classList.add('active')
//         }





//     } else {
//         console.log("-")
//     }
// })

/////////////////////////////////////////////////////////////////////////////////////////
// const block = document.querySelector('.block ')
// console.log(block)
// window.addEventListener('click', function (event) {


//     const images = document.querySelectorAll('img');
//     if (images.length > 0) {
//         console.log(`Найдено ${images.length} тега img на странице`);
//     } else {
//         console.log('Тег img не найден на странице');
//     }
    /////////////////////////////////////////////////////////////////////////////////////////



    // let x = event.target.dataset.x;
    // let y = event.target.dataset.y;

    // // console.log(`${x} ${y}`)
    // console.log(event.target)

    // const item_img = document.querySelector('.item')

    // if (+x + 2 < 8 && +y + 1 < 8) {
    //     document.querySelector(`.block[data-x="${+x + 2}"][data-y="${+y + 1}"]`).classList.add('active')
    // }
    // if (+x + 2 < 8 && +y - 1 >= 0) {
    //     document.querySelector(`.block[data-x="${+x + 2}"][data-y="${+y - 1}"]`).classList.add('active')
    // }
    // if (+x - 2 >= 0 && +y + 1 < 8) {
    //     document.querySelector(`.block[data-x="${+x - 2}"][data-y="${+y + 1}"]`).classList.add('active')
    // }
    // if (+x - 2 >= 0 && +y - 1 >= 0) {
    //     document.querySelector(`.block[data-x="${+x - 2}"][data-y="${+y - 1}"]`).classList.add('active')
    // }
    // if (+x + 1 < 8 && +y - 2 >= 0) {
    //     document.querySelector(`.block[data-x="${+x + 1}"][data-y="${+y - 2}"]`).classList.add('active')
    // }
    // if (+x - 1 >= 0 && +y - 2 >= 0) {
    //     document.querySelector(`.block[data-x="${+x - 1}"][data-y="${+y - 2}"]`).classList.add('active')
    // }
    // if (+x + 1 < 8 && +y + 2 < 8) {
    //     document.querySelector(`.block[data-x="${+x + 1}"][data-y="${+y + 2}"]`).classList.add('active')
    // }
    // if (+x - 1 >= 0 && +y + 2 < 8) {
    //     document.querySelector(`.block[data-x="${+x - 1}"][data-y="${+y + 2}"]`).classList.add('active')
    // }


// });