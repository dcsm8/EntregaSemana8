#  Pruebas automatizadas - Entrega final 

## Entregables

En esta carpeta compartida, se encuentra el video de sustentacion, asi como el documento con la estrategia final de pruebas
[https://drive.google.com/drive/u/0/folders/1mCsQE1EnH8fH8Ay89Khqq7hzyGHX_VyK](https://drive.google.com/drive/u/0/folders/1mCsQE1EnH8fH8Ay89Khqq7hzyGHX_VyK)

<img width="392" alt="image" src="https://github.com/dcsm8/EntregaSemana8/assets/32424414/078bf589-320a-4d0c-a935-30d1f96c4ae5">


## Información del proyecto
- Universdad: Universidad de los Andes
- Project: Pruebas automatizadas a CMS Ghost

## Integrantes

- David Sánchez
- Juan Jose Chiroque
- Diego Correa
- Julio Cardenas

## Funcionalidades a probar
- Crear post
- Editar post
- Eliminar post
- Consultar post
- Publicar post 
- Crear pagina
- Pubicar pagina
- Crear tags
- Crear usuarios
- Iniciar sesion
- Actualizar el menú principal 

## Pruebas implementadas
En el repositorio hay 8 carpetas correspondientes a diferentes proyectos implementados para cada tipos de pruebas. 
Dentro de cada carpeta, se encuentra la informacion de como ejecutarlo en su readme.
A continuacion, una breve explicacion de cada uno de ellos

## cypress-monkey-testing-v3.41.1  (Monkey testing)
Se implementaron 5 pruebas de monkey sobre la version 3.41.0 de Ghost
Para mayor informacion [README](./cypress-monkey-testing-v3.41.1/README.md) for more info

## exploratory-testing (Pruebas exploratorias)
Se realizo pruebas exploratorias manuales sobre Ghost 3.41.1 para identificar todas las posibilidades que puede ofrecer Ghost para realizar las pruebas de forma automatizada
Este carpeta esta conformada por un docuemento excel en donde se registraron las pruebas realizadas
Contenido: 40 pruebas exploratorias
Para mayor informacion, ingresar a la carpeta exploratory-testing

## kraken-data-generation-v3.41.1 (Pruebas a priori y Pruebas aleatorias)
En este proyecto se realizao pruebas automatizadas utilizando Kraken para la version 3.41.0 de Ghost. Para ello, se realizaron pruebas 
pruebas a priori y pruebas aleatorias:
- 30 pruebas con datos a priori 
- 41 pruebas con datos aleatorios 
Mayor informacion en [README](./kraken-data-generation-v3.41.1/kraken_v3/README.md) for more info

## kraken-e2e-testing-v4.40.0 (Pruebas E2E)
Este proyecto contiene la implementacion de pruebas de extremo a extremo con la herramienta Kraken para la version 4.40.0 d Ghost. 
Se tiene 20 escenario de pruebas identificados.
Mayor informacion en [README](./kraken-data-generation-v3.41.1/kraken_v3/README.md) for more info

## playwright-data-generation-v3.41.1 (Pruebas a priori, Pruebas aleatorias)
Con Playwright realizamos pruebas para generar datos sobre los formulario de Ghost v.3.41.0 con datos a priori y con datos aleatorios. Tenemos un total de 16 pruebas con datos a priori y 35 con datos aleatorios
Mayor informacion en [README](./playwright-data-generation-v3.41.1/README.md) for more info

## playwright-e2e-testing-v3.41.1 (Pruebas E2E)
Este proyecto contiene la implementacion de pruebas de extremo a extremo para la version 3.41.0 de Ghost utilizando Playright. 
Se tiene 20 escenario de pruebas identificados.
Mayor informacion en [README](./playwright-e2e-testing-v3.41.1/README.md) for more info

## playwright-regression-testing-v3.41.1-v.4.40.0 (Regresion Visual)
Este proyecto se utilizo para realizar pruebas de regresion visual sobre 2 versiones de Ghost: 3.41.0 y 4.40.
Se ejecutaron 34 escenario de pruebas
Mayor informacion en [README](./playwright-regression-testing-v3.41.1-v.4.40.0/README.md) for more info

## ripuppet-ripper-testing-v3.41.1 (Ripper testing)
Este proyecto contiene la implementacion de un Ripper para obre Ghost 3.41.1 usando ripuppet en donde se identifico 265 estados diferentes
Mayor informacion en [README](./ripuppet-ripper-testing-v3.41.1/README.md) 




