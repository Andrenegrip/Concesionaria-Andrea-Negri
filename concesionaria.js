const autos = require("./autos");

const personas = require("./personas")

const concesionaria = {
   autos: autos,
   personas: personas,
   buscarAuto : function(patente){
      for(let i = 0; i < this.autos.length; i++){
         if (autos[i].patente === patente){
            return  autos[i]
         }
         
      }
      return null
   },
   venderAuto: function(patente){
    {
        let resultado = this.buscarAuto(patente);
         if (resultado != null){
         resultado.vendido = true
         return resultado
        } else {
            return resultado
        }
    }
},
autosParaLaVenta : function(auto){
    let noVendidos = this.autos
    let filtrados = noVendidos.filter (function(noVendidos){
        return (noVendidos.vendido === false)
    })
   return filtrados
}, 
autosNuevos: function(auto){
    let autos0km = this.autosParaLaVenta()
    let nuevos = autos0km.filter (function(autos0km){
        return (autos0km.km < 100)
})
  return nuevos
},
listaDeVentas: function(ventas){
    let total = this.autos
    let vendidos = total.filter (function(auto){
        return (auto.vendido === true)
    })
    let ventasTotal = []
    vendidos.forEach(function(auto){
       ventasTotal.push (auto.precio)
    })
    return ventasTotal
},
totalDeVentas: function(ventas){
    let ventasTotal = this.listaDeVentas()
    let suma =  0
    if (ventasTotal.length != 0){
        suma = ventasTotal.reduce(function(acum, ventasTotal){ 
            return acum + ventasTotal
        }) 
    }
    return suma
},
puedeComprar: function(auto, persona){
        let valorcuotasAuto = auto.precio/auto.cuotas
        return (persona.capacidadDePagoEnCuotas>=valorcuotasAuto && persona.capacidadDePagoTotal>auto.precio)
},
autosQuePuedeComprar: function(persona){
        let autosParaVender= this.autosParaLaVenta()
        //console.log(JSON.stringify(autosParaVender))
        let verificarCompra= autosParaVender.filter(auto=>this.puedeComprar(auto,persona))
        return verificarCompra
        //return verificarCompra.filter(valor=>valor==true)
     }
    }
​

console.log(concesionaria.puedeComprar());
