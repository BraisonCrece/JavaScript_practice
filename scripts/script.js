// Selectores
const $d = document,
    $palo = $d.querySelector("#palo"),
    $numero = $d.querySelector("#numero"),
    $btnAddCarta = $d.querySelector("#addCarta"),
    $btnDelCarta = $d.querySelector("#delCarta"),
    $btnOperar = $d.querySelector("#btnOperar"),
    $optInsert = $d.querySelector("input[value=insertarCarta]"),
    $nCartas = $d.querySelector("#ncartas"),
    $figuras = $d.querySelector("#figuras")

// Funcións
function addCarta(after=true) {
    if($d.querySelector(`img[src='imagenes/${$palo.value}${$numero.value}.png']`))
        alert("La carta ya está en la mesa")
    else{
        carta = $d.createElement("img")
        carta.src = `imagenes/${$palo.value}${$numero.value}.png`
        if(after) 
            $figuras.append(carta)
        else {
            nuevoNodo = $figuras.childNodes[$nCartas.value - 1];
            $figuras.insertBefore(carta, nuevoNodo);
        }
        option = $d.createElement("option")
        option.value = numCartasActivas()
        option.textContent = numCartasActivas()
        $nCartas.append(option)
    }
}

function delCarta() {
    if(carta = $d.querySelector(`img[src='imagenes/${$palo.value}${$numero.value}.png']`)) {
        $figuras.removeChild(carta)
        $nCartas.removeChild($nCartas.lastChild)
    } else
        alert("Esa carta no está en juego ahora!")
}

function numCartasActivas() {
    return contador = $figuras.childNodes.length
}

// Event Listeners
$btnAddCarta.addEventListener("click", (e)=> {
    e.preventDefault()
    addCarta()
})

$btnDelCarta.addEventListener("click", (e)=> {
    e.preventDefault()
    delCarta()
})

$btnOperar.addEventListener("click", (e) => {
    e.preventDefault()
    accion = $optInsert.checked ? "insertar" : "sustituir"
    
    carta = $d.createElement("img")
    carta.src = `imagenes/${$palo.value}${$numero.value}.png`
    
    switch(accion) {
        case "insertar":
            addCarta(after=false)
            break
        case "sustituir":
            $figuras.childNodes[$nCartas.value - 1].replaceWith(carta)
            break
    }
})