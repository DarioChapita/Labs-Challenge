Español: Primero, en la ubicación '/lab-challenge/src' correr:

node api.js
para correr el back-end.

En la dirección del proyecto ('/lab-challenge') correr:

npm start
para hacer correr el front-end

BACK-END

En el archivo '/lab-challenge/api.js' podes ver la request con la dirección hecha a la dirección '/api/search?query=' la cual corre en el puerto 3001, para hacer la request al back-end 'http://localhost:3001/api/search?q=' con la queryParam que se le solicite al back-end
FRONT-END

Product Card Este componente renderiza la imagen y parte del titulo. Tiene un botón que despliega el resto de la información requerida como: Precio en 'ARS', condición, stock y el resto del titulo.

En el catalogo vas a poder: Ordenar por precio: De mayor a menor - De menor a mayor Filtrar por condición: Productos nuevos - Productos usados - Todos El componente catalogo está paginado en 30 productos por página.

ESTILO En esta ocación utilicé MaterializeCSS, haciendo una pagina web responsive.

۩๑●▬▬▬▬●▬▬▬▬๑۩۩๑▬▬▬▬●▬▬▬▬๑۩۩๑▬▬▬▬●▬▬▬▬๑۩۩๑▬▬▬▬●▬▬▬▬●๑۩ ●▬▬▬▬๑۩۩๑▬▬▬▬●▬▬▬▬๑۩۩๑▬▬▬▬●▬▬▬▬๑۩۩๑▬▬▬▬●▬▬▬▬●๑۩۩๑▬▬▬▬●

First, in the directory '/lab-challenge/src' run:

node api.js
to run the back-end.

In the proyect directory ('/lab-challenge') run:

npm start
to make run the front-end.

BACK-END

In the file '/lab-challenge/api.js' you'll can see the API request with route '/api/search?query=' witch is running in the port 3001, to make te back-end request, 'http://localhost:3001/api/search?q=' with the queryParams with you want to recibe.
In the front-end, make the back-end request to the route '3001/api/search'. And same with the searchbar. Eject the search function witch make the back-end request.

FRONT-END

Product Card This component, render the image and part of the title(truncate). This card have a button witch will deploy the rest of the information requered like: Price in "ARS", condition, stock, and the rest of the title.

You can: Order by price: Lower to higher - higher to lower Filter by condition: New products - Used products - All Paginate by 30 products per page.

STYLE I use in this ocation, MaterializeCSS. Making it responsive website.
