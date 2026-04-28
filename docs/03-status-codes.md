# Códigos de Estado HTTP 📊

## Descripción general

Los códigos de estado HTTP son números de tres dígitos que devuelve el servidor para indicar el resultado de una petición HTTP. Te dicen si tu petición fue exitosa, falló o requiere alguna acción adicional.

## Categorías de códigos de estado

Los códigos se agrupan en cinco categorías:

| Categoría | Rango | Significado |
|----------|-------|---------|
| **1xx** | 100-199 | Informativos – Petición recibida, procesando |
| **2xx** | 200-299 | Éxito – La petición fue recibida y procesada correctamente |
| **3xx** | 300-399 | Redirección – Se requiere una acción adicional |
| **4xx** | 400-499 | Error del cliente – La petición es incorrecta o no puede procesarse |
| **5xx** | 500-599 |Error del servidor – El servidor falló al procesar una petición válida |

---

## 2xx Códigos de éxito ✅

### 200 OK
**La respuesta de éxito más común**

- La petición fue exitosa
- El cuerpo contiene los datos solicitados
- Usado en GET, PUT y PATCH exitosos

**Ejemplo**:
```http
GET /api/books/1

Response:
HTTP/1.1 200 OK
Content-Type: application/json

{
  "id": 1,
  "title": "1984",
  "author": "George Orwell"
}
```

---

### 201 Created
**Recurso creado correctamente**

- Usado con POST
- Devuelve el recurso recién creado
- Debe incluir cabecera Location

**Ejemplo**:
```http
POST /api/books

Response:
HTTP/1.1 201 Created
Location: /api/books/5
Content-Type: application/json

{
  "id": 5,
  "title": "El Hobbit",
  "author": "J.R.R. Tolkien",
  "createdAt": "2026-01-11T10:00:00Z"
}
```

---

### 204 No Content
**Éxito sin contenido**

- La petición fue exitosa
- No hay nada que devolver
- Muy común en DELETE

**Ejemplo**:
```http
DELETE /api/books/1

Response:
HTTP/1.1 204 No Content
```

---

## 3xx Redirection Codes 🔄

### 301 Moved Permanently
- El recurso se movió permanentemente
- Se deben actualizar enlaces

### 302 Found
- Redirección temporal
- Solo para esta petición

### 304 Not Modified
- El recurso no ha cambiado
- Se puede usar la versión en caché

---

## 4xx Errores del cliente ❌

Indican que el cliente cometió un error.

### 400 Bad Request
**La petición está mal formada o es inválida**

- Campos obligatorios faltantes
- JSON inválido
- Tipos de datos incorrectos

**Ejemplo**:
```http
POST /api/books
Body: {"title": ""}

Response:
HTTP/1.1 400 Bad Request
Content-Type: application/json

{
  "error": "Bad Request",
  "message": "El título es obligatorio y no puede estar vacío",
  "details": {
    "field": "title",
    "issue": "empty_value"
  }
}

```

---

### 401 Unauthorized
**Se requiere autenticación**

- No se enviaron credenciales
- Token inválido
- Token expirado

**Ejemplo**:
```http
GET /api/admin/books

Response:
HTTP/1.1 401 Unauthorized
WWW-Authenticate: Bearer

{
  "error": "Unauthorized",
  "message": "Autenticación requerida"
}

```

---

### 403 Forbidden
**No tienes permiso**

- Autenticación válida pero sin permisos
- Cuenta suspendida
- IP bloqueada

**Ejemplo**:
```http
DELETE /api/books/1

Response:
HTTP/1.1 403 Forbidden

{
  "error": "Forbidden",
  "message": "No tienes permiso para eliminar libros"
}

```

---

### 404 Not Found
**El recurso no existe**

- URL incorrecta
- Libro eliminado
- ID inexistente

**Ejemplo**:
```http
GET /api/books/9999

Response:
HTTP/1.1 404 Not Found

{
  "error": "Not Found",
  "message": "No se encontró el libro con ID 9999"
}

```

---

### 405 Method Not Allowed
**Método HTTP no permitido para este endpoint**

**Ejemplo**:
```http
PATCH /api/books

Response:
HTTP/1.1 405 Method Not Allowed
Allow: GET, POST

{
  "error": "Method Not Allowed",
  "message": "El método PATCH no está permitido en este endpoint",
  "allowedMethods": ["GET", "POST"]
}
```

---

### 409 Conflict
**Conflicto con el estado actual**

- Recurso duplicado
- Modificación concurrente
- Violación de reglas de negocio

