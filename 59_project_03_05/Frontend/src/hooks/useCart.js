import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asyncAddToCart, asyncRemoveFromCart, asyncUpdateCartQuantity } from '../store/cartActions';
import { ROUTES, UI_STRINGS } from '../constants/apiConstants';

export const useCart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.usersReducer.users);
    const { cartItems } = useSelector((state) => state.cartReducer);
    const { products } = useSelector((state) => state.productsReducer);

    const addToCart = (productId) => {
        if (!user) {
            alert(UI_STRINGS.ERROR_LOGIN_REQUIRED);
            return navigate(ROUTES.LOGIN);
        }
        dispatch(asyncAddToCart(productId));
    };

    const removeFromCart = (productId) => {
        if (window.confirm(UI_STRINGS.CONFIRM_REMOVE)) {
            dispatch(asyncRemoveFromCart(productId));
        }
    };

    const updateQuantity = (productId, currentQty, delta) => {
        const newQty = currentQty + delta;
        if (newQty >= 1) {
            dispatch(asyncUpdateCartQuantity(productId, newQty));
        }
    };

    const getFullCartData = () => {
        return cartItems.map(item => {
            const product = products.find(p => p.id === item.productId);
            return {
                ...item,
                title: product?.title || "Unknown Product",
                price: product?.price || 0,
                category: product?.category || "",
                image: product?.image || ""
            };
        }).filter(item => item.image !== "");
    };

    return {
        cartItems,
        fullCartItems: getFullCartData(),
        addToCart,
        removeFromCart,
        updateQuantity,
        isLoggedIn: !!user
    };
};
