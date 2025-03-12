"use client";
import {
  Footer,
  GameView,
  Navigation,
  Publicity,
  SubNavigation,
} from "../components";

export default function Home() {
  return (
    <>
      <link rel="icon" href="/public/icon.ico" sizes="32x32" />
      <Navigation />
      <SubNavigation />
      <Publicity />
      <GameView />
      <Footer />
    </>
  );
}
