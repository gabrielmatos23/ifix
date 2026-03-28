import Header from "@/components/navegation/Header";
import FormField from "@/components/molecules/FormField";
import Button from "@/components/atoms/Button";

export default function Cadastro() {
  return (
    <div>
      <Header />

      <div className="p-6 flex flex-col gap-3">
        <FormField placeholder="Nome completo" />
        <FormField placeholder="Email" />
        <FormField placeholder="CPF" />
        <FormField placeholder="Senha" type="password" />

        <Button>Cadastrar</Button>
      </div>
    </div>
  );
}