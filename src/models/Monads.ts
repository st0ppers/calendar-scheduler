export interface Result<T> {
    value: T;
    error: Error | null;
    isFailure: boolean;
    isSuccess: boolean;
    tap: (fn: (value: T) => void) => Result<T>;
    tapError: (fn: (error: Error) => void) => Result<T>;
    bind: <U>(fn: (value: T) => Result<U>) => Result<U>;
    map: <U>(fn: (value: T) => U) => Result<U>;
    match: (onSuccess: (value: T) => T, onFailure: (error: Error) => Error) => T | Error;
}

export const success = <T>(value: T): Result<T> => ({
    value,
    error: null,
    isFailure: false,
    isSuccess: true,
    tap: (fn: (value: T) => void) => {
        if (value) {
            return failure(new Error("Value is empty"));
        }
        fn(value);
        return success(value);
    },
    tapError: () => success(value),
    bind: <U>(fn: (value: T) => Result<U>) => fn(value),
    map: <U>(fn: (value: T) => U) => success<U>(fn(value)),
    match: (onSuccess: (value: T) => T, onFailure: (error: Error) => Error) => onSuccess(value),
});

export const failure = <T>(error: Error): Result<T> => ({
    value: null as unknown as T,
    error,
    isFailure: true,
    isSuccess: false,
    tap: () => failure(error),
    tapError: (fn: (error: Error) => void) => {
        fn(error);
        return failure(error);
    },
    bind: () => failure(error),
    map: () => failure(error),
    match: (onSuccess: (value: T) => T, onFailure: (error: Error) => Error) => onFailure(error),
});