**Ejemplo**:
```http
POST /api/books
Body: {"title": "1984", "author": "George Orwell"}

Response:
HTTP/1.1 409 Conflict

{
  "error": "Conflict",
  "message": "Ya existe un libro con este título y autor"
}
```

---

### 422 Unprocessable Entity
**Error de validación**

- Sintaxis válida pero datos incorrectos
- Reglas de negocio incumplidas

**Ejemplo**:
```http
POST /api/books
Body: {"title": "Libro X", "year": -10}

Response:
HTTP/1.1 422 Unprocessable Entity

{
  "error": "Validation Error",
  "message": "La petición contiene datos inválidos",
  "errors": [
    {
      "field": "year",
      "message": "Debe ser un número positivo"
    }
  ]
}
```

---


## 5xx Server Error Codes 🔥

Indican que el servidor falló.

### 500 Internal Server Error
**Error genérico del servidor**

- Excepción no controlada
- Configuración incorrecta
- Bug en el códigoe

**Ejemplo**:
```http
GET /api/books

Response:
HTTP/1.1 500 Internal Server Error

{
  "error": "Internal Server Error",
  "message": "Ocurrió un error inesperado",
  "requestId": "abc123"
}
```

---

### 502 Bad Gateway
**Respuesta inválida del servidor intermedio**

- Proxy recibió una respuesta incorrecta
- Backend caído

---

### 503 Service Unavailable
**Servidor no disponible temporalmente**

- Mantenimiento
- Sobrecarga
- Caída temporal

**Ejemplo**:
```http
GET /api/books

Response:
HTTP/1.1 503 Service Unavailable
Retry-After: 3600

{
  "error": "Service Unavailable",
  "message": "El servidor está en mantenimiento",
  "estimatedDowntime": "1 hora"
}
```

---

### 504 Gateway Timeout
**El servidor intermedio no recibió respuesta a tiempo**

- Backend lento
- Problemas de red

---

## Tabla de referencia rápida

### Códigos más comunes
| Código | Nombre |Cuándo usarlo |
|------|----------|-------------|
| 200 | OK        | GET, PUT, PATCH exitosos |
| 201 | Created   | POST exitoso (resource created) |
| 204 | No Content| DELETE exitoso |
| 400 | Bad Request| Datos inválidos syntax/data |
| 401 | Unauthorized| Falta autenticación |
| 403 | Forbidden | Sin permisos |
| 404 | Not Found | Libro no existe |
| 409 | Conflict | Recurso duplicado |
| 422 | Unprocessable Entity | Error de validación |
| 500 | Internal Server Error | 	Error del servidor |
| 503 | Service Unavailable | 	Servidor caído |

---

## Choosing the Right Status Code

### Para POST (Crear)
- ✅ `201 Created` - Creado correctamente
- ❌ `400 Bad Request` - Datos inválidos
- ❌ `409 Conflict` - Recurso duplicado
- ❌ `422 Unprocessable Entity` - Error de validación

### For GET (Read)
- ✅ `200 OK` - Éxito
- ❌ `404 Not Found` - El recurso no existe
- ❌ `401 Unauthorized` - Autenticación requerida

### For PUT/PATCH (Update)
- ✅ `200 OK` - Éxito con contenido
- ✅ `204 No Content` - Éxito sin contenido
- ❌ `404 Not Found` - El recurso no existe
- ❌ `400 Bad Request` - Datos inválidos
- ❌ `422 Unprocessable Entity` - Error de validación

### For DELETE
- ✅ `200 OK` - Éxito con contenido en la respuesta
- ✅ `204 No Content` - Éxito sin contenido
- ❌ `404 Not Found` - El recurso no existe

---


## Guía visual

```
Petición del cliente (ej: GET /api/books)
     ↓
┌────────────┐
│ Servidor   │
└────────────┘
     ↓
Momento de decisión
     ↓
┌────────────────────────────────────┐
│ ¿El servidor entiende la petición? │
│ NO → 4xx (Error del cliente)       │
│ SÍ → Continuar                     │
└────────────────────────────────────┘
     ↓
┌────────────────────────────────────┐
│ ¿Puede procesarla correctamente?  │
│ NO → 5xx (Error del servidor)      │
│ SÍ → Continuar                     │
└────────────────────────────────────┘
     ↓
┌────────────────────────────────┐
│ ¿Se completó con éxito?       │
│ SÍ → 2xx (Éxito)               │
└────────────────────────────────┘
```

---

[← Anterior: Métodos HTTP](02-http-methods.md) | [Siguiente: Principios REST →](04-rest-principles.md)