import CustomerLayout from "../../layouts/CustomerLayout";

import ComplaintForm from "../../components/customer/complaints/ComplaintForm";
import ComplaintHistory from "../../components/customer/complaints/ComplaintHistory";

function Complaints() {
  return (
    <CustomerLayout>

      <h1 className="mb-10 text-4xl font-bold">

        Support & Complaints

      </h1>

      <div className="grid gap-8 xl:grid-cols-2">

        <ComplaintForm />

        <ComplaintHistory />

      </div>

    </CustomerLayout>
  );
}

export default Complaints;