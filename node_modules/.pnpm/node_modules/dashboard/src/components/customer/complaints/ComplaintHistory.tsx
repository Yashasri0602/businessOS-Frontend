import ComplaintCard from "./ComplaintCard";

const complaints = [
  {
    title: "Received damaged product",
    status: "Resolved",
    date: "20 July 2026",
  },
  {
    title: "Late Delivery",
    status: "Open",
    date: "18 July 2026",
  },
];

function ComplaintHistory() {
  return (
    <div className="space-y-5">

      {complaints.map((complaint) => (

        <ComplaintCard
          key={complaint.title}
          {...complaint}
        />

      ))}

    </div>
  );
}

export default ComplaintHistory;