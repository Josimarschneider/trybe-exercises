let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

  let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
};

  console.log('exercício 1');
  console.log('Bem-vinda, ' + info.personagem);

  console.log('\nexercício 2');
  info.recorrente = 'Sim';
  //info.['recorrente] = 'sim'; // outro jeito de fazer]
  console.log(info);

  console.log('\nexercício 3 ');
  for (let key in info) {
    console.log(key);
  };

  console.log('\nexercício 4');
  for (let key in info) {
      console.log(info[key]);
  };

  console.log('\nexercício 5');
  for (let key in info) {
    if (info[key] === info.recorrente && info[key] === 'Sim' && info[key] === info2[key]){
        console.log('ambos recorrentes');
    }  else {
        console.log(info[key] + ' e ' + info2[key]);
    }
    
  };
