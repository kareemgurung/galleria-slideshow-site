import { createContext, useState } from "react";

type Props = {
  children: any;
};

interface IImageContext {
  modalState: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const defaultState = {
  modalState: false,
  openModal: () => {},
  closeModal: () => {},
};

const ImageContext = createContext<IImageContext>(defaultState);

export const ImageContextProvider = ({ children }: Props) => {
  const [modalState, setModalState] = useState(false);

  const openModalHandler = () => {
    console.log("open")
    setModalState(true);
  };
  const closeModalHandler = () => {
    setModalState(false);
  };
  return (
    <ImageContext.Provider
      value={{
        modalState: modalState,
        openModal: openModalHandler,
        closeModal: closeModalHandler,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};

export default ImageContext;
