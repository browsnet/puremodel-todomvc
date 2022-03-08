import { setupStore } from '@pure-model/core';
import produce, { Draft } from 'immer';

export type EditState = {
  status: boolean;
  content: string;
};

const initialState: EditState = {
  status: false,
  content: '',
};

export default function EditInitializer() {
  let edit = setupStore({
    initialState,
    reducers: {
      disable: produce((state: Draft<EditState>) => {
        state.status = false
      }),
      enable: produce((state: Draft<EditState>) => {
        state.status = true
      }),
      update: produce((state: Draft<EditState>, content: string) => {
        state.content = content
      }),
    },
  });

  return edit;
};