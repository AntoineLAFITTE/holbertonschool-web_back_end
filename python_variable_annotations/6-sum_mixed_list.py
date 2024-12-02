#!/usr/bin/env python3
"""Type-annotated function, computes sum of a list of integers and floats."""

from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """
    Takes a list of integers and floats and returns their sum as a float.

    Parameters:
    mxd_lst: List[Union[int, float]] - A list containing integers and floats.

    Returns:
    float - The sum of all the integers and floats in the list.
    """
    return sum(mxd_lst)
