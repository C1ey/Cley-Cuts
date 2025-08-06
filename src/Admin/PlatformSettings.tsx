import React, { useState } from "react";

interface Settings {
  cancellationPolicy: "Lenient" | "Firm" | "Strict";
  paymentMethods: {
    stripe: boolean;
    paypal: boolean;
    bankTransfer: boolean;
  };
  platformName: string;
}

const PlatformSettings: React.FC = () => {
  const [settings, setSettings] = useState<Settings>({
    cancellationPolicy: "Firm",
    paymentMethods: {
      stripe: true,
      paypal: true,
      bankTransfer: false,
    },
    platformName: "Beautify Services",
  });

  const handlePolicyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSettings(prev => ({ ...prev, cancellationPolicy: e.target.value as Settings["cancellationPolicy"] }));
  };

  const togglePaymentMethod = (method: keyof Settings["paymentMethods"]) => {
    setSettings(prev => ({
      ...prev,
      paymentMethods: {
        ...prev.paymentMethods,
        [method]: !prev.paymentMethods[method],
      },
    }));
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSettings(prev => ({ ...prev, platformName: e.target.value }));
  };

  const handleSave = () => {
    // TODO: Add save logic (e.g., API call)
    alert("Settings saved!");
  };

  return (
    <div className="bg-white shadow rounded-lg p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Platform Settings</h2>

      <div className="mb-4">
        <label className="block font-medium mb-1">Platform Name</label>
        <input
          type="text"
          value={settings.platformName}
          onChange={handleNameChange}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-1">Default Cancellation Policy</label>
        <select
          value={settings.cancellationPolicy}
          onChange={handlePolicyChange}
          className="w-full border rounded px-3 py-2"
        >
          <option value="Lenient">Lenient</option>
          <option value="Firm">Firm</option>
          <option value="Strict">Strict</option>
        </select>
      </div>

      <div className="mb-4">
        <span className="block font-medium mb-1">Enabled Payment Methods</span>
        <label className="inline-flex items-center mr-6">
          <input
            type="checkbox"
            checked={settings.paymentMethods.stripe}
            onChange={() => togglePaymentMethod("stripe")}
            className="mr-2"
          />
          Stripe
        </label>
        <label className="inline-flex items-center mr-6">
          <input
            type="checkbox"
            checked={settings.paymentMethods.paypal}
            onChange={() => togglePaymentMethod("paypal")}
            className="mr-2"
          />
          PayPal
        </label>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            checked={settings.paymentMethods.bankTransfer}
            onChange={() => togglePaymentMethod("bankTransfer")}
            className="mr-2"
          />
          Bank Transfer
        </label>
      </div>

      <button
        onClick={handleSave}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Save Settings
      </button>
    </div>
  );
};

export default PlatformSettings;
