import { axiosGet, axiosPost } from "./api";
import { setProductList, setProduct, setImgList, setDetailImgList, setSize} from "../features/product/productSlice";

/**상품 전체 리스트 */
export const getProductList = () => async(dispatch) => {
    const url = 'http://15.164.100.230:9000/product/all';
    const data = null;
    const result = await axiosGet({url, data});
    dispatch(setProductList({result}));

}

/**상품 상세 */
export const getProduct = (pid) => async(dispatch) => {
    const url = 'http://15.164.100.230:9000/product/detail';
    const data = {"pid":pid};
    const result = await axiosPost({url, data});
    const product = result;
    const imgList = result.imgList;
    const detailImgList = result.detailImgList;

    dispatch(setProduct({product}));
    dispatch(setImgList({imgList}));
    dispatch(setDetailImgList({detailImgList}));
}

export const getSize = (size) => (dispatch) => {
    dispatch(setSize({size}));
}