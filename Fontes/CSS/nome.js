/* ##################################################### */
/* ##################################################### */
/* ##                                                 ## */
/* ## Site ........: Desenvolvimento Internet         ## */
/* ## Autor .......: Manzano, Toledo & Toledo         ## */
/* ## Data ........: 10 de Janeiro de 2008            ## */
/* ## Vers�o ......: 1.0                              ## */
/* ## Arquivo .....: nome.js                          ## */
/* ##                                                 ## */
/* ##################################################### */
/* ##################################################### */

/* Sauda��o */

var NOME = prompt('Entre com seu nome, por favor.', '');
if (NOME == null || NOME == '') {
  NOME = 'Visitante Desconhecido';
}
document.write('Oi ' + NOME + ', esteja a vontade.');
