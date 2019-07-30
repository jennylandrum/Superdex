var repository = [
  {
    name: 'Jigglypuff',
    height: .5,
    types: ['fairy', 'normal']
  },
  {
    name: 'Litwick',
    height: .3,
    types: ['fire', 'ghost']
  },
  {
    name: 'Mr. Mime',
    height: 1.3,
    types: ['psychic', 'fairy']
  }
]

function loopBlockFunction(pokemon){
  if (pokemon.height > 1) {
    document.write ('<p>' + pokemon.name + ' (height: ' + pokemon.height + ') - Wow! That\'s big!</p>');
  } else {
    document.write ('<p>' + pokemon.name +  ' (height: ' + pokemon.height + ')</p>');
  }
}
repository.forEach(loopBlockFunction);
