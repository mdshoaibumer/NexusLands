import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  ScrollRestoration,
} from "@tanstack/react-router";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/shared/WhatsAppFloat";
import { Analytics } from "@/components/shared/Analytics";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-cream px-4 text-center">
      <div className="text-[10px] uppercase tracking-[0.25em] text-gold">Error 404</div>
      <h1 className="mt-6 font-display text-[3.5rem] leading-none tracking-tight text-forest-deep sm:text-[4.5rem]">
        Page not found
      </h1>
      <p className="mt-6 max-w-md text-[16px] leading-[1.8] text-muted-foreground text-pretty">
        The page you are looking for doesn't exist, has been moved, or is temporarily unavailable.
      </p>
      <div className="mt-10">
        <a
          href="/"
          className="inline-flex h-14 items-center justify-center rounded-sm bg-forest px-8 text-[12px] font-bold uppercase tracking-[0.15em] text-white transition-all duration-500 hover:bg-gold hover:text-forest-deep shadow-elegant"
        >
          Return to Homepage
        </a>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-cream px-4 text-center">
      <div className="text-[10px] uppercase tracking-[0.25em] text-gold">System Error</div>
      <h1 className="mt-6 font-display text-[2.5rem] leading-tight tracking-tight text-forest-deep sm:text-[3.5rem]">
        We encountered an issue
      </h1>
      <p className="mt-6 max-w-md text-[16px] leading-[1.8] text-muted-foreground text-pretty">
        An unexpected error occurred while loading this page. Please try again or return to the homepage.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="inline-flex h-14 items-center justify-center rounded-sm bg-forest px-8 text-[12px] font-bold uppercase tracking-[0.15em] text-white transition-all duration-500 hover:bg-gold hover:text-forest-deep shadow-elegant"
        >
          Try Again
        </button>
        <a
          href="/"
          className="inline-flex h-14 items-center justify-center rounded-sm border border-forest/20 bg-transparent px-8 text-[12px] font-bold uppercase tracking-[0.15em] text-forest transition-all duration-500 hover:border-forest-deep hover:bg-forest-deep hover:text-white"
        >
          Return to Homepage
        </a>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    component: RootComponent,
    notFoundComponent: NotFoundComponent,
    errorComponent: ErrorComponent,
  },
);

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <ScrollRestoration />
      <div className="relative overflow-x-clip bg-background text-foreground">
        <a
          href="#main-content"
          className="absolute left-4 top-4 z-[100] -translate-y-[150%] rounded-sm bg-forest px-4 py-2 text-sm font-medium text-white transition-transform focus:translate-y-0"
        >
          Skip to main content
        </a>
        <Nav />
        <main id="main-content">
          <Outlet />
        </main>
        <Footer />
        <WhatsAppFloat />
        <Analytics />
      </div>
    </QueryClientProvider>
  );
}
