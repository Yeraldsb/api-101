# REST Principles 🏗️

## ¿Qué es REST?

**REST** significa **Representational State Transfer** (Transferencia de Estado Representacional). Es un estilo de arquitectura para diseñar aplicaciones en red, especialmente servicios web.

REST fue definido por Roy Fielding en su tesis doctoral en el año 2000. No es un protocolo ni un estándar, sino un conjunto de principios y restricciones.

## ¿Por qué REST?

- **Simplicidad** - Fácil de entender e implementar
- **Escalabilidad** - Puede manejar muchos clientes
- **Stateless (sin estado)** - Cada petición es independiente
- **Rendimiento** - Se puede cachear eficientemente
- **Flexibilidad** - Funciona con cualquier formato de datos

---

## Los 6 principios de REST

### 1. Arquitectura Cliente-Servidor 🖥️↔️🖥️

**Separación de responsabilidades** entre la interfaz de usuario y el almacenamiento de datos.

**Beneficios**:
- Frontend y backend pueden evolucionar de forma independiente
- Diferentes equipos pueden trabajar en paralelo
- Mayor portabilidad

**Ejemplo**:
```
Client (Web App) ←→ Server (REST API) ←→ Database  
Client (Mobile App) ←→ Server (REST API) ←→ Database  
```

Varios clientes pueden usar la misma API.

---

### 2. Stateless 🚫💾

**Cada petición debe contener toda la información necesaria** para procesarse. El servidor no guarda el contexto del cliente entre peticiones.

**Qué significa**:
- No hay estado de sesión en el servidor
- Cada petición es independiente
- Todo el contexto debe estar en la request

**Ejemplo - Stateless** ✅:
```http
# Request 1
http
# Request 1
GET /api/users/1
Authorization: Bearer token123

# Request 2 (independiente)
PUT /api/users/1
Authorization: Bearer token123
Content-Type: application/json

{"name": "Updated Name"}
```

**Ejemplo - NOT Stateless** ❌:
```http
# Request 1
POST /api/login
{"username": "john", "password": "pass123"}

# Request 2 (depende del estado)
GET /api/users/me
# El servidor recuerda la sesión - ¡NO es RESTful!
```

**Beneficios**:
- Más fácil de escalar
- Más fiable
- Lógica de servidor más simple

**Desventaja**:
- Más datos en cada petición (token, etc.)

---

### 3.Interfaz uniforme 📐

**Estructura consistente y predecible** para todos los endpoints.

Esta es la restricción más importante. Incluye:

#### a) URLs basadas en recursos

Los recursos son sustantivos (no verbos):

```
✅ /api/books          
❌ /api/getBooks      

✅ /api/book/1       
❌ /api/getBookById/1 

✅ /api/books/1/reviews 
❌ /api/books/1/getReviews  
```

#### b) Métodos HTTP para acciones

Usa métodos HTTP (GET, POST, PUT, DELETE), no acciones en la URL:
```
✅ GET    /api/books        # Get all users
✅ GET    /api/books/1      # Get user 1
✅ POST   /api/books        # Create user
✅ PUT    /api/books/1      # Update user 1
✅ DELETE /api/users/1      # Delete user 1

❌ GET    /api/deleteBook/1  
❌ POST   /api/createBook    
```

#### c) Representaciones estándar

Se consistente en la estructura del JSON:
```json
// User resource format
{
  "id": 1,
  "title": "1984",
  "author": "George Orwell",
  "createdAt": "2026-01-11T10:00:00Z"
}
```

---

##  Buenas prácticas REST

### ✅ Hacer

1. **Usar sustantivos** para recursos
2. **Usar métodos HTTP** para acciones
3. **Usar códigos de estado correctos**
4. **Versionar la API** (/api/v1/users)
5. **Usar JSON**  por defecto
6. **Documentar la API**
7. **Manejar errores correctamente**
8. **Usar HTTPS**
9. **Implementar autenticación**

---


## Recursos extra 📚


- [MDN Web Docs – HTTP](https://developer.mozilla.org/es/docs/Web/HTTP)
- [MDN Web Docs – Introducción a APIs en el cliente](https://developer.mozilla.org/es/docs/Learn/JavaScript/Client-side_web_APIs/Introduction)
- [REST API Tutorial](https://restfulapi.net/)
- [Tesis original de REST (Roy Fielding)](https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm)


---

## 🚀 APIs para practicar

- [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
- [ReqRes](https://reqres.in/)
- [MockAPI](https://mockapi.io/)

---

## 🧩 Conceptos clave para seguir aprendiendo

- Autenticación (JWT, OAuth2)
- Versionado de APIs (`/api/v1`)
- HTTP caching
- HATEOAS
- OpenAPI / Swagger specs
- Manejo de errores (status codes)

--- 

[← Previous: Status Codes](03-status-codes.md) | [Next: Postman Guide →](05-postman-guide.md)