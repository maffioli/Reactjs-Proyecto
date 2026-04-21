# 🚀 TaskFlow | Game Dev Management System

<p align="center">
  <img src="https://img.shields.io/badge/Status-In%20Development-green?style=for-the-badge" alt="Status">
  <img src="https://img.shields.io/badge/Role-Game%20Design%20%26%20Software-blue?style=for-the-badge" alt="Role">
  <img src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge" alt="License">
</p>

¡Bienvenido a **TaskFlow**! Una herramienta integral diseñada específicamente para desarrolladores independientes y estudios de videojuegos que necesitan organizar su caos creativo. Desde el diseño de niveles hasta la mezcla final de audio, TaskFlow mantiene tus proyectos en órbita.

---

## ✨ Características Principales

* **Pizarra Interactiva:** Visualizá el estado de tus tareas y proyectos de un vistazo.
* **Gestión de Tareas:** Categorización por estados (*Por hacer, En progreso, Pausadas, Completadas, Canceladas*).
* **Seguimiento de Proyectos:** Control total sobre múltiples títulos en paralelo (RPGs, FPS, Simuladores, etc.).
* **Estadísticas en Tiempo Real:** Métricas de productividad, tasa de finalización y distribución de prioridades.

---

## 🛠️ Stack Tecnológico

| Componente | Tecnología |
| :--- | :--- |
| **Frontend** | React / Next.js |
| **Estilos** | Tailwind CSS / Lucide Icons |
| **Lógica** | JavaScript / TypeScript |
| **Estado** | Context API |

---

## 📊 Métricas de Desarrollo

El sistema permite trackear puntos críticos del workflow para optimizar tiempos de entrega:

* **Distribución de Prioridades:** Identificá rápidamente los cuellos de botella con niveles *High, Medium y Low*.
* **Progreso Total:** Barra de avance porcentual basada en tareas completadas vs. totales.
* **Tasa de Finalización:** Porcentaje de proyectos cerrados exitosamente.

---

## 🚀 Instalación y Uso

Si querés probar el entorno localmente:

1. **Cloná el repositorio:**
  ```bash
  git clone https://github.com/maffioli/Reactjs-Proyecto.git
  cd Reactjs-Proyecto/proyecto
  ```

2. **Instalá las dependencias:**
  ```bash
  npm install
  ```

3. **Iniciá el servidor de desarrollo:**
  ```bash
  npm run dev
  ```

---

## 🧪 Testing con Vitest

El proyecto utiliza [Vitest](https://vitest.dev/) junto a [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/) y [@testing-library/jest-dom](https://github.com/testing-library/jest-dom) para pruebas unitarias y de integración.

### Configuración relevante:

- **Alias de paths:** Se usa `vite-tsconfig-paths` para que los imports con alias funcionen en los tests.
- **Matchers de jest-dom:** Se cargan automáticamente desde `vitest.setup.ts`.
- **Ambiente jsdom:** Configurado en `vitest.config.ts`.

### Comandos útiles:

- **Correr todos los tests:**
  ```bash
  npm run test
  ```

- **Correr tests en modo watch:**
  ```bash
  npm run test:watch
  ```

### Archivos clave:

- `vitest.config.ts`: Configuración de Vitest, setupFiles y alias.
- `vitest.setup.ts`: Setup para jest-dom.

Si encontrás errores de imports o matchers, asegurate de tener instalados:

```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom vite-tsconfig-paths
```

---

## 📂 Estructura relevante para testing

- `__tests__/`: Pruebas unitarias e integración.
- `app/taskManagement/components/`, `app/taskManagement/hooks/`: Componentes y hooks testeados.

---

Para cualquier duda sobre testing o configuración, revisá los archivos mencionados o consultá en Issues.