import type { Customer } from "../../types/customer";
import { deleteCustomer } from "../../services/customers.service";

interface Props {
  customer: Customer;
  onDelete: () => void;
  onEdit: (customer: Customer) => void;
}

function CustomerRow({
  customer,
  onDelete,
  onEdit,
}: Props) {
  return (
    <tr className="border-b border-[#243652]">
      <td className="px-4 py-5 text-white">
        {customer.name}
      </td>

      <td className="px-4 text-slate-300">
        {customer.phone}
      </td>

      <td className="px-4 text-slate-300">
        {customer.email}
      </td>

      <td className="px-4 text-slate-300">
        {customer.address}
      </td>

      <td className="px-4">
        <div className="flex gap-2">

          <button
            onClick={() => onEdit(customer)}
            className="rounded-lg bg-blue-500 px-3 py-1 text-white hover:bg-blue-600"
          >
            Edit
          </button>

          <button
            onClick={async () => {
              const confirmDelete = window.confirm(
                `Delete "${customer.name}"?`
              );

              if (!confirmDelete) return;

              try {
                await deleteCustomer(customer._id!);
                onDelete();
              } catch (err) {
                console.error(err);
                alert("Failed to delete customer");
              }
            }}
            className="rounded-lg bg-red-500 px-3 py-1 text-white hover:bg-red-600"
          >
            Delete
          </button>

        </div>
      </td>
    </tr>
  );
}

export default CustomerRow;