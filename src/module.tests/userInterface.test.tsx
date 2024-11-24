import React from 'react';
import { render } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';
import { StringAdditionComponent } from '../module.components';
import { root as StringAdditionComponentTranslations } from '../module.resources/translations/stringAdditionComponentTranslations';

describe('String Calculator UI', () => {

  describe('Testing the StringAdditionComponent', () => {
    const translations = StringAdditionComponentTranslations.translations;
    test('renders the header, input field and button', async () => {
      const { getByTestId } = render(<StringAdditionComponent />);

      // Access input field and button
      const headerComponent = getByTestId('headerComponentTestId');
      const inputTextAreaComponent = getByTestId('textAreaComponentTestId');
      const buttonComponent = getByTestId('calculateButtonComponentTestId');

      // Assertions
      expect(headerComponent).toBeInTheDocument();
      // Check for headerComponent text content
      expect(headerComponent.textContent).toBe(translations.titles.StringCalculatorAddition);

      expect(inputTextAreaComponent).toBeInTheDocument();
      // Check for input text area placeholder text content
      expect((inputTextAreaComponent as HTMLTextAreaElement).placeholder).toBe(translations.placeHolders.enterNumbersInput);

      expect(buttonComponent).toBeInTheDocument();
      // Check for butotn label content
      expect(buttonComponent.textContent).toBe(translations.buttons.calculate);
    });

    test('renders the result component for a input provided', async () => {
      const { getByTestId } = render(<StringAdditionComponent />);

      const inputTextAreaComponent = getByTestId('textAreaComponentTestId');
      const buttonComponent = getByTestId('calculateButtonComponentTestId');

      // Simulate user input and button click
      await userEvent.type(inputTextAreaComponent, "1\n2,3");
      await userEvent.click(buttonComponent);

      // Check if results is present
      const resultComponent = getByTestId("resultComponentTestId");
      expect(resultComponent).toBeInTheDocument();
    });

    test('renders the right result for a valid input provided', async () => {
      const { getByTestId } = render(<StringAdditionComponent />);

      const inputTextAreaComponent = getByTestId('textAreaComponentTestId');
      const buttonComponent = getByTestId('calculateButtonComponentTestId');

      // Simulate user input and button click
      await userEvent.type(inputTextAreaComponent, "1\n2,3");
      await userEvent.click(buttonComponent);

      // Check if results component displays the expected value
      const resultComponent = getByTestId("resultComponentTestId");
      expect(resultComponent).toBeInTheDocument();
      expect(resultComponent.textContent).toBe(`${translations.labels.result}: 6`);
    });

    test('disable the calculate button for a invalid input provided', async () => {
      const { getByTestId } = render(<StringAdditionComponent />);

      const inputTextAreaComponent = getByTestId('textAreaComponentTestId');
      const buttonComponent = getByTestId('calculateButtonComponentTestId');

      // Simulate user input and button click
      await userEvent.type(inputTextAreaComponent, "abc");

      // Check if button component is disabled
      expect(buttonComponent).toBeInTheDocument();
      expect((buttonComponent as HTMLButtonElement).disabled).toBe(true);
    });

    test('Input rules component is displayed', async () => {
      const { getByTestId } = render(<StringAdditionComponent />);

      const inputRulesHeader = getByTestId('inputRulesHeaderComponentTestId');
      expect(inputRulesHeader).toBeInTheDocument();

      translations.messages.inputRules.forEach((rule, index) => {
        const inputRulesLiRlement = getByTestId(`inputRulesLi${index + 1}ComponentTestId`);

        // Check if input rules li component is present and has the message
        expect(inputRulesLiRlement).toBeInTheDocument();
        expect(inputRulesLiRlement.textContent).toBe(rule);

      })
    });

  });
});