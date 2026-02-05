import ROUTES from "@/constants/routes";
import { createRouter, createWebHistory } from "vue-router";

const AppLayout = () => import("@/components/Layout/AppLayout.vue");
const UserForm = () => import("@/pages/UserForm.vue");
const ProductForm = () => import("@/pages/ProductForm.vue");

const routes = [
  {
    path: ROUTES.HOME,
    component: AppLayout,
    children: [
      {
        path: "",
        redirect: ROUTES.USER_FORM,
      },
      {
        path: ROUTES.USER_FORM,
        name: "UserForm",
        component: UserForm,
      },
      {
        path: ROUTES.PRODUCT_FORM,
        name: "ProductForm",
        component: ProductForm,
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
