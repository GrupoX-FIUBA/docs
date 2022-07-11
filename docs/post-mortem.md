---
sidebar_position: 5
slug: postmortem
---

# Análisis postmortem

## Poca experiencia previa
En términos generales todos los integrantes del grupo teníamos poca y hasta nula experiencia previa con las tecnologías necesarias y conceptos desarrollados en la materia. Debido a esto, el primer mes no nos enfocamos en otra cosa que aprender a utilizar las herramientas y tecnologías requeridas, y durante este periodo de tiempo casi no hubo avances en el desarrollo de la aplicación.
Pero luego del primer mes, con cada uno de los integrantes del grupo teniendo en claro sus tareas y con algunos de los conocimientos básicos necesarios se empezaron a lograr los primeros progresos, y una vez superada esta primera etapa de organización y aprendizaje, consideramos que el equipo se desenvolvió adecuadamente a lo largo del cuatrimestre ya que mayores problemas en cumplir con la propuesta del TP.

## Tests con firebase
En un principio teníamos la idea de crear pruebas automatizadas utilizando una versión local en un container de docker pero no logramos que funcione y terminamos _mockeando_ la api de firebase para python. 

## Autenticación federada
La autenticación federada de Firebase con expo nos trajo problemas e hizo perder bastante tiempo ya que ninguna de las bibliotecas de expo para Firebase funcionaban correctamente. Sumado a esto, la documentación de las mismas estaba incompleta y era inconsistente, por lo que terminamos utilizando una versión  _deprecated_.

## Integración con Datadog
En algunos casos la documentación de Datadog puede llegar a ser confusa y bastante abrumadora, y nos llevó un tiempo entender cómo integrarlo en una imagen de Docker. El ejemplo proveído por el curso fue de gran ayuda en ese aspecto.
