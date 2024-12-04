#!/usr/bin/env python3
import asyncio
from typing import List

task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Does task_wait_random n times with the specified max_delay and returns
    the list of all delays in ascending order.

    Args:
        n (int): Number of coroutines to spawn.
        max_delay (int): Maximum delay for each coroutine.

    Returns:
        List[float]: List of delays in ascending order.
    """
    tasks = [task_wait_random(max_delay) for _ in range(n)]
    completed = []
    for task in asyncio.as_completed(tasks):
        result = await task
        completed.append(result)
    return completed
