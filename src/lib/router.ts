"use client";

import { useState, useEffect, useCallback } from "react";

export type PageSlug = 
  | undefined  // home
  | "residencial"
  | "veicular"
  | "rural"
  | "lojaonline"
  | "contato"
  | "instalacoes"
  | "orcamento";

export function useHashRouter() {
  const [page, setPage] = useState<PageSlug>(undefined);

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash === "" || hash === "/") {
        setPage(undefined);
      } else {
        const slug = hash.replace("/", "") as PageSlug;
        setPage(slug || undefined);
      }
      window.scrollTo({ top: 0, behavior: "instant" });
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const navigate = useCallback((slug: PageSlug) => {
    if (slug) {
      window.location.hash = `/${slug}`;
    } else {
      window.location.hash = "";
    }
  }, []);

  const isHome = page === undefined;

  return { page, navigate, isHome };
}