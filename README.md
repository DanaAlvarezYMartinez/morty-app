# morty-app

Bienvenidos a mi app :D

## Instalación

Para esta aplicación utilice [Expo](https://docs.expo.dev/get-started/installation/) por lo cual para correrlo van a necesitar instalar Expo CLI siguiendo los pasos de la documentación anexada arriba.

Primero hay que clonar el repositorio, utilizando git clone.

```bash
git clone git@github.com:DanaAlvarezYMartinez/morty-app.git
```

Luego de esto, nos movemos a la carpeta del repositorio haciendo 

```bash
cd morty-app
```

E instalamos las dependencias del proyecto con

```bash
npm install
```

 Una vez hecho esto, abrimos una terminal en la misma carpeta donde estamos parados e iniciamos el proyecto en nuestro local corriendo
 
 ```bash
expo start
```

Luego de esto, en la consola deberia aparecernos un mensaje indicando que se inicio el proyecto y en que puerto esta corriendo, por ejemplo: 
 
 ```bash
Developer tools running on http://localhost:19002
```

A partir de acá, todo cambio en el codigo va a verse reflejado en la aplicación en tiempo real :)
 
 ## Funcionalidades completadas
 
 * Validación de email
 * Persistir sesión
 * Cerrar sesión
 * Paginación
 * Marcar personajes como favoritos
 * Vista de personajes favoritos
 * Buscador de personajes según diferentes criterios
 
 ## Uso 
 
 Cuando ingresamos a la app por primera vez, luego de que se cargue la pantalla de splash vamos a poder ver la pantalla de Login. 
  
 ![alt text](https://i.imgur.com/67lk7F4.png)

 Ahi ingresamos nuestro nombre y el email: En caso de que el email sea invalido se muestra un mensaje de error
 
  ![alt text](https://i.imgur.com/BqzwA5w.png)
  
  Por el contrario si el email valido, accedemos a la pantalla de usuario
  
 ![alt text](https://i.imgur.com/m1KcTX1.png)
 
 La primera opción nos lleva a la pagina de Personajes

 ![alt text](https://i.imgur.com/2LTNBAt.png)

Acá si lo desamos podemos filtrar por los diferentes criterios que se muestran en selector, y tambien podemos limpiar los criterios de busqueda apretando el botón 'Clear', que nos renderizará todos los personajes nuevamente
 
![alt text](https://i.imgur.com/WNyDKvw.png)

Luego de seleccionar un filtro, escribimos el parametro de busqueda, apretamos el botón 'Buscar' y se nos van a renderizar los personajes que cumplan con el criterio como se muestra a continuación

![alt text](https://i.imgur.com/wTndNZz.png)       ![alt text](https://i.imgur.com/oLOvZq9.png)

Por el contratio si no hay personajes que cumplan con el criterio de busqueda, se nos va a mostrar un mensaje de notificación en la pantalla

![alt text](https://i.imgur.com/2DZ0SZu.png)  

Si tocamos alguna de las tarjetas de los personajes, podremos acceder al detalle del mismo, donde se mostrarán sus datos y una lista de los episodios donde apareció.

El corazón al lado del nombre del personaje indica su estado, es decir, si esta como favorito o no. 
Si el corazón es blanco significa que no esta en favoritos, y por el contrario si esta en rojo si esta faveado.

![alt text](https://i.imgur.com/UyPAqNS.png)  ![alt text](https://i.imgur.com/EwQ5Th6.png)  

Si tocamos la localización del personaje, es decir el texto en verde, vamos a poder acceder al detalle de la misma, donde podemos encontrar información del lugar y una lista de residentes

![alt text](https://i.imgur.com/vZrk4jn.png) 

Por otro lado, como se mencionó anteriormente, es posible favear a un personaje. Para ver mis favoritos volvemos a la pantalla del usuario y tocamos la segunda opción.
En caso de que haya favoritos vamos a poder verlos listados (y acceder a su detalle si tocamos su tarjeta). 

![alt text](https://i.imgur.com/H45QaEp.png) 

Por el contrario, si no hay favoritos se nos mostrará un mensaje denotificación.

![alt text](https://i.imgur.com/CLlkf91.png) 

