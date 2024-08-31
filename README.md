# Task Manager

Task Manager es una aplicación web que permite a los usuarios gestionar proyectos y tareas de manera colaborativa. Los usuarios pueden crear proyectos, asignar tareas, agregar colaboradores y organizar las tareas en diferentes estados, como "pendientes", "completadas" o algun otro estado personalizado.

## Características

- **Autenticación de usuarios**: Los usuarios pueden registrarse e iniciar sesión para gestionar sus proyectos.
- **Gestión de proyectos**: Los usuarios pueden crear, editar y eliminar proyectos.
- **Asignación de tareas**: Las tareas pueden ser asignadas a diferentes usuarios dentro de un proyecto.
- **Filtrado y organización**: Las tareas pueden ser filtradas por diferentes estados.
- **Colaboración en tiempo real**: Agrega y gestiona colaboradores en cada proyecto.
- **Interfaz de usuario moderna**: Utiliza React, Tailwind CSS y Framer Motion para una experiencia de usuario atractiva y fluida.

## Tecnologías Utilizadas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **React Router**: Para la gestión de rutas dentro de la aplicación.
- **Zustand**: Biblioteca de gestión de estado para React.
- **Tailwind CSS**: Framework de CSS para diseñar interfaces responsivas y modernas.
- **Framer Motion**: Biblioteca de animaciones para React.
- **React Toastify**: Para mostrar notificaciones amigables en la aplicación.
- **Font Awesome**: Íconos para mejorar la UI/UX.
- **Firebase**: Plataforma utilizada para autenticación, Firestore (base de datos), y almacenamiento.
- **Vite**: Herramienta de construcción rápida para proyectos modernos de frontend.

## Instalación

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/NaoRYK/linxtask.git
   cd linxtask
   npm install
 ## 2. Configurar Firebase

Para configurar Firebase en el proyecto, sigue estos pasos:

1. **Crear un proyecto en Firebase:**
   - Ve a [Firebase Console](https://console.firebase.google.com/).
   - Haz clic en "Agregar proyecto" y sigue las instrucciones para crear un nuevo proyecto.

2. **Habilitar servicios:**
   - En el panel de Firebase, habilita **Firestore**, **Authentication** y **Storage**.
   
3. **Obtener las credenciales del proyecto:**
   - En la sección de configuración del proyecto en Firebase, encuentra las credenciales necesarias para conectar tu aplicación. Deberás copiar las siguientes claves:

     - `API_KEY`
     - `AUTH_DOMAIN`
     - `PROJECT_ID`
     - `STORAGE_BUCKET`
     - `MESSAGING_SENDER_ID`
     - `APP_ID`

3. **Configurar variables de entorno:**
   - En la raíz del proyecto, crea un archivo `.env`.
   - Agrega las siguientes variables de entorno al archivo `.env`, reemplazando los valores con las credenciales que obtuviste en el paso anterior:

   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
