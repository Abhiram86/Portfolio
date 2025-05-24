import { createContext, useState } from "react";

export type ModalCarouselPropsData = {
  projectId: number;
  name: string;
  imgSrc: string;
  pages: string[];
};

type ModalCarouselContextType = {
  data: ModalCarouselPropsData | null;
  setOpen: (data: ModalCarouselPropsData | null) => void;
};

export const ModalCarouselContext = createContext<ModalCarouselContextType>({
  data: null,
  setOpen: () => {},
});

export const ModalCarouselProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [data, setOpen] = useState<ModalCarouselPropsData | null>(null);
  return (
    <ModalCarouselContext.Provider value={{ data, setOpen }}>
      {children}
    </ModalCarouselContext.Provider>
  );
};
