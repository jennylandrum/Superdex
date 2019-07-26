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
  if (height >== 1) {
    document.write ('<p>' + repository[i].name +  ' (height: ' + repository[i].height + ') - Wow! That\'s big!</p>');
  } else {
  document.write ('<p>' + repository[i].name +  ' (height: ' + repository[i].height + ')</p>');
  }
};
