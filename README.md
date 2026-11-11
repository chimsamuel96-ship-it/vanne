# RITUALES VANNE — Landing page

Landing page estática desarrollada con **HTML5, CSS3 y JavaScript vanilla**. No requiere instalación, frameworks, servidor, base de datos ni backend.

## Estructura

```text
rituales-vanne/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── README.md
```

## Cómo verla

1. Descomprime la carpeta.
2. Abre `index.html` en tu navegador.
3. Para publicarla, sube la carpeta completa a cualquier hosting estático (por ejemplo, GitHub Pages, Netlify o tu hosting tradicional).

## Personalización importante

Abre `js/main.js` y modifica el objeto `STORE_CONFIG`, ubicado al inicio del archivo:

- `whatsapp`: número completo con código de país, solo números. Ejemplo México: `5219991234567`.
- `location`: dirección o zona de atención.
- `hours`: horarios de atención.
- `socials`: enlaces reales de Instagram, Facebook u otras redes.
- `promotions`: textos, imágenes y mensajes de las tres promociones.
- `products`: nombre, etiqueta, descripción, fotografía y mensaje de WhatsApp de cada producto.
- `services`: servicios, descripciones y mensajes de consulta.

**Importante:** el número incluido es de ejemplo (`5219990000000`). Sustitúyelo antes de publicar. También cambia los enlaces sociales y la ubicación por los datos reales del negocio.

## Fotografías

Las fotografías se cargan desde URLs externas de Unsplash y Pexels. Se requiere conexión a Internet para mostrarlas. Puedes sustituir cualquier URL de imagen por otra fotografía directa (JPG, PNG o WebP) en `STORE_CONFIG` o en `index.html` para la galería y la imagen principal.

Las imágenes de Unsplash/Pexels pertenecen a sus respectivos autores y están sujetas a sus licencias y términos de uso. Comprueba las condiciones vigentes de cada imagen antes de usar el sitio comercialmente.

## Funcionalidades incluidas

- Navegación adaptable con menú hamburguesa.
- Carrusel de promociones con avance automático, flechas e indicadores.
- Tarjetas de productos y servicios generadas desde datos centralizados.
- Enlaces de WhatsApp con mensajes predeterminados.
- Galería con ampliación de fotografías.
- Animaciones discretas con `IntersectionObserver` y respeto a `prefers-reduced-motion`.
- Diseño responsive con breakpoints para móvil, tablet y escritorio.

## Nota de contenido

Los textos de productos y servicios son ejemplos editables. Revisa que describan fielmente el catálogo y las prácticas reales del negocio antes de publicar.
