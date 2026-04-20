import { TabLoadingView } from "./shared/molecules/TabLoadingView";

export default function Loading() {
  return (
    <div className="container mx-auto p-8">
      {/* Simulamos la estructura de la página */}
      <div className="h-10 w-48 bg-gray-100 rounded mb-8" />
      <TabLoadingView />
    </div>
  );
}