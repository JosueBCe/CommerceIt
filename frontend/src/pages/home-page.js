import React from "react";
import { HeroBanner } from "../components/hero-banner";
import { PageLayout } from "../components/page-layout";
import { Carousel } from "../components/carousel/carousel";
import { ProductsListing } from "../components/products-listing.js/products-listing";
import { RecommendItems } from "../components/recommended-items/recommend-items";
import { FooterBanner } from "../components/footer-banner";

export const HomePage = () => (
  // Landing page
  <PageLayout>
    <HeroBanner />
    <Carousel/>
    <ProductsListing/>
    <RecommendItems/>
    <FooterBanner/> 
  </PageLayout>
);
