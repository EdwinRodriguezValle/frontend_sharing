## Posision
### El posicionamiento relativo 
Permite mover un elemento a la: izquierda, derecha, arriba, abajo en px u otra medida en relacion 
a su contenedor elementos hermanos. Su referencia toma en relation al elemento que está a su alrededor pero dentro del 
mismo contenedor. Cuando el contendor padre se mueve también se mueve este

### El posicionamiento absoluto 
Permite saca el elemento del flujo normal del contenedor padre y lo hace invisible para el resto de los elementos. 
Para mover toma su punto de referencia del los bordes del contendor padre. Cuando el contendor padre se mueve también se mueve este

### El posicionamiento fixed
Su punto de referencia es igual que el absoluto. O sea, toma su posicionamiento en píxeles en relation del contendor padre.
Pero con el resto de los hermanos, si no se queda en el lugar donde se le ha dado la refencia en hasta que el elemento padre se mueve completamente.

### El posicionamiento sticky
Su referencia lo toma en relacion a view port, o sea a la ventana de la web. Se usa para menus y también pies de página

### z-index
Te permite definir el orden de sobre posicionamiento de los elementos, el uno encima y 2 después, en as'i sucesivamente. 
El uno se ve primero, 