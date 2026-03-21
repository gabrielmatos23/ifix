import FormField from "@/components/molecules/FormField";
import Button from "@/components/atoms/Button";

export default function Empresa() {
  return (
    <div className="p-6 flex flex-col gap-3">
      <h1 className="text-xl text-center">Cadastro Empresa</h1>

      <FormField placeholder="Nome da empresa" />
      <FormField placeholder="Email" />
      <FormField placeholder="CNPJ" />
      <FormField placeholder="Senha" type="password" />

      <Button>Cadastrar</Button>
    </div>
  );
}