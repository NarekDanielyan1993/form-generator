<template>
  <div class="user-form-container">
    <FormGenerator
      v-model="form"
      :fields="USER_FIELDS"
      :key="formKeyRef"
      :validation-schema="userFormSchema"
      @submit="submit"
      @cancel="cancel"
    />
  </div>
</template>

<script setup lang="ts">
import FormGenerator from "@/components/FormGenerator/FormGenerator.vue";
import { USER_FORM_DEFAULTS } from "@/constants/ui/defaults";
import { USER_FIELDS } from "@/constants/ui/fields";
import { userFormSchema } from "@/validation/userForm.schema";
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const formKey = "userForm";
const formKeyRef = ref(0);

const form = ref(store.getters.getForm(formKey));

const submit = (values: unknown) => {
  store.commit("saveForm", { key: formKey, data: values });
};

const cancel = () => {
  form.value = USER_FORM_DEFAULTS;
  formKeyRef.value++;
  store.commit("clearForm", { key: formKey, data: USER_FORM_DEFAULTS });
};
</script>

<style scoped lang="scss">
@use "@/styles/_userForm";
</style>
