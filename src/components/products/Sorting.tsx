export default function Sorting({
  sortOrder,
  setSortOrder,
}: {
  sortOrder: string;
  setSortOrder: (order: string) => void;
}) {
  return (
    <div className="flex items-center mb-4">
      <label htmlFor="sortOrder" className="text-sm font-medium">
        Sort by:
      </label>
      <select
        id="sortOrder"
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
        className="ml-2 p-1 border rounded"
      >
        <option value="low-to-high">Price: Low to High</option>
        <option value="high-to-low">Price: High to Low</option>
      </select>
    </div>
  );
}
