<p align="center">
  <h3 align="center">Skytel</h3>
  <p align="center">
    Desafío técnico
</p>
  
</p>
<details open="open">
  <summary>Contenido</summary>
  <ol>
    <li>
      <a href="#about-the-project">Sobre el proyecto</a>
      <ul>
        <li><a href="#built-with">Construído con</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Primeros pasos</a>
      <ul>
        <li><a href="#prerequisites">Pre requisitos</a></li>
        <li><a href="#installation">Instalación</a></li>
      </ul>
    </li>
    <li><a href="#usage">Uso</a></li>
    <li><a href="#contact">Contacto</a></li>
  </ol>
</details>

## Sobre el proyecto

El proyecto forma parte del desafío técnico de Skytel.

Debes desarrollar un formulario web que envíe al backend la siguiente información:

- Nombre completo ( texto, entre 1 - 50 caracteres )
- Teléfono ( numérico, entre 5 - 10 dígitos )
- Email ( formato email )
  El frontend debe validar que los datos ingresados sean correctos. Debes mostrar al usuario los
  errores de validación que hayan ocurrido.

Debe ser responsive.
La información debe enviarse a una API desarrollada por vos.
Debes mostrar en pantalla la información devuelta por el backend.

### Construído con

- [Angular CLI](https://github.com/angular/angular-cli) version 13.2.6.
- [Bootstrap 5](https://getbootstrap.com/)

## Primeros pasos

### Pre requisitos

- yarn o npm

### Instalación

1. Clonar el repositorio
   ```sh
   https://github.com/jaimeferreira11/skytel-web.git
   ```
2. Instalar paquetes yarn/NPM
   ```sh
   yarn / npm install
   ```

## Ejecución

Ejecutar localmente

```
ng serve
```

o

```sh
   yarn / npm start
```

Navegue a `http://localhost:4200/`

Para cambiar la url del backend, modifique el archivo `enviroments/enviroments.ts`

Project backend: [https://github.com/jaimeferreira11/skytel-rest](https://github.com/jaimeferreira11/skytel-rest)

## Contacto

Lic. Jaime Ferreira - jaimeferreira11@gmail.com
