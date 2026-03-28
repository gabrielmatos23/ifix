"use client";

import { useRouter } from "next/navigation";
import Header from "@/components/navegation/Header";
import Button from "@/components/atoms/Button";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <Header />

      <div className="p-6 flex flex-col gap-4">
        <Button onClick={() => router.push("/login")}>
          Ir para Login
        </Button>

        <Button onClick={() => router.push("/cadastro")}>
          Cadastro Cliente
        </Button>

        <Button onClick={() => router.push("/empresa")}>
          Cadastro Empresa
        </Button>
        <Button onClick={() => router.push("/home")}>
        Ir para Home
        </Button>
      </div>
    </div>
  );
}