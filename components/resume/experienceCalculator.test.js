/**
 * @jest-environment jsdom
 */

import { ExperienceCalculator } from './ExperienceCalculator';

describe('ExperienceCalculator Component', () => {
  let calculator;

  beforeEach(() => {
    jest.useFakeTimers();
    calculator = new ExperienceCalculator();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('should calculate duration correctly', () => {
    const duration = calculator.calculateDuration('2020-01-01', '2022-06-01');
    expect(duration).toBe('2 yrs, 6 mos');
  });

  test('should handle single year correctly', () => {
    const duration = calculator.calculateDuration('2021-01-01', '2022-01-01');
    expect(duration).toBe('1 yr, 1 mo');
  });

  test('should handle months only', () => {
    const duration = calculator.calculateDuration('2022-01-01', '2022-06-01');
    expect(duration).toBe('6 mos');
  });

  test('should calculate "present" as current date', () => {
    // Mock current date to 2025-12-10
    const mockDate = new Date('2025-12-10');
    jest.spyOn(global, 'Date').mockImplementation((dateString) => {
      if (dateString) return new Date(dateString);
      return mockDate;
    });

    const duration = calculator.calculateDuration('2025-04-01', 'present');
    // From April 2025 to December 2025 = 9 months
    expect(duration).toBe('9 mos');

    global.Date.mockRestore();
  });

  test('should set up interval for updates', () => {
    expect(setInterval).toHaveBeenCalledWith(expect.any(Function), 60000);
  });
});
