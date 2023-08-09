import { reactive, ComponentPublicInstance } from 'vue';
import { Deferred, mountComponent } from '../_utils';
import template from './Dialog.vue';

export type TDialogInstance = {
  deferred?: Deferred<boolean>;
  value: ComponentPublicInstance;
  unmount: () => void;
  isAutoClose: boolean;
};

let instance: TDialogInstance | null;
let deferred: Deferred<any> | null;
const state = reactive({
  show: false
});

function showDialog(dialogData: Record<string, any>) {
  deferred = new Deferred();
  instance = mountComponent(template, { ...dialogData });
  return deferred;
}

function closeDialog(closeData: any = null) {
  deferred?.resolve(closeData);
  deferred = null;
  state.show = false;
  setTimeout(() => {
    instance?.unmount();
    instance = null;
  }, 300);
}
export { showDialog, closeDialog, state };
