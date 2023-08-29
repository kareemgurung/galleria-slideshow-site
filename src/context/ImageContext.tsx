import { createContext, useEffect, useState } from "react";
import data from "../data.json";
import { useNavigate } from "react-router-dom";

type Props = {
  children: any;
};

interface IImageContext {
  modalState: boolean;
  openModal: () => void;
  closeModal: () => void;
  setIndex: (number: number) => void;
  width: number;
  nextPage: () => void;
  prevPage: () => void;
  firstPage: boolean;
  lastPage: boolean;
}

const defaultState = {
  modalState: false,
  openModal: () => {},
  closeModal: () => {},
  progressWidth: () => 0,
  setIndex: () => {},
  width: 0,
  nextPage: () => {},
  prevPage: () => {},
  firstPage: false,
  lastPage: false,
};

const ImageContext = createContext<IImageContext>(defaultState);

export const ImageContextProvider = ({ children }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalState, setModalState] = useState(false);
  const [width, setWidth] = useState(0);
  const navigate = useNavigate();
  const [firstPage, setFirstPage] = useState(false);
  const [lastPage, setLastPage] = useState(false);

  const itemsLength = data.length;

  useEffect(() => {
    const width = Number((((currentIndex + 1) / itemsLength) * 100).toFixed(0));
    setWidth(width);

    if (currentIndex === 0) {
      setFirstPage(true);
      setLastPage(false);
    } else if (currentIndex === itemsLength - 1) {
      setFirstPage(false);
      setLastPage(true);
    } else {
      setFirstPage(false);
      setLastPage(false);
    }
  }, [currentIndex, itemsLength]);

  const nextPageHandler = () => {
    if (currentIndex === itemsLength - 1) return;
    const id = data[currentIndex + 1].id;
    navigate(`/art/${id}`);
  };

  const prevPageHandler = () => {
    if (currentIndex === 0) return;
    const id = data[currentIndex - 1].id;
    navigate(`/art/${id}`);
  };

  const openModalHandler = () => {
    console.log("open");
    setModalState(true);
  };
  const closeModalHandler = () => {
    setModalState(false);
  };

  const indexHandler = (number: number) => {
    setCurrentIndex(number);
  };
  return (
    <ImageContext.Provider
      value={{
        modalState: modalState,
        openModal: openModalHandler,
        closeModal: closeModalHandler,
        setIndex: indexHandler,
        width: width,
        prevPage: prevPageHandler,
        nextPage: nextPageHandler,
        firstPage: firstPage,
        lastPage: lastPage,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};

export default ImageContext;
