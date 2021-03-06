// jest.config.ts
import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['./jest.setup.ts'],
  moduleNameMapper: {
    '^@/components(.*)$': '<rootDir>/src/components$1',
    '^@/pages(.*)$': '<rootDir>/src/pages$1',
    '^@/layouts(.*)$': '<rootDir>/src/layouts$1',
    '^@/hoc(.*)$': '<rootDir>/src/hoc$1',
    '^@/contexts(.*)$': '<rootDir>/src/contexts$1',
    '^@/reducers(.*)$': '<rootDir>/src/reducers$1',
    '^@/middlewares(.*)$': '<rootDir>/src/middlewares$1',
    '^@/libs(.*)$': '<rootDir>/src/libs$1',
    'endpoints.config': '<rootDir>/endpoints.config.ts',
  },
  collectCoverageFrom: ['src/*/*.{ts,tsx}'],
};
export default config;
