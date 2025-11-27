# Sistema-Corporativo-Gestion-Empleados-Impresistem
Este repositorio contiene la arquitectura y lineamientos técnicos para la Plataforma Corporativa de Gestión de Empleados, un ecosistema basado en microservicios desarrollados en Node.js + TypeScript, enfocado en:

- Gestión completa del ciclo de vida del empleado.
- Integración con otros sistemas corporativos mediante APIs REST.
- Evaluación automatizada a los 2 meses de ingreso.
- Procesos de reclutamiento y convocatorias internas/externas.
- Alta seguridad, trazabilidad y cumplimiento normativo.

La plataforma se orquesta mediante un API Gateway y cada servicio funciona de manera independiente, con su propia base de datos y pipeline de despliegue.

## Microservicios

- **svc-empleados** – Gestión de empleados, perfiles, contrato, historial, PII.
- **svc-evaluaciones** – Gestiona evaluaciones y encuestas, incluyendo evaluación automática a los 60 días del ingreso.
- **svc-reclutamiento** – Creación de convocatorias y procesos de selección.
- **api-gateway** – Autenticación, enrutamiento, seguridad.
- **svc-auth** – Emisión y validación de JWT.

## Tecnologías

- Node.js + TypeScript
- Express.js
- Prisma ORM (MySQL o PostgreSQL)
- Docker + Docker Compose
- Swagger / OpenAPI
- JWT (autenticación)
- API Gateway (Express Gateway o propio)
- Git/GitHub
- CI/CD (GitHub Actions)