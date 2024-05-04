// @ts-nocheck
window.onload = function () {
        const prevbtn = document.querySelector('.voltarbtn')
        const nextbtn = document.querySelector(".proximobtn")
        let itens = document.querySelectorAll('.iten')
        let index = 0
        nextbtn.addEventListener('click', () => {
                index++
                itens.forEach((iten) => {
                        iten.classList.remove('show')   
                        if (index === itens.length ) {
                                index = 0
                        } 
                        itens[ index ].classList.add("show")
                })
        })

        prevbtn.addEventListener('click', () => {
                itens.forEach((iten) => {
                        iten.classList.remove('show')            
                })
                if (index <= 0) {
                        index = itens.length - 1
                } 
                else {
                      index--  
                }
                
                itens[index].classList.add("show")   
        })

}