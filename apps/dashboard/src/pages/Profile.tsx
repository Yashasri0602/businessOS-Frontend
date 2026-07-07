import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../services/profile.service";
import type { BusinessProfile } from "../services/profile.service";

function Profile() {
  const navigate = useNavigate();

  const [profile, setProfile] = useState<BusinessProfile | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getProfile();
        setProfile(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();
  }, []);

  if (!profile) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        Loading Profile...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 p-10">

      {/* Back Button */}

      <button
        onClick={() => navigate("/dashboard")}
        className="mb-8 flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-white transition hover:border-lime-400 hover:text-lime-400"
      >
        ← Back to Dashboard
      </button>

      <div className="mx-auto max-w-5xl rounded-3xl border border-[#243652] bg-[#14233A] p-10 shadow-2xl">

        {/* Header */}

        <div className="mb-8 flex items-center gap-6">

          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-lime-400 text-4xl font-bold text-black">
            {profile.businessName.charAt(0).toUpperCase()}
          </div>

          <div>
            <h1 className="text-4xl font-bold text-white">
              {profile.businessName}
            </h1>

            <p className="mt-1 text-lg text-slate-400">
            Business Owner Dashboard
          </p>
          </div>

        </div>

        {/* Details */}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

          <div className="rounded-xl bg-slate-800 p-5">
            <h2 className="mb-2 text-slate-400">Owner</h2>
            <p className="text-xl text-white">
              {profile.ownerName}
            </p>
          </div>

          <div className="rounded-xl bg-slate-800 p-5">
            <h2 className="mb-2 text-slate-400">Email</h2>
            <p className="text-xl text-white">
              {profile.email}
            </p>
          </div>

          <div className="rounded-xl bg-slate-800 p-5">
            <h2 className="mb-2 text-slate-400">Phone</h2>
            <p className="text-xl text-white">
              {profile.phone}
            </p>
          </div>

          <div className="rounded-xl bg-slate-800 p-5">
            <h2 className="mb-2 text-slate-400">Industry</h2>
            <p className="text-xl text-white">
              {profile.industry}
            </p>
          </div>

          <div className="rounded-xl bg-slate-800 p-5 md:col-span-2">
            <h2 className="mb-2 text-slate-400">Address</h2>
            <p className="text-xl text-white">
              {profile.address}
            </p>
          </div>

          <div className="rounded-xl bg-slate-800 p-5 md:col-span-2">
            <h2 className="mb-2 text-slate-400">Member Since</h2>
            <p className="text-xl text-white">
              {new Date(profile.createdAt).toLocaleDateString()}
            </p>
          </div>

        </div>

        {/* Actions */}

        <div className="mt-8 flex gap-4">

          <button className="rounded-lg bg-lime-400 px-6 py-3 font-bold text-black hover:bg-lime-300">
            Edit Profile
          </button>

          <button className="rounded-lg border border-slate-600 px-6 py-3 text-white hover:bg-slate-800">
            Change Password
          </button>

        </div>

      </div>

    </div>
  );
}

export default Profile;