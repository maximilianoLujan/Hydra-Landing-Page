const d = document,
    $svgIzq = d.querySelector(".svgizq"),
    $pathIzq = d.querySelector(".pathizq"),
    $svgDer = d.querySelector(".svgder"),
    $pathDer = d.querySelector(".pathder"),
    $mail = d.querySelector(".mail"),
    $phone = d.querySelector(".phone"),
    $address = d.querySelector(".address")

let index = 1,
    previous = 0

export default function slider(){
    
    d.addEventListener("click", (e) => {
        if (e.target == $svgIzq || e.target == $pathIzq){
            if (index == 1){
                index = 3
                previous = 1
            } else {
                previous = index
                index--
            }
            cargarComponente(index,previous)
        } 
        if (e.target == $svgDer || e.target == $pathDer){
            if (index == 3){
                index = 1
                previous = 3
            } else {
                previous = index
                index++
            }
            cargarComponente(index,previous)
        } 
    })
}


function cargarComponente(id,prev){
    console.log('Estoy en: ',id)
    console.log('El anterior fue: ',prev)
    if (id == 1 && prev == 3){
        $mail.classList.toggle('hidden')
        $mail.classList.toggle('flex')
        $address.classList.toggle('hidden')
    }
    if (id == 1 && prev == 2){
        $address.classList.toggle('hidden')
        $phone.classList.toggle('hidden')
        $phone.classList.toggle('flex')
    }
    if (id == 2 && prev == 3){
        $mail.classList.toggle('hidden')
        $mail.classList.toggle('flex')
        $phone.classList.toggle('hidden')
        $phone.classList.toggle('flex')
    }
    if (id == 2 && prev == 1){
        $address.classList.toggle('hidden')
        $phone.classList.toggle('hidden')
        $phone.classList.toggle('flex')
    }
    if (id == 3 && prev == 2){
        $phone.classList.toggle('hidden')
        $phone.classList.toggle('flex')
        $mail.classList.toggle('hidden')
        $mail.classList.toggle('flex')
    }
    if (id == 3 && prev == 1){
        $address.classList.toggle('hidden')
        $mail.classList.toggle('hidden')
        $mail.classList.toggle('flex')
    }
}