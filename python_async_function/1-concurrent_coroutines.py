#!/usr/bin/env python3
"""concurrent coroutines"""
import asyncio
from typing import List

wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Does wait_random n times with the specified max_delay.

    Args:
        n (int): Number of coroutines to spawn.
        max_delay (int): Maximum delay for each coroutine.

    Returns:
        List[float]: List of delays in completed order.
    """
    tasks = [wait_random(max_delay) for _ in range(n)]
    completed = []
    for task in asyncio.as_completed(tasks):
        result = await task
        completed.append(result)
    return completed
