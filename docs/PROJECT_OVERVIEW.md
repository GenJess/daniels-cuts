# Daniel's Cuts Project Overview

## High-Level Overview

Daniel's Cuts is a modern web application designed for a barber shop, providing users with a seamless experience to browse services, view galleries, contact the shop, and book appointments. The project leverages a robust frontend tech stack for performance, maintainability, and a delightful user interface, while integrating Supabase as a backend service for authentication, database, and storage needs.

## Tech Stack

- **Frontend Framework:** React (with TypeScript)
- **Build Tool:** Vite
- **Styling:** Tailwind CSS, shadcn-ui, Radix UI, PostCSS
- **Routing:** react-router-dom
- **State/Data Management:** TanStack React Query, Zod (validation)
- **Backend/DB:** Supabase (via @supabase/supabase-js)
- **Other Libraries:**
    - date-fns (date utilities)
    - recharts (charts)
    - embla-carousel-react (carousel)
    - next-themes (theming)
    - clsx, class-variance-authority (utility)
    - Custom hooks/components
- **Dev Tools:** ESLint, TypeScript, @vitejs/plugin-react-swc, lovable-tagger

## Key Dependencies (from package.json)

- `react`, `react-dom`, `react-router-dom`
- `@supabase/supabase-js`
- `@tanstack/react-query`
- `tailwindcss`, `shadcn-ui`, `radix-ui`
- `zod`, `date-fns`, `recharts`, `embla-carousel-react`, `next-themes`
- `eslint`, `typescript`, `vite`, `@vitejs/plugin-react-swc`

## Project Structure

- `src/` — Main source code
    - `main.tsx` — Entry point, renders `<App />`
    - `App.tsx` — Sets up providers and routes
    - `pages/` — Page-level components for each route (Index, Gallery, Contact, Services, Book, NotFound)
    - `components/` — Reusable UI components
    - `lib/` — Shared libraries (e.g., `supabaseClient.ts` for Supabase integration)
    - `hooks/` — Custom React hooks
    - `routes/` — Additional route logic
- `public/` — Static assets
- `index.html` — Main HTML entry point
- `package.json` — Project scripts and dependencies
- `vite.config.ts` — Vite configuration (port 8080, React SWC, alias @ to ./src)
- `.env` — Environment variables (for Supabase, etc.)

## Supabase Connection

- The Supabase client is initialized in `src/lib/supabaseClient.ts` using environment variables (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`).
- All Supabase-related features (authentication, database, storage) use this client.
- To change Supabase project, update the variables in `.env`.

## How to Get the App Up and Running Locally

1. **Clone the Repository:**
   ```sh
   git clone <YOUR_GIT_URL>
   cd <YOUR_PROJECT_NAME>
   ```
2. **Install Dependencies:**
   ```sh
   npm install
   ```
   - If you encounter permission errors with npm or esbuild, ensure your npm cache and node_modules have correct permissions:
     ```sh
     sudo chown -R $(id -u):$(id -g) ~/.npm
     rm -rf node_modules package-lock.json bun.lockb
     npm install
     ```
3. **Set Up Environment Variables:**
   - Copy `.env.example` to `.env` (if exists), or edit `.env` to provide your Supabase project URL and anon key:
     ```env
     NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
     ```
4. **Start the Development Server:**
   ```sh
   npm run dev
   ```
   - The app will be available at [http://localhost:8080](http://localhost:8080)

5. **Preview Production Build (Optional):**
   ```sh
   npm run build
   npm run preview
   ```

6. **Edit the App:**
   - Make changes in the `src/` directory. The app supports hot module reloading for instant feedback.

## Additional Notes

- For issues with esbuild or permissions, refer to the troubleshooting steps above.
- Supabase keys in the repo are for development only—replace with your own for production.
- For deployment, follow Vite or Lovable platform instructions, or use services like Netlify or Vercel.

---

For further questions or to extend this documentation, let me know!
