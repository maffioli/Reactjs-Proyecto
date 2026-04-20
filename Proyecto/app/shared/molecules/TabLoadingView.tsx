"use client";

export const TabLoadingView = () => {
  return (
    <div className="w-full py-20 flex flex-col items-center justify-center space-y-6">
      {/* Spinner circular más notorio */}
      <div className="spinner" />
      
      {/* Texto de carga descriptivo */}
      <p className="text-gray-500 font-medium text-lg animate-pulse">
        Cargando contenido...
      </p>

      <style jsx>{`
        .spinner {
          width: 50px;
          height: 50px;
          border: 6px solid #f3f3f3;
          border-top: 6px solid #3b82f6; /* Color azul para combinar con los Tabs */
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
};