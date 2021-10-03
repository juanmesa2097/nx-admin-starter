import { normalize } from './normalize.util';

describe('NormalizeUtil', () => {
  it('It should return empty string when invalid argument is passed', () => {
    expect(normalize(null)).toBe('');
    expect(normalize(undefined)).toBe('');
  });
  it('It should trim unwanted spaces', () => {
    const mockText = ' Lorem    IPSUM     ';
    const expected = 'Lorem IPSUM';
    const normalizedText = normalize(mockText);

    expect(normalizedText).toBe(expected);
  });
  it('should transform text to lowercase', () => {
    const mockText = 'Lorem IPSUM';
    const expected = 'lorem ipsum';
    const normalizedText = normalize({ text: mockText, letterCase: 'lowercase' });

    expect(normalizedText).toBe(expected);
  });
  it('should transform text to uppercase', () => {
    const mockText = 'Lorem IPSUM';
    const expected = 'LOREM IPSUM';
    const normalizedText = normalize({ text: mockText, letterCase: 'uppercase' });

    expect(normalizedText).toBe(expected);
  });
  it('should transform text to capitalize', () => {
    const mockText = 'Lorem IPSUM';
    const expected = 'Lorem Ipsum';
    const normalizedText = normalize({ text: mockText, letterCase: 'capitalize' });

    expect(normalizedText).toBe(expected);
  });
  it('should add custom separator', () => {
    const mockText = 'Lorem Ipsum Dolor Sit Amet';
    const expected = 'LOREM_IPSUM_DOLOR_SIT_AMET';
    const normalizedText = normalize({
      text: mockText,
      letterCase: 'uppercase',
      separator: '_',
    });

    expect(normalizedText).toBe(expected);
  });
});
