import { numberContMonadInstance } from './cont';

it('renders without crashing', () => {
  const i = numberContMonadInstance<number>();
  const ex1 =
    i.chain(
      next => next(10),
      (b: number) => i.of(b)
    )

  const actual = ex1(console.log)
  // expect(actual).toEqual(13)
})
