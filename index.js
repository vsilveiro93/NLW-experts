const perguntas = [
  {
    pergunta: "Qual é o nome do protagonista de Naruto?",
    respostas: [
      "Sasuke Uchiha",
      "Naruto Uzumaki",
      "Sakura Haruno"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o nome do sensei de Naruto?",
    respostas: [
      "Kakashi Hatake",
      "Iruka Umino",
      "Jiraiya"
    ],
    correta: 0
  },
  {
    pergunta: "Quem é o líder da Akatsuki?",
    respostas: [
      "Pain",
      "Itachi Uchiha",
      "Madara Uchiha"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o nome do irmão mais velho de Sasuke?",
    respostas: [
      "Itachi Uchiha",
      "Madara Uchiha",
      "Obito Uchiha"
    ],
    correta: 0
  },
  {
    pergunta: "Quem é o pai de Naruto?",
    respostas: [
      "Minato Namikaze",
      "Jiraiya",
      "Hiruzen Sarutobi"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o nome da vila oculta da folha em Naruto?",
    respostas: [
      "Vila Oculta da Nuvem",
      "Vila Oculta da Areia",
      "Vila Oculta da Folha"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o nome do bijuu que está selado dentro de Naruto?",
    respostas: [
      "Shukaku",
      "Kurama",
      "Matatabi"
    ],
    correta: 1
  },
  {
    pergunta: "Quem é o mentor de Jiraiya, Tsunade e Orochimaru?",
    respostas: [
      "Hiruzen Sarutobi",
      "Madara Uchiha",
      "Tobirama Senju"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a técnica de assinatura de Sasuke Uchiha?",
    respostas: [
      "Rasengan",
      "Chidori",
      "Rasenshuriken"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o nome do último filme de Naruto?",
    respostas: [
      "Naruto Shippuden: A Lenda da Pedra de Gelel",
      "Naruto Shippuden: A Morte de Naruto",
      "The Last: Naruto o Filme"
    ],
    correta: 2
  }
];

  //escopo do projeto
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const correta = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = correta.size + ' de ' + totalDePerguntas
  
  //laços de repetição
  for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let respostas of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = respostas
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(respostas)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
      
      correta.delete(item)
      if(estaCorreta) {
        correta.add(item)
      }
     mostrarTotal.textContent = correta.size + ' de ' + totalDePerguntas
    }
    
    
    quizItem.querySelector('dl').appendChild(dt) 
  }
  
  
  quizItem.querySelector('dl dt').remove()
  
  //agora vem a pergunta
  quiz.appendChild(quizItem)
  }