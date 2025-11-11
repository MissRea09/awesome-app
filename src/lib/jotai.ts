/**
 * Jotai store configuration
 * This prevents "multiple Jotai instances" warnings that can occur
 * when dependencies like react-hook-form or shadcn/ui components
 * use Jotai internally.
 */
import { createStore, Provider as JotaiProvider } from 'jotai';

// Create a single store instance
export const store = createStore();

// Export a configured Provider component
export { JotaiProvider as Provider };
