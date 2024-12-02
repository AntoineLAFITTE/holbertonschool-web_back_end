#!/usr/bin/env python3
"""Type-annotated function that computes the sum of a list of floats."""

from typing import List

def sum_list(input_list: List[float]) -> float:
    """
    Takes a list of floats and returns their sum as a float.

    Parameters:
    input_list: List[float] ,A list of float numbers.

    Returns:
    float: sum of all the floats in the list.
    """
    return sum(input_list)
