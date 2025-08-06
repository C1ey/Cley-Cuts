import React, { useState } from "react";

interface Dispute {
  id: number;
  case: string;
  status: "Pending" | "Resolved";
  details: string;
}

const DisputeResolution: React.FC = () => {
  const [disputes, setDisputes] = useState<Dispute[]>([
    {
      id: 1023,
      case: "Cancellation dispute between Jane (Provider) and Sarah (Client)",
      status: "Pending",
      details: "Client claims service was cancelled due to illness; provider has strict policy."
    },
    {
      id: 1024,
      case: "Review flagged for harassment by John",
      status: "Pending",
      details: "Review contains inappropriate language as reported by multiple users."
    }
  ]);

  const resolveDispute = (id: number) => {
    setDisputes(prev =>
      prev.map(dispute =>
        dispute.id === id ? { ...dispute, status: "Resolved" } : dispute
      )
    );
  };

  return (
    <div className="bg-white shadow rounded-lg p-4 mb-8">
      <h2 className="text-xl font-semibold mb-4">Dispute Resolution</h2>

      {disputes.length === 0 ? (
        <p className="text-gray-600">No disputes at the moment.</p>
      ) : (
        disputes.map(dispute => (
          <div key={dispute.id} className="border p-3 rounded mb-3">
            <p className="font-semibold">Case #{dispute.id}</p>
            <p className="text-gray-700">{dispute.case}</p>
            <p className="text-sm text-gray-500 mt-1">{dispute.details}</p>
            <p
              className={`mt-2 font-semibold ${
                dispute.status === "Pending" ? "text-red-600" : "text-green-600"
              }`}
            >
              Status: {dispute.status}
            </p>

            {dispute.status === "Pending" && (
              <button
                onClick={() => resolveDispute(dispute.id)}
                className="mt-3 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              >
                Mark as Resolved
              </button>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default DisputeResolution;
