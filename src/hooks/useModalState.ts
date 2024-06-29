import { create } from "zustand";

type ModalState = {
  isCartModalOpen: boolean;

  openCartModal: () => void;
  closeCartModal: () => void;

};

export const useModalState = create<ModalState>((set) => ({
    isCartModalOpen: false,
    openCartModal: () => set({ isCartModalOpen: true }),
    closeCartModal: () => set({ isCartModalOpen: false }),
}));
