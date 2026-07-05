import { insights } from "../../mock/insights";

function AIInsights() {
  return (
    <div className="rounded-2xl border border-violet-500/20 bg-violet-500/10 p-6 lg:col-span-2">
      <h3 className="text-xl font-semibold text-white">
        🤖 AI Insights
      </h3>

      <ul className="mt-4 space-y-3 text-gray-300">
        {insights.map((insight) => (
          <li key={insight}>{insight}</li>
        ))}
      </ul>
    </div>
  );
}

export default AIInsights;