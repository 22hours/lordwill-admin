import { book_types } from "global";

export const categorySetting = (cate_id: book_types.book_cate_id) => {
    switch (cate_id) {
        case "default":
            return "카테고리를 선택하세요";
        case "cate_business":
            return "비즈니스";
        case "cate_economy":
            return "경제/경영";
        case "cate_essay":
            return "시/에세이";
        case "cate_faith":
            return "신앙서적";
        case "cate_it":
            return "IT";
        case "cate_marketing":
            return "마케팅";
        case "cate_poetry":
            return "시/희곡";
        case "cate_simprovement":
            return "자기계발";
        case "cate_wculture":
            return "글쓰기교양";
        case "cate_writing":
            return "글쓰기";
        default:
            throw new Error(`EP REDUCER ERROR IN :: API.TSX`);
    }
};
