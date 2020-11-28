# Reto testing con React


## Integrantes
Santiago Beltrán
Julian Montoya
Violeta Rodríguez

## Observaciones
Todos los test solicitados fueron realizados y pasados. 

Amdemás, se encontró que en el componente no se válida que el número de likes no sea negativo. Este número se deberia matener en cero, si no hay likes y el botón de decrementar es presionado. De estar esto implementado, en la pruba se hace un condicional, en el que se mira si la varible likes es 0, de ser así, se prueba que al presionar botón de decrementar, el número de likes sigue siendo 0.  Si no es cero, se hace la prueba como está implmentada actualmente. Otra forma de evitar valores negativos, sería que el botón de decrementar estuviera desabilitado cuando el número de likes es 0. En tal caso, en la pruba se mira que si la variable likes es cero, el botón esté desabilidado, y si no es cero, se realiza la pruba haciendo el clik y verificando que aumente, como esta implementado actualmente en el código.  
