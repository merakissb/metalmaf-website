"use client";

import { useTheme } from "next-themes";

const NewsLatterBox = () => {
  const { theme } = useTheme();

  return (
    <div className="relative z-10 rounded-sm bg-white p-8 shadow-three dark:bg-gray-dark sm:p-11 lg:p-8 xl:p-11">
      <h3 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
        Dirección
      </h3>
      <p className="mb-2 font-bold leading-tight text-black dark:text-white">
        Casa matriz / Fábrica
      </p>
      <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
        Camino las Higueras Parcela 29, Sitio 9, Lampa
      </p>

      <p className="mb-2 font-bold leading-tight text-black dark:text-white">
        Oficina
      </p>
      <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
        Los Cuculies #6820, Huechuraba
      </p>

      <p className="mb-2 font-bold leading-tight text-black dark:text-white">
        Celular
      </p>
      <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">
        +569 94947370
      </p>
    </div>
  );
};

export default NewsLatterBox;
