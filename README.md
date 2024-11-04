# Desafío SoftJobs
## Julio Olivares

### Backend
#### Dependencias utilizadas en el backend

```json
      "dependencies": {
        "bcryptjs": "^2.4.3",
        "cors": "^2.8.5",
        "dotenv": "^16.4.5",
        "express": "^4.21.1",
        "jsonwebtoken": "^9.0.2",
        "pg": "^8.13.1"
      },
      "devDependencies": {
        "nodemon": "^3.1.7"
      }
```

#### Instalación de dependencias

```bash
npm i bcryptjs cors dotenv express jsonwebtoken pg
```

#### Instalación de dependencias de desarrollador

```bash
npm i nodemon -D
```

#### Estructura de .env

```makefile
# Puerto del servidor
PORT=3000

# Configuración de la Base de Datos

PG_HOST=localhost
PG_USER=XXXX
PG_PASSWORD=XXXX
PG_PORT=5432
PG_DATABASE=softjobs
ALLOW_EXIT_ON_IDLE=true
```

#### Creación de la Base de datos

```sql
CREATE DATABASE softjobs;

\c softjobs;

CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  email VARCHAR(50) NOT NULL,
  password VARCHAR(60) NOT NULL,
  rol VARCHAR(25),
  lenguage VARCHAR(20) );

SELECT * FROM usuarios;

```

#### Encender Servidor

```bash
nodemon app.js
```

### Frontend
#### Dependencias utilizadas en el frontend

```json
      "dependencies": {
        "axios": "1.5.1",
        "bootstrap": "5.3.2",
        "react": "18.2.0",
        "react-dom": "18.2.0",
        "react-router-dom": "6.17.0"
      },
      "devDependencies": {
        "@types/react": "18.2.15",
        "@types/react-dom": "18.2.7",
        "@vitejs/plugin-react-swc": "3.3.2",
        "eslint": "8.45.0",
        "eslint-plugin-react": "7.32.2",
        "eslint-plugin-react-hooks": "4.6.0",
        "eslint-plugin-react-refresh": "0.4.3",
        "standard": "17.1.0",
        "vite": "4.4.5"
      },
  ```
#### Instalación de dependencias

```bash
npm i
```
#### Visualizar app

```bash
npm run dev
```
