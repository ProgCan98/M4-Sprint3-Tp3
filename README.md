###### Mi Carrito de Compras

- Esta es una aplicación de carrito de compras basada en React que permite a los usuarios explorar una lista de productos, añadirlos al carrito, ajustar cantidades, eliminar elementos y alternar entre temas claro y oscuro. La aplicación utiliza React Context para la gestión del estado y Tailwind CSS para los estilos. Los estados del carrito y del tema se persisten en localStorage para mantener los datos tras recargar la página.

### Estructura del Proyecto

- La aplicación está organizada en componentes y contextos, con los siguientes archivos clave:

1. src/App.jsx

- El punto de entrada principal de la aplicación, encargado de renderizar el diseño general y coordinar los componentes principales. Envuelve la aplicación en ThemeProvider y CartProvider para proporcionar la gestión del estado del tema y del carrito a los componentes hijos. El diseño incluye un encabezado con el título "Mi Carrito de Compras", una sección principal con la lista de productos y el carrito, y un botón para alternar el tema.

## Funcionalidades Clave:

- Renderiza el div raíz con id="rootElement", que aplica clases de Tailwind CSS para los temas claro (bg-gray-300) y oscuro (dark:bg-black).

- Utiliza ThemeProvider para gestionar el estado del tema (claro/oscuro) y CartProvider para gestionar el estado del carrito.

- Organiza los componentes ProductList y Cart en un diseño de cuadrícula responsivo usando Tailwind CSS.

- Incluye el componente ThemeButton para alternar entre los modos claro y oscuro.

2. src/components/ProductList.jsx

- Este componente muestra una lista de productos predefinidos y permite a los usuarios añadir elementos al carrito, ajustar cantidades y eliminar elementos. Utiliza el CartContext para gestionar el estado del carrito.

## Funcionalidades Clave:

- Muestra una lista estática de productos (por ejemplo, "Camiseta Deportiva", "Zapatillas Running", "Pelota de Fútbol") con sus precios.

- Proporciona botones para añadir productos al carrito, aumentar/disminuir cantidades y eliminar elementos.

- Muestra la cantidad actual de cada producto en el carrito y calcula el valor total del carrito.

- Utiliza Tailwind CSS para un diseño de cuadrícula responsivo y efectos de hover en las tarjetas.

3. src/components/Cart.jsx

- Este componente muestra el contenido del carrito de compras y permite a los usuarios ver, modificar o eliminar elementos. Utiliza el CartContext para acceder y actualizar el estado del carrito.

## Funcionalidades Clave:

- Incluye un botón para mostrar u ocultar el carrito.

- Muestra los elementos del carrito con sus nombres, precios, cantidades y subtotales.

- Proporciona botones para aumentar/disminuir cantidades y eliminar elementos.

- Muestra el valor total del carrito cuando está abierto.

- Utiliza Tailwind CSS para estilos, incluyendo diseños responsivos para móviles y escritorio.

4. src/components/ThemeButton.jsx

- Un componente reutilizable que permite a los usuarios alternar entre los temas claro y oscuro. Consume el ThemeContext para acceder al estado del tema y la función de cambio.

## Funcionalidades Clave:

- Renderiza un botón con texto que cambia según el tema actual ("Cambiar a Tema Claro" o "Cambiar a Tema Oscuro").

- Activa la función toggleDark del ThemeContext para cambiar el tema.

- Estilizado con Tailwind CSS para mantener consistencia con otros botones de la aplicación.

5. src/contexts/CartContext.js

- Define el CartContext utilizando la API createContext de React. Este archivo proporciona el objeto de contexto usado por CartContext.jsx y componentes como ProductList y Cart para acceder al estado del carrito.

## Funcionalidades Clave:

- Crea un contexto para compartir el estado del carrito (cart y setCart) entre componentes.

6. src/contexts/CartContext.jsx

- Implementa el CartProvider, que gestiona el estado del carrito y lo persiste en localStorage. Envuelve los componentes que necesitan acceso al estado del carrito.

## Funcionalidades Clave:

- Inicializa el estado del carrito desde localStorage o con un arreglo vacío si no existe.

- Actualiza localStorage cada vez que el estado del carrito cambia usando un hook useEffect.

- Proporciona cart (arreglo de elementos) y setCart (actualizador de estado) a los componentes hijos a través de CartContext.Provider.

7. src/contexts/ThemeContext.js

- Define el ThemeContext utilizando la API createContext de React. Este archivo proporciona el objeto de contexto usado por ThemeContext.jsx y ThemeButton para acceder al estado del tema.

## Funcionalidades Clave:

- Crea un contexto para compartir el estado del tema (isDark y toggleDark) entre componentes.

8. src/contexts/ThemeContext.jsx

- Implementa el ThemeProvider, que gestiona el estado del tema (claro u oscuro) y lo persiste en localStorage. Aplica la clase dark al elemento raíz para habilitar el modo oscuro de Tailwind.

## Funcionalidades Clave:

- Inicializa el estado del tema desde localStorage o por defecto en modo claro (false).

- Usa un hook useEffect para agregar o quitar la clase dark en el div con id="rootElement" según el estado isDark.

- Persiste el estado del tema en localStorage cada vez que cambia.

- Proporciona isDark (booleano) y toggleDark (función) a los componentes hijos a través de ThemeContext.Provider.

- Incluye manejo de errores para el análisis de localStorage para evitar fallos.

##### Enlace para Netlify: casadeportiva.netlify.app
