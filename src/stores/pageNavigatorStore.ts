import { create } from 'zustand';
import { combine } from 'zustand/middleware';

const usePageNavigatorStore = create(
  combine(
    {
      currentPageIndex: 0,
      totalPages: 0,
      currentPageURL: '',
      currentPageList: [] as string[],
    },
    (set) => ({
      increasePageIndex: () =>
        set((state) => ({
          currentPageIndex: (state.currentPageIndex + 1) % state.totalPages,
        })),
      decreasePageIndex: () =>
        set((state) => ({
          currentPageIndex:
            (state.currentPageIndex - 1 + state.totalPages) % state.totalPages,
        })),
      setPageNames: (currentPages: string[]) => {
        set({
          currentPageList: currentPages,
          totalPages: currentPages.length,
        });
      },
      setPageIndex: (index: number) =>
        set((state) => ({
          currentPageIndex: Math.min(Math.max(index, 0), state.totalPages - 1),
        })),
    }),
  ),
);

export default usePageNavigatorStore;
