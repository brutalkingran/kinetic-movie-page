# Objetivo

Desarrollar una aplicación en React + Vite donde los usuarios puedan visualizar una lista de películas y agregar o eliminar películas de su watchlist (lista de películas favoritas). La watchlist debe almacenarse en el Local Storage, de manera que no se pierda al recargar la página.

# Funcionalidades Principales

1. Mostrar un listado de películas
   - Renderizar una lista de películas en la pantalla principal.
   - Cada película debe mostrarse en una tarjeta (MovieCard) con su imagen, título y un botón para agregar a la watchlist.
2. Agregar películas a la Watchlist
   - Al hacer clic en “Agregar a mi lista”, la película debe almacenarse en un estado global de la aplicación ( useState ).
   - Guardar la watchlist en Local Storage para que no se pierda al recargar la página.
3. Ver la Watchlist
   - Implementar un modal o sidebar que se abra al hacer clic en “Ver mi lista”.
   - Mostrar la lista de películas guardadas.
   - Cada película en la watchlist debe tener un botón para removerla.
4. Persistencia de datos
   - Usar useEffect para cargar la watchlist desde Local Storage cuando se monta el componente principal.

# Despliegue
[https://kinematic-movies.netlify.app/](https://kinematic-movies.netlify.app/)
