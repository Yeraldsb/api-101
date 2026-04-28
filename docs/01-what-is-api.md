# ¿Qué es una API? 🌐

## Introducción

**API** significa **Application Programming Interface** o Interfaz de Programación de Aplicaciones. Es un conjunto de reglas y protocolos que permite que diferentes aplicaciones de software se comuniquen entre sí.

## Analogía del mundo real

Piensa en una API como un camarero en un restaurante:

1. **Tú (Cliente)** -  Miras el menú y decides qué quieres
2. **Camarero (API)** - Lleva tu pedido a la cocina
3. **Cocina (Servidor)** - Prepara tu comida
4. **Camarero (API)**  - Te trae la comida

El camarero es el intermediario que comunica entre tú y la cocina, igual que una API comunica entre aplicaciones.

## Tipos de APIs

### 1. **REST APIs** (¡lo que estamos aprendiendo!)
- Usan métodos HTTP
- Comunicación sin estado
- Formato JSON
- El tipo más común

### 2. **SOAP APIs**
- Basadas en XML
- Más complejas
- Usadas en sistemas empresariales

### 3. **GraphQL APIs**
- Lenguaje de consultas
- Pides exactamente lo que necesitas
- Un solo endpoint

### 4. **WebSocket APIs**
- Comunicación en tiempo real
- Conexión bidireccional
- Usado en chats y actualizaciones en vivo

## ¿Por qué usar APIs?

### 1. **Separación de responsabilidades**
- Frontend y backend pueden desarrollarse por separado
- Equipos distintos pueden trabajar en paralelo

### 2. **Reutilización**
- Una API puede servir a múltiples aplicaciones
- Web, móvil y escritorio pueden usar la misma API

### 3. **Seguridad**
- Oculta la implementación interna
- Controla el acceso a los datos

### 4. **Escalabilidad**
- Facilita escalar sistemas
- Puedes actualizar el backend sin tocar el frontend

## Componentes de una API

### 1. **Endpoint**
La URL donde se accede a la API:
```
http://localhost:3000

```

### 2. **Metodo**
El verbo HTTP (GET, POST, PUT, DELETE)

### 3. **Headers/Cabezeras**
Metadatos de la petición:
```
Content-Type: application/json
Authorization: Bearer token123
```

### 4. **Request Body**
Datos recibidos del servidor:
```json
{
   "title": "1984",
   "author": "George Orwell"
}

```

### 5. **Response**
Data received from the server:
```json
{
   "id": 1,
   "title": "1984",
   "author": "George Orwell",
   "year": 1949
}
```

### 6. **Status Code**
Indica éxito o fallo (200, 404, 500, etc.)

## Ejemplo: Weather API

Imagina que estás construyendo una app del clima:

```javascript
// Request
GET https://api.weather.com/current?city=London

// Response
{
  "temperature": 15,
  "condition": "Cloudy",
  "humidity": 70
}
```

Tu app no necesita saber cómo se recopilan o almacenan los datos del clima.
¡La API se encarga de toda esa complejidad!

## Características de una API REST

Las APIs REST (Representational State Transfer) tienen características específicas:

1. **Arquitectura Cliente-Servidor** – Separación de responsabilidades
2. **Sin estado (Stateless)** – Cada petición es independiente
3. **Cacheable** – Las respuestas pueden almacenarse en caché
4. **Interfaz uniforme** – Estructura consistente
5. **Sistema por capas** – Puede tener múltiples capas


**¿Por qué JSON??**
- Fácil de leer
- Ligero
- Compatible con todos los lenguajes
- Fácil de interpretarse

## Casos de uso comunes

1. **Redes sociales** – Publicar, dar “me gusta”, comentar
2. **Procesamiento de pagos** – Stripe, PayPal
3. **Mapas** – Google Maps API
4. **Autenticación** – OAuth, sistemas de login
5. **Obtención de datos** – Noticias, clima, acciones


## Próximos pasos

Ahora que entiendes qué es una API, aprendamos sobre:
- [HTTP Methods](02-http-methods.md) -  Cómo interactuar con APIs
- [Status Codes](03-status-codes.md) -  Cómo interpretar respuestas
- [REST Principles](04-rest-principles.md) -  Buenas prácticas
---

[← Vuelta al README](../README.md) | [Siguiente: HTTP Methods →](02-http-methods.md)