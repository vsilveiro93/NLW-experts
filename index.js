const perguntas = [
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "var myVar = 10;",
        "variable myVar = 10;",
        "let myVar = 10;"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a saída do seguinte código em JavaScript: console.log(typeof([]));",
      respostas: [
        "object",
        "array",
        "undefined"
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'toFixed()' faz em JavaScript?",
      respostas: [
        "Arredonda um número para o inteiro mais próximo",
        "Arredonda um número para o número especificado de casas decimais",
        "Arredonda um número para baixo para o inteiro mais próximo"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a forma correta de escrever um comentário de uma linha em JavaScript?",
      respostas: [
        "/* Este é um comentário */",
        "// Este é um comentário",
        "<!-- Este é um comentário -->"
      ],
      correta: 1
    },
    {
      pergunta: "Qual dos seguintes é um tipo de dados primitivo em JavaScript?",
      respostas: [
        "Object",
        "String",
        "Function"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o operador usado para comparar o valor e o tipo em JavaScript?",
      respostas: [
        "==",
        "===",
        "="
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o resultado da expressão '3' + 2 em JavaScript?",
      respostas: [
        "5",
        "32",
        "error"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o método em JavaScript usado para remover o último elemento de um array?",
      respostas: [
        "pop()",
        "removeLast()",
        "deleteLast()"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a sintaxe correta para declarar uma função em JavaScript?",
      respostas: [
        "function myFunction() {}",
        "func myFunction() {}",
        "def myFunction() {}"
      ],
      correta: 0
    },
    {
      pergunta: "O que o operador '&&' faz em JavaScript?",
      respostas: [
        "Operador de comparação",
        "Operador de negação",
        "Operador lógico 'E' (AND)"
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