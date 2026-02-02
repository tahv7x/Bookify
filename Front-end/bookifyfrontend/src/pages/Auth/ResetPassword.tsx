import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AuthBackground from "../../components/AuthBackground";

const ResetPassword: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // جاي من VerifyCode
  const email = location.state?.email;

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (!password || !confirmPassword) {
      setErrorMessage("Veuillez remplir tous les champs.");
      return;
    }

    if (password.length < 8) {
      setErrorMessage("Le mot de passe doit contenir au moins 8 caractères.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Les mots de passe ne correspondent pas.");
      return;
    }

    try {
      setLoading(true);

      // ⚠️ هنا غادي تربط مع API
      // await resetPassword(email, password);

      setSuccessMessage("Mot de passe réinitialisé avec succès.");

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      setErrorMessage("Erreur lors de la réinitialisation du mot de passe.");
    } finally {
      setLoading(false);
    }
  };

  if (!email) {
    return (
      <p className="text-center text-red-600 mt-10">
        Email manquant. Veuillez recommencer la procédure.
      </p>
    );
  }

  return (
    <div className="min-h-screen relative flex items-center justify-center px-4">
      {/* Background */}
      <AuthBackground />

      {/* Card */}
      <div className="relative z-10 w-full max-w-md bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8">
        <h1 className="text-2xl font-bold text-center mb-4">
          Réinitialiser le mot de passe
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Nouveau mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setFocusedInput("password")}
              onBlur={() => setFocusedInput(null)}
              className={`w-full px-4 py-3 pr-12 border-2 ${
                focusedInput === "password"
                  ? "border-[#0059B2] bg-blue-50"
                  : "border-gray-200 bg-gray-50"
              } rounded-xl outline-none transition-all duration-300 placeholder-gray-400`}
              required
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#0059B2] transition-colors duration-300"
            >
              {showPassword ? (
                /* eye open */
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              ) : (
                /* eye closed */
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7
                    a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243
                    M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29
                    m7.532 7.532l3.29 3.29M3 3l18 18" />
                </svg>
              )}
            </button>
          </div>


          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirmer le mot de passe"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onFocus={() => setFocusedInput("confirmPassword")}
              onBlur={() => setFocusedInput(null)}
              className={`w-full px-4 py-3 pr-12 border-2 ${
                focusedInput === "confirmPassword"
                  ? "border-[#0059B2] bg-blue-50"
                  : "border-gray-200 bg-gray-50"
              } rounded-xl outline-none transition-all duration-300 placeholder-gray-400`}
              required
            />

            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#0059B2]"
            >
              {showConfirmPassword ? (
                /* same eye open svg */
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7
                    -1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              ) : (
                /* eye closed svg */
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M13.875 18.825L3 3m6.878 6.878a3 3 0 104.243 4.243" />
                </svg>
              )}
            </button>
          </div>

          

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-[#28282B] to-[#1f1f22] hover:from-[#1f1f22] hover:to-[#28282B] text-white py-3.5 rounded-xl font-semibold  transition-all duration-00 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed text-sm md:text-base"
          >
            {loading ? "Traitement..." : "Valider"}
          </button>

          {errorMessage && (
            <p className="text-red-600 text-sm text-center">{errorMessage}</p>
          )}

          {successMessage && (
            <p className="text-green-600 text-sm text-center">
              {successMessage}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
