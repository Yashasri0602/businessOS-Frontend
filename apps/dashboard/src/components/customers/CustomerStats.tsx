import type { Customer } from "../../types/customer";

interface Props {
  customers: Customer[];
}

function CustomerStats({ customers }: Props) {
  const totalCustomers = customers.length;

  const withEmail = customers.filter(
    (customer) => customer.email.trim() !== ""
  ).length;

  const withPhone = customers.filter(
    (customer) => customer.phone.trim() !== ""
  ).length;

  const withAddress = customers.filter(
    (customer) => customer.address.trim() !== ""
  ).length;

  const cards = [
    {
      title: "Customers",
      value: totalCustomers,
    },
    {
      title: "With Email",
      value: withEmail,
    },
    {
      title: "With Phone",
      value: withPhone,
    },
    {
      title: "With Address",
      value: withAddress,
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-3xl border border-[#243652] bg-[#14233A] p-7 transition hover:border-[#C7F464]"
        >
          <p className="text-lg text-slate-400">
            {card.title}
          </p>

          <h2 className="mt-5 text-5xl font-extrabold text-white">
            {card.value}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default CustomerStats;