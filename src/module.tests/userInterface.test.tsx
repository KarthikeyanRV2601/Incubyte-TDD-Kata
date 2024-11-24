import React from 'react';
import { render } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';
import { StringAdditionComponent } from '../module.components';
import { root as StringAdditionComponentTranslations } from '../module.resources/translations/stringAdditionComponentTranslations';

describe('String Calculator UI', () => {

  describe('Testing the StringAdditionComponent', () => {

    test('renders the input field and button', async () => {
      const { getByPlaceholderText, getByText } = render(<StringAdditionComponent />);

      // Access input field and button
      const input = getByPlaceholderText(StringAdditionComponentTranslations.translations.placeHolders.enterNumbersInput);
      const button = getByText(StringAdditionComponentTranslations.translations.buttons.calculate);

      // Assertions
      expect(input).toBeInTheDocument();
      expect(button).toBeInTheDocument();

      // Simulate user input and button click
      await userEvent.type(input, "1\n2,3");
      await userEvent.click(button);

      // Check results
      const result = getByText("Result: 6");
      expect(result).toBeInTheDocument();
    });
  });
});