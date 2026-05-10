export type Success<T> = {
  success: true;
  value: T;
};

export type Failure<E> = {
  success: false;
  error: E;
};

export type Result<T, E = Error> = Success<T> | Failure<E>;

export const success = <T>(value: T): Success<T> => ({
  success: true,
  value,
});

export const failure = <E>(error: E): Failure<E> => ({
  success: false,
  error,
});
