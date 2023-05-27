const KEYS = {
  HOME_PAGE: "/",
  CLAIM_PAGE: "/lodash",
  ABOUT_US_PAGE: "/resume",
  KNOWLEDGE_PAGE: "/kien-thuc",
  FORM_HEADER: {
    LAY_BAO_PHI: "Lấy báo phí miễn phí ngay",
    TU_VAN_MIEN_PHI: "Nhận tư vấn miễn phí ngay",
    HOP_TAC_CUNG_PAPAYA: "Hợp tác cùng Papaya",
    DE_LAI_THONG_TIN: "Để lại thông tin và nhận tư vấn ngay",
  },
};

const VALUES = {
  ITEMS_RECENT_BLOG_COMP: 5,
  ITEMS_PER_PAGE: 4,
};

type RouteHeaderOption = {
  [key: string]: string;
};

const ROUTE_HEADER: RouteHeaderOption = {
  "suc-khoe": "Sức khỏe | Papaya Insurtech",
  "doi-song": "Đời sống | Papaya Insurtech",
  "cham-soc-xe": "Chăm sóc xe | Papaya Insurtech",
  "tin-tuc": "Tin tức | Papaya Insurtech",
  "me-va-be": "Sức khỏe - Mẹ và bé | Papaya Insurtech",
  "bao-hiem": "Sức khỏe - Bảo hiểm | Papaya Insurtech",
  "cac-loai-benh": "Sức khỏe - Các loại bệnh | Papaya Insurtech",
  "cham-soc-suc-khoe": "Sức khỏe - Chăm sóc sức khỏe | Papaya Insurtech",
  "tai-chinh": "Đời sống - Tài chính | Papaya Insurtech",
  "giao-duc": "Đời sống - Giáo dục | Papaya Insurtech",
  "gia-dinh": "Đời sống - Gia đình | Papaya Insurtech",
  "du-lich": "Đời sống - Du lịch | Papaya Insurtech",
  "xe-may": "Chăm sóc xe - Xe máy | Papaya Insurtech",
  "xe-o-to": "Chăm sóc xe - Xe ô tô | Papaya Insurtech",
  "bao-hiem-xe": "Chăm sóc xe - Bảo hiểm xe | Papaya Insurtech",
};

const ROUTE_NAME: RouteHeaderOption = {
  "suc-khoe": "Sức khỏe",
  "doi-song": "Đời sống",
  "cham-soc-xe": "Chăm sóc xe",
  "tin-tuc": "Tin tức",
  "me-va-be": "Mẹ và bé",
  "bao-hiem": "Bảo hiểm",
  "cac-loai-benh": "Các loại bệnh",
  "cham-soc-suc-khoe": "Chăm sóc sức khỏe",
  "tai-chinh": "Tài chính",
  "giao-duc": "Giáo dục",
  "gia-dinh": "Gia đình",
  "du-lich": "Du lịch",
  "xe-may": "Xe máy",
  "xe-o-to": "Xe ô tô",
  "bao-hiem-xe": "Bảo hiểm xe",
};

const STRAPI_MODEL = {
  FAQ: "faq",
  ARTICLE: "article",
  CATEGORY: "category",
};

