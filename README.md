## Project setup

```bash
 pnpm install
```

**NOTA : modificar el archivo env y [docker compoes](db\docker-compose.yml.template)**

## Compile and run the project

```bash
# development
 pnpm run start

# watch mode
 pnpm run start:dev

# production mode
 pnpm run start:prod
```

## Run tests

```bash
# unit tests
 pnpm run test

# e2e tests
 pnpm run test:e2e

# test coverage
 pnpm run test:cov
```

## Install dependenci

```bash
npm install @nestjs/typeorm typeorm pg
npm install @nestjs/config
npm install class-validator class-transformer
```
## Crear modulos controles y servicios
```bash
nest g module modules/users
nest g controller modules/users/infrastructure/controllers/user --flat --no-spec
nest g service modules/users/application/use-cases/create-user --flat --no-spec

```

## Probar API con cURL

### Health Check

```bash
curl http://localhost:3000/health
```

### Users

#### GET - Obtener todos

```bash
curl http://localhost:3000/users
```

#### GET - Obtener por ID

```bash
curl http://localhost:3000/users/123e4567-e89b-12d3-a456-426614174000
```

#### POST - Crear usuario

```bash
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"name": "Juan Perez", "email": "juan@email.com", "password": "123456"}'
```

#### PUT - Reemplazar usuario

```bash
curl -X PUT http://localhost:3000/users/123e4567-e89b-12d3-a456-426614174000 \
  -H "Content-Type: application/json" \
  -d '{"name": "Juan Actualizado", "email": "juan.nuevo@email.com"}'
```

#### DELETE - Eliminar usuario

```bash
curl -X DELETE http://localhost:3000/users/123e4567-e89b-12d3-a456-426614174000
```
