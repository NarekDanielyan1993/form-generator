<template>
  <div class="product-form-container">
    <FormGenerator
      v-model="form"
      :key="formKeyRef"
      :fields="PRODUCT_FIELDS"
      :validation-schema="productFormSchema"
      @submit="submit"
      @cancel="cancel"
    >
      <template #field-title="{ name, error }">
        <CustomInput
          label="Product Title (Custom)"
          :error="error"
          :name="name"
          placeholder="Enter product title"
        />
      </template>
    </FormGenerator>
  </div>
</template>

<script setup lang="ts">
import FormGenerator from "@/components/FormGenerator/FormGenerator.vue";
import CustomInput from "@/components/ui/fields/customInput.vue";
import { PRODUCT_FORM_DEFAULTS } from "@/constants/ui/defaults";
import { PRODUCT_FIELDS } from "@/constants/ui/fields";
import { productFormSchema } from "@/validation/productForm.schema";
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const formKey = "productForm";
const formKeyRef = ref(0);

const form = ref({ ...store.getters.getForm(formKey) });

const submit = (values: unknown) => {
  store.commit("saveForm", { key: formKey, data: values });
};

const cancel = () => {
  formKeyRef.value++;
  form.value = PRODUCT_FORM_DEFAULTS;
  store.commit("clearForm", { key: formKey, data: PRODUCT_FORM_DEFAULTS });
};
</script>

<style scoped lang="scss">
@use "@/styles/_productForm";
</style>
