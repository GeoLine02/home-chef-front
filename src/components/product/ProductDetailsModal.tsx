import ProductDetails from "./ProductDetails";

export default function ProductDetailsModal() {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50">
      <ProductDetails />
    </div>
  );
}
