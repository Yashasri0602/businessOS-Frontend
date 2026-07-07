import CustomerLayout from "../../layouts/CustomerLayout";

import ProfileCard from "../../components/customer/profile/ProfileCard";
import ProfileStats from "../../components/customer/profile/ProfileStats";
import SavedAddresses from "../../components/customer/profile/SavedAddresses";

function CustomerProfile() {
  return (
    <CustomerLayout>

      <h1 className="mb-10 text-4xl font-bold">

        My Profile

      </h1>

      <ProfileCard />

      <div className="my-10">

        <ProfileStats />

      </div>

      <SavedAddresses />

    </CustomerLayout>
  );
}

export default CustomerProfile;