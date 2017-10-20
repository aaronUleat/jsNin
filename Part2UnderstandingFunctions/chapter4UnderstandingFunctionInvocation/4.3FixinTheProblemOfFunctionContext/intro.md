En la seccion anterior, usted vio algunos de los problemas que pasan cuando lideamos con
el contexto de las funciones en Javascript. En las callback functions (tales como los event
handlers), el contexto de la funcion quizas no sea lo que esperabamos, pero podemos usar
el 'call' y 'apply' metodos para arreglarlo. En esta seccion, vamos a ver otras dos opciones:
el arrow function y el metodo bind, el cual puede, en ciertos casos, lograr este mismo efecto
de una manera mas elegante.