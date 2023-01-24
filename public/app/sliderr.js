export default function sliderr($izqSvg,$izqPath,$derSvg,$derPath,elements){
    let aux = 1,
        index = 1,
        prev = 0



    const myElements = elements.map(element => {
        const newElement = {id:aux,element:element}
        aux +=1
        return newElement
    })

    console.log(myElements)

    document.addEventListener("click", (e) => {
        if (e.target == $izqSvg || e.target == $izqPath){
            if (index == 1){
                index = myElements.length
                prev = 1
            } else {
                prev = index
                index = index - 1
            }
            cargarComponente(index,prev)
        }
        if (e.target == $derSvg || e.target == $derPath){
            if (index == (myElements.length)){
                index = 1
                prev = myElements.length
            } else{
                prev = index
                index = index + 1
            }
            cargarComponente(index,prev)
        }
    })    
    function cargarComponente(id,prev){
        myElements.forEach(element => {
            if (element.id == id){
                const $showElement = element.element
                console.log($showElement)
                $showElement.classList.toggle('hidden')
                $showElement.classList.toggle('flex')
            }
            if (element.id == prev){
                const $hideElement = element.element
                console.log($hideElement)
                $hideElement.classList.toggle('hidden')
                $hideElement.classList.toggle('flex')
            }
        });
    }   
}

