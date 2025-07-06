import Button from "./Button";

const ModalActions = ({
  onCancel,
  onConfirm,
  confirmLabel = "Зберегти",
  cancelLabel = "Скасувати",
  typeConfirm,
  confirmVariant = "default",
  form,
}) => (
  <div className="flex flex-col justify-center gap-3 mt-4 sm:gap-6 md:gap-8 sm:flex-row ">
    <Button variant="secondary" onClick={onCancel}>
      {cancelLabel}
    </Button>

    <Button
      type={typeConfirm}
      variant={confirmVariant}
      onClick={onConfirm}
      form={form}
    >
      {confirmLabel}
    </Button>
  </div>
);

export default ModalActions;
