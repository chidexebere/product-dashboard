import { LiaSearchSolid } from 'react-icons/lia';

const Searchbar = () => {
  return (
    <form>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Search
      </label>
      <div className="relative">
        <input
          type="search"
          id="default-search"
          className="text-primary text-[12px] text-[#374151] w-full pl-2.5 py-1.25 pr-10 border border-gray-300 rounded bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter interests, keyword, company name, etc."
          required
        />

        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <LiaSearchSolid className="w-5 h-5 text-primary " />
        </div>
      </div>
    </form>
  );
};

export default Searchbar;
