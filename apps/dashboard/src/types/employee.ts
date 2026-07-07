export interface Employee {
  _id?: string;

  name: string;
  email: string;
  phone: string;
  role: string;
  salary: number;
  joiningDate: string;
  attendance: "Present" | "Absent" | "Leave";
}