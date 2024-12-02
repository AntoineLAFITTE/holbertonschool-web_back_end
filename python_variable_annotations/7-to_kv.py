#!/usr/bin/env python3
"""Type-annotated function that returns
a tuple containing a string and the square of a number."""

from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Takes a string and a number (int or float) and returns a tuple.

    Parameters:
    k: str  a string.
    v: Union[int, float], An integer or float.

    Returns:
    Tuple[str, float] - A tuple where the first element is the string is 'k',
                        and the second element is the square of 'v' as a float
    """
    return (k, float(v ** 2))
