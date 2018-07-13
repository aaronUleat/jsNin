## Resumen

* Los clousures permiten a las funciones a tener acceso a todas las variables que estan en el scope cuando la funcion 
misma es definida. Crean un una "burbuja segura" de la funcion y las variables que estan dentro del scope al punto 
de la definicion de la funcion. De esta manera, la funcion tiene todo lo que necesitamos para ejecutarse, inclusive 
si el scope en que la funcion fue creada se ha ido.

* Podemos usar las funciones como clousures para los siguientes usos avanzados:
    * Imitar variables de objetos privados, cerrandose sobre el constructor a travez de metodos de clousures.
    * Lidear con callbacks, de una manera que significamente simplifique el codigo.
    
    
* El motor de Javascript rastrea la ejecucion de la funcion atravez del contexto de ejecucion ( todo el stack de llamadas ).
Cada vez que una funcion es llamada, un nuevo cotexto de ejecucion de una funcion es creado y puesto en el stack. Cuando 
una funcion es hecha la ejecucion es hecha, el contexto de ejecucion que hace matching disparado del stack.

* El motor de Javascript rastrea indentificadores con ambientes lexicos (o coloquialmente scopes).

* En Javascript definimos ambientes globales, function-scoped, y inclusive variables que esten dentro de un scope.

* Para definir variables, utilizamos var, let y const:
    * var define una variable a la funcion mas cercana o al scope global (ignora a a los bloques).
    * let y const definen una variable en el scope mas cercano (incluyendo los bloques), permitiendonos crear variables 
    de block-scped, algo queno era posible antes del ES6. En adicion, const nos permite definir variables cuyo valor 
    puede ser asignado solo una vez.
    
* Los clousures son meramente un efecto secundario de las relgas de scoping de Javascript. Una funcion puede ser llamada 
inclusive cuando el scope in el cual fue creado se ha creado y si ha ido. 