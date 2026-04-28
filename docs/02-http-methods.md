# Métodos HTTP 🔧

## Descripción general

Los métodos HTTP (también llamados verbos HTTP) definen la acción que quieres realizar sobre un recurso. Piénsalos como comandos que le dicen al servidor qué quieres hacer.

## Las operaciones CRUD

La mayoría de APIs realizan operaciones CRUD:

- **C**rear – Añadir nuevos datos
- **R**ead (Leer) – Obtener datos
- **U**pdate (Actualizar) – Modificar datos existentes
- **D**elete (Eliminar) – Borrar datos

Los métodos HTTP corresponden directamente con estas operaciones.

## Metodos HTPP principales 

### 1. GET – Obtener datos 📖

**Propósito:** Recuperar datos del servidor (READ)

**Características:**:
- Seguro (no modifica datos)
- Idempotente (siempre devuelve lo mismo)
- Puede almacenarse en caché
- Parámetros en la URL

**Example**:
```http
GET /api/books
GET /api/books/1
GET /api/users?author=Orwell&year=1949
```

**Request**:
```http
GET /api/users/1 HTTP/1.1
Host: http://localhost:3000
```

**Response**:
```json
{
   "id": 1,
   "title": "1984",
   "author": "George Orwell"
}
```

**Casos de usos**:
- Obtener lista de libros
- Obtener detalles de un libro
- Buscar o filtrar libros

---

### 2. POST – Crear datos ➕

**Propósito:** Enviar datos para crear un nuevo recurso (CREATE)

**Características**:
- No es seguro (modifica datos)
- No es idempotente (dos llamadas crean dos libros)
- Datos en el cuerpo de la petición
- Devuelve el recurso creado

**Example**:
```http
POST /api/books
```

**Petición**:
```http
POST /api/users HTTP/1.1
Host: http://localhost:3000
Content-Type: application/json

{
  "title": ""El Hobbit",
  "author": "J.R.R. Tolkienm",
  "year": 1937
}
```

**Respuesta**:
```json
{
  "id": 9,
  "title": "El Hobbith",
  "author": "J.R.R. Tolkien",
  "year": 1937
}
```

**Casos de usos:**:
- Crear un libro nuevo
- Enviar formularios
- Subir archivos
- Registrar pedidos

---

### 3. PUT - Actualizar datos (completo) 🔄

**Propósito:** Reemplazar un recurso entero (UPDATE completo)

**Características**:
- No es seguro
- Idempotente
- Reemplaza el recurso completo
- Requiere todos los campos

**Ejemplo**:
```http
PUT /api/books/1
```

**Petición**:
```http
PUT /api/books/1 HTTP/1.1
Host: http://localhost:3000
Content-Type: application/json

{
  "title": "1984 (Edición revisada)",
  "author": "George Orwell",
  "year": 1950
}
```

**Respuesta**:
```json
{
  "id": 1,
  "title": "1984 (Edición revisada)",
  "author": "George Orwell",
  "year": 1950,
  "updatedAt": "2026-01-11T11:00:00Z"
}
```

**Casos de uso:**:
- Actualizar un libro completo
- Reemplazar configuraciones
- Sustituir documentos enteros

---

### 4. PATCH - Actualizar datos (parcial) 📝

**Propósito:** Actualizar parcialmente un recurso (UPDATE parcial)

**Características**:
- No es seguro
- Puede ser idempotente
- Solo actualiza campos específicos
- Solo se envían los campos modificados

**Ejemplo**:
```http
PATCH /api/books/1
```

**Petición**:
```http
PATCH /api/users/1 HTTP/1.1
Host: http://localhost:3000
Content-Type: application/json

{
  "year": 1950
}
```

**Respuesta**:
```json
{
  "id": 1,
  "title": "1984",
  "author": "George Orwell",
  "year": 1950,
  "updatedAt": "2026-01-11T11:15:00Z"
}
```

**Casos de uso**:
- Actualizar un solo campo (e.g., email)
- Cambiar estado
- Modificar parte de un formulario

---

### 5. DELETE - Eliminar datos 🗑️

**Propósito:** Eliminar un recurso (DELETE)

**Características**:
- No es seguro
- Idempotente
- Normalmente sin cuerpo en la petición
- Puede devolver el recurso eliminado o un mensaje

**Ejemplo**:
```http
DELETE /api/books/1
```

