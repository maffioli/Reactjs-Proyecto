import {
  createContext,
  useContext,
  useState,
  useMemo,
  type ReactNode,
} from "react";

interface TabsContextType {
  activeTab: string;
  setActiveTab: (id: string) => void;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

const useTabsContext = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("Tabs sub-components must be used within a <Tabs />");
  }
  return context;
};

/** Propiedades para el contenedor principal de Pestañas (Tabs) */
interface TabsProps {
  /** El ID de la pestaña que debe aparecer abierta al cargar el componente */
  defaultTab: string;
  /** Los componentes hijos (Tabs.Header y Tabs.Content) */
  children: ReactNode;
}

export const Tabs = ({ defaultTab, children }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const value = useMemo(() => ({ activeTab, setActiveTab }), [activeTab]);

  return (
    <TabsContext.Provider value={value}>
      <div className="tabs-container">{children}</div>
    </TabsContext.Provider>
  );
};

/** Propiedades para el encabezado que contiene los botones de navegación */
const Header = ({ children }: { children: ReactNode }) => (
  <div
    role="tablist"
    style={{
      display: "flex",
      borderBottom: "2px solid #e2e8f0",
      marginBottom: "16px",
    }}
  >
    {children}
  </div>
);

/** Propiedades para un botón de pestaña individual */
interface TabProps {
  /** Identificador único para esta pestaña */
  id: string;
  /** Texto o iconos que se muestran en el botón */
  children: ReactNode;
}

const Tab = ({ id, children }: TabProps) => {
  const { activeTab, setActiveTab } = useTabsContext();
  const isActive = activeTab === id;

  return (
    <button
      role="tab"
      aria-selected={isActive}
      onClick={() => setActiveTab(id)}
      style={{
        padding: "12px 24px",
        border: "none",
        borderBottom: isActive ? "2px solid #3b82f6" : "2px solid transparent",
        backgroundColor: "transparent",
        color: isActive ? "#3b82f6" : "#64748b",
        fontWeight: isActive ? "600" : "400",
        cursor: "pointer",
        fontSize: "14px",
        marginBottom: "-2px",
        transition: "all 0.2s ease",
      }}
    >
      {children}
    </button>
  );
};

/** Propiedades para el contenedor del contenido de una pestaña */
const Content = ({ id, children }: { 
  /** Debe coincidir con el 'id' del Tab correspondiente para mostrarse */
  id: string; 
  /** Elementos o componentes que se renderizan dentro de esta pestaña */
  children: ReactNode 
}) => {
  const { activeTab } = useTabsContext();
  if (activeTab !== id) return null;
  return (
    <div role="tabpanel" aria-labelledby={id} style={{ padding: "16px 0" }}>
      {children}
    </div>
  );
};

Tabs.Header = Header;
Tabs.Tab = Tab;
Tabs.Content = Content;