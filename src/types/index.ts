// src/types.ts

// Định nghĩa cấu trúc dữ liệu cho Sản phẩm
export interface Product {
  id: number;
  name: string;
  subTitle?: string; // Dòng chữ nhỏ dưới tên (VD: Sherry Oak Cask)
  category: string; // Phải trùng với slug trên URL (whiskey, red-wine...)
  price: number;
  image: string;
  description: string;
  rating?: number;
  reviews?: number;
  isNew?: boolean;

  // Thông số kỹ thuật (ABV, Xuất xứ...)
  specs?: { label: string; value: string }[];

  // Ghi chú hương vị (Mùi, Vị, Hậu vị)
  tastingNotes?: { title: string; text: string }[];
}

// Định nghĩa cấu trúc dữ liệu cho Cửa hàng
export interface StoreLocation {
  id: number;
  name: string;
  address: string;
  lat: number;
  lng: number;
  phone: string;
  openHour: number;
  closeHour: number;
}