**Petición**:
```http
DELETE /api/books/1 HTTP/1.1
Host: http://localhost:3000
```

**Respuesta**:
```json
{
  "message": "Libro eliminado correctamente/User deleted successfully",
  "deletedId": 1
}
```

**Casos de usos**:
- Eliminar un libro
- Borrar comentarios
- Cancelar pedidos
- Vaciar carritos

---

## Métodos HTTP adicionales

### 6. HEAD
- Igual que GET pero solo devuelve cabeceras
- Verificar si un recurso existe
- Obtener metadatos

### 7. OPTIONS
- Describe las opciones de comunicación
- Descubre métodos permitidos

### 8. CONNECT
- Establece un túnel con el servidor
- Usado para HTTPS a través de proxy (Un servidor proxy es un intermediario o agente que actúa como puente entre un usuario *cliente* y los sitios web o servicios de internet.  En lugar de conectarse directamente a un destino, el usuario envía su solicitud al proxy, quien la procesa, filtra o modifica antes de reenviarla al servidor final y devolver la respuesta al cliente.)

### 9. TRACE
- Diagnóstico
- Prueba de bucle

---

## Idempotencia explicada

**Idempotente** significa que llamar varias veces produce el mismo resultado.

| Método | Idempotente? | Ejemplo |
|--------|-------------|---------|
| GET | ✅ Sí | Obtener un libro 10 veces devuelve lo mismo |
| POST | ❌ No |Crear un libro 10 veces crea 10 libros |
| PUT | ✅ Sí | Actualizar un libro 10 veces deja el mismo estado |
| PATCH | ⚠️ Depende | Según implementación |
| DELETE | ✅ Sí | Borrar un libro 10 veces: sigue borrado |

---

## Comparaciones importantes

### PUT vs PATCH

**PUT** - Reemplazo completo:
```json
// Original
{"id": 1, "title": "1984", "author": "George Orwell", "year": 1949}

// PUT Request
{"title": "Nuevo título", "author": "Orwell"}

// Resultado (year desaparece)
{"id": 1, "title": "Nuevo título", "author": "Orwell"}
```
PUT reemplaza TODO el recurso. Si no envías un campo, se pierde. Es como sobrescribir el objeto completo.

**PATCH** - Actualización parcial:
```json
// Original
{"id": 1, "title": "1984", "author": "George Orwell", "year": 1949}

// PATCH
{"year": 1950}

// Resultado
{"id": 1, "title": "1984", "author": "George Orwell", "year": 1950}
```
PATCH solo modifica los campos que envías. El resto del objeto se mantiene intacto.

### POST vs PUT

**POST** - Crear (el servidor asigna ID):
```http
POST /api/books
Body: {"title": "Nuevo libro"}
Response: {"id": 10, "title": "Nuevo libro"}  // ID asignada por el servidor
```

**PUT** -  Crear o actualizar (el cliente define el ID):
```http
PUT /api/books/10
Body: {"title": "Nuevo libro"}
Response: {"id": 10, "title": "Nuevo libro"} 
```

---

## Buenas prácticas

### 1. **Usar el método correcto**
- No usar GET para modificar datos
- No usar POST cuando PUT es más adecuado

### 2. **Devolver datos apropiados**
- GET: devuelve el recurso
- POST: devuelve el recurso creado
- PUT/PATCH: devuelve el recurso actualizado
- DELETE: mensaje o recurso eliminado

### 3. **Ser consistente**
- Usar nombres en plural para colecciones (`/books` not `/book`)

### 4. **Manejar errores**
- Devolver códigos de estado correctos
- Incluir mensajes de error

---

## Referencia rápida

| Método | CRUD | Seguro | Idempotente | Cuerpo petición | Cuerpo respuesta |
|--------|------|-------|------------|--------------|---------------|
| GET    | Read |   ✅ | ✅         | ❌          | ✅            |
| POST   | Create | ❌ | ❌         | ✅          | ✅            |
| PUT    | Update | ❌ | ✅         | ✅          | ✅            |
| PATCH  | Update | ❌ | ⚠️         | ✅          | ✅            |
| DELETE | Delete | ❌ | ✅         | ❌          | ⚠️            |

---

## Pruébalo tú mismo

---

[← Previous: What is API](01-what-is-api.md) | [Next: Status Codes →](03-status-codes.md)