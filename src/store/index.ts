import {
  PRODUCT_FORM_DEFAULTS,
  USER_FORM_DEFAULTS,
} from "@/constants/ui/defaults";
import { createStore } from "vuex";

interface FormsState {
  forms: Record<string, any>;
}

export default createStore<FormsState>({
  state: () => ({
    forms: {
      userForm: USER_FORM_DEFAULTS,
      productForm: PRODUCT_FORM_DEFAULTS,
    },
  }),

  getters: {
    getForm: (state) => (key: string) => {
      return state.forms[key] || null;
    },
  },

  mutations: {
    saveForm(state, { key, data }: { key: string; data: any }) {
      state.forms[key] = data;
    },

    clearForm(state, { key, data }) {
      state.forms[key] = data;
    },
  },
});
