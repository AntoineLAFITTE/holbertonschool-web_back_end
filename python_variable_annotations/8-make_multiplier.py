#!/usr/bin/env python3
"""Type-annotated function that returns a function
to multiply a float by a given multiplier."""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Takes a float multiplier and returns a
    function that multiplies a float by the multiplier.

    Parameters:
    multiplier: float - The multiplier to be used in the returned function.

    Returns:
    Callable[[float], float]
    A function that takes a float and returns its product with the multiplier.
    """
    def multiplier_function(value: float) -> float:
        return value * multiplier

    return multiplier_function
