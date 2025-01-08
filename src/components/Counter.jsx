import React, {useState} from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 text-white p-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-8 drop-shadow-lg animate-pulse">
            Contador
          </h1>
          <div className="text-6xl sm:text-8xl font-bold mb-10 transition-transform transform-gpu hover:scale-110 duration-300">
            <span
              className={`${
                count % 2 === 0 ? "text-yellow-300" : "text-teal-300"
              } animate-bounce`}
            >
              {count}
            </span>
          </div>
        
          <div className="flex space-x-6">
            <button
              onClick={() => setCount(count + 1)}
              className="px-6 py-3 bg-pink-600 rounded-full shadow-lg hover:bg-pink-700 hover:translate-y-1 transform transition-all duration-300 active:scale-90 text-sm sm:text-base"
            >
              Incrementar
            </button>
            <button
              onClick={() => count > 0 && setCount(count - 1)}
              className="px-6 py-3 bg-purple-700 rounded-full shadow-lg hover:bg-purple-800 hover:translate-y-1 transform transition-all duration-300 active:scale-90 text-sm sm:text-base"
            >
              Decrementar
            </button>
          </div>
          
          <div className="mt-4">
            <button
              onClick={() => setCount(0)}
              className="px-8 py-3 bg-gray-700 rounded-full shadow-lg hover:bg-gray-800 hover:translate-y-1 transform transition-all duration-300 active:scale-90 text-sm sm:text-base"
            >
              Reiniciar
            </button>
          </div>
          {count === 10 && (
            <p className="absolute bottom-10 text-sm sm:text-lg font-medium bg-black bg-opacity-50 px-4 py-2 rounded-full animate-fade-in">
              ¡Enhorabuena, has llegado a 10!
            </p>
          )}
        </div>
      );
    };