import LoginForm from "@/components/organisms/LoginForm";
import Header from "@/components/navegation/Header";

export default function LoginPage() {
  return (
    <div>
      <Header />

      <div className="p-6">
        <LoginForm />
      </div>
    </div>
  );
}