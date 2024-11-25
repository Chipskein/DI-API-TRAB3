# DI-API-TRAB3


### Trabalho: Consumindo APIs e Json com JavaScript

1. **Faça uma página de curiosidades e/ou utilidade pública que mostre o seguinte conteúdo:**
   - Deixe o arquivo `países.json` disponível no seu GitHub. Acesse este arquivo JSON via o comando `fetch` e gere um campo do tipo `select` com os nomes de todos os países. Quando o usuário escolher um país, mostre todos os dados disponíveis deste país.  
     *(Sobre o arquivo: JSON com lista de Países em pt-BR e seus respectivos Gentílicos, Siglas e Nome Internacional - Possui todos os países do Google Maps. Ele está disponível no SIGAA e foi originalmente obtido em: [link](https://gist.github.com/jonasruth/61bde1fcf0893bd35eea))*

2. **Faça consultas a uma API disponível em [BrasilAPI](https://brasilapi.com.br/) (exceto a API dos Correios).**
   - a) Faça 1 consulta via programação e mostre os resultados na tela.
   - b) Faça perguntas para o usuário via formulário. Conforme o que o usuário pedir, faça uma consulta à API e mostre os dados solicitados.

---


### Requisitos:



* A página deve ser feita em módulos. Ou seja os scripts devem ser chamados como no exemplo abaixo:

  *     <script type="module" src="./main.js"></script>
  * deve existir pelo menos um comando import e seu correspondente export
    
• Em pelo menos um ponto utilize um destructuring

  ◦ coloque o comentário **Destructuring** acima da linha com destructuring

• Em pelo menos um ponto utilize map, filter ou reduce. Coloque conteúdo extra se for necessário
  ◦ coloque o comentário **map, filter ou reduce** acima desta linha


• Esta deve ser uma página para o usuário final (usuários sem experiência em programação) e disponibilizada para a comunidade em geral, portanto:


  ◦ Deve ter um bom visual/design (Valem os requisitos vistos nas disciplinas de IHC e design de interfaces). Utiliza CSS e/ou bibliotecas como o bootstrap para isso.


  ◦ Deve ter mecanismos para impedir o usuário de cometer erros (principalmente no preenchimento dos formulários)


  ◦ Tudo deve ser explicado na página. Deve ter um texto descrevendo o que o usuário vai ver e o que ele precisa digitar. Se algo deu errado deve haver uma mensagem explicando isso para o usuário.


  ◦ A página deve rodar bem em computadores e celulares de diversos tamanhos. Coloque os códigos em uma página HTML responsiva.


• Quanto a qualidade do código:

  ◦ A página devem passar pelos validadores html e css da w3c sem erros [link](https://validator.w3.org/).


  ◦ A página não deve apresentar erros pegos pelo console do JavaScript(JS) dos navegadores.


  ◦ Todas chamadas por fetch devem ser protegidas por try/catch. Verifique e trate as situações em que as chamadas podem retornar erro.


• Disponibilizar o sistema no Github

---------------
O trabalho deve ser entregue até 09/12/2024. Para tanto deve-se informar no SIGAA o endereço do
github pages e do repositório das páginas no Github.
Não haverá apresentações. Bom trabalho!!
