#!/usr/bin/env python3
"""Type-annotated function computes the length of elements in an iterable."""


from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    Takes an iterable of sequences and returns a list of tuples.

    Each tuple contains a sequence and its length.

    Parameters:
    lst: Iterable[Sequence] iterable containing sequences strings, lists,..;

    Returns:
    List[Tuple[Sequence, int]] list of tuples where each tuple has a sequence
    and its length.
    """
    return [(i, len(i)) for i in lst]
