exports.apiEnum = {
  API_REGISTER: "/auth/register",
  API_LOGIN: "/auth/login",
  API_SIGNOUT: "/auth/logout",
  API_UPDATE_PROFILE: "/auth/update-details",
  API_UPDATE_USER_BY_ADMIN: "/auth/updateuserdetails/:userId",
  API_DELETE_USER: "/auth/deleteuser/:userId",
  API_FORGOT_PASSWORD: "/auth/forget-password",
  API_RESET_PASSWORD: "/auth/reset-password/:reset-token",
  API_GET_TOKEN: "/auth/token",
  API_CHECK_STUDENT: "/check",
  API_UPDATE_PASSWORD: "/auth/update-password",
  API_GET_MY_PROFILE: "/auth/profile",
  API_GET_ALL_USERS: "/auth/getallusers",
  API_GET_USER: "/auth/getuser/:userId",
  API_ADD_PRODUCT_TO_CART: "/order/cart/add/:productId",
  API_REDUCE_PRODUCT_FROM_CART: "/order/cart/reduce/:productId",
  API_GET_CART: "/order/cart",
  API_REMOVE_PRODUCT_FROM_CART: "/order/cart/:productId",
  API_GET_PRODUCTS: "/products",
  API_GET_PRODUCT: "/products/:productId",
  API_DELETE_PRODUCT: "/products/:productId",
  API_UPDATE_PRODUCT: "/products/:productId",
  API_CREATE_PRODUCT: "/products/add-product",
  API_UPLOAD_PRODUCT_PHOTO: "/products/:productId/photo",
  API_ORDER_GET_PRODUCTS: "/order/products",
  API_CREATE_ORDER: "/order/create",
  API_UPDATE_ORDER: "/order/:orderId",
  API_GET_ORDER: "/order/:orderId",
  API_GET_ORDERS: "/order",
  API_DELETE_ORDER: "/order/:orderId",
  API_ORDER_GET_DETAILS: "/order-detail",
  API_ORDER_DETAILS_GET_PRODUCTS: "/order-detail/products",
  API_GET_PRODUCTS_FOR_CATEGORY: "/categories/:categoryId/products",
  API_GET_CATEGORIES: "/categories",
  API_GET_CATEGORY: "/categories/:categoryId",
  API_CREATE_CATEGORY: "/categories",
  API_DELETE_CATEGORY: "/categories/:categoryId",
  API_UPDATE_CATEGORY: "/categories/:categoryId",
  API_UPLOAD_CATEGORY_PHOTO: "/categories/:categoryId/photo",
  API_GET_IMAGES: "/images",
  API_GET_IMAGE: "/images/:imageId",
  API_DELETE_IMAGE: "/images/:imageId",
  API_UPDATE_IMAGE: "/images/:imageId",
  API_GET_COMMENTS_FOR_PRODUCT: "/comments/products/:productId",
  API_POST_COMMENT: "/comments",
  API_DELETE_COMMENT: "/comments/:commentId",
  API_UPDATE_COMMENT: "/comments/:commentId",
};
