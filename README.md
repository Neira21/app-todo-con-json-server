# React + Vite
Para iniciar este proyecto, primero instale las dependencias con el siguiente comando:
```bash
  npm install
```

Para iniciar el servidor de la base de datos, ejecute el siguiente comando:
```bash
  npx json-server -p 3500 -w data/db.json
```

Luego, inicie el servidor de desarrollo con el siguiente comando:
```bash
  npm run dev
```

Finalmente, abra su navegador y vaya a la siguiente dirección:
```bash
  http://localhost:3500
```

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
