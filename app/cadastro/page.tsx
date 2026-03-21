import FormField from "@/components/molecules/FormField";
import Button from "@/components/atoms/Button";

export default function Cadastro() {
  return (
    <div className="p-6 flex flex-col gap-3">
      <h1 className="text-xl text-center">Cadastro</h1>

      <FormField placeholder="Nome completo" />
      <FormField placeholder="Email" />
      <FormField placeholder="CPF" />
      <FormField placeholder="Senha" type="password" />

      <Button>Cadastrar</Button>
    </div>
  );
}