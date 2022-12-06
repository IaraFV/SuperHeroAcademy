import { render, screen, fireEvent} from "@testing-library/angular";
import { InputComponent, HeroInputProps } from "./input.component";

const inputValue = 'input';

const sut = async (customProps?: HeroInputProps) => {
  await render(InputComponent, {
    componentProperties: customProps,
  });
};

describe('InputComponent', () => {
  it('should allow letter to be inputted', async () => {
    await sut();
    fireEvent.change(screen.getByTestId('inputElement'), {
      target: { value: inputValue },
    });
    expect(screen.getByTestId('inputElement')).toHaveValue(inputValue);
  });
});

const inputSizes: Array<HeroInputProps['size']> = [
  'sm',
  'md'
];

it.each(inputSizes)('should render correct type and size', async (size) => {
  await sut({
    type: 'text',
    size
  });
  expect(screen.getByTestId('divElement')).toHaveClass(`hero-input-text-${size}`);
});





