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
for (var i = 0; i < repository.length; i++) {
  var pokemon = i
  document.write('<p>' + repository.name + ' (height: ' + repository.height + ')</p>')
};
