# NexusLands - Premium Land Consultancy Platform

NexusLands is an enterprise-grade, highly performant real estate advisory platform built with **React, Vite, TanStack Router, and Tailwind CSS**.

## Project Architecture
- **Framework**: Vite + React 19
- **Routing**: TanStack Router (File-based, Hierarchical)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion & TW Animate CSS
- **SEO**: Native TanStack head injection & Schema.org JSON-LD

## Development Workflow

To run the project locally:

```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Run type checking
npm run typecheck

# Run linter
npm run lint

# Build for production
npm run build
```

## Folder Structure
- `/src/routes/`: Contains all the page-level components following TanStack file-based routing.
- `/src/components/sections/`: Large, reusable page sections (Hero, About, Contact).
- `/src/components/ui/`: Micro-components like Buttons, Inputs, SectionLabels.
- `/src/lib/`: Utilities like SEO helpers and constants.
