"use client";
import { Github, Linkedin } from "lucide-react";
import Silk from "@/blocks/Backgrounds/Silk/Silk";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Silk
          speed={5}
          scale={1}
          color="#7B7481"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>
      <main className="min-h-screen flex flex-col items-center justify-center px-4 bg-background/70 text-foreground">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 font-[family-name:var(--font-geist-sans)]">hi, i&apos;m rami.</h1>
        <p className="text-lg sm:text-xl mb-10 text-center max-w-xl font-[family-name:var(--font-geist-sans)]">
          i&apos;m a software QA engineer at autodesk, working on building apps in my freetime, see my projects below
        </p>
        <ul className="space-y-6 w-full max-w-md">
          <li>
            <a
              href="https://github.com/ramishah/monthwrapped"
              className="text-primary underline font-medium text-lg font-[family-name:var(--font-geist-sans)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              month wrapped
            </a>
            <p className="text-sm text-muted-foreground font-[family-name:var(--font-geist-sans)]">An app that lets you see your top played songs on spotify</p>
          </li>
        </ul>
        <section className="mt-12 flex flex-col items-center">
          <h2 className="text-xl mb-4 font-[family-name:var(--font-geist-sans)]">check me out on here too</h2>
          <div className="flex gap-6">
            <a
              href="https://github.com/ramishah"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-primary transition-colors"
            >
              <Github size={32} />
            </a>
            <a
              href="https://linkedin.com/in/rami-shah"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-primary transition-colors"
            >
              <Linkedin size={32} />
            </a>
          </div>
        </section>
        <footer className="mt-12 text-sm text-muted-foreground font-[family-name:var(--font-geist-sans)]">
          <p>Copyright © 2025 Rami Shah</p>
        </footer>
      </main>
    </div>
  );
}