const CITIES = [
  { name: "Hồ Chí Minh", id: "Ho_Chi_Minh" },
  { name: "Hà Nội", id: "Ha_Noi" },
  { name: "Khánh Hòa", id: "Khanh_Hoa" },
  { name: "Đà Nẵng", id: "Da_Nang" },
  { name: "Thừa Thiên Huế", id: "Thua_Thien_Hue" },
  { name: "Bình Dương", id: "Binh_Duong" },
  { name: "Đồng Nai", id: "Dong_Nai" },
  { name: "Hải Phòng", id: "Hai_Phong" },
  { name: "Long An", id: "Long_An" },
  { name: "Quảng Nam", id: "Quang_Nam" },
  { name: "Đắk Lắk", id: "Dak_Lak" },
  { name: "Cần Thơ", id: "Can_Tho" },
  { name: "Lâm Đồng", id: "Lam_Dong" },
  { name: "Thái Bình", id: "Thai_Binh" },
  { name: "Bắc Giang", id: "Bac_Giang" },
  { name: "An Giang", id: "An_Giang" },
  { name: "Vĩnh Phúc", id: "Vinh_Phuc" },
  { name: "Tây Ninh", id: "Tay_Ninh" },
  { name: "Thái Nguyên", id: "Thai_Nguyen" },
  { name: "Lào Cai", id: "Lao_Cai" },
  { name: "Nam Định", id: "Nam_Dinh" },
  { name: "Quảng Ngãi", id: "Quang_Ngai" },
  { name: "Bến Tre", id: "Ben_Tre" },
  { name: "Đắk Nông", id: "Dak_Nong" },
  { name: "Cà Mau", id: "Ca_Mau" },
  { name: "Vĩnh Long", id: "Vinh_Long" },
  { name: "Ninh Bình", id: "Ninh_Binh" },
  { name: "Phú Thọ", id: "Phu_Tho" },
  { name: "Ninh Thuận", id: "Ninh_Thuan" },
  { name: "Phú Yên", id: "Phu_Yen" },
  { name: "Hà Nam", id: "Ha_Nam" },
  { name: "Hà Tĩnh", id: "Ha_Tinh" },
  { name: "Đồng Tháp", id: "Dong_Thap" },
  { name: "Sóc Trăng", id: "Soc_Trang" },
  { name: "Kon Tum", id: "Kon_Tum" },
  { name: "Quảng Trị", id: "Quang_Tri" },
  { name: "Trà Vinh", id: "Tra_Vinh" },
  { name: "Hậu Giang", id: "Hau_Giang" },
  { name: "Sơn La", id: "Son_La" },
  { name: "Bạc Liêu", id: "Bac_Lieu" },
  { name: "Yên Bái", id: "Yen_Bai" },
  { name: "Tuyên Quang", id: "Tuyen_Quang" },
  { name: "Điện Biên", id: "Dien_Bien" },
  { name: "Lai Châu", id: "Lai_Chau" },
  { name: "Lạng Sơn", id: "Lang_Son" },
  { name: "Hà Giang", id: "Ha_Giang" },
  { name: "Bắc Kạn", id: "Bac_Kan" },
  { name: "Cao Bằng", id: "Cao_Bang" },
  { name: "Bà Rịa Vũng Tàu", id: "Ba_Ria_Vung_Tau" },
  { name: "Kiên Giang", id: "Kien_Giang" },
  { name: "Bắc Ninh", id: "Bac_Ninh" },
  { name: "Quảng Ninh", id: "Quang_Ninh" },
  { name: "Thanh Hóa", id: "Thanh_Hoa" },
  { name: "Nghệ An", id: "Nghe_An" },
  { name: "Hưng Yên", id: "Hung_Yen" },
  { name: "Gia Lai", id: "Gia_Lai" },
  { name: "Bình Phước", id: "Binh_Phuoc" },
  { name: "Hải Dương", id: "Hai_Duong" },
  { name: "Bình Định", id: "Binh_Dinh" },
  { name: "Tiền Giang", id: "Tien_Giang" },
  { name: "Hòa Bình", id: "Hoa_Binh" },
  { name: "Bình Thuận", id: "Binh_Thuan" },
];

const INTERESTS = [
  {
    name: "Hợp tác cùng Papaya",
    id: "Hop_tac_cung_Papaya",
  },
  {
    name: "Dịch vụ TPA",
    id: "Dich_vu_TPA",
  },
  {
    name: "Bảo hiểm sức khỏe",
    id: "Bao_hiem_suc_khoe",
  },
  {
    name: "Bảo hiểm xe",
    id: "Bao_hiem_xe",
  },
  {
    name: "Khác",
    id: "Khac",
  },
];

export {
  KEYS,
  CITIES,
  ROUTE_HEADER,
  STRAPI_MODEL,
  ROUTE_NAME,
  VALUES,
  INTERESTS,
};
