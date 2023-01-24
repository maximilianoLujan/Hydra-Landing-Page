import slider from "./slider.js"
import sliderr from "./sliderr.js"
const d = document

//Selecting the elements to do the products slider
const $svgizqproducts = d.querySelector('.svgizqproducts'),
    $pathizqproducts = d.querySelector('.pathizqproducts'),
    $svgderproducts = d.querySelector('.svgderproducts'),
    $pathderproducts = d.querySelector('.pathderproducts'),
    $imagenProductsOne = d.querySelector('.imagenProductsOne'),
    $imagenProductsTwo = d.querySelector('.imagenProductsTwo'),
    $imagenProductsThree = d.querySelector('.imagenProductsThree'),
    $imagenProductsFour = d.querySelector('.imagenProductsFour')
//Selecting the elements to do the info slider
const $svgIzq = d.querySelector(".svgizq"),
    $pathIzq = d.querySelector(".pathizq"),
    $svgDer = d.querySelector(".svgder"),
    $pathDer = d.querySelector(".pathder"),
    $mail = d.querySelector(".mail"),
    $phone = d.querySelector(".phone"),
    $address = d.querySelector(".address")

const elementsProducts = [$imagenProductsOne,$imagenProductsTwo,$imagenProductsThree,$imagenProductsFour]
const elementsInfo = [$address,$phone,$mail]

document.addEventListener("DOMContentLoaded",() => {
    //slider()
    sliderr($svgizqproducts,$pathizqproducts,$svgderproducts,$pathderproducts,elementsProducts)
    sliderr($svgIzq,$pathIzq,$svgDer,$pathDer,elementsInfo)
})