/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SlotForm from '@/components/SlotForm';

describe('SlotForm Component', () => {
  test('Показывает ошибки валидации для обязательных полей', async () => {
    const handleSubmit = jest.fn();
    render(<SlotForm onSubmit={handleSubmit} />);

    // Submit without filling anything
    const submitButton = screen.getByText('Создать');
    fireEvent.click(submitButton);

    // Expect validation errors to appear
    expect(await screen.findByText(/Введите название слота/)).toBeInTheDocument();
    expect(screen.getByText(/Введите текст объявления/)).toBeInTheDocument();
    expect(screen.getByText(/Выберите изображение/)).toBeInTheDocument();
    // onSubmit should not be called on validation failure
    expect(handleSubmit).not.toHaveBeenCalled();
  });

  test('Отправляет форму с корректными данными', async () => {
    const handleSubmit = jest.fn();
    render(<SlotForm onSubmit={handleSubmit} />);

    // Fill in the fields
    fireEvent.change(screen.getByLabelText(/Название слота/), {
      target: { value: 'Тестовый слот' },
    });
    fireEvent.change(screen.getByLabelText(/Текст объявления/), {
      target: { value: 'Тестовый текст' },
    });
    // Platform select (defaults to VK, we can leave it or explicitly set Yandex for variety)
    fireEvent.change(screen.getByLabelText(/Платформа/), { target: { value: 'yandex' } });
    // Variations radio (default 2 is selected, test switching to 3)
    fireEvent.click(screen.getByLabelText('3 вариации'));

    // Prepare a dummy image file for upload
    const file = new File([new Uint8Array([0xff])], 'test.png', { type: 'image/png' });
    const fileInput = screen.getByLabelText(/Изображение/);
    // Simulate file selection
    fireEvent.change(fileInput, { target: { files: [file] } });

    // Submit form
    fireEvent.click(screen.getByText('Создать'));

    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledTimes(1);
    });
    // The onSubmit should be called with form data matching our inputs
    const submittedData = handleSubmit.mock.calls[0][0];
    expect(submittedData.name).toBe('Тестовый слот');
    expect(submittedData.text).toBe('Тестовый текст');
    expect(submittedData.platform).toBe('yandex');
    expect(submittedData.variations).toBe(3); // via zod coerce, should be number
    expect(submittedData.image).toBeInstanceOf(FileList);
    expect(submittedData.image[0].name).toBe('test.png');
  });
});
