let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  console.log('exercício 1');
  console.log('Bem-vinda, ' + info.personagem);

  console.log('exercício 2');
  info.recorrente = 'sim';
  //info.['recorrente] = 'sim'; // outro jeito de fazer]
  console.log(info);

  console.log('exercício 3');
  for (let key in info) {
      console.log(key);
  }
