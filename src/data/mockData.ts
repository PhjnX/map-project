// src/data/mockData.ts
import type { Product, StoreLocation } from "../types";

// --- 1. CÁC HÀM BỔ TRỢ ---

// Hàm lấy ảnh từ TheCocktailDB (Nguồn ảnh PNG tách nền đẹp)
const getImg = (name: string) =>
  `https://www.thecocktaildb.com/images/ingredients/${name}.png`;

// Thông số kỹ thuật mặc định (Dùng cho SP chưa có data chi tiết)
const defaultSpecs = [
  { label: "Origin", value: "Imported" },
  { label: "Region", value: "Global" },
  { label: "ABV", value: "40%" },
  { label: "Volume", value: "750ml" },
];

// Ghi chú hương vị mặc định
const defaultNotes = [
  { title: "Nose", text: "Hương thơm nồng nàn, lôi cuốn đặc trưng." },
  { title: "Palate", text: "Vị cân bằng, cấu trúc tốt và êm mượt." },
  { title: "Finish", text: "Hậu vị kéo dài, để lại ấn tượng sâu sắc." },
];

// --- 2. DANH SÁCH SẢN PHẨM CHÍNH (MASTER LIST) ---
export const PRODUCTS_DATA: Product[] = [
  // ============================================================
  // 1. FEATURED PRODUCTS (Sản phẩm nổi bật - Full thông tin)
  // ============================================================
  {
    id: 1,
    name: "Macallan 18 Years Sherry Oak",
    subTitle: "The Iconic Single Malt",
    price: 9500000,
    category: "whiskey",
    image: getImg("Scotch"),
    description:
      "Huyền thoại Single Malt, ủ 18 năm trong thùng gỗ sồi Sherry Oloroso từ Jerez, Tây Ban Nha. Một biểu tượng của sự sang trọng.",
    rating: 4.9,
    reviews: 128,
    isNew: true,
    specs: [
      { label: "Origin", value: "Scotland" },
      { label: "Region", value: "Speyside" },
      { label: "ABV", value: "43%" },
      { label: "Volume", value: "700ml" },
    ],
    tastingNotes: [
      { title: "Nose", text: "Trái cây sấy khô, gừng và hương vani." },
      {
        title: "Palate",
        text: "Đậm đà, mượt mà với hương gia vị, đinh hương.",
      },
      { title: "Finish", text: "Kéo dài dai dẳng với hương trái cây sấy." },
    ],
  },

  {
    id: 3,
    name: "Moët & Chandon Imperial",
    subTitle: "Brut Impérial",
    price: 1650000,
    image: getImg("Champagne"),
    category: "champagne",
    isNew: true,
    specs: [
      { label: "Origin", value: "France" },
      { label: "ABV", value: "12%" },
      ...defaultSpecs.slice(2),
    ],
    tastingNotes: defaultNotes,
    description:
      "Dòng Champagne lừng danh thế giới, biểu tượng của tiệc tùng và thành công.",
  },

  // ============================================================
  // 2. DANH SÁCH WHISKEY (Từ file bạn gửi)
  // ============================================================
  {
    id: 501,
    name: "Macallan 18 Sherry Oak", // (Lặp lại để demo list)
    subTitle: "Sherry Oak Cask",
    price: 8500000,
    category: "whiskey",
    image: getImg("Scotch"),
    description:
      "Huyền thoại Single Malt, ủ 18 năm trong thùng gỗ sồi Sherry Oloroso.",
    specs: defaultSpecs,
    tastingNotes: defaultNotes,
  },
  {
    id: 502,
    name: "Jack Daniel's Old No.7",
    subTitle: "Tennessee Whiskey",
    price: 850000,
    category: "whiskey",
    image: getImg("Jack%20Daniels"),
    description:
      "Tennessee Whiskey iconic với hương than gỗ phong và vani đậm đà.",
    specs: defaultSpecs,
    tastingNotes: defaultNotes,
  },
  {
    id: 503,
    name: "Jim Beam White Label",
    subTitle: "Kentucky Bourbon",
    price: 450000,
    category: "whiskey",
    image: getImg("Jim%20Beam"),
    description:
      "Bourbon Kentucky số 1 thế giới, ủ 4 năm, hương gỗ sồi nhẹ nhàng.",
    specs: defaultSpecs,
    tastingNotes: defaultNotes,
  },
  {
    id: 505,
    name: "Johnnie Walker Black",
    subTitle: "Blended Scotch",
    price: 950000,
    category: "whiskey",
    image: getImg("Johnnie%20Walker"),
    description: "Phức hợp từ 40 loại whisky, hương khói nhẹ và trái cây khô.",
    specs: defaultSpecs,
    tastingNotes: defaultNotes,
  },
  {
    id: 506,
    name: "Wild Turkey 101",
    subTitle: "Kentucky Straight Bourbon",
    price: 900000,
    category: "whiskey",
    image: getImg("Wild%20Turkey"),
    description:
      "Bourbon nồng độ cao (50.5%), mạnh mẽ với hương vị caramel cháy.",
    specs: defaultSpecs,
    tastingNotes: defaultNotes,
  },
  {
    id: 507,
    name: "Crown Royal Deluxe",
    subTitle: "Canadian Whisky",
    price: 850000,
    category: "whiskey",
    image: getImg("Crown%20Royal"),
    description: "Whisky Canada êm dịu, đựng trong túi nhung tím hoàng gia.",
    specs: defaultSpecs,
    tastingNotes: defaultNotes,
  },
  {
    id: 508,
    name: "Southern Comfort",
    subTitle: "Liqueur",
    price: 450000,
    category: "whiskey",
    image: getImg("Southern%20Comfort"),
    description:
      "Rượu mùi whiskey với hương trái cây, gia vị và điểm nhấn của đào.",
    specs: defaultSpecs,
    tastingNotes: defaultNotes,
  },
  {
    id: 509,
    name: "Yukon Jack",
    subTitle: "Canadian Liqueur",
    price: 600000,
    category: "whiskey",
    image: getImg("Yukon%20Jack"),
    description:
      "Rượu mùi mật ong và whiskey Canada, được mệnh danh là 'Huyền thoại phương Bắc'.",
    specs: defaultSpecs,
    tastingNotes: defaultNotes,
  },

  // ============================================================
  // 3. DANH SÁCH RUM
  // ============================================================
  {
    id: 901,
    name: "Bacardi Superior",
    subTitle: "White Rum",
    price: 350000,
    category: "rum",
    image: getImg("Bacardi"),
    description:
      "Rum trắng kinh điển cho Mojito, hương hạnh nhân và trái cây nhiệt đới.",
    specs: defaultSpecs,
    tastingNotes: defaultNotes,
  },
  {
    id: 903,
    name: "Malibu Coconut",
    subTitle: "Coconut Rum",
    price: 350000,
    category: "rum",
    image: getImg("Malibu%20Rum"),
    description: "Hương dừa tự nhiên, linh hồn của những ly cocktail mùa hè.",
    specs: defaultSpecs,
    tastingNotes: defaultNotes,
  },
  {
    id: 904,
    name: "Myers's Dark Rum",
    subTitle: "Original Dark",
    price: 550000,
    category: "rum",
    image: getImg("Dark%20Rum"),
    description: "Rum đen Jamaica đậm đà hương mật rỉ đường và caramel cháy.",
    specs: defaultSpecs,
    tastingNotes: defaultNotes,
  },
  {
    id: 905,
    name: "Havana Club 7",
    subTitle: "Anejo Rum",
    price: 850000,
    category: "rum",
    image: getImg("Rum"),
    description: "Biểu tượng của Rum Cuba, hương thuốc lá và cà phê rang.",
    specs: defaultSpecs,
    tastingNotes: defaultNotes,
  },
  {
    id: 906,
    name: "Cachaca 51",
    subTitle: "Brazilian Spirit",
    price: 600000,
    category: "rum",
    image: getImg("Cachaca"),
    description: "Rượu mía Brazil, nguyên liệu chính cho món Caipirinha.",
    specs: defaultSpecs,
    tastingNotes: defaultNotes,
  },
  {
    id: 907,
    name: "Mount Gay Eclipse",
    subTitle: "Barbados Rum",
    price: 650000,
    category: "rum",
    image: getImg("Light%20Rum"),
    description:
      "Rum lâu đời nhất thế giới từ Barbados, hương chuối và hạnh nhân.",
    specs: defaultSpecs,
    tastingNotes: defaultNotes,
  },
  {
    id: 909,
    name: "Bacardi 151",
    subTitle: "Overproof Rum",
    price: 900000,
    category: "rum",
    image: getImg("151%20Proof%20Rum"),
    description:
      "Rum cực mạnh (75.5%), chỉ dành cho những ly cocktail rực lửa.",
    specs: defaultSpecs,
    tastingNotes: defaultNotes,
  },
  {
    id: 910,
    name: "Gold Rum Reserve",
    subTitle: "Aged Rum",
    price: 400000,
    category: "rum",
    image: getImg("Gold%20Rum"),
    description: "Rum vàng ủ thùng gỗ sồi, thích hợp uống neat hoặc pha chế.",
    specs: defaultSpecs,
    tastingNotes: defaultNotes,
  },

  // ============================================================
  // 4. DANH SÁCH VODKA
  // ============================================================
  {
    id: 602,
    name: "Absolut Citron",
    subTitle: "Lemon Vodka",
    price: 500000,
    category: "vodka",
    image: getImg("Absolut%20Citron"),
    description:
      "Phiên bản hương chanh vàng nổi tiếng, thành phần chính của Cosmopolitan.",
    specs: defaultSpecs,
    tastingNotes: defaultNotes,
  },
  {
    id: 603,
    name: "Absolut Kurant",
    subTitle: "Blackcurrant Vodka",
    price: 500000,
    category: "vodka",
    image: getImg("Absolut%20Kurant"),
    description:
      "Hương vị quả lý chua đen đặc trưng của Thụy Điển, chua nhẹ và thơm.",
    specs: defaultSpecs,
    tastingNotes: defaultNotes,
  },
  {
    id: 604,
    name: "Smirnoff Red",
    subTitle: "No.21 Vodka",
    price: 350000,
    category: "vodka",
    image: getImg("Vodka"),
    description: "Vodka bán chạy nhất thế giới, lọc qua than hoạt tính 10 lần.",
    specs: defaultSpecs,
    tastingNotes: defaultNotes,
  },
  {
    id: 605,
    name: "Absolut Peppar",
    subTitle: "Chili Vodka",
    price: 500000,
    category: "vodka",
    image: getImg("Absolut%20Peppar"),
    description: "Vodka hương ớt cay nồng, hoàn hảo cho ly Bloody Mary.",
    specs: defaultSpecs,
    tastingNotes: defaultNotes,
  },

  // ============================================================
  // 5. DANH SÁCH WINE (Red/White)
  // ============================================================
  {
    id: 102,
    name: "Ruby Port",
    subTitle: "Fortified Wine",
    price: 1200000,
    category: "red-wine",
    image: getImg("Port"),
    description: "Vang cường hóa Bồ Đào Nha, ngọt ngào và đậm vị quả mọng.",
    specs: defaultSpecs,
    tastingNotes: defaultNotes,
  },
  {
    id: 103,
    name: "Sweet Vermouth",
    subTitle: "Rosso",
    price: 450000,
    category: "red-wine",
    image: getImg("Sweet%20Vermouth"),
    description:
      "Vang đỏ ngâm thảo mộc, thành phần không thể thiếu của Negroni.",
    specs: defaultSpecs,
    tastingNotes: defaultNotes,
  },
  {
    id: 104,
    name: "Madeira Wine",
    subTitle: "Island Wine",
    price: 1850000,
    category: "red-wine",
    image: getImg("Madeira"),
    description: "Vang đảo Madeira, hương vị caramel và hạt dẻ nướng.",
    specs: defaultSpecs,
    tastingNotes: defaultNotes,
  },
  {
    id: 106,
    name: "Dubonnet Rouge",
    subTitle: "Aperitif",
    price: 650000,
    category: "red-wine",
    image: getImg("Dubonnet%20Rouge"),
    description: "Rượu vang khai vị của Pháp, yêu thích của Nữ hoàng Anh.",
    specs: defaultSpecs,
    tastingNotes: defaultNotes,
  },
  {
    id: 107,
    name: "Red Table Wine",
    subTitle: "Daily Wine",
    price: 350000,
    category: "red-wine",
    image: getImg("Wine"),
    description: "Vang đỏ bàn tiệc, dễ uống, phù hợp dùng hàng ngày.",
    specs: defaultSpecs,
    tastingNotes: defaultNotes,
  },
  {
    id: 108,
    name: "Mulled Wine Base",
    subTitle: "Spiced Wine",
    price: 400000,
    category: "red-wine",
    image: getImg("Sloe%20Gin"),
    description:
      "Vang đỏ đậm đà hương gia vị quế hồi, tuyệt vời khi uống nóng.",
    specs: defaultSpecs,
    tastingNotes: defaultNotes,
  },
  {
    id: 109,
    name: "Cherry Liqueur Wine",
    subTitle: "Fruit Wine",
    price: 550000,
    category: "red-wine",
    image: getImg("Cherry%20Heering"),
    description: "Rượu vang pha trộn hương cherry đậm đà, ngọt ngào.",
    specs: defaultSpecs,
    tastingNotes: defaultNotes,
  },
  {
    id: 110,
    name: "Creme de Cassis",
    subTitle: "Liqueur",
    price: 500000,
    category: "red-wine",
    image: getImg("Creme%20de%20Cassis"),
    description: "Rượu mùi lý chua đen, thường pha với vang trắng để làm Kir.",
    specs: defaultSpecs,
    tastingNotes: defaultNotes,
  },

  // ============================================================
  // 6. CHAMPAGNE & WHITE WINE
  // ============================================================
  {
    id: 301,
    name: "Dom Pérignon",
    subTitle: "Vintage Champagne",
    price: 5800000,
    category: "champagne",
    image: getImg("Champagne"),
    description:
      "Biểu tượng của sự sang trọng, chỉ sản xuất vào những năm được mùa.",
    specs: defaultSpecs,
    tastingNotes: defaultNotes,
  },
  {
    id: 302,
    name: "Dry Vermouth",
    subTitle: "Extra Dry",
    price: 450000,
    category: "white-wine",
    image: getImg("Dry%20Vermouth"),
    description: "Vang trắng khô ngâm thảo mộc, linh hồn của Martini.",
    specs: defaultSpecs,
    tastingNotes: defaultNotes,
  },
  {
    id: 303,
    name: "Sherry Fino",
    subTitle: "Dry Sherry",
    price: 950000,
    category: "white-wine",
    image: getImg("Sherry"),
    description: "Vang cường hóa Tây Ban Nha, khô và hương hạt dẻ.",
    specs: defaultSpecs,
    tastingNotes: defaultNotes,
  },
  {
    id: 304,
    name: "Sauvignon Blanc",
    subTitle: "Marlborough",
    price: 1450000,
    category: "white-wine",
    image: getImg("White%20Wine"),
    description: "Vang trắng tươi mát, hương chanh dây và cỏ mới cắt.",
    specs: defaultSpecs,
    tastingNotes: defaultNotes,
  },
  {
    id: 305,
    name: "Lillet Blanc",
    subTitle: "Aperitif",
    price: 750000,
    category: "white-wine",
    image: getImg("Lillet%20Blanc"),
    description:
      "Rượu khai vị từ Bordeaux, pha trộn giữa vang và rượu mùi cam.",
    specs: defaultSpecs,
    tastingNotes: defaultNotes,
  },
  {
    id: 306,
    name: "White Port",
    subTitle: "Porto Blanco",
    price: 1100000,
    category: "white-wine",
    image: getImg("White%20Port"),
    description: "Phiên bản trắng của rượu Port, ngọt ngào và thơm hương hoa.",
    specs: defaultSpecs,
    tastingNotes: defaultNotes,
  },
  {
    id: 307,
    name: "Prosecco",
    subTitle: "Italian Sparkling",
    price: 650000,
    category: "champagne",
    image: getImg("Prosecco"),
    description: "Vang sủi của Ý, hương vị trái cây tươi và bọt sủi nhẹ nhàng.",
    specs: defaultSpecs,
    tastingNotes: defaultNotes,
  },
  {
    id: 308,
    name: "Ricard Pastis",
    subTitle: "Anise Spirit",
    price: 550000,
    category: "white-wine",
    image: getImg("Ricard"),
    description: "Rượu mùi hồi của Pháp, thường pha với nước đá.",
    specs: defaultSpecs,
    tastingNotes: defaultNotes,
  },
  {
    id: 309,
    name: "Pernod Absinthe",
    subTitle: "The Green Fairy",
    price: 1200000,
    category: "white-wine",
    image: getImg("Pernod"),
    description: "Rượu hương hồi, ông tổ của Absinthe.",
    specs: defaultSpecs,
    tastingNotes: defaultNotes,
  },
  {
    id: 310,
    name: "Martini Bianco",
    subTitle: "Vermouth",
    price: 400000,
    category: "white-wine",
    image: getImg("Martini%20Bianco"),
    description: "Vermouth ngọt của Ý, hương vani và thảo mộc.",
    specs: defaultSpecs,
    tastingNotes: defaultNotes,
  },
];

export const STORE_LOCATIONS: StoreLocation[] = [
  {
    id: 1,
    name: "Webie Cellar An Phu",
    address: "57 Đường số 53, Phường An Phú, TP. Thủ Đức",
    // Tọa độ chuẩn ngay số 57 đường 53 (theo hình bạn gửi)
    lat: 10.78411388347473,
    lng: 106.74866048347813,
    phone: "0909 123 456",
    openHour: 9,
    closeHour: 22,
  },
];
