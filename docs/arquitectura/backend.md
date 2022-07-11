---
sidebar_position: 2
description: Kubernetes, microservices, API Gateway
---

# Backend

## Kubernetes

Para el despliegue del _backend_, se optó por utilizar la tecnología Kubernetes. El proveedor del _cluster_ elegido fue [Okteto Cloud](https://www.okteto.com/) por su capa gratuita, aunque los manifiestos son agnósticos a este y se puede desplegar en cualquier otro proveedor.

La metodología utilizada para el desarollo de la red fue que cada microservicio tenga sus propios manifiestos, los cuales contienen un _deployment_ para ese servicio. A su vez, existe un _deployment_ para la base de datos y un _persistent volume claim_ para persistir la misma. Estos últimos manifiestos, junto con sus instrucciones, se encuentran en el siguiente [repositorio](https://github.com/GrupoX-FIUBA/kubernetes).

Con el fin de generalizar, automatizar y abstraer lo mayor posible la infraestructura del programador, se intentó utilizar al máximo las variables de entorno para la configuración de los servicios.

## Microservicios

Los microservicios se desarrollaron utilizando [FastAPI](https://fastapi.tiangolo.com/) (Python) y [Fastify](https://www.fastify.io/) (Javascript). Para ambos casos, se tienen plantillas[¹](#referencias) en el Github de la organización, las cuales poseen un código esqueleto, los manifiestos necesarios para CI/CD en Github Actions y Kubernetes, y un Readme con instrucciones de configuración y ejecución local.

### 👤 Usuarios

- [API Docs](https://users-service-manuelbilbao.cloud.okteto.net/docs)
- [Github Repo](https://github.com/GrupoX-FIUBA/users-service)

### 🎵 Música

- [API Docs](https://music-service-manuelbilbao.cloud.okteto.net/docs)
- [Github Repo](https://github.com/GrupoX-FIUBA/music-service)

### 💰 Pagos

- [API Docs](https://payments-service-manuelbilbao.cloud.okteto.net/docs)
- [Github Repo](https://github.com/GrupoX-FIUBA/payments-service)

### ⭐ Feedback

- [API Docs](https://feedback-service-manuelbilbao.cloud.okteto.net/docs)
- [Github Repo](https://github.com/GrupoX-FIUBA/feedback-service)

## API Gateway

La misma sirve como intermediaria entre los microservicios y los usuarios (clientes y administradores) a fin de mantenerlos aislados. De esta forma, no es necesario exponer los microservicios a internet y se puede conseguir una mayor seguridad. Está desarrollado con [Fastify](https://www.fastify.io/).

- [API Docs](https://api-gateway-manuelbilbao.cloud.okteto.net/docs)
- [Github Repo](https://github.com/GrupoX-FIUBA/api-gateway-mobile)

## Monitoreo

Para monitorear las peticiones y respuestas de los microservicios y el API Gateway, utilizamos el servicio de [Datadog](https://www.datadoghq.com/), el cual nos brinda un poderoso _log_, además de métricas muy útiles.

También usamos [Upptime](https://upptime.js.org/) para tener un seguimiento del estado de los microservicios, verificando que los servidores estén activos y guardando su tiempo de respuesta. Esta herramienta también nos permite configurar el envío de notificaciones en caso de detectar la baja de un microservicio, y su subsiguiente alta. En nuestro caso, utilizamos esta función para enviar notificaciones a nuestro servidor de Discord.

![Captura de Discord donde se ven las notificaciones de Upptime](/img/upptime.png)

## Referencias

- Plantilla FastAPI: [Github Repo](https://github.com/GrupoX-FIUBA/template-fastapi)
- Plantilla Fastify: [Github Repo](https://github.com/GrupoX-FIUBA/template-fastify)
