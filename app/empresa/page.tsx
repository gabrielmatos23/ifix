"use client";

import { useRouter } from "next/navigation";
import Header from "@/components/navegation/Header";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <Header />

      <div className="p-6 flex flex-col gap-4">
        <button
          onClick={() => router.push("/login")}
          className="
            bg-cyan-500 
            hover:bg-cyan-600 
            text-white 
            py-3 
            rounded-lg 
            cursor-pointer 
            transition
          "
        >
          Ir para Login
        </button>

        <button
          onClick={() => router.push("/cadastro")}
          className="
            bg-cyan-500 
            hover:bg-cyan-600 
            text-white 
            py-3 
            rounded-lg 
            cursor-pointer 
            transition
          "
        >
          Cadastro Cliente
        </button>

        <button
          onClick={() => router.push("/empresa")}
          className="
            bg-cyan-500 
            hover:bg-cyan-600 
            text-white 
            py-3 
            rounded-lg 
            cursor-pointer 
            transition
          "
        >
          Cadastro Empresa
        </button>
      </div>
    </div>
  );
}