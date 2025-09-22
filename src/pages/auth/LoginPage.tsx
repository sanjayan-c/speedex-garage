import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Alert, App } from "antd";
import { AuthService } from "../../services/auth";
import loginImg from "../../assets/images/login.png";

export default function LoginPage() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { message } = App.useApp(); // optional toast
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(values: { username: string; password: string }) {
    setError(null);
    setLoading(true);
    try {
      const res = await AuthService.login(values);
      // TODO: persist token, e.g. localStorage.setItem("token", res.token)
      // message.success("Welcome back!"); // optional
      navigate("/");
    } catch (err: any) {
      setError(err?.message ?? "Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden md:h-[480px] bg-white rounded-2xl shadow">
      {/* Left visual (kept) */}
      <div className="hidden md:block relative h-full overflow-hidden rounded-l-2xl">
        <img
          src={loginImg}
          alt="Login visual"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute top-6 left-6 text-white space-y-4">
          <div className="text-title leading-6">SPEEDEX</div>
          <div className="text-title leading-6">GROUP</div>
        </div>
      </div>

      {/* Right form panel (white background preserved) */}
      <div className="p-8 md:p-10 flex items-center justify-center">
        <div className="w-full max-w-md">
          <h1 className="text-title text-primary">SIGN IN</h1>
          <p className="text-sm text-gray-500 mb-6">
            Hey enter your details to sign in your account
          </p>

          {error && (
            <Alert
              className="mb-4"
              type="error"
              showIcon
              banner
              message={error}
            />
          )}

          <Form
            form={form}
            layout="vertical"
            onFinish={onSubmit}
            onFinishFailed={({ errorFields }) => {
              if (errorFields?.length) {
                form.scrollToField(errorFields[0].name);
              }
            }}
            requiredMark={false}
            autoComplete="on"
            validateTrigger="onSubmit"
            initialValues={{ username: "", password: "" }}
          >
            <Form.Item
              label={<span className="text-sm font-medium text-gray-700">Username</span>}
              name="username"
              rules={[{ required: true, message: "Please enter your username" }]}
            >
              <Input
                size="large"
                placeholder="Enter your username"
                autoComplete="username"
                className="!rounded-md !outline-none focus:!border-primary focus:!ring-1 focus:!ring-primary !ring-offset-0"
              />
            </Form.Item>

            <Form.Item
              label={<span className="text-sm font-medium text-gray-700">Password</span>}
              name="password"
              rules={[{ required: true, message: "Please enter your password" }]}
            >
              <Input.Password
                size="large"
                placeholder="Enter your password"
                autoComplete="current-password"
                className="!rounded-md !outline-none focus:!border-primary focus:!ring-1 focus:!ring-primary !ring-offset-0"
              />
            </Form.Item>

            <div className="mt-2 mb-4">
              <a href="#" className="block text-sm hover:no-underline">
                Having a trouble in login?
              </a>
            </div>

            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              block
              className="!h-10 !rounded-md !font-medium relative group overflow-hidden"
            >
              <span className="pointer-events-none absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10">{loading ? "Signing in..." : "Log In"}</span>
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
