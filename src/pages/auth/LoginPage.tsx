import { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { AuthService } from "../../services/auth";
import loginImg from "../../assets/images/login.png";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await AuthService.login({ username, password });
      console.log("login ok:", res);
      // TODO: save res.token to storage and navigate to dashboard
    } catch (err: any) {
      setError(err.message ?? "Login failed");
    } finally {
      setLoading(false);
    }
  }

return (
  <div className="grid grid-cols-1 md:grid-cols-2 card overflow-hidden h-[480px]">
    {/* Left visual */}
    <div className="hidden md:block relative h-full overflow-hidden rounded-l-2xl">
      <img
        src={loginImg}
        alt="Login visual"
        className="h-full w-full object-cover object-center"
      />
      <div className="absolute top-6 left-6 text-white space-y-1">
        <div className="text-2xl font-heading leading-6">SPEEDEX</div>
        <div className="text-2xl font-heading leading-6">GROUP</div>
      </div>
    </div>

    {/* Right form (vertically centered) */}
    <div className="p-10 flex items-center justify-center">
      <div className="w-full max-w-md">
        <h1 className="text-title text-primary">SIGN IN</h1>
        <p className="text-sm text-gray-500 mb-6">
          Hey enter your details to sign in your account
        </p>

        <form onSubmit={onSubmit} className="space-y-5">
          <Input
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
          />
          <Input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />

          <a href="#" className="block mt-2 text-sm">
            Having a trouble in login?
          </a>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <Button type="submit" disabled={loading}>
            {loading ? "Signing in..." : "Login In"}
          </Button>
        </form>
      </div>
    </div>
  </div>
);

}
