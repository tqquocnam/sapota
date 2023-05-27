import { KEYS } from "./contanst";

export const utils = {
  mapSlugInTag: (category: any) => {
    if (category?.attributes?.category?.data) {
      return `${KEYS.KNOWLEDGE_PAGE}/${category?.attributes?.category?.data?.attributes?.slug}/${category?.attributes?.slug}`;
    } else {
      return `${KEYS.KNOWLEDGE_PAGE}/${category?.attributes?.slug}`;
    }
  },

  formatDate: (dateString: string) => {
    const date = new Date(dateString).getDate();
    const year = new Date(dateString).getFullYear();
    const month = new Date(dateString).getMonth() + 1;
    let monthString = "";
    switch (month) {
      case 1:
        monthString = "Tháng Một";
        break;
      case 2:
        monthString = "Tháng Hai";
        break;
      case 3:
        monthString = "Tháng Ba";
        break;
      case 4:
        monthString = "Tháng Bốn";
        break;
      case 5:
        monthString = "Tháng Năm";
        break;
      case 6:
        monthString = "Tháng Sáu";
        break;
      case 7:
        monthString = "Tháng Bảy";
        break;
      case 8:
        monthString = "Tháng Tám";
        break;
      case 9:
        monthString = "Tháng Chín";
        break;
      case 10:
        monthString = "Tháng Mười";
        break;
      case 11:
        monthString = "Tháng Mười Một";
        break;
      case 12:
        monthString = "Tháng Mười Hai";
        break;
    }
    return `${date} ${monthString} ${year}`;
  },
};
