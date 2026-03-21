"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-4 p-6">
      <h1 className="text-xl">IFix - Teste</h1>

      <button onClick={() => router.push("/login")}>
        Ir para Login
      </button>

      <button onClick={() => router.push("/cadastro")}>
        Cadastro Cliente
      </button>

      <button onClick={() => router.push("/empresa")}>
        Cadastro Empresa
      </button>

      <button onClick={() => router.push("/home")}>
        Home App
      </button>
    </div>
  );
}