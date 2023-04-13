import {expect, it} from 'vitest';

// First solution

// const tryCatchDemo = (state: "fail" | "succeed") => {
//   try {
//     if (state === "fail") {
//       throw new Error("Failure!");
//     }
//   } catch (e: any) {
//     return e.message;
//   }
// };

// Second solution

// const tryCatchDemo = (state: "fail" | "succeed") => {
//   try {
//     if (state === "fail") {
//       throw new Error("Failure!");
//     }
//   } catch (e) {
//     return (e as Error).message;
//   }
// };

// Third solution

const tryCatchDemo = (state: 'fail' | 'succeed') => {
  try {
    if (state === 'fail') {
      throw new Error('Failure!');
    }
  } catch (e) {
    if (e instanceof Error) return e.message;
  }
};

it('Should return the message when it fails', () => {
  expect(tryCatchDemo('fail')).toEqual('Failure!');
});

it('Should return the message', () => {
  expect(tryCatchDemo('succeed')).toEqual(undefined);
});
