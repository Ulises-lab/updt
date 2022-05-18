function vari(pizzas){
	const vacio = [];
	for(let i=0; i<pizzas.length; i++){
		if(pizzas[i].type != "pineapple"){
		console.log(pizzas[i]);
		}
	}
	console.log(vacio);
}

let pizzas = [
  { type: 'pineapple', size: 'M'},
  { type: 'pineapple', size: 'S'},
  { type: 'pineapple', size: 'S'},
  { type: 'pineapple', size: 'L'}
]

vari(pizzas);
//console.log(pizzas.length);
//console.log(vari(pizzas));






/*
function filterPizzas(pizzas) {
  const vacio = [];
  for(let i = 0; i < pizzas.length; i++){
    if(pizzas[i].type != "pineapple"){
      return pizzas[i];
    }
  }
  return vacio;
}

let pizzas = [
  { type: 'pineapple', size: 'M'},
  { type: 'pepperoni', size: 'S'},
  { type: 'pineapple', size: 'S'},
  { type: 'mushrooms', size: 'L'}
]

console.log(filterPizzas(pizzas));
