import { _ } from '.';
import { Monad } from './static-land'

type Maybe<A> = { tag: 'none' } | { tag: 'some'; value: A };
const none: Maybe<never> = { tag: 'none' };
const some = <A>(value: A): Maybe<A> => ({ tag: 'some', value });

export const maybeMonadInstance = Monad<Maybe<_>>({
  of: some,
  chain: (maybe, f) => maybe.tag == 'none' ? none : f(maybe.value)
})
