'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Reusable Zod schemas for slot form
const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/png'];

// Schema for creating a slot (image required)
const SlotSchema = z.object({
  name: z
    .string()
    .nonempty('Введите название слота')
    .min(3, 'Название слишком короткое')
    .max(60, 'Название слишком длинное'),
  platform: z.enum(['vk', 'yandex'], { required_error: 'Выберите платформу' }),
  text: z
    .string()
    .nonempty('Введите текст объявления')
    .max(150, 'Текст объявления не должен превышать 150 символов'),
  variations: z.coerce.number().refine((val) => val === 2 || val === 3, {
    message: 'Выберите 2 или 3 вариации',
  }),
  image: z
    .any()
    .refine((files) => files instanceof FileList && files.length > 0, 'Выберите изображение')
    .refine(
      (files) => files instanceof FileList && ACCEPTED_IMAGE_TYPES.includes(files[0]?.type),
      'Допустимы только JPEG/PNG'
    )
    .refine(
      (files) => files instanceof FileList && files[0]?.size <= MAX_FILE_SIZE,
      'Размер изображения превышает 2 МБ'
    ),
});

// Schema for updating a slot (image optional)
const SlotSchemaUpdate = z.object({
  name: z
    .string()
    .nonempty('Введите название слота')
    .min(3, 'Название слишком короткое')
    .max(60, 'Название слишком длинное'),
  platform: z.enum(['vk', 'yandex'], { required_error: 'Выберите платформу' }),
  text: z
    .string()
    .nonempty('Введите текст объявления')
    .max(150, 'Текст объявления не должен превышать 150 символов'),
  variations: z.coerce.number().refine((val) => val === 2 || val === 3, {
    message: 'Выберите 2 или 3 вариации',
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
        ctx.addIssue({ code: 'custom', message: 'Неверный формат файла' });
        return;
      }
      const file = files[0];
      if (!ACCEPTED_IMAGE_TYPES.includes(file.type)) {
        ctx.addIssue({ code: 'custom', message: 'Допустимы только JPEG/PNG' });
      }
      if (file.size > MAX_FILE_SIZE) {
        ctx.addIssue({
          code: 'custom',
          message: 'Размер изображения превышает 2 МБ',
        });
      }
    }),
});

export type SlotFormData = z.infer<typeof SlotSchema>;

interface SlotFormProps {
  onSubmit: (data: SlotFormData) => void;
  initialSlot?: {
    name: string;
    platform: 'vk' | 'yandex';
    text: string;
    variations: number;
    image?: string; // Add image field for edit mode
  };
}

export default function SlotForm({ onSubmit, initialSlot }: SlotFormProps) {
  const isEdit = !!initialSlot;
  const {
    register,
    handleSubmit,
    watch,
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
          platform: 'vk',
          variations: '2',
        },
  });

  const selectedFile = watch('image');
  const hasFile = selectedFile && selectedFile.length > 0;
  const hasExistingImage = initialSlot?.image && initialSlot.image.length > 0;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label htmlFor="slot-name" className="block font-medium text-base-900 mb-1">
          Название слота
        </label>
        <input
          id="slot-name"
          type="text"
          className="w-full border border-gray-300 rounded px-3 py-2"
          placeholder="Например, Тест баннера #1"
          {...register('name')}
        />
        {errors.name && <div className="text-red-600 text-sm mt-1">{errors.name.message}</div>}
      </div>
      <div className="mb-4">
        <label htmlFor="platform" className="block font-medium text-base-900 mb-1">
          Платформа
        </label>
        <select
          id="platform"
          className="w-full border border-gray-300 rounded px-3 py-2"
          {...register('platform')}
        >
          <option value="vk">VK Ads</option>
          <option value="yandex">Яндекс Директ</option>
        </select>
        {errors.platform && (
          <div className="text-red-600 text-sm mt-1">{errors.platform.message}</div>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="ad-text" className="block font-medium text-base-900 mb-1">
          Текст объявления
        </label>
        <textarea
          id="ad-text"
          maxLength={150}
          className="w-full border border-gray-300 rounded px-3 py-2 h-24"
          placeholder="Введите рекламный текст (до 150 символов)"
          {...register('text')}
        />
        {errors.text && <div className="text-red-600 text-sm mt-1">{errors.text.message}</div>}
      </div>
      <div className="mb-4">
        <label htmlFor="image" className="block font-medium text-base-900 mb-1">
          Изображение
        </label>
        <div className="relative">
          <input
            id="image"
            type="file"
            accept="image/jpeg,image/png"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            {...register('image')}
          />
          <div
            className={`border-2 border-dashed rounded-lg p-4 text-center transition-colors ${
              hasFile
                ? 'border-green-400 bg-green-50'
                : hasExistingImage
                ? 'border-blue-400 bg-blue-50'
                : 'border-gray-300 hover:border-blue-400'
            }`}
          >
            {hasFile ? (
              <>
                <svg
                  className="mx-auto h-8 w-8 text-green-500 mb-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-sm text-green-700 font-medium">Файл выбран</p>
                <p className="text-xs text-green-600">{selectedFile[0]?.name}</p>
              </>
            ) : hasExistingImage ? (
              <>
                <div className="mb-2">
                  <img
                    src={initialSlot?.image}
                    alt="Текущее изображение"
                    className="mx-auto h-16 w-16 object-cover rounded border"
                  />
                </div>
                <p className="text-sm text-blue-700 font-medium">Текущее изображение</p>
                <p className="text-xs text-blue-600">Нажмите для замены</p>
              </>
            ) : (
              <>
                <svg
                  className="mx-auto h-8 w-8 text-gray-400 mb-1"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-sm text-gray-600">
                  <span className="font-medium text-blue-600 hover:text-blue-500">
                    Нажмите для выбора
                  </span>{' '}
                  или перетащите файл
                </p>
                <p className="text-xs text-gray-500 mt-1">PNG, JPG до 2 МБ</p>
              </>
            )}
          </div>
        </div>
        {errors.image && <div className="text-red-600 text-sm mt-1">{errors.image.message}</div>}
      </div>
      <fieldset className="mb-6">
        <legend className="block font-medium text-base-900 mb-1">Количество вариаций</legend>
        <div className="flex items-center gap-4">
          <label className="inline-flex items-center">
            <input type="radio" value="2" className="mr-2" {...register('variations')} />2 варианта
          </label>
          <label className="inline-flex items-center">
            <input type="radio" value="3" className="mr-2" {...register('variations')} />3 варианта
          </label>
        </div>
        {errors.variations && (
          <div className="text-red-600 text-sm mt-1">{errors.variations.message}</div>
        )}
      </fieldset>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
      >
        {isEdit ? 'Обновить слот' : 'Создать слот'}
      </button>
    </form>
  );
}
