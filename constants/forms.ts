export interface FormField {
  id: string;
  label: string;
  type: "text" | "email" | "tel" | "date" | "textarea";
  placeholder?: string;
  required: boolean;
}

export const CONTACT_FORM_FIELDS: FormField[] = [
  {
    id: "name",
    label: "お名前",
    type: "text",
    placeholder: "山田 花子",
    required: true,
  },
  {
    id: "email",
    label: "メールアドレス",
    type: "email",
    placeholder: "example@email.com",
    required: true,
  },
  {
    id: "phone",
    label: "電話番号",
    type: "tel",
    placeholder: "090-1234-5678",
    required: false,
  },
  {
    id: "weddingDate",
    label: "挙式予定日",
    type: "date",
    required: false,
  },
  {
    id: "message",
    label: "メッセージ",
    type: "textarea",
    placeholder: "ご要望やご質問などをお書きください",
    required: true,
  },
];

export const CONTACT_SUCCESS_MESSAGE = "お問い合わせありがとうございます。48時間以内にご連絡させていただきます。";
export const CONTACT_ERROR_MESSAGE = "申し訳ございません。エラーが発生しました。時間をおいて再度お試しください。";
