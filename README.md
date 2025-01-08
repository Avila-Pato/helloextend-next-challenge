# 🐶 Dog Breeds Challenge

Este proyecto tiene como objetivo permitir al usuario buscar y explorar diferentes razas de perros, visualizando hasta 10 imágenes de cada raza. Además, integra la funcionalidad de persistencia para guardar imágenes en favoritos al presionar un ícono de corazón. Se utiliza **Zustand** para gestionar el estado global de las imágenes y sus favoritos.

## 📚 Enfoque del Proyecto

Este proyecto no está tan enfocado en que se vea perfecto, sino en aprender a utilizar componentes, funcionalidades y gestionar el estado de manera efectiva. El objetivo principal es familiarizarse con el uso de **Next**, **Zustand**, y la interacción con APIs externas, así como manejar la persistencia de datos y la gestión de estado en una aplicación dinámica.


## 📚 Revisión de la API Dog.ceo By Breed

Para obtener las imágenes de las razas de perros, utilizamos la API de **Dog.ceo**, en el endpoint "By Breed". Esta API permite obtener imágenes de diferentes razas de perros, que luego se integran a la aplicación para mostrar hasta 10 imágenes por raza.

Consulta la documentación del endpoint aquí:  
[Dog.ceo API - By Breed](https://dog.ceo/dog-api/documentation/breed)

## 🎯 Objetivo del desafío

El objetivo de este desafío es permitir que el usuario busque una raza de perro en un campo de búsqueda y, al hacerlo, se muestren hasta 10 imágenes de esa raza en la pantalla. Además, el usuario debe tener la capacidad de marcar estas imágenes como favoritas, agregándolas a una sección especial de favoritos donde podrá visualizarlas más tarde.

## 🛠️ Funcionalidades

- **🔍 Búsqueda de razas**: El usuario puede buscar una raza de perro en un campo de entrada. Al seleccionar una raza, la aplicación mostrará hasta 10 imágenes de esa raza.
  
- **❤️ Favoritos**: Cada imagen de perro tiene un ícono de corazón. Al presionar este ícono, la imagen se agrega o se quita de la sección de favoritos. Esta funcionalidad está respaldada por **Zustand**, que gestiona el estado de los favoritos de forma eficiente y persistente.
  
- **💾 Persistencia de los favoritos**: Las imágenes favoritas se persisten mediante **Zustand**, asegurando que al recargar la página, el estado de los favoritos no se pierda. Esto proporciona una experiencia de usuario fluida y coherente.

- **✨ Interacción de usuario**: Al presionar un ícono de corazón en cualquier imagen, esta se moverá a la sección de favoritos. Al presionar nuevamente, la imagen se eliminará de la lista de favoritos.

- **📋 Listado de razas**: La aplicación también muestra una lista de razas de perros disponibles. Al seleccionar una raza, se mostrará una lista con las imágenes correspondientes.

- **🎨 Diseño**: El diseño es limpio y sencillo, inspirado en el mockup de **Figma**, que facilita la navegación entre razas de perros y la visualización de imágenes .  

Consulta el diseño disponible en **Figma** aquí:  
[Dog Breeds Figma Design](https://www.figma.com/design/GsigoCnExV2jjTBanMZwFr/Dog-Breeds?node-id=0-1&p=f&t=8LEubC1qxGQI02m2-0)

## ⚙️ Tecnologías utilizadas

- **Next** para la interfaz de usuario.
- **Zustand** para la gestión del estado global y la persistencia de los favoritos.
- **Dog.ceo API** para obtener imágenes de razas de perros.
- **Tailwind CSS** para la estilización.


¡Diviértete explorando las razas de perros y guardando tus imágenes favoritas! 🐕💖

## Reeferencias 
![Screenshot_8-1-2025_185330_localhost](https://github.com/user-attachments/assets/86055617-b114-486a-8288-6a56a4255242)

![Screenshot_8-1-2025_185342_localhost](https://github.com/user-attachments/assets/f623c3fe-0d59-4a31-b94a-49105f9c27ef)



