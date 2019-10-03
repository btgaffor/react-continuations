import { Monad } from "./static-land";
import { _, Fixed } from ".";

type Cont<A, R> = (f: (a: A) => R) => R
// type NumberCont<A> = (f: (a: A) => number) => number

export const numberContMonadInstance = <S>() => Monad<Cont<_, Fixed<S>>>({
  of: a => k => k(a),
  chain: (initialContinuationMonad, transformer) => {
    return innerNext => {
      return initialContinuationMonad(a => transformer(a)(innerNext))
    }
  }
});
