function pagarComida(comida, presupuesto){
  return presupuesto - comida.precio
}

var comida = {
  nombre: 'ramen',
  precio: 130
}
miDinero = 200

miDinero = pagarComida(comida, presupuesto) // miDinero = 70