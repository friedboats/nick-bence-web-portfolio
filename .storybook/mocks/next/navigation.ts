export const useRouter = () => ({
  push: (path: string) => console.log(`Mock push to: ${path}`),
  prefetch: async () => {},
});

export const usePathname = () => '/mock-path';
