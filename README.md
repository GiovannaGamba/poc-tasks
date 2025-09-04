# React + TypeScript + Vite

## Instalação

```bash
npm install
```

## Rodar em desenvolvimento

```bash
npm run dev
```

# Setup mock API

Create a project at `https://mockapi.io` and add the following resources:
- `/inicio`
- `/workflow`
- `/formularios`

Each resource should be a collection with the fields you need (e.g., `titulo`, `status`, etc).

Then create `.env.local` in the project root with:

```
VITE_API_URL=https://<your-mockapi-project-base-url>
```

Example: `https://66d12345abcd12345.mockapi.io`

Restart the dev server to apply env changes.
