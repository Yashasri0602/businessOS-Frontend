import type { Customer } from "../../types/customer";
import CustomerRow from "./CustomerRow";

interface Props {
  customers: Customer[];
  onDelete: () => void;
  onEdit: (customer: Customer) => void;
}

function CustomerTable({
  customers,
  onDelete,
  onEdit,
}: Props) {
  return (
    <div className="rounded-3xl border border-[#243652] bg-[#14233A] p-8">

      <div className="mb-8 flex items-center justify-between">

        <h2 className="text-2xl font-bold text-white">
          Customers
        </h2>

        <span className="text-slate-400">
          {customers.length} Records
        </span>

      </div>

      <table className="w-full">

        <thead>

          <tr className="border-b border-[#243652] text-slate-400">

            <th className="px-4 pb-4 text-left">
              Name
            </th>

            <th className="px-4 pb-4 text-left">
              Phone
            </th>

            <th className="px-4 pb-4 text-left">
              Email
            </th>

            <th className="px-4 pb-4 text-left">
              Address
            </th>

            <th className="px-4 pb-4 text-left">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {customers.map((customer) => (
            <CustomerRow
              key={customer._id}
              customer={customer}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default CustomerTable;