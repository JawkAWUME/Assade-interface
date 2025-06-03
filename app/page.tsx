"use client";
import { useState } from "react";
import {HeroSection1} from "./components/HeroSection";
import { Header } from "./components/Header";
import { NotreEquipe } from "./components/NotreEquipe";
import { NosPartenaires } from "./components/NosPartenaires";
import { Footer } from "./components/Footer";
import { PhotoGallery } from "./components/PhotoGallery";
export default function Home() {
  
  return (
    <>
    <Header />
    <HeroSection1 />
    <NotreEquipe />
    <NosPartenaires />
    <PhotoGallery />
    <Footer />
    </>
  );
}
