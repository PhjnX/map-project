// src/pages/Home.tsx
import HeroCarousel from "../components/HeroCarousel";
import BrandStory from "../components/BrandStory"; // Mới
import CategoryShowcase from "../components/CategoryShowcase"; // Mới
import BestSellers from "../components/BestSellers"; // Mới
import ExclusiveOffer from "../components/ExclusiveOffer"; // Mới

export default function Home() {
  return (
    <div className="bg-[#050505] min-h-screen">

      <main>
        {/* 1. Carousel tạo ấn tượng đầu */}
        <HeroCarousel />

        {/* 2. Giới thiệu thương hiệu để xây dựng niềm tin */}
        <BrandStory />

        {/* 3. Show các nhóm sản phẩm đẹp mắt */}
        <CategoryShowcase />

        {/* 4. Danh sách sản phẩm để mua hàng */}
        <BestSellers />

        {/* 5. Banner chốt deal đặc biệt */}
        <ExclusiveOffer />
      </main>

    </div>
  );
}
