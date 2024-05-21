import { validateObjectRequiredProps } from './validate-object-required-props';
import { RequiredParemetersMissingError } from './errors';

describe('validateObjectRequiredProps', () => {

  it('throw when parameters are missing', () => {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    type foo = {
      a: number;
    };
    const obj = {} as foo;

    expect(() => validateObjectRequiredProps(obj, ['a']))
      .toThrow(new RequiredParemetersMissingError(`a`, null));

  });

  it('not throw when parameters are ok', () => {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    type foo = {
      a: number;
    };
    const obj = {
      a: 12
    } as foo;

    expect(() => validateObjectRequiredProps(obj, ['a']))
      .not.toThrow();
  });

});
