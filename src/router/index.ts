import ROUTES from "@/constants/routes";
import ProductForm from "@/pages/ProductForm.vue";
import UserForm from "@/pages/UserForm.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: ROUTES.HOME,
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
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
