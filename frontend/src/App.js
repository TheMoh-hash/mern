import { BrowserRouter, Routes, Route } from "react-router-dom";


//Component :
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

//Component utilisateurs :
import RoutesWithUserChatComponent from "./components/user/RoutesWithUserChatComponent";

//Pages accessibles au Publics :
import HomePage from "./pages/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductListPage from "./pages/ProductListPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import ProtectedRoutesComponent from "./components/ProtectedRoutesComponent";

//Page D'utilisateur Protégées :
import UserProfilePage from "./pages/user/UserProfilePage";
import UserOrdersPage from "./pages/user/UserOrdersPage";
import UserCartDetailsPage from "./pages/user/UserCartDetailsPage";
import UserOrderDetailsPage from "./pages/user/UserOrderDetailsPage";

//Page D'admin Protégées :
import AdminUsersPage from "./pages/admin/AdminUsersPage";
import AdminEditUserPage from "./pages/admin/AdminEditUserPage";
import AdminProductsPage from "./pages/admin/AdminProductsPage";
import AdminCreateProductPage from "./pages/admin/AdminCreateProductPage";
import AdminEditProductPage from "./pages/admin/AdminEditProductPage";
import AdminOrdersPage from "./pages/admin/AdminOrdersPage";
import AdminOrderDetailsPage from "./pages/admin/AdminOrderDetailsPage";
import AdminChatsPage from "./pages/admin/AdminChatsPage";
import AdminAnalyticsPage from "./pages/admin/AdminAnalyticsPage";

import ScrollToTop from "./utils/ScrollToTop";
import NotFoundPage from "./pages/user/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <HeaderComponent />
      <Routes>
        <Route element={<RoutesWithUserChatComponent />}>
          {/*Itineraires accessibles au publics : */}
          <Route path="/" element={<HomePage />} />
          <Route path="/product-list" element={<ProductListPage />} />
          <Route
            path="/product-list/:pageNumParam"
            element={<ProductListPage />}
          />
          <Route
            path="/product-list/category/:categoryName"
            element={<ProductListPage />}
          />
          <Route
            path="/product-list/category/:categoryName/:pageNumParam"
            element={<ProductListPage />}
          />
          <Route
            path="/product-list/search/:searchQuery"
            element={<ProductListPage />}
          />
          <Route
            path="/product-list/search/:searchQuery/:pageNumParam"
            element={<ProductListPage />}
          />
          <Route
            path="/product-list/category/:categoryName/search/:searchQuery"
            element={<ProductListPage />}
          />
          <Route
            path="/product-list/category/:categoryName/search/:searchQuery/:pageNumParam"
            element={<ProductListPage />}
          />
          <Route path="/product-details/:id" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        {/*Dans les olds versions de react-router dom on fait <Route path ="/" component={HomePage}/> au lieu de element */}

        {/*Itinéraire(routes) protegees par l'user : */}
        <Route element={<ProtectedRoutesComponent admin={false} />}>
          <Route path="/user" element={<UserProfilePage />} />
          <Route path="/user/my-orders" element={<UserOrdersPage />} />
          <Route path="/user/cart-details" element={<UserCartDetailsPage />} />
          <Route
            path="/user/order-details/:id"
            element={<UserOrderDetailsPage />}
          />
        </Route>

        {/*Itineraire protegees par l'admin : */}
        <Route element={<ProtectedRoutesComponent admin={true} />}>
          <Route path="/admin/users" element={<AdminUsersPage />} />
          <Route path="/admin/edit-user/:id" element={<AdminEditUserPage />} />
          <Route path="/admin/products" element={<AdminProductsPage />} />
          <Route
            path="/admin/create-new-product"
            element={<AdminCreateProductPage />}
          />
          <Route
            path="/admin/edit-product/:id"
            element={<AdminEditProductPage />}
          />
          <Route path="/admin/orders" element={<AdminOrdersPage />} />
          <Route
            path="/admin/order-details/:id"
            element={<AdminOrderDetailsPage />}
          />
          <Route path="/admin/chats" element={<AdminChatsPage />} />
          <Route path="/admin/analytics" element={<AdminAnalyticsPage />} />
        </Route>
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
