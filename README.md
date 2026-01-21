# guitarchuck 🎸

Una tienda en línea de guitarras construida con React y Vite. Aplicación interactiva que permite navegar un catálogo de guitarras, agregarlas al carrito y gestionar compras.

## Características

- 📦 **Catálogo de Guitarras**: Colección de 6 modelos inspirados en legendarios músicos
- 🛒 **Carrito de Compras**: Agregar, eliminar y modificar cantidades de productos
- ⚡ **Rendimiento**: Construido con Vite para desarrollo rápido y optimizado
- 📱 **Responsive**: Interfaz adaptativa con Bootstrap
- 🔔 **Notificaciones**: Sistema de notificaciones con react-toastify

## Modelos Disponibles

- **Lukather** - $300.000 | Modelo versátil inspirado en Steve Lukather
- **SRV** - $350.000 | Guitarrra de blues pesada como Stevie Ray Vaughan
- **Borland** - $330.000 | Diseño único para afinaciones bajas
- **VAI** - $300.000 | Inspirada en Steve Vai
- **Thompson** - $400.000 | Ritmos filosos y solos con carácter
- **White** - $330.000 | Cruda y directa, al estilo Jack White

## Tecnologías

- **React 19** - Biblioteca de UI
- **Vite 7** - Herramienta de build y dev server
- **Bootstrap 5** - Framework CSS
- **react-toastify** - Notificaciones
- **ESLint** - Linting de código

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/blasgiraldes/guitarchuck.git
cd guitarchuck

# Instalar dependencias
npm install
```

## Uso

### Desarrollo

```bash
npm run dev
```

La aplicación se abrirá en `http://localhost:5173`

### Build

```bash
npm run build
```

Genera la carpeta `dist/` lista para producción.

### Preview

```bash
npm run preview
```

Previsualiza la versión compilada localmente.

### Linting

```bash
npm run lint
```

## Estructura del Proyecto

```
src/
├── components/
│   ├── Guitar.jsx           # Componente individual de guitarra
│   ├── Header.jsx           # Encabezado con carrito
│   └── ProjectOverview.jsx  # Vista del proyecto
├── hooks/
│   └── useCart.js          # Hook personalizado para gestionar el carrito
├── data/
│   └── db.js               # Base de datos con catálogo de guitarras
├── App.jsx                 # Componente principal
└── main.jsx                # Punto de entrada
```

