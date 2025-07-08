"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";

export default function DashboardPage() {
  const router = useRouter();
  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      router.replace("/slots");
    } else {
      router.replace("/login");
    }
  }, [router]);

  return <p className="py-8 px-5">Перенаправление...</p>;
}
