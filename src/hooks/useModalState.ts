import { create } from "zustand";

type ModalState = {
  isCartModalOpen: boolean;

  openCartModal: () => void;
  closeCartModal: () => void;

};

export const useModalState = create<ModalState>((set) => ({
    isCartModalOpen: true,
    openCartModal: () => set({ isCartModalOpen: true }),
    closeCartModal: () => set({ isCartModalOpen: false }),
}));
