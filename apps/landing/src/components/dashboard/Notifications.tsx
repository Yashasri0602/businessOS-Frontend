import { notifications } from "../../mock/notifications";

function Notifications() {
  return (
    <div className="rounded-2xl border border-zinc-700 bg-zinc-900 p-6">
      <h3 className="text-lg font-semibold text-white">
        Notifications
      </h3>

      <div className="mt-5 space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification}
            className="rounded-lg bg-zinc-800 p-3 text-sm text-gray-300"
          >
            {notification}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notifications;