import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { verifyCode } from "../../services/Auth/authVerifyCodeService";
import AuthBackground from "../../components/AuthBackground";

const VerifyCode: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // email جاي من page السابقة
  const email = location.state?.email;

  const [code, setCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!code) {
      setErrorMessage("Veuillez saisir le code reçu par email.");
      return;
    }

    try {
      setLoading(true);
      await verifyCode(email, code);
      navigate("/reset-password", { state: { email } });
    } catch (error) {
      setErrorMessage("Code incorrect ou expiré.");
    } finally {
      setLoading(false);
    }
    navigate("/reset-password", { state: { email } });
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center px-4">
      <AuthBackground />

      <div className="relative z-10 w-full max-w-md">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-6"
          >
            <h1 className="text-2xl font-bold text-center">Vérification du code</h1>

            <input
              type="number"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Entrez le code"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold disabled:opacity-50"
            >
              {loading ? "Vérification..." : "Vérifier"}
            </button>
             {errorMessage && (
              <p className="text-red-600 text-sm text-center">{errorMessage}</p>
            )}
          </form>
      </div>
    </div>
  );
};

export default VerifyCode;
