"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Reusable Zod schemas for slot form
const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png"];

// Schema for creating a slot (image required)
const SlotSchema = z.object({
  name: z
    .string()
    .nonempty("Введите название слота")
    .min(3, "Название слишком короткое")
    .max(60, "Название слишком длинное"),
  platform: z.enum(["vk", "yandex"], { required_error: "Выберите платформу" }),
  text: z
    .string()
    .nonempty("Введите текст объявления")
    .max(150, "Текст объявления не должен превышать 150 символов"),
  variations: z.coerce.number().refine((val) => val === 2 || val === 3, {
    message: "Выберите 2 или 3 вариации",
  }),
  image: z
    .any()
    .refine(
      (files) => files instanceof FileList && files.length > 0,
      "Выберите изображение"
    )
    .refine(
      (files) =>
        files instanceof FileList &&
        ACCEPTED_IMAGE_TYPES.includes(files[0]?.type),
      "Допустимы только JPEG/PNG"
    )
    .refine(
      (files) => files instanceof FileList && files[0]?.size <= MAX_FILE_SIZE,
      "Размер изображения превышает 2 МБ"
    ),
});

// Schema for updating a slot (image optional)
const SlotSchemaUpdate = z.object({
  name: z
    .string()
    .nonempty("Введите название слота")
    .min(3, "Название слишком короткое")
    .max(60, "Название слишком длинное"),
  platform: z.enum(["vk", "yandex"], { required_error: "Выберите платформу" }),
  text: z
    .string()
    .nonempty("Введите текст объявления")
    .max(150, "Текст объявления не должен превышать 150 символов"),
  variations: z.coerce.number().refine((val) => val === 2 || val === 3, {
    message: "Выберите 2 или 3 вариации",
  }),
  image: z
    .any()
    .optional()
    .superRefine((files, ctx) => {
      if (!files || (files instanceof FileList && files.length === 0)) {
        // No file selected - that's okay in update
        return;
      }
      if (!(files instanceof FileList)) {
        ctx.addIssue({ code: "custom", message: "Неверный формат файла" });
        return;
      }
      const file = files[0];
      if (!ACCEPTED_IMAGE_TYPES.includes(file.type)) {
        ctx.addIssue({ code: "custom", message: "Допустимы только JPEG/PNG" });
      }
      if (file.size > MAX_FILE_SIZE) {
        ctx.addIssue({
          code: "custom",
          message: "Размер изображения превышает 2 МБ",
        });
      }
    }),
});

export type SlotFormData = z.infer<typeof SlotSchema>;

interface SlotFormProps {
  onSubmit: (data: SlotFormData) => void;
  initialSlot?: {
    name: string;
    platform: "vk" | "yandex";
    text: string;
    variations: number;
    // image field not included in initial values
  };
}

export default function SlotForm({ onSubmit, initialSlot }: SlotFormProps) {
  const isEdit = !!initialSlot;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SlotFormData>({
    resolver: zodResolver(isEdit ? SlotSchemaUpdate : SlotSchema),
    defaultValues: initialSlot
      ? {
          name: initialSlot.name,
          platform: initialSlot.platform,
          text: initialSlot.text,
          variations: initialSlot.variations.toString(),
        }
      : {
          platform: "vk",
          variations: "2",
        },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label
          htmlFor="slot-name"
          className="block font-medium text-base-900 mb-1"
        >
          Название слота
        </label>
        <input
          id="slot-name"
          type="text"
          className="w-full border border-gray-300 rounded px-3 py-2"
          placeholder="Например, Тест баннера #1"
          {...register("name")}
        />
        {errors.name && (
          <div className="text-red-600 text-sm mt-1">{errors.name.message}</div>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="platform"
          className="block font-medium text-base-900 mb-1"
        >
          Платформа
        </label>
        <select
          id="platform"
          className="w-full border border-gray-300 rounded px-3 py-2"
          {...register("platform")}
        >
          <option value="vk">VK Ads</option>
          <option value="yandex">Яндекс Директ</option>
        </select>
        {errors.platform && (
          <div className="text-red-600 text-sm mt-1">
            {errors.platform.message}
          </div>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="ad-text"
          className="block font-medium text-base-900 mb-1"
        >
          Текст объявления
        </label>
        <textarea
          id="ad-text"
          maxLength={150}
          className="w-full border border-gray-300 rounded px-3 py-2 h-24"
          placeholder="Введите рекламный текст (до 150 символов)"
          {...register("text")}
        />
        {errors.text && (
          <div className="text-red-600 text-sm mt-1">{errors.text.message}</div>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="image" className="block font-medium text-base-900 mb-1">
          Изображение
        </label>
        <input
          id="image"
          type="file"
          accept="image/jpeg,image/png"
          className="block w-full text-base-900"
          {...register("image")}
        />
        {errors.image && (
          <div className="text-red-600 text-sm mt-1">
            {errors.image.message}
          </div>
        )}
      </div>
      <fieldset className="mb-6">
        <legend className="block font-medium text-base-900 mb-1">
          Количество вариаций
        </legend>
        <div className="flex items-center gap-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="2"
              {...register("variations")}
              className="mr-1"
            />
            2 вариации
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="3"
              {...register("variations")}
              className="mr-1"
            />
            3 вариации
          </label>
        </div>
        {errors.variations && (
          <div className="text-red-600 text-sm mt-1">
            {errors.variations.message}
          </div>
        )}
      </fieldset>
      <button
        type="submit"
        className="bg-accent text-white font-medium px-4 py-2 rounded hover:opacity-90"
      >
        {isEdit ? "Сохранить" : "Создать"}
      </button>
    </form>
  );
}
