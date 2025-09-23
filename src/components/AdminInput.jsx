const AdminInput = ({ handleFilterChange }) => {
  return (
    <div className="grid grid-cols-12 p-5 gap-3">
      <input
        type="text"
        placeholder="Search Issues"
        className="border border-gray-300 p-2 rounded-md col-span-12 md:col-span-6"
      />

      <select
        name="status"
        id="status"
        onChange={handleFilterChange}
        className="col-span-12 md:col-span-2 border border-gray-300 rounded-md p-2"
      >
        <option value="all_status">All Status</option>
        <option value="pending">Pending</option>
        <option value="in_progress">In Progress</option>
        <option value="resolved">Resolved</option>
      </select>

      <select
        name="categories"
        id="categories"
        className="col-span-12 md:col-span-2 border border-gray-300 rounded-md p-2"
      >
        <option value="All Categories">All Categories</option>
        <option value="Road">Road</option>
        <option value="Water">Water</option>
        <option value="Electricity">Electricity</option>
        <option value="Garbage">Garbage</option>
      </select>

      <select
        name="radius"
        id="radius"
        className="col-span-12 md:col-span-2 border border-gray-300 rounded-md p-2"
      >
        <option value="Radius">Radius</option>
        <option value="Radius">5km</option>
        <option value="Pending">10km</option>
      </select>
    </div>
  );
};

export default AdminInput;
