/* ##################################################### */
/* ##################################################### */
/* ##                                                 ## */
/* ## Site ........: Desenvolvimento Internet         ## */
/* ## Autor .......: Manzano, Toledo & Toledo         ## */
/* ## Data ........: 10 de Janeiro de 2008            ## */
/* ## Versão ......: 1.0                              ## */
/* ## Arquivo .....: nome.js                          ## */
/* ##                                                 ## */
/* ##################################################### */
/* ##################################################### */

/* Saudação */

var NOME = prompt('Entre com seu nome, por favor.', '');
if (NOME == null || NOME == '') {
  NOME = 'Visitante Desconhecido';
}
document.write('Oi ' + NOME + ', esteja a vontade.');
